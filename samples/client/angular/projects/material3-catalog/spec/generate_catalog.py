import json
import re
import os
import glob
from typing import Dict, Any, Optional, List

# Paths
MATERIAL_WEB_REPO = '/Users/wrenj/a2ui/a2ui2/A2UI/samples/client/angular/node_modules/@material/web'
THEMING_MD_PATH = '/Users/wrenj/a2ui/a2ui2/A2UI/samples/client/angular/projects/material3-catalog/spec/all_theming.md'
OUTPUT_JSON_PATH = '/Users/wrenj/a2ui/a2ui2/A2UI/samples/client/angular/projects/material3-catalog/spec/material3_catalog_definition.json'

BLACKLIST = {
    "MdFilledField",
    "MdOutlinedField",
    "MdFocusRing",
    "MdItem",
    "MdElevation",
    "MdNavigationDrawerModal",
}

STANDARD_COMPONENTS = {
    "Text": {
      "type": "object",
      "additionalProperties": False,
      "properties": {
        "text": {
          "type": "object",
          "properties": {
            "literalString": { "type": "string" },
            "path": { "type": "string" }
          }
        },
        "usageHint": {
          "type": "string",
          "enum": ["h1", "h2", "h3", "h4", "h5", "caption", "body"]
        }
      },
      "required": ["text"]
    },
    "Image": {
      "type": "object",
      "additionalProperties": False,
      "properties": {
        "url": {
          "type": "object",
          "properties": {
            "literalString": { "type": "string" },
            "path": { "type": "string" }
          }
        },
        "fit": { "type": "string", "enum": ["contain", "cover", "fill", "none", "scale-down"] },
        "usageHint": { "type": "string", "enum": ["icon", "avatar", "smallFeature", "mediumFeature", "largeFeature", "header"] }
      },
      "required": ["url"]
    },
    "Video": {
      "type": "object",
      "additionalProperties": False,
      "properties": {
        "url": {
          "type": "object",
          "properties": {
            "literalString": { "type": "string" },
            "path": { "type": "string" }
          }
        }
      },
      "required": ["url"]
    },
    "AudioPlayer": {
      "type": "object",
      "additionalProperties": False,
      "properties": {
        "url": {
          "type": "object",
          "properties": {
            "literalString": { "type": "string" },
            "path": { "type": "string" }
          }
        },
        "description": {
          "type": "object",
          "properties": {
            "literalString": { "type": "string" },
            "path": { "type": "string" }
          }
        }
      },
      "required": ["url"]
    },
    "Row": {
      "type": "object",
      "additionalProperties": False,
      "properties": {
        "children": {
          "type": "object",
          "properties": {
            "explicitList": { "type": "array", "items": { "type": "string" } },
            "template": {
              "type": "object",
              "properties": {
                "componentId": { "type": "string" },
                "dataBinding": { "type": "string" }
              },
              "required": ["componentId", "dataBinding"]
            }
          }
        },
        "distribution": { "type": "string", "enum": ["center", "end", "spaceAround", "spaceBetween", "spaceEvenly", "start"] },
        "alignment": { "type": "string", "enum": ["start", "center", "end", "stretch"] }
      },
      "required": ["children"]
    },
    "Column": {
      "type": "object",
      "additionalProperties": False,
      "properties": {
        "children": {
          "type": "object",
          "properties": {
            "explicitList": { "type": "array", "items": { "type": "string" } },
            "template": {
              "type": "object",
              "properties": {
                "componentId": { "type": "string" },
                "dataBinding": { "type": "string" }
              },
              "required": ["componentId", "dataBinding"]
            }
          }
        },
        "distribution": { "type": "string", "enum": ["start", "center", "end", "spaceBetween", "spaceAround", "spaceEvenly"] },
        "alignment": { "type": "string", "enum": ["center", "end", "start", "stretch"] }
      },
      "required": ["children"]
    },
    "List": {
      "type": "object",
      "additionalProperties": False,
      "properties": {
        "children": {
          "type": "object",
          "properties": {
            "explicitList": { "type": "array", "items": { "type": "string" } },
            "template": {
              "type": "object",
              "properties": {
                "componentId": { "type": "string" },
                "dataBinding": { "type": "string" }
              },
              "required": ["componentId", "dataBinding"]
            }
          }
        },
        "direction": { "type": "string", "enum": ["vertical", "horizontal"] },
        "alignment": { "type": "string", "enum": ["start", "center", "end", "stretch"] }
      },
      "required": ["children"]
    }
}

class PropertyDef:
    def __init__(self, name: str, type_str: str, description: str = ""):
        self.name = name
        self.type_str = type_str
        self.description = description

    def __repr__(self):
        return f"PropertyDef(name={self.name}, type={self.type_str})"

class ClassDef:
    def __init__(self, name: str, parent: Optional[str] = None):
        self.name = name
        self.parent = parent
        self.properties: Dict[str, PropertyDef] = {}
        self.tag_name: Optional[str] = None

    def __repr__(self):
        return f"ClassDef(name={self.name}, parent={self.parent}, tag={self.tag_name}, props={len(self.properties)})"

def extract_jsdoc_description(content: str, start_index: int) -> str:
    """Extracts JSDoc comments immediately preceding the given property definition."""
    # Look backwards from start_index
    # We want to capture /** ... */ blocks
    # This is a simple heuristic: search backwards for '*/' then find '/**'
    
    # Limit lookback to avoid performance issues
    lookback = content[max(0, start_index - 500):start_index]
    
    match = re.search(r'/\*\*((?:(?!\*/).)*?)\*/\s*$', lookback, re.DOTALL)
    if match:
        desc = match.group(1)
        # Clean up lines
        cleaned = []
        for line in desc.split('\n'):
            line = line.strip()
            if line.startswith('*'):
                line = line[1:].strip()
            if line and not line.startswith('@'): # Ignore tags like @property
                cleaned.append(line)
        return ' '.join(cleaned).strip()
    return ""

def parse_ts_file(filepath: str) -> List[ClassDef]:
    with open(filepath, 'r') as f:
        content = f.read()

    classes = []
    
    # Regex to find class definitions: 
    # Handle 'export class', 'export abstract class', 'export declare class', 'export declare abstract class'
    class_matches = re.finditer(r'export\s+(?:declare\s+)?(?:abstract\s+)?class\s+(\w+)(?:\s+extends\s+([a-zA-Z0-9_\.]+))?', content)
    
    class_indices = []
    for m in class_matches:
        class_indices.append({
            'start': m.start(),
            'name': m.group(1),
            'parent': m.group(2),
            'obj': ClassDef(m.group(1), m.group(2))
        })
        
    if not class_indices:
        return []
        
    # Check for customElement decorators and global interface map (often in d.ts)
    # in d.ts: interface HTMLElementTagNameMap { 'md-icon': MdIcon; }
    # but we rely on @customElement usually? 
    # In d.ts, customElement decorators might be missing or commented out?
    # MdFilledButton d.ts does NOT show @customElement. It shows `export declare class ...`
    # BUT it has `interface HTMLElementTagNameMap { 'md-filled-button': MdFilledButton; }`
    # We should parse THAT map to get tag names in d.ts.
    
    # 1. CustomElement decorators (source files)
    ce_matches = re.finditer(r"@customElement\('([^']+)'\)", content)
    for m in ce_matches:
        tag = m.group(1)
        best_cls = None
        min_dist = 999999
        for c in class_indices:
            dist = c['start'] - m.end()
            if 0 < dist < min_dist: 
                min_dist = dist
                best_cls = c['obj']
        if best_cls:
            best_cls.tag_name = tag
            
    # 2. HTMLElementTagNameMap (d.ts files)
    # interface HTMLElementTagNameMap { 'md-filled-button': MdFilledButton; }
    tag_map_match = re.search(r'interface\s+HTMLElementTagNameMap\s*{([^}]+)}', content, re.DOTALL)
    if tag_map_match:
        block = tag_map_match.group(1)
        # Parse 'tag': ClassName;
        for map_m in re.finditer(r"'([^']+)':\s*(\w+)", block):
            tag = map_m.group(1)
            cls_name = map_m.group(2)
            # Find class with this name
            for c in class_indices:
                if c['name'] == cls_name:
                    c['obj'].tag_name = tag

    # Scan for properties
    
    # A. Decorators (Source files)
    # @property({type: Boolean}) disabled = false;
    prop_regex = re.compile(r'@property\s*\((.*?)\)\s*(?:readonly\s+)?([a-zA-Z0-9_]+)')
    
    for m in prop_regex.finditer(content):
        prop_args = m.group(1)
        prop_name = m.group(2)
        prop_desc = extract_jsdoc_description(content, m.start())
        prop_type = "string" 
        if "type: Boolean" in prop_args or "type:Boolean" in prop_args:
            prop_type = "boolean"
        elif "type: Number" in prop_args or "type:Number" in prop_args:
            prop_type = "number"
            
        best_cls = None
        max_start = -1
        for c in class_indices:
            if c['start'] < m.start():
                if c['start'] > max_start:
                    max_start = c['start']
                    best_cls = c['obj']
        
        if best_cls:
            best_cls.properties[prop_name] = PropertyDef(prop_name, prop_type, prop_desc)

    # B. D.TS properties
    # name: type;
    # Avoid functions: name(...): type;
    # Avoid static/private
    # Regex: ^\s*(?!(?:static|private|protected)\s)([a-zA-Z0-9_]+)(\?)?:\s*([^;]+);
    # matches line-based properties inside class.
    
    # Strategy: Iterate classes, assume d.ts structure is clean (properties follow class decl).
    # Since d.ts files usually have one class or few, we can limit scan to class body?
    # But class body parsing gave us trouble before.
    # Let's try global scan and assign to latest class.
    
    dts_prop_regex = re.compile(r'^\s*(?!(?:static|private|protected|readonly)\s)([a-zA-Z0-9_]+)(\?)?:\s*([^;]+);', re.MULTILINE)
    
    # Note: 'readonly' might be desired if it's a public field (e.g. formAssociated is static readonly). 
    # But often readonly in d.ts means getter-only or const. A2UI catalog typically wants writeable attributes.
    # Let's check Button: `disabled: boolean;` is NOT readonly. `form`: readonly.
    # So excluding 'readonly' is probably good for now.
    
    for m in dts_prop_regex.finditer(content):
        prop_name = m.group(1)
        prop_type_raw = m.group(3).strip()
        prop_desc = extract_jsdoc_description(content, m.start())
        
        # Heuristic for type
        prop_type = "string"
        if "boolean" in prop_type_raw:
            prop_type = "boolean"
        elif "number" in prop_type_raw:
            prop_type = "number"
            
        # Assign to best class
        best_cls = None
        max_start = -1
        for c in class_indices:
            if c['start'] < m.start():
                if c['start'] > max_start:
                    max_start = c['start']
                    best_cls = c['obj']
                    
        # Filter out methods if regex failed to exclude them (e.g. arrow functions?)
        # '=>' in type?
        if '=>' in prop_type_raw:
            continue
            
        if best_cls:
            # Don't overwrite if it exists (e.g. from @property)
            if prop_name not in best_cls.properties:
                best_cls.properties[prop_name] = PropertyDef(prop_name, prop_type, prop_desc)

    return [c['obj'] for c in class_indices]

def parse_with_tables(content):
    """Generic parser that yields table data blocks."""
    lines = content.split('\n')
    current_table = []
    
    for line in lines:
        if '|' in line:
            current_table.append(line)
        else:
            if current_table:
                # End of a potential table block
                # Verify it has a separator
                has_separator = any(re.search(r'-{3,}', l) for l in current_table)
                if has_separator:
                   yield parse_table_lines(current_table)
                current_table = []
                
    if current_table:
        has_separator = any(re.search(r'-{3,}', l) for l in current_table)
        if has_separator:
            yield parse_table_lines(current_table)

def parse_table_lines(lines):
    if not lines: return []
    lines = [l for l in lines if l.strip()]
    if len(lines) < 2: return []

    header_line = lines[0]
    separator_line = lines[1]
    
    if not re.search(r'-{3,}', separator_line):
        return []

    def split_row(row_line):
        row_line = row_line.strip()
        if row_line.startswith('|'): row_line = row_line[1:]
        if row_line.endswith('|'): row_line = row_line[:-1]
        return [c.strip() for c in row_line.split('|')]

    headers = split_row(header_line)
    data = []
    
    for line in lines[2:]:
        parts = split_row(line)
        row = {}
        for i, h in enumerate(headers):
            if i < len(parts):
                row[h] = parts[i]
        if row:
            data.append(row)
            
    return data

def parse_styles(filepath):
    """Reuse existing markdown parser for styles as it works well."""
    styles = {}
    with open(filepath, 'r') as f:
        content = f.read()
        
    tables = parse_with_tables(content)
    for table in tables:
        if not table: continue
        keys = table[0].keys()
        
        token_key = next((k for k in keys if 'Token' in k), None)
        
        if token_key:
            for row in table:
                # Look for token in all columns just in case
                for k, v in row.items():
                    val = v.replace('`', '').strip()
                    if val.startswith('--md-'):
                        styles[val] = {
                            "type": "string",
                            "description": f"Material Design Token: {val}"
                        }
    return styles

def main():
    print(f"Scanning {MATERIAL_WEB_REPO}...")
    
    all_classes: Dict[str, ClassDef] = {}
    
    # 1. Scan all TS files (including d.ts)
    files = glob.glob(f"{MATERIAL_WEB_REPO}/**/*.ts", recursive=True)
    # Also ensure we check d.ts specifically if they were missed (glob should catch them if **/*.ts catches .d.ts, which it does)
    
    for fpath in files:
        if "test" in fpath or "harness" in fpath: continue
        
        parsed_classes = parse_ts_file(fpath)
        for c in parsed_classes:
            all_classes[c.name] = c
            
    print(f"Found {len(all_classes)} classes.")
    
    # 2. Resolve Inheritance
    # Simple recursive property merge
    def get_all_properties(class_name: str, visited: set) -> Dict[str, PropertyDef]:
        if class_name in visited: return {}
        if class_name not in all_classes: 
            # Parent might be a Mixin or external class we didn't parse perfectly
            # Or mapped differently (e.g. Aliased imports).
            # We'll skip for now.
            return {}
            
        visited.add(class_name)
        cls = all_classes[class_name]
        
        props = {}
        # Parent props first
        if cls.parent:
            # Handle Mixins names? e.g. "mixinDelegatesAria(...)"
            # A bit complex. For now, try direct name match.
            props.update(get_all_properties(cls.parent, visited))
            
        # Own props override
        props.update(cls.properties)
        return props

    # 3. Build Catalog
    components_json = {}
    
    # Filter for only classes with tag_name (the actual components)
    component_classes = [c for c in all_classes.values() if c.tag_name and c.tag_name.startswith('md-')]
    
    # Filter out blacklisted components
    component_classes = [c for c in component_classes if c.name not in BLACKLIST]
    
    print(f"Found {len(component_classes)} valid Material components: {[c.tag_name for c in component_classes]}")

    for cls in component_classes:
        # Convert tag-name 'md-elevated-button' to ClassName-ish 'MdElevatedButton' for the key?
        # Actually the catalog uses 'MdElevatedButton' keys in the previous version.
        # Let's use the Class Name as the key, but we need to ensure it matches what A2UI expects?
        # A2UI catalog typically uses PascalCase keys. A2UI uses the Key as the Component Name.
        # Ensure 'MdIcon' is 'MdIcon'.
        
        # The class name in source is 'Icon' but exported as 'MdIcon' in alias often?
        # In `icon/icon.ts`: `export class MdIcon extends Icon`.
        # So we should use the class name directly if it starts with Md.
        # If it doesn't (e.g. 'Checkbox'), we might want to prepend Md?
        # Wait, `MdIcon` in `icon.ts` has NO properties in its body.
        # Inheritance resolution is critical here.
        # MdIcon extends Icon. Icon has the implementation.
        
        final_props = get_all_properties(cls.name, set())
        
        # Convert to JSON schema format
        props_json = {}
        for p_name, p_def in final_props.items():
            # Filter out internal or private-ish props if necessary (usually start with _)
            if p_name.startswith('_'): continue
            
            props_json[p_name] = {
                "type": p_def.type_str,
                "description": p_def.description
            }
            
        components_json[cls.name] = {
            "type": "object",
            "properties": props_json
        }

    # 4. Styles
    print("Parsing Styles...")
    styles = parse_styles(THEMING_MD_PATH)
    
    # 5. Output
    catalog = {
        "components": {**STANDARD_COMPONENTS, **components_json},
        "styles": styles
    }
    
    print(f"Writing to {OUTPUT_JSON_PATH}...")
    with open(OUTPUT_JSON_PATH, 'w') as f:
        json.dump(catalog, f, indent=2)
    print("Done.")

if __name__ == "__main__":
    main()

import json
import re
import os
import glob
from typing import Dict, Any, Optional, List

# Paths
BASE_DIR = '/Users/wrenj/a2ui/a2ui2/A2UI/samples/client/angular'
MATERIAL_WEB_REPO = os.path.join(BASE_DIR, 'node_modules/@material/web')
PROJECT_DIR = os.path.join(BASE_DIR, 'projects/material3-catalog')
SPEC_DIR = os.path.join(PROJECT_DIR, 'spec')
SRC_DIR = os.path.join(PROJECT_DIR, 'src')

THEMING_MD_PATH = os.path.join(SPEC_DIR, 'all_theming.md')
OUTPUT_JSON_PATH = os.path.join(SPEC_DIR, 'material3_catalog_definition.json')
CATALOG_DIR = os.path.join(SRC_DIR, 'a2ui-catalog')
CATALOG_TS_PATH = os.path.join(CATALOG_DIR, 'catalog.ts')
LIBRARY_JSON_PATH = os.path.join(SRC_DIR, 'app/features/library/components.json')

BLACKLIST = {
    "MdFilledField",
    "MdOutlinedField",
    "MdFocusRing",
    "MdItem",
    "MdElevation",
    "MdNavigationDrawerModal",
}

# Standard components - Metadata for Catalog Definition
STANDARD_COMPONENTS = {
    "Text": {
      "type": "object",
      "additionalProperties": False,
      "properties": {
        "text": { "type": "object", "properties": { "literalString": { "type": "string" }, "path": { "type": "string" } } },
        "usageHint": { "type": "string", "enum": ["h1", "h2", "h3", "h4", "h5", "caption", "body"] }
      },
      "required": ["text"]
    },
    "Image": {
      "type": "object",
      "additionalProperties": False,
      "properties": {
        "url": { "type": "object", "properties": { "literalString": { "type": "string" }, "path": { "type": "string" } } },
        "fit": { "type": "string", "enum": ["contain", "cover", "fill", "none", "scale-down"] },
        "usageHint": { "type": "string", "enum": ["icon", "avatar", "smallFeature", "mediumFeature", "largeFeature", "header"] }
      },
      "required": ["url"]
    },
    "Video": {
      "type": "object",
      "additionalProperties": False,
      "properties": {
        "url": { "type": "object", "properties": { "literalString": { "type": "string" }, "path": { "type": "string" } } }
      },
      "required": ["url"]
    },
    "AudioPlayer": {
        "type": "object",
        "additionalProperties": False,
        "properties": {
          "url": { "type": "object", "properties": { "literalString": { "type": "string" }, "path": { "type": "string" } } },
          "description": { "type": "object", "properties": { "literalString": { "type": "string" }, "path": { "type": "string" } } }
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
            "template": { "type": "object", "properties": { "componentId": { "type": "string" }, "dataBinding": { "type": "string" } }, "required": ["componentId", "dataBinding"] }
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
            "template": { "type": "object", "properties": { "componentId": { "type": "string" }, "dataBinding": { "type": "string" } }, "required": ["componentId", "dataBinding"] }
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
            "template": { "type": "object", "properties": { "componentId": { "type": "string" }, "dataBinding": { "type": "string" } }, "required": ["componentId", "dataBinding"] }
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
    def __init__(self, name: str, parent: Optional[str] = None, file_path: str = ""):
        self.name = name
        self.parent = parent
        self.file_path = file_path
        self.properties: Dict[str, PropertyDef] = {}
        self.tag_name: Optional[str] = None
        self.import_path: Optional[str] = None

    def __repr__(self):
        return f"ClassDef(name={self.name}, parent={self.parent}, tag={self.tag_name}, props={len(self.properties)})"

def to_kebab_case(name: str) -> str:
    s1 = re.sub('(.)([A-Z][a-z]+)', r'\1-\2', name)
    return re.sub('([a-z0-9])([A-Z])', r'\1-\2', s1).lower()

def extract_jsdoc_description(content: str, start_index: int) -> str:
    lookback = content[max(0, start_index - 500):start_index]
    match = re.search(r'/\*\*((?:(?!\*/).)*?)\*/\s*$', lookback, re.DOTALL)
    if match:
        desc = match.group(1)
        cleaned = []
        for line in desc.split('\n'):
            line = line.strip()
            if line.startswith('*'):
                line = line[1:].strip()
            if line and not line.startswith('@'):
                cleaned.append(line)
        return ' '.join(cleaned).strip()
    return ""

def parse_ts_file(filepath: str) -> List[ClassDef]:
    with open(filepath, 'r') as f:
        content = f.read()

    classes = []
    class_matches = re.finditer(r'export\s+(?:declare\s+)?(?:abstract\s+)?class\s+(\w+)(?:\s+extends\s+([a-zA-Z0-9_\.]+))?', content)
    
    class_indices = []
    for m in class_matches:
        class_indices.append({
            'start': m.start(),
            'name': m.group(1),
            'parent': m.group(2),
            'obj': ClassDef(m.group(1), m.group(2), filepath)
        })
        
    if not class_indices:
        return []
        
    # 1. CustomElement decorators
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
            
    # 2. HTMLElementTagNameMap (d.ts)
    tag_map_match = re.search(r'interface\s+HTMLElementTagNameMap\s*{([^}]+)}', content, re.DOTALL)
    if tag_map_match:
        block = tag_map_match.group(1)
        # Parse 'tag': ClassName;
        for map_m in re.finditer(r"'([^']+)':\s*(\w+)", block):
            tag = map_m.group(1)
            cls_name = map_m.group(2)
            for c in class_indices:
                if c['name'] == cls_name:
                    c['obj'].tag_name = tag

    # Scan for properties
    # A. Decorators (Source files)
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
    dts_prop_regex = re.compile(r'^\s*(?!(?:static|private|protected|readonly)\s)([a-zA-Z0-9_]+)(\?)?:\s*([^;]+);', re.MULTILINE)
    
    for m in dts_prop_regex.finditer(content):
        prop_name = m.group(1)
        prop_type_raw = m.group(3).strip()
        prop_desc = extract_jsdoc_description(content, m.start())
        
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
        
        # Skip methods
        if '=>' in prop_type_raw or '(' in prop_type_raw:
            continue
            
        if best_cls:
            if prop_name not in best_cls.properties:
                best_cls.properties[prop_name] = PropertyDef(prop_name, prop_type, prop_desc)

    return [c['obj'] for c in class_indices]

def parse_with_tables(content):
    lines = content.split('\n')
    current_table = []
    for line in lines:
        if '|' in line:
            current_table.append(line)
        else:
            if current_table:
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
    styles = {}
    if not os.path.exists(filepath):
        print(f"Warning: {filepath} not found.")
        return styles
        
    with open(filepath, 'r') as f:
        content = f.read()
        
    tables = parse_with_tables(content)
    for table in tables:
        if not table: continue
        keys = table[0].keys()
        token_key = next((k for k in keys if 'Token' in k), None)
        if token_key:
            for row in table:
                for k, v in row.items():
                    val = v.replace('`', '').strip()
                    if val.startswith('--md-'):
                        styles[val] = {
                            "type": "string",
                            "description": f"Material Design Token: {val}"
                        }
    return styles

def generate_implementation(cls: ClassDef, final_props: Dict[str, PropertyDef], output_dir: str):
    kebab_name = to_kebab_case(cls.name)
    if not kebab_name.startswith('md-'):
        kebab_name = f"md-{kebab_name}"
        
    filename = f"{kebab_name}.ts"
    filepath = os.path.join(output_dir, filename)
    
    rel_path = os.path.relpath(cls.file_path, MATERIAL_WEB_REPO)
    if rel_path.endswith('.d.ts'):
        rel_path = rel_path[:-5] + '.js'
    elif rel_path.endswith('.ts'):
        rel_path = rel_path[:-3] + '.js'
    import_path = f"@material/web/{rel_path}"
    
    input_defs = []
    computed_defs = []
    template_bindings = []
    
    for pname, pdef in final_props.items():
        if pname.startswith('_'): continue
        ts_type = pdef.type_str
        primitive_type = "StringValue"
        if ts_type == "boolean": primitive_type = "BooleanValue"
        elif ts_type == "number": primitive_type = "NumberValue"
        
        input_defs.append(f"  readonly {pname} = input<Primitives.{primitive_type} | {ts_type} | null>(null);")
        
        resolve_cast = f"v as Primitives.{primitive_type}"
        default_val = "''"
        if ts_type == "boolean": default_val = "false"
        elif ts_type == "number": default_val = "0"
        
        cap_name = pname[0].upper() + pname[1:]
            
        computed_defs.append(f"""  protected resolved{cap_name} = computed(() => {{
    const v = this.{pname}();
    return ((v && typeof v === 'object') ? this.resolvePrimitive({resolve_cast}) : (v as {ts_type})) ?? {default_val};
  }});""")
        
        template_bindings.append(f"[{pname}]=\"resolved{cap_name}()\"")

    binding_str = "\n        ".join(template_bindings)
    
    content = f"""import {{ Component, computed, input, ViewEncapsulation, CUSTOM_ELEMENTS_SCHEMA }} from '@angular/core';
import {{ CommonModule }} from '@angular/common';
import {{ DynamicComponent }} from '@a2ui/angular';
import {{ Primitives }} from '@a2ui/lit/0.8';
import '{import_path}';

@Component({{
  selector: 'catalog-{kebab_name}',
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <{cls.tag_name}
        {binding_str}>
      <ng-content></ng-content>
    </{cls.tag_name}>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None,
}})
export class {cls.name} extends DynamicComponent {{
{chr(10).join(input_defs)}

{chr(10).join(computed_defs)}
}}
"""
    with open(filepath, 'w') as f:
        f.write(content)
    return filename, kebab_name

def generate_catalog_ts(components: List[tuple], output_path: str):
    entries = []
    for cls_name, fname, props in components:
        base_name = os.path.splitext(fname)[0]
        bindings = []
        for pname in props.keys():
            if pname.startswith('_'): continue
            bindings.append(f"      inputBinding('{pname}', () => ('{pname}' in properties && properties['{pname}']) ?? undefined),")
        bindings_str = "\n".join(bindings)
        entry = f"""  {cls_name}: {{
    type: () => import('./{base_name}').then(c => c.{cls_name}),
    bindings: ({{ properties }}) => [
{bindings_str}
    ],
  }},"""
        entries.append(entry)

    content = f"""import {{ Catalog, DEFAULT_CATALOG }} from '@a2ui/angular';
import {{ inputBinding }} from '@angular/core';

export const MATERIAL3_CATALOG = {{
  ...DEFAULT_CATALOG,
{chr(10).join(entries)}
}} as Catalog;
"""
    with open(output_path, 'w') as f:
        f.write(content)

def generate_library_json(components: List[tuple], output_path: str):
    # This generates the JSON file for the demo library
    blocks = []

    # Standard Components
    standard_blocks = [
        {
            "name": "Card",
            "tag": "Layout",
            "type": "Card",
            "properties": {
                "child": { "id": "card-text", "type": "Text", "properties": { "text": { "literalString": "Content inside a card" } } }
            }
        },
        {
            "name": "Column",
            "tag": "Layout",
            "type": "Column",
            "properties": {
                "alignment": "center",
                "children": {
                    "explicitList": ["col-1", "col-2"]
                }
            },
            "children_definitions": [
                { "id": "col-1", "type": "Text", "properties": { "text": { "literalString": "Item 1" } } },
                { "id": "col-2", "type": "Text", "properties": { "text": { "literalString": "Item 2" } } }
            ]
        },
        {
            "name": "Row",
            "tag": "Layout",
            "type": "Row",
            "properties": {
                "alignment": "center",
                "distribution": "space-around",
                "children": {
                    "explicitList": ["row-1", "row-2"]
                }
            },
            "children_definitions": [
                { "id": "row-1", "type": "Text", "properties": { "text": { "literalString": "Left" } } },
                { "id": "row-2", "type": "Text", "properties": { "text": { "literalString": "Right" } } }
            ]
        },
        {
             "name": "Text",
             "tag": "Layout",
             "type": "Text",
             "properties": { "text": { "literalString": "Standard Text" } }
        },
        {
            "name": "Divider",
            "tag": "Layout",
            "type": "Column",
            "properties": { "children": { "explicitList": ["div-1", "div-2", "div-3"] } },
            "children_definitions": [
                { "id": "div-1", "type": "Text", "properties": { "text": { "literalString": "Above" } } },
                { "id": "div-2", "type": "Divider", "properties": {} },
                { "id": "div-3", "type": "Text", "properties": { "text": { "literalString": "Below" } } }
            ]
        },
        # Adding a few more standard demos to match previous coverage
        {
            "name": "Image",
            "tag": "Media",
            "type": "Image",
            "properties": { "url": { "literalString": "https://picsum.photos/id/10/300/200" } }
        },
        {
             "name": "Button",
             "tag": "Inputs",
             "type": "Button",
             "properties": {
                 "label": { "literalString": "Click Me" },
                 "action": { "type": "click" },
                 "child": { "id": "btn-text", "type": "Text", "properties": { "text": { "literalString": "Click Me" } } }
             }
        }
    ]
    
    blocks.extend(standard_blocks)
    
    # Material Components
    for cls_name, _, props in components:
        demo_props = {}
        for pname, pdef in props.items():
            if pname.startswith('_'): continue
            if "label" in pname.lower():
                demo_props[pname] = {"literalString": cls_name}
            elif pdef.type_str == "boolean":
                demo_props[pname] = {"literalBoolean": False}
            elif pdef.type_str == "number":
                demo_props[pname] = {"literalNumber": 0}
            elif pdef.type_str == "string":
                 demo_props[pname] = {"literalString": "value"}

        blocks.append({
            "name": cls_name,
            "tag": "Material",
            "type": cls_name,
            "properties": demo_props
        })

    with open(output_path, 'w') as f:
        json.dump(blocks, f, indent=2)

def main():
    if not os.path.exists(CATALOG_DIR):
        os.makedirs(CATALOG_DIR)

    print(f"Scanning {MATERIAL_WEB_REPO}...")
    all_classes: Dict[str, ClassDef] = {}
    files = glob.glob(f"{MATERIAL_WEB_REPO}/**/*.ts", recursive=True)
    
    for fpath in files:
        if "test" in fpath or "harness" in fpath: continue
        parsed_classes = parse_ts_file(fpath)
        for c in parsed_classes:
            all_classes[c.name] = c

    print(f"Found {len(all_classes)} classes.")

    def get_all_properties(class_name: str, visited: set) -> Dict[str, PropertyDef]:
        if class_name in visited: return {}
        if class_name not in all_classes: return {}
        visited.add(class_name)
        cls = all_classes[class_name]
        props = {}
        if cls.parent:
            props.update(get_all_properties(cls.parent, visited))
        props.update(cls.properties)
        return props

    component_classes = [c for c in all_classes.values() if c.tag_name and c.tag_name.startswith('md-')]
    component_classes = [c for c in component_classes if c.name not in BLACKLIST]

    components_json = {}
    valid_components_for_implementation = []

    print(f"Processing {len(component_classes)} valid Material components...")

    for cls in component_classes:
        final_props = get_all_properties(cls.name, set())
        
        # JSON Schema
        props_json = {}
        for p_name, p_def in final_props.items():
            if p_name.startswith('_'): continue
            props_json[p_name] = {
                "type": p_def.type_str,
                "description": p_def.description
            }
            
        components_json[cls.name] = {
            "type": "object",
            "properties": props_json
        }
        
        # Generate Implementation
        filename, kebab = generate_implementation(cls, final_props, CATALOG_DIR)
        valid_components_for_implementation.append((cls.name, filename, final_props))

    print("Generating catalog.ts...")
    generate_catalog_ts(valid_components_for_implementation, CATALOG_TS_PATH)
    
    print("Generating components.json...")
    generate_library_json(valid_components_for_implementation, LIBRARY_JSON_PATH)

    print("Parsing Styles...")
    styles = parse_styles(THEMING_MD_PATH)
    
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

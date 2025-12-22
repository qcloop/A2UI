import sys
import os

# Add the current directory to sys.path
sys.path.append(os.path.dirname(os.path.abspath(__file__)))

from generate_catalog import extract_jsdoc_description

def test():
    # Simulated content causing the bug
    fake_content = """
    /**
     * Flips the icon if it is in an RTL context at startup.
     */
    flipIconInRtl = false;

    /**
     * Sets the underlying `HTMLAnchorElement`'s `href` resource attribute.
     */
    href = '';
    """
    
    # We want to extract for 'href'. 
    # start_index should be where 'href' starts.
    start_index = fake_content.find("href = '';")
    
    print(f"Testing real extraction at index {start_index}...")
    
    extracted = extract_jsdoc_description(fake_content, start_index)
    print(f"Extracted:\n{extracted!r}")
    
    if "Flips the icon" in extracted:
        print("FAIL: Still seeing previous comment!")
        sys.exit(1)
    
    if "Sets the underlying" in extracted and "HTMLAnchorElement" in extracted:
        print("SUCCESS: Correctly extracted only the immediate comment.")
    else:
        print("FAIL: Did not extract the expected comment.")
        sys.exit(1)

if __name__ == "__main__":
    test()

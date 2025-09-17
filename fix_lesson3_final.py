#!/usr/bin/env python3
import re

# Read the file
with open('/Users/asivera/python-lesson-interactive/lessons/lesson3.js', 'r') as f:
    content = f.read()

# Find all onclick handlers and fix them properly
def fix_onclick_handler(match):
    # Extract the JavaScript code from inside the onclick
    js_code = match.group(1)
    
    # Remove quotes and extract the Python code string
    python_code = js_code[js_code.find("'") + 1:js_code.rfind("'")]
    
    # Properly escape the Python code for JavaScript
    escaped_code = python_code.replace('\\', '\\\\')  # Escape backslashes
    escaped_code = escaped_code.replace("'", "\\'")   # Escape single quotes  
    escaped_code = escaped_code.replace('\n', '\\n')  # Escape newlines
    
    # Return the fixed onclick handler
    return f'onclick="loadCodeIntoConsole(\'{escaped_code}\')"'

# Pattern to match onclick handlers containing loadCodeIntoConsole
pattern = r'onclick="(loadCodeIntoConsole\([^"]*\))"'

# Replace all occurrences
content = re.sub(pattern, fix_onclick_handler, content, flags=re.DOTALL)

# Write back
with open('/Users/asivera/python-lesson-interactive/lessons/lesson3.js', 'w') as f:
    f.write(content)

print("✅ Fixed all onclick handlers in lesson3.js")
print("🔍 All newlines and quotes are now properly escaped")
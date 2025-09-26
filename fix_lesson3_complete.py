#!/usr/bin/env python3
import re

# Read the file
with open('/Users/asivera/python-lesson-interactive/lessons/lesson3.js', 'r') as f:
    content = f.read()

# Find all onclick handlers and fix them properly
def fix_onclick_complete(match):
    onclick_content = match.group(1)
    print(f"Fixing: {onclick_content[:50]}...")
    
    # Escape single quotes and newlines properly
    fixed_content = onclick_content.replace('\\', '\\\\')  # Escape backslashes first
    fixed_content = fixed_content.replace("'", "\\'")      # Escape single quotes
    fixed_content = fixed_content.replace('\n', '\\n')     # Escape newlines
    
    return f'onclick="loadCodeIntoConsole(\'{fixed_content}\')"'

# Fix all onclick handlers
original_content = content
content = re.sub(r'onclick="loadCodeIntoConsole\(\'([^\']*(?:\\.[^\']*)*)\'\)"', fix_onclick_complete, content, flags=re.DOTALL)

if content != original_content:
    # Write back
    with open('/Users/asivera/python-lesson-interactive/lessons/lesson3.js', 'w') as f:
        f.write(content)
    print("✅ Fixed all onclick handlers in lesson3.js")
else:
    print("⚠️ No changes made - content was already correct")
#!/usr/bin/env python3
import re

# Read the file
with open('/Users/asivera/python-lesson-interactive/lessons/lesson3.js', 'r') as f:
    content = f.read()

# Pattern to find onclick handlers with literal newlines
def fix_onclick(match):
    onclick_content = match.group(1)
    # Replace literal newlines with escaped newlines
    fixed_content = onclick_content.replace('\n', '\\n')
    return f'onclick="loadCodeIntoConsole(\'{fixed_content}\')"'

# Fix all onclick handlers
content = re.sub(r'onclick="loadCodeIntoConsole\(\'([^\']*(?:\\.[^\']*)*)\'\)"', fix_onclick, content, flags=re.DOTALL)

# Write back
with open('/Users/asivera/python-lesson-interactive/lessons/lesson3.js', 'w') as f:
    f.write(content)

print("Fixed all newlines in lesson3.js")
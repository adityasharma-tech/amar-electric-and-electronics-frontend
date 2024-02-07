import re

def convert_html_style_to_jsx(html):
    # Define the regular expression pattern to match style attribute
    pattern = r'style="([^"]*)"'

    # Define a function to replace semicolons with commas and add quotation marks
    def replace_style(match):
        style = match.group(1)
        style = style.replace(':', '": "').replace(';', '", "')
        return 'style={{' + style + '"}}'

    # Use re.sub to perform the replacement
    jsx = re.sub(pattern, replace_style, html)
    return jsx

with open("test.html", "r+") as f:
    html = f.read()
    jsx = convert_html_style_to_jsx(html)

with open("new.html", "w") as f:
    f.write(jsx)
import re

def convert_html_style_to_jsx(html):
    # Define the regular expression pattern to match style attribute
    pattern = r'style="([^"]*)"'

    # Define a function to replace semicolons with commas and add quotation marks
    def replace_style(match):
        style = match.group(1)
        style = style.replace(':', ':"').replace(';', '",')
        style = re.sub(r'-(\w)', lambda x: '' + x.group(1).upper(), style)
        return 'style={{' + style + '}}'

    # Use re.sub to perform the replacement
    jsx = re.sub(pattern, replace_style, html)
    return jsx

def convert_self_closing_tags(html):
    # Define the regular expression pattern to match self-closing tags
    pattern = r'<(img|input...)([^>]*)>'
    # pattern = r'<img.*>'

    print(re.findall(pattern, html))

    # Use re.sub to perform the replacement
    jsx = re.sub(pattern, r'<\1\2/>', html)
    return jsx


with open("test.html", "r+") as f:
    html = f.read()
    jsx = convert_html_style_to_jsx(html)
    jsx = convert_self_closing_tags(jsx)

with open("new.html", "w") as f:
    f.write(jsx)

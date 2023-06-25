#!C:\Users\perig\AppData\Local\Programs\Python\Python311\python.exe
# echo.py

import cgi

print("Content-Type: text/html")    # Generates HTTP header
print()                             # Blank line to separate header from content

print('<!DOCTYPE HTML>')
print('<html lang="en">')
print('<html>')
print('<title>Web Server Response</title>')
print('<style>tr, th, td {border: 2px solid Gray;}')
print('body {background-color: BlanchedAlmond;}</style>')
print('<table style="width:500px">')
print('<tr><th>Key</th><th>Value</th></tr>')

form = cgi.FieldStorage()

for i in form.keys( ):
  key = str( i )
  val = str( form.getvalue( key ) )
  print( '<tr><td>' + key + '</td>' + '<td>' + val + '</td></tr>' )
  
print('</table>')    
print('''<img src=\"http://big-mike-edahow.github.io/images/Apache-Server.jpg\"
         width=\"160px\" height=\"120px\">''')
print('</html>')

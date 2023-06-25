#!C:\Users\perig\AppData\Local\Programs\Python\Python311\python.exe
# echo.py

print("Content-Type: text/html")    # Generates HTTP header
print()                             # Blank line to separate header from content

import cgi

form = cgi.FieldStorage( )

print('<!DOCTYPE HTML>')
print('<html>')
print('<title>Web Server Response</title>')
print('<style>tr,th,td{border:2px solid Gray})</style>')
print( '<table style="width:500px"><tr><th>Key<th>Value' )

for i in form.keys( ):
  key = str( i )
  val = str( form.getvalue( key ) )
  print( '<tr><td>' + key + '<td>' + val )
  
print('</tr>')
print('</table>')    
print ('<img src=\"https://big-mike-edahow.github.io/images/Apache-Server.jpg\" width=\"160px\" height=\"120px\">')
print('</html>')

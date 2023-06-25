#!C:\Users\perig\AppData\Local\Programs\Python\Python311\python.exe
# upload.py

import cgi, os
import cgitb; cgitb.enable()
form = cgi.FieldStorage()

fileitem = form['Upload']
fn=''

if fileitem.filename:
  fn = os.path.basename(fileitem.filename)
  open( fn, 'wb').write( fileitem.file.read() )
  msg = 'Upload Success'
else:
  msg = 'Upload Failure'

print("Content-Type: text/html")    #generates HTTP header
print()                             #blank line to separate header from content

print('<!DOCTYPE HTML>')
print('<html>')
print('<meta charset=\"UTF-8\">')
print('<html>')
print('<title>Web Server Response</title>')
print('<style>tr,th,td{border:2px solid Gray}</style>')
print('<table style="width:500px">')
print('<tr><th>File</th><th>Status</th></tr>')
print('<tr><td>' + fn + '</td><td>' + msg + '</td></tr>')
print('</table>')
print('''<img src=\"https://big-mike-edahow.github.io/images/Apache-Server.jpg\"
         width=\"160px" height="120px">''')
print('</html>')

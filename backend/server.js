var http = require('http');
var formidable = require('formidable');
var fs = require('fs');
const mv = require('mv');

http.createServer(function (req, res) {
  if (req.url == '/fileupload') {   //file upload url
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
      // console.log(req); //FIXME
      var oldpath = files.filetoupload.path;
      var newpath = './uploads/' + files.filetoupload.name;

      mv(oldpath, newpath, function (err) {
        if (err) {
            console.log('> FileServer.jsx | route: "/files/upload" | err:', err);
            throw err;
        }
        res.write('File uploaded and moved!');
        res.end();
    });

 });
  } else {  //file upload form
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
    res.write('<input type="file" name="filetoupload"><br>');
    res.write('<input type="submit">');
    res.write('</form>');
    return res.end();
  }
}).listen(8080);
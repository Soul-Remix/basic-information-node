const http = require('http');
const fs = require('fs');

const port = process.env.PORT || 8080;

const filePath = './pages/';

const server = http.createServer((req, res) => {
  let file;
  switch (req.url) {
    case '/':
      file = filePath + 'index.html';
      res.statusCode = 200;
      break;
    case '/about':
      file = filePath + 'about.html';
      res.statusCode = 200;
      break;
    case '/contact':
      file = filePath + 'contact-me.html';
      res.statusCode = 200;
      break;
    default:
      file = filePath + '404.html';
      res.statusCode = 404;
  }

  fs.readFile(file, (err, data) => {
    if (err) {
      console.log(err);
      res.end('err');
    }
    res.setHeader('content-type', 'text/html');
    res.end(data);
  });
});

server.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

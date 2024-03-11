const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  const pathName = req.url;
  const indexPath = path.join(__dirname, '..', 'index.html');
  const template1Path = path.join(
    __dirname,
    '..',
    'templates',
    'template-1-stage.html'
  );
  const template2Path = path.join(
    __dirname,
    '..',
    'templates',
    'template-2-stage.html'
  );
  const template3Path = path.join(
    __dirname,
    '..',
    'templates',
    'template-3-stage.html'
  );
  const template4Path = path.join(
    __dirname,
    '..',
    'templates',
    'template-4-stage.html'
  );
  const template5Path = path.join(
    __dirname,
    '..',
    'templates',
    'template-thanks.html'
  );

  const replaceTemplate = (temp, script, side, idPlaceholder) => {
    let output = temp.replace(/{%SCRIPT%}/g, script);
    output = output.replace(/{%FORM%}/g, side);
    output = output.replace(`{%NUMBER${idPlaceholder}%}`, 'active-number');
    return output;
  };
  const indexHtml = fs.readFileSync(indexPath, 'utf-8');
  const template1 = fs.readFileSync(template1Path, 'utf-8');
  const template2 = fs.readFileSync(template2Path, 'utf-8');
  const template3 = fs.readFileSync(template3Path, 'utf-8');
  const template4 = fs.readFileSync(template4Path, 'utf-8');
  const template5 = fs.readFileSync(template5Path, 'utf-8');

  if (pathName === '/') {
    const replacedHtml = replaceTemplate(
      indexHtml,
      'src/client/form-1.js',
      template1,
      1
    );
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(replacedHtml);
  } else if (pathName === '/form2') {
    const replacedHtml = replaceTemplate(
      indexHtml,
      'src/client/form-2.js',
      template2,
      2
    );
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(replacedHtml);
  } else if (pathName === '/form3') {
    const replacedHtml = replaceTemplate(
      indexHtml,
      'src/client/form-3.js',
      template3,
      3
    );
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(replacedHtml);
  } else if (pathName === '/form4') {
    const replacedHtml = replaceTemplate(
      indexHtml,
      'src/client/form-4.js',
      template4,
      4
    );
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(replacedHtml);
  } else if (pathName === '/thanks') {
    const replacedHtml = replaceTemplate(
      indexHtml,
      'src/client/form-4.js',
      template5,
      4
    );
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(replacedHtml);
  }
  ////for downloading correct css,js,assets
  else if (
    pathName.startsWith('/css') ||
    pathName.startsWith('/src') ||
    pathName.startsWith('/assets')
  ) {
    const filePath = path.join(__dirname, '..', pathName);
    const fileContent = fs.readFileSync(filePath, 'utf-8');

    const contentType = pathName.endsWith('.css')
      ? 'text/css'
      : pathName.endsWith('.js')
      ? 'application/javascript'
      : pathName.endsWith('.svg')
      ? 'image/svg+xml'
      : 'text/plain';

    res.writeHead(200, { 'Content-Type': contentType });
    res.end(fileContent);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end('<h1>Page not found</h1>');
  }
});

server.listen(8080, '127.0.0.1', () => {
  console.log('Server is running on port 8080');
});

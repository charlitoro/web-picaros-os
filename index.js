const express = require('express');
// Middlewares
const morgan = require('morgan');

const app = express();

// Settings
app.set('appName', 'My first server');
app.use(express.static(__dirname + '/src/static')); // Statics files css, img,  js
app.set('views', __dirname + '/src/templates'); // templates
app.set('view engine', 'ejs');

app.use(morgan('dev'));

// routes
app.get('/', (req, res) => {
  res.render('index.ejs');
});

app.get('/install', (req, res) => {
  res.render('install.ejs')
});

app.get('/contactus', (req, res) => {
  res.render('contactus.ejs')
});

app.get('*', (req, res ) => {
  res.end('Pagina no encontrada')
});

app.listen(3000, () =>{
  console.log('server on port 3000');
});

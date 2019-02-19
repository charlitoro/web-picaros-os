const express = require('express');
// Middlewares
const morgan = require('morgan');
const bodyParser = require('body-parser')

const app = express();
const nodemailer = require('nodemailer');
const urlencodedParser = bodyParser.urlencoded({ extended: false})

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'carlostoro04@gmail.com',
    pass: 'charli_toro12'
  }
});

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

app.post('/contactus', urlencodedParser, (req, res) => {
  const data = {
    username: req.body.username,
    email: req.body.email,
    mensaje: req.body.mensaje,
  }

  const mailOptions = {
    from: 'carlostoro04@gmail.com',
    to: 'carlostoro04@gmail.com',
    subject: 'Contacto Minino PicarOS',
    html: `<h3> Email de contacto de Minino PicarOS </h3>
            <p> Email enviado por: ${data.username}</p>
            <p> Correo Electronico: ${data.email}</p>
            <p> --------------------------------------------------------------------</p>
            <h2>Mensaje enviado</h2>
            <p> ${data.mensaje} </p>`,
  };
  console.log(data)
  transporter.sendMail(mailOptions, (err, info) => {
    if (err){
      console.log(err)
    } else {
      console.log(info)
    }
  })
   res.render('contactus.ejs')
})

app.listen(5500, () =>{
  console.log('server on port 5500');
});

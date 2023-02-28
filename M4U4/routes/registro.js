var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('registro', { title: 'Registrate' });
});

module.exports = router;

var nodemailer = require('nodemailer');
router.post('/', async (req, res, next) => 
{

  console.log(req.body)

  var nombre = req.body.nombre;
  var apellido = req.body.apellido;
  var email = req.body.email;
  var telefono = req.body.tel;
  var mensaje = req.body.mensaje;

  var obj = {
    to: 'allende0159@gmail.com',
    subject: 'CONTACTO WEB',
    html : nombre + " " + apellido + " se contacto a traves y quiere mas info a este correo : " + email + ". <br> Además, realizó el siguiente comentario: " + mensaje + ".<br> Su telefono es: " + telefono

  }

  var transport = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS

    }
  });

  var info = await transport.sendMail(obj);

  res.render('confirm',);

});
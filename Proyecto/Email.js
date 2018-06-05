    var express = require('express'),
    path = require('path'),
    nodeMailer = require('nodemailer'),
    bodyParser = require('body-parser');

    var app = express();
    app.set('view engine', 'ejs');
    app.use(express.static('public'));
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
    var port = 8080;

    app.get('/', function (req, res) {
      res.render('Appointment_Form');
    });

    app.post('/send-email', function (req, res) {
      let transporter = nodeMailer.createTransport({
          host: 'smtp.gmail.com',
          port: 465,
          secure: true,
          auth: {
              user: 'denticproyecto@gmail.com',
              pass: 'dentic123'
          },
      });

      const output = `
        <h1> Cita <h1>
        <h3> Detalles cita </h3>
        <ul>
          <li>Name: ${req.body.name} </li>
          <li>Last Name: ${req.body.lastname} </li>
          <li>Email: ${req.body.email} </li>
          <li>Phone: ${req.body.phone} </li>
          <li>Date: ${req.body.date} </li>
          <li>TIme: ${req.body.time} </li>
          <li>Opc1: ${req.body.cb1} </li>
          <li>Opc2: ${req.body.cb2} </li>
          <li>Opc3: ${req.body.cb3} </li>
        </ul>
        `;

      let mailOptions = {
          from: '"Dentic" <denticproyecto@gmail.com>', // sender address
          to: 'denticproyecto@gmail.com', // list of receivers
          subject: `Nuevo cita: ${req.body.email}`, // Subject line
          text: 'Hello :3', // plain text body
          html: output // html body
      };


      const PORT = process.env.PORT || 8080

      transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
              return console.log(error);
          }
          console.log('Message %s sent: %s', info.messageId, info.response);
              res.render('Appointment_Form');
          });
      });
          app.listen(PORT, function(){
            console.log('Server is running at port: ',PORT);
          });

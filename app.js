//run with 'npm run server'
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require("cors");
const bodyParser = require("body-parser");
const router = express.Router();
const connectDB = require("./config/db");

const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

var app = express();
connectDB();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use("/guests", require("./routes/guests"));
app.use("/users", require("./routes/users"));


if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.post('/emailSender', function(req, res) {
  console.log(req.body);
  
  let name = req.body.name;
  let email = req.body.email;
  let message = req.body.message;

  if (email && email !== "" && name && name !== "") {
     const msg = {
       to: "isabelle.romhagen@gmail.com",
       from: "isabelle.romhagen@gmail.com",
       subject: "Ny anmälan",
       text: `${name} kommer! \nEpost: ${email} \nSpecialkost och allergier: ${message}.`,
       html: `${name} kommer! \nEpost: ${email} \nSpecialkost och allergier: ${message}.`,
     };
     sgMail
       .send(msg)
       .then(() => {
         console.log("Email sent, success!!");
       })
       .catch((error) => {
         console.error(error);
       });

     res.send("Emailu sentu!" + name + " " + email);
   } else {
     res.status(400).send("Email  and name is mandatory dumbass!");
   }

});


app.post('/performance', function(req, res) {
  console.log(req.body);
  let name = req.body.name;
  let email = req.body.email;
  let type = req.body.typeOfPerformance;
  let time = req.body.estimatedTime;
  let equipment = req.body.equipment;


  if (email && email !== "" && name && name !== "" && type) {
     const msg = {
       to: "isabelle.romhagen@gmail.com",
       from: "isabelle.romhagen@gmail.com",
       subject: "Ny anmälan programpunkt",
       text: `${name} vill göra ett framträdande! \nEpost: ${email} \nTyp av framträdande: ${type}\nBeräknad tid: ${time}\nUtrustning: ${equipment}`,
       html: `${name} vill göra ett framträdande! \nEpost: ${email} \nTyp av framträdande: ${type}\nBeräknad tid: ${time}\nUtrustning: ${equipment}`,
     };
     sgMail
       .send(msg)
       .then(() => {
       })
       .catch((error) => {
         console.error(error);
       });

     res.send("Email sent!" + name + " " + email);
   }
});

app.post('/padel', function(req, res) {
  console.log(req.body);
  let name = req.body.name;
  let email = req.body.email;

  if (email && email !== "" && name && name !== "") {
    const msg = {
      to: "isabelle.romhagen@gmail.com",
      from: "isabelle.romhagen@gmail.com",
      subject: "Ny anmälan padelturnering",
      text: `${name} har anmält sig till padelturneringen! \nEpost: ${email}`,
      html: `${name} har anmält sig till padelturneringen!  \nEpost: ${email}`,
    };
    sgMail
      .send(msg)
      .then(() => {
      })
      .catch((error) => {
        console.log(error);
      });
      res.send("Email sent!" + name + " " + email);
  }
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

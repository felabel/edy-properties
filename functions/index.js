const functions = require("firebase-functions");
const nodemailer = require('nodemailer');

//when this cloud function is already deployed, change the origin to 'https://your-deployed-app-url
const cors = require('cors')({ origin: true });

//create and config transporter
let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // true for 465, false for other ports
    requireTLC:true,
    auth: {
      user: 'felicityabel2016@gmail.com',
      pass: `rjylkfgezaxhqbjc`,
    },
  });

  exports.sendEmail = functions.https.onRequest((req, res) => {
    console.log('hello there')
    console.log(
        'from sendEmail function. The request object is:',
        JSON.stringify(req.body)
    )

     //enable CORS using the `cors` express middleware.
  cors(req, res, () => {
    //get contact form data from the req and then assigned it to variables
    const email = req.body.data.email;
    const name = req.body.data.name;
    const phoneNumber = req.body.data.phoneNumber;
    const message = req.body.data.message;

    //config the email message
    const mailOptions = {
      from: email,
      to: [
        'godfredakpan@gmail.com',
        'felicityabel99@gmail.com'
      ],
      subject: 'message from edy-nek',
      text: `${name} says: ${message} ${phoneNumber}`,
      replyTo : email,
    //   Html : this.text
    };

    //call the built in `sendMail` function and return different responses upon success and failure
    return transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return res.status(500).send({
          data: {
            status: 500,
            message: error.toString(),
          },
        });
      } else

      return res.status(200).send({
        data: {
          status: 200,
          message: 'sent',
        },
      });
    });
  });

  })

   
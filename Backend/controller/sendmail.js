

// send mail using node mailer

const sendgrid = require('@sendgrid/mail');


require('dotenv').config();
console.log(process.env.SENDGRID_API_KEY);
sendgrid.setApiKey(process.env.SENDGRID_API_KEY);
console.log(process.env.SENDGRID_API_KEY);


const sendEmail= async(email)=>{
    try {
        await sendgrid.send({
            to:email,
            //sendGrid sender id 
            from: 'kapilvermajaika@gmail.com',
            subject: 'Send e-dashboard OTP...?',
            text: 'Glad you are here .. yes you!',
            html:'<strong>It is working!!</strong>',


        });

        console.log('Test email sent successfully to '+email);
    } catch (error) {
        // console.log("err",e);
        // res.send('errror');
        console.error('Error sending test email');
        console.error(error);
        if (error.response) {
          console.error(error.response.body)
        }
    }
};

module.exports = sendEmail;










// //-------------send mail using node mailer


// const nodemailer = require('nodemailer');

// const sendMail = async (req, res) => {

//     let testAccount = await nodemailer.createTestAccount();

//     let transporter = await nodemailer.createTransport({

//         host: "smtp.ethereal.email",
//         port: 465,
//         auth: {
//             user: "jaunita87@ethereal.email",
//             pass: "mjeVmhud6b3SF3BfWJ"
//         }
//     });
//     let sendEmail = await transporter.sendMail({

//         to: email,  // jisko send krna hai
//         //node mailer 
//         from: 'kapilvermajaika@gmail.com',
//         subject: 'Send e-dashboard OTP...?',
//         text: 'Glad you are here .. yes you!',
//         html: '<strong>It is working!!</strong>',

//     })

//     console.log('message send-----  from node mailer-------',sendEmail.messageId);
//     res.send(sendEmail)
//     res.send('im sending')
// }
// module.exports = sendMail;
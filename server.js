const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

app.post('/send-feedback', (req, res) => {
    const { name, email, message } = req.body;

    // Configure your email transport using nodemailer
    let transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'tessvaas@gmail.com', // Replace with your email
            pass: 'saaV88sseT22'   // Replace with your email password
        }
    });

    let mailOptions = {
        from: email,
        to: 'com', // Replace with your email address
        subject: `New Feedback from ${name}`,
        text: message
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send('Error: ' + error.message);
        }
        res.send('Feedback sent successfully.');
    });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

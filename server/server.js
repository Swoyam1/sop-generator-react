const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config(); // Load environment variables from .env

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.post("/api/submit-form", (req, res) => {
  const formData = req.body;
  //console.log(formData.fullName);
  res.status(200).send("Received Data successfully...");
  // Configure nodemailer to send emails
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: formData.email,
    subject: "Statement of Purpose",
    text: `Dear ${formData.fullName},

    Please find attched the Statement of Purpose template for your student
    visa application to Canada. Kindly edit it as per your scenario and
    needs.
    
    In case you would like to get the full statement of purpose drafted by
    our experts, do not hesitate to contact us.
    
    Here is the doc file in case you would like to edit it:
    https://docs.google.com/document/d/188NYh2CIoDcRZDltmiNsZtmYVrxa0Z6ND_HrcpmG7Cw/edit?usp=drivesdk
    
    Leave us a google review if you liked our service:
    https://g.page/r/CQT2Q8IwOnqpEB0/review
    
    Best Regards,
    Team Effizient
    www.effizient.ca
    Ph: 226-774-9168
    Email: info@effizient.ca`,
    // Attach the SOP content here
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).json({ message: "Email sending failed" });
    } else {
      console.log("Email Sent Successfully!");
      res.status(200).json({ message: "Email sent successfully" });
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}...`);
});

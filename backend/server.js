import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

app.get("/", (req, res) => {
  res.send("Backend is running");
});

app.get("/api/test", (req, res) => {
  res.json({
    success: true,
    message: "API Working"
  });
});
app.post("/api/enquiry", async (req, res) => {

  const { name, email, phone, message } = req.body;

  try {

    // Email to you
    await transporter.sendMail({

      from: process.env.EMAIL_USER,

      to: process.env.EMAIL_USER,

      subject: "🏗 New Construction Enquiry",

      html: `
                <h2>New Enquiry Received</h2>

                <p><strong>Name:</strong> ${name}</p>

                <p><strong>Email:</strong> ${email}</p>

                <p><strong>Phone:</strong> ${phone}</p>

                <p><strong>Message:</strong></p>

                <p>${message}</p>
            `,
    });

    // Auto reply to customer

    await transporter.sendMail({

      from: process.env.EMAIL_USER,

      to: email,

      subject: "Thank You for Contacting Model Construction",

      html: `
                <h2>Thank You, ${name}</h2>

                <p>
                We have received your enquiry successfully.
                </p>

                <p>
                Our team will contact you shortly.
                </p>

                <br>

                <strong>Model Construction</strong>
            `,
    });

    res.status(200).json({
      success: true,
      message: "Enquiry Sent Successfully",
    });

  } catch (err) {

    console.log(err);

    res.status(500).json({
      success: false,
      message: "Email Failed",
    });
  }

});

app.listen(process.env.PORT, () => {
  console.log(`Server Running on ${process.env.PORT}`);
});
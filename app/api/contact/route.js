import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  try {
    const { username, email, message } = await req.json();

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      service: "gmail",
      port: 587,
      secure: false,
      auth: {
        user: process.env.SENDER_EMAIL,
        pass: process.env.SENDER_PASSWORD,
      },
    });

    const mailOption = {
      from: process.env.SENDER_EMAIL,
      to: email,
      subject: "Sending Email Through SMTP",
      html: `
     <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Email Content</title>
          <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&display=swap" rel="stylesheet">
          <style>
            body {
              font-family: 'Poppins', sans-serif;
            }
            .container {
              padding: 20px;
              background-color: #f4f4f4;
              font-family: 'Poppins', sans-serif;
              color: #333;
            }
            .details {
              margin-bottom: 10px;
              color: #555;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <h1>Contact Form Submission</h1>
            <div class="details">
              <strong>Username:</strong> ${username}
            </div>
            <div class="details">
              <strong>Email:</strong> ${email}
            </div>
            <div class="details">
              <strong>Message:</strong> ${message}
            </div>
          </div>
        </body>
        </html>
      `,
    };

    const info = await transporter.sendMail(mailOption);
    console.log("Email sent:", info.response);

    return NextResponse.json({
      success: true,
      message: "Your message has been sent!",
    });
  } catch (error) {
    console.log("Error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Internal server error, please try again",
      },
      { status: 500 }
    );
  }
}

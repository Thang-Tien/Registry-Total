const nodemailer = require("nodemailer");

const sendEmail = async (options, callback) => {
	// 1) Create a transporter
	const transporter = nodemailer.createTransport({
		host: process.env.EMAIL_HOST,
		port: process.env.EMAIL_PORT,
		auth: {
			user: process.env.EMAIL_USERNAME,
			pass: process.env.EMAIL_PASSWORD,
		},
	});

	// 2) Define the email options
	const mailOptions = {
		from: "RegistryTotal <registrytotal@vr.com.vn>", // sender address
		to: options.email, // list of receivers
		subject: options.subject, // Subject line
		text: options.text, // plain text body
		//html:
	};
	// 3) Actually send the email
	transporter.sendMail(mailOptions, (err, info) => {
		console.log(err, info);
		console.log("here 3");
		callback(err, info);
	});
};

module.exports = sendEmail;

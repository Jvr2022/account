const nodemailer = require('nodemailer');
const { config } = require('./config-manager');

const transporter = nodemailer.createTransport(config.email);

async function sendMail(options) {
	options.from = config.email.from;

	await transporter.sendMail(options);
}

module.exports = {
	sendMail
};

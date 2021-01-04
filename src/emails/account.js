const sgMail = require('@sendgrid/mail')

const sendgridAPIKey = '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'

sgMail.setApiKey(sendgridAPIKey)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'jiaqi2644@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'jiaqi2644@gmail.com',
        subject: 'Sorry to see you go!',
        text: `Goodbye, ${name}. I hope to see you back sometime soon.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}
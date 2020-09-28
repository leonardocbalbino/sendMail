//DESENVOLVIDO POR LEONARDO CARLOS <leonardocarlos_@live.com>

const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com", // Pode receber qualquer origem: Gmail, Outlook...
    port: 587,
    secure: false,
    auth: {
        user:"", //Email de disparo
        pass:"" // Senha do email
    }
});

transporter.sendMail({
    from:"RH <rh-teste@gmail.com>", //Coloque o nome e email que você gostaria que aparecesse como Remetente
    to: "destinatario@hotmail.com", //Email do Destinatário ou passar a variável que receba algum email
    subject: "Assunto do Email", // Assunto do Email
    text: "Corpo do Email", //Corpo do Email
}).then(message => {
    console.log(message);
}).catch(err => {
    console.log(err);
})
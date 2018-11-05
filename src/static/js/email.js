import nodemailer from 'nodemailer';

console.log("si entro ");

function sendEmail(forms){
    username = forms.username.value;
    email = forms.email.value;
    message = forms.message.value;
    const transporter = nodemailer.createTransport({
        service: 'hotmail',
        auth:{
        user:'charlesandrew12@hotmail.com',
        pass:'bajo3palos8010'
        }
    });
    const emailToSend = {
        from: 'charlesandrew12@hotmail.com',
        to: email,
        subject: 'Email contactenos - Minino PicarOS',
        text: message,
    }
    transporter.sendMail(emailToSend, (error, info) =>{
        if (error){
        console.log(error);
        }else{
        console.log('Email send' + info.response);
        }
    });
}
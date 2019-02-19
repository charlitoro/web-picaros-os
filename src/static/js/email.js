console.log("si entro ");

function sendEmail(forms){
    username = forms.username.value;
    email = forms.email.value;
    message = forms.message.value;
    
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "carlostoro04@gmail.com",
        Password: "f7c4602c-39fc-49a6-9efc-f28da7f07f01",
        to: "carlostoro04@gmail.com",
        from: "carlostoro04@gmail.com",
        subject: "Contacto Minino PicarOS",
        Body: `Email enviado por ${email}\n
                Contenido del mensaje: ${message}`
    }).then(
        message => alert("Gracias por mensaje, nos comunicares lo más pronto posible")
    )
}
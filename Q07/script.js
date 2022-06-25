function enviarEmail(){
    function sendEmail() {
        Email.send({
        Host: "smtp.gmail.com",
        Username : "<gabrielcampos548@gmai.com>",
        Password : "<camposgab202318@>",
        To : '<narutogames90000@gmail.com>',
        From : "<gabrielcampos548@gmail.com>",
        Subject : "<email subject>",
        Body : "<email body>",
        }).then(
            message => alert("mail sent successfully")
        );
    }
}
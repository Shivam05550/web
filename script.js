const form =document.querySelector('form');
const fullName = document.getElementById("name")
const email = document.getElementById("email")
const phone = document.getElementById("phone")
const subject = document.getElementById("subject")
const mess = document.getElementById("message")



function sendEmail(){

    const bodyMessage = ' Full Name: ${fullName.value}<br> Email : ${email.value}<br> Phone Number : ${phone.value}<br> Message :${mess.value}<br>';


    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "shivamguptha13@gmail.com",
        Password : "B921656CDA1A12C4811DE814EADFB99A1A9F",
        To : 'shivamguptha13@gmail.com',
        From : "shivamguptha13@gmail.com",
        Subject : subject.value,
        Body : bodyMessage
    }).then(
      message => alert(message)
    );
}
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    sendEmail();
})
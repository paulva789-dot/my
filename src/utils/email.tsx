import emailjs from "@emailjs/browser";

export const sendEmail = (

form:HTMLFormElement

)=>{

return emailjs.sendForm(

"YOUR_SERVICE_ID",

"YOUR_TEMPLATE_ID",

form,

"YOUR_PUBLIC_KEY"

);

}
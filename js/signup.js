var modal=document.getElementById('signup_modal');
var btnmodal=document.getElementById('btnmodal');
var span= document.getElementsByClassName('close')[0];
btnmodal.onclick = function() {
    modal.style.display = "block";
  }
span.onclick = function(){
    modal.style.display="none";
}
window.onclick =function(event){
 if(event.target ==modal){
    modal.style.display="none";
 }
}
function formValidation(){
    let username =document.getElementById('username').value;
    let password =document.getElementById('password').value;
    let email =document.getElementById('email').value;
    let phone =document.getElementById('phone').value;
    let dob =document.getElementById('dob').value;
    let termcondition =document.getElementById('termcondition').value;
   if(username == '' || username.length < 3)
   {
     let name_txt=document.getElementById('usernamespan');
     name_txt.innerHTML="Enter Proper UserName";
     name_txt.style.color='red';

   }
   if(password == '' || password.length < 8)
   {
    let password_txt= document.getElementById('passspan');
    password_txt.innerHTML="Enter strong password";
    password_txt.style.color='red';
   }
   if(email == '' || email.length < 3)
   {
    let email_txt= document.getElementById('emailspan');
    email_txt.innerHTML="Enter Proper Email";
    email_txt.style.color='red';
   }
   if(phone == '' || phone.length < 10)
   {
     let phone_txt=document.getElementById('phonespan');
     phone_txt.innerHTML="Enter Proper Mobile No.";
     phone_txt.style.color='red';
   }
   if(dob == '' )
   {
    let dob_err= document.getElementById('dobspan');
    dob_err.innerHTML="Enter Date of Birth";
    dob_err.style.color='red';
   }
   if(termcondition !='on')
   {
     let check_txt =document.getElementById('termconditionspan');
     check_txt.innerHTML="Accept term & conditions";
     check_txt.style.color='red';
   }

}
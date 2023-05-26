function patientLoginPage(){
  window.location="patientlogin.html";
  setTimeout('patientLoginPage()',500);
}
function doctorLoginPage(){
  window.location.href="doctorregister.html";
  setTimeout('patientLoginPage()',500);
}
 // https://firebase.google.com/docs/web/setup#available-libraries


  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDcTyFqdWZMP7qNgrnYqcYZ2OIXMMHBG7g",
    authDomain: "upload-e8fed.firebaseapp.com",
    databaseURL: "https://upload-e8fed-default-rtdb.firebaseio.com",
    projectId: "upload-e8fed",
    storageBucket: "upload-e8fed.appspot.com",
    messagingSenderId: "58607096448",
    appId: "1:58607096448:web:1e38896d507d5cf0588c65",
    measurementId: "G-NCHGTERL30"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function patientLoginPage(){
  window.location="patientlogin.html";
  setTimeout('patientLoginPage()',500);
}
function doctorLoginPage(){
  window.location.href="doctorregister.html";
  setTimeout('patientLoginPage()',500);
}

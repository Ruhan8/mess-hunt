const firebaseConfig = {
  apiKey: "AIzaSyCV-KGEqIx-xJR5f0qvr4TP5MAHcuFNgaw",
  authDomain: "contact-form-c4c51.firebaseapp.com",
  databaseURL: "https://contact-form-c4c51-default-rtdb.firebaseio.com",
  projectId: "contact-form-c4c51",
  storageBucket: "contact-form-c4c51.appspot.com",
  messagingSenderId: "148768869109",
  appId: "1:148768869109:web:1cfa92ad3e0415969a93bc",
  measurementId: "G-12TEFBP5Q1"
};

// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var emailid = getElementVal("emailid");
  var phone = getElementVal("phone");
  var password = getElementVal("password");
  var address = getElementVal("address");
  var msgContent = getElementVal("msgContent");
  

  saveMessages(name, emailid,phone, address, msgContent);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (name, emailid,phone,password,address, msgContent) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    emailid: emailid,
    phone:phone,
    password:password,
    address:address,
    msgContent: msgContent,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
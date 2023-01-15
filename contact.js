const firebaseConfig = {
  apiKey: "AIzaSyCprkYBEwIzO8Yopa-Grla3HMbmBnEXqGQ",
  authDomain: "sign-up-8fcea.firebaseapp.com",
  databaseURL: "https://sign-up-8fcea-default-rtdb.firebaseio.com",
  projectId: "sign-up-8fcea",
  storageBucket: "sign-up-8fcea.appspot.com",
  messagingSenderId: "735640668625",
  appId: "1:735640668625:web:ce9a716cb631f1151ef8f0",
  measurementId: "G-2HVWB37YYB"
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
  var msgContent = getElementVal("msgContent");

  saveMessages(name, emailid, msgContent);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (name, emailid, msgContent) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    emailid: emailid,
    msgContent: msgContent,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
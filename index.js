
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCn4v3easVrhT3VWRfYKNhUVo-fuSwOYD8",
    authDomain: "login-system-6a63f.firebaseapp.com",
    databaseURL: "https://login-system-6a63f-default-rtdb.firebaseio.com",
    projectId: "login-system-6a63f",
    storageBucket: "login-system-6a63f.appspot.com",
    messagingSenderId: "665486566755",
    appId: "1:665486566755:web:02546b32bf80a1370bdf56",
    measurementId: "G-7XG0GZ9JT7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const auth =  firebase.auth();

  
  function signUp(){
    var email = document.getElementById("email");
    var password = document.getElementById("password");

    const promise = auth.createUserWithEmailAndPassword(email.value,password.value);
    //
    promise.catch(e=>alert(e.message));
    alert("SignUp Successfully");
  }

  //signIN function
  function  signIn(){
    var email = document.getElementById("email");
    var password  = document.getElementById("password");
    const promise = auth.signInWithEmailAndPassword(email.value,password.value);
    promise.catch(e=>alert(e.message));
    window.location('./home.html');

  }


  //signOut

  function signOut(){
    auth.signOut();
    alert("SignOut Successfully from System");
  }

  //active user to homepage
  firebase.auth().onAuthStateChanged((user)=>{
    if(user){
      var email = user.email;
      window.location('./home.html');

    }else{window.location('index.html');

    }
  })
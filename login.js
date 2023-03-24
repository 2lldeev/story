const firebaseConfig = {
    apiKey: "AIzaSyCININKa8pPVcVEzebYw5EEPJ4GZ4UhCgs",
    authDomain: "dev-deploy-c3707.firebaseapp.com",
    databaseURL: "https://dev-deploy-c3707-default-rtdb.firebaseio.com",
    projectId: "dev-deploy-c3707",
    storageBucket: "dev-deploy-c3707.appspot.com",
    messagingSenderId: "103302520342",
    appId: "1:103302520342:web:f7833651ac5a48d34a9f37",
    measurementId: "G-048J8S9WWB"
  };

  firebase.initializeApp(firebaseConfig);
  
  function login() {
    console.log("wew")
    var w_email = document.getElementById("email").value;
    var w_password = document.getElementById("password").value;
  
    firebase.auth().signInWithEmailAndPassword(w_email, w_password)
      .then(function() {
        console.log("logged in")
        console.log(firebase.auth.currentuser)
      })
      .catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log("Error: " + errorMessage);
      });
  }
  
  function loginWithGoogle() {
    var provider = new firebase.auth.GoogleAuthProvider();
  
    firebase.auth().signInWithPopup(provider)
      .then(function(result) {
        var token = result.credential.accessToken;
        var user = result.user;
        console.log(user);
        
      })
      .catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log("Error: " + errorMessage);
      });
  }
  
  function loginWithFacebook() {
    var provider = new firebase.auth.FacebookAuthProvider();
  
    firebase.auth().signInWithPopup(provider)
      .then(function(result) {
        var token = result.credential.accessToken;
        var user = result.user;
        console.log(user);
        
      })
      .catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log("Error: " + errorMessage);
      });
  }
  
  function loginWithApple() {
    var provider = new firebase.auth.OAuthProvider('apple.com');
  
    firebase.auth().signInWithPopup(provider)
      .then(function(result) {
        var token = result.credential.accessToken;
        var user = result.user;
        console.log(user);
        
      })
      .catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log("Error: " + errorMessage);
      });
  }
  

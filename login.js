var firebaseConfig = {
    // Your Firebase configuration goes here
  };
  
  firebase.initializeApp(firebaseConfig);
  
  function login() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
  
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(function() {
        console.log("logged in")
        const user = auth.currentUser
        console.log(user)
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
  

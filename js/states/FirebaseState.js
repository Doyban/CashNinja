var CashNinja = CashNinja || {};

CashNinja.FirebaseState = function () {
  "use strict";
  Phaser.State.call(this); // Extend Phaser.State.
};

CashNinja.FirebaseState.prototype = Object.create(Phaser.State.prototype);
CashNinja.FirebaseState.prototype.constructor = CashNinja.FirebaseState;

CashNinja.FirebaseState.prototype.create = function () {
  "use strict";
  // var provider;

  // provider = new firebase.auth.GoogleAuthProvider(); // Create authentication provider.
  // provider.addScope("https://www.googleapis.com/auth/plus.login"); // Add scope to use.

  // firebase.auth().signInWithPopup(provider).then(this.on_login.bind(this)).catch(this.handle_error.bind(this)); // Call authentication method.

  firebase.auth().signInAnonymously().catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
    // For development.
    console.log("errorCode: " + errorCode);
    console.log("errorMessage: " + errorMessage);
    // For mobile tests.
    // alert("errorCode: " + errorCode);
    // alert("errorMessage: " + errorMessage);
  });
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      var isAnonymous = user.isAnonymous;
      var uid = user.uid;
      // ...

      // For development.
      console.log("isAnonymous: " + isAnonymous);
      console.log("uid: " + uid);
      // For mobile tests.
      // alert("isAnonymous: " + isAnonymous);
      // alert("uid: " + uid);
    } else {
      // User is signed out.
    }

    // Keep user data in its account...
    // https://firebase.google.com/docs/auth/web/anonymous-auth
  });

  this.game.state.start("BootState", true, false, "assets/levels/title_screen.json", "TitleState"); // Start new game.
};

// Handle on success login.
CashNinja.FirebaseState.prototype.on_login = function (result) {
  "use strict";
  console.log(result);

  firebase.database().ref("/users/" + result.user.uid).set("stored data"); // Make users in Firebase Database.
};

// Handle on error occurs.
CashNinja.FirebaseState.prototype.handle_error = function (error) {
  "use strict";
  console.log(error);
};
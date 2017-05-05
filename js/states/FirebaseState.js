var CashNinja = CashNinja || {};

CashNinja.FirebaseState = function () {
  "use strict";
  Phaser.State.call(this); // Extend Phaser.State.
};

CashNinja.FirebaseState.prototype = Object.create(Phaser.State.prototype);
CashNinja.FirebaseState.prototype.constructor = CashNinja.FirebaseState;

CashNinja.FirebaseState.prototype.create = function () {
  "use strict";
  var provider;
  var that = this;
  
  if(!firebase.auth().currentUser) {
    // Google authentication provider.
    provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/plus.login');
    
//    firebase.auth().getRedirectResult().then(this.start_game.bind(this)).catch(function(error) {console.log(error)})
    firebase.auth().signInWithRedirect(provider).then(function() {


  firebase.auth().getRedirectResult().then(function(result) {
  if (result.credential) {
    // This gives you a Google Access Token.
    // You can use it to access the Google API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    // ...
    firebase.database().ref("/users/" + result.user.uid).set("stored data"); // Make users in Firebase Database.
  
  that.game.state.start("BootState", true, false, "assets/levels/title_screen.json", "TitleState"); // Start new game.
  }
}).catch(function(error) {
  // Handle Errors here.
  console.log(error);
});
  });
  } else {
    firebase.database().ref("/users/" + result.user.uid).set("stored data"); // Make users in Firebase Database.
  
  that.game.state.start("BootState", true, false, "assets/levels/title_screen.json", "TitleState"); // Start new game.
  }
//    firebase.database().ref("/users/" + firebase.auth().currentUser.uid).once("value").then(this.start_game.bind(this)); // Make users in Firebase Database.
//    firebase.database().ref("/users/" + firebase.auth().currentUser.uid).once("value").then(this.start_game.bind(this)); // Make users in Firebase Database.
//  }
};

CashNinja.FirebaseState.prototype.start_game = function (result) {
  "use strict";
  firebase.database().ref("/users/" + result.user.uid).set("stored data"); // Make users in Firebase Database.
  
  this.game.state.start("BootState", true, false, "assets/levels/title_screen.json", "TitleState"); // Start new game.
};
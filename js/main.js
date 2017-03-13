var CashNinja = CashNinja || {};

// Configure Firebase.
var config = {
  apiKey: "AIzaSyCqsRYQI-P3CWoWuk1EVnu9WP370JOx8Ys",
  authDomain: "test-6926a.firebaseapp.com",
  databaseURL: "https://test-6926a.firebaseio.com",
  storageBucket: "test-6926a.appspot.com",
  messagingSenderId: "868407657760"
};

firebase.initializeApp(config); // Initialize Firebase.

var game = new Phaser.Game("100%", "100%", Phaser.CANVAS);
game.state.add("BootState", new CashNinja.BootState());
game.state.add("LoadingState", new CashNinja.LoadingState());
game.state.add("GameState", new CashNinja.LevelState());
game.state.add("TitleState", new CashNinja.TitleState());
game.state.add("StoreState", new CashNinja.StoreState());
game.state.add("FirebaseState", new CashNinja.FirebaseState());
game.state.start("BootState", true, false, "assets/levels/title_screen.json", "TitleState");
// game.state.start("FirebaseState");
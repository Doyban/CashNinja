var FruitNinja = FruitNinja || {};

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
game.state.add("BootState", new FruitNinja.BootState());
game.state.add("LoadingState", new FruitNinja.LoadingState());
game.state.add("GameState", new FruitNinja.LevelState());
game.state.add("TitleState", new FruitNinja.TitleState());
game.state.add("StoreState", new FruitNinja.StoreState());
game.state.add("FirebaseState", new FruitNinja.FirebaseState());
// game.state.start("BootState", true, false, "assets/levels/title_screen.json", "TitleState");
game.state.start("FirebaseState");
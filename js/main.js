var CashNinja = CashNinja || {};

// Configure Firebase.
var config = {
  apiKey: "AIzaSyDWQ-QuD8i-Tn-aVgFjLhs-mSJrtt87C_E",
  authDomain: "cashninja-1eb14.firebaseapp.com",
  databaseURL: "https://cashninja-1eb14.firebaseio.com",
  projectId: "cashninja-1eb14",
  storageBucket: "cashninja-1eb14.appspot.com",
  messagingSenderId: "519562881903"
};
firebase.initializeApp(config); // Initialize Firebase

var game = new Phaser.Game("100%", "100%", Phaser.CANVAS);
game.state.add("BootState", new CashNinja.BootState());
game.state.add("LoadingState", new CashNinja.LoadingState());
game.state.add("GameState", new CashNinja.LevelState());
game.state.add("TitleState", new CashNinja.TitleState());
game.state.add("StoreState", new CashNinja.StoreState());
game.state.add("ShopState", new CashNinja.ShopState());
game.state.add("GameOverState", new CashNinja.GameOverState());
game.state.add("FirebaseState", new CashNinja.FirebaseState());
game.state.start("BootState", true, false, "assets/levels/title_screen.json", "TitleState");
//game.state.start("FirebaseState");
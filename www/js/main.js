var CashNinja = CashNinja || {};

var game = new Phaser.Game("100%", "100%", Phaser.CANVAS);
game.state.add("BootState", new CashNinja.BootState());
game.state.add("LoadingState", new CashNinja.LoadingState());
game.state.add("GameState", new CashNinja.LevelState());
game.state.add("TitleState", new CashNinja.TitleState());
game.state.add("StoreState", new CashNinja.StoreState());
game.state.add("ShopState", new CashNinja.ShopState());
game.state.add("GameOverState", new CashNinja.GameOverState());
game.state.start("BootState", true, false, "assets/levels/title_screen.json", "TitleState");

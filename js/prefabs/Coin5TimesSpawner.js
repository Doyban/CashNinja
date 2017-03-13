var FruitNinja = FruitNinja || {};

FruitNinja.Coin5TimesSpawner = function (game_state, name, position, properties) {
  "use strict";
  FruitNinja.Spawner.call(this, game_state, name, position, properties); // Extend Spawner class.
};

FruitNinja.Coin5TimesSpawner.prototype = Object.create(FruitNinja.Spawner.prototype);
FruitNinja.Coin5TimesSpawner.prototype.constructor = FruitNinja.Coin5TimesSpawner;

FruitNinja.Coin5TimesSpawner.prototype.create_object = function (name, position, velocity) {
  "use strict";
  return new FruitNinja.Coin5Times(this.game_state, name, position, {texture: "fruits_spritesheet", group: "special_coins", frame: 4, velocity: velocity}); // Return new special coin.
};
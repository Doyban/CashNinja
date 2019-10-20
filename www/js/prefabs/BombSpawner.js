var CashNinja = CashNinja || {};

CashNinja.BombSpawner = function (game_state, name, position, properties) {
  "use strict";
  CashNinja.Spawner.call(this, game_state, name, position, properties); // Extend Spawner class.
};

CashNinja.BombSpawner.prototype = Object.create(CashNinja.Spawner.prototype);
CashNinja.BombSpawner.prototype.constructor = CashNinja.BombSpawner;

CashNinja.BombSpawner.prototype.create_object = function (name, position, velocity) {
  "use strict";
  return new CashNinja.Bomb(this.game_state, name, position, {texture: "bomb_image", group: "bombs", velocity: velocity}); // Return new bomb.
};
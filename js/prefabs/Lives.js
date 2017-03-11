 var FruitNinja = FruitNinja || {};

FruitNinja.Lives = function (game_state, name, position, properties) {
  "use strict";
  FruitNinja.Prefab.call(this, game_state, name, position, properties); // Extend Prefab class.

  this.visible = false; // Make this prefabs invisible.

  this.lives_spacing = properties.lives_spacing; // Space between each live.

  this.lives = properties.lives; // Get number of lives.
  this.lives_sprites = [];
  this.add_lives(this.lives);  // Call add_lives method with the number of initialized lives.
};

FruitNinja.Lives.prototype = Object.create(FruitNinja.Prefab.prototype);
FruitNinja.Lives.prototype.constructor = FruitNinja.Lives;

FruitNinja.Lives.prototype.die = function () {
  "use strict";
  var life;
  this.lives -= 1; // Decrease number of lives by 1.

  // Kill the last life.
  life = this.lives_sprites.pop();
  life.kill();

  // If player lost all lives then game over.
  if (this.lives === 0) {
    this.game_state.game_over();
  }
};

FruitNinja.Lives.prototype.add_lives = function (number_of_lives) {
  "use strict";
  var life_index, life;
  // For each live create Phaser sprites to represent its life.
  for (life_index = 0; life_index < number_of_lives; life_index += 1) {
    life = new Phaser.Sprite(this.game_state.game, this.position.x + ((this.lives_sprites.length - 1) * this.lives_spacing), this.position.y, this.texture);
    this.lives_sprites.push(life); // Add life to lives sprites.
    this.game_state.groups.hud.add(life); // Add life to HUD (Head-Up Display).
  }
};
var CashNinja = CashNinja || {};

CashNinja.Cut = function (game_state, name, position, properties) {
  "use strict";
  Phaser.Graphics.call(this, game_state.game, position.x, position.y); // Extend Phaser.Graphics class.

  this.game_state = game_state; // Save game state.

  this.name = name; // Save game state name.

  this.game_state.groups[properties.group].add(this); // Add itself to the groups.

  this.game_state.prefabs[name] = this; // Add itself to the prefabs of the game.

  // Set up color.
  this.beginFill(properties.style.color);
  this.lineStyle(properties.style.line_width, properties.style.color, properties.style.alpha); // Color here is different than in beginFill.

  this.moveTo(properties.start.x, properties.start.y);
  this.lineTo(properties.end.x, properties.end.y);

  // Remove cut after some time.
  this.kill_timer = this.game_state.time.create();
  this.kill_timer.add(Phaser.Timer.SECOND * properties.duration, this.kill, this);
  this.kill_timer.start();
};

CashNinja.Cut.prototype = Object.create(Phaser.Graphics.prototype);
CashNinja.Cut.prototype.constructor = CashNinja.Cut;

CashNinja.Cut.prototype.kill = function () {
  "use strict";

  // Clear the graphics.
  this.clear();
  Phaser.Graphics.prototype.kill.call(this); // Call kill method from Phaser.Graphics class.
};
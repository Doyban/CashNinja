var CashNinja = CashNinja || {};

CashNinja.MenuItem = function (game_state, name, position, properties) {
  "use strict";
  CashNinja.Prefab.call(this, game_state, name, position, properties); // Extend TextPrefab class.

  this.anchor.setTo(0.5); // Set center of texture.

  // Create animation.
  // this.on_selection_animation = this.game_state.game.add.tween(this.scale); // Add animation.
  // this.on_selection_animation.to({x: 1.5 * this.scale.x, y: 1.5 * this.scale.y}, 500); // Make text larger in 500 ms.
  // this.on_selection_animation.to({x: this.scale.x, y: this.scale.y}, 500); // Make text smaller in 500 ms.
  // this.on_selection_animation.repeatAll(-1); // Keep repeating when it ends.

  // this.inputEnabled = true; // Add input event.
};

CashNinja.MenuItem.prototype = Object.create(CashNinja.Prefab.prototype);
CashNinja.MenuItem.prototype.constructor = CashNinja.MenuItem;

CashNinja.MenuItem.prototype.selection_over = function () {
  "use strict";
  // When is paused.
  // if (this.on_selection_animation.isPaused) {
    // Resume animation if it is paused.
    // this.on_selection_animation.resume();
  // }
  // When didn't start.
  // else {
    // Start animation.
    // this.on_selection_animation.start();
  // }
};

CashNinja.MenuItem.prototype.selection_out = function () {
  "use strict";
  // this.on_selection_animation.pause(); // Pause animation.
};

CashNinja.MenuItem.prototype.select = function () {
  "use strict";
  // The default item does nothing, it will be extended in different classes.
};
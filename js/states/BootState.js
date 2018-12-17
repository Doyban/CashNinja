var CashNinja = CashNinja || {};

CashNinja.BootState = function () {
  "use strict";
  Phaser.State.call(this); // Extend Phaser.State class.
};

CashNinja.prototype = Object.create(Phaser.State.prototype);
CashNinja.prototype.constructor = CashNinja.BootState;

CashNinja.BootState.prototype.init = function (level_file, next_state) {
  "use strict";
  this.level_file = level_file; // Init JSON level file.
  this.next_state = next_state; // Init next state.
};

// Load JSON text and next state.
CashNinja.BootState.prototype.preload = function () {
  "use strict";
  this.load.text("level1", this.level_file);
};

// Parse JSON text.
CashNinja.BootState.prototype.create = function () {
  "use strict";
  var level_text, level_data;
  level_text = this.game.cache.getText("level1");
  level_data = JSON.parse(level_text);
  this.game.state.start("LoadingState", true, false, level_data, this.next_state);
};
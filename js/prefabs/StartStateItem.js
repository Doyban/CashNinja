var CashNinja = CashNinja || {};

CashNinja.StartStateItem = function (game_state, name, position, properties) {
  "use strict";
  CashNinja.MenuItem.call(this, game_state, name, position, properties);

  this.level_file = properties.level_file; // Set up level file.
  this.state_name = properties.state_name; // Set up state name.
};

CashNinja.StartStateItem.prototype = Object.create(CashNinja.MenuItem.prototype);
CashNinja.StartStateItem.prototype.constructor = CashNinja.StartStateItem;

CashNinja.StartStateItem.prototype.select = function () {
  "use strict";
  this.game_state.state.start("BootState", true, false, this.level_file, this.state_name); // Start next Phaser state.
};
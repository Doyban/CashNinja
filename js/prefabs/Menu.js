var FruitNinja = FruitNinja || {};

FruitNinja.Menu = function (game_state, name, position, properties) {
  "use strict";
  FruitNinja.Prefab.call(this, game_state, name, position, properties); // Extend Prefab class.

  this.visible = false; // Make this prefab invisible.

  this.menu_items = properties.menu_items; // List of items.
  this.current_item_index = 0; // Select first item like a current one.
  this.menu_items[0].selection_over(); // When first item is selected then selection is over.

  this.cursor_keys = this.game_state.game.input.keyboard.createCursorKeys(); // Allow player to navigate through menu items.
};

FruitNinja.Menu.prototype = Object.create(FruitNinja.Prefab.prototype);
FruitNinja.Menu.prototype.constructor = FruitNinja.Menu;

FruitNinja.Menu.prototype.update = function () {
  "use strict";
  /**
   * Select item from menu.
   */
  // When up key is pressed.
  if (this.cursor_keys.up.isDown && this.current_item_index > 0) {
    // Navigate to previous item.
    this.menu_items[this.current_item_index].selection_out(); // Unselect current item.
    this.current_item_index -= 1; // Update current item.
    this.menu_items[this.current_item_index].selection_over(); // Finish the selection.
  }
  // When down key is pressed
  else if (this.cursor_keys.down.isDown && this.current_item_index < this.menu_items.length -1) {
    // Navigate to next item.
    this.menu_items[this.current_item_index].selection_out(); // Unselect current item.
    this.current_item_index += 1; // Update current item.
    this.menu_items[this.current_item_index].selection_over(); // Finish the selection.
  }

  /**
   * Insert selected item from menu.
   */
  // When spacebar key is pressed.
  if (this.game_state.game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)) {
    this.menu_items[this.current_item_index].select(); // Select the current item.
  }
};
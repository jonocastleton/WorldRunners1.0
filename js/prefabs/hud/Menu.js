var WR = WR || {};

WR.Menu = function (game_state, name, position, properties) {
    "use strict";
    WR.Prefab.call(this, game_state, name, position, properties);

    this.menu_items = [];
    for (var menu_item_name in properties.menu_items) {
        var new_item = this.game_state.create_prefab(menu_item_name, properties.menu_items[menu_item_name]);
        this.menu_items.push(new_item);
    }

    this.enable(false);
};

WR.Menu.prototype = Object.create(WR.Prefab.prototype);
WR.Menu.prototype.constructor = WR.Menu;

WR.Menu.prototype.enable = function (enable) {
  "use strict";
  this.menu_items.forEach(function(menu_item) {
    menu_item.inputEnabled = enable;
    menu_item.visible = enable;
  }, this);
};

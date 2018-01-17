var WR = WR || {};

WR.MessageBox = function (game_state, name, position, properties) {
    "use strict";
    WR.Prefab.call(this, game_state, name, position, properties);

    this.message_text = new WR.TextPrefab(this.game_state, this.name + "_message", {x: this.x + (this.width
       / 2), y: this.y + 50}, {group: "hud", text: properties.message, style:
      Object.create(this.game_state.TEXT_STYLE)});

      this.message_text.anchor.setTo(0.5);
  console.log(this.message_text);    

};

WR.MessageBox.prototype = Object.create(WR.Prefab.prototype);
WR.MessageBox.prototype.constructor = WR.MessageBox;

WR.MessageBox.prototype.update = function () {
  "use strict";
  this.game_state.game.physics.arcade.collide(this, this.game_state.groups.player, this.enter, null, this);
};

WR.MessageBox.prototype.enter = function () {
  "use strict";
  this.game_state.game.state.start("BootState", true, false, this.next_level, "WorldState");
};

WR.MessageBox.prototype.kill = function () {
  "use strict";
  console.log(this.message_text);
  Phaser.Sprite.prototype.kill.call(this);
  this.message_text.kill();
};

var WR = WR || {};

WR.NPC = function (game_state, name, position, properties) {
    "use strict";
    WR.Prefab.call(this, game_state, name, position, properties);

    this.anchor.setTo(0.5);


    this.message = this.game_state.game.cache.getText(properties.message);

    this.walking_speed = +properties.walking_speed;

    //  We need to enable physics on the student
    this.game_state.game.physics.arcade.enable(this);
    this.body.immovable = true;

    this.body.collideWorldBounds = true;

};

WR.NPC.prototype = Object.create(WR.Prefab.prototype);
WR.NPC.prototype.constructor = WR.NPC;

WR.NPC.prototype.update = function () {
  "use strict";
  this.game_state.game.physics.arcade.collide(this, this.game_state.groups.player, this.talk, null, this);
};

WR.NPC.prototype.talk = function (npc, player) {
  "use strict";
  player.stop();
//  console.log(this.message);
  this.game_state.current_message_box = new WR.MessageBox(this.game_state, this.name + "_message_box",
  {x: 0, y: this.game_state.game.world.height * 0.75}, {group: "hud", texture: "message_box_image",
  message: this.message});

  this.game_state.user_input.set_input(this.game_state.user_inputs.talking_user_input);
};

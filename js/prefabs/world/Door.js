var WR = WR || {};

WR.Door = function (game_state, name, position, properties) {
    "use strict";
    WR.Prefab.call(this, game_state, name, position, properties);

    this.anchor.setTo(0.5);


    this.next_level = properties.next_level;
console.log(this.next_level);
  
    //  We need to enable physics on the student
    this.game_state.game.physics.arcade.enable(this);
    this.body.immovable = true;

    this.body.collideWorldBounds = true;

};

WR.Door.prototype = Object.create(WR.Prefab.prototype);
WR.Door.prototype.constructor = WR.Door;

WR.Door.prototype.update = function () {
  "use strict";
  this.game_state.game.physics.arcade.collide(this, this.game_state.groups.player, this.enter, null, this);
};

WR.Door.prototype.enter = function () {
  "use strict";
  this.game_state.game.state.start("BootState", true, false, this.next_level, "WorldState");
};

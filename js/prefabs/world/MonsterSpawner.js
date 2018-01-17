var WR = WR || {};

WR.MonsterSpawner = function (game_state, name, position, properties) {
    "use strict";
    WR.Prefab.call(this, game_state, name, position, properties);

    this.anchor.setTo(0.5);

    //  We need to enable physics on the monster
    this.game_state.game.physics.arcade.enable(this);
    this.body.immovable = true;

};

WR.MonsterSpawner.prototype = Object.create(WR.Prefab.prototype);
WR.MonsterSpawner.prototype.constructor = WR.MonsterSpawner;

WR.MonsterSpawner.prototype.update = function () {
  "use strict";
  // Get the time in seconds since the last frame
  var deltaTime = game.time.elapsed / 1000;
  // Move the character to the right at 500 pixels per second, regardless of frameratecharacter.x
  this.position.y += 5 * deltaTime;
  this.position.y -= 4 * deltaTime;

  this.game_state.game.physics.arcade.collide(this, this.game_state.groups.player, this.spawn, null, this);
//  this.game_state.game.physics.arcade.overlap(this, this.game_state.groups.player, goFight, null, this);
};

WR.MonsterSpawner.prototype.spawn = function () {
  "use strict";
console.log(this.game_state);
this.game_state.game.state.start("BootState", true, false, "assets/levels/battle.json", "BattleState");
};

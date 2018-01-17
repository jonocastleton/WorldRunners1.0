var WR = WR || {};

WR.Player = function (game_state, name, position, properties) {
    "use strict";
    WR.Prefab.call(this, game_state, name, position, properties);

    this.anchor.setTo(0.5);

    this.walking_speed = +properties.walking_speed;

    //  We need to enable physics on the student
    this.game_state.game.physics.arcade.enable(this);

    this.body.collideWorldBounds = true;
  //  game.physics.arcade.collide(this, game_state.prefabs.monster);


    //  Our two animations, walking left and right.
    this.animations.add('walk', [0, 1, 2], 10, true);

    this.stopped_frames = [0, 0, 0, 0];

    this.moving = {left: false, right: false, up: false, down: false};



    // move on pointer click
    game.input.onDown.add(this.moveSprite, this);

};

WR.Player.prototype = Object.create(WR.Prefab.prototype);
WR.Player.prototype.constructor = WR.Player;

WR.Player.prototype.update = function () {
  "use strict";
  this.game_state.game.physics.arcade.collide(this, this.game_state.groups.monster_spawner);


  if(this.moving.left && this.body.velocity.x <= 0) {
    //move left
    this.body.velocity.x = this.walking_speed;
    if (this.body.velocity.y === 0) {
      this.animations.play("walk");
    }
  }  else if (this.moving.right && this.body.velocity.x >= 0) {
    //move right
    this.body.velocity.x = +this.walking_speed;
    if (this.body.velocity.y === 0) {
      this.animations.play("walk");
    }
  } else {
    this.body.velocity.x = 0;
  }
  if(this.moving.up && this.body.velocity.y <= 0) {
    //move up
    this.body.velocity.y = -this.walking_speed;
    if (this.body.velocity.x === 0) {
      this.animations.play("walk");
    }
  } else if (this.moving.down && this.body.velocity.y >= 0) {
    //move down
    this.body.velocity.y = +this.walking_speed;
    if (this.body.velocity.x === 0) {
      this.animations.play("walk");
    }
  } else {
    this.body.velocity.y = 0;
  }

  if (this.body.velocity.x === 0 && this.body.velocity.y === 0) {
    // stop current animations
//    this.animations.stop();
//    this.frame = this.stopped_frames[this.body.facing];
  }
};

// WR.Player.prototype.stop = function () {
//   "use strict";
// console.log("Player collided");
// //  this.body.velocity.y = -this.walking_speed;
//   //if (student.x = pointer.x) {
//   this.tween.stop();
// //       this.animations.stop(null, true);
//   //};
// };


WR.Player.prototype.change_movement = function (direction, move) {
  "use strict";
  this.moving[direction] = move;
};

WR.Player.prototype.stop = function () {
  "use strict";
  this.moving = {left: false, right: false, up: false, down: false};

};

// function to move on pointer click
WR.Player.prototype.moveSprite = function (pointer) {

  var tween;

      if (tween && tween.isRunning)    {
          tween.stop();
      }

    //  student.rotation = game.physics.angleToPointer(student, pointer);

      //  300 = 300 pixels per second = the speed the sprite will move at, regardless of the distance it has to travel
      var duration = (game.physics.arcade.distanceToPointer(this, pointer) / 500) * 1000;
          tween = game.add.tween(this).to({ x: pointer.x, y: pointer.y }, duration, Phaser.Easing.Linear.None, true);
          tween.onComplete.add(tweenDone, this);

          if (pointer.x < this.x) {
            this.scale.setTo(-this.scale.x, this.scale.y);
          }
          else {
            this.scale.setTo(Math.abs(this.scale.x), this.scale.y)
          }

          if (tween.isRunning) {
            this.animations.play('walk');
          }

          function tweenDone () {
            //if (student.x = pointer.x) {
                 this.animations.stop(null, true);
            //};
          };
  };

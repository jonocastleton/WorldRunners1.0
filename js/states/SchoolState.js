var WR = WR || {};

WR.SchoolState = function () {
    "use strict";
    WR.JSONLevelState.call(this);

    this.prefab_classes = {
         player: WR.Prefab.prototype.constructor,
         sprite: WR.Prefab.prototype.constructor,
         text: WR.TextPrefab.prototype.constructor
    }
};

WR.SchoolState.prototype = Object.create(WR.JSONLevelState.prototype);
WR.SchoolState.prototype.constructor = WR.SchoolState;


WR.SchoolState.prototype.init = function(level_data) {
   "use strict";
   WR.JSONLevelState.prototype.init.call(this, level_data);

   this.game.physics.startSystem(Phaser.Physics.ARCADE);
   this.game.physics.arcade.gravity.y = 0;
};

var schoolLabel;

WR.SchoolState.prototype.create = function() {
  "use strict"


  // this.map = this.game.add.image(0, 0, this.level_data.map.key);
  // this.map.scale.setTo(2.5, 1.5);

  // var scene_index = 0;
  // this.map.scene.forEach(function(scene) {
  //     this.map.add.image(scene.name, this.level_data.map.scene[scene_index]);
  //     scene_index += 1;
  // }, this);

//  WR.JSONLevelState.prototype.create.call(this);

  // var songSchool = game.add.audio('songSchool');
  //
  // songSchool.play();

    // arrowText = game.add.text(860, 275, '', { fill: '#000000' });
    // arrowText.anchor.setTo(0.5, 0.5);
    // arrowText.text = "NEXT";

    WR.JSONLevelState.prototype.create.call(this);

    var style = { font: "28px Arial", fill: "#000000", wordWrap: true, wordWrapWidth: 400, align: "center", backgroundColor: "#ffffff" };

//console.log(this.level_data.prefabs.bubble.width);

    schoolLabel = game.add.text(980, 200, '', style);
    schoolLabel.anchor.setTo(0.5, 0.5);
    schoolLabel.text = "Hello Pablo";

      //  sprite.inputEnabled = true;
      //  sprite.input.enableDrag();

    // arrowSchool.inputEnabled = true;

      // text = game.add.text(250, 16, '', { fill: '#ffffff' });
      // arrowSchool.events.onInputDown.add(listener, this);
      this.game.input.onDown.add(this.listener, this);


      // SchoolLabel.x = Math.floor(bubble.x);
      // SchoolLabel.y = Math.floor(bubble.y);


  //},

  };

  var k = 0;

  WR.SchoolState.prototype.listener = function () {
    //change words
  switch(k) {
    case 0 :
      schoolLabel.text = "It is very nice to meet you. I have some great news for you!";
      k++;
      break;
    case 1 :
      schoolLabel.text = "You come from a long line of World Runners. I do too! Pretty cool huh? We are going to help each other get better at it.";
      k++;
      break;
    case 2 :
      schoolLabel.text = "World Runners help protect this world. There are cracks in the world that let monsters enter here.";
      k++;
      break;
    case 3 :
      schoolLabel.text = "We must defeat the monsters and close the cracks.";
      k++;
      break;
    case 4 :
      schoolLabel.text = "I will take you to a part of the world where we can get started ... Antartica!";
      k++;
      break;
    default :
      // songIntro.stop();
    this.game.input.onDown.add(this.start_game, this);

    }

//  this.game.input.onDown.add(this.start_game, this);
};

WR.SchoolState.prototype.start_game = function () {
  "use strict";
  this.game.state.start("BootState", true, false, "assets/levels/world.json", "WorldState")
}

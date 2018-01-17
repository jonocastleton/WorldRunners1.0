var WR = WR || {};

WR.IntroState = function () {
    "use strict";
    WR.JSONLevelState.call(this);

    this.prefab_classes = {
         player: WR.Prefab.prototype.constructor,
         sprite: WR.Prefab.prototype.constructor,
         text: WR.TextPrefab.prototype.constructor
    }
};

WR.IntroState.prototype = Object.create(WR.JSONLevelState.prototype);
WR.IntroState.prototype.constructor = WR.IntroState;


WR.IntroState.prototype.init = function(level_data) {
   "use strict";
   WR.JSONLevelState.prototype.init.call(this, level_data);

   this.game.physics.startSystem(Phaser.Physics.ARCADE);
   this.game.physics.arcade.gravity.y = 0;
};

var introLabel;

WR.IntroState.prototype.create = function() {
  "use strict"


  // this.map = this.game.add.image(0, 0, this.level_data.map.key);
  // this.map.scale.setTo(2.5, 1.5);

  // var scene_index = 0;
  // this.map.scene.forEach(function(scene) {
  //     this.map.add.image(scene.name, this.level_data.map.scene[scene_index]);
  //     scene_index += 1;
  // }, this);

//  WR.JSONLevelState.prototype.create.call(this);

  // var songIntro = game.add.audio('songIntro');
  //
  // songIntro.play();

    // arrowText = game.add.text(860, 275, '', { fill: '#000000' });
    // arrowText.anchor.setTo(0.5, 0.5);
    // arrowText.text = "NEXT";

    WR.JSONLevelState.prototype.create.call(this);

    var style = { font: "28px Arial", fill: "#000000", wordWrap: true, wordWrapWidth: 400, align: "center", backgroundColor: "#ffffff" };

//console.log(this.level_data.prefabs.bubble.width);

    introLabel = game.add.text(920, 200, '', style);
    introLabel.anchor.setTo(0.5, 0.5);
    introLabel.text = "Hello Pablo";

      //  sprite.inputEnabled = true;
      //  sprite.input.enableDrag();

    // arrowIntro.inputEnabled = true;

      // text = game.add.text(250, 16, '', { fill: '#ffffff' });
      // arrowIntro.events.onInputDown.add(listener, this);
      this.game.input.onDown.add(this.listener, this);

      // introLabel.x = Math.floor(bubble.x);
      // introLabel.y = Math.floor(bubble.y);
  //},

  };

  var counter = 0;
  var i = 0;

  WR.IntroState.prototype.listener = function () {
    //change words

  switch(i) {
    case 0 :
      introLabel.text = "We have picked up signals from Utah indicating another potential World Runner.";
      i++;
      break;
    case 1 :
      introLabel.text = "Go meet him and help him understand how to find his way to become a World Runner.";
      i++;
      break;
    case 2 :
      introLabel.text = "You guys can realize your potential together.";
      i++;
      break;
    default :
      // songIntro.stop();
      this.game.input.onDown.add(this.start_game, this);

    }

//  this.game.input.onDown.add(this.start_game, this);
};

WR.IntroState.prototype.start_game = function () {
  "use strict";
  this.game.state.start("BootState", true, false, "assets/levels/school.json", "SchoolState")
}

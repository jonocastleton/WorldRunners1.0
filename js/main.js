

var WR = WR || {};
var game = new Phaser.Game(1280,720,Phaser.AUTO,'gameDiv');

//game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;
// this.game.scale.pageAlignHorizontally = true;
// this.game.scale.pageAlignVertically = true;
// this.game.scale.refresh();


game.state.add('BootState', new WR.BootState());
game.state.add('LoadingState', new WR.LoadingState());
game.state.add('TitleState', new WR.TitleState());
game.state.add('IntroState', new WR.IntroState());
game.state.add('SchoolState', new WR.SchoolState());
game.state.add('WorldState', new WR.WorldState());
game.state.add('BattleState', new WR.BattleState());
game.state.add('JSONLevelState', new WR.JSONLevelState());


game.state.start('BootState', true, false, "assets/levels/title_screen.json", "TitleState");

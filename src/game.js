function Game() {
  this._totalScore = 0
  this._frame = 1
  this._gameOver = false
};

Game.prototype.updateScore = function(frameScore) {
  this._totalScore += frameScore;
}

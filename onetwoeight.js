var stats = require('fast-stats').Stats;

function OneTwoEight(len, tol) {
  this.len = len || 20;
  this.tol = tol || 0.2;
  this.beats = new stats();
  this.tt = 0;
  this.t = 0;
}

OneTwoEight.prototype.tap = function() {
  beats = this.beats;
  this.t = this.tt;
  this.tt = Date.now();

  if (this.t == 0) return;

  diff = this.tt - this.t;
  mean = beats.amean();

  if (diff > mean * (1 + this.tol) || diff < mean * (1 - this.tol))
    beats.reset();
  else
    beats.push(diff);

  if (beats.length > this.len) beats.shift();
};

OneTwoEight.prototype.bpm = function(precise) {
  bpm = 60000 / this.beats.amean();

  if (! bpm) return;

  return precise ? bpm : Math.round(bpm);
}

module.exports = OneTwoEight;

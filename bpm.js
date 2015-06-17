var tty = require('tty');
var keypress = require('keypress');

var onetwoeight = require('./onetwoeight');

keypress(process.stdin);

counter = new onetwoeight();
precise = false;

var beat = 1;

process.stdin.on('keypress', function (ch, key) {
  if (key) {
    if (key.ctrl && key.name == 'c') {
      process.exit();
    } else if (key.name == 'space') {
      counter.tap();
      cur = counter.bpm(precise) || '???';
      console.log(beat++ + ' : ' + cur);
    } else if (key.name == 't') {
      precise = !precise;
      console.log(precise ? 'precision on' : 'precision off');
    }
  }
});

process.stdin.setRawMode(true);
process.stdin.resume();

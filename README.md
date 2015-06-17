# onetwoeight

OneTwoEight is a simple BPM counting library. Unlike other BPM counters, it uses
a rolling average to calculate BPM, as well as resetting the average when
extraneous values are detected.

## Install

```console
$ npm install onetwoeight
```

## Usage

The counter can be initiated with no arguments. If arguments are provided, they
are a length of rolling average window, and a tollerance range that beats can
fall in. If no parameters are used, they will default to a window of 20 and a
tolerance of 0.2.

```js
var onetwoeight = require('./onetwoeight');
bpm = new onetwoeight();
```

Beats are recorded using the tap method.

```js
bpm.tap();
```

The current bpm can be retreived with the bpm method. It can take an optional
boolean as a single paramater to indicate 'precision mode'. If the parameter
is true, it will not round the result of the calculation.

```js
bpm.bpm(); //128
bpm.bpm(true); // 128.88650100738751
```

## Counter

A demo counter is provided

```console
node bpm.js
```

Pressing the space bar will initiate a tap. Pressing t will toggle precision
mode. ```Ctrl + c``` will exit.

```console
1 : ???
2 : 130
3 : 125
4 : 127
5 : 126
6 : 125
7 : 127
8 : 126
9 : 127
10 : 128
```

'use strict';
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var GAP = 50;
var COL_WIDTH = 40;
var STAT_HEIGHT = 150;
var STAT_TOP = 90;
var TIME_TOP = 70;
var NAME_TOP = 245;

var maxNumber = 0;
var getMax = function (array) {
  for (var j = 0; j < array.length; j++) {
    if (array[j] > maxNumber) {
      maxNumber = array[j];
    }
  }
  return maxNumber;
};

var getRandom = function () {
  return Math.round(Math.random() * 100);
};

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var renderColumn = function (ctx, top, height, i, color) {
  ctx.fillStyle = color;
  ctx.fillRect((CLOUD_X + GAP + i * (GAP + COL_WIDTH)), STAT_TOP + top, COL_WIDTH, height);
};

var renderTitle = function (ctx, text, left, top) {
  ctx.fillStyle = 'black';
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillText(text, left, top);
  ctx.fillText(text, left, top);
};

var renderText = function (ctx, text, i, top) {
  var left = CLOUD_X + GAP + i * (GAP + COL_WIDTH);
  ctx.fillStyle = 'black';
  ctx.textBaseline = 'hanging';
  ctx.fillText(text, left, top);
  ctx.fillText(text, left, top);
};

var getColor = function (name) {
  var color = '';
  if (name === 'Вы') {
    color = 'rgba(255, 0, 0, 1)';
  } else {
    var saturation = getRandom();
    color = 'hsl(240, ' + saturation + '%, 50%)';
  }
  return color;
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, 110, 10, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, 0, 'white');
  renderTitle(ctx, 'Ура вы победили!', 130, 25);
  renderTitle(ctx, 'Список результатов:', 130, 45);

  var max = getMax(times);

  for (var i = 0; i < names.length; i++) {
    var height = times[i] * STAT_HEIGHT / max;
    var top = STAT_HEIGHT - height;
    var color = getColor(names[i]);

    renderColumn(ctx, top, height, i, color);
    renderText(ctx, Math.round(times[i]), i, TIME_TOP + top);
    renderText(ctx, names[i], i, NAME_TOP);
  }
};

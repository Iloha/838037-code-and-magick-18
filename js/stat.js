'use strict';
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var GAP = 50;
var COL_WIDTH = 40;

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
  ctx.fillRect((CLOUD_X + GAP + i * (GAP + COL_WIDTH)), 90 + top, COL_WIDTH, height);
};

var renderTitle = function (ctx, color, font, text, left, top) {
  ctx.fillStyle = color;
  ctx.font = font;
  ctx.textBaseline = 'hanging';
  ctx.fillText(text, left, top);
  ctx.fillText(text, left, top);
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, 110, 10, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, 0, 'white');

  renderTitle(ctx, 'black', '16px PT Mono', 'Ура вы победили!', 130, 25);
  renderTitle(ctx, 'black', '16px PT Mono', 'Список результатов:', 130, 45);

  var max = getMax(times);
  this.console.log(max);

  for (var i = 0; i < names.length; i++) {
    var height = times[i] * 150 / max;
    var top = 150 - height;
    var color;
    if (names[i] === 'Вы') {
      color = 'rgba(255, 0, 0, 1)';
    } else {
      var saturation = getRandom();
      color = 'hsl(240, ' + saturation + '%, 50%)';
    }

    renderColumn(ctx, top, height, i, color);

    ctx.fillStyle = 'black';
    ctx.textBaseline = 'hanging';
    ctx.fillText(Math.round(times[i]), CLOUD_X + GAP + i * (GAP + COL_WIDTH), 70 + top);
    ctx.fillText(names[i], CLOUD_X + GAP + i * (GAP + COL_WIDTH), 245);
  }
};

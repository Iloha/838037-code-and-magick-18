'use strict';
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var GAP = 50;
var COL_WIDTH = 40;

var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, 110, 10, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, 0, 'white');

  ctx.fillStyle = 'black';
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', 130, 25);
  ctx.fillText('Список результатов:', 130, 45);

  var max = 0;
  for (var i = 0; i < times.length; i++) {
    if (times[i] > max) {
      max = times[i];
    }
  }

  for (var i = 0; i < names.length; i++) {
    var height = times[i] * 150 / max;
    var top = 150 - height;
    var color;
    if (names[i] === 'Вы') {
      color = 'rgba(255, 0, 0, 1)';
    } else {
      var saturation = Math.round(Math.random()*100);
      color = 'hsl(240, ' + saturation + '%, 50%)';
    }
    ctx.fillStyle = color;
    ctx.fillRect((CLOUD_X + GAP + i * (GAP + COL_WIDTH)), 90 + top, COL_WIDTH, height);
    ctx.fillStyle = 'black';
    ctx.textBaseline = 'hanging';
    ctx.fillText(Math.round(times[i]), CLOUD_X + GAP + i * (GAP + COL_WIDTH), 70 + top);
    ctx.fillText(names[i], CLOUD_X + GAP + i * (GAP + COL_WIDTH), 245);
  };
}

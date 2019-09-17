'use strict';

window.renderStatistics = function (ctx, names, times) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 10, 420, 270);
  ctx.fillStyle = 'white';
  ctx.fillRect(100, 0, 420, 270);
  ctx.fillStyle = 'black';
  ctx.font = '16px PT Mono'
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', 110, 20);
  ctx.fillText('Список результатов:', 110, 40);

  var max = 0;
  for (var i = 0; i < times.length; i++) {
    if(times[i] > max) {
      max = times[i];
    }
  }

  for (var i = 0; i < names.length; i++) {
    var height = times[i]*150/max;
    var top = 150 - height;
    var color;
    if (names[i] === 'Вы') {
      color = 'rgba(255, 0, 0, 1)';
    } else {
      color = 'hsl(240,100%, 50%)'
    }
    ctx.fillStyle = color;
    ctx.fillRect((130 + i * 90), 90 + top, 40, height);
    ctx.textBaseline = 'hanging';
    ctx.fillText(Math.round(times[i]), 130 + i * 90, 70 + top);
    ctx.fillText(names[i], 130 + i * 90, 245);
  };
}

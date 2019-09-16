'use strict';

window.renderStatistics = (function (ctx, names, times) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 10, 420, 270);
  ctx.fillStyle = 'white';
  ctx.fillRect(100, 0, 420, 270);
  ctx.fillStyle = 'black';
  ctx.font = '16px PT Mono'
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', 110, 20);
  ctx.fillText('Список результатов:', 110, 40);
})

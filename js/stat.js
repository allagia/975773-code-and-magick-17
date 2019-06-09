'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var BAR_WIDTH = 40;
var BAR_HEIGHT = 150;
var BAR_GAP = 50;
var TEXT_HEIGHT = 20;
var HEADER_HEIGHT = CLOUD_Y + GAP * 2 + TEXT_HEIGHT * 2 + GAP * 2;

var names = ['Вы', 'Кекс', 'Катя', 'Игорь'];
var times = [2725, 4025, 1244, 1339];
var colors = ['rgba(255, 0, 0, 1)', 'rgba(31, 58, 147, 1)', 'rgba(92, 151, 191, 1)', 'rgba(34, 49, 63, 1)'];

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  var maxTime = getMaxElement(times);

  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillStyle = '#000';
  ctx.fillText('Ура вы победили!', CLOUD_X + GAP * 2, CLOUD_Y + GAP * 2);
  ctx.fillText('Список результатов:', CLOUD_X + GAP * 2, CLOUD_Y + GAP * 2 + TEXT_HEIGHT);

  for (var i = 0; i < names.length; i++) {
    ctx.fillText(names[i], (CLOUD_X + BAR_GAP) + (BAR_WIDTH + BAR_GAP) * i, HEADER_HEIGHT + BAR_HEIGHT + GAP);
    var BAR_PERCENT = Math.round(times[i]) * BAR_HEIGHT / maxTime;
    ctx.fillText(Math.round(times[i]), (CLOUD_X + BAR_GAP) + (BAR_WIDTH + BAR_GAP) * i, HEADER_HEIGHT + BAR_HEIGHT - BAR_PERCENT - TEXT_HEIGHT);
    ctx.fillStyle = colors[i];
    ctx.fillRect((CLOUD_X + BAR_GAP) + (BAR_WIDTH + BAR_GAP) * i, HEADER_HEIGHT + BAR_HEIGHT - BAR_PERCENT, BAR_WIDTH, BAR_PERCENT);
    ctx.fillStyle = '#000';
  }
};

'use strict';

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var namesArray = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var surnamesArray = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColorArray = [ 'rgb (101, 137, 164)', 'rgb (241, 43, 107)', 'rgb (146, 100, 161)', 'rgb (56, 159, 117)', 'rgb (215, 210, 55)', 'rgb (0, 0, 0)'];
var eyesColor = ['black', 'red', 'blue', 'yellow',  'green'];


var getRandomFromArray = function(array) {
  return array[Math.floor(Math.random() * array.length)];
};

// var nameValue = getRandomFromArray(namesArray);
// var surnameValue = getRandomFromArray(surnamesArray);
// var coatColorValue = getRandomFromArray(coatColorArray);
// var eyesColorValue = getRandomFromArray(eyesColor);

var heroesArray = [];

for ( var i = 0; i < 4; i++) {
  heroesArray.push({
    name: getRandomFromArray(namesArray) + ' ' + getRandomFromArray(surnamesArray),
    coatColor: getRandomFromArray(coatColorArray),
    eyesColor: getRandomFromArray(eyesColor)
  });
}

var wizardsList = document.querySelector('.setup-similar-list');
var wizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

for (var j = 0; j < heroesArray.length; j++) {
  var wizardElement = wizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = heroesArray[j].name;
  wizardElement.querySelector('.wizard-coat').style.fill = heroesArray[j].coatColor;
  wizardsList.appendChild(wizardElement);
}

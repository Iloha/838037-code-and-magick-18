'use strict';
var HEROES_NUMBER = 4;
var userDialog = document.querySelector('.setup');
var setUpSimilar = userDialog.querySelector('.setup-similar');
var wizardsList = userDialog.querySelector('.setup-similar-list');
var wizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

var namesArray = [
  'Иван',
  'Хуан Себастьян',
  'Мария', 'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон'
];

var surnamesArray = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг'
];

var coatColorArray = [
  'rgb (101, 137, 164)',
  'rgb (241, 43, 107)',
  'rgb (146, 100, 161)',
  'rgb (56, 159, 117)',
  'rgb (215, 210, 55)',
  'rgb (0, 0, 0)'
];

var eyesColor = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];

var getRandomFromArray = function (array) {
  return array[Math.floor(Math.random() * array.length)];
};

var generateWizardsData = function () {
  var heroesArray = [];

  for (var i = 0; i < HEROES_NUMBER; i++) {
    heroesArray.push({
      name: getRandomFromArray(namesArray) + ' ' + getRandomFromArray(surnamesArray),
      coatColor: getRandomFromArray(coatColorArray),
      eyesColor: getRandomFromArray(eyesColor)
    });
  }

  return heroesArray;
};

var renderWizard = function (wizard) {
  var wizardElement = wizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var renderWizardsList = function (array) {
  var fragment = document.createDocumentFragment();

  for (var j = 0; j < array.length; j++) {
    fragment.appendChild(renderWizard(array[j]));
  }

  return fragment;
};

var wizardsData = generateWizardsData();
var fragment = renderWizardsList(wizardsData);
wizardsList.appendChild(fragment);

userDialog.classList.remove('hidden');
setUpSimilar.classList.remove('hidden');

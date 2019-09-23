'use strict';

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var namesArray = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var surnamesArray = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColorArray = ['rgb (101, 137, 164)', 'rgb (241, 43, 107)', 'rgb (146, 100, 161)', 'rgb (56, 159, 117)', 'rgb (215, 210, 55)', 'rgb (0, 0, 0)'];
var eyesColor = ['black', 'red', 'blue', 'yellow', 'green'];


var getRandomFromArray = function (array) {
  return array[Math.floor(Math.random() * array.length)];
};

var generateWizardsData = function () {
  var heroesArray = [];
  for (var i = 0; i < 4; i++) {
    heroesArray.push({
      name: getRandomFromArray(namesArray) + ' ' + getRandomFromArray(surnamesArray),
      coatColor: getRandomFromArray(coatColorArray),
      eyesColor: getRandomFromArray(eyesColor)
    });
  }
  return heroesArray;
};

var renderWizard = function (wizard) {
  var wizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

  var wizardElement = wizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return wizardElement;
};

var renderWizardsList = function (array) {
  var fragment = document.createDocumentFragment();
  var wizardsList = document.querySelector('.setup-similar-list');

  for (var j = 0; j < array.length; j++) {
    fragment.appendChild(renderWizard(array[j]));
  }
  wizardsList.appendChild(fragment);
};

var wizardsData = generateWizardsData();

renderWizardsList(wizardsData);

var setUpSimilar = document.querySelector('.setup-similar');
setUpSimilar.classList.remove('hidden');

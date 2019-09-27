'use strict';
var HEROES_NUMBER = 4;
var ENTER_CODE = 13;
var ESC_CODE = 27;
var userDialog = document.querySelector('.setup');
var setUpSimilar = userDialog.querySelector('.setup-similar');
var wizardsList = userDialog.querySelector('.setup-similar-list');
var wizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');
var setupOpen = document.querySelector('.setup-open');
var setup = document.querySelector('.setup');
var setupClose = setup.querySelector('.setup-close');
var setupFormSubmit = setup.querySelector('.setup-submit');
var setupForm = setup.querySelector('setup-wizard-form');
var nameField = setup.querySelector('.setup-user-name');
var wizardCoat = document.querySelector('.setup-wizard .wizard-coat ');
var wizardCoatField = setup.querySelector('input[name="coat-color"]');
var wizardEyes = document.querySelector('.setup-wizard .wizard-eyes');
var wizardEyesField = document.querySelector('input[name="eyes-color"]');
var wizardFireball = document.querySelector('.setup-fireball-wrap');
var wizardFireballField = document.querySelector('input[name="fireball-color"]');

var namesData = [
  'Иван',
  'Хуан Себастьян',
  'Мария', 'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон'
];

var surnamesData = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг'
];

var coatColorData = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];

var eyesColorData = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];

var fireballColorData = [
  '#ee4830',
  '#30a8ee',
  '#5ce6c0',
  '#e848d5',
  '#e6e848'
];

var getRandomFromArray = function (array) {
  return array[Math.floor(Math.random() * array.length)];
};

var generateWizardsData = function () {
  var heroesArray = [];

  for (var i = 0; i < HEROES_NUMBER; i++) {
    heroesArray.push({
      name: getRandomFromArray(namesData) + ' ' + getRandomFromArray(surnamesData),
      coatColor: getRandomFromArray(coatColorData),
      eyesColor: getRandomFromArray(eyesColorData)
    });
  }

  return heroesArray;
};

var closeSetup = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onEnterPressSubmitForm);
  document.removeEventListener('click', onFormSubmit);
  document.removeEventListener('keydown', onEscPress);
  document.removeEventListener('keydown', onButtonClickClose);
  document.removeEventListener('click', onUpdateCoatColor);
  document.removeEventListener('click', onUpdateEyesColor);
  document.removeEventListener('click', onUpdateFireballColor);
};

var onEscPress = function (evt) {
  if (evt.keyCode === ESC_CODE && document.activeElement !== nameField) {
    closeSetup();
  }
};

var onEnterPressSetupClose = function (evt) {
  if (evt.keyCode === ENTER_CODE) {
    onButtonClickClose();
  }
};

var onEnterPress = function (evt) {
  if (evt.keyCode === ENTER_CODE) {
    onButtonClickOpen();
  }
};


var onEnterPressSubmitForm = function (evt) {
  if (evt.keyCode === ENTER_CODE) {
    onFormSubmit();
  }
};

var onButtonClickOpen = function () {
  setup.classList.remove('hidden');

  document.addEventListener('keydown', onEscPress);
};

var onButtonClickClose = function () {
  closeSetup();
};

var onFormSubmit = function () {
  setupForm.submit();
};

var onUpdateCoatColor = function () {
  var coatColor = getRandomFromArray(coatColorData);
  wizardCoatField.value = coatColor;
  wizardCoat.style.fill = coatColor;
};

var onUpdateEyesColor = function () {
  var eyesColor = getRandomFromArray(eyesColorData);
  wizardEyesField.value = eyesColor;
  wizardEyes.style.fill = eyesColor;
};

var onUpdateFireballColor = function () {
  var fireballColor = getRandomFromArray(fireballColorData);
  wizardFireballField.value = fireballColor;
  wizardFireball.style.background = fireballColor;
};

var renderWizard = function (wizard) {
  var wizardElement = wizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColorData;

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

setupOpen.addEventListener('click', onButtonClickOpen);

setupOpen.addEventListener('keydown', onEnterPress);

setupClose.addEventListener('click', onButtonClickClose);

setupClose.addEventListener('keydown', onEnterPressSetupClose);

wizardCoat.addEventListener('click', onUpdateCoatColor);

wizardEyes.addEventListener('click', onUpdateEyesColor);

wizardFireball.addEventListener('click', onUpdateFireballColor);

setupFormSubmit.addEventListener('click', onFormSubmit);

setupFormSubmit.addEventListener('keydown', onEnterPressSubmitForm);

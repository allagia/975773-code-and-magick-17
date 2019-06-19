'use strict';
var NUMBER_OF_WIZARDS = 4;
var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

var wizardNames = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var wizardSurnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];
var fireballColors = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

var userDialog = document.querySelector('.setup');
var openUserDialog = document.querySelector('.setup-open');
var closeUserDialog = userDialog.querySelector('.setup-close');
var setupOpenIcon = document.querySelector('.setup-open-icon');
var setupWizard = document.querySelector('.setup-wizard');
var setupUserName = userDialog.querySelector('.setup-user-name');
var wizardCoat = setupWizard.querySelector('.wizard-coat');
var wizardEyes = setupWizard.querySelector('.wizard-eyes');
var wizardFireball = document.querySelector('.setup-fireball-wrap');
var setupPleer = document.querySelector('.setup-player');
var inputCoatColor = setupPleer.querySelector('input[name = coat-color]');
var inputEyesColor = setupPleer.querySelector('input[name = eyes-color]');
var inputFireballColor = wizardFireball.querySelector('input[name = fireball-color]');

var randomInteger = function (min, max) {
  return Math.floor(min + Math.random() * (max + 1 - min));
};

var openPopup = function () {
  userDialog.classList.remove('hidden');
};

var closePopup = function () {
  userDialog.classList.add('hidden');
};

var onPopupEscPress = function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    closePopup();
  }
};

openUserDialog.addEventListener('click', openPopup);

closeUserDialog.addEventListener('click', closePopup);

closeUserDialog.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});

setupOpenIcon.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

document.addEventListener('keydown', onPopupEscPress);

setupUserName.addEventListener('focus', function () {
  document.removeEventListener('keydown', onPopupEscPress);
});

setupUserName.addEventListener('blur', function () {
  document.addEventListener('keydown', onPopupEscPress);
});

wizardCoat.addEventListener('click', function () {
  wizardCoat.style.fill = coatColors[randomInteger(0, 5)];
  inputCoatColor.value = wizardCoat.style.fill;
});

wizardEyes.addEventListener('click', function () {
  wizardEyes.style.fill = eyesColors[randomInteger(0, 4)];
  inputEyesColor.value = wizardEyes.style.fill;
});

wizardFireball.addEventListener('click', function () {
  var color = fireballColors[randomInteger(0, 4)];
  wizardFireball.style.backgroundColor = color;
  inputFireballColor.value = color;
});

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

document.querySelector('.setup-similar').classList.remove('hidden');


var getWizardsArray = function (numberOfWizards) {
  var wizards = [];
  for (var i = 0; i < numberOfWizards; i++) {
    wizards.push(
        {
          name: wizardNames[randomInteger(0, 7)] + ' ' + wizardSurnames[randomInteger(0, 7)],
          coatColor: coatColors[randomInteger(0, 5)],
          eyesColor: eyesColors[randomInteger(0, 4)]
        }
    );
  }

  return wizards;
};

var wizards = getWizardsArray(NUMBER_OF_WIZARDS);

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizards[i].name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');

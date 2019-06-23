'use strict';
var NUMBER_OF_WIZARDS = 4;

var wizardNames = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var wizardSurnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];
var fireballColors = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

var userDialog = document.querySelector('.setup');
var setupWizard = document.querySelector('.setup-wizard');
var wizardCoat = setupWizard.querySelector('.wizard-coat');
var wizardEyes = setupWizard.querySelector('.wizard-eyes');
var wizardFireball = document.querySelector('.setup-fireball-wrap');
var setupPleer = document.querySelector('.setup-player');
var inputCoatColor = setupPleer.querySelector('input[name = coat-color]');
var inputEyesColor = setupPleer.querySelector('input[name = eyes-color]');
var inputFireballColor = wizardFireball.querySelector('input[name = fireball-color]');

wizardCoat.addEventListener('click', function () {
  wizardCoat.style.fill = coatColors[window.util.randomInteger(0, 5)];
  inputCoatColor.value = wizardCoat.style.fill;
});

wizardEyes.addEventListener('click', function () {
  wizardEyes.style.fill = eyesColors[window.util.randomInteger(0, 4)];
  inputEyesColor.value = wizardEyes.style.fill;
});

wizardFireball.addEventListener('click', function () {
  var color = fireballColors[window.util.randomInteger(0, 4)];
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
          name: wizardNames[window.util.randomInteger(0, 7)] + ' ' + wizardSurnames[window.util.randomInteger(0, 7)],
          coatColor: coatColors[window.util.randomInteger(0, 5)],
          eyesColor: eyesColors[window.util.randomInteger(0, 4)]
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

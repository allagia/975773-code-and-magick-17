'use strict';

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

document.querySelector('.setup-similar').classList.remove('hidden');

var wizardNames = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var wizardSurnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];

var getRandomWizardName = function () {
  for (var i = wizardNames.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var wizardName = wizardNames[i];
    wizardNames[i] = wizardNames[j];
    wizardNames[j] = wizardName;
  }
  return wizardName;
};

var getRandomWizardSurname = function () {
  for (var i = wizardSurnames.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var wizardSurname = wizardSurnames[i];
    wizardSurnames[i] = wizardSurnames[j];
    wizardSurnames[j] = wizardSurname;
  }
  return wizardSurname;
};

var getRandomWizardCoatColor = function () {
  for (var i = coatColors.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var wizardCoatColor = coatColors[i];
    coatColors[i] = coatColors[j];
    coatColors[j] = wizardCoatColor;
  }
  return wizardCoatColor;
};

var getRandomWizardEyesColor = function () {
  for (var i = eyesColors.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var wizardEyesColor = eyesColors[i];
    eyesColors[i] = eyesColors[j];
    eyesColors[j] = wizardEyesColor;
  }
  return wizardEyesColor;
};

var wizards = [
  {
    name: getRandomWizardName() + ' ' + getRandomWizardSurname(),
    coatColor: getRandomWizardCoatColor(),
    eyesColor: getRandomWizardEyesColor()
  },
  {
    name: getRandomWizardName() + ' ' + getRandomWizardSurname(),
    coatColor: getRandomWizardCoatColor(),
    eyesColor: getRandomWizardEyesColor()
  },
  {
    name: getRandomWizardName() + ' ' + getRandomWizardSurname(),
    coatColor: getRandomWizardCoatColor(),
    eyesColor: getRandomWizardEyesColor()
  },
  {
    name: getRandomWizardName() + ' ' + getRandomWizardSurname(),
    coatColor: getRandomWizardCoatColor(),
    eyesColor: getRandomWizardEyesColor()
  }
];

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

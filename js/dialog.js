'use strict';
(function () {
  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;

  var userDialog = document.querySelector('.setup');
  var openUserDialog = document.querySelector('.setup-open');
  var closeUserDialog = userDialog.querySelector('.setup-close');
  var setupOpenIcon = document.querySelector('.setup-open-icon');
  var setupUserName = userDialog.querySelector('.setup-user-name');
  var dialogHandler = userDialog.querySelector('.upload');

  /* Управление открытием/ закрытием окна пользователя*/
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

  /* Управление перетаскиванием окна пользователя*/
  dialogHandler.addEventListener('mousedown', function (evt) {
    evt.preventDefault();

    var startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    var dragged = false;

    var onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();
      dragged = true;

      var shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      userDialog.style.top = (userDialog.offsetTop - shift.y) + 'px';
      userDialog.style.left = (userDialog.offsetLeft - shift.x) + 'px';
    };

    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);

      if (dragged) {
        var onClickPreventDefault = function (clickEvt) {
          clickEvt.preventDefault();
          dialogHandler.removeEventListener('click', onClickPreventDefault);
        };

        dialogHandler.addEventListener('click', onClickPreventDefault);
      }

    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });
})();

'use strict';
(function () {
  window.util = {
    getMaxElement: function (arr) {
      var maxElement = arr[0];

      for (var i = 0; i < arr.length; i++) {
        if (arr[i] > maxElement) {
          maxElement = arr[i];
        }
      }

      return maxElement;
    },

    randomInteger: function (min, max) {
      return Math.floor(min + Math.random() * (max + 1 - min));
    }
  };
})();
/* нужно ли выносить сюда константы? как на них ссылаться?*/

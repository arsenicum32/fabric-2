(function(){
  /**
   * @param { координаты по x} t
   * @param { координаты по y} a
   * @return { массив (x,y) где для каждого значения 0,1, в зависимости от того, в какой части экрана находился клик}
   */
  function dCr(t, a, el) {
    var $el = el || $(window);
    var d = $el.width();
    var b = $el.height();
    return[Math.round(t / d), Math.round(a / b)];
  }
  /**
   * @param {?} action
   * @param {?} type
   * @param {Object} $element
   * @return {undefined}

    функция, которая позиционирует эллемент в окне
   */
   window.positM = function(action, type, $element) {
    $element = $element || $("interface");
    /** @type {Array} */
    var types = [0, 0];
    if (dCr(action, type)[1]) {
      /** @type {number} */
      types[0] = -$element.height();
    }
    if (dCr(action, type)[0]) {
      /** @type {number} */
      types[1] = -$element.width();
    }
    $element.css("top", type + types[0] + 5 + "px");
    $element.css("left", action + types[1] + 5 + "px");
    $element.find("#logging").text(dCr(action, type));
  }
})();

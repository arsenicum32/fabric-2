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
   window.positM = function(action, type, $element , owner) {
    $element = $element || $("interface");
    var types = [0, 0];
    if (dCr(action, type)[1]) {
      types[0] = -$element.height();
    }
    if (dCr(action, type)[0]) {
      types[1] = -$element.width();
    }
    $element.css("top", type + types[0] + 5 + "px");
    $element.css("left", action + types[1] + 5 + "px");
    console.log(owner);
    if (owner.url){
      $.get(owner.url , function(data){
        $element.html(data);
      });
      $element.html("<h2>загрузка...</h2>");
      return true;
    }else if(owner.html){
      $element.html(owner.html);
      return true;
    }else if (owner.info){
        $element.html("<canvas id='info'></canvas>");
        setup_info(owner.info);
        return true;
    }else if (owner.json){
      $.get(owner.json , function(data){
        $element.html("<canvas id='info'></canvas>");
        setup_info(typeof data != typeof ''?data.toString():data);
      });
        return true;
    }  else{
      return false;
    }
  }
})();

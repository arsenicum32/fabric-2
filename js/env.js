var env = {
  runner: function(){             //  это пиздец гениально!!!
    var args = arguments;         //  теперь у нас бесконечно дохуя обработчиков вместо 10ти
    return function(e){           //  и всё летает
      for(var i in args){
        if(typeof args[i] === typeof function(){}) args[i](e);
      }
    }
  },
  nav: {
    down: function(options){
      if (canvas.getActiveObject() == null) {
        env.nav.vars[1] = options.e.clientX;
        env.nav.vars[2] = options.e.clientY;
        env.nav.vars[0] = true;
      }
    },
    move: function(options){
      if (canvas.getActiveObject() == null && env.nav.vars[0]) {
        canvas.absolutePan(new fabric.Point(env.nav.vars[3] - options.e.clientX + env.nav.vars[1], env.nav.vars[4] - options.e.clientY + env.nav.vars[2]));
        Ox = env.nav.vars[3] - options.e.clientX + env.nav.vars[1];
        Oy = env.nav.vars[4] - options.e.clientY + env.nav.vars[2];
      }
    },
    up: function(options){
      if (canvas.getActiveObject() == null) { // действия с канвасом
        env.nav.vars[3] -= options.e.clientX - env.nav.vars[1];
        env.nav.vars[4] -= options.e.clientY - env.nav.vars[2];
        canvas.absolutePan(new fabric.Point(env.nav.vars[3], env.nav.vars[4]));
        env.nav.vars[0] = false;
      }
    },
    vars: [false, 0,0,-canvas.getWidth()/2,-canvas.getHeight()/2]
  },
  menu: {
    down: function(e){
      env.menu.SHOWMENU=true;
    },
    move: function(e){
      env.menu.SHOWMENU = false;
    },
    up: function(options){
      var once = true;
      if(options.target){
        if(env.menu.SHOWMENU && once){
          once = false;
          $('interface').toggleClass('hid');
          positM(options.e.clientX,options.e.clientY, $("interface") , options.target);
        }
      }
      if(env.menu.SHOWMENU && !$('interface').hasClass('hid') && once){
        once = false;
          $('interface').toggleClass('hid');
      }
    },
    SHOWMENU: false
  }
}

var objSelect = {
  down: function(options) {
    if (options.target) {   // действия с объектом
      options.target.bringToFront();
      options.target.opacity = 0.5;
      options.target.hasControls = options.target.hasBorders = false;
      canvas.renderAll();
    }
  },
  up: function(e){
    if(e.target) e.target.opacity = 1;
  },
  over: function(e) {
    makeHandler('scaleX', 0.35, 50)(e);
    makeHandler('scaleY', 0.35, 50)(e);
  },
  out: function(e) {
    makeHandler('scaleX', 0.25, 50)(e);
    makeHandler('scaleY', 0.25, 50)(e);
  },
  moved: function(e) {
    if(e.target) e.target.opacity = 0.5;
  },
  modified: function(e) {
    if(e.target) e.target.opacity = 1;
  }
}

canvas.on({
  'mouse:down': env.runner(env.nav.down, env.menu.down , objSelect.down),
  'mouse:up': env.runner(env.nav.up , env.menu.up, objSelect.up, ChangePerson.up, eatCompetition.up ),
  'mouse:move': env.runner(env.nav.move, env.menu.move),
  'object:moved': env.runner( objSelect.moved ),
  'object:modified': env.runner( objSelect.modified ),
  'mouse:over': env.runner( objSelect.over ),
  'mouse:out': env.runner( objSelect.out ),
  'touch:gesture': env.runner(),
  'touch:dragstart': env.runner(),
  'touch:dragenter': env.runner(),
  'touch:dragend': env.runner(),
  'touch:orientation': env.runner(),
  'touch:shake': env.runner(),
  'touch:longpress': env.runner()
});

//fabric.Object.prototype.transparentCorners = false;

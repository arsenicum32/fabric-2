window.canvas = new fabric.Canvas('c');
canvas.setHeight($(window).height());
canvas.setWidth($(window).width());
canvas.selection = false;
canvas.defaultCursor = 'move';
canvas.hoverCursor = 'pointer';

function retina(){
    if( window.devicePixelRatio !== 1 ){
          var c = canvas.getElement();
          var w = c.width, h = c.height;
          c.setAttribute('width', w*window.devicePixelRatio);
          c.setAttribute('height', h*window.devicePixelRatio);
          c.getContext('2d').scale(window.devicePixelRatio, window.devicePixelRatio);
        }
    canvas.renderAll();
  }
  retina();

$(window).on('resize', function() {
  canvas.setHeight($(window).height());
  canvas.setWidth($(window).width());
  retina();
});

function makeHandler(opt , arg, duration) {
    return function(e) {
      if (e.target) {
        e.target.originX = 'center';
        e.target.originY = 'center';
        e.target.animate(opt , arg, {
          duration: duration || 100,
          onChange: canvas.renderAll.bind(canvas)
        });
      }
    };
  }

// create a rectangle object
var offsetX = -canvas.getWidth()/2;
var offsetY = -canvas.getHeight()/2;
canvas.absolutePan(new fabric.Point(offsetX, offsetY));
var Ox = 0, Oy = 0;

var PRX, PRY;
var CAN = false;
var SHOWMENU = false;

var memberTarget;
canvas.on({
  'mouse:down': function(options) {
    SHOWMENU=true;
    if (options.target) {
      makeHandler('scaleX', options.target.scaleX*1.5, 50)(options);
      makeHandler('scaleY', options.target.scaleY*1.5 , 50)(options);
      options.target.opacity = 0.5;
      options.target.hasControls = options.target.hasBorders = false;
      canvas.renderAll();
    };
    if (canvas.getActiveObject() == null) {
      PRX = options.e.clientX;
      PRY = options.e.clientY;
      CAN = true;
    }
  },
  'mouse:up': function(options) {
    var once = true;
    if (options.target) {
      makeHandler('scaleX', options.target.scaleX/1.5, 50)(options);
      makeHandler('scaleY', options.target.scaleY/1.5, 50)(options);
      options.target.opacity = 1;
      canvas.renderAll();
      if(SHOWMENU && once){
        once = false;
        // $('interface').toggleClass('hid');
        // positM(options.e.clientX,options.e.clientY);
      }
    };
    if(SHOWMENU && !$('interface').hasClass('hid') && once){
      once = false;
        $('interface').toggleClass('hid');
        positM(options.e.clientX,options.e.clientY);
      }
    if (canvas.getActiveObject() == null) {
      offsetX -= options.e.clientX - PRX;
      offsetY -= options.e.clientY - PRY;
      canvas.absolutePan(new fabric.Point(offsetX, offsetY));
      CAN = false;
    }
  },
  'mouse:move': function(options) {
    SHOWMENU = false;
    if (canvas.getActiveObject() == null && CAN) {
      canvas.absolutePan(new fabric.Point(offsetX - options.e.clientX + PRX, offsetY - options.e.clientY + PRY));
      Ox = offsetX - options.e.clientX + PRX;
      Oy = offsetY - options.e.clientY + PRY;
    }
    /////////// оптимизация канваса /////////////
    // for (var n = 0; n < canvas.getObjects().length; n++) {
    //  canvas.item(n).visible = inCanvas(canvas.item(n));
    // }
  },
  'object:moved': function(e) {
    e.target.opacity = 0.5;
  },
  'object:modified': function(e) {
    e.target.opacity = 1;
    //e.target.foobar = 'hello';
    //alert(e.target.foobar);
  },
  'mouse:over': function(e) {
  },
  'mouse:out': function(e) {
  },
  'touch:gesture': function() {
    alert('gesture');
  },
  'touch:dragstart': function(options) {
    if (options.target) {
      options.target.opacity = 0.5;
      canvas.renderAll();
    };
    if (canvas.getActiveObject() == null) {
      PRX = options.e.clientX;
      PRY = options.e.clientY;
      CAN = true;
    }
  },
  'touch:dragenter': function(options) {
    if (canvas.getActiveObject() == null && CAN) {
      canvas.absolutePan(new fabric.Point(offsetX - options.e.clientX + PRX, offsetY - options.e.clientY + PRY));
    }
  },
  'touch:dragend': function(options) {
    if (options.target) {
      options.target.opacity = 1;
      canvas.renderAll();
    };
    if (canvas.getActiveObject() == null) {
      offsetX -= options.e.clientX - PRX;
      offsetY -= options.e.clientY - PRY;
      canvas.absolutePan(new fabric.Point(offsetX, offsetY));
      CAN = false;
    }
  },
  'touch:orientation': function() {
    alert('shake');
  },
  'touch:shake': function() {
    alert('orientation');
  },
  'touch:longpress': function() {
    alert('longpress');
  }
});
fabric.Object.prototype.transparentCorners = false;

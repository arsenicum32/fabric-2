window.canvas = new fabric.Canvas('c');
canvas.setHeight($(window).height());
canvas.setWidth($(window).width());
canvas.selection = false;
canvas.defaultCursor = 'move';
canvas.hoverCursor = 'pointer';

document.addEventListener('touchstart', function(){
    console.log('touchstart', arguments);
    alert(arguments[0].touches[0].pageX);
}, false);
document.addEventListener('touchmove', function(){
    console.log('touchmove', arguments);
}, false);
document.addEventListener('touchend', function(){
    console.log('touchend', arguments);
}, false);

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

function makeHandler(opt , arg, duration , owner) {
  if(owner){
    owner.originX = 'center';
    owner.originY = 'center';
    owner.animate(opt , arg, {
      duration: duration || 100,
      onChange: canvas.renderAll.bind(canvas)
    });
  }else{
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
      options.target.bringToFront();
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
      options.target.opacity = 1;
      var near = findNear(options.target);
      action(options.target.name,near[1].name, function(act){
        if(act=='overmac' && near[0]<150){
          nextActionSeeAll();
          options.target.visible = false;
          canvas.forEachObject(function(item){
            if(item.name === "I'm"){
              item.visible = false;
              fabric.Image.fromURL("draws/ars2-02-sprite-2.png", function(oImg) {
                oImg.scale(0.25).originX = 'center';
                oImg.originY = 'center';
                oImg.set({
                  left: item.left,
                  top: item.top,
                  name: item.name,
                  delifnext: true
                });
                oImg.perPixelTargetFind = true;
                oImg.targetFindTolerance = 4;
                canvas.add(oImg);
                canvas.renderAll();
              });
            }
          });
        }
        if(act=='overuni' && near[0]<150){
          nextActionSeeAll();
          options.target.visible = false;
          canvas.forEachObject(function(item){
            if(item.name === "I'm"){
              item.visible = false;
              fabric.Image.fromURL("draws/ars2-02-sprite.png", function(oImg) {
                oImg.scale(0.25).originX = 'center';
                oImg.originY = 'center';
                oImg.set({
                  left: item.left,
                  top: item.top,
                  name: item.name,
                  delifnext: true
                });
                oImg.perPixelTargetFind = true;
                oImg.targetFindTolerance = 4;
                canvas.add(oImg);
                canvas.renderAll();
              });
            }
          });
        }
      });
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
    makeHandler('scaleX', 0.35, 50)(e);
    makeHandler('scaleY', 0.35, 50)(e);
  },
  'mouse:out': function(e) {
    makeHandler('scaleX', 0.25, 50)(e);
    makeHandler('scaleY', 0.25, 50)(e);
  },
  'touch:gesture': function() {
    alert('gesture');
  },
  'touch:dragstart': function(options) {
    alert('dragstart');
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
    alert('dragenter');
    if (canvas.getActiveObject() == null && CAN) {
      canvas.absolutePan(new fabric.Point(offsetX - options.e.clientX + PRX, offsetY - options.e.clientY + PRY));
    }
  },
  'touch:dragend': function(options) {
    alert('dragend');
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

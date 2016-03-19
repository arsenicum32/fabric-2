function setup(){
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
  // create a rectangle object
  window.offsetX = -canvas.getWidth()/2;
  window.offsetY = -canvas.getHeight()/2;
  canvas.absolutePan(new fabric.Point(offsetX, offsetY));
}

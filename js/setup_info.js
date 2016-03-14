function setup_info(data){
  window.info = new fabric.Canvas('info');
  info.setHeight($('interface').height());
  info.setWidth($('interface').width());
  info.defaultCursor = 'move';
  info.hoverCursor = 'pointer';

  function retina(){
      if( window.devicePixelRatio !== 1 ){
            var c = info.getElement();
            var w = c.width, h = c.height;
            c.setAttribute('width', w*window.devicePixelRatio);
            c.setAttribute('height', h*window.devicePixelRatio);
            c.getContext('2d').scale(window.devicePixelRatio, window.devicePixelRatio);
          }
      info.renderAll();
    }
    retina();

  $(window).on('resize', function() {
    info.setHeight($('interface').height());
    info.setWidth($('interface').width());
    retina();
  });

  //info.absolutePan(new fabric.Point(offsetX, offsetY));

  if(data){
    info.loadFromJSON(json, canvas.renderAll.bind(canvas), function(o, object) {
      //fabric.log(o, object);
    });
  }else{
    var Rect = new fabric.Rect({
            left: 10,
            top: 20,
            width: 120,
            height: 180,
            fill: 'red'
          });
    info.add(Rect);
    info.renderAll();
  }

  info.on({'mouse:down': function(e){
      if(e.target){
        var color = ['blue','red','yellow','hotpink'][Math.floor(Math.random()*4)];
        e.target.set({
          borderColor: color,
          cornerColor: color,
          cornerSize: $('interface').width()*0.016,
          transparentCorners: false
        });
        info.renderAll();
      }
    }});
}

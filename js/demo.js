// for (var i = 15; i--;) {
//   var dim = fabric.util.getRandomInt(30, 60);
//   var klass = ['Rect', 'Triangle', 'Circle'][fabric.util.getRandomInt(0, 2)];
//   var options = {
//     top: fabric.util.getRandomInt(0, 600),
//     left: fabric.util.getRandomInt(0, 600),
//     fill: 'green'
//   };
//   if (klass === 'Circle') {
//     options.radius = dim;
//   } else {
//     options.width = dim;
//     options.height = dim;
//   }
//   canvas.add(new fabric[klass](options));
// }

function addItem(source, left, top, angle){
  fabric.Image.fromURL(source, function(oImg) {
    oImg.scale(0.25).originX = 'center';
    oImg.originY = 'center';
    oImg.set({
      left: left,
      top: top,
      angle: angle
    });
    oImg.perPixelTargetFind = true;
    oImg.targetFindTolerance = 4;
    canvas.add(oImg);
    canvas.renderAll();
  });
}

var data = [
  {source: 'draws/ars-01.png', left: -120, top: -40, angle: 12},
  {source: 'draws/ars-04.png', left: fabric.util.getRandomInt(-140, -400), top: fabric.util.getRandomInt(-40, -80), angle: fabric.util.getRandomInt(-30,30)},
  {source: 'draws/ars-05.png', left: fabric.util.getRandomInt(140, 400), top: fabric.util.getRandomInt(-140, -180), angle: fabric.util.getRandomInt(-30,30)},
  {source: 'draws/ars-06.png', left: fabric.util.getRandomInt(-140, -400), top: fabric.util.getRandomInt(40, 80), angle: fabric.util.getRandomInt(-30,30)},
  {source: 'draws/ars-07.png', left: fabric.util.getRandomInt(140, 400), top: fabric.util.getRandomInt(240, -280), angle: fabric.util.getRandomInt(-30,30)},
  {source: 'draws/ars-08.png', left: fabric.util.getRandomInt(-140, 400), top: fabric.util.getRandomInt(40, 80), angle: fabric.util.getRandomInt(-30,30)},
  {source: 'draws/ars-09.png', left: fabric.util.getRandomInt(140, 400), top: fabric.util.getRandomInt(-40, 80), angle: fabric.util.getRandomInt(-30,30)},
  {source: 'draws/ars-10.png', left: fabric.util.getRandomInt(140, -400), top: fabric.util.getRandomInt(40, 80), angle: fabric.util.getRandomInt(-30,30)},
  {source: 'draws/ars-11.png', left: fabric.util.getRandomInt(140, 400), top: fabric.util.getRandomInt(140, 180), angle: fabric.util.getRandomInt(-30,30)},
  {source: 'draws/ars-02.png'}
];

for(var i in data){
  addItem(data[i].source , data[i].left || 0, data[i].top || 0, data[i].angle || 0);
}



fabric.Image.fromURL('sprite.png', function(img) {  //img.scaleToWidth(100);
    var patternSourceCanvas = new fabric.StaticCanvas();
    patternSourceCanvas.add(img);

    var pattern = new fabric.Pattern({
      source: function() {
        patternSourceCanvas.setDimensions({
          width: img.getWidth(),
          height: img.getHeight()
        });
        return patternSourceCanvas.getElement();
      },
      repeat: 'repeat'
    });

    var time = 0,
        interval;
    var Rect = new fabric.Rect({
        left: 0,
        top: 200,
        width: 50,
        height: 72,
        fill: pattern
      });
      Rect.on({
        'mousedown': function(){
          interval = setInterval(function(){
            time++;
            pattern.offsetX = 50*time;
            pattern.offsetY = 0;
            if(50*time>img.width){
              time=0;
            }
            canvas.renderAll();
          }, 50);
        },
        'moving': function(){
          pattern.offsetY = 70;
        },
        'mouseup': function(){
          time=0;
          pattern.offsetX = 50*time;
          pattern.offsetY = 0;
          canvas.renderAll();
          clearInterval(interval);
        }
      })

    canvas.add(Rect);
  });

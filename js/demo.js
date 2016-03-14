function addItem(source, props){
  fabric.Image.fromURL(source, function(oImg) {
    oImg.scale(0.25).originX = 'center';
    oImg.originY = 'center';
    oImg.set(props);
    oImg.perPixelTargetFind = true;
    oImg.targetFindTolerance = 4;
    canvas.add(oImg);
    canvas.renderAll();
  });
}

var data = [
  {source: 'draws/ars-01.png', props: {name:"macbook",tags:[],left: -120, top: -40, angle: 12}},
  {source: 'draws/ars-04.png', props: {tags:['competency'],left: fabric.util.getRandomInt(-140, -400), top: fabric.util.getRandomInt(-40, -80), angle: fabric.util.getRandomInt(-30,30)}},
  {source: 'draws/ars-05.png', props: {tags:['competency'],left: fabric.util.getRandomInt(140, 400), top: fabric.util.getRandomInt(-140, -180), angle: fabric.util.getRandomInt(-30,30)}},
  {source: 'draws/ars-06.png', props: {tags:['competency'],left: fabric.util.getRandomInt(-140, -400), top: fabric.util.getRandomInt(40, 80), angle: fabric.util.getRandomInt(-30,30)}},
  {source: 'draws/ars-07.png', props: {tags:['competency'],left: fabric.util.getRandomInt(140, 400), top: fabric.util.getRandomInt(240, -280), angle: fabric.util.getRandomInt(-30,30)}},
  {source: 'draws/ars-08.png', props: {tags:['competency'],left: fabric.util.getRandomInt(-140, 400), top: fabric.util.getRandomInt(40, 80), angle: fabric.util.getRandomInt(-30,30)}},
  {source: 'draws/ars-09.png', props: {tags:['competency'],left: fabric.util.getRandomInt(140, 400), top: fabric.util.getRandomInt(-40, 80), angle: fabric.util.getRandomInt(-30,30)}},
  {source: 'draws/ars-10.png', props: {tags:['competency'],left: fabric.util.getRandomInt(140, -400), top: fabric.util.getRandomInt(40, 80), angle: fabric.util.getRandomInt(-30,30)}},
  {source: 'draws/ars-11.png', props: {tags:['competency'],left: fabric.util.getRandomInt(140, 400), top: fabric.util.getRandomInt(140, 180), angle: fabric.util.getRandomInt(-30,30)}},
  {source: 'draws/balls-01.png', props: {name: "balls" ,tags:[],left: fabric.util.getRandomInt(400, 600), top: fabric.util.getRandomInt(-140, -180), angle: fabric.util.getRandomInt(-30,30)}},
  {source: 'draws/ars3-03.png', props: {name:"showboard",tags:[],left: fabric.util.getRandomInt(10, 10), top: fabric.util.getRandomInt(240, 280), angle: fabric.util.getRandomInt(-30,30)}},
  {source: 'draws/ars3-04.png', props: {name:"gitar",tags:[], html: "hi",left: fabric.util.getRandomInt(400, 600), top: fabric.util.getRandomInt(0, 80), angle: fabric.util.getRandomInt(-360,360)}},
  {source: 'draws/ars2-03.png', props: {name:"uni",tags:[],left: fabric.util.getRandomInt(-240, -400), top: fabric.util.getRandomInt(-300, -190), angle: fabric.util.getRandomInt(-300,300)}},
  {source: 'draws/ars-02.png', props: {name: "I'm",tags:[]}},
  {source: 'draws/chess.png', props: {name: "chess",tags:[], left: fabric.util.getRandomInt(250, 300), top: fabric.util.getRandomInt(0, 80), angle: fabric.util.getRandomInt(-30,30)}},
  {source: 'draws/ars4у-04.png', props: {name: "coffee",tags:[], left: fabric.util.getRandomInt(250, 300), top: fabric.util.getRandomInt(250, 280), angle: fabric.util.getRandomInt(-12,12)}}
];

for(var i in data){
  addItem(data[i].source , data[i].props || {});
}



// fabric.Image.fromURL('draws/sprite.png', function(img) {
//     //img.scaleToHeight(100);
//     var patternSourceCanvas = new fabric.StaticCanvas();
//     patternSourceCanvas.add(img);
//
//     var pattern = new fabric.Pattern({
//       source: function() {
//         patternSourceCanvas.setDimensions({
//           width: img.getWidth(),
//           height: img.getHeight()
//         });
//         return patternSourceCanvas.getElement();
//       },
//       repeat: 'repeat'
//     });
//
//     var time = 0,
//         interval;
//     var Rect = new fabric.Rect({
//         left: -300,
//         top: 200,
//         width: 1200,
//         height: 1800,
//         fill: pattern
//       });
//       Rect.on({
//         'mousedown': function(){
//           interval = setInterval(function(){
//             time++;
//             pattern.offsetX = 50*time;
//             pattern.offsetY = 0;
//             if(50*time>img.width){
//               time=0;
//             }
//             canvas.renderAll();
//           }, 50);
//         },
//         'moving': function(){
//           pattern.offsetY = 70;
//         },
//         'mouseup': function(){
//           time=0;
//           pattern.offsetX = 50*time;
//           pattern.offsetY = 0;
//           canvas.renderAll();
//           clearInterval(interval);
//         }
//       })
//
//     canvas.add(Rect);
//   });

function demojs(){
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

  // domain.get("test", function(data){
  //   alert(data)
  // })

  function gi(a,b){
    return fabric.util.getRandomInt(a,b);
  }

  var data = [
    {
      source: 'draws/ars-01.png',
      props: {
        url: domain.run('macbook'),
        name:"macbook",tags:[],left: -120, top: -40, angle: 12
      }
    },{
      source: 'draws/ars-04.png',
      props: {
        tags:['competency'],left: gi(-140, -400), top: gi(-40, -80), angle: gi(-30,30)
      }
    },{
      source: 'draws/ars-05.png',
      props: {
        tags:['competency'],left: gi(140, 400),
        top: gi(-140, -180), angle: gi(-30,30)
      }
    },{
      source: 'draws/ars-06.png',
      props: {
        tags:['competency'],
        left: gi(-140, -400), top: gi(40, 80),
        angle: gi(-30,30)
      }
    },{
      source: 'draws/ars-07.png',
      props: {
        tags:['competency'],left: gi(140, 400),
        top: gi(240, -280), angle: gi(-30,30)
      }
    },{
      source: 'draws/ars-08.png',
      props: {
        tags:['competency'],left: gi(-140, 400),
        top: gi(40, 80), angle: gi(-30,30)
      }
    },{
      source: 'draws/ars-09.png',
      props: {
        tags:['competency'],left: gi(140, 400), top: gi(-40, 80),
        angle: gi(-30,30)
      }
    },{
      source: 'draws/ars-10.png',
      props: {
        tags:['competency'],left: gi(140, -400),
        top: gi(40, 80), angle: gi(-30,30)
      }
    },{
      source: 'draws/ars-11.png',
      props: {
        tags:['competency'],left: gi(140, 400),
        top: gi(140, 180), angle: gi(-30,30)
      }
    },{
      source: 'draws/balls-01.png',
      props: {
        name: "balls" ,
        tags:[],left: gi(400, 600), top: gi(-140, -180), angle: gi(-30,30)
      }
    },{
      source: 'draws/ars3-03.png',
      props: {
        name:"showboard",
        tags:[],
        url: domain.run('showboard'),
        left: gi(10, 10), top: gi(240, 280), angle: gi(-30,30)
      }
    },{
      source: 'draws/ars3-04.png',
      props: {
        name:"gitar",
        tags:[],
        url: domain.run('gitar'),
        left: gi(400, 600),
        top: gi(0, 80), angle: gi(-360,360)
      }
    },{
      source: 'draws/ars2-03.png',
      props: {
        name:"uni",
        url: domain.run('uni'),
        tags:[],left: gi(-240, -400),
        top: gi(-300, -190), angle: gi(-300,300)
      }
    },{
      source: 'draws/ars-02.png',
      props: {
        url: domain.run('Im'),
        name: "I'm",tags:[]
      }
    },{
      source: 'draws/chess.png',
      props: {
        url: domain.run('chess'),
        name: "chess",tags:[], left: gi(250, 300), top: gi(0, 80), angle: gi(-30,30)
      }
    },{
      source: 'draws/ars4у-04.png',
      props: {
        url: domain.run('coffee'),
        name: "coffee",tags:[],
        left: gi(250, 300), top: gi(250, 280), angle: gi(-12,12)
      }
    }
  ];

  for(var i in data){
    addItem(data[i].source , data[i].props || {});
  }
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

var animType = [
    'easeInQuad',
    'easeOutQuad',
    'easeInOutQuad',
    'easeInCubic',
    'easeOutCubic',
    'easeInOutCubic',
    'easeInQuart',
    'easeOutQuart',
    'easeInOutQuart',
    'easeInQuint',
    'easeOutQuint',
    'easeInOutQuint',
    'easeInSine',
    'easeOutSine',
    'easeInOutSine',
    'easeInExpo',
    'easeOutExpo',
    'easeInOutExpo',
    'easeInCirc',
    'easeOutCirc',
    'easeInOutCirc',
    'easeInElastic',
    'easeOutElastic',
    'easeInOutElastic',
    'easeInBack',
    'easeOutBack',
    'easeInOutBack',
    'easeInBounce',
    'easeOutBounce',
    'easeInOutBounce' ];

function ChangeMe(options , sketch, act){
  nextActionSeeAll();
  options.target.visible = false;
  canvas.forEachObject(function(item){
    if(item.name === "I'm"){
      item.visible = false;
      fabric.Image.fromURL( sketch , function(oImg) {
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
        if(act=='uni'){
          function animStep(i){
            var step = [0, 100, -100 , 200 , 400 , -300 , 100];
            i+1<step.length?i++:i=0;
            oImg.flipX = step[i]>oImg.left;
            oImg.animate('left', step[i], {
              duration: fabric.util.getRandomInt( 3000, 5000),
              onChange: canvas.renderAll.bind(canvas),
              onComplete: function() {
                animStep(i);
              },
              easing: fabric.util.ease[animType[fabric.util.getRandomInt( 0, animType.length)]]
            });
          }
          animStep(0);
        }
        canvas.add(oImg);
        canvas.renderAll();
      });
    }
  });
}

var ChangePerson = {
  up: function(options) {
    if (options.target) { // действия с объектом
      var near = findNear(options.target);
      var act = options.target.name;
      if(near[1].name == "I'm"){
        if(act=='macbook' && near[0]<150){
          ChangeMe(options , "draws/ars2-02-sprite-2.png" , act);
        }else if(act=='uni' && near[0]<150){
          ChangeMe(options , "draws/ars2-02-sprite.png" , act);
        }else if(act=='gitar' && near[0]<150){
          ChangeMe(options , "draws/ars3-02.png", act);
        }else if(act=='showboard' && near[0]<150){
          ChangeMe(options , "draws/ars3-01.png", act);
        }
      }
      // else if(!near[1].name || !act){
      //   ChangeMe(options , "draws/ars-02.png");
      // }
      canvas.renderAll();
    };
  }
};

var eatCompetition = {
  up: function(options){
    if(options.target){
      var near = findNear(options.target);
      if(options.target.tags && options.target.tags.indexOf('competency')+1 && near[1].name == "I'm"){
        options.target.visible = false;
        options.target.left += fabric.util.getRandomInt( -200,200);
        options.target.top += fabric.util.getRandomInt( -200,200);
        shakeCanvas( fabric.util.getRandomInt( 12, 80));
      }
    }
  }
};

function shakeCanvas(time, dur, range){
  var t = 0;
  var rang = range || 12;
  var inter = setInterval(function(){
    env.nav.vars[3] += fabric.util.getRandomInt(-rang, rang);
    env.nav.vars[4] += fabric.util.getRandomInt(-rang, rang);
    canvas.absolutePan(new fabric.Point(env.nav.vars[3], env.nav.vars[4] ));
    canvas.renderAll();
    t++;
    if(t > (time || 10)) clearInterval(inter);
  }, dur || 12);
}

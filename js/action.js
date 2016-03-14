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

function itemAction(act , object){
  if(act=='uni'){
    function animStep(i){
      var step = [0, 100, -100 , 200 , 400 , -300 , 100];
      i+1<step.length?i++:i=0;
      object.flipX = step[i]>object.left;
      object.animate('left', step[i], {
        duration: fabric.util.getRandomInt( 3000, 5000),
        onChange: canvas.renderAll.bind(canvas),
        onComplete: function() {
          animStep(i);
        },
        easing: fabric.util.ease[animType[fabric.util.getRandomInt( 0, animType.length)]]
      });
    }
    animStep(0);
  }else if(act=='showboard'){
    var t = 0,
        g = 9.8;
    setInterval(function(){
      var yet = false;
      // canvas.forEachObject(function(item){
      //   if(item!=object&&item.left>(object.left - object.getWidth()/2)&&item.left<(object.left + object.getWidth()/2)){
      //     if(!item.top-item.getHeight()/2>object.top+object.getHeight()/2){
      //       rect.left = item.left - item.getWidth()/2;
      //       rect.width = item.getWidth();
      //       rect.top = item.top - item.getHeight()/2;
      //       rect.fill = 'white';
      //       yet = true;
      //       if( item.top - object.top < 20){
      //         object.set('top' , item.top);
      //       }
      //     }
      //   }

      //   if(!yet){
      //     rect.left = object.left;
      //     rect.width = object.getWidth();
      //     rect.fill = 'blue';
      //   }
      // });
      // $('body').on('mousemove', function(e){
      //   if(e.clientX > $(window).width()/2){
      //     object.rotate +=1;
      //   }else{
      //     object.rotate -=1;
      //   }
      // });

      //object.rotate = canvas.getWidth()

      if(object.top+object.getHeight()/2>=env.nav.vars[4]+canvas.getHeight()){
        object.top = env.nav.vars[4]+canvas.getHeight() - object.getHeight()/2;
        object.rotate = 0;
        yet = true;
      }

      !yet?t+=0.01:t=0;
          // env.nav.vars[3] = object.left - canvas.getWidth()/2;
          // env.nav.vars[4] = object.top - canvas.getHeight()/2;
          // canvas.absolutePan(new fabric.Point(env.nav.vars[3], env.nav.vars[4] ));
      object.top+=g*t*t/2;
      canvas.renderAll();
    }, 10);
  }else if(act=='gitar'){
    if(is.not.chrome()){
      canvas.add(new fabric.Text("Попробуйте открыть в хроме!!!", {
        fontFamily: 'Gill Sans'
      }));
      changeBackground(1000,10);
    }
    //var tmr = 0;
    setInterval( function(){
      object.flipX = !object.flipX;
    }, 100);
  }
}

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
          source: sketch,
          delifnext: true
        });
        oImg.perPixelTargetFind = true;
        oImg.targetFindTolerance = 4;
        itemAction(act, oImg);
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
        if(near[0]<150) PlaySound(act); // внимание!!!! функция звука!!!!!!!!!!!
        if(act=='macbook' && near[0]<150){
          ChangeMe(options , "draws/ars2-02-sprite-2.png" , act);
          movearound();
        }else if(act=='uni' && near[0]<150){
          if(near[1].source && near[1].source == "draws/ballsko-01.png"){ /// вот это уже ебучие модификаторы действий
            ChangeMe(options , "draws/ballsko-all.png", act);
          }else{
            ChangeMe(options , "draws/ars2-02-sprite.png" , act);
          }
        }else if(act=='gitar' && near[0]<150){
          ChangeMe(options , "draws/ars3-02.png", act);
        }else if(act=='showboard' && near[0]<150){
          ChangeMe(options , "draws/ars3-01.png", act);
        }else if(act=='balls' && near[0]<150){
          if(near[1].source && near[1].source == "draws/ars2-02-sprite.png"){ /// вот это уже ебучие модификаторы действий
            ChangeMe(options , "draws/ballsko-all.png", "uni");
          }else{
            ChangeMe(options , "draws/ballsko-01.png", act);
          }
        }else if(act=='chess' && near[0]<150){
          ChangeMe(options , "draws/ars4у-01.png", act);
        }else if(act=='coffee' && near[0]<150){
          ChangeMe(options , "draws/ars4у-02.png", act);
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

function movearound(delay){ /// охуенная штука - всё летает по кругу
  var tm = 0;
  var inter = setInterval(function(){
    tm<(delay || 2)?tm+=0.01:clearInterval(inter);
    goo(tm);
  }, 100);
  var goo = function(t){
    var canvasCenter = new fabric.Point( 0 , 0 ); // center of canvas
    var rads = 0.174532925 *t;
      canvas.getObjects().forEach(function (obj) {
          var objectOrigin = new fabric.Point(obj.left, obj.top);
          var new_loc = fabric.util.rotatePoint(objectOrigin, canvasCenter, rads);
          obj.top = new_loc.y;
          obj.left = new_loc.x;
          obj.angle = 10 * t; //rotate each object buy the same angle
          canvas.renderAll();
          //console.log(new_loc, rads);
     });
  }
}

function changeBackground(time, dur,smooth, callback){ // ну тут понятно - меняется фон
  var t = 0;
  var val = 0;
  function genc(){
    return [Math.floor(Math.random()*256),Math.floor(Math.random()*256),Math.floor(Math.random()*256)];
  }
  function mix(a,b,per){
    var r1 = a[0], g1 = a[1], b1 = a[2];
    var r2 = b[0], g2 = b[1], b2 = b[2];
    var r = r1*(1 - per) + r2*(per),
        g = g1*(1 - per) + g2*(per),
        b = b1*(1 - per) + b2*(per);
    return [r,g,b];
  }
  var seed = [genc(),genc()];
  var inter = setInterval(function(){
    var normaltime = (time|| 'Infinity' ) ;
    t > normaltime ? clearInterval(inter) : t++;

    if(t>=normaltime){
      canvas.backgroundColor = '';
      canvas.renderAll();
      if(callback) callback();
    }else{
      if(dur){
        if( t % dur==0 ){
          if(smooth){
            val = 1 - val;
            seed[val] = genc();
          }else{
            seed[0] = genc();
          }
        }
        //console.log([seed[0], seed[1], ( t % dur /dur ) ]);
        if(smooth){
          var roundcol = mix( seed[0], seed[1], ( t % dur /dur , 2 ) );
          canvas.backgroundColor = 'rgba('+roundcol[0]+','+roundcol[1]+','+roundcol[2]+',1)';
          canvas.renderAll();
        }else{
          canvas.backgroundColor = 'rgba('+seed[0][0]+','+seed[0][1]+','+seed[0][2]+',1)';
          canvas.renderAll();
        }
      }else{
        canvas.backgroundColor = 'rgba('+genc()[0]+','+genc()[1]+','+genc()[2]+',1)';
        canvas.renderAll();
      }
    }
  },10);
}

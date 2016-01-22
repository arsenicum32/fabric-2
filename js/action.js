var ChangePerson = {
  up: function(options) {
    if (options.target) { // действия с объектом
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
    };
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
shakeCanvas(80);

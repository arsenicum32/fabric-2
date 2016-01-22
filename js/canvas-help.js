function inCanvas(item){
  var ax  = Ox,
      bx = Ox + canvas.getWidth(),
      ay = Oy,
      by = Oy + canvas.getHeight();
  var addX = item.width/2,
      addY = item.height/2;
      // if(item.originX==='left'){  //  тестовый код - работает норм, но нужно додумывать...
      //   addX = item.width;
      // }else if(item.originX==='center'){
      //   addX = item.width/2;
      // }else{
      //   addX = -item.width ;
      // }
      // if(item.originY==='top'){
      //   addY = item.height;
      // }else if(item.originY==='center'){
      //   addY = item.height/2;
      // }else{
      //   addY = -item.height;
      // }
  if( (item.left + addX) <=bx && (item.left + addX) >=ax && (item.top + addY) <=by && (item.top + addY) >=ay){
    return true;
  }else{
    return false;
  }
}

function nextActionSeeAll(){
  for (var n = 0; n < canvas.getObjects().length; n++) {
    canvas.item(n).visible = true;
    if(canvas.item(n).delifnext){
      canvas.item(n).remove();
    }
  }
}

function findNear(object , mindist){  // instead of try containsPoint(e, target) click group findTarget(e, skipGroup)
  var l = object.left;
  var t = object.top;
  var mind = mindist || canvas.getWidth()>canvas.getHeight()?canvas.getWidth():canvas.getHeight();
  var remObj = null;
  for (var n = 0; n < canvas.getObjects().length; n++) {
    var l2 = canvas.item(n).left;
    var t2 = canvas.item(n).top;
    var dist = Math.sqrt( (l-l2)*(l-l2) + (t-t2)*(t-t2) );
    if(dist<mind && canvas.item(n)!=object){
      mind=dist;
      remObj = canvas.item(n);
    }
  }
  return [mind,remObj];
}

function action(over , near, callback){
  if( over && near){
    switch (over) {
      case "macbook":
        if(near=="I'm") callback("overmac");
        break;
        case "uni":
          if(near=="I'm") callback("overuni");
          break;
      default:
        void(0);
    }
  }
}

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

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

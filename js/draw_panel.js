(function(){
  if(is.not.chrome()){
    var Rect = new fabric.Rect({
            left: offsetX,
            top: offsetY,
            width: canvas.getWidth(),
            height: 40,
            fill: 'A9DEF9'
          });
    var button = new fabric.Text(' куда я попал??? ', {
      left: offsetX+canvas.getWidth()-180,
      top: offsetY+10,
      fontFamily: 'Gill Sans',
      fontSize: 20,
      textBackgroundColor: 'black',
      fill: '0AFFED'
    });

    canvas.add(Rect);
    canvas.add(button);
    canvas.renderAll();
  }
})();

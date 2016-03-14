function PlaySound(act){
  var dancer;
  if(act == 'gitar' && !dancer && is.chrome() ){ // эта вся фигня работает только в хроме
    var dancer = new Dancer();

    var kick = dancer.createKick({
      onKick: function ( mag ) {
        function genc(){
          return [Math.floor(Math.random()*256),Math.floor(Math.random()*256),Math.floor(Math.random()*256)];
        }
        var roundcol = genc();
        canvas.backgroundColor = 'rgba('+roundcol[0]+','+roundcol[1]+','+roundcol[2]+',1)';
        canvas.renderAll();
      },
      offKick: function ( mag ) {
      }
    });
    var sounds = (function(){ var arr = ['hurry']; return arr[ Math.floor(Math.random()*arr.length) ]  })();
    dancer.load({ src: 'audio/'+ sounds , codecs: [  'mp3' ]});
    dancer.play();
    console.log(dancer.isSupported);
    dancer.bind('update', function(){
      var df = dancer.getWaveform();
      for(var i =0; i< canvas.getObjects().length; i+=2){
        if(canvas.item(i) && canvas.item(i).left) canvas.item(i).left += df[i]*i;
        if(canvas.item(i) && canvas.item(i).top) canvas.item(i).top += df[i+1]*i;
        if(canvas.item(i)
        && canvas.item(i).tags
        && canvas.item(i).tags.indexOf('competency')!=-1) canvas.item(i).scale(df[i+2]);
      }
      canvas.renderAll();
    })
    kick.on();

    dancer.after( 30, function(){
      dancer.unbind('update');
      kick.off();
      canvas.backgroundColor = '';
      dancer.pause();
      dancer = undefined;
      window.location.href = '';
    });
  }
}

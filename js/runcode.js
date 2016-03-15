(function(){
  var inter,
      timer = 0,
      runtext = '',
      copy = '<h1>hello, I am Arseniy!</h1><p>programming is cool!!!</p>';
  window.writesite = {
    run: function(act){
      if(act == 'macbook')
      this.play();
      else {
        this.stop();
      }
    },
    setcopy: function(obj){
      copy = obj;
    },
    setcopyurl: function(path){
      $.get(path, function(data){
        copy = data;
      })
    },
    play: function(){
      inter = setInterval(function(){
        timer<copy.length?timer++:clearInterval(inter);
        runtext = copy.substring(0,timer);
        //console.log(runtext);
         $('#maccode').html(runtext);
      }, 120);
    },
    pause: function(){
      if(inter) clearInterval(inter);
    },
    stop: function(){
      if(inter) clearInterval(inter);
      timer = 0;
      runtext = '';
    }
  }
})();

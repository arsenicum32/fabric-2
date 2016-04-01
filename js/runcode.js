(function(){
  var inter,
      timer = 0,
      runtext = '',
      copy = '<h1>hello, I am Arseniy!</h1><p>programming is cool!!!</p>',
      yet = false;
  window.writesite = {
    run: function(act){
      if(act == 'macbook'){
        if(!yet){
          this.setcopyurl('/pageme.html', function() {
            console.log(copy);
            writesite.play();
            yet = true;
          });
        }else{
          writesite.play();
        }
      } else {
        this.pause();
      }
    },
    setcopy: function(obj){
      copy = obj;
    },
    setcopyurl: function(path, callback){
      $.get(path, function(data){
        copy = data.toString();
        if(callback) callback();
      })
    },
    play: function(){
      inter = setInterval(function(){
        timer<copy.length?timer++:clearInterval(inter);
        runtext = copy.substring(0,timer);
        $('#maccode').html(runtext);
        $('#codeblock').text(runtext);
        var textarea = document.getElementById('codeblock');
        textarea.scrollTop = textarea.scrollHeight;
      }, 12);
    },
    pause: function(){
      if(inter) clearInterval(inter);
    },
    stop: function(){
      if(inter) clearInterval(inter);
      timer = 0;
      runtext = '';
    },
    clear: function(){
      timer = 0;
      runtext = '';
      $('#maccode').html('');
    }
  }
})();

function actionjs(){function e(e,a){function t(e){var o=[0,100,-100,200,400,-300,100];e+1<o.length?e++:e=0,a.flipX=o[e]>a.left,a.animate("left",o[e],{duration:fabric.util.getRandomInt(3e3,5e3),onChange:canvas.renderAll.bind(canvas),onComplete:function(){t(e)},easing:fabric.util.ease[n[fabric.util.getRandomInt(0,n.length)]]})}if("uni"==e)t(0);else if("showboard"==e){var o=0,r=9.8;setInterval(function(){var e=!1;a.top+a.getHeight()/2>=env.nav.vars[4]+canvas.getHeight()&&(a.top=env.nav.vars[4]+canvas.getHeight()-a.getHeight()/2,a.rotate=0,e=!0),e?o=0:o+=.01,a.top+=r*o*o/2,canvas.renderAll()},10)}else"gitar"==e&&(is.not.chrome()&&(canvas.add(new fabric.Text("Попробуйте открыть в хроме!!!",{fontFamily:"Gill Sans"})),changeBackground(1e3,10)),setInterval(function(){a.flipX=!a.flipX},100))}var n=["easeInQuad","easeOutQuad","easeInOutQuad","easeInCubic","easeOutCubic","easeInOutCubic","easeInQuart","easeOutQuart","easeInOutQuart","easeInQuint","easeOutQuint","easeInOutQuint","easeInSine","easeOutSine","easeInOutSine","easeInExpo","easeOutExpo","easeInOutExpo","easeInCirc","easeOutCirc","easeInOutCirc","easeInElastic","easeOutElastic","easeInOutElastic","easeInBack","easeOutBack","easeInOutBack","easeInBounce","easeOutBounce","easeInOutBounce"];window.ChangeMe=function(n,a,t){nextActionSeeAll(),n.target.visible=!1,canvas.forEachObject(function(n){"I'm"===n.name&&(n.visible=!1,fabric.Image.fromURL(a,function(o){o.scale(.25).originX="center",o.originY="center",o.set({left:n.left,top:n.top,name:n.name,source:a,delifnext:!0}),o.perPixelTargetFind=!0,o.targetFindTolerance=4,e(t,o),canvas.add(o),canvas.renderAll()}))})},window.ChangePerson={up:function(e){if(e.target){var n=findNear(e.target),a=e.target.name;"I'm"==n[1].name&&(n[0]<150&&(PlaySound(a),writesite.run(a),"chess"==a?chess.addChess():chess.removeChess()),"macbook"==a&&n[0]<150?(ChangeMe(e,"draws/ars2-02-sprite-2.png",a),movearound(4)):"uni"==a&&n[0]<150?n[1].source&&"draws/ballsko-01.png"==n[1].source?ChangeMe(e,"draws/ballsko-all.png",a):ChangeMe(e,"draws/ars2-02-sprite.png",a):"gitar"==a&&n[0]<150?ChangeMe(e,"draws/ars3-02.png",a):"showboard"==a&&n[0]<150?ChangeMe(e,"draws/ars3-01.png",a):"balls"==a&&n[0]<150?n[1].source&&"draws/ars2-02-sprite.png"==n[1].source?ChangeMe(e,"draws/ballsko-all.png","uni"):ChangeMe(e,"draws/ballsko-01.png",a):"chess"==a&&n[0]<150?ChangeMe(e,"draws/ars4у-01.png",a):"coffee"==a&&n[0]<150&&ChangeMe(e,"draws/ars4у-02.png",a)),canvas.renderAll()}}},window.eatCompetition={up:function(e){if(e.target){var n=findNear(e.target);e.target.tags&&e.target.tags.indexOf("competency")+1&&"I'm"==n[1].name&&(e.target.visible=!1,e.target.left+=fabric.util.getRandomInt(-200,200),e.target.top+=fabric.util.getRandomInt(-200,200),shakeCanvas(fabric.util.getRandomInt(12,80)))}}},window.shakeCanvas=function(e,n,a){var t=0,o=a||12,r=setInterval(function(){env.nav.vars[3]+=fabric.util.getRandomInt(-o,o),env.nav.vars[4]+=fabric.util.getRandomInt(-o,o),canvas.absolutePan(new fabric.Point(env.nav.vars[3],env.nav.vars[4])),canvas.renderAll(),t++,t>(e||10)&&clearInterval(r)},n||12)},window.movearound=function(e){var n=0,a=setInterval(function(){(e||2)>n?n+=.01:clearInterval(a),t(n)},100),t=function(e){var n=new fabric.Point(0,0),a=.174532925*e;canvas.getObjects().forEach(function(t){var o=new fabric.Point(t.left,t.top),r=fabric.util.rotatePoint(o,n,a);t.top=r.y,t.left=r.x,t.angle=10*e,canvas.renderAll()})}},window.changeBackground=function(e,n,a,t){function o(){return[Math.floor(256*Math.random()),Math.floor(256*Math.random()),Math.floor(256*Math.random())]}function r(e,n,a){var t=e[0],o=e[1],r=e[2],i=n[0],s=n[1],c=n[2],l=t*(1-a)+i*a,v=o*(1-a)+s*a,n=r*(1-a)+c*a;return[l,v,n]}var i=0,s=0,c=[o(),o()],l=setInterval(function(){var v=e||"Infinity";if(i>v?clearInterval(l):i++,i>=v)canvas.backgroundColor="",canvas.renderAll(),t&&t();else if(n)if(i%n==0&&(a?(s=1-s,c[s]=o()):c[0]=o()),a){var u=r(c[0],c[1],2);canvas.backgroundColor="rgba("+u[0]+","+u[1]+","+u[2]+",1)",canvas.renderAll()}else canvas.backgroundColor="rgba("+c[0][0]+","+c[0][1]+","+c[0][2]+",1)",canvas.renderAll();else canvas.backgroundColor="rgba("+o()[0]+","+o()[1]+","+o()[2]+",1)",canvas.renderAll()},10)}}function audiojs(){window.PlaySound=function(e){var n;if("gitar"==e&&!n&&is.chrome()){var n=new Dancer,a=n.createKick({onKick:function(e){function n(){return[Math.floor(256*Math.random()),Math.floor(256*Math.random()),Math.floor(256*Math.random())]}var a=n();canvas.backgroundColor="rgba("+a[0]+","+a[1]+","+a[2]+",1)",canvas.renderAll()},offKick:function(e){}}),t=function(){var e=["hurry","youhowme","fellinlove"];return e[Math.floor(Math.random()*e.length)]}();n.load({src:"audio/"+t,codecs:["mp3"]}),n.play(),console.log(n.isSupported),n.bind("update",function(){for(var e=n.getWaveform(),a=0;a<canvas.getObjects().length;a+=2)canvas.item(a)&&canvas.item(a).left&&(canvas.item(a).left+=e[a]*a),canvas.item(a)&&canvas.item(a).top&&(canvas.item(a).top+=e[a+1]*a),canvas.item(a)&&canvas.item(a).tags&&-1!=canvas.item(a).tags.indexOf("competency")&&canvas.item(a).scale(e[a+2]);canvas.renderAll()}),a.on(),n.after(90,function(){n.unbind("update"),a.off(),canvas.backgroundColor="",n.pause(),n=void 0,window.location.href=""})}}}function canhelpjs(){window.inCanvas=function(e){var n=Ox,a=Ox+canvas.getWidth(),t=Oy,o=Oy+canvas.getHeight(),r=e.width/2,i=e.height/2;return e.left+r<=a&&e.left+r>=n&&e.top+i<=o&&e.top+i>=t},window.nextActionSeeAll=function(){for(var e=0;e<canvas.getObjects().length;e++)canvas.item(e).visible=!0,canvas.item(e).delifnext&&canvas.item(e).remove()},window.findNear=function(e,n){for(var a=e.left,t=e.top,o=n||canvas.getWidth()>canvas.getHeight()?canvas.getWidth():canvas.getHeight(),r=null,i=0;i<canvas.getObjects().length;i++){var s=canvas.item(i).left,c=canvas.item(i).top,l=Math.sqrt((a-s)*(a-s)+(t-c)*(t-c));o>l&&canvas.item(i)!=e&&(o=l,r=canvas.item(i))}return[o,r]},window.makeHandler=function(e,n,a,t){return t?(t.originX="center",t.originY="center",t.animate(e,n,{duration:a||100,onChange:canvas.renderAll.bind(canvas)}),void 0):function(t){t.target&&t.target.tags&&-1==t.target.tags.indexOf("UI")&&(t.target.originX="center",t.target.originY="center",t.target.animate(e,n,{duration:a||100,onChange:canvas.renderAll.bind(canvas)}))}}}function demojs(){function e(e,n){fabric.Image.fromURL(e,function(e){e.scale(.25).originX="center",e.originY="center",e.set(n),e.perPixelTargetFind=!0,e.targetFindTolerance=4,canvas.add(e),canvas.renderAll()})}function n(e,n){return fabric.util.getRandomInt(e,n)}var a=[{source:"draws/ars-01.png",props:{url:domain.run("macbook"),name:"macbook",tags:[],left:-120,top:-40,angle:12}},{source:"draws/ars-04.png",props:{tags:["competency"],left:n(-140,-400),top:n(-40,-80),angle:n(-30,30)}},{source:"draws/ars-05.png",props:{tags:["competency"],left:n(140,400),top:n(-140,-180),angle:n(-30,30)}},{source:"draws/ars-06.png",props:{tags:["competency"],left:n(-140,-400),top:n(40,80),angle:n(-30,30)}},{source:"draws/ars-07.png",props:{tags:["competency"],left:n(140,400),top:n(240,-280),angle:n(-30,30)}},{source:"draws/ars-08.png",props:{tags:["competency"],left:n(-140,400),top:n(40,80),angle:n(-30,30)}},{source:"draws/ars-09.png",props:{tags:["competency"],left:n(140,400),top:n(-40,80),angle:n(-30,30)}},{source:"draws/ars-10.png",props:{tags:["competency"],left:n(140,-400),top:n(40,80),angle:n(-30,30)}},{source:"draws/ars-11.png",props:{tags:["competency"],left:n(140,400),top:n(140,180),angle:n(-30,30)}},{source:"draws/balls-01.png",props:{name:"balls",tags:[],left:n(400,600),top:n(-140,-180),angle:n(-30,30)}},{source:"draws/ars3-03.png",props:{name:"showboard",tags:[],url:domain.run("showboard"),left:n(10,10),top:n(240,280),angle:n(-30,30)}},{source:"draws/ars3-04.png",props:{name:"gitar",tags:[],url:domain.run("gitar"),left:n(400,600),top:n(0,80),angle:n(-360,360)}},{source:"draws/ars2-03.png",props:{name:"uni",url:domain.run("uni"),tags:[],left:n(-240,-400),top:n(-300,-190),angle:n(-300,300)}},{source:"draws/ars-02.png",props:{url:domain.run("Im"),name:"I'm",tags:[]}},{source:"draws/chess.png",props:{url:domain.run("chess"),name:"chess",tags:[],left:n(250,300),top:n(0,80),angle:n(-30,30)}},{source:"draws/ars4у-04.png",props:{url:domain.run("coffee"),name:"coffee",tags:[],left:n(250,300),top:n(250,280),angle:n(-12,12)}}];for(var t in a)e(a[t].source,a[t].props||{})}function drawpaneljs(){if(is.not.chrome()){var e=new fabric.Rect({left:offsetX,top:offsetY,width:canvas.getWidth(),height:40,fill:"A9DEF9"}),n=new fabric.Text(" куда я попал??? ",{left:offsetX+canvas.getWidth()-180,top:offsetY+10,fontFamily:"Gill Sans",fontSize:20,textBackgroundColor:"black",fill:"0AFFED",url:domain.run("button")});canvas.add(e),canvas.add(n),canvas.renderAll()}}function envjs(){window.env={runner:function(){var e=arguments;return function(n){for(var a in e)"function"==typeof e[a]&&e[a](n)}},nav:{down:function(e){null==canvas.getActiveObject()&&(env.nav.vars[1]=e.e.clientX,env.nav.vars[2]=e.e.clientY,env.nav.vars[0]=!0)},move:function(e){null==canvas.getActiveObject()&&env.nav.vars[0]&&((Math.abs(env.nav.vars[3])>$(window).width()||Math.abs(env.nav.vars[4])>$(window).height())&&(env.nav.vars[3]=-canvas.getWidth()/2,env.nav.vars[4]=-canvas.getHeight()/2),canvas.absolutePan(new fabric.Point(env.nav.vars[3]-e.e.clientX+env.nav.vars[1],env.nav.vars[4]-e.e.clientY+env.nav.vars[2])),Ox=env.nav.vars[3]-e.e.clientX+env.nav.vars[1],Oy=env.nav.vars[4]-e.e.clientY+env.nav.vars[2])},up:function(e){null==canvas.getActiveObject()&&(env.nav.vars[3]-=e.e.clientX-env.nav.vars[1],env.nav.vars[4]-=e.e.clientY-env.nav.vars[2],canvas.absolutePan(new fabric.Point(env.nav.vars[3],env.nav.vars[4])),env.nav.vars[0]=!1)},vars:[!1,0,0,-canvas.getWidth()/2,-canvas.getHeight()/2]},menu:{down:function(e){env.menu.SHOWMENU=!0},move:function(e){env.menu.SHOWMENU=!1},up:function(e){var n=!0;e.target&&env.menu.SHOWMENU&&n&&positM(e.e.clientX,e.e.clientY,$("interface"),e.target)&&(n=!1,$("interface").toggleClass("hid")),env.menu.SHOWMENU&&!$("interface").hasClass("hid")&&n&&(n=!1,$("interface").toggleClass("hid"))},SHOWMENU:!1}};var e={down:function(e){e.target&&(e.target.bringToFront(),e.target.opacity=.5,e.target.hasControls=e.target.hasBorders=!1,canvas.renderAll())},up:function(e){e.target&&(e.target.opacity=1)},over:function(e){makeHandler("scaleX",.35,50)(e),makeHandler("scaleY",.35,50)(e)},out:function(e){makeHandler("scaleX",.25,50)(e),makeHandler("scaleY",.25,50)(e)},moved:function(e){e.target&&(e.target.opacity=.5)},modified:function(e){e.target&&(e.target.opacity=1)}};canvas.on({"mouse:down":env.runner(env.nav.down,env.menu.down,e.down),"mouse:up":env.runner(env.nav.up,env.menu.up,e.up,ChangePerson.up,eatCompetition.up),"mouse:move":env.runner(env.nav.move,env.menu.move),"object:moved":env.runner(e.moved),"object:modified":env.runner(e.modified),"mouse:over":env.runner(e.over),"mouse:out":env.runner(e.out),"touch:gesture":env.runner(),"touch:dragstart":env.runner(),"touch:dragenter":env.runner(),"touch:dragend":env.runner(),"touch:orientation":env.runner(),"touch:shake":env.runner(),"touch:longpress":env.runner(),drop:env.runner(function(){alert("drop")})})}function queryjs(){window.domain={name:"myapisite.tk",url:"/",con:"http://",path:{gitar:"57002c30b49769e53dea7a2b",chess:"57002c30b49769e53dea7a2b",Im:"57002c30b49769e53dea7a2b",coffee:"57002c30b49769e53dea7a2b",showboard:"57002c30b49769e53dea7a2b",uni:"57002c30b49769e53dea7a2b",macbook:"57002c30b49769e53dea7a2b",button:"57002c30b49769e53dea7a2b"},cpath:function(e){return this.url+(this.path[e]||"")},get:function(e,n){return n?void $.get(this.path[e],n):this.path[e]},run:function(e,n){return n?void $.get(this.con+this.name+this.cpath(e),n):this.con+this.name+this.cpath(e)}}}function setup(){function e(){if(1!==window.devicePixelRatio){var e=canvas.getElement(),n=e.width,a=e.height;e.setAttribute("width",n*window.devicePixelRatio),e.setAttribute("height",a*window.devicePixelRatio),e.getContext("2d").scale(window.devicePixelRatio,window.devicePixelRatio)}canvas.renderAll()}window.canvas=new fabric.Canvas("c"),canvas.setHeight($(window).height()),canvas.setWidth($(window).width()),canvas.selection=!1,canvas.defaultCursor="move",canvas.hoverCursor="pointer",e(),$(window).on("resize",function(){canvas.setHeight($(window).height()),canvas.setWidth($(window).width()),e()}),window.offsetX=-canvas.getWidth()/2,window.offsetY=-canvas.getHeight()/2,canvas.absolutePan(new fabric.Point(offsetX,offsetY))}function setup_info(e){function n(){if(1!==window.devicePixelRatio){var e=info.getElement(),n=e.width,a=e.height;e.setAttribute("width",n*window.devicePixelRatio),e.setAttribute("height",a*window.devicePixelRatio),e.getContext("2d").scale(window.devicePixelRatio,window.devicePixelRatio)}info.renderAll()}if(window.info=new fabric.Canvas("info"),info.setHeight($("interface").height()),info.setWidth($("interface").width()),info.defaultCursor="move",info.hoverCursor="pointer",n(),$(window).on("resize",function(){info.setHeight($("interface").height()),info.setWidth($("interface").width()),n()}),e)info.loadFromJSON(json,canvas.renderAll.bind(canvas),function(e,n){});else{var a=new fabric.Rect({left:10,top:20,width:120,height:180,fill:"red"});info.add(a),info.renderAll()}info.on({"mouse:down":function(e){if(e.target){var n=["blue","red","yellow","hotpink"][Math.floor(4*Math.random())];e.target.set({borderColor:n,cornerColor:n,cornerSize:.016*$("interface").width(),transparentCorners:!1}),info.renderAll()}}})}!function(){function e(e,n,a){var t=a||$(window),o=t.width(),r=t.height();return[Math.round(e/o),Math.round(n/r)]}window.positM=function(n,a,t,o){t=t||$("interface");var r=[0,0];return e(n,a)[1]&&(r[0]=-t.height()),e(n,a)[0]&&(r[1]=-t.width()),t.css("top",a+r[0]+5+"px"),t.css("left",n+r[1]+5+"px"),console.log(o),o.url?($.get(o.url,function(e){t.html(e)}),t.html("<div class='loading'></div>"),!0):o.html?(t.html(o.html),!0):o.info?(t.html("<canvas id='info'></canvas>"),setup_info(o.info),!0):o.json?($.get(o.json,function(e){t.html("<canvas id='info'></canvas>"),setup_info("string"!=typeof e?e.toString():e)}),!0):!1}}(),function(){window.chess={addChess:function(){console.log("set"),$("body").append('<div id="outerdiv" style="position: absolute; top: 0; left: 0;"><iframe id="inneriframe" src="http://ru.lichess.org/tv"></iframe></div>')},removeChess:function(){$("#outerdiv").remove()}}}(),function(){var e,n=0,a="",t="<h1>hello, I am Arseniy!</h1><p>programming is cool!!!</p>",o=!1;window.writesite={run:function(e){"macbook"==e?o?writesite.play():this.setcopyurl("/public/pageme.html",function(){writesite.play(),o=!0}):this.pause()},setcopy:function(e){t=e},setcopyurl:function(e,n){$.get(e,function(e){t=e.toString(),n&&n()})},play:function(){$("#console").css("visibility","visible"),e=setInterval(function(){n<t.length?n++:clearInterval(e),a=t.substring(0,n),$("#maccode").html(a),$("#codeblock").text(a);var o=document.getElementById("codeblock");o.scrollTop=o.scrollHeight},12)},pause:function(){$("#console").css("visibility","hidden"),e&&clearInterval(e)},stop:function(){$("#console").css("visibility","hidden"),e&&clearInterval(e),n=0,a=""},clear:function(){n=0,a="",$("#maccode").html("")}}}(),function(){queryjs(),setup(),actionjs(),envjs(),canhelpjs(),demojs(),drawpaneljs(),audiojs()}(),function(){var e={show:function(e){var n=0,a=setInterval(function(){1>n?n+=.1:(clearInterval(a),e?e():void 0),$(".speaking").css("opacity",n)},10)},hide:function(e){$(".speaking").css("opacity",0),e&&e()},remove:function(e){$(".speaking").remove(),e&&e()},write:function(n,a,t){e.show(function(){if(n)var o=0,r=setInterval(function(){o<n.length?o++:(clearInterval(r),setTimeout(function(){e.hide(a)},1e3)),$("#wrt").text(n.substring(0,o))},t||85);else setTimeout(function(){e.hide()},1e3)})}};e.write("Привет как дела???",function(){e.write("как жизнь???",function(){e.remove()})})}();
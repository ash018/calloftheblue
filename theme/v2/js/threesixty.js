(function(a){a.ThreeSixty=function(c,b){var e=this,f,g=[],d="1.0.7";e.$el=a(c);e.el=c;e.$el.data("ThreeSixty",e);e.init=function(){f=a.extend({},a.ThreeSixty.defaultOptions,b);if(!f.parallel){e.loadImages()}if(f.disableSpin){f.currentFrame=1;f.endFrame=1}e.initProgress()};e.initProgress=function(){e.$el.css({width:f.width+"px",height:f.height+"px","background-image":"none !important"}).css(f.styles);if(f.responsive){e.$el.css({width:"100%"})}e.$el.find(f.progress).css({marginTop:((f.height/2)-15)+"px"});e.$el.find(f.progress).fadeIn("slow");e.$el.find(f.imgList).hide()};e.loadImages=function(){var i,k,l,j,h;i=document.createElement("li");h=f.zeroBased?0:1;k=!f.imgArray?f.domain+f.imagePath+f.filePrefix+e.zeroPad((f.loadedImages+h))+f.ext+((e.browser.isIE())?"?"+new Date().getTime():""):f.imgArray[f.loadedImages];l=a("<img>").attr("data-original",k).attr("src",k).addClass("previous-image img-responsive lazy").appendTo(i);g.push(l);e.$el.find(f.imgList).append(i);a(l).load(function(){e.imageLoaded()})};e.imageLoaded=function(){f.loadedImages+=1;a(f.progress+" span").text(Math.floor(f.loadedImages/f.totalFrames*100)+"%");if(f.loadedImages>=f.totalFrames){if(f.disableSpin){g[0].removeClass("previous-image img-responsive").addClass("current-image img-responsive lazy")}a(f.progress).fadeOut("slow",function(){a(this).hide();e.showImages();e.showNavigation()})}else{e.loadImages()}};e.showImages=function(){e.$el.find(".txtC").fadeIn();e.$el.find(f.imgList).fadeIn();e.ready=true;f.ready=true;if(f.drag){e.initEvents()}e.refresh();e.initPlugins();f.onReady()};e.initPlugins=function(){a.each(f.plugins,function(h,j){if(typeof a[j]==="function"){a[j].call(e,e.$el,f)}else{throw new Error(j+" not available.")}})};e.showNavigation=function(){if(f.navigation&&!f.navigation_init){var j,h,i,k;j=a("<div/>").attr("class","nav_bar");h=a("<a/>").attr({href:"#","class":"nav_bar_next"}).html("next");i=a("<a/>").attr({href:"#","class":"nav_bar_previous"}).html("previous");k=a("<a/>").attr({href:"#","class":"nav_bar_play"}).html("play");j.append(i);j.append(k);j.append(h);e.$el.prepend(j);h.bind("mousedown touchstart",e.next);i.bind("mousedown touchstart",e.previous);k.bind("mousedown touchstart",e.play_stop);f.navigation_init=true}};e.play_stop=function(h){h.preventDefault();if(!f.autoplay){f.autoplay=true;f.play=setInterval(e.moveToNextFrame,40);a(h.currentTarget).removeClass("nav_bar_play").addClass("nav_bar_stop")}else{f.autoplay=false;a(h.currentTarget).removeClass("nav_bar_stop").addClass("nav_bar_play");clearInterval(f.play);f.play=null}};e.next=function(h){if(h){h.preventDefault()}f.endFrame-=5;e.refresh()};e.previous=function(h){if(h){h.preventDefault()}f.endFrame+=5;e.refresh()};e.play=function(){if(!f.autoplay){f.autoplay=true;f.play=setInterval(e.moveToNextFrame,250)}};e.stop=function(){if(f.autoplay){f.autoplay=false;clearInterval(f.play);f.play=null}};e.moveToNextFrame=function(){if(f.autoplayDirection===1){f.endFrame-=1}else{f.endFrame+=1}e.refresh()};e.gotoAndPlay=function(l){if(f.disableWrap){f.endFrame=l;e.refresh()}else{var k=Math.ceil(f.endFrame/f.totalFrames);if(k===0){k=1}var h=(k>1)?f.endFrame-((k-1)*f.totalFrames):f.endFrame;var i=f.totalFrames-h;var j=0;if(l-h>0){if(l-h<h+(f.totalFrames-l)){j=f.endFrame+(l-h)}else{j=f.endFrame-(h+(f.totalFrames-l))}}else{if(h-l<i+l){j=f.endFrame-(h-l)}else{j=f.endFrame+(i+l)}}if(h!==l){f.endFrame=j;e.refresh()}}};e.initEvents=function(){e.$el.bind("mousedown touchstart touchmove touchend mousemove click",function(h){h.preventDefault();if((h.type==="mousedown"&&h.which===1)||h.type==="touchstart"){f.pointerStartPosX=e.getPointerEvent(h).pageX;f.dragging=true}else{if(h.type==="touchmove"){e.trackPointer(h)}else{if(h.type==="touchend"){f.dragging=false}}}});a(document).bind("mouseup",function(h){f.dragging=false;a(this).css("cursor","none")});a(document).bind("mousemove",function(h){if(f.dragging){h.preventDefault();if(!e.browser.isIE&&f.showCursor){e.$el.css("cursor","url(assets/images/hand_closed.png), auto")}}else{if(!e.browser.isIE&&f.showCursor){e.$el.css("cursor","url(assets/images/hand_open.png), auto")}}e.trackPointer(h)})};e.getPointerEvent=function(h){return h.originalEvent.targetTouches?h.originalEvent.targetTouches[0]:h};e.trackPointer=function(h){if(f.ready&&f.dragging){f.pointerEndPosX=e.getPointerEvent(h).pageX;if(f.monitorStartTime<new Date().getTime()-f.monitorInt){f.pointerDistance=f.pointerEndPosX-f.pointerStartPosX;if(f.pointerDistance>0){f.endFrame=f.currentFrame+Math.ceil((f.totalFrames-1)*f.speedMultiplier*(f.pointerDistance/e.$el.width()))}else{f.endFrame=f.currentFrame+Math.floor((f.totalFrames-1)*f.speedMultiplier*(f.pointerDistance/e.$el.width()))}if(f.disableWrap){f.endFrame=Math.min(f.totalFrames-(f.zeroBased?1:0),f.endFrame);f.endFrame=Math.max((f.zeroBased?0:1),f.endFrame)}e.refresh();f.monitorStartTime=new Date().getTime();f.pointerStartPosX=e.getPointerEvent(h).pageX}}};e.refresh=function(){if(f.ticker===0){f.ticker=setInterval(e.render,Math.round(1000/f.framerate))}};e.render=function(){var h;if(f.currentFrame!==f.endFrame){h=f.endFrame<f.currentFrame?Math.floor((f.endFrame-f.currentFrame)*0.1):Math.ceil((f.endFrame-f.currentFrame)*0.1);e.hidePreviousFrame();f.currentFrame+=h;e.showCurrentFrame();e.$el.trigger("frameIndexChanged",[e.getNormalizedCurrentFrame(),f.totalFrames])}else{window.clearInterval(f.ticker);f.ticker=0}};e.hidePreviousFrame=function(){g[e.getNormalizedCurrentFrame()].removeClass("current-image").addClass("previous-image")};e.showCurrentFrame=function(){g[e.getNormalizedCurrentFrame()].removeClass("previous-image").addClass("current-image")};e.getNormalizedCurrentFrame=function(){var i,h;if(!f.disableWrap){i=Math.ceil(f.currentFrame%f.totalFrames);if(i<0){i+=(f.totalFrames-1)}}else{i=Math.min(f.currentFrame,f.totalFrames-(f.zeroBased?1:0));h=Math.min(f.endFrame,f.totalFrames-(f.zeroBased?1:0));i=Math.max(i,(f.zeroBased?0:1));h=Math.max(h,(f.zeroBased?0:1));f.currentFrame=i;f.endFrame=h}return i};e.zeroPad=function(i){function l(o,n){var p=o.toString();if(f.zeroPadding){while(p.length<n){p="0"+p}}return p}var h=Math.log(f.totalFrames)/Math.LN10;var m=1000;var k=Math.round(h*m)/m;var j=Math.floor(k)+1;return l(i,j)};e.browser={};e.browser.isIE=function(){var j=-1;if(navigator.appName==="Microsoft Internet Explorer"){var h=navigator.userAgent;var i=new RegExp("MSIE ([0-9]{1,}[\\.0-9]{0,})");if(i.exec(h)!==null){j=parseFloat(RegExp.$1)}}return j!==-1};e.init()};a.ThreeSixty.defaultOptions={dragging:false,ready:false,pointerStartPosX:0,pointerEndPosX:0,pointerDistance:0,monitorStartTime:0,monitorInt:10,ticker:0,speedMultiplier:7,totalFrames:180,currentFrame:0,endFrame:0,loadedImages:0,framerate:60,domains:null,domain:"",parallel:false,queueAmount:8,idle:0,filePrefix:"",ext:"png",height:300,width:300,styles:{},navigation:false,autoplay:false,autoplayDirection:1,disableSpin:false,disableWrap:false,responsive:false,zeroPadding:false,zeroBased:false,plugins:[],showCursor:false,drag:true,onReady:function(){}};a.fn.ThreeSixty=function(b){return Object.create(new a.ThreeSixty(this,b))}}(jQuery));if(typeof Object.create!=="function"){Object.create=function(b){function a(){}a.prototype=b;return new a()}};
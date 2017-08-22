
         /***********************
         * Adobe Edge Animate Composition Actions
         *
         * Edit this file with caution, being careful to preserve 
         * function signatures and comments starting with 'Edge' to maintain the 
         * ability to interact with these actions from within Adobe Edge Animate
         *
         ***********************/
         (function($, Edge, compId){
         var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes
         
            //Edge symbol: 'stage'
            (function(symbolName) {
         
         var youtube = $ ("<iframe/>");
         sym.$ ("video").append(youtube);
         youtube.attr('type','text/html');
         youtube.attr('width','640');
         youtube.attr('height','360');
         youtube.attr('src','https://player.vimeo.com/video/72177063');
         youtube.attr('frameborder', '0');
         youtube.attr('allowfullscreen','yes');
         
         
         
         
      //Edge binding end
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
      
            var youtube = $ ("<iframe/>");
            sym.$ ("video").append(youtube);
            youtube.attr('type','text/html');
            youtube.attr('width','640');
            youtube.attr('height','360');
            youtube.attr('src','https://player.vimeo.com/video/72177063');
            youtube.attr('frameborder', '0');
            youtube.attr('allowfullscreen','yes');
      
      
      
      
      
      
      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 25500, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("loop");
      
      
      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.play();
      
      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         
         yepnope ({
                  load:"http://cdn.edgecommons.org/an/1.4.0/js/min/EdgeCommons.Parallax.js",
                  complete: function(){ 
                  EC.debug("Commons Ready: "+EC.VERSION); 
                EC.centerStage(sym);
                EC.Parallax.setup(sym);
         
                  }
         
                  }); 
         

      });
      //Edge binding end
      
      Symbol.bindTimelineAction(compId, symbolName, "Default Timeline", "complete", function(sym, e) {
         //the symbol or timeline you want to scrub through on the stage
         var mySymbol = sym.getSymbol("mySymbol");
         //the symbol's total duration
         var mySymbolDuration = mySymbol.getDuration();
         //the dragger symbol's element (the thing you're going to drag)
         var draggerElement = sym.getSymbol("myDraggerSymbol").getSymbolElement();
         //your min and max drag values
         var minDrag = 0;
         var maxDrag = 1200;
         //set it to its minDrag position - this also populates the _gsTransform object used in onDrag
         TweenMax.set(draggerElement,{
           position:'absolute',
           x:minDrag
         }
         ); 
      
         //create your Draggable instance
         var scrubDragger = Draggable.create(draggerElement , {
      
            type:'x',
            bounds:{minX:minDrag , maxX:maxDrag },
            onDrag:onDrag
         });
      
      
      
         function onDrag(){
            //percent through your entire drag
            var dragPercent = (draggerElement[0]._gsTransform.x/maxDrag);
            //a percentage of the entire duration of the symbol you're scrubbing through
            var scrubToFrame = Math.round(dragPercent * mySymbolDuration);
            //tell that symbol to go to and stop at that frame (well, it's miliseconds actually - your value will be in the 1000s)
            mySymbol.stop(scrubToFrame);
         };
      
      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${Stage}", "scroll", function(sym, e) {
      
      
         Symbol.bindElementAction(compId, symbolName, "${Stage}", "scroll", function(sym, e) {
                     var myCalc = e.currentTarget.scrollLeft/(e.currentTarget.scrollWidth-e.currentTarget.clientWidth);
                              var pos = Math.round( myCalc * sym.getDuration() );
                              sym.stop(pos);
                              console.log('pos = '+pos);
      
         });
         //Edge binding end
      
      });
      //Edge binding end

            })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'ancre'
   (function(symbolName) {   
   
      

      

      

      

      

      

   })("ancre");
   //Edge symbol end:'ancre'

   //=========================================================
   
   //Edge symbol: 'ecole'
   (function(symbolName) {   
   
      

      

      

      

   })("ecole");
   //Edge symbol end:'ecole'

   //=========================================================
   
   //Edge symbol: 'ancrechaine'
   (function(symbolName) {   
   
      

      

      

      

   })("ancrechaine");
   //Edge symbol end:'ancrechaine'

   //=========================================================
   
   //Edge symbol: 'logogitlink'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${link}", "click", function(sym, e) {
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute for a new window)
         window.open("https://www.linkedin.com/in/marc-abed-60b4b7105", "_self");
         // insert code for mouse click here

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${github}", "click", function(sym, e) {
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute for a new window)
         window.open("https://github.com/marcabed/work", "_self");
         // insert code for mouse click here

      });
      //Edge binding end

   })("logogitlink");
   //Edge symbol end:'logogitlink'
            //Edge symbol: 'stage'
            (function(symbolName) {
         
         var youtube = $ ("<iframe/>");
         sym.$ ("video").append(youtube);
         youtube.attr('type','text/html');
         youtube.attr('width','640');
         youtube.attr('height','360');
         youtube.attr('src','https://player.vimeo.com/video/72177063');
         youtube.attr('frameborder', '0');
         youtube.attr('allowfullscreen','yes');
         
         
         
         
      //Edge binding end
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
      
            var youtube = $ ("<iframe/>");
            sym.$ ("video").append(youtube);
            youtube.attr('type','text/html');
            youtube.attr('width','640');
            youtube.attr('height','360');
            youtube.attr('src','https://player.vimeo.com/video/72177063');
            youtube.attr('frameborder', '0');
            youtube.attr('allowfullscreen','yes');
      
      
      
      
      
      
      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 25500, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("loop");
      
      
      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.play();
      
      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
      
         yepnope ({
                  load:"http://cdn.edgecommons.org/an/1.0.0/js/min/EdgeCommons.Parallax.js",
                  complete: function(){ 
                  EC.debug("Commons Ready: "+EC.VERSION); 
                EC.centerStage(sym);
                EC.Parallax.setup(sym);
      
                  }
      
                  }); 
      
      
      });
      //Edge binding end
      
      Symbol.bindTimelineAction(compId, symbolName, "Default Timeline", "complete", function(sym, e) {
         //the symbol or timeline you want to scrub through on the stage
         var mySymbol = sym.getSymbol("mySymbol");
         //the symbol's total duration
         var mySymbolDuration = mySymbol.getDuration();
         //the dragger symbol's element (the thing you're going to drag)
         var draggerElement = sym.getSymbol("myDraggerSymbol").getSymbolElement();
         //your min and max drag values
         var minDrag = 0;
         var maxDrag = 1200;
         //set it to its minDrag position - this also populates the _gsTransform object used in onDrag
         TweenMax.set(draggerElement,{
           position:'absolute',
           x:minDrag
         }
         ); 
      
         //create your Draggable instance
         var scrubDragger = Draggable.create(draggerElement , {
      
            type:'x',
            bounds:{minX:minDrag , maxX:maxDrag },
            onDrag:onDrag
         });
      
      
      
         function onDrag(){
            //percent through your entire drag
            var dragPercent = (draggerElement[0]._gsTransform.x/maxDrag);
            //a percentage of the entire duration of the symbol you're scrubbing through
            var scrubToFrame = Math.round(dragPercent * mySymbolDuration);
            //tell that symbol to go to and stop at that frame (well, it's miliseconds actually - your value will be in the 1000s)
            mySymbol.stop(scrubToFrame);
         };
      
      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${Stage}", "scroll", function(sym, e) {
      
      
         Symbol.bindElementAction(compId, symbolName, "${Stage}", "scroll", function(sym, e) {
                     var myCalc = e.currentTarget.scrollLeft/(e.currentTarget.scrollWidth-e.currentTarget.clientWidth);
                              var pos = Math.round( myCalc * sym.getDuration() );
                              sym.stop(pos);
                              console.log('pos = '+pos);
      
         });
         //Edge binding end
      
      });
      //Edge binding end

            })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'logoexpe3'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${logoloreal}", "click", function(sym, e) {
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute for a new window)
         window.open("https://vimeo.com/72177973", "_self");
         // insert code for mouse click here

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${logoqnb}", "click", function(sym, e) {
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute for a new window)
         window.open("https://vimeo.com/72390660", "_self");
         // insert code for mouse click here

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${logoyamaha}", "click", function(sym, e) {
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute for a new window)
         window.open("https://vimeo.com/channels/955618", "_self");
         // insert code for mouse click here

      });
      //Edge binding end

   })("logoexpe3");
   //Edge symbol end:'logoexpe3'

   //=========================================================
   
   //Edge symbol: 'logoit'
   (function(symbolName) {   
   
   })("logoit");
   //Edge symbol end:'logoit'

   //=========================================================
   
   //Edge symbol: 'video'
   (function(symbolName) {   
   
   })("video");
   //Edge symbol end:'video'

   //=========================================================
   
   //Edge symbol: 'shark'
   (function(symbolName) {   
   
   })("shark");
   //Edge symbol end:'shark'

   //=========================================================
   
   //Edge symbol: 'Symbol_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 30000, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("tour");

      });
      //Edge binding end

   })("Symbol_1");
   //Edge symbol end:'Symbol_1'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-19197089");
(jQuery, AdobeEdge, "EDGE-19197089");


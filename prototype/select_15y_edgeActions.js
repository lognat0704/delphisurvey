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
      
      
      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         // insert code to be run when the symbol is created here
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${test1}", "mouseover", function(sym, e) {
         // drag&drop
         sym.$("test1").draggable({ opacity: 0.35 , revert: "invalid" });
         
         sym.$("bin").droppable({ 
         	accept: sym.$("test1"),
         	drop: function(){
         	sym.$("test1").animate({"opacity": "0"}, "slow");
         	}
         });
         
         sym.$("axis").droppable({ 
         	accept: sym.$("test1"),
         	drop: function(){
         		sym.getSymbol("test1").play();
         	}
         });
         
         
         sym.$("origPos").droppable({ 
         	accept: sym.$("test1"),
         	drop: function(){
         		sym.$("test1").animate({"left": "80px", "top": "140px"}, "slow");
         	}
         });
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${go_url}", "click", function(sym, e) {
         // insert code for mouse click here
         window.open("datashow_ed2.html?mode=preview","_self")

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${test2}", "mouseover", function(sym, e) {
         // drag&drop
         sym.$("test2").draggable({ opacity: 0.35 , revert: "invalid" });
         
         sym.$("bin").droppable({ 
         	accept: sym.$("test2"),
         	drop: function(){
         	sym.$("test2").animate({"opacity": "0"}, "slow");
         	}
         });
         
         sym.$("axis").droppable({ 
         	accept: sym.$("test2"),
         	drop: function(){
         		sym.getSymbol("test2").play();
         	}
         });
         
         
         sym.$("origPos").droppable({ 
         	accept: sym.$("test2"),
         	drop: function(){
         		sym.$("test2").animate({"left": "40px", "top": "180px"}, "slow");
         	}
         });

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${reset_btn}", "click", function(sym, e) {
         // put everything back
         sym.$("test1").animate({"left": "40px", "top": "140px"}, "slow");
         sym.$("test1").animate({"opacity": "1"}, "slow");
         
         sym.$("test2").animate({"left": "40px", "top": "240px"}, "slow");
         sym.$("test2").animate({"opacity": "1"}, "slow");
         

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'test1'
   (function(symbolName) {   
   
   })("test1");
   //Edge symbol end:'test1'

   //=========================================================
   
   //Edge symbol: 'go_url'
   (function(symbolName) {   
   
   })("go_url");
   //Edge symbol end:'go_url'

   //=========================================================
   
   //Edge symbol: 'test2'
   (function(symbolName) {   
   
   })("test2");
   //Edge symbol end:'test2'

   //=========================================================
   
   //Edge symbol: 'reset_btn'
   (function(symbolName) {   
   
   })("reset_btn");
   //Edge symbol end:'reset_btn'

   //=========================================================
   
   //Edge symbol: 'bg'
   (function(symbolName) {   
   
   })("bg");
   //Edge symbol end:'bg'

   //=========================================================
   
   //Edge symbol: 'bin'
   (function(symbolName) {   
   
   })("bin");
   //Edge symbol end:'bin'

   //=========================================================
   
   //Edge symbol: 'axis'
   (function(symbolName) {   
   
   })("axis");
   //Edge symbol end:'axis'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-32252697");
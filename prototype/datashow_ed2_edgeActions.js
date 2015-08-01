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
      
      
      Symbol.bindElementAction(compId, symbolName, "${_2Y_btn}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.getSymbol("test1").play("2y");
         sym.getSymbol("year").play("2y");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_15Y_btn}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.getSymbol("test1").play("15y");
         sym.getSymbol("year").play("15y");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_2_15Y_btn}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.getSymbol("test1").play("2y-15y");
         sym.getSymbol("year").play("2y-15y");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_all_btn}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.getSymbol("test1").play("all");
         sym.getSymbol("year").play("all");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${test1}", "mouseover", function(sym, e) {
         // drag&drop
         sym.$("test1").draggable({ opacity: 0.35 , revert: "invalid" });
         
         sym.$("bin").droppable({ 
         	accept: sym.$("test1"),
         	drop: function(){
         	sym.$("test1").animate({"opacity": "0"}, "slow");
         	sym.$("test1").animate({"opacity": "0"}, "slow");
         	}
         });

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${reset_btn}", "click", function(sym, e) {
         
         // put everything back
         
         sym.$("test1").animate({"left": "150px", "top": "260px"}, "slow");
         sym.$("test1").animate({"opacity": "1"}, "slow");

      });
      //Edge binding end

      

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'bg'
   (function(symbolName) {   
   
   })("bg");
   //Edge symbol end:'bg'

   //=========================================================
   
   //Edge symbol: '_all_btn'
   (function(symbolName) {   
   
   })("_all_btn");
   //Edge symbol end:'_all_btn'

   //=========================================================
   
   //Edge symbol: '_15Y_btn'
   (function(symbolName) {   
   
   })("_15Y_btn");
   //Edge symbol end:'_15Y_btn'

   //=========================================================
   
   //Edge symbol: '_2Y_btn'
   (function(symbolName) {   
   
   })("_2Y_btn");
   //Edge symbol end:'_2Y_btn'

   //=========================================================
   
   //Edge symbol: '_2_15Y_btn'
   (function(symbolName) {   
   
   })("_2_15Y_btn");
   //Edge symbol end:'_2_15Y_btn'

   //=========================================================
   
   //Edge symbol: 'bin'
   (function(symbolName) {   
   
   })("bin");
   //Edge symbol end:'bin'

   //=========================================================
   
   //Edge symbol: 'test1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1459, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 600, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1836, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2250, function(sym, e) {
         // insert code here
      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 80, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("test1");
   //Edge symbol end:'test1'

   //=========================================================
   
   //Edge symbol: 'text2_content'
   (function(symbolName) {   
   
   })("text2_content");
   //Edge symbol end:'text2_content'

   //=========================================================
   
   //Edge symbol: 'reset_btn'
   (function(symbolName) {   
   
   })("reset_btn");
   //Edge symbol end:'reset_btn'

   //=========================================================
   
   //Edge symbol: 'go_url'
   (function(symbolName) {   
   
   })("go_url");
   //Edge symbol end:'go_url'

   //=========================================================
   
   //Edge symbol: 'year'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 160, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 750, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1093, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("year");
   //Edge symbol end:'year'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-623564");
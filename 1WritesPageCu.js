const { Selector } = require('testcafe');
function select(selector){
   return Selector(selector).with({boundTestRun:testController})
}

exports.WritesPageCU={
   SubtitleStar: function(){ 
      return select('div.gw-TitleBar--title').withText('Mi resumen');
   },

   ActionButton: function(){ 
      return select('#Desktop-DesktopMenuActions > div.gw-action--inner');
   },

   NewAccountButton: function(){ 
      return select('div.gw-label').withText('Cuenta nueva');
   }

 }
 


 
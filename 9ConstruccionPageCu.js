const { Selector } = require('testcafe');
function select(selector){
   return Selector(selector).with({boundTestRun:testController})
}

exports.ConstruccionPage={
    ConstruccViviendaPageMessages: function(){ 
        return select('div.gw-TitleBar--title').withText('Construcción para vivienda');
     }
}

const { Selector } = require('testcafe');
function select(selector){
   return Selector(selector).with({boundTestRun:testController})
}

exports.PolicyDonePage={
    PolicyDonePageMessages: function(){ 
        return select('div.gw-TitleBar--title').withText('solicitudContratada');
     }
}



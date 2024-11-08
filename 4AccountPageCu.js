const { Selector } = require('testcafe');
function select(selector){
   return Selector(selector).with({boundTestRun:testController})
}

exports.AccountPage={
    AccountMessages: function(){ 
        return select('div.gw-TitleBar--title').withText('Resumen de la cuenta: luzas lada');
     },

     NewSolicitudButton: function(){ 
        return select('#AccountFile_Summary-AccountSummaryDashboard-OpenPolicyTransactionsAccountListViewTile-NewSubmission > div');
     }
}

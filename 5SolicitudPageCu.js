const { Selector } = require('testcafe');
function select(selector){
   return Selector(selector).with({boundTestRun:testController})
}

exports.SolicitudPage={
    NewSolicitudMessages: function(){ 
        return select('div.gw-TitleBar--title').withText('Solicitudes nuevas');
     },

     SolicitudViviendaButton: function(){ 
        return select('#NewSubmission-NewSubmissionScreen-ProductOffersDV-ProductSelectionLV-1-addSubmission');
     }
}

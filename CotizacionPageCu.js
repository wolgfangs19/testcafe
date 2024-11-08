const { Selector } = require('testcafe');
function select(selector){
   return Selector(selector).with({boundTestRun:testController})
}

exports.CotizacionPage={
    CotizacionMessages: function(){ 
      return select('div.gw-TitleBar--title').withText('Cotización');
   },

   CotizacionButton: function(){ 
      return select('#SubmissionWizard-SubmissionWizard_QuoteScreen-JobWizardToolbarButtonSet-BindOptions > div.gw-action--inner');
   },

   EmitirButton: function(){ 
      return select('#SubmissionWizard-SubmissionWizard_QuoteScreen-JobWizardToolbarButtonSet-BindOptions-BindAndIssue > div > div.gw-label');
   },
   AceptAlert: function(){
    setNativeDialogHandler(() => true);}

 }



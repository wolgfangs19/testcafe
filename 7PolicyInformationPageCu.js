const { Selector } = require('testcafe');
function select(selector){
   return Selector(selector).with({boundTestRun:testController})
}

exports.PolicyInformationPage={
    InformationPolicyMessages: function(){ 
        return select('div.gw-TitleBar--title').withText('Información de póliza');
     },

     StartDateButton: function(){ 
        return select('#SubmissionWizard-LOBWizardStepGroup-SubmissionWizard_PolicyInfoScreen-SubmissionWizard_PolicyInfoDV-DateQuoteNeeded_dateIcon');
     },
     TodayButton: function(){ 
        return select('#gw-datePicker > div.gw-datePicker--footer.gw-inDatePicker > div.gw-datePicker--today.gw-button-secondary');
     },

    }






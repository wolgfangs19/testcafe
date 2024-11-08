const { Selector } = require('testcafe');
function select(selector){
   return Selector(selector).with({boundTestRun:testController})
}

exports.ViviendaPage={
    ViviendaPageMessages: function(){ 
        return select('div.gw-TitleBar--title').withText('Vivienda');
     },

     IncendioButton: function(){ 
        return select('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-HOPDwellingScreen-HOPDwellingPanelSet-HOPDwellingCV-HOPDwellingDetailsDV-HOPDwellingProtectionInputSet-ProtectionClass > div > div > select');
     }

    }


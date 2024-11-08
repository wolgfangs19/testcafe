const { Selector } = require('testcafe');
function select(selector){
   return Selector(selector).with({boundTestRun:testController})
}

exports.CoberturaPage={
    CoberturaMessages: function(){ 
        return select('div.gw-TitleBar--title').withText('Coberturas');
     },

     CoaseguroButton: function(){ 
        return select('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-HOPCoveragesScreen-HOPMainCoveragesPanelSet-dwellingCoveragePatternIterator-0-CoverageInputSet-CovPatternInputGroup-HOPCovACoinsurance > div > div > select');
     },
     ArriendoOptionN: function(){ 
        return select('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-HOPCoveragesScreen-HOPMainCoveragesPanelSet-dwellingCoveragePatternIterator-3-CoverageInputSet-CovPatternInputGroup-HOPCovDLossOfRent_1');
     },

     UsoProhibidoButton: function(){ 
        return select('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-HOPCoveragesScreen-HOPMainCoveragesPanelSet-dwellingCoveragePatternIterator-3-CoverageInputSet-CovPatternInputGroup-HOPCovDProhibitedUse > div > div > select');
     },
     CotizacionButton: function(){ 
        return select('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-HOPCoveragesScreen-JobWizardToolbarButtonSet-QuoteTypeToolbarButtonSet-Quote > div > div.gw-label');
     }
}




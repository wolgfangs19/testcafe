const { Selector } = require('testcafe');
function select(selector){
   return Selector(selector).with({boundTestRun:testController})
}

exports.CualificacionPage={
    CualificacionMessages: function(){ 
        return select('div.gw-TitleBar--title').withText('Cualificación');
     },

     TypePolizaButton: function(){ 
        return select('#SubmissionWizard-SubmissionWizard_PreQualificationScreen-CoveragePartSelectionDV-HOPCoveragePartType > div > div > select');
     },
     CoberturaButton: function(){ 
        return select('#SubmissionWizard-SubmissionWizard_PreQualificationScreen-CoveragePartSelectionDV-HOPCoverageForm > div > div > select');
     },

     OcupaButton: function(){ 
        return select('#SubmissionWizard-SubmissionWizard_PreQualificationScreen-PreQualQuestionSetsDV-QuestionSetsDV-0-QuestionSetLV-2-QuestionModalInput-ChoiceSelectInput > div > div > select');
     },
    
    OcupationSelectY: function(){ 
       return select('#SubmissionWizard-SubmissionWizard_PreQualificationScreen-PreQualQuestionSetsDV-QuestionSetsDV-0-QuestionSetLV-3-QuestionModalInput-BooleanRadioInput_0');
    },

    NextButton: function(){ 
       return select('#SubmissionWizard-Next > div > div.gw-label');
    }
}



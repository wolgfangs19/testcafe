const { Selector } = require('testcafe');
function select(selector){
   return Selector(selector).with({boundTestRun:testController})
}

exports.CreateAccountPage={
    CreateAccountMessages: function(){ 
      return select('div.gw-TitleBar--title').withText('Crear cuenta');
   },

   InputPhoneNumber: function(){ 
      return select('#CreateAccount-CreateAccountScreen-CreateAccountDV-CreateAccountContactInputSet-HomePhone-GlobalPhoneInputSet-NationalSubscriberNumber > div > input[type=text]');
   },

   PhoneSelect: function(){ 
      return select('#CreateAccount-CreateAccountScreen-CreateAccountDV-CreateAccountContactInputSet-PrimaryPhone > div > div > select');
   },

   InputMail: function(){ 
      return select('#CreateAccount-CreateAccountScreen-CreateAccountDV-CreateAccountContactInputSet-EmailAddress1 > div > input[type=text]');
   },

   InputAdress: function(){ 
      return select('#CreateAccount-CreateAccountScreen-CreateAccountDV-AddressInputSet-globalAddressContainer-GlobalAddressInputSet-AddressLine1 > div > input[type=text]');
   },

   TypeAdress: function(){ 
      return select('#CreateAccount-CreateAccountScreen-CreateAccountDV-AddressType > div > div > select');
   },

   AgentInput: function(){ 
      return select('#CreateAccount-CreateAccountScreen-CreateAccountDV-ProducerSelectionInputSet-Producer > div.gw-vw--value > input');
   },
   AgentCode: function(){ 
    return select('#CreateAccount-CreateAccountScreen-CreateAccountDV-ProducerSelectionInputSet-ProducerCode > div > div > select');
 },
    AddAgent: function(){ 
    return select('#CreateAccount-CreateAccountScreen-CreateAccountDV-ProducerSelectionInputSet-ProducerSelection > div.gw-label.gw-boldLabel');
 },
 UpdateButton: function(){ 
    return select('#CreateAccount-CreateAccountScreen-ForceDupCheckUpdate > div > div.gw-label');
 },
 InputCondado: function(){ 
    return select('#CreateAccount-CreateAccountScreen-CreateAccountDV-AddressInputSet-globalAddressContainer-GlobalAddressInputSet-State > div > div > select');
 },
 AddCondado: function(){ 
    return select('#CreateAccount-CreateAccountScreen-CreateAccountDV-AddressInputSet-globalAddressContainer-GlobalAddressInputSet-0');
 },
 ListOPtion: function(){
    return select('option');
 }
 }


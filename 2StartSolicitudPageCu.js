const { Selector } = require('testcafe');
function select(selector){
   return Selector(selector).with({boundTestRun:testController})
}

exports.StartSolicitudPage={
   AccountInformationMessages: function(){ 
      return select('div.gw-TitleBar--title').withText('Introducir información de la cuenta');
   },

   InputFirstName: function(){ 
      return select("input[name='NewAccount-NewAccountScreen-NewAccountSearchDV-GlobalPersonNameInputSet-FirstName']");
   },

   InputLastName: function(){ 
      return select("input[name='NewAccount-NewAccountScreen-NewAccountSearchDV-GlobalPersonNameInputSet-LastName']");
   },

   SearchButton: function(){ 
      return select('#NewAccount-NewAccountScreen-NewAccountSearchDV-SearchAndResetInputSet-SearchLinksInputSet-Search');
   },

   NotFoundMessages: function(){ 
      return select('div.gw-message').withText('La búsqueda no obtuvo resultados.');
   },

   CreateNewAccountButton: function(){ 
      return select('#NewAccount-NewAccountScreen-NewAccountButton > div.gw-action--inner > div.gw-label');
   },

   CreateTypeAccountButton: function(){ 
      return select('#NewAccount-NewAccountScreen-NewAccountButton-NewAccount_Person');
   }
 }



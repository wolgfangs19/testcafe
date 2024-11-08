import { Selector } from 'testcafe';
const assert = require('assert');
import { Given, When, Then } from '@cucumber/cucumber';
const URL ='http://10.0.145.154:8180/pc/PolicyCenter.do';
const UseInput=Selector("input[name='Login-LoginScreen-LoginDV-username']");
const PassInput=Selector("input[name='Login-LoginScreen-LoginDV-password']");
const LoginButton = Selector('div.gw-label').withText('Iniciar sesión');
import { WritesPageCU } from '../../pages cucumber/1WritesPageCu';
import { StartSolicitudPage } from '../../pages cucumber/2StartSolicitudPageCu';
import { CreateAccountPage } from '../../pages cucumber/3CreateAccountPageCu';
import { AccountPage } from '../../pages cucumber/4AccountPageCu';
import { SolicitudPage } from '../../pages cucumber/5SolicitudPageCu';
import { CualificacionPage } from '../../pages cucumber/6CualificacionPageCu';
import { PolicyInformationPage } from '../../pages cucumber/7PolicyInformationPageCu';
import { ViviendaPage } from '../../pages cucumber/8ViviendaPageCu';
import { ConstruccionPage } from '../../pages cucumber/9ConstruccionPageCu';
import { CoberturaPage } from '../../pages cucumber/CoberturasPageCu';
import { CotizacionPage } from '../../pages cucumber/CotizacionPageCu';
import { PolicyDonePage } from '../../pages cucumber/PolicyDonePageCu';

Given ('Entro a PolicyCenter con usuario valido', async function () {
    await testController
    .navigateTo(URL)
    .textType(UseInput,'su')
    .textType(PassInput,'gw')
    .click(LoginButton);
    await testController
    .expect(WritesPageCU.SubtitleStar().exists).ok;   
});

When('Hago click en el boton de acciones', async function() {
    await testController.click(WritesPageCU.ActionButton)   
});

When('Hago click en el boton de nueva cuenta', async function() {
    await testController.click(WritesPageCU.NewAccountButton)   
});

When('Estoy en la pagina de iniciar solicitud', async function() {
    await testController
    .expect(StartSolicitudPage.AccountInformationMessages().exists).ok; 
});

When('Ingerso el nombre {String}', async function(FirstName) {
    await testController
    .textType(StartSolicitudPage.InputFirstName,FirstName); 
});

When('Ingerso el apellido {String}', async function(LastNametName) {
    await testController
    .textType(StartSolicitudPage.InputFirstName,LastNametName); 
});

When('Hago click en el boton buscar', async function() {
    await testController
    .click(StartSolicitudPage.SearchButton); 
});

When('Aparece el boton de nueva cuenta', async function() {
    await testController
    .expect(StartSolicitudPage.CreateNewAccountButton.visible).ok(); 
});

When('Hago click en el boton nueva cuenta', async function() {
    await testController
    .click(StartSolicitudPage.CreateNewAccountButton); 
});

When('Hago click en el boton persona', async function() {
    await testController
    .click(StartSolicitudPage.CreateNewAccountButton); 
});

When('Estoy en la pagina de crear cuenta', async function() {
    await testController
    .expect(CreateAccountPage.CreateAccountMessages.visible).ok(); 
});

When('Ingerso numero de telefono {String}', async function(PhoneNumber) {
    await testController
    .textType(CreateAccountPage.InputPhoneNumber,PhoneNumber); 
});

When('Selecciono tipo de telefono {String}', async function(PhoneType) {
    await testController
    .click(CreateAccountPage.PhoneSelect);
    await testController
    .click(CreateAccountPage.ListOPtion().withText(PhoneType)); 
});

When('Ingerso email {String}', async function(mail) {
    await testController
    .textType(CreateAccountPage.InputMail,mail); 
});

When('Ingerso direccion {String}', async function(adress) {
    await testController
    .textType(CreateAccountPage.InputAdress,adress); 
});

When('Selecciono condado {String}', async function(condado) {
    await testController
    .click(CreateAccountPage.InputCondado);
    await testController
    .click(CreateAccountPage.ListOPtion().withText(condado));
    await testController
    .click(CreateAccountPage.AddCondado); 
});

When('Selecciono tipo de direccion casa {String}', async function(typyadress) {
    await testController
    .click(CreateAccountPage.TypeAdress);
    await testController
    .click(CreateAccountPage.ListOPtion().withText(typyadress));
});

When('Ingerso nombre de agente {String}', async function(agent) {
    await testController
    .textType(CreateAccountPage.AgentInput,agent); 
    await testController
    .click(CreateAccountPage.AddAgent());
});

When('Aparece los datos del agente', async function() {
    await testController
    .expect(CreateAccountPage.AgentCode.visible).ok(); 
});

When('Hago click en el boton actualizar', async function() {
    await testController
    .click(CreateAccountPage.UpdateButton); 
});

Then('Se crea la nueva cuenta de usuario', async function() {
    await testController
    .expect(AccountPage.AccountMessages.visible).ok(); 
});

When('Hago click en el boton nueva solicitud', async function() {
    await testController
    .click(AccountPage.NewSolicitudButton); 
});

When('Estoy en la pagina de nueva solicitud de poliza', async function() {
    await testController
    .expect(SolicitudPage.NewSolicitudMessages.visible).ok(); 
});

When('Hago click en la opcion vivienda', async function() {
    await testController
    .click(SolicitudPage.SolicitudViviendaButton); 
});

When('Estoy en la pagina de cualificacion', async function() {
    await testController
    .expect(CualificacionPage.CualificacionMessages.visible).ok(); 
});

When('Selecciono tipo de vivienda {String}', async function(viviendatype) {
    await testController
    .click(CualificacionPage.TypePolizaButton);
    await testController
    .click(CreateAccountPage.ListOPtion().withText(viviendatype));
});

When('Selecciono tipo de cobertura {String}', async function(coberturatype) {
    await testController
    .click(CualificacionPage.CoberturaButton);
    await testController
    .click(CreateAccountPage.ListOPtion().withText(coberturatype));
});

When('Selecciono tipo la ocupacion {String}', async function(ocupaciontype) {
    await testController
    .click(CualificacionPage.OcupaButton);
    await testController
    .click(CreateAccountPage.ListOPtion().withText(ocupaciontype));
});

When('Hago click en el boton yes de ocupacion', async function() {
    await testController
    .click(CualificacionPage.OcupationSelectY); 
});

When('Hago click en el boton siguiente', async function() {
    await testController
    .click(CualificacionPage.NextButton); 
});

When('Estoy en la pagina de informacion de la poliza', async function() {
    await testController
    .expect(PolicyInformationPage.InformationPolicyMessages.visible).ok(); 
});

When('Hago click en el boton de inicio de vigencia', async function() {
    await testController
    .click(PolicyInformationPage.StartDateButton); 
});

When('Hago click en el boton hoy', async function() {
    await testController
    .click(PolicyInformationPage.TodayButton); 
});

When('Hago click en el boton siguiente', async function() {
    await testController
    .click(CualificacionPage.NextButton); 
});

When('Estoy en la pagina de vivienda', async function() {
    await testController
    .expect(ViviendaPage.ViviendaPageMessages.visible).ok(); 
});

When('Selecciono tipo incendio {String}', async function(incendiotype) {
    await testController
    .click(ViviendaPage.IncendioButton);
    await testController
    .click(CreateAccountPage.ListOPtion().withText(incendiotype));
});

When('Hago click en el boton siguiente', async function() {
    await testController
    .click(CualificacionPage.NextButton); 
});

When('Estoy en la pagina de construccion', async function() {
    await testController
    .expect(ConstruccionPage.ConstruccViviendaPageMessages.visible).ok(); 
});

When('Hago click en el boton siguiente', async function() {
    await testController
    .click(CualificacionPage.NextButton); 
});

When('Estoy en la pagina de coberturas', async function() {
    await testController
    .expect(CoberturaPage.CoberturaMessages.visible).ok(); 
});

When('Selecciono la opcion de coaseguro {String}', async function(coasegurotype) {
    await testController
    .click(CoberturaPage.CoaseguroButton);
    await testController
    .click(CreateAccountPage.ListOPtion().withText(coasegurotype));
});

When('Selecciono la opcion uso prohibido {String}', async function(usoprohibidotype) {
    await testController
    .click(CoberturaPage.UsoProhibidoButton);
    await testController
    .click(CreateAccountPage.ListOPtion().withText(usoprohibidotype));
});

When('Hago click en el boton de opcion NO de arriendo', async function() {
    await testController
    .click(CoberturaPage.ArriendoOptionN); 
});

When('Hago click en el boton cotizacion', async function() {
    await testController
    .click(CoberturaPage.CotizacionButton); 
});

When('Estoy en la pagina de cotizacion', async function() {
    await testController
    .expect(CotizacionPage.CotizacionMessages.visible).ok(); 
});

When('Hago click en el boton opciones de contratacion', async function() {
    await testController
    .click(CotizacionPage.CotizacionButton); 
});

When('Hago click en el boton emitir', async function() {
    await testController
    .click(CotizacionPage.EmitirButton); 
});

When('Hago click en aceptar el mensaje de alerta', async function() {
    await testController
    .click(CotizacionPage.AceptAlert); 
});

Then('Se muestra mensaje de poliza emitida', async function() {
    await testController
    .expect(PolicyDonePage.PolicyDonePageMessages.visible).ok(); 
});

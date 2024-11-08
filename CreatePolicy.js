import {Selector, t} from 'testcafe';
import CreateAccountPage from './3CreateAccountPage';

const UseInput=Selector("input[name='Login-LoginScreen-LoginDV-username']");
const PassInput=Selector("input[name='Login-LoginScreen-LoginDV-password']");
const LoginButton = Selector('div.gw-label').withText('Iniciar sesión');


//1
const ActionButton = Selector('#Desktop-DesktopMenuActions > div.gw-action--inner');
 const NewAccountButton = Selector('#Desktop-DesktopMenuActions-DesktopMenuActions_Create-DesktopMenuActions_NewAccount');
 const SubtitleStar = Selector('div.gw-TitleBar--title').withText('Mi resumen');

 //2
 const AccountInformationMessages =  Selector('div.gw-TitleBar--title').withText('Introducir información de la cuenta');
 const InputFirstName =  Selector("input[name='NewAccount-NewAccountScreen-NewAccountSearchDV-GlobalPersonNameInputSet-FirstName']");
const InputLastName =  Selector("input[name='NewAccount-NewAccountScreen-NewAccountSearchDV-GlobalPersonNameInputSet-LastName']");
 const SearchButton = Selector('#NewAccount-NewAccountScreen-NewAccountSearchDV-SearchAndResetInputSet-SearchLinksInputSet-Search');
 const NotFoundMessages =  Selector('div.gw-message').withText('La búsqueda no obtuvo resultados.');
 const CreateNewAccountButton = Selector('#NewAccount-NewAccountScreen-NewAccountButton > div.gw-action--inner > div.gw-label');
 const CreateTypeAccountButton = Selector('#NewAccount-NewAccountScreen-NewAccountButton-NewAccount_Person');

 //3
 const CreateAccountMessages =  Selector('div.gw-TitleBar--title').withText('Crear cuenta')
 const InputPhoneNumber =  Selector('#CreateAccount-CreateAccountScreen-CreateAccountDV-CreateAccountContactInputSet-HomePhone-GlobalPhoneInputSet-NationalSubscriberNumber > div > input[type=text]')
  const PhoneSelect = Selector('#CreateAccount-CreateAccountScreen-CreateAccountDV-CreateAccountContactInputSet-PrimaryPhone > div > div > select')
 const InputMail =  Selector('#CreateAccount-CreateAccountScreen-CreateAccountDV-CreateAccountContactInputSet-EmailAddress1 > div > input[type=text]')
  const InputAdress =  Selector('#CreateAccount-CreateAccountScreen-CreateAccountDV-AddressInputSet-globalAddressContainer-GlobalAddressInputSet-AddressLine1 > div > input[type=text]')
  const TypeAdress =  Selector('#CreateAccount-CreateAccountScreen-CreateAccountDV-AddressType > div > div > select')
  const AgentInput =  Selector('#CreateAccount-CreateAccountScreen-CreateAccountDV-ProducerSelectionInputSet-Producer > div.gw-vw--value > input')
 const AgentCode = Selector('#CreateAccount-CreateAccountScreen-CreateAccountDV-ProducerSelectionInputSet-ProducerCode > div > div > select')
 const AddAgent = Selector('#CreateAccount-CreateAccountScreen-CreateAccountDV-ProducerSelectionInputSet-ProducerSelection > div.gw-label.gw-boldLabel')
 const UpdateButton =  Selector('#CreateAccount-CreateAccountScreen-ForceDupCheckUpdate > div > div.gw-label')
 const InputCondado = Selector('#CreateAccount-CreateAccountScreen-CreateAccountDV-AddressInputSet-globalAddressContainer-GlobalAddressInputSet-State > div > div > select')

//4
const CreateMessagesDone =  Selector('div.gw-TitleBar--title').withText('Resumen de la cuenta: lalo landa')
 
//5
        const NewSolicitudMessages =  Selector('div.gw-TitleBar--title').withText('Solicitudes nuevas')
        const SolicitudViviendaButton =  Selector('#NewSubmission-NewSubmissionScreen-ProductOffersDV-ProductSelectionLV-1-addSubmission')
//6
const CualificacionMessages =  Selector('div.gw-TitleBar--title').withText('Cualificación')
const TypePolizaButton =  Selector('#SubmissionWizard-SubmissionWizard_PreQualificationScreen-CoveragePartSelectionDV-HOPCoveragePartType > div > div > select')
const TypePolizaOption =  TypePolizaButton.find('option').withText('Vivienda')
const CoberturaButton =  Selector('#SubmissionWizard-SubmissionWizard_PreQualificationScreen-CoveragePartSelectionDV-HOPCoverageForm > div > div > select')
const TypeCoberturaOption =  CoberturaButton.find('option').withText('HO2')
const OcupaButton =  Selector('#SubmissionWizard-SubmissionWizard_PreQualificationScreen-PreQualQuestionSetsDV-QuestionSetsDV-0-QuestionSetLV-2-QuestionModalInput-ChoiceSelectInput > div > div > select')
const OcupaOption =  OcupaButton.find('option').withText('Yo mismo/a')
const OcupationSelectY = Selector('#SubmissionWizard-SubmissionWizard_PreQualificationScreen-PreQualQuestionSetsDV-QuestionSetsDV-0-QuestionSetLV-3-QuestionModalInput-BooleanRadioInput_0')
const NextButton = Selector('#SubmissionWizard-Next > div > div.gw-label')

//7
const InformationPolicyMessages =  Selector('div.gw-TitleBar--title').withText('Información de póliza')
const StartDateButton =  Selector('#SubmissionWizard-LOBWizardStepGroup-SubmissionWizard_PolicyInfoScreen-SubmissionWizard_PolicyInfoDV-DateQuoteNeeded_dateIcon')
const TodayButton = Selector('#gw-datePicker > div.gw-datePicker--footer.gw-inDatePicker > div.gw-datePicker--today.gw-button-secondary')
//8
const ViviendaPageMessages =  Selector('div.gw-TitleBar--title').withText('Vivienda')
const IncendioButton = Selector('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-HOPDwellingScreen-HOPDwellingPanelSet-HOPDwellingCV-HOPDwellingDetailsDV-HOPDwellingProtectionInputSet-ProtectionClass > div > div > select')
const IncendioOPtion = IncendioButton.find('option').withText('Superior')
//9
const ConstruccViviendaPageMessages =  Selector('div.gw-TitleBar--title').withText('Construcción para vivienda')
//10
        const CoberturaMessages =  Selector('div.gw-TitleBar--title').withText('Coberturas')
        const CoaseguroButton =  Selector('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-HOPCoveragesScreen-HOPMainCoveragesPanelSet-dwellingCoveragePatternIterator-0-CoverageInputSet-CovPatternInputGroup-HOPCovACoinsurance > div > div > select')
        const CoaseguroOption = CoaseguroButton.find('option').withText('50%')     
        const ArriendoOptionN = Selector('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-HOPCoveragesScreen-HOPMainCoveragesPanelSet-dwellingCoveragePatternIterator-3-CoverageInputSet-CovPatternInputGroup-HOPCovDLossOfRent_1')
        const UsoProhibidoButton =  Selector('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-HOPCoveragesScreen-HOPMainCoveragesPanelSet-dwellingCoveragePatternIterator-3-CoverageInputSet-CovPatternInputGroup-HOPCovDProhibitedUse > div > div > select')
        const UsoProhibidoOption = UsoProhibidoButton.find('option').withText('14 días')  
        const CotizacionButton = Selector('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-HOPCoveragesScreen-JobWizardToolbarButtonSet-QuoteTypeToolbarButtonSet-Quote > div > div.gw-label')  

//11
const CotizacionMessages =  Selector('div.gw-TitleBar--title').withText('Cotización')
const ContratacionOptionButton =  Selector('#SubmissionWizard-SubmissionWizard_QuoteScreen-JobWizardToolbarButtonSet-BindOptions > div.gw-action--inner')
const EmitirButton = Selector('div.gw-label').withText('Emitir póliza')
//12
const PolicyDoneMessages =  Selector('div.gw-TitleBar--title').withText('solicitudContratada')



fixture("Create Account Fixture")
    .page ('http://10.0.145.154:8180/pc/PolicyCenter.do')   
    test('prueba', async t =>{
        await t
        .maximizeWindow()
        .expect(UseInput.visible).ok('Input de usuario no visible')
        .expect(PassInput.visible).ok('Input de contraseña no visible')
        .wait(2000);
       await t
        .typeText(UseInput, "su") 
        .typeText(PassInput, "gw")
        .click(LoginButton);
 //1               
        await t
        .expect(SubtitleStar.exists).ok()
        .click(ActionButton)
        .click(NewAccountButton);
//2
        await t
        .expect(AccountInformationMessages.visible).ok()
        .typeText(InputFirstName,'lolo')
        .typeText(InputLastName,'lada')
        .click(SearchButton)
        .expect(NotFoundMessages.visible).ok();      
        await t
        .expect(CreateNewAccountButton.exists).ok()
        .click(CreateNewAccountButton)
        .click(CreateTypeAccountButton);      
//3
        await t
        .expect(CreateAccountMessages.visible).ok()
        .typeText(InputPhoneNumber,'1122336655')
        .click(PhoneSelect)
        .typeText(InputMail,'mail@mail.com')
        .typeText(InputAdress,'posada 123')
        .click(InputCondado)
        .click(InputCondado.find('option').withText('Arizona'))
        .click(Selector('#CreateAccount-CreateAccountScreen-CreateAccountDV-AddressInputSet-globalAddressContainer-GlobalAddressInputSet-0'))
        .click(TypeAdress)  
        .click(TypeAdress.find('option').withText('Casa'))
        .typeText(AgentInput,'ACV Property Insurance')
        .click(AddAgent)
        .expect(AgentCode.exists).ok()
        .wait(10000) 
        //.click(UpdateButton)
        .wait(10000)         
//4
        await t
        .expect(CreateMessagesDone.visible).ok()       
    }
 );
 test ('prueba', async t =>{
    await t
    .setNativeDialogHandler(() => true)
    .maximizeWindow()
    .expect(UseInput.visible).ok('Input de usuario no visible')
    .expect(PassInput.visible).ok('Input de contraseña no visible')
    .wait(2000);
    await t
    .typeText(UseInput, "su") 
    .typeText(PassInput, "gw")
    .click(LoginButton);
 //               
        await t
        .expect(SubtitleStar.exists).ok()
        .click(Selector('#TabBar-AccountTab > div.gw-action--expand-button > div'))
        .typeText('#TabBar-AccountTab-AccountTab_AccountNumberSearchItem > div > input[type=text]','5079173907')
        .pressKey('enter');
//5
        await t
        .expect(CreateMessagesDone.visible).ok()
        .click(Selector('#AccountFile_Summary-AccountSummaryDashboard-OpenPolicyTransactionsAccountListViewTile-NewSubmission > div'))
        .expect(NewSolicitudMessages.visible).ok()
        .click(SolicitudViviendaButton)
 //6 
        await t
        .expect(CualificacionMessages.visible).ok()
        .click(TypePolizaButton)
        .click(TypePolizaOption)
        .click(CoberturaButton)
        .click(TypeCoberturaOption)
        .click(OcupaButton)
        .click(OcupaOption)
        .click(OcupationSelectY)
        .click(NextButton)
//7
await t
.expect(InformationPolicyMessages.visible).ok()
.click(StartDateButton)
.click(TodayButton)
.click(NextButton)
//8
await t
.expect(ViviendaPageMessages.visible).ok()
.click(IncendioButton)
.click(IncendioOPtion)
.click(NextButton)
//9
await t
.expect(ConstruccViviendaPageMessages.visible).ok()
.click(NextButton)
//10
await t
.expect(CoberturaMessages.visible).ok()
.click(CoaseguroButton)
.click(CoaseguroOption)
.click(ArriendoOptionN)
.click(UsoProhibidoButton)
.click(UsoProhibidoOption)
.click(CotizacionButton)
//11
await t
.expect(CotizacionMessages.visible).ok()
.click(ContratacionOptionButton)
.click(EmitirButton)
//12
await t
.expect(PolicyDoneMessages.visible).ok()
.wait(5000)

 }
);



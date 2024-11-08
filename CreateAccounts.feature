Feature: Create Account

    As Usuario quiero crear una cuenta nueva y emitir una poliza viviendo con esta

Scenario: Emision poliza vivienda con cuenta recien creada 
Given Entro a PolicyCenter con usuario valido
When Hago click el boton de acciones
And Hago click el boton de nueva cuenta

When Estoy en la pagina de iniciar solicitud
And Ingerso nombre "Pedro"
And Ingerso apellido "Perez"
And Hago click en el boton buscar
And Aparece el boton crear nueva cuenta
And Hago click en el boton crear nueva cuenta
And Hago click en el boton persona

When Estoy en la pagina de crear cuenta
And Ingerso numero de telefono "2015563221"
And Selecciono tipo de telefono "casa"
And Ingerso email "mail@mail.com"
And Ingerso direccion "posada 123"
And Selecciono condado "Arizona"
And Selecciono tipo de direccion "Casa"
And Ingerso nombre de agente "ACV Property Insurance"
And Aparece datos del agente
And Hago click en el boton actualizar
Then Se crea la nueva cuenta de usuario

When Hago click en el boton nueva solicitud
And Estoy en la pagina de nueva solicitud de poliza
And Hago click en la opcion vivienda

When Estoy en la pagina de cualificacion
And Selecciono tipo de vivienda "Vivienda"
And Selecciono tipo de cobertura "HO2"
And Selecciono la ocupacion "Yo mismo/a"
And Hago click en el boton yes de ocupacion
And Hago click en el boton siguiente

When Estoy en la pagina de informacion de la poliza
And Hago click en el boton de inicio de vigencia
And Hago click en boton hoy
And Hago click en el boton siguiente

When Estoy en la pagina de vivienda
And Selecciono tipo de incendio ("Superior")
And Hago click en el boton siguiente

When Estoy en la pagina de construccion
And Hago click en el boton siguiente

When Estoy en la pagian de coberturas
And Selecciono la opcion de coaseguro ("50%")
And Selecciono la opcion uso prohibido ("14 días")
And Hago click en el boton de opcion NO de arriendo
And Hago click en el boton cotizacion

When Estoy en la pagina de cotizacion
And Hago click en el boton opciones de contratacion
And hago click en el boton emitir
And Hago click en aceptar el mensaje de alerta
Then Se muestra mensaje de poliza emitida


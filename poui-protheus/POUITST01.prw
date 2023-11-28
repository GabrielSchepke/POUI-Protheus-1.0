#Include 'Protheus.ch'

//-------------------------------------------------------------------
/*/{Protheus.doc} POUITST01
Fun��o para chamada do app angular para estudos sobre poui
@author  Gabriel Schepke
@since   27/11/2023
@version 1.0
/*/
//-------------------------------------------------------------------
User Function POUITST01()
  //FWCallApp("my-protheus-app")
   FWCallApp("poui-protheus")
Return Nil

Static Function JsToAdvpl(oWebChannel,cType,cContent)

    Local cRet := 'Protheus Recebeu do angular'

    Do Case
        // Se a intera��o que recebi for igual a mensagemJavascript
        Case cType == 'mensagemJavascript'
            // Imprimo a informa��o que recebi para trabalhar
            alert('O que veio do JS: ' + cContent)
        // Se a intera��o que recebi for igual a receberProtheus
        Case cType == 'receberProtheus'
            // Envio um comando ADVPL para minha aplica��o Web
            oWebChannel:AdvPLToJS('mensagemProtheus', 'Comando ADVPL')
    End
    //oWebChannel:AdvPLToJS('mensagemProtheus', cRet)

Return 

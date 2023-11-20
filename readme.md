*******************************************************
**					PO-UI							                       **
**				How to Start Code			   		               **
*******************************************************

# INSTALAR NODE.JS
# Seguir instalação do angular com esses comandos: https://po-ui.io/guides/getting-started
# Abrir cmd ou power shell e executar os comandos npm i -g @angular/cli@16 , ng new my-po-project --skip-install
# validar a versão das dependências do arquivo package.json com os da documentação do PO-UI
# Localizar diretório da instalação do projeto, copiar o caminho do explorer e abrir no power shell,ex: cd C:\Users\gabriel.schepke\my-po-project
# Após abrir o diretório, rodar o comando NPM install
# Após ng add @po-ui/ng-components
# Abrir projeto no browser localhost:4200 = ng serve
# Abrir projeto no vscode = "code ." no power shell
# instalar extensão do angular

Definicão de pastas/arquivo
->src projeto
->pasta app: components de estilo, html etc
->component.ts lógica aplicação

#instalar npm i @totvs/protheus-lib-core ( Caso ocorra erro de versão de dependências ex: 
ERESOLVE
npm ERR! ERESOLVE unable to resolve dependency tree
npm ERR!
npm ERR! While resolving: my-po-project@0.0.0
npm ERR! Found: @angular/animations@16.2.5
npm ERR! node_modules/@angular/animations
npm ERR!   @angular/animations@"^16.2.0" from the root project
npm ERR!
npm ERR! Could not resolve dependency:
npm ERR! peer @angular/animations@"^15.2.9" from @totvs/protheus-lib-core@15.0.0
npm ERR! node_modules/@totvs/protheus-lib-core
npm ERR!   @totvs/protheus-lib-core@"*" from the root project )

Rodar o comando usando --force : npm i @totvs/protheus-lib-core --force

#Npm install subsink --force

tema do protheus : npm i @totvs/po-theme@14 --force 

alterar angular.json :

"styles":  [
              "node_modules/@totvs/po-theme/css/po-theme-default-variables.min.css",
              "node_modules/@totvs/po-theme/css/po-theme-default.min.css",
              "node_modules/@po-ui/style/css/po-theme-core.min.css"
              ],
			  
			  
Ao compilar o .app pode dar erro no tamanho, alterar no angular.json as propriedades
 "configurations": {
            "production": {
              "budgets": [
                {
                  "type": "initial",
                  "maximumWarning": "1500kb",
                  "maximumError": "2mb"
                }

 


 
#editar settings.json no diretório em C:\Users\SEU USUÁRIO\AppData\Roaming\Code\User\settings.json alterando a propriedade "totvsLanguageServer.folder.extensionsAllowed" e adicionando a extensão ".App".
#Caso não encontre o arquivo no diretório acima abra a extensão tds, clique em configurações e no primeiro item na opção "Editar em settings.json".
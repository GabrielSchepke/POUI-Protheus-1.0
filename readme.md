# Guia de Configuração do PO-UI

## 1. Instale o Node.js
Siga as instruções de instalação do Angular utilizando os comandos fornecidos em [PO-UI Getting Started](https://po-ui.io/guides/getting-started).

## 2. Configure o Projeto Angular
Abra o CMD ou PowerShell e execute os seguintes comandos:

npm i -g @angular/cli@17
ng new my-po-project --skip-install

Certifique-se de que as versões das dependências no seu arquivo package.json correspondam às da documentação do PO-UI.

Navegue até o diretório do projeto utilizando o PowerShell, por exemplo:
cd C:\Users\gabriel.schepke\my-po-project

Execute o comando:
npm install

Em seguida, adicione o PO-UI ao seu projeto:
ng add @po-ui/ng-components

## 3. Inicie o Projeto
Abra o projeto no navegador usando:
ng serve
Ou abra-o no Visual Studio Code com:
code .

Certifique-se de instalar a extensão Angular no VS Code.

## 4. Resolva Conflitos de Versão de Dependências:
Em caso de erros de versão de dependências, execute o seguinte comando com a flag --force:
npm i @totvs/protheus-lib-core --force
Adicionalmente, instale o pacote subsink:
npm install subsink --force

## 5. Instale o Tema do Protheus
npm i @totvs/po-theme@14 --force
Atualize o angular.json:

json
 
"styles": [
  "node_modules/@totvs/po-theme/css/po-theme-default-variables.min.css",
  "node_modules/@totvs/po-theme/css/po-theme-default.min.css",
  "node_modules/@po-ui/style/css/po-theme-core.min.css"
],

## 6. Ajuste as Configurações de Compilação do Angular
Se a compilação do aplicativo resultar em erros de tamanho, modifique o arquivo angular.json:

json
 
"configurations": {
  "production": {
    "budgets": [
      {
        "type": "initial",
        "maximumWarning": "1500kb",
        "maximumError": "2mb"
      }
    ]
  }
}

## 7. Atualize as Configurações do VS Code
Edite settings.json no diretório C:\Users\SEU USUÁRIO\AppData\Roaming\Code\User\settings.json, alterando a propriedade totvsLanguageServer.folder.extensionsAllowed e adicionando a extensão ".App". 
Se o arquivo não for encontrado, abra a extensão TDS, clique em configurações e escolha "Editar em settings.json".

## Observações Adicionais:
No binário do Protheus, certifique-se de que a seção [General] e a tag app_environment=environment estejam presentes além das instancias de MPP ativas. 
Se encontrar erros de compilação, comente as tag, reinicie o ambiente, compile a função do usuário e o arquivo Angular, em seguida, descomente a tag e reinicie o ambiente novamente.

Ao construir o projeto Angular, uma pasta "dist" é gerada. 
Compacte a pasta interna com o nome do projeto e altere a extensão para ".app". 
Este arquivo deve ser chamado dentro da Função do Usuário usando FWCallApp("nome-do-projeto").

Ex: PS C:\Users\gabriel.schepke\Desktop\poui-protheus-v1\POUI-Protheus-1.0\poui-protheus> ng build := irá criar dentro da pasta poui-protheus uma pasta dist, e dentro da  dist uma pasta chamada poui-protheus, 
essa devera ser zipada com a extensão ".app" .
O nome não deve ser redefinido e não pode conter números.
A função FWCallApp devera chamar ela da seguinte forma " FWCallApp("poui-protheus")".

import { Component } from '@angular/core';
import { ProJsToAdvplService } from '@totvs/protheus-lib-core';

@Component({
    selector: 'app-po-select-wrapper',
    template: `
    <po-select
      name="select"
      p-label="PO Select"
      [p-options]="getOptions()">
    </po-select>
  `,
})
export class PoSelectWrapperComponent {
    constructor(private proJsToAdvplService: ProJsToAdvplService) {}

    // Função que retorna as opções dinâmicas
    getOptions(): any[] {
      // Chame as funções desejadas e use os resultados para construir o array de opções
      const option1 = this.click1();
      const option2 = this.click2();
  
      // Construa e retorne o array de opções
      return [
        { label: option1, value: option1 },
        { label: option2, value: option2 },
        // ... outras opções dinâmicas
      ];
    }
  
    click1(): string {
      // Chame a primeira função e obtenha o resultado desejado
      this.proJsToAdvplService.jsToAdvpl('mensagemJavascript', 'Comando Javascript');
      return 'Valor para Option 1'; // Substitua isso pelo valor desejado
    }
  
    click2(): string {
      // Chame a segunda função e obtenha o resultado desejado
      this.proJsToAdvplService.jsToAdvpl('receberProtheus', '');
      return 'Valor para Option 2'; // Substitua isso pelo valor desejado
    }
}



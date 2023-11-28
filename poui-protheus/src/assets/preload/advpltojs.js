function retDados(codeType, content) {
    // Se a interação que recebi for igual a mensagemProtheus
    if (codeType === 'mensagemProtheus') {
      // Em vez de alert, você pode retornar os dados ou chamar uma função de retorno
      // Aqui estou retornando uma string como exemplo, você pode ajustar conforme necessário
      return 'Mensagem recebida do Protheus: ' + content;
    }
  }
  
  // Adicione esta parte se você quiser definir a função como uma propriedade global
  window.retDados = retDados;
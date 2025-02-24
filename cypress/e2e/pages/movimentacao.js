import { movimentacaoElements } from '../elements/movimentacaoElements';

class Movimentacao {
  
  // Método para acessar a página de movimentação
  criarMovimentacao() {
    cy.get(movimentacaoElements.link_criarMovimentacao).click();
    cy.get(movimentacaoElements.labelTipoMovimentacao).should('be.visible');
  }

  // Método para selecionar o tipo de movimentação
  selecionarTipoMovimentacao(tipo) {
    cy.get(movimentacaoElements.selectTipo).select(tipo);
    cy.get(movimentacaoElements.selectTipo).should('have.value', tipo);
  }

  // Método para preencher os campos da movimentação
  preencherMovimentacao(dados) {
    cy.get(movimentacaoElements.inputDataMovimentacao).type(dados.dataMovimentacao);
    cy.get(movimentacaoElements.inputDataPagamento).type(dados.dataPagamento);
    cy.get(movimentacaoElements.inputDescricao).type(dados.descricao);
    cy.get(movimentacaoElements.inputInteressado).type(dados.interessado);
    cy.get(movimentacaoElements.inputValor).type(dados.valor);
    
    // Selecionar a situação da movimentação
    if (dados.situacao === 'pago') {
      cy.get(movimentacaoElements.radioSituacaoPago).check();
    } else {
      cy.get(movimentacaoElements.radioSituacaoPendente).check();
    }
  }

  // Método para salvar a movimentação
  salvarMovimentacao() {
    cy.get(movimentacaoElements.btnSalvar).click();
  }
}

export default new Movimentacao();

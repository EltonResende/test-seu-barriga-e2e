import Login from './pages/login';
import Movimentacao from './pages/movimentacao';

describe('Cenário de Teste - Login e Criar Movimentação', () => {
  
  beforeEach(() => {
    Login.acessarLogin();
    Login.logarSite('fulano@qa.com', 'teste');
  });

  it('Deve logar, acessar a página de movimentação e cadastrar uma nova movimentação - Tipo Receita', () => {
    cy.contains('Bem vindo, Teste João!').should('be.visible');
    
    // Acessa a tela de movimentação
    Movimentacao.criarMovimentacao();

    // Preenche os dados da movimentação
    const dadosMovimentacao = {
      dataMovimentacao: '10/02/2025',
      dataPagamento: '15/02/2025',
      descricao: 'Pagamento de teste',
      interessado: 'QA Teste',
      valor: '100.00',
      situacao: 'pago'
    };

    Movimentacao.selecionarTipoMovimentacao('REC'); // Seleciona Receita
    Movimentacao.preencherMovimentacao(dadosMovimentacao);
    Movimentacao.salvarMovimentacao();

    // Valida se a movimentação foi cadastrada com sucesso
    cy.contains('Movimentação adicionada com sucesso!').should('be.visible');
  });

  it('Deve logar, acessar a página de movimentação e cadastrar uma nova movimentação - Tipo Despesa', () => {
    cy.contains('Bem vindo, Teste João!').should('be.visible');
    
    // Acessa a tela de movimentação
    Movimentacao.criarMovimentacao();

    // Preenche os dados da movimentação
    const dadosMovimentacao = {
      dataMovimentacao: '10/02/2025',
      dataPagamento: '15/02/2025',
      descricao: 'Pagamento de teste',
      interessado: 'QA Teste 2',
      valor: '200.00',
      situacao: 'pago'
    };

    Movimentacao.selecionarTipoMovimentacao('DESP'); // Seleciona Receita
    Movimentacao.preencherMovimentacao(dadosMovimentacao);
    Movimentacao.salvarMovimentacao();

    // Valida se a movimentação foi cadastrada com sucesso
    cy.contains('Movimentação adicionada com sucesso!').should('be.visible');
  });

});

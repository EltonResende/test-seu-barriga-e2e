import Login from "./pages/login"

describe('Cenário de Teste -  Login', () => {
  it('Login com sucesso', () => {
   Login.acessarLogin()
   Login.logarSite("fulano@qa.com","teste" )
   cy.contains("Bem vindo, Teste João!").should("be.visible");
   cy.screenshot("login_sucesso");
  
  })

    it('Login com dados incorretos', () => {
     Login.acessarLogin()
     Login.logarSite("teste@teste.com","teste" )
     cy.contains("Problemas com o login do usuário").should("be.visible");
     cy.screenshot("login_com_erro");
    
    })

    it('Login sem preencher o email', () => {
      Login.acessarLogin()
      Login.logarSiteSemDados("","teste" )
      cy.contains("Email é um campo obrigatório").should("be.visible");
      cy.screenshot("login_com_erro");
     
     })

     it('Login sem preencher a senha', () => {
      Login.acessarLogin()
      Login.logarSiteSemDados("fulano@qa.com","" )
      cy.contains("Senha é um campo obrigatório").should("be.visible");
      cy.screenshot("login_com_erro");
     
     })


})
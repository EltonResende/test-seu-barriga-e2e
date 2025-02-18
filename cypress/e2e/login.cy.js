import Login from "./pages/login"

describe('Cenário de Teste Login', () => {
  it('Login com sucesso', () => {
   Login.acessarLogin()
   Login.logarSite("fulano@qa.com","teste" )
  
  })


})
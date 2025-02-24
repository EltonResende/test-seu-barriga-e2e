import {
    loginElements
} from '../elements/loginElements'


class Login {
      acessarLogin(){
        cy.visit("https://seubarriga.wcaquino.me/login")

    }

    logarSite(email,senha){
       // cy.get("#email") // Busca por id
        cy.get(loginElements.email).type(email)
        cy.get(loginElements.senha).type(senha)
        cy.get(loginElements.entrar).click()

    }

    logarSiteSemDados(email, senha) {
        if (email) {
            cy.get(loginElements.email).type(email); // Só digita se o email não estiver vazio
        }
        if (senha) {
            cy.get(loginElements.senha).type(senha); // Só digita se a senha não estiver vazia
        }
        cy.get(loginElements.entrar).click(); // Sempre clica no botão de login
    }
    

}

export default new Login(

)
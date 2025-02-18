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
        cy.get('input[placeholder="Password"]').type(senha)
        cy.get('button[type=submit]').click()

    }

}

export default new Login(

)
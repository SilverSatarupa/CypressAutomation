class login {

    ClickLogin() {
        return cy.get('.ico-login')
    }
    getEmail() {

        return cy.get('#Email')
    }

    getPassword() {

        return cy.get('.password')
    }

}
export default login
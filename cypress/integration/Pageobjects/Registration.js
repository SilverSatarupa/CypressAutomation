class Registration {

    ClickRegister() {
        return cy.get('.ico-register')
    }
    SelectFemale() {
        return cy.get('input[value="F"]')
    }
    getFirstName() {
        return cy.get('#FirstName')
    }
    getLastName() {
        return cy.get('#LastName')
    }
    Selectday() {
        return cy.get('select[name="DateOfBirthDay"]')
    }
    SelectMonth() {
        return cy.get(' select[name="DateOfBirthMonth"]')
    }
    SelectYear() {
        return cy.get('select[name="DateOfBirthYear"]')
    }
    getEmail() {

        return cy.get(' input[name="Email"]')
    }
    getPassword() {

        return cy.get(' input[name="Password"]')
    }
    getConfirmPassword() {

        return cy.get('input[name="ConfirmPassword"]')
    }
    DoRegister() {
        return cy.get('button[name="register-button"]')
    }


}
export default Registration
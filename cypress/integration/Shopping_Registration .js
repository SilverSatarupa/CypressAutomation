import login from '../integration/Pageobjects/login'
import Registration from '../integration/Pageobjects/Registration'

describe('Shopping App Registration', function () {

    before(function () {

        cy.fixture('example').then(function (data) {

            this.data = data
        })

    })


    it('Visit Registration', function () {

        const registration = new Registration()
        //Launch browser & open url e.g-https://demo.nopcommerce.com/
        cy.visit("https://demo.nopcommerce.com/")

        //Enter text in search box & click on Search button
        registration.ClickRegister().click()

        registration.SelectFemale().click()
        registration.getFirstName().type(this.data.FirstName)
        registration.getLastName().type(this.data.LastName)
        registration.Selectday().select(1)
        registration.SelectMonth().select('January')
        registration.SelectYear().select('1912')
        registration.getEmail().type(this.data.NewEmail)
        registration.getPassword().type(this.data.Newpassword)
        registration.getConfirmPassword().type(this.data.ConfirmPassword)
        registration.DoRegister().click
        cy.get('.search-box-text').type('Nokia')

        cy.get('.ui-menu-item a span').each(($el, index, $list) => {

            if ($el.text() === "Nokia Lumia 1020") {
                $el.click()
            }
        })

        //  Click on add to cart & provide quantity 2.


        cy.get('.qty-input').type('{backspace}2')
        cy.get('.add-to-cart-panel button').click()

        //Click on add to cart. Click on add to cart link at top of page


        cy.get('.ico-cart').click()

        //  Verify the total amount.
        cy.get('.product-subtotal').should('have.text', '$698.00')
    }
    )
}
)
import login from '../integration/Pageobjects/login'

describe('Shopping App', function () {

  before(function () {

    cy.fixture('example').then(function (data) {

      this.data = data
    })

  })


  it('Visit Url', function () {

    const Login = new login()
    //Launch browser & open url e.g-https://demo.nopcommerce.com/
    cy.visit("https://demo.nopcommerce.com/")

    //Enter text in search box & click on Search button
    Login.ClickLogin().click()

    Login.getEmail().type(this.data.email)

    Login.getPassword().type(this.data.password)

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
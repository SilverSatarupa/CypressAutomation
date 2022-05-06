/// <reference types="cypress" />

describe('XHR',function(){

    it('XHR Example',function(){

        cy.visit("https://rahulshettyacademy.com/angularAppdemo/")
        cy.intercept({
            method:'GET',
            URL:'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty'
        },
        {
            statusCode :200
        }).as('statuscode')
cy.get("button[class='btn btn-primary']").click()
cy.wait('@statuscode').should('have.property', 'status', 200)
    })



})
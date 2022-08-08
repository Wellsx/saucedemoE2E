import Data from '../support/data';

describe('Saucedemo E2E', () => {
  it('Logs in and purchases item', () => {
    cy.visit('/');

    cy.get('input[name=user-name').type('standard_user');
    cy.get('input[name=password').type('secret_sauce');
    cy.get('#login-button').click();
    cy.contains('Products');

    cy.url().should('contain', '/inventory.html');
    cy.get('#add-to-cart-sauce-labs-backpack').click();
    cy.get('#add-to-cart-sauce-labs-fleece-jacket').click();
    cy.get('#shopping_cart_container').click();

    cy.url().should('contain', '/cart.html');
    cy.get('[data-test="remove-sauce-labs-fleece-jacket"]').click();
    cy.get('#checkout').click();

    cy.url().should('contain', '/checkout-step-one.html');
    cy.get('input[name=firstName').type(Data.firstName);
    cy.get('input[name=lastName').type(Data.lastName);
    cy.get('input[name=postalCode').type(Data.postcode);
    cy.get('#continue').click();

    cy.url().should('contain', '/checkout-step-two.html');
    cy.get('#finish').click();
    cy.contains('THANK YOU FOR YOUR ORDER');
    cy.url().should('contain', '/checkout-complete.html');
  });
});

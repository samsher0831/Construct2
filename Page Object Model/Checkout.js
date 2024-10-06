class CheckOut{

CheckOut(){
    // to assert on checkout process
    cy.xpath('(//a[.="Checkout"])[2]').click();
    
    cy.get('[title="Checkout"]').click();
    cy.wait(1000);
    cy.get('#button-payment-address').click();
    cy.wait(1000);
    // cy.get('[name="firstname"]').type('Admin');

    // cy.get('[name="lastname"]').type('User');

    // cy.get('[name="company"]').type('Vijay sales');

    // cy.get('[name="address_1"]').type('Madhya Pradesh,Civil line');

    // cy.get('[name="address_2"]').type('Madhya Pradesh,Rewa');

    // cy.get('[name="city"]').type('Satna');

    // cy.get('[name="postcode"]').type('124514');

    // cy.get('[name="country_id"]').select('India');

    // cy.get('[name="zone_id"]').select('Madhya Pradesh');

    cy.xpath('//input[@id="button-payment-address"]').click({ force: true});

    cy.get('#button-shipping-address').click();
    cy.wait(1000);
   // cy.get(':nth-child(5) > .form-control').type('Its Urgent, Please Do Delivery Fast');
    cy.wait(1000);
    cy.get('#button-shipping-method').click();
    cy.wait(1000);
    cy.get('[type="checkbox"]').click();
    cy.wait(1000);
    cy.get('#button-payment-method').click();
    cy.wait(1000);
    cy.get('#button-confirm').click();
    cy.wait(1000);
    cy.get('#content > h1').should('be.visible','Your order has been placed!');
    cy.wait(1000);
    cy.get('#content > :nth-child(2)').should('be.visible','Your order has been successfully processed!');
    cy.wait(1000);
    cy.get('.pull-right > .btn').click();
   

   // Step 2: Billing Details 

    // cy.get('[name="firstname"]').type('Admin')
    // cy.get('[name="lastname"]').type('User')
    // cy.get('[name="company"]').type('Vijay sales')
    // cy.get('[name="address_1"]').type('Madhya Pradesh, Satna, Civil line')
    // cy.get('[name="address_2"]').type('Madhya Pradesh,Rewa')
    // cy.get('[name="city"]').type('Satna')
    // cy.get('[name="postcode"]').type('124514')
    // cy.get('[name="country_id"]').select('India')
    // cy.get('[name="zone_id"]').select('Madhya Pradesh')
    // cy.xpath('//input[@id="button-payment-address"]').click();



}

}
export default CheckOut
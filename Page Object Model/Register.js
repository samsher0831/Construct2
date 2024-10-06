class RegisterPage{

    RegisterPage(){
        //enter in Register page with valid credentials

         cy.xpath('//i[@class="fa fa-user"]').click();
         cy.get('a[href="https://tutorialsninja.com/demo/index.php?route=account/register"]').click();
         cy.get('#input-firstname').type('Farishta');
         cy.get('#input-lastname').type('User');
         cy.get('#input-email').type('farishta@gmail.com');
         cy.get('#input-telephone').type('11111111111');
         cy.get('[placeholder="Password"]').type('password');
         cy.get('[placeholder="Password Confirm"]').type('password');
         cy.get('[type="checkbox"]').click();
         cy.get('[type="submit"]').click();




    }

}
export default RegisterPage
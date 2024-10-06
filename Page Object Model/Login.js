class LoginPage {

    Enterurl(){
        
        cy.visit('https://tutorialsninja.com/demo/')
    }
    Login(){
         
        //Method to Login with valid credentials

        cy.get('[class="fa fa-user"]').click();
        //cy.wait(1000);
        cy.get('[class="dropdown-menu dropdown-menu-right"]').contains('Login').click();
        //cy.wait(1000);
        cy.get('#input-email').type('farishta@gmail.com');
        //cy.wait(1000);
        cy.get('#input-password').type('password');
       // cy.wait(1000);
        cy.get('[type="submit"]').click();
        



    }

  
}
export default LoginPage
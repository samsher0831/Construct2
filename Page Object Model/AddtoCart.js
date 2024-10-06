class AddtoCart{

    AddtoCart(){

        //to check for addto cart
        cy.get('[class="img-responsive"]').click();
        cy.wait(1000);
        cy.get('[class="btn btn-primary btn-lg btn-block"]').click();
        cy.wait(1000);
        cy.get('[title="Shopping Cart"]').click();
        cy.wait(1000);


      

    }

}
export default AddtoCart
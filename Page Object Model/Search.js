class Search{

    Search(){
// to search for Hp laptop in search bar
        cy.xpath('//a[.="Qafox.com"]').click();
        cy.wait(1000);
        cy.get('#search > .form-control').click().type('Hp');
        cy.wait(1000);
        cy.get('[class="btn btn-default btn-lg"]').click();
    }


}
export default Search
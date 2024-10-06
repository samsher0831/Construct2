
import RegisterPage from "../../support/Page Object Model/Register";

import LoginPage from "../../support/Page Object Model/Login"; //Import the login Page Object

import Search from "../../support/Page Object Model/Search"; // Import the Search Page Object

import AddtoCart from "../../support/Page Object Model/AddtoCart"; //Import the AddtoCart Page Object

import CheckOut from "../../support/Page Object Model/Checkout"; //Import the CheackOut Page Object



describe('TutorialNinja LoginPage ,Search, AddtoCart, Checkout with Page Object Model', () => {

    const objRegisterPage = new RegisterPage();
    const objLoginPage = new LoginPage();
    const objSearch = new Search();
    const objAddtoCart = new AddtoCart();
    const objCheckOut = new CheckOut();
    

    it('Tc001', () => {
       
       
        objLoginPage.Enterurl();
        objRegisterPage.RegisterPage();
        objLoginPage.Login();
        objSearch.Search();
        objAddtoCart.AddtoCart();
        objCheckOut.CheckOut();
       

        
        
        
    });
});
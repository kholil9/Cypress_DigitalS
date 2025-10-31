import contact from "../../support/Report-menus/contact";

describe('Report_Contact', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/');
        cy.login();
    })

    it('user visit Contact Page', () => {
        visitContactPage()
    })

    it('user visit Contact Page', () => {
        deleteContact()
    })
    
})
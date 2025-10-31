import decline from "../../support/Report-menus/decline";

describe('Decline', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/');
        cy.login();
    })

    it('User visit Decline Page', () => {
        decline.visitDecline();
    })

    it('User can Download', () => {
        decline.downloadDecline();
    })

    it('User can View', () => {
        decline.viewDecline();
    })

    it('User can Visit Placeholder', () => {
        decline.visitPlaceholder();
    });

    it('User can Visit Delete Decline Docs', () => {
        decline.deleteDeclineDocs();
    });

    
})
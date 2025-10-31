import complete from "../../support/Report-menus/complete";
import inProgress from "../../support/Report-menus/inProgress";

describe('Report Completed POM', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/');
        cy.login();
    });

    it('User visit Completed Page ', () => {
        complete.visitCompleted();
    })

    it('User can Download', () => {
        complete.download();
    });

    it('User can View', () => {
        complete.view();
    });

    it('User can visit Placeholder to print docs', () => {
        complete.placeholder();
    });

    it('User delete document in complete', () => {
        complete.delete();
    });

    it('User can visit Certificate to print certificate', () => {
        complete.certificate();
    });

    

})
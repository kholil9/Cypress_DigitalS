import inProgress from "../../support/Report-menus/inProgress";
import report from "../../support/Report-menus/subMenuReport";

describe('Report In Progress', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/');
        cy.login()
    });

    it('User can Open Submenu report', () => {
        report.reportSubmenu();
    });

    it('User can visit in progress menu', () => {
        inProgress.visitInProgress();
    });

    it('User can Download', () => {
        inProgress.download();
    });

    it('User can View Signer', () => {
        inProgress.view();
    });

    it('User can Share', () => {
        inProgress.share();
    });

    it('User can show option', () => {
        inProgress.option();
    })

    it.only('User can resend Mail', () => {
        inProgress.resend();
    });

    it('User can Revoke document', () => {
        inProgress.revoke();
    });

    it('User can delete document', () => {
        inProgress.delete();
    });



});


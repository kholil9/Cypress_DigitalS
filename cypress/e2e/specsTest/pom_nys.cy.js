import needYourSign from "../../support/Report-menus/needYourSign";
import report from "../../support/Report-menus/subMenuReport";

describe('Need Your Sign Report', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000/');
        cy.login()

    });

    it('User can open Report Submenu', () => {
        report.reportSubmenu();
    });

    it('Visit Need Your Sign Page', () => {
        needYourSign.nysVisit();
    });

    it('User can Visit Placeholder', () => {
        needYourSign.placeholderVisit();     
    });

    it.only('User can Sign the docs', () => {
        needYourSign.autosignAll();
    })





});


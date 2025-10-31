class NysReport {
    nysVisit() {
        cy.get('[data-cy="sidebar-navigation"]', { timeout: 2000 }).contains('Reports').should('be.visible')
            .click();
        cy.get('[data-cy="sidebar-navigation"]', { timeout: 2000 }).contains('Need your sign').should('be.visible')
            .click();
    }

    placeholderVisit() {
        cy.get('[data-cy="sidebar-navigation"]', { timeout: 2000 }).contains('Reports').should('be.visible')
            .click();
        cy.get('[data-cy="sidebar-navigation"]', { timeout: 2000 }).contains('Need your sign').should('be.visible')
            .click();
        cy.get('[title="SIGN"]').click()
    }

    autosignAll() {

        cy.get('[data-cy="sidebar-navigation"]', {timeout:2000}).contains('Reports').should('be.visible')
            .click();
        cy.get('[data-cy="sidebar-navigation"]').contains('Need your sign').should('be.visible')
            .click();

        cy.get('[title="SIGN"]').click()

        // Verify Placeholder modal is open
        cy.get('.sc-aXZVg.dbJwZj.sc-fqkvVR.bBofGr.reactour__close', { timeout: 10000 })
            .should('be.visible')
            .click();

        // Act to Sign All
        cy.get('[data-tut="reactourThird"]', { timeout: 20000 })
            .find('button')
            .contains('Auto Sign All')
            .click();

        cy.get('.h-full.p-\\[20px\\]', {timeout:2000}).find('p')
            .contains('Are you sure you want to auto sign at requested all locations?')
            .should('be.visible');
        cy.get('.h-full.p-\\[20px\\]')
            .find('button')
            .contains('Yes')
            .should('be.visible')
            .click();

        // Act to Finish
        cy.get('[data-tut="reactourFifth"] >', {timeout:1000}).contains('Finish').click()
    }




}

export default new NysReport();
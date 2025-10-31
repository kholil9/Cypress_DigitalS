class InProgress {
    visitInProgress() {
       cy.get('[data-cy="sidebar-navigation"]', { timeout: 2000 }).contains('Reports').should('be.visible')
            .click();
        cy.get('[data-cy="sidebar-navigation"]', { timeout: 2000 }).contains('In Progress').should('be.visible')
            .click();
    }

    download() {
        cy.get('[data-cy="sidebar-navigation"]', { timeout: 2000 }).contains('Reports').should('be.visible')
            .click();
        cy.get('[data-cy="sidebar-navigation"]', { timeout: 2000 }).contains('In Progress').should('be.visible')
            .click();
        // Download
        cy.get('.px-4.py-2').contains('Download').should('be.visible')
            .click();
    }

    view() {

        cy.get('[data-cy="sidebar-navigation"]', { timeout: 2000 }).contains('Reports').should('be.visible')
            .click();
        cy.get('[data-cy="sidebar-navigation"]', { timeout: 2000 }).contains('In Progress').should('be.visible')
            .click();
        // View
        cy.get('.px-4.py-2').contains('View').should('be.visible')
            .click();

    }

    share() {
        cy.get('[data-cy="sidebar-navigation"]', { timeout: 2000 }).contains('Reports').should('be.visible')
            .click();
        cy.get('[data-cy="sidebar-navigation"]', { timeout: 2000 }).contains('In Progress').should('be.visible')
            .click();

        //copy
        cy.get('[title="Share"]').click()
        cy.contains('Copy link').should('be.visible');
        cy.get(':nth-child(1) > .flex > .op-btn').click();
    }

    visit() {
        cy.get('[data-cy="sidebar-navigation"]').contains('Reports').should('be.visible')
            .click();
        cy.get('[data-cy="submenu-reports"]').contains('In Progress').should('be.visible')
            .click();
        cy.get(':nth-child(1) > .px-2 > [data-cy="btn-sign"] > .op-btn-secondary').click()
    }

    option() {
        cy.get('[data-cy="sidebar-navigation"]', { timeout: 2000 }).contains('Reports').should('be.visible')
            .click();
        cy.get('[data-cy="sidebar-navigation"]', { timeout: 2000 }).contains('In Progress').should('be.visible')
            .click();
        // Placeholder
        cy.get('[title="Option"]').click()
    }

    resend() {

        cy.get('[data-cy="sidebar-navigation"]', { timeout: 2000 }).contains('Reports').should('be.visible')
            .click();
        cy.get('[data-cy="sidebar-navigation"]', { timeout: 2000 }).contains('In Progress').should('be.visible')
            .click();

        // Resend
        cy.get('[title="Option"]').first().click()
        cy.get('[title="Resend"]').first().click()      
        cy.contains('Resend Mail').should('be.visible')
        cy.get('.justify-between > .flex-row > .op-btn').click()
        cy.get('div.relative > .flex > .op-btn').click()
    }

    revoke() {

        cy.get('[data-cy="sidebar-navigation"]', { timeout: 2000 }).contains('Reports').should('be.visible')
            .click();
        cy.get('[data-cy="submenu-reports"]').contains('In Progress').should('be.visible')
            .click();

        // Revoke Docs
        cy.get(':nth-child(1) > .px-2 > [data-cy="btn-sign"] > .text-base-content').click()
        cy.get('[title="Revoke"] > :nth-child(1)').click()
        cy.contains('Revoke document').should('be.visible')
        cy.contains('Are you sure you want to revoke this document?').should('be.visible')
        cy.get('[data-cy="reason-optional"]').type('Testing Revoke')
        cy.get('.op-btn.op-btn-primary.px-6').contains('Yes').click()
    }

    delete() {
        cy.get('[data-cy="sidebar-navigation"]', { timeout: 2000 }).contains('Reports').should('be.visible')
            .click();
        cy.get('[data-cy="submenu-reports"]').contains('In Progress').should('be.visible')
            .click();

        // Delete Docs
        cy.get(':nth-child(1) > .px-2 > [data-cy="btn-sign"] > .text-base-content').click()
        cy.get('[title="Delete"] > :nth-child(1)').click();
        cy.contains('Delete Document').should('be.visible')
        cy.contains('Are you sure you want to delete this document?').should('be.visible')
        cy.get('[data-cy="yes-delete"]').click()
    }
}

export default new InProgress;
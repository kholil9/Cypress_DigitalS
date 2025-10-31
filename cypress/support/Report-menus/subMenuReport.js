class Report {
    reportSubmenu() {
        cy.get('[data-cy="sidebar-navigation"]', { timeout: 2000 }).contains('Reports').should('be.visible')
            .click();
    }
}

export default new Report();
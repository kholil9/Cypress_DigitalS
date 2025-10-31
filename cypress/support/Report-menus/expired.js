class Expired {
    VisitExpiredPage() {

        cy.get('[data-cy="sidebar-navigation"]').contains('Reports').should('be.visible')
            .click();
        cy.get('[data-cy="submenu-reports"]').contains('Expired').should('be.visible')
            .click();
        cy.contains('Expired Documents').should('be.visible');
        cy.get('[data-tooltip-content="Daftar dokumen yang telah melewati tanggal kedaluwarsa."]')
            .trigger('mouseover')

    }

    UserCanDownload() {
        cy.get('[data-cy="sidebar-navigation"]').contains('Reports').should('be.visible')
            .click();
        cy.get('[data-cy="submenu-reports"]', { timeout: 2000 }).contains('Decline').should('be.visible')
            .click();
        // Download
        cy.get('.px-4.py-2').contains('Download').should('be.visible')
            .click();

    }
}
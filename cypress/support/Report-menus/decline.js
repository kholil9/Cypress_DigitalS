class Decline {
    visitDecline() {
        cy.get('[data-cy="sidebar-navigation"]', { timeout: 2000 }).contains('Reports').should('be.visible')
            .click();
        cy.get('[data-cy="submenu-reports"]').contains('Decline').should('be.visible')
            .click();
        cy.contains('Declined Documents').should('be.visible');
        cy.get('[data-tooltip-content="Daftar dokumen yang ditolak oleh salah satu penandatangan."]')
            .trigger('mouseover')
    }

    downloadDecline() {
        cy.get('[data-cy="sidebar-navigation"]').contains('Reports').should('be.visible')
            .click();
        cy.get('[data-cy="submenu-reports"]').contains('Decline').should('be.visible')
            .click();
        // Download
        cy.get('.px-4.py-2').contains('Download').should('be.visible')
            .click();
    }

    viewDecline() {
        cy.get('[data-cy="sidebar-navigation"]').contains('Reports').should('be.visible')
            .click();
        cy.get('[data-cy="submenu-reports"]').contains('Decline').should('be.visible')
            .click();
        // View
        cy.get('.px-4.py-2', { timeout: 2000 }).contains('View').should('be.visible')
            .click();
    }

    visitPlaceholder() {
        cy.get('[data-cy="sidebar-navigation"]').contains('Reports').should('be.visible')
            .click();
        cy.get('[data-cy="submenu-reports"]').contains('Decline').should('be.visible')
            .click();
        // placeholder
        cy.get(':nth-child(1) > .px-2 > [data-cy="btn-sign"] > .op-btn-primary')
            .click()
        cy.get('.bg-base-200.p-3').contains('Document declined')
            .should('be.visible')
        cy.get('.text-\\[15px\\]')
            .contains('You can not sign this document as it has been declined.')
            .should('be.visible')
    }

    deleteDeclineDocs() {
        cy.get('[data-cy="sidebar-navigation"]').contains('Reports').should('be.visible')
            .click();
        cy.get('[data-cy="submenu-reports"]').contains('Decline').should('be.visible')
            .click();
        cy.get(':nth-child(1) > .px-2 > [data-cy="btn-sign"] > .op-btn-secondary')
            .click()
        cy.contains('Delete Document',{timeout:2000})
            .should('be.visible')
        cy.contains('Are you sure you want to delete this document?')
            .should('be.visible')
        cy.get('[data-cy="yes-delete"]').click()

    }
}

export default new Decline();
class Draft {
    visitDraft() {
        cy.wait(2000)
        cy.get('[data-cy="sidebar-navigation"]').contains('Reports').should('be.visible')
            .click();
        cy.get('[data-cy="submenu-reports"]').contains('Draft').should('be.visible')
            .click();
        cy.contains('Draft Documents').should('be.visible');
        cy.get('[data-tooltip-content="Daftar dokumen yang belum selesai dan belum dikirim."]')
            .trigger('mouseover')
    }

    downloadDraft() {
        cy.wait(2000)
        cy.get('[data-cy="sidebar-navigation"]').contains('Reports').should('be.visible')
            .click();
        cy.get('[data-cy="submenu-reports"]').contains('Draft').should('be.visible')
            .click();
        // Download
        cy.get('.px-4.py-2').contains('Download').should('be.visible')
            .click();
    }

    viewDraft() {
        cy.get('[data-cy="sidebar-navigation"]', {timeout:2000}).contains('Reports').should('be.visible')
      .click();
      cy.get('[data-cy="submenu-reports"]').contains('Draft').should('be.visible')
      .click(); 
      // View
      cy.get('.px-4.py-2').contains('View').should('be.visible')
      .click();
    }

    deleteDraft() {
      cy.get('[data-cy="sidebar-navigation"]',{timeout:2000}).contains('Reports').should('be.visible')
      .click();
      cy.get('[data-cy="submenu-reports"]').contains('Draft').should('be.visible')
      .click(); 
      cy.get(':nth-child(1) > .px-2 > [data-cy="btn-sign"] > .op-btn-secondary')
      .click()
      cy.contains('Delete Document')
      .should('be.visible')
      cy.contains('Are you sure you want to delete this document?')
      .should('be.visible')
      cy.get('[data-cy="yes-delete"]').click() 
    }


}

export default new Draft;
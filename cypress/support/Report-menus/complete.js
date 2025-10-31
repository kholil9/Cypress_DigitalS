class completed {
    visitCompleted() {
        cy.get('[data-cy="sidebar-navigation"]').contains('Reports').should('be.visible')
            .click();
        cy.get('[data-cy="submenu-reports"]').contains('Completed').should('be.visible')
            .click();
        cy.contains('Completed').should('be.visible');
        cy.get('[data-tooltip-content="Daftar dokumen yang telah ditandatangani oleh semua pihak."]')
            .trigger('mouseover')
    }
    download() {
        cy.get('[data-cy="sidebar-navigation"]', { timeout: 2000 }).contains('Reports').should('be.visible')
            .click();
        cy.get('[data-cy="submenu-reports"]').contains('Completed').should('be.visible')
            .click();
        // Download
        cy.get('.px-4.py-2').contains('Download').should('be.visible')
            .click();
        cy.get('.p-\\[20px\\] > .op-btn').click();
   
    }

    view() {
        cy.get('[data-cy="sidebar-navigation"]', { timeout: 2000 }).contains('Reports').should('be.visible')
            .click();
        cy.get('[data-cy="submenu-reports"]').contains('Completed').should('be.visible')
            .click();

        // View
        cy.get('.px-4.py-2').contains('View').should('be.visible')
            .click();
    }

    placeholder() { 
      cy.get('[data-cy="sidebar-navigation"]', {timeout:2000}).contains('Reports').should('be.visible')
      .click();
      cy.get('[data-cy="submenu-reports"]').contains('Completed').should('be.visible')
      .click(); 

      // Placeholder
      cy.get(':nth-child(1) > .px-2 > [data-cy="btn-sign"] > .op-btn-primary').click();
      cy.wait(1000);

      //Assert that the modal is open
      cy.contains('Congratulations! 🎉 This document has been successfully signed by all participants!')
      .should('be.visible')

      // Click on the print button
      cy.get('[data-cy="option-success"]').contains('Print').click();
    }

    delete() {
        cy.get('[data-cy="sidebar-navigation"]', { timeout: 2000 }).contains('Reports').should('be.visible')
            .click();
        cy.get('[data-cy="submenu-reports"]').contains('Completed').should('be.visible')
            .click();
        // Delete Docs
        cy.get(':nth-child(1) > .px-2 > [data-cy="btn-sign"] > .op-btn-secondary').click()
        cy.contains('Are you sure you want to delete this document?').should('be.visible')
        cy.get('[data-cy="yes-delete"]').click();
    }
    
    certificate(){
    
      cy.get('[data-cy="sidebar-navigation"]', {timeout:2000}).contains('Reports').should('be.visible')
      .click();
      cy.get('[data-cy="submenu-reports"]').contains('Completed').should('be.visible')
      .click(); 

      // Placeholder
      cy.get(':nth-child(1) > .px-2 > [data-cy="btn-sign"] > .op-btn-primary').click();
      

      //Assert that the modal is open
      cy.contains('Congratulations! 🎉 This document has been successfully signed by all participants!', {timeout:1000})
      .should('be.visible')

      // Click on the download button
      cy.get('[data-cy="option-success"]').contains('Certificate').click();
    }

    

}

export default new completed();
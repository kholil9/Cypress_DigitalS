class Contact {
    visitContactPage() { 
      cy.get('[data-cy="sidebar-navigation"]', {timeout:2000}).contains('Reports').should('be.visible')
      .click();
      cy.get('[data-cy="submenu-reports"]').contains('Contactbook').should('be.visible')
      .click(); 
      cy.contains('Contactbook').should('be.visible');
      cy.get('[data-tooltip-content="Daftar kontak yang Anda tambahkan, akan muncul sebagai saran saat menambahkan penandatangan."]')
      .trigger('mouseover')
    }

    deleteContact() { 
      cy.get('[data-cy="sidebar-navigation"]', {timeout:2000}).contains('Reports').should('be.visible')
      .click();
      cy.get('[data-cy="submenu-reports"]').contains('Contactbook').should('be.visible')
      .click(); 
      cy.contains('Contactbook').should('be.visible');
      cy.get('[data-tooltip-content="Daftar kontak yang Anda tambahkan, akan muncul sebagai saran saat menambahkan penandatangan."]')
      .trigger('mouseover')
      cy.get(':nth-child(1) > .px-3 > .text-base-content > .op-btn-secondary')
      .click()
      cy.contains('Delete Contact').should('be.visible')
      cy.contains('Are you sure you want to delete this contact?')
      .should('be.visible')
      cy.get('.op-btn-primary').click()

    }

    addContact() { 
     
      cy.get('[data-cy="sidebar-navigation"]', {timeout:2000}).contains('Reports').should('be.visible')
      .click();
      cy.get('[data-cy="submenu-reports"]').contains('Contactbook').should('be.visible')
      .click(); 
      cy.contains('Contactbook').should('be.visible');
      cy.get('[data-tooltip-content="Daftar kontak yang Anda tambahkan, akan muncul sebagai saran saat menambahkan penandatangan."]')
      .trigger('mouseover')
      cy.get('.justify-between > .cursor-pointer > .fa-light').click()
      
      //Fill form contact
      cy.get('.op-modal.op-modal-open').contains('Add Contact')
      .should('be.visible')

      // Name
      cy.get('.block.text-xs.font-semibold', {timeout:2000})
      .contains('Name').should('be.visible')
      cy.get('#name').type('azriel')

      // Email
      cy.get('.block.text-xs.font-semibold', {timeout:2000})
      .contains('Email').should('be.visible')
      cy.get('#email').type('azriel@gmail.com')

      // Phone
      cy.get('.block.text-xs.font-semibold')
      .contains('Phone').should('be.visible')
      cy.get('#phone').type('081237327486')
      cy.get('[data-cy="submit-btn"]').click()


    }

}

export default new Contact();
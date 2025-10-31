class Repository {
    visitRepoDrive() {
        cy.get('[data-cy="sidebar-navigation"]').contains('Repository Drive').should('be.visible')
            .click();
        cy.get('div')
            .contains('Click on the breadcrumb links to easily navigate through the folder hierarchy and view the documents within each folder.')
            .should('be.visible');
    }

    infoGuideRepoDrive() {
        cy.get('[data-cy="repo-drive"]', { timeout: 4000 }).contains('Repository Drive').should('be.visible')
            .click();
        cy.get('div')
            .contains('Click on the breadcrumb links to easily navigate through the folder hierarchy and view the documents within each folder.')
            .should('be.visible');
        cy.get('.sc-aXZVg.dbJwZj.sc-eqUAAy.eqHGdD').click()
        cy.get('div')
            .contains('Click the add button to create a new folder or document.')
            .should('be.visible');
        cy.get('.sc-aXZVg.dbJwZj.sc-eqUAAy.eqHGdD').click()
        cy.get('div')
            .contains('Sort your documents by Date or Name using this menu.')
            .should('be.visible');
        cy.get('.sc-aXZVg.dbJwZj.sc-eqUAAy.eqHGdD').click()
        cy.get('div')
            .contains('Click on this menu to display the documents in list view.')
            .should('be.visible');
        cy.get('.sc-aXZVg.dbJwZj.sc-eqUAAy.eqHGdD').click()
        cy.get('div')
            .contains('The document list is displayed according to the selected sorting option. Icons next to each document indicate its current status.')
            .should('be.visible');
        cy.get('.sc-aXZVg.dbJwZj.sc-eqUAAy.eqHGdD').click()
        cy.get('div')
            .contains('Right-click on a document to see options such as Download, Rename, Move, and Delete. Click on the document to open it.')
            .should('be.visible');
        cy.get('.sc-aXZVg.dbJwZj.sc-eqUAAy.eqHGdD').click()
        cy.get('div')
            .contains('Right-click on any folder to see options. Choose ‘Rename’ to change the folder’s name or click on the folder to navigate through its contents.')
            .should('be.visible');
        cy.get('.sc-aXZVg.dbJwZj.sc-fqkvVR.bBofGr.reactour__close').click();
    }

    stopInfoGuideRepoDrive() {
        cy.get('[data-cy="repo-drive"]', { timeout: 4000 }).contains('Repository Drive').should('be.visible')
            .click();
        cy.get('.op-checkbox.op-checkbox-xs.mr-1', { timeout: 1000 }).check();
    }

    createFolderRepoDrive() {
        const folderName = `Tugas_AkhirKU_${Date.now()}`;

        cy.get('[data-cy="repo-drive"]', { timeout: 4000 }).contains('Repository Drive').should('be.visible').click();
        cy.get('.sc-aXZVg.dbJwZj.sc-fqkvVR.bBofGr.reactour__close', { timeout: 1000 }).click();
        cy.get('[data-tut="reactourSecond"]').click();
        cy.get('.flex.flex-col').contains('Create Folder').click();
        cy.get('[data-cy="modal-title"]').should('have.text', 'Add a new folder');
        cy.get('.py-\\[8px\\].text-\\[15px\\].font-\\[400\\].mb-0').should('contain', 'Name*');
        cy.get('.op-input.op-input-bordered.op-input-sm').type(folderName);
        cy.get('.flex.flex-row').find('button').contains('Add').click();

    }

    sortFileAndFolder() {
        cy.get('[data-cy="repo-drive"]', { timeout: 4000 }).contains('Repository Drive').should('be.visible')
            .click();
        cy.get('.sc-aXZVg.dbJwZj.sc-fqkvVR.bBofGr.reactour__close', { timeout: 1000 }).click()
        cy.get('[data-tut="reactourThird"]').click();
        cy.get('#menu-container > .dropdown-menu > :nth-child(1)')
            .contains('Name')
            .click();
        cy.get('[data-tut="reactourThird"]').click();
        cy.get('.dropdown-menu > :nth-child(4)')
            .contains('Ascending')
            .click();
    }

    viewMode() {
        cy.get('[data-cy="repo-drive"]',{timeout:4000}).contains('Repository Drive').should('be.visible')
            .click();
        cy.get('.sc-aXZVg.dbJwZj.sc-fqkvVR.bBofGr.reactour__close',{timeout:1000}).click()
        cy.get('[data-tut="reactourForth"]').click();
    }



}

export default new Repository();
import repository from "../../support/pomRepo/repository";

describe('Repository Drive', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000/');
        cy.login()
    });

    it('User can Visit Repository Drive', () => {
        repository.visitRepoDrive();
    })

    it('User assert info 1', () => {
        repository.infoGuideRepoDrive();
    })

    it('User can stop information guide', () => {
        repository.visitRepoDrive();
        cy.get('.op-checkbox.op-checkbox-xs.mr-1').check();

    })

    it('User can create folder in Repository Drive', () => {
        repository.createFolderRepoDrive();
    })

    it('User can sort file and folder in Repository Drive', () => {
        repository.sortFileAndFolder();
    })

    it.only('User can Change into view mode in Select Folder', () => {
        repository.viewMode();
    })

})
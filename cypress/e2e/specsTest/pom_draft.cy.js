import draft from "../../support/Report-menus/draft";

describe('Report Draft', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
    cy.login();
  })

    it('User visit Draft Page ', () => {
        draft.visitDraft();
    })

    it('User can Download', () => {
        draft.downloadDraft();
    });

    it('User can View', () => {
      draft.viewDraft();
    })

    it('User can Delete Draft', () => {
        draft.deleteDraft();
    });

})
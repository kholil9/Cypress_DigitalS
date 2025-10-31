import dashboard from '../../support/pomDashboard/dashboard.js';

describe('Dashboard', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/');
    cy.login()
  })

  it('User can visit Dashboard Menu', () => {
    dashboard.visitDashboard();
  });

  it('User can visit Placehoder', () => {
    dashboard.visitPlaceHolder();
  });

  it('User can delete draft dokumen', () => {
    dashboard.deleteDraft();
  });

});



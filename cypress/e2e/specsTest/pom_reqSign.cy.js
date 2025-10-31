import RequestSignPage from '../../support/pomReqSign/reqSingPage.js';

describe('Request Signature', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/');
        cy.login()
    });
    
    it('(+)User can Visit Reqest Signature Page', () => {
        RequestSignPage.openReqestSignPage();
    })
    it('(+)User can Upload File', () => {
        RequestSignPage.uploadFile();
    });

    it('(+)User can Add Signer', () => {
        RequestSignPage.addSigner();
    });

    it('(+)User can Access Advance Options', () => {
        RequestSignPage.advanceOptions();
    });

    it('(+)User can Request Signature', () => {
        RequestSignPage.requestSignature();
    });
});
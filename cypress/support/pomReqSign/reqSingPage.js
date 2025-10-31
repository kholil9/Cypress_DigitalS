class RequestSignPage {

    openReqestSignPage() {
        cy.get('.text-sm > :nth-child(2) > .flex').click();
        cy.get('.text-\\[20px\\].font-semibold.mb-4').should('have.text', 'Request Signatures');
    }

    uploadFile() {
        cy.get('.text-sm > :nth-child(2) > .flex', { timeout: 5000 }).click();
        cy.get('form > :nth-child(2) > .block')
            .should('have.text', 'File (pdf, png, jpg, jpeg)*');
        cy.get('.op-file-input').attachFile('test_docs.pdf');
        cy.get(':nth-child(3) > .block').should('have.text', 'Document Title*');
    }

    addSigner() {
        cy.get('.text-sm > :nth-child(2) > .flex').click();
        cy.get('[data-cy="signers-field"]').should('contain', 'Signers*');
        cy.get('.cursor-pointer > .fa-light').click();
        cy.get('#name').type('Wawan');
        cy.get('#email').type('Wawan@gmail.com');
        cy.get('#phone').type('08127877217121');
        cy.get('[data-cy="submit-btn"]').click();
    }

    advanceOptions() {
        cy.get('.text-sm > :nth-child(2) > .flex', { timeout: 2000 }).click();
        cy.get('[data-cy="signers-field"]', { timeout: 2000 }).should('contain', 'Signers*');
        cy.get('[data-cy="advance-options"]').click()

        //Assert
        cy.contains('Document Flow Setting').should('be.visible');
        cy.contains('Kirim Secara Berurutan').should('be.visible');
        cy.get('[data-tooltip-id="sendInOrder-tooltip"]').trigger('mouseover')
        cy.get('[data-tooltip-id="sendInOrder-tooltip"]').trigger('mouseout')

        cy.get(':nth-child(1) > .mt-3 > .flex-col > :nth-child(2) > .op-radio').check();
        cy.contains('Time To Complete (Days)*').should('be.visible')

        cy.get('.overflow-y-auto > .mt-2 > .op-input').clear(15);
        cy.get('.overflow-y-auto > .mt-2 > .op-input').type(16);
        cy.contains('.font-\\[400\\].mt-2', 'Security Setting', { timeout: 1000 }).should('be.visible');
        cy.contains('span', 'Aktifkan Panduan').should('be.visible');
        cy.get(':nth-child(3) > .text-xs > .flex-col > :nth-child(2) > .op-radio', { timeout: 1000 }).check()
        cy.get('[data-cy="hide-advance-options"]').click();
    }

    requestSignature() {
        //1. LOGIN TO THE APPLICATION
        cy.get('.text-\\[14px\\].font-bold.text-base-content.cursor-pointer', { timeout: 10000 })
            .should('have.text', 'testengineer2520');
        cy.get('.cursor-pointer.text-\\[12px\\].text-base-content.mt-2')
            .should('contain', 'MNC Life');

        //2. VISIT REQUEST SIGNATURE
        cy.get('.text-sm > :nth-child(2) > .flex', { timeout: 4000 }).click();
        cy.get('.text-\\[20px\\].font-semibold.mb-4')
            .should('have.text', 'Request Signatures');

        //3. UPLOAD FILE
        cy.get('form > :nth-child(2) > .block', { timeout: 5000 })
            .should('have.text', 'File (pdf, png, jpg, jpeg)*');
        cy.get('input[type="file"]').selectFile('cypress/fixtures/test_docs.pdf');
        cy.get(':nth-child(3) > .block' , {timeout:5000})
            .should('have.text', 'Document Title*');

        //4. CHOOSE SIGNERS
        cy.get('[data-cy="signers-field"]', { timeout: 5000 })
            .should('contain', 'Signers*');
        //Hover over the icon to trigger tooltip//
        cy.get('.block > .absolute > .z-50 > sup > .fa-light')
            .trigger('mouseover');
        cy.get('.block > .absolute > .z-50 > sup > .fa-light')
            .trigger('mouseout');
        cy.get('.css-n9qnu9').click()
        cy.get('#react-select-2-option-2').click(); // kholil
        // cy.get('#react-select-2-option-3').click();
        // cy.get('#react-select-2-option-4').click();
        cy.get('[data-cy="signers-field"] > .block').click();

        //5. FILL NOTE
        cy.get('.text-xs.mt-2 .block').should('contain', 'Note*');
        cy.get('[data-cy="document-note"]').clear('Please review and sign this document');
        cy.get('[data-cy="document-note"]').type('Dokumen untuk test e2e Request Signature');

        //6. SELECT FOLDER
        cy.get('.text-xs.mt-2 .block').should('contain', 'Select Folder');
        cy.get('.flex .items-center .gap-2').should('have.text', 'Repository Drive');
        cy.get('[data-cy="select-folder"]').click();
        cy.get('[data-cy="modal-title"]').should('have.text', 'Select Folder');
        cy.get('[data-cy="tugas-akhir-docs"]').should('contain', 'Tugas Akhir Dokumen');
        cy.get('.max-h-\\[210px\\] > :nth-child(18) > .flex').click()
        cy.get('[title="Tugas Akhir Dokumen"]').should('have.text', 'Tugas Akhir Dokumen');
        cy.get('[data-cy="save-here-btn"]').click();

        //7. NEXT
        cy.get('.flex.items-center.mt-3.gap-2')
            .find('button')
            .contains('Next')
            .click();
    }

}

export default new RequestSignPage();
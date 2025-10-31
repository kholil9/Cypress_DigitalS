class Dashboard {
    visitDashboard() {
        cy.get('.text-\\[14px\\].font-bold.text-base-content.cursor-pointer', { timeout: 10000 })
            .should('have.text', 'testengineer2520');
        cy.get('.cursor-pointer.text-\\[12px\\].text-base-content.mt-2', { timeout: 10000 })
            .should('contain', 'MNC Life');
        cy.get('.fa-light.fa-bars.text-xl.text-base-content').click();
    }

    visitPlaceHolder() {
        cy.wait(1000);
        cy.get('.fa-light.fa-bars.text-xl.text-base-content').click();
        cy.contains('Draft').scrollIntoView().should('be.visible');
        cy.get('[data-tut="tourreport3"] .text-base-content .op-btn-primary')
            .first()
            .click();
    }

    deleteDraft() {
        cy.get('.text-\\[14px\\].font-bold.text-base-content.cursor-pointer', { timeout: 10000 })
            .should('have.text', 'testengineer2520');
        cy.get('.cursor-pointer.text-\\[12px\\].text-base-content.mt-2', { timeout: 10000 })
            .should('contain', 'MNC Life');
        cy.get('.fa-light.fa-bars.text-xl.text-base-content').click();
        cy.get('[data-tut="tourreport3"] > .mb-3 > .relative > .bg-base-100 > .overflow-auto > .op-table > .text-\\[12px\\] > :nth-child(1) > .px-2 > .text-base-content > .op-btn-secondary').click();
        cy.get('.m-\\[20px\\] > .flex > .op-btn-primary').click();
    }

}

export default new Dashboard();
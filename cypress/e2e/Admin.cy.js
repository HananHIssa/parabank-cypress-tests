///<reference types ="cypress" />
describe("Admin Page",()=>
{
    beforeEach(()=>
    {
        cy.visit('https://parabank.parasoft.com/parabank');
        cy.contains('.leftmenu a','Admin').click();
    }
    );
    it('open admin page',()=>
    {
    cy.url().should('eq',"https://parabank.parasoft.com/parabank/admin.htm");
    cy.get(':nth-child(1) > :nth-child(1) > [name="accessMode"]').check().should('be.checked');
    cy.get(':nth-child(1) > :nth-child(2) > [name="accessMode"]').check().should('be.checked');
    cy.get(':nth-child(1) > :nth-child(1) > [name="accessMode"]').should('not.be.checked');
    }
    );
}
);
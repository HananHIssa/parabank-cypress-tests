///<reference types="cypress" />
describe("Open Account",()=>
{
beforeEach(()=>
{
cy.fixture('loginData').then((data)=>
{
cy.login(data.Username,data.Password)
cy.contains('#leftPanel a','Open New Account').click();
});
});
it('open checking account',()=>
{
 cy.get('#type').select('CHECKING');
 cy.get('#fromAccountId').select(0);
 cy.get('form > div > .button').click();
 cy.get('#openAccountResult > :nth-child(2)').should('have.text','Congratulations, your account is now open.').should('be.visible');
 cy.get('#newAccountId').click();
cy.get('#accountType').should('have.text','CHECKING')
});
it('open saving account',()=>
{
 cy.get('#type').select('SAVINGS');
 cy.get('#fromAccountId').select(0);
 cy.get('form > div > .button').click();
 cy.get('#openAccountResult > :nth-child(2)').should('have.text','Congratulations, your account is now open.').should('be.visible');
 cy.get('#newAccountId').click();
cy.get('#accountType').should('have.text','SAVINGS')
});
}
);
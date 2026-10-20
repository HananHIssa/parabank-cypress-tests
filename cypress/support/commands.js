//login
Cypress.Commands.add('login',(username,password)=>
{
cy.visit('https://parabank.parasoft.com/parabank');
cy.get('[name="username"]').type(username);
cy.get('[name="password"]').type(password);
cy.get(':nth-child(5) > .button').click();
cy.get('.smallText > b').should('be.visible').and('contain.text','Welcome')
}
)
//open new checking account
Cypress.Commands.add('openCheckingAccount',()=>
{
cy.contains('#leftPanel a','Open New Account').click();
cy.get('#type').select('CHECKING');
 cy.get('#fromAccountId').select(0);
 cy.get('form > div > .button').click();
 cy.get('#openAccountResult > :nth-child(2)').should('have.text','Congratulations, your account is now open.').should('be.visible');
}
);
Cypress.Commands.add('openSavingAccount',()=>
{
cy.contains('#leftPanel a','Open New Account').click();
cy.get('#type').select('SAVINGS');
 cy.get('#fromAccountId').select(0);
 cy.get('form > div > .button').click();
 cy.get('#openAccountResult > :nth-child(2)').should('have.text','Congratulations, your account is now open.').should('be.visible');
}
)
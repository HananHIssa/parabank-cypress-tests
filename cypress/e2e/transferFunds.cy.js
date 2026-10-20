///<reference types="cypress" />

describe('Transfer Funds',()=>
{
    beforeEach(()=>
    {
        cy.fixture('loginData').then((data)=>
        {
            cy.login(data.Username,data.Password);
            cy.contains('#leftPanel a','Transfer Funds').click(); 
        }
        )
    });
    it(' transfer funds between different accounts',()=>
    {
      cy.get('#fromAccountId option').should('have.length.at.least',1).then((options)=>
      {
        const count=options.length;
        cy.log(`accounts number:${count}`)
      
    if(count>1){
      cy.get('[name="input"]').type('10');
        cy.get('#fromAccountId').select(0);
        cy.get('#toAccountId').select(1);
        cy.get(':nth-child(4) > .button').click();
        cy.get('#showResult > .title').should('be.visible').and('have.text','Transfer Complete!')
        cy.get('#amountResult').should('be.visible').and('have.text','$10.00');
        cy.get('#fromAccountIdResult').should('be.visible').and('have.text','13788');
        cy.get('#toAccountIdResult').should('be.visible').and('have.text','52638');
    }
     else{
        cy.openSavingAccount();
        cy.contains('#leftPanel a','Transfer Funds').click();
        cy.get('[name="input"]').type('10');
        cy.get('#fromAccountId').select(0);
        cy.get('#toAccountId').select(1);
        cy.get(':nth-child(4) > .button').click();
        cy.get('#showResult > .title').should('be.visible').and('have.text','Transfer Complete!')
        cy.get('#amountResult').should('be.visible').and('have.text','$10.00');
     } });  
    }
    );
    it('invalid transfer funds with missing amount',()=>
    {
      cy.get('#fromAccountId').select(0);
        cy.get('#toAccountId').select(1);
        cy.get(':nth-child(4) > .button').click();
        cy.get('#showError > .title').should('contain.text','Error!')
    }
    )
    it('invalid transfer with 0 amount',()=>
    {
        cy.get('[name="input"]').type('0');
        cy.get('#fromAccountId').select(0);
        cy.get('#toAccountId').select(1);
        cy.get(':nth-child(4) > .button').click();
       // cy.get('#showError > .title').should('contain.text','Error!')
    }
    );
    it('invalid transfer with negative amount',()=>
    {
        cy.get('[name="input"]').type('-16');
        cy.get('#fromAccountId').select(0);
        cy.get('#toAccountId').select(1);
        cy.get(':nth-child(4) > .button').click();
    }
    )
   it.only(' transfer funds between same accounts',()=>
    {
      cy.contains('#leftPanel a','Transfer Funds').click();
       cy.get('[name="input"]').type(1234);
        cy.get('#fromAccountId').select(0);
        cy.get('#toAccountId').select(0);
        cy.get(':nth-child(4) > .button').click();
        cy.get('#showResult > .title').should('be.visible').and('have.text','Transfer Complete!')
    }
    );
}
)
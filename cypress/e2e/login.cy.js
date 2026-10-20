///<reference types="cypress" />

describe("Login test", ()=>
{
    beforeEach(()=>
    {
        cy.visit('https://parabank.parasoft.com/parabank')
    }
    )
    it("login with valid data",()=>
    {
     cy.fixture('loginData').then((data)=>
     {
     cy.get('[name="username"]').type(data.Username);
     cy.get('[name="password"]').type(data.Password);
     cy.get(':nth-child(5) > .button').click();
     cy.get('.smallText > b').should('be.visible').and('contain.text','Welcome')
     });
    });
    it("login with invalid username",()=>
    {
     cy.fixture('loginData').then((data)=>
     {
     cy.get('[name="username"]').type('lilaAhmad');
     cy.get('[name="password"]').type(data.Password);
     cy.get(':nth-child(5) > .button').click();
     cy.get('.error').should('have.text','The username and password could not be verified.');
     });
    });
     it("Login with invalid password",()=>
     {
        cy.fixture('loginData').then((data)=>
        {
            cy.get('[name="username"]').type(data.Username);
            cy.get('[name="password"]').type('123@test');
            cy.get(':nth-child(5) > .button').click();
            cy.get('.error').should('have.text','The username and password could not be verified.');
        });
     }
    );
    it("Login with empty password",()=>
     {
        cy.fixture('loginData').then((data)=>
        {
            cy.get('[name="username"]').type(data.Username);
            cy.get(':nth-child(5) > .button').click();
            cy.get('.error').should('have.text','Please enter a username and password.');
        });
     }
    );
    it('Login with empty username',()=>
    {
        cy.fixture('loginData').then((data)=>
        {
            cy.get('[name="password"]').type(data.Password);
            cy.get(':nth-child(5) > .button').click();
            cy.get('.error').should('have.text','Please enter a username and password.');
        });
    }
    );
    it('Login with empty username&password',()=>
    {
        
            cy.get(':nth-child(5) > .button').click();
            cy.get('.error').should('have.text','Please enter a username and password.');
    }
    );
}
);
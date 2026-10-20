///<reference types ="cypress" />
describe("Logout",()=>
{
    beforeEach(()=>
{
    cy.fixture('loginData').then((data)=>
    {
    cy.login(data.Username,data.Password);
});
}
    )
    it('Valid logout',()=>
    {
      cy.contains('#leftPanel a', 'Log Out').click();
      cy.location('pathname').should('eq','/parabank/index.htm');
      cy.get('#leftPanel h2').should("be.visible").and('have.text','Customer Login');
    }
    );
}
)
///<reference types="cypress"/>
beforeEach(()=>
    {
        cy.fixture('loginData').then((data)=>
        {
         cy.login(data.Username,data.Password);  
         cy.intercept('GET','**/services_proxy/bank/customers/*').as('getCustomer');
          cy.get('#leftPanel > ul > :nth-child(6) > a').click();
          cy.wait('@getCustomer')
        }
    )
    }
    )
describe("Update Contact Information - Valid",()=>
{
    it('Valid update with update all fields',()=>
    {
    cy.fixture('updateContactInfoData').then((data)=>
    {
        cy.get('[name="customer.firstName"]').should('not.have.value','');
        cy.get('[name="customer.firstName"]').clear();
        cy.get('[name="customer.firstName"]').should('have.value','').type(data.firstName);
        cy.get('[name="customer.lastName"]').clear().type(data.lastName);
        cy.get('[name="customer.address.street"]').clear().type(data.address);
        cy.get('[name="customer.address.city"]').clear().type(data.city);
        cy.get('[name="customer.address.state"]').clear().type(data.state);
        cy.get('[name="customer.address.zipCode"]').clear().type(data.zipCode);
        cy.get('[name="customer.phoneNumber"]').clear().type(data.phone);
        cy.get('[name="customer.firstName"]').should('have.value',data.firstName);
        cy.get('[name="customer.lastName"]').should('have.value',data.lastName);
        cy.get('[name="customer.address.street"]').should('have.value',data.address);
        cy.get('[name="customer.address.city"]').should('have.value',data.city);
        cy.get('[name="customer.address.state"]').should('have.value',data.state);
        cy.get('[name="customer.address.zipCode"]').should('have.value',data.zipCode)
        cy.get('[name="customer.phoneNumber"]').should('have.value',data.phone);
        cy.get('[colspan="2"] > .button').click();
        cy.get('#updateProfileResult > .title').should('be.visible').and('have.text','Profile Updated');
    }
     )
    }
    );
    it("Valid update firstName only",()=>
    {
    cy.fixture('updateContactInfoData').then((data)=>
    {
    cy.get('[name="customer.firstName"]').should('not.have.value','');
    cy.get('[name="customer.firstName"]').clear();
    cy.get('[name="customer.firstName"]').should('have.value','').type(data.firstName);
    cy.get('[name="customer.firstName"]').should('have.value',data.firstName);
    cy.get('[colspan="2"] > .button').click();
    cy.get('#updateProfileResult > .title').should('be.visible').and('have.text','Profile Updated');
    }
    )
    }
    );
    it("Valid update lastName only",()=>
    {
    cy.fixture('updateContactInfoData').then((data)=>
    {
    cy.get('[name="customer.lastName"]').clear().type(data.lastName);
    cy.get('[name="customer.lastName"]').should('have.value',data.lastName);
    cy.get('[colspan="2"] > .button').click();
    cy.get('#updateProfileResult > .title').should('be.visible').and('have.text','Profile Updated');
    }
    )
    }
    );
    it("Valid update address only",()=>
    {
    cy.fixture('updateContactInfoData').then((data)=>
    {
    cy.get('[name="customer.address.street"]').clear().type(data.address);
    cy.get('[name="customer.address.street"]').should('have.value',data.address);
    cy.get('[colspan="2"] > .button').click();
    cy.get('#updateProfileResult > .title').should('be.visible').and('have.text','Profile Updated');
    }
    )
    }
    );
    it('Valid update city only',()=>
    {
     cy.fixture('updateContactInfoData').then((data)=>
    {
    cy.get('[name="customer.address.city"]').clear().type(data.city);
    cy.get('[name="customer.address.city"]').should('have.value',data.city);
    cy.get('[colspan="2"] > .button').click();
    cy.get('#updateProfileResult > .title').should('be.visible').and('have.text','Profile Updated');
    }
    );
});
it('Valid update state only',()=>
    {
     cy.fixture('updateContactInfoData').then((data)=>
    {
    cy.get('[name="customer.address.state"]').clear().type(data.state);
    cy.get('[name="customer.address.state"]').should('have.value',data.state);
    cy.get('[colspan="2"] > .button').click();
    cy.get('#updateProfileResult > .title').should('be.visible').and('have.text','Profile Updated');
    }
    );
});
    it('Valid update zipCode only',()=>
    {
     cy.fixture('updateContactInfoData').then((data)=>
    {
    cy.get('[name="customer.address.zipCode"]').clear().type(data.zipCode);
    cy.get('[name="customer.address.zipCode"]').should('have.value',data.zipCode);
    cy.get('[colspan="2"] > .button').click();
    cy.get('#updateProfileResult > .title').should('be.visible').and('have.text','Profile Updated');
    }
    );
});
   it('Valid update phoneNumber only',()=>
    {
     cy.fixture('updateContactInfoData').then((data)=>
    {
    cy.get('[name="customer.phoneNumber"]').clear().type(data.phone);
    cy.get('[name="customer.phoneNumber"]').should('have.value',data.phone);
    cy.get('[colspan="2"] > .button').click();
    cy.get('#updateProfileResult > .title').should('be.visible').and('have.text','Profile Updated');
    }
    );

});
});
describe("Update Contact Information - Invalid",()=>
{
    it('update with clear all fields',()=>
    {
    
        cy.get('[name="customer.firstName"]').should('not.have.value','');
        cy.get('[name="customer.firstName"]').clear();
        cy.get('[name="customer.lastName"]').clear();
        cy.get('[name="customer.address.street"]').clear();
        cy.get('[name="customer.address.city"]').clear();
        cy.get('[name="customer.address.state"]').clear();
        cy.get('[name="customer.address.zipCode"]').clear();
        cy.get('[name="customer.phoneNumber"]').clear();
        cy.get('[name="customer.firstName"]').should('have.value','');
        cy.get('[name="customer.lastName"]').should('have.value','');
        cy.get('[name="customer.address.street"]').should('have.value','');
        cy.get('[name="customer.address.city"]').should('have.value','');
        cy.get('[name="customer.address.state"]').should('have.value','');
        cy.get('[name="customer.address.zipCode"]').should('have.value','')
        cy.get('[name="customer.phoneNumber"]').should('have.value','');
        cy.get('[colspan="2"] > .button').click();
        cy.get('#firstName-error').should('be.visible').and('have.text','First name is required.');
        cy.get('#lastName-error').should('be.visible').and('have.text','Last name is required.');
        cy.get('#street-error').should('be.visible').and('have.text','Address is required.');
        cy.get('#city-error').should('be.visible').and('have.text','City is required.');
        cy.get('#state-error').should('be.visible').and('have.text','State is required.');
        cy.get('#zipCode-error').should('be.visible').and('have.text','Zip Code is required.')
        cy.get('#updateProfileResult > .title').should('not.be.visible');
    }
    );
    it("update with clear firstName only ",()=>
    {
    cy.get('[name="customer.firstName"]').clear();
    cy.get('[name="customer.firstName"]').should('have.value','');
    cy.get('[colspan="2"] > .button').click();
    cy.get('#firstName-error').should('be.visible').and('have.text','First name is required.');
    cy.get('#updateProfileResult > .title').should('not.be.visible');
    }
    );
    it("update with clear lastName only",()=>
    {
    cy.get('[name="customer.lastName"]').clear();
    cy.get('[name="customer.lastName"]').should('have.value','');
    cy.get('[colspan="2"] > .button').click();
    cy.get('#updateProfileResult > .title').should('not.be.visible');
    cy.get('#lastName-error').should('be.visible').and('have.text','Last name is required.');

    }
    );
    it("update with clear address only",()=>
    {
    cy.get('[name="customer.address.street"]').clear();
    cy.get('[name="customer.address.street"]').should('have.value','');
    cy.get('[colspan="2"] > .button').click();
    cy.get('#updateProfileResult > .title').should('not.be.visible');
    cy.get('#street-error').should('be.visible').and('have.text','Address is required.');
    }
    );
    it("update with clear city only",()=>
    {
    cy.get('[name="customer.address.city"]').clear();
    cy.get('[name="customer.address.city"]').should('have.value','');
    cy.get('[colspan="2"] > .button').click();
    cy.get('#updateProfileResult > .title').should('not.be.visible');
    cy.get('#city-error').should('be.visible').and('have.text','City is required.');
    }
    );
    it("update with clear state only",()=>
    {
    cy.get('[name="customer.address.state"]').clear();
    cy.get('[name="customer.address.state"]').should('have.value','');
    cy.get('[colspan="2"] > .button').click();
    cy.get('#updateProfileResult > .title').should('not.be.visible');
    cy.get('#state-error').should('be.visible').and('have.text','State is required.');
    }
    );
    it("update with clear zipCode only",()=>
    {
    cy.get('[name="customer.address.zipCode"]').clear();
    cy.get('[name="customer.address.zipCode"]').should('have.value','');
    cy.get('[colspan="2"] > .button').click();
    cy.get('#updateProfileResult > .title').should('not.be.visible');
    cy.get('#zipCode-error').should('be.visible').and('have.text','Zip Code is required.');
    }
    );
});
///<reference types="cypress" />
describe("Registration test",()=>
{
  beforeEach(()=>
  {
   cy.visit('https://parabank.parasoft.com/parabank/index.htm');
   cy.get('p').find('a').contains('Register').click();
  });
  it.only("Register with valid data",()=>
  {
    cy.fixture('registerData').then((data)=>
    {
      const username2=`qa_${Date.now()}`;
      cy.get('[name="customer.firstName"]').type(data.firstName);
      cy.get('[name="customer.lastName"]').type(data.lastName);
      cy.get('[name="customer.address.street"]').type(data.address);
      cy.get('[name="customer.address.city"]').type(data.city);
      cy.get('[name="customer.address.state"]').type(data.state)
      cy.get('[name="customer.address.zipCode"]').type(data.zipCode);
      cy.get('[name="customer.phoneNumber"]').type(data.phone);
      cy.get('[name="customer.ssn"]').type(data.ssn);
      cy.get('[name="customer.username"]').type(data.username);
      cy.get('[name="customer.password"]').type(data.password);
      cy.get('[name="repeatedPassword"]').type(data.password);
      cy.get('[colspan="2"] > .button').click();
      cy.get('#rightPanel > p').should('be.visible').and('have.text','Your account was created successfully. You are now logged in.');
    });
  });
  it("Register with missing phone number",()=>
  {
    cy.fixture('registerData').then((data)=>
    {
      const username2=`qa_${Date.now()}`;
      cy.get('[name="customer.firstName"]').type(data.firstName);
      cy.get('[name="customer.lastName"]').type(data.lastName);
      cy.get('[name="customer.address.street"]').type(data.address);
      cy.get('[name="customer.address.city"]').type(data.city);
      cy.get('[name="customer.address.state"]').type(data.state)
      cy.get('[name="customer.address.zipCode"]').type(data.zipCode);
      cy.get('[name="customer.ssn"]').type(data.ssn);
      cy.get('[name="customer.username"]').type(username2);
      cy.get('[name="customer.password"]').type(data.password);
      cy.get('[name="repeatedPassword"]').type(data.password);
      cy.get('[colspan="2"] > .button').click();
      cy.get('#rightPanel > p').should('be.visible').and('have.text','Your account was created successfully. You are now logged in.');
    });
  });
  it("Register with mismatched password",()=>
  {
    cy.fixture('registerData').then((data)=>
    {
        cy.get('[name="customer.firstName"]').type(data.firstName);
      cy.get('[name="customer.lastName"]').type(data.lastName);
      cy.get('[name="customer.address.street"]').type(data.address);
      cy.get('[name="customer.address.city"]').type(data.city);
      cy.get('[name="customer.address.state"]').type(data.state)
      cy.get('[name="customer.address.zipCode"]').type(data.zipCode);
      cy.get('[name="customer.phoneNumber"]').type(data.phone);
      cy.get('[name="customer.ssn"]').type(data.ssn);
      cy.get('[name="customer.username"]').type(data.username);
      cy.get('[name="customer.password"]').type(data.password);
      cy.get('[name="repeatedPassword"]').type("different@1234");
      cy.get('[colspan="2"] > .button').click();
      cy.get('[id="repeatedPassword.errors"]').should('be.visible').and('have.text','Passwords did not match.');
    });
  });
  it('Register with used username',()=>
    {
      cy.fixture('registerData').then((data)=>
      {
       cy.get('[name="customer.firstName"]').type(data.firstName);
      cy.get('[name="customer.lastName"]').type(data.lastName);
      cy.get('[name="customer.address.street"]').type(data.address);
      cy.get('[name="customer.address.city"]').type(data.city);
      cy.get('[name="customer.address.state"]').type(data.state)
      cy.get('[name="customer.address.zipCode"]').type(data.zipCode);
      cy.get('[name="customer.phoneNumber"]').type(data.phone);
      cy.get('[name="customer.ssn"]').type(data.ssn);
      cy.get('[name="customer.username"]').type(data.username);
      cy.get('[name="customer.password"]').type(data.password);
      cy.get('[name="repeatedPassword"]').type(data.password);
      cy.get('[colspan="2"] > .button').click();
     cy.get('[id="customer.username.errors"]').should('be.visible').and('have.text','This username already exists.');
      });
    }
    );
  it("Register with missing first name",()=>
  {
    cy.fixture('registerData').then((data)=>
    {
      cy.get('[name="customer.lastName"]').type(data.lastName);
      cy.get('[name="customer.address.street"]').type(data.address);
      cy.get('[name="customer.address.city"]').type(data.city);
      cy.get('[name="customer.address.state"]').type(data.state)
      cy.get('[name="customer.address.zipCode"]').type(data.zipCode);
      cy.get('[name="customer.phoneNumber"]').type(data.phone);
      cy.get('[name="customer.ssn"]').type(data.ssn);
      cy.get('[name="customer.username"]').type(data.username);
      cy.get('[name="customer.password"]').type(data.password);
      cy.get('[name="repeatedPassword"]').type(data.password);
      cy.get('[colspan="2"] > .button').click();
      cy.get('[id="customer.firstName.errors"]').should('be.visible').and('have.text','First name is required.');
    });
  }
  );
  it("Register with missing last name",()=>
  {
    cy.fixture('registerData').then((data)=>
    {
      cy.get('[name="customer.firstName"]').type(data.firstName);
      cy.get('[name="customer.address.street"]').type(data.address);
      cy.get('[name="customer.address.city"]').type(data.city);
      cy.get('[name="customer.address.state"]').type(data.state)
      cy.get('[name="customer.address.zipCode"]').type(data.zipCode);
      cy.get('[name="customer.phoneNumber"]').type(data.phone);
      cy.get('[name="customer.ssn"]').type(data.ssn);
      cy.get('[name="customer.username"]').type(data.username);
      cy.get('[name="customer.password"]').type(data.password);
      cy.get('[name="repeatedPassword"]').type(data.password);
      cy.get('[colspan="2"] > .button').click();
      cy.get('[id="customer.lastName.errors"]').should('be.visible').and('have.text','Last name is required.');
    });
  }
  );
  it("Register with missing address",()=>
  {
    cy.fixture('registerData').then((data)=>
    {
      cy.get('[name="customer.firstName"]').type(data.firstName);
      cy.get('[name="customer.lastName"]').type(data.lastName);
      cy.get('[name="customer.address.city"]').type(data.city);
      cy.get('[name="customer.address.state"]').type(data.state)
      cy.get('[name="customer.address.zipCode"]').type(data.zipCode);
      cy.get('[name="customer.phoneNumber"]').type(data.phone);
      cy.get('[name="customer.ssn"]').type(data.ssn);
      cy.get('[name="customer.username"]').type(data.username);
      cy.get('[name="customer.password"]').type(data.password);
      cy.get('[name="repeatedPassword"]').type(data.password);
      cy.get('[colspan="2"] > .button').click();
     cy.get('[id="customer.address.street.errors"]').should('be.visible').and('have.text','Address is required.');
    });
  }
  );
  it("Register with missing city",()=>
  {
    cy.fixture('registerData').then((data)=>
    {
      cy.get('[name="customer.firstName"]').type(data.firstName);
      cy.get('[name="customer.lastName"]').type(data.lastName);
      cy.get('[name="customer.address.street"]').type(data.address);
      cy.get('[name="customer.address.state"]').type(data.state)
      cy.get('[name="customer.address.zipCode"]').type(data.zipCode);
      cy.get('[name="customer.phoneNumber"]').type(data.phone);
      cy.get('[name="customer.ssn"]').type(data.ssn);
      cy.get('[name="customer.username"]').type(data.username);
      cy.get('[name="customer.password"]').type(data.password);
      cy.get('[name="repeatedPassword"]').type(data.password);
      cy.get('[colspan="2"] > .button').click();
     cy.get('[id="customer.address.city.errors"]').should('be.visible').and('have.text','City is required.');
    });
  }
  );
  it("Register with missing state",()=>
  {
    cy.fixture('registerData').then((data)=>
    {
      cy.get('[name="customer.firstName"]').type(data.firstName);
      cy.get('[name="customer.lastName"]').type(data.lastName);
      cy.get('[name="customer.address.street"]').type(data.address);
      cy.get('[name="customer.address.city"]').type(data.city);
      cy.get('[name="customer.address.zipCode"]').type(data.zipCode);
      cy.get('[name="customer.phoneNumber"]').type(data.phone);
      cy.get('[name="customer.ssn"]').type(data.ssn);
      cy.get('[name="customer.username"]').type(data.username);
      cy.get('[name="customer.password"]').type(data.password);
      cy.get('[name="repeatedPassword"]').type(data.password);
      cy.get('[colspan="2"] > .button').click();
     cy.get('[id="customer.address.state.errors"]').should('be.visible').and('have.text','State is required.');
    });
  }
  );
   it("Register with missing zipCode",()=>
  {
    cy.fixture('registerData').then((data)=>
    {
      cy.get('[name="customer.firstName"]').type(data.firstName);
      cy.get('[name="customer.lastName"]').type(data.lastName);
      cy.get('[name="customer.address.street"]').type(data.address);
      cy.get('[name="customer.address.city"]').type(data.city);
      cy.get('[name="customer.address.state"]').type(data.state)
      cy.get('[name="customer.phoneNumber"]').type(data.phone);
      cy.get('[name="customer.ssn"]').type(data.ssn);
      cy.get('[name="customer.username"]').type(data.username);
      cy.get('[name="customer.password"]').type(data.password);
      cy.get('[name="repeatedPassword"]').type(data.password);
      cy.get('[colspan="2"] > .button').click();
     cy.get('[id="customer.address.zipCode.errors"]').should('be.visible').and('have.text','Zip Code is required.');
    });
  }
  );
  it("Register with missing ssn",()=>
  {
    cy.fixture('registerData').then((data)=>
    {
      cy.get('[name="customer.firstName"]').type(data.firstName);
      cy.get('[name="customer.lastName"]').type(data.lastName);
      cy.get('[name="customer.address.street"]').type(data.address);
      cy.get('[name="customer.address.city"]').type(data.city);
      cy.get('[name="customer.address.state"]').type(data.state)
      cy.get('[name="customer.address.zipCode"]').type(data.zipCode);
      cy.get('[name="customer.phoneNumber"]').type(data.phone);
      cy.get('[name="customer.username"]').type(data.username);
      cy.get('[name="customer.password"]').type(data.password);
      cy.get('[name="repeatedPassword"]').type(data.password);
      cy.get('[colspan="2"] > .button').click();
      cy.get('[id="customer.ssn.errors"]').should('be.visible').and('have.text','Social Security Number is required.');
    });
  });
  it("Register with missing username",()=>
  {
    cy.fixture('registerData').then((data)=>
    {
      cy.get('[name="customer.firstName"]').type(data.firstName);
      cy.get('[name="customer.lastName"]').type(data.lastName);
      cy.get('[name="customer.address.street"]').type(data.address);
      cy.get('[name="customer.address.city"]').type(data.city);
      cy.get('[name="customer.address.state"]').type(data.state)
      cy.get('[name="customer.address.zipCode"]').type(data.zipCode);
      cy.get('[name="customer.phoneNumber"]').type(data.phone);
      cy.get('[name="customer.ssn"]').type(data.ssn);
      cy.get('[name="customer.password"]').type(data.password);
      cy.get('[name="repeatedPassword"]').type(data.password);
      cy.get('[colspan="2"] > .button').click();
      cy.get('[id="customer.username.errors"]').should('be.visible').and('have.text','Username is required.');
    });
  });
  it("Register with missing password",()=>
  {
    cy.fixture('registerData').then((data)=>
    {
      cy.get('[name="customer.firstName"]').type(data.firstName);
      cy.get('[name="customer.lastName"]').type(data.lastName);
      cy.get('[name="customer.address.street"]').type(data.address);
      cy.get('[name="customer.address.city"]').type(data.city);
      cy.get('[name="customer.address.state"]').type(data.state)
      cy.get('[name="customer.address.zipCode"]').type(data.zipCode);
      cy.get('[name="customer.phoneNumber"]').type(data.phone);
      cy.get('[name="customer.ssn"]').type(data.ssn);
      cy.get('[name="customer.username"]').type(data.username);
      cy.get('[name="repeatedPassword"]').type(data.password);
      cy.get('[colspan="2"] > .button').click();
     cy.get('[id="customer.password.errors"]').should('be.visible').and('have.text','Password is required.');
    });
  });
  it("Register with missing repeated password",()=>
  {
    cy.fixture('registerData').then((data)=>
    {
      cy.get('[name="customer.firstName"]').type(data.firstName);
      cy.get('[name="customer.lastName"]').type(data.lastName);
      cy.get('[name="customer.address.street"]').type(data.address);
      cy.get('[name="customer.address.city"]').type(data.city);
      cy.get('[name="customer.address.state"]').type(data.state)
      cy.get('[name="customer.address.zipCode"]').type(data.zipCode);
      cy.get('[name="customer.phoneNumber"]').type(data.phone);
      cy.get('[name="customer.ssn"]').type(data.ssn);
      cy.get('[name="customer.username"]').type(data.username);
      cy.get('[name="customer.password"]').type(data.password);
      cy.get('[colspan="2"] > .button').click();
      cy.get('[id="repeatedPassword.errors"]').should('be.visible').and('have.text','Password confirmation is required.');
    });
  });
}
);
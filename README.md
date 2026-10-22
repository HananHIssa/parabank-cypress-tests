# ParaBank Test Automation

End-to-end UI testing project for the ParaBank demo banking application, built with **Cypress and JavaScript**.

The project covers common banking workflows, form validation, and exploratory testing findings.

## Test Coverage

| Feature | Tests | Scope |
|---|---:|---|
| Registration | 14 | Successful registration and input validation |
| Login | 6 | Valid, invalid, and empty credentials |
| Logout | 1 | Logout and return to the login page |
| Account Creation | 2 | CHECKING and SAVINGS accounts |
| Fund Transfers | 5 | Successful transfers and input edge cases |
| Contact Information | 15 | Updating profile fields and required-field validation |
| Admin Page | 1 | Radio button interaction |
| **Total** | **44** | |

## Project Structure

- `cypress/e2e/` — Test specifications organized by feature.
- `cypress/fixtures/` — JSON test data.
- `cypress/support/commands.js` — Reusable commands for login and account creation.
- `cypress/support/e2e.js` — E2E support configuration.
- `docs/` — Bug reports and supporting screenshots.
- `cypress.config.js` — Cypress configuration.

## Testing Approach

- Separate test data from test logic using fixtures.
- Reuse common workflows through custom commands.
- Prepare the application before each test using hooks.
- Verify field values, visible messages, and transfer details.
- Synchronize profile tests with the customer-data request using `cy.intercept()` and `cy.wait()`.

## Getting Started

### Prerequisites

- Node.js and npm compatible with the Cypress version in `package.json`.
- Git.
- Internet access to the ParaBank demo application.

### Installation

Clone this repository, open its folder in a terminal, and install the locked dependencies:

```bash
npm ci
```

### Test Data Setup

Before running authenticated tests:

1. Register a demo user in ParaBank.
2. Update `cypress/fixtures/loginData.json` with that user's credentials.
3. Keep the property names `Username` and `Password` as used by the tests.
4. Review the registration and contact-information fixtures for suitable demo data.

Use a unique username for successful registration scenarios and an existing username for duplicate-user validation.

Some transfer assertions use specific account numbers. Update those expectations to match the accounts available to your demo user.

### Open the Cypress Test Runner

```bash
npx cypress open
```

### Run All Tests

```bash
npx cypress run
```

### Run a Single Specification

```bash
npx cypress run --spec "cypress/e2e/updateContactInfo.cy.js"
```

## Recorded Test Run

A local execution on **October 22, 2026** completed with:

- **44 passing tests**
- **7 specification files**
- **0 failures**
- **Duration: 2 minutes 41 seconds**

This records one execution; results can vary with application availability and demo data.

## Exploratory Findings

Potential issues involving same-account, zero-amount, and negative-amount transfers are documented with reproduction steps and supporting evidence.

See [Bug Reports](docs/bug-reports.md).

The reports distinguish observed application behavior from expected behavior that requires requirements confirmation. Passing automated tests do not mean all exploratory findings have been resolved.

## Current Limitations

- Tests run against a shared public demo environment.
- Authenticated scenarios require an existing demo user.
- Tests create accounts and update profile data without automatic cleanup.
- Some transfer assertions depend on specific account numbers.
- The suite currently runs locally; CI integration is planned.

## Author

**Hanan Issa**

- [GitHub](https://github.com/HananHIssa)
- [LinkedIn](https://linkedin.com/in/hananhissa)
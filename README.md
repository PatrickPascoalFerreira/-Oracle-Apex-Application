# -Oracle-Apex-Application

# Cypress for Front-end Oracle-Apex-Application

This project serves to demonstrate the automation of E2E tests of Oracle-Apex-Application from Oracle.

## Pre-requirements

It is required to have Cypress, Node.js and npm installed to run this project.

> I used versions `13.2.0` to Cypress, `v18.15.0` and `9.7.1` of Node.js and npm, respectively. I suggest you use the same or later versions.

## Installation

Run `npm install` to install the dev dependencies.

## Tests

Run `npx cypress run --spec .\cypress\e2e\ORACLE_Cypress.cy.js` to run the test in headless mode.

Or, run `npx cypress open` to open Cypress in interactive mode.

The test run on Chrome browser, Firefox, Edge, Electron and Safari (WebKit).

---

This project was created by [Patrick Ferreira](patrickppferreira@gmail.com).

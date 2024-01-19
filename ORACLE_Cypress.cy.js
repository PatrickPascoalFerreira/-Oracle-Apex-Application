/// <reference types="Cypress" />



describe("Aplication ORACLE APEX", () => {

beforeEach("LoginORACLEAPEX", () => {
    //Access the application with credentials used when creating the workspace.
    cy.viewport(1920,1080);
    cy.visit("https://apex.oracle.com/pls/apex/r/cypress/qa-application/login?session=12184938264630");
    cy.title().should("eq", "QA Application - Log In");
    cy.get('[id="R65022506594972711511"]').should("be.visible");

    //Credentials should not be hard-coded
    cy.get('[id="R65022506594972711511_heading"]').should("be.visible").should("have.text", "QA Application");
    cy.get('#P9999_USERNAME').should("be.visible").type("patrickppferreira@gmail.com");
    cy.get('#P9999_PASSWORD').should("be.visible").type("Portugal@");
    cy.get('[id="B65022508431613711542"]').should("be.visible").should("not.be.disabled").click();
    //cy.wait(1000)
    //Validation Elements
    cy.title().should("eq", "QA Application");
    cy.get('.apex-logo-text').should("be.visible").should("have.text", "QA Application");
    cy.get('[id="L65022514933747711650"]').should("be.visible").contains("PATRICKPPFERREIRA@GMAIL.COM");
    cy.get('#R65023674415855837468_heading').should("be.visible").contains("Top Products Ordered By Store");
    cy.get('[id="R65023674415855837468_jet"]').should("be.visible");
    cy.wait(1000)
    cy.get('[role="presentation"]').should("be.visible");
    cy.get('[class="a-GV-w-scroll"]').should("be.visible");
    cy.get('.a-GV-footer').should("be.visible");
    cy.get('[id="R65023677306814837497"]').should("be.visible");
    cy.get('#B65023677445889837498').should("be.visible").should("not.be.disabled");
    cy.get('.t-Footer-version').should("be.visible").should("have.text", "Release 1.0");
});

afterEach("Logout", () => {
    cy.clearCookies();
    cy.clearLocalStorage();
});

context("Login to Aplication", () => {

    it("TC01_Save values in chart in memory", () => {
        /* When using Cypress it is not necessary to double validate the visibility of the elements, however, 
        in this case as I am not familiar with the platform 
        I decided to do double validation to make sure that the elements do not disappear after some time.*/
        cy.get('#R65023674415855837468_heading').should("be.visible").contains("Top Products Ordered By Store");
        cy.get('[id="R65023674415855837468_jet"]').should("be.visible");
        cy.get('.t-Footer-version').should("be.visible");
        cy.get('#B65023677445889837498').should("be.visible").should("not.be.disabled").click();
        cy.log("Save values in chart in memory!")
    });
    it.only("TC02_Access table and change the quantity of order 10 to 20", () => {
        cy.get('[id="C65023677182931837496_HDR"]').should("be.visible").click();
        cy.get('#R65023675240169837476_ig_column_header_search').should("be.visible").type("10").type("{enter}").should("have.value", 10);
        cy.get('.u-tC').should("have.text", "10");
        /*I tried to use the id, but for some reason it was giving an error and for that reason 
        I got the class instead of not using any assertion, however the correct option would be to use the id*/
        cy.get('tbody > .a-GV-row > .u-tE').should("have.text", "10").dblclick()
        cy.get('tbody > .a-GV-row > .u-tE').type("20");
        cy.get('.a-GV-footer').click();
        cy.wait(1000);
        cy.get('tbody > .a-GV-row > .u-tE').should("have.text", "20"); 
        cy.wait(2000);      
        /*I've tried with several ids to interact with the graph through the locator: 
        id="_dvtActiveElement290004891" for example but it gives an error */
        cy.log("Access table and change the quantity of order 10 to 20")
    });
    it("TC03_Access table and change the location of order 10 to Deli", () => {
        cy.get('[id="C65023677182931837496_HDR"]').should("be.visible").click();
        cy.get('#R65023675240169837476_ig_column_header_search').should("be.visible").type("10").type("{enter}").should("have.value", 10);
        cy.get('.u-tC').should("have.text", "10");
        /*I tried to use the id, but for some reason it was giving an error and for that reason 
        I got the class instead of not using any assertion, however the correct option would be to use the id*/
        cy.get('[class="a-GV-cell u-tS"]').should("have.text", "Deli");
        cy.wait(2000);      
        /*I've tried with several ids to interact with the graph through the locator: 
        id="_dvtActiveElement290004891" for example but it gives an error */
        cy.log("Access table and change the quantity of order 10 to 20");
    });




 });
});
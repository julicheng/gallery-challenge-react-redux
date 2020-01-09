/* eslint-disable no-undef */
describe("Home page", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("have a header with title art gallery", () => {
    cy.get("header a h1").should("have.text", "Art Gallery");
  });

  it("have 12 gallery items on page load", () => {
    cy.get(".gallery div").should("have.length", 12);
  });

  it("load 24 gallery items when load more is clicked", () => {
    cy.get("nav button")
      .click()
      .get(".gallery div")
      .should("have.length", 24);
  });

  it("load 36 gallery items when load more is clicked", () => {
    cy.get("nav button")
      .click()
      .get("nav button")
      .click()
      .get(".gallery div")
      .should("have.length", 36);
  });

  //   it("deletes a todo", () => {
  //     cy.get("li")
  //       .first()
  //       .find(".btn-danger")
  //       .click()
  //       .get("li")
  //       .should("have.length", 1);
  //   });
});

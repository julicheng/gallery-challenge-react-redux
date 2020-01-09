/* eslint-disable no-undef */
describe("Item page", () => {
  beforeEach(() => {
    cy.visit("/item/5d5d59ff4431ba89d176b575");
  });

  it("have a header with title art gallery", () => {
    cy.get("header a h1").should("have.text", "Art Gallery");
  });

  it("have an image section for the item", () => {
    cy.get(".imageSection img").should("exist");
  });

  it("have a description section for the item", () => {
    cy.get(".descriptionSection h2 + p + h3").should("exist");
  });

  it("have a link going back to gallery", () => {
    cy.get("h3 a").should("exist");
  });

  it("have a footer with text of the year", () => {
    cy.get("footer h3").should("have.text", "© 2020");
  });
});

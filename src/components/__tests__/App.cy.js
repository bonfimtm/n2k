import App from "../../App.vue";

describe("App", () => {
  beforeEach(() => {
    cy.mount(App);
  });

  it("renders app title", () => {
    cy.get("h1").should("contain", "Notes 2000");
  });

  it("renders add button", () => {
    cy.get("button").should("have.text", "Add");
  });
});

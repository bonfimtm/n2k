import App from "../../App.vue";

describe("App", () => {
  beforeEach(() => {
    cy.mount(App);
  });

  it("renders app title properly", () => {
    cy.get("h1").should("contain", "Notes 2000");
  });
});

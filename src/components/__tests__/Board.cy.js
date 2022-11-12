import Board from "../Board.vue";

describe("Board", () => {
  beforeEach(() => {
    cy.mount(Board);
  });

  it("renders app title properly", () => {
    cy.get("h1").should("contain", "Notes 2000");
  });
});

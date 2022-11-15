import Board from "../Board.vue";

describe("Board", () => {
  beforeEach(() => {
    cy.mount(Board, { props: { cards: [] } });
  });

  it("renders three columns", () => {
    cy.get("h2.window-title").should("have.length", 3);
  });

  it("renders ToDo column", () => {
    cy.get("h2.window-title").first().should("have.text", "ToDo");
  });

  it("renders Doing column", () => {
    cy.get("h2.window-title").eq(1).should("have.text", "Doing");
  });

  it("renders Done column", () => {
    cy.get("h2.window-title").last().should("have.text", "Done");
  });
});

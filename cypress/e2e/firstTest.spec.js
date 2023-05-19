///<reference types = "cypress"/>

describe("back end test", () => {
  it("login", () => {
    cy.loginToApp();
  });
});

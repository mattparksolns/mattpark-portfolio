/// <reference types="cypress" />

describe("Accessibility tests", () => {
  beforeEach(() => {
    cy.visit('/').get('main').injectAxe()
  })

  it("Has no detectable accessibility violations on load", () => {
    // const axeRunOptions = {
    //   rules: {
    //     "rule-id": { enabled: false },
    //   },
    // }
    const axeRunContext = {
      exclude: [[".gatsby-highlight"], ["#an-id"]],
    }
    // cy.checkA11y(axeRunContext, axeRunOptions)
    cy.checkA11y(axeRunContext)
  })

  it("Navigates to page 2 and checks for accessibility violations", () => {
    cy.findByText(/Drop me a line/i)
      .click()
      .checkA11y()
  })

  it("Focuses on the footer link and asserts its attributes", () => {
    cy.get("#my-name")
      .should("have.text", "Matt Park")
      .should("not.have.css", "color", "white")
  })
})
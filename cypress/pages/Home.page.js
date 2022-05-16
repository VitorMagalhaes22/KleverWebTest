import { homeFunc } from "../func/Home.func";

class HomePage {
  goHome() {
    cy.visit("/");
  }
  clickButtonMenu() {
    cy.get(homeFunc.menuButton).click();
  }

  clickNft() {
    cy.get(homeFunc.nftButton)
      .first()
      .should("contain", "NFT")
      .click({ force: true });
  }

  clickMarkets() {
    cy.get(homeFunc.marketsButton)
      .first()
      .should("contain", "Markets")
      .click({ force: true });
  }
}
export default new HomePage();

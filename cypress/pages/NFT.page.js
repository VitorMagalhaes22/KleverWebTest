import { nftFunc } from "../func/NFT.func";

class NftPage {
  filterButton() {
    cy.get("button").contains("Filter").click();
  }

  clickAgilitAttribute() {
    cy.get(nftFunc.filterAgilitAttribute).contains("Agility Attribute").click();
    cy.get(nftFunc.barAgiliAttribute).click({ force: true });
  }

  clickAgilitInfinit() {
    cy.get(nftFunc.filterAgilitInfinit).contains("Agility Affinity").click();
    cy.get(nftFunc.barAgiliInfinit).click();
    cy.get(nftFunc.filterAgilitInfinit).contains("Agility Affinity").click();
  }

  apllyButton() {
    cy.get("button").contains("Apply").click({ force: true });
  }
  filterShould2() {
    cy.get(nftFunc.filterSelected).should("contain", "2");
  }
}
export default new NftPage();

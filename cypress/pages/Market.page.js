import { marketFunc } from "../func/Market.func";

class MarketsPage {
  barSearch(pair) {
    cy.get(marketFunc.barSearch).type(pair);
  }
}
export default new MarketsPage();

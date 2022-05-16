/// <reference types="cypress"/>

import homePage from "../../pages/Home.page";
import marketPage from "../../pages/Market.page";

describe("Markets Page", function () {
  beforeEach(function () {
    homePage.goHome();
    homePage.clickButtonMenu();
    homePage.clickMarkets();
  });

  it("Fazer busca do pair ETH/USDT", function () {
    marketPage.barSearch("ETH/USDT");
  });

  it("Fazer busca do pair KLV/USDT", function () {
    marketPage.barSearch("KLV/USDT");
  });

  it("Fazer busca do pair KLV/ETH", function () {
    marketPage.barSearch(" KLV/ETH");
  });
});

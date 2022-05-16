/// <reference types="cypress"/>

import homePage from "../../pages/Home.page";
import nftPage from "../../pages/NFT.page";

describe(" NFT Page", function () {
  it("Buscar NFT com dois tipos de filtro", function () {
    homePage.goHome();
    homePage.clickButtonMenu();
    homePage.clickNft();
    nftPage.filterButton();
    nftPage.clickAgilitInfinit();
    nftPage.clickAgilitAttribute();
    nftPage.apllyButton();
    nftPage.filterShould2();
  });
});

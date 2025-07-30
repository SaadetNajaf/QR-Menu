import fetchMenu from "./api.js";
import { domElements, renderProductDetails, notFoundPage } from "./ui.js";

const params = new URLSearchParams(window.location.search);
const id = +params.get("id");

document.addEventListener("DOMContentLoaded", async () => {
  const data = await fetchMenu();
  const product = data.find((item) => item.id === id);

  !product
    ? notFoundPage(domElements.detailPage)
    : renderProductDetails(product, domElements.detailPage);
});

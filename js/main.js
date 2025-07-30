import fetchMenu from "./api.js";
import { domElements, renderCard } from "./ui.js";

document.addEventListener("DOMContentLoaded", async () => {
  const data = await fetchMenu();
  renderCard(data);

  domElements.inputs.forEach((input) => {
    input.addEventListener("change", () => {
      const selected = input.id;
      const filteredData = data.filter((item) => item.category === selected);
      renderCard(filteredData.length ? filteredData : data);
      domElements.menuList.scrollIntoView({ behavior: "smooth" });
    });
  });
});

(() => {
  const details = document.querySelector("#details");

  window.addEventListener("DOMContentLoaded", () => {
    buildCard();
  });

  function buildCard() {
    const label = document.createElement("h5");
    label.textContent = "Perfume";

    const title = document.createElement("h1");
    title.textContent = "Gabrielle Essence Eau De Parfum";

    const description = document.createElement("p");
    description.classList.add("description");
    description.textContent =
      "A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.";

    const divPrice = document.createElement("div");

    const price = document.createElement("p");
    price.textContent = "$149.99";
    price.classList.add("price");

    const exPrice = document.createElement("span");
    exPrice.textContent = "$169.99";
    exPrice.classList.add("exPrice");

    price.appendChild(exPrice);
    divPrice.appendChild(price);

    const button = document.createElement("button");
    button.textContent = "Add to Cart";

    const icon = document.createElement("img");
    icon.src = "./images/icon-cart.svg";
    icon.alt = "to Cart";
    button.append(icon);

    details.appendChild(label);
    details.appendChild(title);
    details.appendChild(description);
    details.appendChild(divPrice);
    details.appendChild(button);
  }
})();

const app = document.getElementById("ads");

const container = document.createElement("div");

container.classList.add("container");

app.appendChild(container);

async function fetchData() {
  try {
    const response = await fetch("./tradera.json");
    const data = await response.json();
    console.log(data.clothes);
    if (response.ok) {
      data.clothes.forEach((item) => {
        console.log("item", item);
        const ad = document.createElement("div");
        ad.classList.add("ads");

        const headingElement = document.createElement("h2");
        headingElement.textContent = item.title;

        const priceElement = document.createElement("p");
        priceElement.textContent = `${item.price} ${item.currency}`;

        const imageElement = document.createElement("img");
        imageElement.setAttribute("src", item.imageUrl);
        imageElement.setAttribute("alt", item.title);

        const paragraphElement = document.createElement("p");
        item.description = item.description.substring(0, 300);
        paragraphElement.textContent = `${item.description}...`;

        container.appendChild(ad);
        ad.appendChild(headingElement);
        ad.appendChild(priceElement);
        ad.appendChild(imageElement);
        ad.appendChild(paragraphElement);
      });
    }
  } catch (error) {
    console.log(error);
    const errorMessage = document.createElement("marquee");
    errorMessage.textContent = "Could not find a file";
    app.appendChild(errorMessage);
  }
}

fetchData();

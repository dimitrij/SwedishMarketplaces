const app = document.getElementById("ads");

const clothesConfiguration = {
  endpoint11: "./morteza.json",
  dataType11: "clothes",
};

const vehiclesConfiguration = {
  endpoint11: "./tradera.json",
  dataType11: "vehicles",
};

const electronicsConfiguration = {
  endpoint11: "./tradera.json",
  dataType11: "electronics",
};

const gamesConfiguration = {
  endpoint11: "./tradera.json",
  dataType11: "games",
};

async function fetchData(configuration) {
  const { endpoint11, dataType11 } = configuration;

  const container = document.createElement("div");
  container.classList.add(`container-${dataType11}`);
  app.appendChild(container);

  try {
    const response = await fetch(endpoint11);
    const data = await response.json();

    console.log("data", data);

    if (response.ok) {
      data[dataType11].forEach((item) => {
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

fetchData(clothesConfiguration);
fetchData(vehiclesConfiguration);
fetchData(electronicsConfiguration);
fetchData(gamesConfiguration);

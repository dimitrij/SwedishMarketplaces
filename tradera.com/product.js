const app = document.getElementById("ads");

const jsonConfiguration = {
  endpoint: "./tradera.json",
};

async function fetchData(configuration) {
  const { endpoint } = configuration;

  const container = document.createElement("div");
  container.classList.add(`container`);
  app.appendChild(container);

  try {
    const response = await fetch(endpoint);
    const data = await response.json();

    console.log("data", data);

    // Navigate to Single Product Page!!
    const filteredData = data.filter((item) => {
      const newPath = window.location.pathname
        .replace("/tradera.com/", "")
        .replace(".html", "");

      return item.id === Number(newPath);
    });

    if (response.ok) {
      filteredData.forEach((item) => {
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
        ad.appendChild(imageElement);
        ad.appendChild(headingElement);
        ad.appendChild(priceElement);
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

fetchData(jsonConfiguration);
document.getElementById("container").style.display = "grid";
document.getElementById("container").style.gridTemplateColumns = "1fr 1fr ";

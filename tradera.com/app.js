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

    const sortedData = data.sort((a, b) => {
      // Here is where you can sort
      const lowercaseTitleA = a.title.toLowerCase();
      const lowercaseTitleB = b.title.toLowerCase();
      if (lowercaseTitleA < lowercaseTitleB) {
        return -1;
      } else if (lowercaseTitleA > lowercaseTitleB) {
        return 1;
      }
      return 0;
    });

    if (response.ok) {
      sortedData.forEach((item) => {
        const linkElement = document.createElement("a");
        linkElement.setAttribute("href", `${item.id}.html`);

        const ad = document.createElement("div");
        ad.classList.add("ads");

        const headingElement = document.createElement("h3");
        headingElement.textContent = item.title;

        const priceElement = document.createElement("p");
        priceElement.textContent = `${item.price} ${item.currency}`;

        const imageElement = document.createElement("img");
        imageElement.setAttribute("src", item.imageUrl);
        imageElement.setAttribute("alt", item.title);

        container.appendChild(linkElement);
        linkElement.appendChild(ad);
        ad.appendChild(imageElement);
        ad.appendChild(headingElement);
        ad.appendChild(priceElement);
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

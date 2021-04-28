const app = document.getElementById('ads');

const container = document.createElement('div');


container.setAttribute('class', 'container');

app.appendChild(container);

var request = new XMLHttpRequest();

request.open('GET', 'https://dimitrij.github.io/SwedishMarketplaces/SwedishMarketplaces.json', true);
request.onload = function () {

  // Begin accessing JSON data here
  var data = JSON.parse(this.response);
  console.log(data);
  if (request.status >= 200 && request.status < 400) {
    console.log('Hej');

    data.forEach(a => {

        const ad = document.createElement('div');
        ad.setAttribute('class', 'ad1111');
        console.log("inne i loopen");

        const h1 = document.createElement('h1');
        h1.textContent = a.title;
        console.log("titel" +  a.title);

        const p = document.createElement('p');
        p.textContent = a.description;
        // ad.description = ad.description.substring(0, 300);
        // p.textContent = `${ad.description}...`;

        const pris = document.createElement('h3');
        pris.textContent = a.pris;

        const myimage = document.createElement('img');
       // myimage.textContent = a.bild;
        myimage.src = "./images/" + a.bild;

        container.appendChild(ad);
        ad.appendChild(h1);
        ad.appendChild(p);
        ad.appendChild(pris);
        ad.appendChild(myimage);
    });

    console.log("Utte från loopen");
  } 
  // If there no such file or bad request. 
  else {
    const errorMessage = document.createElement('marquee');
    errorMessage.textContent = 'Could not find a file';
    app.appendChild(errorMessage);
  }
}

request.send();
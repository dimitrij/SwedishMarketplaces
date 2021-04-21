const app = document.getElementById('ads');

const container = document.createElement('div');

container.setAttribute('class', 'container');

app.appendChild(container);

var request = new XMLHttpRequest();
request.open('GET', 'https://dimitrij.github.io/SwedishMarketplaces/SwedishMarketplaces.json', true);
request.onload = function () {

  // Begin accessing JSON data here
  var data = JSON.parse(this.response);
  if (request.status >= 200 && request.status < 400) {
    console.log('Hej');
    data.forEach(persons => {
      const ad = document.createElement('div');
      ad.setAttribute('class', 'ads');

      const h1 = document.createElement('h1');
      h1.textContent = ad.title;
    
      const p = document.createElement('p');
      ad.description = ad.description.substring(0, 300);
      p.textContent = `${ad.description}...`;

      container.appendChild(ad);
      ad.appendChild(h1);
      ad.appendChild(p);
    });
  } 
  // If there no such file or bad request. 
  else {
    const errorMessage = document.createElement('marquee');
    errorMessage.textContent = 'Could not find a file';
    app.appendChild(errorMessage);
  }
}

request.send();
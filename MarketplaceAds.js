const app = document.getElementById('ads');

const container = document.createElement('div');

container.setAttribute('class', 'container');

app.appendChild(container);

var request = new XMLHttpRequest();
request.open('GET', 'https://dimitrij.github.io/SwedishMarketplaces/SwedishMarketplace.json', true);
request.onload = function () {

  // Begin accessing JSON data here
  var data = JSON.parse(this.response);
  if (request.status >= 200 && request.status < 400) {
    
    data.forEach(persons => {
      const person = document.createElement('div');
      person.setAttribute('class', 'person');

      const h1 = document.createElement('h1');
      h1.textContent = persons.title;

      const p = document.createElement('p');
      persons.description = persons.description.substring(0, 300);
      p.textContent = `${persons.description}...`;

      container.appendChild(person);
      person.appendChild(h1);
      person.appendChild(p);
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
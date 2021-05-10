/*fetching data by using fetch API

fetch(queryURL)
.then(function (response) {
        return response.json();
        // The JSON data will arrive here
})

.catch(function (error) {
    console.log('Error during fetch: ' + error.message);
    // If an error occured, you will catch it here
});*/


fetch('https://dimitrij.github.io/SwedishMarketplaces/blocket.se/product.json')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
  let params = new URLSearchParams(location.search);
  let id = params.get('id') // # => "n1"
    appendData(data, id);
  })
  .catch(function (err) {
    console.log(err);
  });


  function appendData(data, id) {
    var mainContainer = document.getElementById("myData");
    for (var i = 0; i < data.length; i++) {
      console.log(data[i].id);
      console.log(id);
        if (data[i].id == id) {
        
            console.log(data);
            var div = document.createElement("div");
            div.innerHTML = 'title: ' + data[i].description + ' ' + data[i].price;
            console.log(data[i].description);
            mainContainer.appendChild(div);
        }
    }
}
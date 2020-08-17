// from data.js
var tableData = data;

// YOUR CODE HERE!

var tbody = d3.select("tbody"); 

data.forEach((ufoReport) => {
    var row = tbody.append("tr");
    Object.entries(ufoReport).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
  
var button = d3.select("#filter-btn");
var form = d3.select("#datetime");

button.on("click", runEnter);
form.on("submit",runEnter);
function runEnter() {
    tbody.html("");
    d3.event.preventDefault();
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");
    console.log(inputValue);

    var filteredData = data.filter(sighting => sighting.datetime === inputValue);
    console.log(filteredData);

    filteredData.forEach((ufoReport) => {
        var row = tbody.append("tr");
        Object.entries(ufoReport).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
      });

}
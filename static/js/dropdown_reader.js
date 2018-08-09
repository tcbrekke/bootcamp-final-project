var submitButton = document.getElementById("chooserEntry");
var variety_selector = document.getElementById("variety-selector");
console.log(variety_selector);
var price_selector = document.getElementById("price");
var region_selector = document.getElementById("region-selector");
var year_selector = document.getElementById("year-selector");
var country_selector = document.getElementById("country-selector");

d3.select(submitButton).on("mouseup", function() {
    variety = variety_selector.value;
    price = parseFloat(price_selector.value);
    region = region_selector.value;
    year = parseFloat(year_selector.value);
    country = country_selector.value;
    var outputDiv = d3.select("#wine-selections");
    outputDiv.selectAll("*").remove();
    
    // Sends selections to Thom's route and then appends results to div in index
    d3.json(`/choice_score/${variety}/${price}/${region}/${year}/${country}/`, function(error, response) {
        console.log(error);
        var score = response;
        console.log(score);
        if (score) {
            d3.select("#wine-selections").html(`<h3>Your wine deserves a score of:</h3><h1>${score}</h1>`);
        }
        else {
            d3.select("#wine-selections").html('error');
        }
    })    

    // Sends selections to Thom's route and then appends results to div in index
    d3.json(`/wine_chooser/${variety}/${price}/${region}/${year}/${country}/`, function(error, response) {
        console.log(error);
        var results = response;
        console.log(results);
        if (results) {
            d3.select("#wine-selections").html(`${results}`);
        }
        else {
            d3.select("#wine-selections").html('error');
        }
    })

});
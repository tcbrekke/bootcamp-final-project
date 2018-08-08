var submitButton = document.getElementById("chooserEntry");
var variety_selection = document.getElementById("variety_selector");
var price_selection = document.getElementById("price_selector");
var region_selection = document.getElementById("region_selector");
var year_selection = document.getElementById("year_selector");
var country_selection = document.getElementById("country_selector");

d3.select(submitButton).on("mouseup", function() {
    variety = variety_selection.value;
    price = parseFloat(price_selection.value);
    region = region_selection.value;
    year = parseFloat(year_selection.value);
    country = country_selection.value;
    var outputDiv = d3.select("#wine-selections");
    outputDiv.selectAll("*").remove();
    // metadataDiv.append("text").text(`${year}`)
    
    d3.json(`/choice_score/${variety}/${price}/${region}/${year}/${country}/`, function(jsonData) {
        jsonData.forEach(function(d) {
            result = d;
        });
        outputDiv.append("text").text(
        `${result}`
        );
        console.log(result)
    })
});
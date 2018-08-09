var country_list = ['', 'France', 'Spain', 'US', 'Italy', 'Australia', 'Canada', 'Argentina'];

var populate_country_dropdown = d3.select("body").selectAll("#country-selector").selectAll("option").data(country_list).enter().append("option").text(function(d) {
	return d;
});

var cdd_value = d3.select("#country-selector").node().value; 

console.log(cdd_value);

document.getElementById("country-selector").addEventListener("change", function() {
	cdd_value = d3.select("#country-selector").node().value;
	console.log(cdd_value);
}, false);

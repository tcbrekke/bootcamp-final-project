//set initial variables

var text = document.getElementById("predictiontext").addEventListener("click", function() {
	text_value = d3.select("#predictiontext").node().value;
	console.log(text_value);
}, false);

function getText(value) {
    var text = value;
    update_plots(sample_id);
}

//build the query url from text that will be

function desc_predictor(text) {
    console.log(text)
    var text_url = '/description_score/' + text
    // d3.json(text_url, function(response) {
        
    
}
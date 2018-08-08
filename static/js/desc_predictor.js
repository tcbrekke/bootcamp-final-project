//set initial variables
var textBtn = document.querySelector("#textEntry");
var predictiontext = document.querySelector("#predictiontext");

// var text = document.getElementById("predictiontext").addEventListener("click", function() {
// 	text_value = d3.select("#predictiontext").node().value;
// 	console.log(text_value);
// }, false);

// function getText(value) {
//     var text = value;
//     update_plots(sample_id);
// }

//build the query url from text that will be

textBtn.addEventListener("click", desc_predictor, false);

function desc_predictor() {
    var text = predictiontext.value;
    console.log(text);
    text_url = '/description_score/' + text;

    d3.json(text_url, function(error, response) {
        console.log(error);
        var score = response;
        console.log(score);    
    });
}
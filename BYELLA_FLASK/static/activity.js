d3.select('#submit').on("click", function(){
  console.log('submit was clicked');
  year_input = document.getElementByName("Year").value;
  variety_input = document.getElementByName("Variety").value;
  price_input = document.getElementByName("Price").value;
  region_input = document.getElementByName("Region").value;
  country_input = document.getElementByName("Country").value;
  description_len_input = document.getElementByName("Description_Len").value;
})

console.log('waddup')
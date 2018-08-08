var year_list = ['choose', 1945, 1947, 1978, 1982, 1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017];

var populate_year_dropdown = d3.select("body").selectAll("#year-selector").selectAll("option").data(year_list).enter().append("option").text(function(d) {
	return d;
});

var year_value = d3.select("#year-selector").node().value; 

console.log(year_value);

document.getElementById("year-selector").addEventListener("change", function() {
	year_value = d3.select("#year-selector").node().value;
	console.log(year_value);
}, false);

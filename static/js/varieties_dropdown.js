var variety_list = ['choose', 'Abouriou', 'Aglianico', 'Airen', 'Albana', 'Albanello', 'Albariño', 'Albarossa', 'Aleatico', 'Alicante', 'Alicante Bouschet', 'Aligoté', 'Alsace white blend', 'Altesse', 'Alvarelhão', 'Alvarinho', 'Ansonica', 'Apple', 'Arneis', 'Asprinio', 'Auxerrois', 'Baco Noir', 'Barbera', 'Barbera-Nebbiolo', 'Biancale', 'Biancolella', 'Black Monukka', 'Black Muscat', 'Blanc du Bois', 'Blaufränkisch', 'Bobal', 'Bobal-Cabernet Sauvignon', 'Bombino Bianco', 'Bombino Nero', 'Bonarda', 'Bordeaux-style Red Blend', 'Bordeaux-style White Blend', 'Bovale', 'Brachetto', 'Braucol', 'Cabernet', 'Cabernet Blend', 'Cabernet Franc', 'Cabernet Franc-Cabernet Sauvignon', 'Cabernet Franc-Lemberger', 'Cabernet Franc-Malbec', 'Cabernet Franc-Merlot', 'Cabernet Merlot', 'Cabernet Pfeffer', 'Cabernet Sauvignon', 'Cabernet Sauvignon-Barbera', 'Cabernet Sauvignon-Cabernet Franc', 'Cabernet Sauvignon-Carmenère', 'Cabernet Sauvignon-Malbec', 'Cabernet Sauvignon-Merlot', 'Cabernet Sauvignon-Merlot-Shiraz', 'Cabernet Sauvignon-Sangiovese', 'Cabernet Sauvignon-Shiraz', 'Cabernet Sauvignon-Syrah', 'Cabernet Sauvignon-Tempranillo', 'Cabernet-Malbec', 'Cabernet-Shiraz', 'Cabernet-Syrah', 'Canaiolo', 'Cannonau', 'Caprettone', 'Carcajolu', 'Carignan', 'Carignan-Grenache', 'Carignan-Syrah', 'Carignane', 'Carignano', 'Carineña', 'Cariñena-Garnacha', 'Carmenère', 'Carricante', 'Casavecchia', 'Catalanesca', 'Catarratto', 'Cayuga', 'Centesimino', 'Cesanese', "Cesanese d'Affile", 'Chambourcin', 'Champagne Blend', 'Chancellor', 'Charbono', 'Chardonel', 'Chardonnay', 'Chardonnay-Albariño', 'Chardonnay-Pinot Blanc', 'Chardonnay-Riesling', 'Chardonnay-Sauvignon', 'Chardonnay-Sauvignon Blanc', 'Chardonnay-Semillon', 'Chardonnay-Viognier', 'Chasselas', 'Chelois', 'Chenin Blanc', 'Chenin Blanc-Chardonnay', 'Chenin Blanc-Viognier', 'Ciliegiolo', 'Cinsault', 'Clairette', 'Claret', 'Cococciola', 'Coda di Volpe', 'Colombard', 'Colombard-Sauvignon Blanc', 'Colombard-Ugni Blanc', 'Colorino', 'Cortese', 'Corvina', 'Corvina, Rondinella, Molinara', 'Counoise', 'Debit', 'Diamond', 'Dolcetto', 'Dornfelder', 'Doña Blanca', 'Duras', 'Durella', 'Durif', 'Edelzwicker', 'Erbaluce', 'Falanghina', 'Favorita', 'Fer Servadou', 'Fiano', 'Forcallà', 'Francisa', 'Franconia', 'Frappato', 'Freisa', 'Friulano', 'Fumé Blanc', 'G-S-M', 'Gaglioppo', 'Gamay', 'Gamay Noir', 'Garganega', 'Garnacha', 'Garnacha Blanca', 'Garnacha Blend', 'Garnacha Tintorera', 'Garnacha-Cabernet', 'Garnacha-Cariñena', 'Garnacha-Monastrell', 'Garnacha-Syrah', 'Garnacha-Tempranillo', 'Gewürztraminer', 'Gewürztraminer-Riesling', 'Glera', 'Godello', 'Graciano', 'Gragnano', 'Grecanico', 'Grechetto', 'Greco', 'Greco Bianco', 'Grenache', 'Grenache Blanc', 'Grenache Blend', 'Grenache Gris', 'Grenache Noir', 'Grenache-Carignan', 'Grenache-Mourvèdre', 'Grenache-Shiraz', 'Grenache-Syrah', 'Grignolino', 'Grillo', 'Grolleau', 'Groppello', 'Gros Manseng', 'Gros and Petit Manseng', 'Grüner Veltliner', 'Hondarrabi Zuri', 'Incrocio Manzoni', 'Insolia', 'Inzolia', 'Jacquez', 'Jacquère', 'Jaen', 'Johannisberg Riesling', 'Kerner', 'Lagrein', 'Lambrusco', 'Lambrusco Grasparossa', 'Lambrusco Salamino', 'Lambrusco di Sorbara', 'Lemberger', 'Listán Negro', "Loin de l'Oeil", 'Macabeo', 'Macabeo-Chardonnay', 'Macabeo-Moscatel', 'Madeira Blend', 'Madeleine Angevine', 'Magliocco', 'Malbec', 'Malbec Blend', 'Malbec-Bonarda', 'Malbec-Cabernet', 'Malbec-Cabernet Franc', 'Malbec-Cabernet Sauvignon', 'Malbec-Merlot', 'Malbec-Petit Verdot', 'Malbec-Syrah', 'Malbec-Tannat', 'Malbec-Tempranillo', 'Malvar', 'Malvasia', 'Malvasia Bianca', 'Malvasia Istriana', 'Malvasia Nera', 'Malvasia di Candia', 'Malvasia-Viura', 'Mansois', 'Mantonico', 'Manzoni', 'Marquette', 'Marsanne', 'Marsanne-Roussanne', 'Marsanne-Viognier', 'Marselan', 'Marzemino', 'Mataro', 'Maturana', 'Mauzac', 'Mazuelo', 'Melon', 'Mencía', 'Meritage', 'Merlot', 'Merlot-Cabernet', 'Merlot-Cabernet Franc', 'Merlot-Cabernet Sauvignon', 'Merlot-Grenache', 'Merlot-Malbec', 'Merlot-Petite Verdot', 'Merlot-Tannat', 'Merseguera-Sauvignon Blanc', 'Meseguera', 'Mission', 'Molinara', 'Monastrell', 'Monastrell-Petit Verdot', 'Monastrell-Syrah', 'Mondeuse', 'Monica', 'Montepulciano', 'Morio Muskat', 'Moscadello', 'Moscatel', 'Moscatel de Alejandría', 'Moscato', 'Moscato Giallo', 'Moscato Rosa', 'Moscato di Noto', 'Mourvèdre', 'Mourvèdre-Syrah', 'Muscadel', 'Muscadelle', 'Muscadine', 'Muscat', 'Muscat Blanc', 'Muscat Blanc à Petits Grains', 'Muscat Canelli', 'Muscat Hamburg', "Muscat d'Alexandrie", 'Muscat of Alexandria', 'Muskat', 'Muskat Ottonel', 'Müller-Thurgau', 'Nascetta', 'Nasco', 'Nebbiolo', 'Negrette', 'Negroamaro', 'Nerello Cappuccio', 'Nerello Mascalese', "Nero d'Avola", 'Nero di Troia', 'Nielluciu', 'Norton', 'Nosiola', 'Nuragus', 'Orange Muscat', 'Pallagrello', 'Pallagrello Bianco', 'Pallagrello Nero', 'Palomino', 'Pansa Blanca', 'Paralleda', 'Parraleta', 'Passerina', 'Pecorino', 'Pedro Ximénez', 'Perricone', 'Petit Courbu', 'Petit Manseng', 'Petit Verdot', 'Petite Sirah', 'Petite Verdot', 'Picapoll', 'Picolit', 'Picpoul', 'Piedirosso', 'Pigato', 'Pignoletto', 'Pignolo', 'Pinot Auxerrois', 'Pinot Bianco', 'Pinot Blanc', 'Pinot Blanc-Chardonnay', 'Pinot Blanc-Pinot Noir', 'Pinot Blanc-Viognier', 'Pinot Grigio', 'Pinot Grigio-Sauvignon Blanc', 'Pinot Gris', 'Pinot Gris-Gewürztraminer', 'Pinot Meunier', 'Pinot Nero', 'Pinot Noir', 'Pinot Noir-Gamay', 'Pinot Noir-Syrah', 'Pinot-Chardonnay', 'Pinotage', 'Piquepoul Blanc', 'Port', 'Poulsard', 'Premsal', 'Prieto Picudo', 'Primitivo', 'Prié Blanc', 'Prosecco', 'Provence red blend', 'Provence white blend', 'Prugnolo Gentile', 'Prunelard', 'Pugnitello', 'Raboso', 'Rebo', 'Red Blend', 'Refosco', 'Rhône-style Red Blend', 'Rhône-style White Blend', 'Ribolla Gialla', 'Riesling', 'Riesling-Chardonnay', 'Rkatsiteli', 'Rolle', 'Romorantin', 'Rosado', 'Rosato', 'Rosé', 'Roussanne', 'Roussanne-Grenache Blanc', 'Roussanne-Marsanne', 'Roussanne-Viognier', 'Roviello', 'Ruché', 'Rufete', 'Sacy', 'Sagrantino', 'Sangiovese', 'Sangiovese Cabernet', 'Sangiovese Grosso', 'Sangiovese-Cabernet Sauvignon', 'Sangiovese-Syrah', 'Saperavi', 'Sauvignon', 'Sauvignon Blanc', 'Sauvignon Blanc-Chardonnay', 'Sauvignon Blanc-Semillon', 'Sauvignon Blanc-Verdejo', 'Sauvignon Gris', 'Sauvignon Musqué', 'Sauvignon-Sémillon', 'Savagnin', 'Scheurebe', 'Schiava', 'Sciaccerellu', 'Semillon-Chardonnay', 'Semillon-Sauvignon Blanc', 'Seyval Blanc', 'Sherry', 'Shiraz', 'Shiraz-Cabernet', 'Shiraz-Cabernet Sauvignon', 'Shiraz-Grenache', 'Shiraz-Malbec', 'Shiraz-Mourvèdre', 'Shiraz-Roussanne', 'Shiraz-Tempranillo', 'Shiraz-Viognier', 'Siegerrebe', 'Silvaner', 'Sirica', 'Souzao', 'Sparkling Blend', 'St. Vincent', 'Susumaniello', 'Sylvaner', 'Symphony', 'Syrah', 'Syrah-Bonarda', 'Syrah-Cabernet', 'Syrah-Cabernet Franc', 'Syrah-Cabernet Sauvignon', 'Syrah-Carignan', 'Syrah-Grenache', 'Syrah-Grenache-Viognier', 'Syrah-Malbec', 'Syrah-Merlot', 'Syrah-Mourvèdre', 'Syrah-Petit Verdot', 'Syrah-Petite Sirah', 'Syrah-Tempranillo', 'Syrah-Viognier', 'Sémillon', 'Tannat', 'Tannat-Cabernet', 'Tannat-Cabernet Franc', 'Tannat-Merlot', 'Tannat-Syrah', 'Tempranillo', 'Tempranillo Blanco', 'Tempranillo Blend', 'Tempranillo-Cabernet Sauvignon', 'Tempranillo-Garnacha', 'Tempranillo-Merlot', 'Tempranillo-Shiraz', 'Tempranillo-Syrah', 'Teroldego', 'Teroldego Rotaliano', 'Timorasso', 'Tinta Amarela', 'Tinta Fina', 'Tinta Madeira', 'Tinta de Toro', 'Tinta del Pais', 'Tinta del Toro', 'Tintilia ', 'Tinto Fino', 'Tinto Velasco', 'Tinto del Pais', 'Tocai', 'Tocai Friulano', 'Tokay', 'Tokay Pinot Gris', 'Torbato', 'Torrontés', 'Touriga', 'Touriga Nacional', 'Touriga Nacional Blend', 'Traminer', 'Traminette', 'Trebbiano', 'Trebbiano Spoletino', 'Trebbiano di Lugana', 'Treixadura', 'Trepat', 'Trousseau', 'Trousseau Gris', 'Turbiana', 'Ugni Blanc', 'Ugni Blanc-Colombard', 'Uva di Troia', 'Uvalino', 'Valdiguié', 'Valvin Muscat', 'Veltliner', 'Verdeca', 'Verdejo', 'Verdejo-Sauvignon Blanc', 'Verdejo-Viura', 'Verdelho', 'Verdicchio', 'Verdil', 'Verdosilla', 'Verduzzo', 'Verduzzo Friulano ', 'Vermentino', 'Vermentino Nero', 'Vernaccia', 'Vespaiolo', 'Vespolina', 'Vidadillo', 'Vidal', 'Vidal Blanc', 'Vignoles', 'Viognier', 'Viognier-Chardonnay', 'Viognier-Gewürztraminer', 'Viognier-Grenache Blanc', 'Viognier-Marsanne', 'Viognier-Roussanne', 'Viognier-Valdiguié', 'Vitovska', 'Viura', 'Viura-Chardonnay', 'Viura-Verdejo', 'White Blend', 'White Port', 'White Riesling', 'Xarel-lo', 'Zibibbo', 'Zinfandel', 'Zweigelt'];

var populate_varieties_dropdown = d3.select("body").selectAll("#variety-selector").selectAll("option").data(variety_list).enter().append("option").text(function(d) {
	return d;
});

var vdd_value = d3.select("#variety-selector").node().value; 

console.log(vdd_value);

document.getElementById("variety-selector").addEventListener("change", function() {
	vdd_value = d3.select("#variety-selector").node().value;
	console.log(vdd_value);
}, false);

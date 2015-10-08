window.onload = function() {
	// replacing unicode character u2764 (heart) with an "image" until assistive technology supports unicode characters
	var listOfGistMetas = document.getElementsByClassName("gist-meta");

	for (var i=0; i < listOfGistMetas.length; i++) {
		var originalString = listOfGistMetas[i].innerHTML;
		var changedString = originalString.replace(' \u2764 ', " <span role='img' aria-label='love'>\u2764</span> ");
		listOfGistMetas[i].innerHTML = changedString;
	}
	
	// adding role="presentation" to the embedded gist's layout table
	var listOfGistTables = document.querySelectorAll("table.js-file-line-container");
	
	for (var i=0; i < listOfGistTables.length; i++) {
		var originalTable = listOfGistTables[i];
		originalTable.setAttribute("role","presentation");
	}
}



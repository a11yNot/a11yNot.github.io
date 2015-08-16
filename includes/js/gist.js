// replacing unicode character u2764 (heart) with an "image" until assistive technology supports unicode characters
window.onload = function() {
	var listOfGistMetas = document.getElementsByClassName("gist-meta");

	for (var i=0; i < listOfGistMetas.length; i++) {
		var originalString = listOfGistMetas[i].innerHTML;
		var changedString = originalString.replace(' \u2764 ', " <span role='img' aria-label='love'>\u2764</span> ");
		listOfGistMetas[i].innerHTML = changedString;
	}
}
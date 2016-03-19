$(function() {

	// title animation
	var titleElem = $("div#title");
	var title = titleElem.text();
	var titleIndex = 0;
	titleElem.empty();
	var t = setInterval(function() {
		titleElem.append(title.charAt(titleIndex++));
		if(titleIndex == title.length)
			t.clearInterval();
	}, 100);

});

$(function() {

	// add meta tags
	var metas = `
	<meta charset="utf-8" />
	<meta name="description" content="The official website for the Barlow Programming team" />
	<meta name="keywords" content="joel barlow, barlow, jbhs, programming, coding" />
	<meta name="author" content="Jonathan Lam <jlam55555@gmail.com>" />
	<link rel="icon" type="img/x-icon" href="favicon.ico" />
	<link rel="stylesheet" type="text/css" href="style.css" />
	`;
	$("head").append(metas);

	// add header
	var header = `
	<div id="header">
		<div id="title">JBHS Programming Team</div>	
		<nav id="links">
			<a class="animate" href="/">Home</a>
			<a class="animate" href="projects.html">Projects</a>
			<a class="animate" href="team.html">Team</a>
			<a class="animate" href="contact.html">Contact</a>
		</nav>
	</div>
	`;
	$("body").prepend(header);

	// title animation
	var titleElem = $("div#title");
	var title = titleElem.text();
	var titleIndex = 0;
	titleElem.empty();
	var t = setInterval(function() {
		titleElem.append(title.charAt(titleIndex++));
		if(titleIndex == title.length)
			clearInterval(t);
	}, 100);

});

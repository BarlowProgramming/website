$(function() {

	// add meta tags
	var metas = `
	<meta charset="utf-8" />
	<meta name="description" content="The official website for the Barlow Programming team" />
	<meta name="keywords" content="joel barlow, barlow, jbhs, programming, coding" />
	<meta name="author" content="Jonathan Lam <jlam55555@gmail.com>" />
	<link rel="icon" type="img/x-icon" href="favicon.ico" />
	<link rel="stylesheet" type="text/css" href="style.css" />
	<link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Montserrat:400,700" />
	`;
	$("head").append(metas);

	// add header
	var links = `
		<a class="animate" href="/">Home</a>
		<a class="animate" href="/projects.html">Projects</a>
		<a class="animate" href="/team.html">Team</a>
		<a class="animate" href="/contact.html">Contact</a>	
	`;
	var header = `
	<div id="header">
		<div id="title">JBHS Programming Club</div>	
		<nav id="links">
	` + links + `
		</nav>
	</div>
	`;
	$("body").prepend(header);

	// title animation (only if cookie has not been set)
	if(!/visited=1/.test(document.cookie)) {
		var titleElem = $("div#title");
		var title = titleElem.text();
		var titleIndex = 0;
		titleElem.empty();
		var t = setInterval(function() {
			titleElem.append(title.charAt(titleIndex++));
			if(titleIndex == title.length)
				clearInterval(t);
		}, 100);
		document.cookie = "visited=1";
	} else {
		$("div#title").addClass("nodelay");
	}
	
	// change current link
	$("nav#links > a[href='" + window.location.pathname + "']").text("current");	

	// change page contents without load if pointing to own website
	$(document).on("click", "nav#links > a", function(e) {
		var href = $(this).attr("href");
		$("div#container").load(href + " div#container");
		$.get(href, function(data) {
			$("title").text(/<title>(.+?)<\/title>/.exec(data)[1]);
		});
		$("nav#links").html(links);
		window.history.pushState("", "", href);
		console.log(window.location.pathname);
		$("nav#links > a[href='" + window.location.pathname + "']").text("current");	
		e.preventDefault();
	});

});

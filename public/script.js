$(function() {

	// add meta tags
	var metas = `
	<meta charset="utf-8" />
	<meta name="description" content="The official website for the Barlow Programming team" />
	<meta name="keywords" content="joel barlow, barlow, jbhs, programming, coding" />
	<meta name="author" content="Jonathan Lam <jlam55555@gmail.com>" />
	<link rel="icon" type="img/x-icon" href="favicon.ico" />
	<link rel="stylesheet" type="text/css" href="style.css" />
	<link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Open+Sans:400,700,400italic" />
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
		$("div#title").addClass("noDelay");
	}
	
	// change current link
	var highlightCurrent = function() {
		var current = $("nav#links > a[href='" + window.location.pathname + "']");
		current.addClass("currentPage");
		current.removeAttr("href");
	};
	highlightCurrent();

	// change page contents without load if pointing to own website
	$(document).on("click", "nav#links > a", function(e) {
		var href = $(this).attr("href");
		$("div#container").load(href + " div#container > *", function() {
			// call resizeFunction() just in case formatting needs to happen
			resizeFunction();
		});
		// GET request for title because load() cannot do it (why?)
		$.get(href, function(data) {
			$("title").text(/<title>(.+?)<\/title>/.exec(data)[1]);
		});
		$("nav#links").html(links);
		// change URL without refresh
		window.history.pushState("", "", href);
		highlightCurrent();	
		e.preventDefault();
	});

	// functions to do on resize (and load)
	var resizeFunction = function() {
		var winHeight = $(window).height();
		var winWidth = $(window).width();
		// auto-set height of introduction piece in index.html
		// window.innerHeight is necessary here, instead of $(window).height
		// because it doesn't factor in scrollbars, which may mess with it on the initial load
		$("div#introduction").css({height: window.innerHeight-150});
	};
	$(window).resize(resizeFunction).resize();

});

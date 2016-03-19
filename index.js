var app = require("express")();

app.get("/", function(req, res) {
	res.sendFile(__dirname + "/public/" + req.url);
});

app.listen(process.env.PORT || 5000);

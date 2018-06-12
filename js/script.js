$(document).ready(function () {
	chooseColor();
	getQuote();
	var randomQuote;
	var author;

	function getQuote() {
		var url = "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?";
		$.getJSON(url, function (data) {
			
			randomQuote = data.quoteText;
			author = data.quoteAuthor;
			$("#quote-content").html(randomQuote);
			
			if (author == "") {
				$("#author").html("- Unknown");
			}
			else {
				$("#author").html("- " + author);
			}
		});
	};

	function chooseColor() {
		var colorArray = ['#FF1744', '#3D5AFE', '#009688', '#0097A7', '#43A047', '#FF6E40', '#546E7A', '#8D6E63', '#EF6C00', '#00B8D4', '#1DE9B6', '#5C6BC0', '#E040FB'];
		var randomColor = colorArray[Math.floor(Math.random() * colorArray.length)];
		$('body').css('background-color', randomColor);
		$('button').css('background-color', randomColor);
		$('.info').css('color', randomColor);
	};
	
	$("#facebook").on("click", function () {
		window.open("https://www.facebook.com");
	});
	
	$("#tweet").on("click", function () {
		window.open("https://twitter.com/intent/tweet?text=" + '"' + randomQuote + '" - ' + author);
	});
	$("#new-btn").on("click", function () {
		getQuote();
		chooseColor();
	});
});
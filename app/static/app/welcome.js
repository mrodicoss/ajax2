$(document).ready(function() {
	setTimeout(function(){
	$.ajax({ //procitati dokumentaciju ajax property-a
		type: "GET", //posalji request tipa get na welcome
		url: "/ajax",
		success: function(data) {
  			$("#html_string").html(data.template) //dohvaacnje dom elementa po id-u, a class bi dohvatili sa tockom (.podaci)
			//console.log(data);
		},
		error: function(xhr, errmessage, err) {
			console.log("error")
		}
	});
	}, 2000);
});
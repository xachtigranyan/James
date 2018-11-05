$(document).ready(function() {
	filterSelection("all");

	$("#bars li .bar").each(function() {
		var percentage = $(this).data("percentage");

		$(this).animate({
			height: percentage + "%"
		}, 2000);
	});

	$('#myBtnContainer li button').click(function(){
		$('.btns').removeClass("active-btn");
		$(this).addClass("active-btn");
	});

	$("#menu").click(function() {
		console.log("menu clicked");
		$("#menuToggle input").prop("checked", false);
	});

	$("#rangeValue").text($("#myRange").val());
});

function imgAddClass(element, name) {
	var i, arr1, arr2;
	arr1 = element.className.split(" ");
	arr2 = name.split(" ");
	for (i = 0; i < arr2.length; i++) {
		if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
	}
}

function imgRemoveClass(element, name) {
	var i, arr1, arr2;
	arr1 = element.className.split(" ");
	arr2 = name.split(" ");
	for (i = 0; i < arr2.length; i++) {
		while (arr1.indexOf(arr2[i]) > -1) {
			arr1.splice(arr1.indexOf(arr2[i]), 1);     
		}
	}
	element.className = arr1.join(" ");
}

function filterSelection(c) {
	var x, i;
	x = document.getElementsByClassName("column");
	if (c == "all") c = "";
	for (i = 0; i < x.length; i++) {
		imgRemoveClass(x[i], "show");
		if (x[i].className.indexOf(c) > -1) imgAddClass(x[i], "show");
	}
}

function myFunction(val) {
	document.getElementById("rangeValue").innerHTML = val;
}

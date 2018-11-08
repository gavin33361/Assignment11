$(document).ready(function() {
	function addTask(){
		var task = $("#input").val();
		if (task!=""){
			$("ul").append("<li>"+task+"<button class='close'>X</button></li>");
		}
		else {
			alert("Please enter a task!");
		}
	}

	$("#add").click(function(){
		addTask();
	});

	$("#schedule").on("click", ".close", function(){
		$(this).closest("li").remove();
	})

	function clearList(){
		var list = document.getElementById("schedule");
		while (list.firstChild) {
			list.removeChild(list.firstChild);
		}
	}

	$("#del").click(function(){
		clearList();
	});

	$("#schedule").on("click", "li", function(){
		var index;
		index = $("li").index(this);
		var text = $("li")[index].innerHTML;
		if (!(text.includes("<strike>"))){
			$("li")[index].innerHTML = "<strike>" + text + "</strike>";}
			else {
				text = text.substring(8, text.length-9);
				$("li")[index].innerHTML = text;
			}
		});
})
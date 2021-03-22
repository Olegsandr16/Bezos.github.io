function changeInput(value){
	var timeline = document.getElementById("time_pane");
	timeline.style.transition = "right 1s ease-out 0s";
	timeline.style.right = value;
	
}
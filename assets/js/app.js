// alert('ok');

var cl = console.log;


var days1 = document.getElementById("day");
var hr1 = document.getElementById("hr");
var min1 = document.getElementById("min");
var sec1 = document.getElementById("sec");

function settime(){
	var currdate = new Date();
	cl(currdate);
	
	var bdate = new Date(2022,10,17);
	cl(bdate);
	
	var diff = bdate.getTime() - currdate.getTime();
	cl(diff);
	
	
	var days = Math.floor(diff/(1000*60*60*24));
	var hours = Math.floor((diff%(1000*60*60*24))/(1000*60*60));
	var minutes = Math.floor((diff%(1000*60*60))/(1000*60));
	var seconds = Math.floor((diff%(1000*60))/(1000));
	
	if(hours < 10){
		hours = "0" + hours;
	}
	if(minutes < 10){
		minutes = "0" + minutes;
	}
	if(seconds < 10){
		seconds = "0" + seconds;
	}
	
	
	
	days1.innerHTML = days;
	hr1.innerHTML = hours;
	min1.innerHTML = minutes;
	sec1.innerHTML = seconds;
	
	setTimeout(timer, 1000);
	
}

settime();
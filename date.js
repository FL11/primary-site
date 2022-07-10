function displayDate() {
	var dateObject = new Date();
	
	var month = [
	  "January", "February", "March", "April", "May", "June",
	  "July", "August", "September", "October", "November", "December"
	];
	
	var date = dateObject.getDate();
	var year = dateObject.getFullYear();
	
	document.getElementById('date_today').innerHTML = "Hi! Today is " + month[dateObject.getMonth()] + " " + date + ", " + year + ".";
}
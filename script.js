/* ======================================================================
  Author Custom JavaScript
====================================================================== */
// Loop through Array of Objects

var objPeople = [
	{ // Object @ 0 index
		password: "itz_taj:Bluemoon23"
	}
]

function getInfo() {
	var password = document.getElementById('key').value

	for(var i = 0; i < objPeople.length; i++) {
		// check is user input matches username and password of a current index of the objPeople array
		if(password == objPeople[i].password) {
			console.log(password + " logging in...")
            window.location.replace("private/index.html")
			// stop the function if this is found to be true
			return
		}
	}
	console.log("incorrect key")
    alert("Incorrect key entered... Please recheck your key or ask the administrator for a reset or new one.")
}
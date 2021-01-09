var objPeople = [ //preset user names and passwords in an object array
	{ //0
		username: "DANA",
		password: "ah"
	},
	{ //1
		username: "Adalia",
		password: "1234"
	},
	{ //2
		username: "Emily",
		password: "5678"
	},
	{ //3
		username: "mater",
		password: "cars"
	}
]

function getInfo() { //log in functon 
	var username = document.getElementById('username').value
	var password = document.getElementById('password').value 

	for (var i = 0; i < objPeople.length; i++) {
		if (username == objPeople[i].username && password == objPeople[i].password  && i != 0) { //check usernam and password 
			// if username and password match and the username is not first in the array go to the student pages
			console.log(username + " is logged in!!!")
			localStorage.setItem("usernameLog", objPeople[i].username);
			window.location.href = "studentVoting.html";
			return
		} else if (username == objPeople[i].username && password == objPeople[i].password && i == 0) {
			// if username and password match and the username is first in the array go to the DANA pages
			window.location.href = "danaVoting.html";
			return
		} else {
			//do not log in if username and password don't match
			document.getElementById("demo").innerHTML = "Incorrect Username or Password ";
		}
	}
}

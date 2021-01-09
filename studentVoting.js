var pClick = [
	{ //0
		username: "Adalia",
		click: false
	},
	{ //1
		username: "Emily",
		click: false
	},
	{ //3
		username: "mater",
		click: false
	}
] //something i was working on but never got finished


//declare variables (most are attaching themselves to an element in the html studentVoting code)
var user = localStorage.getItem("usernameLog");
var mb = document.getElementById("monBowl");
var tub = document.getElementById("tuesBowl");
var wb = document.getElementById("wedBowl");
var thb = document.getElementById("thursBowl");
var fb = document.getElementById("friBowl");

var ms = document.getElementById("monSoup");
var tus = document.getElementById("tuesSoup");
var ws = document.getElementById("wedSoup");
var ths = document.getElementById("thursSoup");
var fs = document.getElementById("friSoup");

var mh = document.getElementById("monHot");
var tuh = document.getElementById("tuesHot");
var wh = document.getElementById("wedHot");
var thh = document.getElementById("thursHot");
var fh = document.getElementById("friHot");

var mv = document.getElementById("monVeg");
var tuv = document.getElementById("tuesVeg");
var wv = document.getElementById("wedVeg");
var thv = document.getElementById("thursVeg");
var fv = document.getElementById("friVeg");

var mp = document.getElementById("monPizza");
var tup = document.getElementById("tuesPizza");
var wp = document.getElementById("wedPizza");
var thp = document.getElementById("thursPizza");
var fp = document.getElementById("friPizza");
var cc = document.getElementById("cantClick");

var mondayisclick = false;
var tuesdayisclick = false;
var wednesdayisclick = false;
var thursdayisclick = false;
var fridayisclick = false;

let menuStatsCollection = JSON.parse(localStorage.getItem("menuStatsCollection"));


function putVals() { //populates the table with the meals set by dana

    mb.innerHTML = localStorage.getItem("MonBowlOption");
    tub.innerHTML = localStorage.getItem("TuesBowlOption");
    wb.innerHTML = localStorage.getItem("WedBowlOption");
    thb.innerHTML = localStorage.getItem("ThursBowlOption");
    fb.innerHTML = localStorage.getItem("FriBowlOption");

    ms.innerHTML = localStorage.getItem("MonSoupOp");
    tus.innerHTML = localStorage.getItem("TuesSoupOp");
    ws.innerHTML = localStorage.getItem("WedSoupOp");
    ths.innerHTML = localStorage.getItem("ThursSoupOp");
    fs.innerHTML = localStorage.getItem("FriSoupOp");

    mh.innerHTML = localStorage.getItem("MonHotOp");
    tuh.innerHTML = localStorage.getItem("TuesHotOp");
    wh.innerHTML = localStorage.getItem("WedHotOp");
    thh.innerHTML = localStorage.getItem("ThursHotOp");
    fh.innerHTML = localStorage.getItem("FriHotOp");

    mv.innerHTML = localStorage.getItem("MonVegOp");
    tuv.innerHTML = localStorage.getItem("TuesVegOp");
    wv.innerHTML = localStorage.getItem("WedVegOp");
    thv.innerHTML = localStorage.getItem("ThursVegOp");
    fv.innerHTML = localStorage.getItem("FriVegOp");

    mp.innerHTML = localStorage.getItem("MonPizzaOp");
    tup.innerHTML = localStorage.getItem("TuesPizzaOp");
    wp.innerHTML = localStorage.getItem("WedPizzaOp");
    thp.innerHTML = localStorage.getItem("ThursPizzaOp");
    fp.innerHTML = localStorage.getItem("FriPizzaOp");
}

function voteMS() { // voting function (1 per meal per day)
    if (mondayisclick) {
        cc.innerHTML = "You already voted for Monday!"; //doesn't allow for a student to repeat a vote if they already voted for a meal
    } else {
        cc.innerHTML = " "; //resets the inner html of the "you already voted" area
        for (let a = 0; a < menuStatsCollection.length; a++) {
            if (ms.innerHTML === menuStatsCollection[a].id) {
                menuStatsCollection[a].week = menuStatsCollection[a].week + 1; //adds one vote to the object array when clicked
                console.log(menuStatsCollection[a].week);
                localStorage.setItem("menuStatsCollection", JSON.stringify(menuStatsCollection)); //pushing the updated info to local storage
            }
        }
        mondayisclick = true; //will now be unable to vote again on monday
    }
}
//the above function is repeated with slight variation multiple more times
function voteTUS() {
    cc.innerHTML = " ";
    if (tuesdayisclick) {
        cc.innerHTML = "You already voted for Tuesday!";
    } else {
        for (let a = 0; a < menuStatsCollection.length; a++) {
            if (tus.innerHTML === menuStatsCollection[a].id) {
                menuStatsCollection[a].week = menuStatsCollection[a].week + 1;
                console.log(menuStatsCollection[a].week);
                localStorage.setItem("menuStatsCollection", JSON.stringify(menuStatsCollection));
            }
        }
        tuesdayisclick = true;
    }
}

function voteWS() {
    cc.innerHTML = " ";
    if (wednesdayisclick) {
        cc.innerHTML = "You already voted for Wednesday!";
    } else {
        for (let a = 0; a < menuStatsCollection.length; a++) {
            if (ws.innerHTML === menuStatsCollection[a].id) {
                menuStatsCollection[a].week = menuStatsCollection[a].week + 1;
                console.log(menuStatsCollection[a].week);
                localStorage.setItem("menuStatsCollection", JSON.stringify(menuStatsCollection));
            }
        }
        wednesdayisclick = true;
    }
}

function voteTHS() {
    cc.innerHTML = " ";
    if (thursdayisclick) {
        cc.innerHTML = "You already voted for Thursday!";
    } else {
        for (let a = 0; a < menuStatsCollection.length; a++) {
            if (ths.innerHTML === menuStatsCollection[a].id) {
                menuStatsCollection[a].week = menuStatsCollection[a].week + 1;
                console.log(menuStatsCollection[a].week);
                localStorage.setItem("menuStatsCollection", JSON.stringify(menuStatsCollection));
            }
        }
        thursdayisclick = true;
    }
}

function voteFS() {
    cc.innerHTML = " ";
    if (fridayisclick) {
        cc.innerHTML = "You already voted for Friday!";
    } else {
        for (let a = 0; a < menuStatsCollection.length; a++) {
            if (fs.innerHTML === menuStatsCollection[a].id) {
                menuStatsCollection[a].week = menuStatsCollection[a].week + 1;
                console.log(menuStatsCollection[a].week);
                localStorage.setItem("menuStatsCollection", JSON.stringify(menuStatsCollection));
            }
        }
        fridayisclick = true;
    }
}

function voteMB() {
    cc.innerHTML = " ";
    if (mondayisclick) {
        cc.innerHTML = "You already voted for Monday!";
    } else {
        for (let a = 0; a < menuStatsCollection.length; a++) {
            if (mb.innerHTML === menuStatsCollection[a].id) {
                menuStatsCollection[a].week = menuStatsCollection[a].week + 1;
                console.log(menuStatsCollection[a].week);
                localStorage.setItem("menuStatsCollection", JSON.stringify(menuStatsCollection));
            }
        }
        mondayisclick = true;
    }
}

function voteTUB() {
    cc.innerHTML = " ";
    if (tuesdayisclick) {
        cc.innerHTML = "You already voted for Tuesday!";
    } else {
        for (let a = 0; a < menuStatsCollection.length; a++) {
            if (tub.innerHTML === menuStatsCollection[a].id) {
                menuStatsCollection[a].week = menuStatsCollection[a].week + 1;
                console.log(menuStatsCollection[a].week);
                localStorage.setItem("menuStatsCollection", JSON.stringify(menuStatsCollection));
            }
        }
        tuesdayisclick = true;
    }
}

function voteWB() {
    cc.innerHTML = " ";
    if (wednesdayisclick) {
        cc.innerHTML = "You already voted for Wednesday!";
    } else {
        for (let a = 0; a < menuStatsCollection.length; a++) {
            if (wb.innerHTML === menuStatsCollection[a].id) {
                menuStatsCollection[a].week = menuStatsCollection[a].week + 1;
                console.log(menuStatsCollection[a].week);
                localStorage.setItem("menuStatsCollection", JSON.stringify(menuStatsCollection));
            }
        }
        wednesdayisclick = true;
    }
}

function voteTHB() {
    cc.innerHTML = " ";
    if (thursdayisclick) {
        cc.innerHTML = "You already voted for Thursday!";
    } else {
        for (let a = 0; a < menuStatsCollection.length; a++) {
            if (thb.innerHTML === menuStatsCollection[a].id) {
                menuStatsCollection[a].week = menuStatsCollection[a].week + 1;
                console.log(menuStatsCollection[a].week);
                localStorage.setItem("menuStatsCollection", JSON.stringify(menuStatsCollection));
            }
        }
        thursdayisclick = true;
    }
}

function voteFB() {
    cc.innerHTML = " ";
    if (fridayisclick) {
        cc.innerHTML = "You already voted for Friday!";
    } else {
        for (let a = 0; a < menuStatsCollection.length; a++) {
            if (fb.innerHTML === menuStatsCollection[a].id) {
                menuStatsCollection[a].week = menuStatsCollection[a].week + 1;
                console.log(menuStatsCollection[a].week);
                localStorage.setItem("menuStatsCollection", JSON.stringify(menuStatsCollection));
            }
        }
        fridayisclick = true;
    }
}

function voteMH() {
    cc.innerHTML = " ";
    if (mondayisclick) {
        cc.innerHTML = "You already voted for Monday!";
    } else {
        for (let a = 0; a < menuStatsCollection.length; a++) {
            if (mh.innerHTML === menuStatsCollection[a].id) {
                menuStatsCollection[a].week = menuStatsCollection[a].week + 1;
                console.log(menuStatsCollection[a].week);
                localStorage.setItem("menuStatsCollection", JSON.stringify(menuStatsCollection));
            }
        }
        mondayisclick = true;
    }
}

function voteTUH() {
    cc.innerHTML = " ";
    if (tuesdayisclick) {
        cc.innerHTML = "You already voted for Tuesday!";
    } else {
        for (let a = 0; a < menuStatsCollection.length; a++) {
            if (tuh.innerHTML === menuStatsCollection[a].id) {
                menuStatsCollection[a].week = menuStatsCollection[a].week + 1;
                console.log(menuStatsCollection[a].week);
                localStorage.setItem("menuStatsCollection", JSON.stringify(menuStatsCollection));
            }
        }
        tuesdayisclick = true;
    }
}

function voteWH() {
    cc.innerHTML = " ";
    if (wednesdayisclick) {
        cc.innerHTML = "You already voted for Wednesday!";
    } else {
        for (let a = 0; a < menuStatsCollection.length; a++) {
            if (wh.innerHTML === menuStatsCollection[a].id) {
                menuStatsCollection[a].week = menuStatsCollection[a].week + 1;
                console.log(menuStatsCollection[a].week);
                localStorage.setItem("menuStatsCollection", JSON.stringify(menuStatsCollection));
            }
        }
        wednesdayisclick = true;
    }
}

function voteTHH() {
    cc.innerHTML = " ";
    if (thursdayisclick) {
        cc.innerHTML = "You already voted for Thursday!";
    } else {
        for (let a = 0; a < menuStatsCollection.length; a++) {
            if (thh.innerHTML === menuStatsCollection[a].id) {
                menuStatsCollection[a].week = menuStatsCollection[a].week + 1;
                console.log(menuStatsCollection[a].week);
                localStorage.setItem("menuStatsCollection", JSON.stringify(menuStatsCollection));
            }
        }
        thursdayisclick = true;
    }
}

function voteFH() {
    cc.innerHTML = " ";
    if (fridayisclick) {
        cc.innerHTML = "You already voted for Friday!";
    } else {
        for (let a = 0; a < menuStatsCollection.length; a++) {
            if (fh.innerHTML === menuStatsCollection[a].id) {
                menuStatsCollection[a].week = menuStatsCollection[a].week + 1;
                console.log(menuStatsCollection[a].week);
                localStorage.setItem("menuStatsCollection", JSON.stringify(menuStatsCollection));
            }
        }
        fridayisclick = true;
    }
}

function voteMV() {
    cc.innerHTML = " ";
    if (mondayisclick) {
        cc.innerHTML = "You already voted for Monday!";
    } else {
        for (let a = 0; a < menuStatsCollection.length; a++) {
            if (mv.innerHTML === menuStatsCollection[a].id) {
                menuStatsCollection[a].week = menuStatsCollection[a].week + 1;
                console.log(menuStatsCollection[a].week);
                localStorage.setItem("menuStatsCollection", JSON.stringify(menuStatsCollection));
            }
        }
        mondayisclick = true;
    }
}

function voteTUV() {
    cc.innerHTML = " ";
    if (tuesdayisclick) {
        cc.innerHTML = "You already voted for Tuesday!";
    } else {
        for (let a = 0; a < menuStatsCollection.length; a++) {
            if (tuv.innerHTML === menuStatsCollection[a].id) {
                menuStatsCollection[a].week = menuStatsCollection[a].week + 1;
                console.log(menuStatsCollection[a].week);
                localStorage.setItem("menuStatsCollection", JSON.stringify(menuStatsCollection));
            }
        }
        tuesdayisclick = true;
    }
}

function voteWV() {
    cc.innerHTML = " ";
    if (wednesdayisclick) {
        cc.innerHTML = "You already voted for Wednesday!";
    } else {
        for (let a = 0; a < menuStatsCollection.length; a++) {
            if (wv.innerHTML === menuStatsCollection[a].id) {
                menuStatsCollection[a].week = menuStatsCollection[a].week + 1;
                console.log(menuStatsCollection[a].week);
                localStorage.setItem("menuStatsCollection", JSON.stringify(menuStatsCollection));
            }
        }
        wednesdayisclick = true;
    }
}

function voteTHV() {
    cc.innerHTML = " ";
    if (thursdayisclick) {
        cc.innerHTML = "You already voted for Thursday!";
    } else {
        for (let a = 0; a < menuStatsCollection.length; a++) {
            if (thv.innerHTML === menuStatsCollection[a].id) {
                menuStatsCollection[a].week = menuStatsCollection[a].week + 1;
                console.log(menuStatsCollection[a].week);
                localStorage.setItem("menuStatsCollection", JSON.stringify(menuStatsCollection));
            }
        }
        thursdayisclick = true;
    }
}

function voteFV() {
    cc.innerHTML = " ";
    if (fridayisclick) {
        cc.innerHTML = "You already voted for Friday!";
    } else {
        for (let a = 0; a < menuStatsCollection.length; a++) {
            if (fv.innerHTML === menuStatsCollection[a].id) {
                menuStatsCollection[a].week = menuStatsCollection[a].week + 1;
                console.log(menuStatsCollection[a].week);
                localStorage.setItem("menuStatsCollection", JSON.stringify(menuStatsCollection));
            }
        }
        fridayisclick = true;
    }
}

function voteMP() {
    cc.innerHTML = " ";
    if (mondayisclick) {
        cc.innerHTML = "You already voted for Monday!";
    } else {
        for (let a = 0; a < menuStatsCollection.length; a++) {
            if (mp.innerHTML === menuStatsCollection[a].id) {
                menuStatsCollection[a].week = menuStatsCollection[a].week + 1;
                console.log(menuStatsCollection[a].week);
                localStorage.setItem("menuStatsCollection", JSON.stringify(menuStatsCollection));
            }
        }
        mondayisclick = true;
    }

}

function voteTUP() {
    cc.innerHTML = " ";
    if (tuesdayisclick) {
        cc.innerHTML = "You already voted for Tuesday!";
    } else {
        for (let a = 0; a < menuStatsCollection.length; a++) {
            if (tup.innerHTML === menuStatsCollection[a].id) {
                menuStatsCollection[a].week = menuStatsCollection[a].week + 1;
                console.log(menuStatsCollection[a].week);
                localStorage.setItem("menuStatsCollection", JSON.stringify(menuStatsCollection));
            }
        }
        tuesdayisclick = true;
    }
}

function voteWP() {
    cc.innerHTML = " ";
    if (wednesdayisclick) {
        cc.innerHTML = "You already voted for Wednesday!";
    } else {
        for (let a = 0; a < menuStatsCollection.length; a++) {
            if (wp.innerHTML === menuStatsCollection[a].id) {

                menuStatsCollection[a].week = menuStatsCollection[a].week + 1;
                console.log(menuStatsCollection[a].week);
                localStorage.setItem("menuStatsCollection", JSON.stringify(menuStatsCollection));
            }
        }
        wednesdayisclick = true;
    }
}

function voteTHP() {
    cc.innerHTML = " ";
    if (thursdayisclick) {
        cc.innerHTML = "You already voted for Thursday!";
    } else {
        for (let a = 0; a < menuStatsCollection.length; a++) {
            if (thp.innerHTML === menuStatsCollection[a].id) {
                menuStatsCollection[a].week = menuStatsCollection[a].week + 1;
                console.log(menuStatsCollection[a].week);
                localStorage.setItem("menuStatsCollection", JSON.stringify(menuStatsCollection));
            }
        }
        thursdayisclick = true;
    }
}

function voteFP() {
    cc.innerHTML = " ";
    if (fridayisclick) {
        cc.innerHTML = "You already voted for Friday!";
    } else {
        for (let a = 0; a < menuStatsCollection.length; a++) {
            if (fp.innerHTML === menuStatsCollection[a].id) {
                menuStatsCollection[a].week = menuStatsCollection[a].week + 1;
                console.log(menuStatsCollection[a].week);
                localStorage.setItem("menuStatsCollection", JSON.stringify(menuStatsCollection));
            }
        }
        fridayisclick = true;
    }
}

function booReset() { //ran when the page is reset to allow other students to vote
    mondayisclick = false;
    tuesdayisclick = false;
    wednesdayisclick = false;
    thursdayisclick = false;
    fridayisclick = false;
}

putVals();

document.addEventListener("DOMContentLoaded", booReset); //Booreset is run on reload

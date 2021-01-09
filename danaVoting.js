//set variables
let pushTracker = 0;
const save_button = document.getElementById("SOS");
const studio_button = document.getElementById("studio");
const push_button = document.getElementById("lock");

var select_mb = document.getElementById("monBowl");
var select_tub = document.getElementById("tuesBowl");
var select_wb = document.getElementById("wedBowl");
var select_thb = document.getElementById("thursBowl");
var select_fb = document.getElementById("friBowl");

var select_ms = document.getElementById("monSoup");
var select_tus = document.getElementById("tuesSoup");
var select_ws = document.getElementById("wedSoup");
var select_ths = document.getElementById("thursSoup");
var select_fs = document.getElementById("friSoup");

var select_mhb = document.getElementById("monHot");
var select_tuhb = document.getElementById("tuesHot");
var select_whb = document.getElementById("wedHot");
var select_thhb = document.getElementById("thursHot");
var select_fhb = document.getElementById("friHot");

var select_mv = document.getElementById("monVeg");
var select_tuv = document.getElementById("tuesVeg");
var select_wv = document.getElementById("wedVeg");
var select_thv = document.getElementById("thursVeg");
var select_fv = document.getElementById("friVeg");

var select_mp = document.getElementById("monPizza");
var select_tup = document.getElementById("tuesPizza");
var select_wp = document.getElementById("wedPizza");
var select_thp = document.getElementById("thursPizza");
var select_fp = document.getElementById("friPizza");

var select_mb_votes = document.getElementById("monBowlVotes");
var select_tub_votes = document.getElementById("tuesBowlVotes");
var select_wb_votes = document.getElementById("wedBowlVotes");
var select_thb_votes = document.getElementById("thursBowlVotes");
var select_fb_votes = document.getElementById("friBowlVotes");

var select_ms_votes = document.getElementById("monSoupVotes");
var select_tus_votes = document.getElementById("tuesSoupVotes");
var select_ws_votes = document.getElementById("wedSoupVotes");
var select_ths_votes = document.getElementById("thursSoupVotes");
var select_fs_votes = document.getElementById("friSoupVotes");

var select_mhb_votes = document.getElementById("monHotVotes");
var select_tuhb_votes = document.getElementById("tuesHotVotes");
var select_whb_votes = document.getElementById("wedHotVotes");
var select_thhb_votes = document.getElementById("thursHotVotes");
var select_fhb_votes = document.getElementById("friHotVotes");

var select_mv_votes = document.getElementById("monVegVotes");
var select_tuv_votes = document.getElementById("tuesVegVotes");
var select_wv_votes = document.getElementById("wedVegVotes");
var select_thv_votes = document.getElementById("thursVegVotes");
var select_fv_votes = document.getElementById("friVegVotes");

var select_mp_votes = document.getElementById("monPizzaVotes");
var select_tup_votes = document.getElementById("tuesPizzaVotes");
var select_wp_votes = document.getElementById("wedPizzaVotes");
var select_thp_votes = document.getElementById("thursPizzaVotes");
var select_fp_votes = document.getElementById("friPizzaVotes");

var monSoupOp = document.getElementById("monSoupOp");
var tuesSoupOp = document.getElementById("tuesSoupOp");
var wedSoupOp = document.getElementById("wedSoupOp");
var thursSoupOp = document.getElementById("thursSoupOp");
var friSoupOp = document.getElementById("friSoupOp");

var monBowlOp = document.getElementById("monBowlOp");
var tuesBowlOp = document.getElementById("tuesBowlOp");
var wedBowlOp = document.getElementById("wedBowlOp");
var thursBowlOp = document.getElementById("thursBowlOp");
var friBowlOp = document.getElementById("friBowlOp");

var monHotOp = document.getElementById("monHotOp");
var tuesHotOp = document.getElementById("tuesHotOp");
var wedHotOp = document.getElementById("wedHotOp");
var thursHotOp = document.getElementById("thursHotOp");
var friHotOp = document.getElementById("friHotOp");

var monVegOp = document.getElementById("monVegOp");
var tuesVegOp = document.getElementById("tuesVegOp");
var wedVegOp = document.getElementById("wedVegOp");
var thursVegOp = document.getElementById("thursVegOp");
var friVegOp = document.getElementById("friVegOp");

var monPizzaOp = document.getElementById("monPizzaOp");
var tuesPizzaOp = document.getElementById("tuesPizzaOp");
var wedPizzaOp = document.getElementById("wedPizzaOp");
var thursPizzaOp = document.getElementById("thursPizzaOp");
var friPizzaOp = document.getElementById("friPizzaOp");

let menuStatsCollection = JSON.parse(localStorage.getItem("menuStatsCollection"));
var meals = [];
var data = [];
var weekly = [];

function pop(){ //populate my meals array with the meal id's --> this will be used in the drop down
    for(let a = 0; a < menuStatsCollection.length; a++){
        meals[a] = menuStatsCollection[a].id;
    }
}

function set(){ //show dana what the student will see
    for (i = 0; i < menuStatsCollection.length; i++){
        if (localStorage.getItem("MonSoupOp")=== menuStatsCollection[i].id){
            select_ms_votes.innerHTML = menuStatsCollection[i].week;
        }
    }
    for (i = 0; i < menuStatsCollection.length; i++){
        if (localStorage.getItem("TuesSoupOp")=== menuStatsCollection[i].id){
            select_tus_votes.innerHTML = menuStatsCollection[i].week;
        }
    }
    for (i = 0; i < menuStatsCollection.length; i++){
        if (localStorage.getItem("WedSoupOp")=== menuStatsCollection[i].id){
            select_ws_votes.innerHTML = menuStatsCollection[i].week;
        }
    }
    for (i = 0; i < menuStatsCollection.length; i++){
        if (localStorage.getItem("ThursSoupOp")=== menuStatsCollection[i].id){
            select_ths_votes.innerHTML = menuStatsCollection[i].week;
        }
    }
    for (i = 0; i < menuStatsCollection.length; i++){
        if (localStorage.getItem("FriSoupOp")=== menuStatsCollection[i].id){
            select_fs_votes.innerHTML = menuStatsCollection[i].week;
        }
    }
    for (i = 0; i < menuStatsCollection.length; i++){
        if (localStorage.getItem("MonBowlOption")=== menuStatsCollection[i].id){
            select_mb_votes.innerHTML = menuStatsCollection[i].week;
        }
    }
    for (i = 0; i < menuStatsCollection.length; i++){
        if (localStorage.getItem("TuesBowlOption")=== menuStatsCollection[i].id){
            select_tub_votes.innerHTML = menuStatsCollection[i].week;
        }
    }
    for (i = 0; i < menuStatsCollection.length; i++){
        if (localStorage.getItem("WedBowlOption")=== menuStatsCollection[i].id){
            select_wb_votes.innerHTML = menuStatsCollection[i].week;
        }
    }
    for (i = 0; i < menuStatsCollection.length; i++){
        if (localStorage.getItem("ThursBowlOption")=== menuStatsCollection[i].id){
            select_thb_votes.innerHTML = menuStatsCollection[i].week;
        }
    }
    for (i = 0; i < menuStatsCollection.length; i++){
        if (localStorage.getItem("FriBowlOption")=== menuStatsCollection[i].id){
            select_fb_votes.innerHTML = menuStatsCollection[i].week;
        }
    }
    for (i = 0; i < menuStatsCollection.length; i++){
        if (localStorage.getItem("MonHotOp") === menuStatsCollection[i].id){
            select_mhb_votes.innerHTML = menuStatsCollection[i].week;
        }
    }
    for (i = 0; i < menuStatsCollection.length; i++){
        if (localStorage.getItem("TuesHotOp") === menuStatsCollection[i].id){
            select_tuhb_votes.innerHTML = menuStatsCollection[i].week;
        }
    }
    for (i = 0; i < menuStatsCollection.length; i++){
        if (localStorage.getItem("WedHotOp") === menuStatsCollection[i].id){
            select_whb_votes.innerHTML = menuStatsCollection[i].week;
        }
    }
    for (i = 0; i < menuStatsCollection.length; i++){
        if (localStorage.getItem("ThursHotOp") === menuStatsCollection[i].id){
            select_thhb_votes.innerHTML = menuStatsCollection[i].week;
        }
    }
    for (i = 0; i < menuStatsCollection.length; i++){
        if (localStorage.getItem("FriHotOp") === menuStatsCollection[i].id){
            select_fhb_votes.innerHTML = menuStatsCollection[i].week;
        }
    }
    for (i = 0; i < menuStatsCollection.length; i++){
        if (localStorage.getItem("MonVegOp") === menuStatsCollection[i].id){
            select_mv_votes.innerHTML = menuStatsCollection[i].week;
        }
    }
    for (i = 0; i < menuStatsCollection.length; i++){
        if (localStorage.getItem("TuesVegOp") === menuStatsCollection[i].id){
            select_tuv_votes.innerHTML = menuStatsCollection[i].week;
        }
    }
    for (i = 0; i < menuStatsCollection.length; i++){
        if (localStorage.getItem("WedVegOp") === menuStatsCollection[i].id){
            select_wv_votes.innerHTML = menuStatsCollection[i].week;
        }
    }
    for (i = 0; i < menuStatsCollection.length; i++){
        if (localStorage.getItem("ThursVegOp") === menuStatsCollection[i].id){
            select_thv_votes.innerHTML = menuStatsCollection[i].week;
        }
    }
    for (i = 0; i < menuStatsCollection.length; i++){
        if (localStorage.getItem("FriVegOp") === menuStatsCollection[i].id){
            select_fv_votes.innerHTML = menuStatsCollection[i].week;
        }
    }
    for (i = 0; i < menuStatsCollection.length; i++){
        if (localStorage.getItem("MonPizzaOp") === menuStatsCollection[i].id){
            select_mp_votes.innerHTML = menuStatsCollection[i].week;
        }
    }
    for (i = 0; i < menuStatsCollection.length; i++){
        if (localStorage.getItem("TuesPizzaOp") === menuStatsCollection[i].id){
            select_tup_votes.innerHTML = menuStatsCollection[i].week;
        }
    }
    for (i = 0; i < menuStatsCollection.length; i++){
        if (localStorage.getItem("WedPizzaOp") === menuStatsCollection[i].id){
            select_wp_votes.innerHTML = menuStatsCollection[i].week;
        }
    }
    for (i = 0; i < menuStatsCollection.length; i++){
        if (localStorage.getItem("ThursPizzaOp") === menuStatsCollection[i].id){
            select_thp_votes.innerHTML = menuStatsCollection[i].week;
        }
    }
    for (i = 0; i < menuStatsCollection.length; i++){
        if (localStorage.getItem("FriPizzaOp") === menuStatsCollection[i].id){
            select_fp_votes.innerHTML = menuStatsCollection[i].week;
        }
    }
}


function getVals() { //populate the local storage with danas choice
    localStorage.setItem("MonBowlOption", select_mb.options[select_mb.selectedIndex].value);
    localStorage.setItem("TuesBowlOption", select_tub.options[select_tub.selectedIndex].value);
    localStorage.setItem("WedBowlOption", select_wb.options[select_wb.selectedIndex].value);
    localStorage.setItem("ThursBowlOption", select_thb.options[select_thb.selectedIndex].value);
    localStorage.setItem("FriBowlOption", select_fb.options[select_fb.selectedIndex].value);

    localStorage.setItem("MonSoupOp", select_ms.options[select_ms.selectedIndex].value);
    localStorage.setItem("TuesSoupOp", select_tus.options[select_tus.selectedIndex].value);
    localStorage.setItem("WedSoupOp", select_ws.options[select_ws.selectedIndex].value);
    localStorage.setItem("ThursSoupOp", select_ths.options[select_ths.selectedIndex].value);
    localStorage.setItem("FriSoupOp", select_fs.options[select_fs.selectedIndex].value);

    localStorage.setItem("MonHotOp", select_mhb.options[select_mhb.selectedIndex].value);
    localStorage.setItem("TuesHotOp", select_tuhb.options[select_tuhb.selectedIndex].value);
    localStorage.setItem("WedHotOp", select_whb.options[select_whb.selectedIndex].value);
    localStorage.setItem("ThursHotOp", select_thhb.options[select_thhb.selectedIndex].value);
    localStorage.setItem("FriHotOp", select_fhb.options[select_fhb.selectedIndex].value);

    localStorage.setItem("MonVegOp", select_mv.options[select_mv.selectedIndex].value);
    localStorage.setItem("TuesVegOp", select_tuv.options[select_tuv.selectedIndex].value);
    localStorage.setItem("WedVegOp", select_wv.options[select_wv.selectedIndex].value);
    localStorage.setItem("ThursVegOp", select_thv.options[select_thv.selectedIndex].value);
    localStorage.setItem("FriVegOp", select_fv.options[select_fv.selectedIndex].value);

    localStorage.setItem("MonPizzaOp", select_mp.options[select_mp.selectedIndex].value);
    localStorage.setItem("TuesPizzaOp", select_tup.options[select_tup.selectedIndex].value);
    localStorage.setItem("WedPizzaOp", select_wp.options[select_wp.selectedIndex].value);
    localStorage.setItem("ThursPizzaOp", select_thp.options[select_thp.selectedIndex].value);
    localStorage.setItem("FriPizzaOp", select_fp.options[select_fp.selectedIndex].value);
}

function monBowl() { //
    for (var i = 0; i < meals.length; i++) {
        var opt = meals[i];
        var el = document.createElement("option");
        el.text = opt;
        el.value = opt;
        select_mb.appendChild(el);
    }
}

function tuesBowl() {
    for (var i = 0; i < meals.length; i++) {
        var opt = meals[i];
        var el = document.createElement("option");
        el.text = opt;
        el.value = opt;
        select_tub.appendChild(el);
    }
}

function wedBowl() {

    for (var i = 0; i < meals.length; i++) {
        var opt = meals[i];
        var el = document.createElement("option");
        el.text = opt;
        el.value = opt;
        select_wb.appendChild(el);
    }
}

function thursBowl() {
    for (var i = 0; i < meals.length; i++) {
        var opt = meals[i];
        var el = document.createElement("option");
        el.text = opt;
        el.value = opt;
        select_thb.appendChild(el);
    }
}

function friBowl() {
    for (var i = 0; i < meals.length; i++) {
        var opt = meals[i];
        var el = document.createElement("option");
        el.text = opt;
        el.value = opt;
        select_fb.appendChild(el);
    }
}

function monSoup() {
    for (var i = 0; i < meals.length; i++) {
        var opt = meals[i];
        var el = document.createElement("option");
        el.text = opt;
        el.value = opt;
        select_ms.appendChild(el);
    }
}

function tuesSoup() {
    for (var i = 0; i < meals.length; i++) {
        var opt = meals[i];
        var el = document.createElement("option");
        el.text = opt;
        el.value = opt;
        select_tus.appendChild(el);
    }
}

function wedSoup() {

    for (var i = 0; i < meals.length; i++) {
        var opt = meals[i];
        var el = document.createElement("option");
        el.text = opt;
        el.value = opt;
        select_ws.appendChild(el);
    }
}

function thursSoup() {
    for (var i = 0; i < meals.length; i++) {
        var opt = meals[i];
        var el = document.createElement("option");
        el.text = opt;
        el.value = opt;
        select_ths.appendChild(el);
    }
}

function friSoup() {
    for (var i = 0; i < meals.length; i++) {
        var opt = meals[i];
        var el = document.createElement("option");
        el.text = opt;
        el.value = opt;
        select_fs.appendChild(el);
    }
}

function monHot() {
    for (var i = 0; i < meals.length; i++) {
        var opt = meals[i];
        var el = document.createElement("option");
        el.text = opt;
        el.value = opt;
        select_mhb.appendChild(el);
    }
}

function tuesHot() {
    for (var i = 0; i < meals.length; i++) {
        var opt = meals[i];
        var el = document.createElement("option");
        el.text = opt;
        el.value = opt;
        select_tuhb.appendChild(el);
    }
}

function wedHot() {

    for (var i = 0; i < meals.length; i++) {
        var opt = meals[i];
        var el = document.createElement("option");
        el.text = opt;
        el.value = opt;
        select_whb.appendChild(el);
    }
}

function thursHot() {
    for (var i = 0; i < meals.length; i++) {
        var opt = meals[i];
        var el = document.createElement("option");
        el.text = opt;
        el.value = opt;
        select_thhb.appendChild(el);
    }
}

function friHot() {
    for (var i = 0; i < meals.length; i++) {
        var opt = meals[i];
        var el = document.createElement("option");
        el.text = opt;
        el.value = opt;
        select_fhb.appendChild(el);
    }
}

function monVeg() {
    for (var i = 0; i < meals.length; i++) {
        var opt = meals[i];
        var el = document.createElement("option");
        el.text = opt;
        el.value = opt;
        select_mv.appendChild(el);
    }
}

function tuesVeg() {
    for (var i = 0; i < meals.length; i++) {
        var opt = meals[i];
        var el = document.createElement("option");
        el.text = opt;
        el.value = opt;
        select_tuv.appendChild(el);
    }
}

function wedVeg() {

    for (var i = 0; i < meals.length; i++) {
        var opt = meals[i];
        var el = document.createElement("option");
        el.text = opt;
        el.value = opt;
        select_wv.appendChild(el);
    }
}

function thursVeg() {
    for (var i = 0; i < meals.length; i++) {
        var opt = meals[i];
        var el = document.createElement("option");
        el.text = opt;
        el.value = opt;
        select_thv.appendChild(el);
    }
}

function friVeg() {
    for (var i = 0; i < meals.length; i++) {
        var opt = meals[i];
        var el = document.createElement("option");
        el.text = opt;
        el.value = opt;
        select_fv.appendChild(el);
    }
}

function monPizza() {
    for (var i = 0; i < meals.length; i++) {
        var opt = meals[i];
        var el = document.createElement("option");
        el.text = opt;
        el.value = opt;
        select_mp.appendChild(el);
    }
}

function tuesPizza() {
    for (var i = 0; i < meals.length; i++) {
        var opt = meals[i];
        var el = document.createElement("option");
        el.text = opt;
        el.value = opt;
        select_tup.appendChild(el);
    }
}

function wedPizza() {

    for (var i = 0; i < meals.length; i++) {
        var opt = meals[i];
        var el = document.createElement("option");
        el.text = opt;
        el.value = opt;
        select_wp.appendChild(el);
    }
}

function thursPizza() {
    for (var i = 0; i < meals.length; i++) {
        var opt = meals[i];
        var el = document.createElement("option");
        el.text = opt;
        el.value = opt;
        select_thp.appendChild(el);
    }
}

function friPizza() {
    for (var i = 0; i < meals.length; i++) {
        var opt = meals[i];
        var el = document.createElement("option");
        el.text = opt;
        el.value = opt;
        select_fp.appendChild(el);
    }
    console.log(meals[1]);
    
}


function lockHerIn(){
    for(var i = 0; i < menuStatsCollection.length; i++){ 
            menuStatsCollection[i].data[pushTracker] = menuStatsCollection[0].week;
             menuStatsCollection[i].week = 0;
    }
    localStorage.setItem("menuStatsCollection", JSON.stringify(menuStatsCollection));
    pushTracker = pushTracker + 1;
    localStorage.setItem("pushTracker", pushTracker);
}

function soda(){
    monSoupOp.innerHTML = localStorage.getItem("MonSoupOp");
    tuesSoupOp.innerHTML = localStorage.getItem("TuesSoupOp");
    wedSoupOp.innerHTML = localStorage.getItem("WedSoupOp");
    thursSoupOp.innerHTML = localStorage.getItem("ThursSoupOp");
    friSoupOp.innerHTML = localStorage.getItem("FriSoupOp");
    monBowlOp.innerHTML = localStorage.getItem("MonBowlOption");
    tuesBowlOp.innerHTML = localStorage.getItem("TuesBowlOption");
    wedBowlOp.innerHTML = localStorage.getItem("WedBowlOption");
    thursBowlOp.innerHTML = localStorage.getItem("ThursBowlOption");
    friBowlOp.innerHTML = localStorage.getItem("FriBowlOption");
    monHotOp.innerHTML = localStorage.getItem("MonHotOp");
    tuesHotOp.innerHTML = localStorage.getItem("TuesHotOp");
    wedHotOp.innerHTML = localStorage.getItem("WedHotOp");
    thursHotOp.innerHTML = localStorage.getItem("ThursHotOp");
    friHotOp.innerHTML = localStorage.getItem("FriHotOp");
    monVegOp.innerHTML = localStorage.getItem("MonVegOp");
    tuesVegOp.innerHTML = localStorage.getItem("TuesVegOp");
    wedVegOp.innerHTML = localStorage.getItem("WedVegOp");
    thursVegOp.innerHTML = localStorage.getItem("ThursVegOp");
    friVegOp.innerHTML = localStorage.getItem("FriVegOp");
    monPizzaOp.innerHTML = localStorage.getItem("MonPizzaOp");
    tuesPizzaOp.innerHTML = localStorage.getItem("TuesPizzaOp");
    wedPizzaOp.innerHTML = localStorage.getItem("WedPizzaOp");
    thursPizzaOp.innerHTML = localStorage.getItem("ThursPizzaOp");
    friPizzaOp.innerHTML = localStorage.getItem("FriPizzaOp");
}


//im the middle man because when i press 

pop();
soda();
 set();

monBowl();
tuesBowl();
wedBowl();
thursBowl();
friBowl();

monSoup();
tuesSoup();
wedSoup();
thursSoup();
friSoup();

monPizza();
tuesPizza();
wedPizza();
thursPizza();
friPizza();

monHot();
tuesHot();
wedHot();
thursHot();
friHot();

monVeg();
tuesVeg();
wedVeg();
thursVeg();
friVeg();


save_button.addEventListener('click', getVals);
push_button.addEventListener('click', lockHerIn);

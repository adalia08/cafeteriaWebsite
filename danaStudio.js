//SELECTORS AND VARIABLES//
const inventoryInput = document.querySelector(".inventory-input");
const submitButton = document.querySelector(".submit-button");
const inventoryList = document.querySelector(".inventory-list");

let tempObj = {};
let tempAverage;
let tempSum;

//FUNCTIONS//
//add new menu items
function addMeal(){
    //Prevent form from submitting information away
        event.preventDefault();


    //Create div for meal additions
        const additionDiv = document.createElement("div");
        additionDiv.classList.add("Meal"); //class individual items
    //Create new list item
        const newMeal = document.createElement('li');
            newMeal.innerText = inventoryInput.value; //new meal name, based on what's in form
        newMeal.classList.add("inventory-list") //class entire list
        additionDiv.appendChild(newMeal); //attach to individual div
    //Create new voting stat
        const newStat = document.createElement('span');
            newStat.innerText = 0; //new meal average
        newStat.classList.add("inventory-list") //class entire list
        additionDiv.appendChild(newStat); //attach to individual div
    //Create delete button
        const deleteButton = document.createElement("button");
            deleteButton.innerHTML = '<i class="fas fa-trash"></i>'; //give it a trash button icon
        deleteButton.classList.add("delete-btn");
        additionDiv.appendChild(deleteButton);


    //Create new object for item
        saveLocalData(inventoryInput.value);
    //Add new additions to local storage
        saveLocalMeals(inventoryInput.value);


    //Attach individual div to entire list
        inventoryList.appendChild(additionDiv);
    //Refresh value in input form
        inventoryInput.value = "";
}
//save menu items to server
function saveLocalMeals(meal){ 
    let mealsArray;

    if(localStorage.getItem("mealsArray") === null){//check, does the local storage already have the mealArray in it?
        mealsArray = []; //create if not
    } else { //else, access array from server
        mealsArray = JSON.parse(localStorage.getItem("mealsArray"));
    }


    mealsArray.push(meal); //add meal into the array
    localStorage.setItem("mealsArray", JSON.stringify(mealsArray)); //send information back to server

}
//create and save objects created for menu items 
function saveLocalData(meal){
    let menuStatsCollection;
    
    if(localStorage.getItem("menuStatsCollection") === null){ //check, does the local storage already have the menuStatsCollection in it?
        menuStatsCollection = []; //create if not
    } else {
        menuStatsCollection = JSON.parse(localStorage.getItem("menuStatsCollection")); //else, access array from server
    }


    tempObj = {id: meal, data: [], average: 0, week: 0}; //Create new object for item's data
    menuStatsCollection.push(tempObj); //add object to collection array
    localStorage.setItem("menuStatsCollection", JSON.stringify(menuStatsCollection)); //store collection array back in server
}


//show meals saved in local storage when window loads/refreshes
function getMeals(){
    let mealsArray;
    if(localStorage.getItem("mealsArray") === null){//check, does the local storage already have the mealArray in it?
        mealsArray = []; //create if not
    } else { //else, access array from server
        mealsArray = JSON.parse(localStorage.getItem("mealsArray"))
    }

     //similarly to addMeal();, create visual of each meal in array
    mealsArray.forEach(function(meal){
            //Prevent form from submitting information away
            event.preventDefault();

            //Create div for meal additions
                const additionDiv = document.createElement("div");
                additionDiv.classList.add("Meal"); //class individual items
            //Create new list item
                const newMeal = document.createElement('li');
                    newMeal.innerText = meal; //new meal name, based on meal name from storage
                newMeal.classList.add("inventory-list") //class entire list
                additionDiv.appendChild(newMeal); //attach to individual div
            //Create new voting stat
                const newStat = document.createElement('span');
                retrieveLocalData(meal);
                    newStat.innerText = tempAverage; //new meal average
                newStat.classList.add("inventory-list") //class entire list
                additionDiv.appendChild(newStat); //attach to individual div
            //Create delete button
                const deleteButton = document.createElement("button");
                    deleteButton.innerHTML = '<i class="fas fa-trash"></i>'; //give it a trash button icon
                deleteButton.classList.add("delete-btn");
                additionDiv.appendChild(deleteButton);

            //Attach individual div to entire list
                inventoryList.appendChild(additionDiv);
    });
}
//search through menuStatsCollection for meal's average
function retrieveLocalData(meal){
    menuStatsCollection = JSON.parse(localStorage.getItem("menuStatsCollection"));
    //go through menuStatsCollection to find associated ID
    for(let a = 0; a < menuStatsCollection.length; a++){
        
        //if id matches, calculate average from data set
        if(meal === menuStatsCollection[a].id){
            //calculate average
            for(let b = 0; b < menuStatsCollection[a].data.length; b++){ //go through item's data
                tempSum += menuStatsCollection[a].data[b]; //add data together
            }
            menuStatsCollection[a].average = tempSum/menuStatsCollection[a].data.length; //divide sum by # of items, add to sub-object's average property                
            tempAverage = menuStatsCollection[a].average;

            tempSum = 0; //reset for next item
        }
    }
}


//visually delete list items
function deleteCheck(e){
    const item = e.target; //link what is clicked on to variable 'item'
    
    if(item.classList[0] === "delete-btn"){ //if item has a class of delete-btn, then continue
        const foundDiv = item.parentElement; //get entire div
            removeLocalMeals(foundDiv); //remove div info from storage
        foundDiv.remove(); //remove div from screen
    }
}
//delete list items from local storage
function removeLocalMeals(foundDiv){
    let mealsArray;
    if(localStorage.getItem("mealsArray") === null){//check, does the local storage already have the mealArray in it?
        mealsArray = []; //create if not
    } else { //else, access array from server
        mealsArray = JSON.parse(localStorage.getItem("mealsArray"))
    }
    
    const mealToRemove = foundDiv.children[0].innerText; //attach meal name content to "mealToRemove"
    mealsArray.splice(mealsArray.indexOf(mealToRemove), 1); //get index of toRemove value and remove just that 1 item from the array

    localStorage.setItem("mealsArray", JSON.stringify(mealsArray)); //send information back to server
}
//delete item's data from local storage
function removeLocalData(foundDiv){
    let menuStatsCollection;
    
    if(localStorage.getItem("menuStatsCollection") === null){ //check, does the local storage already have the menuStatsCollection in it?
        menuStatsCollection = []; //create if not
    } else {
        menuStatsCollection = JSON.parse(localStorage.getItem("menuStatsCollection")); //else, access array from server
    }

    const dataToRemove = foundDiv.children[0].innerText; //attach meal name content to "dataToRemove"
    //find ID that matches dataToRemove
    for(let c = 0; c < menuStatsCollection.length; c++){
        if(dataToRemove === menuStatsCollection[c].id){            
            menuStatsCollection.splice(c, 1); //once found, remove from the array
        }
    }

    localStorage.setItem("menuStatsCollection", JSON.stringify(menuStatsCollection)); //store collection array back in server
}


//display allergies & restrictions
function showRestrictionsNum(){
    let restrictionsArray;
    
    if(localStorage.getItem("restrictionsArray") === null){ //check, does the local storage already have the restrictionsArray in it?
        restrictionsArray = []; //create if not
    } else {
        restrictionsArray = JSON.parse(localStorage.getItem("restrictionsArray")); //else, access array from server
    }


    //calculate totals for each important allergy
    let veggieTotal = 0; let veganTotal = 0; let dairyTotal = 0; let glutenTotal = 0;
    for(let d = 0; d < restrictionsArray.length; d++){
        for(let e = 0; e < restrictionsArray[d].restrictions.length; e++){
            switch(restrictionsArray[d].restrictions[e]){
                case 'vegetarian':
                    veggieTotal += 1;
                    break;
                case 'vegan':
                    veganTotal += 1;
                    break;
                case 'dairy':
                    dairyTotal += 1;
                    break;
                case 'gluten':
                    glutenTotal += 1;
                    break;
            }
        }
    }
    //set HTML values equal to calculated numbers
    const veggieNumber = document.querySelector("#veggie-number");
        veggieNumber.innerHTML = veggieTotal; 
    const veganNumber = document.querySelector("#vegan-number");
        veganNumber.innerHTML = veganTotal; 
    const dairyNumber = document.querySelector("#dairy-number");
        dairyNumber.innerHTML = dairyTotal; 
    const glutenNumber = document.querySelector("#gluten-number");
        glutenNumber.innerHTML = glutenTotal; 
}


//EVENT LISTENERS//
document.addEventListener("DOMContentLoaded", getMeals);

showRestrictionsNum();

submitButton.addEventListener('click', addMeal);
inventoryList.addEventListener('click', deleteCheck);
//SELECTORS AND VARIABLES//
const allergiesList = document.querySelector(".allergies-list");
let tempObj;

const studentNumber = document.querySelector(".student-number");
let username = 'student-2021'; //just for testing purposes~~


//FUNCTIONS//
function saveAllergyData(){ //just for testing purposes~~
    let restrictionsArray;
    
    if(localStorage.getItem("restrictionsArray") === null){ //check, does the local storage already have the restrictionsArray in it?
        restrictionsArray = []; //create if not
    } else {
        restrictionsArray = JSON.parse(localStorage.getItem("restrictionsArray")); //else, access array from server
    }


    tempObj = {id: 'student-2021', restrictions: ['chocolate', 'grapes', 'upsetting human']}; //Create new object for student's data
    restrictionsArray.push(tempObj); //add object to restrictions array
    localStorage.setItem("restrictionsArray", JSON.stringify(restrictionsArray)); //store collection array back in server
}

function getAllergies(){
    let restrictionsArray;
    if(localStorage.getItem("restrictionsArray") === null){//check, does the local storage already have the restrictionsArray in it?
        restrictionsArray = []; //create if not
    } else { //else, access array from server
        restrictionsArray = JSON.parse(localStorage.getItem("restrictionsArray"))
    }

    //find data for student
    for(let i = 0; i < restrictionsArray.length; i++){
        if(username === restrictionsArray[i].id){ //if the student number matches one saved in storage, visualize their restrictions

                //display each allergy/restriction saved in storage
                    restrictionsArray[i].restrictions.forEach(function(restriction){
                //Prevent form from submitting information away
                    event.preventDefault();
    
                //Create div for meal additions
                    const allergiesDiv = document.createElement("div");
                    allergiesDiv.classList.add("restriction"); //class individual items
                //Create new list item
                    const newRestriction = document.createElement('li');
                        newRestriction.innerText = restriction; //new restriction name, based on restriction name from storage
                    newRestriction.classList.add("allergies-list") //class entire list
                    allergiesDiv.appendChild(newRestriction); //attach to individual div
                //Attach individual div to entire list
                    allergiesList.appendChild(allergiesDiv);
        });

        }
    }
}


//EVENT LISTENERS//
//saveAllergyData();
studentNumber.innerHTML = username; //display student number on profile
document.addEventListener("DOMContentLoaded", getAllergies);

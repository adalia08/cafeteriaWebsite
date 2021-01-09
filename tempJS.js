const menuInventory = [
    {
        id: 'chilli', data: [100, 75, 92, 13], average: 0
    },
    {
        id: 'lasagna', data: [80, 55, 86, 60], average: 0
    },
    {
        id: 'meatloaf', data: [34, 56, 40, 41], average: 0
    }
]
let tempSum = 0;

function main() {
    //calculate average for each item
    for(let i = 0; i < menuInventory.length; i++){ //go through each item

        for(let j = 0; j < menuInventory[i].data.length; j++){ //go through item's data
            tempSum += menuInventory[i].data[j]; //add data together
        }
        menuInventory[i].average = tempSum/menuInventory[i].data.length; //divide sum by # of items, add to sub-object's average property
        tempSum = 0; //reset for next item

        console.log(menuInventory[i].average);
    }
    //assign calculations to HTML appearance
    chilliValue.innerHTML = menuInventory[0].average;
    lasagnaValue.innerHTML = menuInventory[1].average;
    meatloafValue.innerHTML = menuInventory[2].average;
}

////

main();
const mainDiv = document.querySelector(".baseGrid");
console.log(mainDiv);
let divArray = [];
let identifier = 0;


function getCurrentColor(tool){
    if(tool == 0){
        return document.querySelector('#active-color').value;
    }else if(tool == 1){
        return "#ffffff"
        //return document.querySelector('#active-background-color').value;
    }
}

function generateGrid(rowValue, columnValue){
    for(let row = 1; row< rowValue+1; row++){
        for(let column = 1; column<columnValue+1; column++){
            divArray[row] = document.createElement('div');
           //divArray[row].textContent = identifier;
            divArray[row].setAttribute('draggable', 'false');
            divArray[row].classList.add('gridDiv');
            divArray[row].style.gridColumn = column;
            divArray[row].style.gridRow = row;
            divArray[row].style.backgroundColor = getCurrentColor(1);
            divArray[row].style.border = "1px solid gainsboro"
            divArray[row].style.spacing = "10px"
            divArray[row].addEventListener("mousedown", drawClick);
            divArray[row].addEventListener("mouseenter", drawHold);
            divArray[row].addEventListener('contextmenu', e => e.preventDefault());
            mainDiv.appendChild(divArray[row]);
            identifier+=1;
        }
    }
}
/*This function accepts a click

*/
function drawClick(e){
    if(e.buttons == 1){
        e.target.style.backgroundColor = getCurrentColor(0);
    }else if(e.button == 2){
        e.target.style.backgroundColor = "white";
    }
}

function drawHold(e){
    if (e.buttons == 1){
        e.target.style.backgroundColor = getCurrentColor(0);
    }
}
function deleteGrid(){
    while(mainDiv.firstChild){
        mainDiv.firstChild.remove()
    }
}

function toolbox(e){
    if(e.target.id === "reset-button"){
        let newSize = prompt("Select a new size for the canvas:");
        newSize = parseInt(newSize);
        if(newSize <= "0"){
            alert("Value must be greater than 0");
            return;
        }
        else if(isNaN(newSize)){
            alert("Value must be a number");
        }else{
            console.log(typeof(newSize));
            deleteGrid();
            generateGrid(newSize, newSize)
        }

    }
}


let resetButton = document.querySelector("#reset-button");
resetButton.addEventListener('click', toolbox);

generateGrid(20,20);


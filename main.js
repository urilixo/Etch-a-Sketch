const mainDiv = document.querySelector(".baseGrid");
console.log(mainDiv);
let divArray = [];
let identifier = 0;

function generateGrid(rowValue, columnValue){
    for(let row = 1; row< rowValue+1; row++){
        for(let column = 1; column<columnValue+1; column++){
            divArray[row] = document.createElement('div');
           //divArray[row].textContent = identifier;
            divArray[row].style.gridColumn = column;
            divArray[row].style.gridRow = row;
            divArray[row].style.backgroundColor = "white";
            divArray[row].style.border = "1px solid green"
            divArray[row].style.spacing = "1px"
            divArray[row].addEventListener('mouseenter', e=>{
                e.target.style.backgroundColor ="#" + Math.floor(Math.random()*16777215).toString(16);
            });
            mainDiv.appendChild(divArray[row]);
            identifier+=1;
        }
    }
}

generateGrid(12,12)

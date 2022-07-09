const inputHeight = document.getElementById("inputHeight");
const inputWidth = document.getElementById("inputWidth");
const colorPicker = document.getElementById("colorPicker");
const pixelCanvas = document.getElementById("pixelCanvas");
const sizePicker = document.getElementById("sizePicker");

// add submit event listener to the grid size picker form
sizePicker.addEventListener("submit", function(e) {
    e.preventDefault();
    makeGrid(inputHeight.value, inputWidth.value);
});

function changeColor(e) {
    e.target.style.backgroundColor = colorPicker.value;
}

/**
* @description Creates grid
* @param {number} gridHeight - Total number of rows
* @param {number} gridWidth - Total number of columns
*/
function makeGrid(gridHeight, gridWidth) {
    // reset the grid
    while(pixelCanvas.firstChild) {
        pixelCanvas.removeChild(pixelCanvas.firstChild);
    }

    // create the grid
    for(let row = 1; row <= gridHeight; row++) {
        // create row
        const tr = document.createElement("tr");
        
        for(let column = 1; column <= gridWidth; column++) {
            // create cell
            const td = document.createElement("td");

            // add click event listener to the cell
            td.addEventListener("click", changeColor);
            
            // append cell to row
            tr.appendChild(td);
        }

        // append row to grid
        pixelCanvas.appendChild(tr);
    }

    
}

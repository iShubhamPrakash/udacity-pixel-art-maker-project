const canvas = document.getElementById('pixelCanvas');

// Select color input and color box on click
canvas.addEventListener("click", function (event) {
    let colorPick = document.getElementById('colorPicker').value;
    let box = event.target;
    box.style.cssText = `background-color: ${colorPick}`;

    //to fix the unintentional coloring of the whole table at once
    canvas.style.backgroundColor = "white";
});


//double click removes the color
canvas.addEventListener("dblclick", function (event) {
    event.target.style.cssText = `background-color: unset`;
});


//press and hover to color the cell
let drag = false;

canvas.addEventListener("mousedown", function () {
    drag = true;
});

document.addEventListener("mouseup", function () {
    drag = false;
});


canvas.addEventListener("mousemove", function (event) {
    event.preventDefault();
    let colorPick = document.getElementById('colorPicker').value;
    if (drag) {
        let box = event.target;
        box.style.cssText = `background-color: ${colorPick}`;

        //to fix the unintentional coloring of the whole table at once
        canvas.style.backgroundColor = "white";
    }
});


// Select size input
let submit = document.getElementById('submitButton');

submit.addEventListener("click", function (event) {
    event.preventDefault();
    //calling makeGrid() function to dynamically create table
    makeGrid();
});

function makeGrid() {

    //removing the previously created table
    tableCheck = canvas.hasChildNodes();
    canvas.style.backgroundColor = 'unset';
    while (tableCheck) {
        if (tableCheck) {
            canvas.firstElementChild.remove();
            tableCheck = canvas.hasChildNodes();
        }
    }

    //get the height and the width entered by the user
    let height = document.getElementById('inputHeight').value;
    let width = document.getElementById('inputWeight').value;

    //creating a new table
    for (let i = 1; i <= height; i++) {

        let tr = document.createElement('tr');
        let row = canvas.appendChild(tr);

        for (let j = 1; j <= width; j++) {
            tr.appendChild(document.createElement('td'));
        }

    }


}
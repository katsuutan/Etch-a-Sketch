/*
Create divs using JavaScript.
Put grid squares inside another container div which goes directly into HTML.
Use flexbox to make divs appear as grid

Set up a "hover" effect so grid divs change color when mouse passes over.

*/

const containerDiv = document.querySelector('#container');

// Creates 16 rows
for(let i = 0; i < 16; i++) {
    const rowContainer = document.createElement('div');
    rowContainer.id = `row-${i}`;
    containerDiv.appendChild(rowContainer);

    // Places 16 squares in each row
    for (let j = 0; j < 16; j++) {
        const squareDiv = document.createElement('div');
        squareDiv.id = 'squareDiv';
        squareDiv.textContent = '5'; //placeholder for squares

        rowContainer.appendChild(squareDiv);
    }
}
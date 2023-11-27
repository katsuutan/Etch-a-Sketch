const containerDiv = document.querySelector('#container');

function createGrid(gridSize) {
    for(let i = 0; i < gridSize; i++) {
        const rowContainer = document.createElement('div');
        containerDiv.appendChild(rowContainer);
    
        for (let j = 0; j < gridSize; j++) {
            createSquare(rowContainer, 500/gridSize);
        }
    }
}

function createSquare(rowContainer, size) {
    const squareDiv = document.createElement('div');
    squareDiv.className = 'square';
    squareDiv.style.width = `${size}px`;
    squareDiv.style.height = `${size}px`;

    // Hover effect by adding a new class to each square if mouseover
    squareDiv.addEventListener('mouseover', function(e) {
        e.target.classList.add('active');
        // Sets a randomized background color for each square on a mouseover event.
        squareDiv.style.backgroundColor = `rgb(${randomRGB()}, ${randomRGB()}, ${randomRGB()}`;
    });

    rowContainer.appendChild(squareDiv);
}

// Returns a random number from 0 - 255.
function randomRGB(){
    return (Math.round(Math.random()*255));
}

function resetGrid() {
    // While there is still a square, removes the square until there's none left.
    while(containerDiv.firstChild){
        containerDiv.removeChild(container.firstChild);
    }

    // Creates a newGrid based on the size given to the prompt (1-100).
    let resetSize;
    do {
        resetSize = parseInt(prompt ('Enter a number to create a new grid (1-100).'));
        
    } while (resetSize > 100 || resetSize <= 0);    
    createGrid(resetSize);
}

// Initial state of the page
createGrid(16);
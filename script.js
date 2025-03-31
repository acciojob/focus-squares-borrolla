//your JS code here. If required.
// Get all square elements
const squares = document.querySelectorAll(".square");

// Add event listeners for hover
squares.forEach((square, index) => {
    square.addEventListener("mouseover", () => {
        squares.forEach((otherSquare, otherIndex) => {
            if (otherIndex !== index) {
                otherSquare.style.backgroundColor = "#6F4E37"; // Coffee color
            }
        });
    });

    square.addEventListener("mouseout", () => {
        squares.forEach((otherSquare) => {
            otherSquare.style.backgroundColor = "#E6E6FA"; // Lavender color
        });
    });
});



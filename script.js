let flashcards = [];
let currentIndex = 0;

// Fetch flashcard data from JSON file
fetch('data.json')
    .then(response => response.json())
    .then(data => {
        flashcards = data;
        displayFlashcard();
    })
    .catch(error => console.error('Error fetching data:', error));

// Function to display the current flashcard
function displayFlashcard() {
    const flashcardContainer = document.getElementById('flashcard-container');
    if (flashcards.length > 0) {
        flashcardContainer.innerHTML = `<div>${flashcards[currentIndex].question}</div>`;
    } else {
        flashcardContainer.innerHTML = '<div>No flashcards available</div>';
    }
}

// Function to show the next flashcard
function nextFlashcard() {
    currentIndex = (currentIndex + 1) % flashcards.length;
    displayFlashcard();
}

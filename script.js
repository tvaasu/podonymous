document.addEventListener('DOMContentLoaded', function () {
    const button = document.getElementById('playPauseButton');

    button.addEventListener('click', function () {
        if (button.classList.contains('play')) {
            button.classList.remove('play');
            button.classList.add('pause');
            // Add functionality to play audio or video
        } else {
            button.classList.remove('pause');
            button.classList.add('play');
            // Add functionality to pause audio or video
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const prevButton = document.getElementById('prevButton');
    const nextButton = document.getElementById('nextButton');

    prevButton.addEventListener('click', function () {
        // Add functionality for the previous button
        console.log('Previous button clicked');
    });

    nextButton.addEventListener('click', function () {
        // Add functionality for the next button
        console.log('Next button clicked');
    });
});
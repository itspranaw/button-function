function changeText() {
    var paragraph = document.querySelector('#main-content p');
    paragraph.textContent = 'Congratulations! You clicked the button. This is OnClick function of JavaScript';
}

function sound(){
    var snd = new Audio('huh.mp3')//wav is also supported
    snd.play()//plays the sound
}

function runAway() {
    var button = document.getElementById('runawayButton');

    // Get the window dimensions
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;

    // Calculate a random position within the window
    var randomX = Math.random() * (windowWidth - button.offsetWidth);
    var randomY = Math.random() * (windowHeight - button.offsetHeight);

    var snd = new Audio('huh.mp3');
    snd.play();

    // Set the button's position
    button.style.left = randomX + 'px';
    button.style.top = randomY + 'px';
}

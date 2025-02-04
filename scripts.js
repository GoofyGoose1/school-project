let slideIndex = 1; 

function init() {
    showSlides(slideIndex);
    document.body.classList.add('fade-in');
    document.body.style.opacity ='0';
}


function toggleText() {
    const textDiv = document.getElementById('text');
    if (textDiv.style.display === "none" || textDiv.style.display === "") {
        textDiv.style.display = "block"; 
    } else {
        textDiv.style.display = "none"; 
    }
}

function showText(text) {
      
    const popupContainer = document.getElementById('popup-text-container');
    const popupText = document.getElementById('popup-text');
    
    popupText.textContent = text;
    popupContainer.style.display = 'block';

  
    setTimeout(() => {
        popupContainer.style.display = 'none';
    }, 3000);
}

function choosePath(path) {
    const storyContainer = document.getElementById('story-container');
    const storyText = document.getElementById('story-text');


    if (path === 'crouton') {
        storyText.textContent = "You have chosen the Crouton Order. The knights of hardened bread don't welcome you and prepare a feast. Your journy has ended !";
    } else if (path === 'dressing') {
        storyText.textContent = "You have entered the Dressing Coven. Rivers of ranch and vinaigrette surround you, and the emulsion sorcerers see you and prepare a feast. Your Journy has ended !";
    }
     if (path === 'Bitter Greens stand strong!') {
        storyText.textContent = "you chose the right path you may continue your journy !"
    } else if (path === 'Fruitmongers defy traditions!')
        storyText.textContent = "you chose the right path, you may continue your journy !"

    document.getElementById('popup-menu').style.display = 'none';
    storyContainer.style.display = 'block';
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

function showMessage(message) {
    const popupTextContainer = document.getElementById('popup-text-container');
    const popupText = document.getElementById('popup-text');
    popupText.innerText = message;
    popupTextContainer.style.display = 'block';
}

function blurAndShutdown(message) {
    showMessage(message);
    document.body.classList.add('blur');
    setTimeout(() => {
        document.body.innerHTML = '<h1>Journey Has Ended</h1>';
        document.body.style.textAlign = 'center';
        document.body.style.paddingTop = '20%';
        document.body.style.fontSize = '2em';
        document.body.style.color = 'red';
    }, 600); 

 }

 function returnToMenu() {
    document.body.classList.remove('blur');
    const popupTextContainer = document.getElementById('popup-text-container');
    popupTextContainer.style.display = 'none';
}

// login & register - memorize it!!! //
document.getElementById('toggle-link').addEventListener('click', function() {
    const formTitle = document.getElementById('form-title');
    const submitButton = document.querySelector('button[type="submit"]');
    if (formTitle.textContent === 'Register') {
        formTitle.textContent = 'Login';
        submitButton.textContent = 'Login';
        this.textContent = "Don't have an account? Register";
    } else {
        formTitle.textContent = 'Register';
        submitButton.textContent = 'Register';
        this.textContent = 'Already have an account? Login';
    }
});
// login & register - memorize it!!! //
document.getElementById('auth-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const formTitle = document.getElementById('form-title').textContent;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (formTitle === 'Register') {
        // Handle registration logic here
        if (username && password) {
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);
            alert('Registration successful! Please login.');
            document.getElementById('toggle-link').click();
        } else {
            alert('Please fill in all fields.');
        }
    } else {
        // Handle login logic here
        const storedUsername = localStorage.getItem('username');
        const storedPassword = localStorage.getItem('password');

        if (username === storedUsername && password === storedPassword) {
            window.location.href = 'profile.html'; 
        } else {
            alert('Invalid username or password.');
        }
    }
});

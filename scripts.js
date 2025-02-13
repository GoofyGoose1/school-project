let slideIndex = 1; 

function init() {
    document.body.classList.add('fade-in');
    document.body.style.opacity ='0';
}

function choosePath(path) {
    const storyContainer = document.getElementById('story-container');
    const storyText = document.getElementById('story-text');

    document.getElementById('popup-menu').style.display = 'none';
    storyContainer.style.display = 'block';
}

function showMessage(message) {
    const popupTextContainer = document.getElementById('popup-text-container');
    const popupText = document.getElementById('popup-text');
    popupText.innerText = message;
    popupTextContainer.style.display = 'block';
}

function blurAndShutdown(message) {
    document.body.classList.add('blur');
    setTimeout(() => {
        document.body.innerHTML = '<h1>Journey Has Ended</h1>';
        document.body.style.textAlign = 'center';
        document.body.style.fontSize = '3em';
        document.body.style.color = 'red';
    }, 600); 

 }

 function returnToMenu() {
    document.body.classList.remove('blur');
    const popupTextContainer = document.getElementById('popup-text-container');
    popupTextContainer.style.display = 'none';
}

// login & register //
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
// login & register  //
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


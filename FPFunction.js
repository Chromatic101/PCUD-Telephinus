document.addEventListener('DOMContentLoaded', function () {
    const mainInterface = document.getElementById('mainInterface');
    const loginSignupContainer = document.getElementById('loginSignupContainer');
    const studentButton = document.getElementById('studentButton');
    const teacherButton = document.getElementById('teacherButton');
    const showSignup = document.getElementById('showSignup');
    const showLogin = document.getElementById('showLogin');
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');

    // Show Login/Signup Interface when Student or Teacher button is clicked
    studentButton.addEventListener('click', function () {
        mainInterface.style.display = 'none';
        loginSignupContainer.style.display = 'flex';
        loginForm.style.display = 'block';
        signupForm.style.display = 'none';
		
    });

    teacherButton.addEventListener('click', function () {
        mainInterface.style.display = 'none';
        loginSignupContainer.style.display = 'flex';
        loginForm.style.display = 'block';
        signupForm.style.display = 'none';
		
    });

    // Toggle between Login and Signup forms
    showSignup.addEventListener('click', function (e) {
        e.preventDefault();
        loginForm.style.display = 'none';
        signupForm.style.display = 'block';
    });

    showLogin.addEventListener('click', function (e) {
        e.preventDefault();
        signupForm.style.display = 'none';
        loginForm.style.display = 'block';
    });

    // Simulate successful login/signup and return to main interface
    const loginButton = document.getElementById('loginButton');
    const signupButton = document.getElementById('signupButton');

    loginButton.addEventListener('click', function () {
        alert('Login successful!');
        loginSignupContainer.style.display = 'none';
        mainInterface.style.display = 'flex';
		window.location.href = 'TPCalendar.html';
    });

    signupButton.addEventListener('click', function () {
        alert('Signup successful!');
        loginSignupContainer.style.display = 'none';
        mainInterface.style.display = 'flex';
		window.location.href = 'TPCalendar.html';
    });
});
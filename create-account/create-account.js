document.getElementById('create-account-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form from submitting normally

    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match. Please try again.');
        return;
    }

    const users = JSON.parse(localStorage.getItem('users')) || {}; // Get existing users
    if (users[email]) {
        alert('This email is already registered. Please sign in.');
        window.location.href = "../sign-in/sign-in.html"; // Redirect to sign-in page
        return;
    }

    // Save the new user in localStorage as an object
    users[email] = { username, email, password };
    localStorage.setItem('users', JSON.stringify(users));

    // Save the username in localStorage after successful creation
    localStorage.setItem('username', username);

    alert('Account created successfully! Redirecting you to the home page.');
    
    // Redirect to the home page after account creation
    window.location.href = "../1page/index.html"; // Redirect to home page
});

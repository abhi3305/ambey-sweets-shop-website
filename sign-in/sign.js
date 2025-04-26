document.getElementById('signin-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form from submitting normally

    const emailInput = document.getElementById('email').value.trim(); // Get email input
    const users = JSON.parse(localStorage.getItem('users')) || {}; // Get all users from localStorage or empty object

    if (users[emailInput]) {
        // If user exists
        alert(`Welcome back, ${users[emailInput].username}!`);
        localStorage.setItem('loggedInEmail', emailInput); // Save logged-in user
        localStorage.setItem('username', users[emailInput].username); // Save the username as string
        window.location.href = "../1page/index.html"; // Redirect to home page
    } else {
        // If user is new
        const createAccount = confirm("No account found with this email. Would you like to create an account?");
        if (createAccount) {
            window.location.href = "../create-account/create-account.html"; // Redirect to create account page
        }
    }
});

// Select elements
const form = document.getElementById('login-form');
const errorMessage = document.getElementById('error-message');

// Example hardcoded credentials
const credentials = {
    user: { username: "user", password: "user123", role: "user" },
    admin: { username: "admin", password: "admin123", role: "admin" },
};

// Handle form submission
form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent the form from refreshing the page

    // Get input values
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    // Validate credentials
    if (
        username === credentials.user.username &&
        password === credentials.user.password
    ) {
        // Redirect user to the home page
        window.location.href = "index.html"; // Update with the actual user home page file path
    } else if (
        username === credentials.admin.username &&
        password === credentials.admin.password
    ) {
        // Redirect admin to the admin dashboard
        window.location.href = "admin.html"; // Update with the actual admin dashboard file path
    } else {
        // Display error message
        errorMessage.textContent = "Invalid username or password. Please try again.";
        errorMessage.style.color = "#d9534f"; // Optional: Customize error text color
    }
});

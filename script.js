const form = document.getElementById("regForm");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const branch = document.getElementById("branch").value;
    const phone = document.getElementById("phone").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    // Check empty fields
    if (name === "" || branch === "" || phone === "" || email === "" || password === "") {
        alert("All fields are required.");
        return;
    }

    // Password length
    if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        return;
    }

    alert("Form submitted successfully!");
});
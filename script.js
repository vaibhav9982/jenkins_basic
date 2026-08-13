const form = document.getElementById("regForm");

form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const branch = document.getElementById("branch").value;
    const phone = document.getElementById("phone").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    // Check empty fields
    if (
        name === "" ||
        branch === "" ||
        phone === "" ||
        email === "" ||
        password === ""
    ) {
        alert("All fields are required.");
        return;
    }

    // Phone validation
    if (phone.length !== 10) {
        alert("Phone number must be 10 digits.");
        return;
    }

    // Password validation
    if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        return;
    }

    const userData = {
        name,
        branch,
        phone,
        email,
        password
    };

    try {
        const response = await fetch("/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userData)
        });

        const result = await response.json();

        if (response.ok) {
            alert(result.message);
            form.reset();
        } else {
            alert(result.message || "Registration failed");
        }

    } catch (error) {
        console.error(error);
        alert("Something went wrong. Check if server is running.");
    }
});
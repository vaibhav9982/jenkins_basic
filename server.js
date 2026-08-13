const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3000;

// Allow server to read JSON data
app.use(express.json());

// Serve frontend files
app.use(express.static(__dirname));

// Register API
app.post("/register", (req, res) => {
    const { name, branch, phone, email, password } = req.body;

    // Read existing users
    const filePath = path.join(__dirname, "data.json");

    let users = [];

    if (fs.existsSync(filePath)) {
        const data = fs.readFileSync(filePath, "utf8");

        if (data.trim() !== "") {
            users = JSON.parse(data);
        }
    }

    // Create new user
    const newUser = {
        id: users.length + 1,
        name,
        branch,
        phone,
        email,
        password
    };

    // Add new user
    users.push(newUser);

    // Save back to data.json
    fs.writeFileSync(
        filePath,
        JSON.stringify(users, null, 2)
    );

    res.json({
        message: "User registered successfully!",
        user: newUser
    });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
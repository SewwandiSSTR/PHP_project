<?php
// Start session
session_start();

// Enable error reporting for debugging
ini_set('display_errors', 1);
error_reporting(E_ALL);

// Database connection
 $conn = new mysqli('localhost', 'root', '', 'foodlk');

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Create table if not exists
 $tableSql = "CREATE TABLE IF NOT EXISTS feedback (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    rating INT NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)";

if ($conn->query($tableSql) === false) {
    echo "Error creating table: " . $conn->error . "<br>";
}

// Handle form submission
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    echo "<pre>POST data: ";
    print_r($_POST);
    echo "</pre>";
    
    // Get and sanitize input
    $name = trim($_POST['name']);
    $email = trim($_POST['email']);
    $rating = intval($_POST['rating']);
    $message = trim($_POST['message']);
    
    echo "Processed data:<br>";
    echo "Name: $name<br>";
    echo "Email: $email<br>";
    echo "Rating: $rating<br>";
    echo "Message: $message<br>";
    
    // Basic validation
    if (empty($name) || empty($email) || empty($rating) || empty($message)) {
        $_SESSION['error'] = "Please fill out all fields.";
        echo "Validation failed: empty fields<br>";
    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $_SESSION['error'] = "Invalid email format.";
        echo "Validation failed: invalid email<br>";
    } else {
        echo "Validation passed<br>";
        // Advanced version with prepared statements
        $stmt = $conn->prepare("INSERT INTO feedback (name, email, rating, message, created_at) VALUES (?, ?, ?, ?, NOW())");
        
        // Check if prepare was successful
        if ($stmt === false) {
            $_SESSION['error'] = "Error preparing statement: " . $conn->error;
            echo "Statement preparation failed: " . $conn->error . "<br>";
        } else {
            echo "Statement prepared successfully<br>";
            $stmt->bind_param("ssis", $name, $email, $rating, $message);
            echo "Parameters bound successfully<br>";

            if ($stmt->execute()) {
                $_SESSION['success'] = "Thank you for your feedback!";
                echo "Data inserted successfully<br>";
                // Set cookies to remember user
                setcookie("user_name", $name, time() + (86400 * 30), "/"); // 30 days
                setcookie("user_email", $email, time() + (86400 * 30), "/");
            } else {
                $_SESSION['error'] = "Error executing statement: " . $stmt->error;
                echo "Execution failed: " . $stmt->error . "<br>";
            }
            $stmt->close();
        }
    }
    
    header("Location: feedback.html");
    exit();
}
?>
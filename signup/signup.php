<?php
session_start();
include '../db/db.php';

// Check if form is submitted
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    
    // Get and sanitize form data
    $name = trim($_POST['name']);
    $email = trim($_POST['email']);
    $password = $_POST['password'];
    $password_confirm = $_POST['password_confirm'];
    
    // Validation
    if (empty($name) || empty($email) || empty($password) || empty($password_confirm)) {
        echo '<script>alert("Please fill in all fields"); window.location.href="Signup.html";</script>';
        exit;
    }
    
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo '<script>alert("Invalid email format"); window.location.href="Signup.html";</script>';
        exit;
    }
    
    if (strlen($password) < 6) {
        echo '<script>alert("Password must be at least 6 characters long"); window.location.href="Signup.html";</script>';
        exit;
    }
    
    if ($password !== $password_confirm) {
        echo '<script>alert("Passwords do not match"); window.location.href="Signup.html";</script>';
        exit;
    }
    
    // Check if email already exists
    $check_stmt = $conn->prepare("SELECT id FROM users WHERE email = ?");
    $check_stmt->bind_param("s", $email);
    $check_stmt->execute();
    $check_result = $check_stmt->get_result();
    
    if ($check_result->num_rows > 0) {
        $check_stmt->close();
        $conn->close();
        echo '<script>alert("Email already registered. Please login instead."); window.location.href="../login/Login.html";</script>';
        exit;
    }
    $check_stmt->close();
    
    // Hash password
    $hashed_password = password_hash($password, PASSWORD_DEFAULT);
    
    // Insert new user
    $stmt = $conn->prepare("INSERT INTO users (name, email, password, created_at) VALUES (?, ?, ?, NOW())");
    $stmt->bind_param("sss", $name, $email, $hashed_password);
    
    if ($stmt->execute()) {
        $stmt->close();
        $conn->close();
        echo '<script>alert("Registration successful! Please login."); window.location.href="../login/Login.html";</script>';
        exit;
    } else {
        $stmt->close();
        $conn->close();
        echo '<script>alert("Registration failed. Please try again."); window.location.href="Signup.html";</script>';
        exit;
    }
}

$conn->close();
?>
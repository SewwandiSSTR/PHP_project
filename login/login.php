<?php
/*session_start();
include '../db/db.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $email1 = $_POST['email'];
    $password = $_POST['password'];

    // Prepared statement to prevent SQL injection
    $stmt = $conn->prepare("SELECT * FROM users WHERE email = ?");
    $stmt->bind_param("s", $email1);
    $stmt->execute();
    $result = $stmt->get_result();
    $user = $result->fetch_assoc();

    if ($user && password_verify($password, $user['password'])) {
        session_regenerate_id(true);
        $_SESSION['user_id'] = $user['id'];
        $_SESSION['user_name'] = $user['name'];
        echo "<script>alert('Login successful!'); window.location.href='../index/index.php';</script>";
        exit;
    } else {
       echo '<script>alert("invalid username  or password");</script>';

    }
}*/



session_start();
include '../db/db.php';

// Check if form is submitted
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    
    // Get and sanitize form data
    $email = trim($_POST['email']);
    $password = trim($_POST['password']);
    
    // Validation
    if (empty($email)) {
        echo '<script>alert("Email is required"); window.location.href="Login.html";</script>';
        exit;
    }
    
    if (empty($password)) {
        echo '<script>alert("Password is required"); window.location.href="Login.html";</script>';
        exit;
    }
    
    // Query database for user
    $stmt = $conn->prepare("SELECT id, name, email, password FROM users WHERE email = ?");
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $result = $stmt->get_result();
    $user = $result->fetch_assoc();
    
    // Verify user exists and password is correct
    if ($user && password_verify($password, $user['password'])) {
        // Login successful - regenerate session ID
        session_regenerate_id(true);
        
        // Create session variables
        $_SESSION['user_id'] = $user['id'];
        $_SESSION['user_name'] = $user['name'];
        $_SESSION['user_email'] = $user['email'];
        $_SESSION['logged_in'] = true;
        
        // Update last login time
        $update_stmt = $conn->prepare("UPDATE users SET last_login = NOW() WHERE id = ?");
        $update_stmt->bind_param("i", $user['id']);
        $update_stmt->execute();
        $update_stmt->close();
        
        $stmt->close();
        $conn->close();
        
        // Redirect to home page
        echo "<script>alert('Login successful! Welcome back, " . htmlspecialchars($user['name']) . "'); window.location.href='../index/index.php';</script>";
        exit;
    } else {
        $stmt->close();
        $conn->close();
        echo '<script>alert("Invalid email or password"); window.location.href="Login.html";</script>';
        exit;
    }
}

$conn->close();
?>
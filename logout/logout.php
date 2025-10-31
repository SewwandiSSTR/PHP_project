<?php
session_start();

// Destroy all session data
$_SESSION = array();

// Destroy the session cookie
if (isset($_COOKIE[session_name()])) {
    setcookie(session_name(), '', time()-3600, '/');
}

// Destroy the session
session_destroy();

// Redirect to home page
echo '<script>alert("You have been logged out successfully!"); window.location.href="../index/index.php";</script>';
exit;
?>
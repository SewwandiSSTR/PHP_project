<?php

include '../db/db.php';

// --- Create Table if not exists ---
$table = "CREATE TABLE IF NOT EXISTS outlet (
    id INT AUTO_INCREMENT PRIMARY KEY,
    city VARCHAR(100) NOT NULL,
    addres VARCHAR(255) NOT NULL,
    contact VARCHAR(50) NOT NULL
)";
mysqli_query($conn, $table);

// --- Insert data only once (if table is empty) ---
$check = mysqli_query($conn, "SELECT COUNT(*) as count FROM outlet");
$row = mysqli_fetch_assoc($check);

if ($row['count'] == 0) {
    $data = "INSERT INTO outlet (city, addres, contact) VALUES
    ('Galle', 'No. 10, Main Street, Galle', '0712345001'),
    ('Matara', 'No. 5, Beach Road, Matara', '0712345002'),
    ('Colombo', 'No. 100, High Street, Colombo', '0712345003'),
    ('Kandy', 'No. 20, Temple Road, Kandy', '0712345004'),
    ('Negombo', 'No. 15, Sea Street, Negombo', '0712345005'),
    ('Jaffna', 'No. 2, Market Road, Jaffna', '0712345006')";
    mysqli_query($conn, $data);
}

// --- Handle Search ---
$city = "";
$result = null;

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $city = trim($_POST['city']);
    // NOTE: This SQL is vulnerable to SQL Injection. Use prepared statements in production.
    $sql = "SELECT * FROM outlet WHERE city LIKE '$city'";
    $result = mysqli_query($conn, $sql);
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Outlet Finder</title>
  
  <style>
    /* --- Global Reset and Typography --- */
    body {
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; 
        margin: 0;
        padding: 0;
        background-color: #f0f3f5; /* Very light, cool gray background */
        color: #333;
        line-height: 1.6;
    }

    .container {
        max-width: 900px;
        margin: 40px auto;
        padding: 30px;
        background-color: #fff; /* White container background */
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1); 
        border-radius: 12px; 
    }

    /* --- Header & Navigation --- */
    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 30px;
        padding-bottom: 20px;
        border-bottom: 3px solid #ff7043; /* Warm, food-friendly coral/orange accent */
    }

    .header h1 {
        font-size: 2.2em;
        color: #2c3e50;
        margin: 0;
        font-weight: 700;
    }

    .home-btn {
        text-decoration: none;
        background-color: #4CAF50; /* Green primary brand color */
        color: white;
        padding: 10px 18px;
        border-radius: 25px; 
        font-weight: 600;
        transition: background-color 0.3s ease, transform 0.2s ease;
    }

    .home-btn:hover {
        background-color: #45a049; 
        transform: translateY(-2px);
    }

    /* --- Search Form --- */
    form {
        display: flex;
        gap: 15px;
        margin-bottom: 40px;
    }

    form input[type="text"] {
        flex-grow: 1;
        padding: 15px 20px;
        border: 1px solid #ddd;
        border-radius: 8px;
        font-size: 1.05em;
        transition: border-color 0.3s ease, box-shadow 0.3s ease;
    }

    form input[type="text"]:focus {
        border-color: #ff7043;
        outline: none;
        box-shadow: 0 0 5px rgba(255, 112, 67, 0.4);
    }

    form button {
        padding: 15px 30px;
        background-color: #ff7043; /* Accent color for the main action */
        color: white;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        font-size: 1.05em;
        font-weight: 600;
        transition: background-color 0.3s ease;
    }

    form button:hover {
        background-color: #e65100;
    }

    /* --- Results Section --- */
    .results {
        padding: 10px 0;
    }

    .branch {
        background-color: #ffffff; 
        border: 1px solid #e0e0e0;
        padding: 25px;
        margin-bottom: 20px;
        border-radius: 8px;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        border-left: 6px solid #ff7043; 
    }

    .branch:hover {
        transform: translateY(-3px); 
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.08);
    }

    .branch h3 {
        color: #4CAF50; /* Green accent for the city name */
        margin-top: 0;
        margin-bottom: 12px;
        font-size: 1.8em;
        font-weight: 600;
    }

    .branch p {
        margin: 8px 0;
        font-size: 0.95em;
        color: #555;
    }

    .branch strong {
        font-weight: 700;
        color: #333;
        margin-right: 5px;
    }

    .no-result {
        text-align: center;
        padding: 25px;
        background-color: #fff3cd; 
        color: #856404; 
        border: 1px solid #ffeeba;
        border-radius: 8px;
        font-weight: 600;
        border-left: 6px solid #ffc107;
    }

    /* --- Footer --- */
    footer {
        text-align: center;
        margin-top: 50px;
        padding: 20px;
        border-top: 1px solid #ddd;
        font-size: 0.85em;
        color: #777;
        background-color: #fff; 
        border-bottom-left-radius: 12px;
        border-bottom-right-radius: 12px;
    }
  </style>
  </head>
<body>

  <div class="container">
    <div class="header">
      <h1>🍽️ FoodLK Outlet Finder</h1>
      <a href="../index/index.html" class="home-btn">🏠 Home</a>
    </div>

    <form method="POST" action="">
      <input type="text" name="city" id="city" placeholder="Enter city name..." value="<?php echo htmlspecialchars($city); ?>" required>
      <button type="submit">Search</button>
    </form>

    <div class="results">
      <?php
      if ($result !== null) {
          if (mysqli_num_rows($result) > 0) {
              while ($row = mysqli_fetch_assoc($result)) {
                  echo "<div class='branch'>";
                  echo "<h3>" . htmlspecialchars($row['city']) . "</h3>";
                  // NOTE: 'addres' is misspelled in the database schema, but kept here to match.
                  echo "<p><strong>Address:</strong> " . htmlspecialchars($row['addres']) . "</p>";
                  echo "<p><strong>Contact:</strong> " . htmlspecialchars($row['contact']) . "</p>";
                  echo "</div>";
              }
          } else {
              echo "<p class='no-result'>No outlet found for city: <strong>" . htmlspecialchars($city) . "</strong></p>";
          }
      }
      ?>
    </div>
  </div>

  <footer>
    © 2025 FoodLK — All Rights Reserved
  </footer>

</body>
</html>

<?php mysqli_close($conn); ?>
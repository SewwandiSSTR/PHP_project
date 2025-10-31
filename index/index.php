<?php
session_start();
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Food LK - Home</title>
    <link rel="stylesheet" href="new.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css">
</head>

<body>
    <header>
        <input type="checkbox" name="" id="chk1">
        <div class="logo">
            <h1>👩‍🍳F o o d LK</h1>
        </div>
        <ul>
            <li><a href="../index/index.php">HOME</a></li>
            <li><a href="../menu/menu.html">MENU</a></li>
            <li><a href="../offers/offer.html">OFFERS</a></li>
            <li><a href="../blog/blog.html">BLOG</a></li>
            <li><a href="../cooking tips/cooking_tip.html">COOKING TIPS</a></li>
            <li><a href="../gallery/gallery.html">GALLERY</a></li>
            <li><a href="../about us/about.html">ABOUT US</a></li>
            <li><a href="../contactus/Contactus.html">CONTACT US</a></li>
            <li><a href="../feedback/feedback.html">FEEDBACK</a></li>
            
            <?php if (isset($_SESSION['logged_in']) && $_SESSION['logged_in'] === true): ?>
               
                <li><a href="../logout/logout.php" class="log">LOG OUT</a></li>
            <?php else: ?>
                <li><a href="../login/Login.html" class="log">LOG IN</a></li>
            <?php endif; ?>
        </ul>
        <div class="menu">
            <label for="chk1">
                <i class="fa fa-bars"></i>
            </label>
        </div>
    </header>
    
    <div class="head">
        <section class="message">
            <div>
                <?php if (isset($_SESSION['logged_in']) && $_SESSION['logged_in'] === true): ?>
                    <h1>Welcome back, <?php echo htmlspecialchars($_SESSION['user_name']); ?>!</h1>
                    <p>Ready to discover new mouth-watering recipes?</p>
                <?php else: ?>
                    <h1>Welcome to our Recipe Collection</h1>
                    <p>Search mouth watering recipes to satisfy your craving.</p>
                <?php endif; ?>
                
                <form action="#" class="search-box">
                    <input type="text" placeholder="Search-Recipe">
                    <button type="search"><i class="fa fa-search"></i></button>
                </form>
            </div>
        </section>
    </div>
    
    <section class="recipes">
        <h2>Featured recipes</h2>
        <div class="recipe-section">
            <div class="recipe-card">
                <img src="../index/img/r1.jpg" alt="">
                <h2>Burger</h2>
                <p>Vegetarian burgers are a great introduction into meatless meals. Enjoy these with goats cheese and your favourite sauces!</p>
                <a href="#">recipe</a>
            </div>
            <div class="recipe-card">
                <img src="../index/img/r2.jpg" alt="">
                <h2>Milkshakes</h2>
                <p>A milkshake is a cold, creamy beverage typically made by blending milk, ice cream, and flavorings or sweeteners.</p>
                <a href="#">recipe</a>
            </div>
            <div class="recipe-card">
                <img src="../index/img/r3.jpg" alt="">
                <h2>Chicken Biryani</h2>
                <p>Diving into the history of biryani, you'll discover a rich tapestry of flavors that's as varied and complex as the dish itself.</p>
                <a href="#">recipe</a>
            </div>
            <div class="recipe-card">
                <img src="../index/img/r4.jpg" alt="">
                <h2>Pasta</h2>
                <p>Pasta is a type of food made from unleavened dough of wheat flour and sometimes eggs, cooked by boiling or baking.</p>
                <a href="#">recipe</a>
            </div>
        </div>
    </section>

    <footer>
        <p>&copy; 2025 👩‍🍳F o o d LK . All rights reserved.</p><br>
        <p>
            Follow us on:
            <a class="f_p" href="https://facebook.com" target="_blank">Facebook</a> |
            <a class="f_p" href="https://twitter.com" target="_blank">Twitter</a> |
            <a class="f_p" href="https://instagram.com" target="_blank">Instagram</a>
        </p>
    </footer>

</body>

</html>
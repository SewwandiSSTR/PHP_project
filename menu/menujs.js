function select(){
    var selectValue=document.getElementById("mainCate").value;

if(selectValue=="app"){
    app();
}

else if(selectValue=="main"){
    main();
}

else if(selectValue=="sides"){
    sides();
}

else if(selectValue=="dessert"){
    dessert();
}

else if(selectValue=="kid"){
    kid();
}

}


function app(){
    var title=document.getElementById("title");
    title.innerHTML="<h1>"+"Appetizer / Starter"+"</h1>";

    document.getElementById("mainName1").innerHTML="<h1>"+"Tomato Basil Soup"+"</h1>";
    document.getElementById("img1").src = "../menu/web img/appimg1.jpg";
    document.getElementById("backtop1").innerHTML="<h1>"+"Tomato Basil Soup"+"</h1>";
    document.getElementById("price1").innerHTML="<p>"+"<b>"+"Price :"+"</b>"+" $6.99 (Small),$10.99 (Family Pack)"+"</p>";
    document.getElementById("size1").innerHTML="<p>"+"<b>"+"Family Pack :"+"</b> "+"Yes"+"</p>";
    document.getElementById("ingre1").innerHTML="<p>"+"<b>"+"Ingredients :"+"</b>"+"  Tomatoes, basil, garlic, onion, olive oil, vegetable stock, cream."+"</p>";

    document.getElementById("mainName2").innerHTML="<h1>"+"Caesar Salad"+"</h1>";
    document.getElementById("img2").src="../menu/web img/appimg2.jpg";
    document.getElementById("backtop2").innerHTML="<h1>"+"Caesar Salad"+"</h1>";
    document.getElementById("price2").innerHTML="<p>"+"<b>"+"Price :"+"</b>"+" $7.50 (Small),$12.99 (Family Pack)"+"</p>";
    document.getElementById("size2").innerHTML="<p>"+"<b>"+"Family Pack :"+"</b> "+"Yes"+"</p>";
    document.getElementById("ingre2").innerHTML="<p>"+"<b>"+"Ingredients :"+"</b>"+"Romaine lettuce, croutons, Parmesan cheese, Caesar dressing (egg, garlic, anchovies, lemon juice, Dijon mustard)."+"</p>";

    document.getElementById("mainName3").innerHTML="<h1>"+"Bruschetta with Tomato and Basil"+"</h1>";
    document.getElementById("img3").src="../menu/web img/appimg3.jpg";
    document.getElementById("backtop3").innerHTML="<h1>"+"Caesar Salad"+"</h1>";
    document.getElementById("price3").innerHTML="<p>"+"<b>"+"Price :"+"</b>"+" $8.50 (Serves 4)"+"</p>";
    document.getElementById("size3").innerHTML="<p>"+"<b>"+"Family Pack :"+"</b> "+"No"+"</p>";
    document.getElementById("ingre3").innerHTML="<p>"+"<b>"+"Ingredients :"+"</b>"+"Baguette, fresh tomatoes, basil, garlic, olive oil, balsamic vinegar."+"</p>";

    document.getElementById("mainName4").innerHTML="<h1>"+"Stuffed Mushrooms"+"</h1>";
    document.getElementById("img4").src="../menu/web img/appimg4.jpg";
    document.getElementById("backtop4").innerHTML="<h1>"+"Stuffed Mushrooms"+"</h1>";
    document.getElementById("price4").innerHTML="<p>"+"<b>"+"Price :"+"</b>"+" $9.99 (Serves 6)"+"</p>";
    document.getElementById("size4").innerHTML="<p>"+"<b>"+"Family Pack :"+"</b> "+"No"+"</p>";
    document.getElementById("ingre4").innerHTML="<p>"+"<b>"+"Ingredients :"+"</b>"+"Mushrooms, cream cheese, Parmesan cheese, breadcrumbs, garlic, parsley, herbs."+"</p>";

    document.getElementById("mainName5").innerHTML="<h1>"+"Caprese Salad"+"</h1>";
    document.getElementById("img5").src="../menu/web img/appim5.jpg";
    document.getElementById("backtop5").innerHTML="<h1>"+"Caprese Salad"+"</h1>";
    document.getElementById("price5").innerHTML="<p>"+"<b>"+"Price :"+"</b>"+"$7.00 (Small),13.99 (Family Pack)"+"</p>";
    document.getElementById("size5").innerHTML="<p>"+"<b>"+"Family Pack :"+"</b> "+"Yes"+"</p>";
    document.getElementById("ingre5").innerHTML="<p>"+"<b>"+"Ingredients :"+"</b>"+"Fresh mozzarella, tomatoes, fresh basil, olive oil, balsamic glaze."+"</p>";
    
    document.getElementById("mainName6").innerHTML="<h1>"+"Shrimp Cocktail"+"</h1>";
    document.getElementById("img6").src="../menu/web img/appimg6.jpg";
    document.getElementById("backtop6").innerHTML="<h1>"+"Shrimp Cocktail"+"</h1>";
    document.getElementById("price6").innerHTML="<p>"+"<b>"+"Price :"+"</b>"+"$12.00 (8 pieces)"+"</p>";
    document.getElementById("size6").innerHTML="<p>"+"<b>"+"Family Pack :"+"</b> "+"No"+"</p>";
    document.getElementById("ingre6").innerHTML="<p>"+"<b>"+"Ingredients :"+"</b>"+"Shrimp, cocktail sauce (tomato ketchup, horseradish, lemon juice, Worcestershire sauce)."+"</p>";

    document.getElementById("mainName7").innerHTML="<h1>"+"Chicken Wings (Buffalo or BBQ)"+"</h1>";
    document.getElementById("img7").src="../menu/web img/appimg7.jpg";
    document.getElementById("backtop7").innerHTML="<h1>"+"Chicken Wings (Buffalo or BBQ)"+"</h1>";
    document.getElementById("price7").innerHTML="<p>"+"<b>"+"Price :"+"</b>"+" $8.99 (6 pieces), 16.99 (12 pieces)"+"</p>";
    document.getElementById("size7").innerHTML="<p>"+"<b>"+"Family Pack :"+"</b> "+"Yes"+"</p>";
    document.getElementById("ingre7").innerHTML="<p>"+"<b>"+"Ingredients :"+"</b>"+"Chicken wings, buffalo sauce (hot sauce, butter), BBQ sauce (tomato, vinegar, sugar, spices)."+"</p>";

    document.getElementById("mainName8").innerHTML="<h1>"+"Spring Rolls (Vegetarian or Chicken)"+"</h1>";
    document.getElementById("img8").src="../menu/web img/appimg8.jpg";
    document.getElementById("backtop8").innerHTML="<h1>"+"Spring Rolls (Vegetarian or Chicken)"+"</h1>";
    document.getElementById("price8").innerHTML="<p>"+"<b>"+"Price :"+"</b>"+"$6.99 (4 pieces)"+"</p>";
    document.getElementById("size8").innerHTML="<p>"+"<b>"+"Family Pack :"+"</b> "+"Yes"+"</p>"; 
    document.getElementById("ingre8").innerHTML="<p>"+"<b>"+"Ingredients :"+"</b>"+"Rice paper, cabbage, carrots, mushrooms, tofu or chicken, soy sauce, sesame oil."+"</p>";
    
    document.getElementById("mainName9").innerHTML="<h1>"+"Deviled Eggs"+"</h1>";
    document.getElementById("img9").src="../menu/web img/appimg9.jpg";
    document.getElementById("backtop9").innerHTML="<h1>"+"Deviled Eggs"+"</h1>";
    document.getElementById("price9").innerHTML="<p>"+"<b>"+"Price :"+"</b>"+"$5.99 (6 pieces)"+"</p>";
    document.getElementById("size9").innerHTML="<p>"+"<b>"+"Family Pack :"+"</b> "+"No"+"</p>";
    document.getElementById("ingre9").innerHTML="<p>"+"<b>"+"Ingredients :"+"</b>"+"Eggs, mayonnaise, mustard, vinegar, paprika."+"</p>";
}
function main(){
    var title=document.getElementById("title");
    title.innerHTML="<h1>"+"Main Cource / Entrees"+"</h1>";

    document.getElementById("mainName1").innerHTML="<h1>"+"Grilled Ribeye Steak"+"</h1>";
    document.getElementById("img1").src="../menu/web img/main1.jpg";
    
    document.getElementById("backtop1").innerHTML="<h1>"+"Grilled Ribeye Steak"+"</h1>";
    document.getElementById("price1").innerHTML="<p>"+"<b>"+"Price :"+"</b>"+"$25.99 (Single) |45.99 (Family Pack)"+"</p>";
    document.getElementById("size1").innerHTML="<p>"+"<b>"+"Family Pack :"+"</b> "+"No"+"</p>";    
    document.getElementById("ingre1").innerHTML="<p>"+"<b>"+"Ingredients :"+"</b>"+"Ribeye steak, olive oil, garlic, rosemary, salt, black pepper."+"</p>";

    document.getElementById("mainName2").innerHTML="<h1>"+"Chicken Parmesan"+"</h1>";
    document.getElementById("img2").src="../menu/web img/main2.jpg";
    document.getElementById("backtop2").innerHTML="<h1>"+"Chicken Parmesan"+"</h1>";
    document.getElementById("price2").innerHTML="<p>"+"<b>"+"Price :"+"</b>"+"$19.99 (Single) |34.99 (Family Pack)"+"</p>";
    document.getElementById("size2").innerHTML="<p>"+"<b>"+"Family Pack :"+"</b> "+"Yes"+"</p>";    
    document.getElementById("ingre2").innerHTML="<p>"+"<b>"+"Ingredients :"+"</b>"+"Chicken breasts, marinara sauce, mozzarella cheese, parmesan cheese, breadcrumbs, pasta."+"</p>";

    document.getElementById("mainName3").innerHTML="<h1>"+"Beef Wellington"+"</h1>";
    document.getElementById("img3").src="../menu/web img/main3.jpg";
    document.getElementById("backtop3").innerHTML="<h1>"+"Beef Wellington"+"</h1>";
    document.getElementById("price3").innerHTML="<p>"+"<b>"+"Price :"+"</b>"+"$39.99 (Single) |79.99 (Family Pack)"+"</p>";
    document.getElementById("size3").innerHTML="<p>"+"<b>"+"Family Pack :"+"</b> "+"Yes"+"</p>";    
    document.getElementById("ingre3").innerHTML="<p>"+"<b>"+"Ingredients :"+"</b>"+"Beef tenderloin, puff pastry, mushrooms, pate, mustard."+"</p>";

    document.getElementById("mainName4").innerHTML="<h1>"+"Pan-Seared Salmon"+"</h1>";
    document.getElementById("img4").src="../menu/web img/main4.jpg";
    document.getElementById("backtop4").innerHTML="<h1>"+"Pan-Seared Salmon"+"</h1>";
    document.getElementById("price4").innerHTML="<p>"+"<b>"+"Price :"+"</b>"+"$23.99 (Single) |45.99 (Family Pack)"+"</p>";
    document.getElementById("size4").innerHTML="<p>"+"<b>"+"Family Pack :"+"</b> "+"No"+"</p>";
    document.getElementById("ingre4").innerHTML="<p>"+"<b>"+"Ingredients :"+"</b>"+"Salmon fillet, olive oil, garlic, lemon, herbs."+"</p>";

    document.getElementById("mainName5").innerHTML="<h1>"+"Lobster Tail with Butter Sauce"+"</h1>";
    document.getElementById("img5").src="../menu/web img/main5.jpg";
    document.getElementById("backtop5").innerHTML="<h1>"+"Lobster Tail with Butter Sauce"+"</h1>";
    document.getElementById("price5").innerHTML="<p>"+"<b>"+"Price :"+"</b>"+"$29.99 (Single) |55.99 (Family Pack)"+"</p>";
    document.getElementById("size5").innerHTML="<p>"+"<b>"+"Family Pack :"+"</b> "+"No"+"</p>";   
    document.getElementById("ingre5").innerHTML="<p>"+"<b>"+"Ingredients :"+"</b>"+"Lobster tail, butter, garlic, lemon, parsley."+"</p>";

    document.getElementById("mainName6").innerHTML="<h1>"+"Spaghetti Bolognese"+"</h1>";
    document.getElementById("img6").src="../menu/web img/main6.jpg";
    document.getElementById("backtop6").innerHTML="<h1>"+"Spaghetti Bolognese"+"</h1>";
    document.getElementById("price6").innerHTML="<p>"+"<b>"+"Price :"+"</b>"+"$15.99 (Single) |29.99 (Family Pack)"+"</p>";
    document.getElementById("size6").innerHTML="<p>"+"<b>"+"Family Pack :"+"</b> "+"Yes"+"</p>";    
    document.getElementById("ingre6").innerHTML="<p>"+"<b>"+"Ingredients :"+"</b>"+"Ground beef, tomatoes, onion, garlic, olive oil, spaghetti."+"</p>";

    document.getElementById("mainName7").innerHTML="<h1>"+"Roast Duck with Orange Sauce"+"</h1>";
    document.getElementById("img7").src="../menu/web img/main7.jpg";
    document.getElementById("backtop7").innerHTML="<h1>"+"Roast Duck with Orange Sauce"+"</h1>";
    document.getElementById("price7").innerHTML="<p>"+"<b>"+"Price :"+"</b>"+"$34.99 (Single) |69.99 (Family Pack)"+"</p>";
    document.getElementById("size7").innerHTML="<p>"+"<b>"+"Family Pack :"+"</b> "+"No"+"</p>";
    document.getElementById("ingre7").innerHTML="<p>"+"<b>"+"Ingredients :"+"</b>"+"Duck, orange juice, honey, rosemary, garlic, olive oil."+"</p>";

    document.getElementById("mainName8").innerHTML="<h1>"+"Chicken Alfredo"+"</h1>";
    document.getElementById("img8").src="../menu/web img/main8.jpg";
    document.getElementById("backtop8").innerHTML="<h1>"+"Chicken Alfredo"+"</h1>";
    document.getElementById("price8").innerHTML="<p>"+"<b>"+"Price :"+"</b>"+"$17.99 (Single) |33.99 (Family Pack)"+"</p>";
    document.getElementById("size8").innerHTML="<p>"+"<b>"+"Family Pack :"+"</b> "+"Yes"+"</p>";
    document.getElementById("ingre8").innerHTML="<p>"+"<b>"+"Ingredients :"+"</b>"+"Chicken breast, fettuccine, heavy cream, parmesan cheese,garlic,butter."+"</p>";

    document.getElementById("mainName9").innerHTML="<h1>"+"Grilled Shrimp Skewers"+"</h1>";
    document.getElementById("img9").src="../menu/web img/main9.jpg";
    document.getElementById("backtop9").innerHTML="<h1>"+"Grilled Shrimp Skewers"+"</h1>";
    document.getElementById("price9").innerHTML="<p>"+"<b>"+"Price :"+"</b>"+"$21.99 (Single) |41.99 (Family Pack)"+"</p>";
    document.getElementById("size9").innerHTML="<p>"+"<b>"+"Family Pack :"+"</b> "+"Yes"+"</p>";
    document.getElementById("ingre9").innerHTML="<p>"+"<b>"+"Ingredients :"+"</b>"+"Shrimp, olive oil, garlic, lemon, herbs."+"</p>";

}
function sides(){
    var title=document.getElementById("title");
    title.innerHTML="<h1>"+"Slides"+"</h1>";

    document.getElementById("mainName1").innerHTML="<h1>"+"Mashed Potatoes"+"</h1>";
    document.getElementById("img1").src="../menu/web img/side1.jpg";
    document.getElementById("backtop1").innerHTML="<h1>"+"Mashed Potatoes"+"</h1>";
    document.getElementById("price1").innerHTML="<p>"+"<b>"+"Price :"+"</b>"+"$5.99 (Single) |12.99 (Family Pack - 4 servings)"+"</p>";
    document.getElementById("size1").innerHTML="<p>"+"<b>"+"Family Pack :"+"</b> "+"Yes"+"</p>";   
    document.getElementById("ingre1").innerHTML="<p>"+"<b>"+"Ingredients :"+"</b>"+"Potatoes, butter, cream, garlic, salt, pepper."+"</p>";

    document.getElementById("mainName2").innerHTML="<h1>"+"Garlic Bread"+"</h1>";
    document.getElementById("img2").src="../menu/web img/side2.jpg";
    document.getElementById("backtop2").innerHTML="<h1>"+"Garlic Bread"+"</h1>";
    document.getElementById("price2").innerHTML="<p>"+"<b>"+"Price :"+"</b>"+"$4.99 (Single) |9.99 (Family Pack - 8 pieces)"+"</p>";
    document.getElementById("size2").innerHTML="<p>"+"<b>"+"Family Pack :"+"</b> "+"Yes"+"</p>";
    document.getElementById("ingre2").innerHTML="<p>"+"<b>"+"Ingredients :"+"</b>"+"Baguette, butter, garlic, parsley, olive oil."+"</p>";

    document.getElementById("mainName3").innerHTML="<h1>"+"Steamed Broccoli"+"</h1>";
    document.getElementById("img3").src="../menu/web img/side3.jpg";
    document.getElementById("backtop3").innerHTML="<h1>"+"Steamed Broccoli"+"</h1>";
    document.getElementById("price3").innerHTML="<p>"+"<b>"+"Price :"+"</b>"+"$6.99 (Single) |13.99 (Family Pack - 4 servings)"+"</p>";
    document.getElementById("size3").innerHTML="<p>"+"<b>"+"Family Pack :"+"</b> "+"Yes"+"</p>";
    document.getElementById("ingre3").innerHTML="<p>"+"<b>"+"Ingredients :"+"</b>"+"Broccoli, water, salt."+"</p>";

    document.getElementById("mainName4").innerHTML="<h1>"+"French Fries"+"</h1>";
    document.getElementById("img4").src="../menu/web img/side4.jpg";
    document.getElementById("backtop1").innerHTML="<h1>"+"French Fries"+"</h1>";
    document.getElementById("price4").innerHTML="<p>"+"<b>"+"Price :"+"</b>"+"$3.99 (Single) |7.99 (Family Pack - 2 servings)"+"</p>";
    document.getElementById("size4").innerHTML="<p>"+"<b>"+"Family Pack :"+"</b> "+"Yes"+"</p>";
    document.getElementById("ingre4").innerHTML="<p>"+"<b>"+"Ingredients :"+"</b>"+"Potatoes, vegetable oil, salt."+"</p>";

    document.getElementById("mainName5").innerHTML="<h1>"+"Roasted Vegetables"+"</h1>";
    document.getElementById("img5").src="../menu/web img/side5.jpg";
    document.getElementById("backtop5").innerHTML="<h1>"+"Roasted Vegetables"+"</h1>";
    document.getElementById("price5").innerHTML="<p>"+"<b>"+"Price :"+"</b>"+"$7.99 (Single) |15.99 (Family Pack - 4 servings)"+"</p>";
    document.getElementById("size5").innerHTML="<p>"+"<b>"+"Family Pack :"+"</b> "+"Yes"+"</p>";
    document.getElementById("ingre5").innerHTML="<p>"+"<b>"+"Ingredients :"+"</b>"+"Carrots, zucchini, bell peppers, olive oil, thyme, rosemary."+"</p>";

    document.getElementById("mainName6").innerHTML="<h1>"+"Rice Pilaf"+"</h1>";
    document.getElementById("img6").src="../menu/web img/side6.jpg";
    document.getElementById("backtop6").innerHTML="<h1>"+"Rice Pilaf"+"</h1>";
    document.getElementById("price6").innerHTML="<p>"+"<b>"+"Price :"+"</b>"+"$5.49 (Single) |10.99 (Family Pack - 4 servings)"+"</p>";
    document.getElementById("size6").innerHTML="<p>"+"<b>"+"Family Pack :"+"</b> "+"Yes"+"</p>";    
    document.getElementById("ingre6").innerHTML="<p>"+"<b>"+"Ingredients :"+"</b>"+"Rice, chicken broth, onions, garlic, butter, herbs."+"</p>";

    document.getElementById("mainName7").innerHTML="<h1>"+"Coleslaw"+"</h1>";
    document.getElementById("img7").src="../menu/web img/side7.jpg";
    document.getElementById("backtop7").innerHTML="<h1>"+"Coleslaw"+"</h1>";
    document.getElementById("price7").innerHTML="<p>"+"<b>"+"Price :"+"</b>"+"$4.99 (Single) |9.99 (Family Pack - 4 servings)"+"</p>";
    document.getElementById("size7").innerHTML="<p>"+"<b>"+"Family Pack :"+"</b> "+"Yes"+"</p>";
    document.getElementById("ingre7").innerHTML="<p>"+"<b>"+"Ingredients :"+"</b>"+"Cabbage, carrots, mayonnaise, vinegar, sugar."+"</p>";
 
    document.getElementById("mainName8").innerHTML="<h1>"+"Grilled Asparagus"+"</h1>";
    document.getElementById("img8").src="../menu/web img/side8.jpg";
    document.getElementById("backtop8").innerHTML="<h1>"+"Grilled Asparagus"+"</h1>";
    document.getElementById("price8").innerHTML="<p>"+"<b>"+"Price :"+"</b>"+"$7.99 (Single) |14.99 (Family Pack - 4 servings)"+"</p>";
    document.getElementById("size8").innerHTML="<p>"+"<b>"+"Family Pack :"+"</b> "+"Yes"+"</p>";
    document.getElementById("ingre8").innerHTML="<p>"+"<b>"+"Ingredients :"+"</b>"+"Asparagus, olive oil, garlic, salt, pepper."+"</p>";
  
    document.getElementById("mainName9").innerHTML="<h1>"+"Sweet Potato Fries"+"</h1>";
    document.getElementById("img9").src="../menu/web img/side9.jpg";
    document.getElementById("backtop9").innerHTML="<h1>"+"Sweet Potato Fries"+"</h1>";
    document.getElementById("price9").innerHTML="<p>"+"<b>"+"Price :"+"</b>"+"$5.99 (Single) |11.99 (Family Pack - 2 servings)"+"</p>";
    document.getElementById("size9").innerHTML="<p>"+"<b>"+"Family Pack :"+"</b> "+"Yes"+"</p>";
    document.getElementById("ingre9").innerHTML="<p>"+"<b>"+"Ingredients :"+"</b>"+"Sweet potatoes, vegetable oil, salt, cinnamon."+"</p>";

}
function dessert(){
    var title=document.getElementById("title");
    title.innerHTML="<h1>"+"Desserts"+"</h1>";

    document.getElementById("mainName1").innerHTML="<h1>"+"Chocolate Lava Cake"+"</h1>";
    document.getElementById("img1").src="../menu/web img/des1.jpg";
    document.getElementById("backtop1").innerHTML="<h1>"+"Chocolate Lava Cake"+"</h1>";
    document.getElementById("price1").innerHTML="<p>"+"<b>"+"Price :"+"</b>"+"$6.99 (Single) |18.99 (Family Pack - 4 servings)"+"</p>";
    document.getElementById("size1").innerHTML="<p>"+"<b>"+"Family Pack :"+"</b> "+"Yes"+"</p>";
    document.getElementById("ingre1").innerHTML="<p>"+"<b>"+"Ingredients :"+"</b>"+"Dark chocolate, butter, sugar, eggs, flour, vanilla extract."+"</p>";

    document.getElementById("mainName2").innerHTML="<h1>"+"Cheesecake with Fruit Compote"+"</h1>";
    document.getElementById("img2").src="../menu/web img/des2.jpg";
    document.getElementById("backtop2").innerHTML="<h1>"+"Cheesecake with Fruit Compote"+"</h1>";
    document.getElementById("price2").innerHTML="<p>"+"<b>"+"Price :"+"</b>"+"$7.49 (Single Slice) |22.99 (Whole - 8 slices)"+"</p>";
    document.getElementById("size2").innerHTML="<p>"+"<b>"+"Family Pack :"+"</b> "+"Yes"+"</p>";   
    document.getElementById("ingre2").innerHTML="<p>"+"<b>"+"Ingredients :"+"</b>"+"Cream cheese, sugar, eggs, graham crackers, butter, mixed berries."+"</p>";


    document.getElementById("mainName3").innerHTML="<h1>"+"Tiramisu"+"</h1>";
    document.getElementById("img3").src="../menu/web img/des3.jpg";
    document.getElementById("backtop3").innerHTML="<h1>"+"Tiramisu"+"</h1>";
    document.getElementById("price3").innerHTML="<p>"+"<b>"+"Price :"+"</b>"+"$6.99 (Single) |20.99 (Family Pack - 4 servings)"+"</p>";
    document.getElementById("size3").innerHTML="<p>"+"<b>"+"Family Pack :"+"</b> "+"Yes"+"</p>";    
    document.getElementById("ingre3").innerHTML="<p>"+"<b>"+"Ingredients :"+"</b>"+"Ladyfingers, mascarpone cheese, eggs, coffee, cocoa powder, sugar, chocolate."+"</p>";

    document.getElementById("mainName4").innerHTML="<h1>"+"Apple Pie with Vanilla Ice Cream"+"</h1>";
    document.getElementById("img4").src="../menu/web img/des4.jpg";
    document.getElementById("backtop4").innerHTML="<h1>"+"Apple Pie with Vanilla Ice Cream"+"</h1>";
    document.getElementById("price4").innerHTML="<p>"+"<b>"+"Price :"+"</b>"+"$5.99 (Single Slice) |18.99 (Whole Pie)"+"</p>";
    document.getElementById("size4").innerHTML="<p>"+"<b>"+"Family Pack :"+"</b> "+"Yes"+"</p>";
    document.getElementById("ingre4").innerHTML="<p>"+"<b>"+"Ingredients :"+"</b>"+"Apples, sugar, cinnamon, pie crust, vanilla ice cream."+"</p>";
 
    document.getElementById("mainName5").innerHTML="<h1>"+"Crème Brûlée"+"</h1>";
    document.getElementById("img5").src="../menu/web img/des5.jpg";
    document.getElementById("backtop5").innerHTML="<h1>"+"Crème Brûlée"+"</h1>";
    document.getElementById("price5").innerHTML="<p>"+"<b>"+"Price :"+"</b>"+"$6.99 (Single) |24.99 (Family Pack - 4 servings)"+"</p>";
    document.getElementById("size5").innerHTML="<p>"+"<b>"+"Family Pack :"+"</b> "+"Yes"+"</p>";
    document.getElementById("ingre5").innerHTML="<p>"+"<b>"+"Ingredients :"+"</b>"+"Heavy cream, vanilla bean, egg yolks, sugar."+"</p>";

    document.getElementById("mainName6").innerHTML="<h1>"+"Lemon Meringue Pie"+"</h1>";
    document.getElementById("img6").src="../menu/web img/des6.jpg";
    document.getElementById("backtop6").innerHTML="<h1>"+"Lemon Meringue Pie"+"</h1>";
    document.getElementById("price6").innerHTML="<p>"+"<b>"+"Price :"+"</b>"+"$5.99 (Single Slice) |16.99 (Whole Pie)"+"</p>";
    document.getElementById("size6").innerHTML="<p>"+"<b>"+"Family Pack :"+"</b> "+"Yes"+"</p>";
    document.getElementById("ingre6").innerHTML="<p>"+"<b>"+"Ingredients :"+"</b>"+"Lemons, eggs, sugar, butter, meringue."+"</p>";

    document.getElementById("mainName7").innerHTML="<h1>"+"Panna Cotta with Berry Sauce"+"</h1>";
    document.getElementById("img7").src="../menu/web img/des7.jpg";
    document.getElementById("backtop7").innerHTML="<h1>"+""+"</h1>";
    document.getElementById("price7").innerHTML="<p>"+"<b>"+"Price :"+"</b>"+"$6.49 (Single) |22.99 (Family Pack - 4 servings)"+"</p>";
    document.getElementById("size7").innerHTML="<p>"+"<b>"+"Family Pack :"+"</b> "+"Yes"+"</p>";    
    document.getElementById("ingre7").innerHTML="<p>"+"<b>"+"Ingredients :"+"</b>"+"Heavy cream, sugar, vanilla extract, mixed berries."+"</p>";

    document.getElementById("mainName8").innerHTML="<h1>"+"Chocolate Mousse"+"</h1>";
    document.getElementById("img8").src="../menu/web img/des8.jpg";
    document.getElementById("backtop8").innerHTML="<h1>"+"Chocolate Mousse"+"</h1>";
    document.getElementById("price8").innerHTML="<p>"+"<b>"+"Price :"+"</b>"+"$5.99 (Single) |17.99 (Family Pack - 4 servings)"+"</p>";
    document.getElementById("size8").innerHTML="<p>"+"<b>"+"Family Pack :"+"</b> "+"Yes"+"</p>";    
    document.getElementById("ingre8").innerHTML="<p>"+"<b>"+"Ingredients :"+"</b>"+"Dark chocolate, heavy cream, sugar, eggs, vanilla extract."+"</p>";
 
    document.getElementById("mainName9").innerHTML="<h1>"+"Fruit Sorbet"+"</h1>";
    document.getElementById("img9").src="../menu/web img/des9.jpg";
    document.getElementById("backtop9").innerHTML="<h1>"+"Fruit Sorbet"+"</h1>";
    document.getElementById("price9").innerHTML="<p>"+"<b>"+"Price :"+"</b>"+"$4.99 (Single) |12.99 (Family Pack - 4 servings)"+"</p>";
    document.getElementById("size9").innerHTML="<p>"+"<b>"+"Family Pack :"+"</b> "+"Yes"+"</p>";    
    document.getElementById("ingre9").innerHTML="<p>"+"<b>"+"Ingredients :"+"</b>"+"Fresh fruit, sugar, lemon juice."+"</p>";
}

function kid(){
    var title=document.getElementById("title");
    title.innerHTML="<h1>"+"Kid's Menu"+"</h1>";

    document.getElementById("mainName1").innerHTML="<h1>"+"Chicken Tenders with Fries"+"</h1>";
    document.getElementById("img1").src="../menu/web img/kid1.jpg";
    document.getElementById("backtop1").innerHTML="<h1>"+"Chicken Tenders with Fries"+"</h1>";
    document.getElementById("price1").innerHTML="<p>"+"<b>"+"Price :"+"</b>"+"$7.99 (Single) |22.99 (Family Pack - 4 servings)"+"</p>";
    document.getElementById("size1").innerHTML="<p>"+"<b>"+"Family Pack :"+"</b> "+"Yes"+"</p>";    
    document.getElementById("ingre1").innerHTML="<p>"+"<b>"+"Ingredients :"+"</b>"+"Chicken breast tenders, breadcrumbs, fries, ketchup."+"</p>";

    document.getElementById("mainName2").innerHTML="<h1>"+"Mini Pizza"+"</h1>";
    document.getElementById("img2").src="../menu/web img/kid2.jpg";
    document.getElementById("backtop2").innerHTML="<h1>"+"Mini Pizza"+"</h1>";
    document.getElementById("price2").innerHTML="<p>"+"<b>"+"Price :"+"</b>"+"$6.99 (Single) |18.99 (Family Pack - 4 servings)"+"</p>";
    document.getElementById("size2").innerHTML="<p>"+"<b>"+"Family Pack :"+"</b> "+"Yes"+"</p>";    
    document.getElementById("ingre2").innerHTML="<p>"+"<b>"+"Ingredients :"+"</b>"+"Pizza dough, mozzarella cheese, tomato sauce, pepperoni (optional), oregano."+"</p>";

    document.getElementById("mainName3").innerHTML="<h1>"+"Spaghetti with Marinara Sauce"+"</h1>";
    document.getElementById("img3").src="../menu/web img/kid3.jpg";
    document.getElementById("backtop3").innerHTML="<h1>"+"Spaghetti with Marinara Sauce"+"</h1>";
    document.getElementById("price3").innerHTML="<p>"+"<b>"+"Price :"+"</b>"+"$6.49 (Single) |18.99 (Family Pack - 4 servings)"+"</p>";
    document.getElementById("size3").innerHTML="<p>"+"<b>"+"Family Pack :"+"</b> "+"Yes"+"</p>";
    document.getElementById("ingre3").innerHTML="<p>"+"<b>"+"Ingredients :"+"</b>"+"Spaghetti, marinara sauce (tomatoes, garlic, onions,basil),Parmesan cheese."+"</p>";

    document.getElementById("mainName4").innerHTML="<h1>"+"Grilled Cheese Sandwich"+"</h1>";
    document.getElementById("img4").src="../menu/web img/kid4.jpg";
    document.getElementById("backtop4").innerHTML="<h1>"+"Grilled Cheese Sandwich"+"</h1>";
    document.getElementById("price4").innerHTML="<p>"+"<b>"+"Price :"+"</b>"+"$5.99 (Single) |16.99 (Family Pack - 4 servings)"+"</p>";
    document.getElementById("size4").innerHTML="<p>"+"<b>"+"Family Pack :"+"</b> "+"Yes"+"</p>";
    document.getElementById("ingre4").innerHTML="<p>"+"<b>"+"Ingredients :"+"</b>"+"Bread, cheddar cheese, butter."+"</p>";

    document.getElementById("mainName5").innerHTML="<h1>"+"Macaroni and Cheese"+"</h1>";
    document.getElementById("img5").src="../menu/web img/kid5.jpg";
    document.getElementById("backtop5").innerHTML="<h1>"+"Macaroni and Cheese"+"</h1>";
    document.getElementById("price5").innerHTML="<p>"+"<b>"+"Price :"+"</b>"+"$6.99 (Single) |19.99 (Family Pack - 4 servings)"+"</p>";
    document.getElementById("size5").innerHTML="<p>"+"<b>"+"Family Pack :"+"</b> "+"Yes"+"</p>";
    document.getElementById("ingre5").innerHTML="<p>"+"<b>"+"Ingredients :"+"</b>"+"Macaroni pasta, cheddar cheese, butter, milk, flour."+"</p>";

    document.getElementById("mainName6").innerHTML="<h1>"+" Hot Dog with Chips"+"</h1>";
    document.getElementById("img6").src="../menu/web img/kid6.jpg";
    document.getElementById("backtop6").innerHTML="<h1>"+" Hot Dog with Chips"+"</h1>";
    document.getElementById("price6").innerHTML="<p>"+"<b>"+"Price :"+"</b>"+"$5.49 (Single) |15.99 (Family Pack - 4 servings)"+"</p>";
    document.getElementById("size6").innerHTML="<p>"+"<b>"+"Family Pack :"+"</b> "+"Yes"+"</p>";
    document.getElementById("ingre6").innerHTML="<p>"+"<b>"+"Ingredients :"+"</b>"+" Hot dog sausage, hot dog bun, potato chips, mustard (optional)."+"</p>";

    document.getElementById("mainName7").innerHTML="<h1>"+"Hot Dog with Chips"+"</h1>";
    document.getElementById("img7").src="../menu/web img/kid7.jpg";
    document.getElementById("backtop7").innerHTML="<h1>"+"Hot Dog with Chips"+"</h1>";
    document.getElementById("price7").innerHTML="<p>"+"<b>"+"Price :"+"</b>"+"$6.99 (Single) |19.99 (Family Pack - 4 servings)"+"</p>";
    document.getElementById("size7").innerHTML="<p>"+"<b>"+"Family Pack :"+"</b> "+"Yes"+"</p>";
    document.getElementById("ingre7").innerHTML="<p>"+"<b>"+"Ingredients :"+"</b>"+"Hot dog sausage, hot dog bun, potato chips, mustard (optional)."+"</p>";

    document.getElementById("mainName8").innerHTML="<h1>"+"Chicken Nuggets"+"</h1>";
    document.getElementById("img8").src="../menu/web img/kid8.jpg";
    document.getElementById("backtop8").innerHTML="<h1>"+"Chicken Nuggets"+"</h1>";
    document.getElementById("price8").innerHTML="<p>"+"<b>"+"Price :"+"</b>"+"$7.99 (Single) |22.99 (Family Pack - 4 servings)- Family Pack: Yes"+"</p>";
    document.getElementById("size8").innerHTML="<p>"+"<b>"+"Family Pack :"+"</b> "+"Yes"+"</p>";
    document.getElementById("ingre8").innerHTML="<p>"+"<b>"+"Ingredients :"+"</b>"+"Chicken breast, breadcrumbs, flour, egg, vegetable oil."+"</p>";

    document.getElementById("mainName9").innerHTML="<h1>"+"Mini Burgers"+"</h1>";
    document.getElementById("img9").src="../menu/web img/kid9.jpg";
    document.getElementById("backtop9").innerHTML="<h1>"+"Mini Burgers"+"</h1>";
    document.getElementById("price9").innerHTML="<p>"+"<b>"+"Price :"+"</b>"+"$8.99 (Single - 2 burgers) |24.99 (Family Pack - 4 servings)"+"</p>";
    document.getElementById("size9").innerHTML="<p>"+"<b>"+"Family Pack :"+"</b> "+"Yes"+"</p>";
    document.getElementById("back-des9").innerHTML="<p>"+"<b>"+"Description :"+"</b>"+"Two mini burgers with cheese, lettuce, pickles, and ketchup on soft buns."+"</p>";
    document.getElementById("ingre9").innerHTML="<p>"+"<b>"+"Ingredients :"+"</b>"+"Mini burger patties, hamburger buns, cheese, lettuce, ketchup, pickles."+"</p>"; 
}

  
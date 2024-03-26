const ingredientPrices = {
    Banana: 1.50,
    Strawberry: 2.00,
    Blueberry: 1.75,
    Spinach: 1.25,
    Kale: 1.50
};

function createSmoothie() {
    const name = document.getElementById('name').value;
    const size = document.getElementById('size').value;
    const ingredients = [];

    // Retrieving selected ingredients
    const ingredientCheckboxes = document.querySelectorAll('input[type="checkbox"]');
    ingredientCheckboxes.forEach(checkbox => {
        if (checkbox.checked) {
            ingredients.push(checkbox.value);
        }
    });

    const smoothie = {
        name: name,
        size: size,
        ingredients: ingredients
    };

    displaySmoothie(smoothie);
}

function displaySmoothie(smoothie) {
    const smoothieOutput = document.getElementById('smoothieOutput');
    let totalPrice = 0;

    // Calculating total price
    smoothie.ingredients.forEach(ingredient => {
        totalPrice += ingredientPrices[ingredient];
    });

    // Displaying smoothie details
    smoothieOutput.innerHTML = `
        <h2>Your Smoothie:</h2>
        <p><strong>Name:</strong> ${smoothie.name}</p>
        <p><strong>Size:</strong> ${smoothie.size}</p>
        <p><strong>Ingredients:</strong> ${smoothie.ingredients.join(', ')}</p>
        <p><strong>Total Price:</strong> $${totalPrice.toFixed(2)}</p>
        <img src="${getSmoothieImage(smoothie.ingredients)}" alt="Smoothie Image">
    `;
}

function getSmoothieImage(ingredients) {
    // Choose image based on selected ingredients
    const smoothieImages = {
        'Banana': 'img/smoothie_banana.jpg',
        'Strawberry': 'img/smoothie_strawberry.jpg',
        'Blueberry': 'img/smoothie_blueberry.jpg',
        'Spinach': 'img/smoothie_spinach.jpg',
        'Kale': 'img/smoothie_kale.jpg',
        'Banana, Strawberry': 'img/smoothie_banana_strawberry.jpg',
        'Banana, Blueberry': 'img/smoothie_banana_blueberry.jpg',
        'Strawberry, Blueberry': 'img/smoothie_strawberry_blueberry.jpg',
        'Banana, Strawberry, Blueberry': 'img/smoothie_banana_strawberry_blueberry.jpg',
        'Banana, Spinach': 'img/smoothie_banana_spinach.jpg',
        'Banana, Kale': 'img/smoothie_banana_kale.jpg',
    };

    // Return default image if no specific combination found
    const defaultImage = 'img/smoothie_default.jpg';
    const key = ingredients.sort().join(', ');
    return smoothieImages[key] ? smoothieImages[key] : defaultImage;
}


const supermarketProducts = [
    { name: 'Apple', price: 2.5, quantity: 10, discount: 5 },
    { name: 'Banana', price: 1.0, quantity: 8, discount: 3 },
    { name: 'Milk', price: 3.0, quantity: 2, discount: 0 },
    { name: 'Bread', price: 2.0, quantity: 5, discount: 2 },
    { name: 'Eggs', price: 1.5, quantity: 12, discount: 1 },
    { name: 'Chicken', price: 5.0, quantity: 3, discount: 8 },
    { name: 'Rice', price: 4.0, quantity: 7, discount: 4 },
    { name: 'Tomatoes', price: 1.8, quantity: 6, discount: 2 },
    { name: 'Pasta', price: 2.2, quantity: 4, discount: 1 },
    { name: 'Cheese', price: 3.5, quantity: 3, discount: 5 },
    { name: 'Yogurt', price: 1.2, quantity: 8, discount: 0 },
    { name: 'Cereal', price: 2.8, quantity: 3, discount: 3 },
    { name: 'Orange Juice', price: 3.5, quantity: 2, discount: 2 },
    { name: 'Salmon', price: 8.0, quantity: 1, discount: 10 },
    { name: 'Cucumber', price: 1.0, quantity: 5, discount: 1 },
    { name: 'Chocolate', price: 2.5, quantity: 4, discount: 3 },
    { name: 'Shampoo', price: 4.0, quantity: 2, discount: 0 },
    { name: 'Toothpaste', price: 1.5, quantity: 3, discount: 1 },
    { name: 'Towel', price: 5.0, quantity: 1, discount: 5 },
    { name: 'Laundry Detergent', price: 3.0, quantity: 2, discount: 2 },
  ];
  const totalprice = []
  
  supermarketProducts.forEach(element =>{
    const totalcost = [];
    totalcost = element.quantity * element.price
    totalprice.push(totalcost)
    console.log(totalcost);
  })
  
  
// Write a JavaScript program that creates a class called Product with properties for product ID, name, and price. Include a method to calculate the total price by multiplying the price by the quantity. Create a subclass called PersonalCareProduct that inherits from the Product class and adds an additional property for the warranty period. Override the total price calculation method to include the warranty period. Create an instance of the PersonalCareProduct class and calculate its total price.

// My Solution
class Product {
    constructor(ID, name, price) {
        this.ID = ID;
        this.name = name;
        this.price = price;
    }
    calculateTotal (quantity) {
        return this.price * quantity;
    }
}

class PersonalCareProduct extends Product {
    constructor(ID, name, price, warranty) {
        super(ID, name, price);
        this.warranty = warranty;
    }
    calculateTotal (quantity) {
        const totalPrice = super.calculateTotal(quantity);
        return totalPrice + this.warranty;
    }
}

const product1 = new PersonalCareProduct(18, "Shampoo", 4, 2)

// w3resource Solution
class Product {
    constructor(id, name, price) {
      this.id = id;
      this.name = name;
      this.price = price;
    }
  
    calculateTotalPrice(quantity) {
      return this.price * quantity;
    }
  }
  
  class PersonalCareProduct extends Product {
    constructor(id, name, price, warrantyPeriod) {
      super(id, name, price);
      this.warrantyPeriod = warrantyPeriod;
    }
  
    calculateTotalPrice(quantity) {
      const totalPrice = super.calculateTotalPrice(quantity);
      return totalPrice + this.warrantyPeriod;
    }
  }
  
  // Create an instance of the PersonalCareProduct class
  const personalCareProduct = new PersonalCareProduct(1, 'Shampoo', 10, 2);
  
  // Calculate the total price
  const totalPrice = personalCareProduct.calculateTotalPrice(3);
  
  console.log(`Total Price: $${totalPrice}`);
  
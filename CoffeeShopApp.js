class CoffeeShop {
  constructor(name, menu, orders) {
    this.name = name;
    this.menu = menu;
    this.orders = orders;
  }

  addOrder(order) {
    const findOrders = this.menu.filter((x) => x.item === order);
    if (findOrders.length) {
      this.orders.push(...findOrders);
      return "Order added!";
    } else {
      return "This item is currently unavailable!";
    }
  }

  fulfillOrder() {
    if (this.orders.length > 0) {
      this.orders.map((x) => console.log(`The ${x.item} is ready!`));
      this.orders = [];
    } else {
      console.log(`All orders have been fullfilled`);
    }
  }
  shopName() {
    return this.name;
  }

  listOrders() {
    return this.orders.map((product) => product.item).join(", ");
  }

  dueAmount() {
    let result = this.orders.reduce(function (acc, item) {
      return acc + item.price;
    }, 0);
    return result;
  }

  cheapestItem() {
    let result = this.menu.reduce((prev, next) =>
      prev.price < next.price ? prev : next
    );
    return "lowest", result.item;
  }
  drinksOnly() {
    return this.menu.filter((x) => x.type === "drink");
  }
  foodsOnly() {
    return this.menu.filter((x) => x.type === "food");
  }
}
const newOrd = new CoffeeShop(
  "franko",
  [
    { item: "beer", type: "drink", price: 3 },
    { item: "milk", type: "drink", price: 2 },
    { item: "pizza", type: "food", price: 8 },
    { item: "tiramisu", type: "food", price: 4 },
    { item: "salad", type: "food", price: 5 },
  ],
  []
);

console.log(newOrd.addOrder("beer"));
console.log(newOrd.addOrder("beer"));
console.log(newOrd.addOrder("pizza"));
console.log(newOrd.addOrder("tiramisu"));

console.log("listOrders ==> ", newOrd.listOrders());
console.log("dueAmount ==> ", newOrd.dueAmount());
console.log("foodsOnly ==> ", newOrd.foodsOnly());
console.log("drinksOnly ==> ", newOrd.drinksOnly());
console.log("cheapestItem ==> ", newOrd.cheapestItem());

newOrd.fulfillOrder();

console.log(newOrd);

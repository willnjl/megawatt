((d, w) => {
  const shop = d.querySelector("#shop");
  const PRICE = 20;

  if (shop) {
    let quantity = 1;
    const buy = shop.querySelector("#shop-buy");
    const quantityElem = shop.querySelector("#shop-quantity");
    const increment = shop.querySelector("#shop-increment");
    const decrement = shop.querySelector("#shop-decrement");
    const priceElem = shop.querySelector("#shop-price");

    const handleIncrement = (amount) => {
      quantity = quantity + amount > 0 ? quantity + amount : 1;
      quantityElem.innerHTML = quantity;
      priceElem.innerHTML = quantity * PRICE;

      buy.setAttribute(
        "href",
        `https://curieusgames.myshopify.com/cart/39388475916360:${quantity}?channel=buy_button`
      );
    };

    increment.addEventListener("click", () => handleIncrement(1));
    decrement.addEventListener("click", () => handleIncrement(-1));
  }
})(document, window);

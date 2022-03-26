import React, { useState } from "react";
import CartComponent from "../cart/cart";

const ProductListComponent = (props) => {
  const [amount, setTotalAmount] = useState(0);
  const [itemsCount, setItemsCount] = useState(0);
  const data = {
    count: itemsCount,
    amount: amount,
  };

  return (
    <div className="products-container">
      <div className="products-header"></div>
      <div className="products-list">
        <ul>
          {
            props.searchList.map((ele, k) => {
              return (
                <li className="product-item" key={ele._id}>
                  <span>
                    <img className="fruit-image" src={`data:image/png;base64,${ele.image}`} alt="" />
                  </span>
                  <span className="product-list-detail">
                    <h1>{ele.product_name}</h1>
                    <h2>{ele.description}</h2>
                  </span>
                  <span>${ele.price}</span>
                  <span>
                    <button className="add-to-cart-button" onClick={() => { setItemsCount(itemsCount + 1); setTotalAmount(amount + ele.price) }}>Add to Cart</button>
                  </span>
                </li>
              )
            })
          }
        </ul>
      </div>
      <CartComponent value={data} />
    </div>
  )
}

export default ProductListComponent;
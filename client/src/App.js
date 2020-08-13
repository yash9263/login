import React, { useState, useEffect } from "react";
import LoginForm from "./components/LoginForm";
//SERVICES
import productService from "./services/productService";

function App() {
  const [products, setproducts] = useState(null);

  useEffect(() => {
    if (!products) {
      getProducts();
    }
  });

  const getProducts = async () => {
    let res = await productService.getAll();
    console.log(res);
    setproducts(res);
  };

  const renderProduct = (product) => {
    return (
      <li key={product._id} className="list_item product">
        <h3 className="product__name">{product.name}</h3>
        <p className="product__description">{product.description}</p>
      </li>
    );
  };

  return (
    <div className="App">
      <ul className="list">
        {products && products.length > 0 ? (
          products.map((product) => renderProduct(product))
        ) : (
          <p>No products found</p>
        )}
      </ul>
      <LoginForm />
    </div>
  );
}

export default App;

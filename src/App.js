import React, { useState } from "react";
import "./App.css";

const productsData = [
  { id: 1, name: "Laptop", description: "A powerful machine", price: 70000 },
  { id: 2, name: "Smartphone", description: "Latest mobile device", price: 30000 },
  { id: 3, name: "Headphones", description: "Noise-cancelling", price: 5000 },
  { id: 4, name: "Keyboard", description: "Mechanical keyboard", price: 2000 },
  { id: 5, name: "Monitor", description: "Full HD display", price: 10000 },
  { id: 6, name: "Mouse", description: "Ergonomic wireless mouse", price: 1500 },
  { id: 7, name: "Tablet", description: "Portable and lightweight", price: 25000 },
  { id: 8, name: "Smartwatch", description: "Track your fitness", price: 8000 },
  { id: 9, name: "Charger", description: "Fast-charging adapter", price: 1000 },
  { id: 10, name: "Speakers", description: "Bluetooth portable speakers", price: 3500 },
  { id: 11, name: "Webcam", description: "HD video calling", price: 2500 },
  { id: 12, name: "Power Bank", description: "10000mAh backup", price: 1200 },
  { id: 13, name: "Printer", description: "Inkjet color printer", price: 6000 },
  { id: 14, name: "External Hard Drive", description: "1TB storage", price: 4500 },
  { id: 15, name: "Graphics Card", description: "For high-end gaming", price: 40000 },
];



function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = productsData.filter(product =>
  product.name.toLowerCase().startsWith(searchTerm.toLowerCase())
);


  return (
    <div className="App">
      <h1 style={{color : '#fff'}}>PRODUCT LIST</h1>
    

      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="product-list">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <p><strong>₹{product.price}</strong></p>
            </div>
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
}

export default App;

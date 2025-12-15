import { useState } from "react";
import "./App.css";
const productsData = [
  {
    id: 1,
    name: "Men T-Shirt",
    price: 499,
    desc: "Premium cotton slim-fit T-shirt for daily wear.",
    img: "https://cdn.pixabay.com/photo/2024/04/29/04/21/tshirt-8726716_1280.jpg"
  },
  {
    id: 2,
    name: "Saree",
    price: 899,
    desc: "Stylish floral dress perfect for casual outings.",
    img: "https://i.pinimg.com/originals/6c/31/0a/6c310a0c950262dacd447f59e057ea64.jpg"
  },
  {
    id: 3,
    name: "Sneakers",
    price: 1299,
    desc: "Comfortable sneakers with modern design.",
    img: "https://couponsjournal.com/blog/wp-content/uploads/2023/07/trending-sneakers-for-men.jpg"
  },
  {
    id: 4,
    name: "Smart Watch",
    price: 2499,
    desc: "Fitness tracking smartwatch with sleek look.",
    img: "https://m.media-amazon.com/images/I/71KjTSO8M9L._SL1500_.jpg"
  },
  {
    id: 5,
    name: "Men Jeans",
    price: 799,
    desc: "Stretchable denim jeans for all-day comfort.",
    img: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=600"
  },
  {
    id: 6,
    name: "Women Top",
    price: 599,
    desc: "Soft fabric top with trendy design.",
    img: "https://i5.walmartimages.com/asr/4b9b573f-73b1-442c-83b1-d5e473b1764b_1.13a361ab4d727430d22dfe1b6f609830.jpeg"
  },
  {
    id: 7,
    name: "Headphones",
    price: 1599,
    desc: "Noise-isolation headphones with deep bass.",
    img: "https://wallpapercave.com/wp/wp6128206.jpg"
  },
  {
    id: 8,
    name: "Backpack",
    price: 1099,
    desc: "Durable backpack suitable for travel & college.",
    img: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=600"
  },
  {
    id: 9,
    name: "Sunglasses",
    price: 999,
    desc: "UV protected sunglasses with premium finish.",
    img: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600"
  },
  {
    id: 10,
    name: "Jacket",
    price: 2999,
    desc: "Warm stylish jacket for winter season.",
    img: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=600"
  },
  {
    id: 11,
    name: "Wallet",
    price: 699,
    desc: "Genuine leather wallet with multiple slots.",
    img: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=600"
  },
  {
    id: 12,
    name: "Perfume",
    price: 1999,
    desc: "Long-lasting fragrance with premium aroma.",
    img: "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=600"
  }
];
export default function App() {
  const [page, setPage] = useState("home");
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState("");
  const addToCart = (product) => {
    if (!cart.find(item => item.id === product.id)) {
      setCart([...cart, product]);
    }
  };
  const removeFromCart = (id) => {
  setCart(cart.filter(item => item.id !== id));
};
  const filteredProducts = productsData.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div className="app-layout">
      { }
      <nav className="navbar">
        <h1 className="brand" onClick={() => setPage("home")}>
          🛒 Shop<span>Cart</span>
        </h1>
        <input
          className="search"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="menu">
          <span onClick={() => setPage("home")}>Home</span>
          <span onClick={() => setPage("contact")}>Contact</span>
          <span onClick={() => setPage("cart")}> My Cart {cart.length}</span>
          <button className="login-btn" onClick={() => setPage("login")}> Login </button>
        </div>
      </nav>
      { }
      <main className="content">
        {page === "home" && (
          <section className="products">
            {filteredProducts.map(p => (
              <div className="product-card" key={p.id}>
                <div className="img-box">
                  <img src={p.img} loading="lazy" />
                </div>
                <h3>{p.name}</h3>
                <p className="desc">{p.desc}</p>
                <p className="price">₹{p.price}</p>
                <div className="actions">
                <button onClick={() => addToCart(p)}>Add to Cart</button>
              <button className="buy">Buy</button>
              </div>
              </div>
            ))}
          </section>
        )}
        {page === "cart" && (
        <section className="cart">
        {cart.map(item => (
         <div className="cart-card" key={item.id}>
          <img src={item.img} alt={item.name} />
          <div className="cart-info">
          <h3>{item.name}</h3>
          <p>₹{item.price}</p>
          <div className="cart-actions">
            <button className="remove" onClick={() => removeFromCart(item.id)}> Remove</button>
            <button className="buy">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    ))}
  </section>
)}
        {page === "login" && (
          <section className="page center">
            <div className="login-box">
              <h2>Login</h2>
              <input placeholder="Username" />
              <input placeholder="Email" />
              <input type="password" placeholder="Password" />
              <button>Login</button>
            </div>
          </section>
        )}
        {page === "contact" && (
          <section className="page">
            <h2>Customer Feedback</h2>
            <div className="feedback">
              <div className="feedback-card">
                <h4> Anandh ⭐⭐⭐⭐</h4>
                <p>Excellent product quality and fast delivery.</p>
              </div>
              <div className="feedback-card">
                <h4> Harini ⭐⭐⭐⭐⭐</h4>
                <p>Good pricing and smooth shopping experience.</p>
              </div>
              <div className="feedback-card">
                <h4> Adhwik ⭐⭐⭐⭐</h4>
                <p>Very professional website and support.</p>
              </div>
              <div className="feedback-card">
                <h4>Anvika ⭐⭐⭐⭐⭐</h4>
                <p>Fast delivery and good service</p>
              </div>
              <div className="feedback-card">
                <h4>Virat ⭐⭐⭐⭐</h4>
                <p>Amazing products with worth prices.</p>
              </div>
              <div className="feedback-card">
                <h4> Raj ⭐⭐⭐⭐⭐</h4>
                <p>Very professional and branded value.</p>
              </div>
            </div>  
            <div className="contact-info">
              <p>📞 Customer Care: +91 98765 43210</p>
              <p>📧 support@shopcart.com</p>
            </div>
          </section>
        )}
      </main>
      { }
      <footer>
        <h3>🛒 ShopCart</h3>
        <p>© 2025 ShopCart™. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

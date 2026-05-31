"use client";

import { useState } from "react";

export default function Home() {
  const [cartCount, setCartCount] = useState(0);
  const [search, setSearch] = useState("");

  return (
    <>

      <nav>
        <h2>My Store</h2>

        <button>Home</button>
        <button>Products</button>
        <button>Contact</button>
        <button>Cart ({cartCount})</button>
      </nav>

      {/* Home */}
      <h1>My E-Commerce Website</h1>

      {/* Login */}
      <h2>Login</h2>

      <input
        type="text"
        placeholder="Enter Username"
      />

      <br />
      <br />

      <input
        type="password"
        placeholder="Enter Password"
      />

      <br />
      <br />

      <button>Login</button>
      <button>Register</button>


      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div>
        <h2>Featured Products</h2>

        <div>
          <h3>Laptop</h3>
          <p>Price: $500</p>

          <button onClick={() =>
            setCartCount(cartCount + 1)}>
            Add to Cart
          </button>
        </div>
      </div>

      <div className="product-container">

        <div className="product-card">
          <h3>Mobile Phone</h3>
          <p>Price: ₹15,000</p>

          <button
            onClick={() =>
              setCartCount(cartCount + 1)
            }
          >
            Buy Now
          </button>

          <button
            onClick={() =>
              setCartCount(
                Math.max(0, cartCount - 1)
              )
            }
          >
            Remove
          </button>
        </div>

        {/* Laptop */}
        <div className="product-card">
          <h3>Laptop</h3>
          <p>Price: ₹45,000</p>

          <button
            onClick={() =>
              setCartCount(cartCount + 1)
            }
          >
            Buy Now
          </button>

          <button
            onClick={() =>
              setCartCount(
                Math.max(0, cartCount - 1)
              )
            }
          >
            Remove
          </button>
        </div>
      </div>

      {/* Shopping Cart */}
      <h2>Shopping Cart</h2>

      <div className="product-card">
        <p>Items in cart: {cartCount}</p>

        {cartCount === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <p>Products added successfully</p>
        )}
      </div>

      {/* Footer */}
      <footer>
        <p>© 2026 My Store. All Rights Reserved.</p>
      </footer>
    </>
  );
}
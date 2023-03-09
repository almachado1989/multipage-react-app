import { Route, Routes } from "react-router-dom"
import { useState } from "react"
import "./App.css"
import Nav from "./components/Nav"
import Cart from "./components/Cart"
import Shoes from "./components/pages/Shoes"
import Hats from "./components/pages/Hats"
import Home from "./components/pages/Home"

function App() {
  const [cartItems, setCartItems] = useState([])
  const [total, setTotal] = useState(0)

  return (
    <div className="App">
      <Nav />
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route
            path={"/shoes"}
            element={
              <Shoes
                cartItems={cartItems}
                setCartItems={setCartItems}
                setTotal={setTotal}
              />
            }
          ></Route>
          <Route
            path={"/hats"}
            element={
              <Hats
                cartItems={cartItems}
                setCartItems={setCartItems}
                setTotal={setTotal}
              />
            }
          ></Route>
        </Routes>
      </main>
      <Cart
        cartItems={cartItems}
        setCartItems={setCartItems}
        total={total}
        setTotal={setTotal}
      />
    </div>
  )
}

export default App

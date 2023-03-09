import Button from "./buttons/Button"

export default function Cart(props) {
  function removeItem(id) {
    console.log(id)
    const updatedCart = props.cartItems.filter((item, i) => i !== id)
    props.setCartItems(updatedCart)
    props.setTotal(updatedCart.reduce((acc, item) => acc + item.price, 0))
  }

  return (
    <div className="cart">
      <ol className="cart-items">
        {props.cartItems.map((item, idx) => {
          return (
            <li className="cart-item" key={idx}>
              <img src={item.src} alt={item.name} />
              <span>
                {item.name} - £{item.price}
              </span>
              <Button
                buttonText="Remove"
                handleClick={() => removeItem(idx)}
              ></Button>
            </li>
          )
        })}
      </ol>
      <p className="cart-total">
        {props.total ? <p>Total = £{props.total}</p> : <p>No items in cart</p>}
      </p>
    </div>
  )
}

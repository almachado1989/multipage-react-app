import Button from "./buttons/Button"

export default function Item(props) {
  function handleItemClick() {
    props.setCartItems([...props.cartItems, props.product])
    props.setTotal((prevTotal) => prevTotal + props.product.price)
  }
  return (
    <div className="item">
      <img src={props.product.src} alt={props.product.name} />
      <div className="item-details">
        <span>{props.product.name}</span>
        <span> £{props.product.price}</span>
      </div>
      <Button buttonText="Add to Cart" handleClick={handleItemClick} />
    </div>
  )
}

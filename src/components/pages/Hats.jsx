import Item from "../Item"
export default function Hats(props) {
  const products = [
    {
      name: "Hat",
      price: 15,
      id: 4,
      src: "https://akubra.co.uk/wp-content/uploads/sites/2/2022/04/angler-hat1649338601.jpg",
    },
    {
      name: "Cooler Hat",
      price: 50,
      id: 5,
      src: "https://i.etsystatic.com/9169083/r/il/f96dd9/2877360185/il_fullxfull.2877360185_p85g.jpg",
    },
    {
      name: "Coolest Hat",
      price: 100,
      id: 6,
      src: "https://i.insider.com/61d36d1e99a7690019de748f?width=1000&format=jpeg&auto=webp",
    },
  ]
  return (
    <div className="item-list">
      {products.map((product, idx) => {
        return (
          <Item
            key={idx}
            product={product}
            cartItems={props.cartItems}
            setCartItems={props.setCartItems}
            setTotal={props.setTotal}
          />
        )
      })}
    </div>
  )
}

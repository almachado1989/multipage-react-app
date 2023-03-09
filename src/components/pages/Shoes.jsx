import Item from "../Item"

export default function Shoes(props) {
  const products = [
    {
      name: "Shoes",
      price: 100,
      id: 1,
      src: "https://images.vans.com/is/image/VansEU/VN0A3WMAVNE-HERO?$PDP-FULL-IMAGE$",
    },
    {
      name: "Cooler Shoes",
      price: 200,
      id: 2,
      src: "https://i.ebayimg.com/images/g/Gm8AAOSwVuBddKA8/s-l500.jpg",
    },
    {
      name: "Coolest Shoes",
      price: 500,
      id: 3,
      src: "https://cdn.shopify.com/s/files/1/0046/9139/4658/products/Winsford_394517_BlackPolish_015edd64-5036-41cd-a28d-b1d18a5d9d07_580x.png?v=1575357572",
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

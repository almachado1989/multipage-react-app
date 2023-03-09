export default function Pizza(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      {props.ingredients.map((ingredient, idx) => {
        return <p key={idx}>{ingredient}</p>
      })}
    </div>
  )
}

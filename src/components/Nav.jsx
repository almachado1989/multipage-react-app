import { Link } from "react-router-dom"

export default function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/shoes"}>Shoes</Link>
        </li>
        <li>
          <Link to={"/hats"}>Hats</Link>
        </li>
      </ul>
    </nav>
  )
}

import { Link } from "react-router-dom";
import "../App.css"

function Header() {
  return (
    <header style={{ padding: "10px", textAlign: "center", background: "#007bff", color:"white" , textDecoration: "none" }}>
      <Link style={{ color:"white" , textDecoration: "none" }} to="/">🏠 Home</Link>
    </header>
  );
}

export default Header;

<<<<<<< HEAD
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar(){
    return( 
        <nav className="navbar">
            <Link to="/">Home</Link> | {" "}
            <Link to="/about">About</Link> |{" "}
            <Link to="/contact">Contact</Link>
        </nav>
    );

}
export default Navbar;
=======
import "./Navbar.css";
function Navbar() {
  return (
    <nav id="navbar" style={{ padding: "20px", backgroundColor: "#eee" }}>
      <ul style={{ display: "flex", listStyle: "none", gap: "20px", justifyContent: "center" }}>
        <li><a href="#hero">Home</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#footer">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
>>>>>>> b3d9d91e4301b01ad4ad4a2f558c3ed61097873a

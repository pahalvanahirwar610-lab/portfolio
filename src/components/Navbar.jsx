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

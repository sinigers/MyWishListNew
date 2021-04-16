import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Продукти</h1>
      <div className="links">
        <Link to="/">Нов списък</Link>
        <Link to="/create">Нов продукт</Link>
        <Link to="/additem">Търси</Link>

        {/* ako e napisano taka -isprashta zaiavka kam servera
                <a href="/">Home</a>
                <a href="/create">New blog</a> */}
      </div>
    </nav>
  );
};

export default Navbar;

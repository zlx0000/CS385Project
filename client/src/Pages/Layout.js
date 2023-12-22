import { Outlet, Link } from "react-router-dom";
import '../Style/Layout.css'

function Layout() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/search">Search Items</Link>
        <Link to="/release">Release New Item</Link>
        <Link to="/aboutus">About Us</Link> 
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;
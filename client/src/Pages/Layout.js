import { Outlet, Link } from "react-router-dom";

function Layout() {
  return (
    <>
      <nav>
        <h1>This is the Item Sharing Store</h1> 
        <Link to="/">Home</Link> <Link to="/search">Search Items</Link> <Link to="/release">Release New Item</Link> 
        
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;
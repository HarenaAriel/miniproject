import { Link } from "react-router-dom";

export default function Navbar() {
  const title = "blog";

  return (
    <>
      <div className="navbar">
        <h1>{title}</h1>
        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/Create">New Blog</Link>
        </div>
      </div>
    </>
  );
}

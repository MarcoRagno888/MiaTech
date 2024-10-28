import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="p-4 m-2">
            <div>
                <Link className="btn" to="/">Home</Link>
            </div>
            <div>
                <Link className="btn" to="/about">About</Link>
            </div>
        </nav>
    )
}

export default Navbar;

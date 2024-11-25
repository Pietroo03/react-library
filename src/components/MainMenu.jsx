import { NavLink } from "react-router";

export default function MainMenu() {
    return (
        <nav className="d-flex gap-4 fs-5 ">
            <NavLink to="/" className="nav-link">Home</NavLink>
            <NavLink to="/books" className="nav-link">Books</NavLink>
            <NavLink to="/about" className="nav-link">About</NavLink>
            <NavLink to="/contacts" className="nav-link">Contacts</NavLink>
        </nav>
    )
}
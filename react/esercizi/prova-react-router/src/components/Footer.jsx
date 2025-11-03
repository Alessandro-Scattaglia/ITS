import { NavLink } from "react-router-dom"; // Importa NavLink da react-router-dom

export default function Footer() {
  return (
    <footer>
      <nav>
        <ul className="flex items-center gap-3">
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "font-bold underline text-secondary" : ""
              }
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "font-bold underline text-secondary" : ""
              }
              to="/blog"
            >
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "font-bold underline text-secondary" : ""
              }
              to="/about"
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "font-bold underline text-secondary" : ""
              }
              to="/contacts"
            >
              Contatti
            </NavLink>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

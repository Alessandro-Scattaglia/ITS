import { NavLink } from "react-router-dom"; // Assicurati di importare da 'react-router-dom'

export default function Header() {
  return (
    <header>
      <nav>
        <ul className="flex items-center gap-3">
          <h1>
            <NavLink to='/'>blog</NavLink></h1>
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
              to="/contatti"
            >
              Contatti
            </NavLink>
          </li>

           <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "font-bold underline text-secondary" : ""
              }
              to="/login"
            >
              Login
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

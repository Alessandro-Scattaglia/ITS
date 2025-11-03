import { useRef, useState } from "react";
import { useNavigate } from "react-router";
export default function LoginForm() {
  const navigate = useNavigate();
  const [activeLabels, setActiveLabels] = useState({
    email: false,
    password: false,
  });

  function handleFocus(field) {
    setActiveLabels((prev) => ({ ...prev, [field]: true }));
  }

  function handleBlur(e, field) {
    // Se il campo è vuoto, rimuovi la classe active
    if (!e.target.value) {
      setActiveLabels((prev) => ({ ...prev, [field]: false }));
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");
    console.log(formData, email, password);
    navigate("/");
  }

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} noValidate>
        <h1>Accedi</h1>
        <div>
          <label htmlFor="email" className={activeLabels.email ? "active" : ""}>
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            onFocus={() => handleFocus("email")}
            onBlur={(e) => handleBlur(e, "email")}
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className={activeLabels.password ? "active" : ""}
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            onFocus={() => handleFocus("password")}
            onBlur={(e) => handleBlur(e, "password")}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

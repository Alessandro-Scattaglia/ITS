import "./styles.css";


import { createBrowserRouter, RouterProvider } from "react-router";


import Homepage from "./pages/Homepage";
import LoginForm from "./components/LoginForm";
import Layout from "./Layout";
import Blog from "./pages/Blog";
import About from "./pages/About";
import Contatti from "./pages/Contatti";
import BlogCategory from "./pages/BlogCategory";




export default function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      Component: Layout,
      children: [
        { index: true, Component: Homepage },
        { path: "blog", Component: Blog, },
        {path: "blog/:categoryId", Component: BlogCategory},
        { path: "about", Component: About },
        { path: "contatti", Component: Contatti },
        {path: "login", Component: LoginForm}
      ]
    },

  ],
  );

  return <RouterProvider router={routes} />;
}

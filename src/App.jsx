import Layout from "./Component/layout/Layout";
import {createHashRouter,createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Component/home/Home";
import About from "./Component/about/About";
import Contact from "./Component/contact/Contact";
import Portfolio from "./Component/portfolio/Portfolio";
import NotFound from "./Component/notFound/NotFound";

function App() {
  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <Layout />,
        children: [
          { index: true, element: <Home /> },
          { path: "about", element: <About /> },
          { path: "contact", element: <Contact /> },
          { path: "portfolio", element: <Portfolio /> },
        ],
      },
      { path: "*", element: <NotFound /> },
    ],
    {
      basename: "/First-React-Project",
    }
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

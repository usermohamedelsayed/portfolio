import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { About, Contact, Home, Layout, Projects } from "./components";
import "./index.scss";
const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/projects",
          element: <Projects />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
      ],
    },
  ]);
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
};
export default App;

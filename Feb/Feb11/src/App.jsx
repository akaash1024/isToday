import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppLayout } from "./component/Layout/AppLayout";
import { ErrorPage } from "./component/pages/ErrorPage";
import { Home } from "./component/pages/Home";
import { About } from "./component/pages/About";
import { Country } from "./component/pages/Country";
import { CountryDetails } from "./component/pages/CountryDetails";
import { Contact } from "./component/pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
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
        path: "/country",
        element: <Country />,
      },
      {
        path: "/country-details",
        element: <CountryDetails />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App
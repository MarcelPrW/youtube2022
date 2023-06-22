import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Products from "./pages/Products/Products";
import Product from "./pages/Product/Product";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";

import "./app.scss";
import { Provider } from "react-redux";
import Categories from "./components/CategoriesPrompt/CategoriesPrompt";

const Layout = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="app">
          <Navbar />
          <Outlet />
          <Footer />
        </div>
      </PersistGate>
    </Provider>
  );
};

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
        path: "/produkty/:category",
        element: <Products />,
      },
      {
        path: "/produkt/:id",
        element: <Product />,
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

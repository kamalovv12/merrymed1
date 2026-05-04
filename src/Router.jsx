import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "./global.css";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/home";
import Products from "./pages/products";
import NotFound from "./pages/page-not-found";
// import News from "./pages/news";
import { Suspense } from "react";
import { Spinner } from "@nextui-org/react";
import SingleProduct from "./pages/SingleProduct";
import NewNews from "./pages/new-news";
import ContactPage from "./pages/contact";
import Vacancy from "./pages/vacancy";
import Gallery from "./pages/gallery";

const Router = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index path="/" element={<Home />} />
        <Route path="/news" element={<NewNews />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/products" element={<Products />} />
        <Route path="products/:id" element={<SingleProduct />} />
        {/* <Route path="/news/:id" element={<News />} /> */}
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/vacancy" element={<Vacancy />} />
        <Route path="/gallery" element={<Gallery />} />
      </Route>
    )
  );
  return (
    <>
      <Suspense
        fallback={
          <div className="w-[100vw] h-[100vh] flex justify-center items-center">
            <Spinner />
          </div>
        }
      >
        <RouterProvider router={router} />
      </Suspense>
    </>
  );
};

export default Router;

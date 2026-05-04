import ReactDOM from "react-dom/client";
import Router from "./Router.jsx";
import { HelmetProvider } from "react-helmet-async";
import { NextUIProvider } from "@nextui-org/react";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  <HelmetProvider>
    <NextUIProvider>
      <Router />
    </NextUIProvider>
    <Toaster />
  </HelmetProvider>
);

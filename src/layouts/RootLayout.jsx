import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/view";
import Footer from "../components/footer/view/index";
import { I18nextProvider } from "react-i18next";
import i18n from "../locales";
import TopButton from "./TopButton";

const RootLayout = () => {
  return (
    <>
      <I18nextProvider i18n={i18n}>
        <TopButton />
        <Navbar />
        <main>
          <Outlet />
        </main>
        <Footer />
      </I18nextProvider>
    </>
  );
};

export default RootLayout;

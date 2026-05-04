import CopyRight from "../../svg/CopyRight";
import useLocales from "../../hooks/useLocales";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link/dist/react-router-hash-link.cjs.production";

import FooterLogo from "../../assets/logo.e54a09ff9b95177251e4.png";

const Footer = () => {
  const { t } = useLocales();
  return (
    <footer className="w-full grid grid-cols-3 lg:grid-cols-1 lg:place-content-center justify-center gap-3  px-[1rem] bg-[#1b1b1b] text-lightGray py-20 *:font-robotoCondensed">
      <p className="font-light flex">
        <CopyRight />
        {t("2024 Merrymed All Rights reserved")}
      </p>
      <ul className="grid lg:!grid-cols-1 grid-cols-3 gap-5 lg:!place-items-start lg:px-[8px] place-content-center place-items-center">
        <li>
          <HashLink to="/#about">{t("ABOUT US")}</HashLink>
        </li>
        <li>
          <Link to="/products">{t("PRODUCTS")}</Link>
        </li>
        <li>
          <Link to="/news">{t("NEWS")}</Link>
        </li>
      </ul>
      <a href="tel:+998906986466">
        <img className="w-[120px]  object-contain" src={FooterLogo} />
      </a>
    </footer>
  );
};

export default Footer;

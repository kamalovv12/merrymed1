import { Link } from "react-router-dom";
import {
  Button,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import { UzFlag, RuFlag, UsFlag, CellPhoneIcon } from "../../svg/view";
import { useEffect, useState } from "react";
import useLocales from "../../hooks/useLocales";
import logo from "../../assets/img/Logo@.png";
import { useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import GoToTop from "../../layouts/GoToTop";

const DesktopNav = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const { t, onChangeLang, i18n } = useLocales();
  const location = useLocation();
  const fullWidth = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.scrollY;
      setScrollPosition(currentPosition);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav className="lg:hidden sticky top-0 w-full h-[61px] z-50">
      <GoToTop />
      <div
        className={`flex flex-row ${
          scrollPosition === 0 && fullWidth
            ? "justify-end"
            : "justify-between desktop-nav shadow-[0px_5px_10px_rgba(0,0,0,0.05)]"
        } items-center w-full h-full `}
      >
        <div
          className={`${
            scrollPosition === 0 && fullWidth && "hidden"
          } flex flex-row justify-center items-center  gap-6`}
        >
          <a
            href="tel:+998692288000"
            className="flex flex-row justify-center items-center gap-2 l:hidden"
          >
            <CellPhoneIcon className="fill-black" />
            <span className="typography-5 text-nowrap">+99869 228-80-00</span>
          </a>
          <Link to="/" className="w-max h-max">
            <img
              src={logo}
              alt="logo-merrymed"
              className="xl:hidden max-w-[80%]"
              width={130}
            />
          </Link>
        </div>
        <div
          className={`${
            scrollPosition === 0 && fullWidth
              ? "w-full max-w-max px-4 rounded-b-[12px] mr-3 bg-primary justify-center"
              : "w-full justify-end"
          } h-full transition-[width] text-white  flex flex-row gap-4 items-center pr-[1%]`}
        >
          <Dropdown className="min-w-[60px]">
            <DropdownTrigger>
              <button className="bg-transparent w-max h-max">
                {i18n.language === "uz" && <UzFlag />}
                {i18n.language === "ru" && <RuFlag />}
                {i18n.language === "en" && <UsFlag />}
              </button>
            </DropdownTrigger>
            <DropdownMenu
              aria-label="Action"
              className="w-max"
              // onAction={}
            >
              <DropdownItem key="UZ">
                <Button
                  onClick={() => {
                    onChangeLang("uz");
                  }}
                  color="none"
                  className="flex flex-row items-center gap-2"
                >
                  <UzFlag />
                  <span className="typography-5">UZ</span>
                </Button>
              </DropdownItem>
              <DropdownItem key="RU">
                <Button
                  onClick={() => {
                    onChangeLang("ru");
                  }}
                  color="none"
                  className="flex flex-row items-center gap-2"
                >
                  <RuFlag />
                  <span className="typography-5">РУ</span>
                </Button>
              </DropdownItem>
              <DropdownItem key="EN">
                <Button
                  onClick={() => {
                    onChangeLang("en");
                  }}
                  color="none"
                  className="flex flex-row items-center gap-2"
                >
                  <UsFlag />
                  <span className="typography-5">EN</span>
                </Button>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <hr className="h-[50%] w-[2px] bg-white opacity-20" />
          <HashLink
            to="/#about"
            className="typography-6 font-[800] uppercase whitespace-nowrap"
          >
            {t("About")}
          </HashLink>
          <hr className="h-[50%] w-[2px] bg-white opacity-20" />
          <HashLink
            to="/gallery"
            className="typography-6 font-[800] uppercase whitespace-nowrap"
          >
            {t("Gallery")}
          </HashLink>
          <hr className="h-[50%] w-[2px] bg-white opacity-20" />
          <HashLink
            to="/products"
            className="typography-6 font-[800] uppercase whitespace-nowrap"
          >
            {t("Products")}
          </HashLink>
          <hr className="h-[50%] w-[2px] bg-white opacity-20" />
          <Link
            to="/news"
            className="typography-6 font-[800] uppercase whitespace-nowrap"
          >
            {t("News")}
          </Link>
          <hr className="h-[50%] w-[2px] bg-white opacity-20" />
          <Link
            to="/vacancy"
            className="typography-6 font-[800] uppercase whitespace-nowrap"
          >
            {t("Vacancy")}
          </Link>
          <hr className="h-[50%] w-[2px] bg-white opacity-20" />
          <Link
            to="/contact"
            className="typography-6 font-[800] uppercase whitespace-nowrap"
          >
            {t("Contact Us")}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default DesktopNav;

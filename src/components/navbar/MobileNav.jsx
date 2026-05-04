import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  NavbarContent,
  NavbarItem,
  Button,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Divider,
} from "@nextui-org/react";
import Logo from "../../assets/img/Logo.jpg";
import {
  // Facebook,
  // Instagram,
  // MenuThreeDots,
  // Telegram,
  UzFlag,
  RuFlag,
  UsFlag,
  CellPhoneIcon,
} from "../../svg/view";
import useLocales from "../../hooks/useLocales";
import { HashLink } from "react-router-hash-link";
import { useState } from "react";
import { Link } from "react-router-dom";

const MobileNav = () => {
  const { t, onChangeLang, i18n } = useLocales();
  const [isOpen, setIsOpen] = useState(false);
  const menuItems = [
    { link: "/#about", name: t("About") },
    { link: "/gallery", name: t("Gallery") },
    { link: "/products", name: t("Products") },
    { link: "/news", name: t("News") },
    { link: "/vacancy", name: t("Vacancy") },
    { link: "/contact", name: t("Contact Us") },
  ];

  return (
    <div id="mobile-navbar" className="z-50 shadow-[0px_7px_6px_-6px_rgba(34,60,80,0.24)] bg-white sticky top-0">
      <Navbar isMenuOpen={isOpen} isBordered className="hidden lg:block">
        <NavbarContent justify="start">
          <NavbarMenuToggle
            onClick={() => setIsOpen(!isOpen)}
            id="mobile-nav-toggle"
          />
        </NavbarContent>

        <NavbarContent className="pr-3" justify="center">
          <NavbarBrand>
            <Link to="/">
              <img src={Logo} alt="logo" className=" max-w-[100px]" />
            </Link>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
            <div className="flex flex-row justify-center items-center gap-3">
              <Dropdown className="min-w-[60px]">
                <DropdownTrigger>
                  <Button
                    color="none"
                    className="bg-transparent w-max h-max"
                    isIconOnly
                  >
                    {i18n.language === "uz" && <UzFlag />}
                    {i18n.language === "ru" && <RuFlag />}
                    {i18n.language === "en" && <UsFlag />}
                  </Button>
                </DropdownTrigger>
                <DropdownMenu aria-label="Actio" className="w-max">
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
              {/* <Dropdown className="min-w-[60px]">
                <DropdownTrigger>
                  <Button className="bg-transparent w-max h-max" isIconOnly>
                    <MenuThreeDots />
                  </Button>
                </DropdownTrigger>
                <DropdownMenu aria-label="Actio" className="w-max">
                  <DropdownItem key="fddfd">
                    <Button
                      isIconOnly
                      aria-label="language"
                      className="bg-transparent"
                    >
                      <Telegram />
                    </Button>
                  </DropdownItem>
                  <DropdownItem key="copy">
                    <Button
                      isIconOnly
                      aria-label="language"
                      className="bg-transparent"
                    >
                      <Facebook />
                    </Button>
                  </DropdownItem>
                  <DropdownItem key="edit">
                    <Button
                      isIconOnly
                      aria-label="language"
                      className="bg-transparent"
                    >
                      <Instagram />
                    </Button>
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown> */}
            </div>
          </NavbarItem>
        </NavbarContent>

        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem className="nav-menu-link" key={`${item}-${index}`}>
              <HashLink
                className="w-full hover:bg-primary uppercase hover:text-white p-3 typography-6"
                color="foreground"
                to={item.link}
                onClick={() => setIsOpen(false)}
                size="lg"
              >
                {item.name}
              </HashLink>
            </NavbarMenuItem>
          ))}
          <Divider orientation="horizontal" className="bg-black" />
          <NavbarMenuItem>
            <div className="flex flex-row justify-center items-center gap-2">
              <CellPhoneIcon className="fill-black" />{" "}
              <span className="typography-5 text-black">+998912345678</span>
            </div>
          </NavbarMenuItem>
        </NavbarMenu>
      </Navbar>
    </div>
  );
};

export default MobileNav;

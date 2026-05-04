import logo from "../../assets/img/merry-logo.png";
import img1 from "../../assets/img/home/header/3.jpg";
import img2 from "../../assets/img/home/header/5.jpg";
import img3 from "../../assets/img/home/header/6.jpg";
import ImageSlider from "../../components/slider/ImageSlider";
import useLocales from "../../hooks/useLocales";

const Header = () => {
  const { t } = useLocales();

  return (
    <div className="relative home-section h-screen md:!h-full lg:h-[90vh] w-full flex -mt-20 lg:pt-20 xl:w-full bg-slate-700 text-white lg:flex-col overflow-hidden">
      <ImageSlider images={[img1, img2, img3]} />

      <div className="absolute z-[29] h-full  max-w-[164px] flex flex-col justify-evenly lg:hidden border-indigo-100 border-solid border-r-medium border-opacity-40 fadeIn">
        <img
          src={logo}
          alt="logo-merrymed"
          className="-rotate-90"
          width={130}
        />
        <div className="h-[50%] lg:hidden"></div>
      </div>

      <div className="absolute showcase-header top-1/2 -translate-y-1/2 left-40 lg:top-1/2 lg:left-1/2 lg:transform lg:!-translate-x-1/2 lg:!-translate-y-1/2 w-[50%] lg:!w-[95%] lg:pl-0 lg:h-full flex-col md:!p-0 p-10 flex sm:py-20 items-start justify-center text-start lg:text-center mb-10 md:flex md:items-center md:justify-center  shadow-md">
        {localStorage.getItem("i18nextLng") === "en" && (
          <>
            <span className="fadeInLeft  text-[40px] md:text-[26px] xl:text-[30px] md:mt-0 md:ml-0 font-robotoCondensed *:whitespace-nowrap md:*:whitespace-normal">
              WELCOME TO
            </span>
            <span className="fadeInLeft brand-name  text-[64px] md:text-[36px] font-robotoCondensed *:whitespace-nowrap md:*:whitespace-normal">
              MERRYMED FARM
            </span>
            <span className="fadeInLeft text-[40px] md:text-[26px]  md:mt-0 md:ml-0 font-robotoCondensed  *:whitespace-nowrap md:*:whitespace-normal">
              LEADING PHARMACEUTICAL COMPANY
            </span>
          </>
        )}

        {localStorage.getItem("i18nextLng") === "ru" && (
          <>
            <h1 className="fadeInLeft text-start lg:text-center flex flex-row md:flex-col *:whitespace-nowrap md:*:whitespace-normal">
              <span className="text-[40px] md:text-[24px]  mr-2 md:mt-0 md:ml-0 font-robotoCondensed">
                ДОБРО ПОЖАЛОВАТЬ в
              </span>
            </h1>
            <h1 className="fadeInLeft text-start lg:text-center flex flex-row md:flex-col font-robotoCondensed *:whitespace-nowrap md:*:whitespace-normal">
              <span className="text-[40px] md:text-[24px] mr-2 md:mt-0 md:ml-0">
                ВЕДУЩУЮ ФАРМАЦЕВТИЧЕСКУЮ КОМПАНИЮ
              </span>
            </h1>
            <h1 className="fadeInLeft text-start lg:text-center flex flex-row font-robotoCondensed md:flex-col *:whitespace-nowrap md:*:whitespace-normal">
              <span className="text-[64px] md:text-[38px] brand-name">
                MERRYMED FARM
              </span>
            </h1>
          </>
        )}

        {localStorage.getItem("i18nextLng") === "uz" && (
          <>
            <h1 className="fadeInLeft text-start lg:text-center flex flex-row font-robotoCondensed md:flex-col *:whitespace-nowrap md:*:whitespace-normal">
              <span className="text-[64px] md:text-[36px] brand-name">
                MERRYMED FARM
              </span>
            </h1>
            <h1 className="fadeInLeft text-start lg:text-center flex flex-row md:flex-col font-robotoCondensed *:whitespace-nowrap md:*:whitespace-normal">
              <span className="text-[40px] md:text-[26px] mr-2  md:ml-0">
                YETAKCHI FARMATSEVTIKA KOMPANIYASI ga
              </span>
            </h1>
            <h1 className="fadeInLeft text-start lg:text-center flex flex-row md:flex-col *:whitespace-nowrap md:*:whitespace-normal">
              <span className="text-[40px] md:text-[26px]  mr-2  md:ml-0 font-robotoCondensed">
                XUSH KELIBSIZ
              </span>
            </h1>
          </>
        )}
        <p className="text-wrap lg:!w-[100%] lg:text-center text-[30px] sm:!text-[14px] md:text-[20px]   fadeInLeft lg:!mt-[1rem] mt-2 ">
          {t(
            "We are one of the largest manufacturers of medicines in Uzbekistan, aspiring to provide the population with high-quality medicines at an affordable price."
          )}
        </p>
      </div>
    </div>
  );
};

export default Header;

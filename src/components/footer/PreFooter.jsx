import useLocales from "../../hooks/useLocales";

const PreFooter = () => {
  const { t } = useLocales();
  return (
    <footer className="px-[1rem] flex w-full flex-wrap  gap-10 min-w-full bg-lightDark text-[#ccc]  lg:px-5 md:px-0  py-10 font-light tracking-wider ">
      <div>
        <h3 className="typography-4 text-white uppercase font-[700]">
          {t("Contact Adress")}
        </h3>
        <p className="max-w-[480px]">{t("CompanyAdress")}</p>
        <p className="max-w-[340px] flex  gap-[10px]">
          <span className="font-[700] text-white">{t("Zip code")} :</span>
          160141
        </p>
      </div>
      <div>
        <div>
          <h3 className="typography-4 text-white uppercase font-[700] md:whitespace-normal">
            {t("Phones")}
          </h3>
          <p className="max-w-[340px] typography-6 flex justify-between flex-row items-center gap-[5px] whitespace-nowrap md:whitespace-normal">
            <b className="typography-5">{t("General questions:")}</b>
            <a href="tel:+998692288000" className="typography-5">
              +998(69) 228 80 00
            </a>
          </p>
          <p className="max-w-[340px] flex justify-between gap-[10px] whitespace-nowrap md:whitespace-normal">
            <b className="typography-5">{t("Export department")}</b>
            <a href="tel:+998692287999" className="typography-5">
              +998(69) 228 79 99
            </a>
          </p>
          <p className="max-w-[340px] flex justify-between gap-[10px] whitespace-nowrap md:whitespace-normal">
            <b className="typography-5">{t("Import department:")}</b>
            <a href="tel:+998692288002" className="typography-5">
              +998(69) 228 80 02
            </a>
          </p>
        </div>
        <div>
          <h3 className="typography-4 text-white uppercase font-[700]">
            {t("Email")}
          </h3>
          <a href="mailto:info@merrymed.uz">info@merrymed.uz</a>
        </div>
      </div>
    </footer>
  );
};

export default PreFooter;

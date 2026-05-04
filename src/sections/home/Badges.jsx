import { Cube, Chemistry, BandAid } from "../../svg/view";
import useLocales from "../../hooks/useLocales";

const Badges = () => {
  const { t } = useLocales();
  return (
    <section className="bg-[#f9f9f9] my-20 container-y-axis container-x-axis z-0">
      <div className="flex flex-row justify-around  items-start gap-[8px] md:flex-wrap md:justify-center">
        <div className="flex flex-row justify-center items-start gap-6 xl:gap-4 lg:flex-col lg:justify-center lg:items-center">
          <Cube className="cube" />
          <div className="flex flex-col justify-start items-start gap-4 lg:justify-center lg:items-center">
            <h4 className="typography-4 text-black font-[400] text-start lg:text-center">
              {t("Modern Packaging")}
            </h4>
            <p className="typography-5 text-[rgba(0,0,0,0.4)] font-[400] text-start lg:text-center max-w-[380px]">
              {t(
                "The packaging of our products ensures the conformity, safety, reliability and environmental friendliness of medicines."
              )}
            </p>
          </div>
        </div>
        <div className="flex flex-row justify-start items-start gap-6 xl:gap-4 lg:flex-col lg:justify-center lg:items-center">
          <BandAid className="bandaid" />
          <div className="flex flex-col justify-start items-start gap-4 lg:justify-center lg:items-center">
            <h4 className="typography-4 text-black font-[400] text-start lg:text-center">
              {t("New Technologies")}
            </h4>
            <p className="typography-5 text-[rgba(0,0,0,0.4)] font-[400] text-start lg:text-center max-w-[380px]">
              {t(
                "Our medicinal products are manufactured on modern equipment that meets GMP requirements."
              )}
            </p>
          </div>
        </div>
        <div className="flex flex-row justify-start items-start gap-6 xl:gap-4 lg:flex-col lg:justify-center lg:items-center">
          <Chemistry className="chemistry" />
          <div className="flex flex-col justify-start items-start gap-4 lg:justify-center lg:items-center">
            <h4 className="typography-4 text-black font-[400] text-start lg:text-center">
              {t("Unique Approach")}
            </h4>
            <p className="typography-5 max-w-[380px] text-[rgba(0,0,0,0.4)] font-[400] text-start lg:text-center">
              {t("Our approach combines dedication and professionalism.")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Badges;

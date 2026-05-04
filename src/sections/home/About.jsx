import { Button } from "@nextui-org/react";
import useLocales from "../../hooks/useLocales";
import { useState } from "react";

const About = () => {
  const { t } = useLocales();
  const [hide, setHide] = useState();
  return (
    <section
      id="about"
      className="w-full h-max px-60 xl:px-40 lg:!px-10 md:px-10 pt-20 sm:text-center text-[#3b3b3b]"
    >
      <p className="typography-3 font-bold  bg-white z-[22] w-full">
        {t("WELCOME TO OUR OFFICIAL SITE!")}
      </p>
      <br />
      <span className="font-light  bg-white relative z-[22]  w-max">
        {t(
          "“MERRYMED FARM” LLC established in January 2010 and today is considered the largest pharmaceutical enterprise in the Republic. “MERRYMED FARM” LLC fully covers the processes of production, storage, transport and logistics, and marketing. With the help of high-tech equipment and electronic information management systems, all stages of the technological process are used, including the collection, sorting and processing of components and raw materials. The total area of the enterprise is 14,500, the production area is 11,600 m2."
        )}
      </span>
      <br />
      <br />
      <span className="font-light  bg-white relative z-[22] w-max">
        {t(
          "The company specializes in the production of medicines. “MERRYMED FARM” LLC has established the production of more than 200 types of drugs in 10 pharmacological groups, including tablets, capsules, ointments, herbal preparations, suspensions, infusions, injections, antibiotics in the form of dry powder, eye drops, etc."
        )}
      </span>{" "}
      {hide && (
        <div className="mt-3 space-y-3 animate-appearance-in">
          <span className="font-light  bg-white relative z-[22]  w-max">
            {t(
              "The company is constantly working on the introduction of new types of import-substituting drugs, building new production workshops and equipping them with modern and high-tech pharmaceutical equipment produced by leading enterprises in the world."
            )}
          </span>
          <br />
          <br />
          <span className="font-light  bg-white relative z-[22]  w-max">
            {t(
              "At the end of 2014, the company launched a workshop for the production of ampoules, equipped with the most modern pharmaceutical equipment from leading European manufacturers. At the moment, equipment from the German company Rommelag AG is installed in the workshops for the production of eye drops and infusion solutions, and equipment from the Spanish company KYP Accessories is installed in the workshop for the production of empty ampoules. There is also a workshop for the production of corrugated cardboard. (It has the highest production level among Central Asian countries)."
            )}
          </span>
          <br />
          <br />
          <span className="font-light  bg-white relative z-[22]  w-max">
            {t(
              "The enterprise is successfully implementing strategic plans to implement the requirements of international standards. For this, an important role is played by the use of new technologies in the production of medicines, modernization and accreditation of production equipment and laboratories in accordance with GMP (Good Manufacturing Practice) requirements. All necessary conditions have been created for the effective operation of the enterprise. Medicines are manufactured in accordance with GMP requirements."
            )}
          </span>
          <br />
          <br />
          <span className="font-light  bg-white relative z-[22]   w-max">
            {t(
              "The testing laboratory, created to control our products, is equipped with the most modern testing equipment, some of which is unique in our country. Currently, our company employs highly qualified chemists and national expert auditors of international standards."
            )}
          </span>
          <br />
          <br />
          <span className="font-light  bg-white relative z-[22]   w-max">
            {t(
              "The enterprise is certified according to international GMP standards."
            )}
          </span>
          <br />
          <br />
          <span className="font-light  bg-white relative z-[22]  w-max">
            {t(
              "In order to further increase the export potential of our republic, we are carrying out a number of works to export high-quality medicines produced by our company to the Republics of Turkmenistan, Kyrgyzstan, Kazakhstan, Tajikistan, Yemen, Afghanistan, and Azerbaijan."
            )}
          </span>
        </div>
      )}
      <Button
        onClick={() => setHide(!hide)}
        className="rounded-none bg-black block text-white  tracking-widest uppercase px-10 mt-10 sm:mx-auto"
      >
        {!hide ? t("View Info") : t("Hide Info")}
      </Button>
    </section>
  );
};

export default About;

import Card from "./view/CardContainer";
import vacancyData from "./vacancyData.json";
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";
import { Link } from "react-router-dom";
import useLocales from "../../hooks/useLocales";
const VacancyList = () => {
  const { t } = useLocales();
  return (
    <div className="min-h-[90vh]">
      <div className="text-center py-10 my-10 bg-gray-100">
        <h1 className="typography-2 uppercase">{t("Vacancy")}</h1>
        <div className="flex justify-center items-center">
          <Breadcrumbs>
            <BreadcrumbItem>
              <Link to="/">{t("Home")}</Link>
            </BreadcrumbItem>
            <BreadcrumbItem>{t("Vacancy")}</BreadcrumbItem>
          </Breadcrumbs>
        </div>
      </div>
      <div className="mx-auto w-[70%]">
        {vacancyData.map((vacancy, index) => (
          <Card vacancy={vacancy} key={index} />
        ))}
      </div>
    </div>
  );
};
export default VacancyList;

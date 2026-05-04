/* eslint-disable react/prop-types */
import { Card, CardBody } from "@nextui-org/react";
import useLocales from "../../../hooks/useLocales";
export default function CardContainer({ vacancy }) {
  const { title, requirements } = vacancy;
  const { t } = useLocales();
  return (
    <Card className="my-10 l:my-5 py-4 fadeIn">
      <CardBody className="overflow-visible py-2 flex flex-row">
        <div>
          <p className="typography-3 uppercase ">{title[t("vacancy_title")]}</p>

          <ul className="flex l:flex-col list-disc gap-10 px-4">
            {requirements.map((item, index) => (
              <li key={index}>{item[t("vacancy_requirement")]}</li>
            ))}
          </ul>
        </div>
      </CardBody>
    </Card>
  );
}

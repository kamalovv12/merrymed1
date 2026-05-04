import useLocales from "../../hooks/useLocales";
import { NotFoundIcon } from "../../svg/view";
import { Button } from "@nextui-org/react";
import { Link } from "react-router-dom";
const NotFoundView = () => {
  const { t } = useLocales();
  return (
    <div className="flex flex-col justify-center items-center gap-6 w-full h-full container-y-axis container-x-axis">
      <NotFoundIcon />
      <h3 className="typography-2 text-center">
        {t("Sorry we could not found what you were looking for")}
      </h3>
      <h6 className="typography-4 text-center">
        {t("Maybe you will find in home page")}
      </h6>
      <Link to="/">
        <Button className="bg-black text-white rounded-none" variant="solid">
          {t("GO TO HOME")}
        </Button>
      </Link>
    </div>
  );
};

export default NotFoundView;

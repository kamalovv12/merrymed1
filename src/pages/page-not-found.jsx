import { Helmet } from "react-helmet-async";

import NotFoundView from "../sections/error/not-found-view";
import useLocales from "../hooks/useLocales";

// ----------------------------------------------------------------------

const NotFoundPage = () => {
  const { t } = useLocales();
  return (
    <>
      <Helmet>
        <title> {t("404 Page not found")} </title>
      </Helmet>

      <NotFoundView />
    </>
  );
};

export default NotFoundPage;

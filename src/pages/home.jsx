import { Helmet } from "react-helmet-async";
import HomeSection from "../sections/home/view";
import useLocales from "../hooks/useLocales";

const Home = () => {
  const { t } = useLocales();
  return (
    <>
      <Helmet>
        <title>{t("Home")}</title>
      </Helmet>
      <div>
        <HomeSection />
      </div>
    </>
  );
};

export default Home;

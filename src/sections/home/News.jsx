// import { Link } from "react-router-dom";
// import NewsData from "../../../newsData.json";
import useLocales from "../../hooks/useLocales";

const News = () => {
  const { t } = useLocales();

  return (
    <section id="news" className="container-x-axis container-y-axis">
      <div>
        <h4 className="typography-2 text-black text-center mb-9 font-[600] bg-white">
          {t("NEWS")}
        </h4>
        <div className="grid h-[50vh]  grid-cols-3 md:flex md:flex-col md:items-center lg:grid-cols-2  place-content-center justify-center gap-6">
          {/* {NewsData?.map((news) => (
            <div
              key={news.id}
              className="flex flex-col justify-between items-center gap-8 p-1 bg-white  h-[330px]"
            >
              <div className="relative">
                <img
                  src={news.images[0].url}
                  alt={news.title}
                  loading="lazy"
                  className="object-cover h-[220px]"
                />
              </div>
              <Link
                className="typography-4  truncate text-black hover:text-primary font-[400] text-wrap"
                to={`/news/${news.id}`}
                underline="none"
              >
                {news.title.slice(0, 55) + "..."}
              </Link>
            </div>
          ))} */}
        </div>
      </div>
    </section>
  );
};

export default News;

/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import ProductCategories from "../ProductCategories";
import ProductRow from "../ProductRow";
import { useLocation } from "react-router-dom";

export default function ProductView() {
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState(1);
  const searchParams = new URLSearchParams(location.search.slice(1));
  const category = searchParams.get("category");
  const page = searchParams.get("page");

  useEffect(() => {
    if (!page) return;
    setCurrentPage(Number(page));
  }, [page]);

  return (
    <section className="inter-sans">
      <div className="container container-y-axis  mx-auto">
        <div className="flex lg:flex-col flex-row gap-[30px] product-section">
          <ProductCategories
            activeCategory={category}
            setCurrentPage={setCurrentPage}
          />
          <ProductRow
            activePage={page}
            category={category}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
    </section>
  );
}

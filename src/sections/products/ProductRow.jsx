/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import axios from "axios";
import useLocales from "../../hooks/useLocales";
import { Pagination } from "@nextui-org/react";
import { Spinner } from "@nextui-org/react";
import { useNavigate, useLocation } from "react-router-dom";
import { textUpperCase } from "../../utils/string";

export default function ProductRow({
  category,
  activeCategory,
  currentPage,
  setCurrentPage,
}) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const { t } = useLocales();
  const navigate = useNavigate();
  const source = axios.CancelToken.source();
  
  // Joriy tilni olish
  const currentLocale = t("locale_name") || "uz";

  useEffect(() => {
    const fetchData = async () => {
      // API endpointini o'zgartirish
      let url = "https://merry-med-back.onrender.com/api/products";
      
      // Query parametrlarini qo'shish
      const params = new URLSearchParams();
      
      // Pagination - frontendda qilamiz, chunki backendda pagination yo'q
      const itemsPerPage = window.innerWidth <= 768 ? 8 : 12;
      
      // Agar category tanlangan bo'lsa, filtrlash
      let filterCategory = activeCategory || category;
      
      setLoading(true);
      
      try {
        const result = await axios.get(url, {
          cancelToken: source.token,
        });
        
        console.log("API Response:", result.data);
        
        let products = [];
        
        // API dan kelgan ma'lumotlarni ishlash
        if (Array.isArray(result.data)) {
          products = result.data;
        } else if (result.data?.data && Array.isArray(result.data.data)) {
          products = result.data.data;
        } else {
          products = [];
        }
        
        // Kategoriya bo'yicha filtrlash
        if (filterCategory) {
          products = products.filter(product => product._category_id === filterCategory);
        }
        
        // Pagination qilish
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const paginatedProducts = products.slice(startIndex, endIndex);
        
        // Total pages hisoblash
        const totalPages = Math.ceil(products.length / itemsPerPage);
        
        // Ma'lumotlarni formatlash
        setData({
          data: paginatedProducts,
          total_pages: totalPages,
          total_items: products.length,
          current_page: currentPage,
          items_per_page: itemsPerPage
        });
        
        setLoading(false);
        
        // Scroll to filter category
        const filterCategoryElement = document.getElementById("filter-category");
        const navbarHeight = document.getElementById("mobile-navbar")?.offsetHeight || 0;
        
        if (filterCategoryElement && window.innerWidth <= 768) {
          window.scrollTo({
            top: filterCategoryElement.offsetTop - (navbarHeight + 20),
            behavior: "smooth",
          });
        }
        
      } catch (err) {
        if (axios.isCancel(err)) {
          console.log("Request canceled:", err.message);
        } else {
          console.error("Error fetching products:", err);
        }
        setData(null);
        setLoading(false);
      }
    };
    
    fetchData();
    
    return () => {
      source.cancel("Component unmounted or dependencies changed");
    };
  }, [category, activeCategory, currentPage]);
  
  // Produkt nomini joriy tilga qarab olish
  const getProductName = (product) => {
    if (!product) return "";
    
    // Agar product.name obyekt bo'lsa (uz, ru, en)
    if (product.name && typeof product.name === 'object') {
      let name = product.name[currentLocale];
      if (!name) {
        name = product.name.uz || product.name.ru || product.name.en || "";
      }
      return textUpperCase(name);
    }
    
    // Agar product.name string bo'lsa
    if (product.name && typeof product.name === 'string') {
      return textUpperCase(product.name);
    }
    
    // Aks holda product.category dan olish
    if (product.category && typeof product.category === 'object') {
      let categoryName = product.category[currentLocale];
      if (!categoryName) {
        categoryName = product.category.uz || product.category.ru || product.category.en || "";
      }
      return textUpperCase(categoryName);
    }
    
    return "";
  };
  
  // Produkt rasmini olish
  const getProductImage = (product) => {
    if (product?.fileId?.url) {
      return product.fileId.url;
    }
    if (product?.image) {
      return product.image;
    }
    return "/Logo@.png";
  };

  const handlePaginationChange = (page) => {
    setCurrentPage(page);
    if (window.innerWidth > 768) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };
  
  // Produkt detallariga o'tish
  const handleProductClick = (productId) => {
    if (!productId) return;
    let catId = activeCategory || category || "";
    navigate(`/products/${productId}?category=${catId}&page=${currentPage}`);
  };

  if (loading) {
    return (
      <div className="w-full h-[70vh] flex justify-center items-center">
        <Spinner label={t("Loading...") || "Yuklanmoqda..."} />
      </div>
    );
  }
  
  if (!data?.data || data.data.length === 0) {
    return (
      <div className="w-full h-[50vh] flex justify-center items-center">
        <p className="text-gray-500 text-lg">
          {t("No products found") || "Hech qanday mahsulot topilmadi"}
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-start items-center gap-12" id="products">
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[10px] flex-[0.9]">
        {data.data.map((product, index) => (
          <div
            key={product?.id || product?._id || index}
            onClick={() => handleProductClick(product?.id || product?._id)}
            className="p-[1rem] h-[250px] transition hover:shadow-lg hover:scale-[1.05] bg-[#f5f7f6] flex flex-col items-center gap-[5px] justify-around rounded-[12px] cursor-pointer"
          >
            <img
              src={getProductImage(product)}
              className="w-[180px] h-[120px] object-contain"
              alt={getProductName(product)}
              onError={(e) => {
                e.target.src = "/Logo@.png";
              }}
            />
            <h4 className="text-center text-[16px] font-semibold line-clamp-2 px-2">
              {getProductName(product)}
            </h4>
          </div>
        ))}
      </div>
      
      {data?.total_pages > 1 && (
        <Pagination
          total={data.total_pages}
          initialPage={currentPage}
          page={currentPage}
          size="lg"
          onChange={handlePaginationChange}
          showControls
          loop
        />
      )}
    </div>
  );
}
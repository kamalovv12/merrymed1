import axios from "axios"; 
import { useEffect, useState } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom"; 
import useLocales from "../hooks/useLocales"; 
import { Spinner } from "@nextui-org/react"; 

const SingleProduct = () => { 
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null); 
  const params = useParams(); 
  const [searchParams] = useSearchParams();
  const { t } = useLocales(); 
  const currentLocale = t("locale_name") || "uz"; 
 
  useEffect(() => {
    const fetchData = async () => {
      // API endpointni to'g'rilash - product emas, products
      const url = `https://merry-med-back.onrender.com/api/products/${params.id}`;
      
      setLoading(true);
      setError(null);
      
      try {
        const result = await axios.get(url);
        console.log("Product data:", result.data);
        setData(result.data);
      } catch (err) {
        console.error("Error fetching product:", err);
        setError(err.response?.data?.message || err.message || "Xatolik yuz berdi");
      } finally {
        setLoading(false);
      }
    };
    
    if (params.id) {
      fetchData();
    }
    
    // Cleanup
    return () => {
      setData(null);
    };
  }, [params.id]);

  // Mahsulot nomini joriy tilga qarab olish
  const getProductName = () => {
    if (!data) return "";
    
    // name maydoni obyekt bo'lsa (uz, ru, en)
    if (data.name && typeof data.name === 'object') {
      const name = data.name[currentLocale] || data.name.uz || data.name.ru || data.name.en || "";
      return name;
    }
    
    // name maydoni string bo'lsa
    if (data.name && typeof data.name === 'string') {
      return data.name;
    }
    
    // Aks holda boshqa maydonlarni tekshirish
    return data[t("name_product")] || data.title || "";
  };

  // Mahsulot tavsifini joriy tilga qarab olish
  const getProductDescription = () => {
    if (!data) return "";
    
    // description maydoni obyekt bo'lsa
    if (data.description && typeof data.description === 'object') {
      const desc = data.description[currentLocale] || data.description.uz || data.description.ru || data.description.en || "";
      return desc;
    }
    
    // description maydoni string bo'lsa
    if (data.description && typeof data.description === 'string') {
      return data.description;
    }
    
    // Aks holda boshqa maydonlarni tekshirish
    return data[t("desc")] || "";
  };

  // Kategoriya ID'sini olish
  const getCategoryId = () => {
    if (!data) return "";
    return data._category_id || data.category_id || data.category || "";
  };

  // Mahsulot rasmini olish
  const getProductImage = () => {
    if (!data) return "/Logo@.png";
    
    if (data.fileId?.url) {
      return data.fileId.url;
    }
    if (data.image) {
      return data.image;
    }
    if (data.images && data.images.length > 0) {
      return data.images[0];
    }
    return "/Logo@.png";
  };

  // Back qaytish yo'li
  const getBackLink = () => {
    const categoryId = getCategoryId();
    const page = searchParams.get("page") || "1";
    
    if (categoryId) {
      return `/products?category=${categoryId}&page=${page}`;
    }
    return `/products?page=${page}`;
  };

  if (loading) {
    return (
      <div className="w-full h-[90vh] flex justify-center items-center">
        <Spinner label={t("Loading...") || "Yuklanmoqda..."} />
      </div>
    );
  }

  if (error) {
    return (
      <div className="container container-y-axis container-x-axis">
        <Link
          className="inline-flex items-center gap-2 bg-gray-200 text-gray-700 px-4 py-2 rounded-md mb-6 hover:bg-gray-300 transition"
          to={getBackLink()}
        >
          ← {t("Back") || "Ortga"}
        </Link>
        <div className="text-center py-12">
          <p className="text-red-500 text-lg">{error}</p>
          <p className="text-gray-500 mt-2">
            {t("Product not found") || "Mahsulot topilmadi"}
          </p>
        </div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="container container-y-axis container-x-axis">
        <Link
          className="inline-flex items-center gap-2 bg-gray-200 text-gray-700 px-4 py-2 rounded-md mb-6 hover:bg-gray-300 transition"
          to={getBackLink()}
        >
          ← {t("Back") || "Ortga"}
        </Link>
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">
            {t("No product data") || "Mahsulot ma'lumotlari mavjud emas"}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="container container-y-axis container-x-axis max-w-6xl mx-auto px-4 py-6">
      {/* Back button */}
      <Link
        className="inline-flex items-center gap-2 bg-gray-200 text-gray-700 px-4 py-2 rounded-md mb-6 hover:bg-gray-300 transition duration-200 w-max"
        to={getBackLink()}
      >
        <span className="text-xl">←</span>
        <span>{t("Back") || "Ortga"}</span>
      </Link>

      {/* Product content */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Product image */}
        <div className="bg-gray-100 rounded-lg p-6 flex items-center justify-center">
          <img
            src={getProductImage()}
            alt={getProductName()}
            className="max-w-full h-auto max-h-[400px] object-contain"
            onError={(e) => {
              e.target.src = "/Logo@.png";
            }}
          />
        </div>

        {/* Product details */}
        <div>
          <h1 className="text-[28px] md:text-[32px] font-bold mb-4">
            {getProductName()}
          </h1>
          
          {/* Category */}
          {getCategoryId() && (
            <div className="mb-4">
              <span className="text-sm text-gray-500">
                {t("Category") || "Kategoriya"}:
              </span>
              <span className="ml-2 text-sm font-medium">
                {data.category?.[currentLocale] || 
                 data.category?.uz || 
                 t("Uncategorized") || 
                 "Kategoriyasiz"}
              </span>
            </div>
          )}

          {/* Description */}
          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-3">
              {t("Description") || "Tavsif"}
            </h2>
            <div className="prose max-w-none text-gray-700 leading-relaxed">
              {getProductDescription() ? (
                <p>{getProductDescription()}</p>
              ) : (
                <p className="text-gray-400">
                  {t("No description available") || "Tavsif mavjud emas"}
                </p>
              )}
            </div>
          </div>

          {/* Additional info if needed */}
          {data.created_at && (
            <div className="mt-6 text-sm text-gray-400">
              {t("Created") || "Yaratilgan"}: {new Date(data.created_at).toLocaleDateString()}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
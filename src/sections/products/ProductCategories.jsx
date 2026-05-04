/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import useLocales from "../../hooks/useLocales";
import { CloseIcon, FilterIcon } from "../../svg/view";
import { Button } from "@nextui-org/react";
import { capitalizeText } from "../../utils/string";

export default function ProductCategories({ activeCategory, setCurrentPage }) {
  const [isOpen, setIsOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const router = useNavigate();
  const { t } = useLocales();
  const currentLocale = t("locale_name") || "uz"; // 'uz', 'ru' yoki 'en'

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(
          "https://merry-med-back.onrender.com/api/products"
        );
        
        console.log("API response:", result.data);
        
        // Produktlardan unikal kategoriyalarni ajratib olish
        let uniqueCategories = [];
        
        if (Array.isArray(result.data)) {
          // Har bir produktning category ma'lumotlarini olish
          const categoriesMap = new Map();
          
          result.data.forEach(product => {
            if (product.category && product._category_id) {
              // Agar bu kategoriya hali qo'shilmagan bo'lsa
              if (!categoriesMap.has(product._category_id)) {
                categoriesMap.set(product._category_id, {
                  _id: product._category_id,
                  name: product.category,
                  // Agar produktda category_id alohida bo'lsa
                  category_id: product._category_id
                });
              }
            }
          });
          
          // Map'ni array'ga o'tkazish
          uniqueCategories = Array.from(categoriesMap.values());
        }
        
        console.log("Unique categories:", uniqueCategories);
        setCategories(uniqueCategories);
        
      } catch (err) {
        console.log("Error fetching data:", err);
        setCategories([]);
      }
    };
    
    fetchData();
  }, []);

  const handleClick = (categoryId) => {
    if (!categoryId) return;
    router(`/products?category=${categoryId}`);
    setCurrentPage(1);
    setIsOpen(false);
  };

  const isActiveCategory = (cat) => {
    return activeCategory === cat?._id;
  };

  // Kategoriya nomini joriy tilga qarab olish
  const getCategoryName = (category) => {
    if (!category || !category.name) return "";
    
    const nameObj = category.name;
    
    // Agar name obyekt bo'lsa (uz, ru, en)
    if (typeof nameObj === 'object') {
      // Joriy tildagi nomni olish
      let localizedName = nameObj[currentLocale];
      
      // Agar joriy tilda nom bo'lmasa, boshqa tillarni sinab ko'rish
      if (!localizedName) {
        localizedName = nameObj.uz || nameObj.ru || nameObj.en || "";
      }
      
      return capitalizeText(localizedName);
    }
    
    // Agar name string bo'lsa
    if (typeof nameObj === 'string') {
      return capitalizeText(nameObj);
    }
    
    return "";
  };

  // Kategoriyalar mavjudligini tekshirish
  if (categories.length === 0) {
    return (
      <div className="p-4 text-center text-gray-500">
        {t("No categories found") || "Kategoriyalar topilmadi"}
      </div>
    );
  }

  return (
    <div>
      <span id="filter-category"></span>

      {/* MOBILE VERSION - Gorizontal scroll */}
      <div
        className="lg:hidden sticky top-[4rem] h-max p-[1rem] rounded-[16px] bg-primary overflow-x-auto"
        style={{
          boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
        }}
      >
        <div className="flex space-x-2 min-w-max">
          {categories.map((category, idx) => {
            if (!category) return null;

            const categoryName = getCategoryName(category);
            if (!categoryName) return null;

            const subClass = isActiveCategory(category)
              ? "text-[#333] bg-[#f8f8f8]"
              : "text-white";

            return (
              <div
                onClick={() => handleClick(category._id)}
                key={category._id || idx}
                className={`p-[10px] text-[16px] font-semibold transition cursor-pointer hover:bg-[#f8f8f8] hover:text-[#333] rounded-[8px] whitespace-nowrap ${subClass}`}
              >
                {categoryName}
              </div>
            );
          })}
        </div>
      </div>

      {/* DESKTOP VERSION - Filter button with drawer */}
      <div className="hidden lg:block h-max rounded-[16px]">
        <Button
          type="button"
          endContent={<FilterIcon />}
          onClick={() => setIsOpen(!isOpen)}
          className="bg-primary text-white"
        >
          {t("Categories") || "Kategoriyalar"}
        </Button>

        {/* Drawer overlay */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-[9999999]"
            onClick={() => setIsOpen(false)}
          />
        )}
        
        {/* Drawer */}
        <div
          className={`${
            isOpen
              ? "right-0 pointer-events-auto"
              : "-right-full pointer-events-none"
          } fixed top-0 z-[10000000] w-full max-w-[320px] bg-white shadow-2xl h-full transition-all duration-300 ease-in-out overflow-y-auto`}
        >
          <div className="sticky top-0 bg-white z-10 p-4 border-b flex items-center justify-between">
            <span className="text-[18px] font-semibold">
              {t("Categories") || "Kategoriyalar"}
            </span>
            <Button 
              onClick={() => setIsOpen(false)}
              isIconOnly
              variant="light"
            >
              <CloseIcon />
            </Button>
          </div>

          <div className="flex flex-col gap-[10px] p-4">
            {categories.map((category, idx) => {
              if (!category) return null;

              const categoryName = getCategoryName(category);
              if (!categoryName) return null;

              const subClass = isActiveCategory(category)
                ? "text-white bg-[#1A9BDD]"
                : "text-gray-700 hover:bg-[#1A9BDD] hover:text-white";

              return (
                <div
                  key={category._id || idx}
                  onClick={() => {
                    handleClick(category._id);
                  }}
                  className={`p-[12px] text-[14px] font-semibold transition cursor-pointer rounded-[8px] ${subClass}`}
                >
                  {categoryName}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
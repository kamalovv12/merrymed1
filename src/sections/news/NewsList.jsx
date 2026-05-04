import { useParams } from "react-router-dom";
import news from "../../../newsData.json";
import NotFoundView from "../error/not-found-view";
import { useEffect, useState } from "react";
const NewsList = () => {
  const param = useParams();
  const currentNews = news.filter((item) => item.id === Number(param.id))[0];
  const [currentImg, setCurrentImg] = useState()
  const [apply, setApply] = useState(false)

  const handleCarousel = (url)=>{
    setApply(true)
    setCurrentImg(url)
    setTimeout(() => {
      setApply(false)
    }, 500);
  }
  useEffect(()=>{
    setCurrentImg(currentNews?.images[0]?.url)
  },[])
  return (
    <div>
      {!currentNews && <NotFoundView />}

      {currentNews && (
        <div className="p-10">
          <div  className=" flex justify-center align-center max-h-[500px] fadeIn">
          <img src={currentImg} alt=""className={`${apply ? 'fadeIn':''} object-cover max-h-[400px] w-full rounded-md shadow-xl`} />
          </div>
          <div className="flex flex-wrap gap-5 mb-10 l:flex-row  l:flex-shrink ">
            {currentNews?.images?.map((item, index) => (
              <img
                key={index}
                src={`${item?.url}`}
                alt="img"
                onClick={()=>handleCarousel(item.url)}
                className="mt-5 cursor-pointer shadow-xl rounded-md w-1/4 "
              />
            ))}
          </div>
          <div className="mr-40 l:mr-1">
            <h3 className="typography-3">{currentNews.title}</h3>
            <p className="typography-5 text-wrap">{currentNews.description}</p>
          </div>
          <span>{currentNews.date}</span>
        </div>
      )}
    </div>
  );
};

export default NewsList;

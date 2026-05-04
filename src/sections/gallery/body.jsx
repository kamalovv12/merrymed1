import img1 from "../../assets/img/gallery/1.jpg";
import img2 from "../../assets/img/gallery/2.jpg";
import img3 from "../../assets/img/gallery/3.jpg";
import img4 from "../../assets/img/gallery/4.jpg";
import img5 from "../../assets/img/gallery/5.jpg";
import img6 from "../../assets/img/gallery/6.jpg";
import img7 from "../../assets/img/gallery/7.jpg";
import img8 from "../../assets/img/gallery/8.jpg";
import img9 from "../../assets/img/gallery/9.jpg";
import img10 from "../../assets/img/gallery/10.jpg";
import img11 from "../../assets/img/gallery/11.jpg";
import img12 from "../../assets/img/gallery/12.jpg";
import img13 from "../../assets/img/gallery/13.jpg";
import img14 from "../../assets/img/gallery/14.jpg";
import img15 from "../../assets/img/gallery/15.jpg";

const body = () => {
  return (
    <section className="container-x-axis container-y-axis space-y-20">
      <div className=" w-[88%] l:w-[95%] lg:w-full mx-auto grid grid-cols-3 md:!grid-cols-1 lg:grid-cols-2 gap-6">
        {images.map((i) => (
          <div className={`max-w-[380px] mx-auto`} key={i.id}>
            <img src={i.img} alt={`${i.img}`} className="w-full h-full" />
          </div>
        ))}
      </div>
      <div className="w-full  min-h-[400px] sm:scale-85 mx-auto">
        <iframe
          src="https://www.youtube.com/embed/BVjdUuU-XsA?si=zolVkmIpTk3byQAl"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          height="315"
          loading="lazy"
          className="mx-auto w-[600px] md:w-full"
        />
      </div>
    </section>
  );
};

export default body;

const images = [
  { id: 1, img: img1 },
  { id: 2, img: img2 },
  { id: 3, img: img3 },
  { id: 4, img: img4 },
  { id: 5, img: img5 },
  { id: 6, img: img6 },
  { id: 7, img: img7 },
  { id: 8, img: img8 },
  { id: 9, img: img9 },
  { id: 10, img: img10 },
  { id: 11, img: img11 },
  { id: 12, img: img12 },
  { id: 13, img: img13 },
  { id: 14, img: img14 },
  { id: 15, img: img15 },
];

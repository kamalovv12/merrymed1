import controll1 from "../../assets/img/home/controll-1.jpg";
import controll2 from "../../assets/img/home/controll-2.jpg";
import useLocales from "../../hooks/useLocales";
import CountUp from "react-countup";
import Pharmacy from "../../assets/video/2.mp4";

const QualityControll = () => {
  const { t } = useLocales();
  return (
    <section
      id="quality-control"
      className="bg-white container-y-axis container-x-axis"
    >
      <div className="grid grid-cols-3 1xl:grid-cols-2 l:grid-cols-1">
        <div className="bg-[#f7f7f7] grid">
          <div className="flex l:py-[18%] justify-center items-center self-center flex-col bg-[#f7f7f7]">
            <h4 className="typography-0 text-black text-center font-[300] w-full h-full">
              {t("GMP")}
            </h4>
            <p className="typography-5 text-black text-center font-[300] w-full h-full">
              {t("GOOD MANUFACTURING PRACTICE")}
            </p>
          </div>
        </div>

        <div className="bg-[#f7f7f7] grid">
          <div className="flex justify-center items-center self-center flex-col bg-[#f7f7f7]">
            <img
              src={controll1}
              alt="controller image 1"
              className=" object-cover"
            />
          </div>
        </div>

        <div className="bg-[#f7f7f7] grid">
          <div className="flex l:py-[18%] justify-center items-center self-center flex-col bg-[#f7f7f7]">
            <h4 className="typography-4 text-black text-center font-[300] w-full h-full">
              {t("Production capacity")}
            </h4>
            <p className="typography-6 text-black text-center font-[300] w-full h-full px-2">
              <CountUp
                className="typography-1 text-primary font-[300]"
                end={130000000}
                enableScrollSpy={true}
                duration={3}
              />
            </p>
            <h4 className="typography-4 text-black text-center font-[300] w-full h-full">
              {t("packages of medicines per year")}
            </h4>
          </div>
        </div>

        <div className="bg-[#f7f7f7] grid">
          <div className="flex justify-center items-center self-center flex-col bg-[#f7f7f7]">
            <img
              src={controll2}
              alt="controller image 2"
              className="object-cover"
            />
          </div>
        </div>

        <div className="bg-[#f7f7f7] grid">
          <div className="flex l:py-[18%] justify-center items-center self-center  my-auto flex-col ">
            <h4 className="typography-2 text-black text-center font-[300] w-full h-full">
              {t("QUALITY CONTROL")}
            </h4>
            <p className="typography-6 text-black text-center font-[300] w-full h-full px-2">
              {t(
                "We alway ensure comprehensive quality assurance and control for drugs and medicine we produce."
              )}
            </p>
          </div>
        </div>

        <div className="bg-[#f7f7f7] grid">
          <div className="flex h-full  justify-center items-center self-center flex-col">
            <video
              src={Pharmacy}
              alt="pharmacy img"
              autoPlay
              muted
              loop
              playsInline
              className="object-cover h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualityControll;

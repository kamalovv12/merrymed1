import useLocales from "../../hooks/useLocales";
import CountUp from "react-countup";

const CompInfo = () => {
    const {t} = useLocales();
    return (
        <section className="bg-[#f9f9f9] my-20 container-y-axis container-x-axis z-0">
            <div className="flex flex-row justify-around  items-center gap-20 md:flex-wrap md:justify-center">
                <div className="flex flex-col justify-center items-center gap-6">
                    <CountUp
                        className="typography-1 font-[300] text-primary"
                        end={700}
                        enableScrollSpy={true}
                        duration={3}
                    />
                    <p className="typography-3 text-[rgba(0,0,0,0.4)] font-[400] text-center max-w-[380px]">
                        {t("more than employees")}
                    </p>
                </div>
                <div className="flex flex-col justify-center items-center gap-6">
                    <CountUp
                        className="typography-1 font-[300] text-primary"
                        end={14500}
                        enableScrollSpy={true}
                        duration={3}
                    />
                    <p
                        dangerouslySetInnerHTML={{__html: t("M2 total of area")}}
                        className="typography-3 text-[rgba(0,0,0,0.4)] font-[400] text-center max-w-[380px]"/>

                </div>
                <div className="flex flex-col justify-center items-center gap-6">
                    <CountUp
                        className="typography-1 font-[300] text-primary"
                        end={11600}
                        enableScrollSpy={true}
                        duration={3}
                    />
                    <p
                        dangerouslySetInnerHTML={{__html: t("M2 are industrial")}}
                        className="typography-3 text-[rgba(0,0,0,0.4)] font-[400] text-center max-w-[380px]"/>
                </div>
            </div>
        </section>
    );
};

export default CompInfo;

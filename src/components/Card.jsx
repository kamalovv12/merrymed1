import PropTypes from "prop-types";

const Card = ({ img }) => {
  // const { t } = useLocales();
  // const lang = localStorage.getItem("i18nextLng");
  return (
    <div className="flex justify-evenly gap-20 l:gap-10 md:gap-5 even:flex-col-reverse l:even:flex-row  flex-col  md:!flex-col md:!items-center md:!text-center md:!justify-center l:flex-row slideInRight mb-20 l:mb-10 ">
      <img src={img} className="max-h-[300px] " alt="cool photos" />
      <div>
        <ul className="font-light flex flex-col"></ul>
      </div>
    </div>
  );
};

Card.propTypes = {
  img: PropTypes.any,
  card: PropTypes.array,
};

export default Card;

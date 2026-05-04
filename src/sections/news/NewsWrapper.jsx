import logo1 from "../../assets/img/Logo.jpg";
import BehanceIcon from "../../svg/BehanceIcon";
import FacebookIcon from "../../svg/FacebookIcon";
import InstagramIcon from "../../svg/InstagramIcon";
import PropTypes from "prop-types";

const NewsWrapper = ({ children }) => {
  return (
    <div className="w-full min-h-[100vh] flex">
      <div className="fixed max-w-[164px]  flex flex-col justify-around xl:hidden top-0 bottom-0 border-r-2 border-solid border-[#2EBBBB]">
        <img
          src={logo1}
          alt="logo-merrymed"
          className="-rotate-90 object-cover  "
          width={160}
        />
        <ul className="flex flex-col gap-5 *:border-indigo-100 *:border-solid *:border-x-small *:rounded-full z-10 *:p-2  text-center justify-center items-center *:border-2">
          <li>
            <FacebookIcon className="fill-indigo-900 " />
          </li>
          <li>
            <InstagramIcon className="fill-indigo-900" />
          </li>
          <li>
            <BehanceIcon className="fill-indigo-900" />
          </li>
        </ul>
      </div>
      <div className="md:!px-5 xl:px-10 px-60 ">
        <nav>
          <h1 className=" text-center typography-2 font-bold uppercase text-[#3b3b3b] mb-10 fadeIn">
            Merrymed farm news
          </h1>
        </nav>
        <div className="px-1 pb-20">{children}</div>
      </div>
    </div>
  );
};
NewsWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default NewsWrapper;

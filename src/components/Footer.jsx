import {
  FaFacebookF,
  FaInstagram,
  FaTelegram,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="max-w-full h-56 flex flex-col space-y-10 items-center justify-center bg-black backdrop-blur-md backdrop-filter bg-opacity-95 md:h-36 md:flex-row md:space-y-0 md:px-10 md:justify-between">
      <div className="flex space-x-5">
        <FaTwitter className="text-2xl text-gray-400 transition cursor-pointer md:text-lg hover:text-green-500" />
        <FaTelegram className="text-2xl text-gray-400 transition cursor-pointer md:text-lg hover:text-green-500" />
        <FaFacebookF className="text-2xl text-gray-400 transition cursor-pointer md:text-lg hover:text-green-500" />
        <FaInstagram className="text-2xl text-gray-400 transition cursor-pointer md:text-lg hover:text-green-500" />
      </div>
      <div className="text-sm text-gray-300">
        &copy; 2023 <span className="text-green-500">DevFoods</span>, lnc. All
        right reserved.
      </div>
    </footer>
  );
};

export default Footer;

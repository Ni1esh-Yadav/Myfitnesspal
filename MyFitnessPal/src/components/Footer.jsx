import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaLinkedin,
  FaXTwitter,
  FaTiktok,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-5xl mx-auto px-6 text-center md:text-left">
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-white text-2xl font-bold">myfitnesspal®</h2>
          <p className="mt-2">Find your healthy, and your happy.</p>
          <button className="mt-4 bg-white text-blue-600 font-bold py-2 px-6 rounded-full shadow-lg hover:bg-gray-100 transition">
            START TODAY →
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 text-center md:text-left">
          <div>
            <h4 className="text-white font-semibold">Products</h4>
            <ul className="mt-2 space-y-1">
              <li>
                <a href="#" className="hover:text-white">
                  Exercise
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Apps
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Premium
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold">Resources</h4>
            <ul className="mt-2 space-y-1">
              <li>
                <a href="#" className="hover:text-white">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Community
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Support Center
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold">Company</h4>
            <ul className="mt-2 space-y-1">
              <li>
                <a href="#" className="hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Press
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 text-sm text-gray-500 text-center">
          <p>© 2025 MyFitnessPal, Inc.</p>
          <ul className="flex flex-wrap justify-center gap-3 mt-2">
            <li>
              <a href="#" className="hover:text-white">
                Community Guidelines
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Feedback
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Terms
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Privacy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                API
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Cookie Preferences
              </a>
            </li>
          </ul>
        </div>

        <div className="flex justify-center space-x-4 mt-6 text-gray-400">
          <a href="#">
            <FaInstagram className="text-xl hover:text-white" />
          </a>
          <a href="#">
            <FaFacebookF className="text-xl hover:text-white" />
          </a>
          <a href="#">
            <FaYoutube className="text-xl hover:text-white" />
          </a>
          <a href="#">
            <FaLinkedin className="text-xl hover:text-white" />
          </a>
          <a href="#">
            <FaXTwitter className="text-xl hover:text-white" />
          </a>
          <a href="#">
            <FaTiktok className="text-xl hover:text-white" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

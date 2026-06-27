import { FaWhatsapp } from "react-icons/fa";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Footer() {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-[#1f2128] text-white pt-16 pb-6">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">

        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold text-yellow-500 mb-4">
            MODEL CONSTRUCTION
          </h2>

          <p className="text-gray-300 leading-8">
            Building dreams with quality construction and innovative
            engineering solutions. Your vision is our responsibility.
          </p>

          <div className="flex space-x-4 mt-6">
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center hover:bg-white hover:text-black transition"
            >
              <FaFacebookF />
            </a>

            <a
              href="#"
              className="w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center hover:bg-white hover:text-black transition"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="#"
              className="w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center hover:bg-white hover:text-black transition"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-yellow-500 mb-6">
            Quick Links
          </h3>

          <ul className="space-y-3 text-gray-300">
            <li><a href="/" className="hover:text-yellow-500">Home</a></li>
            <li><a href="/about" className="hover:text-yellow-500">About Us</a></li>
            <li><a href="/services" className="hover:text-yellow-500">Services</a></li>
            <li><a href="/projects" className="hover:text-yellow-500">Projects</a></li>
            <li><a href="/gallery" className="hover:text-yellow-500">Gallery</a></li>
            <li><a href="/contact" className="hover:text-yellow-500">Contact</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-xl font-semibold text-yellow-500 mb-6">
            Services
          </h3>

          <ul className="space-y-3 text-gray-300">
            <li>Residential Construction</li>
            <li>Commercial Construction</li>
            <li>Industrial Construction</li>
            <li>Interior Design</li>
            <li>Renovation</li>
            <li>Project Management</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold text-yellow-500 mb-6">
            Get In Touch
          </h3>

          <div className="space-y-5 text-gray-300">

            <div className="flex">
              <FaMapMarkerAlt className="text-yellow-500 mt-1 mr-3" />
              <p>
                Katraj, Pune,
                <br />
                Maharashtra 411036
              </p>
            </div>

            <div className="flex items-center">
              <FaPhoneAlt className="text-yellow-500 mr-3" />
              <p>+91 9922257909</p>
            </div>

            <div className="flex items-center">
              <FaEnvelope className="text-yellow-500 mr-3" />
              <p>jayantconstructions@gmail.com</p>
            </div>

          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-400">
        <p>© 2026 Model Construction & Consultancy. All Rights Reserved.</p>

        <p className="mt-2">
          Developed by{" "}
          <a
            href="https://www.vqube.in"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-500 hover:text-yellow-400 underline"
          >
            VQUBE Software Solutions
          </a>
        </p>
      </div>
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 bg-yellow-500 hover:bg-yellow-400 text-black w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition duration-300 z-50"
        title="Go to Top"
      >
        ↑
      </button>
      <a
        href="https://wa.me/919922257909"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 bg-green-500 hover:bg-green-600 text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition duration-300 z-50"
        title="Chat with us on WhatsApp"
      >
        <FaWhatsapp size={30} />
      </a>

    </footer>

  );
}

export default Footer;
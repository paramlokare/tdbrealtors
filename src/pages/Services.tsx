import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import {
  FaHardHat,
  FaDraftingCompass,
  FaClipboardList,
  FaCalculator,
  FaTruckLoading,
  FaBuilding,
} from "react-icons/fa";

import build from "../assets/services/build.jpg";
import design from "../assets/services/design.jpg";
import planning from "../assets/services/planning.jpg";
import estimation from "../assets/services/estimation.jpg";
import procurement from "../assets/services/procurement.jpg";
import consultancy from "../assets/services/consultancy.jpg";

const services = [
  {
    title: "Construction",
    image: build,
    icon: <FaHardHat size={45} />,
    description:
      "Residential, Commercial and Industrial construction with premium quality and timely execution.",
  },
  {
    title: "Architectural Design",
    image: design,
    icon: <FaDraftingCompass size={45} />,
    description:
      "Innovative architectural planning, 2D layouts, 3D elevations and interior concepts.",
  },
  {
    title: "Project Planning",
    image: planning,
    icon: <FaClipboardList size={45} />,
    description:
      "Professional scheduling, execution planning and project management.",
  },
  {
    title: "Quantity Estimation",
    image: estimation,
    icon: <FaCalculator size={45} />,
    description:
      "BOQ preparation, quantity estimation and accurate project costing.",
  },
  {
    title: "Procurement Management",
    image: procurement,
    icon: <FaTruckLoading size={45} />,
    description:
      "Material sourcing, vendor management and quality procurement.",
  },
  {
    title: "Construction Consultancy",
    image: consultancy,
    icon: <FaBuilding size={45} />,
    description:
      "Expert engineering consultancy for residential, commercial and industrial projects.",
  },
];

export default function Services() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-80 bg-black flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-zinc-900 to-black opacity-90"></div>

        <div className="relative z-10 text-center">
          <h1 className="text-5xl font-extrabold text-yellow-500">
            Our Services
          </h1>

          <p className="mt-5 text-gray-300 text-lg">
            Complete Construction & Consultancy Solutions
          </p>
        </div>
      </section>

      {/* Services Cards */}
      <section className="bg-zinc-950 py-20 px-6">

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {services.map((service, index) => (

            <div
              key={index}
              className="group rounded-3xl overflow-hidden shadow-xl bg-black border border-yellow-600 hover:shadow-yellow-500/40 transition duration-500 hover:-translate-y-3"
            >

              {/* Image */}
              <div className="relative h-64 overflow-hidden">

                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />

                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition"></div>

              </div>

              {/* Content */}
              <div className="p-8">

                <div className="text-yellow-500 mb-5">
                  {service.icon}
                </div>

                <h2 className="text-2xl font-bold text-white mb-4">
                  {service.title}
                </h2>

                <p className="text-gray-400 leading-7">
                  {service.description}
                </p>

                <button
                  className="mt-8 bg-yellow-500 text-black font-semibold px-6 py-3 rounded-full hover:bg-yellow-400 transition"
                >
                  Learn More
                </button>

              </div>

            </div>

          ))}

        </div>

      </section>

      {/* Why Choose Us */}
      <section className="bg-black py-20">

        <div className="max-w-6xl mx-auto text-center">

          <h2 className="text-4xl font-bold text-yellow-500 mb-10">
            Why Choose Model Construction?
          </h2>

          <div className="grid md:grid-cols-4 gap-8">

            <div className="bg-zinc-900 rounded-2xl p-8">
              <h3 className="text-4xl font-bold text-yellow-500">100+</h3>
              <p className="text-gray-400 mt-3">Projects Completed</p>
            </div>

            <div className="bg-zinc-900 rounded-2xl p-8">
              <h3 className="text-4xl font-bold text-yellow-500">50+</h3>
              <p className="text-gray-400 mt-3">Happy Clients</p>
            </div>

            <div className="bg-zinc-900 rounded-2xl p-8">
              <h3 className="text-4xl font-bold text-yellow-500">15+</h3>
              <p className="text-gray-400 mt-3">Years Experience</p>
            </div>

            <div className="bg-zinc-900 rounded-2xl p-8">
              <h3 className="text-4xl font-bold text-yellow-500">24×7</h3>
              <p className="text-gray-400 mt-3">Customer Support</p>
            </div>

          </div>

        </div>

      </section>

      <Footer />
    </>
  );
}
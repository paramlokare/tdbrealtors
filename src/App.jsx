import build from "./assets/services/build.jpg";
import design from "./assets/services/design.jpg";
import planning from "./assets/services/planning.jpg";
import estimation from "./assets/services/estimation.jpg";
import procurement from "./assets/services/procurement.jpg";
import consultancy from "./assets/services/consultancy.jpg";
import constructionVideo from "./assets/videos/construction.mp4";
import { useState } from 'react';
import logo from './assets/logo.png';
import about from './assets/aboutus.jpg'
import vision1 from './assets/vision1.jpg'
import mission from './assets/mission.jpg'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Footer from './components/Footer';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import client1 from "./assets/client1.jpg";
import client2 from "./assets/client2.jpg";
import client3 from "./assets/client3.jpg";

import Navbar from "./components/Navbar";

export default function LuxuryBuilderWebsite() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        'http://localhost:5000/api/enquiry',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        }
      );

      const data = await response.json();

      {
        success && (
          <p className="text-green-500 mt-4">{success}</p>
        )
      }

    } catch (error) {
      console.error(error);
      alert('Enquiry Submitted Successfully!!');
    }
  };





  const clients = [
    { name: "ABC Builders", image: client1 },
    { name: "XYZ Developers", image: client2 },
    { name: "Prime Realty", image: client3 },
  ];
  const services = [
    {
      title: "Construction",
      image: build,
      description:
        "Residential, commercial and industrial construction with premium quality."
    },
    {
      title: "Architectural Design",
      image: design,
      description:
        "Creative and sustainable architectural planning and 3D visualization."
    },
    {
      title: "Project Planning",
      image: planning,
      description:
        "Detailed project scheduling and execution planning."
    },
    {
      title: "Quantity Estimation",
      image: estimation,
      description:
        "Accurate BOQ preparation and cost estimation."
    },
    {
      title: "Procurement Management",
      image: procurement,
      description:
        "Material sourcing and vendor management."
    },
    {
      title: "Construction Consultancy",
      image: consultancy,
      description:
        "Expert engineering and technical consultancy services."
    }
  ];
  const projects = [
    {
      name: 'Golden Heights',
      location: 'Pune',
      price: 'Starting ₹75 Lakhs',
      image:
        'https://images.unsplash.com/photo-1460317442991-0ec209397118?q=80&w=1200&auto=format&fit=crop',
    },
    {
      name: 'Royal Skyline',
      location: 'Mumbai',
      price: 'Starting ₹1.2 Cr',
      image:
        'https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1200&auto=format&fit=crop',
    },
    {
      name: 'Elite Residency',
      location: 'Nagpur',
      price: 'Starting ₹58 Lakhs',
      image:
        'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop',
    },
    {
      name: 'Golden Heights',
      location: 'Pune',
      price: 'Starting ₹75 Lakhs',
      image:
        'https://images.unsplash.com/photo-1460317442991-0ec209397118?q=80&w=1200&auto=format&fit=crop',
    },
    {
      name: 'Royal Skyline',
      location: 'Mumbai',
      price: 'Starting ₹1.2 Cr',
      image:
        'https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1200&auto=format&fit=crop',
    },
    {
      name: 'Elite Residency',
      location: 'Nagpur',
      price: 'Starting ₹58 Lakhs',
      image:
        'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop',
    },

  ];

  return (
    <div className="bg-black text-white min-h-screen font-sans">
      {/* Navbar */}

      <Navbar />

      {/* Hero Section */}
      <section
        id="home"
        className="relative h-screen w-full overflow-hidden"
      >

        {/* Background Video */}

        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src={constructionVideo} type="video/mp4" />
        </video>

        {/* Dark Overlay */}

        <div className="absolute inset-0 bg-black/70"></div>

        {/* Hero Content */}

        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-6">

          <h1 className="text-6xl md:text-7xl font-extrabold text-white leading-tight">

            MODEL

            <span className="block text-yellow-500">

              CONSTRUCTION & CONSULTANCY

            </span>

          </h1>

          <p className="mt-8 text-xl md:text-2xl text-gray-300 max-w-4xl">

            We build premium residential, commercial and industrial
            projects with quality, innovation and trust.

          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-6">

            <a
              href="/services"
              className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-10 py-4 rounded-full transition"
            >
              View Services
            </a>

            <a
              href="/contact"
              className="border-2 border-yellow-500 hover:bg-yellow-500 hover:text-black text-white font-bold px-10 py-4 rounded-full transition"
            >
              Get Free Consultation
            </a>

          </div>

        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">

          <svg
            className="w-8 h-8 text-yellow-500"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />

          </svg>

        </div>

      </section>
      

      {/* About */}
      <section id="about" className="py-24 px-6 bg-zinc-950">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src={about}
              alt="About"
              className="rounded-3xl shadow-2xl border border-yellow-600"
            />
          </div>


          <div>
            <h2 className="text-4xl font-bold text-yellow-500 mb-6">
              About Us
            </h2>

            <p className="text-gray-300 leading-8 text-lg mb-6">
              We are one of the most trusted construction PM Contractors,consultants and providing
              professional expertise and high quality service to every project.
              Experience of 40Lakh+ sqft of work We are known to optimise cost,bringing out best from team and delivering
              project ontime.The Five senses brings glory to project and we aim satisfying them with our
              “Déjà vu” technique.

            </p>



          </div>
        </div>
      </section>
      <section id="about" className="py-24 px-6 bg-zinc-950">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">



          <div>
            <h2 className="text-4xl font-bold text-yellow-500 mb-6">
              Our Mission
            </h2>

            <p className="text-gray-300 leading-8 text-lg mb-6">
              "WE ASPIRE TOBECOME A TOP PROJECT MANAGEMENT CONSULTANCY BY CREATING A LEGACY OF ENGINEERING
              MARVELS".

            </p>



          </div>
          <div>
            <img
              src={mission}
              alt="mission"
              className="rounded-3xl shadow-2xl border border-yellow-600"
            />
          </div>
        </div>
      </section>
      <section id="about" className="py-24 px-6 bg-zinc-950">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src={vision1}
              alt="vision1"
              className="rounded-3xl shadow-2xl border border-yellow-600"
            />
          </div>


          <div>
            <h2 className="text-4xl font-bold text-yellow-500 mb-6">
              Our Vision
            </h2>

            <p className="text-gray-300 leading-8 text-lg mb-6">
              "TOIMPROVE THE QUALITY OF WORK BY SYSTEMIZINGAND
              OPTIMIZINGTHE CONSTRUCTION METHOD AND TO ACHIEVE
              MORE FOR OUR CLIENTSE".

            </p>



          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-zinc-950 py-24">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-5xl font-bold text-center text-yellow-500 mb-4">
            Our Services
          </h2>

          <p className="text-center text-gray-400 mb-16">
            Complete Construction & Consultancy Solutions
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

            {services.map((service, index) => (

              <div
                key={index}
                className="group relative overflow-hidden rounded-3xl h-96 shadow-xl cursor-pointer"
              >

                <img
                  src={service.image}
                  alt={service.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />

                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition"></div>

                <div className="absolute bottom-0 p-8">

                  <h3 className="text-3xl font-bold text-yellow-400 mb-4">
                    {service.title}
                  </h3>

                  <p className="text-gray-200 leading-7">
                    {service.description}
                  </p>

                  <button className="mt-6 bg-yellow-500 text-black px-6 py-3 rounded-full hover:bg-yellow-400 transition">
                    Learn More
                  </button>

                </div>

              </div>

            ))}

          </div>

        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-24 px-6 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-yellow-500 mb-4">
              Featured Projects
            </h2>

            <p className="text-gray-400">
              Explore our latest premium residential projects.
            </p>
          </div>

          <div><Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            navigation
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="pb-12"
          >
            {projects.map((project, index) => (
              <SwiperSlide key={index}>
                <div className="bg-black rounded-3xl overflow-hidden border border-yellow-700 shadow-2xl hover:-translate-y-2 transition duration-300">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="h-72 w-full object-cover transition duration-700 hover:scale-110"
                  />

                  <div className="p-6">
                    <h3 className="text-3xl font-bold text-yellow-500 mb-2">
                      {project.name}
                    </h3>

                    <p className="text-gray-400 mb-2">
                      Location: {project.location}
                    </p>

                    <p className="text-xl font-semibold mb-6 text-white">
                      {project.price}
                    </p>

                    <button className="w-full bg-yellow-500 hover:bg-yellow-400 text-black py-3 rounded-xl font-bold transition">
                      View Details
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          </div>
        </div>
      </section >

      {/* Clients */}
      < section id="clients" className="py-24 px-6 bg-black" >
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-yellow-500 mb-4">
            Our Clients
          </h2>

          <p className="text-gray-400 mb-16">
            Trusted by leading businesses and homeowners.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {clients.map((client, index) => (
              <div
                key={index}
                className="relative h-64 rounded-2xl overflow-hidden border border-yellow-700 group"
              >
                {/* Background Image */}
                <img
                  src={client.image}
                  alt={client.name}
                  className="absolute inset-0 w-full h-full object-cover transition duration-700 group-hover:scale-110"
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition duration-300"></div>

                {/* Client Name */}
                <div className="relative z-10 flex items-center justify-center h-full">
                  <h3 className="text-white text-2xl font-bold">
                    {client.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section >

      {/* Contact & Enquiry */}


      < section id="contact" className="py-24 px-6 bg-zinc-950" >
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-bold text-yellow-500 mb-6">
              Contact Us
            </h2>

            <div className="space-y-6 text-lg text-gray-300">
              <p>
                <span className="font-bold text-yellow-500">Address:</span>{' '}
                Katraj Pune, Maharashtra 411036.
              </p>

              <p>
                <span className="font-bold text-yellow-500">Phone:</span> +91
                9922257909
              </p>

              <p>
                <span className="font-bold text-yellow-500">Email:</span>{' '}
                jayantconstructions@gmail.com
              </p>
            </div>

            <div className="mt-10 rounded-3xl overflow-hidden border border-yellow-700">
              <iframe
                title="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.2438975450877!2d73.85674337465458!3d18.5167265692699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c07cb93d353f%3A0x2d5b4c56e9875d4!2sPune!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>

          <div className="bg-black border border-yellow-700 rounded-3xl p-10 shadow-2xl">
            <h3 className="text-3xl font-bold text-yellow-500 mb-8">
              Send Enquiry
            </h3>

            <form
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full bg-zinc-900 border border-yellow-700 rounded-xl px-5 py-4 focus:outline-none focus:border-yellow-400"
                required
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full bg-zinc-900 border border-yellow-700 rounded-xl px-5 py-4 focus:outline-none focus:border-yellow-400"
                required
              />

              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="w-full bg-zinc-900 border border-yellow-700 rounded-xl px-5 py-4 focus:outline-none focus:border-yellow-400"
                required
              />

              <textarea
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                className="w-full bg-zinc-900 border border-yellow-700 rounded-xl px-5 py-4 focus:outline-none focus:border-yellow-400"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-4 rounded-xl transition"
              >
                Submit Enquiry
              </button>
            </form>



          </div>
        </div>
      </section >


      {/* Footer */}


      <Footer />



    </div>
  );
}

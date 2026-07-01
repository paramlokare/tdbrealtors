import build from "./assets/services/build.jpg";
import design from "./assets/services/design.jpg";
import planning from "./assets/services/planning.jpg";
import estimation from "./assets/services/estimation.jpg";
import procurement from "./assets/services/procurement.jpg";
import consultancy from "./assets/services/consultancy.jpg";
import costmgmt from "./assets/services/costmgmt.jpg"
import build_construction from "./assets/services/build_construction.jpg"
import interior from "./assets/services/interior.avif"

import constructionVideo from "./assets/videos/construction.mp4";
import { useState } from 'react';
import logo from './assets/logo.png';
import about from './assets/aboutus.jpg'
import vision1 from './assets/vision1.jpg'
import mission from './assets/mission.jpg'
import whyus from './assets/whyus.jpg'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Footer from './components/Footer';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


import Navbar from "./components/Navbar";
import client1 from "./assets/clients/client1.png";
import client2 from "./assets/clients/client2.jpeg";
import client3 from "./assets/clients/client3.jpg";
import client4 from "./assets/clients/client4.png";
import client5 from "./assets/clients/client5.jpg";
import client6 from "./assets/clients/client6.png";
import client7 from "./assets/clients/client7.jpg";
import client8 from "./assets/clients/client8.jpg";
import client9 from "./assets/clients/client9.jpg";
import client10 from "./assets/clients/client10.png";
import project1 from "./assets/projects/Artmeciya.jpg";
import project2 from "./assets/projects/chaudharihouse.jpg";
import project3 from "./assets/projects/Essenciya.jpg";
import project4 from "./assets/projects/KaraswadaMapusaGoa.jpg";
import project5 from "./assets/projects/Neelkanthjw.png";
import project6 from "./assets/projects/PragatiApartment.jpg";
import project7 from "./assets/projects/Revanta.jpg";
import project8 from "./assets/projects/SidhiVinayakGroup.jpg";
import project9 from "./assets/projects/Valencitya.jpg";
import {
  FaHardHat,
  FaDraftingCompass,
  FaClipboardList,
  FaCalculator,
  FaTruckLoading,
  FaBuilding,
} from "react-icons/fa";

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

  const testimonials = [
    {
      name: "Rajesh Patil",
      company: "ABC Developers",
      review:
        "Model Construction delivered our commercial project on schedule with outstanding quality. Their professionalism and planning exceeded our expectations.",
    },
    {
      name: "Priya Kulkarni",
      company: "Skyline Builders",
      review:
        "Excellent project management team. Their technical expertise and commitment to quality made our project completely hassle-free.",
    },
    {
      name: "Amit Deshmukh",
      company: "Green Valley Infra",
      review:
        "Highly recommended for construction consultancy. Transparent communication, timely execution, and exceptional workmanship.",
    },
  ];




  const clients = [
    client1,
    client2,
    client3,
    client4,
    client5,
    client6,
    client7,
    client8,
    client9,
    client10,
  ];
  const services = [
    {
      title: "Design",
     
      
      image: build,
      
      icon: <FaHardHat size={45} />,
      description: (
        <>
          1. Interior Fitout & Designing
          2DInteriorFloorPlan
          DetailsofFixturesandMaterial
          CommercialSpaceDesigning
          <br />
          2. Project Promotional Video Designing
          Drone Camera Master Shot



        </>
      )
    },
    {
      title: "Manage-ProjectFeasibility Study",
      image: design,
      icon: <FaDraftingCompass size={45} />,
      description:
        "Analyzing Requirement of Client Cost Benefit analysis Area Survey, Max. Constructability study Project Budget and Risk Analysis"
    },
    {
      title: "Manage - ProjectPlanningand Scheduling",
      image: planning,
      icon: <FaClipboardList size={45} />,
      description:
        "Project Master Schedule & Micro planning of activities Contractor and Vendor Delivery wise Schedule Tracking Project timeline (Actual vs Planned) Coordinating to streamline the schedule"

    },
    {
      title: "Manage - Quantity & Estimation",
      image: estimation,
      icon: <FaCalculator size={45} />,
      description:
        "Preparing BOQ as per GFC Drawings Preliminary Estimation Detail Estimation of complete project Activitywise estimation Master SummaryReport"
    },
    {
      title: "Manage - Procurement Management",
      image: procurement,
      icon: <FaTruckLoading size={45} />,
      description:
        "Taking Quotation and Detail specification from vendor Quotation Comparison and Analysis Vendor Negotiation and Finalization Issuing PO/WO and Annexure inline with PI"
    },
    {
      title: "Manage - Quality Management",
      image: consultancy,
      icon: <FaBuilding size={45} />,
      description:
        "Ensuring bought out item specification as per acceptance criteria Inspection Checklist after project CompletionAudit complianceReport Bill Checking"
    },
    {
      title: "Manage - Cost Management",
      image: costmgmt,
      icon: <FaClipboardList size={45} />,
      description:
        "Preparing Cash Flow report Material Consumption/Qty analysis Activity wise Cost Analysis Bill certification for payment approval Rate Analysis for Critical Item and Extra Item Identify the quantities exceeding the contract quantity Identification of items for advance purchase"
    },
    {
      title: "Build -  Construction Execution",
      image: build_construction,
      icon: <FaTruckLoading size={45} />,
      description:
        "Weekly site visit ,Site Controland Timeline Tracking Maintaining work record and site report . Preparing Weekly and Monthly Progress Report"
    },
    {
      title: "Build -   Interior Execution",
      image: interior,
      icon: <FaDraftingCompass size={45} />,
      description:
        "Weekly Site Visit ,SiteControl, Timeline Tracking and Supervision Work Drawing Reading and Execution Coordination with contractor and consultant for site related work"
    },

  ];
  const projects = [
    {
      image: project1,
      title: "Artmeciya",
      location: "Pune",
    },
    {
      image: project2,
      title: "chaudhari house",
      location: "Mumbai",
    },
    {
      image: project3,
      title: "Essenciya",
      location: "Pune",
    },
    {
      image: project4,
      title: "Karaswada Mapusa Goa",
      location: "Goa",
    },
    {
      image: project5,
      title: "Neelkanth jw",
      location: "Mumbai",
    },
    {
      image: project6,
      title: "Pragati Apartment",
      location: "Mumbai",
    },
    {
      image: project7,
      title: "Revanta",
      location: "Pune",
    },
    {
      image: project8,
      title: "SidhiVinayak Group",
      location: "Pune",
    },
    {
      image: project9,
      title: "Valencitya",
      location: "Pune",
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


            <h1 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
              <span className="block text-yellow-500"> CONSTRUCTION & CONSULTANCY </span> </h1>




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

      {/* About */}
      <section id="about" className="py-12 px-6 bg-zinc-950">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src={about}
              alt="About"
              className="rounded-3xl shadow-2xl border border-yellow-600"
            />
          </div >


          <div >
            <h2 className="text-4xl font-bold text-yellow-500 mb-6 ml-4">
              About Us
            </h2>

            


            <div className="max-w-4xl mx-auto px-6">
              <p className="text-gray-300 text-lg leading-8 text-justify">
                We are one of the most trusted Project Management Consultants (PMC) and Construction Management firms, delivering professional expertise and exceptional quality across every project we undertake.
                With experience managing over 4 million+ sq. ft. of residential, commercial, and industrial developments, we have built a reputation for excellence, reliability, and timely project delivery.
                Our team specializes in optimizing project costs, maximizing team performance, maintaining the highest quality standards, and ensuring projects are completed on schedule without compromising safety or efficiency.
                At The Five Senses, we believe every project should create a lasting impression. Through our unique "Déjà Vu" approach, we focus on delivering spaces that inspire, delight, and exceed client expectations. Every project reflects our commitment to innovation, precision, and customer satisfaction.

              </p>
            </div>



          </div>
        </div>
      </section>
      <section id="about" className="py-12 px-6 bg-zinc-950">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">



          <div>
            <h2 className="text-4xl font-bold text-yellow-500 mb-6 ml-80.1">
              Our Mission
            </h2>

            <p className="text-gray-300 text-lg leading-8 text-justify">
              To set new benchmarks in Project Management Consultancy by transforming visionary ideas into engineering marvels, delivering exceptional quality, optimizing value, and creating sustainable landmarks that stand the test of time.

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
      <section id="about" className="py-12 px-6 bg-zinc-950">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src={vision1}
              alt="vision1"
              className="rounded-3xl shadow-2xl border border-yellow-600"
            />
          </div>


          <div>
            <h2 className="text-4xl font-bold text-yellow-500 mb-6 ">
              Our Vision
            </h2>

            <p className="text-gray-300 text-lg leading-8 text-justify">
              To continuously improve construction quality through innovative systems, optimized project execution, and efficient construction practices that maximize value for our clients.

            </p>



          </div>
        </div>
      </section>
      <section id="about" className="py-12 px-6 bg-zinc-950">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">



          <div>
            <h2 className="text-4xl font-bold text-yellow-500 mb-6">
              Why Us
            </h2>

            <p className="text-gray-300 text-lg leading-8 text-justify">
              Taking Complete ownership and responsibility of the
              project likea "CAREGIVER"
              Providing Engineering and Technological solutions
              A balanced team of Experienced and Young Dynamic
              multitasking engineers
              Decent working style and methodology.
              Implementation of standard workflows and templates
              500+ registered vendors and contractors
              Association with Architects, Consultants and Industry
              Experts
              Experience of 40Lakh+ sqft of work
              We haveHighest level of Ethics and Values.


            </p>



          </div>
          <div>
            <img
              src={whyus}
              alt="whyus"
              className="w-full h-[400px] object-cover rounded-3xl shadow-2xl border border-yellow-600"

            />
          </div>
        </div>
      </section>

      {/* Services */}
      {/* Services Cards */}
        
        
      <a href="/services" className="hover:text-yellow-500"><section className="bg-zinc-950 py-16 px-6">
         
           <h2 className="text-4xl font-bold text-yellow-500 mb-6 text-center">
              Our Services
            </h2>
            
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
               
                {/*<button
                  className="mt-8 bg-yellow-500 text-black font-semibold px-6 py-3 rounded-full hover:bg-yellow-400 transition"
                >
                  Learn More
                </button>*/}

              </div>

            </div>

          ))}

        </div>

      </section>
      </a>

      {/* Projects */}
     
<a href="/projects" className="hover:text-yellow-500">
      <section className="bg-zinc-950 py-6 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-yellow-500 mb-6 text-center">
            Our Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-black">
            {projects.map((project, index) => (
              <div
                key={index}
                className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-[#D4AF37]"
              >
                <div className="overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-72 object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold">
                    {project.title}
                  </h3>

                  <p className="text-gray-500 mt-2">
                    📍 {project.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      </a>

      {/* Clients */}
      <section className="py-20 bg-[#D4AF37]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4 text-black">
            Trusted By Our Clients
          </h2>

          <p className="text-center text-black mb-14">
            We are proud to work with leading companies and organizations.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
            {clients.map((logo, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 flex justify-center items-center hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                <img
                  src={logo}
                  alt={`Client ${index + 1}`}
                  className="h-16 w-full object-contain grayscale hover:grayscale-0 transition duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Enquiry */}

      {/*
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
      </section > */}
      <section className="bg-zinc-950 py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">

          <h2 className="text-5xl font-bold text-yellow-500 mb-4">
            Client Testimonials
          </h2>

          <p className="text-gray-400 mb-14 text-lg">
            What our valued clients say about us
          </p>

          <div className="grid md:grid-cols-3 gap-8">

            {testimonials.map((item, index) => (
              <div
                key={index}
                className="bg-black border border-yellow-600 rounded-3xl p-8 hover:-translate-y-3 hover:shadow-2xl hover:shadow-yellow-500/30 transition-all duration-500"
              >

                <div className="text-yellow-500 text-5xl mb-6">
                  ❝
                </div>

                <p className="text-gray-300 leading-8 italic mb-8">
                  {item.review}
                </p>

                <hr className="border-yellow-500/30 mb-6" />

                <h3 className="text-xl font-bold text-white">
                  {item.name}
                </h3>

                <p className="text-yellow-500 mt-2">
                  {item.company}
                </p>

                <div className="flex justify-center mt-5 text-yellow-400 text-xl">
                  ★★★★★
                </div>

              </div>
            ))}

          </div>

        </div>
      </section>


      {/* Footer */}


      <Footer />



    </div>
  );
}

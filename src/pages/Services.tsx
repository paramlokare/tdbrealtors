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
import costmgmt from "../assets/services/costmgmt.jpg"
import build_construction from "../assets/services/build_construction.jpg"
import interior from "../assets/services/interior.avif"
import servicesBg from "../assets/services/services-bg.jpg";

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
  
  { title: "Manage-Project Feasibility Study",
      image: design,
      icon: <FaDraftingCompass size={45} />,
      description:
        "Analyzing Requirement of Client Cost Benefit analysis Area Survey, Max. Constructability study Project Budget and Risk Analysis"
  
  },
  {
    title: "Manage - Project Planningand Scheduling",
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

export default function Services() {
  return (
    <>
      <Navbar />
      <section
        className="h-[280px] md:h-[350px] lg:h-[400px] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `url(${servicesBg})`,
        }}
      >
        <div className="w-full h-full bg-black/55 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            Our Services
          </h1>
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
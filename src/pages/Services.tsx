import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const services = [
    {
        id: 1,
        title: "BUILD",
        description: [
            "Construction Execution - Weekly site visits, site control and timeline tracking, maintaining work records and site reports, preparing weekly and monthly progress reports.",
            "Interior Execution - Weekly site visits, site control, timeline tracking and supervision, work drawing reading and execution, coordination with contractors and consultants."
        ]
    },
    {
        id: 2,
        title: "DESIGN",
        description: [
            "Interior Fitout & Design- 2D Interior floor plan details of fixtures and materials Commercial space designing Rsidential Space Designing 3D Interior Designing",
            "ProjectPromotional Video Designing- Project Introduction Videos,Drone camera master shot, Marketing promotional videos from professional director and script writer."

        ]
    },
    {
        id: 3,
        title: "PROJECT FEASIBLILTY STUDY",
        description: [
            "Analysing REquirement of client,cost benifit analysis. Area Survey, Max Constructability study, Project budget and risk analysis",
            " an early-stage assessment conducted before major investments are made. It determines if a proposed project is technically possible, financially viable, and practically worthwhile."
        ]
    },
    {
        id: 4,
        title: "PROJECT PLANNING AND SCHEDULING",
        description: [
            "Project Master Schedule & Micro planning of activities", " Contractor and Vendor Delivery wise Schedule", " Tracking Project timeline (Actual vs Planned)",
        ]
    },
    {
        id: 5,
        title: "QUANTITY AND ESTIMATIONS",
        description: [
            "Prparing BOQ as per GFC Drawings", "Preliminary Estimation Details ", "Estimation of complete project", "Activitywise estimation",

            "Master SummaryReport"
        ]
    },
    {
        id: 6,
        title: "PROCUREMENT MANAGEMENT",
        description: ["Taking Quotation and details specification from vendor", " Quotation Comparison and analysis", "Vendor Negotiation and finalization Issuing PO/WO ",
        ]
    },

];
function Services() {
    return (
        <>
            <Navbar />
            

            <div className="bg-black min-h-screen text-white">
                <div className="max-w-7xl mx-auto px-6">
                    

                    {/* Services Content Here */}
                    <div className="bg-black min-h-screen text-white">
                        <div className="max-w-7xl mx-auto px-6">

                            <h1 className="text-5xl font-bold text-center text-yellow-500 mb-6">
                                Our Services
                            </h1>

                            <p className="text-center text-gray-400 mb-16">
                                Professional Construction Management &
                                Consultancy Services
                            </p>

                            <div className="grid md:grid-cols-3 gap-8">

                                {services.map((service, index) => (
                                    <div
                                        key={index}
                                        className="bg-zinc-900 border border-yellow-700 rounded-3xl p-8"
                                    >
                                        <h3 className="text-2xl text-yellow-400 mb-4">
                                            {service.title}
                                        </h3>

                                        <p className="text-gray-300">
                                            {service.description}
                                        </p>
                                    </div>
                                ))}

                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <Footer />
        </>
    );
}

export default Services;
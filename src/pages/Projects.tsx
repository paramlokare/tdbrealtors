import { NavLink } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import projectVideo from "../assets/videos/project.mp4";
import project1 from "../assets/projects/Artmeciya.jpg";
import project2 from "../assets/projects/chaudharihouse.jpg";
import project3 from "../assets/projects/Essenciya.jpg";
import project4 from "../assets/projects/KaraswadaMapusaGoa.jpg";
import project5 from "../assets/projects/Neelkanthjw.png";
import project6 from "../assets/projects/PragatiApartment.jpg";
import project7 from "../assets/projects/Revanta.jpg";
import project8 from "../assets/projects/SidhiVinayakGroup.jpg";
import project9 from "../assets/projects/Valencitya.jpg";
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



function Services() {
    return (
        <>
            <Navbar />
            <section className="relative h-screen overflow-hidden">

                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                >

                    <source src={projectVideo} type="video/mp4" />

                </video>

                <div className="absolute inset-0 bg-black/70" />

                <div className="relative z-10 h-full flex flex-col justify-center items-center text-center">

                    <h1 className="text-7xl font-extrabold text-yellow-500">

                        Our Projects

                    </h1>

                    <p className="text-gray-300 text-xl mt-6">

                        Building Dreams Into Reality

                    </p>

                    <button className="mt-10 bg-yellow-500 px-10 py-4 rounded-full text-black font-bold hover:scale-110 transition">

                        Explore Projects

                    </button>

                </div>

            </section>



            <section className="bg-zinc-950 py-6 bg-gray-100">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-4xl font-bold text-yellow-500 mb-6 text-center">
                        Our Projects
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
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



            <Footer />
        </>
    );
}

export default Services;
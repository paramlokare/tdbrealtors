import { NavLink } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import projectVideo from "../assets/videos/project.mp4";
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



            <div className="bg-black min-h-screen text-white">

                <div className="max-w-7xl mx-auto px-6">

                    <h1 className="text-5xl font-bold text-center text-yellow-500 mb-16">
                       **********************
                    </h1>

                    <div className="grid md:grid-cols-3 gap-10">

                        {projects.map((project, index) => (
                            <div
                                key={index}
                                className="bg-zinc-900 rounded-3xl overflow-hidden border border-yellow-700"
                            >
                                <img
                                    src={project.image}
                                    alt={project.name}
                                    className="h-64 w-full object-cover"
                                />

                                <div className="p-6">

                                    <h3 className="text-2xl text-yellow-400 mb-2">
                                        {project.name}
                                    </h3>

                                    <p className="text-gray-400">
                                        {project.location}
                                    </p>

                                </div>

                            </div>
                        ))}

                    </div>

                </div>

            </div>



            <Footer />
        </>
    );
}

export default Services;
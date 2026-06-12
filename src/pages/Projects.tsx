import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
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


            <div className="bg-black min-h-screen text-white">

                <div className="max-w-7xl mx-auto px-6">

                    <h1 className="text-5xl font-bold text-center text-yellow-500 mb-16">
                        Our Projects
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
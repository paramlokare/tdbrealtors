import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import client1 from "../assets/client1.jpg";
import client2 from "../assets/client2.jpg";
import client3 from "../assets/client3.jpg";

const clients = [
    { name: "ABC Builders", image: client1 },
    { name: "XYZ Developers", image: client2 },
    { name: "Prime Realty", image: client3 },
];



function Services() {
    return (
        <>
            <Navbar />


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

            <Footer />
        </>
    );
}

export default Services;
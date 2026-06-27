
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import client1 from "../assets/client1.jpg";
import client2 from "../assets/client2.jpg";
import client3 from "../assets/client3.jpg";

import clientVideo from "../assets/videos/client.mp4";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

import {
    FaBuilding,
    FaHandshake,
    FaUsers,
    FaAward,
    FaArrowRight,
} from "react-icons/fa";

const clients = [
    { name: "ABC Builders", image: client1 },
    { name: "XYZ Developers", image: client2 },
    { name: "Prime Realty", image: client3 },
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
                    <source src={clientVideo} type="video/mp4" />
                </video>

                <div className="absolute inset-0 bg-black/70"></div>

                <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">

                    <h1 className="text-6xl md:text-7xl font-extrabold text-yellow-500">

                        Our Trusted Clients

                    </h1>

                    <p className="mt-8 text-xl text-gray-300 max-w-3xl">

                        Delivering excellence in construction and consultancy with
                        trusted partnerships across residential, commercial and
                        industrial sectors.

                    </p>

                    <button className="mt-10 bg-yellow-500 hover:bg-yellow-400 text-black px-10 py-4 rounded-full font-bold">

                        Explore Projects

                    </button>

                </div>

            </section>
            <section className="bg-black py-20">

                <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">

                    <div className="bg-zinc-900 rounded-3xl p-8 text-center hover:-translate-y-3 transition">

                        <FaUsers className="text-yellow-500 text-5xl mx-auto" />

                        <h2 className="text-5xl font-bold text-white mt-4">100+</h2>

                        <p className="text-gray-400">Happy Clients</p>

                    </div>

                    <div className="bg-zinc-900 rounded-3xl p-8 text-center hover:-translate-y-3 transition">

                        <FaBuilding className="text-yellow-500 text-5xl mx-auto" />

                        <h2 className="text-5xl font-bold text-white mt-4">250+</h2>

                        <p className="text-gray-400">Completed Projects</p>

                    </div>

                    <div className="bg-zinc-900 rounded-3xl p-8 text-center hover:-translate-y-3 transition">

                        <FaHandshake className="text-yellow-500 text-5xl mx-auto" />

                        <h2 className="text-5xl font-bold text-white mt-4">98%</h2>

                        <p className="text-gray-400">Client Satisfaction</p>

                    </div>

                    <div className="bg-zinc-900 rounded-3xl p-8 text-center hover:-translate-y-3 transition">

                        <FaAward className="text-yellow-500 text-5xl mx-auto" />

                        <h2 className="text-5xl font-bold text-white mt-4">15+</h2>

                        <p className="text-gray-400">Years Experience</p>

                    </div>

                </div>

            </section>
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
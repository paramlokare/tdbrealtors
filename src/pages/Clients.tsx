
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import client1 from "../assets/clients/client1.png";
import client2 from "../assets/clients/client2.jpeg";
import client3 from "../assets/clients/client3.jpg";
import client4 from "../assets/clients/client4.png";
import client5 from "../assets/clients/client5.jpg";
import client6 from "../assets/clients/client6.png";
import client7 from "../assets/clients/client7.jpg";
import client8 from "../assets/clients/client8.jpg";
import client9 from "../assets/clients/client9.jpg";
import client10 from "../assets/clients/client10.png";


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

export default function Clients() {
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
            

            <section className="py-20 bg-gray-100">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-4xl font-bold text-center mb-4">
                        Trusted By Our Clients
                    </h2>

                    <p className="text-center text-gray-600 mb-14">
                        We are proud to work with leading companies and organizations.
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
                        {clients.map((logo, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl shadow-md p-6 flex justify-center items-center hover:shadow-xl hover:scale-105 transition-all duration-300"
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

            <Footer />
        </>
    );
}
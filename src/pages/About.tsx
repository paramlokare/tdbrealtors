import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import about from '../assets/aboutus.jpg'
import vision1 from '../assets/vision1.jpg'
import mission from '../assets/mission.jpg'


function About() {
    return (
        <>
            <Navbar />

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

            <Footer />
        </>
    );
}

export default About;
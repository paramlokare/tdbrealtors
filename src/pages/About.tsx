import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import about from '../assets/aboutus.jpg'
import vision1 from '../assets/vision1.jpg'
import mission from '../assets/mission.jpg'
import whyus from '../assets/whyus.jpg'


function About() {
    return (
        <>
            <Navbar />

            {/* About */}
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
                        <h2 className="text-4xl font-bold text-yellow-500 mb-6 ml-80">
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
                        <h2 className="text-4xl font-bold text-yellow-500 mb-6  ml-80">
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

            <Footer />
        </>
    );
}

export default About;
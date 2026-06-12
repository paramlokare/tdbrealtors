import { useState } from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function LuxuryBuilderWebsite() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(
                'http://localhost:5000/api/enquiry',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(formData)
                }
            );

            const data = await response.json();

            {
                success && (
                    <p className="text-green-500 mt-4">{success}</p>
                )
            }

        } catch (error) {
            console.error(error);
            alert('Enquiry Submitted Successfully!!');
        }
    };


  
        return (
            <>
                <Navbar />

                {/* Contact & Enquiry */}


                < section id="contact" className="py-24 px-6 bg-zinc-950" >
                    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
                        <div>
                            <h2 className="text-4xl font-bold text-yellow-500 mb-6">
                                Contact Us
                            </h2>

                            <div className="space-y-6 text-lg text-gray-300">
                                <p>
                                    <span className="font-bold text-yellow-500">Address:</span>{' '}
                                    Gandharv Galaxia Mall Amanora Park Town , Hadpsar Pune, Maharashtra 411036.
                                </p>

                                <p>
                                    <span className="font-bold text-yellow-500">Phone:</span> +91
                                    9922257909
                                </p>

                                <p>
                                    <span className="font-bold text-yellow-500">Email:</span>{' '}
                                    jayantconstructions@gmail.com
                                </p>
                            </div>

                            <div className="mt-10 rounded-3xl overflow-hidden border border-yellow-700">
                                <iframe
                                    title="map"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.2438975450877!2d73.85674337465458!3d18.5167265692699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c07cb93d353f%3A0x2d5b4c56e9875d4!2sPune!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
                                    width="100%"
                                    height="300"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                ></iframe>
                            </div>
                        </div>

                        <div className="bg-black border border-yellow-700 rounded-3xl p-10 shadow-2xl">
                            <h3 className="text-3xl font-bold text-yellow-500 mb-8">
                                Send Enquiry
                            </h3>

                            <form
                                onSubmit={handleSubmit}
                                className="space-y-6"
                            >
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Your Name"
                                    className="w-full bg-zinc-900 border border-yellow-700 rounded-xl px-5 py-4 focus:outline-none focus:border-yellow-400"
                                    required
                                />

                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Your Email"
                                    className="w-full bg-zinc-900 border border-yellow-700 rounded-xl px-5 py-4 focus:outline-none focus:border-yellow-400"
                                    required
                                />

                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="Phone Number"
                                    className="w-full bg-zinc-900 border border-yellow-700 rounded-xl px-5 py-4 focus:outline-none focus:border-yellow-400"
                                    required
                                />

                                <textarea
                                    name="message"
                                    rows="5"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Your Message"
                                    className="w-full bg-zinc-900 border border-yellow-700 rounded-xl px-5 py-4 focus:outline-none focus:border-yellow-400"
                                ></textarea>

                                <button
                                    type="submit"
                                    className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-4 rounded-xl transition"
                                >
                                    Submit Enquiry
                                </button>
                            </form>


                        </div>
                    </div>
                </section >

                <Footer />
            </>
        );
    }


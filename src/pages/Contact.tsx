import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://localhost:5000/api/enquiry",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        setSuccess("Enquiry Submitted Successfully!");

        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        alert("Something went wrong.");
      }
    } catch (error) {
      console.error(error);
      alert("Server not running.");
    }
  };

  return (
    <>
      <Navbar />

      <section className="py-24 px-6 bg-zinc-950 min-h-screen">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">

          {/* Contact Details */}

          <div>
            <h2 className="text-4xl font-bold text-yellow-500 mb-8">
              Contact Us
            </h2>

            <div className="space-y-6 text-lg text-gray-300">

              <p>
                <span className="font-bold text-yellow-500">
                  Address :
                </span>{" "}
                Katraj Pune, Maharashtra 411036
              </p>

              <p>
                <span className="font-bold text-yellow-500">
                  Phone :
                </span>{" "}
                +91 9922257909
              </p>

              <p>
                <span className="font-bold text-yellow-500">
                  Email :
                </span>{" "}
                jayantconstructions@gmail.com
              </p>

            </div>

            <div className="mt-10 rounded-3xl overflow-hidden border border-yellow-700">

              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.2438975450877!2d73.85674337465458!3d18.5167265692699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c07cb93d353f%3A0x2d5b4c56e9875d4!2sPune!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
                width="100%"
                height="320"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
              ></iframe>

            </div>
          </div>

          {/* Enquiry Form */}

          <div className="bg-black border border-yellow-700 rounded-3xl p-10">

            <h3 className="text-3xl font-bold text-yellow-500 mb-8">
              Send Enquiry
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-zinc-900 border border-yellow-700 rounded-xl px-5 py-4 text-white"
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-zinc-900 border border-yellow-700 rounded-xl px-5 py-4 text-white"
                required
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full bg-zinc-900 border border-yellow-700 rounded-xl px-5 py-4 text-white"
                required
              />

              <textarea
                rows="5"
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-zinc-900 border border-yellow-700 rounded-xl px-5 py-4 text-white"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-4 rounded-xl"
              >
                Submit Enquiry
              </button>

              {success && (
                <p className="text-green-500 text-center mt-4">
                  {success}
                </p>
              )}

            </form>

          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}

export default Contact;
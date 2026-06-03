import { useState } from 'react';
import logo from './assets/tdb-logo.jpg';
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
  ];

  const services = [
    'Luxury Flat Sales',
    'Property Consultation',
    'Interior Planning',
    'Home Loan Assistance',
    'Commercial Properties',
    'Investment Guidance',
  ];

  const clients = [
    'Mahindra Group',
    'Skyline Infra',
    'Urban Nest',
    'Royal Developers',
    'Prime Realty',
    'Elite Ventures',
  ];

  return (
    <div className="bg-black text-white min-h-screen font-sans">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/90 border-b border-yellow-600 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img
              src={logo}
              alt="Model Construction"
              className="h-20 w-auto"
            />

            
          </div>

          <div className="hidden md:flex gap-8 text-sm font-medium">
            <a href="#home" className="hover:text-yellow-500 transition">
              Home
            </a>
            <a href="#about" className="hover:text-yellow-500 transition">
              About
            </a>
            <a href="#services" className="hover:text-yellow-500 transition">
              Services
            </a>
            <a href="#projects" className="hover:text-yellow-500 transition">
              Projects
            </a>
            <a href="#clients" className="hover:text-yellow-500 transition">
              Clients
            </a>
            <a href="#contact" className="hover:text-yellow-500 transition">
              Contact
            </a>
            <a href="/admin" className="hover:text-yellow-500 transition" >
              Admin
            </a>

          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative h-screen flex items-center justify-center text-center px-6"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/75"></div>

        <div className="relative z-10 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
            Find Your
            <span className="text-yellow-500"> Dream Flat</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 mb-8">
            Premium luxury apartments crafted with elegance, comfort, and
            world-class amenities.
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-4">
            <a
              href="#projects"
              className="bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-4 rounded-xl font-bold transition"
            >
              Explore Projects
            </a>

            <a
              href="#contact"
              className="border border-yellow-500 hover:bg-yellow-500 hover:text-black px-8 py-4 rounded-xl font-bold transition"
            >
              Enquire Now
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 px-6 bg-zinc-950">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1200&auto=format&fit=crop"
              alt="About"
              className="rounded-3xl shadow-2xl border border-yellow-600"
            />
          </div>

          <div>
            <h2 className="text-4xl font-bold text-yellow-500 mb-6">
              About Us
            </h2>

            <p className="text-gray-300 leading-8 text-lg mb-6">
              Model Construction is a premium real estate company delivering modern
              residential and commercial properties with high-end architecture
              and superior lifestyle experiences.
            </p>

            <p className="text-gray-400 leading-8">
              We specialize in luxury apartments, smart homes, gated
              communities, and investment-driven real estate solutions designed
              for modern families.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 px-6 bg-black">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-yellow-500 mb-4">
            Our Services
          </h2>

          <p className="text-gray-400 max-w-3xl mx-auto mb-16">
            We provide complete real estate solutions with luxury lifestyle
            planning and investment guidance.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-zinc-900 p-8 rounded-3xl border border-yellow-700 hover:scale-105 transition duration-300 shadow-xl"
              >
                <div className="w-16 h-16 bg-yellow-500 text-black rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                  {index + 1}
                </div>

                <h3 className="text-2xl font-semibold mb-4 text-yellow-400">
                  {service}
                </h3>

                <p className="text-gray-400 leading-7">
                  Premium quality services tailored for customers looking for
                  modern and luxurious living spaces.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-24 px-6 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-yellow-500 mb-4">
              Featured Projects
            </h2>

            <p className="text-gray-400">
              Explore our latest premium residential projects.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-black rounded-3xl overflow-hidden border border-yellow-700 shadow-2xl hover:-translate-y-2 transition duration-300"
              >
                <img
                  src={project.image}
                  alt={project.name}
                  className="h-72 w-full object-cover"
                />

                <div className="p-6">
                  <h3 className="text-3xl font-bold text-yellow-500 mb-2">
                    {project.name}
                  </h3>

                  <p className="text-gray-400 mb-2">
                    Location: {project.location}
                  </p>

                  <p className="text-xl font-semibold mb-6 text-white">
                    {project.price}
                  </p>

                  <button className="w-full bg-yellow-500 hover:bg-yellow-400 text-black py-3 rounded-xl font-bold transition">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients */}
      <section id="clients" className="py-24 px-6 bg-black">
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
                className="bg-zinc-900 border border-yellow-700 rounded-2xl p-10 text-2xl font-semibold hover:bg-yellow-500 hover:text-black transition duration-300"
              >
                {client}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Enquiry */}


      <section id="contact" className="py-24 px-6 bg-zinc-950">
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
                9999999999
              </p>

              <p>
                <span className="font-bold text-yellow-500">Email:</span>{' '}
                xyz@gmail.com
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
      </section>


      {/* Footer */}
      <footer className="bg-black border-t border-yellow-700 py-8 text-center text-gray-400">
        <p>
          © 2026 Model Construction. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}

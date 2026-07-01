
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";



function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="bg-black text-white px-4 md:px-8 py-4 border-b border-yellow-500">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <h1 className="text-yellow-500 font-bold text-xl">
                    <Link to="/" className="flex items-center gap-3">
                        <img
                            src={logo}
                            alt="Model Construction Logo"
                            className="h-14 md:h-16 lg:h-20 w-auto"
                        />
                    </Link>
                </h1>
                <button
                    className="lg:hidden text-3xl text-yellow-500"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </button>
                <div className="hidden lg:flex gap-8 items-center">
                    <NavLink
                        to="/"
                        className="font-bold text-lg hover:text-yellow-500 transition duration-300"
                    >
                        Home
                    </NavLink>

                    <NavLink
                        to="/about"
                        className="font-bold text-lg hover:text-yellow-500 transition duration-300"
                    >
                        About
                    </NavLink>

                    <div className="relative group">

                        {/* Services Menu */}
                        <NavLink
                            to="/services"
                            className={({ isActive }) =>
                                isActive
                                    ? "text-yellow-500 font-bold text-lg"
                                    : "text-white font-medium text-lg hover:text-yellow-500 transition"
                            }
                        >
                            Services ▾
                        </NavLink>

                        {/* Dropdown */}
                        <div
                            className="
      absolute
      left-0
      mt-3
      w-80
      bg-black
      border
      border-yellow-500
      rounded-xl
      shadow-2xl
      opacity-0
      invisible
      group-hover:opacity-100
      group-hover:visible
      transition-all
      duration-300
      z-50
    "
                        >

                            {/* Build Menu */}
                            <div className="relative group/build">

                                {/* Main Menu */}
                                <div className="flex justify-between items-center px-5 py-3 cursor-pointer hover:bg-yellow-500 hover:text-black transition">
                                    🏗️ Design
                                    <span>▶</span>
                                </div>

                                {/* Submenu */}
                                <div
                                    className="
      absolute
      top-0
      left-full
      ml-1
      w-72
      bg-black
      border
      border-yellow-500
      rounded-xl
      shadow-2xl
      opacity-0
      invisible
      group-hover/build:opacity-100
      group-hover/build:visible
      transition-all
      duration-300
      z-50
    "
                                >

                                    <Link
                                        to="/services"
                                        className="block px-5 py-3 hover:bg-yellow-500 hover:text-black transition"
                                    >
                                        🏠 Residential Construction
                                    </Link>

                                    <Link
                                        to="/services"
                                        className="block px-5 py-3 hover:bg-yellow-500 hover:text-black transition"
                                    >
                                        🏢 Commercial Construction
                                    </Link>



                                </div>

                            </div>

                            {/* Build Menu */}
                            <div className="relative group/build">

                                {/* Main Menu */}
                                <div className="flex justify-between items-center px-5 py-3 cursor-pointer hover:bg-yellow-500 hover:text-black transition">
                                    🏠 Manage
                                    <span>▶</span>
                                </div>

                                {/* Submenu */}
                                <div
                                    className="
      absolute
      top-0
      left-full
      ml-1
      w-72
      bg-black
      border
      border-yellow-500
      rounded-xl
      shadow-2xl
      opacity-0
      invisible
      group-hover/build:opacity-100
      group-hover/build:visible
      transition-all
      duration-300
      z-50
    "
                                >

                                    <Link
                                        to="/services"
                                        className="block px-5 py-3 hover:bg-yellow-500 hover:text-black transition"
                                    >
                                        🏠 Project Feasibility Study
                                    </Link>

                                    <Link
                                        to="/services"
                                        className="block px-5 py-3 hover:bg-yellow-500 hover:text-black transition"
                                    >
                                        🏢 Quantity and Estimation
                                    </Link>

                                    <Link
                                        to="/services"
                                        className="block px-5 py-3 hover:bg-yellow-500 hover:text-black transition"
                                    >
                                        🏭 Project Planning and Scheduling
                                    </Link>

                                    <Link
                                        to="/services"
                                        className="block px-5 py-3 hover:bg-yellow-500 hover:text-black transition"
                                    >
                                        🔑 Procurement Management
                                    </Link>
                                    <Link
                                        to="/services/industrial"
                                        className="block px-5 py-3 hover:bg-yellow-500 hover:text-black transition"
                                    >
                                        🏭 Quality Management
                                    </Link>

                                    <Link
                                        to="/services"
                                        className="block px-5 py-3 hover:bg-yellow-500 hover:text-black transition"
                                    >
                                        🔑 CostManagement
                                    </Link>

                                </div>

                            </div>

                            {/* Build Menu */}
                            <div className="relative group/build">

                                {/* Main Menu */}
                                <div className="flex justify-between items-center px-5 py-3 cursor-pointer hover:bg-yellow-500 hover:text-black transition">
                                    🏭 Build
                                    <span>▶</span>
                                </div>

                                {/* Submenu */}
                                <div
                                    className="
      absolute
      top-0
      left-full
      ml-1
      w-72
      bg-black
      border
      border-yellow-500
      rounded-xl
      shadow-2xl
      opacity-0
      invisible
      group-hover/build:opacity-100
      group-hover/build:visible
      transition-all
      duration-300
      z-50
    "
                                >

                                    <Link
                                        to="/services"
                                        className="block px-5 py-3 hover:bg-yellow-500 hover:text-black transition"
                                    >
                                        🏠  Construction Execution
                                    </Link>


                                    <Link
                                        to="/services"
                                        className="block px-5 py-3 hover:bg-yellow-500 hover:text-black transition"
                                    >
                                        🏭 Interior Execution
                                    </Link>



                                </div>

                            </div>


                        </div>

                    </div>

                    <NavLink
                        to="/projects"
                        className="font-bold text-lg hover:text-yellow-500 transition duration-300"
                    >
                        Projects
                    </NavLink>

                    <NavLink
                        to="/clients"
                        className="font-bold text-lg hover:text-yellow-500 transition duration-300"
                    >
                        Clients
                    </NavLink>

                    {/*
                    <NavLink
                        to="/contact"
                        className="font-bold text-lg hover:text-yellow-500 transition duration-300"
                    >
                        Contact
                    </NavLink> */}
                    <a
                        href="/contact"
                        className="border-2 border-yellow-500 hover:bg-yellow-500 hover:text-black text-white font-bold px-10 py-4 rounded-full transition"
                    >
                        Get Free Consultation
                    </a>





                </div>
            </div>
            {menuOpen && (
                <div className="lg:hidden mt-4 bg-black border border-yellow-500 rounded-xl overflow-hidden">

                    <NavLink
                        to="/"
                        onClick={() => setMenuOpen(false)}
                        className="block px-5 py-4 hover:bg-yellow-500 hover:text-black"
                    >
                        Home
                    </NavLink>

                    <NavLink
                        to="/about"
                        onClick={() => setMenuOpen(false)}
                        className="block px-5 py-4 hover:bg-yellow-500 hover:text-black"
                    >
                        About
                    </NavLink>

                    <NavLink
                        to="/services"
                        onClick={() => setMenuOpen(false)}
                        className="block px-5 py-4 hover:bg-yellow-500 hover:text-black"
                    >
                        Services
                    </NavLink>

                    <NavLink
                        to="/projects"
                        onClick={() => setMenuOpen(false)}
                        className="block px-5 py-4 hover:bg-yellow-500 hover:text-black"
                    >
                        Projects
                    </NavLink>

                    <NavLink
                        to="/clients"
                        onClick={() => setMenuOpen(false)}
                        className="block px-5 py-4 hover:bg-yellow-500 hover:text-black"
                    >
                        Clients
                    </NavLink>

                    <Link
                        to="/contact"
                        onClick={() => setMenuOpen(false)}
                        className="block m-4 text-center border-2 border-yellow-500 rounded-full py-3 hover:bg-yellow-500 hover:text-black"
                    >
                        Get Free Consultation
                    </Link>

                </div>
            )}
        </nav>
    );
}

export default Navbar;
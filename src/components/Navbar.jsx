
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";




function Navbar() {
    return (
        <nav className="bg-black text-white px-8 py-4 border-b border-yellow-500">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <h1 className="text-yellow-500 font-bold text-xl">
                    <Link to="/" className="flex items-center gap-3">
                        <img
                            src={logo}
                            alt="Model Construction Logo"
                            className="h-20 w-auto"
                        />
                    </Link>
                </h1>

                <div className="flex gap-8 items-center">
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

                            <Link
                                to="/services#build"
                                className="block px-5 py-3 hover:bg-yellow-500 hover:text-black transition"
                            >
                                🏗 Build
                            </Link>

                            <Link
                                to="/services#design"
                                className="block px-5 py-3 hover:bg-yellow-500 hover:text-black transition"
                            >
                                🎨 Design
                            </Link>

                            <Link
                                to="/services#feasibility"
                                className="block px-5 py-3 hover:bg-yellow-500 hover:text-black transition"
                            >
                                📋 Project Feasibility Study
                            </Link>

                            <Link
                                to="/services#planning"
                                className="block px-5 py-3 hover:bg-yellow-500 hover:text-black transition"
                            >
                                📅 Project Planning & Scheduling
                            </Link>

                            <Link
                                to="/services#quantity"
                                className="block px-5 py-3 hover:bg-yellow-500 hover:text-black transition"
                            >
                                📐 Quantity & Estimations
                            </Link>

                            <Link
                                to="/services#procurement"
                                className="block px-5 py-3 hover:bg-yellow-500 hover:text-black transition"
                            >
                                🛒 Procurement Management
                            </Link>

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





                </div>
            </div>
        </nav>
    );
}

export default Navbar;
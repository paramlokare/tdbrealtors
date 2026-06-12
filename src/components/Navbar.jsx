import { Link } from "react-router-dom";
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

                        <div>
                            <h2 className="text-yellow-500 font-bold">

                            </h2>
                        </div>
                    </Link>
                </h1>

                <div className="flex gap-8 items-center">
                    <Link
                        to="/"
                        className="font-bold text-lg hover:text-yellow-500 transition duration-300"
                    >
                        Home
                    </Link>

                    <Link
                        to="/about"
                        className="font-bold text-lg hover:text-yellow-500 transition duration-300"
                    >
                        About
                    </Link>

                    <Link
                        to="/services"
                        className="font-bold text-lg hover:text-yellow-500 transition duration-300"
                    >
                        Services
                    </Link>

                    <Link
                        to="/projects"
                        className="font-bold text-lg hover:text-yellow-500 transition duration-300"
                    >
                        Projects
                    </Link>

                    <Link
                        to="/clients"
                        className="font-bold text-lg hover:text-yellow-500 transition duration-300"
                    >
                        Clients
                    </Link>


                    <Link
                        to="/contact"
                        className="font-bold text-lg hover:text-yellow-500 transition duration-300"
                    >
                        Contact
                    </Link>





                </div>
            </div>
        </nav>
    );
}

export default Navbar;
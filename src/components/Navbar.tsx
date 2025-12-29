export default function Navbar() {
    return (
        <nav className="fixed w-full bg-white/80 backdrop-blur shadow z-50">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                <h1 className="text-xl font-bold text-blue-600">Eventify</h1>

                <div className="hidden md:flex items-center gap-8 text-sm font-medium">
                    <a href="#features" className="hover:text-blue-600">
                        Features
                    </a>
                    <a href="#how" className="hover:text-blue-600">
                        How it Works
                    </a>
                    <a href="#contact" className="hover:text-blue-600">
                        Contact
                    </a>
                </div>

                <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition">Get Started</button>
            </div>
        </nav>
    );
}

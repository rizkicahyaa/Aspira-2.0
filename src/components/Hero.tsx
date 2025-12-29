export default function Hero() {
    return (
        <section className="pt-32 pb-24 bg-gradient-to-br from-blue-50 to-white">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                        Create & Manage Events <br />
                        <span className="text-blue-600">Faster Than Ever</span>
                    </h2>

                    <p className="mt-6 text-gray-600 text-lg">Eventify helps you create, organize, and promote events in minutes. Perfect for seminars, concerts, workshops, and online events.</p>

                    <div className="mt-8 flex gap-4">
                        <button className="bg-blue-600 text-white px-6 py-3 rounded-xl text-sm font-medium hover:bg-blue-700 transition">Create Event</button>
                        <button className="border px-6 py-3 rounded-xl text-sm font-medium hover:bg-gray-100 transition">View Demo</button>
                    </div>
                </div>

                <div className="relative">
                    <div className="absolute inset-0 bg-blue-600 rounded-3xl blur-3xl opacity-20" />
                    <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d" className="relative rounded-3xl shadow-xl" alt="event" />
                </div>
            </div>
        </section>
    );
}

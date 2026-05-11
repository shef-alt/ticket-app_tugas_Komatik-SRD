import TicketList from "@/components/organism/TicketList";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Banner */}
        <section className="relative h-64 md:h-80 rounded-3xl overflow-hidden mb-12 shadow-2xl shadow-indigo-100">
          <img
            src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=1200"
            alt="Hero Banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/80 to-transparent flex flex-col justify-center px-8 md:px-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Temukan Pengalaman
              <br />
              Tak Terlupakan.
            </h2>
            <p className="text-indigo-100 text-lg max-w-md mb-6">
              Pesan tiket event terpopuler mulai dari konser musik hingga
              workshop teknologi dengan mudah.
            </p>
          </div>
        </section>
        {/* Ticket List */}
        <TicketList />
      </main>
    </div>
  );
}

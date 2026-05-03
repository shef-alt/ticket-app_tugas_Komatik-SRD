"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { 
  Calendar, 
  MapPin, 
  Tag, 
  ChevronRight,
} from 'lucide-react';
import Modal from "@/components/Modal"


const TicketList = () => {
    const [tickets, setTickets] = useState([]);
    const [selectedTicket, setSelectedTicket] = useState(null);
    
    useEffect(() => {
     fetch("/api/ticket")
       .then((res) => res.json())
       .then((data) => setTickets(data));
    }, []);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {tickets.map(t => (
              <div 
                key={t.id}
                className="group bg-white rounded-2xl overflow-hidden border border-slate-100 hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    fill
                    src={t.imgPath}
                    alt={t.daftarEvent}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-indigo-600 flex items-center gap-1">
                    <Tag className="w-3 h-3" />
                    {t.category}
                  </div>
                </div>
                
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-center gap-2 text-xs text-slate-400 mb-2">
                    <Calendar className="w-3 h-3" />
                    {new Date(t.tanggal).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}
                  </div>
                  <h3 className="text-lg font-bold text-slate-800 mb-2 line-clamp-1">{t.daftarEvent}</h3>
                  <div className="flex items-start gap-2 text-sm text-slate-500 mb-4 h-10 line-clamp-2">
                    <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-red-400" />
                    {t.tempat}
                  </div>
                  
                  <div className="mt-auto flex items-center justify-between pt-4 border-t border-slate-50">
                    <div>
                      <p className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">Mulai dari</p>
                      <p className="text-lg font-extrabold text-indigo-600">{t.harga}</p>
                    </div>
                    <button
                      onClick={() => setSelectedTicket(t)}
                      className="bg-slate-100 p-3 rounded-xl text-slate-600 hover:bg-indigo-600 hover:text-white transition-all group/btn"
                    >
                      <ChevronRight className="w-5 h-5 group-hover/btn:translate-x-0.5 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
            <Modal selectedTicket={selectedTicket} setSelectedTicket={setSelectedTicket}/>
        </div>
  )
}

export default TicketList
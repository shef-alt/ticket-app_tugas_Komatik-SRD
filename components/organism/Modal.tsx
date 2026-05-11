import Image from "next/image";
import { 
  Calendar, 
  MapPin, 
  Info, 
  Clock
} from 'lucide-react';
import Cancel from "@/components/atoms/Cancel"
import { useTicket } from "@/store/useTicket";

const Modal = () => {
  const { selectedTicket } = useTicket();
  return (
    <div>
      {selectedTicket && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-sm transition-opacity">
          <div className="bg-white w-full max-w-2xl rounded-3xl overflow-hidden shadow-2xl relative animate-in zoom-in duration-200">
            <Cancel />
            <div className="md:flex h-full max-h-[90vh] overflow-y-auto no-scrollbar">
              <div className="md:w-1/2 h-64 md:h-auto relative">
                <Image
                  fill 
                  src={selectedTicket.imgPath} 
                  alt={selectedTicket.daftarEvent}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-bold leading-tight">{selectedTicket.daftarEvent}</h3>
                </div>
              </div>

              <div className="md:w-1/2 p-8 flex flex-col">
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="bg-indigo-50 p-2 rounded-lg">
                      <Calendar className="text-indigo w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 font-medium">Tanggal</p>
                      <p className="text-sm font-semibold text-slate-700">
                        {new Date(selectedTicket.tanggal).toLocaleDateString('id-ID', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="bg-indigo-50 p-2 rounded-lg">
                      <Clock className="text-indigo w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 font-medium">Waktu</p>
                      <p className="text-sm font-semibold text-slate-700">{selectedTicket.waktu.slice(0, 5)} WIB</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="bg-indigo-50 p-2 rounded-lg">
                      <MapPin className="text-indigo w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 font-medium">Lokasi</p>
                      <p className="text-sm font-semibold text-slate-700">{selectedTicket.tempat}</p>
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <h4 className="text-sm font-bold text-slate-800 mb-2 flex items-center gap-2">
                    <Info className="w-4 h-4 text-indigo" />
                    Tentang Event
                  </h4>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {selectedTicket.detailEvent}
                  </p>
                </div>

                <div className="mt-auto border-t border-slate-100 pt-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-slate-400">Harga Tiket</span>
                    <span className="text-2xl font-black text-indigo">{(selectedTicket.harga)}</span>
                  </div>
                  <button 
                    className="w-full py-4 rounded-2xl font-black uppercase tracking-widest text-xs flex items-center justify-center gap-2 transition-all shadow-xl shadow-indigo-100 active:scale-95 bg-indigo text-white hover:bg-indigo-700 cursor-pointer
                    "
                  >
                    Beli Ticket
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Modal
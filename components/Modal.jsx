import Image from "next/image";
import { 
  Calendar, 
  MapPin, 
  Info, 
  X, 
  Clock
} from 'lucide-react';

const Modal = ({selectedTicket, setSelectedTicket}) => {
  return (
    <div>
      {selectedTicket && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-sm transition-opacity">
          <div className="bg-white w-full max-w-2xl rounded-3xl overflow-hidden shadow-2xl relative animate-in zoom-in duration-200">
            <button 
              onClick={() => setSelectedTicket(null)}
              className="absolute top-4 right-4 z-10 bg-white/20 hover:bg-white/40 p-2 rounded-full text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

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
                      <Calendar className="text-indigo-600 w-5 h-5" />
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
                      <Clock className="text-indigo-600 w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 font-medium">Waktu</p>
                      <p className="text-sm font-semibold text-slate-700">{selectedTicket.time} WIB</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="bg-indigo-50 p-2 rounded-lg">
                      <MapPin className="text-indigo-600 w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 font-medium">Lokasi</p>
                      <p className="text-sm font-semibold text-slate-700">{selectedTicket.tempat}</p>
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <h4 className="text-sm font-bold text-slate-800 mb-2 flex items-center gap-2">
                    <Info className="w-4 h-4 text-indigo-500" />
                    Tentang Event
                  </h4>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {selectedTicket.detailEvent}
                  </p>
                </div>

                <div className="mt-auto border-t border-slate-100 pt-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-slate-400">Harga Tiket</span>
                    <span className="text-2xl font-black text-indigo-600">{(selectedTicket.harga)}</span>
                  </div>
                  
                  <p className="text-center text-[10px] text-slate-400 mt-4">
                    Sisa {selectedTicket.available} tiket tersedia saat ini.
                  </p>
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
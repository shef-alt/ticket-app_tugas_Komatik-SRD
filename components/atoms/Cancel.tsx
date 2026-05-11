import { X } from "lucide-react";
import { useTicket } from "@/store/useTicket";

const Cancel = () => {
  const { setSelectedTicket } = useTicket();
  return (
    <button
      onClick={() => setSelectedTicket(null)}
      className="absolute top-4 right-4 z-10 bg-white/20 hover:bg-white/40 p-2 rounded-full text-white transition-colors"
    >
      <X className="w-6 h-6 text-slate-400 cursor-pointer" />
    </button>
  );
};

export default Cancel;

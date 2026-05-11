import { ChevronRight } from "lucide-react";
import { useTicket } from "@/store/useTicket";

type Ticket = {
    t: Ticket
}
const Button = ({ t }: Ticket) => {
  const { setSelectedTicket } = useTicket();
  return (
    <button
      onClick={() => setSelectedTicket(t)}
      className="bg-slate-100 p-3 rounded-xl text-slate-600 hover:bg-indigo hover:text-white transition-all group/btn cursor-pointer"
    >
      <ChevronRight className="w-5 h-5 group-hover/btn:translate-x-0.5 transition-transform" />
    </button>
  );
};

export default Button;

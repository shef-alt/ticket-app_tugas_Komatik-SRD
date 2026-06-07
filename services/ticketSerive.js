import Ticket from "@/models/ticket";

export async function ticketService() {
    const tickets = await Ticket.findAll();

    return tickets;
}
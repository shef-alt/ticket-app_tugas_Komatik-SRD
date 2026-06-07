import { ticketService } from "../services/ticketSerive";

export async function ticketController() {
  try {
    const tickets = await ticketService();

    return Response.json(tickets);
  } catch (err) {
    console.error("TICKET ERROR:", err);

    return Response.json({ error: String(err) }, { status: 500 });
  }
}

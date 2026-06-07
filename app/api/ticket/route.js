import { ticketController } from "@/controllers/ticketController";

export async function GET() {
  return ticketController();
}
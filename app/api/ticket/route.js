import sequelize from "@/lib/db";
import Ticket from "@/models/ticket";

async function initDB() {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
  } catch (error) {
    console.error("DB error:", error);
  }
}

export async function GET() {
  await initDB();

  const tickets = await Ticket.findAll();

  return Response.json(tickets);
}

// export async function POST(req) {
//   await initDB();

//   const body = await req.json();

//   const ticket = await Ticket.create({
//     daftarEvent: body.nama,
//     detailEvent: body.umur,
//   });

//   return Response.json(ticket);
// }
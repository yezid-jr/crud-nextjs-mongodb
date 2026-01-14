import { connectDB } from "@/library/connMongoDb";

export async function GET() {
  try {
    const db = await connectDB();

    // Ping real a MongoDB
    await db.command({ ping: 1 });

    return Response.json({
      ok: true,
      message: "MongoDB conectado correctamente",
    });
  } catch (error) {
    console.error(error);

    return Response.json(
      {
        ok: false,
        message: "Error al conectar con MongoDB",
      },
      { status: 500 }
    );
  }
}

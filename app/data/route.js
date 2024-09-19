import { convertCSV } from "../lib/data";

export async function GET() {
  try {
    const data = await convertCSV("/public/data.csv");
    return Response.json(data);
  } catch (error) {
    console.log(error);
    return Response.json({ error }, { status: 500 });
  }
}

import { readFile } from "../lib/data";

export async function GET() {
  try {
    const data = await readFile("/public/data.json");
    return Response.json({
      message: "Read json file successfully",
      data: JSON.parse(data),
    });
  } catch (error) {
    console.log(error);
    return Response.json({ error }, { status: 500 });
  }
}

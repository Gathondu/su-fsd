import { readAndWriteCSVFile } from "../lib/data";

export async function GET() {
  try {
    await readAndWriteCSVFile("/public/data.csv", "/public/data.json");
    return Response.json({ message: "Written file successfully" });
  } catch (error) {
    console.log(error);
    return Response.json({ error }, { status: 500 });
  }
}

import { promises as fs } from "fs";

// read the csv file then parse it to json
export const convertCSV = async (path) => {
  const file = await fs.readFile(
    process.cwd() + path,
    "utf8",
    (error, data) => {
      if (error) throw error;
      console.log(data);
    }
  );
  const rows = file.split("\n");
  let index = 0;
  const jsonData = rows.reduce((acc, row) => {
    const [date, fileName] = row.split(";");

    acc.push({ created: date, fileName });
    index += 1;
    return acc;
  }, []);

  return jsonData;
};

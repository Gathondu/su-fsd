import { promises as fs } from "fs";

export const readFile = async (path) =>
  await fs.readFile(process.cwd() + path, "utf8", (error, data) => {
    if (error) throw error;
    console.log(data);
  });

// read the csv file then parse it to json
const convertCSV = async (path) => {
  const file = await readFile(path);
  const rows = file.split("\n");
  let index = 0;
  const jsonData = rows.reduce((acc, row) => {
    const [date, fileName] = row.split(";");

    acc.push({ created: date, file: fileName });
    index += 1;
    return acc;
  }, []);

  return jsonData;
};

const writeFile = async (content, fileName) => {
  await fs.writeFile(
    process.cwd() + fileName,
    content,
    "utf8",
    (error, data) => {
      if (error) throw error;
      console.log(data);
    }
  );
};

export const readAndWriteCSVFile = async (readFilePath, saveFilePath) => {
  const data = await convertCSV(readFilePath);
  await writeFile(JSON.stringify(data), saveFilePath);
};

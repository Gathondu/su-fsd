"use client";

import { useState, useEffect, Suspense } from "react";
import FileCard from "./ui/file-card";

export default function Home() {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/data`);
      const data = await res.json();
      setFiles(data);
    };
    fetchData();
  }, []);

  const options = [
    { value: 0, label: "Created at ascending" },
    { value: 1, label: "File name ascending" },
    { value: 2, label: "File name descending" },
  ];

  const sortFiles = (index) => {
    const arrCopy = files.slice();
    switch (index) {
      case "1":
        arrCopy.sort((a, b) => {
          const reg = "/d+/";
          const f1 = parseInt(a.fileName.match(reg), 10);
          const f2 = parseInt(b.fileName.match(reg), 10);
          if (f1 < f2) return -1;
          if (f1 > f2) return 1;
          return a.fileName.localeCompare(b.fileName);
        });
        setFiles(arrCopy);
        break;
      case "2":
        arrCopy.sort((a, b) => {
          const reg = "/d+/";
          const f1 = parseInt(a.fileName.match(reg), 10);
          const f2 = parseInt(b.fileName.match(reg), 10);
          if (f1 < f2) return 1;
          if (f1 > f2) return -1;
          return b.fileName.localeCompare(a.fileName);
        });
        setFiles(arrCopy);
        break;
      default:
        arrCopy.sort((a, b) => {
          const f1 = new Date(a.created);
          const f2 = new Date(b.created);
          return f1 - f2;
        });
        setFiles(arrCopy);
        break;
    }
  };
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div>
          <select
            id="sort"
            name="sortId"
            className="w-full cursor-pointer rounded-md border p-1 text-sm outline-2 text-white bg-gray-500"
            defaultValue={0}
            onChange={(e) => sortFiles(e.target.value)}
          >
            <option value="" disabled>
              Sorted by
            </option>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        <div className="grid grid-cols-2 gap-2">
          {files.map((file, index) => (
            <FileCard key={index} file={file} />
          ))}
        </div>
      </main>
    </div>
  );
}

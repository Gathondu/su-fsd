"use client";

import { useState, useEffect, Suspense } from "react";
import FileCard from "./file-card";
import {
  sortNameAscending,
  sortNameDescending,
  sortTimeAscending,
} from "../lib/utils";

import Loading from "./loading";

export default function Files() {
    const [files, setFiles] = useState(null);

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
        setFiles(sortNameAscending(arrCopy));
        break;
      case "2":
        setFiles(sortNameDescending(arrCopy));
        break;
      default:
        setFiles(sortTimeAscending(arrCopy));
        break;
    }
  };
  return (
    <>
      <div className="flex justify-center mx-auto w-1/2">
        <select
          id="sort"
          name="sortId"
          className="cursor-pointer rounded-md border p-1 text-sm outline-2 text-white bg-gray-500 my-auto"
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
      {!files ? <Loading/>:
      <div className="grid grid-cols-2 gap-2">
        {files.map((file, index) => (
          <FileCard key={index} file={file} />
        ))}
      </div>}
    </>
  )
}
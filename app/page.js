import FileCard from "./ui/file-card";

export default async function Home() {
  const data = await fetch(`${process.env.BASE_URL}/data`);
  const files = await data.json();
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div>Files</div>
        <div className="grid grid-cols-2 gap-2">
          {files.map((file, index) => (
            <FileCard key={index} file={file} />
          ))}
        </div>
      </main>
    </div>
  );
}

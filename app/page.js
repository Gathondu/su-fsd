export default async function Home() {
  const data = await fetch(`${process.env.BASE_URL}/data`);
  const files = await data.json();
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div>Files</div>
        {files.map((file, index) => (
          <div key={index}>
            {file.created} : {file.fileName}
          </div>
        ))}
      </main>
    </div>
  );
}

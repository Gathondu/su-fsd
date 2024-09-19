export default function FileCard({file}){
  return (
    <div className="grid grid-col gap-4 m-4 p-4 border rounded-lg">
      <div className="font-light text-xs">{file.created}</div>
      <div className="font-bold text-lg">{file.fileName}</div>
    </div>
  )
}
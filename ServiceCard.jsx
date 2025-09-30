export default function ServiceCard({title,desc}){
  return (
    <div className="card h-full">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-2 text-essential-gray600">{desc}</p>
    </div>
  );
}

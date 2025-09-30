import Link from "next/link";
export default function CaseCard({slug,title,cover,result}){
  return (
    <Link href={`/cases/${slug}`} className="card hover:shadow-lg transition block">
      <div className="aspect-video bg-essential-gray100 rounded-lg mb-4"></div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-1 text-sm text-essential-gray600">{result}</p>
    </Link>
  );
}

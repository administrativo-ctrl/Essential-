export default function KPI({label,value,delta}){
  return (
    <div className="card">
      <p className="text-sm text-essential-gray600">{label}</p>
      <p className="text-2xl font-bold mt-1">{value}</p>
      {typeof delta !== "undefined" && (
        <p className={`mt-1 text-sm ${delta>=0?'text-green-600':'text-red-600'}`}>
          {delta>=0? '↑': '↓'} {Math.abs(delta)}% vs mês anterior
        </p>
      )}
    </div>
  );
}

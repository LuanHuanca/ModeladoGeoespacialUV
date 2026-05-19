import { CheckCircle2, AlertOctagon, XCircle, Search } from "lucide-react";

export function DataValidation() {
  const mockValidationData = [
    { id: "ERR-01", desc: "Coordenadas inválidas (fuera de rango LPZ)", source: "SENAMHI", status: "Pendiente" },
    { id: "ERR-02", desc: "Valor UV nulo o negativo", source: "Modelo Predictivo", status: "Pendiente" },
    { id: "ERR-03", desc: "Discrepancia > 3 pts vs NASA POWER", source: "Validación Cruzada", status: "Revisado" },
  ];

  return (
    <div className="space-y-6 max-w-5xl mx-auto pb-10">
      <div>
        <h1 className="text-2xl font-bold text-slate-800">Validación de Datos</h1>
        <p className="text-sm text-slate-500">Revisión técnica y control de calidad de la ingesta</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
            <CheckCircle2 size={24} />
          </div>
          <div>
            <p className="text-xs text-slate-500 uppercase font-semibold">Registros Válidos</p>
            <p className="text-2xl font-bold text-slate-800">98.5%</p>
          </div>
        </div>
        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center">
            <AlertOctagon size={24} />
          </div>
          <div>
            <p className="text-xs text-slate-500 uppercase font-semibold">Observados</p>
            <p className="text-2xl font-bold text-slate-800">42</p>
          </div>
        </div>
        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-red-100 text-red-600 flex items-center justify-center">
            <XCircle size={24} />
          </div>
          <div>
            <p className="text-xs text-slate-500 uppercase font-semibold">Descartados</p>
            <p className="text-2xl font-bold text-slate-800">185</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-4 border-b border-slate-200 flex justify-between items-center bg-slate-50">
          <h2 className="font-semibold text-slate-800">Incidencias Detectadas</h2>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
            <input type="text" placeholder="Buscar ID..." className="pl-9 pr-4 py-1.5 border border-slate-200 rounded-lg text-sm outline-none focus:border-blue-500" />
          </div>
        </div>
        
        <table className="w-full text-sm text-left">
          <thead className="text-xs text-slate-500 uppercase bg-slate-50 border-b border-slate-200">
            <tr>
              <th className="px-6 py-3">ID Incidencia</th>
              <th className="px-6 py-3">Descripción / Tipo</th>
              <th className="px-6 py-3">Fuente</th>
              <th className="px-6 py-3">Estado</th>
              <th className="px-6 py-3 text-right">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {mockValidationData.map((row) => (
              <tr key={row.id} className="bg-white border-b border-slate-100">
                <td className="px-6 py-4 font-medium text-slate-900">{row.id}</td>
                <td className="px-6 py-4 text-slate-600">{row.desc}</td>
                <td className="px-6 py-4 text-slate-600">{row.source}</td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 rounded text-xs font-semibold ${row.status === 'Pendiente' ? 'bg-amber-100 text-amber-700' : 'bg-green-100 text-green-700'}`}>
                    {row.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-right space-x-2">
                  <button className="text-xs px-2 py-1 bg-green-50 text-green-600 border border-green-200 rounded hover:bg-green-100">Aprobar</button>
                  <button className="text-xs px-2 py-1 bg-red-50 text-red-600 border border-red-200 rounded hover:bg-red-100">Descartar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

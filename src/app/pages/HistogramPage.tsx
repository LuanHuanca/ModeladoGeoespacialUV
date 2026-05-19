import { BarChart2, Download, Filter } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Cell } from 'recharts';

const mockHistogramData = [
  { range: '0-2 (Bajo)', count: 1250, color: '#4ade80' },
  { range: '3-5 (Moderado)', count: 2430, color: '#facc15' },
  { range: '6-7 (Alto)', count: 3100, color: '#f97316' },
  { range: '8-10 (Muy Alto)', count: 4800, color: '#ef4444' },
  { range: '11+ (Extremo)', count: 2705, color: '#a855f7' },
];

export function HistogramPage() {
  return (
    <div className="space-y-6 max-w-5xl mx-auto pb-10">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
            <BarChart2 className="text-purple-600" /> Histograma de Exposición UV
          </h1>
          <p className="text-sm text-slate-500">Frecuencia de categorías de riesgo en el dataset seleccionado</p>
        </div>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 text-slate-700 rounded-lg text-sm font-medium hover:bg-slate-50">
            <Filter size={16} /> Filtros
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700">
            <Download size={16} /> Exportar Gráfico
          </button>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
        <div className="h-80 w-full mb-8">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={mockHistogramData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="range" axisLine={false} tickLine={false} />
              <YAxis axisLine={false} tickLine={false} />
              <Tooltip cursor={{fill: '#f8fafc'}} contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
              <Bar dataKey="count" radius={[4, 4, 0, 0]}>
                {mockHistogramData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left border border-slate-200 rounded-lg overflow-hidden">
            <thead className="text-xs text-slate-500 uppercase bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="px-6 py-3">Categoría UV</th>
                <th className="px-6 py-3 text-right">Frecuencia (Horas)</th>
                <th className="px-6 py-3 text-right">Porcentaje (%)</th>
              </tr>
            </thead>
            <tbody>
              {mockHistogramData.map((row) => {
                const total = mockHistogramData.reduce((acc, curr) => acc + curr.count, 0);
                const percent = ((row.count / total) * 100).toFixed(1);
                return (
                  <tr key={row.range} className="bg-white border-b border-slate-100">
                    <td className="px-6 py-3 font-medium text-slate-800 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: row.color }}></div>
                      {row.range}
                    </td>
                    <td className="px-6 py-3 text-right text-slate-600">{row.count.toLocaleString()}</td>
                    <td className="px-6 py-3 text-right font-medium text-slate-800">{percent}%</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

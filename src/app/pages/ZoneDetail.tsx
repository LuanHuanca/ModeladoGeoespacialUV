import { MapPin, Info, CheckCircle2 } from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

const mockData = [
  { time: '08:00', uv: 2 },
  { time: '10:00', uv: 5 },
  { time: '12:00', uv: 9 },
  { time: '14:00', uv: 7 },
  { time: '16:00', uv: 3 },
  { time: '18:00', uv: 0 },
];

export function ZoneDetail() {
  return (
    <div className="space-y-6 max-w-5xl mx-auto pb-10">
      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
        <div className="flex items-start justify-between mb-8 border-b border-slate-100 pb-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <MapPin className="text-blue-500" />
              <h1 className="text-2xl font-bold text-slate-800">Sopocachi, La Paz</h1>
            </div>
            <p className="text-sm text-slate-500">Consulta específica por zona y altitud</p>
          </div>
          <div className="text-right">
            <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Índice Estimado</p>
            <div className="flex items-center gap-2">
              <span className="text-4xl font-black text-red-500">9.5</span>
              <span className="px-3 py-1 bg-red-100 text-red-700 text-sm font-bold rounded-full">MUY ALTO</span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-sm font-semibold text-slate-700 mb-4">Comportamiento UV Diario</h3>
            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={mockData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="time" axisLine={false} tickLine={false} />
                  <YAxis axisLine={false} tickLine={false} />
                  <Tooltip />
                  <Area type="monotone" dataKey="uv" stroke="#ef4444" fill="#fee2e2" strokeWidth={3} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
              <h3 className="text-sm font-semibold text-slate-700 mb-3 flex items-center gap-2">
                <Info size={16} /> Variables del Modelo
              </h3>
              <ul className="space-y-2 text-sm">
                <li className="flex justify-between"><span className="text-slate-600">Altitud:</span> <span className="font-medium">3,550 m.s.n.m.</span></li>
                <li className="flex justify-between"><span className="text-slate-600">Nubosidad:</span> <span className="font-medium">15%</span></li>
                <li className="flex justify-between"><span className="text-slate-600">Ozono (estimado):</span> <span className="font-medium">255 DU</span></li>
              </ul>
            </div>

            <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
              <h3 className="text-sm font-semibold text-blue-800 mb-2">Recomendación Personalizada</h3>
              <p className="text-sm text-blue-900 leading-relaxed mb-3">
                Debido a la altitud de Sopocachi, la radiación es un 15% más intensa que a nivel del mar. Aplique protector solar FPS 50+ si planea caminar por las áreas abiertas o parques de la zona.
              </p>
              <div className="flex items-center gap-2 text-xs text-blue-700 font-medium bg-blue-100/50 w-fit px-2 py-1 rounded">
                <CheckCircle2 size={14} /> Trazabilidad de datos validada
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

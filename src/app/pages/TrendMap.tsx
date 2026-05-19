import { TrendingUp, Calendar, Download } from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

const mockTrendData = [
  { day: 'Lun', maxUV: 10, avgUV: 6 },
  { day: 'Mar', maxUV: 11, avgUV: 7 },
  { day: 'Mié', maxUV: 12, avgUV: 8 },
  { day: 'Jue', maxUV: 9, avgUV: 5 },
  { day: 'Vie', maxUV: 10, avgUV: 6 },
  { day: 'Sáb', maxUV: 13, avgUV: 9 },
  { day: 'Dom', maxUV: 11, avgUV: 7 },
];

export function TrendMap() {
  return (
    <div className="space-y-6 max-w-6xl mx-auto pb-10 flex flex-col h-[calc(100vh-8rem)]">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
            <TrendingUp className="text-blue-600" /> Mapa de Tendencia Espacial
          </h1>
          <p className="text-sm text-slate-500">Evolución espacial y temporal de la radiación UV en La Paz</p>
        </div>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 text-slate-700 rounded-lg text-sm font-medium hover:bg-slate-50">
            <Calendar size={16} /> Últimos 7 días
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700">
            <Download size={16} /> Exportar Reporte
          </button>
        </div>
      </div>

      <div className="flex-1 grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 bg-slate-200 rounded-xl border border-slate-300 relative overflow-hidden flex flex-col">
          {/* Faux Map Background for Trend */}
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-60 mix-blend-luminosity"
            style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80)' }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-orange-500/30"></div>
          
          <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm p-3 rounded-lg border border-slate-200 shadow-sm">
            <h4 className="text-xs font-semibold mb-2 text-slate-700">Variación Temporal (Δ UV)</h4>
            <div className="flex items-center gap-2 text-xs text-slate-600">
              <span>Disminución</span>
              <div className="w-24 h-2 bg-gradient-to-r from-blue-500 via-white to-red-500 rounded-full border border-slate-300"></div>
              <span>Aumento</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm flex-1">
            <h3 className="text-sm font-semibold text-slate-700 mb-4">Tendencia Semanal - Municipio de La Paz</h3>
            <div className="h-48 w-full mb-4">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={mockTrendData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{fontSize: 12}} />
                  <YAxis axisLine={false} tickLine={false} tick={{fontSize: 12}} />
                  <Tooltip />
                  <Area type="monotone" dataKey="maxUV" stroke="#f97316" fill="#ffedd5" strokeWidth={2} name="Máximo UV" />
                  <Area type="monotone" dataKey="avgUV" stroke="#3b82f6" fill="#dbeafe" strokeWidth={2} name="Promedio UV" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            <div className="bg-slate-50 p-4 rounded-lg text-sm text-slate-700 border border-slate-100">
              <strong>Interpretación:</strong> Se observa una tendencia al alza hacia el fin de semana, con un pico de índice 13 (Extremo) previsto para el día sábado, coincidiendo con cielos despejados pronosticados por SENAMHI.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

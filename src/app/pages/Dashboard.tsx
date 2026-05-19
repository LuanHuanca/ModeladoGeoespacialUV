import { Link } from "react-router";
import { Map as MapIcon, MapPin, Thermometer, Cloud, Sun, Mountain, AlertTriangle, ShieldCheck } from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

const mockChartData = [
  { time: '06:00', uv: 0 },
  { time: '08:00', uv: 2 },
  { time: '10:00', uv: 6 },
  { time: '12:00', uv: 11 },
  { time: '14:00', uv: 9 },
  { time: '16:00', uv: 4 },
  { time: '18:00', uv: 0 },
];

export function Dashboard() {
  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-10">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Panel Ciudadano</h1>
          <p className="text-sm text-slate-500 flex items-center gap-1 mt-1">
            <MapPin size={14} /> Zona Centro, La Paz, Bolivia
          </p>
        </div>
        <div className="flex gap-3 w-full sm:w-auto">
          <Link to="/zone" className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 bg-white border border-slate-200 text-slate-700 rounded-lg text-sm font-medium hover:bg-slate-50 transition-colors">
            <MapPin size={16} /> Consultar otra zona
          </Link>
          <Link to="/map" className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
            <MapIcon size={16} /> Ver mapa UV
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main UV Card */}
        <div className="lg:col-span-1 bg-white rounded-2xl p-6 border border-slate-200 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-purple-100 rounded-bl-full opacity-50 pointer-events-none"></div>
          
          <h2 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-2">Índice UV Actual</h2>
          
          <div className="flex items-end gap-3 mb-2">
            <span className="text-6xl font-black text-[#0f172a]">11.2</span>
            <span className="text-lg font-bold text-purple-600 mb-2 px-3 py-1 bg-purple-50 rounded-full border border-purple-200">EXTREMO</span>
          </div>
          
          <p className="text-sm text-slate-600 mb-6">
            Riesgo muy alto de daño por exposición al sol sin protección.
          </p>

          <div className="bg-purple-50 border border-purple-100 rounded-xl p-4 flex gap-3">
            <ShieldCheck className="text-purple-600 shrink-0 mt-0.5" size={20} />
            <div>
              <p className="text-sm font-semibold text-purple-900 mb-1">Recomendación IA:</p>
              <p className="text-xs text-purple-800">Evite salir al exterior entre las 10:00 y las 15:00. Si debe salir, use bloqueador solar FPS 50+, sombrero de ala ancha y ropa protectora.</p>
            </div>
          </div>
        </div>

        {/* Small metric cards & Chart */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-orange-50 flex items-center justify-center text-orange-500">
                <Thermometer size={20} />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-medium">Temperatura</p>
                <p className="text-lg font-bold text-slate-800">18°C</p>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-slate-500">
                <Cloud size={20} />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-medium">Nubosidad</p>
                <p className="text-lg font-bold text-slate-800">12%</p>
              </div>
            </div>

            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-yellow-50 flex items-center justify-center text-yellow-500">
                <Sun size={20} />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-medium">Rad. Solar</p>
                <p className="text-lg font-bold text-slate-800">850 W/m²</p>
              </div>
            </div>

            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-500">
                <Mountain size={20} />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-medium">Altitud</p>
                <p className="text-lg font-bold text-slate-800">3,640 m</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex-1 flex flex-col">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-sm font-semibold text-slate-700">Evolución de Radiación UV - Hoy</h3>
              <span className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded font-medium">Modelo predictivo NASA/SENAMHI</span>
            </div>
            <div className="flex-1 w-full min-h-[200px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={mockChartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                  <XAxis dataKey="time" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} dy={10} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} />
                  <Tooltip 
                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                  />
                  <Area type="monotone" dataKey="uv" stroke="#8b5cf6" strokeWidth={3} fillOpacity={1} fill="url(#colorUv)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
        <h3 className="text-sm font-semibold text-slate-700 mb-4 flex items-center gap-2">
          <AlertTriangle size={16} className="text-amber-500" />
          Consejos Preventivos para Riesgo Extremo
        </h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
            <h4 className="font-semibold text-sm text-slate-800 mb-1">Protección física</h4>
            <p className="text-xs text-slate-600">Use ropa de manga larga, pantalones oscuros y gafas con filtro UV garantizado (UV400).</p>
          </div>
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
            <h4 className="font-semibold text-sm text-slate-800 mb-1">Cuidado de la piel</h4>
            <p className="text-xs text-slate-600">Aplique protector solar generosamente cada 2 horas, incluso si el cielo está nublado.</p>
          </div>
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
            <h4 className="font-semibold text-sm text-slate-800 mb-1">Exposición infantil</h4>
            <p className="text-xs text-slate-600">Los niños menores de 1 año nunca deben ser expuestos directamente al sol. Manténgalos bajo techo.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

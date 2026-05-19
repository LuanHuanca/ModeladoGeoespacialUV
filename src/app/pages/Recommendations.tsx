import { Brain, Shield, Glasses, Umbrella, Droplets, Sun, AlertTriangle } from "lucide-react";

export function Recommendations() {
  return (
    <div className="max-w-4xl mx-auto space-y-6 pb-10">
      <div>
        <h1 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
          <Brain className="text-purple-600" /> Recomendaciones Preventivas Generadas por IA
        </h1>
        <p className="text-sm text-slate-500 mt-1">Directrices personalizadas basadas en tu ubicación actual y el índice UV predictivo.</p>
      </div>

      <div className="bg-purple-50 border border-purple-200 rounded-2xl p-6 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-10">
          <AlertTriangle size={120} />
        </div>
        <div className="relative z-10">
          <div className="inline-block px-3 py-1 bg-purple-200 text-purple-800 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
            Alerta Actual - Nivel Extremo (11+)
          </div>
          <h2 className="text-xl font-bold text-purple-900 mb-2">Máxima protección requerida en exteriores</h2>
          <p className="text-purple-800 max-w-2xl text-sm leading-relaxed mb-6">
            El modelo ha detectado niveles de radiación peligrosos en su zona. La piel desprotegida puede sufrir quemaduras en menos de 10 minutos. Se aconseja encarecidamente permanecer en interiores durante las horas pico (10:00 - 15:00).
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white p-4 rounded-xl border border-purple-100 flex flex-col items-center text-center">
              <Shield className="text-purple-500 mb-2" size={24} />
              <span className="text-xs font-semibold text-slate-700">Bloqueador FPS 50+</span>
            </div>
            <div className="bg-white p-4 rounded-xl border border-purple-100 flex flex-col items-center text-center">
              <Glasses className="text-purple-500 mb-2" size={24} />
              <span className="text-xs font-semibold text-slate-700">Gafas UV400</span>
            </div>
            <div className="bg-white p-4 rounded-xl border border-purple-100 flex flex-col items-center text-center">
              <Umbrella className="text-purple-500 mb-2" size={24} />
              <span className="text-xs font-semibold text-slate-700">Buscar Sombra</span>
            </div>
            <div className="bg-white p-4 rounded-xl border border-purple-100 flex flex-col items-center text-center">
              <Droplets className="text-purple-500 mb-2" size={24} />
              <span className="text-xs font-semibold text-slate-700">Hidratación Continua</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
        <h3 className="font-semibold text-slate-800 mb-4">¿Qué significa cada nivel UV?</h3>
        <div className="space-y-4">
          <div className="flex items-start gap-4 p-3 rounded-lg hover:bg-slate-50">
            <div className="w-12 h-12 shrink-0 rounded-full bg-green-100 text-green-600 flex items-center justify-center font-bold">1-2</div>
            <div>
              <h4 className="font-semibold text-slate-700">Bajo</h4>
              <p className="text-xs text-slate-500">Puede permanecer en el exterior sin riesgo. No se requiere protección especial a menos que tenga piel muy sensible.</p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-3 rounded-lg hover:bg-slate-50">
            <div className="w-12 h-12 shrink-0 rounded-full bg-yellow-100 text-yellow-600 flex items-center justify-center font-bold">3-5</div>
            <div>
              <h4 className="font-semibold text-slate-700">Moderado</h4>
              <p className="text-xs text-slate-500">Manténgase en la sombra cerca del mediodía. Use protector solar y sombrero.</p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-3 rounded-lg hover:bg-slate-50">
            <div className="w-12 h-12 shrink-0 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center font-bold">6-7</div>
            <div>
              <h4 className="font-semibold text-slate-700">Alto</h4>
              <p className="text-xs text-slate-500">Reduzca el tiempo al sol entre las 10 a.m. y las 4 p.m. Use camisa, bloqueador, sombrero y gafas.</p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-3 rounded-lg hover:bg-slate-50">
            <div className="w-12 h-12 shrink-0 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-bold">8-10</div>
            <div>
              <h4 className="font-semibold text-slate-700">Muy Alto</h4>
              <p className="text-xs text-slate-500">Precauciones extremas. La piel desprotegida se quemará rápidamente.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

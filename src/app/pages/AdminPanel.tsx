import { Settings, RefreshCw, Database, Activity, CheckCircle, XCircle } from "lucide-react";

export function AdminPanel() {
  return (
    <div className="space-y-6 max-w-5xl mx-auto pb-10">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
            <Settings className="text-slate-600" /> Panel Administrativo
          </h1>
          <p className="text-sm text-slate-500">Gestión de fuentes de datos y estado del sistema</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700">
          <RefreshCw size={16} /> Forzar Sincronización
        </button>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-6">
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
            <h2 className="text-lg font-semibold text-slate-800 mb-4 flex items-center gap-2">
              <Activity size={20} /> Estado de Fuentes
            </h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 border border-slate-100 rounded-lg bg-slate-50">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <div>
                    <h3 className="font-semibold text-sm text-slate-800">NASA POWER API</h3>
                    <p className="text-xs text-slate-500">Última sync: Hace 5 minutos</p>
                  </div>
                </div>
                <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded">En línea</span>
              </div>
              
              <div className="flex items-center justify-between p-3 border border-slate-100 rounded-lg bg-slate-50">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <div>
                    <h3 className="font-semibold text-sm text-slate-800">SENAMHI Web Scraping</h3>
                    <p className="text-xs text-slate-500">Última sync: Hace 1 hora</p>
                  </div>
                </div>
                <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded">En línea</span>
              </div>

              <div className="flex items-center justify-between p-3 border border-red-100 rounded-lg bg-red-50">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                  <div>
                    <h3 className="font-semibold text-sm text-slate-800">Modelo DEM Local</h3>
                    <p className="text-xs text-slate-500 text-red-600">Error de conexión al servidor GIS</p>
                  </div>
                </div>
                <span className="px-2 py-1 bg-red-100 text-red-700 text-xs font-semibold rounded">Error</span>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
            <h2 className="text-sm font-semibold text-slate-800 mb-4 flex items-center gap-2">
              <Database size={16} /> Dataset Consolidado
            </h2>
            <div className="text-center py-4 border-b border-slate-100">
              <div className="text-3xl font-bold text-blue-600 mb-1">14,285</div>
              <p className="text-xs text-slate-500 uppercase tracking-wider">Registros Activos</p>
            </div>
            <div className="pt-4 space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-slate-600 flex items-center gap-1"><CheckCircle size={14} className="text-green-500"/> Validados</span>
                <span className="font-medium text-slate-800">14,100</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-600 flex items-center gap-1"><XCircle size={14} className="text-red-500"/> Descartados</span>
                <span className="font-medium text-slate-800">185</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

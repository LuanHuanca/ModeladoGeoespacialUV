import { Link } from "react-router";
import { Filter, Download, ChevronRight, TrendingUp, BarChart2, FileText, Database, ArrowUpRight, ArrowDownRight } from "lucide-react";

export function ResearchPanel() {
  const mockTableData = [
    { id: "R-001", date: "2026-05-18", time: "12:00", zone: "Centro", uv: 11.2, risk: "Extremo", source: "NASA/SENAMHI" },
    { id: "R-002", date: "2026-05-18", time: "12:30", zone: "Miraflores", uv: 10.8, risk: "Muy Alto", source: "NASA/SENAMHI" },
    { id: "R-003", date: "2026-05-18", time: "13:00", zone: "Sopocachi", uv: 9.5, risk: "Muy Alto", source: "NASA POWER" },
    { id: "R-004", date: "2026-05-18", time: "13:30", zone: "Obrajes", uv: 8.2, risk: "Muy Alto", source: "Modelo Predictivo" },
    { id: "R-005", date: "2026-05-18", time: "14:00", zone: "Calacoto", uv: 6.5, risk: "Alto", source: "SENAMHI" },
    { id: "R-006", date: "2026-05-18", time: "14:30", zone: "Mallasa", uv: 4.2, risk: "Moderado", source: "Modelo Predictivo" },
  ];

  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-10">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Panel de Investigación</h1>
          <p className="text-sm text-slate-500">Herramientas analíticas avanzadas para investigadores</p>
        </div>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 text-slate-700 rounded-lg text-sm font-medium hover:bg-slate-50">
            <Download size={16} /> Exportar Dataset
          </button>
        </div>
      </div>

      {/* Access Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Link to="/trend" className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:border-blue-300 hover:shadow-md transition-all flex items-center justify-between group">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <TrendingUp size={24} />
            </div>
            <div>
              <h3 className="font-semibold text-slate-800">Mapa de Tendencia</h3>
              <p className="text-xs text-slate-500">Evolución espacio-temporal</p>
            </div>
          </div>
          <ChevronRight size={20} className="text-slate-400 group-hover:text-blue-600" />
        </Link>

        <Link to="/histogram" className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:border-purple-300 hover:shadow-md transition-all flex items-center justify-between group">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors">
              <BarChart2 size={24} />
            </div>
            <div>
              <h3 className="font-semibold text-slate-800">Histograma UV</h3>
              <p className="text-xs text-slate-500">Distribución de exposición</p>
            </div>
          </div>
          <ChevronRight size={20} className="text-slate-400 group-hover:text-purple-600" />
        </Link>

        <Link to="/reports" className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:border-green-300 hover:shadow-md transition-all flex items-center justify-between group">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center text-green-600 group-hover:bg-green-600 group-hover:text-white transition-colors">
              <FileText size={24} />
            </div>
            <div>
              <h3 className="font-semibold text-slate-800">Reporte Técnico</h3>
              <p className="text-xs text-slate-500">Generación de informes formales</p>
            </div>
          </div>
          <ChevronRight size={20} className="text-slate-400 group-hover:text-green-600" />
        </Link>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Promedio UV Mensual</p>
          <div className="flex items-end gap-2">
            <span className="text-2xl font-bold text-slate-800">7.4</span>
            <span className="text-xs font-medium text-emerald-600 flex items-center mb-1">
              <ArrowDownRight size={14} /> 0.2
            </span>
          </div>
        </div>
        
        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Máximo Registrado</p>
          <div className="flex items-end gap-2">
            <span className="text-2xl font-bold text-purple-700">12.5</span>
            <span className="text-xs text-slate-500 mb-1">Extremo</span>
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Mínimo Registrado</p>
          <div className="flex items-end gap-2">
            <span className="text-2xl font-bold text-green-600">0.2</span>
            <span className="text-xs text-slate-500 mb-1">Bajo</span>
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Registros Consolidados</p>
          <div className="flex items-end gap-2">
            <span className="text-2xl font-bold text-blue-600">14,285</span>
            <Database size={16} className="text-slate-400 mb-1.5" />
          </div>
        </div>
      </div>

      {/* Main Filter & Table Area */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-4 border-b border-slate-200 bg-slate-50 flex flex-wrap gap-4 items-center justify-between">
          <h2 className="font-semibold text-slate-800">Registros Históricos</h2>
          <div className="flex gap-2 w-full md:w-auto">
            <select className="text-sm border border-slate-200 rounded-md px-3 py-1.5 bg-white focus:ring-2 focus:ring-blue-500 outline-none">
              <option>Todas las Zonas</option>
              <option>Centro</option>
              <option>Zona Sur</option>
              <option>Miraflores</option>
            </select>
            <select className="text-sm border border-slate-200 rounded-md px-3 py-1.5 bg-white focus:ring-2 focus:ring-blue-500 outline-none">
              <option>Últimos 7 días</option>
              <option>Último mes</option>
              <option>Este año</option>
            </select>
            <select className="text-sm border border-slate-200 rounded-md px-3 py-1.5 bg-white focus:ring-2 focus:ring-blue-500 outline-none">
              <option>Todos los riesgos</option>
              <option>Extremo</option>
              <option>Muy Alto</option>
            </select>
            <button className="p-1.5 border border-slate-200 rounded-md text-slate-600 hover:bg-slate-100 bg-white">
              <Filter size={18} />
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-xs text-slate-500 uppercase bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="px-6 py-3">ID</th>
                <th className="px-6 py-3">Fecha y Hora</th>
                <th className="px-6 py-3">Zona</th>
                <th className="px-6 py-3 text-center">Índice UV</th>
                <th className="px-6 py-3">Riesgo</th>
                <th className="px-6 py-3">Fuente de Datos</th>
              </tr>
            </thead>
            <tbody>
              {mockTableData.map((row) => (
                <tr key={row.id} className="bg-white border-b border-slate-100 hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4 font-medium text-slate-900">{row.id}</td>
                  <td className="px-6 py-4 text-slate-600">{row.date} <span className="text-slate-400">|</span> {row.time}</td>
                  <td className="px-6 py-4 text-slate-600">{row.zone}</td>
                  <td className="px-6 py-4 text-center">
                    <span className="font-bold text-slate-800">{row.uv}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-semibold
                      ${row.risk === 'Extremo' ? 'bg-purple-100 text-purple-800' : ''}
                      ${row.risk === 'Muy Alto' ? 'bg-red-100 text-red-800' : ''}
                      ${row.risk === 'Alto' ? 'bg-orange-100 text-orange-800' : ''}
                      ${row.risk === 'Moderado' ? 'bg-yellow-100 text-yellow-800' : ''}
                    `}>
                      {row.risk}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-slate-600 text-xs font-medium">{row.source}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="p-4 border-t border-slate-200 flex justify-between items-center bg-slate-50 text-sm text-slate-600">
          <span>Mostrando 6 de 14,285 registros</span>
          <div className="flex gap-1">
            <button className="px-3 py-1 border border-slate-200 bg-white rounded-md hover:bg-slate-100 disabled:opacity-50">Anterior</button>
            <button className="px-3 py-1 border border-slate-200 bg-blue-600 text-white rounded-md">1</button>
            <button className="px-3 py-1 border border-slate-200 bg-white rounded-md hover:bg-slate-100">2</button>
            <button className="px-3 py-1 border border-slate-200 bg-white rounded-md hover:bg-slate-100">3</button>
            <button className="px-3 py-1 border border-slate-200 bg-white rounded-md hover:bg-slate-100">Siguiente</button>
          </div>
        </div>
      </div>
    </div>
  );
}

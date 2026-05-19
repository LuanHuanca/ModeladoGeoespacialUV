import { useState } from "react";
import { Search, Filter, Layers, Download, Maximize, ZoomIn, ZoomOut, Navigation, Crosshair, Map as MapIcon, Calendar, Clock, AlertCircle } from "lucide-react";

export function MapPage() {
  const [activeLayer, setActiveLayer] = useState("heatmap");

  return (
    <div className="flex flex-col h-[calc(100vh-8rem)]">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h1 className="text-xl font-bold text-slate-800">Mapa de Radiación UV Interactivo</h1>
          <p className="text-sm text-slate-500">Visualización espacial del municipio de La Paz</p>
        </div>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50">
            <Download size={16} /> Exportar
          </button>
          <button className="flex items-center gap-2 px-3 py-1.5 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700">
            <Filter size={16} /> Filtros avanzados
          </button>
        </div>
      </div>

      <div className="flex-1 flex gap-4 overflow-hidden">
        {/* Main Map Area */}
        <div className="flex-1 bg-slate-200 rounded-xl border border-slate-300 relative overflow-hidden flex flex-col">
          {/* Faux Map Background using Unsplash image of city/topography from above */}
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-70"
            style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80)' }}
          ></div>
          
          {/* Heatmap Overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-purple-500/20 to-red-500/40 mix-blend-multiply"></div>
          
          {/* Grid lines to look technical */}
          <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>

          {/* Map Controls */}
          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-2 rounded-lg shadow-sm border border-slate-200 flex flex-col gap-2">
            <button className="p-1.5 text-slate-600 hover:bg-slate-100 rounded-md" title="Acercar"><ZoomIn size={18} /></button>
            <button className="p-1.5 text-slate-600 hover:bg-slate-100 rounded-md" title="Alejar"><ZoomOut size={18} /></button>
            <div className="h-px bg-slate-200 my-1"></div>
            <button className="p-1.5 text-slate-600 hover:bg-slate-100 rounded-md" title="Centrar"><Crosshair size={18} /></button>
            <button className="p-1.5 text-slate-600 hover:bg-slate-100 rounded-md" title="Pantalla completa"><Maximize size={18} /></button>
          </div>

          {/* Map Layer Controls */}
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg shadow-sm border border-slate-200 p-3 w-48">
            <p className="text-xs font-semibold text-slate-700 mb-2 uppercase">Capas Base</p>
            <div className="space-y-2 text-sm">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="layer" checked={activeLayer === 'heatmap'} onChange={() => setActiveLayer('heatmap')} className="text-blue-600" />
                <span className="text-slate-700">Mapa de Calor UV</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="layer" checked={activeLayer === 'dem'} onChange={() => setActiveLayer('dem')} className="text-blue-600" />
                <span className="text-slate-700">Elevación (DEM)</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="layer" checked={activeLayer === 'stations'} onChange={() => setActiveLayer('stations')} className="text-blue-600" />
                <span className="text-slate-700">Estaciones SENAMHI</span>
              </label>
            </div>
          </div>

          {/* UV Scale Legend */}
          <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg shadow-sm border border-slate-200 p-3 sm:w-80 ml-auto mr-auto sm:ml-4 sm:mr-0">
            <div className="flex justify-between text-xs font-medium text-slate-600 mb-2">
              <span>Bajo (0-2)</span>
              <span>Extremo (11+)</span>
            </div>
            <div className="h-3 w-full rounded-full bg-gradient-to-r from-green-400 via-yellow-400 via-orange-500 via-red-500 to-purple-600"></div>
          </div>
          
          {/* Active Data Point Marker */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="relative">
              <div className="w-4 h-4 bg-purple-600 rounded-full border-2 border-white shadow-md z-10 relative animate-pulse"></div>
              <div className="w-12 h-12 bg-purple-500/30 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
            </div>
          </div>
        </div>

        {/* Sidebar Data Panel */}
        <div className="w-80 bg-white rounded-xl border border-slate-200 shadow-sm flex flex-col overflow-hidden hidden md:flex">
          <div className="p-4 border-b border-slate-100 bg-slate-50">
            <h3 className="font-semibold text-slate-800">Detalles del Punto</h3>
            <p className="text-xs text-slate-500 flex items-center gap-1 mt-1"><MapIcon size={12} /> Zona Sur, Calacoto</p>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4 space-y-6">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-purple-50 rounded-full border border-purple-100 mb-2">
                <span className="text-3xl font-bold text-purple-700">10.8</span>
              </div>
              <p className="text-sm font-semibold text-purple-600 uppercase">Riesgo Muy Alto</p>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs font-semibold text-slate-500 uppercase">Variables Espaciales</h4>
              
              <div className="flex justify-between items-center text-sm border-b border-slate-100 pb-2">
                <span className="text-slate-600">Altitud</span>
                <span className="font-medium text-slate-800">3,350 m</span>
              </div>
              <div className="flex justify-between items-center text-sm border-b border-slate-100 pb-2">
                <span className="text-slate-600">Pendiente</span>
                <span className="font-medium text-slate-800">12° SO</span>
              </div>
              <div className="flex justify-between items-center text-sm border-b border-slate-100 pb-2">
                <span className="text-slate-600">Nubosidad</span>
                <span className="font-medium text-slate-800">24%</span>
              </div>
              <div className="flex justify-between items-center text-sm pb-2">
                <span className="text-slate-600">Rad. Solar Estimada</span>
                <span className="font-medium text-slate-800">790 W/m²</span>
              </div>
            </div>

            <div className="bg-blue-50 p-3 rounded-lg border border-blue-100">
              <h4 className="text-xs font-semibold text-blue-800 uppercase flex items-center gap-1 mb-2">
                <AlertCircle size={14} /> Recomendación IA
              </h4>
              <p className="text-xs text-blue-900 leading-relaxed">
                Minimice la exposición al sol entre las 10 a.m. y las 4 p.m. Use protector solar, ropa protectora y gafas oscuras.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import { FileText, Download, Printer } from "lucide-react";

export function TechnicalReport() {
  return (
    <div className="space-y-6 max-w-4xl mx-auto pb-10">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Reporte Técnico</h1>
          <p className="text-sm text-slate-500">Resumen formal del análisis de radiación</p>
        </div>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 text-slate-700 rounded-lg text-sm font-medium hover:bg-slate-50">
            <Printer size={16} /> Imprimir
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700">
            <Download size={16} /> Exportar PDF
          </button>
        </div>
      </div>

      <div className="bg-white p-10 rounded-xl border border-slate-200 shadow-sm font-serif">
        <div className="text-center border-b border-slate-300 pb-8 mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-2">INFORME TÉCNICO DE EXPOSICIÓN A RADIACIÓN UV</h2>
          <p className="text-slate-600">Sistema Inteligente de Modelado Geoespacial - Municipio de La Paz</p>
          <p className="text-sm text-slate-500 mt-4">Fecha de generación: 19 de Mayo de 2026</p>
        </div>

        <div className="space-y-8 text-slate-800 leading-relaxed">
          <section>
            <h3 className="text-lg font-bold mb-3 border-b border-slate-100 pb-2">1. Resumen Ejecutivo</h3>
            <p className="text-sm text-justify">
              El presente documento consolida los hallazgos derivados del modelo de predicción machine learning alimentado por datos satelitales (NASA POWER) y validado con estaciones terrestres (SENAMHI) para el municipio de La Paz durante el periodo analizado. Se ha identificado una media sostenida en la categoría de riesgo "Muy Alto", fuertemente influenciada por factores altitudinales.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-bold mb-3 border-b border-slate-100 pb-2">2. Métricas del Modelo Predictivo</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-4">
              <div className="p-4 bg-slate-50 rounded border border-slate-200 text-center">
                <div className="text-xs text-slate-500 uppercase">Precisión (Accuracy)</div>
                <div className="text-xl font-bold text-blue-700">92.4%</div>
              </div>
              <div className="p-4 bg-slate-50 rounded border border-slate-200 text-center">
                <div className="text-xs text-slate-500 uppercase">R² (Coef. Determinación)</div>
                <div className="text-xl font-bold text-blue-700">0.89</div>
              </div>
              <div className="p-4 bg-slate-50 rounded border border-slate-200 text-center">
                <div className="text-xs text-slate-500 uppercase">RMSE</div>
                <div className="text-xl font-bold text-blue-700">1.12</div>
              </div>
              <div className="p-4 bg-slate-50 rounded border border-slate-200 text-center">
                <div className="text-xs text-slate-500 uppercase">MAE</div>
                <div className="text-xl font-bold text-blue-700">0.85</div>
              </div>
            </div>
            <p className="text-sm text-justify">
              Las métricas indican una alta confiabilidad espacial, permitiendo una extrapolación segura a zonas carentes de estaciones de monitoreo físico.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-bold mb-3 border-b border-slate-100 pb-2">3. Conclusiones y Recomendaciones</h3>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>El 72% de las horas luz registradas sobre los 3,500 m.s.n.m. presentan índices categorizados como Riesgo Muy Alto o Extremo.</li>
              <li>Se recomienda fortalecer las campañas de prevención orientadas a trabajadores en vía pública.</li>
              <li>Es imperativo mantener la sincronización diaria con la API de NASA POWER para preservar la exactitud del modelo RFR (Random Forest Regressor).</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

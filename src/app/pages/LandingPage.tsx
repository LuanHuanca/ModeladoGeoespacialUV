import { Link } from "react-router";
import { Map, Activity, Shield, ArrowRight, Sun, Brain, Globe, ShieldAlert } from "lucide-react";

export function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Navbar */}
      <nav className="bg-[#0f172a] text-white py-4 px-6 md:px-12 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <Sun className="text-yellow-400" size={28} />
          <span className="font-bold text-lg tracking-wide hidden sm:block">SISTEMA UV-BOLIVIA</span>
        </div>
        <div className="flex items-center gap-4">
          <Link to="/login" className="text-slate-300 hover:text-white text-sm font-medium transition-colors">
            Iniciar Sesión
          </Link>
          <Link to="/dashboard" className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg text-sm font-semibold transition-colors">
            Consultar radiación UV
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-[#0f172a] text-white pt-16 pb-32 px-6 md:px-12 overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
          <div className="absolute right-[-10%] top-[-10%] w-[800px] h-[800px] rounded-full bg-blue-500 blur-[120px]"></div>
        </div>
        
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <div className="inline-block px-3 py-1 bg-blue-900/50 border border-blue-700 rounded-full text-blue-300 text-xs font-semibold mb-6">
              Plataforma Académica Oficial - La Paz
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              Sistema Inteligente de Modelado Geoespacial
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-xl leading-relaxed">
              Análisis predictivo de la exposición a radiación ultravioleta utilizando machine learning, datos satelitales y modelos topográficos para el municipio de La Paz.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/dashboard" className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-xl font-semibold transition-colors shadow-lg shadow-blue-900/50">
                Ver mapa interactivo <ArrowRight size={18} />
              </Link>
              <Link to="#features" className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors border border-slate-700">
                Conocer más
              </Link>
            </div>
          </div>
          
          <div className="relative h-[400px] bg-slate-800 rounded-2xl border border-slate-700 shadow-2xl overflow-hidden flex items-center justify-center">
            {/* Pseudo map visual */}
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')] bg-cover bg-center opacity-40 mix-blend-luminosity"></div>
            <div className="absolute inset-0 bg-gradient-to-tr from-[#0f172a] via-transparent to-blue-900/40"></div>
            
            <div className="relative z-10 bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 text-center max-w-xs">
              <Sun className="text-yellow-400 mx-auto mb-3" size={48} />
              <div className="text-4xl font-black text-white mb-1">11.4</div>
              <div className="text-sm font-medium text-red-300 uppercase tracking-widest mb-3">Riesgo Extremo</div>
              <div className="text-xs text-slate-200">Zona Sur, La Paz • 12:30 PM</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0f172a] mb-4">Tecnología al servicio de la salud pública</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Integramos múltiples fuentes de datos ambientales y satelitales (NASA POWER, SENAMHI) para ofrecer predicciones hiperlocales.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-6">
                <Globe size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#0f172a]">Análisis Geoespacial</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Mapas de calor en tiempo real cruzando datos altitudinales (DEM) e interpolación espacial para máxima precisión en la accidentada topografía paceña.
              </p>
            </div>
            
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600 mb-6">
                <Brain size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#0f172a]">Predicción Machine Learning</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Modelos predictivos que evalúan el índice UV hora por hora considerando nubosidad, ozono y reflectividad del suelo.
              </p>
            </div>
            
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center text-green-600 mb-6">
                <ShieldAlert size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#0f172a]">Recomendaciones IA</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Asistente inteligente que genera pautas de prevención personalizadas basadas en el tiempo de exposición y nivel de riesgo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 px-6 md:px-12 text-center text-sm">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-left mb-8 border-b border-slate-800 pb-8">
          <div>
            <div className="flex items-center gap-2 mb-4 text-white">
              <Sun className="text-yellow-400" size={20} />
              <span className="font-bold">SISTEMA UV-BOLIVIA</span>
            </div>
            <p className="text-xs text-slate-500">
              Proyecto de Grado Académico.<br/> 
              Universidad Católica Boliviana San Pablo, La Paz.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Recursos</h4>
            <ul className="space-y-2 text-xs">
              <li><Link to="/map" className="hover:text-white transition-colors">Mapa Interactivo</Link></li>
              <li><Link to="/reports" className="hover:text-white transition-colors">Reportes Técnicos</Link></li>
              <li><Link to="/research" className="hover:text-white transition-colors">Datos Históricos</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Fuentes de Datos</h4>
            <ul className="space-y-2 text-xs">
              <li>NASA POWER API</li>
              <li>SENAMHI Bolivia</li>
              <li>OpenStreetMap (DEM)</li>
            </ul>
          </div>
        </div>
        <p>&copy; 2026 Sistema Inteligente de Modelado Geoespacial. Fines Académicos.</p>
      </footer>
    </div>
  );
}

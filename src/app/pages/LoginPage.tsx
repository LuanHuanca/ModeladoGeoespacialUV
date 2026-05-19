import { Link } from "react-router";
import { Sun, ArrowLeft, Mail, Lock, UserCog } from "lucide-react";

export function LoginPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-center items-center p-6 font-sans relative">
      <Link to="/" className="absolute top-6 left-6 text-slate-500 hover:text-slate-900 flex items-center gap-2 text-sm font-medium transition-colors">
        <ArrowLeft size={16} /> Volver al inicio
      </Link>

      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl shadow-slate-200/50 p-8 border border-slate-100">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-[#0f172a] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-blue-900/20">
            <Sun className="text-yellow-400" size={32} />
          </div>
          <h1 className="text-2xl font-bold text-[#0f172a]">Acceso al Sistema</h1>
          <p className="text-sm text-slate-500 mt-2">Plataforma de modelado geoespacial UV</p>
        </div>

        <form className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">Correo Electrónico</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                <Mail size={18} />
              </div>
              <input 
                type="email" 
                placeholder="usuario@ucb.edu.bo" 
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">Contraseña</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                <Lock size={18} />
              </div>
              <input 
                type="password" 
                placeholder="••••••••" 
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
            </div>
            <div className="text-right mt-1.5">
              <a href="#" className="text-xs text-blue-600 hover:text-blue-700 font-medium">¿Olvidaste tu contraseña?</a>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">Seleccionar Rol</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                <UserCog size={18} />
              </div>
              <select className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all appearance-none cursor-pointer">
                <option value="citizen">Usuario Ciudadano</option>
                <option value="researcher">Investigador</option>
                <option value="admin">Administrador</option>
              </select>
            </div>
          </div>

          <Link to="/dashboard" className="w-full block text-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition-colors shadow-md shadow-blue-600/20 mt-6">
            Ingresar
          </Link>
        </form>

        <div className="mt-8 text-center text-xs text-slate-400">
          <p>Uso exclusivo para investigación académica.</p>
        </div>
      </div>
    </div>
  );
}

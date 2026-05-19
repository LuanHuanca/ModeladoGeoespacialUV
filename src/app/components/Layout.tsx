import { Outlet, NavLink } from "react-router";
import { 
  LayoutDashboard, 
  Map, 
  MapPin, 
  Lightbulb, 
  History, 
  BarChart2, 
  TrendingUp, 
  FileText, 
  Settings, 
  CheckCircle,
  Menu,
  Sun,
  LogOut
} from "lucide-react";
import { useState } from "react";

export function Layout() {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const navItems = [
    { label: "Inicio (Dashboard)", path: "/dashboard", icon: LayoutDashboard },
    { label: "Mapa UV", path: "/map", icon: Map },
    { label: "Consulta por zona", path: "/zone", icon: MapPin },
    { label: "Recomendaciones", path: "/recommendations", icon: Lightbulb },
    { label: "Análisis histórico", path: "/research", icon: History },
    { label: "Histograma UV", path: "/histogram", icon: BarChart2 },
    { label: "Mapa de tendencia", path: "/trend", icon: TrendingUp },
    { label: "Reportes", path: "/reports", icon: FileText },
    { label: "Administración de datos", path: "/admin", icon: Settings },
    { label: "Validación", path: "/validation", icon: CheckCircle },
  ];

  return (
    <div className="flex h-screen bg-slate-50 text-slate-900 font-sans">
      {/* Sidebar */}
      <aside 
        className={`${
          isSidebarOpen ? "w-64" : "w-20"
        } transition-all duration-300 bg-[#0f172a] text-white flex flex-col`}
      >
        <div className="h-16 flex items-center justify-between px-4 border-b border-slate-700/50">
          <div className={`flex items-center gap-2 overflow-hidden ${!isSidebarOpen && 'justify-center w-full'}`}>
            <Sun className="text-yellow-400 shrink-0" size={24} />
            {isSidebarOpen && <span className="font-bold text-sm tracking-wide truncate">UV-RADIACIÓN</span>}
          </div>
          {isSidebarOpen && (
            <button onClick={() => setSidebarOpen(false)} className="text-slate-400 hover:text-white lg:hidden">
              <Menu size={20} />
            </button>
          )}
        </div>

        <nav className="flex-1 overflow-y-auto py-4 space-y-1">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 mx-2 rounded-lg transition-colors ${
                  isActive 
                    ? "bg-blue-600 text-white" 
                    : "text-slate-300 hover:bg-slate-800 hover:text-white"
                }`
              }
              title={!isSidebarOpen ? item.label : undefined}
            >
              <item.icon size={20} className="shrink-0" />
              {isSidebarOpen && <span className="text-sm font-medium whitespace-nowrap">{item.label}</span>}
            </NavLink>
          ))}
        </nav>

        <div className="p-4 border-t border-slate-700/50">
          <NavLink
            to="/"
            className="flex items-center gap-3 px-4 py-2 text-slate-400 hover:text-white transition-colors w-full"
            title="Cerrar sesión"
          >
            <LogOut size={20} className="shrink-0" />
            {isSidebarOpen && <span className="text-sm">Cerrar sesión</span>}
          </NavLink>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Header */}
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6 shadow-sm z-10">
          <button 
            onClick={() => setSidebarOpen(!isSidebarOpen)}
            className="p-2 text-slate-500 hover:text-slate-700 hover:bg-slate-100 rounded-md"
          >
            <Menu size={20} />
          </button>

          <div className="flex items-center gap-4">
            <div className="text-right hidden sm:block">
              <p className="text-sm font-semibold text-slate-700">Dr. Alan Turing</p>
              <p className="text-xs text-slate-500">Investigador - Admin</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-blue-100 border-2 border-blue-500 flex items-center justify-center text-blue-700 font-bold shadow-sm">
              AT
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto bg-slate-50/50 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

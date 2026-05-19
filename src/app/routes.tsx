import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { LandingPage } from "./pages/LandingPage";
import { LoginPage } from "./pages/LoginPage";
import { Dashboard } from "./pages/Dashboard";
import { MapPage } from "./pages/MapPage";
import { ZoneDetail } from "./pages/ZoneDetail";
import { Recommendations } from "./pages/Recommendations";
import { ResearchPanel } from "./pages/ResearchPanel";
import { TrendMap } from "./pages/TrendMap";
import { HistogramPage } from "./pages/HistogramPage";
import { TechnicalReport } from "./pages/TechnicalReport";
import { AdminPanel } from "./pages/AdminPanel";
import { DataValidation } from "./pages/DataValidation";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: LandingPage,
  },
  {
    path: "/login",
    Component: LoginPage,
  },
  {
    Component: Layout,
    children: [
      { path: "dashboard", Component: Dashboard },
      { path: "map", Component: MapPage },
      { path: "zone", Component: ZoneDetail },
      { path: "recommendations", Component: Recommendations },
      { path: "research", Component: ResearchPanel },
      { path: "trend", Component: TrendMap },
      { path: "histogram", Component: HistogramPage },
      { path: "reports", Component: TechnicalReport },
      { path: "admin", Component: AdminPanel },
      { path: "validation", Component: DataValidation },
    ],
  },
]);

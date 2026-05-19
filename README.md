# Sistema Inteligente de Modelado Geoespacial y Análisis Predictivo UV

Prototipo web académico para la **Universidad Católica Boliviana San Pablo — Sede La Paz**, Bolivia.

Plataforma de monitoreo y análisis de radiación ultravioleta por zonas de La Paz, con mapas de calor, histogramas, tendencias, reportes técnicos y recomendaciones generadas por IA. Incluye vistas para tres roles: ciudadano, investigador y administrador.

## Requisitos

- [Node.js](https://nodejs.org/) 18 o superior (recomendado 20 LTS)
- npm (incluido con Node.js)

## Cómo ejecutar el proyecto

Abre una terminal en la carpeta del proyecto y ejecuta:

```bash
npm install
npm run dev
```

Vite mostrará una URL local, normalmente:

**http://localhost:5173**

Abre esa dirección en el navegador.

## Pantallas disponibles

| Ruta | Pantalla |
|------|----------|
| `/` | Landing page |
| `/login` | Inicio de sesión (roles: ciudadano, investigador, admin) |
| `/dashboard` | Panel principal |
| `/map` | Mapa UV interactivo |
| `/zone` | Detalle por zona |
| `/recommendations` | Recomendaciones IA |
| `/research` | Panel de investigación / histórico |
| `/trend` | Mapa de tendencia |
| `/histogram` | Histograma UV |
| `/reports` | Reporte técnico |
| `/admin` | Panel administrativo |
| `/validation` | Validación de datos |

Desde la landing puedes ir a **Iniciar sesión** o usar **Consultar radiación UV** para entrar directo al dashboard. Dentro del sistema, el menú lateral enlaza todas las secciones.

## Compilar para producción

```bash
npm run build
npm run preview
```

Los archivos generados quedan en la carpeta `dist/`.

## Stack técnico

- React 18 + TypeScript
- Vite 6
- React Router 7
- Tailwind CSS 4
- Recharts (gráficos)
- Radix UI / componentes de interfaz

## Nota

Este es un **prototipo de interfaz** (maquetado funcional). Los datos mostrados son de demostración; la integración con APIs reales (NASA POWER, SENAMHI, etc.) se puede agregar en fases posteriores.

## Diseño original en Figma

El maquetado base proviene de: https://www.figma.com/design/HdOxmmyXz6BTCbbVUV6R0H/Realizar-maquetado-solicitado

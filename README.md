# Datos-faltantes-NA

## Índice

1. [Descripción del proyecto](#1-descripción-del-proyecto)
2. [Formato de salida](#2-formato-de-salida)
3. [Estado actual y próxima iteración](#3-estado-actual-y-próxima-iteración)
4. [Requisitos](#4-requisitos)
5. [Instalación y comandos](#5-instalación-y-comandos)
6. [Estructura del repositorio](#6-estructura-del-repositorio)
7. [Flujo de producción](#7-flujo-de-producción)
8. [Documentación de preproducción](#8-documentación-de-preproducción)
9. [Renders y entregables](#9-renders-y-entregables)
10. [Créditos, fuentes y licencias](#10-créditos-fuentes-y-licencias)

## 1. Descripción del proyecto

Este repositorio prepara un infográfico motion graphics vertical sobre un tema por definir con Remotion. Los datos faltantes (o valores NA - Not Available) ocurren cuando una celda o variable en una base de datos carece de un valor registrado. En la aplicación de cuestionarios, se originan porque el encuestado omitió una pregunta (pregunta opcional, rechazo a responder, fatiga) o porque el dato se perdió durante el proceso de digitalización.

## 2. Formato de salida

La composición `Infografico` está preparada para salida vertical de **1080×1920 píxeles**, relación **9:16** y **30 fps**, pensada para Reels, TikTok y Shorts. Las plataformas y la duración objetivo se confirmarán en la segunda iteración.

## 3. Estado actual y próxima iteración

La estructura base de Remotion, la composición marcador, las zonas seguras y las plantillas de preproducción están listas. La composición muestra únicamente `Infográfico: pendiente`.

En la próxima iteración se definirán el tema, público, guion, locución, estilo, storyboard, datos y animación. No se ha inventado contenido para esas partes.

## 4. Requisitos

- Node.js 22 LTS (`.nvmrc`)
- npm 10 o superior

## 5. Instalación y comandos

```bash
npm install
npm run dev
npm run render
npm run lint
```

`npm run dev` abre Remotion Studio. `npm run render` genera `out/infografico.mp4`. `npm run lint` ejecuta ESLint y la comprobación de TypeScript.

## 6. Estructura del repositorio

```text
docs/                 # Plantillas de preproducción y fuentes
src/
  scenes/             # Una escena por componente
  components/         # Elementos reutilizables
  data/               # Datos separados de la vista
  styles/             # Formato, zonas seguras y tokens de diseño
public/
  audio/              # Locución y música
  images/             # Imágenes con licencia registrada
  fonts/              # Tipografías con licencia registrada
```

## 7. Flujo de producción

Tema → guion → locución → estilo → storyboard → animación → render.

## 8. Documentación de preproducción

- [Tema](docs/01-tema.md)
- [Guion](docs/02-guion.md)
- [Locución](docs/03-locucion.md)
- [Estilo](docs/04-estilo.md)
- [Storyboard](docs/05-storyboard.md)
- [Fuentes](docs/fuentes.md)

## 9. Renders y entregables

Los renders se generan en `out/` y no se suben a Git. El entregable previsto será un MP4 H.264 con audio AAC cuando se definan el contenido y los recursos.

## 10. Créditos, fuentes y licencias

Las referencias, datos citados, fuentes de recursos y sus licencias se registrarán en [docs/fuentes.md](docs/fuentes.md). No se usarán recursos sin licencia clara ni generadores de imágenes.

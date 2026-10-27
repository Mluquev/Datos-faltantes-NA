# Guía para agentes

## Alcance

Este repositorio prepara un infográfico motion graphics vertical con Remotion. El README es la fuente de verdad del estado del proyecto.

## Formato y orden de trabajo

El formato es vertical, 1080×1920 a 30 fps. Todo texto, dato y subtítulo debe quedar dentro de las zonas seguras definidas en `src/styles/`. No se anima una escena hasta definir su guion, locución y estilo en `docs/`; si falta información, se pregunta o se deja una nota en el pull request, sin inventarla.

## Convenciones

Una escena por archivo en `src/scenes/`, datos en `src/data/`, y colores, medidas y tiempos en `src/styles/`. Las duraciones en frames se calculan a partir de segundos × fps.

## Recursos y validación

Los recursos van en `public/`; su fuente y licencia se registran en `docs/fuentes.md`. No se usan recursos sin licencia clara ni generadores de imágenes. Los renders van en `out/` y no se suben a Git. Antes de terminar un cambio se ejecuta `npm run lint`, manteniendo sincronizados `docs/`, el código y el README.

# iNeuroAgenda — PWA instalable

Esta carpeta contiene la envoltura instalable de iNeuroAgenda, conectada a:

https://script.google.com/macros/s/AKfycbxeG_h4Nxkf-lyoUbIOsMF4At7ES4amraxCZgHXst_WFfDeUciIbK9cQZwRkwMKM1TUxg/exec

## Archivos

- `index.html`: aplicación instalable que abre iNeuroAgenda.
- `manifest.webmanifest`: nombre, colores e iconos.
- `service-worker.js`: caché de la envoltura y pantalla sin conexión.
- `offline.html`: aviso cuando no hay Internet.
- `icon-192.png`, `icon-512.png`, `maskable-icon-512.png`.
- `apple-touch-icon.png` y `favicon.png`.

## Importante

No abra `index.html` mediante `file:///`. Para que sea instalable debe publicarse
en una dirección HTTPS.

## Publicación recomendada: Cloudflare Pages

1. Entre en Cloudflare Pages.
2. Cree un proyecto mediante carga directa de archivos.
3. Suba todos los archivos de esta carpeta, no la carpeta contenedora.
4. Publique.
5. Abra la URL HTTPS resultante.
6. En Chrome o Edge aparecerá el botón `Instalar`.
7. En iPhone/iPad: Safari → Compartir → Añadir a pantalla de inicio.

No es necesario modificar Apps Script ni la base de datos.

## Alternativa: GitHub Pages

1. Cree un repositorio.
2. Suba todos estos archivos a la raíz.
3. Active Settings → Pages → Deploy from a branch.
4. Seleccione la rama principal y la carpeta raíz.
5. Abra la URL HTTPS de Pages.

## Comportamiento sin conexión

La carcasa de iNeuroAgenda puede abrirse, pero la agenda compartida requiere
conexión para leer y guardar datos. No se almacenan asignaciones localmente.

## Actualizaciones

La lógica y la agenda siguen estando en Google Apps Script. Las nuevas versiones
publicadas en la misma URL `/exec` aparecerán automáticamente dentro de la app.

Si se modifica esta envoltura PWA, cambie el nombre de caché de
`service-worker.js`, por ejemplo de `ineuroagenda-shell-v1` a
`ineuroagenda-shell-v2`.

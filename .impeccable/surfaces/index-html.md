---
version: 1
slug: "index-html"
primary_target: "index.html"
related_targets: []
---

# Surface brief — hecisa.com (sitio completo, ES + EN)

## Alcance y modo

Sitio multipágina estático que sustituye por completo a hecisa.com. Modo **Persuade** en portada, gama y familias de producto; las hojas de descargas, galería y contacto operan en registro **Read** dentro del mismo mundo. 13 hojas en español y su paridad en inglés bajo `/en/`.

## Audiencia, trabajo, acción

- Ingeniero de proyecto de EPC especificando un equipo: necesita gama, caudal, micras, materiales y código de diseño, y se lleva el PDF. Acción = descargar la ficha y pedir oferta con el formulario.
- Mantenedor de planta con un filtro parado, casi siempre desde el móvil: necesita identificar su serie por el código de la placa y llamar. Acción = teléfono.
- Comprador internacional / naval: necesita credenciales (ISO 9001, NCAGE, 36 clientes reales, medios de fabricación) antes de escribir. Acción = cambiar a EN y escribir.

## Prueba y contenido reales

48 PDF del propio dominio (catálogos por serie, formularios de petición de oferta, ISO 9001, NCAGE, condiciones de venta), 46 fotos de galería con descripción por imagen, 14 fotos de producto, 36 logotipos de cliente, sellos ISO/OTAN/Chambertrust, cifras de taller y gama extraídas de los catálogos. Nada más es inventable.

## Dirección elegida

**La Hoja de Catálogo** (dirección 7 de 7, semilla `8d1fcfc9`, tirada degradada sin retadores). La web no habla del catálogo: la web es el catálogo. Cada familia es una hoja, el menú son las pestañas de la carpeta de anillas, el pie de cada página es el cajetín del plano, y los PDF son el registro documental del sitio, no un adjunto.

## Momento memorable

El **raíl de pestañas**: la pestaña activa es blanca y no tiene filo inferior, así que se funde con la hoja; las inactivas son campos de oliva con tinta oscura. Al abrir una familia, la pestaña despliega un índice de serie con código, caudal, micra y silueta del equipo, y al navegar la hoja pasa como una página. Es el único movimiento orquestado del sitio.

## Decisiones pendientes

El formulario de petición de oferta se entrega con el `action` marcado y documentado: falta que el cliente elija endpoint (Formspree, correo del hosting o similar). Los emails `sales@hecisa.com` y `central@hecisa.com` aparecen en los pies de catálogo pero no se publican por no estar confirmados.

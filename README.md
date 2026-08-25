# HECISA — sitio web

Reconstrucción completa de **hecisa.com** (Hispano Europea de Comercio e Industria, S.L. — filtración industrial, Getafe, Madrid, desde 1984).

Sitio estático, sin framework, sin build de terceros, sin dependencias en `node_modules`. Se sube tal cual a cualquier hosting.

---

## Qué hay aquí

```
Hecisa/
├── index.html … contacto.html      13 hojas en español (raíz)
├── en/                             13 hojas en inglés
├── assets/
│   ├── css/style.css               todo el sistema visual
│   ├── js/main.js                  todo el comportamiento, sin dependencias
│   ├── img/
│   │   ├── galeria/                46 fotografías del archivo de HECISA
│   │   ├── productos/              14 fotos de producto
│   │   ├── clientes/               36 logotipos de cliente
│   │   ├── marcas/                 ISO 9001, NCAGE, Chambertrust, Top 100.000
│   │   ├── logo-14.png             logotipo
│   │   ├── mapa-01.jpg             plano de acceso
│   │   └── favicon.svg
│   └── pdf/                        los 48 documentos del dominio
├── sitemap.xml · robots.txt
├── tools/
│   ├── contenido.mjs               TODO el texto del sitio, bilingüe
│   ├── build.mjs                   generador de las 26 hojas
│   └── serve.mjs                   servidor local para revisar
├── PRODUCT.md                      verdad de producto (audiencias, gama, evidencia)
└── DESIGN.md                       sistema visual
```

**El HTML es generado.** No lo edites a mano: los cambios se pierden en la siguiente compilación.

- ¿Cambiar un texto, un dato técnico, un PDF, un cliente? → `tools/contenido.mjs`
- ¿Cambiar la estructura de una página o el menú? → `tools/build.mjs`
- ¿Cambiar el aspecto? → `assets/css/style.css` (se edita directamente)
- ¿Cambiar un comportamiento? → `assets/js/main.js` (se edita directamente)

Después de tocar `tools/`:

```bash
node tools/build.mjs
```

Para revisarlo en local:

```bash
node tools/serve.mjs 4460
```

---

## Antes de publicar: dos cosas pendientes

### 1. El formulario de contacto necesita un destino

`contacto.html` y `en/contact.html` llevan un formulario de petición técnica completo y validado, pero **sin endpoint**. Mientras no lo tenga, al enviarlo muestra un aviso honesto que remite al teléfono y al correo; no finge que ha enviado nada.

Para activarlo, en `tools/build.mjs`, dentro de `paginaContacto()`, cambia:

```html
<form class="form" data-form-peticion action="#" method="post" novalidate>
```

por la URL real. Tres opciones:

- **El correo del hosting** (lo más habitual en alojamiento español): un `formulario.php` que haga `mail()`. `action="formulario.php"`.
- **Formspree** u otro servicio: `action="https://formspree.io/f/XXXXXXX"`.
- **Netlify Forms**, si se despliega ahí: añadir `netlify` al `<form>`.

Luego `node tools/build.mjs`. El JavaScript detecta que ya hay `action` y deja de mostrar el aviso.

### 2. Comprobar los correos publicados

Se publican los dos que confirmaste: `infoweb@hecisa.com` (información) y `sat@hecisa.com` (asistencia técnica). En los pies de los catálogos PDF aparecen además `sales@hecisa.com` y `central@hecisa.com`; **no se han publicado** por no estar confirmados. Si quieres añadirlos, están en `EMPRESA` dentro de `tools/contenido.mjs`.

Los correos no están escritos en el HTML: se ensamblan en el navegador desde `data-correo="infoweb|hecisa.com"`. Frena a los robots recolectores sin romper la accesibilidad ni el enlace `mailto:` real. Es la versión moderna de lo que el sitio antiguo hacía escondiendo los datos dentro de un JPG.

---

## Despliegue

Sube el contenido de la carpeta tal cual. No hace falta Node en el servidor.

**Página 404.** Configura el servidor para que sirva `/404.html`:

- Apache — crea un `.htaccess` en la raíz:
  ```apache
  ErrorDocument 404 /404.html
  ```
- Nginx:
  ```nginx
  error_page 404 /404.html;
  ```
- Netlify / Vercel / Cloudflare Pages: lo detectan solo.

**Compresión.** Los PDF suman 11 MB pero solo se descargan a petición. El HTML, el CSS y el JS ganan mucho con gzip/brotli activados en el servidor.

**Idiomas.** Las páginas llevan `hreflang` cruzado y `x-default` apuntando al español. El `sitemap.xml` declara las 24 URL con sus alternativas.

---

## Decisiones que conviene conocer

**Los colores son los suyos, no unos nuevos.** El ultramar `#1709b3` está muestreado píxel a píxel del logotipo `logo-14.png` del propio dominio. El oliva `#AAB132` es exactamente el color de los títulos del CSS antiguo y el azul `#85B2DE` era su color de hover. El gris de texto `#4F4F4F` también es suyo.

**El oliva nunca lleva texto pequeño encima en su tono original.** Sobre `#AAB132`, el `#5f640f` de la paleta solo alcanza 2,73:1 de contraste. Por eso existe `--oliva-tinta: #2f3310`, que llega a 5,6:1. Si añades texto sobre un campo oliva, usa esa variable o `--ink`.

**Todo lo técnico sale de sus catálogos.** Caudales, micras, materiales, códigos de diseño, tablas de dimensiones del MFC, rangos de los manómetros: todo está extraído de los 48 PDF que ya publicaba el dominio. No hay ni una cifra inventada. Si un dato no aparecía en un documento de HECISA, no está en la web.

**El sitio funciona sin JavaScript.** Sin JS: el menú móvil no se abre pero todos los enlaces del pie llevan a las mismas páginas; el buscador de serie desaparece pero la gama completa sigue a un clic; el registro de descargas pierde el filtro pero los 48 enlaces siguen ahí; la galería pierde el visor pero las 46 fotos se ven igual.

**Se imprime bien.** Este público imprime hojas para adjuntarlas a expedientes. Hay una hoja de estilo de impresión: se quitan la cabecera, la barra de pulgar y los filtros, se pasa todo a tinta negra sobre blanco, se evitan los cortes dentro de una ficha de serie y las URL de los enlaces externos se imprimen entre paréntesis.

**Accesibilidad.** Contraste AA verificado en las 26 páginas a cuatro anchos. Navegación completa por teclado con foco visible. Objetivos táctiles de 44 px en los controles. `prefers-reduced-motion` respetado. Tablas técnicas con `<th scope>` y desplazamiento horizontal propio para que no rompan la página.

---

## Qué se ha conservado del sitio antiguo

- Los cuatro colores.
- Las 46 fotografías con sus pies originales.
- Los 36 logotipos de cliente.
- Los 48 PDF.
- Los sellos ISO 9001, NCAGE y Chambertrust.
- El claim «Expertos en filtración desde 1984».
- El lema de los catálogos, «La Calidad… como Norma», que en la web anterior no aparecía por ningún lado.
- Las tres noticias de 2016, cada una con su documento de proyecto.

## Qué ha cambiado

- Una sola lengua por página, con conmutador, en vez de español e inglés apilados en la misma celda.
- Maquetación con CSS Grid y Flexbox en vez de tablas anidadas de 700 px fijos.
- Teléfono y correos clicables en vez de escondidos dentro de un JPG.
- Buscador de serie por el código de la placa de características.
- Registro de descargas filtrable por familia y por idioma.
- Páginas de gama con los datos técnicos que antes solo estaban dentro de los PDF.
- `sitemap.xml`, `robots.txt`, `hreflang`, metadatos Open Graph y descripciones por página.

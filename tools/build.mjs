/* ===========================================================================
   HECISA — generador del sitio estático.
   Emite las 13 hojas en español en la raíz y sus 13 equivalentes en inglés
   bajo /en/. Ejecutar:  node tools/build.mjs
   ========================================================================= */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import {
  EMPRESA, NAV, PARES, SERIES, DOCS, GRUPOS_DOC, GALERIA, CLIENTES,
  SECTORES, NOTICIAS, TALLER, INGENIERIA_TEC, GAMA_LISTA, MATERIALES, CODIGOS
} from "./contenido.mjs";

const RAIZ = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const SITIO = "https://www.hecisa.com";

/* ---------------------------------------------------------------- Ayudas */
const t = (v, l) => (v && typeof v === "object" && !Array.isArray(v) ? (v[l] ?? v.es ?? "") : (v ?? ""));
const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const attr = (s) => esc(s).replace(/'/g, "&#39;");

/* Pictogramas dibujados con la gramática del plano: trazo de 1.5, sin relleno */
const ICO = {
  tel: '<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M6.2 2.8H3.4L2.5 5.6c0 6.6 5.3 11.9 11.9 11.9l2.8-.9v-2.8l-3.7-1.4-1.9 1.9a13 13 0 0 1-4.6-4.6l1.9-1.9L6.2 2.8Z"/></svg>',
  correo: '<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><rect x="1.8" y="4" width="16.4" height="12" /><path d="m1.8 4.6 8.2 6.2 8.2-6.2"/></svg>',
  flecha: '<svg viewBox="0 0 16 12" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><path d="M0 6h13.4"/><path d="M9.6 1.8 14.6 6l-5 4.2" fill="currentColor" stroke="none"/></svg>',
  baja: '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M8 1v9"/><path d="m4.4 6.8 3.6 3.8 3.6-3.8" fill="currentColor" stroke="none"/><path d="M1.4 13.6h13.2"/></svg>',
  lupa: '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><circle cx="6.8" cy="6.8" r="5"/><path d="m10.5 10.5 4.2 4.2"/></svg>',
  cerrar: '<svg viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="m1.5 1.5 11 11M12.5 1.5l-11 11"/></svg>',
  chevron: '<svg viewBox="0 0 12 8" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="m1 1.6 5 5 5-5"/></svg>',
  placa: '<svg viewBox="0 0 20 16" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><rect x="1.6" y="1.6" width="16.8" height="12.8"/><circle cx="3.9" cy="3.9" r=".9" fill="currentColor" stroke="none"/><circle cx="16.1" cy="3.9" r=".9" fill="currentColor" stroke="none"/><circle cx="3.9" cy="12.1" r=".9" fill="currentColor" stroke="none"/><circle cx="16.1" cy="12.1" r=".9" fill="currentColor" stroke="none"/><path d="M6.2 6.4h7.6M6.2 9.6h4.8"/></svg>',
  info: '<svg viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><circle cx="9" cy="9" r="7.4"/><path d="M9 8.2v4.6"/><circle cx="9" cy="5.4" r=".95" fill="currentColor" stroke="none"/></svg>',
  mapa: '<svg viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M9 16.4S15 11 15 7A6 6 0 0 0 3 7c0 4 6 9.4 6 9.4Z"/><circle cx="9" cy="7" r="2.2"/></svg>',
  ant: '<svg viewBox="0 0 16 12" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><path d="M16 6H2.6"/><path d="M6.4 1.8 1.4 6l5 4.2" fill="currentColor" stroke="none"/></svg>',
  sig: '<svg viewBox="0 0 16 12" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><path d="M0 6h13.4"/><path d="M9.6 1.8 14.6 6l-5 4.2" fill="currentColor" stroke="none"/></svg>'
};

/* ---------------------------------------------------- Cadenas por idioma */
const S = {
  es: {
    saltar: "Saltar al contenido",
    inicio: "Inicio",
    menu: "Menú",
    cerrar: "Cerrar",
    llamar: "Llamar",
    escribir: "Escribir",
    catalogos: "Catálogos",
    buscarSerie: "Buscar serie…",
    sinResultados: "Ninguna serie coincide. Prueba con HSC, HSBI o MFC.",
    identifica: "Identifica tu equipo",
    identificaTxt: "Si tienes la placa de características delante, teclea el código de serie o pulsa una de las siglas.",
    verSerie: "Ver serie",
    verHoja: "Ver hoja",
    verGama: "Ver la gama completa",
    descargar: "Descargar",
    descargarPDF: "Descargar PDF",
    documentos: "Documentos de esta serie",
    ventajas: "Ventajas",
    modelos: "Modelos",
    caudal: "Caudal",
    filtracion: "Filtración",
    materiales: "Materiales",
    codificacion: "Codificación de pedido",
    ficha: "Ficha técnica",
    volverArriba: "Volver arriba",
    imagen: "Imagen",
    anterior: "Anterior",
    siguiente: "Siguiente",
    cerrarVisor: "Cerrar el visor",
    ampliar: "Ampliar",
    ctaTit: "Cuéntanos el fluido, el caudal y la micra.",
    ctaTxt: "Con esos tres datos y la posición de la tubería, el departamento técnico propone una serie y una ejecución. Si el proceso no encaja en ninguna serie de catálogo, se diseña.",
    ctaBoton: "Pedir oferta técnica",
    ctaTel: "Llamar al +34 916 967 039",
    pieGama: "Gama",
    pieEmpresa: "Empresa",
    pieContacto: "Contacto",
    pieDocs: "Documentación",
    telefono: "Teléfono",
    fax: "Fax",
    direccion: "Dirección",
    correo: "Correo",
    sat: "Asistencia técnica",
    doc: "Documento",
    rev: "Rev.",
    fecha: "Fecha",
    hoja: "Hoja",
    de: "de",
    escala: "Escala",
    todosDerechos: "Todos los derechos reservados.",
    avisoDatos: "Los datos e información de este sitio son de carácter informativo y pueden variar en función de la aplicación particular.",
    filtrarDocs: "Filtrar por familia o idioma",
    buscarDoc: "Buscar en el registro…",
    docsVacio: "No hay documentos que coincidan.",
    docsVacioTxt: "Prueba a quitar el filtro o a buscar por el código de serie.",
    documentosN: "documentos",
    sectores: "Dónde trabajan estos equipos",
    clientes: "Clientes",
    noticias: "Noticias",
    verTodo: "Ver todo",
    verModelo: "Ver documento del proyecto"
  },
  en: {
    saltar: "Skip to content",
    inicio: "Home",
    menu: "Menu",
    cerrar: "Close",
    llamar: "Call",
    escribir: "Email",
    catalogos: "Brochures",
    buscarSerie: "Find a series…",
    sinResultados: "No series matches. Try HSC, HSBI or MFC.",
    identifica: "Identify your equipment",
    identificaTxt: "If you have the nameplate in front of you, type the series code or press one of the codes below.",
    verSerie: "View series",
    verHoja: "Open sheet",
    verGama: "See the full range",
    descargar: "Download",
    descargarPDF: "Download PDF",
    documentos: "Documents for this series",
    ventajas: "Advantages",
    modelos: "Models",
    caudal: "Flow",
    filtracion: "Filtration",
    materiales: "Materials",
    codificacion: "Ordering code",
    ficha: "Technical data",
    volverArriba: "Back to top",
    imagen: "Image",
    anterior: "Previous",
    siguiente: "Next",
    cerrarVisor: "Close the viewer",
    ampliar: "Enlarge",
    ctaTit: "Tell us the fluid, the flow and the micron.",
    ctaTxt: "With those three figures and the pipe position, our technical department proposes a series and an arrangement. If the process fits no catalogue series, it gets designed.",
    ctaBoton: "Request a technical quote",
    ctaTel: "Call +34 916 967 039",
    pieGama: "Range",
    pieEmpresa: "Company",
    pieContacto: "Contact",
    pieDocs: "Documentation",
    telefono: "Phone",
    fax: "Fax",
    direccion: "Address",
    correo: "Email",
    sat: "Technical assistance",
    doc: "Document",
    rev: "Rev.",
    fecha: "Date",
    hoja: "Sheet",
    de: "of",
    escala: "Scale",
    todosDerechos: "All rights reserved.",
    avisoDatos: "Data and information on this site are for reference only and may vary depending on the specific application.",
    filtrarDocs: "Filter by family or language",
    buscarDoc: "Search the register…",
    docsVacio: "No documents match.",
    docsVacioTxt: "Try clearing the filter or searching by series code.",
    documentosN: "documents",
    sectores: "Where this equipment works",
    clientes: "Clients",
    noticias: "News",
    verTodo: "See all",
    verModelo: "Open the project document"
  }
};

/* ------------------------------------------------------------- Estructura */
const PAGINAS = [
  { id: "index", es: "index.html", en: "index.html", nav: null, folio: 1 },
  { id: "gama", es: "gama.html", en: "range.html", nav: "gama", folio: 2 },
  { id: "autolimpiantes", es: "autolimpiantes.html", en: "self-cleaning-filters.html", nav: "autolimpiantes", folio: 3 },
  { id: "filtros", es: "filtros.html", en: "filters.html", nav: "filtros", folio: 4 },
  { id: "mezcladores", es: "mezcladores.html", en: "mixers-instruments.html", nav: "mezcladores", folio: 5 },
  { id: "ingenieria", es: "ingenieria.html", en: "engineering.html", nav: "ingenieria", folio: 6 },
  { id: "empresa", es: "empresa.html", en: "company.html", nav: "empresa", folio: 7 },
  { id: "clientes", es: "clientes.html", en: "clients.html", nav: "empresa", folio: 8 },
  { id: "galeria", es: "galeria.html", en: "gallery.html", nav: "empresa", folio: 9 },
  { id: "descargas", es: "descargas.html", en: "downloads.html", nav: "descargas", folio: 10 },
  { id: "noticias", es: "noticias.html", en: "news.html", nav: "empresa", folio: 11 },
  { id: "contacto", es: "contacto.html", en: "contact.html", nav: "contacto", folio: 12 },
  { id: "404", es: "404.html", en: "404.html", nav: null, folio: 0 }
];
const TOTAL_HOJAS = 12;

const url = (id, l) => {
  const p = PAGINAS.find((x) => x.id === id);
  return p ? p[l] : "index.html";
};

/* Índices de panel para el raíl */
const PANELES = {
  autolimpiantes: (l, r) => [{
    tit: { es: "Filtros autolimpiantes", en: "Self-cleaning filters" },
    items: SERIES.filter((s) => s.familia === "autolimpiantes").map((s) => ({
      cod: s.cod, nom: t(s.nom, l), href: url("autolimpiantes", l) + "#" + s.ancla
    }))
  }, {
    tit: { es: "Por caudal", en: "By flow" },
    items: [
      { cod: "10–3.000", nom: { es: "m³/h · HSBI, rascado", en: "m³/h · HSBI, scraping" }, href: url("autolimpiantes", l) + "#hsbi" },
      { cod: "20–22.000", nom: { es: "m³/h · HSC, contralavado", en: "m³/h · HSC, backflushing" }, href: url("autolimpiantes", l) + "#hsc" },
      { cod: "30–10.000", nom: { es: "m³/h · HSBIL, rascado y succión", en: "m³/h · HSBIL, scraping & suction" }, href: url("autolimpiantes", l) + "#hsbil" },
      { cod: "100–10.000", nom: { es: "m³/h · HSBIA, evacuación hidrodinámica", en: "m³/h · HSBIA, hydrodynamic discharge" }, href: url("autolimpiantes", l) + "#hsbia" }
    ]
  }],
  filtros: (l, r) => [{
    tit: { es: "Manuales y de cartucho", en: "Manual and cartridge" },
    items: SERIES.filter((s) => s.familia === "filtros").map((s) => ({
      cod: s.cod, nom: t(s.nom, l), href: url("filtros", l) + "#" + s.ancla
    }))
  }],
  mezcladores: (l, r) => [{
    tit: { es: "Mezcla e instrumentación", en: "Mixing and instruments" },
    items: SERIES.filter((s) => s.familia === "mezcladores").map((s) => ({
      cod: s.cod === "MEZ" ? (l === "es" ? "Estáticos" : "Static") : s.cod,
      nom: t(s.nom, l), href: url("mezcladores", l) + "#" + s.ancla
    }))
  }],
  empresa: (l, r) => [{
    tit: { es: "La casa", en: "The company" },
    items: [
      { cod: l === "es" ? "1984" : "1984", nom: { es: "Historia, medios y calidad", en: "History, resources and quality" }, href: url("empresa", l) },
      { cod: "36", nom: { es: "Clientes y referencias", en: "Clients and references" }, href: url("clientes", l) },
      { cod: "46", nom: { es: "Galería de equipos", en: "Equipment gallery" }, href: url("galeria", l) },
      { cod: "2016", nom: { es: "Noticias", en: "News" }, href: url("noticias", l) }
    ]
  }]
};

/* Datos del buscador de serie */
function seriesJSON(l, r) {
  const pagina = { autolimpiantes: "autolimpiantes", filtros: "filtros", mezcladores: "mezcladores" };
  const arr = SERIES.map((s) => ({
    cod: s.cod === "MEZ" ? (l === "es" ? "Mezcladores estáticos" : "Static mixers") : s.cod,
    nom: t(s.nom, l),
    busca: [s.cod, t(s.nom, l), s.ancla].join(" "),
    url: url(pagina[s.familia], l) + "#" + s.ancla
  }));
  const extra = [
    { cod: "HFCD", nom: t({ es: "Filtro de cesta doble", en: "Duplex basket filter" }, l), busca: "hfcd cesta doble duplex basket", url: url("filtros", l) + "#hfc" },
    { cod: "HSC-J", nom: t({ es: "Autolimpiante 20–750 m³/h", en: "Self-cleaning 20–750 m³/h" }, l), busca: "hscj", url: url("autolimpiantes", l) + "#hsc" },
    { cod: "HSC2", nom: t({ es: "Autolimpiante hasta 22.000 m³/h", en: "Self-cleaning up to 22,000 m³/h" }, l), busca: "hsc2", url: url("autolimpiantes", l) + "#hsc" },
    { cod: "HSB", nom: t({ es: "Autolimpiante, ver HSBI", en: "Self-cleaning, see HSBI" }, l), busca: "hsb hsbj", url: url("autolimpiantes", l) + "#hsbi" },
    { cod: "HSD", nom: t({ es: "Autolimpiante, ver galería", en: "Self-cleaning, see gallery" }, l), busca: "hsd", url: url("galeria", l) },
    { cod: "HFESP", nom: t({ es: "Filtro de servicio especial", en: "Special service filter" }, l), busca: "hfesp", url: url("filtros", l) + "#ffvg" },
    { cod: "HDA", nom: t({ es: "Sistema de deshidratación", en: "Dehydration system" }, l), busca: "hda", url: url("filtros", l) + "#ffvg" },
    { cod: "MMAG", nom: t({ es: "Filtro oil & gas", en: "Oil & gas filter" }, l), busca: "mmag mmah", url: url("filtros", l) + "#ffvg" }
  ];
  return JSON.stringify([...arr, ...extra]);
}

/* ================================================================ Plantillas */

function cabecera(l, r, activa) {
  const paginaActual = PAGINAS.find((p) => p.id === activa) || PAGINAS[0];

  const pestanas = NAV.map((n) => {
    const activo = n.id === (paginaActual.nav || "");
    const href = n[l].url;
    if (!n.panel) {
      return `        <a class="pestana" href="${href}"${activo ? ' aria-current="page"' : ""}>${esc(n[l].et)}</a>`;
    }
    const cols = PANELES[n.panel](l, r).map((c) => `
            <div class="panel__col">
              <p class="panel__tit">${esc(t(c.tit, l))}</p>
              ${c.items.map((i) => `<a class="panel__enlace" href="${i.href}"><span class="panel__cod">${esc(i.cod)}</span><span>${esc(t(i.nom, l))}</span></a>`).join("\n              ")}
            </div>`).join("");
    return `        <div class="rail__grupo">
          <button class="pestana" type="button" aria-expanded="false" aria-controls="panel-${n.id}"${activo ? ' data-activa="si" aria-current="true"' : ""}>${esc(n[l].et)}<svg class="pestana__flecha" viewBox="0 0 12 8" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="m1 1.6 5 5 5-5"/></svg></button>
          <div class="panel" id="panel-${n.id}" hidden>${cols}
            <p class="panel__pie"><a class="btn" href="${href}">${esc(t({ es: "Abrir la hoja completa", en: "Open the full sheet" }, l))} ${ICO.flecha}</a></p>
          </div>
        </div>`;
  }).join("\n");

  return `<header class="cabecera">
  <div class="cajetin">
    <a class="marca" href="${url("index", l)}" aria-label="${attr(EMPRESA.marca + " — " + t({ es: "inicio", en: "home" }, l))}">
      <img class="marca__logo" src="${r}assets/img/logo-14.png" alt="" width="194" height="74" fetchpriority="high">
      <span class="marca__txt">
        <span class="marca__nombre">${esc(EMPRESA.marca)}</span>
        <span class="marca__lema">${esc(t(EMPRESA.lema, l))}</span>
      </span>
    </a>
    <div class="cajetin__util">
      <div class="buscaserie" data-vacio="${attr(S[l].sinResultados)}">
        <div class="buscaserie__campo">
          ${ICO.lupa}
          <label class="oculto-visual" for="q-serie">${esc(S[l].buscarSerie)}</label>
          <input id="q-serie" type="search" autocomplete="off" spellcheck="false" placeholder="${attr(S[l].buscarSerie)}">
        </div>
        <ul class="buscaserie__lista" hidden></ul>
      </div>
      <p class="idioma" aria-label="${attr(t({ es: "Idioma", en: "Language" }, l))}" style="margin:0">
        <a href="${l === "es" ? "#" : "../" + paginaActual.es}"${l === "es" ? ' aria-current="true"' : ""} hreflang="es"${l === "es" ? ' aria-disabled="true"' : ""}>ES</a>
        <a href="${l === "en" ? "#" : "en/" + paginaActual.en}"${l === "en" ? ' aria-current="true"' : ""} hreflang="en"${l === "en" ? ' aria-disabled="true"' : ""}>EN</a>
      </p>
      <a class="tel-cajetin" href="tel:${EMPRESA.telefonoTel}">${ICO.tel}<span>${esc(EMPRESA.telefono)}</span></a>
      <button class="hamburguesa" type="button" aria-expanded="false" aria-controls="carpeta">
        <span class="hamburguesa__barras"></span>${esc(S[l].menu)}
      </button>
    </div>
  </div>
  <nav class="rail" aria-label="${attr(t({ es: "Principal", en: "Main" }, l))}">
    <div class="rail__inner">
${pestanas}
    </div>
  </nav>
</header>

<div class="carpeta" id="carpeta" hidden>
  <div class="carpeta__barra">
    <span class="marca__nombre">${esc(EMPRESA.marca)}</span>
    <button class="carpeta__cerrar" type="button" data-cierra-carpeta>${ICO.cerrar}${esc(S[l].cerrar)}</button>
  </div>
  <div class="carpeta__cuerpo">
    <nav aria-label="${attr(t({ es: "Principal, móvil", en: "Main, mobile" }, l))}">
${NAV.map((n, i) => {
    const activo = n.id === (paginaActual.nav || "");
    const cols = n.panel ? PANELES[n.panel](l, r) : null;
    return `      <div class="divisor" data-activo="${activo ? "si" : "no"}">
        <div class="divisor__cab">
          <a class="divisor__tab" href="${n[l].url}"><span class="divisor__marca"></span>${esc(n[l].et)}</a>
          ${cols ? `<button class="divisor__abrir" type="button" aria-expanded="false" aria-controls="div-${n.id}" aria-label="${attr(t({ es: "Desplegar", en: "Expand" }, l) + " " + n[l].et)}">${ICO.chevron}</button>` : ""}
        </div>
        ${cols ? `<ul class="divisor__lista" id="div-${n.id}" hidden>
          ${cols.flatMap((c) => c.items).map((it) => `<li><a href="${it.href}"><span class="buscaserie__cod">${esc(it.cod)}</span><span>${esc(t(it.nom, l))}</span></a></li>`).join("\n          ")}
        </ul>` : ""}
      </div>`;
  }).join("\n")}
    </nav>
    <div class="carpeta__util">
      <a class="btn btn--accion" href="tel:${EMPRESA.telefonoTel}">${ICO.tel}${esc(EMPRESA.telefono)}</a>
      <a class="btn" href="#" data-correo="${EMPRESA.correoInfo.join("|")}">${ICO.correo}${esc(S[l].escribir)}</a>
      <a class="btn" href="${l === "es" ? "en/" + paginaActual.en : "../" + paginaActual.es}">${l === "es" ? "English" : "Español"}</a>
    </div>
  </div>
</div>

<nav class="pulgar" aria-label="${attr(t({ es: "Acciones rápidas", en: "Quick actions" }, l))}">
  <a class="principal" href="tel:${EMPRESA.telefonoTel}">${ICO.tel}${esc(S[l].llamar)}</a>
  <a href="#" data-correo="${EMPRESA.correoInfo.join("|")}">${ICO.correo}<span>${esc(S[l].escribir)}</span></a>
  <a href="${url("descargas", l)}">${ICO.baja}${esc(S[l].catalogos)}</a>
</nav>`;
}

function pie(l, r, folio) {
  const anio = new Date().getFullYear();
  const enlaces = (tit, items) => `<div>
        <h2 class="pie__tit">${esc(tit)}</h2>
        <ul>${items.map((i) => `<li><a href="${i[1]}">${esc(i[0])}</a></li>`).join("")}</ul>
      </div>`;

  return `<footer class="pie">
  <div class="pie__inner">
    <div class="pie__rejilla">
      <div>
        <p class="pie__marca">${esc(EMPRESA.marca)}</p>
        <p class="pie__razon">${esc(EMPRESA.razon)}</p>
        <address style="margin-top:1rem">
          ${esc(EMPRESA.calle)}<br>
          ${esc(EMPRESA.cp)} ${esc(EMPRESA.ciudad)} · ${esc(EMPRESA.provincia)} · ${esc(t(EMPRESA.pais, l))}<br>
          <a href="tel:${EMPRESA.telefonoTel}">${esc(EMPRESA.telefono)}</a><br>
          <a href="#" data-correo="${EMPRESA.correoInfo.join("|")}" data-correo-texto></a>
        </address>
        <p class="pie__lema">${esc(t(EMPRESA.motto, l))}</p>
      </div>
      ${enlaces(S[l].pieGama, [
    [t({ es: "Toda la gama", en: "Full range" }, l), url("gama", l)],
    [t({ es: "Filtros autolimpiantes", en: "Self-cleaning filters" }, l), url("autolimpiantes", l)],
    [t({ es: "Cesta, cartucho y coalescentes", en: "Basket, cartridge & coalescers" }, l), url("filtros", l)],
    [t({ es: "Mezcla e instrumentación", en: "Mixing & instruments" }, l), url("mezcladores", l)],
    [t({ es: "Ingeniería personalizada", en: "Custom engineering" }, l), url("ingenieria", l)]
  ])}
      ${enlaces(S[l].pieEmpresa, [
    [t({ es: "La empresa desde 1984", en: "The company since 1984" }, l), url("empresa", l)],
    [t({ es: "Clientes", en: "Clients" }, l), url("clientes", l)],
    [t({ es: "Galería de equipos", en: "Equipment gallery" }, l), url("galeria", l)],
    [t({ es: "Noticias", en: "News" }, l), url("noticias", l)],
    [t({ es: "Contacto y localización", en: "Contact and location" }, l), url("contacto", l)]
  ])}
      ${enlaces(S[l].pieDocs, [
    [t({ es: "Registro de documentos", en: "Document register" }, l), url("descargas", l)],
    [t({ es: "Catálogo general (PDF)", en: "General brochure (PDF)" }, l), r + "assets/pdf/" + (l === "es" ? "Bro-Gen-14-12_es.pdf" : "Filters-gen-14-1_en.pdf")],
    [t({ es: "Certificado ISO 9001", en: "ISO 9001 certificate" }, l), r + "assets/pdf/iso-9001.pdf"],
    [t({ es: "Código NCAGE (OTAN)", en: "NCAGE code (NATO)" }, l), r + "assets/pdf/NCAGE.pdf"],
    [t({ es: "Condiciones generales de venta", en: "General conditions of sale" }, l), r + "assets/pdf/" + (l === "es" ? "CGV-25-es.pdf" : "CGV-V25-en.pdf")],
    [t({ es: "Términos de garantía", en: "Warranty terms" }, l), r + "assets/pdf/" + (l === "es" ? "Terminos-de-garantia-V25.pdf" : "Warranty-conditions-25-en.pdf")]
  ])}
    </div>

    <div class="cajetin-plano">
      <div><span class="et">${esc(S[l].doc)}</span><span class="val">HECISA-WEB-${String(folio).padStart(2, "0")}</span></div>
      <div><span class="et">${esc(S[l].hoja)}</span><span class="val">${String(folio).padStart(2, "0")} / ${TOTAL_HOJAS}</span></div>
      <div><span class="et">${esc(t({ es: "Códigos de diseño", en: "Design codes" }, l))}</span><span class="val">ASME VIII · EN-13445 · PD5500</span></div>
      <div><span class="et">${esc(t({ es: "Calidad", en: "Quality" }, l))}</span><span class="val">ISO 9001 · NCAGE</span></div>
    </div>

    <div class="pie__legal">
      <p style="margin:0">© <span data-anio>${anio}</span> ${esc(EMPRESA.razon)}. ${esc(S[l].todosDerechos)}</p>
      <ul>
        <li>${esc(S[l].avisoDatos)}</li>
      </ul>
    </div>
  </div>
</footer>`;
}

function documento({ l, id, titulo, descripcion, cuerpo, folio, ogImg }) {
  const r = l === "en" ? "../" : "";
  const p = PAGINAS.find((x) => x.id === id);
  const canon = SITIO + "/" + (l === "en" ? "en/" + p.en : p.es);
  const altEs = SITIO + "/" + p.es;
  const altEn = SITIO + "/en/" + p.en;

  return `<!DOCTYPE html>
<html lang="${l}">
<head>
<!--
  ===========================================================================
  CONTRATO DE DIRECCIÓN — HECISA (Hispano Europea de Comercio e Industria)
  THESIS: La web no habla del catálogo: la web ES el catálogo. Cada familia es
    una hoja, el menú son las pestañas de la carpeta de anillas y los 48 PDF
    del dominio dejan de ser adjuntos enterrados para ser el registro
    documental del sitio. Rechaza la página que ship todo fabricante de
    filtración: foto de planta al atardecer, degradado azul encima, titular
    sans en blanco, tres tarjetas con iconito y carrusel de logos.
  OWN-WORLD: Hoja blanca de verdad (#ffffff, nunca crema) de extremo a
    extremo. Tinta ultramar #1709b3 muestreada píxel a píxel del logotipo del
    propio dominio. Oliva #AAB132 como COLOR DE FAMILIA que ocupa campos
    enteros —raíl de pestañas, banda de cabecera de hoja, cajetín— porque en
    una carpeta técnica el color identifica la sección; nunca como acento
    suelto y nunca bajo texto pequeño. Azul #85B2DE donde estaba en el
    original: la referencia cruzada. Saira de eje variable para títulos de
    hoja, siglas de serie y cifras tabulares; Libre Franklin, linaje Franklin
    Gothic de los catálogos de bienes de equipo, para la prosa. Filetes de
    cota con extremo de flecha en lugar de bordes de tarjeta. Pictogramas
    dibujados con la gramática del plano. Ninguna sombra sin desplazamiento,
    ningún cristal, ningún icono de librería.
  STORY: El ingeniero de proyecto ve la gama con sus caudales y micras y se
    lleva el PDF. El mantenedor teclea el código de la placa y llega a su hoja
    en un clic. El comprador internacional cambia a EN y ve NCAGE, ISO 9001 y
    treinta y seis clientes reales.
  FIRST VIEWPORT: Cabecera de hoja con el cajetín a la izquierda y el buscador
    de serie a la derecha con las siglas reales como fichas pulsables; debajo,
    a sangre, la tabla-índice de la gama con serie, caudal, micra y silueta.
    En móvil, barra de pulgar con llamar / escribir / catálogos.
  FORM: "La Hoja de Catálogo", dirección 7 de 7 de la lista propia, sin
    staging dealt (tirada degradada: el servicio de retadores no respondió y
    no hubo cartas de catálogo). Semilla 8d1fcfc9.
  ===========================================================================
-->
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>${esc(titulo)}</title>
<meta name="description" content="${attr(descripcion)}">
<meta name="author" content="${attr(EMPRESA.razon)}">
<meta name="theme-color" content="#ffffff">
<link rel="canonical" href="${canon}">
<link rel="alternate" hreflang="es" href="${altEs}">
<link rel="alternate" hreflang="en" href="${altEn}">
<link rel="alternate" hreflang="x-default" href="${altEs}">
<meta property="og:type" content="website">
<meta property="og:locale" content="${l === "es" ? "es_ES" : "en_GB"}">
<meta property="og:site_name" content="HECISA">
<meta property="og:title" content="${attr(titulo)}">
<meta property="og:description" content="${attr(descripcion)}">
<meta property="og:url" content="${canon}">
<meta property="og:image" content="${SITIO}/${ogImg || "assets/img/galeria/galeria01.jpg"}">
<meta name="twitter:card" content="summary_large_image">
<link rel="icon" href="${r}assets/img/favicon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="${r}assets/img/logo-14.png">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Libre+Franklin:wght@300..800&family=Saira:wdth,wght@62..125,300..900&display=swap">
<link rel="stylesheet" href="${r}assets/css/style.css">
<script>document.documentElement.className+=" js";</script>
</head>
<body>

<a class="salta-al-contenido" href="#principal">${esc(S[l].saltar)}</a>

${cabecera(l, r, id)}

<main id="principal">
${cuerpo}
</main>

${pie(l, r, folio)}

<script>window.HECISA_SERIES=${seriesJSON(l, r)};</script>
<script src="${r}assets/js/main.js" defer></script>
</body>
</html>
`;
}

/* ------------------------------------------------------- Piezas reusables */

function hojaCab(l, r, { ruta, tit, entrada, meta, folio }) {
  return `<header class="hoja__cab">
  ${ruta ? `<ol class="hoja__ruta">
    <li><a href="${url("index", l)}">${esc(S[l].inicio)}</a></li>
    ${ruta.map((x) => (x[1] ? `<li><a href="${x[1]}">${esc(x[0])}</a></li>` : `<li>${esc(x[0])}</li>`)).join("\n    ")}
  </ol>` : ""}
  <h1 class="hoja__tit">${tit}</h1>
  ${entrada ? `<p class="hoja__entrada">${entrada}</p>` : ""}
  <p class="hoja__pie-cab">
    ${(meta || []).map((m) => `<span>${esc(m)}</span>`).join("\n    ")}
    <span>${esc(S[l].hoja)} ${String(folio).padStart(2, "0")} ${esc(S[l].de)} ${TOTAL_HOJAS}</span>
  </p>
</header>`;
}

function bandaCTA(l, r) {
  return `<section class="ultra-banda">
  <div class="ultra-banda__inner">
    <div>
      <h2>${esc(S[l].ctaTit)}</h2>
      <p>${esc(S[l].ctaTxt)}</p>
      <p class="ultra-banda__acciones" style="margin-top:1.5rem">
        <a class="btn btn--solido-claro" href="${url("contacto", l)}">${esc(S[l].ctaBoton)} ${ICO.flecha}</a>
        <a class="btn btn--claro" href="tel:${EMPRESA.telefonoTel}">${ICO.tel}${esc(S[l].ctaTel)}</a>
      </p>
    </div>
    <div>
      <ul class="ultra-lista" style="list-style:none;margin:0;padding:0">
        <li><span class="et">${esc(t({ es: "Formularios", en: "Forms" }, l))}</span><span class="val"><a href="${r}assets/pdf/${l === "es" ? "Formulario_filtracion_liquidos_1.1.pdf" : "Form_Liquids_filtration_1.1.pdf"}">${esc(t({ es: "Filtración de líquidos", en: "Liquids filtration" }, l))}</a></span></li>
        <li><span class="et">&nbsp;</span><span class="val"><a href="${r}assets/pdf/${l === "es" ? "Formulario_filtracion_gases_1.1.pdf" : "Form_Gases_filtration_1.1.pdf"}">${esc(t({ es: "Filtración de gases", en: "Gases filtration" }, l))}</a></span></li>
        <li><span class="et">&nbsp;</span><span class="val"><a href="${r}assets/pdf/${l === "es" ? "Formulario_mezcla_de_fluidos_1.1.pdf" : "Form_Fluids_mixing_1.1.pdf"}">${esc(t({ es: "Mezcla de fluidos", en: "Fluids mixing" }, l))}</a></span></li>
        <li><span class="et">${esc(S[l].sat)}</span><span class="val"><a href="#" data-correo="${EMPRESA.correoSat.join("|")}" data-correo-texto></a></span></li>
      </ul>
    </div>
  </div>
</section>`;
}

function docsDeSerie(l, r, serie) {
  if (!serie.docs || !serie.docs.length) return "";
  const filas = serie.docs.map((f) => {
    const d = DOCS.find((x) => x.f === f);
    if (!d) return "";
    return `    <a class="doc" href="${r}assets/pdf/${encodeURI(f)}" download>
      <span class="doc__ext">PDF</span>
      <span class="doc__nom">${esc(t(d.t, l))}</span>
      <span class="doc__meta"><span class="doc__idioma">${d.idi.toUpperCase()}</span><span class="doc__peso">${d.kb} kB</span></span>
      <span class="doc__baja">${ICO.baja}${esc(S[l].descargar)}</span>
    </a>`;
  }).join("\n");
  return `  <div style="margin-top:2rem">
    <p class="et-tec" style="margin-bottom:.5rem">${esc(S[l].documentos)}</p>
    <div class="registro">
${filas}
    </div>
  </div>`;
}

function hojaSerie(l, r, s) {
  const cod = s.cod === "MEZ" ? t({ es: "Mezcladores estáticos", en: "Static mixers" }, l) : s.cod;
  const modelos = s.modelos ? `
    <div class="tabla-envoltorio" style="margin-top:1.5rem">
      <table class="tabla">
        <caption>${esc(S[l].modelos)} · ${esc(cod)}</caption>
        <thead><tr><th scope="col">${esc(t({ es: "Modelo", en: "Model" }, l))}</th><th scope="col">${esc(t({ es: "Tamaños", en: "Sizes" }, l))}</th><th scope="col">${esc(S[l].caudal)}</th><th scope="col">${esc(S[l].filtracion)}</th></tr></thead>
        <tbody>
${s.modelos.map((m) => `          <tr><th scope="row" class="cod">${esc(m.m)}</th><td>${esc(t(m.t, l))}</td><td>${esc(t(m.q, l)) || "—"}</td><td>${esc(t(m.g, l))}</td></tr>`).join("\n")}
        </tbody>
      </table>
    </div>
${s.modelos.some((m) => t(m.mat, l)) ? `    <p class="tabla-nota">${esc(S[l].materiales)}: ${esc(t(s.modelos[0].mat, l))}.</p>` : ""}` : "";

  const tabla = s.tabla ? `
    <div class="tabla-envoltorio" style="margin-top:1.5rem">
      <table class="tabla">
        <caption>${esc(t({ es: "Datos de diseño", en: "Design data" }, l))} · ${esc(cod)}</caption>
        <thead><tr>${t(s.tabla.cab, l).map((c) => `<th scope="col">${esc(c)}</th>`).join("")}</tr></thead>
        <tbody>
${s.tabla.filas.map((f) => `          <tr>${f.map((c, i) => (i === 0 ? `<th scope="row" class="cod">${esc(t(c, l))}</th>` : `<td>${esc(t(c, l))}</td>`)).join("")}</tr>`).join("\n")}
        </tbody>
      </table>
    </div>
    <p class="tabla-nota">${esc(t(s.tabla.pie, l))}</p>` : "";

  const ficha = s.ficha ? `
    <div class="tabla-envoltorio" style="margin-top:1.5rem">
      <table class="tabla">
        <caption>${esc(S[l].ficha)} · ${esc(cod)}</caption>
        <tbody>
${s.ficha.map((f) => `          <tr><th scope="row">${esc(t(f.k, l))}</th><td>${esc(t(f.v, l))}</td></tr>`).join("\n")}
        </tbody>
      </table>
    </div>` : "";

  const mecanismos = s.mecanismos ? `
    <div class="rejilla-3" style="margin-top:1.5rem">
${s.mecanismos.map((m) => `      <div class="bloque">
        <h4 class="bloque__tit">${esc(t(m.t, l))}</h4>
        <p>${esc(t(m.d, l))}</p>
      </div>`).join("\n")}
    </div>` : "";

  const codificacion = s.codificacion ? `
    <div style="margin-top:1.5rem">
      <p class="et-tec" style="margin-bottom:.5rem">${esc(S[l].codificacion)}</p>
      <p style="font-family:var(--serie);font-weight:700;font-size:1.05rem;letter-spacing:.02em;color:var(--ultra);margin-bottom:.75rem">${esc(t(s.codificacion, l).split("·")[0].trim())}</p>
      <div class="tabla-envoltorio">
        <table class="tabla">
          <tbody>
${(s.opciones || []).map((o) => `            <tr><th scope="row">${esc(t(o.et, l))}</th><td>${esc(t(o.v, l))}</td></tr>`).join("\n")}
          </tbody>
        </table>
      </div>
    </div>` : "";

  return `<article class="serie" id="${s.ancla}">
  <div class="serie__cab">
    <div>
      <span class="serie__cod">${esc(cod)}</span>
      <span class="serie__nom">${esc(t(s.nom, l))}</span>
      <p class="serie__resumen">${esc(t(s.resumen, l))}</p>
      <p class="cota" style="max-width:32rem">
        <span class="cota__val">${esc(S[l].caudal)} ${esc(t(s.caudal, l))}</span>
      </p>
      <p class="cota" style="max-width:32rem;margin-top:-.75rem">
        <span class="cota__val">${esc(S[l].filtracion)} ${esc(t(s.micras, l))}</span>
      </p>
    </div>
    <figure class="serie__foto" style="margin:0">
      <img src="${r}${s.img}" alt="${attr(t(s.nom, l) + " " + cod)}" loading="lazy" width="160" height="120">
      <figcaption>${esc(cod)}</figcaption>
    </figure>
  </div>

  <div class="serie__cuerpo">
    <div>
      ${s.ventajas ? `<p class="et-tec" style="margin-bottom:.6rem">${esc(S[l].ventajas)}</p>
      <ul class="ventajas">
${t(s.ventajas, l).map((v) => `        <li>${esc(v)}</li>`).join("\n")}
      </ul>` : ""}
    </div>
    <figure style="margin:0">
      <img src="${r}${s.foto}" alt="${attr(t(s.nom, l))}" loading="lazy" width="400" height="278" style="border:1.5px solid var(--ink);width:100%">
      <figcaption class="et-tec" style="margin-top:.5rem">${esc(t({ es: "Equipo en servicio", en: "Equipment in service" }, l))}</figcaption>
    </figure>
  </div>
${modelos}${ficha}${tabla}${mecanismos}${codificacion}
${docsDeSerie(l, r, s)}
</article>`;
}

/* ============================================================ LAS HOJAS */

function paginaInicio(l) {
  const r = l === "en" ? "../" : "";
  const destacadas = [
    SERIES.find((s) => s.cod === "HSC"),
    SERIES.find((s) => s.cod === "HSBI"),
    SERIES.find((s) => s.cod === "HSBIL"),
    SERIES.find((s) => s.cod === "HSBIA"),
    SERIES.find((s) => s.cod === "HFC"),
    SERIES.find((s) => s.cod === "HDF"),
    SERIES.find((s) => s.cod === "MEZ"),
    SERIES.find((s) => s.cod === "MFC")
  ];
  const paginaDe = { autolimpiantes: "autolimpiantes", filtros: "filtros", mezcladores: "mezcladores" };

  const siglas = ["HSC", "HSBI", "HSBIL", "HSBIA", "HFC", "HDF", "HFX", "MFC", "DPG"];

  const cuerpo = `<section class="apertura">
  <div class="apertura__inner">
    <div>
      <p class="apertura__sello">${esc(t({ es: "Fabricación propia · Getafe, Madrid", en: "Own manufacture · Getafe, Madrid" }, l))}</p>
      <h1 class="apertura__tit">${l === "es"
      ? 'El filtro se limpia. <em>El proceso no se para.</em>'
      : 'The filter cleans itself. <em>The process never stops.</em>'}</h1>
      <p class="apertura__sub">${esc(t({
        es: "HECISA diseña y fabrica filtros autolimpiantes, filtros industriales, sistemas de filtración y mezcladores estáticos para todo tipo de aplicaciones. Desde 1984, con equipos en servicio en todo el mundo.",
        en: "HECISA designs and manufactures self-cleaning filters, industrial filters, filtration systems and static mixers for all kinds of applications. Since 1984, with equipment in service around the world."
      }, l))}</p>
      <p class="apertura__acciones">
        <a class="btn btn--accion" href="${url("gama", l)}">${esc(S[l].verGama)} ${ICO.flecha}</a>
        <a class="btn" href="${r}assets/pdf/${l === "es" ? "Bro-Gen-14-12_es.pdf" : "Filters-gen-14-1_en.pdf"}" download>${ICO.baja}${esc(t({ es: "Catálogo general · PDF 762 kB", en: "General brochure · PDF 851 kB" }, l))}</a>
      </p>
    </div>

    <div class="identifica">
      <p class="identifica__cab">${ICO.placa}${esc(S[l].identifica)}</p>
      <div class="identifica__cuerpo">
        <p>${esc(S[l].identificaTxt)}</p>
        <ul class="siglas">
${siglas.map((c) => {
        const s = SERIES.find((x) => x.cod === c) || SERIES.find((x) => x.cod.startsWith(c));
        const href = s ? url(paginaDe[s.familia], l) + "#" + s.ancla : url("gama", l);
        return `          <li><a class="sigla" href="${href}">${esc(c)}</a></li>`;
      }).join("\n")}
        </ul>
      </div>
    </div>
  </div>
</section>

<div class="envoltorio">
<div class="hoja hoja--ancha">
  <div class="tira" style="padding-top:var(--s7);padding-bottom:var(--s8)">

    <section class="seccion" style="padding-top:0">
      <div class="seccion__cab">
        <h2 class="seccion__tit">${esc(t({ es: "La gama, de un vistazo", en: "The range at a glance" }, l))}</h2>
        <p class="seccion__nota">${esc(t({ es: "Caudal · grado de filtración · serie", en: "Flow · filtration grade · series" }, l))}</p>
      </div>

      <div class="indice">
${destacadas.map((s) => `        <a class="indice__fila" href="${url(paginaDe[s.familia], l)}#${s.ancla}">
          <img class="indice__img" src="${r}${s.img}" alt="" loading="lazy" width="160" height="120">
          <span class="indice__ident">
            <span class="indice__cod">${esc(s.cod === "MEZ" ? (l === "es" ? "Estáticos" : "Static") : s.cod)}</span>
            <span class="indice__nom">${esc(t(s.nom, l))}</span>
          </span>
          <span class="indice__datos">
            <span class="dato"><span class="dato__val">${esc(t(s.caudal, l))}</span><span class="dato__et">${esc(S[l].caudal)}</span></span>
            <span class="dato"><span class="dato__val">${esc(t(s.micras, l))}</span><span class="dato__et">${esc(S[l].filtracion)}</span></span>
          </span>
          <span class="indice__ver">${esc(S[l].verHoja)}${ICO.flecha}</span>
        </a>`).join("\n")}
      </div>
      <p class="tabla-nota" style="margin-top:1rem"><a href="${url("gama", l)}">${esc(t({ es: "Ver las 29 líneas de producto del catálogo completo", en: "See all 29 product lines in the full catalogue" }, l))}</a></p>
    </section>

    <section class="seccion">
      <div class="seccion__cab">
        <h2 class="seccion__tit">${esc(t({ es: "Lo que hay detrás de Calidad 24", en: "What sits behind Calidad 24" }, l))}</h2>
        <p class="seccion__nota">${esc(t({ es: "Taller propio", en: "In-house workshop" }, l))}</p>
      </div>
      <div class="rejilla-2">
        <div>
          <p class="seccion__intro" style="margin-bottom:1.5rem">${esc(t({
        es: "HECISA no ensambla equipos de terceros: los fabrica. La planta de Getafe tiene 2.000 m² construidos, de los que 1.500 son zona de producción, con rolado hasta 40 mm de espesor, nueve equipos de soldadura, soldadura orbital automática y banco de pruebas hidráulico hasta 400 bar.",
        en: "HECISA does not assemble third-party equipment: it manufactures it. The Getafe plant has 2,000 m² built, 1,500 of them production floor, with rolling up to 40 mm thick, nine welding assemblies, automatic orbital welding and a hydraulic test bench up to 400 bar."
      }, l))}</p>
          <p><a class="btn" href="${url("ingenieria", l)}">${esc(t({ es: "Ver medios de fabricación", en: "See manufacturing resources" }, l))} ${ICO.flecha}</a></p>
        </div>
        <div class="cifras">
          <div class="cifra"><span class="cifra__val">2.000 <small>m²</small></span><span class="cifra__et">${esc(t({ es: "Superficie construida", en: "Built area" }, l))}</span></div>
          <div class="cifra"><span class="cifra__val">400 <small>bar</small></span><span class="cifra__et">${esc(t({ es: "Banco de pruebas hidráulico", en: "Hydraulic test bench" }, l))}</span></div>
          <div class="cifra"><span class="cifra__val">40 <small>mm</small></span><span class="cifra__et">${esc(t({ es: "Espesor máximo de rolado", en: "Max. rolling thickness" }, l))}</span></div>
          <div class="cifra"><span class="cifra__val">10 <small>Tm</small></span><span class="cifra__et">${esc(t({ es: "Puente grúa", en: "Travel crane" }, l))}</span></div>
        </div>
      </div>
    </section>

    <section class="seccion">
      <div class="seccion__cab">
        <h2 class="seccion__tit">${esc(S[l].sectores)}</h2>
        <p class="seccion__nota">${esc(t({ es: "Aplicaciones de catálogo", en: "Catalogue applications" }, l))}</p>
      </div>
      <div class="rejilla-2">
        <ul class="lista-plana columnas" style="font-size:var(--t-peq);color:var(--gris)">
${t(SECTORES, l).map((x) => `          <li>${esc(x)}</li>`).join("\n")}
        </ul>
        <div>
          <div class="plancha" style="grid-template-columns:repeat(2,minmax(0,1fr))">
${[23, 46, 12, 41].map((n) => {
        const i = n - 1;
        const nn = String(n).padStart(2, "0");
        return `            <figure class="placa"><img src="${r}assets/img/galeria/galeria${nn}.jpg" alt="${attr(t(GALERIA[i], l))}" loading="lazy" width="400" height="278"><figcaption><span class="placa__n">${nn}</span>${esc(t(GALERIA[i], l))}</figcaption></figure>`;
      }).join("\n")}
          </div>
          <p style="margin-top:1rem"><a class="btn" href="${url("galeria", l)}">${esc(t({ es: "Ver las 46 fotografías", en: "See all 46 photographs" }, l))} ${ICO.flecha}</a></p>
        </div>
      </div>
    </section>

    <section class="seccion">
      <div class="seccion__cab">
        <h2 class="seccion__tit">${esc(t({ es: "Códigos, calidad y homologación", en: "Codes, quality and approvals" }, l))}</h2>
        <p class="seccion__nota">${esc(t({ es: "Sistema de calidad desde 1989", en: "Quality system since 1989" }, l))}</p>
      </div>
      <div class="rejilla-2">
        <div class="tabla-envoltorio">
          <table class="tabla">
            <tbody>
${CODIGOS.map((c) => `              <tr><th scope="row">${esc(c.c)}</th><td>${esc(t(c.d, l))}</td></tr>`).join("\n")}
            </tbody>
          </table>
        </div>
        <div>
          <p style="font-size:var(--t-peq);color:var(--gris)">${esc(t({
        es: "Todos los procedimientos de soldadura y todos los soldadores están normalizados y cualificados según el código ASME IX y la directiva europea de equipos a presión. El sistema de calidad se implantó en 1989.",
        en: "All welding procedures, as well as our welders, are standardised and qualified according to ASME Code IX and the European pressure equipment directive. The quality system was implanted in 1989."
      }, l))}</p>
          <ul class="sellos" style="margin-top:1.5rem">
            <li><a href="${r}assets/pdf/iso-9001.pdf"><img src="${r}assets/img/marcas/ISO9001.jpg" alt="ISO 9001" loading="lazy" width="120" height="90"></a></li>
            <li><a href="${r}assets/pdf/NCAGE.pdf"><img src="${r}assets/img/marcas/NATO.jpg" alt="NCAGE / NATO" loading="lazy" width="120" height="90"></a></li>
            <li><img src="${r}assets/img/marcas/Chambertrust.gif" alt="Chambertrust" loading="lazy" width="120" height="60"></li>
          </ul>
        </div>
      </div>
    </section>

    <section class="seccion">
      <div class="seccion__cab">
        <h2 class="seccion__tit">${esc(t({ es: "Han instalado equipos HECISA", en: "They have installed HECISA equipment" }, l))}</h2>
        <p class="seccion__nota"><a href="${url("clientes", l)}">${esc(S[l].verTodo)}</a></p>
      </div>
      <ul class="muro">
${CLIENTES.slice(0, 18).map(([f, n]) => `        <li><img src="${r}assets/img/clientes/${f}" alt="${attr(n)}" loading="lazy" width="150" height="80"></li>`).join("\n")}
      </ul>
    </section>

    <section class="seccion">
      <div class="seccion__cab">
        <h2 class="seccion__tit">${esc(S[l].noticias)}</h2>
        <p class="seccion__nota"><a href="${url("noticias", l)}">${esc(S[l].verTodo)}</a></p>
      </div>
      <div class="noticias">
${NOTICIAS.map((n) => `        <article class="noticia">
          <p class="noticia__fecha">${esc(t(n.fechaEt, l))}</p>
          <div>
            <h3>${esc(t(n.t, l))}</h3>
            <p>${esc(t(n.d, l))}</p>
            <p style="margin-top:.75rem"><a class="doc__baja" href="${r}assets/pdf/${encodeURI(l === "en" && n.pdfEn ? n.pdfEn : n.pdf)}">${ICO.baja}${esc(S[l].verModelo)}</a></p>
          </div>
        </article>`).join("\n")}
      </div>
    </section>

  </div>
</div>
</div>

${bandaCTA(l, r)}`;

  return documento({
    l, id: "index", folio: 1, cuerpo,
    titulo: t({
      es: "HECISA — Filtros autolimpiantes y filtración industrial desde 1984",
      en: "HECISA — Self-cleaning filters and industrial filtration since 1984"
    }, l),
    descripcion: t({
      es: "Diseño y fabricación en Getafe (Madrid) de filtros autolimpiantes, filtros industriales, sistemas de filtración y mezcladores estáticos. Caudales de 10 a 22.000 m³/h y filtración desde 5 micras. ASME VIII, EN-13445, ISO 9001.",
      en: "Design and manufacture in Getafe (Madrid) of self-cleaning filters, industrial filters, filtration systems and static mixers. Flows from 10 to 22,000 m³/h and filtration from 5 microns. ASME VIII, EN-13445, ISO 9001."
    }, l)
  });
}

function paginaGama(l) {
  const r = l === "en" ? "../" : "";
  const paginaDe = { autolimpiantes: "autolimpiantes", filtros: "filtros", mezcladores: "mezcladores" };
  const familias = [
    { id: "autolimpiantes", tit: { es: "Filtros autolimpiantes", en: "Self-cleaning filters" } },
    { id: "filtros", tit: { es: "Cesta, cartucho y coalescentes", en: "Basket, cartridge and coalescers" } },
    { id: "mezcladores", tit: { es: "Mezcla e instrumentación", en: "Mixing and instrumentation" } }
  ];

  const cuerpo = `<div class="envoltorio">
<div class="hoja hoja--ancha">
${hojaCab(l, r, {
    ruta: [[t({ es: "Gama", en: "Range" }, l), null]],
    tit: esc(t({ es: "Toda la gama, serie por serie", en: "The whole range, series by series" }, l)),
    entrada: esc(t({
      es: "Trece series de catálogo y veintinueve líneas de producto. Si sabes el código que llevas en la placa, búscalo arriba; si no, empieza por el caudal.",
      en: "Thirteen catalogue series and twenty-nine product lines. If you know the code on your nameplate, search for it above; if not, start from the flow."
    }, l)),
    meta: [t({ es: "13 series", en: "13 series" }, l), t({ es: "10 – 22.000 m³/h", en: "10 – 22,000 m³/h" }, l), t({ es: "desde 1 µm", en: "from 1 µm" }, l)],
    folio: 2
  })}
  <div class="tira" style="padding-top:var(--s7);padding-bottom:var(--s8)">

${familias.map((fam) => `    <section class="seccion" ${fam.id === "autolimpiantes" ? 'style="padding-top:0"' : ""}>
      <div class="seccion__cab">
        <h2 class="seccion__tit">${esc(t(fam.tit, l))}</h2>
        <p class="seccion__nota"><a href="${url(fam.id, l)}">${esc(t({ es: "Abrir la hoja", en: "Open the sheet" }, l))}</a></p>
      </div>
      <div class="indice">
${SERIES.filter((s) => s.familia === fam.id).map((s) => `        <a class="indice__fila" href="${url(paginaDe[s.familia], l)}#${s.ancla}">
          <img class="indice__img" src="${r}${s.img}" alt="" loading="lazy" width="160" height="120">
          <span class="indice__ident">
            <span class="indice__cod">${esc(s.cod === "MEZ" ? (l === "es" ? "Estáticos" : "Static") : s.cod)}</span>
            <span class="indice__nom">${esc(t(s.nom, l))}</span>
          </span>
          <span class="indice__desc">${esc(t(s.resumen, l).split(". ")[0])}.</span>
          <span class="indice__ver">${esc(S[l].verHoja)}${ICO.flecha}</span>
        </a>`).join("\n")}
      </div>
    </section>`).join("\n\n")}

    <section class="seccion">
      <div class="seccion__cab">
        <h2 class="seccion__tit">${esc(t({ es: "Lista completa de productos", en: "Complete product list" }, l))}</h2>
        <p class="seccion__nota">${esc(t({ es: "Del catálogo general", en: "From the general brochure" }, l))}</p>
      </div>
      <p class="seccion__intro">${esc(t({
    es: "Además de las series con catálogo propio, HECISA construye por encargo estas líneas de producto, en todo tipo de aleaciones y metales especiales.",
    en: "Besides the series with their own brochure, HECISA builds these product lines to order, in all kinds of alloys and special metals."
  }, l))}</p>
      <ul class="lista-plana columnas" style="font-size:var(--t-peq);color:var(--gris)">
${t(GAMA_LISTA, l).map((x) => `        <li>${esc(x)}</li>`).join("\n")}
      </ul>
    </section>

    <section class="seccion">
      <div class="seccion__cab">
        <h2 class="seccion__tit">${esc(t({ es: "Materiales de construcción", en: "Construction materials" }, l))}</h2>
        <p class="seccion__nota">${esc(t({ es: "Del acero al carbono al titanio", en: "From carbon steel to titanium" }, l))}</p>
      </div>
      <p class="seccion__intro">${esc(t({
    es: "El agua de mar, las soluciones ácidas y el servicio naval no se resuelven con inoxidable estándar. Estos son los materiales que aparecen en los catálogos de HECISA para aplicaciones con fluidos agresivos.",
    en: "Seawater, acid solutions and marine service are not solved with standard stainless steel. These are the materials that appear in HECISA catalogues for aggressive fluid applications."
  }, l))}</p>
      <ul class="siglas">
${MATERIALES.map((m) => `        <li><span class="sigla" style="cursor:default">${esc(t(m, l))}</span></li>`).join("\n")}
      </ul>
    </section>

  </div>
</div>
</div>

${bandaCTA(l, r)}`;

  return documento({
    l, id: "gama", folio: 2, cuerpo,
    titulo: t({ es: "Gama completa de filtros y equipos — HECISA", en: "Complete range of filters and equipment — HECISA" }, l),
    descripcion: t({
      es: "Las trece series de catálogo de HECISA y las veintinueve líneas de producto: autolimpiantes HSC, HSBI, HSBIA y HSBIL, cesta HFC, cartucho HDF y HFX, coalescentes, mezcladores estáticos, MFC e instrumentación.",
      en: "HECISA's thirteen catalogue series and twenty-nine product lines: HSC, HSBI, HSBIA and HSBIL self-cleaning filters, HFC baskets, HDF and HFX cartridges, coalescers, static mixers, MFC and instrumentation."
    }, l)
  });
}

function paginaFamilia(l, famId, folio, meta) {
  const r = l === "en" ? "../" : "";
  const lista = SERIES.filter((s) => s.familia === famId);
  const cuerpo = `<div class="envoltorio">
<div class="hoja">
${hojaCab(l, r, {
    ruta: [[t({ es: "Gama", en: "Range" }, l), url("gama", l)], [t(meta.ruta, l), null]],
    tit: esc(t(meta.tit, l)),
    entrada: esc(t(meta.entrada, l)),
    meta: t(meta.meta, l),
    folio
  })}
  <div class="tira" style="padding-top:var(--s7);padding-bottom:var(--s8)">
${lista.map((s) => hojaSerie(l, r, s)).join("\n\n")}
  </div>
</div>
</div>

${bandaCTA(l, r)}`;

  return documento({
    l, id: famId, folio, cuerpo,
    titulo: t(meta.title, l),
    descripcion: t(meta.desc, l),
    ogImg: lista[0].foto
  });
}

function paginaIngenieria(l) {
  const r = l === "en" ? "../" : "";
  const pasos = {
    es: [
      ["Definir los objetivos", "Se fijan con el cliente los objetivos del proceso, sin ambigüedad."],
      ["Analizar el fluido", "Análisis del fluido y de los sólidos que arrastra, en laboratorio."],
      ["Desarrollar la solución", "Ingeniería del sistema, diseño del equipo y cálculo según código."],
      ["Construir y probar", "Fabricación en taller propio y prueba en banco antes de salir."]
    ],
    en: [
      ["Define the objectives", "Clear process objectives are defined together with the customer."],
      ["Analyse the fluid", "Laboratory analysis of the fluid and of the solids it carries."],
      ["Develop the solution", "System engineering, equipment design and code calculation."],
      ["Build and test", "Manufacture in our own workshop and bench testing before it ships."]
    ]
  };

  const cuerpo = `<div class="envoltorio">
<div class="hoja">
${hojaCab(l, r, {
    ruta: [[t({ es: "Ingeniería", en: "Engineering" }, l), null]],
    tit: esc(t({ es: "De la muestra al proceso", en: "From sample to process" }, l)),
    entrada: esc(t({
      es: "En muchos casos el proceso de filtración todavía no se ha desarrollado para una aplicación concreta. HECISA tiene el know-how, el laboratorio y el equipo de ingeniería para tomar una idea y convertirla en una solución específica.",
      en: "In many cases the filtration process has not yet been developed for a specific application. HECISA has the know-how, the laboratory and the engineering team to take an idea and turn it into a specific solution."
    }, l)),
    meta: [t({ es: "Ingeniería personalizada", en: "Custom engineered systems" }, l), t({ es: "Fabricación propia", en: "In-house manufacture" }, l)],
    folio: 6
  })}
  <div class="tira" style="padding-top:var(--s7);padding-bottom:var(--s8)">

    <section class="seccion" style="padding-top:0">
      <div class="seccion__cab">
        <h2 class="seccion__tit">${esc(t({ es: "Desarrollo personalizado del proceso", en: "Customised process development" }, l))}</h2>
        <p class="seccion__nota">${esc(t({ es: "Cuatro pasos", en: "Four steps" }, l))}</p>
      </div>
      <div class="rejilla-2">
${pasos[l].map(([tit, d], i) => `        <div class="bloque">
          <h3 class="bloque__tit">${esc(tit)}</h3>
          <p>${esc(d)}</p>
        </div>`).join("\n")}
      </div>
      <p style="margin-top:1.5rem"><a class="btn" href="${r}assets/pdf/Custom_Engineered_Systems.pdf" download>${ICO.baja}${esc(t({ es: "Ingeniería personalizada · PDF 207 kB", en: "Custom Engineered Systems · PDF 207 kB" }, l))}</a></p>
    </section>

    <section class="seccion">
      <div class="seccion__cab">
        <h2 class="seccion__tit">${esc(t({ es: "Medios de producción", en: "Production resources" }, l))}</h2>
        <p class="seccion__nota">${esc(t({ es: "1.500 m² de taller", en: "1,500 m² workshop" }, l))}</p>
      </div>
      <div class="cifras" style="margin-bottom:2rem">
        <div class="cifra"><span class="cifra__val">2.350 <small>m²</small></span><span class="cifra__et">${esc(t({ es: "Parcela", en: "Plot" }, l))}</span></div>
        <div class="cifra"><span class="cifra__val">2.000 <small>m²</small></span><span class="cifra__et">${esc(t({ es: "Construido", en: "Built" }, l))}</span></div>
        <div class="cifra"><span class="cifra__val">1.500 <small>m²</small></span><span class="cifra__et">${esc(t({ es: "Zona de producción", en: "Production zone" }, l))}</span></div>
        <div class="cifra"><span class="cifra__val">500 <small>m²</small></span><span class="cifra__et">${esc(t({ es: "Oficinas y servicios", en: "Offices and services" }, l))}</span></div>
      </div>
      <ul class="lista-plana columnas" style="font-size:var(--t-peq);color:var(--gris)">
${t(TALLER, l).map((x) => `        <li>${esc(x)}</li>`).join("\n")}
      </ul>
    </section>

    <section class="seccion">
      <div class="seccion__cab">
        <h2 class="seccion__tit">${esc(t({ es: "Medios técnicos", en: "Technical resources" }, l))}</h2>
        <p class="seccion__nota">${esc(t({ es: "Oficina técnica", en: "Technical office" }, l))}</p>
      </div>
      <ul class="lista-plana columnas" style="font-size:var(--t-peq);color:var(--gris)">
${t(INGENIERIA_TEC, l).map((x) => `        <li>${esc(x)}</li>`).join("\n")}
      </ul>
    </section>

    <section class="seccion">
      <div class="seccion__cab">
        <h2 class="seccion__tit">${esc(t({ es: "Aplicaciones desarrolladas", en: "Developed applications" }, l))}</h2>
        <p class="seccion__nota">${esc(t({ es: "Documentos de proyecto", en: "Project documents" }, l))}</p>
      </div>
      <div class="registro">
${DOCS.filter((d) => d.g === "ingenieria").map((d) => `        <a class="doc" href="${r}assets/pdf/${encodeURI(d.f)}" download>
          <span class="doc__ext">PDF</span>
          <span class="doc__nom">${esc(t(d.t, l))}</span>
          <span class="doc__meta"><span class="doc__idioma">${d.idi.toUpperCase()}</span><span class="doc__peso">${d.kb} kB</span></span>
          <span class="doc__baja">${ICO.baja}${esc(S[l].descargar)}</span>
        </a>`).join("\n")}
      </div>
    </section>

  </div>
</div>
</div>

${bandaCTA(l, r)}`;

  return documento({
    l, id: "ingenieria", folio: 6, cuerpo, ogImg: "assets/img/galeria/galeria24.jpg",
    titulo: t({ es: "Ingeniería personalizada y fabricación propia — HECISA", en: "Custom engineering and in-house manufacture — HECISA" }, l),
    descripcion: t({
      es: "Sistemas de filtración desarrollados a medida desde la muestra del fluido. Taller propio de 1.500 m² en Getafe: rolado hasta 40 mm, nueve equipos de soldadura, soldadura orbital y banco de pruebas hidráulico hasta 400 bar.",
      en: "Filtration systems developed to measure starting from the fluid sample. Own 1,500 m² workshop in Getafe: rolling up to 40 mm, nine welding assemblies, orbital welding and a hydraulic test bench up to 400 bar."
    }, l)
  });
}

function paginaEmpresa(l) {
  const r = l === "en" ? "../" : "";
  const valores = {
    es: ["El cambio como oportunidad", "Objetivos y compromisos ambiciosos", "Mentalidad ganadora", "Acción consecuente", "Rapidez y sencillez", "Trabajo orientado al cliente y conciencia de calidad", "Lealtad"],
    en: ["Change as opportunity", "Ambitious aims and commitments", "Winner mind", "Consequent action", "Speed and simplicity", "Customer-related work and quality awareness", "Loyalty"]
  };

  const cuerpo = `<div class="envoltorio">
<div class="hoja">
${hojaCab(l, r, {
    ruta: [[t({ es: "Empresa", en: "Company" }, l), null]],
    tit: esc(t({ es: "Una empresa industrial española de bienes de equipo", en: "A Spanish industrial company producing capital goods" }, l)),
    entrada: esc(t({
      es: "HECISA es el acrónimo de Hispano Europea de Comercio e Industria. Fundada en 1984 con el capital y el conocimiento técnico de IHRSA y de T. Díez Blanco Montajes Industriales, sumando quince años previos de experiencia. Dos años después empezaba a fabricar filtros y sistemas de filtración y mezcla de fluidos.",
      en: "HECISA is the acronym of Hispano Europea de Comercio e Industria. Founded in 1984 with the capital and technical knowledge of IHRSA and T. Díez Blanco Montajes Industriales, joining fifteen years of previous experience. Two years later it started producing filters and fluid filtration and mixing systems."
    }, l)),
    meta: [t({ es: "Desde 1984", en: "Since 1984" }, l), "Getafe, Madrid", t({ es: "Sector de bienes de equipo", en: "Capital goods sector" }, l)],
    folio: 7
  })}
  <div class="tira" style="padding-top:var(--s7);padding-bottom:var(--s8)">

    <section class="seccion" style="padding-top:0">
      <div class="rejilla-2">
        <div class="prosa">
          <p>${esc(t({
    es: "HECISA es líder y especialista en el diseño y la producción de equipos industriales para los sectores de energía, agua, petróleo, petroquímica, química y farmacia, entre otros. Gracias a sus productos y servicios, contribuye al uso responsable de la energía, del agua y de las materias primas.",
    en: "HECISA is a leader and specialist in the design and production of industrial equipment for the power, water, oil, petrochemical, chemical and pharmaceutical sectors, among others. Through its products and services it contributes to the responsible use of power, water and raw materials."
  }, l))}</p>
          <p>${esc(t({
    es: "Desde el principio la empresa se ha adelantado a los cambios profundos del mercado: en los procesos de producción y diseño, en la mejora constante del producto y en la actualización a los nuevos requisitos de materiales. Hoy ofrece una gama completa de equipos y diseña y fabrica sistemas a medida en una gran variedad de materiales, desde los aceros al carbono más estándar hasta el titanio o los platinoides.",
    en: "From the beginning the company has gone ahead of the market's deep changes: in production and design processes, in constant product improvement and in updating to new material requirements. Today it offers a full range of equipment and designs and manufactures tailor-made systems in a wide variety of materials, from the most standard carbon steels to titanium or platinoids."
  }, l))}</p>
          <p>${esc(t({
    es: "El lema corporativo, presente en todos los catálogos desde hace décadas, es «La Calidad… como Norma».",
    en: "The corporate motto, present in every brochure for decades, is “Quality… as Code”."
  }, l))}</p>
        </div>
        <figure style="margin:0">
          <img src="${r}assets/img/galeria/galeria01.jpg" alt="${attr(t(GALERIA[0], l))}" loading="lazy" width="400" height="278" style="border:1.5px solid var(--ink);width:100%">
          <figcaption class="et-tec" style="margin-top:.5rem">${esc(t(GALERIA[0], l))}</figcaption>
        </figure>
      </div>
    </section>

    <section class="seccion">
      <div class="seccion__cab">
        <h2 class="seccion__tit">${esc(t({ es: "Información corporativa", en: "Corporate information" }, l))}</h2>
        <p class="seccion__nota"><a href="${r}assets/pdf/Hecisapresen.pdf">${esc(t({ es: "Presentación completa · PDF", en: "Full presentation · PDF" }, l))}</a></p>
      </div>
      <div class="tabla-envoltorio">
        <table class="tabla">
          <tbody>
            <tr><th scope="row">${esc(t({ es: "Razón social", en: "Corporate name" }, l))}</th><td>${esc(EMPRESA.razon)}</td></tr>
            <tr><th scope="row">${esc(t({ es: "Nombre y marca comercial", en: "Trade name and trade mark" }, l))}</th><td>HECISA</td></tr>
            <tr><th scope="row">${esc(t({ es: "Año de fundación", en: "Year of foundation" }, l))}</th><td>1984</td></tr>
            <tr><th scope="row">${esc(t({ es: "Sede", en: "Head office" }, l))}</th><td>${esc(EMPRESA.calle)}, ${esc(EMPRESA.cp)} ${esc(EMPRESA.ciudad)} (${esc(EMPRESA.provincia)}), ${esc(t(EMPRESA.pais, l))}</td></tr>
            <tr><th scope="row">${esc(t({ es: "Parcela", en: "Plot" }, l))}</th><td>2.350 m²</td></tr>
            <tr><th scope="row">${esc(t({ es: "Superficie construida", en: "Built area" }, l))}</th><td>2.000 m² — 1.500 m² ${esc(t({ es: "de producción y 500 m² de oficinas, servicios auxiliares incluidos", en: "production and 500 m² offices, auxiliary services included" }, l))}</td></tr>
            <tr><th scope="row">${esc(t({ es: "Sistema de calidad", en: "Quality system" }, l))}</th><td>${esc(t({ es: "Desde 1989, según ASME II, VIII Div. 1 y 2, IX y X, EN-13445 y PD5500. ISO 9001.", en: "Since 1989, according to ASME II, VIII Div. 1 & 2, IX and X, EN-13445 and PD5500. ISO 9001." }, l))}</td></tr>
          </tbody>
        </table>
      </div>
    </section>

    <section class="seccion">
      <div class="seccion__cab">
        <h2 class="seccion__tit">${esc(t({ es: "Los siete valores", en: "The seven values" }, l))}</h2>
        <p class="seccion__nota">${esc(t({ es: "Establecidos en 1999", en: "Established in 1999" }, l))}</p>
      </div>
      <p class="seccion__intro">${esc(t({
    es: "En 1999 HECISA estableció un sistema de valores propio, el Trade Mark Value. Mientras la visión marca el camino y las exigencias autoimpuestas, los valores ordenan la convivencia y la conducta ejemplar de la plantilla.",
    en: "In 1999 HECISA established its own values system, the Trade Mark Value. While the vision makes the path and the self-imposed demands clear, the values position the staff's cohabitation and exemplary behaviour."
  }, l))}</p>
      <ul class="siglas">
${valores[l].map((v) => `        <li><span class="sigla" style="cursor:default;text-transform:none;letter-spacing:.01em">${esc(v)}</span></li>`).join("\n")}
      </ul>
    </section>

    <section class="seccion">
      <div class="seccion__cab">
        <h2 class="seccion__tit">${esc(t({ es: "Política de calidad", en: "Quality policy" }, l))}</h2>
        <p class="seccion__nota"><a href="${r}assets/pdf/PA2019.pdf">${esc(t({ es: "Política integrada · PDF", en: "Integrated policy · PDF" }, l))}</a></p>
      </div>
      <div class="prosa">
        <p>${esc(t({
    es: "HECISA sigue en todas sus unidades de producción una política de calidad basada en el uso permanente de un sistema de garantía de calidad en todos sus procesos, productos, ventas y servicios posventa, con el cumplimiento estricto de los códigos internacionales. Se resume en tres puntos:",
    en: "HECISA follows in all of its production units a quality policy based on the permanent use of a quality guarantee system in all its processes, products, sales and after-sale services, with strict compliance with the international codes. It can be summarised in three points:"
  }, l))}</p>
        <ol>
          <li>${esc(t({ es: "No escatimar esfuerzos para crear entre los compañeros un buen ambiente que lleve a la mejora continua y a la máxima satisfacción del cliente.", en: "To spare no effort to create a good atmosphere between co-workers that leads to continuous improvement and maximum customer satisfaction." }, l))}</li>
          <li>${esc(t({ es: "Garantizar el compromiso con los compañeros y darles formación actualizada en las nuevas tecnologías y en las necesidades del cliente.", en: "To guarantee the commitment with co-workers and give them updated training in new technologies and customer needs." }, l))}</li>
          <li>${esc(t({ es: "Considerar de máxima importancia la actualización permanente del producto suministrado a las necesidades del cliente y la eficiencia de los servicios prestados.", en: "To consider of paramount importance the permanent update of the supplied product to customer needs and the efficiency of the provided services." }, l))}</li>
        </ol>
      </div>
    </section>

    <section class="seccion">
      <div class="seccion__cab">
        <h2 class="seccion__tit">${esc(t({ es: "Ver también", en: "See also" }, l))}</h2>
      </div>
      <div class="indice">
        <a class="indice__fila" href="${url("clientes", l)}"><span class="indice__ident"><span class="indice__cod">36</span><span class="indice__nom">${esc(t({ es: "Clientes con equipos HECISA instalados", en: "Clients with HECISA equipment installed" }, l))}</span></span><span class="indice__ver">${esc(S[l].verHoja)}${ICO.flecha}</span></a>
        <a class="indice__fila" href="${url("galeria", l)}"><span class="indice__ident"><span class="indice__cod">46</span><span class="indice__nom">${esc(t({ es: "Fotografías de equipos en servicio", en: "Photographs of equipment in service" }, l))}</span></span><span class="indice__ver">${esc(S[l].verHoja)}${ICO.flecha}</span></a>
        <a class="indice__fila" href="${url("ingenieria", l)}"><span class="indice__ident"><span class="indice__cod">400 bar</span><span class="indice__nom">${esc(t({ es: "Medios de fabricación y banco de pruebas", en: "Manufacturing resources and test bench" }, l))}</span></span><span class="indice__ver">${esc(S[l].verHoja)}${ICO.flecha}</span></a>
      </div>
    </section>

  </div>
</div>
</div>

${bandaCTA(l, r)}`;

  return documento({
    l, id: "empresa", folio: 7, cuerpo, ogImg: "assets/img/galeria/galeria01.jpg",
    titulo: t({ es: "La empresa desde 1984 — HECISA", en: "The company since 1984 — HECISA" }, l),
    descripcion: t({
      es: "Hispano Europea de Comercio e Industria, S.L. Fundada en 1984 en Madrid, fabricante de equipos de filtración industrial. Sistema de calidad desde 1989 según ASME, EN-13445 y PD5500, con ISO 9001 y código NCAGE.",
      en: "Hispano Europea de Comercio e Industria, S.L. Founded in 1984 in Madrid, manufacturer of industrial filtration equipment. Quality system since 1989 according to ASME, EN-13445 and PD5500, with ISO 9001 and NCAGE code."
    }, l)
  });
}

function paginaClientes(l) {
  const r = l === "en" ? "../" : "";
  const cuerpo = `<div class="envoltorio">
<div class="hoja">
${hojaCab(l, r, {
    ruta: [[t({ es: "Empresa", en: "Company" }, l), url("empresa", l)], [t({ es: "Clientes", en: "Clients" }, l), null]],
    tit: esc(t({ es: "Treinta y seis casas que han instalado equipos HECISA", en: "Thirty-six companies that have installed HECISA equipment" }, l)),
    entrada: esc(t({
      es: "Refinerías, eléctricas, gasistas, siderúrgicas, ingenierías de proyecto y constructoras. La lista procede de la página de clientes del propio dominio.",
      en: "Refineries, utilities, gas companies, steelworks, project engineering firms and contractors. The list comes from the clients page of the domain itself."
    }, l)),
    meta: [t({ es: "36 referencias", en: "36 references" }, l), t({ es: "Equipos en servicio en todo el mundo", en: "Equipment in service worldwide" }, l)],
    folio: 8
  })}
  <div class="tira" style="padding-top:var(--s7);padding-bottom:var(--s8)">
    <ul class="muro">
${CLIENTES.map(([f, n]) => `      <li><img src="${r}assets/img/clientes/${f}" alt="${attr(n)}" loading="lazy" width="150" height="80"></li>`).join("\n")}
    </ul>

    <section class="seccion">
      <div class="seccion__cab">
        <h2 class="seccion__tit">${esc(S[l].sectores)}</h2>
      </div>
      <ul class="lista-plana columnas" style="font-size:var(--t-peq);color:var(--gris)">
${t(SECTORES, l).map((x) => `        <li>${esc(x)}</li>`).join("\n")}
      </ul>
    </section>

    <section class="seccion">
      <div class="seccion__cab">
        <h2 class="seccion__tit">${esc(t({ es: "Homologaciones", en: "Approvals" }, l))}</h2>
      </div>
      <ul class="sellos">
        <li><a href="${r}assets/pdf/iso-9001.pdf"><img src="${r}assets/img/marcas/ISO9001.jpg" alt="ISO 9001" loading="lazy" width="120" height="90"></a></li>
        <li><a href="${r}assets/pdf/NCAGE.pdf"><img src="${r}assets/img/marcas/NATO.jpg" alt="NCAGE / NATO" loading="lazy" width="120" height="90"></a></li>
        <li><img src="${r}assets/img/marcas/Chambertrust.gif" alt="Chambertrust" loading="lazy" width="120" height="60"></li>
        <li><img src="${r}assets/img/marcas/top100000.png" alt="Top 100.000" loading="lazy" width="120" height="60"></li>
      </ul>
    </section>
  </div>
</div>
</div>

${bandaCTA(l, r)}`;

  return documento({
    l, id: "clientes", folio: 8, cuerpo, ogImg: "assets/img/galeria/galeria46.jpg",
    titulo: t({ es: "Clientes y referencias — HECISA", en: "Clients and references — HECISA" }, l),
    descripcion: t({
      es: "Repsol, Cepsa, ExxonMobil, Iberdrola, Endesa, Enagás, ArcelorMittal, ThyssenKrupp, Foster Wheeler, Dragados Industrial, Duro Felguera, Metito y otras casas con equipos de filtración HECISA instalados.",
      en: "Repsol, Cepsa, ExxonMobil, Iberdrola, Endesa, Enagás, ArcelorMittal, ThyssenKrupp, Foster Wheeler, Dragados Industrial, Duro Felguera, Metito and other companies with HECISA filtration equipment installed."
    }, l)
  });
}

function paginaGaleria(l) {
  const r = l === "en" ? "../" : "";
  const cuerpo = `<div class="envoltorio">
<div class="hoja hoja--ancha">
${hojaCab(l, r, {
    ruta: [[t({ es: "Empresa", en: "Company" }, l), url("empresa", l)], [t({ es: "Galería", en: "Gallery" }, l), null]],
    tit: esc(t({ es: "Cuarenta y seis equipos, fotografiados en taller y en planta", en: "Forty-six pieces of equipment, photographed in the workshop and on site" }, l)),
    entrada: esc(t({
      es: "Autolimpiantes, filtros de cesta y cartucho, coalescentes, skids, ciclones y mezcladores estáticos. Los pies son los originales del archivo de HECISA.",
      en: "Self-cleaning filters, basket and cartridge filters, coalescers, skids, cyclones and static mixers. The captions are the originals from HECISA's own archive."
    }, l)),
    meta: [t({ es: "46 fotografías", en: "46 photographs" }, l), t({ es: "Pulsa para ampliar", en: "Click to enlarge" }, l)],
    folio: 9
  })}
  <div class="tira" style="padding-top:var(--s6);padding-bottom:var(--s8)">
    <ul class="plancha" style="list-style:none">
${GALERIA.map((g, i) => {
    const nn = String(i + 1).padStart(2, "0");
    return `      <li><figure class="placa">
        <button class="placa__boton" type="button" data-placa data-grande="${r}assets/img/galeria/galeria${nn}.jpg" data-pie="${attr(t(g, l))}" aria-label="${attr(S[l].ampliar + ": " + t(g, l))}">
          <img src="${r}assets/img/galeria/galeria${nn}.jpg" alt="${attr(t(g, l))}" loading="lazy" width="400" height="278">
        </button>
        <figcaption><span class="placa__n">${nn}</span>${esc(t(g, l))}</figcaption>
      </figure></li>`;
  }).join("\n")}
    </ul>
  </div>
</div>
</div>

<div class="visor" hidden data-folio="${attr(S[l].imagen)}" role="dialog" aria-modal="true" aria-label="${attr(t({ es: "Visor de la galería", en: "Gallery viewer" }, l))}">
  <div class="visor__barra">
    <span class="folio"></span>
    <button class="visor__btn" type="button" data-visor-ant>${ICO.ant}${esc(S[l].anterior)}</button>
    <button class="visor__btn" type="button" data-visor-sig>${esc(S[l].siguiente)}${ICO.sig}</button>
    <button class="visor__btn" type="button" data-visor-cierra>${ICO.cerrar}${esc(S[l].cerrar)}</button>
  </div>
  <div class="visor__lienzo"><img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" alt=""></div>
  <p class="visor__pie"></p>
</div>

${bandaCTA(l, r)}`;

  return documento({
    l, id: "galeria", folio: 9, cuerpo, ogImg: "assets/img/galeria/galeria24.jpg",
    titulo: t({ es: "Galería de equipos — HECISA", en: "Equipment gallery — HECISA" }, l),
    descripcion: t({
      es: "Cuarenta y seis fotografías de filtros autolimpiantes HSC, HSBI, HSBIA y HSBIL, filtros de cesta HFC, coalescentes, skids de filtración, ciclones y mezcladores estáticos fabricados por HECISA.",
      en: "Forty-six photographs of HSC, HSBI, HSBIA and HSBIL self-cleaning filters, HFC basket filters, coalescers, filtration skids, cyclones and static mixers manufactured by HECISA."
    }, l)
  });
}

function paginaDescargas(l) {
  const r = l === "en" ? "../" : "";
  const cuerpo = `<div class="envoltorio">
<div class="hoja">
${hojaCab(l, r, {
    ruta: [[t({ es: "Descargas", en: "Downloads" }, l), null]],
    tit: esc(t({ es: "Registro documental", en: "Document register" }, l)),
    entrada: esc(t({
      es: "Los cuarenta y ocho documentos de HECISA: catálogos por serie, formularios de petición de oferta, certificados y condiciones de venta. Filtra por familia o por idioma, o busca el código de tu serie.",
      en: "HECISA's forty-eight documents: brochures by series, enquiry forms, certificates and conditions of sale. Filter by family or language, or search for your series code."
    }, l)),
    meta: [`48 ${t({ es: "documentos", en: "documents" }, l)}`, "PDF", "ES · EN"],
    folio: 10
  })}
  <div class="tira" style="padding-top:var(--s6);padding-bottom:var(--s8)">

    <div class="registro__filtros">
      <div class="registro__busca">
        ${ICO.lupa}
        <label class="oculto-visual" for="q-doc">${esc(S[l].buscarDoc)}</label>
        <input id="q-doc" type="search" data-registro-busca autocomplete="off" placeholder="${attr(S[l].buscarDoc)}">
      </div>
      <ul class="pildoras" aria-label="${attr(S[l].filtrarDocs)}">
${GRUPOS_DOC.map((g, i) => `        <li><button class="pildora" type="button" data-filtro="${g.id}" aria-pressed="${i === 0 ? "true" : "false"}">${esc(t(g, l))}</button></li>`).join("\n")}
      </ul>
    </div>

    <p class="et-tec" style="margin-bottom:.5rem"><span data-registro-cuenta>48</span> ${esc(S[l].documentosN)}</p>

    <div class="registro" data-registro>
${DOCS.map((doc) => `      <a class="doc" href="${r}assets/pdf/${encodeURI(doc.f)}" download data-grupo="${doc.g}" data-idioma="${doc.idi}" data-busca="${attr(t(doc.t, l) + " " + doc.f + " " + doc.g)}">
        <span class="doc__ext">PDF</span>
        <span class="doc__nom">${esc(t(doc.t, l))}</span>
        <span class="doc__meta"><span class="doc__idioma">${doc.idi.toUpperCase()}</span><span class="doc__peso">${doc.kb} kB</span></span>
        <span class="doc__baja">${ICO.baja}${esc(S[l].descargar)}</span>
      </a>`).join("\n")}
      <p class="registro__vacio" data-registro-vacio hidden>
        <strong>${esc(S[l].docsVacio)}</strong>
        ${esc(S[l].docsVacioTxt)}
      </p>
    </div>

    <p class="aviso" style="margin-top:2rem">
      ${ICO.info}
      <span><strong>${esc(t({ es: "Formularios de petición de oferta", en: "Enquiry forms" }, l))}</strong>
      ${esc(t({
    es: "Si prefieres enviar los datos del proceso en un solo documento, descarga el formulario que corresponda —líquidos, gases o mezcla de fluidos—, rellénalo y adjúntalo a tu correo. Acelera la respuesta técnica.",
    en: "If you prefer to send the process data in a single document, download the matching form — liquids, gases or fluids mixing —, fill it in and attach it to your email. It speeds up the technical answer."
  }, l))}</span>
    </p>

  </div>
</div>
</div>

${bandaCTA(l, r)}`;

  return documento({
    l, id: "descargas", folio: 10, cuerpo,
    titulo: t({ es: "Descargas: catálogos, formularios y certificados — HECISA", en: "Downloads: brochures, forms and certificates — HECISA" }, l),
    descripcion: t({
      es: "Los 48 documentos técnicos de HECISA en PDF: catálogos de las series HSC, HSBI, HSBIL, HDF, HFX, MFC y DPT, formularios de petición de oferta, certificado ISO 9001, código NCAGE y condiciones de venta.",
      en: "HECISA's 48 technical documents in PDF: brochures for the HSC, HSBI, HSBIL, HDF, HFX, MFC and DPT series, enquiry forms, ISO 9001 certificate, NCAGE code and conditions of sale."
    }, l)
  });
}

function paginaNoticias(l) {
  const r = l === "en" ? "../" : "";
  const cuerpo = `<div class="envoltorio">
<div class="hoja">
${hojaCab(l, r, {
    ruta: [[t({ es: "Empresa", en: "Company" }, l), url("empresa", l)], [t({ es: "Noticias", en: "News" }, l), null]],
    tit: esc(t({ es: "Noticias", en: "News" }, l)),
    entrada: esc(t({
      es: "Encargos y novedades de producto publicados por HECISA. Cada entrada enlaza al documento del proyecto.",
      en: "Orders and product news published by HECISA. Each entry links to the project document."
    }, l)),
    meta: [t({ es: "Última publicación: diciembre de 2016", en: "Last published: December 2016" }, l)],
    folio: 11
  })}
  <div class="tira" style="padding-top:var(--s6);padding-bottom:var(--s8)">
    <div class="noticias">
${NOTICIAS.map((n) => `      <article class="noticia">
        <p class="noticia__fecha">${esc(t(n.fechaEt, l))}</p>
        <div>
          <h2>${esc(t(n.t, l))}</h2>
          <p>${esc(t(n.d, l))}</p>
          <p style="margin-top:1rem"><a class="btn" href="${r}assets/pdf/${encodeURI(l === "en" && n.pdfEn ? n.pdfEn : n.pdf)}" download>${ICO.baja}${esc(S[l].verModelo)}</a></p>
        </div>
      </article>`).join("\n")}
    </div>

    <p class="aviso" style="margin-top:2rem">
      ${ICO.info}
      <span><strong>${esc(t({ es: "Sobre estas fechas", en: "About these dates" }, l))}</strong>
      ${esc(t({
    es: "Estas son las últimas noticias publicadas en el sitio anterior de HECISA. Para conocer los proyectos en curso, llama al departamento técnico o escribe a asistencia técnica.",
    en: "These are the last news items published on HECISA's previous site. To learn about current projects, call the technical department or write to technical assistance."
  }, l))}</span>
    </p>
  </div>
</div>
</div>

${bandaCTA(l, r)}`;

  return documento({
    l, id: "noticias", folio: 11, cuerpo,
    titulo: t({ es: "Noticias — HECISA", en: "News — HECISA" }, l),
    descripcion: t({
      es: "Filtros autolimpiantes de agua de mar para una planta termosolar en Arabia Saudí, sistema de pulido de condensado de vapor y nuevo cuadro de control con protección IP66.",
      en: "Seawater self-cleaning filters for a solar thermal plant in Saudi Arabia, a steam condensate polishing system and a new control box with IP66 protection."
    }, l)
  });
}

function paginaContacto(l) {
  const r = l === "en" ? "../" : "";
  const asuntos = {
    es: ["Petición de oferta", "Asistencia técnica de un equipo instalado", "Repuestos y elementos filtrantes", "Ingeniería a medida", "Otra consulta"],
    en: ["Request for quotation", "Technical assistance for installed equipment", "Spares and filter elements", "Custom engineering", "Other enquiry"]
  };

  const cuerpo = `<div class="envoltorio">
<div class="hoja">
${hojaCab(l, r, {
    ruta: [[t({ es: "Contacto", en: "Contact" }, l), null]],
    tit: esc(t({ es: "Contacto y localización", en: "Contact and location" }, l)),
    entrada: esc(t({
      es: "Calidad 24, en el Polígono Los Olivos de Getafe, a pie de la A-4. Oficina técnica y taller están en el mismo edificio: quien coge el teléfono puede bajar a mirar el equipo.",
      en: "Calidad 24, in the Los Olivos industrial estate in Getafe, right off the A-4. Technical office and workshop are in the same building: whoever answers the phone can walk down and look at the equipment."
    }, l)),
    meta: ["Getafe · Madrid", "+34 916 967 039"],
    folio: 12
  })}
  <div class="tira" style="padding-top:var(--s7);padding-bottom:var(--s8)">
    <div class="contacto-rejilla">

      <div>
        <h2 class="bloque__tit" style="font-size:var(--t-2)">${esc(t({ es: "Datos", en: "Details" }, l))}</h2>
        <dl class="datos">
          <div><dt>${esc(S[l].direccion)}</dt><dd>${esc(EMPRESA.calle)}<br>${esc(EMPRESA.cp)} ${esc(EMPRESA.ciudad)} · ${esc(EMPRESA.provincia)}<br>${esc(t(EMPRESA.pais, l))}</dd></div>
          <div><dt>${esc(S[l].telefono)}</dt><dd><a href="tel:${EMPRESA.telefonoTel}">${esc(EMPRESA.telefono)}</a></dd></div>
          <div><dt>${esc(S[l].fax)}</dt><dd>${esc(EMPRESA.fax)}</dd></div>
          <div><dt>${esc(t({ es: "Información", en: "Enquiries" }, l))}</dt><dd><a href="#" data-correo="${EMPRESA.correoInfo.join("|")}" data-correo-texto></a></dd></div>
          <div><dt>${esc(S[l].sat)}</dt><dd><a href="#" data-correo="${EMPRESA.correoSat.join("|")}" data-correo-texto></a></dd></div>
        </dl>

        <figure class="mapa" style="margin:2rem 0 0">
          <img src="${r}assets/img/mapa-01.jpg" alt="${attr(t({ es: "Plano de acceso a HECISA en el Polígono Los Olivos de Getafe", en: "Access map to HECISA in the Los Olivos industrial estate, Getafe" }, l))}" loading="lazy" width="738" height="558">
          <figcaption>
            <span>${esc(t({ es: "Plano de acceso publicado por HECISA", en: "Access map published by HECISA" }, l))}</span>
            <a class="doc__baja" href="${EMPRESA.mapa}" target="_blank" rel="noopener">${ICO.mapa}${esc(t({ es: "Abrir en Google Maps", en: "Open in Google Maps" }, l))}</a>
          </figcaption>
        </figure>
      </div>

      <div>
        <form class="form" data-form-peticion action="#" method="post" novalidate>
          <div class="form__cab">
            <h2>${esc(t({ es: "Petición técnica", en: "Technical enquiry" }, l))}</h2>
            <p>${esc(t({
    es: "Con el fluido, el caudal y el grado de filtración ya se puede proponer una serie. Si tienes un equipo instalado, indica el código de la placa.",
    en: "With the fluid, the flow and the filtration grade a series can already be proposed. If you have equipment installed, give the code on the nameplate."
  }, l))}</p>
          </div>
          <div class="form__cuerpo">
            <p class="campo"><label for="f-nombre">${esc(t({ es: "Nombre", en: "Name" }, l))}</label><input id="f-nombre" name="nombre" type="text" autocomplete="name" required></p>
            <p class="campo"><label for="f-empresa">${esc(t({ es: "Empresa", en: "Company" }, l))}</label><input id="f-empresa" name="empresa" type="text" autocomplete="organization" required></p>
            <p class="campo"><label for="f-correo">${esc(t({ es: "Correo electrónico", en: "Email" }, l))}</label><input id="f-correo" name="correo" type="email" autocomplete="email" required></p>
            <p class="campo"><label for="f-tel">${esc(t({ es: "Teléfono", en: "Phone" }, l))} <span class="opcional">${esc(t({ es: "(opcional)", en: "(optional)" }, l))}</span></label><input id="f-tel" name="telefono" type="tel" autocomplete="tel"></p>
            <p class="campo campo--ancho"><label for="f-asunto">${esc(t({ es: "Asunto", en: "Subject" }, l))}</label>
              <select id="f-asunto" name="asunto" required>
${asuntos[l].map((a) => `                <option>${esc(a)}</option>`).join("\n")}
              </select>
            </p>
            <p class="campo"><label for="f-serie">${esc(t({ es: "Serie o código de placa", en: "Series or nameplate code" }, l))} <span class="opcional">${esc(t({ es: "(opcional)", en: "(optional)" }, l))}</span></label><input id="f-serie" name="serie" type="text" placeholder="HSBIL-W-…"></p>
            <p class="campo"><label for="f-caudal">${esc(t({ es: "Caudal y micra", en: "Flow and micron" }, l))} <span class="opcional">${esc(t({ es: "(opcional)", en: "(optional)" }, l))}</span></label><input id="f-caudal" name="caudal" type="text" placeholder="${attr(t({ es: "250 m³/h · 100 µm", en: "250 m³/h · 100 µm" }, l))}"></p>
            <p class="campo campo--ancho"><label for="f-mensaje">${esc(t({ es: "Fluido, temperatura, presión y posición de la tubería", en: "Fluid, temperature, pressure and pipe position" }, l))}</label><textarea id="f-mensaje" name="mensaje" required></textarea><span class="campo__ayuda">${esc(t({ es: "Cuanto más concreto, más rápida es la respuesta técnica.", en: "The more specific, the faster the technical answer." }, l))}</span></p>
            <p class="consentimiento campo--ancho">
              <input id="f-ok" name="consentimiento" type="checkbox" required>
              <label for="f-ok">${esc(t({
    es: "Acepto que HECISA trate estos datos con el único fin de responder a esta consulta.",
    en: "I agree that HECISA processes this data for the sole purpose of answering this enquiry."
  }, l))}</label>
            </p>
          </div>
          <div class="form__pie">
            <button class="btn btn--accion" type="submit">${esc(t({ es: "Enviar la petición", en: "Send the enquiry" }, l))} ${ICO.flecha}</button>
            <p class="form__estado" data-form-estado hidden></p>
          </div>
        </form>

        <p class="aviso" style="margin-top:1.5rem">
          ${ICO.info}
          <span><strong>${esc(t({ es: "Pendiente de configurar", en: "Pending configuration" }, l))}</strong>
          ${esc(t({
    es: "Este formulario todavía no tiene destino: hay que darle un endpoint (el correo del hosting, Formspree o similar) en el atributo action. Mientras tanto, el teléfono y el correo de arriba funcionan.",
    en: "This form has no destination yet: an endpoint must be set in its action attribute (the hosting mail script, Formspree or similar). In the meantime, the phone and email above work."
  }, l))}</span>
        </p>

        <p class="aviso" style="margin-top:1rem">
          ${ICO.baja}
          <span><strong>${esc(t({ es: "¿Prefieres el formulario en PDF?", en: "Prefer the PDF form?" }, l))}</strong>
          <a href="${r}assets/pdf/${l === "es" ? "Formulario_filtracion_liquidos_1.1.pdf" : "Form_Liquids_filtration_1.1.pdf"}">${esc(t({ es: "Filtración de líquidos", en: "Liquids filtration" }, l))}</a> ·
          <a href="${r}assets/pdf/${l === "es" ? "Formulario_filtracion_gases_1.1.pdf" : "Form_Gases_filtration_1.1.pdf"}">${esc(t({ es: "Filtración de gases", en: "Gases filtration" }, l))}</a> ·
          <a href="${r}assets/pdf/${l === "es" ? "Formulario_mezcla_de_fluidos_1.1.pdf" : "Form_Fluids_mixing_1.1.pdf"}">${esc(t({ es: "Mezcla de fluidos", en: "Fluids mixing" }, l))}</a></span>
        </p>
      </div>

    </div>
  </div>
</div>
</div>`;

  return documento({
    l, id: "contacto", folio: 12, cuerpo, ogImg: "assets/img/mapa-01.jpg",
    titulo: t({ es: "Contacto y localización — HECISA, Getafe (Madrid)", en: "Contact and location — HECISA, Getafe (Madrid)" }, l),
    descripcion: t({
      es: "Calidad 24, Polígono Los Olivos, 28906 Getafe (Madrid). Teléfono +34 916 967 039. Petición de oferta técnica, asistencia y repuestos de filtros HECISA.",
      en: "Calidad 24, Los Olivos industrial estate, 28906 Getafe (Madrid), Spain. Phone +34 916 967 039. Technical quotations, assistance and spares for HECISA filters."
    }, l)
  });
}

function pagina404(l) {
  const r = l === "en" ? "../" : "";
  const cuerpo = `<div class="envoltorio">
<div class="hoja">
  <div class="nada">
    <p class="folio">HTTP 404</p>
    <h1 class="hoja__tit" style="margin:1rem auto 1.5rem;max-width:22ch">${esc(t({ es: "Esta hoja no está en la carpeta", en: "This sheet is not in the binder" }, l))}</h1>
    <p style="max-width:52ch;margin:0 auto 2rem;color:var(--gris)">${esc(t({
    es: "La dirección que has seguido no corresponde a ninguna hoja del catálogo. Si buscabas una serie concreta, el índice de la gama la tiene.",
    en: "The address you followed does not match any sheet of the catalogue. If you were looking for a specific series, the range index has it."
  }, l))}</p>
    <p class="apertura__acciones" style="justify-content:center">
      <a class="btn btn--accion" href="${url("gama", l)}">${esc(S[l].verGama)} ${ICO.flecha}</a>
      <a class="btn" href="${url("index", l)}">${esc(S[l].inicio)}</a>
      <a class="btn" href="${url("descargas", l)}">${esc(t({ es: "Registro de documentos", en: "Document register" }, l))}</a>
    </p>
  </div>
</div>
</div>`;

  return documento({
    l, id: "404", folio: 0, cuerpo,
    titulo: t({ es: "Hoja no encontrada — HECISA", en: "Sheet not found — HECISA" }, l),
    descripcion: t({ es: "La página solicitada no existe en hecisa.com.", en: "The requested page does not exist on hecisa.com." }, l)
  });
}

/* -------------------------------------------------- Metadatos de familia */
const META_FAMILIA = {
  autolimpiantes: {
    ruta: { es: "Autolimpiantes", en: "Self-cleaning" },
    tit: { es: "Filtros autolimpiantes", en: "Self-cleaning filters" },
    entrada: {
      es: "Cuatro series y un mismo principio: el elemento filtrante se limpia solo, sin cortar el caudal. Cambian el método —contralavado, rascado, rascado con succión o evacuación hidrodinámica— y con él el rango de caudal y el tipo de sólido que admiten.",
      en: "Four series and one principle: the filter element cleans itself without cutting the flow. What changes is the method — backflushing, scraping, scraping with suction or hydrodynamic discharge — and with it the flow range and the type of solid they take."
    },
    meta: { es: ["4 series", "10 – 22.000 m³/h", "desde 5 µm"], en: ["4 series", "10 – 22,000 m³/h", "from 5 µm"] },
    title: { es: "Filtros autolimpiantes HSC, HSBI, HSBIA y HSBIL — HECISA", en: "HSC, HSBI, HSBIA and HSBIL self-cleaning filters — HECISA" },
    desc: {
      es: "Filtros autolimpiantes automáticos de 10 a 22.000 m³/h y desde 5 micras, con limpieza sin interrupción del flujo. Series HSC a contralavado, HSBI por rascado, HSBIL por rascado y succión y HSBIA con evacuación hidrodinámica.",
      en: "Automatic self-cleaning filters from 10 to 22,000 m³/h and from 5 microns, cleaning without flow interruption. HSC backflushing, HSBI scraping, HSBIL scraping and suction, and HSBIA hydrodynamic discharge series."
    }
  },
  filtros: {
    ruta: { es: "Filtros y cartuchos", en: "Filters & cartridges" },
    tit: { es: "Cesta, cartucho y coalescentes", en: "Basket, cartridge and coalescers" },
    entrada: {
      es: "La familia de operación manual y de cartucho, más los coalescentes y separadores de servicio de petróleo y gas. Grados de filtración desde 1 micra y construcción desde acero al carbono hasta superdúplex.",
      en: "The manual and cartridge family, plus the coalescers and separators for oil & gas service. Filtration grades from 1 micron and construction from carbon steel to super duplex."
    },
    meta: { es: ["5 series", "desde 1 µm", "EN-13445 · ASME VIII"], en: ["5 series", "from 1 µm", "EN-13445 · ASME VIII"] },
    title: { es: "Filtros de cesta, cartucho y coalescentes — HECISA", en: "Basket, cartridge and coalescing filters — HECISA" },
    desc: {
      es: "Filtros de cesta HFC y HFCD, filtro de cartucho HDF, filtro de combustible HFX, cartuchos HIF, MMA y MMG y coalescentes FFV, FFVG, MMAG y MMAH. Diseño EN-13445, ASME VIII Div. 1 y PD5500.",
      en: "HFC and HFCD basket filters, HDF cartridge filter, HFX fuel filter, HIF, MMA and MMG cartridges and FFV, FFVG, MMAG and MMAH coalescers. EN-13445, ASME VIII Div. 1 and PD5500 design."
    }
  },
  mezcladores: {
    ruta: { es: "Mezcla e instrumentación", en: "Mixing & instruments" },
    tit: { es: "Mezcla de fluidos e instrumentación", en: "Fluid mixing and instrumentation" },
    entrada: {
      es: "Mezcladores estáticos sin partes móviles, acondicionadores magnéticos de combustible y la instrumentación de presión diferencial con la que se vigila el ensuciamiento de cualquier filtro.",
      en: "Static mixers with no moving parts, magnetic fuel conditioners and the differential pressure instrumentation used to monitor fouling on any filter."
    },
    meta: { es: ["4 series", "Ø 6 mm – varios m", "4 – 20 mA"], en: ["4 series", "Ø 6 mm – several m", "4 – 20 mA"] },
    title: { es: "Mezcladores estáticos, MFC e instrumentación — HECISA", en: "Static mixers, MFC and instrumentation — HECISA" },
    desc: {
      es: "Mezcladores estáticos de 6 mm a varios metros de diámetro, acondicionadores magnéticos de combustible MFC de 400 a 6.000 l/min, manómetros de presión diferencial DPG y transmisor DPT-116.",
      en: "Static mixers from 6 mm to several metres in diameter, MFC magnetic fuel conditioners from 400 to 6,000 l/min, DPG differential pressure gauges and the DPT-116 transmitter."
    }
  }
};

/* ------------------------------------------------------------- Escritura */
function escribe(rel, contenido) {
  const destino = path.join(RAIZ, rel);
  fs.mkdirSync(path.dirname(destino), { recursive: true });
  fs.writeFileSync(destino, contenido, "utf8");
  return rel;
}

const escritos = [];
for (const l of ["es", "en"]) {
  const pre = l === "en" ? "en/" : "";
  const nom = (id) => pre + url(id, l);

  escritos.push(escribe(nom("index"), paginaInicio(l)));
  escritos.push(escribe(nom("gama"), paginaGama(l)));
  escritos.push(escribe(nom("autolimpiantes"), paginaFamilia(l, "autolimpiantes", 3, META_FAMILIA.autolimpiantes)));
  escritos.push(escribe(nom("filtros"), paginaFamilia(l, "filtros", 4, META_FAMILIA.filtros)));
  escritos.push(escribe(nom("mezcladores"), paginaFamilia(l, "mezcladores", 5, META_FAMILIA.mezcladores)));
  escritos.push(escribe(nom("ingenieria"), paginaIngenieria(l)));
  escritos.push(escribe(nom("empresa"), paginaEmpresa(l)));
  escritos.push(escribe(nom("clientes"), paginaClientes(l)));
  escritos.push(escribe(nom("galeria"), paginaGaleria(l)));
  escritos.push(escribe(nom("descargas"), paginaDescargas(l)));
  escritos.push(escribe(nom("noticias"), paginaNoticias(l)));
  escritos.push(escribe(nom("contacto"), paginaContacto(l)));
  escritos.push(escribe(nom("404"), pagina404(l)));
}

/* ------------------------------------------------------ sitemap y robots */
const hoy = new Date().toISOString().slice(0, 10);
const urls = PAGINAS.filter((p) => p.id !== "404").flatMap((p) => [
  { loc: `${SITIO}/${p.es}`, es: `${SITIO}/${p.es}`, en: `${SITIO}/en/${p.en}` },
  { loc: `${SITIO}/en/${p.en}`, es: `${SITIO}/${p.es}`, en: `${SITIO}/en/${p.en}` }
]);

escribe("sitemap.xml", `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.map((u) => `  <url>
    <loc>${u.loc}</loc>
    <xhtml:link rel="alternate" hreflang="es" href="${u.es}"/>
    <xhtml:link rel="alternate" hreflang="en" href="${u.en}"/>
    <lastmod>${hoy}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${u.loc.endsWith("index.html") ? "1.0" : "0.7"}</priority>
  </url>`).join("\n")}
</urlset>
`);

escribe("robots.txt", `User-agent: *
Allow: /

Sitemap: ${SITIO}/sitemap.xml
`);

/* ------------------------------------------------------------- Favicon */
escribe("assets/img/favicon.svg", `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <rect width="64" height="64" fill="#ffffff"/>
  <rect x="3" y="3" width="58" height="58" fill="none" stroke="#151329" stroke-width="4"/>
  <rect x="3" y="3" width="58" height="13" fill="#aab132"/>
  <text x="32" y="47" font-family="Arial Narrow, Arial, sans-serif" font-size="30" font-weight="700" text-anchor="middle" fill="#1709b3">H</text>
</svg>
`);

console.log(`HECISA — ${escritos.length} hojas + sitemap.xml + robots.txt + favicon.svg`);
console.log(escritos.join("\n"));

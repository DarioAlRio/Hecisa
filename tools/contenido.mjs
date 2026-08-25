/* ===========================================================================
   HECISA — contenido del sitio, bilingüe.
   Todo lo que hay aquí procede del propio dominio hecisa.com: de sus páginas
   o de sus 48 catálogos en PDF. Nada está inventado. Si un dato no aparece
   en un documento de HECISA, no está en este fichero.
   ========================================================================= */

export const EMPRESA = {
  marca: "HECISA",
  razon: "Hispano Europea de Comercio e Industria, S.L.",
  lema: { es: "Expertos en filtración desde 1984", en: "Filtration experts since 1984" },
  motto: { es: "La Calidad… como Norma", en: "Quality… as Code" },
  fundacion: 1984,
  calle: "Calidad, 24 — Polígono Los Olivos",
  cp: "28906",
  ciudad: "Getafe",
  provincia: "Madrid",
  pais: { es: "España", en: "Spain" },
  telefono: "+34 916 967 039",
  telefonoTel: "+34916967039",
  fax: "+34 916 950 352",
  correoInfo: ["infoweb", "hecisa.com"],
  correoSat: ["sat", "hecisa.com"],
  lat: 40.3164776,
  lon: -3.6804569,
  mapa: "https://www.google.es/maps/place/Hecisa/@40.3164817,-3.6826456,814m/data=!3m2!1e3!4b1!4m5!3m4!1s0xd422140d15c5689:0xedcb892d7136fc85!8m2!3d40.3164776!4d-3.6804569",
  dominio: "https://www.hecisa.com"
};

/* --------------------------------------------------------------- Navegación
   El raíl de pestañas de la carpeta. Las familias despliegan su índice.     */
export const NAV = [
  {
    id: "gama",
    es: { et: "Gama", url: "gama.html" },
    en: { et: "Range", url: "range.html" }
  },
  {
    id: "autolimpiantes",
    es: { et: "Autolimpiantes", url: "autolimpiantes.html" },
    en: { et: "Self-cleaning", url: "self-cleaning-filters.html" },
    panel: "autolimpiantes"
  },
  {
    id: "filtros",
    es: { et: "Filtros y cartuchos", url: "filtros.html" },
    en: { et: "Filters & cartridges", url: "filters.html" },
    panel: "filtros"
  },
  {
    id: "mezcladores",
    es: { et: "Mezcla e instrumentación", url: "mezcladores.html" },
    en: { et: "Mixing & instruments", url: "mixers-instruments.html" },
    panel: "mezcladores"
  },
  {
    id: "ingenieria",
    es: { et: "Ingeniería", url: "ingenieria.html" },
    en: { et: "Engineering", url: "engineering.html" }
  },
  {
    id: "empresa",
    es: { et: "Empresa", url: "empresa.html" },
    en: { et: "Company", url: "company.html" },
    panel: "empresa"
  },
  {
    id: "descargas",
    es: { et: "Descargas", url: "descargas.html" },
    en: { et: "Downloads", url: "downloads.html" }
  },
  {
    id: "contacto",
    es: { et: "Contacto", url: "contacto.html" },
    en: { et: "Contact", url: "contact.html" }
  }
];

/* Mapa de equivalencia de página entre idiomas, para el conmutador */
export const PARES = {
  "index.html": "index.html",
  "gama.html": "range.html",
  "autolimpiantes.html": "self-cleaning-filters.html",
  "filtros.html": "filters.html",
  "mezcladores.html": "mixers-instruments.html",
  "ingenieria.html": "engineering.html",
  "empresa.html": "company.html",
  "clientes.html": "clients.html",
  "galeria.html": "gallery.html",
  "descargas.html": "downloads.html",
  "noticias.html": "news.html",
  "contacto.html": "contact.html",
  "404.html": "404.html"
};

/* ============================================================== LAS SERIES
   Caudales, micras y materiales tomados literalmente de los catálogos.     */
export const SERIES = [
  {
    cod: "HSC",
    familia: "autolimpiantes",
    ancla: "hsc",
    img: "assets/img/productos/HSBIA-CPA.png",
    foto: "assets/img/galeria/galeria03.jpg",
    caudal: "20 – 22.000 m³/h",
    micras: { es: "desde 5 µm", en: "from 5 µm" },
    nom: {
      es: "Filtros autolimpiantes a contralavado",
      en: "Automatic backflushing self-cleaning filters"
    },
    resumen: {
      es: "Usan la propia agua filtrada para limpiarse. Se suministran completos, con cuadro de control y conexionado eléctrico de las distintas partes. El elemento filtrante es un hilo de perfil triangular arrollado helicoidalmente: la ranura entre perfiles fija el grado de filtración y se abre en el sentido del flujo, de modo que no hay ensuciamiento en profundidad.",
      en: "They use the filtered water itself to clean. Supplied complete, with control panel and electrical wiring of the different parts. The filter element is a helically wound wedge wire: the slot between profiles sets the filtration grade and widens in the direction of flow, so there is no in-depth fouling."
    },
    ventajas: {
      es: [
        "Sin interrupción del flujo durante la limpieza.",
        "Potencia consumida muy pequeña.",
        "Pequeño consumo de agua para la limpieza.",
        "Construcción robusta para una larga vida y un muy bajo mantenimiento."
      ],
      en: [
        "No flow interruption during cleaning.",
        "Very low power consumption.",
        "Small water consumption for cleaning.",
        "Heavy construction for long life and very low maintenance."
      ]
    },
    modelos: [
      { m: "HSC-J", t: { es: "7 tamaños", en: "7 sizes" }, q: "20 – 750 m³/h", g: { es: "50 µm a varios mm · serie P de 5 a 40 µm", en: "50 µm to several mm · P series 5 to 40 µm" }, mat: { es: "AISI 316, dúplex y superdúplex, Monel y otras aleaciones", en: "AISI 316, duplex & super duplex, Monel and other alloys" } },
      { m: "HSC", t: { es: "8 tamaños", en: "8 sizes" }, q: { es: "hasta 4.000 m³/h", en: "up to 4,000 m³/h" }, g: { es: "50 µm a varios mm · serie P de 5 a 40 µm", en: "50 µm to several mm · P series 5 to 40 µm" }, mat: { es: "Acero al carbono con epoxy, AISI 316, dúplex y superdúplex, Monel", en: "Epoxy-coated carbon steel, AISI 316, duplex & super duplex, Monel" } },
      { m: "HSC2", t: { es: "13 tamaños", en: "13 sizes" }, q: { es: "hasta 22.000 m³/h", en: "up to 22,000 m³/h" }, g: { es: "50 µm a varios mm · serie P de 5 a 40 µm", en: "50 µm to several mm · P series 5 to 40 µm" }, mat: { es: "Acero al carbono con epoxy, AISI 316, dúplex y superdúplex, Monel", en: "Epoxy-coated carbon steel, AISI 316, duplex & super duplex, Monel" } }
    ],
    docs: ["HSC-J-Gen-13-es.pdf", "HSC-J-Gen-13_en.pdf", "HSC-Description-working_12-en.pdf"]
  },
  {
    cod: "HSBI",
    familia: "autolimpiantes",
    ancla: "hsbi",
    img: "assets/img/productos/HSBI-skid.png",
    foto: "assets/img/galeria/galeria11.jpg",
    caudal: "10 – 3.000 m³/h",
    micras: { es: "desde 20 µm", en: "from 20 µm" },
    nom: {
      es: "Filtros autolimpiantes por rascado",
      en: "Scraping self-cleaning filters"
    },
    resumen: {
      es: "Limpieza por rascado de la superficie filtrante, válidos para agua y otros fluidos, incluidos los viscosos y cargados. El diseño hidrodinámico interior hace que las partículas mayores y más pesadas precipiten directamente al fondo de la carcasa. La descarga de sólidos se produce cada n número de limpiezas, con muy poco líquido.",
      en: "Cleaning by scraping the filtering surface, valid for water and other fluids, including viscous and loaded ones. The internal hydrodynamic design makes the larger, heavier particles settle straight to the bottom of the housing. Solids are discharged every n cleanings, using very little liquid."
    },
    ventajas: {
      es: [
        "Limpieza sin interrupción del servicio.",
        "Aptos para fluidos viscosos y cargados.",
        "Aplicable a la separación de sólidos de densidad mayor que la del fluido.",
        "Muy poco líquido para evacuar los sólidos retenidos.",
        "Construidos en AISI 316 L, 317 LN, dúplex S32205, superdúplex, Monel, titanio y Hastelloy."
      ],
      en: [
        "Cleaning without interrupting service.",
        "Suitable for viscous and loaded fluids.",
        "Applicable to separating solids denser than the fluid.",
        "Very little liquid to discharge the retained solids.",
        "Built in AISI 316 L, 317 LN, duplex S32205, super duplex, Monel, titanium and Hastelloy."
      ]
    },
    codificacion: {
      es: "HSBI-A-BB/BB-CC-D-E-F-GH · A materiales · B conexiones entrada/salida · C tamaño · D grado de filtración · E juntas · F accionamiento de la limpieza · G accionamiento de la válvula de drenaje · H válvula de drenaje",
      en: "HSBI-A-BB/BB-CC-D-E-F-GH · A materials · B inlet/outlet connections · C size · D filtration grade · E gaskets · F cleaning drive · G drain valve drive · H drain valve"
    },
    opciones: [
      { et: { es: "Materiales (A)", en: "Materials (A)" }, v: "W AISI 316 L · X AISI 317 LN · D dúplex S32205 · S superdúplex · M Monel · T titanio · H Hastelloy" },
      { et: { es: "Grado de filtración (D)", en: "Filtration grade (D)" }, v: "020 · 050 · 075 · 100 · 150 · 200 · 300 · 500 · 600 · 700 · 800 · 1000 · 2000 · 3000 · 4000 · 5000 µm" },
      { et: { es: "Juntas (E)", en: "Gaskets (E)" }, v: { es: "N neopreno · V vitón · S silicona · E EPDM", en: "N neoprene · V Viton · S silicone · E EPDM" } },
      { et: { es: "Accionamiento de limpieza (F)", en: "Cleaning drive (F)" }, v: { es: "M manual · T eléctrico trifásico · TE eléctrico antideflagrante · N neumático · O oleohidráulico", en: "M manual · T three-phase electric · TE flameproof electric · N pneumatic · O hydraulic" } },
      { et: { es: "Válvula de drenaje (G)", en: "Drain valve (G)" }, v: { es: "BS bola neumática simple efecto · BD bola neumática doble efecto · BM bola motorizada eléctrica · MA bola manual", en: "BS single-acting pneumatic ball · BD double-acting pneumatic ball · BM electric motorised ball · MA manual ball" } }
    ],
    docs: ["HSBI-General-13.pdf", "HSBI-Gen-13-en.pdf", "HSBI_HSBIO-J-X-05_10-Gen-13.pdf", "HSBI4-pres-es.pdf", "HSBI4-pres-en.pdf"]
  },
  {
    cod: "HSBIA",
    familia: "autolimpiantes",
    ancla: "hsbia",
    img: "assets/img/productos/HSBIA-CPA.png",
    foto: "assets/img/galeria/galeria09.jpg",
    caudal: "100 – 10.000+ m³/h",
    micras: { es: "200 µm a varios mm", en: "200 µm to several mm" },
    nom: {
      es: "Autolimpiantes con evacuación hidrodinámica",
      en: "Self-cleaning filters with hydrodynamic solids discharge"
    },
    resumen: {
      es: "Rascado superficial con evacuación hidrodinámica de sólidos. Es la serie de gran caudal: limpieza en un espacio de tiempo muy corto y sin interrupción del flujo. Fabricados en AISI 316, aceros dúplex y superdúplex, Monel y otras aleaciones.",
      en: "Surface scraping with hydrodynamic solids discharge. This is the high-flow series: cleaning in a very short time and with no flow interruption. Built in AISI 316, duplex and super duplex steels, Monel and other alloys."
    },
    ventajas: {
      es: [
        "Tiempo de limpieza muy corto.",
        "Limpieza sin interrupción del flujo.",
        "Versión CPA desde DN 200 (NB 8).",
        "Versión VPN de DN 450 a DN 600 (NB 16 a 24)."
      ],
      en: [
        "Very short cleaning time.",
        "Cleaning with no flow interruption.",
        "CPA version from DN 200 (NB 8).",
        "VPN version from DN 450 to DN 600 (NB 16 to 24)."
      ]
    },
    docs: ["Bro-Gen-14-12_es.pdf", "Filters-gen-14-1_en.pdf"]
  },
  {
    cod: "HSBIL",
    familia: "autolimpiantes",
    ancla: "hsbil",
    img: "assets/img/productos/HSBIL_CPH.png",
    foto: "assets/img/galeria/galeria18.jpg",
    caudal: "30 – 10.000+ m³/h",
    micras: { es: "desde 25 µm", en: "from 25 µm" },
    nom: {
      es: "Autolimpiantes por rascado y succión",
      en: "Scraping and suction self-cleaning filters"
    },
    resumen: {
      es: "Sistema de limpieza por rascado y succión de la superficie filtrante, con diseños hidrodinámicos avanzados que aumentan la eficiencia de la limpieza. Es la serie con más ejecuciones de montaje: hay una versión para cada posición de tubería, incluida la de servicio naval.",
      en: "Cleaning by scraping and suction of the filtering surface, with advanced hydrodynamic designs that increase cleaning efficiency. This is the series with the most mounting arrangements: there is a version for every pipe position, including marine service."
    },
    ventajas: {
      es: [
        "Limpieza sin interrupción del flujo.",
        "Muy bajo caudal de contralavado requerido para la limpieza.",
        "Distintas ejecuciones para montaje en cualquier posición.",
        "Construcción pesada para una larga vida en servicio.",
        "Muy bajo mantenimiento requerido."
      ],
      en: [
        "Cleaning without flow interruption.",
        "Very low back flushing flow required for cleaning.",
        "Several performances to allow assembly at any position.",
        "Heavy construction for a long service life.",
        "Very low maintenance required."
      ]
    },
    modelos: [
      { m: "CPH", t: { es: "Horizontal", en: "Horizontal" }, q: "", g: { es: "Montaje horizontal", en: "Horizontal mounting" }, mat: "" },
      { m: "CPA", t: { es: "Universal", en: "Universal" }, q: "", g: { es: "Cualquier posición; la salida puede tener cualquier orientación", en: "Any position; the outlet can have any orientation" }, mat: "" },
      { m: "VPN", t: { es: "Vertical", en: "Vertical" }, q: "", g: { es: "Entrada por la parte baja, salida por la alta", en: "Inlet at the bottom, outlet at the top" }, mat: "" },
      { m: "VPI", t: { es: "Vertical inversa", en: "Vertical inverted" }, q: "", g: { es: "Entrada por la parte alta, salida por la baja", en: "Inlet at the top, outlet at the bottom" }, mat: "" },
      { m: "VPL", t: { es: "En línea", en: "In line" }, q: "", g: { es: "Montaje en línea con la tubería", en: "In-line mounting with the pipe" }, mat: "" }
    ],
    docs: ["HSBIL_Gen_13_en.pdf", "HSBIL-Description-working_12.pdf"]
  },

  {
    cod: "HFC",
    familia: "filtros",
    ancla: "hfc",
    img: "assets/img/productos/HFC-ANG.png",
    foto: "assets/img/galeria/galeria28.jpg",
    caudal: { es: "manual", en: "manual" },
    micras: { es: "1 µm a varios mm", en: "1 µm to several mm" },
    nom: { es: "Filtros de cesta", en: "Basket filters" },
    resumen: {
      es: "Filtros manuales para todas las aplicaciones, con gran superficie filtrante. Disponibles en simple, doble (HFCD), vertical, horizontal, en línea y otras configuraciones. Fabricados en acero al carbono, inoxidable, dúplex y superdúplex, Monel y más.",
      en: "Manual filters for all applications, with a large filtering surface. Available as simplex, duplex (HFCD), vertical, horizontal, in-line and other configurations. Built in carbon steel, stainless steel, duplex and super duplex, Monel and more."
    },
    ventajas: {
      es: [
        "Grados de filtración desde 1 micra a varios milímetros.",
        "Gran superficie filtrante.",
        "Opciones: simple, doble, vertical, horizontal, en línea.",
        "Construcción robusta para una larga vida en servicio y un muy bajo mantenimiento."
      ],
      en: [
        "Filtration grades from 1 micron to several millimetres.",
        "Large filtering surface.",
        "Options: simplex, duplex, vertical, horizontal, in-line.",
        "Heavy construction for long service life and very low maintenance."
      ]
    },
    docs: ["Bro-Gen-14-12_es.pdf", "Filters-gen-14-1_en.pdf"]
  },
  {
    cod: "HDF",
    familia: "filtros",
    ancla: "hdf",
    img: "assets/img/productos/HFCL.png",
    foto: "assets/img/galeria/galeria38.jpg",
    caudal: { es: "9 y 17 litros", en: "9 and 17 litres" },
    micras: { es: "según cartucho", en: "per cartridge" },
    nom: { es: "Filtro de cartucho de servicio general", en: "General service cartridge filter" },
    resumen: {
      es: "Carcasa para servicio general, incluyendo gasolina, gasóleo, biodiésel y gases. Cabeza de aluminio, vaso en AISI 304 y juntas de vitón. Para cartucho de 6″ de diámetro exterior y 3″ interior, del tipo microfiltro, monitor o de absorción.",
      en: "Housing for general service, including petrol, diesel, biodiesel and gases. Aluminium head, AISI 304 bowl and Viton gaskets. For 6″ outside / 3″ inside diameter cartridges, of microfilter, monitor or absorption type."
    },
    ficha: [
      { k: { es: "Tamaños", en: "Sizes" }, v: { es: "2, para cartuchos de 368 y 727 mm de longitud", en: "2, for 368 and 727 mm long cartridges" } },
      { k: { es: "Volumen", en: "Volume" }, v: { es: "9 litros (tamaño 1) · 17 litros (tamaño 2)", en: "9 litres (size 1) · 17 litres (size 2)" } },
      { k: { es: "Presión de servicio", en: "Working pressure" }, v: { es: "1 MPa máxima · opción 2 MPa", en: "1 MPa max. · 2 MPa option" } },
      { k: { es: "Conexiones", en: "Connections" }, v: { es: "Entrada/salida 2″ BSP o NPT · vaciado ½″ BSP · venteo ⅜″ BSP", en: "Inlet/outlet 2″ BSP or NPT · drain ½″ BSP · vent ⅜″ BSP" } },
      { k: { es: "Diseño", en: "Design" }, v: { es: "EN-13445 estándar · ASME VIII Div. 1 opcional · marcado CE módulo A1", en: "EN-13445 standard · ASME VIII Div. 1 option · CE marking module A1" } },
      { k: { es: "Incluye", en: "Included" }, v: { es: "Manómetro diferencial, válvula de vaciado y válvula de purga de aire", en: "Differential pressure gauge, drain valve and air bleed valve" } }
    ],
    docs: ["HDF-0-13-es.pdf", "HDF-0-13-en.pdf"]
  },
  {
    cod: "HFX",
    familia: "filtros",
    ancla: "hfx",
    img: "assets/img/productos/HFCD.png",
    foto: "assets/img/galeria/galeria25.jpg",
    caudal: { es: "3 tamaños", en: "3 sizes" },
    micras: { es: "según cartucho", en: "per cartridge" },
    nom: { es: "Filtro de combustible", en: "Fuel filter" },
    resumen: {
      es: "Carcasa para servicio con gasolina, gasóleo, biodiésel y otros. Construcción en X5CrNi18-10 / AISI 304 con juntas de vitón, para cartucho de 6″ exterior y 3″ interior de tipo microfiltro, monitor o de absorción.",
      en: "Housing for service with petrol, diesel, biodiesel and others. Built in X5CrNi18-10 / AISI 304 with Viton gaskets, for 6″ outside / 3″ inside diameter microfilter, monitor or absorption cartridges."
    },
    ficha: [
      { k: { es: "Tamaños", en: "Sizes" }, v: { es: "3, para cartuchos de 368, 727 y 1.099 mm", en: "3, for 368, 727 and 1,099 mm cartridges" } },
      { k: { es: "Presión de servicio", en: "Working pressure" }, v: { es: "0,6 MPa máxima · opciones 1 y 1,6 MPa", en: "0.6 MPa max. · 1 and 1.6 MPa options" } },
      { k: { es: "Conexiones", en: "Connections" }, v: { es: "2″ o 3″ BSP · 3″ con brida · opción en línea", en: "2″ or 3″ BSP · 3″ flanged · in-line option" } },
      { k: { es: "Diseño", en: "Design" }, v: { es: "EN-13445 · ASME VIII Div. 1 · PD5500 · marcado módulo SEP", en: "EN-13445 · ASME VIII Div. 1 · PD5500 · SEP module marking" } },
      { k: { es: "Incluye", en: "Included" }, v: { es: "Manómetro diferencial, válvula de vaciado, purga de aire y tres placas de anclaje", en: "Differential pressure gauge, drain valve, air bleed and three anchor plates" } }
    ],
    docs: ["HFX-0-13-es.pdf", "HFX-0-13-en.pdf"]
  },
  {
    cod: "FFVG",
    familia: "filtros",
    ancla: "ffvg",
    img: "assets/img/productos/FFVG.png",
    foto: "assets/img/galeria/galeria33.jpg",
    caudal: { es: "oil & gas", en: "oil & gas" },
    micras: { es: "coalescencia y separación", en: "coalescing and separation" },
    nom: { es: "Filtros coalescentes y separadores FFV, FFVG, MMAG y MMAH", en: "FFV, FFVG, MMAG and MMAH coalescing filters and separators" },
    resumen: {
      es: "Familia de filtros y separadores para servicio de petróleo y gas: filtro separador de combustible, coalescentes verticales y horizontales y separadores de fases. Construcción en acero al carbono, inoxidable, dúplex y superdúplex.",
      en: "Family of filters and separators for oil & gas service: fuel filter separator, vertical and horizontal coalescers and phase separators. Built in carbon steel, stainless steel, duplex and super duplex."
    },
    ventajas: {
      es: [
        "Separadores gas–líquido, líquido–líquido y de condensado.",
        "Separadores ciclónicos y ciclones de proceso de alta presión.",
        "Sistemas de deshidratación serie HDA.",
        "Filtros de servicio especial serie HFESP."
      ],
      en: [
        "Gas–liquid, liquid–liquid and condensate separators.",
        "Cyclonic separators and high-pressure process cyclones.",
        "HDA series dehydration systems.",
        "HFESP special service filters."
      ]
    },
    docs: ["Filters-gen-14-1_en.pdf", "Bro-Gen-14-12_es.pdf"]
  },
  {
    cod: "HIF",
    familia: "filtros",
    ancla: "hif",
    img: "assets/img/productos/HSBIL-VPN-J.png",
    foto: "assets/img/galeria/galeria21.jpg",
    caudal: { es: "líquidos, gases y vapores", en: "liquids, gases and vapours" },
    micras: { es: "según cartucho", en: "per cartridge" },
    nom: { es: "Filtros de cartuchos HIF, MMA y MMG", en: "HIF, MMA and MMG cartridge filters" },
    resumen: {
      es: "Filtros de cartuchos para múltiples aplicaciones: líquidos, gases y vapores. Distintos grados de filtración, con cartuchos fabricados en diferentes materiales y disponibles en varias configuraciones. Construidos en acero al carbono e inoxidable.",
      en: "Cartridge filters for multiple applications: liquids, gases and vapours. Different filtration grades, with cartridges made in different materials and available in several configurations. Built in carbon and stainless steel."
    },
    ventajas: {
      es: [
        "Filtros de bolsas y microfiltros.",
        "Filtros en línea y filtros para gases.",
        "Filtros para vapor.",
        "Filtros de cartucho simples y dobles para servicio naval."
      ],
      en: [
        "Bag filters and microfilters.",
        "In-line filters and gas filters.",
        "Steam filters.",
        "Simplex and duplex cartridge filters for marine service."
      ]
    },
    docs: ["Bro-Gen-14-12_es.pdf", "Filters-gen-14-1_en.pdf"]
  },

  {
    cod: "MEZ",
    familia: "mezcladores",
    ancla: "mezcladores-estaticos",
    img: "assets/img/productos/HSBIL-VPI-.png",
    foto: "assets/img/galeria/galeria43.jpg",
    caudal: { es: "Ø 6 mm a varios metros", en: "Ø 6 mm to several metres" },
    micras: { es: "2ⁿ estriaciones", en: "2ⁿ striations" },
    nom: { es: "Mezcladores estáticos", en: "Static mixers" },
    resumen: {
      es: "Un mezclador estático es un dispositivo para mezclar dos o más fluidos sin partes móviles. Consiste en una serie de elementos fijos —deflectores metálicos— alojados dentro de una carcasa tubular que puede ir de 6 mm a varios metros de diámetro. Al pasar por ellos, las corrientes se mezclan de forma continua.",
      en: "A static mixer is a device for mixing two or more fluids with no moving parts. It consists of a series of fixed elements — metal baffles — inside a tubular housing that can range from 6 mm to several metres in diameter. As the streams move through, they are continuously blended."
    },
    mecanismos: [
      {
        t: { es: "División de flujo", en: "Flow division" },
        d: {
          es: "En régimen laminar, el material se divide en el borde de ataque de cada elemento y sigue los canales que crea su forma. En cada elemento sucesivo los dos canales vuelven a dividirse: el número de estriaciones producidas es 2ⁿ, siendo n el número de elementos.",
          en: "In laminar flow, the material divides at the leading edge of each element and follows the channels created by its shape. At each succeeding element the two channels divide again: the number of striations produced is 2ⁿ, where n is the number of elements."
        }
      },
      {
        t: { es: "Mezcla radial", en: "Radial mixing" },
        d: {
          es: "En régimen turbulento o laminar, la circulación rotacional del material alrededor de su propio centro hidráulico en cada canal produce mezcla radial, reduciendo o eliminando los gradientes radiales de temperatura, velocidad y composición.",
          en: "In either turbulent or laminar flow, rotational circulation of the material around its own hydraulic centre in each channel causes radial mixing, reducing or eliminating radial gradients of temperature, velocity and composition."
        }
      },
      {
        t: { es: "Mezcla tangencial", en: "Tangential mixing" },
        d: {
          es: "El cambio de dirección de las líneas de circulación en cada canal produce mezcla tangencial, que reduce o elimina los gradientes tangenciales de temperatura, velocidad y composición del material procesado.",
          en: "The change of direction of the circulation lines in each channel causes tangential mixing, which reduces or eliminates tangential gradients of temperature, velocity and composition of the processed material."
        }
      }
    ],
    ventajas: {
      es: [
        "Aceites con agua o aditivos.",
        "Productos químicos con agua.",
        "Resinas con catalizadores.",
        "Productos químicos para proceso o reacción.",
        "Gases de proceso o técnicos."
      ],
      en: [
        "Oils with water or additives.",
        "Chemicals with water.",
        "Resins with catalysts.",
        "Chemicals for processing or reaction.",
        "Process or technical gases."
      ]
    },
    docs: ["Mezcladores_estaticos-12-es.pdf", "Static_mixers-12-en.pdf", "Static_mixers_description_en.pdf"]
  },
  {
    cod: "MFC",
    familia: "mezcladores",
    ancla: "mfc",
    img: "assets/img/productos/skid-3x.png",
    foto: "assets/img/galeria/galeria39.jpg",
    caudal: "400 – 6.000 l/min",
    micras: { es: "< 20 mbar de pérdida", en: "< 20 mbar pressure drop" },
    nom: { es: "Acondicionadores magnéticos de combustible", en: "Magnetic fuel conditioners" },
    resumen: {
      es: "Equipos de tratamiento de combustible que eliminan la contaminación biológica, arrastran los elementos abrasivos de tuberías y tanques, reducen la saturación de los filtros y mejoran la ignición y la combustión. Compatibles con todos los tipos de combustible y biocombustible, en construcción íntegra en acero inoxidable.",
      en: "Fuel treatment devices that eliminate biological contamination, remove abrasive elements from pipes and tanks, reduce filter saturation and improve ignition and combustion. Compatible with all fuel and biofuel types, in full stainless steel construction."
    },
    ventajas: {
      es: [
        "Imanes de alta potencia recubiertos de acero inoxidable para evitar corrosión y degradación.",
        "Pérdida de carga muy baja, inferior a 20 mbar.",
        "Montaje en cualquier posición.",
        "Diseño EN-13445, reglamentación PED.",
        "Existen dispositivos magnéticos para insertar en los filtros de cartucho HDF y HFX."
      ],
      en: [
        "High-power magnets covered with stainless steel to avoid corrosion and degradation.",
        "Very low pressure drop, less than 20 mbar.",
        "Any mounting position.",
        "EN-13445 design, PED regulations.",
        "Magnetic devices are available to insert inside the HDF and HFX cartridge filters."
      ]
    },
    tabla: {
      cab: { es: ["Modelo", "Caudal normal / máx.", "Conexión", "Peso vacío", "Volumen", "Longitud"], en: ["Model", "Normal / max. flow", "Connection", "Empty weight", "Volume", "Length"] },
      filas: [
        ["MFC 112-SG02", "400 / 500 l/min", "2″ ISO 228", "4 kg", "3 l", "594 mm"],
        ["MFC 124-FE03", "1.000 / 1.200 l/min", "DN 80 PN16", "15 kg", "8 l", "934 mm"],
        ["MFC 324-FE04", "2.000 / 2.500 l/min", "DN 100", "24 kg", "19 l", "1.058 mm"],
        ["MFC 624-FE06", "3.300 / 4.000 l/min", "DN 150", "40 kg", "32 l", "1.044 mm"],
        ["MFC 1224-FE08", "5.000 / 6.000 l/min", "DN 200", "70 kg", "52 l", "1.110 mm"]
      ],
      pie: {
        es: "Presión de diseño 1,6 MPa · presión de prueba 2,29 MPa · temperatura de diseño 40 °C · acabado por decapado y pasivado. Consultar para otros caudales y diámetros.",
        en: "Design pressure 1.6 MPa · test pressure 2.29 MPa · design temperature 40 °C · pickling and passivation finish. Ask for other flows and diameters."
      }
    },
    docs: ["MFC-0-14-es.pdf", "MFC-0-14-2-en.pdf", "MFC-0-14-aplicaciones-es-en.pdf"]
  },
  {
    cod: "DPG",
    familia: "mezcladores",
    ancla: "dpg",
    img: "assets/img/productos/HSBIL-CPA-G.png",
    foto: "assets/img/galeria/galeria31.jpg",
    caudal: { es: "hasta 400 bar", en: "up to 400 bar" },
    micras: { es: "0 – 10 bar Δp", en: "0 – 10 bar Δp" },
    nom: { es: "Manómetros de presión diferencial", en: "Differential pressure gauges" },
    resumen: {
      es: "Instrumentación para vigilar el ensuciamiento del elemento filtrante. Los modelos DPG2 llevan mecanismo de pistón magnético: ni el indicador ni los contactos tocan el fluido. Los modelos de dial tricolor señalan de un vistazo la zona verde, la amarilla y la roja.",
      en: "Instrumentation to monitor filter element fouling. The DPG2 models use a magnetic piston mechanism: neither the indicator nor the contacts touch the fluid. The three-colour dial models show the green, yellow and red zone at a glance."
    },
    tabla: {
      cab: { es: ["Modelo", "Presión estática máx.", "Rango Δp", "Cuerpo", "Notas"], en: ["Model", "Max. static pressure", "Δp range", "Body", "Notes"] },
      filas: [
        ["DPG2-M", "400 bar", "0 – 1 bar", "Aleación 400 / Inconel", { es: "2 contactos conmutados, ajuste independiente", en: "2 changeover contacts, independent setting" }],
        ["DPG2-W", "400 bar", "0 – 1 bar", "AISI 316", { es: "Esfera 80 mm estándar; 63, 100, 115 y 150 mm", en: "80 mm dial standard; 63, 100, 115 and 150 mm" }],
        ["DPG-975-25", "20 bar", "0 – 1,75 bar", "GFN / vitón", { es: "Dial tricolor, doble esfera reversible, opción contacto reed", en: "Three-colour dial, reversible double dial, reed contact option" }],
        ["DPG-550-30", "20 bar", "0 – 2,1 bar", "GFN / Buna-N", { es: "Dial tricolor, elastómeros Buna-N u opción vitón", en: "Three-colour dial, Buna-N elastomers or Viton option" }],
        ["DPG-405", "20 bar", "0 – 1,5 bar", "GFN", { es: "Dial tricolor", en: "Three-colour dial" }],
        ["DPG-175", "20 bar", "0 – 1,5 bar", "GFN", { es: "Indicador bicolor, montaje reversible, visible a 180°", en: "Two-colour indicator, reversible mounting, visible at 180°" }]
      ],
      pie: {
        es: "Zonas del dial tricolor DPG-975-25: verde 0 – 0,7 bar, amarilla 0,7 – 1,4 bar, roja 1,4 – 1,75 bar. Conexiones ¼″ NPTM o ⅜″-24 UNF macho según modelo.",
        en: "DPG-975-25 three-colour dial zones: green 0 – 0.7 bar, yellow 0.7 – 1.4 bar, red 1.4 – 1.75 bar. Connections ¼″ NPTM or ⅜″-24 UNF male depending on model."
      }
    },
    docs: ["Dif-pres-gauges_es.pdf", "Dif-pres-gauges_en.pdf"]
  },
  {
    cod: "DPT-116",
    familia: "mezcladores",
    ancla: "dpt",
    img: "assets/img/productos/FFVG-2.png",
    foto: "assets/img/galeria/galeria40.jpg",
    caudal: { es: "4 – 20 mA", en: "4 – 20 mA" },
    micras: { es: "±0,075 % del span", en: "±0.075 % of span" },
    nom: { es: "Transmisor de presión diferencial", en: "Differential pressure transmitter" },
    resumen: {
      es: "Transmisor para llevar la señal de ensuciamiento al sistema de control. Salida a dos hilos de 4 a 20 mA, con opciones de protocolo HART o Smart Field, y versiones antideflagrante e intrínsecamente segura para zona clasificada.",
      en: "Transmitter to take the fouling signal to the control system. Two-wire 4 to 20 mA output, with HART or Smart Field protocol options, and flameproof and intrinsically safe versions for classified areas."
    },
    ficha: [
      { k: { es: "Rango", en: "Range" }, v: { es: "Mínimo 0–0,125 kPa a 0–0,15 kPa · máximo 0–4 MPa a 0–25 MPa", en: "Minimum 0–0.125 kPa to 0–0.15 kPa · maximum 0–4 MPa to 0–25 MPa" } },
      { k: { es: "Presión estática máx.", en: "Max. static pressure" }, v: { es: "4 MPa, opción hasta 40 MPa", en: "4 MPa, option up to 40 MPa" } },
      { k: { es: "Precisión", en: "Accuracy" }, v: { es: "±0,075 % del span", en: "±0.075 % of span" } },
      { k: { es: "Temperatura", en: "Temperature" }, v: { es: "Trabajo −25 a 95 °C · ambiente −25 a 80 °C", en: "Working −25 to 95 °C · ambient −25 to 80 °C" } },
      { k: { es: "Partes en contacto", en: "Wetted parts" }, v: { es: "AISI 316 L o Alloy C276 · opción tantalio", en: "AISI 316 L or Alloy C276 · tantalum option" } },
      { k: { es: "Salida", en: "Output" }, v: { es: "Dos hilos 4–20 mA · opciones HART o Smart Field", en: "Two wires 4–20 mA · HART or Smart Field options" } },
      { k: { es: "Alimentación", en: "Power supply" }, v: { es: "9 a 36 V CC", en: "9 to 36 VDC" } },
      { k: { es: "Envolvente", en: "Enclosure" }, v: { es: "IP 65 · opciones Ex d II B T5 y Ex ia II C T6", en: "IP 65 · Ex d II B T5 and Ex ia II C T6 options" } },
      { k: { es: "Display", en: "Display" }, v: { es: "LCD de cuatro dígitos, configurable", en: "Four-digit LCD, configurable" } }
    ],
    docs: ["DPT-116-V16-es.pdf", "DPT-116-V16-en.pdf"]
  }
];

/* =================================================== REGISTRO DOCUMENTAL
   Los 48 PDF del dominio, con su grupo, idioma y peso real en disco.      */
export const DOCS = [
  { f: "Bro-Gen-14-12_es.pdf", kb: 762, g: "catalogo", idi: "es", t: { es: "Catálogo resumido de filtración", en: "Filtration brochure (Spanish)" } },
  { f: "Filters-gen-14-1_en.pdf", kb: 851, g: "catalogo", idi: "en", t: { es: "Filters general brochure (inglés)", en: "Filters general brochure" } },
  { f: "Hecisapresen.pdf", kb: 589, g: "corporativo", idi: "en", t: { es: "Información corporativa: historia, medios y calidad", en: "Corporate information: history, resources and quality" } },
  { f: "PA2019.pdf", kb: 126, g: "corporativo", idi: "es", t: { es: "Política integrada de calidad y gestión ambiental", en: "Integrated quality and environmental management policy" } },
  { f: "iso-9001.pdf", kb: 167, g: "corporativo", idi: "en", t: { es: "Certificado ISO 9001", en: "ISO 9001 certificate" } },
  { f: "NCAGE.pdf", kb: 41, g: "corporativo", idi: "en", t: { es: "Código NCAGE (OTAN)", en: "NCAGE code (NATO)" } },

  { f: "HSC-J-Gen-13-es.pdf", kb: 242, g: "autolimpiantes", idi: "es", t: { es: "Filtros autolimpiantes HSC-J", en: "HSC-J self-cleaning filters (Spanish)" } },
  { f: "HSC-J-Gen-13_en.pdf", kb: 268, g: "autolimpiantes", idi: "en", t: { es: "HSC-J self cleaning filters (inglés)", en: "HSC-J self-cleaning filters" } },
  { f: "HSC-Description-working_12-en.pdf", kb: 346, g: "autolimpiantes", idi: "en", t: { es: "HSC: descripción y funcionamiento (inglés)", en: "HSC: description and working" } },
  { f: "HSBI-General-13.pdf", kb: 227, g: "autolimpiantes", idi: "es", t: { es: "Filtros autolimpiantes HSBI", en: "HSBI self-cleaning filters (Spanish)" } },
  { f: "HSBI-Gen-13-en.pdf", kb: 185, g: "autolimpiantes", idi: "en", t: { es: "HSBI self cleaning filters (inglés)", en: "HSBI self-cleaning filters" } },
  { f: "HSBI_HSBIO-J-X-05_10-Gen-13.pdf", kb: 218, g: "autolimpiantes", idi: "es", t: { es: "Filtros HSBI / HSBIO-X05", en: "HSBI / HSBIO-X05 filters" } },
  { f: "HSBI4-pres-es.pdf", kb: 117, g: "autolimpiantes", idi: "es", t: { es: "HSBI: nuevo modelo de elemento múltiple", en: "HSBI: new multiple element model (Spanish)" } },
  { f: "HSBI4-pres-en.pdf", kb: 117, g: "autolimpiantes", idi: "en", t: { es: "HSBI4: new filter multiple elements (inglés)", en: "HSBI4: new filter with multiple elements" } },
  { f: "HSBIL_Gen_13_en.pdf", kb: 419, g: "autolimpiantes", idi: "en", t: { es: "HSBIL self cleaning filters (inglés)", en: "HSBIL self-cleaning filters" } },
  { f: "HSBIL-Description-working_12.pdf", kb: 297, g: "autolimpiantes", idi: "es", t: { es: "HSBIL: descripción y funcionamiento", en: "HSBIL: description and working" } },
  { f: "HSB_General_13_en.pdf", kb: 227, g: "autolimpiantes", idi: "en", t: { es: "HSB self cleaning filters (inglés)", en: "HSB self-cleaning filters" } },
  { f: "HSB-J-Pres-13_en.pdf", kb: 160, g: "autolimpiantes", idi: "en", t: { es: "HSB-J self cleaning filter (inglés)", en: "HSB-J self-cleaning filter" } },

  { f: "HDF-0-13-es.pdf", kb: 110, g: "filtros", idi: "es", t: { es: "Filtro de cartucho HDF", en: "HDF cartridge filter (Spanish)" } },
  { f: "HDF-0-13-en.pdf", kb: 113, g: "filtros", idi: "en", t: { es: "HDF cartridge filter (inglés)", en: "HDF cartridge filter" } },
  { f: "HFX-0-13-es.pdf", kb: 107, g: "filtros", idi: "es", t: { es: "Filtro de combustible HFX", en: "HFX fuel filter (Spanish)" } },
  { f: "HFX-0-13-en.pdf", kb: 104, g: "filtros", idi: "en", t: { es: "HFX fuel filter (inglés)", en: "HFX fuel filter" } },

  { f: "Mezcladores_estaticos-12-es.pdf", kb: 263, g: "mezcladores", idi: "es", t: { es: "Mezcladores estáticos", en: "Static mixers (Spanish)" } },
  { f: "Static_mixers-12-en.pdf", kb: 265, g: "mezcladores", idi: "en", t: { es: "Static mixers (inglés)", en: "Static mixers" } },
  { f: "Static_mixers_description_en.pdf", kb: 84, g: "mezcladores", idi: "en", t: { es: "Mezcladores estáticos: descripción (inglés)", en: "Static mixer description" } },
  { f: "MFC-0-14-es.pdf", kb: 90, g: "mezcladores", idi: "es", t: { es: "Acondicionador magnético de combustible MFC", en: "MFC magnetic fuel conditioner (Spanish)" } },
  { f: "MFC-0-14-2-en.pdf", kb: 145, g: "mezcladores", idi: "en", t: { es: "MFC magnetic fuel conditioners (inglés)", en: "MFC magnetic fuel conditioners" } },
  { f: "MFC-0-14-aplicaciones-es-en.pdf", kb: 160, g: "mezcladores", idi: "es", t: { es: "MFC: aplicaciones del acondicionador magnético", en: "MFC: magnetic conditioner applications" } },

  { f: "Dif-pres-gauges_es.pdf", kb: 342, g: "instrumentacion", idi: "es", t: { es: "Manómetros de presión diferencial", en: "Differential pressure gauges (Spanish)" } },
  { f: "Dif-pres-gauges_en.pdf", kb: 274, g: "instrumentacion", idi: "en", t: { es: "Differential pressure gauges (inglés)", en: "Differential pressure gauges" } },
  { f: "DPT-116-V16-es.pdf", kb: 160, g: "instrumentacion", idi: "es", t: { es: "Transmisor de presión diferencial DPT-116", en: "DPT-116 differential pressure transmitter (Spanish)" } },
  { f: "DPT-116-V16-en.pdf", kb: 162, g: "instrumentacion", idi: "en", t: { es: "DPT-116 differential pressure transmitter (inglés)", en: "DPT-116 differential pressure transmitter" } },
  { f: "CCL-IP66.pdf", kb: 54, g: "instrumentacion", idi: "es", t: { es: "Cuadro de control con protección IP66", en: "Control box with IP66 protection" } },

  { f: "Custom_Engineered_Systems.pdf", kb: 207, g: "ingenieria", idi: "es", t: { es: "Ingeniería personalizada / Custom Engineered Systems", en: "Custom Engineered Systems" } },
  { f: "Condensate_Polishing.pdf", kb: 222, g: "ingenieria", idi: "en", t: { es: "Condensate polishing (inglés)", en: "Condensate polishing" } },
  { f: "Filtro_de_pulido_de_condensado.pdf", kb: 204, g: "ingenieria", idi: "es", t: { es: "Filtro de pulido de condensado", en: "Condensate polishing filter (Spanish)" } },
  { f: "Tower_water_filtration_application.pdf", kb: 223, g: "ingenieria", idi: "en", t: { es: "Filtración de agua de torres de refrigeración (inglés)", en: "Cooling tower water filtration application" } },
  { f: "SCF-Arabia-Saudita.pdf", kb: 165, g: "ingenieria", idi: "es", t: { es: "Filtros autolimpiantes de agua de mar para Arabia Saudí", en: "Seawater self-cleaning filters for Saudi Arabia" } },

  { f: "Formulario_filtracion_liquidos_1.1.pdf", kb: 217, g: "formulario", idi: "es", t: { es: "Formulario: filtración de líquidos", en: "Form: liquids filtration (Spanish)" } },
  { f: "Form_Liquids_filtration_1.1.pdf", kb: 245, g: "formulario", idi: "en", t: { es: "Form for liquids filtration (inglés)", en: "Form for liquids filtration" } },
  { f: "Formulario_filtracion_gases_1.1.pdf", kb: 217, g: "formulario", idi: "es", t: { es: "Formulario: filtración de gases", en: "Form: gases filtration (Spanish)" } },
  { f: "Form_Gases_filtration_1.1.pdf", kb: 244, g: "formulario", idi: "en", t: { es: "Form for gases filtration (inglés)", en: "Form for gases filtration" } },
  { f: "Formulario_mezcla_de_fluidos_1.1.pdf", kb: 214, g: "formulario", idi: "es", t: { es: "Formulario: mezcla de fluidos", en: "Form: fluids mixing (Spanish)" } },
  { f: "Form_Fluids_mixing_1.1.pdf", kb: 246, g: "formulario", idi: "en", t: { es: "Form for fluids mixing (inglés)", en: "Form for fluids mixing" } },

  { f: "CGV-25-es.pdf", kb: 291, g: "legal", idi: "es", t: { es: "Condiciones generales de venta", en: "General conditions of sale (Spanish)" } },
  { f: "CGV-V25-en.pdf", kb: 142, g: "legal", idi: "en", t: { es: "General conditions of sales (inglés)", en: "General conditions of sales" } },
  { f: "Terminos-de-garantia-V25.pdf", kb: 77, g: "legal", idi: "es", t: { es: "Términos de garantía", en: "Warranty terms (Spanish)" } },
  { f: "Warranty-conditions-25-en.pdf", kb: 71, g: "legal", idi: "en", t: { es: "Warranty conditions (inglés)", en: "Warranty conditions" } }
];

export const GRUPOS_DOC = [
  { id: "todo", es: "Todo", en: "All" },
  { id: "catalogo", es: "Catálogo general", en: "General brochure" },
  { id: "autolimpiantes", es: "Autolimpiantes", en: "Self-cleaning" },
  { id: "filtros", es: "Cartucho y combustible", en: "Cartridge & fuel" },
  { id: "mezcladores", es: "Mezcla y MFC", en: "Mixing & MFC" },
  { id: "instrumentacion", es: "Instrumentación", en: "Instruments" },
  { id: "ingenieria", es: "Aplicaciones", en: "Applications" },
  { id: "formulario", es: "Formularios de oferta", en: "Enquiry forms" },
  { id: "corporativo", es: "Corporativo", en: "Corporate" },
  { id: "legal", es: "Condiciones", en: "Conditions" },
  { id: "es", es: "Solo español", en: "Spanish only" },
  { id: "en", es: "Solo inglés", en: "English only" }
];

/* ================================================================ GALERÍA
   Los 46 pies proceden del propio galeria.html del dominio.               */
export const GALERIA = [
  { es: "Sede de HECISA en Calidad 24, Polígono Los Olivos, Getafe", en: "HECISA headquarters at Calidad 24, Los Olivos industrial estate, Getafe" },
  { es: "Filtro autolimpiante serie HSC-J", en: "HSC-J series self-cleaning filter" },
  { es: "Filtro autolimpiante serie HSC", en: "HSC series self-cleaning filter" },
  { es: "Filtro autolimpiante serie HSC2", en: "HSC2 series self-cleaning filter" },
  { es: "Filtro autolimpiante serie HSB", en: "HSB series self-cleaning filter" },
  { es: "Filtro autolimpiante serie HSB-J", en: "HSB-J series self-cleaning filter" },
  { es: "Filtro autolimpiante serie HSBI-J", en: "HSBI-J series self-cleaning filter" },
  { es: "Filtro autolimpiante serie HSBI-J", en: "HSBI-J series self-cleaning filter" },
  { es: "Filtro autolimpiante serie HSBIA", en: "HSBIA series self-cleaning filter" },
  { es: "Filtro autolimpiante serie HSBI de accionamiento manual", en: "HSBI series manual drive self-cleaning filter" },
  { es: "Filtro HSBI montado en skid", en: "HSBI in skid" },
  { es: "Filtro serie HSBI para servicio naval", en: "HSBI series for marine service" },
  { es: "Filtro autolimpiante serie HSBIL", en: "HSBIL series self-cleaning filter" },
  { es: "Filtro autolimpiante serie HSBIL", en: "HSBIL series self-cleaning filter" },
  { es: "Filtro autolimpiante serie HSBIL", en: "HSBIL series self-cleaning filter" },
  { es: "Filtro autolimpiante serie HSBIL", en: "HSBIL series self-cleaning filter" },
  { es: "Filtro autolimpiante serie HSBIL", en: "HSBIL series self-cleaning filter" },
  { es: "Filtro autolimpiante serie HSBIL Marine", en: "HSBIL Marine series self-cleaning filter" },
  { es: "Filtro autolimpiante serie HSD", en: "HSD series self-cleaning filter" },
  { es: "Filtro de bolsas", en: "Bag filter" },
  { es: "Filtro de cartucho para servicio naval", en: "Cartridge filter for marine service" },
  { es: "Filtro de cartucho doble para servicio naval", en: "Duplex cartridge filter, marine service" },
  { es: "Filtros HSC en una planta de recuperación de agua", en: "HSC filters in a water recovery plant" },
  { es: "Skid de filtración para servicio offshore", en: "Filtration skid for offshore service" },
  { es: "Filtro separador para combustible", en: "Filter separator for fuel" },
  { es: "Filtro de cesta serie HFC", en: "HFC series basket filter" },
  { es: "Filtro de cesta serie HFC", en: "HFC series basket filter" },
  { es: "Filtro de cesta serie HFC", en: "HFC series basket filter" },
  { es: "Filtro de cesta serie HFC", en: "HFC series basket filter" },
  { es: "Filtro de cesta serie HFC", en: "HFC series basket filter" },
  { es: "Filtro de cesta doble serie HFCD", en: "HFCD series duplex basket filter" },
  { es: "Filtro serie FFV para servicio de petróleo y gas", en: "FFV series filter for oil & gas service" },
  { es: "Filtro serie FFVG para servicio de petróleo y gas", en: "FFVG series filter for oil & gas service" },
  { es: "Filtro serie FFVG para servicio de petróleo y gas", en: "FFVG series filter for oil & gas service" },
  { es: "Filtro serie MMAG para servicio de petróleo y gas", en: "MMAG series filter for oil & gas service" },
  { es: "Filtro serie MMAG para servicio de petróleo y gas", en: "MMAG series filter for oil & gas service" },
  { es: "Filtro serie MMAH para servicio de petróleo y gas", en: "MMAH series filter for oil & gas service" },
  { es: "Filtro de cartucho HDF para combustible y servicio general", en: "HDF cartridge filter for fuel and general service" },
  { es: "Filtro de servicio especial serie HFESP", en: "HFESP special service filter" },
  { es: "Sistema de deshidratación serie HDA", en: "HDA series dehydration system" },
  { es: "Ciclón de proceso de alta presión", en: "High-pressure process cyclone" },
  { es: "Mezclador estático para alta temperatura", en: "Static mixer for high temperature" },
  { es: "Mezclador estático de servicio general", en: "General service static mixer" },
  { es: "Mezclador estático para gases", en: "Static mixer for gases" },
  { es: "Filtro de aspiración de aire", en: "Air suction filter" },
  { es: "Cuatro filtros HSC en una central de ciclo combinado", en: "Four HSC filters in a combined cycle power plant" }
];

/* =============================================================== CLIENTES */
export const CLIENTES = [
  ["logo-repsol.png", "Repsol"],
  ["logo-cepsa.png", "Cepsa"],
  ["logo-exxon.png", "ExxonMobil"],
  ["logo-iberdrola.png", "Iberdrola"],
  ["logo-endesa.png", "Endesa"],
  ["logo-enagas.png", "Enagás"],
  ["logo-gasnaturalfenosa.png", "Gas Natural Fenosa"],
  ["logo-unionfenosa.png", "Unión Fenosa"],
  ["logo-arcelormittal.png", "ArcelorMittal"],
  ["logo-thyssenkrupp.png", "ThyssenKrupp"],
  ["logo-fosterwheeler.png", "Foster Wheeler"],
  ["logo-dragados-industrial.png", "Dragados Industrial"],
  ["logo-durofelguera.png", "Duro Felguera"],
  ["logo-sacyr.png", "Sacyr"],
  ["logo-ohl.png", "OHL"],
  ["logo-indra.png", "Indra"],
  ["logo-equiposnucleares.png", "Equipos Nucleares"],
  ["logo-iberdrolaingenieria.png", "Iberdrola Ingeniería"],
  ["logo-initecenergia.png", "Initec Energía"],
  ["logo-CH2MHill.png", "CH2M Hill"],
  ["logo-praxair.png", "Praxair"],
  ["logo-ence.png", "ENCE"],
  ["logo-ercross.png", "Ercros"],
  ["logo-electrabel.png", "Electrabel"],
  ["logo-entropie.png", "Entropie"],
  ["logo-metito.png", "Metito"],
  ["logo-norwater.png", "Norwater"],
  ["logo-elcorteingles.png", "El Corte Inglés"],
  ["logo-Kraft.png", "Kraft"],
  ["logo-faudiaviation.png", "Faud Aviation"],
  ["logo-klumpkoller.png", "Klump Koller"],
  ["logo-cumberland.png", "Cumberland"],
  ["logo-aritim.png", "Aritim"],
  ["logo-empre.png", "Empre"],
  ["logo-pegesco.png", "Pegesco"],
  ["logo-petrox.png", "Petrox"]
];

/* ================================================================ SECTORES
   Tomados del listado de aplicaciones del catálogo HSC.                    */
export const SECTORES = {
  es: [
    "Agua potable: sistemas y tratamiento",
    "Depuración de aguas residuales",
    "Desalación",
    "Centrales hidroeléctricas",
    "Centrales térmicas y de cogeneración",
    "Riego por aspersión y por goteo",
    "Sistemas de refrigeración industrial",
    "Torres de refrigeración",
    "Reutilización de agua industrial",
    "Recuperación de sólidos disueltos",
    "Agua de proceso industrial",
    "Acuicultura",
    "Industria metalúrgica",
    "Industria del petróleo y petroquímica",
    "Servicio naval civil y militar"
  ],
  en: [
    "Potable water systems and treatment",
    "Waste water treatment",
    "Desalination",
    "Hydroelectric powerhouses",
    "Thermal and heat-electric power stations",
    "Irrigation by aspersion and dripping",
    "Industrial refrigeration systems",
    "Cooling tower systems",
    "Industrial water reuse",
    "Dissolved solid recovery",
    "Industrial process water",
    "Aqua culture",
    "Metallurgy industries",
    "Petroleum and petrochemical industries",
    "Civil and military marine service"
  ]
};

/* =============================================================== NOTICIAS */
export const NOTICIAS = [
  {
    fecha: "2016-12",
    fechaEt: { es: "Diciembre 2016", en: "December 2016" },
    t: {
      es: "Filtros autolimpiantes de agua de mar para una planta termosolar en Arabia Saudí",
      en: "Seawater self-cleaning filters for a solar thermal plant in Saudi Arabia"
    },
    d: {
      es: "Recibimos el encargo de fabricar y suministrar filtros autolimpiantes de agua de mar destinados a una planta termo solar en Arabia Saudita.",
      en: "We were commissioned to manufacture and supply seawater self-cleaning filters for a solar thermal power plant in Saudi Arabia."
    },
    pdf: "SCF-Arabia-Saudita.pdf"
  },
  {
    fecha: "2016-12",
    fechaEt: { es: "Diciembre 2016", en: "December 2016" },
    t: {
      es: "En fabricación un sistema de filtración para pulido de condensado de vapor",
      en: "A filtration system for steam condensate polishing enters manufacture"
    },
    d: {
      es: "Iniciada la fabricación de un sistema de filtración para pulido de condensado de vapor.",
      en: "Started the manufacture of a filtration system for polishing of steam condensate."
    },
    pdf: "Filtro_de_pulido_de_condensado.pdf",
    pdfEn: "Condensate_Polishing.pdf"
  },
  {
    fecha: "2016-01",
    fechaEt: { es: "Enero 2016", en: "January 2016" },
    t: {
      es: "Nueva versión del cuadro de control con protección IP66",
      en: "New version of the control box with IP66 protection"
    },
    d: {
      es: "Incorporamos una nueva versión del cuadro de control con protección IP66.",
      en: "We introduced a new version of the control box with IP66 protection."
    },
    pdf: "CCL-IP66.pdf"
  }
];

/* ================================================= MEDIOS DE PRODUCCIÓN
   Literal de la presentación corporativa de HECISA.                       */
export const TALLER = {
  es: [
    "Cizalla hidráulica de 3.000 × 14 mm de espesor",
    "Prensa plegadora de 170 Tm y 4.000 mm de longitud máxima",
    "Sierra alternativa y sierra de cinta, 400 × 400 mm máx.",
    "Sierra vertical de disco 250 × 250 mm y sierra de banda vertical de 400 mm de lado",
    "Cilindro de tres rodillos, de 0,5 a 40 mm de espesor y 3.000 mm de longitud máxima",
    "Curvadora de tubo hasta Ø 76 mm y 12.000 mm de longitud",
    "Curvadora de perfil con capacidad hasta 100 mm",
    "Punzonadora hidráulica de 125 mT",
    "Máquina de extrusión por giro hasta Ø 168 mm",
    "Nueve equipos de soldadura: TIG, SMAW, MIG/MAG, SAW y más",
    "Equipo de corte por plasma",
    "Soldadura orbital automática tubo a tubo y tubo a placa tubular",
    "Tornos horizontales de Ø 700 mm y 1.500 mm entre puntos, y de Ø 2.300 mm",
    "Fresadora universal con mesa de 800 × 350 mm",
    "Mortajadora de 300 mm de recorrido",
    "Taladro de columna A-35 y taladro radial 3050",
    "Prensa mecánica de 30 Tm y prensa hidráulica de 200 Tm",
    "Pulidoras flexibles y fijas",
    "Volteadores y posicionadores de control electrónico: seis unidades para diámetros de 100 a 2.500 mm",
    "Banco de pruebas de equipos controlado por PC",
    "Banco de pruebas hidráulico controlado por PC, hasta 400 bar",
    "Puente grúa de 10 Tm y puente grúa de 3,5 Tm"
  ],
  en: [
    "Hydraulic gate shears, 3,000 × 14 mm thickness",
    "Crimping press 170 Tm, 4,000 mm max. length",
    "Alternating saw and strap saw, 400 × 400 mm max.",
    "Vertical disk saw 250 × 250 mm and vertical band saw 400 mm side",
    "Three-cylinder roller, 0.5 to 40 mm thick and 3,000 mm max. length",
    "Tube bender up to Ø 76 mm, 12,000 mm length",
    "Section bender, capacity up to 100 mm",
    "Hydraulic punching machine 125 mT",
    "Spin-off extruding machine up to Ø 168 mm",
    "Nine welding assemblies: TIG, SMAW, MIG/MAG, SAW and more",
    "Plasma-cutting assembly",
    "Automatic tube-to-tube and tube-to-tube-sheet orbital welding equipment",
    "Horizontal lathes, Ø 700 mm with 1,500 mm point-to-point, and Ø 2,300 mm",
    "Universal milling machine, 800 × 350 mm table",
    "Groove machine, 300 mm run",
    "Column drill A-35 and radial drill machine 3050",
    "Mechanical press 30 Tm and hydraulic press 200 Tm",
    "Flexible and fixed polishers",
    "Electronically controlled turning gear and positioners: six units for diameters from 100 to 2,500 mm",
    "PC-controlled equipment test bench",
    "PC-controlled hydraulic test bench, up to 400 bar",
    "Travel crane 10 Tm and travel crane 3.5 Tm"
  ]
};

export const INGENIERIA_TEC = {
  es: [
    "AutoCAD, de la R14 a la última versión",
    "PV Elite y CODECAL para diseño y análisis de recipientes",
    "Software FEA para análisis mecánico y estructural",
    "Software CFD para análisis de dinámica de fluidos",
    "Metal 3D para cálculo de estructuras metálicas",
    "Solid Edge para modelado sólido",
    "Dos plóters DIN A0",
    "Software propio para cálculos, diseños específicos y análisis"
  ],
  en: [
    "AutoCAD, from R14 to the latest version",
    "PV Elite and CODECAL for vessel design and analysis",
    "FEA software for mechanical and structural analysis",
    "CFD software for fluid dynamics analysis",
    "Metal 3D for metal structure calculations",
    "Solid Edge for solid modelling",
    "Two DIN A0 plotters",
    "In-house software for calculations, specific designs and analysis"
  ]
};

export const GAMA_LISTA = {
  es: [
    "Filtros autolimpiantes automáticos",
    "Filtros automáticos a contralavado",
    "Filtros debris automáticos",
    "Filtros de proceso, de operación manual y automática",
    "Filtros de mejillones, manuales y automáticos",
    "Filtros de gruesos, manuales y automáticos",
    "Filtros de finos",
    "Skids de filtración",
    "Filtros de aspiración",
    "Filtros de pantalla",
    "Tamices rotativos y tamices estáticos",
    "Microfiltros",
    "Filtros en línea",
    "Filtros para gases",
    "Filtros de cesta, simples y dobles",
    "Filtros de bolsas",
    "Filtros para vapor",
    "Rejas y pantallas móviles",
    "Filtros para aceite y combustibles",
    "Mezcladores estáticos",
    "Mezcladores gas–líquido",
    "Separadores gas–líquido",
    "Separadores líquido–líquido",
    "Separadores de condensado",
    "Separadores ciclónicos",
    "Sistemas de limpieza de condensadores e intercambiadores de calor",
    "Intercambiadores de calor",
    "Sistemas de inyección de productos químicos",
    "Construcción de aparatos a presión en todo tipo de aleaciones y metales especiales"
  ],
  en: [
    "Automatic self-cleaning filters",
    "Automatic backflushing filters",
    "Automatic debris filters",
    "Process filters, manual and automatic operation",
    "Mussel filters, manual and automatic",
    "Coarse filters, manual and automatic",
    "Fine filters",
    "Filtration skids",
    "Suction filters",
    "Screen filters",
    "Rotary screens and static screens",
    "Microfilters",
    "In-line filters",
    "Gas filters",
    "Basket filters, simplex and duplex",
    "Bag filters",
    "Steam filters",
    "Grates and travelling screens",
    "Oil and fuel filters",
    "Static mixers",
    "Gas–liquid mixers",
    "Gas–liquid separators",
    "Liquid–liquid separators",
    "Condensate separators",
    "Cyclonic separators",
    "Condenser and heat exchanger cleaning systems",
    "Heat exchangers",
    "Chemical injection systems",
    "Pressure vessel construction in all kinds of alloys and special metals"
  ]
};

export const MATERIALES = [
  "AISI 316 L", "AISI 317 LN", "AISI 321",
  { es: "Acero dúplex S32205", en: "Duplex steel S32205" },
  { es: "Acero superdúplex", en: "Super duplex steel" },
  { es: "Monel / Aleación 400", en: "Monel / Alloy 400" },
  { es: "Alloy 20 (Uranus B6)", en: "Alloy 20 (Uranus B6)" },
  "Alloy C276",
  { es: "Cuproníquel", en: "Copper nickel" },
  { es: "Titanio", en: "Titanium" },
  "Hastelloy",
  { es: "Acero al carbono con epoxy", en: "Epoxy-coated carbon steel" }
];

export const CODIGOS = [
  { c: "ASME VIII Div. 1, 2 y 3", d: { es: "Recipientes a presión", en: "Pressure vessels" } },
  { c: "ASME II, IX y X", d: { es: "Materiales, cualificación de soldadura y plásticos reforzados", en: "Materials, welding qualification and reinforced plastics" } },
  { c: "EN-13445", d: { es: "Recipientes a presión no sometidos a llama", en: "Unfired pressure vessels" } },
  { c: "PD 5500", d: { es: "Recipientes a presión soldados por fusión", en: "Fusion-welded pressure vessels" } },
  { c: "AS-1210", d: { es: "Recipientes a presión (Australia)", en: "Pressure vessels (Australia)" } },
  { c: "PED", d: { es: "Directiva europea de equipos a presión, con marcado CE", en: "European pressure equipment directive, with CE marking" } },
  { c: "ISO 9001", d: { es: "Sistema de gestión de la calidad", en: "Quality management system" } },
  { c: "NCAGE", d: { es: "Código de entidad comercial y gubernamental de la OTAN", en: "NATO Commercial and Government Entity code" } }
];

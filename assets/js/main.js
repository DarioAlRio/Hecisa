/* ===========================================================================
   HECISA — comportamiento de interfaz
   Sin dependencias. Todo degrada a HTML utilizable si falla el JavaScript:
   el menú móvil es un <details> nativo servido abierto, el buscador de serie
   es un enlace a la gama, y el registro de documentos son enlaces normales.
   ========================================================================= */
(function () {
  "use strict";

  var d = document;
  var $ = function (s, c) { return (c || d).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || d).querySelectorAll(s)); };
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ------------------------------------------------------- Año del cajetín */
  $$("[data-anio]").forEach(function (el) { el.textContent = String(new Date().getFullYear()); });

  /* ------------------------------------------ Correo ofuscado (anti-robot)
     El original escondía los datos dentro de un JPG. Aquí el correo es un
     enlace real y accesible; solo se ensambla en el cliente.               */
  $$("[data-correo]").forEach(function (el) {
    var partes = el.getAttribute("data-correo").split("|");
    if (partes.length !== 2) return;
    var dir = partes[0] + "@" + partes[1];
    el.setAttribute("href", "mailto:" + dir);
    el.removeAttribute("data-correo");
    if (el.hasAttribute("data-correo-texto") || !el.textContent.trim()) {
      el.textContent = dir;
      el.removeAttribute("data-correo-texto");
    }
  });

  /* ------------------------------------------- Cabecera: compresión al bajar */
  var cabecera = $(".cabecera");
  var tick = false;
  function alScroll() {
    if (cabecera) {
      cabecera.classList.toggle("encajada", (window.pageYOffset || d.documentElement.scrollTop) > 12);
    }
    tick = false;
  }
  window.addEventListener("scroll", function () {
    if (!tick) { tick = true; window.requestAnimationFrame(alScroll); }
  }, { passive: true });
  alScroll();

  /* Altura real de la cabecera -> scroll-margin de las anclas de serie */
  function mideCabecera() {
    if (!cabecera) return;
    d.documentElement.style.setProperty("--cab-alto", cabecera.offsetHeight + "px");
    $$(".serie").forEach(function (s) {
      s.style.scrollMarginTop = (cabecera.offsetHeight + 18) + "px";
    });
  }
  mideCabecera();
  window.addEventListener("resize", mideCabecera);

  /* =================================================== Paneles de familia
     La pestaña despliega el índice de series. Ratón con intención, teclado
     con Enter/Espacio, Escape cierra y devuelve el foco.                  */
  var grupos = $$(".rail__grupo");
  var abiertoTimer = null;

  function cierraTodos(salvo) {
    grupos.forEach(function (g) {
      if (g === salvo) return;
      var b = $(".pestana", g), p = $(".panel", g);
      if (b && p && b.getAttribute("aria-expanded") === "true") {
        b.setAttribute("aria-expanded", "false");
        b.classList.remove("abierta");
        p.hidden = true;
      }
    });
  }

  function conmuta(grupo, abrir) {
    var b = $(".pestana", grupo), p = $(".panel", grupo);
    if (!b || !p) return;
    if (abrir) {
      cierraTodos(grupo);
      b.setAttribute("aria-expanded", "true");
      b.classList.add("abierta");
      p.hidden = false;
      colocaPanel(p);
    } else {
      b.setAttribute("aria-expanded", "false");
      b.classList.remove("abierta");
      p.hidden = true;
    }
  }

  /* El panel nunca se sale de la hoja por la derecha */
  function colocaPanel(p) {
    p.style.left = "0px";
    var r = p.getBoundingClientRect();
    var margen = 16;
    if (r.right > window.innerWidth - margen) {
      p.style.left = Math.min(0, window.innerWidth - margen - r.right) + "px";
    }
  }

  grupos.forEach(function (grupo) {
    var b = $(".pestana", grupo), p = $(".panel", grupo);
    if (!b || !p) return;

    b.addEventListener("click", function (e) {
      e.preventDefault();
      conmuta(grupo, b.getAttribute("aria-expanded") !== "true");
    });

    grupo.addEventListener("mouseenter", function () {
      window.clearTimeout(abiertoTimer);
      abiertoTimer = window.setTimeout(function () { conmuta(grupo, true); }, 110);
    });

    grupo.addEventListener("mouseleave", function () {
      window.clearTimeout(abiertoTimer);
      abiertoTimer = window.setTimeout(function () { conmuta(grupo, false); }, 180);
    });

    grupo.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && b.getAttribute("aria-expanded") === "true") {
        conmuta(grupo, false);
        b.focus();
      }
    });

    grupo.addEventListener("focusout", function (e) {
      if (!grupo.contains(e.relatedTarget)) conmuta(grupo, false);
    });
  });

  d.addEventListener("click", function (e) {
    if (!e.target.closest(".rail__grupo")) cierraTodos(null);
  });

  /* ============================================== Carpeta (menú de móvil) */
  var abridor = $(".hamburguesa");
  var carpeta = $(".carpeta");

  function abreCarpeta(si) {
    if (!abridor || !carpeta) return;
    abridor.setAttribute("aria-expanded", si ? "true" : "false");
    carpeta.hidden = !si;
    d.documentElement.style.overflow = si ? "hidden" : "";
    if (si) {
      var primero = $("a, button", carpeta);
      if (primero) primero.focus();
    }
  }

  if (abridor && carpeta) {
    abridor.addEventListener("click", function () {
      abreCarpeta(abridor.getAttribute("aria-expanded") !== "true");
    });
    $$("[data-cierra-carpeta]", carpeta).forEach(function (b) {
      b.addEventListener("click", function () { abreCarpeta(false); abridor.focus(); });
    });
    d.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && !carpeta.hidden) { abreCarpeta(false); abridor.focus(); }
    });
    /* Trampa de foco mientras la carpeta está abierta */
    carpeta.addEventListener("keydown", function (e) {
      if (e.key !== "Tab") return;
      var foco = $$("a[href], button:not([disabled]), input, [tabindex]:not([tabindex='-1'])", carpeta)
        .filter(function (el) { return el.offsetParent !== null; });
      if (!foco.length) return;
      var pri = foco[0], ult = foco[foco.length - 1];
      if (e.shiftKey && d.activeElement === pri) { e.preventDefault(); ult.focus(); }
      else if (!e.shiftKey && d.activeElement === ult) { e.preventDefault(); pri.focus(); }
    });
  }

  /* Divisores desplegables de la carpeta */
  $$(".divisor__abrir").forEach(function (b) {
    b.addEventListener("click", function () {
      var lista = d.getElementById(b.getAttribute("aria-controls"));
      if (!lista) return;
      var abierto = b.getAttribute("aria-expanded") === "true";
      b.setAttribute("aria-expanded", abierto ? "false" : "true");
      lista.hidden = abierto;
    });
  });

  /* ============================================== Buscador de serie
     Trabaja sobre HECISA_SERIES, inyectado por la página.               */
  var series = window.HECISA_SERIES || [];
  var busca = $(".buscaserie");

  if (busca && series.length) {
    var campo = $("input", busca);
    var lista = $(".buscaserie__lista", busca);
    var marcado = -1;

    var normaliza = function (s) {
      return (s || "").toString().toLowerCase()
        .normalize("NFD").replace(/[̀-ͯ]/g, "")
        .replace(/[^a-z0-9]/g, "");
    };

    function pinta(res) {
      lista.innerHTML = "";
      marcado = -1;
      if (!res.length) {
        var li = d.createElement("li");
        var sp = d.createElement("span");
        sp.className = "buscaserie__vacio";
        sp.textContent = busca.getAttribute("data-vacio") || "Sin resultados.";
        li.appendChild(sp);
        lista.appendChild(li);
        lista.hidden = false;
        return;
      }
      res.slice(0, 9).forEach(function (s) {
        var li = d.createElement("li");
        var a = d.createElement("a");
        a.href = s.url;
        var c = d.createElement("span");
        c.className = "buscaserie__cod";
        c.textContent = s.cod;
        var n = d.createElement("span");
        n.textContent = s.nom;
        a.appendChild(c);
        a.appendChild(n);
        li.appendChild(a);
        lista.appendChild(li);
      });
      lista.hidden = false;
    }

    function filtra() {
      var q = normaliza(campo.value);
      if (!q) { lista.hidden = true; lista.innerHTML = ""; return; }
      var res = series.filter(function (s) {
        return normaliza(s.cod).indexOf(q) === 0
          || normaliza(s.cod).indexOf(q) > -1
          || normaliza(s.nom).indexOf(q) > -1
          || normaliza(s.busca || "").indexOf(q) > -1;
      }).sort(function (a, b) {
        var pa = normaliza(a.cod).indexOf(q) === 0 ? 0 : 1;
        var pb = normaliza(b.cod).indexOf(q) === 0 ? 0 : 1;
        return pa - pb;
      });
      pinta(res);
    }

    campo.addEventListener("input", filtra);
    campo.addEventListener("focus", function () { if (campo.value) filtra(); });

    campo.addEventListener("keydown", function (e) {
      var op = $$("a", lista);
      if (e.key === "ArrowDown" || e.key === "ArrowUp") {
        if (!op.length) return;
        e.preventDefault();
        if (marcado > -1) op[marcado].classList.remove("marcado");
        marcado = e.key === "ArrowDown"
          ? (marcado + 1) % op.length
          : (marcado <= 0 ? op.length - 1 : marcado - 1);
        op[marcado].classList.add("marcado");
        op[marcado].scrollIntoView({ block: "nearest" });
      } else if (e.key === "Enter") {
        if (marcado > -1 && op[marcado]) { e.preventDefault(); window.location.href = op[marcado].href; }
        else if (op.length) { e.preventDefault(); window.location.href = op[0].href; }
      } else if (e.key === "Escape") {
        lista.hidden = true;
        campo.value = "";
      }
    });

    d.addEventListener("click", function (e) {
      if (!e.target.closest(".buscaserie")) lista.hidden = true;
    });
  }

  /* ================================== Registro de documentos: filtro vivo */
  var registro = $("[data-registro]");
  if (registro) {
    var docs = $$(".doc", registro);
    var vacio = $("[data-registro-vacio]");
    var cuenta = $("[data-registro-cuenta]");
    var campoDoc = $("[data-registro-busca]");
    var pildoras = $$("[data-filtro]");
    var filtroActivo = "todo";

    var norm = function (s) {
      return (s || "").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
    };

    function aplica() {
      var q = norm(campoDoc ? campoDoc.value.trim() : "");
      var n = 0;
      docs.forEach(function (doc) {
        var texto = norm(doc.getAttribute("data-busca") || doc.textContent);
        var grupo = doc.getAttribute("data-grupo") || "";
        var idioma = doc.getAttribute("data-idioma") || "";
        var pasaFiltro = filtroActivo === "todo"
          || grupo === filtroActivo
          || idioma === filtroActivo;
        var pasaTexto = !q || texto.indexOf(q) > -1;
        var visible = pasaFiltro && pasaTexto;
        doc.hidden = !visible;
        if (visible) n++;
      });
      if (vacio) vacio.hidden = n !== 0;
      if (cuenta) cuenta.textContent = String(n);
    }

    if (campoDoc) campoDoc.addEventListener("input", aplica);
    pildoras.forEach(function (p) {
      p.addEventListener("click", function () {
        filtroActivo = p.getAttribute("data-filtro");
        pildoras.forEach(function (o) {
          o.setAttribute("aria-pressed", o === p ? "true" : "false");
        });
        aplica();
      });
    });
    aplica();
  }

  /* ================================================= Visor de la plancha */
  var visor = $(".visor");
  if (visor) {
    var placas = $$("[data-placa]");
    var vImg = $(".visor__lienzo img", visor);
    var vPie = $(".visor__pie", visor);
    var vFolio = $(".visor .folio", visor);
    var vAnt = $("[data-visor-ant]", visor);
    var vSig = $("[data-visor-sig]", visor);
    var idx = 0;
    var devuelveFoco = null;

    function muestra(i) {
      if (!placas.length) return;
      idx = (i + placas.length) % placas.length;
      var b = placas[idx];
      vImg.src = b.getAttribute("data-grande") || b.getAttribute("data-src");
      vImg.alt = b.getAttribute("data-pie") || "";
      vPie.textContent = b.getAttribute("data-pie") || "";
      if (vFolio) {
        vFolio.textContent = (visor.getAttribute("data-folio") || "") + " " + (idx + 1) + " / " + placas.length;
      }
    }

    function abre(i, origen) {
      devuelveFoco = origen || null;
      muestra(i);
      visor.hidden = false;
      d.documentElement.style.overflow = "hidden";
      var c = $("[data-visor-cierra]", visor);
      if (c) c.focus();
    }

    function cierra() {
      visor.hidden = true;
      d.documentElement.style.overflow = "";
      if (devuelveFoco) devuelveFoco.focus();
    }

    placas.forEach(function (b, i) {
      b.addEventListener("click", function () { abre(i, b); });
    });

    if (vAnt) vAnt.addEventListener("click", function () { muestra(idx - 1); });
    if (vSig) vSig.addEventListener("click", function () { muestra(idx + 1); });
    $$("[data-visor-cierra]", visor).forEach(function (b) {
      b.addEventListener("click", cierra);
    });

    d.addEventListener("keydown", function (e) {
      if (visor.hidden) return;
      if (e.key === "Escape") cierra();
      else if (e.key === "ArrowRight") muestra(idx + 1);
      else if (e.key === "ArrowLeft") muestra(idx - 1);
    });

    visor.addEventListener("click", function (e) {
      if (e.target === visor) cierra();
    });
  }

  /* ============================================== Formulario de petición
     Validación en el cliente con mensajes que nombran el problema y la
     salida. Sin endpoint configurado, no finge un envío: lo dice.        */
  var form = $("[data-form-peticion]");
  if (form) {
    var estado = $("[data-form-estado]", form);
    var sinEndpoint = !form.getAttribute("action") || form.getAttribute("action") === "#";

    var mensajes = {
      es: {
        requerido: "Este campo es obligatorio.",
        correo: "Escribe un correo válido, por ejemplo nombre@empresa.com.",
        consent: "Marca la casilla para poder tratar tu consulta.",
        sinEndpoint: "El formulario aún no tiene destino configurado. Escribe a infoweb@hecisa.com o llama al +34 916 967 039.",
        enviando: "Enviando…",
        error: "No se ha podido enviar. Inténtalo de nuevo o escribe a infoweb@hecisa.com.",
        bien: "Petición enviada. Respondemos en horario laboral."
      },
      en: {
        requerido: "This field is required.",
        correo: "Enter a valid email, for example name@company.com.",
        consent: "Tick the box so we can handle your enquiry.",
        sinEndpoint: "The form has no destination configured yet. Write to infoweb@hecisa.com or call +34 916 967 039.",
        enviando: "Sending…",
        error: "Could not send. Try again or write to infoweb@hecisa.com.",
        bien: "Request sent. We reply during business hours."
      }
    };
    var t = mensajes[d.documentElement.lang === "en" ? "en" : "es"];

    function error(campo, msg) {
      var caja = campo.closest(".campo, .consentimiento");
      if (!caja) return;
      var e = caja.querySelector(".campo__error");
      if (!e) {
        e = d.createElement("p");
        e.className = "campo__error";
        caja.appendChild(e);
      }
      e.textContent = msg;
      e.hidden = false;
      campo.setAttribute("aria-invalid", "true");
      campo.setAttribute("aria-describedby", (e.id = e.id || ("err-" + Math.random().toString(36).slice(2, 8))));
    }

    function limpia(campo) {
      var caja = campo.closest(".campo, .consentimiento");
      if (!caja) return;
      var e = caja.querySelector(".campo__error");
      if (e) e.hidden = true;
      campo.removeAttribute("aria-invalid");
    }

    form.addEventListener("submit", function (e) {
      var fallos = [];
      $$("[required]", form).forEach(function (campo) {
        limpia(campo);
        var v = campo.type === "checkbox" ? campo.checked : campo.value.trim();
        if (!v) {
          error(campo, campo.type === "checkbox" ? t.consent : t.requerido);
          fallos.push(campo);
        } else if (campo.type === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(campo.value.trim())) {
          error(campo, t.correo);
          fallos.push(campo);
        }
      });

      if (fallos.length) {
        e.preventDefault();
        fallos[0].focus();
        if (estado) { estado.hidden = false; estado.className = "form__estado mal"; estado.textContent = ""; estado.hidden = true; }
        return;
      }

      if (sinEndpoint) {
        e.preventDefault();
        if (estado) {
          estado.hidden = false;
          estado.className = "form__estado mal";
          estado.textContent = t.sinEndpoint;
        }
        return;
      }

      var boton = $("button[type=submit]", form);
      if (boton) { boton.disabled = true; boton.textContent = t.enviando; }
    });

    $$("input, select, textarea", form).forEach(function (campo) {
      campo.addEventListener("input", function () { limpia(campo); });
    });
  }
})();

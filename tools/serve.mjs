/* Servidor estático mínimo para revisar el sitio en local. node tools/serve.mjs [puerto] */
import http from "http";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const RAIZ = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const PUERTO = Number(process.argv[2] || 4460);
const TIPOS = {
  ".html": "text/html; charset=utf-8", ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8", ".json": "application/json",
  ".svg": "image/svg+xml", ".png": "image/png", ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg", ".gif": "image/gif", ".ico": "image/x-icon",
  ".pdf": "application/pdf", ".xml": "application/xml", ".txt": "text/plain; charset=utf-8"
};

http.createServer((req, res) => {
  let p = decodeURIComponent(req.url.split("?")[0]);
  if (p.endsWith("/")) p += "index.html";
  const destino = path.join(RAIZ, p);
  if (!destino.startsWith(RAIZ)) { res.writeHead(403).end("403"); return; }
  fs.readFile(destino, (err, buf) => {
    if (err) {
      const p404 = path.join(RAIZ, p.startsWith("/en/") ? "en/404.html" : "404.html");
      fs.readFile(p404, (e2, b2) => {
        res.writeHead(404, { "Content-Type": TIPOS[".html"] }).end(e2 ? "404" : b2);
      });
      return;
    }
    res.writeHead(200, { "Content-Type": TIPOS[path.extname(destino).toLowerCase()] || "application/octet-stream" }).end(buf);
  });
}).listen(PUERTO, () => console.log("HECISA en http://localhost:" + PUERTO));

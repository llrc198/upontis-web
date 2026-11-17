/* UPONTIS v2 — DATOS (fuente: LISTADO-COMPLETO-APLICACIONES-20261102.md + CAPACIDADES-POR-AREA-20261031.md)
   Regla PI: web PÚBLICA — aplicaciones genéricas, sin detalle fino (analito específico, proveedores). */

const AREAS = {
  A1: { code: "A1", name: "Control de fluidos / dosificación", caps: ["Bombeo de precisión (µL)", "Válvulas y manifolds", "Módulos de jeringa multicanal", "Capacidad OEM/ODM"] },
  A2: { code: "A2", name: "Microfluídica / chips", caps: ["Chips de separación, mezclado y gotas", "Electrodos integrados", "Fabricación de chips", "Ensayos en chip"] },
  A3: { code: "A3", name: "Incubación / ambiente controlado", caps: ["Incubación multi-paramétrica (T/CO₂/humedad)", "Cultivo celular", "Ambiente estable para ensayo"] },
  A4: { code: "A4", name: "Óptica / detección", caps: ["Epi-fluorescencia / TRFIA", "Lectura de resultados en chip", "Detección cuantitativa", "Óptica de bajo costo"] },
  A5: { code: "A5", name: "Integración de sistemas / placas", caps: ["IoT / industrial", "Placas de integración", "Control de fluidos custom", "Prototipado multi-proceso"] },
  A6: { code: "A6", name: "Reactivos / IVD", caps: ["Anticuerpos / nanobodies", "Liofilización (lyo-beads)", "Ensayo + certificación", "POCT"] }
};

/* código, nombre (genérico), áreas[], sectores, factibilidad */
const APPS = [
  { c: "G1" , n: "Micotoxinas en granos y vino"          , a: ["A1","A2","A4","A6"], s: ["Agro","Bodegas","Food QC"], f: "MEDIA" },
  { c: "G2" , n: "Lector óptico para laboratorio"      , a: ["A4","A5","A1"],      s: ["Universidades","Labs"],    f: "ALTA" },
  { c: "G3" , n: "Microfluídica para universidades"    , a: ["A2","A5","A1","A6"], s: ["Universidades"],           f: "ALTA" },
  { c: "G4" , n: "Sistema de ensayo semi-portátil"     , a: ["A1","A2","A3","A4","A6"], s: ["Agro","Biol. celular"], f: "MEDIA" },
  { c: "G5" , n: "Monitoreo industrial conectado"      , a: ["A5"],                s: ["Alimentos","Química"],      f: "ALTA" },
  { c: "G6" , n: "Kit llave en mano de análisis"        , a: ["A1","A2","A4","A6"], s: ["Agro","Food QC","IVD"],     f: "ALTA" },
  { c: "G7" , n: "Gotas y emulsiones"                   , a: ["A1","A2"],           s: ["Universidades","Farma"],    f: "ALTA" },
  { c: "G8" , n: "Cultivo celular con dosificación fina", a: ["A1","A2","A3"],      s: ["Biol. celular","Farma"],    f: "ALTA" },
  { c: "G9" , n: "Consumibles con reactivo listo"      , a: ["A2","A6","A1"],      s: ["Universidades","Custom"],   f: "MEDIA" },
  { c: "G10", n: "Mezclado de alta viscosidad"          , a: ["A1","A2","A5"],      s: ["Food QC"],                 f: "ALTA" },
  { c: "G11", n: "POCT sin cadena de frío"              , a: ["A3","A6","A4","A1"], s: ["Salud","Agro"],            f: "MEDIA" },
  { c: "G12", n: "Fabricación de chips en laboratorio"  , a: ["A2","A5"],           s: ["Universidades","Tecnológicos"], f: "ALTA" },
  { c: "G13", n: "Electroforesis en chip"               , a: ["A1","A2"],           s: ["Ácidos nucleicos","Univ."], f: "ALTA" },
  { c: "G14", n: "Lectura óptica en chip"               , a: ["A2","A4"],           s: ["Diagnóstico","Food safety"], f: "ALTA" },
  { c: "G15", n: "Reactivos liofilizados listos"       , a: ["A1","A6"],         s: ["POCT","Food safety"],       f: "ALTA" },
  { c: "G16", n: "Controlador de dosificación integrado", a: ["A1","A5"],          s: ["Instrumentos","IoT ind."],  f: "ALTA" },
  { c: "COM-1", n: "Monitoreo de higiene por ATP"       , a: ["A1","A4","A5"],      s: ["Alimentos","Industria"],   f: "ALTA" },
  { c: "COM-2", n: "Detección ambiental en campo"       , a: ["A2","A4","A5"],      s: ["Agro","Minería","Saneamiento"], f: "MEDIA" },
  { c: "COM-3", n: "Síntesis de nanopartículas (LNP)"   , a: ["A1","A2","A5"],      s: ["Farma","Biotech"],         f: "ALTA" },
  { c: "COM-4", n: "Biopsia líquida / CTCs"             , a: ["A2","A4","A3"],      s: ["Diagnóstico oncológico"],  f: "MEDIA" },
  { c: "COM-5", n: "Diagnóstico de papel (µPADs)"       , a: ["A2","A6","A4"],      s: ["POCT","Salud"],            f: "MEDIA" },
  { c: "COM-6", n: "Perfusión inteligente en cultivo 3D", a: ["A1","A2","A3","A5"], s: ["Biol. celular","Farma"],   f: "ALTA" },
  { c: "COM-7", n: "Química de flujo continuo"          , a: ["A1","A2","A5"],      s: ["Química fina","Farma"],    f: "MEDIA" }
];

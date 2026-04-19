export const machineryData = [
  {
    id: 1,
    name: "Perforadora XY-200",
    category: "Perforación",
    image: "/images/machinery/xy200.png",
    pdfUrl: "/docs/machinery/ficha-tecnica.txt",
    description: "Equipo versátil para estudios geotécnicos y pozos de agua a profundidades medias.",
    specs: {
      depth: "Hasta 200 m",
      diameter: "75 - 300 mm",
      power: "22 HP",
      weight: "600 kg"
    },
    features: ["Montaje sobre orugas", "Sistema hidráulico de precisión", "Fácil transporte"]
  },
  {
    id: 2,
    name: "Equipo SPT Automático",
    category: "Ensayos",
    image: "/images/machinery/spt-auto.png",
    pdfUrl: "/docs/machinery/ficha-tecnica.txt",
    description: "Sistema de hincado de alta precisión que garantiza la energía de impacto estándar.",
    specs: {
      hammer: "140 lb (63.5 kg)",
      drop: "30 in (76 cm)",
      control: "Electromecánico",
      accuracy: "99.9%"
    },
    features: ["Cumplimiento ASTM D-1586", "Contador automático", "Energía constante"]
  },
  {
    id: 3,
    name: "Piling Rig HR-180",
    category: "Pilotaje",
    image: "/images/machinery/hr180.png",
    pdfUrl: "/docs/machinery/ficha-tecnica.txt",
    description: "Maquinaria pesada para cimentaciones profundas y pilotes de gran diámetro.",
    specs: {
      maxDepth: "50 m",
      maxDiameter: "1500 mm",
      torque: "180 kNm",
      engine: "240 HP"
    },
    features: ["Mástil telescópico", "Cabina climatizada con monitorización", "Estabilizadores hidráulicos"]
  },
  {
    id: 4,
    name: "Sonda Rotativa S-50",
    category: "Perforación",
    image: "/images/machinery/s50.png",
    pdfUrl: "/docs/machinery/ficha-tecnica.txt",
    description: "Compacta y potente para espacios reducidos y terrenos de difícil acceso.",
    specs: {
      depth: "50 m",
      diameter: "45 - 150 mm",
      rotation: "0 - 800 rpm",
      width: "1.2 m"
    },
    features: ["Diseño modular", "Bajo impacto ambiental", "Operación remota opcional"]
  },
  {
    id: 5,
    name: "Casagrande B125",
    category: "Pilotaje",
    image: "/images/machinery/b125.png",
    pdfUrl: "/docs/machinery/ficha-tecnica.txt",
    description: "Máquina de pilotaje de alto rendimiento para diámetros grandes y condiciones de suelo difíciles.",
    specs: {
      torque: "125 kNm",
      depth: "45 m",
      diameter: "1500 mm",
      weight: "38 t"
    },
    features: ["Motor Cummins Tier 4", "Cabina rotativa", "Sistema Kelly versátil"]
  },
  {
    id: 6,
    name: "Perforadora CFA-C6",
    category: "Pilotaje",
    image: "/images/machinery/cfa.png",
    pdfUrl: "/docs/machinery/ficha-tecnica.txt",
    description: "Equipo especializado en muros de hélice continua, ideal para entornos urbanos por su baja vibración.",
    specs: {
      diameter: "Hasta 1000 mm",
      depth: "22 m",
      pullDown: "150 kN",
      auger: "Automático"
    },
    features: ["Baja emisión sonora", "Monitoreo PLC", "Alta productividad"]
  }
];

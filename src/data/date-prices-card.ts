interface DatePricesCard {
  [key: string]: {
    id: number;
    price: number; 
    title: string;
    description: string;
    items: string[];
  };
}

export const DatePricesCard: DatePricesCard = {
  basic: {
    id: 1,
    price: 500,
    title: "Básico",
    description: "Comienza a aprender y ve contenido nuevo cada mes.",
    items: ["Acceso a todos los proyectos"],
  },
  intermediate: {
    id: 2,
    price: 700,
    title: "Intermedio",
    description: "Comienza a aprender y ve contenido nuevo cada mes.",
    items: ["Acceso a todos los proyectos", "Acceso a todos los talleres"],
  },
  professional: {
    id: 3,
    price: 1000,
    title: "Profesional",
    description: "Comienza a aprender y ve contenido nuevo cada mes.",
    items: [
      "Acceso a todos los proyectos",
      "Acceso a todos los talleres",
      "Acceso a todos los cursos",
      "Acceso a Discord",
    ],
  },
  professionalPlus: {
    id: 4,
    price: 1200,
    title: "Profesional+",
    description: "Comienza a aprender y ve contenido nuevo cada mes.",
    items: [
      "Acceso a todos los proyectos",
      "Acceso a todos los talleres",
      "Acceso a todos los cursos",
      "Mentorías personalizadas",
    ],
  },
};
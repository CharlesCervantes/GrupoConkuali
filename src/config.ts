import type {
  NavBarLink,
  SocialLink,
  Identity,
  HomePageContent,
  ProjectPageContent
} from "./types/config";

// 🔹 Identidad del sitio
export const identity: Identity = {
  name: "Grupo Conkuali",
  logo: "/LogoConkuali.jpeg",
  email: "sergio@grupoconkuali.mx",
};

// 🔹 Enlaces del menú de navegación (ajustados para scroll interno)
export const navBarLinks: NavBarLink[] = [
  {
    title: "Inicio",
    url: "#hero",  // Cambiado a anclas internas
  },
  {
    title: "Nosotros",
    url: "#about",
  },
  {
    title: "Proyectos",
    url: "#projects",
  },
  {
    title: "Servicios",
    url: "#services",
  },
  {
    title: "Contacto",
    url: "#contact"
  }
];

// 🔹 Enlaces a redes sociales
export const socialLinks: SocialLink[] = [
  {
    title: "GitHub",
    url: "#",
    icon: "mdi:github",
    external: true,
  },
  {
    title: "Mail",
    url: "mailto:sergio@grupoconkuali.mx",
    icon: "mdi:email",
  },
];

// 🔹 Contenido de la página principal
export const homePageContent: HomePageContent = {
  seo: {
    title: "Grupo Conkuali - Construcción de Calidad",
    description: "Especialistas en construcción residencial, comercial e industrial en Monterrey.",
    image: identity.logo,
  },
  role: "Constructora en Monterrey",
  description:
    "Empresa especializada en proyectos residenciales, comerciales e industriales.",
  socialLinks: socialLinks,
  links: [
    {
      title: "Nuestros Proyectos",
      url: "#projects",
    },
    {
      title: "Contáctanos",
      url: "#contact",
    },
  ],
};

// Projects (/projects)
export const projectsPageContent: ProjectPageContent = {
  seo: {
    title: "Projects | Tim Witzdam",
    description: "Check out what I've been working on.",
    image: identity.logo,
  },
  subtitle: "",
  projects: [
    {
      title: "Torre Arena Living",
      description: "El proyecto Torre Arena Living, situado en la zona centro de Monterrey, Nuevo León, incluyó nuestra participación en la administración y supervisión de albañilería, instalaciones eléctricas de diversas tensiones y acabados, asegurando altos estándares de calidad en su ejecución.",
      images: [
        "/ImagenesProyectos/1.jpeg",
        "/FondoEdificios.webp",
      ], // Ahora es un array
      year: "2023 | Monterrey, Nuevo León.",
    },
    // -------------------------------------
    {
      title: "Torre UNA",
      description: "Ubicados en la zona centro de Monterrey, Nuevo León, nos especializamos en albañilería, muros perimetrales con sistema Hebel, muros interiores con tablaroca y firmes de nivelación. Contamos con amplia experiencia en la supervisión y administración de los trabajos de los contratistas involucrados en cada proyecto.",
      images: [
        "/fondoCasa.png",
        "/FondoEdificios.webp",
      ],
      year: "2023 | Monterrey, Nuevo León.",
    }
  ],
};


import type {
  NavBarLink,
  SocialLink,
  Identity,
  HomePageContent,
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
    url: "https://github.com/TimWitzdam",
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

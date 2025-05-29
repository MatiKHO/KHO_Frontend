export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Kumiho",
  description: "Make beautiful websites regardless of your design experience.",
  navItems: [
    {
      label: "Inicio",
      href: "/",
    },
    {
      label: "Tienda",
      href: "/tienda",
    },
    {
      label: "Sobre nosotros",
      href: "/sobre-nosotros",
    },
  ],
  navMenuItems: [
    {
      label: "Inicio",
      href: "/",
    },
    
    {
      label: "Tienda",
      href: "/tienda",
    },
    {
      label: "Sobre nosotros",
      href: "/sobre-nosotros",
    },
    {label: "Registrarse",
      href: "/register",
    }
  ],
  links: {
    github: "https://github.com/MatiKHO",
    twitter: "https://x.com/KumihoEsports",
    instagram: "https://www.instagram.com/kumihoesports/",
    cart: "/cart",
    wishlist: "/wishlist",
  
  },
};

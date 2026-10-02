export interface HeroScene {
  id: string;
  src: string;
  title: string;
  artist?: string;
  category?: string;
}

export const heroScenes: HeroScene[] = [
  {
    id: "banner-01",
    src: "/imgs/banner-01.png",
    title: "AURELIA EDITORIAL I",
    artist: "Aurelia Creative",
    category: "FASHION & EDITORIAL",
  },
  {
    id: "banner-02",
    src: "/imgs/banner-02.png",
    title: "AURELIA EDITORIAL II",
    artist: "Aurelia Creative",
    category: "HAUTE COUTURE",
  },
  {
    id: "banner-03",
    src: "/imgs/banner-03.png",
    title: "AURELIA EDITORIAL III",
    artist: "Aurelia Creative",
    category: "PORTRAITURE & LIGHT",
  },
  {
    id: "banner-04",
    src: "/imgs/banner-04.png",
    title: "AURELIA EDITORIAL IV",
    artist: "Aurelia Creative",
    category: "STYLING & COMPOSITION",
  },
  {
    id: "banner-05",
    src: "/imgs/banner-05.png",
    title: "AURELIA EDITORIAL V",
    artist: "Aurelia Creative",
    category: "MOVEMENT & DRAPERY",
  },
  {
    id: "banner-06",
    src: "/imgs/banner-06.webp",
    title: "AURELIA EDITORIAL VI",
    artist: "Aurelia Creative",
    category: "ART DIRECTION & PRODUCTION",
  },
];

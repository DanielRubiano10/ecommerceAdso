interface SeedProduct {
  description: string;
  images: string[];
  inStock: number;
  price: number;
  sizes: ValidSizes[];
  slug: string;
  tags: string[];
  title: string;
  type: ValidTypes;
  gender: "hombre" | "mujer" | "unisex";
}

type ValidSizes = "XS" | "S" | "M" | "L" | "XL" | "XXL" | "3XL";
type ValidTypes = "camisetas" | "buzos" | "Productos";

interface SeedData {
  products: SeedProduct[];
}

export const initialData: SeedData = {
  products: [
    {
      description:
        "La camiseta tradicional de toda la vida Corte recto, clásico y holgado Tejido grueso de 180 g/m² de gramaje, colores lisos en algodón sanforizado. El color gris jaspeado es 90 % algodón y 10 % poliéster; el denim jaspeado es 50 % poliéster. Cuello y dobladillos con doble puntada para una mayor durabilidad La imprenta independiente que imprime este producto ha sido evaluada de acuerdo con los estándares de la Organización Internacional del Trabajo.La imprenta independiente que imprime este producto obtiene sus materiales de fabricantes comprometidos con la mejora de las prácticas de cultivo de algodón.",
      images: ["Android_M1_B.jpg", "Android_M1_N.jpg"],
      inStock: 7,
      price: 69000,
      sizes: ["XS", "S", "M", "L", "XL", "XXL"],
      slug: "camiseta-logo-cent-developer-android",
      type: "camisetas",
      tags: ["sweatshirt"],
      title: "Camiseta Developer Android",
      gender: "hombre",
    },
    {
      description:
        "La camiseta tradicional de toda la vida Corte recto, clásico y holgado Tejido grueso de 180 g/m² de gramaje, colores lisos en algodón sanforizado. El color gris jaspeado es 90 % algodón y 10 % poliéster; el denim jaspeado es 50 % poliéster. Cuello y dobladillos con doble puntada para una mayor durabilidad La imprenta independiente que imprime este producto ha sido evaluada de acuerdo con los estándares de la Organización Internacional del Trabajo.La imprenta independiente que imprime este producto obtiene sus materiales de fabricantes comprometidos con la mejora de las prácticas de cultivo de algodón.",
      images: ["Angular_M1_B.jpg", "Angular_M1_B.jpg"],
      inStock: 5,
      price: 69000,
      sizes: ["XS", "S", "M", "XL", "XXL"],
      slug: "camiseta-logo-cent-developer-angular",
      type: "camisetas",
      tags: ["angular"],
      title: "Camiseta Developer Angular",
      gender: "hombre",
    },
    {
      description:
        "La camiseta tradicional de toda la vida Corte recto, clásico y holgado Tejido grueso de 180 g/m² de gramaje, colores lisos en algodón sanforizado. El color gris jaspeado es 90 % algodón y 10 % poliéster; el denim jaspeado es 50 % poliéster. Cuello y dobladillos con doble puntada para una mayor durabilidad La imprenta independiente que imprime este producto ha sido evaluada de acuerdo con los estándares de la Organización Internacional del Trabajo.La imprenta independiente que imprime este producto obtiene sus materiales de fabricantes comprometidos con la mejora de las prácticas de cultivo de algodón.",
      images: ["Archlinux1_B.jpg", "Archlinux1_N.jpg"],
      inStock: 13,
      price: 69000,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "camiseta-logo-cent-developer-archlnux",
      type: "camisetas",
      tags: ["archlinux"],
      title: "Camiseta Arch Linux",
      gender: "hombre",
    },
    {
      description:
        "La camiseta tradicional de toda la vida Corte recto, clásico y holgado Tejido grueso de 180 g/m² de gramaje, colores lisos en algodón sanforizado. El color gris jaspeado es 90 % algodón y 10 % poliéster; el denim jaspeado es 50 % poliéster. Cuello y dobladillos con doble puntada para una mayor durabilidad La imprenta independiente que imprime este producto ha sido evaluada de acuerdo con los estándares de la Organización Internacional del Trabajo.La imprenta independiente que imprime este producto obtiene sus materiales de fabricantes comprometidos con la mejora de las prácticas de cultivo de algodón.",
      images: ["Aws_M1_B.jpg", "Aws_M1_N.jpg"],
      inStock: 50,
      price: 45,
      sizes: ["XS", "S", "M", "L"],
      slug: "camiseta-logo-cent-developer-aws",
      type: "camisetas",
      tags: ["aws"],
      title: "Camiseta AWS",
      gender: "hombre",
    },
    {
      description:
        "La camiseta tradicional de toda la vida Corte recto, clásico y holgado Tejido grueso de 180 g/m² de gramaje, colores lisos en algodón sanforizado. El color gris jaspeado es 90 % algodón y 10 % poliéster; el denim jaspeado es 50 % poliéster. Cuello y dobladillos con doble puntada para una mayor durabilidad La imprenta independiente que imprime este producto ha sido evaluada de acuerdo con los estándares de la Organización Internacional del Trabajo.La imprenta independiente que imprime este producto obtiene sus materiales de fabricantes comprometidos con la mejora de las prácticas de cultivo de algodón.",
      images: ["Aws_Azure_M1_B.jpg", "Aws_Azure_M1.jpg"],
      inStock: 50,
      price: 40,
      sizes: ["M", "L", "XL", "XXL"],
      slug: "camiseta-logo-cent-developer-aws-azure",
      type: "camisetas",
      tags: ["azure", "aws"],
      title: "Camiseta Azure - AWS",
      gender: "hombre",
    },
    {
      description:
        "La camiseta tradicional de toda la vida Corte recto, clásico y holgado Tejido grueso de 180 g/m² de gramaje, colores lisos en algodón sanforizado. El color gris jaspeado es 90 % algodón y 10 % poliéster; el denim jaspeado es 50 % poliéster. Cuello y dobladillos con doble puntada para una mayor durabilidad La imprenta independiente que imprime este producto ha sido evaluada de acuerdo con los estándares de la Organización Internacional del Trabajo.La imprenta independiente que imprime este producto obtiene sus materiales de fabricantes comprometidos con la mejora de las prácticas de cultivo de algodón.",
      images: ["Azure_M1_B.jpg", "Azure_M1_N.jpg"],
      inStock: 0,
      price: 35,
      sizes: ["M", "L", "XL", "XXL"],
      slug: "camiseta-logo-cent-developer-azure",
      type: "camisetas",
      tags: ["azure"],
      title: "Camiseta Azure",
      gender: "hombre",
    },
    {
      description:
        "La camiseta tradicional de toda la vida Corte recto, clásico y holgado Tejido grueso de 180 g/m² de gramaje, colores lisos en algodón sanforizado. El color gris jaspeado es 90 % algodón y 10 % poliéster; el denim jaspeado es 50 % poliéster. Cuello y dobladillos con doble puntada para una mayor durabilidad La imprenta independiente que imprime este producto ha sido evaluada de acuerdo con los estándares de la Organización Internacional del Trabajo.La imprenta independiente que imprime este producto obtiene sus materiales de fabricantes comprometidos con la mejora de las prácticas de cultivo de algodón.",
      images: ["Css_M1_B.jpg", "Css_M1_N.jpg"],
      inStock: 15,
      price: 69000,
      sizes: ["S", "M", "L", "XL"],
      slug: "camiseta-logo-cent-developer-css",
      type: "camisetas",
      tags: ["css"],
      title: "Camiseta CSS",
      gender: "hombre",
    },
    {
      description:
        "La camiseta tradicional de toda la vida Corte recto, clásico y holgado Tejido grueso de 180 g/m² de gramaje, colores lisos en algodón sanforizado. El color gris jaspeado es 90 % algodón y 10 % poliéster; el denim jaspeado es 50 % poliéster. Cuello y dobladillos con doble puntada para una mayor durabilidad La imprenta independiente que imprime este producto ha sido evaluada de acuerdo con los estándares de la Organización Internacional del Trabajo.La imprenta independiente que imprime este producto obtiene sus materiales de fabricantes comprometidos con la mejora de las prácticas de cultivo de algodón.",
      images: ["Docker_M1_B.jpg", "Docker_M1_N.jpg"],
      inStock: 15,
      price: 69000,
      sizes: ["S", "M", "L", "XL"],
      slug: "camiseta-logo-cent-docker",
      type: "camisetas",
      tags: ["docker"],
      title: "Camiseta Docker",
      gender: "hombre",
    },
    {
      description:
        "La camiseta tradicional de toda la vida Corte recto, clásico y holgado Tejido grueso de 180 g/m² de gramaje, colores lisos en algodón sanforizado. El color gris jaspeado es 90 % algodón y 10 % poliéster; el denim jaspeado es 50 % poliéster. Cuello y dobladillos con doble puntada para una mayor durabilidad La imprenta independiente que imprime este producto ha sido evaluada de acuerdo con los estándares de la Organización Internacional del Trabajo.La imprenta independiente que imprime este producto obtiene sus materiales de fabricantes comprometidos con la mejora de las prácticas de cultivo de algodón.",
      images: ["Cisco_M1_B.jpg", "Cisco_M1_N.jpg"],
      inStock: 15,
      price: 69000,
      sizes: ["S", "M", "L", "XL"],
      slug: "camiseta-logo-cent-developer-Cisco",
      type: "camisetas",
      tags: ["Cisco"],
      title: "Camiseta Cisco",
      gender: "hombre",
    },
    {
      description:
        "La camiseta tradicional de toda la vida Corte recto, clásico y holgado Tejido grueso de 180 g/m² de gramaje, colores lisos en algodón sanforizado. El color gris jaspeado es 90 % algodón y 10 % poliéster; el denim jaspeado es 50 % poliéster. Cuello y dobladillos con doble puntada para una mayor durabilidad La imprenta independiente que imprime este producto ha sido evaluada de acuerdo con los estándares de la Organización Internacional del Trabajo.La imprenta independiente que imprime este producto obtiene sus materiales de fabricantes comprometidos con la mejora de las prácticas de cultivo de algodón.",
      images: ["Csharp_M1_B.jpg", "Csharp_M1_N.jpg"],
      inStock: 15,
      price: 69000,
      sizes: ["S", "M", "L", "XL"],
      slug: "camiseta-logo-cent-developer-Csharp",
      type: "camisetas",
      tags: ["Csharp"],
      title: "Camiseta Csharp",
      gender: "hombre",
    },
    {
      description:
        "La camiseta tradicional de toda la vida Corte recto, clásico y holgado Tejido grueso de 180 g/m² de gramaje, colores lisos en algodón sanforizado. El color gris jaspeado es 90 % algodón y 10 % poliéster; el denim jaspeado es 50 % poliéster. Cuello y dobladillos con doble puntada para una mayor durabilidad La imprenta independiente que imprime este producto ha sido evaluada de acuerdo con los estándares de la Organización Internacional del Trabajo.La imprenta independiente que imprime este producto obtiene sus materiales de fabricantes comprometidos con la mejora de las prácticas de cultivo de algodón.",
      images: ["Edubuntu1_B.jpg", "Edubuntu1_N.jpg"],
      inStock: 15,
      price: 69000,
      sizes: ["S", "M", "L", "XL"],
      slug: "camiseta-logo-cent-developer-Edubuntu",
      type: "camisetas",
      tags: ["Edubuntu"],
      title: "Camiseta Edubuntu",
      gender: "hombre",
    },
    {
      description:
        "La camiseta tradicional de toda la vida Corte recto, clásico y holgado Tejido grueso de 180 g/m² de gramaje, colores lisos en algodón sanforizado. El color gris jaspeado es 90 % algodón y 10 % poliéster; el denim jaspeado es 50 % poliéster. Cuello y dobladillos con doble puntada para una mayor durabilidad La imprenta independiente que imprime este producto ha sido evaluada de acuerdo con los estándares de la Organización Internacional del Trabajo.La imprenta independiente que imprime este producto obtiene sus materiales de fabricantes comprometidos con la mejora de las prácticas de cultivo de algodón.",
      images: ["Flutter_M1_B.jpg", "Flutter_M1_N.jpg"],
      inStock: 15,
      price: 69000,
      sizes: ["S", "M", "L", "XL"],
      slug: "camiseta-logo-cent-developer-Flutter",
      type: "camisetas",
      tags: ["Flutter"],
      title: "Camiseta Flutter",
      gender: "hombre",
    },
    {
      description:
        "La camiseta tradicional de toda la vida Corte recto, clásico y holgado Tejido grueso de 180 g/m² de gramaje, colores lisos en algodón sanforizado. El color gris jaspeado es 90 % algodón y 10 % poliéster; el denim jaspeado es 50 % poliéster. Cuello y dobladillos con doble puntada para una mayor durabilidad La imprenta independiente que imprime este producto ha sido evaluada de acuerdo con los estándares de la Organización Internacional del Trabajo.La imprenta independiente que imprime este producto obtiene sus materiales de fabricantes comprometidos con la mejora de las prácticas de cultivo de algodón.",
      images: ["Github_M1_B.jpg", "Github_M1_N.jpg"],
      inStock: 15,
      price: 69000,
      sizes: ["S", "M", "L", "XL"],
      slug: "camiseta-logo-cent-developer-Github",
      type: "camisetas",
      tags: ["Github"],
      title: "Camiseta Github",
      gender: "hombre",
    },
    {
      description:
        "La camiseta tradicional de toda la vida Corte recto, clásico y holgado Tejido grueso de 180 g/m² de gramaje, colores lisos en algodón sanforizado. El color gris jaspeado es 90 % algodón y 10 % poliéster; el denim jaspeado es 50 % poliéster. Cuello y dobladillos con doble puntada para una mayor durabilidad La imprenta independiente que imprime este producto ha sido evaluada de acuerdo con los estándares de la Organización Internacional del Trabajo.La imprenta independiente que imprime este producto obtiene sus materiales de fabricantes comprometidos con la mejora de las prácticas de cultivo de algodón.",
      images: ["Github_TshirtB.jpg", "Github_TshirtB2.jpg"],
      inStock: 15,
      price: 69000,
      sizes: ["S", "M", "L", "XL"],
      slug: "camiseta-logo-cent-developer-Github-copilot",
      type: "camisetas",
      tags: ["Github"],
      title: "Camiseta Github Copilot",
      gender: "hombre",
    },
    {
      description:
        "La camiseta tradicional de toda la vida Corte recto, clásico y holgado Tejido grueso de 180 g/m² de gramaje, colores lisos en algodón sanforizado. El color gris jaspeado es 90 % algodón y 10 % poliéster; el denim jaspeado es 50 % poliéster. Cuello y dobladillos con doble puntada para una mayor durabilidad La imprenta independiente que imprime este producto ha sido evaluada de acuerdo con los estándares de la Organización Internacional del Trabajo.La imprenta independiente que imprime este producto obtiene sus materiales de fabricantes comprometidos con la mejora de las prácticas de cultivo de algodón.",
      images: ["Gitlab_M1_B.jpg", "Gitlab_M1_N.jpg"],
      inStock: 15,
      price: 69000,
      sizes: ["S", "M", "L", "XL"],
      slug: "camiseta-logo-cent-developer-Github-copilot",
      type: "camisetas",
      tags: ["Github"],
      title: "Camiseta Github Copilot",
      gender: "hombre",
    },
    {
      description:
        "La camiseta tradicional de toda la vida Corte recto, clásico y holgado Tejido grueso de 180 g/m² de gramaje, colores lisos en algodón sanforizado. El color gris jaspeado es 90 % algodón y 10 % poliéster; el denim jaspeado es 50 % poliéster. Cuello y dobladillos con doble puntada para una mayor durabilidad La imprenta independiente que imprime este producto ha sido evaluada de acuerdo con los estándares de la Organización Internacional del Trabajo.La imprenta independiente que imprime este producto obtiene sus materiales de fabricantes comprometidos con la mejora de las prácticas de cultivo de algodón.",
      images: ["Golang.jpg", "Golang_N.jpg"],
      inStock: 15,
      price: 69000,
      sizes: ["S", "M", "L", "XL"],
      slug: "camiseta-logo-cent-developer-Github-copilot",
      type: "camisetas",
      tags: ["Github"],
      title: "Camiseta Github Copilot",
      gender: "hombre",
    },
    {
      description:
        "La camiseta tradicional de toda la vida Corte recto, clásico y holgado Tejido grueso de 180 g/m² de gramaje, colores lisos en algodón sanforizado. El color gris jaspeado es 90 % algodón y 10 % poliéster; el denim jaspeado es 50 % poliéster. Cuello y dobladillos con doble puntada para una mayor durabilidad La imprenta independiente que imprime este producto ha sido evaluada de acuerdo con los estándares de la Organización Internacional del Trabajo.La imprenta independiente que imprime este producto obtiene sus materiales de fabricantes comprometidos con la mejora de las prácticas de cultivo de algodón.",
      images: ["GoogleCloud_M1.jpg", "GoogleCloud_M1C_N.jpg"],
      inStock: 15,
      price: 69000,
      sizes: ["S", "M", "L", "XL"],
      slug: "camiseta-logo-cent-developer-Github-copilot",
      type: "camisetas",
      tags: ["Github"],
      title: "Camiseta Github Copilot",
      gender: "hombre",
    },
    {
      description:
        "Gorra BORDADA en Drill Vulcano 100% algodón tipo beisbolera con botón, costuras encintadas con frente partido y fusionado con ojales en los dos laterales, 4 costuras en la visera, broche hebilla caimán. Elaborada en tela dril super 8(100%) peso 155 gr. Tamaño graduable estandard adulto: 50-60 cm . Hebilla metalica.",
      images: ["gorra-githut-2.jpg", "gorra_github.jpg"],
      inStock: 15,
      price: 69000,
      sizes: ["S", "M", "L", "XL"],
      slug: "gorra-tech-github",
      type: "Productos",
      tags: ["github"],
      title: "Gorra Github",
      gender: "unisex",
    },
    {
      description:
        "Alimento en polvo a base de Proteína aislada de suero 65%, Caseína Micelar 35% y Leucina 3g.",
      images: ["BestCoco.JPG", "BestTabla.JPG"],
      inStock: 15,
      price: 199000,
      sizes: ["S", "M", "L", "XL"],
      slug: "gorra-tech-react",
      type: "Productos",
      tags: ["react"],
      title: "Best 2.04 LB",
      gender: "unisex",
    },
    {
      description:
        "Alimento en polvo a base de Proteína aislada de suero 65%, Caseína Micelar 35% y Leucina 3g.",
      images: ["Best5Lb.JPG", "Tabla5Lb.JPG"],
      inStock: 15,
      price: 370000,
      sizes: ["S", "M", "L", "XL"],
      slug: "gorra-tech-js",
      type: "Productos",
      tags: ["js"],
      title: "Best 4 LB",
      gender: "unisex",
    },
    {
      description:
        "Alimento en polvo a base de Proteína aislada de suero 65%, Caseína Micelar 35% y Leucina 3g.",
      images: ["BEST4LBBOLSAS.JPG", "bestBolsaTabla.JPG"],
      inStock: 15,
      price: 370000,
      sizes: ["S", "M", "L", "XL"],
      slug: "gorra-tech-ubuntu",
      type: "Productos",
      tags: ["ubuntu"],
      title: "Best 4 LB Bolsa",
      gender: "unisex",
    },
    {
      description:
        "Bipro Classic es una proteína de suero de alta pureza y concentración, con mínimos niveles de grasa y lactosa.",
      images: ["BiPro.JPG", "BiPro6lb.JPG"],
      inStock: 15,
      price: 149000,
      sizes: ["S", "M", "L", "XL"],
      slug: "gorra-tech-angular",
      type: "Productos",
      tags: ["angular"],
      title: "Bipro Classic",
      gender: "unisex",
    },
    {
      description:
        "Proton Whey, es una mezcla en polvo a base de proteina concentrada y aislada de suero lácteo con probióticos.",
      images: ["Proton.JPG", "Proton6lb.JPG"],
      inStock: 15,
      price: 126000,
      sizes: ["S", "M", "L", "XL"],
      slug: "buzo-you-are-special",
      type: "buzos",
      tags: ["special"],
      title: "Proton Whey",
      gender: "hombre",
    },
    {
      description:
        "ISO 100 es una proteína de suero aislado de leche de la marca DYMATIZE ha sido procesada para llegar a la perfección, 100% hidrolizada e instantánea y a través de 5 controles diferentes de calidad.",
      images: ["Iso.JPG", "iso100.JPG"],
      inStock: 15,
      price: 210000,
      sizes: ["S", "M", "L", "XL"],
      slug: "buzo-you-are-frontend",
      type: "buzos",
      tags: ["frontend"],
      title: "ISO 100",
      gender: "hombre",
    },
    {
      description:
        "Polvo Deshidratado De Frutos Rojos, L-Citrulina, Beta-Alanina, Creatina HCl, PolvoDe Raíz De Remolacha, L-Leucina, L-Arginina, Betaína, L-Isoleucina, L-Valina, Dióxido De Silicio(Anticompactante), Cafeína, Sucralosa (Edulcorante), Saborizante Idéntico Al Natural, Aspartame(Edulcorante), Goma Xanthan (Espesante), Citrato De Zinc, Ácido Cítrico (Ácidulante), ÁcidoMálico (Acidulante), Niacina (Vitamina B3), Silicato de Calcio, Benzoato De Sodio (Conservante), Colorante Rojo FD&C CI 45430, Pimienta En Polvo, Piridoxina Clorhidrato, Tiamina Clorhidrato, Vitamina D3, Selenito De Sodio.",
      images: ["Intenze.JPG", "Intenze1.JPG"],
      inStock: 15,
      price: 140000,
      sizes: ["S", "M", "L", "XL"],
      slug: "buzo-you-are-dev",
      type: "buzos",
      tags: ["dev"],
      title: "Intenze",
      gender: "hombre",
    },
    {
      description:
        "ELECTRON es una mezcla en polvo a base de fruta micro pulverizada, que tiene ingredientes como Taurina, Tirosina, Cafeina, entre otros.",
      images: ["Electron.JPG", "Electron.JPG"],
      inStock: 15,
      price: 125000,
      sizes: ["S", "M", "L", "XL"],
      slug: "buzo-you-are-hello-world",
      type: "buzos",
      tags: ["hello-world"],
      title: "Electron",
      gender: "hombre",
    },
    {
      description:
        "Mejora el rendimiento físico y deportivo ya que estimula el sistema nervioso central aumentando el estado de alerta y concentración. Es un verdadero estallido de energía, ideal para todos los deportes de actividad prolongada. Aumenta el estado de alerta y concentración. Mejora el rendimiento físico y deportivo.",
      images: ["Energy.JPG", "Energ.JPG"],
      inStock: 15,
      price: 35000,
      sizes: ["S", "M", "L", "XL"],
      slug: "buzo-you-are-binary",
      type: "buzos",
      tags: ["binary"],
      title: "Energy Up",
      gender: "hombre",
    },
    {
      description:
        "Smart es un Alimento en polvo a base harina de avena con palatinosa, amilopectina, proteina de suero de leche enriquecido con vitaminas.",
      images: ["Smart.JPG", "Smart6lb.JPG"],
      inStock: 15,
      price: 85000,
      sizes: ["S", "M", "L", "XL"],
      slug: "buzo-you-are-phone",
      type: "buzos",
      tags: ["phone"],
      title: "Smart gainer",
      gender: "hombre",
    },
    {
      description:
        "Proteina Hipercalorica de 3 y 6 libras sin azúcar con 40 g de Whey protein, cuenta con 970 calorías y 190 g de carbohidratos ideal para una etapa de volumen y llegar al peso ideal, cuenta con 3 g de creatina HCL y 10g de aminoácidos, cuenta con albumina de huevo y avena haciéndola una proteína con un alto grado de pureza y componentes naturales.",
      images: ["Golden.JPG", "GoldenTABLA.JPG"],
      inStock: 15,
      price: 126000,
      sizes: ["S", "M", "L", "XL"],
      slug: "buzo-you-are-cloud",
      type: "buzos",
      tags: ["cloud"],
      title: "Golden mass",
      gender: "hombre",
    },
    {
      description:
        "Proteína de suero, hipercalórica que incluye en su innovadora fórmula 3000 mg de Creatina, HMB, BCAA, 44g de Proteína, 1000 calorías por porción y fuentes de Carbohidratos con diferentes velocidades de absorción.",
      images: ["Megaplex.JPG", "Megaple.JPG"],
      inStock: 15,
      price: 219000,
      sizes: ["S", "M", "L", "XL"],
      slug: "buzo-you-are-cloud-2",
      type: "buzos",
      tags: ["cloud"],
      title: "Megaplez Power",
      gender: "unisex",
    },
    {
      description:
        "Creatina Monohidrato de 5g para aumento de centímetro de músclo magro. Fuerza, energía y resistencia durante la rutina de entrenamiento.",
      images: ["creatina.JPG", "Crea100.JPG"],
      inStock: 15,
      price: 135000,
      sizes: ["S", "M", "L", "XL"],
      slug: "buzo-you-are-python",
      type: "buzos",
      tags: ["python"],
      title: "Crea 100%",
      gender: "hombre",
    },
    {
      description:
        "Es una elección sobresaliente para aquellos que buscan maximizar su absorción y eficacia, ya que se trata de una creatina monohidratada y micronizada de la más alta pureza.",
      images: ["Creatine.JPG", "Creati.JPG"],
      inStock: 15,
      price: 68000,
      sizes: ["S", "M", "L", "XL"],
      slug: "buzo-you-are-chrome",
      type: "buzos",
      tags: ["chrome"],
      title: "Creatine Time",
      gender: "hombre",
    },
    {
      description:
        "Polvo Deshidratado de Frutas de Uva, Creatina HCL, Sucralosa (Edulcorante), Saborizante Idéntico al Natural, Aspartame (Edulcorante), Goma Xanthan (Espesante), Benzoato de Sodio (Conservante), Ácido Citrico (Acidulante), Ácido Málico (Acidulante), Dióxido de Silicio(Anticompactante), Silicato de Calcio (Espesante), Colorante Rojo FD&C CI 45430. Fenilcetonuricos: Contiene Fenilalanina.",
      images: ["Legacy.JPG", "Legacy.JPG"],
      inStock: 15,
      price: 110000,
      sizes: ["S", "M", "L", "XL"],
      slug: "buzo-you-are-atom",
      type: "buzos",
      tags: ["atom"],
      title: "Legacy",
      gender: "hombre",
    },
    {
      description:
        "Hydroxycut Hardcore Elite NUEVA PRESENTACIÓN de Muscletech Performance Series es una fórmula termogénica, diseñada combinando ingredientes clave en las cantidades precisas con objetivo ofrecer una fórmula muy completa pero sencilla, sin mezclas patentadas con el propósito de incrementar el gasto energético facilitando a la vez la información exacta de que se está tomando.",
      images: ["Muscletech.JPG", "Muscletech.JPG"],
      inStock: 15,
      price: 105000,
      sizes: ["S", "M", "L", "XL"],
      slug: "buzo-you-are-hola",
      type: "buzos",
      tags: ["hola"],
      title: "Hydroxycut",
      gender: "hombre",
    },
    {
      description:
        "Es un producto de última generación diseñado para complementar tu plan nutricional. Contiene ingredientes ampliamente estudiados y aprobados por la FDA: Extracto de naranja amarga, picolinato de cromo, cla, l-carnitina, cafeína, taurina y goma guar.",
      images: ["Burner.JPG", "Burner.JPG"],
      inStock: 15,
      price: 139000,
      sizes: ["S", "M", "L", "XL"],
      slug: "buzo-you-are-emberd",
      type: "buzos",
      tags: ["emberd"],
      title: "Burner Stark",
      gender: "hombre",
    },
    {
      description:
        "Lipo 6 Black Hers Ultra es un producto termogénico pensado especialmente para ayudar a las mujeres en sus procesos de pérdida de peso o definición.",
      images: ["Lipo6.JPG", "Lipo6.JPG"],
      inStock: 15,
      price: 126000,
      sizes: ["S", "M", "L", "XL"],
      slug: "buzo-you-are-id",
      type: "buzos",
      tags: ["dev-id"],
      title: "Lipo 6 Black Hers Ultra",
      gender: "hombre",
    },
    {
      description:
        "Buzo con capota y bolsillo tipo canguro en tela algodón perchado calidad nacional patprimo. Estampado en vinilo textil de Alta calidad. *Material suave con la piel, resistente y de excelente calidad.",
      images: ["HOODIE-17.2.jpg", "HOODIE-17.1.jpg"],
      inStock: 15,
      price: 126000,
      sizes: ["S", "M", "L", "XL"],
      slug: "buzo-you-are-linux",
      type: "buzos",
      tags: ["dev-linux"],
      title: "Buzo Linux",
      gender: "hombre",
    },
    {
      description:
        "Buzo con capota y bolsillo tipo canguro en tela algodón perchado calidad nacional patprimo. Estampado en vinilo textil de Alta calidad. *Material suave con la piel, resistente y de excelente calidad.",
      images: ["HOODIE-20.2.jpg", "HOODIE-20.1.jpg"],
      inStock: 15,
      price: 126000,
      sizes: ["S", "M", "L", "XL"],
      slug: "buzo-you-are-starkoverflow",
      type: "buzos",
      tags: ["dev-starkoverflow"],
      title: "Buzo starkoverflow",
      gender: "hombre",
    },
    {
      description:
        "Buzo con capota y bolsillo tipo canguro en tela algodón perchado calidad nacional patprimo. Estampado en vinilo textil de Alta calidad. *Material suave con la piel, resistente y de excelente calidad.",
      images: ["HOODIE-21.2.jpg", "HOODIE-22.1.jpg"],
      inStock: 15,
      price: 126000,
      sizes: ["S", "M", "L", "XL"],
      slug: "buzo-you-are-internet",
      type: "buzos",
      tags: ["dev-internet"],
      title: "Buzo internet",
      gender: "hombre",
    },
    {
      description:
        "Buzo con capota y bolsillo tipo canguro en tela algodón perchado calidad nacional patprimo. Estampado en vinilo textil de Alta calidad. *Material suave con la piel, resistente y de excelente calidad.",
      images: ["HOODIE-23.2.jpg", "HOODIE-23.1.jpg"],
      inStock: 15,
      price: 126000,
      sizes: ["S", "M", "L", "XL"],
      slug: "buzo-you-are-github",
      type: "buzos",
      tags: ["dev-github"],
      title: "Buzo github",
      gender: "hombre",
    },
    {
      description:
        "Buzo con capota y bolsillo tipo canguro en tela algodón perchado calidad nacional patprimo. Estampado en vinilo textil de Alta calidad. *Material suave con la piel, resistente y de excelente calidad.",
      images: ["HOODIE-24.2.jpg", "HOODIE-24.1.jpg"],
      inStock: 15,
      price: 126000,
      sizes: ["S", "M", "L", "XL"],
      slug: "buzo-you-are-json",
      type: "buzos",
      tags: ["dev-json"],
      title: "Buzo json",
      gender: "hombre",
    },
    {
      description:
        "Buzo con capota y bolsillo tipo canguro en tela algodón perchado calidad nacional patprimo. Estampado en vinilo textil de Alta calidad. *Material suave con la piel, resistente y de excelente calidad.",
      images: ["HOODIE-25.2.jpg", "HOODIE-25.1.jpg"],
      inStock: 15,
      price: 126000,
      sizes: ["S", "M", "L", "XL"],
      slug: "buzo-you-are-json-2",
      type: "buzos",
      tags: ["dev-json"],
      title: "Buzo json new",
      gender: "hombre",
    },
    {
      description:
        "Buzo con capota y bolsillo tipo canguro en tela algodón perchado calidad nacional patprimo. Estampado en vinilo textil de Alta calidad. *Material suave con la piel, resistente y de excelente calidad.",
      images: ["HOODIE-27.2_1.jpg", "HOODIE-28.1.jpg"],
      inStock: 15,
      price: 126000,
      sizes: ["S", "M", "L", "XL"],
      slug: "buzo-you-are-power-bi",
      type: "buzos",
      tags: ["dev-power-bi"],
      title: "Buzo Power Bi",
      gender: "hombre",
    },
    {
      description:
        "Buzo con capota y bolsillo tipo canguro en tela algodón perchado calidad nacional patprimo. Estampado en vinilo textil de Alta calidad. *Material suave con la piel, resistente y de excelente calidad.",
      images: ["HOODIE-30.2.jpg", "HOODIE-30.1.jpg"],
      inStock: 15,
      price: 126000,
      sizes: ["S", "M", "L", "XL"],
      slug: "buzo-you-are-code",
      type: "buzos",
      tags: ["dev-code"],
      title: "Buzo code",
      gender: "hombre",
    },
  ],
};

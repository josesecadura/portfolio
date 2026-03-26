# Portfolio Personal — José Secadura

Portfolio personal diseñado como página web estática usando **Astro**.

## 🚀 Stack

- [Astro](https://astro.build) — framework de generación de sitios estáticos
- CSS moderno con variables y scoped styles
- TypeScript

## 📁 Estructura

```
src/
├── components/
│   ├── Navbar.astro
│   ├── Hero.astro
│   ├── About.astro
│   ├── Projects.astro
│   ├── Skills.astro
│   ├── Contact.astro
│   └── Footer.astro
├── layouts/
│   └── Layout.astro
└── pages/
    └── index.astro
public/
└── favicon.svg
```

## 🛠️ Comandos

| Comando           | Acción                                        |
| ----------------- | --------------------------------------------- |
| `npm install`     | Instala las dependencias                      |
| `npm run dev`     | Inicia el servidor de desarrollo en `localhost:4321` |
| `npm run build`   | Genera el sitio estático en `./dist/`         |
| `npm run preview` | Previsualiza el build localmente              |

## 📄 Secciones

- **Hero** — Presentación con nombre, título y código decorativo
- **Sobre mí** — Descripción personal y estadísticas
- **Proyectos** — Tarjetas de proyectos con tags y enlaces
- **Habilidades** — Stack tecnológico agrupado por categoría
- **Contacto** — Formulario de contacto y redes sociales

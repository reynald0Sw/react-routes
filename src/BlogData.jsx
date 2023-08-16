import React from "react";

const blogdata = [];
blogdata.push({
  title: "que es React?",
  slug: "que-es-react",
  content: "React se basa en la idea de dividir la interfaz de usuario en componentes reutilizables. Cada parte de tu blog, como encabezado, publicaciones individuales, barra lateral y pie de página, puede ser un componente independiente. Esto facilita la construcción y el mantenimiento, ya que puedes enfocarte en cada parte por separado y luego combinarlos para formar el blog completo.w",
  author: "@reynaldoSW",
});
blogdata.push({
  title: "que es Vue?",
  slug: "que-es-vue",
  content: "Vue.js, comúnmente referido como Vue, es un framework de JavaScript de código abierto utilizado para construir interfaces de usuario y aplicaciones web interactivas. Fue creado por Evan You y se ha vuelto muy popular debido a su enfoque en la facilidad de uso, su flexibilidad y su capacidad para construir aplicaciones de una sola página (Single Page Applications, SPAs) de manera eficiente",
  author: "@reynaldoSWsss",
});
blogdata.push({
  title: "que es Angular?",
  slug: "que-es-angular",
  content:
    "Angular es un framework de desarrollo de aplicaciones web y móviles de código abierto creado y mantenido por Google. Permite a los desarrolladores construir aplicaciones web robustas, interactivas y de una sola página (Single Page Applications, SPAs) utilizando el lenguaje de programación TypeScript.",
  author: "@reynaldoSWsDss",
});

<div className="App">
      <header className="App-header">
        <h1>Bienvenido a Mi Elegante Página de Inicio</h1>
        <p>Explora nuestro contenido increíble y bonito.</p>
        <button>Ver más</button>
      </header>
    </div>

export { blogdata };

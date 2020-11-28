## Componente para generar Selector con multiples categorías

La finalidad es generar un objeto con esta forma para poder renderizarlo
en un selector estilo "HTML optgroup Tag" solo que para React utilizando
la libreria react-select.

```js
let options = [
  {
    label: "Frutas",
    options: [
      {
        value: "Banana",
        label: "Banana",
        group: "Frutas",
      },
      {
        value: "Manzana",
        label: "Manzana",
        group: "Frutas",
      },
    ],
  },
  {
    label: "Zapatos",
    options: [
      { value: "Nike", label: "Nike", group: "Zapatos" },
      { value: "Adidas", label: "Adidas", group: "Zapatos" },
    ],
  },
];
```

Falta agregar el botón para guardar los cambios en el back y los state para pasar el objeto guardado desde el back a cada formulario

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

Se le agregó en el componente principal las tres variables para ingresar los link para GET y PUT de los objetos desde el back, como también
ingresar el token utilizando Bearer. También permite modificar el título y color de fondo de manera simple a cada subcomponente.

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

## English

## Component to generate an object for the react-select optgruop

### You can add categories and items, as well as delete them.

For now the code commentaries are in spanish because the component will bee used in a hispanic project, but once the project is ready I will comment the
code in english also.

In this link you can play around with the component, once you create categories and insert item the only way to see what you have done
is looking at the "Borrar Item" (delete item) select group.
https://fskarmeta-create-group-select-react-component.netlify.app/

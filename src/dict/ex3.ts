// // Exercice 3: Filtrer les propriétés numériques d'un objetFonctions à utiliser : filter, valuesObjectif : Filtrer l'objet obj pour ne garder que les propriétés dont la valeur est un nombre, puis récupérer les valeurs des propriétés restantes.

import { D } from "@mobily/ts-belt";

const obj = {
  name: "Laptop",
  price: 1000,
  stock: true,
  category: "Electronics",
};

export const DictFn3 = () => {
  const filteredObj = D.filter(obj, (value) => typeof value === "number");
  const numericValues = D.values(filteredObj as Record<string, number>);

  console.log("Filtered Object:", filteredObj);
  console.log("Numeric Values:", numericValues);
};

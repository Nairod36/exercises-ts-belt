// // Exercice 4: Filtrer les propriétés dont le nom commence par une lettre spécifiqueFonctions à utiliser : filterWithKey, keysObjectif : Filtrer l'objet obj pour ne conserver que les propriétés dont le nom commence par 'p', puis récupérer les clés restantes.

import { D } from "@mobily/ts-belt";

const obj = { price: 1000, stock: true, brand: "Dell", processor: "Intel" };

export const DictFn4 = () => {
  const filteredObj = D.filterWithKey(obj, (key) => key.startsWith("p"));
  const remainingKeys = D.keys(filteredObj);

  console.log("Filtered Object:", filteredObj);
  console.log("Remaining Keys:", remainingKeys);
};

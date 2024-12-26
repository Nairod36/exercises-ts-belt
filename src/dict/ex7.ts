// // Exercice 7: Vérifier si un objet est vide après suppression de ses clésFonctions à utiliser : deleteKeys, isEmptyObjectif : Supprimer toutes les clés de l'objet obj et vérifier si l'objet résultant est vide.

import { D } from "@mobily/ts-belt";

const obj = { name: "Laptop", price: 1000, stock: true };

export const DictFn7 = () => {
  const updatedObj = D.deleteKeys(obj, ["name", "price", "stock"]);
  const isEmpty = D.isEmpty(updatedObj);

  console.log("Updated Object:", updatedObj);
  console.log("Is Empty Object:", isEmpty);
};

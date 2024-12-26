// // Exercice 1: Supprimer une clé d'un objetFonctions à utiliser : deleteKey, getObjectif : Supprimer la clé 'price' de l'objet obj et vérifier que la valeur associée n'est plus accessible.

import { D } from "@mobily/ts-belt";

const objf = { name: "Laptop", price: 1000, stock: true };

export const DictFn1 = () => {
  const updatedObj = D.deleteKey(objf, "price");

  const hasPrice = D.get(updatedObj as any, "price");

  console.log("Original Object:", objf);
  console.log("Updated Object:", updatedObj);
  console.log("Price Exists:", hasPrice);
};

// // Exercice 2: Supprimer plusieurs clés et vérifier leur absenceFonctions à utiliser : deleteKeys, keysObjectif : Supprimer les clés 'price' et 'stock' de l'objet obj, puis vérifier que ces clés ne sont plus présentes dans l'objet.

import { D } from "@mobily/ts-belt";

const obj = { name: "Laptop", price: 1000, stock: true, brand: "Dell" };

export const DictFn2 = () => {
  const updatedObj = D.deleteKeys(obj, ["price", "stock"]);

  const remainingKeys = D.keys(updatedObj) as string[];

  console.log("Original Object:", obj);
  console.log("Updated Object:", updatedObj);
  console.log("Remaining Keys:", remainingKeys);
  console.log(
    "Keys Removed:",
    !remainingKeys.includes("price") && !remainingKeys.includes("stock"),
  );
};

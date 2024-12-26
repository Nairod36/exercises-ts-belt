// // Exercice 6: Récupérer la valeur d'une clé avec sécuritéFonctions à utiliser : get, getUnsafeObjectif : Récupérer la valeur de la clé 'price' de manière sécurisée (avec get), puis tenter de récupérer la valeur de la clé 'stock' sans sécurité (avec getUnsafe).

import { D } from "@mobily/ts-belt";

const obj = { name: "Laptop", price: 1000, stock: true };

export const DictFn6 = () => {
  const price = D.get(obj, "price");
  const stock = D.getUnsafe(obj, "stock");

  console.log("Safe Get (price):", price);
  console.log("Unsafe Get (stock):", stock);
};

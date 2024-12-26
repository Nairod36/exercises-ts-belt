// // Exercice 5: Créer un objet à partir d'un tableau de pairesFonctions à utiliser : fromPairs, toPairsObjectif : Transformer un tableau de paires [clé, valeur] en un objet, puis vérifier en retournant le tableau des paires.

import { D } from "@mobily/ts-belt";

const pairs: readonly (readonly [string, unknown])[] = [
  ["name", "Laptop"],
  ["price", 1000],
  ["stock", true],
];

export const DictFn5 = () => {
  const obj = D.fromPairs(pairs);
  const backToPairs = D.toPairs(obj);

  console.log("Object from Pairs:", obj);
  console.log("Back to Pairs:", backToPairs);
};

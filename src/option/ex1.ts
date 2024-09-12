/* eslint-disable prettier/prettier */
// Exercice 1: Vérifier et filtrer une option,
//puis obtenir une valeur par défautFonctions à utiliser : fromNullable, filter, getWithDefaultObjectif :
//Créer une option à partir de 'Laptop', filtrer les options contenant la lettre 'L',
//puis obtenir la valeur par défaut 'No Item' si l'option est vide.
import { O } from "@mobily/ts-belt";

const item = "Laptop";
export const optionFn1 = () => {
  const option = O.fromNullable(item);

  const filter = O.filter(option, (item) => item.includes("L"));

  const getWithDefault = O.getWithDefault(filter, "No Item");
  console.log(getWithDefault);
};

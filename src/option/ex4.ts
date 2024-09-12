/* eslint-disable prettier/prettier */
// Exercice 4: Vérifier une option, appliquer une transformation,
// puis obtenir le résultat sous forme nullableFonctions à utiliser :
// fromNullable, isSome, map, toNullableObjectif :
// Créer une option à partir d'une valeur, vérifier si elle est présente,
// appliquer une transformation en augmentant de 10%,
// puis retourner cette option sous forme nullable.
import { O } from "@mobily/ts-belt";

const value = 1000;
export const optionFn4 = () => {
  const fromNullable = O.fromNullable(value);
  //   const isSome = O.isSome(fromNullable);
  const map = O.map(fromNullable, (value) => value + value * 0.1);
  const toNullable = O.toNullable(map);

  console.log(toNullable);
};

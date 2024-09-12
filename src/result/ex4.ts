/* eslint-disable prettier/prettier */
/*
Exercice 4: Inverser un Result et gérer l'erreur
Fonctions à utiliser : flip, mapError, recoverObjectif : 
Inverser les valeurs Ok et Error d'un Result, transformer l'erreur en ajoutant un message personnalisé,
puis récupérer une valeur par défaut.
*/

import { R } from "@mobily/ts-belt";

export const resultFn4 = () => {
  console.log("Ex4:");
  const result = R.fromNullable(null, "Erreur");
  const flippedResult = R.flip(result);
  console.log(flippedResult);
  const resultWithError = R.mapError(flippedResult, (err) => `Erreur: ${err}`);
  console.log(resultWithError);
  const recoveredResult = R.recover(resultWithError, "Erreur");
  console.log(recoveredResult);
};

/* eslint-disable prettier/prettier */
/*
Exercice 6: Appliquer une transformation à une erreur et récupérer une option
Fonctions à utiliser : fromNullable, mapError, toOptionObjectif :
Créer un Result à partir d'une valeur nullable, appliquer une transformation sur l'erreur, puis convertir le résultat en option.
*/
import { R } from "@mobily/ts-belt";

export const resultFn6 = () => {
  console.log("Ex6:");
  const value = null;
  const result = R.fromNullable(value, "Erreur");
  const resultWithError = R.mapError(result, (err) => `Erreur: ${err}`);
  const option = R.toOption(resultWithError);
  console.log(option);
};

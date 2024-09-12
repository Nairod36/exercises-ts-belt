/* eslint-disable prettier/prettier */
/*
Exercice 2: Manipuler une valeur nullable et récupérer une valeur par défaut
Fonctions à utiliser : fromNullable, isOk, getWithDefault, map
Objectif : Créer un Result à partir d'une valeur nullable, vérifier si c'est un succès,
appliquer une transformation sur la valeur, puis récupérer une valeur par défaut si l'option est vide.
*/
import { R, O } from "@mobily/ts-belt";
export const resultFn2 = () => {
  console.log("Ex2:");
  const result = R.fromNullable(null, "null");
  if (R.isOk(result)) {
    const mappedResult = R.map(result, (value) => value * 2);
    const value = R.getWithDefault(mappedResult, 0);
    console.log(value);
  } else {
    console.log("Value is null");
  }
};

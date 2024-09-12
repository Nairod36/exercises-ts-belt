/* eslint-disable prettier/prettier */
/*
Exercice 3: Aplatir deux Result, vérifier et récupérer une valeur par défaut
Fonctions à utiliser : flatMap, recover, map, getWithDefault
Objectif : Aplatir deux Result avec flatMap, appliquer une transformation sur la valeur,
puis récupérer une valeur par défaut si l'une des valeurs échoue.
*/

import { R, A } from "@mobily/ts-belt";

export const resultFn3 = () => {
  console.log("Ex3:");
  const value1 = 100;
  const value2 = 200;
  const result1 = R.fromNullable(value1, "null");
  const result2 = R.fromNullable(value2, "null");
  const result = R.flatMap(result1, (val1) =>
    val1 === value1
      ? R.flatMap(result2, (val2) => R.Ok(val1 + val2))
      : R.Error("error")
  );
  console.log(result);
};

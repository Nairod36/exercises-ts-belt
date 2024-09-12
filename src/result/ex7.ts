/* eslint-disable prettier/prettier */
/*
Exercice 7: Manipuler un Result d'une promesse et récupérer la valeur avec une exception
Fonctions à utiliser : fromPromise, map, getExnObjectif : 
Transformer une promesse en Result, appliquer une transformation, puis récupérer la valeur avec exception si le Result échoue.
*/
import { R } from "@mobily/ts-belt";
export const resultFn7 = async () => {
  const fetchData = async () => {
    if (Math.random() > 0.5) {
      return "Données";
    }
    throw new Error("Erreur");
  };
  const promise = fetchData();
  const result = await R.fromPromise(promise);
  const mappedResult = R.map(result, (value) => value + " transformées");
  const data = R.getExn(mappedResult);
  console.log("Ex7:\n", data);
};

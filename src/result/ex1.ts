/* eslint-disable prettier/prettier */
/*
Exercice 1: Transformer une exécution en Result, appliquer une transformation, puis obtenir la valeur par défaut
Fonctions à utiliser : fromExecution, map, getWithDefaultObjectif : 
Transformer une exécution en Result, appliquer une transformation qui multiplie la valeur par 2,
puis récupérer une valeur par défaut si l'exécution échoue.
*/
import { R } from "@mobily/ts-belt";
export const resultFn1 = () => {
  console.log("Ex1:");
  const riskyFunction = () => {
    if (Math.random() > 0.5) {
      return 100;
    }
    throw new Error("Erreur");
  };
  const result = R.fromExecution(riskyFunction);
  const mappedResult = R.map(result, (value) => value * 2);
  const value = R.getWithDefault(mappedResult, 0);
  console.log(value);
};

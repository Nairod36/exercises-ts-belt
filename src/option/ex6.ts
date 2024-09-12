/* eslint-disable prettier/prettier */
// Exercice 6: Créer une option à partir d'une promesse,
// appliquer une fonction, et récupérer la valeur avec une exceptionFonctions à utiliser :
// fromPromise, map, getExn Objectif : Créer une option à partir d'une promesse,
// appliquer une transformation qui ajoute ' reçu' au résultat,
// puis extraire la valeur avec exception.
import { O } from "@mobily/ts-belt";

const fetchData = async () => {
  if (Math.random() > 0.5) {
    return "Données";
  }
  throw new Error("Erreur");
};
export const optionFn6 = () => {
  const fromPromise = O.fromPromise(fetchData());
  const map = O.map(fromPromise, (data) => data + " reçu");
  const getExn = O.getExn(map);
};

/* eslint-disable prettier/prettier */
// Exercice 7: Transformer une option falsy en valeur par défaut
// et l'utiliser avec un tupleFonctions à utiliser :
//fromFalsy, getWithDefault, zip    Objectif :
//Créer une option à partir d'une valeur falsy,
//récupérer la valeur par défaut 'Inconnu',
//puis l'associer à une autre option pour former un tuple.
import { O } from "@mobily/ts-belt";

const value = "" as string;
const option2 = O.fromNullable("Validé");
export const optionFn7 = () => {
  const fromFalsy = O.fromFalsy(value);

  const getWithDefault = O.getWithDefault(fromFalsy, "Inconnu");

  const zip = O.zip(getWithDefault, option2);
  console.log(zip);
};

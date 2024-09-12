/* eslint-disable prettier/prettier */
// Exercice 2: Transformer une option à partir d'un prédicat,
//puis extraire une valeurFonctions à utiliser :
// fromPredicate, map, getWithDefaultObjectif : *
//Créer une option à partir d'un prédicat (valeur > 50),
//transformer cette option en multipliant la valeur par 2,
//puis obtenir une valeur par défaut de 0 si l'option est vide.
import { O } from "@mobily/ts-belt";

const value = 75;
export const optionFn2 = () => {
    const fromPredicate = O.fromPredicate(value, (value) => value > 50);
    
    const map = O.map(fromPredicate, (value) => value * 2);
    
    const getWithDefault = O.getWithDefault(map, 0);
    console.log(getWithDefault);
};

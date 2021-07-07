export class Calculator {

    sum(phrase: any) {



        if (phrase.match(/[A-Z][a-z]/)) throw new Error("Please insert only letters of the alphabet")



        return phrase.toUpperCase();
    }




}

console.log("Marco Chacon")

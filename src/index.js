import { ERROR_MESSAGES } from "./assets/error-message";

export function sayHello(name) {
    if(typeof name !== "string"){
        throw new Error(ERROR_MESSAGES.stringError)
    }

    return `Hello ${name.toUpperCase()}`;
}

// try {
//     console.log(sayHello(true));
// } catch (error){
//     console.table({ error: error.message, devMessage: "Something is wrong with your input" })
// }
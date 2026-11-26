import { describe, expect, it } from "vitest";
import { sayHello } from "../src";
import { ERROR_MESSAGES } from "../src/assets/error-message";

describe("testing sayHello.fn", ()=>{
    it("should return 'Hello BOB' when 'sayHello' fn is called", ()=>{
        const result = sayHello("bob")
        expect(result).toBe("Hello BOB")
    });

    it("should throw an error if I provide a number", ()=>{
        expect(() => sayHello(12)).toThrow(ERROR_MESSAGES.stringError)
    });
    //array example 
    //boolean example 

});


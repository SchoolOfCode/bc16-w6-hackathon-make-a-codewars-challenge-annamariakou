import {test, expect} from "vitest";
import {studentSchedule} from "/main.js";

// Testing different orders of code characters with different names. 

// Test 1 

test("Input name, code, return students student level and schedule", function (name,code){

    expect(studentSchedule("Beyonce","A4M")).toBe(`Beyonce is a master's student with algebra on Thursdays`);
});

// Test 2

test("Input name, code, return students student level and schedule", function (name,code){

    expect(studentSchedule("Marina","CB2")).toBe(`Marina is a bachelor's student with calculus on Tuesdays`);
});

// Test 3

test("Input name, code, return students student level and schedule", function (name,code){

    expect(studentSchedule("Stromae","1AM")).toBe(`Stromae is a master's student with algebra on Mondays`);
});

// Test 4

test("Input name, code, return students student level and schedule", function (name,code){

    expect(studentSchedule("Mahmood","C5B")).toBe(`Mahmood is a bachelor's student with calculus on Fridays`);
});

// Test 5

test("Input name, code, return students student level and schedule", function (name,code){

    expect(studentSchedule("Eleni","B3C")).toBe(`Eleni is a bachelor's student with calculus on Wednesdays`);
});
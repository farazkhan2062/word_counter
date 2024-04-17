#! /usr/bin/env node

// improt a 'inquirer' module, which is the command line interfaace for node.js
import inquirer from "inquirer";

//Declear a Constant "answer" and assign ti the result of inquirer.prompt function
const answers : {
    sentence : string} = await inquirer.prompt
    (
        [
            {
                name : "sentence",
                type : "input",
                message : "Enter a sentence or pragraph: "
            },
        ]
    );

    const words = answers.sentence.trim().split(" ");
    console.log(`Your sentence has ${words.length} words`);
    console.log(`Your sentence has ${answers.sentence.length} characters`);
    console.log(`Your sentence has ${answers.sentence.trim().length} characters without spaces`);
    console.log(`Your sentence has ${answers.sentence.trim().split(" ").length} words`);
    console.log(`Your sentence has ${answers.sentence.trim().split(" ").length} words without spaces`);
    console.log(words);

#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
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
    console.log(chalk.blue(`Your sentence has ${words.length} words`));
    console.log(chalk.yellow(`Your sentence has ${answers.sentence.length} characters`));
    console.log(chalk.green(`Your sentence has ${answers.sentence.trim().length} characters without spaces`));
    console.log(chalk.magenta(`Your sentence has ${answers.sentence.trim().split(" ").length} words`));
    console.log(chalk.red(`Your sentence has ${answers.sentence.trim().split(" ").length} words without spaces`));
    console.log(words);

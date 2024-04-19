#! /usr/bin/env node

console.log(
    chalk.bold.bgWhiteBright.magentaBright(
      `\n\t\t\tWelcome To Simple Word And Character Counter: `
    )
  );
  import inquirer from "inquirer";
  import chalk from "chalk";
  
  let options = await inquirer.prompt([
    {
      name: "select",
      type: "list",
      message: (chalk.bold.green("\nWhat do you want? ")),
      choices: ["Word count", "Info"],
    },
  ]);
  
  if (options.select === "Word count") {
    console.log(`You choose ${options.select}`);
    const answers: {
      Sentence: string;
    } = await inquirer.prompt([
      {
        name: "Sentence",
        type: "input",
        message: chalk.greenBright(
          "\nEnter your words to count words and characters:  "
        ),
      },
    ]);
  
    const words = answers.Sentence.trim().split(" "); // trim() is used to remove whitespaces.
    const characters = answers.Sentence.trim(); // split(" ") seperates the words that contains a space between them.
  
    console.log(chalk.cyanBright(`You typed "${answers.Sentence}"`));
  
    console.log(
      chalk.yellowBright(
        `Your input contains ${words.length} words and ${characters.length} characters.`
      )
    );
  } else if (options.select === "Info") {
    console.log(chalk.bold.yellowBright(
      `\tAuthor: Muhammad Nofil Shoaib.\n\tA simple Word and character counter made with TypeScript, JavaScript, Node.js and Inquirer.`
    ));
  }
  
  console.log(chalk.bold.bgRedBright(`Thanks for using!`));
  
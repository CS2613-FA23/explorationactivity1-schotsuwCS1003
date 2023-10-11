![color](https://github.com/CS2613-FA23/explorationactivity1-schotsuwCS1003/assets/97477021/8aa49cf0-04b8-4415-9cf4-db7bbe7021e5)
[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/oB7VDeFN)
# ExplorationActivity1
1. Which package/library does the sample program demonstrate?
- Chalk library JavaScript.
  
2. How does someone run your program?
- The user install the library from npm by typing "npm install chalk" in the terminal.
- Then the user import the chalk library by typing "import chalk from 'chalk';" in the programs.
- Once done with designing, the user can run in the terminal by typing node filename.js
  
3. What purpose does your program serve?
- This library comes with multiple purposes. It friendly represents the colorful texts. It supports multiple colors and API functions. It provides extensive support for different color options and an array of API functions, enabling users to meticulously design their text outputs or themes within Node.js projects. The chalk module is a third-party library that can be used for customizing of texts. Not only it provides visual aesthetics, but it also aids in the prompt of warnings and errors for improved readability.

4. What would be some sample input/output?

-  Start by importing the chalk library and then call green function to colorize the green color to our output.
````
import chalk from 'chalk';
const log = console.log;
log(chalk.green('Welcome to the program'));
````

- Chalk supports 256 colors and Truecolor (16 million colors) Here is an example of applying some colors.
log(chalk.green('Welcome to the program'));
log(chalk.red('Welcome to the program'));
log(chalk.yellow('Welcome to the program'));
log(chalk.cyanBright('Welcome to the program'));
log(chalk.grey('Welcome to the program'));
log(chalk.blue('Welcome to the program'));
log(chalk.blueBright('Welcome to the program'));

- Assigning a color code into chalk.hex(<color code>).
const p = chalk.bold.hex('#FF00FF');
const o = chalk.hex('#FFA500'); // Orange color
console.log(p('This is pink!'));
console.log(o('Time for orange!'));

- Chain and nest the styles to improve the console readability.
const log = console.log;

//Combine styled and normal strings
log(chalk.blueBright('Hey blue') + "......" + chalk.red('I am Red'));

//chain with API to style your output
//bg is for background color
log(chalk.red.bgCyanBright.bold('Hello world!'));

//pass in multiple arguments
log(chalk.hex("#C45AEC").bgWhite.bold('Happy', 'Birthday', 'to', 'You!'));

//nest them together
log(chalk.red.bold('Hello', chalk.underline.bgBlue('world') + '!'));

//nest styles of the same type even (color, underline, background)
log(chalk.green.bold('Hey ' + chalk.blue.underline.bold('How is your') + ' day!'));

//chalk also support ANSI color (256 colors number)
log(chalk.bgAnsi256(14)('Congratulations!'));

//chalk also supports Hex color code
log(chalk.bgHex('#DEADED').underline('Hello, world!'));

//chalk also supports RGB colors level.
log(chalk.rgb(123, 45, 67).underline.bold('BAD DAY'));







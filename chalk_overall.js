import chalk from 'chalk';
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

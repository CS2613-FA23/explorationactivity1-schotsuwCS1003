1. Which package/library did you select?
- Chalk library JavaScript

2. What is the package/library?
- The "chalk" package in JavaScript is a library used for adding color and styling to text output in the console. Many developers find it helpful when working with the command-line interface or when expessing messages to the console. It's commonly used in Node.js applications to make console output more visually appealing and easier to read!
 
3. What are the functionalities of the package/library?
  
--> Start by importing the chalk library and then call green function to colorize the green color to our output! 

````
import chalk from 'chalk';
const log = console.log;
log(chalk.green('Welcome to the program'));
````

--> Not only just green, but Chalk also supports 256 colors and Truecolor (16 million colors) on supported terminal apps! Here is an example of applying some colors.

````
log(chalk.green('Welcome to the program'));
log(chalk.red('Welcome to the program'));
log(chalk.yellow('Welcome to the program'));
log(chalk.cyanBright('Welcome to the program'));
log(chalk.grey('Welcome to the program'));
log(chalk.blue('Welcome to the program'));
log(chalk.blueBright('Welcome to the program'));
````

--> You can also design your own color by assigning a color code into chalk.hex(<color code>).

````
const p = chalk.bold.hex('#FF00FF');
const o = chalk.hex('#FFA500'); // Orange color
console.log(p('This is pink!'));
console.log(o('Time for orange!'));
````

--> Interestingly, you can just chain and nest the styles as you want, to improve your program readability by your own creativity!

````
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
````

4. When was it created?
- This library was created on Feb 23, 2015.

5. Why did you select this package/library? 
- Because this library is very simple to use and it allows us to applying our creativity with its supporting tools like APIs, colors, and styles.

6. How did learning the package/library influence your learning of the language? 
- Learning this package allows me to explore more in the world of programming. This helps us to save some time to program and apply our ability to create something new and interesting. For this chalk library, it provided me a basic understading of how to call and apply each chalk function so that the output texts draw attention from the users. 

7. How was your overall experience with the package/library?
- With this creative library coming with multiple functions, it was a fun path to design a colorful console texts with just coding a very simple syntax.
It was very easy to use: chalk provides a simple API for applying various text styles. I could easily set the text color, background color, text styles (bold, italic, underline), and more using method chaining.

• When would you recommend this package/library to someone?
- I would recommend it when someone needs to design their text output to improve the readability on the terminal. This allows the programmers to apply their creativity to the text. This also is useful when it comes to represent the warning of the program or checking if the input is right (by calling red function to paint the text).

• Would you continue using this package/library? 
- I would not continue to use it. Though the Chalk package is fun and very simple to use, it is not actually useful in reality of programming. If I actually want to design the output to be more fun and friendly, I would use HTML collaborating with JavaScript or other means to show more aesthetically interesting output. And most of the user does not focus much of the colorful terminal text, I would therefore try to find other interesting library to use.

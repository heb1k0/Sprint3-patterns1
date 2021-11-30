const chalk = require('chalk');
const figlet = require('figlet');



const msg = {
    CMD: msn => {
        console.log(chalk.bold.cyan(figlet.textSync(msn, { 
          font:  'ANSI Shadow',
          horizontalLayout: 'default',
          verticalLayout: 'default',
          width: 120,
        })));
        chalk.reset();
    },
    Ok:  msn => {
      console.log(chalk.underline.green("**********************************"));
      console.log(chalk.underline.green(`      ${msn}      `));
      console.log(chalk.underline.green("**********************************"));
      chalk.reset()
    },
    Warn:  msn => { 
      console.log(chalk.underline.red("**********************************"));
      console.log(chalk.bold.bgRed(`      ${msn}      `)); 
      console.log(chalk.underline.red("**********************************"));
      chalk.reset()
    },
    ScoreTittle: msn => {
      console.log(chalk.bold.cyan(`              ${msn}      `)); 
      console.log(chalk.underline.bgCyan("**********************************"));
      chalk.reset()

    },
    Score: msn => { 
      console.log(chalk.bold.cyan(`      ${msn}      `)); 
      chalk.reset()
    }

}


module.exports = msg;
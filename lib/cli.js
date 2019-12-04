#! /usr/bin/env node

const chalk = require("chalk");
const mdLinks = require("./index.js");
const path = process.argv[2];

mdLinks(path)
  .then((result) => result.forEach(e => {
    
    if (e.text.length <47) {
      console.log(chalk.green.underline.bold(e.link), e.text.substring(0, 50));
    }
    else {
      console.log(chalk.green.underline.bold(e.link), e.text.substring(0, 47) + "...");
    }
  }))
  .catch(console.error);


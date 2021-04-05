'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {

  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(`Welcome to the breathtaking ${chalk.red('generator-reflex-ide-extension')} generator!`)
    );

    const prompts = [
      {
        type: 'input',
        name: 'select extension name',
        message: 'What is your extension name (files and class names will be based on it)?',
        default: true
      }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  writing() {
  }

  install() {
    this.installDependencies();
  }
};

'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const beautify = require("gulp-beautify");

module.exports = class extends Generator {

  constructor(args, options) {
    super(args, options);
    this.registerTransformStream(beautify({indent_size: 2}));
  }

  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(`Welcome to the breathtaking ${chalk.red('generator-reflex-ide-extension')} generator!`)
    );

    const prompts = [
      {
        type: 'input',
        name: 'name',
        message: `Enter extension's name ${chalk.red('KEBAB CASE ONLY')} (files and class names will be based on it):`,
        default: true
      }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  addWorkspace() {
    const path = this.destinationPath('package.json');
    const original = this.fs.readJSON(path);
    original.workspaces.push(this.props.name);
    this.fs.write(path, JSON.stringify(original));
  }

  addDependencies() {
    const addDependency = (path) => {
      const original = this.fs.readJSON(path);
      original.dependencies[this.props.name] = "0.0.0";
      this.fs.write(path, JSON.stringify(original));
    }
    addDependency(this.destinationPath('browser-app/package.json'));
    addDependency(this.destinationPath('electron-app/package.json'));
  }


  copyExtensionFiles() {
    const name = this.props.name;
    filesToCopy.forEach(path => {
      const original = this.fs.read(this.templatePath(path));
      this.fs.write(postprocessPath(path, name), replaceAll(original, name));
    })
  }

  // install() {
  //   this.installDependencies();
  // }
};
const filesToCopy = [
  'extension/package.json',
  'extension/tsconfig.json',
  'extension/src/browser/extension-widget/BackendResponseWidget.tsx',
  'extension/src/browser/extension-widget/UiVladosTestExtensionWidget.tsx',
  'extension/src/browser/ui-vlados-test-extension-contribution.ts',
  'extension/src/browser/ui-vlados-test-extension-frontend-module.ts',
  'extension/src/common/index.ts',
  'extension/src/common/ui-vlados-test-extension-protocol.ts',
  'extension/src/node/index.ts',
  'extension/src/node/ui-vlados-test-extension-backend-service.ts',
  'extension/src/node/ui-vlados-test-extension-backend-service-module.ts'
]

String.prototype.replaceAll = function replaceAll(search, replace) {
  return this.split(search).join(replace)
};

const postprocessPath = (path, name) => {
  return replaceAll(path, name).replaceAll('extension/', name + '/');
}

const replaceAll = (str, name) => {
  let result = str;
  console.log(str, name);
  Object.entries(replacements).forEach(([pattern, replaceFn]) => {
    const replacement = replaceFn(name);
    console.log(result);
    result = result.replaceAll(pattern, replacement);
  })

  return result;
}

const camelize = (str) => {
  return str
    .split('-')
    .map((item) => item.charAt(0).toUpperCase() + item.slice(1).toLowerCase())
    .join('');
}

const camelizeWithoutFirst = (str) => {
  const result = camelize(str);
  result.charAt(0).toLowerCase();
  return result;
}

const replacements = {
  'UiVladosTestExtension': camelize,
  'uiVladosTestExtension': camelizeWithoutFirst,
  'ui-vlados-test-extension': (name) => name,
}

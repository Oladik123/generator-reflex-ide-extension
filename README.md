# generator-reflex-ide-extension [![NPM version][npm-image]][npm-url] 
>  adding new complex extension into existing refelx-ide repository

## Installation

Install [Yeoman](http://yeoman.io) and generator-reflex-ide-extension using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)):

```bash
npm install -g yo
npm install -g generator-reflex-ide-extension
```
## Creating an extension

First, clone RIDE 2.0 and go to a theia package:

```
git clone https://github.com/TatianaLiakh/RIDE-2.0.git
cd RIDE-2.0/theia
```

Then run generator, it will ask you for name of your extension:

```bash
yo reflex-ide-extension
```

Result extension module will be placed in ```RIDE-2.0/theia/<extension-name>/```.

## Publication of the extension
To publish your extension you have to create an [npm account](https://www.npmjs.com/signup). Then log in locally using your credentials:

```bash
npm login 
```

And now publish the extension package (run command from ```RIDE-2.0/theia/<extension-name>/```): 
```bash
npm publish 
```
## Adding a published extension: 
To add published extension to your build you need to install corresponding dependency from npm registry. Run command from ```RIDE-2.0/theia/browser-app/``` for web build and from ```RIDE-2.0/theia/electron-app/``` for desktop build (or both at the same time): 
```bash
npm install <extension-name>@<version> --save 
```
## Removing a published extension: 
Same as adding but a bit different command: 
```bash
npm uninstall <extension-name>@<version> --save 
```

## Getting To Know Yeoman

 * Yeoman has a heart of gold.
 * Yeoman is a person with feelings and opinions, but is very easy to work with.
 * Yeoman can be too opinionated at times but is easily convinced not to be.
 * Feel free to [learn more about Yeoman](http://yeoman.io/).

## License

MIT © [Vitchenko Vladislav]()


[npm-image]: https://badge.fury.io/js/generator-reflex-ide-extension.svg
[npm-url]: https://npmjs.org/package/generator-reflex-ide-extension
[travis-image]: https://travis-ci.com/Oladik123/generator-reflex-ide-extension.svg?branch=master
[travis-url]: https://travis-ci.com/Oladik123/generator-reflex-ide-extension
[daviddm-image]: https://david-dm.org/Oladik123/generator-reflex-ide-extension.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/Oladik123/generator-reflex-ide-extension

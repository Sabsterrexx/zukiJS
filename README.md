# zukiJS
JavaScript Wrapper for the zukijourney API.

This repository aims to be a useful collection of JavaScript modules that make using the zukijourney API easier.

## Installation
To install the ZukiJS wrapper, you need to first download and unzip the files somewhere on your computer (doesn't have to be in the project files), and _in your project_, install it with `npm i C:\path\to\zukijs`

## Usage
If you're using CJS (CommonJS), you will need to do the following:
```js
const { ZukiCall } = await import('zukijs') 
```

The file example.js has some example code on how to use the wrapper.

## Additional Info
Currently, this repository is only meant to be used for chat completions, namely the OpenAI models. Image generation is supported as well, to some extent.

While the concept of a zukijourney API wrapper might be no different than an OpenAI JavaScript wrapper, there are specific quirks of the zukijourney API that this repository handles which make it more accessible.

### Special Thanks
[@N. R](https://github.com/bornlikeariver) - Making an amazing [Wiki Page](https://github.com/Sabsterrexx/zukiJS/wiki) for this wrapper


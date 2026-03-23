const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    ex1: './src/app/exercicio-06/exercicio-06.js',
    ex2: './src/app/exercicio-07/exercicio-07.js',
    ex3: './src/app/exercicio-08/exercicio-08.js',
    ex4: './src/app/exercicio-09/exercicio-09.js',
    ex5: './src/app/exercicio-10/exercicio-10.js',
  },
output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  mode: 'development',
  devServer: {
    static: './src',
    port: 8080,
    open: true
  }
};

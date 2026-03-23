const path = require('path');

module.exports = {
  entry: {
    ex1: './src/app/exercicio-01/exercicio-01.js',
    ex2: './src/app/exercicio-02/exercicio-02.js',
    ex3: './src/app/exercicio-03/exercicio-03.js',
    ex4: './src/app/exercicio-04/exercicio-04.js',
    ex5: './src/app/exercicio-05/exercicio-05.js',
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
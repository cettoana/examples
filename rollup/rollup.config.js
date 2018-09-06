import resolve from 'rollup-plugin-node-resolve';
import commonJS from 'rollup-plugin-commonjs';

export default {
  input: 'index.js',
  output: {
    file: 'bundle.js',
    format: 'iife'
  },
  sourceMap: 'inline',
  plugins: [
    resolve(),
    commonJS({
      include: 'node_modules/**'
    })
  ],
};

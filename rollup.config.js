import eslint from '@rollup/plugin-eslint';
import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";
import resolve from 'rollup-plugin-node-resolve'

export default [{
  input: 'src/js/core/index.js',
  plugins: [
    eslint({
      fix:true,
      throwOnError:true
    })
  ],
  output: {
    file: 'dist/js/core.js',
    format: 'cjs'
  }
}, {
  input: 'src/js/oauth/index.js',
  plugins: [
    eslint({
      /* your options */
      
    }),
  ],
  output: {
    file: 'dist/js/oauth.js',
    format: 'cjs'
  }
},
{
  input: 'src/js/login/index.js',
  plugins: [
    eslint({
      /* your options */
    })
  ],
  output: {
    file: 'dist/js/login.js',
    format: 'cjs'
  }
},
{
  input: 'src/js/practice/index.js',
  plugins: [
    eslint({
      /* your options */
    })
  ],
  output: {
    file: 'dist/js/practices.js',
    format: 'cjs'
  }
},
{
  input: 'src/js/books/index.js',
  plugins: [
    // eslint({
    //   /* your options */
    // }),
    resolve(),
    commonjs(),
    babel()
  ],
  output: {
    file: 'dist/js/chapter.js',
    format: 'cjs'
  }
},
{
  input: 'src/js/chat/index.js',
  plugins: [
    eslint({
      /* your options */
    })
  ],
  output: {
    file: 'dist/js/chat.js',
    format: 'cjs'
  }
},
{
  input: 'src/js/search/index.js',
  plugins: [
    eslint({
      /* your options */
    })
  ],
  output: {
    file: 'dist/js/search.js',
    format: 'cjs'
  }
}
];


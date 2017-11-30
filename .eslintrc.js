// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  extends: 'eslint:recommended',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  /**
   *  "off" 或 0 - 关闭规则
   *  "warn" 或 1 - 开启规则，使用警告级别的错误：warn (不会导致程序退出),
   *  "error" 或 2 - 开启规则，使用错误级别的错误：error (当被触发的时候，程序会退出)
   */
  'rules': {
    // don't require .vue extension when importing
    // 'import/extensions': ['error', 'always', {
    //     'js': 'never',
    //     'vue': 'never'
    // }],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    /*
     * Possible Errors
     */

    // disallow unnecessary parentheses
    'no-extra-parens': ['error', 'all', {'nestedBinaryExpressions': false}],

    // disallow negating the left operand of relational operators
    'no-unsafe-negation': 'error',

    // enforce valid JSDoc comments
    'valid-jsdoc': 'off',

    /*
     * Best Practices
     */

    // enforce return statements in callbacks of array methods
    'array-callback-return': 'error',

    // enforce consistent brace style for all control statements
    curly: ['error', 'multi-line'],

    // enforce consistent newlines before and after dots
    'dot-location': ['error', 'property'],

    // enforce dot notation whenever possible
    'dot-notation': 'error',

    // require the use of === and !==
    'eqeqeq': ['error', 'smart'],

    // disallow the use of arguments.caller or arguments.callee
    'no-caller': 'error',

    // disallow empty functions
    'no-empty-function': 'error',

    // disallow unnecessary calls to .bind()
    'no-extra-bind': 'error',

    // disallow unnecessary labels
    'no-extra-label': 'error',

    // disallow leading or trailing decimal points in numeric literals
    'no-floating-decimal': 'error',

    // disallow assignments to native objects or read-only global variables
    'no-global-assign': 'error',

    // disallow the use of eval()-like methods
    'no-implied-eval': 'error',

    // disallow the use of the __iterator__ property
    'no-iterator': 'error',

    // disallow unnecessary nested blocks
    'no-lone-blocks': 'error',

    // disallow multiple spaces
    'no-multi-spaces': 'error',

    // disallow new operators with the String, Number, and Boolean objects
    'no-new-wrappers': 'error',

    // disallow octal escape sequences in string literals
    'no-octal-escape': 'error',

    // disallow the use of the __proto__ property
    'no-proto': 'error',

    // disallow comparisons where both sides are exactly the same
    'no-self-compare': 'error',

    // disallow throwing literals as exceptions
    'no-throw-literal': 'error',

    // disallow unused expressions
    'no-unused-expressions': 'error',

    // disallow unnecessary calls to .call() and .apply()
    'no-useless-call': 'error',

    // disallow unnecessary concatenation of literals or template literals
    'no-useless-concat': 'error',

    // disallow unnecessary escape characters
    'no-useless-escape': 'error',

    // disallow void operators
    'no-void': 'error',

    // require parentheses around immediate function invocations
    'wrap-iife': 'error',

    // require or disallow “Yoda” conditions
    yoda: 'error',

    /*
     * Variables
     */

    // disallow labels that share a name with a variable
    'no-label-var': 'error',

    // disallow initializing variables to undefined
    'no-undef-init': 'error',
    'no-undef': 'off',
    // disallow the use of variables before they are defined
    'no-use-before-define': 'error',

    /*
     * Node.js and CommonJS
     */

    // 禁止调用 require 时使用 new 操作符
    'no-new-require': 'error',

    /*
     * Stylistic Issues
     */

    // 指定数组的元素之间要以空格隔开(, 后面)， never参数：[ 之前和 ] 之后不能带空格，always参数：[ 之前和 ] 之后必须带空格
    'array-bracket-spacing': 'error',

    // 禁止或强制在单行代码块中使用空格(禁用)
    'block-spacing': 'error',

    //强制使用一致的缩进 第二个参数为 "tab" 时，会使用tab，
    // if while function 后面的{必须与if在同一行，java风格。
    'brace-style': ['error', '1tbs', {'allowSingleLine': true}],

    // require or disallow trailing commas
    'comma-dangle': 'error',

    // 控制逗号前后的空格
    'comma-spacing': 'error',

    // 控制逗号在行尾出现还是在行首出现 (默认行尾)
    'comma-style': 'error',

    // enforce consistent spacing inside computed property brackets
    'computed-property-spacing': 'error',

    // require or disallow spacing between function identifiers and their invocations
    'func-call-spacing': 'error',

    // enforce consistent indentation
    indent: ['error', 2, {SwitchCase: 1}],

    // 强制在 JSX 属性中一致地使用双引号或单引号
    'jsx-quotes': 'error',

    // enforce consistent spacing between keys and values in object literal properties
    'key-spacing': 'error',

    // 强制在关键字前后使用一致的空格
    'keyword-spacing': 'error',

    // enforce consistent linebreak style
    'linebreak-style': 'error',

    // require or disallow newlines around directives
    'lines-around-directive': 'error',

    // require constructor names to begin with a capital letter
    'new-cap': 'off',

    // require parentheses when invoking a constructor with no arguments
    'new-parens': 'error',

    // disallow Array constructors
    'no-array-constructor': 'error',

    // disallow Object constructors
    'no-new-object': 'error',

    // disallow trailing whitespace at the end of lines
    'no-trailing-spaces': 'error',

    // disallow ternary operators when simpler alternatives exist
    'no-unneeded-ternary': 'error',

    // disallow whitespace before properties
    'no-whitespace-before-property': 'error',

    // enforce consistent spacing inside braces
    'object-curly-spacing': ['error', 'always'],

    // require or disallow padding within blocks
    'padded-blocks': ['error', 'never'],

    // require quotes around object literal property names
    'quote-props': ['error', 'as-needed'],

    // enforce the consistent use of either backticks, double, or single quotes
    quotes: ['error', 'single'],

    // enforce consistent spacing before and after semicolons
    'semi-spacing': 'error',

    // require or disallow semicolons instead of ASI
    // semi: ['error', 'never'],

    // enforce consistent spacing before blocks
    'space-before-blocks': 'error',

    'no-console': 'off',

    // enforce consistent spacing before function definition opening parenthesis
    'space-before-function-paren': ['error', 'never'],

    // enforce consistent spacing inside parentheses
    'space-in-parens': 'error',

    // require spacing around infix operators
    'space-infix-ops': 'error',

    // enforce consistent spacing before or after unary operators
    'space-unary-ops': 'error',

    // enforce consistent spacing after the // or /* in a comment
    'spaced-comment': 'error',

    // require or disallow Unicode byte order mark (BOM)
    'unicode-bom': 'error',

    /*
     * ECMAScript 6
     */

    // 要求箭头函数体使用大括号
    'arrow-body-style': 'error',

    // require parentheses around arrow function arguments
    'arrow-parens': ['error', 'as-needed'],

    // enforce consistent spacing before and after the arrow in arrow functions
    'arrow-spacing': 'error',

    // enforce consistent spacing around * operators in generator functions
    'generator-star-spacing': ['error', 'after'],

    // 不允许复制模块的进口
    'no-duplicate-imports': 'error',

    // 禁止不必要的计算性能键对象的文字
    'no-useless-computed-key': 'error',

    // disallow unnecessary constructors
    'no-useless-constructor': 'error',

    // disallow renaming import, export, and destructured assignments to the same name
    'no-useless-rename': 'error',

    // 要求使用 let 或 const 而不是 var
    'no-var': 'error',

    // 要求或禁止对象字面量中方法和属性使用简写语法
    'object-shorthand': 'error',

    // 要求使用箭头函数作为回调
    'prefer-arrow-callback': 'error',

    // 要求使用 const 声明那些声明后不再被修改的变量
    'prefer-const': 'error',

    // disallow parseInt() in favor of binary, octal, and hexadecimal literals
    'prefer-numeric-literals': 'error',

    // require rest parameters instead of arguments
    'prefer-rest-params': 'error',

    // 要求使用扩展运算符而非 .apply()
    'prefer-spread': 'error',

    // enforce spacing between rest and spread operators and their expressions
    'rest-spread-spacing': 'error',

    // 要求或禁止模板字符串中的嵌入表达式周围空格的使用
    'template-curly-spacing': 'error',

    // 强制在 yield* 表达式中 * 周围使用空格
    'yield-star-spacing': 'error'
  }
}

// ==UserScript==
// @name               example
// @name:ja            hentai
// @name:zh            测试_
// @namespace          https://github.com/lisonge
// @version            1.0.1
// @author             lisonge
// @description        default description zh
// @description:zh     描述
// @description:en     description
// @description:ja     説明z
// @description:zh-CN  描述
// @license            MIT
// @icon               https://vitejs.dev/logo.svg
// @homepage           https://github.com/lisonge/vite-plugin-monkey#readme
// @homepageURL        https://github.com/lisonge/vite-plugin-monkey#readme
// @source             https://github.com/lisonge/vite-plugin-monkey.git
// @supportURL         https://github.com/lisonge/vite-plugin-monkey/issues
// @include            /^https:\/\/i\.songe\.li\/.*/
// @match              https://songe.li/
// @require            https://cdn.jsdelivr.net/npm/blueimp-md5@2.19.0
// @require            https://cdn.jsdelivr.net/npm/prettier@3.0.2/standalone.js
// @resource           element-plus/dist/index.css  https://cdn.jsdelivr.net/npm/element-plus@2.3.9/dist/index.css
// @grant              GM_addElement
// @grant              GM_addStyle
// @grant              GM_cookie
// @grant              GM_getResourceText
// @grant              unsafeWindow
// ==/UserScript==

(o=>{if(typeof GM_addStyle=="function"){GM_addStyle(o);return}const t=document.createElement("style");t.textContent=o,document.head.append(t)})(" :root{font-family:Inter,Avenir,Helvetica,Arial,sans-serif;font-size:16px;line-height:24px;font-weight:400;color-scheme:light dark;color:#ffffffde;background-color:#242424;font-synthesis:none;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-text-size-adjust:100%}a{font-weight:500;color:#646cff;text-decoration:inherit}a:hover{color:#535bf2}body{margin:0;display:flex;place-items:center;min-width:320px;min-height:100vh}h1{font-size:3.2em;line-height:1.1}button{border-radius:8px;border:1px solid transparent;padding:.6em 1.2em;font-size:1em;font-weight:500;font-family:inherit;background-color:#1a1a1a;cursor:pointer;transition:border-color .25s}button:hover{border-color:#646cff}button:focus,button:focus-visible{outline:4px auto -webkit-focus-ring-color}.card{padding:2em}#app{max-width:1280px;margin:0 auto;padding:2rem;text-align:center}@media (prefers-color-scheme: light){:root{color:#213547;background-color:#fff}a:hover{color:#747bff}button{background-color:#f9f9f9}} ");

(async function (md5, prettier) {
  'use strict';

  const cssLoader = (e) => {
    const t = GM_getResourceText(e);
    return GM_addStyle(t), t;
  };
  cssLoader("element-plus/dist/index.css");
  var _GM_addElement = /* @__PURE__ */ (() => typeof GM_addElement != "undefined" ? GM_addElement : void 0)();
  var _GM_cookie = /* @__PURE__ */ (() => typeof GM_cookie != "undefined" ? GM_cookie : void 0)();
  var _unsafeWindow = /* @__PURE__ */ (() => typeof unsafeWindow != "undefined" ? unsafeWindow : void 0)();
  var _monkeyWindow = /* @__PURE__ */ (() => window)();
  var Ys = Object.create;
  var Ke = Object.defineProperty;
  var Qs = Object.getOwnPropertyDescriptor;
  var Zs = Object.getOwnPropertyNames;
  var ei = Object.getPrototypeOf, ti = Object.prototype.hasOwnProperty;
  var Bt = (a, t) => () => (t || a((t = { exports: {} }).exports, t), t.exports), si = (a, t) => {
    for (var e in t)
      Ke(a, e, { get: t[e], enumerable: true });
  }, ii = (a, t, e, s) => {
    if (t && typeof t == "object" || typeof t == "function")
      for (let i of Zs(t))
        !ti.call(a, i) && i !== e && Ke(a, i, { get: () => t[i], enumerable: !(s = Qs(t, i)) || s.enumerable });
    return a;
  };
  var qe = (a, t, e) => (e = a != null ? Ys(ei(a)) : {}, ii(t || !a || !a.__esModule ? Ke(e, "default", { value: a, enumerable: true }) : e, a));
  var kt = Bt((be) => {
    Object.defineProperty(be, "__esModule", { value: true });
    function De(a, t) {
      if (a == null)
        return {};
      var e = {}, s = Object.keys(a), i, r;
      for (r = 0; r < s.length; r++)
        i = s[r], !(t.indexOf(i) >= 0) && (e[i] = a[i]);
      return e;
    }
    var F = class {
      constructor(t, e, s) {
        this.line = void 0, this.column = void 0, this.index = void 0, this.line = t, this.column = e, this.index = s;
      }
    }, ie = class {
      constructor(t, e) {
        this.start = void 0, this.end = void 0, this.filename = void 0, this.identifierName = void 0, this.start = t, this.end = e;
      }
    };
    function L(a, t) {
      let { line: e, column: s, index: i } = a;
      return new F(e, s + t, i + t);
    }
    var Ye = { SyntaxError: "BABEL_PARSER_SYNTAX_ERROR", SourceTypeModuleError: "BABEL_PARSER_SOURCETYPE_MODULE_REQUIRED" }, ri = (a, t = a.length - 1) => ({ get() {
      return a.reduce((e, s) => e[s], this);
    }, set(e) {
      a.reduce((s, i, r) => r === t ? s[i] = e : s[i], this);
    } }), ai = (a, t, e) => Object.keys(e).map((s) => [s, e[s]]).filter(([, s]) => !!s).map(([s, i]) => [s, typeof i == "function" ? { value: i, enumerable: false } : typeof i.reflect == "string" ? Object.assign({}, i, ri(i.reflect.split("."))) : i]).reduce((s, [i, r]) => Object.defineProperty(s, i, Object.assign({ configurable: true }, r)), Object.assign(new a(), t)), ni = { ImportMetaOutsideModule: { message: `import.meta may appear only with 'sourceType: "module"'`, code: Ye.SourceTypeModuleError }, ImportOutsideModule: { message: `'import' and 'export' may appear only with 'sourceType: "module"'`, code: Ye.SourceTypeModuleError } }, Rt = { ArrayPattern: "array destructuring pattern", AssignmentExpression: "assignment expression", AssignmentPattern: "assignment expression", ArrowFunctionExpression: "arrow function expression", ConditionalExpression: "conditional expression", CatchClause: "catch clause", ForOfStatement: "for-of statement", ForInStatement: "for-in statement", ForStatement: "for-loop", FormalParameters: "function parameter list", Identifier: "identifier", ImportSpecifier: "import specifier", ImportDefaultSpecifier: "import default specifier", ImportNamespaceSpecifier: "import namespace specifier", ObjectPattern: "object destructuring pattern", ParenthesizedExpression: "parenthesized expression", RestElement: "rest element", UpdateExpression: { true: "prefix operation", false: "postfix operation" }, VariableDeclarator: "variable declaration", YieldExpression: "yield expression" }, Qe = ({ type: a, prefix: t }) => a === "UpdateExpression" ? Rt.UpdateExpression[String(t)] : Rt[a], oi = { AccessorIsGenerator: ({ kind: a }) => `A ${a}ter cannot be a generator.`, ArgumentsInClass: "'arguments' is only allowed in functions and class methods.", AsyncFunctionInSingleStatementContext: "Async functions can only be declared at the top level or inside a block.", AwaitBindingIdentifier: "Can not use 'await' as identifier inside an async function.", AwaitBindingIdentifierInStaticBlock: "Can not use 'await' as identifier inside a static block.", AwaitExpressionFormalParameter: "'await' is not allowed in async function parameters.", AwaitUsingNotInAsyncContext: "'await using' is only allowed within async functions and at the top levels of modules.", AwaitNotInAsyncContext: "'await' is only allowed within async functions and at the top levels of modules.", AwaitNotInAsyncFunction: "'await' is only allowed within async functions.", BadGetterArity: "A 'get' accessor must not have any formal parameters.", BadSetterArity: "A 'set' accessor must have exactly one formal parameter.", BadSetterRestParameter: "A 'set' accessor function argument must not be a rest parameter.", ConstructorClassField: "Classes may not have a field named 'constructor'.", ConstructorClassPrivateField: "Classes may not have a private field named '#constructor'.", ConstructorIsAccessor: "Class constructor may not be an accessor.", ConstructorIsAsync: "Constructor can't be an async function.", ConstructorIsGenerator: "Constructor can't be a generator.", DeclarationMissingInitializer: ({ kind: a }) => `Missing initializer in ${a} declaration.`, DecoratorArgumentsOutsideParentheses: "Decorator arguments must be moved inside parentheses: use '@(decorator(args))' instead of '@(decorator)(args)'.", DecoratorBeforeExport: "Decorators must be placed *before* the 'export' keyword. Remove the 'decoratorsBeforeExport: true' option to use the 'export @decorator class {}' syntax.", DecoratorsBeforeAfterExport: "Decorators can be placed *either* before or after the 'export' keyword, but not in both locations at the same time.", DecoratorConstructor: "Decorators can't be used with a constructor. Did you mean '@dec class { ... }'?", DecoratorExportClass: "Decorators must be placed *after* the 'export' keyword. Remove the 'decoratorsBeforeExport: false' option to use the '@decorator export class {}' syntax.", DecoratorSemicolon: "Decorators must not be followed by a semicolon.", DecoratorStaticBlock: "Decorators can't be used with a static block.", DeletePrivateField: "Deleting a private field is not allowed.", DestructureNamedImport: "ES2015 named imports do not destructure. Use another statement for destructuring after the import.", DuplicateConstructor: "Duplicate constructor in the same class.", DuplicateDefaultExport: "Only one default export allowed per module.", DuplicateExport: ({ exportName: a }) => `\`${a}\` has already been exported. Exported identifiers must be unique.`, DuplicateProto: "Redefinition of __proto__ property.", DuplicateRegExpFlags: "Duplicate regular expression flag.", ElementAfterRest: "Rest element must be last element.", EscapedCharNotAnIdentifier: "Invalid Unicode escape.", ExportBindingIsString: ({ localName: a, exportName: t }) => `A string literal cannot be used as an exported binding without \`from\`.
- Did you mean \`export { '${a}' as '${t}' } from 'some-module'\`?`, ExportDefaultFromAsIdentifier: "'from' is not allowed as an identifier after 'export default'.", ForInOfLoopInitializer: ({ type: a }) => `'${a === "ForInStatement" ? "for-in" : "for-of"}' loop variable declaration may not have an initializer.`, ForInUsing: "For-in loop may not start with 'using' declaration.", ForOfAsync: "The left-hand side of a for-of loop may not be 'async'.", ForOfLet: "The left-hand side of a for-of loop may not start with 'let'.", GeneratorInSingleStatementContext: "Generators can only be declared at the top level or inside a block.", IllegalBreakContinue: ({ type: a }) => `Unsyntactic ${a === "BreakStatement" ? "break" : "continue"}.`, IllegalLanguageModeDirective: "Illegal 'use strict' directive in function with non-simple parameter list.", IllegalReturn: "'return' outside of function.", ImportAttributesUseAssert: "The `assert` keyword in import attributes is deprecated and it has been replaced by the `with` keyword. You can enable the `deprecatedAssertSyntax: true` option in the import attributes plugin to suppress this error.", ImportBindingIsString: ({ importName: a }) => `A string literal cannot be used as an imported binding.
- Did you mean \`import { "${a}" as foo }\`?`, ImportCallArgumentTrailingComma: "Trailing comma is disallowed inside import(...) arguments.", ImportCallArity: ({ maxArgumentCount: a }) => `\`import()\` requires exactly ${a === 1 ? "one argument" : "one or two arguments"}.`, ImportCallNotNewExpression: "Cannot use new with import(...).", ImportCallSpreadArgument: "`...` is not allowed in `import()`.", ImportJSONBindingNotDefault: "A JSON module can only be imported with `default`.", ImportReflectionHasAssertion: "`import module x` cannot have assertions.", ImportReflectionNotBinding: 'Only `import module x from "./module"` is valid.', IncompatibleRegExpUVFlags: "The 'u' and 'v' regular expression flags cannot be enabled at the same time.", InvalidBigIntLiteral: "Invalid BigIntLiteral.", InvalidCodePoint: "Code point out of bounds.", InvalidCoverInitializedName: "Invalid shorthand property initializer.", InvalidDecimal: "Invalid decimal.", InvalidDigit: ({ radix: a }) => `Expected number in radix ${a}.`, InvalidEscapeSequence: "Bad character escape sequence.", InvalidEscapeSequenceTemplate: "Invalid escape sequence in template.", InvalidEscapedReservedWord: ({ reservedWord: a }) => `Escape sequence in keyword ${a}.`, InvalidIdentifier: ({ identifierName: a }) => `Invalid identifier ${a}.`, InvalidLhs: ({ ancestor: a }) => `Invalid left-hand side in ${Qe(a)}.`, InvalidLhsBinding: ({ ancestor: a }) => `Binding invalid left-hand side in ${Qe(a)}.`, InvalidNumber: "Invalid number.", InvalidOrMissingExponent: "Floating-point numbers require a valid exponent after the 'e'.", InvalidOrUnexpectedToken: ({ unexpected: a }) => `Unexpected character '${a}'.`, InvalidParenthesizedAssignment: "Invalid parenthesized assignment pattern.", InvalidPrivateFieldResolution: ({ identifierName: a }) => `Private name #${a} is not defined.`, InvalidPropertyBindingPattern: "Binding member expression.", InvalidRecordProperty: "Only properties and spread elements are allowed in record definitions.", InvalidRestAssignmentPattern: "Invalid rest operator's argument.", LabelRedeclaration: ({ labelName: a }) => `Label '${a}' is already declared.`, LetInLexicalBinding: "'let' is not allowed to be used as a name in 'let' or 'const' declarations.", LineTerminatorBeforeArrow: "No line break is allowed before '=>'.", MalformedRegExpFlags: "Invalid regular expression flag.", MissingClassName: "A class name is required.", MissingEqInAssignment: "Only '=' operator can be used for specifying default value.", MissingSemicolon: "Missing semicolon.", MissingPlugin: ({ missingPlugin: a }) => `This experimental syntax requires enabling the parser plugin: ${a.map((t) => JSON.stringify(t)).join(", ")}.`, MissingOneOfPlugins: ({ missingPlugin: a }) => `This experimental syntax requires enabling one of the following parser plugin(s): ${a.map((t) => JSON.stringify(t)).join(", ")}.`, MissingUnicodeEscape: "Expecting Unicode escape sequence \\uXXXX.", MixingCoalesceWithLogical: "Nullish coalescing operator(??) requires parens when mixing with logical operators.", ModuleAttributeDifferentFromType: "The only accepted module attribute is `type`.", ModuleAttributeInvalidValue: "Only string literals are allowed as module attribute values.", ModuleAttributesWithDuplicateKeys: ({ key: a }) => `Duplicate key "${a}" is not allowed in module attributes.`, ModuleExportNameHasLoneSurrogate: ({ surrogateCharCode: a }) => `An export name cannot include a lone surrogate, found '\\u${a.toString(16)}'.`, ModuleExportUndefined: ({ localName: a }) => `Export '${a}' is not defined.`, MultipleDefaultsInSwitch: "Multiple default clauses.", NewlineAfterThrow: "Illegal newline after throw.", NoCatchOrFinally: "Missing catch or finally clause.", NumberIdentifier: "Identifier directly after number.", NumericSeparatorInEscapeSequence: "Numeric separators are not allowed inside unicode escape sequences or hex escape sequences.", ObsoleteAwaitStar: "'await*' has been removed from the async functions proposal. Use Promise.all() instead.", OptionalChainingNoNew: "Constructors in/after an Optional Chain are not allowed.", OptionalChainingNoTemplate: "Tagged Template Literals are not allowed in optionalChain.", OverrideOnConstructor: "'override' modifier cannot appear on a constructor declaration.", ParamDupe: "Argument name clash.", PatternHasAccessor: "Object pattern can't contain getter or setter.", PatternHasMethod: "Object pattern can't contain methods.", PrivateInExpectedIn: ({ identifierName: a }) => `Private names are only allowed in property accesses (\`obj.#${a}\`) or in \`in\` expressions (\`#${a} in obj\`).`, PrivateNameRedeclaration: ({ identifierName: a }) => `Duplicate private name #${a}.`, RecordExpressionBarIncorrectEndSyntaxType: "Record expressions ending with '|}' are only allowed when the 'syntaxType' option of the 'recordAndTuple' plugin is set to 'bar'.", RecordExpressionBarIncorrectStartSyntaxType: "Record expressions starting with '{|' are only allowed when the 'syntaxType' option of the 'recordAndTuple' plugin is set to 'bar'.", RecordExpressionHashIncorrectStartSyntaxType: "Record expressions starting with '#{' are only allowed when the 'syntaxType' option of the 'recordAndTuple' plugin is set to 'hash'.", RecordNoProto: "'__proto__' is not allowed in Record expressions.", RestTrailingComma: "Unexpected trailing comma after rest element.", SloppyFunction: "In non-strict mode code, functions can only be declared at top level or inside a block.", SloppyFunctionAnnexB: "In non-strict mode code, functions can only be declared at top level, inside a block, or as the body of an if statement.", StaticPrototype: "Classes may not have static property named prototype.", SuperNotAllowed: "`super()` is only valid inside a class constructor of a subclass. Maybe a typo in the method name ('constructor') or not extending another class?", SuperPrivateField: "Private fields can't be accessed on super.", TrailingDecorator: "Decorators must be attached to a class element.", TupleExpressionBarIncorrectEndSyntaxType: "Tuple expressions ending with '|]' are only allowed when the 'syntaxType' option of the 'recordAndTuple' plugin is set to 'bar'.", TupleExpressionBarIncorrectStartSyntaxType: "Tuple expressions starting with '[|' are only allowed when the 'syntaxType' option of the 'recordAndTuple' plugin is set to 'bar'.", TupleExpressionHashIncorrectStartSyntaxType: "Tuple expressions starting with '#[' are only allowed when the 'syntaxType' option of the 'recordAndTuple' plugin is set to 'hash'.", UnexpectedArgumentPlaceholder: "Unexpected argument placeholder.", UnexpectedAwaitAfterPipelineBody: 'Unexpected "await" after pipeline body; await must have parentheses in minimal proposal.', UnexpectedDigitAfterHash: "Unexpected digit after hash token.", UnexpectedImportExport: "'import' and 'export' may only appear at the top level.", UnexpectedKeyword: ({ keyword: a }) => `Unexpected keyword '${a}'.`, UnexpectedLeadingDecorator: "Leading decorators must be attached to a class declaration.", UnexpectedLexicalDeclaration: "Lexical declaration cannot appear in a single-statement context.", UnexpectedNewTarget: "`new.target` can only be used in functions or class properties.", UnexpectedNumericSeparator: "A numeric separator is only allowed between two digits.", UnexpectedPrivateField: "Unexpected private name.", UnexpectedReservedWord: ({ reservedWord: a }) => `Unexpected reserved word '${a}'.`, UnexpectedSuper: "'super' is only allowed in object methods and classes.", UnexpectedToken: ({ expected: a, unexpected: t }) => `Unexpected token${t ? ` '${t}'.` : ""}${a ? `, expected "${a}"` : ""}`, UnexpectedTokenUnaryExponentiation: "Illegal expression. Wrap left hand side or entire exponentiation in parentheses.", UnexpectedUsingDeclaration: "Using declaration cannot appear in the top level when source type is `script`.", UnsupportedBind: "Binding should be performed on object property.", UnsupportedDecoratorExport: "A decorated export must export a class declaration.", UnsupportedDefaultExport: "Only expressions, functions or classes are allowed as the `default` export.", UnsupportedImport: "`import` can only be used in `import()` or `import.meta`.", UnsupportedMetaProperty: ({ target: a, onlyValidPropertyName: t }) => `The only valid meta property for ${a} is ${a}.${t}.`, UnsupportedParameterDecorator: "Decorators cannot be used to decorate parameters.", UnsupportedPropertyDecorator: "Decorators cannot be used to decorate object literal properties.", UnsupportedSuper: "'super' can only be used with function calls (i.e. super()) or in property accesses (i.e. super.prop or super[prop]).", UnterminatedComment: "Unterminated comment.", UnterminatedRegExp: "Unterminated regular expression.", UnterminatedString: "Unterminated string constant.", UnterminatedTemplate: "Unterminated template.", UsingDeclarationHasBindingPattern: "Using declaration cannot have destructuring patterns.", VarRedeclaration: ({ identifierName: a }) => `Identifier '${a}' has already been declared.`, YieldBindingIdentifier: "Can not use 'yield' as identifier inside a generator.", YieldInParameter: "Yield expression is not allowed in formal parameters.", ZeroDigitNumericSeparator: "Numeric separator can not be used after leading 0." }, hi = { StrictDelete: "Deleting local variable in strict mode.", StrictEvalArguments: ({ referenceName: a }) => `Assigning to '${a}' in strict mode.`, StrictEvalArgumentsBinding: ({ bindingName: a }) => `Binding '${a}' in strict mode.`, StrictFunction: "In strict mode code, functions can only be declared at top level or inside a block.", StrictNumericEscape: "The only valid numeric escape in strict mode is '\\0'.", StrictOctalLiteral: "Legacy octal literals are not allowed in strict mode.", StrictWith: "'with' in strict mode." }, li = /* @__PURE__ */ new Set(["ArrowFunctionExpression", "AssignmentExpression", "ConditionalExpression", "YieldExpression"]), ci = { PipeBodyIsTighter: "Unexpected yield after pipeline body; any yield expression acting as Hack-style pipe body must be parenthesized due to its loose operator precedence.", PipeTopicRequiresHackPipes: 'Topic reference is used, but the pipelineOperator plugin was not passed a "proposal": "hack" or "smart" option.', PipeTopicUnbound: "Topic reference is unbound; it must be inside a pipe body.", PipeTopicUnconfiguredToken: ({ token: a }) => `Invalid topic token ${a}. In order to use ${a} as a topic reference, the pipelineOperator plugin must be configured with { "proposal": "hack", "topicToken": "${a}" }.`, PipeTopicUnused: "Hack-style pipe body does not contain a topic reference; Hack-style pipes must use topic at least once.", PipeUnparenthesizedBody: ({ type: a }) => `Hack-style pipe body cannot be an unparenthesized ${Qe({ type: a })}; please wrap it in parentheses.`, PipelineBodyNoArrow: 'Unexpected arrow "=>" after pipeline body; arrow function in pipeline body must be parenthesized.', PipelineBodySequenceExpression: "Pipeline body may not be a comma-separated sequence expression.", PipelineHeadSequenceExpression: "Pipeline head should not be a comma-separated sequence expression.", PipelineTopicUnused: "Pipeline is in topic style but does not use topic reference.", PrimaryTopicNotAllowed: "Topic reference was used in a lexical context without topic binding.", PrimaryTopicRequiresSmartPipeline: 'Topic reference is used, but the pipelineOperator plugin was not passed a "proposal": "hack" or "smart" option.' }, pi = ["toMessage"], ui = ["message"];
    function di(a) {
      let { toMessage: t } = a, e = De(a, pi);
      return function s({ loc: i, details: r }) {
        return ai(SyntaxError, Object.assign({}, e, { loc: i }), { clone(n = {}) {
          let o = n.loc || {};
          return s({ loc: new F("line" in o ? o.line : this.loc.line, "column" in o ? o.column : this.loc.column, "index" in o ? o.index : this.loc.index), details: Object.assign({}, this.details, n.details) });
        }, details: { value: r, enumerable: false }, message: { get() {
          return `${t(this.details)} (${this.loc.line}:${this.loc.column})`;
        }, set(n) {
          Object.defineProperty(this, "message", { value: n });
        } }, pos: { reflect: "loc.index", enumerable: true }, missingPlugin: "missingPlugin" in r && { reflect: "details.missingPlugin", enumerable: true } });
      };
    }
    function $(a, t) {
      if (Array.isArray(a))
        return (s) => $(s, a[0]);
      let e = {};
      for (let s of Object.keys(a)) {
        let i = a[s], r = typeof i == "string" ? { message: () => i } : typeof i == "function" ? { message: i } : i, { message: n } = r, o = De(r, ui), h = typeof n == "string" ? () => n : n;
        e[s] = di(Object.assign({ code: Ye.SyntaxError, reasonCode: s, toMessage: h }, t ? { syntaxPlugin: t } : {}, o));
      }
      return e;
    }
    var p = Object.assign({}, $(ni), $(oi), $(hi), $`pipelineOperator`(ci)), { defineProperty: fi } = Object, _t = (a, t) => fi(a, t, { enumerable: false, value: a[t] });
    function pe(a) {
      return a.loc.start && _t(a.loc.start, "index"), a.loc.end && _t(a.loc.end, "index"), a;
    }
    var mi = (a) => class extends a {
      parse() {
        let e = pe(super.parse());
        return this.options.tokens && (e.tokens = e.tokens.map(pe)), e;
      }
      parseRegExpLiteral({ pattern: e, flags: s }) {
        let i = null;
        try {
          i = new RegExp(e, s);
        } catch {
        }
        let r = this.estreeParseLiteral(i);
        return r.regex = { pattern: e, flags: s }, r;
      }
      parseBigIntLiteral(e) {
        let s;
        try {
          s = BigInt(e);
        } catch {
          s = null;
        }
        let i = this.estreeParseLiteral(s);
        return i.bigint = String(i.value || e), i;
      }
      parseDecimalLiteral(e) {
        let i = this.estreeParseLiteral(null);
        return i.decimal = String(i.value || e), i;
      }
      estreeParseLiteral(e) {
        return this.parseLiteral(e, "Literal");
      }
      parseStringLiteral(e) {
        return this.estreeParseLiteral(e);
      }
      parseNumericLiteral(e) {
        return this.estreeParseLiteral(e);
      }
      parseNullLiteral() {
        return this.estreeParseLiteral(null);
      }
      parseBooleanLiteral(e) {
        return this.estreeParseLiteral(e);
      }
      directiveToStmt(e) {
        let s = e.value;
        delete e.value, s.type = "Literal", s.raw = s.extra.raw, s.value = s.extra.expressionValue;
        let i = e;
        return i.type = "ExpressionStatement", i.expression = s, i.directive = s.extra.rawValue, delete s.extra, i;
      }
      initFunction(e, s) {
        super.initFunction(e, s), e.expression = false;
      }
      checkDeclaration(e) {
        e != null && this.isObjectProperty(e) ? this.checkDeclaration(e.value) : super.checkDeclaration(e);
      }
      getObjectOrClassMethodParams(e) {
        return e.value.params;
      }
      isValidDirective(e) {
        var s;
        return e.type === "ExpressionStatement" && e.expression.type === "Literal" && typeof e.expression.value == "string" && !((s = e.expression.extra) != null && s.parenthesized);
      }
      parseBlockBody(e, s, i, r, n) {
        super.parseBlockBody(e, s, i, r, n);
        let o = e.directives.map((h) => this.directiveToStmt(h));
        e.body = o.concat(e.body), delete e.directives;
      }
      pushClassMethod(e, s, i, r, n, o) {
        this.parseMethod(s, i, r, n, o, "ClassMethod", true), s.typeParameters && (s.value.typeParameters = s.typeParameters, delete s.typeParameters), e.body.push(s);
      }
      parsePrivateName() {
        let e = super.parsePrivateName();
        return this.getPluginOption("estree", "classFeatures") ? this.convertPrivateNameToPrivateIdentifier(e) : e;
      }
      convertPrivateNameToPrivateIdentifier(e) {
        let s = super.getPrivateNameSV(e);
        return e = e, delete e.id, e.name = s, e.type = "PrivateIdentifier", e;
      }
      isPrivateName(e) {
        return this.getPluginOption("estree", "classFeatures") ? e.type === "PrivateIdentifier" : super.isPrivateName(e);
      }
      getPrivateNameSV(e) {
        return this.getPluginOption("estree", "classFeatures") ? e.name : super.getPrivateNameSV(e);
      }
      parseLiteral(e, s) {
        let i = super.parseLiteral(e, s);
        return i.raw = i.extra.raw, delete i.extra, i;
      }
      parseFunctionBody(e, s, i = false) {
        super.parseFunctionBody(e, s, i), e.expression = e.body.type !== "BlockStatement";
      }
      parseMethod(e, s, i, r, n, o, h = false) {
        let l = this.startNode();
        return l.kind = e.kind, l = super.parseMethod(l, s, i, r, n, o, h), l.type = "FunctionExpression", delete l.kind, e.value = l, o === "ClassPrivateMethod" && (e.computed = false), this.finishNode(e, "MethodDefinition");
      }
      parseClassProperty(...e) {
        let s = super.parseClassProperty(...e);
        return this.getPluginOption("estree", "classFeatures") && (s.type = "PropertyDefinition"), s;
      }
      parseClassPrivateProperty(...e) {
        let s = super.parseClassPrivateProperty(...e);
        return this.getPluginOption("estree", "classFeatures") && (s.type = "PropertyDefinition", s.computed = false), s;
      }
      parseObjectMethod(e, s, i, r, n) {
        let o = super.parseObjectMethod(e, s, i, r, n);
        return o && (o.type = "Property", o.kind === "method" && (o.kind = "init"), o.shorthand = false), o;
      }
      parseObjectProperty(e, s, i, r) {
        let n = super.parseObjectProperty(e, s, i, r);
        return n && (n.kind = "init", n.type = "Property"), n;
      }
      isValidLVal(e, s, i) {
        return e === "Property" ? "value" : super.isValidLVal(e, s, i);
      }
      isAssignable(e, s) {
        return e != null && this.isObjectProperty(e) ? this.isAssignable(e.value, s) : super.isAssignable(e, s);
      }
      toAssignable(e, s = false) {
        if (e != null && this.isObjectProperty(e)) {
          let { key: i, value: r } = e;
          this.isPrivateName(i) && this.classScope.usePrivateName(this.getPrivateNameSV(i), i.loc.start), this.toAssignable(r, s);
        } else
          super.toAssignable(e, s);
      }
      toAssignableObjectExpressionProp(e, s, i) {
        e.kind === "get" || e.kind === "set" ? this.raise(p.PatternHasAccessor, { at: e.key }) : e.method ? this.raise(p.PatternHasMethod, { at: e.key }) : super.toAssignableObjectExpressionProp(e, s, i);
      }
      finishCallExpression(e, s) {
        let i = super.finishCallExpression(e, s);
        if (i.callee.type === "Import") {
          if (i.type = "ImportExpression", i.source = i.arguments[0], this.hasPlugin("importAttributes") || this.hasPlugin("importAssertions")) {
            var r;
            i.attributes = (r = i.arguments[1]) != null ? r : null;
          }
          delete i.arguments, delete i.callee;
        }
        return i;
      }
      toReferencedArguments(e) {
        e.type !== "ImportExpression" && super.toReferencedArguments(e);
      }
      parseExport(e, s) {
        let i = this.state.lastTokStartLoc, r = super.parseExport(e, s);
        switch (r.type) {
          case "ExportAllDeclaration":
            r.exported = null;
            break;
          case "ExportNamedDeclaration":
            r.specifiers.length === 1 && r.specifiers[0].type === "ExportNamespaceSpecifier" && (r.type = "ExportAllDeclaration", r.exported = r.specifiers[0].exported, delete r.specifiers);
          case "ExportDefaultDeclaration":
            {
              var n;
              let { declaration: o } = r;
              (o == null ? void 0 : o.type) === "ClassDeclaration" && ((n = o.decorators) == null ? void 0 : n.length) > 0 && o.start === r.start && this.resetStartLocation(r, i);
            }
            break;
        }
        return r;
      }
      parseSubscript(e, s, i, r) {
        let n = super.parseSubscript(e, s, i, r);
        if (r.optionalChainMember) {
          if ((n.type === "OptionalMemberExpression" || n.type === "OptionalCallExpression") && (n.type = n.type.substring(8)), r.stop) {
            let o = this.startNodeAtNode(n);
            return o.expression = n, this.finishNode(o, "ChainExpression");
          }
        } else
          (n.type === "MemberExpression" || n.type === "CallExpression") && (n.optional = false);
        return n;
      }
      hasPropertyAsPrivateName(e) {
        return e.type === "ChainExpression" && (e = e.expression), super.hasPropertyAsPrivateName(e);
      }
      isObjectProperty(e) {
        return e.type === "Property" && e.kind === "init" && !e.method;
      }
      isObjectMethod(e) {
        return e.method || e.kind === "get" || e.kind === "set";
      }
      finishNodeAt(e, s, i) {
        return pe(super.finishNodeAt(e, s, i));
      }
      resetStartLocation(e, s) {
        super.resetStartLocation(e, s), pe(e);
      }
      resetEndLocation(e, s = this.state.lastTokEndLoc) {
        super.resetEndLocation(e, s), pe(e);
      }
    }, X = class {
      constructor(t, e) {
        this.token = void 0, this.preserveSpace = void 0, this.token = t, this.preserveSpace = !!e;
      }
    }, w = { brace: new X("{"), j_oTag: new X("<tag"), j_cTag: new X("</tag"), j_expr: new X("<tag>...</tag>", true) };
    w.template = new X("`", true);
    var T = true, m = true, He = true, ue = true, z = true, yi = true, Me = class {
      constructor(t, e = {}) {
        this.label = void 0, this.keyword = void 0, this.beforeExpr = void 0, this.startsExpr = void 0, this.rightAssociative = void 0, this.isLoop = void 0, this.isAssign = void 0, this.prefix = void 0, this.postfix = void 0, this.binop = void 0, this.label = t, this.keyword = e.keyword, this.beforeExpr = !!e.beforeExpr, this.startsExpr = !!e.startsExpr, this.rightAssociative = !!e.rightAssociative, this.isLoop = !!e.isLoop, this.isAssign = !!e.isAssign, this.prefix = !!e.prefix, this.postfix = !!e.postfix, this.binop = e.binop != null ? e.binop : null, this.updateContext = null;
      }
    }, gt = /* @__PURE__ */ new Map();
    function A(a, t = {}) {
      t.keyword = a;
      let e = P(a, t);
      return gt.set(a, e), e;
    }
    function v(a, t) {
      return P(a, { beforeExpr: T, binop: t });
    }
    var ye = -1, U = [], Tt = [], bt = [], At = [], St = [], wt = [];
    function P(a, t = {}) {
      var e, s, i, r;
      return ++ye, Tt.push(a), bt.push((e = t.binop) != null ? e : -1), At.push((s = t.beforeExpr) != null ? s : false), St.push((i = t.startsExpr) != null ? i : false), wt.push((r = t.prefix) != null ? r : false), U.push(new Me(a, t)), ye;
    }
    function b(a, t = {}) {
      var e, s, i, r;
      return ++ye, gt.set(a, ye), Tt.push(a), bt.push((e = t.binop) != null ? e : -1), At.push((s = t.beforeExpr) != null ? s : false), St.push((i = t.startsExpr) != null ? i : false), wt.push((r = t.prefix) != null ? r : false), U.push(new Me("name", t)), ye;
    }
    var xi = { bracketL: P("[", { beforeExpr: T, startsExpr: m }), bracketHashL: P("#[", { beforeExpr: T, startsExpr: m }), bracketBarL: P("[|", { beforeExpr: T, startsExpr: m }), bracketR: P("]"), bracketBarR: P("|]"), braceL: P("{", { beforeExpr: T, startsExpr: m }), braceBarL: P("{|", { beforeExpr: T, startsExpr: m }), braceHashL: P("#{", { beforeExpr: T, startsExpr: m }), braceR: P("}"), braceBarR: P("|}"), parenL: P("(", { beforeExpr: T, startsExpr: m }), parenR: P(")"), comma: P(",", { beforeExpr: T }), semi: P(";", { beforeExpr: T }), colon: P(":", { beforeExpr: T }), doubleColon: P("::", { beforeExpr: T }), dot: P("."), question: P("?", { beforeExpr: T }), questionDot: P("?."), arrow: P("=>", { beforeExpr: T }), template: P("template"), ellipsis: P("...", { beforeExpr: T }), backQuote: P("`", { startsExpr: m }), dollarBraceL: P("${", { beforeExpr: T, startsExpr: m }), templateTail: P("...`", { startsExpr: m }), templateNonTail: P("...${", { beforeExpr: T, startsExpr: m }), at: P("@"), hash: P("#", { startsExpr: m }), interpreterDirective: P("#!..."), eq: P("=", { beforeExpr: T, isAssign: ue }), assign: P("_=", { beforeExpr: T, isAssign: ue }), slashAssign: P("_=", { beforeExpr: T, isAssign: ue }), xorAssign: P("_=", { beforeExpr: T, isAssign: ue }), moduloAssign: P("_=", { beforeExpr: T, isAssign: ue }), incDec: P("++/--", { prefix: z, postfix: yi, startsExpr: m }), bang: P("!", { beforeExpr: T, prefix: z, startsExpr: m }), tilde: P("~", { beforeExpr: T, prefix: z, startsExpr: m }), doubleCaret: P("^^", { startsExpr: m }), doubleAt: P("@@", { startsExpr: m }), pipeline: v("|>", 0), nullishCoalescing: v("??", 1), logicalOR: v("||", 1), logicalAND: v("&&", 2), bitwiseOR: v("|", 3), bitwiseXOR: v("^", 4), bitwiseAND: v("&", 5), equality: v("==/!=/===/!==", 6), lt: v("</>/<=/>=", 7), gt: v("</>/<=/>=", 7), relational: v("</>/<=/>=", 7), bitShift: v("<</>>/>>>", 8), bitShiftL: v("<</>>/>>>", 8), bitShiftR: v("<</>>/>>>", 8), plusMin: P("+/-", { beforeExpr: T, binop: 9, prefix: z, startsExpr: m }), modulo: P("%", { binop: 10, startsExpr: m }), star: P("*", { binop: 10 }), slash: v("/", 10), exponent: P("**", { beforeExpr: T, binop: 11, rightAssociative: true }), _in: A("in", { beforeExpr: T, binop: 7 }), _instanceof: A("instanceof", { beforeExpr: T, binop: 7 }), _break: A("break"), _case: A("case", { beforeExpr: T }), _catch: A("catch"), _continue: A("continue"), _debugger: A("debugger"), _default: A("default", { beforeExpr: T }), _else: A("else", { beforeExpr: T }), _finally: A("finally"), _function: A("function", { startsExpr: m }), _if: A("if"), _return: A("return", { beforeExpr: T }), _switch: A("switch"), _throw: A("throw", { beforeExpr: T, prefix: z, startsExpr: m }), _try: A("try"), _var: A("var"), _const: A("const"), _with: A("with"), _new: A("new", { beforeExpr: T, startsExpr: m }), _this: A("this", { startsExpr: m }), _super: A("super", { startsExpr: m }), _class: A("class", { startsExpr: m }), _extends: A("extends", { beforeExpr: T }), _export: A("export"), _import: A("import", { startsExpr: m }), _null: A("null", { startsExpr: m }), _true: A("true", { startsExpr: m }), _false: A("false", { startsExpr: m }), _typeof: A("typeof", { beforeExpr: T, prefix: z, startsExpr: m }), _void: A("void", { beforeExpr: T, prefix: z, startsExpr: m }), _delete: A("delete", { beforeExpr: T, prefix: z, startsExpr: m }), _do: A("do", { isLoop: He, beforeExpr: T }), _for: A("for", { isLoop: He }), _while: A("while", { isLoop: He }), _as: b("as", { startsExpr: m }), _assert: b("assert", { startsExpr: m }), _async: b("async", { startsExpr: m }), _await: b("await", { startsExpr: m }), _from: b("from", { startsExpr: m }), _get: b("get", { startsExpr: m }), _let: b("let", { startsExpr: m }), _meta: b("meta", { startsExpr: m }), _of: b("of", { startsExpr: m }), _sent: b("sent", { startsExpr: m }), _set: b("set", { startsExpr: m }), _static: b("static", { startsExpr: m }), _using: b("using", { startsExpr: m }), _yield: b("yield", { startsExpr: m }), _asserts: b("asserts", { startsExpr: m }), _checks: b("checks", { startsExpr: m }), _exports: b("exports", { startsExpr: m }), _global: b("global", { startsExpr: m }), _implements: b("implements", { startsExpr: m }), _intrinsic: b("intrinsic", { startsExpr: m }), _infer: b("infer", { startsExpr: m }), _is: b("is", { startsExpr: m }), _mixins: b("mixins", { startsExpr: m }), _proto: b("proto", { startsExpr: m }), _require: b("require", { startsExpr: m }), _satisfies: b("satisfies", { startsExpr: m }), _keyof: b("keyof", { startsExpr: m }), _readonly: b("readonly", { startsExpr: m }), _unique: b("unique", { startsExpr: m }), _abstract: b("abstract", { startsExpr: m }), _declare: b("declare", { startsExpr: m }), _enum: b("enum", { startsExpr: m }), _module: b("module", { startsExpr: m }), _namespace: b("namespace", { startsExpr: m }), _interface: b("interface", { startsExpr: m }), _type: b("type", { startsExpr: m }), _opaque: b("opaque", { startsExpr: m }), name: P("name", { startsExpr: m }), string: P("string", { startsExpr: m }), num: P("num", { startsExpr: m }), bigint: P("bigint", { startsExpr: m }), decimal: P("decimal", { startsExpr: m }), regexp: P("regexp", { startsExpr: m }), privateName: P("#name", { startsExpr: m }), eof: P("eof"), jsxName: P("jsxName"), jsxText: P("jsxText", { beforeExpr: true }), jsxTagStart: P("jsxTagStart", { startsExpr: true }), jsxTagEnd: P("jsxTagEnd"), placeholder: P("%%", { startsExpr: true }) };
    function S(a) {
      return a >= 93 && a <= 130;
    }
    function Pi(a) {
      return a <= 92;
    }
    function M(a) {
      return a >= 58 && a <= 130;
    }
    function Yt(a) {
      return a >= 58 && a <= 134;
    }
    function gi(a) {
      return At[a];
    }
    function Ze(a) {
      return St[a];
    }
    function Ti(a) {
      return a >= 29 && a <= 33;
    }
    function Ut(a) {
      return a >= 127 && a <= 129;
    }
    function bi(a) {
      return a >= 90 && a <= 92;
    }
    function Ct(a) {
      return a >= 58 && a <= 92;
    }
    function Ai(a) {
      return a >= 39 && a <= 59;
    }
    function Si(a) {
      return a === 34;
    }
    function wi(a) {
      return wt[a];
    }
    function Ci(a) {
      return a >= 119 && a <= 121;
    }
    function Ei(a) {
      return a >= 122 && a <= 128;
    }
    function q(a) {
      return Tt[a];
    }
    function ke(a) {
      return bt[a];
    }
    function Ii(a) {
      return a === 57;
    }
    function Oe(a) {
      return a >= 24 && a <= 25;
    }
    function _(a) {
      return U[a];
    }
    U[8].updateContext = (a) => {
      a.pop();
    }, U[5].updateContext = U[7].updateContext = U[23].updateContext = (a) => {
      a.push(w.brace);
    }, U[22].updateContext = (a) => {
      a[a.length - 1] === w.template ? a.pop() : a.push(w.template);
    }, U[140].updateContext = (a) => {
      a.push(w.j_expr, w.j_oTag);
    };
    var Et = "ªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԯԱ-Ֆՙՠ-ֈא-תׯ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࡠ-ࡪࡰ-ࢇࢉ-ࢎࢠ-ࣉऄ-हऽॐक़-ॡॱ-ঀঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱৼਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡૹଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-హఽౘ-ౚౝౠౡಀಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೝೞೠೡೱೲഄ-ഌഎ-ഐഒ-ഺഽൎൔ-ൖൟ-ൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄຆ-ຊຌ-ຣລວ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏽᏸ-ᏽᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛸᜀ-ᜑᜟ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡸᢀ-ᢨᢪᢰ-ᣵᤀ-ᤞᥐ-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭌᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᲀ-ᲈᲐ-ᲺᲽ-Ჿᳩ-ᳬᳮ-ᳳᳵᳶᳺᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕ℘-ℝℤΩℨK-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⰀ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞ々-〇〡-〩〱-〵〸-〼ぁ-ゖ゛-ゟァ-ヺー-ヿㄅ-ㄯㄱ-ㆎㆠ-ㆿㇰ-ㇿ㐀-䶿一-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚝꚠ-ꛯꜗ-ꜟꜢ-ꞈꞋ-ꟊꟐꟑꟓꟕ-ꟙꟲ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꣽꣾꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꧠ-ꧤꧦ-ꧯꧺ-ꧾꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꩾ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꬰ-ꭚꭜ-ꭩꭰ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ", Qt = "‌‍·̀-ͯ·҃-֑҇-ׇֽֿׁׂׅׄؐ-ًؚ-٩ٰۖ-ۜ۟-۪ۤۧۨ-ۭ۰-۹ܑܰ-݊ަ-ް߀-߉߫-߽߳ࠖ-࠙ࠛ-ࠣࠥ-ࠧࠩ-࡙࠭-࡛࢘-࢟࣊-ࣣ࣡-ःऺ-़ा-ॏ॑-ॗॢॣ०-९ঁ-ঃ়া-ৄেৈো-্ৗৢৣ০-৯৾ਁ-ਃ਼ਾ-ੂੇੈੋ-੍ੑ੦-ੱੵઁ-ઃ઼ા-ૅે-ૉો-્ૢૣ૦-૯ૺ-૿ଁ-ଃ଼ା-ୄେୈୋ-୍୕-ୗୢୣ୦-୯ஂா-ூெ-ைொ-்ௗ௦-௯ఀ-ఄ఼ా-ౄె-ైొ-్ౕౖౢౣ౦-౯ಁ-ಃ಼ಾ-ೄೆ-ೈೊ-್ೕೖೢೣ೦-೯ೳഀ-ഃ഻഼ാ-ൄെ-ൈൊ-്ൗൢൣ൦-൯ඁ-ඃ්ා-ුූෘ-ෟ෦-෯ෲෳัิ-ฺ็-๎๐-๙ັິ-ຼ່-໎໐-໙༘༙༠-༩༹༵༷༾༿ཱ-྄྆྇ྍ-ྗྙ-ྼ࿆ါ-ှ၀-၉ၖ-ၙၞ-ၠၢ-ၤၧ-ၭၱ-ၴႂ-ႍႏ-ႝ፝-፟፩-፱ᜒ-᜕ᜲ-᜴ᝒᝓᝲᝳ឴-៓៝០-៩᠋-᠍᠏-᠙ᢩᤠ-ᤫᤰ-᤻᥆-᥏᧐-᧚ᨗ-ᨛᩕ-ᩞ᩠-᩿᩼-᪉᪐-᪙᪰-᪽ᪿ-ᫎᬀ-ᬄ᬴-᭄᭐-᭙᭫-᭳ᮀ-ᮂᮡ-ᮭ᮰-᮹᯦-᯳ᰤ-᰷᱀-᱉᱐-᱙᳐-᳔᳒-᳨᳭᳴᳷-᳹᷀-᷿‿⁀⁔⃐-⃥⃜⃡-⃰⳯-⵿⳱ⷠ-〪ⷿ-゙゚〯꘠-꘩꙯ꙴ-꙽ꚞꚟ꛰꛱ꠂ꠆ꠋꠣ-ꠧ꠬ꢀꢁꢴ-ꣅ꣐-꣙꣠-꣱ꣿ-꤉ꤦ-꤭ꥇ-꥓ꦀ-ꦃ꦳-꧀꧐-꧙ꧥ꧰-꧹ꨩ-ꨶꩃꩌꩍ꩐-꩙ꩻ-ꩽꪰꪲ-ꪴꪷꪸꪾ꪿꫁ꫫ-ꫯꫵ꫶ꯣ-ꯪ꯬꯭꯰-꯹ﬞ︀-️︠-︯︳︴﹍-﹏０-９＿", Ni = new RegExp("[" + Et + "]"), ki = new RegExp("[" + Et + Qt + "]");
    Et = Qt = null;
    var Zt = [0, 11, 2, 25, 2, 18, 2, 1, 2, 14, 3, 13, 35, 122, 70, 52, 268, 28, 4, 48, 48, 31, 14, 29, 6, 37, 11, 29, 3, 35, 5, 7, 2, 4, 43, 157, 19, 35, 5, 35, 5, 39, 9, 51, 13, 10, 2, 14, 2, 6, 2, 1, 2, 10, 2, 14, 2, 6, 2, 1, 68, 310, 10, 21, 11, 7, 25, 5, 2, 41, 2, 8, 70, 5, 3, 0, 2, 43, 2, 1, 4, 0, 3, 22, 11, 22, 10, 30, 66, 18, 2, 1, 11, 21, 11, 25, 71, 55, 7, 1, 65, 0, 16, 3, 2, 2, 2, 28, 43, 28, 4, 28, 36, 7, 2, 27, 28, 53, 11, 21, 11, 18, 14, 17, 111, 72, 56, 50, 14, 50, 14, 35, 349, 41, 7, 1, 79, 28, 11, 0, 9, 21, 43, 17, 47, 20, 28, 22, 13, 52, 58, 1, 3, 0, 14, 44, 33, 24, 27, 35, 30, 0, 3, 0, 9, 34, 4, 0, 13, 47, 15, 3, 22, 0, 2, 0, 36, 17, 2, 24, 20, 1, 64, 6, 2, 0, 2, 3, 2, 14, 2, 9, 8, 46, 39, 7, 3, 1, 3, 21, 2, 6, 2, 1, 2, 4, 4, 0, 19, 0, 13, 4, 159, 52, 19, 3, 21, 2, 31, 47, 21, 1, 2, 0, 185, 46, 42, 3, 37, 47, 21, 0, 60, 42, 14, 0, 72, 26, 38, 6, 186, 43, 117, 63, 32, 7, 3, 0, 3, 7, 2, 1, 2, 23, 16, 0, 2, 0, 95, 7, 3, 38, 17, 0, 2, 0, 29, 0, 11, 39, 8, 0, 22, 0, 12, 45, 20, 0, 19, 72, 264, 8, 2, 36, 18, 0, 50, 29, 113, 6, 2, 1, 2, 37, 22, 0, 26, 5, 2, 1, 2, 31, 15, 0, 328, 18, 16, 0, 2, 12, 2, 33, 125, 0, 80, 921, 103, 110, 18, 195, 2637, 96, 16, 1071, 18, 5, 4026, 582, 8634, 568, 8, 30, 18, 78, 18, 29, 19, 47, 17, 3, 32, 20, 6, 18, 689, 63, 129, 74, 6, 0, 67, 12, 65, 1, 2, 0, 29, 6135, 9, 1237, 43, 8, 8936, 3, 2, 6, 2, 1, 2, 290, 16, 0, 30, 2, 3, 0, 15, 3, 9, 395, 2309, 106, 6, 12, 4, 8, 8, 9, 5991, 84, 2, 70, 2, 1, 3, 0, 3, 1, 3, 3, 2, 11, 2, 0, 2, 6, 2, 64, 2, 3, 3, 7, 2, 6, 2, 27, 2, 3, 2, 4, 2, 0, 4, 6, 2, 339, 3, 24, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 7, 1845, 30, 7, 5, 262, 61, 147, 44, 11, 6, 17, 0, 322, 29, 19, 43, 485, 27, 757, 6, 2, 3, 2, 1, 2, 14, 2, 196, 60, 67, 8, 0, 1205, 3, 2, 26, 2, 1, 2, 0, 3, 0, 2, 9, 2, 3, 2, 0, 2, 0, 7, 0, 5, 0, 2, 0, 2, 0, 2, 2, 2, 1, 2, 0, 3, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 1, 2, 0, 3, 3, 2, 6, 2, 3, 2, 3, 2, 0, 2, 9, 2, 16, 6, 2, 2, 4, 2, 16, 4421, 42719, 33, 4153, 7, 221, 3, 5761, 15, 7472, 3104, 541, 1507, 4938, 6, 4191], vi = [509, 0, 227, 0, 150, 4, 294, 9, 1368, 2, 2, 1, 6, 3, 41, 2, 5, 0, 166, 1, 574, 3, 9, 9, 370, 1, 81, 2, 71, 10, 50, 3, 123, 2, 54, 14, 32, 10, 3, 1, 11, 3, 46, 10, 8, 0, 46, 9, 7, 2, 37, 13, 2, 9, 6, 1, 45, 0, 13, 2, 49, 13, 9, 3, 2, 11, 83, 11, 7, 0, 3, 0, 158, 11, 6, 9, 7, 3, 56, 1, 2, 6, 3, 1, 3, 2, 10, 0, 11, 1, 3, 6, 4, 4, 193, 17, 10, 9, 5, 0, 82, 19, 13, 9, 214, 6, 3, 8, 28, 1, 83, 16, 16, 9, 82, 12, 9, 9, 84, 14, 5, 9, 243, 14, 166, 9, 71, 5, 2, 1, 3, 3, 2, 0, 2, 1, 13, 9, 120, 6, 3, 6, 4, 0, 29, 9, 41, 6, 2, 3, 9, 0, 10, 10, 47, 15, 406, 7, 2, 7, 17, 9, 57, 21, 2, 13, 123, 5, 4, 0, 2, 1, 2, 6, 2, 0, 9, 9, 49, 4, 2, 1, 2, 4, 9, 9, 330, 3, 10, 1, 2, 0, 49, 6, 4, 4, 14, 9, 5351, 0, 7, 14, 13835, 9, 87, 9, 39, 4, 60, 6, 26, 9, 1014, 0, 2, 54, 8, 3, 82, 0, 12, 1, 19628, 1, 4706, 45, 3, 22, 543, 4, 4, 5, 9, 7, 3, 6, 31, 3, 149, 2, 1418, 49, 513, 54, 5, 49, 9, 0, 15, 0, 23, 4, 2, 14, 1361, 6, 2, 16, 3, 6, 2, 1, 2, 4, 101, 0, 161, 6, 10, 9, 357, 0, 62, 13, 499, 13, 983, 6, 110, 6, 6, 9, 4759, 9, 787719, 239];
    function et(a, t) {
      let e = 65536;
      for (let s = 0, i = t.length; s < i; s += 2) {
        if (e += t[s], e > a)
          return false;
        if (e += t[s + 1], e >= a)
          return true;
      }
      return false;
    }
    function j(a) {
      return a < 65 ? a === 36 : a <= 90 ? true : a < 97 ? a === 95 : a <= 122 ? true : a <= 65535 ? a >= 170 && Ni.test(String.fromCharCode(a)) : et(a, Zt);
    }
    function ee(a) {
      return a < 48 ? a === 36 : a < 58 ? true : a < 65 ? false : a <= 90 ? true : a < 97 ? a === 95 : a <= 122 ? true : a <= 65535 ? a >= 170 && ki.test(String.fromCharCode(a)) : et(a, Zt) || et(a, vi);
    }
    var It = { keyword: ["break", "case", "catch", "continue", "debugger", "default", "do", "else", "finally", "for", "function", "if", "return", "switch", "throw", "try", "var", "const", "while", "with", "new", "this", "super", "class", "extends", "export", "import", "null", "true", "false", "in", "instanceof", "typeof", "void", "delete"], strict: ["implements", "interface", "let", "package", "private", "protected", "public", "static", "yield"], strictBind: ["eval", "arguments"] }, Li = new Set(It.keyword), Di = new Set(It.strict), Mi = new Set(It.strictBind);
    function es(a, t) {
      return t && a === "await" || a === "enum";
    }
    function ts(a, t) {
      return es(a, t) || Di.has(a);
    }
    function ss(a) {
      return Mi.has(a);
    }
    function is(a, t) {
      return ts(a, t) || ss(a);
    }
    function Oi(a) {
      return Li.has(a);
    }
    function Fi(a, t, e) {
      return a === 64 && t === 64 && j(e);
    }
    var Bi = /* @__PURE__ */ new Set(["break", "case", "catch", "continue", "debugger", "default", "do", "else", "finally", "for", "function", "if", "return", "switch", "throw", "try", "var", "const", "while", "with", "new", "this", "super", "class", "extends", "export", "import", "null", "true", "false", "in", "instanceof", "typeof", "void", "delete", "implements", "interface", "let", "package", "private", "protected", "public", "static", "yield", "eval", "arguments", "enum", "await"]);
    function Ri(a) {
      return Bi.has(a);
    }
    var Pe = class {
      constructor(t) {
        this.var = /* @__PURE__ */ new Set(), this.lexical = /* @__PURE__ */ new Set(), this.functions = /* @__PURE__ */ new Set(), this.flags = t;
      }
    }, ge = class {
      constructor(t, e) {
        this.parser = void 0, this.scopeStack = [], this.inModule = void 0, this.undefinedExports = /* @__PURE__ */ new Map(), this.parser = t, this.inModule = e;
      }
      get inTopLevel() {
        return (this.currentScope().flags & 1) > 0;
      }
      get inFunction() {
        return (this.currentVarScopeFlags() & 2) > 0;
      }
      get allowSuper() {
        return (this.currentThisScopeFlags() & 16) > 0;
      }
      get allowDirectSuper() {
        return (this.currentThisScopeFlags() & 32) > 0;
      }
      get inClass() {
        return (this.currentThisScopeFlags() & 64) > 0;
      }
      get inClassAndNotInNonArrowFunction() {
        let t = this.currentThisScopeFlags();
        return (t & 64) > 0 && (t & 2) === 0;
      }
      get inStaticBlock() {
        for (let t = this.scopeStack.length - 1; ; t--) {
          let { flags: e } = this.scopeStack[t];
          if (e & 128)
            return true;
          if (e & 451)
            return false;
        }
      }
      get inNonArrowFunction() {
        return (this.currentThisScopeFlags() & 2) > 0;
      }
      get treatFunctionsAsVar() {
        return this.treatFunctionsAsVarInScope(this.currentScope());
      }
      createScope(t) {
        return new Pe(t);
      }
      enter(t) {
        this.scopeStack.push(this.createScope(t));
      }
      exit() {
        return this.scopeStack.pop().flags;
      }
      treatFunctionsAsVarInScope(t) {
        return !!(t.flags & 130 || !this.parser.inModule && t.flags & 1);
      }
      declareName(t, e, s) {
        let i = this.currentScope();
        if (e & 8 || e & 16)
          this.checkRedeclarationInScope(i, t, e, s), e & 16 ? i.functions.add(t) : i.lexical.add(t), e & 8 && this.maybeExportDefined(i, t);
        else if (e & 4)
          for (let r = this.scopeStack.length - 1; r >= 0 && (i = this.scopeStack[r], this.checkRedeclarationInScope(i, t, e, s), i.var.add(t), this.maybeExportDefined(i, t), !(i.flags & 387)); --r)
            ;
        this.parser.inModule && i.flags & 1 && this.undefinedExports.delete(t);
      }
      maybeExportDefined(t, e) {
        this.parser.inModule && t.flags & 1 && this.undefinedExports.delete(e);
      }
      checkRedeclarationInScope(t, e, s, i) {
        this.isRedeclaredInScope(t, e, s) && this.parser.raise(p.VarRedeclaration, { at: i, identifierName: e });
      }
      isRedeclaredInScope(t, e, s) {
        return s & 1 ? s & 8 ? t.lexical.has(e) || t.functions.has(e) || t.var.has(e) : s & 16 ? t.lexical.has(e) || !this.treatFunctionsAsVarInScope(t) && t.var.has(e) : t.lexical.has(e) && !(t.flags & 8 && t.lexical.values().next().value === e) || !this.treatFunctionsAsVarInScope(t) && t.functions.has(e) : false;
      }
      checkLocalExport(t) {
        let { name: e } = t, s = this.scopeStack[0];
        !s.lexical.has(e) && !s.var.has(e) && !s.functions.has(e) && this.undefinedExports.set(e, t.loc.start);
      }
      currentScope() {
        return this.scopeStack[this.scopeStack.length - 1];
      }
      currentVarScopeFlags() {
        for (let t = this.scopeStack.length - 1; ; t--) {
          let { flags: e } = this.scopeStack[t];
          if (e & 387)
            return e;
        }
      }
      currentThisScopeFlags() {
        for (let t = this.scopeStack.length - 1; ; t--) {
          let { flags: e } = this.scopeStack[t];
          if (e & 451 && !(e & 4))
            return e;
        }
      }
    }, tt = class extends Pe {
      constructor(...t) {
        super(...t), this.declareFunctions = /* @__PURE__ */ new Set();
      }
    }, st = class extends ge {
      createScope(t) {
        return new tt(t);
      }
      declareName(t, e, s) {
        let i = this.currentScope();
        if (e & 2048) {
          this.checkRedeclarationInScope(i, t, e, s), this.maybeExportDefined(i, t), i.declareFunctions.add(t);
          return;
        }
        super.declareName(t, e, s);
      }
      isRedeclaredInScope(t, e, s) {
        return super.isRedeclaredInScope(t, e, s) ? true : s & 2048 ? !t.declareFunctions.has(e) && (t.lexical.has(e) || t.functions.has(e)) : false;
      }
      checkLocalExport(t) {
        this.scopeStack[0].declareFunctions.has(t.name) || super.checkLocalExport(t);
      }
    }, it = class {
      constructor() {
        this.sawUnambiguousESM = false, this.ambiguousScriptDifferentAst = false;
      }
      hasPlugin(t) {
        if (typeof t == "string")
          return this.plugins.has(t);
        {
          let [e, s] = t;
          if (!this.hasPlugin(e))
            return false;
          let i = this.plugins.get(e);
          for (let r of Object.keys(s))
            if ((i == null ? void 0 : i[r]) !== s[r])
              return false;
          return true;
        }
      }
      getPluginOption(t, e) {
        var s;
        return (s = this.plugins.get(t)) == null ? void 0 : s[e];
      }
    };
    function rs(a, t) {
      a.trailingComments === void 0 ? a.trailingComments = t : a.trailingComments.unshift(...t);
    }
    function _i(a, t) {
      a.leadingComments === void 0 ? a.leadingComments = t : a.leadingComments.unshift(...t);
    }
    function Te(a, t) {
      a.innerComments === void 0 ? a.innerComments = t : a.innerComments.unshift(...t);
    }
    function de(a, t, e) {
      let s = null, i = t.length;
      for (; s === null && i > 0; )
        s = t[--i];
      s === null || s.start > e.start ? Te(a, e.comments) : rs(s, e.comments);
    }
    var rt = class extends it {
      addComment(t) {
        this.filename && (t.loc.filename = this.filename), this.state.comments.push(t);
      }
      processComment(t) {
        let { commentStack: e } = this.state, s = e.length;
        if (s === 0)
          return;
        let i = s - 1, r = e[i];
        r.start === t.end && (r.leadingNode = t, i--);
        let { start: n } = t;
        for (; i >= 0; i--) {
          let o = e[i], h = o.end;
          if (h > n)
            o.containingNode = t, this.finalizeComment(o), e.splice(i, 1);
          else {
            h === n && (o.trailingNode = t);
            break;
          }
        }
      }
      finalizeComment(t) {
        let { comments: e } = t;
        if (t.leadingNode !== null || t.trailingNode !== null)
          t.leadingNode !== null && rs(t.leadingNode, e), t.trailingNode !== null && _i(t.trailingNode, e);
        else {
          let { containingNode: s, start: i } = t;
          if (this.input.charCodeAt(i - 1) === 44)
            switch (s.type) {
              case "ObjectExpression":
              case "ObjectPattern":
              case "RecordExpression":
                de(s, s.properties, t);
                break;
              case "CallExpression":
              case "OptionalCallExpression":
                de(s, s.arguments, t);
                break;
              case "FunctionDeclaration":
              case "FunctionExpression":
              case "ArrowFunctionExpression":
              case "ObjectMethod":
              case "ClassMethod":
              case "ClassPrivateMethod":
                de(s, s.params, t);
                break;
              case "ArrayExpression":
              case "ArrayPattern":
              case "TupleExpression":
                de(s, s.elements, t);
                break;
              case "ExportNamedDeclaration":
              case "ImportDeclaration":
                de(s, s.specifiers, t);
                break;
              default:
                Te(s, e);
            }
          else
            Te(s, e);
        }
      }
      finalizeRemainingComments() {
        let { commentStack: t } = this.state;
        for (let e = t.length - 1; e >= 0; e--)
          this.finalizeComment(t[e]);
        this.state.commentStack = [];
      }
      resetPreviousNodeTrailingComments(t) {
        let { commentStack: e } = this.state, { length: s } = e;
        if (s === 0)
          return;
        let i = e[s - 1];
        i.leadingNode === t && (i.leadingNode = null);
      }
      resetPreviousIdentifierLeadingComments(t) {
        let { commentStack: e } = this.state, { length: s } = e;
        s !== 0 && (e[s - 1].trailingNode === t ? e[s - 1].trailingNode = null : s >= 2 && e[s - 2].trailingNode === t && (e[s - 2].trailingNode = null));
      }
      takeSurroundingComments(t, e, s) {
        let { commentStack: i } = this.state, r = i.length;
        if (r === 0)
          return;
        let n = r - 1;
        for (; n >= 0; n--) {
          let o = i[n], h = o.end;
          if (o.start === s)
            o.leadingNode = t;
          else if (h === e)
            o.trailingNode = t;
          else if (h < e)
            break;
        }
      }
    }, as = /\r\n?|[\n\u2028\u2029]/, Ie = new RegExp(as.source, "g");
    function xe(a) {
      switch (a) {
        case 10:
        case 13:
        case 8232:
        case 8233:
          return true;
        default:
          return false;
      }
    }
    var We = /(?:\s|\/\/.*|\/\*[^]*?\*\/)*/g, ve = /(?:[^\S\n\r\u2028\u2029]|\/\/.*|\/\*.*?\*\/)*/g, jt = new RegExp("(?=(" + ve.source + "))\\1" + /(?=[\n\r\u2028\u2029]|\/\*(?!.*?\*\/)|$)/.source, "y");
    function Ui(a) {
      switch (a) {
        case 9:
        case 11:
        case 12:
        case 32:
        case 160:
        case 5760:
        case 8192:
        case 8193:
        case 8194:
        case 8195:
        case 8196:
        case 8197:
        case 8198:
        case 8199:
        case 8200:
        case 8201:
        case 8202:
        case 8239:
        case 8287:
        case 12288:
        case 65279:
          return true;
        default:
          return false;
      }
    }
    var at = class a {
      constructor() {
        this.strict = void 0, this.curLine = void 0, this.lineStart = void 0, this.startLoc = void 0, this.endLoc = void 0, this.errors = [], this.potentialArrowAt = -1, this.noArrowAt = [], this.noArrowParamsConversionAt = [], this.maybeInArrowParameters = false, this.inType = false, this.noAnonFunctionType = false, this.hasFlowComment = false, this.isAmbientContext = false, this.inAbstractClass = false, this.inDisallowConditionalTypesContext = false, this.topicContext = { maxNumOfResolvableTopics: 0, maxTopicIndex: null }, this.soloAwait = false, this.inFSharpPipelineDirectBody = false, this.labels = [], this.comments = [], this.commentStack = [], this.pos = 0, this.type = 137, this.value = null, this.start = 0, this.end = 0, this.lastTokEndLoc = null, this.lastTokStartLoc = null, this.lastTokStart = 0, this.context = [w.brace], this.canStartJSXElement = true, this.containsEsc = false, this.firstInvalidTemplateEscapePos = null, this.strictErrors = /* @__PURE__ */ new Map(), this.tokensLength = 0;
      }
      init({ strictMode: t, sourceType: e, startLine: s, startColumn: i }) {
        this.strict = t === false ? false : t === true ? true : e === "module", this.curLine = s, this.lineStart = -i, this.startLoc = this.endLoc = new F(s, i, 0);
      }
      curPosition() {
        return new F(this.curLine, this.pos - this.lineStart, this.pos);
      }
      clone(t) {
        let e = new a(), s = Object.keys(this);
        for (let i = 0, r = s.length; i < r; i++) {
          let n = s[i], o = this[n];
          !t && Array.isArray(o) && (o = o.slice()), e[n] = o;
        }
        return e;
      }
    }, ji = function(t) {
      return t >= 48 && t <= 57;
    }, $t = { decBinOct: /* @__PURE__ */ new Set([46, 66, 69, 79, 95, 98, 101, 111]), hex: /* @__PURE__ */ new Set([46, 88, 95, 120]) }, Ne = { bin: (a) => a === 48 || a === 49, oct: (a) => a >= 48 && a <= 55, dec: (a) => a >= 48 && a <= 57, hex: (a) => a >= 48 && a <= 57 || a >= 65 && a <= 70 || a >= 97 && a <= 102 };
    function Vt(a, t, e, s, i, r) {
      let n = e, o = s, h = i, l = "", c = null, u = e, { length: f } = t;
      for (; ; ) {
        if (e >= f) {
          r.unterminated(n, o, h), l += t.slice(u, e);
          break;
        }
        let d = t.charCodeAt(e);
        if ($i(a, d, t, e)) {
          l += t.slice(u, e);
          break;
        }
        if (d === 92) {
          l += t.slice(u, e);
          let x = Vi(t, e, s, i, a === "template", r);
          x.ch === null && !c ? c = { pos: e, lineStart: s, curLine: i } : l += x.ch, { pos: e, lineStart: s, curLine: i } = x, u = e;
        } else
          d === 8232 || d === 8233 ? (++e, ++i, s = e) : d === 10 || d === 13 ? a === "template" ? (l += t.slice(u, e) + `
`, ++e, d === 13 && t.charCodeAt(e) === 10 && ++e, ++i, u = s = e) : r.unterminated(n, o, h) : ++e;
      }
      return { pos: e, str: l, firstInvalidLoc: c, lineStart: s, curLine: i, containsInvalid: !!c };
    }
    function $i(a, t, e, s) {
      return a === "template" ? t === 96 || t === 36 && e.charCodeAt(s + 1) === 123 : t === (a === "double" ? 34 : 39);
    }
    function Vi(a, t, e, s, i, r) {
      let n = !i;
      t++;
      let o = (l) => ({ pos: t, ch: l, lineStart: e, curLine: s }), h = a.charCodeAt(t++);
      switch (h) {
        case 110:
          return o(`
`);
        case 114:
          return o("\r");
        case 120: {
          let l;
          return { code: l, pos: t } = nt(a, t, e, s, 2, false, n, r), o(l === null ? null : String.fromCharCode(l));
        }
        case 117: {
          let l;
          return { code: l, pos: t } = os(a, t, e, s, n, r), o(l === null ? null : String.fromCodePoint(l));
        }
        case 116:
          return o("	");
        case 98:
          return o("\b");
        case 118:
          return o("\v");
        case 102:
          return o("\f");
        case 13:
          a.charCodeAt(t) === 10 && ++t;
        case 10:
          e = t, ++s;
        case 8232:
        case 8233:
          return o("");
        case 56:
        case 57:
          if (i)
            return o(null);
          r.strictNumericEscape(t - 1, e, s);
        default:
          if (h >= 48 && h <= 55) {
            let l = t - 1, u = a.slice(l, t + 2).match(/^[0-7]+/)[0], f = parseInt(u, 8);
            f > 255 && (u = u.slice(0, -1), f = parseInt(u, 8)), t += u.length - 1;
            let d = a.charCodeAt(t);
            if (u !== "0" || d === 56 || d === 57) {
              if (i)
                return o(null);
              r.strictNumericEscape(l, e, s);
            }
            return o(String.fromCharCode(f));
          }
          return o(String.fromCharCode(h));
      }
    }
    function nt(a, t, e, s, i, r, n, o) {
      let h = t, l;
      return { n: l, pos: t } = ns(a, t, e, s, 16, i, r, false, o, !n), l === null && (n ? o.invalidEscapeSequence(h, e, s) : t = h - 1), { code: l, pos: t };
    }
    function ns(a, t, e, s, i, r, n, o, h, l) {
      let c = t, u = i === 16 ? $t.hex : $t.decBinOct, f = i === 16 ? Ne.hex : i === 10 ? Ne.dec : i === 8 ? Ne.oct : Ne.bin, d = false, x = 0;
      for (let I = 0, C = r ?? 1 / 0; I < C; ++I) {
        let E = a.charCodeAt(t), N;
        if (E === 95 && o !== "bail") {
          let Ee = a.charCodeAt(t - 1), ce = a.charCodeAt(t + 1);
          if (o) {
            if (Number.isNaN(ce) || !f(ce) || u.has(Ee) || u.has(ce)) {
              if (l)
                return { n: null, pos: t };
              h.unexpectedNumericSeparator(t, e, s);
            }
          } else {
            if (l)
              return { n: null, pos: t };
            h.numericSeparatorInEscapeSequence(t, e, s);
          }
          ++t;
          continue;
        }
        if (E >= 97 ? N = E - 97 + 10 : E >= 65 ? N = E - 65 + 10 : ji(E) ? N = E - 48 : N = 1 / 0, N >= i) {
          if (N <= 9 && l)
            return { n: null, pos: t };
          if (N <= 9 && h.invalidDigit(t, e, s, i))
            N = 0;
          else if (n)
            N = 0, d = true;
          else
            break;
        }
        ++t, x = x * i + N;
      }
      return t === c || r != null && t - c !== r || d ? { n: null, pos: t } : { n: x, pos: t };
    }
    function os(a, t, e, s, i, r) {
      let n = a.charCodeAt(t), o;
      if (n === 123) {
        if (++t, { code: o, pos: t } = nt(a, t, e, s, a.indexOf("}", t) - t, true, i, r), ++t, o !== null && o > 1114111)
          if (i)
            r.invalidCodePoint(t, e, s);
          else
            return { code: null, pos: t };
      } else
        ({ code: o, pos: t } = nt(a, t, e, s, 4, false, i, r));
      return { code: o, pos: t };
    }
    var zi = ["at"], Ki = ["at"];
    function fe(a, t, e) {
      return new F(e, a - t, a);
    }
    var qi = /* @__PURE__ */ new Set([103, 109, 115, 105, 121, 117, 100, 118]), O = class {
      constructor(t) {
        this.type = t.type, this.value = t.value, this.start = t.start, this.end = t.end, this.loc = new ie(t.startLoc, t.endLoc);
      }
    }, ot = class extends rt {
      constructor(t, e) {
        super(), this.isLookahead = void 0, this.tokens = [], this.errorHandlers_readInt = { invalidDigit: (s, i, r, n) => this.options.errorRecovery ? (this.raise(p.InvalidDigit, { at: fe(s, i, r), radix: n }), true) : false, numericSeparatorInEscapeSequence: this.errorBuilder(p.NumericSeparatorInEscapeSequence), unexpectedNumericSeparator: this.errorBuilder(p.UnexpectedNumericSeparator) }, this.errorHandlers_readCodePoint = Object.assign({}, this.errorHandlers_readInt, { invalidEscapeSequence: this.errorBuilder(p.InvalidEscapeSequence), invalidCodePoint: this.errorBuilder(p.InvalidCodePoint) }), this.errorHandlers_readStringContents_string = Object.assign({}, this.errorHandlers_readCodePoint, { strictNumericEscape: (s, i, r) => {
          this.recordStrictModeErrors(p.StrictNumericEscape, { at: fe(s, i, r) });
        }, unterminated: (s, i, r) => {
          throw this.raise(p.UnterminatedString, { at: fe(s - 1, i, r) });
        } }), this.errorHandlers_readStringContents_template = Object.assign({}, this.errorHandlers_readCodePoint, { strictNumericEscape: this.errorBuilder(p.StrictNumericEscape), unterminated: (s, i, r) => {
          throw this.raise(p.UnterminatedTemplate, { at: fe(s, i, r) });
        } }), this.state = new at(), this.state.init(t), this.input = e, this.length = e.length, this.isLookahead = false;
      }
      pushToken(t) {
        this.tokens.length = this.state.tokensLength, this.tokens.push(t), ++this.state.tokensLength;
      }
      next() {
        this.checkKeywordEscapes(), this.options.tokens && this.pushToken(new O(this.state)), this.state.lastTokStart = this.state.start, this.state.lastTokEndLoc = this.state.endLoc, this.state.lastTokStartLoc = this.state.startLoc, this.nextToken();
      }
      eat(t) {
        return this.match(t) ? (this.next(), true) : false;
      }
      match(t) {
        return this.state.type === t;
      }
      createLookaheadState(t) {
        return { pos: t.pos, value: null, type: t.type, start: t.start, end: t.end, context: [this.curContext()], inType: t.inType, startLoc: t.startLoc, lastTokEndLoc: t.lastTokEndLoc, curLine: t.curLine, lineStart: t.lineStart, curPosition: t.curPosition };
      }
      lookahead() {
        let t = this.state;
        this.state = this.createLookaheadState(t), this.isLookahead = true, this.nextToken(), this.isLookahead = false;
        let e = this.state;
        return this.state = t, e;
      }
      nextTokenStart() {
        return this.nextTokenStartSince(this.state.pos);
      }
      nextTokenStartSince(t) {
        return We.lastIndex = t, We.test(this.input) ? We.lastIndex : t;
      }
      lookaheadCharCode() {
        return this.input.charCodeAt(this.nextTokenStart());
      }
      nextTokenInLineStart() {
        return this.nextTokenInLineStartSince(this.state.pos);
      }
      nextTokenInLineStartSince(t) {
        return ve.lastIndex = t, ve.test(this.input) ? ve.lastIndex : t;
      }
      lookaheadInLineCharCode() {
        return this.input.charCodeAt(this.nextTokenInLineStart());
      }
      codePointAtPos(t) {
        let e = this.input.charCodeAt(t);
        if ((e & 64512) === 55296 && ++t < this.input.length) {
          let s = this.input.charCodeAt(t);
          (s & 64512) === 56320 && (e = 65536 + ((e & 1023) << 10) + (s & 1023));
        }
        return e;
      }
      setStrict(t) {
        this.state.strict = t, t && (this.state.strictErrors.forEach(([e, s]) => this.raise(e, { at: s })), this.state.strictErrors.clear());
      }
      curContext() {
        return this.state.context[this.state.context.length - 1];
      }
      nextToken() {
        if (this.skipSpace(), this.state.start = this.state.pos, this.isLookahead || (this.state.startLoc = this.state.curPosition()), this.state.pos >= this.length) {
          this.finishToken(137);
          return;
        }
        this.getTokenFromCode(this.codePointAtPos(this.state.pos));
      }
      skipBlockComment(t) {
        let e;
        this.isLookahead || (e = this.state.curPosition());
        let s = this.state.pos, i = this.input.indexOf(t, s + 2);
        if (i === -1)
          throw this.raise(p.UnterminatedComment, { at: this.state.curPosition() });
        for (this.state.pos = i + t.length, Ie.lastIndex = s + 2; Ie.test(this.input) && Ie.lastIndex <= i; )
          ++this.state.curLine, this.state.lineStart = Ie.lastIndex;
        if (this.isLookahead)
          return;
        let r = { type: "CommentBlock", value: this.input.slice(s + 2, i), start: s, end: i + t.length, loc: new ie(e, this.state.curPosition()) };
        return this.options.tokens && this.pushToken(r), r;
      }
      skipLineComment(t) {
        let e = this.state.pos, s;
        this.isLookahead || (s = this.state.curPosition());
        let i = this.input.charCodeAt(this.state.pos += t);
        if (this.state.pos < this.length)
          for (; !xe(i) && ++this.state.pos < this.length; )
            i = this.input.charCodeAt(this.state.pos);
        if (this.isLookahead)
          return;
        let r = this.state.pos, o = { type: "CommentLine", value: this.input.slice(e + t, r), start: e, end: r, loc: new ie(s, this.state.curPosition()) };
        return this.options.tokens && this.pushToken(o), o;
      }
      skipSpace() {
        let t = this.state.pos, e = [];
        e:
          for (; this.state.pos < this.length; ) {
            let s = this.input.charCodeAt(this.state.pos);
            switch (s) {
              case 32:
              case 160:
              case 9:
                ++this.state.pos;
                break;
              case 13:
                this.input.charCodeAt(this.state.pos + 1) === 10 && ++this.state.pos;
              case 10:
              case 8232:
              case 8233:
                ++this.state.pos, ++this.state.curLine, this.state.lineStart = this.state.pos;
                break;
              case 47:
                switch (this.input.charCodeAt(this.state.pos + 1)) {
                  case 42: {
                    let i = this.skipBlockComment("*/");
                    i !== void 0 && (this.addComment(i), this.options.attachComment && e.push(i));
                    break;
                  }
                  case 47: {
                    let i = this.skipLineComment(2);
                    i !== void 0 && (this.addComment(i), this.options.attachComment && e.push(i));
                    break;
                  }
                  default:
                    break e;
                }
                break;
              default:
                if (Ui(s))
                  ++this.state.pos;
                else if (s === 45 && !this.inModule && this.options.annexB) {
                  let i = this.state.pos;
                  if (this.input.charCodeAt(i + 1) === 45 && this.input.charCodeAt(i + 2) === 62 && (t === 0 || this.state.lineStart > t)) {
                    let r = this.skipLineComment(3);
                    r !== void 0 && (this.addComment(r), this.options.attachComment && e.push(r));
                  } else
                    break e;
                } else if (s === 60 && !this.inModule && this.options.annexB) {
                  let i = this.state.pos;
                  if (this.input.charCodeAt(i + 1) === 33 && this.input.charCodeAt(i + 2) === 45 && this.input.charCodeAt(i + 3) === 45) {
                    let r = this.skipLineComment(4);
                    r !== void 0 && (this.addComment(r), this.options.attachComment && e.push(r));
                  } else
                    break e;
                } else
                  break e;
            }
          }
        if (e.length > 0) {
          let s = this.state.pos, i = { start: t, end: s, comments: e, leadingNode: null, trailingNode: null, containingNode: null };
          this.state.commentStack.push(i);
        }
      }
      finishToken(t, e) {
        this.state.end = this.state.pos, this.state.endLoc = this.state.curPosition();
        let s = this.state.type;
        this.state.type = t, this.state.value = e, this.isLookahead || this.updateContext(s);
      }
      replaceToken(t) {
        this.state.type = t, this.updateContext();
      }
      readToken_numberSign() {
        if (this.state.pos === 0 && this.readToken_interpreter())
          return;
        let t = this.state.pos + 1, e = this.codePointAtPos(t);
        if (e >= 48 && e <= 57)
          throw this.raise(p.UnexpectedDigitAfterHash, { at: this.state.curPosition() });
        if (e === 123 || e === 91 && this.hasPlugin("recordAndTuple")) {
          if (this.expectPlugin("recordAndTuple"), this.getPluginOption("recordAndTuple", "syntaxType") === "bar")
            throw this.raise(e === 123 ? p.RecordExpressionHashIncorrectStartSyntaxType : p.TupleExpressionHashIncorrectStartSyntaxType, { at: this.state.curPosition() });
          this.state.pos += 2, e === 123 ? this.finishToken(7) : this.finishToken(1);
        } else
          j(e) ? (++this.state.pos, this.finishToken(136, this.readWord1(e))) : e === 92 ? (++this.state.pos, this.finishToken(136, this.readWord1())) : this.finishOp(27, 1);
      }
      readToken_dot() {
        let t = this.input.charCodeAt(this.state.pos + 1);
        if (t >= 48 && t <= 57) {
          this.readNumber(true);
          return;
        }
        t === 46 && this.input.charCodeAt(this.state.pos + 2) === 46 ? (this.state.pos += 3, this.finishToken(21)) : (++this.state.pos, this.finishToken(16));
      }
      readToken_slash() {
        this.input.charCodeAt(this.state.pos + 1) === 61 ? this.finishOp(31, 2) : this.finishOp(56, 1);
      }
      readToken_interpreter() {
        if (this.state.pos !== 0 || this.length < 2)
          return false;
        let t = this.input.charCodeAt(this.state.pos + 1);
        if (t !== 33)
          return false;
        let e = this.state.pos;
        for (this.state.pos += 1; !xe(t) && ++this.state.pos < this.length; )
          t = this.input.charCodeAt(this.state.pos);
        let s = this.input.slice(e + 2, this.state.pos);
        return this.finishToken(28, s), true;
      }
      readToken_mult_modulo(t) {
        let e = t === 42 ? 55 : 54, s = 1, i = this.input.charCodeAt(this.state.pos + 1);
        t === 42 && i === 42 && (s++, i = this.input.charCodeAt(this.state.pos + 2), e = 57), i === 61 && !this.state.inType && (s++, e = t === 37 ? 33 : 30), this.finishOp(e, s);
      }
      readToken_pipe_amp(t) {
        let e = this.input.charCodeAt(this.state.pos + 1);
        if (e === t) {
          this.input.charCodeAt(this.state.pos + 2) === 61 ? this.finishOp(30, 3) : this.finishOp(t === 124 ? 41 : 42, 2);
          return;
        }
        if (t === 124) {
          if (e === 62) {
            this.finishOp(39, 2);
            return;
          }
          if (this.hasPlugin("recordAndTuple") && e === 125) {
            if (this.getPluginOption("recordAndTuple", "syntaxType") !== "bar")
              throw this.raise(p.RecordExpressionBarIncorrectEndSyntaxType, { at: this.state.curPosition() });
            this.state.pos += 2, this.finishToken(9);
            return;
          }
          if (this.hasPlugin("recordAndTuple") && e === 93) {
            if (this.getPluginOption("recordAndTuple", "syntaxType") !== "bar")
              throw this.raise(p.TupleExpressionBarIncorrectEndSyntaxType, { at: this.state.curPosition() });
            this.state.pos += 2, this.finishToken(4);
            return;
          }
        }
        if (e === 61) {
          this.finishOp(30, 2);
          return;
        }
        this.finishOp(t === 124 ? 43 : 45, 1);
      }
      readToken_caret() {
        let t = this.input.charCodeAt(this.state.pos + 1);
        t === 61 && !this.state.inType ? this.finishOp(32, 2) : t === 94 && this.hasPlugin(["pipelineOperator", { proposal: "hack", topicToken: "^^" }]) ? (this.finishOp(37, 2), this.input.codePointAt(this.state.pos) === 94 && this.unexpected()) : this.finishOp(44, 1);
      }
      readToken_atSign() {
        this.input.charCodeAt(this.state.pos + 1) === 64 && this.hasPlugin(["pipelineOperator", { proposal: "hack", topicToken: "@@" }]) ? this.finishOp(38, 2) : this.finishOp(26, 1);
      }
      readToken_plus_min(t) {
        let e = this.input.charCodeAt(this.state.pos + 1);
        if (e === t) {
          this.finishOp(34, 2);
          return;
        }
        e === 61 ? this.finishOp(30, 2) : this.finishOp(53, 1);
      }
      readToken_lt() {
        let { pos: t } = this.state, e = this.input.charCodeAt(t + 1);
        if (e === 60) {
          if (this.input.charCodeAt(t + 2) === 61) {
            this.finishOp(30, 3);
            return;
          }
          this.finishOp(51, 2);
          return;
        }
        if (e === 61) {
          this.finishOp(49, 2);
          return;
        }
        this.finishOp(47, 1);
      }
      readToken_gt() {
        let { pos: t } = this.state, e = this.input.charCodeAt(t + 1);
        if (e === 62) {
          let s = this.input.charCodeAt(t + 2) === 62 ? 3 : 2;
          if (this.input.charCodeAt(t + s) === 61) {
            this.finishOp(30, s + 1);
            return;
          }
          this.finishOp(52, s);
          return;
        }
        if (e === 61) {
          this.finishOp(49, 2);
          return;
        }
        this.finishOp(48, 1);
      }
      readToken_eq_excl(t) {
        let e = this.input.charCodeAt(this.state.pos + 1);
        if (e === 61) {
          this.finishOp(46, this.input.charCodeAt(this.state.pos + 2) === 61 ? 3 : 2);
          return;
        }
        if (t === 61 && e === 62) {
          this.state.pos += 2, this.finishToken(19);
          return;
        }
        this.finishOp(t === 61 ? 29 : 35, 1);
      }
      readToken_question() {
        let t = this.input.charCodeAt(this.state.pos + 1), e = this.input.charCodeAt(this.state.pos + 2);
        t === 63 ? e === 61 ? this.finishOp(30, 3) : this.finishOp(40, 2) : t === 46 && !(e >= 48 && e <= 57) ? (this.state.pos += 2, this.finishToken(18)) : (++this.state.pos, this.finishToken(17));
      }
      getTokenFromCode(t) {
        switch (t) {
          case 46:
            this.readToken_dot();
            return;
          case 40:
            ++this.state.pos, this.finishToken(10);
            return;
          case 41:
            ++this.state.pos, this.finishToken(11);
            return;
          case 59:
            ++this.state.pos, this.finishToken(13);
            return;
          case 44:
            ++this.state.pos, this.finishToken(12);
            return;
          case 91:
            if (this.hasPlugin("recordAndTuple") && this.input.charCodeAt(this.state.pos + 1) === 124) {
              if (this.getPluginOption("recordAndTuple", "syntaxType") !== "bar")
                throw this.raise(p.TupleExpressionBarIncorrectStartSyntaxType, { at: this.state.curPosition() });
              this.state.pos += 2, this.finishToken(2);
            } else
              ++this.state.pos, this.finishToken(0);
            return;
          case 93:
            ++this.state.pos, this.finishToken(3);
            return;
          case 123:
            if (this.hasPlugin("recordAndTuple") && this.input.charCodeAt(this.state.pos + 1) === 124) {
              if (this.getPluginOption("recordAndTuple", "syntaxType") !== "bar")
                throw this.raise(p.RecordExpressionBarIncorrectStartSyntaxType, { at: this.state.curPosition() });
              this.state.pos += 2, this.finishToken(6);
            } else
              ++this.state.pos, this.finishToken(5);
            return;
          case 125:
            ++this.state.pos, this.finishToken(8);
            return;
          case 58:
            this.hasPlugin("functionBind") && this.input.charCodeAt(this.state.pos + 1) === 58 ? this.finishOp(15, 2) : (++this.state.pos, this.finishToken(14));
            return;
          case 63:
            this.readToken_question();
            return;
          case 96:
            this.readTemplateToken();
            return;
          case 48: {
            let e = this.input.charCodeAt(this.state.pos + 1);
            if (e === 120 || e === 88) {
              this.readRadixNumber(16);
              return;
            }
            if (e === 111 || e === 79) {
              this.readRadixNumber(8);
              return;
            }
            if (e === 98 || e === 66) {
              this.readRadixNumber(2);
              return;
            }
          }
          case 49:
          case 50:
          case 51:
          case 52:
          case 53:
          case 54:
          case 55:
          case 56:
          case 57:
            this.readNumber(false);
            return;
          case 34:
          case 39:
            this.readString(t);
            return;
          case 47:
            this.readToken_slash();
            return;
          case 37:
          case 42:
            this.readToken_mult_modulo(t);
            return;
          case 124:
          case 38:
            this.readToken_pipe_amp(t);
            return;
          case 94:
            this.readToken_caret();
            return;
          case 43:
          case 45:
            this.readToken_plus_min(t);
            return;
          case 60:
            this.readToken_lt();
            return;
          case 62:
            this.readToken_gt();
            return;
          case 61:
          case 33:
            this.readToken_eq_excl(t);
            return;
          case 126:
            this.finishOp(36, 1);
            return;
          case 64:
            this.readToken_atSign();
            return;
          case 35:
            this.readToken_numberSign();
            return;
          case 92:
            this.readWord();
            return;
          default:
            if (j(t)) {
              this.readWord(t);
              return;
            }
        }
        throw this.raise(p.InvalidOrUnexpectedToken, { at: this.state.curPosition(), unexpected: String.fromCodePoint(t) });
      }
      finishOp(t, e) {
        let s = this.input.slice(this.state.pos, this.state.pos + e);
        this.state.pos += e, this.finishToken(t, s);
      }
      readRegexp() {
        let t = this.state.startLoc, e = this.state.start + 1, s, i, { pos: r } = this.state;
        for (; ; ++r) {
          if (r >= this.length)
            throw this.raise(p.UnterminatedRegExp, { at: L(t, 1) });
          let l = this.input.charCodeAt(r);
          if (xe(l))
            throw this.raise(p.UnterminatedRegExp, { at: L(t, 1) });
          if (s)
            s = false;
          else {
            if (l === 91)
              i = true;
            else if (l === 93 && i)
              i = false;
            else if (l === 47 && !i)
              break;
            s = l === 92;
          }
        }
        let n = this.input.slice(e, r);
        ++r;
        let o = "", h = () => L(t, r + 2 - e);
        for (; r < this.length; ) {
          let l = this.codePointAtPos(r), c = String.fromCharCode(l);
          if (qi.has(l))
            l === 118 ? o.includes("u") && this.raise(p.IncompatibleRegExpUVFlags, { at: h() }) : l === 117 && o.includes("v") && this.raise(p.IncompatibleRegExpUVFlags, { at: h() }), o.includes(c) && this.raise(p.DuplicateRegExpFlags, { at: h() });
          else if (ee(l) || l === 92)
            this.raise(p.MalformedRegExpFlags, { at: h() });
          else
            break;
          ++r, o += c;
        }
        this.state.pos = r, this.finishToken(135, { pattern: n, flags: o });
      }
      readInt(t, e, s = false, i = true) {
        let { n: r, pos: n } = ns(this.input, this.state.pos, this.state.lineStart, this.state.curLine, t, e, s, i, this.errorHandlers_readInt, false);
        return this.state.pos = n, r;
      }
      readRadixNumber(t) {
        let e = this.state.curPosition(), s = false;
        this.state.pos += 2;
        let i = this.readInt(t);
        i == null && this.raise(p.InvalidDigit, { at: L(e, 2), radix: t });
        let r = this.input.charCodeAt(this.state.pos);
        if (r === 110)
          ++this.state.pos, s = true;
        else if (r === 109)
          throw this.raise(p.InvalidDecimal, { at: e });
        if (j(this.codePointAtPos(this.state.pos)))
          throw this.raise(p.NumberIdentifier, { at: this.state.curPosition() });
        if (s) {
          let n = this.input.slice(e.index, this.state.pos).replace(/[_n]/g, "");
          this.finishToken(133, n);
          return;
        }
        this.finishToken(132, i);
      }
      readNumber(t) {
        let e = this.state.pos, s = this.state.curPosition(), i = false, r = false, n = false, o = false, h = false;
        !t && this.readInt(10) === null && this.raise(p.InvalidNumber, { at: this.state.curPosition() });
        let l = this.state.pos - e >= 2 && this.input.charCodeAt(e) === 48;
        if (l) {
          let d = this.input.slice(e, this.state.pos);
          if (this.recordStrictModeErrors(p.StrictOctalLiteral, { at: s }), !this.state.strict) {
            let x = d.indexOf("_");
            x > 0 && this.raise(p.ZeroDigitNumericSeparator, { at: L(s, x) });
          }
          h = l && !/[89]/.test(d);
        }
        let c = this.input.charCodeAt(this.state.pos);
        if (c === 46 && !h && (++this.state.pos, this.readInt(10), i = true, c = this.input.charCodeAt(this.state.pos)), (c === 69 || c === 101) && !h && (c = this.input.charCodeAt(++this.state.pos), (c === 43 || c === 45) && ++this.state.pos, this.readInt(10) === null && this.raise(p.InvalidOrMissingExponent, { at: s }), i = true, o = true, c = this.input.charCodeAt(this.state.pos)), c === 110 && ((i || l) && this.raise(p.InvalidBigIntLiteral, { at: s }), ++this.state.pos, r = true), c === 109 && (this.expectPlugin("decimal", this.state.curPosition()), (o || l) && this.raise(p.InvalidDecimal, { at: s }), ++this.state.pos, n = true), j(this.codePointAtPos(this.state.pos)))
          throw this.raise(p.NumberIdentifier, { at: this.state.curPosition() });
        let u = this.input.slice(e, this.state.pos).replace(/[_mn]/g, "");
        if (r) {
          this.finishToken(133, u);
          return;
        }
        if (n) {
          this.finishToken(134, u);
          return;
        }
        let f = h ? parseInt(u, 8) : parseFloat(u);
        this.finishToken(132, f);
      }
      readCodePoint(t) {
        let { code: e, pos: s } = os(this.input, this.state.pos, this.state.lineStart, this.state.curLine, t, this.errorHandlers_readCodePoint);
        return this.state.pos = s, e;
      }
      readString(t) {
        let { str: e, pos: s, curLine: i, lineStart: r } = Vt(t === 34 ? "double" : "single", this.input, this.state.pos + 1, this.state.lineStart, this.state.curLine, this.errorHandlers_readStringContents_string);
        this.state.pos = s + 1, this.state.lineStart = r, this.state.curLine = i, this.finishToken(131, e);
      }
      readTemplateContinuation() {
        this.match(8) || this.unexpected(null, 8), this.state.pos--, this.readTemplateToken();
      }
      readTemplateToken() {
        let t = this.input[this.state.pos], { str: e, firstInvalidLoc: s, pos: i, curLine: r, lineStart: n } = Vt("template", this.input, this.state.pos + 1, this.state.lineStart, this.state.curLine, this.errorHandlers_readStringContents_template);
        this.state.pos = i + 1, this.state.lineStart = n, this.state.curLine = r, s && (this.state.firstInvalidTemplateEscapePos = new F(s.curLine, s.pos - s.lineStart, s.pos)), this.input.codePointAt(i) === 96 ? this.finishToken(24, s ? null : t + e + "`") : (this.state.pos++, this.finishToken(25, s ? null : t + e + "${"));
      }
      recordStrictModeErrors(t, { at: e }) {
        let s = e.index;
        this.state.strict && !this.state.strictErrors.has(s) ? this.raise(t, { at: e }) : this.state.strictErrors.set(s, [t, e]);
      }
      readWord1(t) {
        this.state.containsEsc = false;
        let e = "", s = this.state.pos, i = this.state.pos;
        for (t !== void 0 && (this.state.pos += t <= 65535 ? 1 : 2); this.state.pos < this.length; ) {
          let r = this.codePointAtPos(this.state.pos);
          if (ee(r))
            this.state.pos += r <= 65535 ? 1 : 2;
          else if (r === 92) {
            this.state.containsEsc = true, e += this.input.slice(i, this.state.pos);
            let n = this.state.curPosition(), o = this.state.pos === s ? j : ee;
            if (this.input.charCodeAt(++this.state.pos) !== 117) {
              this.raise(p.MissingUnicodeEscape, { at: this.state.curPosition() }), i = this.state.pos - 1;
              continue;
            }
            ++this.state.pos;
            let h = this.readCodePoint(true);
            h !== null && (o(h) || this.raise(p.EscapedCharNotAnIdentifier, { at: n }), e += String.fromCodePoint(h)), i = this.state.pos;
          } else
            break;
        }
        return e + this.input.slice(i, this.state.pos);
      }
      readWord(t) {
        let e = this.readWord1(t), s = gt.get(e);
        s !== void 0 ? this.finishToken(s, q(s)) : this.finishToken(130, e);
      }
      checkKeywordEscapes() {
        let { type: t } = this.state;
        Ct(t) && this.state.containsEsc && this.raise(p.InvalidEscapedReservedWord, { at: this.state.startLoc, reservedWord: q(t) });
      }
      raise(t, e) {
        let { at: s } = e, i = De(e, zi), r = s instanceof F ? s : s.loc.start, n = t({ loc: r, details: i });
        if (!this.options.errorRecovery)
          throw n;
        return this.isLookahead || this.state.errors.push(n), n;
      }
      raiseOverwrite(t, e) {
        let { at: s } = e, i = De(e, Ki), r = s instanceof F ? s : s.loc.start, n = r.index, o = this.state.errors;
        for (let h = o.length - 1; h >= 0; h--) {
          let l = o[h];
          if (l.loc.index === n)
            return o[h] = t({ loc: r, details: i });
          if (l.loc.index < n)
            break;
        }
        return this.raise(t, e);
      }
      updateContext(t) {
      }
      unexpected(t, e) {
        throw this.raise(p.UnexpectedToken, { expected: e ? q(e) : null, at: t ?? this.state.startLoc });
      }
      expectPlugin(t, e) {
        if (this.hasPlugin(t))
          return true;
        throw this.raise(p.MissingPlugin, { at: e ?? this.state.startLoc, missingPlugin: [t] });
      }
      expectOnePlugin(t) {
        if (!t.some((e) => this.hasPlugin(e)))
          throw this.raise(p.MissingOneOfPlugins, { at: this.state.startLoc, missingPlugin: t });
      }
      errorBuilder(t) {
        return (e, s, i) => {
          this.raise(t, { at: fe(e, s, i) });
        };
      }
    }, ht = class {
      constructor() {
        this.privateNames = /* @__PURE__ */ new Set(), this.loneAccessors = /* @__PURE__ */ new Map(), this.undefinedPrivateNames = /* @__PURE__ */ new Map();
      }
    }, lt = class {
      constructor(t) {
        this.parser = void 0, this.stack = [], this.undefinedPrivateNames = /* @__PURE__ */ new Map(), this.parser = t;
      }
      current() {
        return this.stack[this.stack.length - 1];
      }
      enter() {
        this.stack.push(new ht());
      }
      exit() {
        let t = this.stack.pop(), e = this.current();
        for (let [s, i] of Array.from(t.undefinedPrivateNames))
          e ? e.undefinedPrivateNames.has(s) || e.undefinedPrivateNames.set(s, i) : this.parser.raise(p.InvalidPrivateFieldResolution, { at: i, identifierName: s });
      }
      declarePrivateName(t, e, s) {
        let { privateNames: i, loneAccessors: r, undefinedPrivateNames: n } = this.current(), o = i.has(t);
        if (e & 3) {
          let h = o && r.get(t);
          if (h) {
            let l = h & 4, c = e & 4, u = h & 3, f = e & 3;
            o = u === f || l !== c, o || r.delete(t);
          } else
            o || r.set(t, e);
        }
        o && this.parser.raise(p.PrivateNameRedeclaration, { at: s, identifierName: t }), i.add(t), n.delete(t);
      }
      usePrivateName(t, e) {
        let s;
        for (s of this.stack)
          if (s.privateNames.has(t))
            return;
        s ? s.undefinedPrivateNames.set(t, e) : this.parser.raise(p.InvalidPrivateFieldResolution, { at: e, identifierName: t });
      }
    }, re = class {
      constructor(t = 0) {
        this.type = t;
      }
      canBeArrowParameterDeclaration() {
        return this.type === 2 || this.type === 1;
      }
      isCertainlyParameterDeclaration() {
        return this.type === 3;
      }
    }, Fe = class extends re {
      constructor(t) {
        super(t), this.declarationErrors = /* @__PURE__ */ new Map();
      }
      recordDeclarationError(t, { at: e }) {
        let s = e.index;
        this.declarationErrors.set(s, [t, e]);
      }
      clearDeclarationError(t) {
        this.declarationErrors.delete(t);
      }
      iterateErrors(t) {
        this.declarationErrors.forEach(t);
      }
    }, ct = class {
      constructor(t) {
        this.parser = void 0, this.stack = [new re()], this.parser = t;
      }
      enter(t) {
        this.stack.push(t);
      }
      exit() {
        this.stack.pop();
      }
      recordParameterInitializerError(t, { at: e }) {
        let s = { at: e.loc.start }, { stack: i } = this, r = i.length - 1, n = i[r];
        for (; !n.isCertainlyParameterDeclaration(); ) {
          if (n.canBeArrowParameterDeclaration())
            n.recordDeclarationError(t, s);
          else
            return;
          n = i[--r];
        }
        this.parser.raise(t, s);
      }
      recordArrowParameterBindingError(t, { at: e }) {
        let { stack: s } = this, i = s[s.length - 1], r = { at: e.loc.start };
        if (i.isCertainlyParameterDeclaration())
          this.parser.raise(t, r);
        else if (i.canBeArrowParameterDeclaration())
          i.recordDeclarationError(t, r);
        else
          return;
      }
      recordAsyncArrowParametersError({ at: t }) {
        let { stack: e } = this, s = e.length - 1, i = e[s];
        for (; i.canBeArrowParameterDeclaration(); )
          i.type === 2 && i.recordDeclarationError(p.AwaitBindingIdentifier, { at: t }), i = e[--s];
      }
      validateAsPattern() {
        let { stack: t } = this, e = t[t.length - 1];
        e.canBeArrowParameterDeclaration() && e.iterateErrors(([s, i]) => {
          this.parser.raise(s, { at: i });
          let r = t.length - 2, n = t[r];
          for (; n.canBeArrowParameterDeclaration(); )
            n.clearDeclarationError(i.index), n = t[--r];
        });
      }
    };
    function Hi() {
      return new re(3);
    }
    function Wi() {
      return new Fe(1);
    }
    function Ji() {
      return new Fe(2);
    }
    function hs() {
      return new re();
    }
    var te = 0, ls = 1, Re = 2, cs = 4, Q = 8, pt = class {
      constructor() {
        this.stacks = [];
      }
      enter(t) {
        this.stacks.push(t);
      }
      exit() {
        this.stacks.pop();
      }
      currentFlags() {
        return this.stacks[this.stacks.length - 1];
      }
      get hasAwait() {
        return (this.currentFlags() & Re) > 0;
      }
      get hasYield() {
        return (this.currentFlags() & ls) > 0;
      }
      get hasReturn() {
        return (this.currentFlags() & cs) > 0;
      }
      get hasIn() {
        return (this.currentFlags() & Q) > 0;
      }
    };
    function Le(a, t) {
      return (a ? Re : 0) | (t ? ls : 0);
    }
    var ut = class extends ot {
      addExtra(t, e, s, i = true) {
        if (!t)
          return;
        let r = t.extra = t.extra || {};
        i ? r[e] = s : Object.defineProperty(r, e, { enumerable: i, value: s });
      }
      isContextual(t) {
        return this.state.type === t && !this.state.containsEsc;
      }
      isUnparsedContextual(t, e) {
        let s = t + e.length;
        if (this.input.slice(t, s) === e) {
          let i = this.input.charCodeAt(s);
          return !(ee(i) || (i & 64512) === 55296);
        }
        return false;
      }
      isLookaheadContextual(t) {
        let e = this.nextTokenStart();
        return this.isUnparsedContextual(e, t);
      }
      eatContextual(t) {
        return this.isContextual(t) ? (this.next(), true) : false;
      }
      expectContextual(t, e) {
        if (!this.eatContextual(t)) {
          if (e != null)
            throw this.raise(e, { at: this.state.startLoc });
          this.unexpected(null, t);
        }
      }
      canInsertSemicolon() {
        return this.match(137) || this.match(8) || this.hasPrecedingLineBreak();
      }
      hasPrecedingLineBreak() {
        return as.test(this.input.slice(this.state.lastTokEndLoc.index, this.state.start));
      }
      hasFollowingLineBreak() {
        return jt.lastIndex = this.state.end, jt.test(this.input);
      }
      isLineTerminator() {
        return this.eat(13) || this.canInsertSemicolon();
      }
      semicolon(t = true) {
        (t ? this.isLineTerminator() : this.eat(13)) || this.raise(p.MissingSemicolon, { at: this.state.lastTokEndLoc });
      }
      expect(t, e) {
        this.eat(t) || this.unexpected(e, t);
      }
      tryParse(t, e = this.state.clone()) {
        let s = { node: null };
        try {
          let i = t((r = null) => {
            throw s.node = r, s;
          });
          if (this.state.errors.length > e.errors.length) {
            let r = this.state;
            return this.state = e, this.state.tokensLength = r.tokensLength, { node: i, error: r.errors[e.errors.length], thrown: false, aborted: false, failState: r };
          }
          return { node: i, error: null, thrown: false, aborted: false, failState: null };
        } catch (i) {
          let r = this.state;
          if (this.state = e, i instanceof SyntaxError)
            return { node: null, error: i, thrown: true, aborted: false, failState: r };
          if (i === s)
            return { node: s.node, error: null, thrown: false, aborted: true, failState: r };
          throw i;
        }
      }
      checkExpressionErrors(t, e) {
        if (!t)
          return false;
        let { shorthandAssignLoc: s, doubleProtoLoc: i, privateKeyLoc: r, optionalParametersLoc: n } = t, o = !!s || !!i || !!n || !!r;
        if (!e)
          return o;
        s != null && this.raise(p.InvalidCoverInitializedName, { at: s }), i != null && this.raise(p.DuplicateProto, { at: i }), r != null && this.raise(p.UnexpectedPrivateField, { at: r }), n != null && this.unexpected(n);
      }
      isLiteralPropertyName() {
        return Yt(this.state.type);
      }
      isPrivateName(t) {
        return t.type === "PrivateName";
      }
      getPrivateNameSV(t) {
        return t.id.name;
      }
      hasPropertyAsPrivateName(t) {
        return (t.type === "MemberExpression" || t.type === "OptionalMemberExpression") && this.isPrivateName(t.property);
      }
      isObjectProperty(t) {
        return t.type === "ObjectProperty";
      }
      isObjectMethod(t) {
        return t.type === "ObjectMethod";
      }
      initializeScopes(t = this.options.sourceType === "module") {
        let e = this.state.labels;
        this.state.labels = [];
        let s = this.exportedIdentifiers;
        this.exportedIdentifiers = /* @__PURE__ */ new Set();
        let i = this.inModule;
        this.inModule = t;
        let r = this.scope, n = this.getScopeHandler();
        this.scope = new n(this, t);
        let o = this.prodParam;
        this.prodParam = new pt();
        let h = this.classScope;
        this.classScope = new lt(this);
        let l = this.expressionScope;
        return this.expressionScope = new ct(this), () => {
          this.state.labels = e, this.exportedIdentifiers = s, this.inModule = i, this.scope = r, this.prodParam = o, this.classScope = h, this.expressionScope = l;
        };
      }
      enterInitialScopes() {
        let t = te;
        this.inModule && (t |= Re), this.scope.enter(1), this.prodParam.enter(t);
      }
      checkDestructuringPrivate(t) {
        let { privateKeyLoc: e } = t;
        e !== null && this.expectPlugin("destructuringPrivate", e);
      }
    }, se = class {
      constructor() {
        this.shorthandAssignLoc = null, this.doubleProtoLoc = null, this.privateKeyLoc = null, this.optionalParametersLoc = null;
      }
    }, ae = class {
      constructor(t, e, s) {
        this.type = "", this.start = e, this.end = 0, this.loc = new ie(s), t != null && t.options.ranges && (this.range = [e, 0]), t != null && t.filename && (this.loc.filename = t.filename);
      }
    }, Nt = ae.prototype;
    Nt.__clone = function() {
      let a = new ae(void 0, this.start, this.loc.start), t = Object.keys(this);
      for (let e = 0, s = t.length; e < s; e++) {
        let i = t[e];
        i !== "leadingComments" && i !== "trailingComments" && i !== "innerComments" && (a[i] = this[i]);
      }
      return a;
    };
    function Xi(a) {
      return V(a);
    }
    function V(a) {
      let { type: t, start: e, end: s, loc: i, range: r, extra: n, name: o } = a, h = Object.create(Nt);
      return h.type = t, h.start = e, h.end = s, h.loc = i, h.range = r, h.extra = n, h.name = o, t === "Placeholder" && (h.expectedNode = a.expectedNode), h;
    }
    function Gi(a) {
      let { type: t, start: e, end: s, loc: i, range: r, extra: n } = a;
      if (t === "Placeholder")
        return Xi(a);
      let o = Object.create(Nt);
      return o.type = t, o.start = e, o.end = s, o.loc = i, o.range = r, a.raw !== void 0 ? o.raw = a.raw : o.extra = n, o.value = a.value, o;
    }
    var dt = class extends ut {
      startNode() {
        return new ae(this, this.state.start, this.state.startLoc);
      }
      startNodeAt(t) {
        return new ae(this, t.index, t);
      }
      startNodeAtNode(t) {
        return this.startNodeAt(t.loc.start);
      }
      finishNode(t, e) {
        return this.finishNodeAt(t, e, this.state.lastTokEndLoc);
      }
      finishNodeAt(t, e, s) {
        return t.type = e, t.end = s.index, t.loc.end = s, this.options.ranges && (t.range[1] = s.index), this.options.attachComment && this.processComment(t), t;
      }
      resetStartLocation(t, e) {
        t.start = e.index, t.loc.start = e, this.options.ranges && (t.range[0] = e.index);
      }
      resetEndLocation(t, e = this.state.lastTokEndLoc) {
        t.end = e.index, t.loc.end = e, this.options.ranges && (t.range[1] = e.index);
      }
      resetStartLocationFromNode(t, e) {
        this.resetStartLocation(t, e.loc.start);
      }
    }, Yi = /* @__PURE__ */ new Set(["_", "any", "bool", "boolean", "empty", "extends", "false", "interface", "mixed", "null", "number", "static", "string", "true", "typeof", "void"]), g = $`flow`({ AmbiguousConditionalArrow: "Ambiguous expression: wrap the arrow functions in parentheses to disambiguate.", AmbiguousDeclareModuleKind: "Found both `declare module.exports` and `declare export` in the same module. Modules can only have 1 since they are either an ES module or they are a CommonJS module.", AssignReservedType: ({ reservedType: a }) => `Cannot overwrite reserved type ${a}.`, DeclareClassElement: "The `declare` modifier can only appear on class fields.", DeclareClassFieldInitializer: "Initializers are not allowed in fields with the `declare` modifier.", DuplicateDeclareModuleExports: "Duplicate `declare module.exports` statement.", EnumBooleanMemberNotInitialized: ({ memberName: a, enumName: t }) => `Boolean enum members need to be initialized. Use either \`${a} = true,\` or \`${a} = false,\` in enum \`${t}\`.`, EnumDuplicateMemberName: ({ memberName: a, enumName: t }) => `Enum member names need to be unique, but the name \`${a}\` has already been used before in enum \`${t}\`.`, EnumInconsistentMemberValues: ({ enumName: a }) => `Enum \`${a}\` has inconsistent member initializers. Either use no initializers, or consistently use literals (either booleans, numbers, or strings) for all member initializers.`, EnumInvalidExplicitType: ({ invalidEnumType: a, enumName: t }) => `Enum type \`${a}\` is not valid. Use one of \`boolean\`, \`number\`, \`string\`, or \`symbol\` in enum \`${t}\`.`, EnumInvalidExplicitTypeUnknownSupplied: ({ enumName: a }) => `Supplied enum type is not valid. Use one of \`boolean\`, \`number\`, \`string\`, or \`symbol\` in enum \`${a}\`.`, EnumInvalidMemberInitializerPrimaryType: ({ enumName: a, memberName: t, explicitType: e }) => `Enum \`${a}\` has type \`${e}\`, so the initializer of \`${t}\` needs to be a ${e} literal.`, EnumInvalidMemberInitializerSymbolType: ({ enumName: a, memberName: t }) => `Symbol enum members cannot be initialized. Use \`${t},\` in enum \`${a}\`.`, EnumInvalidMemberInitializerUnknownType: ({ enumName: a, memberName: t }) => `The enum member initializer for \`${t}\` needs to be a literal (either a boolean, number, or string) in enum \`${a}\`.`, EnumInvalidMemberName: ({ enumName: a, memberName: t, suggestion: e }) => `Enum member names cannot start with lowercase 'a' through 'z'. Instead of using \`${t}\`, consider using \`${e}\`, in enum \`${a}\`.`, EnumNumberMemberNotInitialized: ({ enumName: a, memberName: t }) => `Number enum members need to be initialized, e.g. \`${t} = 1\` in enum \`${a}\`.`, EnumStringMemberInconsistentlyInitailized: ({ enumName: a }) => `String enum members need to consistently either all use initializers, or use no initializers, in enum \`${a}\`.`, GetterMayNotHaveThisParam: "A getter cannot have a `this` parameter.", ImportReflectionHasImportType: "An `import module` declaration can not use `type` or `typeof` keyword.", ImportTypeShorthandOnlyInPureImport: "The `type` and `typeof` keywords on named imports can only be used on regular `import` statements. It cannot be used with `import type` or `import typeof` statements.", InexactInsideExact: "Explicit inexact syntax cannot appear inside an explicit exact object type.", InexactInsideNonObject: "Explicit inexact syntax cannot appear in class or interface definitions.", InexactVariance: "Explicit inexact syntax cannot have variance.", InvalidNonTypeImportInDeclareModule: "Imports within a `declare module` body must always be `import type` or `import typeof`.", MissingTypeParamDefault: "Type parameter declaration needs a default, since a preceding type parameter declaration has a default.", NestedDeclareModule: "`declare module` cannot be used inside another `declare module`.", NestedFlowComment: "Cannot have a flow comment inside another flow comment.", PatternIsOptional: Object.assign({ message: "A binding pattern parameter cannot be optional in an implementation signature." }, { reasonCode: "OptionalBindingPattern" }), SetterMayNotHaveThisParam: "A setter cannot have a `this` parameter.", SpreadVariance: "Spread properties cannot have variance.", ThisParamAnnotationRequired: "A type annotation is required for the `this` parameter.", ThisParamBannedInConstructor: "Constructors cannot have a `this` parameter; constructors don't bind `this` like other functions.", ThisParamMayNotBeOptional: "The `this` parameter cannot be optional.", ThisParamMustBeFirst: "The `this` parameter must be the first function parameter.", ThisParamNoDefault: "The `this` parameter may not have a default value.", TypeBeforeInitializer: "Type annotations must come before default assignments, e.g. instead of `age = 25: number` use `age: number = 25`.", TypeCastInPattern: "The type cast expression is expected to be wrapped with parenthesis.", UnexpectedExplicitInexactInObject: "Explicit inexact syntax must appear at the end of an inexact object.", UnexpectedReservedType: ({ reservedType: a }) => `Unexpected reserved type ${a}.`, UnexpectedReservedUnderscore: "`_` is only allowed as a type argument to call or new.", UnexpectedSpaceBetweenModuloChecks: "Spaces between `%` and `checks` are not allowed here.", UnexpectedSpreadType: "Spread operator cannot appear in class or interface definitions.", UnexpectedSubtractionOperand: 'Unexpected token, expected "number" or "bigint".', UnexpectedTokenAfterTypeParameter: "Expected an arrow function after this type parameter declaration.", UnexpectedTypeParameterBeforeAsyncArrowFunction: "Type parameters must come after the async keyword, e.g. instead of `<T> async () => {}`, use `async <T>() => {}`.", UnsupportedDeclareExportKind: ({ unsupportedExportKind: a, suggestion: t }) => `\`declare export ${a}\` is not supported. Use \`${t}\` instead.`, UnsupportedStatementInDeclareModule: "Only declares and type imports are allowed inside declare module.", UnterminatedFlowComment: "Unterminated flow-comment." });
    function Qi(a) {
      return a.type === "DeclareExportAllDeclaration" || a.type === "DeclareExportDeclaration" && (!a.declaration || a.declaration.type !== "TypeAlias" && a.declaration.type !== "InterfaceDeclaration");
    }
    function zt(a) {
      return a.importKind === "type" || a.importKind === "typeof";
    }
    var Zi = { const: "declare export var", let: "declare export var", type: "export type", interface: "export interface" };
    function er(a, t) {
      let e = [], s = [];
      for (let i = 0; i < a.length; i++)
        (t(a[i], i, a) ? e : s).push(a[i]);
      return [e, s];
    }
    var tr = /\*?\s*@((?:no)?flow)\b/, sr = (a) => class extends a {
      constructor(...e) {
        super(...e), this.flowPragma = void 0;
      }
      getScopeHandler() {
        return st;
      }
      shouldParseTypes() {
        return this.getPluginOption("flow", "all") || this.flowPragma === "flow";
      }
      shouldParseEnums() {
        return !!this.getPluginOption("flow", "enums");
      }
      finishToken(e, s) {
        e !== 131 && e !== 13 && e !== 28 && this.flowPragma === void 0 && (this.flowPragma = null), super.finishToken(e, s);
      }
      addComment(e) {
        if (this.flowPragma === void 0) {
          let s = tr.exec(e.value);
          if (s)
            if (s[1] === "flow")
              this.flowPragma = "flow";
            else if (s[1] === "noflow")
              this.flowPragma = "noflow";
            else
              throw new Error("Unexpected flow pragma");
        }
        super.addComment(e);
      }
      flowParseTypeInitialiser(e) {
        let s = this.state.inType;
        this.state.inType = true, this.expect(e || 14);
        let i = this.flowParseType();
        return this.state.inType = s, i;
      }
      flowParsePredicate() {
        let e = this.startNode(), s = this.state.startLoc;
        return this.next(), this.expectContextual(108), this.state.lastTokStart > s.index + 1 && this.raise(g.UnexpectedSpaceBetweenModuloChecks, { at: s }), this.eat(10) ? (e.value = super.parseExpression(), this.expect(11), this.finishNode(e, "DeclaredPredicate")) : this.finishNode(e, "InferredPredicate");
      }
      flowParseTypeAndPredicateInitialiser() {
        let e = this.state.inType;
        this.state.inType = true, this.expect(14);
        let s = null, i = null;
        return this.match(54) ? (this.state.inType = e, i = this.flowParsePredicate()) : (s = this.flowParseType(), this.state.inType = e, this.match(54) && (i = this.flowParsePredicate())), [s, i];
      }
      flowParseDeclareClass(e) {
        return this.next(), this.flowParseInterfaceish(e, true), this.finishNode(e, "DeclareClass");
      }
      flowParseDeclareFunction(e) {
        this.next();
        let s = e.id = this.parseIdentifier(), i = this.startNode(), r = this.startNode();
        this.match(47) ? i.typeParameters = this.flowParseTypeParameterDeclaration() : i.typeParameters = null, this.expect(10);
        let n = this.flowParseFunctionTypeParams();
        return i.params = n.params, i.rest = n.rest, i.this = n._this, this.expect(11), [i.returnType, e.predicate] = this.flowParseTypeAndPredicateInitialiser(), r.typeAnnotation = this.finishNode(i, "FunctionTypeAnnotation"), s.typeAnnotation = this.finishNode(r, "TypeAnnotation"), this.resetEndLocation(s), this.semicolon(), this.scope.declareName(e.id.name, 2048, e.id.loc.start), this.finishNode(e, "DeclareFunction");
      }
      flowParseDeclare(e, s) {
        if (this.match(80))
          return this.flowParseDeclareClass(e);
        if (this.match(68))
          return this.flowParseDeclareFunction(e);
        if (this.match(74))
          return this.flowParseDeclareVariable(e);
        if (this.eatContextual(125))
          return this.match(16) ? this.flowParseDeclareModuleExports(e) : (s && this.raise(g.NestedDeclareModule, { at: this.state.lastTokStartLoc }), this.flowParseDeclareModule(e));
        if (this.isContextual(128))
          return this.flowParseDeclareTypeAlias(e);
        if (this.isContextual(129))
          return this.flowParseDeclareOpaqueType(e);
        if (this.isContextual(127))
          return this.flowParseDeclareInterface(e);
        if (this.match(82))
          return this.flowParseDeclareExportDeclaration(e, s);
        this.unexpected();
      }
      flowParseDeclareVariable(e) {
        return this.next(), e.id = this.flowParseTypeAnnotatableIdentifier(true), this.scope.declareName(e.id.name, 5, e.id.loc.start), this.semicolon(), this.finishNode(e, "DeclareVariable");
      }
      flowParseDeclareModule(e) {
        this.scope.enter(0), this.match(131) ? e.id = super.parseExprAtom() : e.id = this.parseIdentifier();
        let s = e.body = this.startNode(), i = s.body = [];
        for (this.expect(5); !this.match(8); ) {
          let o = this.startNode();
          this.match(83) ? (this.next(), !this.isContextual(128) && !this.match(87) && this.raise(g.InvalidNonTypeImportInDeclareModule, { at: this.state.lastTokStartLoc }), super.parseImport(o)) : (this.expectContextual(123, g.UnsupportedStatementInDeclareModule), o = this.flowParseDeclare(o, true)), i.push(o);
        }
        this.scope.exit(), this.expect(8), this.finishNode(s, "BlockStatement");
        let r = null, n = false;
        return i.forEach((o) => {
          Qi(o) ? (r === "CommonJS" && this.raise(g.AmbiguousDeclareModuleKind, { at: o }), r = "ES") : o.type === "DeclareModuleExports" && (n && this.raise(g.DuplicateDeclareModuleExports, { at: o }), r === "ES" && this.raise(g.AmbiguousDeclareModuleKind, { at: o }), r = "CommonJS", n = true);
        }), e.kind = r || "CommonJS", this.finishNode(e, "DeclareModule");
      }
      flowParseDeclareExportDeclaration(e, s) {
        if (this.expect(82), this.eat(65))
          return this.match(68) || this.match(80) ? e.declaration = this.flowParseDeclare(this.startNode()) : (e.declaration = this.flowParseType(), this.semicolon()), e.default = true, this.finishNode(e, "DeclareExportDeclaration");
        if (this.match(75) || this.isLet() || (this.isContextual(128) || this.isContextual(127)) && !s) {
          let i = this.state.value;
          throw this.raise(g.UnsupportedDeclareExportKind, { at: this.state.startLoc, unsupportedExportKind: i, suggestion: Zi[i] });
        }
        if (this.match(74) || this.match(68) || this.match(80) || this.isContextual(129))
          return e.declaration = this.flowParseDeclare(this.startNode()), e.default = false, this.finishNode(e, "DeclareExportDeclaration");
        if (this.match(55) || this.match(5) || this.isContextual(127) || this.isContextual(128) || this.isContextual(129))
          return e = this.parseExport(e, null), e.type === "ExportNamedDeclaration" && (e.type = "ExportDeclaration", e.default = false, delete e.exportKind), e.type = "Declare" + e.type, e;
        this.unexpected();
      }
      flowParseDeclareModuleExports(e) {
        return this.next(), this.expectContextual(109), e.typeAnnotation = this.flowParseTypeAnnotation(), this.semicolon(), this.finishNode(e, "DeclareModuleExports");
      }
      flowParseDeclareTypeAlias(e) {
        this.next();
        let s = this.flowParseTypeAlias(e);
        return s.type = "DeclareTypeAlias", s;
      }
      flowParseDeclareOpaqueType(e) {
        this.next();
        let s = this.flowParseOpaqueType(e, true);
        return s.type = "DeclareOpaqueType", s;
      }
      flowParseDeclareInterface(e) {
        return this.next(), this.flowParseInterfaceish(e, false), this.finishNode(e, "DeclareInterface");
      }
      flowParseInterfaceish(e, s) {
        if (e.id = this.flowParseRestrictedIdentifier(!s, true), this.scope.declareName(e.id.name, s ? 17 : 8201, e.id.loc.start), this.match(47) ? e.typeParameters = this.flowParseTypeParameterDeclaration() : e.typeParameters = null, e.extends = [], this.eat(81))
          do
            e.extends.push(this.flowParseInterfaceExtends());
          while (!s && this.eat(12));
        if (s) {
          if (e.implements = [], e.mixins = [], this.eatContextual(115))
            do
              e.mixins.push(this.flowParseInterfaceExtends());
            while (this.eat(12));
          if (this.eatContextual(111))
            do
              e.implements.push(this.flowParseInterfaceExtends());
            while (this.eat(12));
        }
        e.body = this.flowParseObjectType({ allowStatic: s, allowExact: false, allowSpread: false, allowProto: s, allowInexact: false });
      }
      flowParseInterfaceExtends() {
        let e = this.startNode();
        return e.id = this.flowParseQualifiedTypeIdentifier(), this.match(47) ? e.typeParameters = this.flowParseTypeParameterInstantiation() : e.typeParameters = null, this.finishNode(e, "InterfaceExtends");
      }
      flowParseInterface(e) {
        return this.flowParseInterfaceish(e, false), this.finishNode(e, "InterfaceDeclaration");
      }
      checkNotUnderscore(e) {
        e === "_" && this.raise(g.UnexpectedReservedUnderscore, { at: this.state.startLoc });
      }
      checkReservedType(e, s, i) {
        Yi.has(e) && this.raise(i ? g.AssignReservedType : g.UnexpectedReservedType, { at: s, reservedType: e });
      }
      flowParseRestrictedIdentifier(e, s) {
        return this.checkReservedType(this.state.value, this.state.startLoc, s), this.parseIdentifier(e);
      }
      flowParseTypeAlias(e) {
        return e.id = this.flowParseRestrictedIdentifier(false, true), this.scope.declareName(e.id.name, 8201, e.id.loc.start), this.match(47) ? e.typeParameters = this.flowParseTypeParameterDeclaration() : e.typeParameters = null, e.right = this.flowParseTypeInitialiser(29), this.semicolon(), this.finishNode(e, "TypeAlias");
      }
      flowParseOpaqueType(e, s) {
        return this.expectContextual(128), e.id = this.flowParseRestrictedIdentifier(true, true), this.scope.declareName(e.id.name, 8201, e.id.loc.start), this.match(47) ? e.typeParameters = this.flowParseTypeParameterDeclaration() : e.typeParameters = null, e.supertype = null, this.match(14) && (e.supertype = this.flowParseTypeInitialiser(14)), e.impltype = null, s || (e.impltype = this.flowParseTypeInitialiser(29)), this.semicolon(), this.finishNode(e, "OpaqueType");
      }
      flowParseTypeParameter(e = false) {
        let s = this.state.startLoc, i = this.startNode(), r = this.flowParseVariance(), n = this.flowParseTypeAnnotatableIdentifier();
        return i.name = n.name, i.variance = r, i.bound = n.typeAnnotation, this.match(29) ? (this.eat(29), i.default = this.flowParseType()) : e && this.raise(g.MissingTypeParamDefault, { at: s }), this.finishNode(i, "TypeParameter");
      }
      flowParseTypeParameterDeclaration() {
        let e = this.state.inType, s = this.startNode();
        s.params = [], this.state.inType = true, this.match(47) || this.match(140) ? this.next() : this.unexpected();
        let i = false;
        do {
          let r = this.flowParseTypeParameter(i);
          s.params.push(r), r.default && (i = true), this.match(48) || this.expect(12);
        } while (!this.match(48));
        return this.expect(48), this.state.inType = e, this.finishNode(s, "TypeParameterDeclaration");
      }
      flowParseTypeParameterInstantiation() {
        let e = this.startNode(), s = this.state.inType;
        e.params = [], this.state.inType = true, this.expect(47);
        let i = this.state.noAnonFunctionType;
        for (this.state.noAnonFunctionType = false; !this.match(48); )
          e.params.push(this.flowParseType()), this.match(48) || this.expect(12);
        return this.state.noAnonFunctionType = i, this.expect(48), this.state.inType = s, this.finishNode(e, "TypeParameterInstantiation");
      }
      flowParseTypeParameterInstantiationCallOrNew() {
        let e = this.startNode(), s = this.state.inType;
        for (e.params = [], this.state.inType = true, this.expect(47); !this.match(48); )
          e.params.push(this.flowParseTypeOrImplicitInstantiation()), this.match(48) || this.expect(12);
        return this.expect(48), this.state.inType = s, this.finishNode(e, "TypeParameterInstantiation");
      }
      flowParseInterfaceType() {
        let e = this.startNode();
        if (this.expectContextual(127), e.extends = [], this.eat(81))
          do
            e.extends.push(this.flowParseInterfaceExtends());
          while (this.eat(12));
        return e.body = this.flowParseObjectType({ allowStatic: false, allowExact: false, allowSpread: false, allowProto: false, allowInexact: false }), this.finishNode(e, "InterfaceTypeAnnotation");
      }
      flowParseObjectPropertyKey() {
        return this.match(132) || this.match(131) ? super.parseExprAtom() : this.parseIdentifier(true);
      }
      flowParseObjectTypeIndexer(e, s, i) {
        return e.static = s, this.lookahead().type === 14 ? (e.id = this.flowParseObjectPropertyKey(), e.key = this.flowParseTypeInitialiser()) : (e.id = null, e.key = this.flowParseType()), this.expect(3), e.value = this.flowParseTypeInitialiser(), e.variance = i, this.finishNode(e, "ObjectTypeIndexer");
      }
      flowParseObjectTypeInternalSlot(e, s) {
        return e.static = s, e.id = this.flowParseObjectPropertyKey(), this.expect(3), this.expect(3), this.match(47) || this.match(10) ? (e.method = true, e.optional = false, e.value = this.flowParseObjectTypeMethodish(this.startNodeAt(e.loc.start))) : (e.method = false, this.eat(17) && (e.optional = true), e.value = this.flowParseTypeInitialiser()), this.finishNode(e, "ObjectTypeInternalSlot");
      }
      flowParseObjectTypeMethodish(e) {
        for (e.params = [], e.rest = null, e.typeParameters = null, e.this = null, this.match(47) && (e.typeParameters = this.flowParseTypeParameterDeclaration()), this.expect(10), this.match(78) && (e.this = this.flowParseFunctionTypeParam(true), e.this.name = null, this.match(11) || this.expect(12)); !this.match(11) && !this.match(21); )
          e.params.push(this.flowParseFunctionTypeParam(false)), this.match(11) || this.expect(12);
        return this.eat(21) && (e.rest = this.flowParseFunctionTypeParam(false)), this.expect(11), e.returnType = this.flowParseTypeInitialiser(), this.finishNode(e, "FunctionTypeAnnotation");
      }
      flowParseObjectTypeCallProperty(e, s) {
        let i = this.startNode();
        return e.static = s, e.value = this.flowParseObjectTypeMethodish(i), this.finishNode(e, "ObjectTypeCallProperty");
      }
      flowParseObjectType({ allowStatic: e, allowExact: s, allowSpread: i, allowProto: r, allowInexact: n }) {
        let o = this.state.inType;
        this.state.inType = true;
        let h = this.startNode();
        h.callProperties = [], h.properties = [], h.indexers = [], h.internalSlots = [];
        let l, c, u = false;
        for (s && this.match(6) ? (this.expect(6), l = 9, c = true) : (this.expect(5), l = 8, c = false), h.exact = c; !this.match(l); ) {
          let d = false, x = null, I = null, C = this.startNode();
          if (r && this.isContextual(116)) {
            let N = this.lookahead();
            N.type !== 14 && N.type !== 17 && (this.next(), x = this.state.startLoc, e = false);
          }
          if (e && this.isContextual(104)) {
            let N = this.lookahead();
            N.type !== 14 && N.type !== 17 && (this.next(), d = true);
          }
          let E = this.flowParseVariance();
          if (this.eat(0))
            x != null && this.unexpected(x), this.eat(0) ? (E && this.unexpected(E.loc.start), h.internalSlots.push(this.flowParseObjectTypeInternalSlot(C, d))) : h.indexers.push(this.flowParseObjectTypeIndexer(C, d, E));
          else if (this.match(10) || this.match(47))
            x != null && this.unexpected(x), E && this.unexpected(E.loc.start), h.callProperties.push(this.flowParseObjectTypeCallProperty(C, d));
          else {
            let N = "init";
            if (this.isContextual(98) || this.isContextual(103)) {
              let ce = this.lookahead();
              Yt(ce.type) && (N = this.state.value, this.next());
            }
            let Ee = this.flowParseObjectTypeProperty(C, d, x, E, N, i, n ?? !c);
            Ee === null ? (u = true, I = this.state.lastTokStartLoc) : h.properties.push(Ee);
          }
          this.flowObjectTypeSemicolon(), I && !this.match(8) && !this.match(9) && this.raise(g.UnexpectedExplicitInexactInObject, { at: I });
        }
        this.expect(l), i && (h.inexact = u);
        let f = this.finishNode(h, "ObjectTypeAnnotation");
        return this.state.inType = o, f;
      }
      flowParseObjectTypeProperty(e, s, i, r, n, o, h) {
        if (this.eat(21))
          return this.match(12) || this.match(13) || this.match(8) || this.match(9) ? (o ? h || this.raise(g.InexactInsideExact, { at: this.state.lastTokStartLoc }) : this.raise(g.InexactInsideNonObject, { at: this.state.lastTokStartLoc }), r && this.raise(g.InexactVariance, { at: r }), null) : (o || this.raise(g.UnexpectedSpreadType, { at: this.state.lastTokStartLoc }), i != null && this.unexpected(i), r && this.raise(g.SpreadVariance, { at: r }), e.argument = this.flowParseType(), this.finishNode(e, "ObjectTypeSpreadProperty"));
        {
          e.key = this.flowParseObjectPropertyKey(), e.static = s, e.proto = i != null, e.kind = n;
          let l = false;
          return this.match(47) || this.match(10) ? (e.method = true, i != null && this.unexpected(i), r && this.unexpected(r.loc.start), e.value = this.flowParseObjectTypeMethodish(this.startNodeAt(e.loc.start)), (n === "get" || n === "set") && this.flowCheckGetterSetterParams(e), !o && e.key.name === "constructor" && e.value.this && this.raise(g.ThisParamBannedInConstructor, { at: e.value.this })) : (n !== "init" && this.unexpected(), e.method = false, this.eat(17) && (l = true), e.value = this.flowParseTypeInitialiser(), e.variance = r), e.optional = l, this.finishNode(e, "ObjectTypeProperty");
        }
      }
      flowCheckGetterSetterParams(e) {
        let s = e.kind === "get" ? 0 : 1, i = e.value.params.length + (e.value.rest ? 1 : 0);
        e.value.this && this.raise(e.kind === "get" ? g.GetterMayNotHaveThisParam : g.SetterMayNotHaveThisParam, { at: e.value.this }), i !== s && this.raise(e.kind === "get" ? p.BadGetterArity : p.BadSetterArity, { at: e }), e.kind === "set" && e.value.rest && this.raise(p.BadSetterRestParameter, { at: e });
      }
      flowObjectTypeSemicolon() {
        !this.eat(13) && !this.eat(12) && !this.match(8) && !this.match(9) && this.unexpected();
      }
      flowParseQualifiedTypeIdentifier(e, s) {
        e != null || (e = this.state.startLoc);
        let r = s || this.flowParseRestrictedIdentifier(true);
        for (; this.eat(16); ) {
          let n = this.startNodeAt(e);
          n.qualification = r, n.id = this.flowParseRestrictedIdentifier(true), r = this.finishNode(n, "QualifiedTypeIdentifier");
        }
        return r;
      }
      flowParseGenericType(e, s) {
        let i = this.startNodeAt(e);
        return i.typeParameters = null, i.id = this.flowParseQualifiedTypeIdentifier(e, s), this.match(47) && (i.typeParameters = this.flowParseTypeParameterInstantiation()), this.finishNode(i, "GenericTypeAnnotation");
      }
      flowParseTypeofType() {
        let e = this.startNode();
        return this.expect(87), e.argument = this.flowParsePrimaryType(), this.finishNode(e, "TypeofTypeAnnotation");
      }
      flowParseTupleType() {
        let e = this.startNode();
        for (e.types = [], this.expect(0); this.state.pos < this.length && !this.match(3) && (e.types.push(this.flowParseType()), !this.match(3)); )
          this.expect(12);
        return this.expect(3), this.finishNode(e, "TupleTypeAnnotation");
      }
      flowParseFunctionTypeParam(e) {
        let s = null, i = false, r = null, n = this.startNode(), o = this.lookahead(), h = this.state.type === 78;
        return o.type === 14 || o.type === 17 ? (h && !e && this.raise(g.ThisParamMustBeFirst, { at: n }), s = this.parseIdentifier(h), this.eat(17) && (i = true, h && this.raise(g.ThisParamMayNotBeOptional, { at: n })), r = this.flowParseTypeInitialiser()) : r = this.flowParseType(), n.name = s, n.optional = i, n.typeAnnotation = r, this.finishNode(n, "FunctionTypeParam");
      }
      reinterpretTypeAsFunctionTypeParam(e) {
        let s = this.startNodeAt(e.loc.start);
        return s.name = null, s.optional = false, s.typeAnnotation = e, this.finishNode(s, "FunctionTypeParam");
      }
      flowParseFunctionTypeParams(e = []) {
        let s = null, i = null;
        for (this.match(78) && (i = this.flowParseFunctionTypeParam(true), i.name = null, this.match(11) || this.expect(12)); !this.match(11) && !this.match(21); )
          e.push(this.flowParseFunctionTypeParam(false)), this.match(11) || this.expect(12);
        return this.eat(21) && (s = this.flowParseFunctionTypeParam(false)), { params: e, rest: s, _this: i };
      }
      flowIdentToTypeAnnotation(e, s, i) {
        switch (i.name) {
          case "any":
            return this.finishNode(s, "AnyTypeAnnotation");
          case "bool":
          case "boolean":
            return this.finishNode(s, "BooleanTypeAnnotation");
          case "mixed":
            return this.finishNode(s, "MixedTypeAnnotation");
          case "empty":
            return this.finishNode(s, "EmptyTypeAnnotation");
          case "number":
            return this.finishNode(s, "NumberTypeAnnotation");
          case "string":
            return this.finishNode(s, "StringTypeAnnotation");
          case "symbol":
            return this.finishNode(s, "SymbolTypeAnnotation");
          default:
            return this.checkNotUnderscore(i.name), this.flowParseGenericType(e, i);
        }
      }
      flowParsePrimaryType() {
        let e = this.state.startLoc, s = this.startNode(), i, r, n = false, o = this.state.noAnonFunctionType;
        switch (this.state.type) {
          case 5:
            return this.flowParseObjectType({ allowStatic: false, allowExact: false, allowSpread: true, allowProto: false, allowInexact: true });
          case 6:
            return this.flowParseObjectType({ allowStatic: false, allowExact: true, allowSpread: true, allowProto: false, allowInexact: false });
          case 0:
            return this.state.noAnonFunctionType = false, r = this.flowParseTupleType(), this.state.noAnonFunctionType = o, r;
          case 47:
            return s.typeParameters = this.flowParseTypeParameterDeclaration(), this.expect(10), i = this.flowParseFunctionTypeParams(), s.params = i.params, s.rest = i.rest, s.this = i._this, this.expect(11), this.expect(19), s.returnType = this.flowParseType(), this.finishNode(s, "FunctionTypeAnnotation");
          case 10:
            if (this.next(), !this.match(11) && !this.match(21))
              if (S(this.state.type) || this.match(78)) {
                let h = this.lookahead().type;
                n = h !== 17 && h !== 14;
              } else
                n = true;
            if (n) {
              if (this.state.noAnonFunctionType = false, r = this.flowParseType(), this.state.noAnonFunctionType = o, this.state.noAnonFunctionType || !(this.match(12) || this.match(11) && this.lookahead().type === 19))
                return this.expect(11), r;
              this.eat(12);
            }
            return r ? i = this.flowParseFunctionTypeParams([this.reinterpretTypeAsFunctionTypeParam(r)]) : i = this.flowParseFunctionTypeParams(), s.params = i.params, s.rest = i.rest, s.this = i._this, this.expect(11), this.expect(19), s.returnType = this.flowParseType(), s.typeParameters = null, this.finishNode(s, "FunctionTypeAnnotation");
          case 131:
            return this.parseLiteral(this.state.value, "StringLiteralTypeAnnotation");
          case 85:
          case 86:
            return s.value = this.match(85), this.next(), this.finishNode(s, "BooleanLiteralTypeAnnotation");
          case 53:
            if (this.state.value === "-") {
              if (this.next(), this.match(132))
                return this.parseLiteralAtNode(-this.state.value, "NumberLiteralTypeAnnotation", s);
              if (this.match(133))
                return this.parseLiteralAtNode(-this.state.value, "BigIntLiteralTypeAnnotation", s);
              throw this.raise(g.UnexpectedSubtractionOperand, { at: this.state.startLoc });
            }
            this.unexpected();
            return;
          case 132:
            return this.parseLiteral(this.state.value, "NumberLiteralTypeAnnotation");
          case 133:
            return this.parseLiteral(this.state.value, "BigIntLiteralTypeAnnotation");
          case 88:
            return this.next(), this.finishNode(s, "VoidTypeAnnotation");
          case 84:
            return this.next(), this.finishNode(s, "NullLiteralTypeAnnotation");
          case 78:
            return this.next(), this.finishNode(s, "ThisTypeAnnotation");
          case 55:
            return this.next(), this.finishNode(s, "ExistsTypeAnnotation");
          case 87:
            return this.flowParseTypeofType();
          default:
            if (Ct(this.state.type)) {
              let h = q(this.state.type);
              return this.next(), super.createIdentifier(s, h);
            } else if (S(this.state.type))
              return this.isContextual(127) ? this.flowParseInterfaceType() : this.flowIdentToTypeAnnotation(e, s, this.parseIdentifier());
        }
        this.unexpected();
      }
      flowParsePostfixType() {
        let e = this.state.startLoc, s = this.flowParsePrimaryType(), i = false;
        for (; (this.match(0) || this.match(18)) && !this.canInsertSemicolon(); ) {
          let r = this.startNodeAt(e), n = this.eat(18);
          i = i || n, this.expect(0), !n && this.match(3) ? (r.elementType = s, this.next(), s = this.finishNode(r, "ArrayTypeAnnotation")) : (r.objectType = s, r.indexType = this.flowParseType(), this.expect(3), i ? (r.optional = n, s = this.finishNode(r, "OptionalIndexedAccessType")) : s = this.finishNode(r, "IndexedAccessType"));
        }
        return s;
      }
      flowParsePrefixType() {
        let e = this.startNode();
        return this.eat(17) ? (e.typeAnnotation = this.flowParsePrefixType(), this.finishNode(e, "NullableTypeAnnotation")) : this.flowParsePostfixType();
      }
      flowParseAnonFunctionWithoutParens() {
        let e = this.flowParsePrefixType();
        if (!this.state.noAnonFunctionType && this.eat(19)) {
          let s = this.startNodeAt(e.loc.start);
          return s.params = [this.reinterpretTypeAsFunctionTypeParam(e)], s.rest = null, s.this = null, s.returnType = this.flowParseType(), s.typeParameters = null, this.finishNode(s, "FunctionTypeAnnotation");
        }
        return e;
      }
      flowParseIntersectionType() {
        let e = this.startNode();
        this.eat(45);
        let s = this.flowParseAnonFunctionWithoutParens();
        for (e.types = [s]; this.eat(45); )
          e.types.push(this.flowParseAnonFunctionWithoutParens());
        return e.types.length === 1 ? s : this.finishNode(e, "IntersectionTypeAnnotation");
      }
      flowParseUnionType() {
        let e = this.startNode();
        this.eat(43);
        let s = this.flowParseIntersectionType();
        for (e.types = [s]; this.eat(43); )
          e.types.push(this.flowParseIntersectionType());
        return e.types.length === 1 ? s : this.finishNode(e, "UnionTypeAnnotation");
      }
      flowParseType() {
        let e = this.state.inType;
        this.state.inType = true;
        let s = this.flowParseUnionType();
        return this.state.inType = e, s;
      }
      flowParseTypeOrImplicitInstantiation() {
        if (this.state.type === 130 && this.state.value === "_") {
          let e = this.state.startLoc, s = this.parseIdentifier();
          return this.flowParseGenericType(e, s);
        } else
          return this.flowParseType();
      }
      flowParseTypeAnnotation() {
        let e = this.startNode();
        return e.typeAnnotation = this.flowParseTypeInitialiser(), this.finishNode(e, "TypeAnnotation");
      }
      flowParseTypeAnnotatableIdentifier(e) {
        let s = e ? this.parseIdentifier() : this.flowParseRestrictedIdentifier();
        return this.match(14) && (s.typeAnnotation = this.flowParseTypeAnnotation(), this.resetEndLocation(s)), s;
      }
      typeCastToParameter(e) {
        return e.expression.typeAnnotation = e.typeAnnotation, this.resetEndLocation(e.expression, e.typeAnnotation.loc.end), e.expression;
      }
      flowParseVariance() {
        let e = null;
        return this.match(53) ? (e = this.startNode(), this.state.value === "+" ? e.kind = "plus" : e.kind = "minus", this.next(), this.finishNode(e, "Variance")) : e;
      }
      parseFunctionBody(e, s, i = false) {
        if (s) {
          this.forwardNoArrowParamsConversionAt(e, () => super.parseFunctionBody(e, true, i));
          return;
        }
        super.parseFunctionBody(e, false, i);
      }
      parseFunctionBodyAndFinish(e, s, i = false) {
        if (this.match(14)) {
          let r = this.startNode();
          [r.typeAnnotation, e.predicate] = this.flowParseTypeAndPredicateInitialiser(), e.returnType = r.typeAnnotation ? this.finishNode(r, "TypeAnnotation") : null;
        }
        return super.parseFunctionBodyAndFinish(e, s, i);
      }
      parseStatementLike(e) {
        if (this.state.strict && this.isContextual(127)) {
          let i = this.lookahead();
          if (M(i.type)) {
            let r = this.startNode();
            return this.next(), this.flowParseInterface(r);
          }
        } else if (this.shouldParseEnums() && this.isContextual(124)) {
          let i = this.startNode();
          return this.next(), this.flowParseEnumDeclaration(i);
        }
        let s = super.parseStatementLike(e);
        return this.flowPragma === void 0 && !this.isValidDirective(s) && (this.flowPragma = null), s;
      }
      parseExpressionStatement(e, s, i) {
        if (s.type === "Identifier") {
          if (s.name === "declare") {
            if (this.match(80) || S(this.state.type) || this.match(68) || this.match(74) || this.match(82))
              return this.flowParseDeclare(e);
          } else if (S(this.state.type)) {
            if (s.name === "interface")
              return this.flowParseInterface(e);
            if (s.name === "type")
              return this.flowParseTypeAlias(e);
            if (s.name === "opaque")
              return this.flowParseOpaqueType(e, false);
          }
        }
        return super.parseExpressionStatement(e, s, i);
      }
      shouldParseExportDeclaration() {
        let { type: e } = this.state;
        return Ut(e) || this.shouldParseEnums() && e === 124 ? !this.state.containsEsc : super.shouldParseExportDeclaration();
      }
      isExportDefaultSpecifier() {
        let { type: e } = this.state;
        return Ut(e) || this.shouldParseEnums() && e === 124 ? this.state.containsEsc : super.isExportDefaultSpecifier();
      }
      parseExportDefaultExpression() {
        if (this.shouldParseEnums() && this.isContextual(124)) {
          let e = this.startNode();
          return this.next(), this.flowParseEnumDeclaration(e);
        }
        return super.parseExportDefaultExpression();
      }
      parseConditional(e, s, i) {
        if (!this.match(17))
          return e;
        if (this.state.maybeInArrowParameters) {
          let f = this.lookaheadCharCode();
          if (f === 44 || f === 61 || f === 58 || f === 41)
            return this.setOptionalParametersError(i), e;
        }
        this.expect(17);
        let r = this.state.clone(), n = this.state.noArrowAt, o = this.startNodeAt(s), { consequent: h, failed: l } = this.tryParseConditionalConsequent(), [c, u] = this.getArrowLikeExpressions(h);
        if (l || u.length > 0) {
          let f = [...n];
          if (u.length > 0) {
            this.state = r, this.state.noArrowAt = f;
            for (let d = 0; d < u.length; d++)
              f.push(u[d].start);
            (({ consequent: h, failed: l } = this.tryParseConditionalConsequent())), [c, u] = this.getArrowLikeExpressions(h);
          }
          l && c.length > 1 && this.raise(g.AmbiguousConditionalArrow, { at: r.startLoc }), l && c.length === 1 && (this.state = r, f.push(c[0].start), this.state.noArrowAt = f, { consequent: h, failed: l } = this.tryParseConditionalConsequent());
        }
        return this.getArrowLikeExpressions(h, true), this.state.noArrowAt = n, this.expect(14), o.test = e, o.consequent = h, o.alternate = this.forwardNoArrowParamsConversionAt(o, () => this.parseMaybeAssign(void 0, void 0)), this.finishNode(o, "ConditionalExpression");
      }
      tryParseConditionalConsequent() {
        this.state.noArrowParamsConversionAt.push(this.state.start);
        let e = this.parseMaybeAssignAllowIn(), s = !this.match(14);
        return this.state.noArrowParamsConversionAt.pop(), { consequent: e, failed: s };
      }
      getArrowLikeExpressions(e, s) {
        let i = [e], r = [];
        for (; i.length !== 0; ) {
          let n = i.pop();
          n.type === "ArrowFunctionExpression" ? (n.typeParameters || !n.returnType ? this.finishArrowValidation(n) : r.push(n), i.push(n.body)) : n.type === "ConditionalExpression" && (i.push(n.consequent), i.push(n.alternate));
        }
        return s ? (r.forEach((n) => this.finishArrowValidation(n)), [r, []]) : er(r, (n) => n.params.every((o) => this.isAssignable(o, true)));
      }
      finishArrowValidation(e) {
        var s;
        this.toAssignableList(e.params, (s = e.extra) == null ? void 0 : s.trailingCommaLoc, false), this.scope.enter(6), super.checkParams(e, false, true), this.scope.exit();
      }
      forwardNoArrowParamsConversionAt(e, s) {
        let i;
        return this.state.noArrowParamsConversionAt.indexOf(e.start) !== -1 ? (this.state.noArrowParamsConversionAt.push(this.state.start), i = s(), this.state.noArrowParamsConversionAt.pop()) : i = s(), i;
      }
      parseParenItem(e, s) {
        if (e = super.parseParenItem(e, s), this.eat(17) && (e.optional = true, this.resetEndLocation(e)), this.match(14)) {
          let i = this.startNodeAt(s);
          return i.expression = e, i.typeAnnotation = this.flowParseTypeAnnotation(), this.finishNode(i, "TypeCastExpression");
        }
        return e;
      }
      assertModuleNodeAllowed(e) {
        e.type === "ImportDeclaration" && (e.importKind === "type" || e.importKind === "typeof") || e.type === "ExportNamedDeclaration" && e.exportKind === "type" || e.type === "ExportAllDeclaration" && e.exportKind === "type" || super.assertModuleNodeAllowed(e);
      }
      parseExportDeclaration(e) {
        if (this.isContextual(128)) {
          e.exportKind = "type";
          let s = this.startNode();
          return this.next(), this.match(5) ? (e.specifiers = this.parseExportSpecifiers(true), super.parseExportFrom(e), null) : this.flowParseTypeAlias(s);
        } else if (this.isContextual(129)) {
          e.exportKind = "type";
          let s = this.startNode();
          return this.next(), this.flowParseOpaqueType(s, false);
        } else if (this.isContextual(127)) {
          e.exportKind = "type";
          let s = this.startNode();
          return this.next(), this.flowParseInterface(s);
        } else if (this.shouldParseEnums() && this.isContextual(124)) {
          e.exportKind = "value";
          let s = this.startNode();
          return this.next(), this.flowParseEnumDeclaration(s);
        } else
          return super.parseExportDeclaration(e);
      }
      eatExportStar(e) {
        return super.eatExportStar(e) ? true : this.isContextual(128) && this.lookahead().type === 55 ? (e.exportKind = "type", this.next(), this.next(), true) : false;
      }
      maybeParseExportNamespaceSpecifier(e) {
        let { startLoc: s } = this.state, i = super.maybeParseExportNamespaceSpecifier(e);
        return i && e.exportKind === "type" && this.unexpected(s), i;
      }
      parseClassId(e, s, i) {
        super.parseClassId(e, s, i), this.match(47) && (e.typeParameters = this.flowParseTypeParameterDeclaration());
      }
      parseClassMember(e, s, i) {
        let { startLoc: r } = this.state;
        if (this.isContextual(123)) {
          if (super.parseClassMemberFromModifier(e, s))
            return;
          s.declare = true;
        }
        super.parseClassMember(e, s, i), s.declare && (s.type !== "ClassProperty" && s.type !== "ClassPrivateProperty" && s.type !== "PropertyDefinition" ? this.raise(g.DeclareClassElement, { at: r }) : s.value && this.raise(g.DeclareClassFieldInitializer, { at: s.value }));
      }
      isIterator(e) {
        return e === "iterator" || e === "asyncIterator";
      }
      readIterator() {
        let e = super.readWord1(), s = "@@" + e;
        (!this.isIterator(e) || !this.state.inType) && this.raise(p.InvalidIdentifier, { at: this.state.curPosition(), identifierName: s }), this.finishToken(130, s);
      }
      getTokenFromCode(e) {
        let s = this.input.charCodeAt(this.state.pos + 1);
        e === 123 && s === 124 ? this.finishOp(6, 2) : this.state.inType && (e === 62 || e === 60) ? this.finishOp(e === 62 ? 48 : 47, 1) : this.state.inType && e === 63 ? s === 46 ? this.finishOp(18, 2) : this.finishOp(17, 1) : Fi(e, s, this.input.charCodeAt(this.state.pos + 2)) ? (this.state.pos += 2, this.readIterator()) : super.getTokenFromCode(e);
      }
      isAssignable(e, s) {
        return e.type === "TypeCastExpression" ? this.isAssignable(e.expression, s) : super.isAssignable(e, s);
      }
      toAssignable(e, s = false) {
        !s && e.type === "AssignmentExpression" && e.left.type === "TypeCastExpression" && (e.left = this.typeCastToParameter(e.left)), super.toAssignable(e, s);
      }
      toAssignableList(e, s, i) {
        for (let r = 0; r < e.length; r++) {
          let n = e[r];
          (n == null ? void 0 : n.type) === "TypeCastExpression" && (e[r] = this.typeCastToParameter(n));
        }
        super.toAssignableList(e, s, i);
      }
      toReferencedList(e, s) {
        for (let r = 0; r < e.length; r++) {
          var i;
          let n = e[r];
          n && n.type === "TypeCastExpression" && !((i = n.extra) != null && i.parenthesized) && (e.length > 1 || !s) && this.raise(g.TypeCastInPattern, { at: n.typeAnnotation });
        }
        return e;
      }
      parseArrayLike(e, s, i, r) {
        let n = super.parseArrayLike(e, s, i, r);
        return s && !this.state.maybeInArrowParameters && this.toReferencedList(n.elements), n;
      }
      isValidLVal(e, s, i) {
        return e === "TypeCastExpression" || super.isValidLVal(e, s, i);
      }
      parseClassProperty(e) {
        return this.match(14) && (e.typeAnnotation = this.flowParseTypeAnnotation()), super.parseClassProperty(e);
      }
      parseClassPrivateProperty(e) {
        return this.match(14) && (e.typeAnnotation = this.flowParseTypeAnnotation()), super.parseClassPrivateProperty(e);
      }
      isClassMethod() {
        return this.match(47) || super.isClassMethod();
      }
      isClassProperty() {
        return this.match(14) || super.isClassProperty();
      }
      isNonstaticConstructor(e) {
        return !this.match(14) && super.isNonstaticConstructor(e);
      }
      pushClassMethod(e, s, i, r, n, o) {
        if (s.variance && this.unexpected(s.variance.loc.start), delete s.variance, this.match(47) && (s.typeParameters = this.flowParseTypeParameterDeclaration()), super.pushClassMethod(e, s, i, r, n, o), s.params && n) {
          let h = s.params;
          h.length > 0 && this.isThisParam(h[0]) && this.raise(g.ThisParamBannedInConstructor, { at: s });
        } else if (s.type === "MethodDefinition" && n && s.value.params) {
          let h = s.value.params;
          h.length > 0 && this.isThisParam(h[0]) && this.raise(g.ThisParamBannedInConstructor, { at: s });
        }
      }
      pushClassPrivateMethod(e, s, i, r) {
        s.variance && this.unexpected(s.variance.loc.start), delete s.variance, this.match(47) && (s.typeParameters = this.flowParseTypeParameterDeclaration()), super.pushClassPrivateMethod(e, s, i, r);
      }
      parseClassSuper(e) {
        if (super.parseClassSuper(e), e.superClass && this.match(47) && (e.superTypeParameters = this.flowParseTypeParameterInstantiation()), this.isContextual(111)) {
          this.next();
          let s = e.implements = [];
          do {
            let i = this.startNode();
            i.id = this.flowParseRestrictedIdentifier(true), this.match(47) ? i.typeParameters = this.flowParseTypeParameterInstantiation() : i.typeParameters = null, s.push(this.finishNode(i, "ClassImplements"));
          } while (this.eat(12));
        }
      }
      checkGetterSetterParams(e) {
        super.checkGetterSetterParams(e);
        let s = this.getObjectOrClassMethodParams(e);
        if (s.length > 0) {
          let i = s[0];
          this.isThisParam(i) && e.kind === "get" ? this.raise(g.GetterMayNotHaveThisParam, { at: i }) : this.isThisParam(i) && this.raise(g.SetterMayNotHaveThisParam, { at: i });
        }
      }
      parsePropertyNamePrefixOperator(e) {
        e.variance = this.flowParseVariance();
      }
      parseObjPropValue(e, s, i, r, n, o, h) {
        e.variance && this.unexpected(e.variance.loc.start), delete e.variance;
        let l;
        this.match(47) && !o && (l = this.flowParseTypeParameterDeclaration(), this.match(10) || this.unexpected());
        let c = super.parseObjPropValue(e, s, i, r, n, o, h);
        return l && ((c.value || c).typeParameters = l), c;
      }
      parseAssignableListItemTypes(e) {
        return this.eat(17) && (e.type !== "Identifier" && this.raise(g.PatternIsOptional, { at: e }), this.isThisParam(e) && this.raise(g.ThisParamMayNotBeOptional, { at: e }), e.optional = true), this.match(14) ? e.typeAnnotation = this.flowParseTypeAnnotation() : this.isThisParam(e) && this.raise(g.ThisParamAnnotationRequired, { at: e }), this.match(29) && this.isThisParam(e) && this.raise(g.ThisParamNoDefault, { at: e }), this.resetEndLocation(e), e;
      }
      parseMaybeDefault(e, s) {
        let i = super.parseMaybeDefault(e, s);
        return i.type === "AssignmentPattern" && i.typeAnnotation && i.right.start < i.typeAnnotation.start && this.raise(g.TypeBeforeInitializer, { at: i.typeAnnotation }), i;
      }
      checkImportReflection(e) {
        super.checkImportReflection(e), e.module && e.importKind !== "value" && this.raise(g.ImportReflectionHasImportType, { at: e.specifiers[0].loc.start });
      }
      parseImportSpecifierLocal(e, s, i) {
        s.local = zt(e) ? this.flowParseRestrictedIdentifier(true, true) : this.parseIdentifier(), e.specifiers.push(this.finishImportSpecifier(s, i));
      }
      isPotentialImportPhase(e) {
        if (super.isPotentialImportPhase(e))
          return true;
        if (this.isContextual(128)) {
          if (!e)
            return true;
          let s = this.lookaheadCharCode();
          return s === 123 || s === 42;
        }
        return !e && this.isContextual(87);
      }
      applyImportPhase(e, s, i, r) {
        if (super.applyImportPhase(e, s, i, r), s) {
          if (!i && this.match(65))
            return;
          e.exportKind = i === "type" ? i : "value";
        } else
          i === "type" && this.match(55) && this.unexpected(), e.importKind = i === "type" || i === "typeof" ? i : "value";
      }
      parseImportSpecifier(e, s, i, r, n) {
        let o = e.imported, h = null;
        o.type === "Identifier" && (o.name === "type" ? h = "type" : o.name === "typeof" && (h = "typeof"));
        let l = false;
        if (this.isContextual(93) && !this.isLookaheadContextual("as")) {
          let u = this.parseIdentifier(true);
          h !== null && !M(this.state.type) ? (e.imported = u, e.importKind = h, e.local = V(u)) : (e.imported = o, e.importKind = null, e.local = this.parseIdentifier());
        } else {
          if (h !== null && M(this.state.type))
            e.imported = this.parseIdentifier(true), e.importKind = h;
          else {
            if (s)
              throw this.raise(p.ImportBindingIsString, { at: e, importName: o.value });
            e.imported = o, e.importKind = null;
          }
          this.eatContextual(93) ? e.local = this.parseIdentifier() : (l = true, e.local = V(e.imported));
        }
        let c = zt(e);
        return i && c && this.raise(g.ImportTypeShorthandOnlyInPureImport, { at: e }), (i || c) && this.checkReservedType(e.local.name, e.local.loc.start, true), l && !i && !c && this.checkReservedWord(e.local.name, e.loc.start, true, true), this.finishImportSpecifier(e, "ImportSpecifier");
      }
      parseBindingAtom() {
        switch (this.state.type) {
          case 78:
            return this.parseIdentifier(true);
          default:
            return super.parseBindingAtom();
        }
      }
      parseFunctionParams(e, s) {
        let i = e.kind;
        i !== "get" && i !== "set" && this.match(47) && (e.typeParameters = this.flowParseTypeParameterDeclaration()), super.parseFunctionParams(e, s);
      }
      parseVarId(e, s) {
        super.parseVarId(e, s), this.match(14) && (e.id.typeAnnotation = this.flowParseTypeAnnotation(), this.resetEndLocation(e.id));
      }
      parseAsyncArrowFromCallExpression(e, s) {
        if (this.match(14)) {
          let i = this.state.noAnonFunctionType;
          this.state.noAnonFunctionType = true, e.returnType = this.flowParseTypeAnnotation(), this.state.noAnonFunctionType = i;
        }
        return super.parseAsyncArrowFromCallExpression(e, s);
      }
      shouldParseAsyncArrow() {
        return this.match(14) || super.shouldParseAsyncArrow();
      }
      parseMaybeAssign(e, s) {
        var i;
        let r = null, n;
        if (this.hasPlugin("jsx") && (this.match(140) || this.match(47))) {
          if (r = this.state.clone(), n = this.tryParse(() => super.parseMaybeAssign(e, s), r), !n.error)
            return n.node;
          let { context: l } = this.state, c = l[l.length - 1];
          (c === w.j_oTag || c === w.j_expr) && l.pop();
        }
        if ((i = n) != null && i.error || this.match(47)) {
          var o, h;
          r = r || this.state.clone();
          let l, c = this.tryParse((f) => {
            var d;
            l = this.flowParseTypeParameterDeclaration();
            let x = this.forwardNoArrowParamsConversionAt(l, () => {
              let C = super.parseMaybeAssign(e, s);
              return this.resetStartLocationFromNode(C, l), C;
            });
            (d = x.extra) != null && d.parenthesized && f();
            let I = this.maybeUnwrapTypeCastExpression(x);
            return I.type !== "ArrowFunctionExpression" && f(), I.typeParameters = l, this.resetStartLocationFromNode(I, l), x;
          }, r), u = null;
          if (c.node && this.maybeUnwrapTypeCastExpression(c.node).type === "ArrowFunctionExpression") {
            if (!c.error && !c.aborted)
              return c.node.async && this.raise(g.UnexpectedTypeParameterBeforeAsyncArrowFunction, { at: l }), c.node;
            u = c.node;
          }
          if ((o = n) != null && o.node)
            return this.state = n.failState, n.node;
          if (u)
            return this.state = c.failState, u;
          throw (h = n) != null && h.thrown ? n.error : c.thrown ? c.error : this.raise(g.UnexpectedTokenAfterTypeParameter, { at: l });
        }
        return super.parseMaybeAssign(e, s);
      }
      parseArrow(e) {
        if (this.match(14)) {
          let s = this.tryParse(() => {
            let i = this.state.noAnonFunctionType;
            this.state.noAnonFunctionType = true;
            let r = this.startNode();
            return [r.typeAnnotation, e.predicate] = this.flowParseTypeAndPredicateInitialiser(), this.state.noAnonFunctionType = i, this.canInsertSemicolon() && this.unexpected(), this.match(19) || this.unexpected(), r;
          });
          if (s.thrown)
            return null;
          s.error && (this.state = s.failState), e.returnType = s.node.typeAnnotation ? this.finishNode(s.node, "TypeAnnotation") : null;
        }
        return super.parseArrow(e);
      }
      shouldParseArrow(e) {
        return this.match(14) || super.shouldParseArrow(e);
      }
      setArrowFunctionParameters(e, s) {
        this.state.noArrowParamsConversionAt.indexOf(e.start) !== -1 ? e.params = s : super.setArrowFunctionParameters(e, s);
      }
      checkParams(e, s, i, r = true) {
        if (!(i && this.state.noArrowParamsConversionAt.indexOf(e.start) !== -1)) {
          for (let n = 0; n < e.params.length; n++)
            this.isThisParam(e.params[n]) && n > 0 && this.raise(g.ThisParamMustBeFirst, { at: e.params[n] });
          super.checkParams(e, s, i, r);
        }
      }
      parseParenAndDistinguishExpression(e) {
        return super.parseParenAndDistinguishExpression(e && this.state.noArrowAt.indexOf(this.state.start) === -1);
      }
      parseSubscripts(e, s, i) {
        if (e.type === "Identifier" && e.name === "async" && this.state.noArrowAt.indexOf(s.index) !== -1) {
          this.next();
          let r = this.startNodeAt(s);
          r.callee = e, r.arguments = super.parseCallExpressionArguments(11, false), e = this.finishNode(r, "CallExpression");
        } else if (e.type === "Identifier" && e.name === "async" && this.match(47)) {
          let r = this.state.clone(), n = this.tryParse((h) => this.parseAsyncArrowWithTypeParameters(s) || h(), r);
          if (!n.error && !n.aborted)
            return n.node;
          let o = this.tryParse(() => super.parseSubscripts(e, s, i), r);
          if (o.node && !o.error)
            return o.node;
          if (n.node)
            return this.state = n.failState, n.node;
          if (o.node)
            return this.state = o.failState, o.node;
          throw n.error || o.error;
        }
        return super.parseSubscripts(e, s, i);
      }
      parseSubscript(e, s, i, r) {
        if (this.match(18) && this.isLookaheadToken_lt()) {
          if (r.optionalChainMember = true, i)
            return r.stop = true, e;
          this.next();
          let n = this.startNodeAt(s);
          return n.callee = e, n.typeArguments = this.flowParseTypeParameterInstantiation(), this.expect(10), n.arguments = this.parseCallExpressionArguments(11, false), n.optional = true, this.finishCallExpression(n, true);
        } else if (!i && this.shouldParseTypes() && this.match(47)) {
          let n = this.startNodeAt(s);
          n.callee = e;
          let o = this.tryParse(() => (n.typeArguments = this.flowParseTypeParameterInstantiationCallOrNew(), this.expect(10), n.arguments = super.parseCallExpressionArguments(11, false), r.optionalChainMember && (n.optional = false), this.finishCallExpression(n, r.optionalChainMember)));
          if (o.node)
            return o.error && (this.state = o.failState), o.node;
        }
        return super.parseSubscript(e, s, i, r);
      }
      parseNewCallee(e) {
        super.parseNewCallee(e);
        let s = null;
        this.shouldParseTypes() && this.match(47) && (s = this.tryParse(() => this.flowParseTypeParameterInstantiationCallOrNew()).node), e.typeArguments = s;
      }
      parseAsyncArrowWithTypeParameters(e) {
        let s = this.startNodeAt(e);
        if (this.parseFunctionParams(s, false), !!this.parseArrow(s))
          return super.parseArrowExpression(s, void 0, true);
      }
      readToken_mult_modulo(e) {
        let s = this.input.charCodeAt(this.state.pos + 1);
        if (e === 42 && s === 47 && this.state.hasFlowComment) {
          this.state.hasFlowComment = false, this.state.pos += 2, this.nextToken();
          return;
        }
        super.readToken_mult_modulo(e);
      }
      readToken_pipe_amp(e) {
        let s = this.input.charCodeAt(this.state.pos + 1);
        if (e === 124 && s === 125) {
          this.finishOp(9, 2);
          return;
        }
        super.readToken_pipe_amp(e);
      }
      parseTopLevel(e, s) {
        let i = super.parseTopLevel(e, s);
        return this.state.hasFlowComment && this.raise(g.UnterminatedFlowComment, { at: this.state.curPosition() }), i;
      }
      skipBlockComment() {
        if (this.hasPlugin("flowComments") && this.skipFlowComment()) {
          if (this.state.hasFlowComment)
            throw this.raise(g.NestedFlowComment, { at: this.state.startLoc });
          this.hasFlowCommentCompletion();
          let e = this.skipFlowComment();
          e && (this.state.pos += e, this.state.hasFlowComment = true);
          return;
        }
        return super.skipBlockComment(this.state.hasFlowComment ? "*-/" : "*/");
      }
      skipFlowComment() {
        let { pos: e } = this.state, s = 2;
        for (; [32, 9].includes(this.input.charCodeAt(e + s)); )
          s++;
        let i = this.input.charCodeAt(s + e), r = this.input.charCodeAt(s + e + 1);
        return i === 58 && r === 58 ? s + 2 : this.input.slice(s + e, s + e + 12) === "flow-include" ? s + 12 : i === 58 && r !== 58 ? s : false;
      }
      hasFlowCommentCompletion() {
        if (this.input.indexOf("*/", this.state.pos) === -1)
          throw this.raise(p.UnterminatedComment, { at: this.state.curPosition() });
      }
      flowEnumErrorBooleanMemberNotInitialized(e, { enumName: s, memberName: i }) {
        this.raise(g.EnumBooleanMemberNotInitialized, { at: e, memberName: i, enumName: s });
      }
      flowEnumErrorInvalidMemberInitializer(e, s) {
        return this.raise(s.explicitType ? s.explicitType === "symbol" ? g.EnumInvalidMemberInitializerSymbolType : g.EnumInvalidMemberInitializerPrimaryType : g.EnumInvalidMemberInitializerUnknownType, Object.assign({ at: e }, s));
      }
      flowEnumErrorNumberMemberNotInitialized(e, { enumName: s, memberName: i }) {
        this.raise(g.EnumNumberMemberNotInitialized, { at: e, enumName: s, memberName: i });
      }
      flowEnumErrorStringMemberInconsistentlyInitailized(e, { enumName: s }) {
        this.raise(g.EnumStringMemberInconsistentlyInitailized, { at: e, enumName: s });
      }
      flowEnumMemberInit() {
        let e = this.state.startLoc, s = () => this.match(12) || this.match(8);
        switch (this.state.type) {
          case 132: {
            let i = this.parseNumericLiteral(this.state.value);
            return s() ? { type: "number", loc: i.loc.start, value: i } : { type: "invalid", loc: e };
          }
          case 131: {
            let i = this.parseStringLiteral(this.state.value);
            return s() ? { type: "string", loc: i.loc.start, value: i } : { type: "invalid", loc: e };
          }
          case 85:
          case 86: {
            let i = this.parseBooleanLiteral(this.match(85));
            return s() ? { type: "boolean", loc: i.loc.start, value: i } : { type: "invalid", loc: e };
          }
          default:
            return { type: "invalid", loc: e };
        }
      }
      flowEnumMemberRaw() {
        let e = this.state.startLoc, s = this.parseIdentifier(true), i = this.eat(29) ? this.flowEnumMemberInit() : { type: "none", loc: e };
        return { id: s, init: i };
      }
      flowEnumCheckExplicitTypeMismatch(e, s, i) {
        let { explicitType: r } = s;
        r !== null && r !== i && this.flowEnumErrorInvalidMemberInitializer(e, s);
      }
      flowEnumMembers({ enumName: e, explicitType: s }) {
        let i = /* @__PURE__ */ new Set(), r = { booleanMembers: [], numberMembers: [], stringMembers: [], defaultedMembers: [] }, n = false;
        for (; !this.match(8); ) {
          if (this.eat(21)) {
            n = true;
            break;
          }
          let o = this.startNode(), { id: h, init: l } = this.flowEnumMemberRaw(), c = h.name;
          if (c === "")
            continue;
          /^[a-z]/.test(c) && this.raise(g.EnumInvalidMemberName, { at: h, memberName: c, suggestion: c[0].toUpperCase() + c.slice(1), enumName: e }), i.has(c) && this.raise(g.EnumDuplicateMemberName, { at: h, memberName: c, enumName: e }), i.add(c);
          let u = { enumName: e, explicitType: s, memberName: c };
          switch (o.id = h, l.type) {
            case "boolean": {
              this.flowEnumCheckExplicitTypeMismatch(l.loc, u, "boolean"), o.init = l.value, r.booleanMembers.push(this.finishNode(o, "EnumBooleanMember"));
              break;
            }
            case "number": {
              this.flowEnumCheckExplicitTypeMismatch(l.loc, u, "number"), o.init = l.value, r.numberMembers.push(this.finishNode(o, "EnumNumberMember"));
              break;
            }
            case "string": {
              this.flowEnumCheckExplicitTypeMismatch(l.loc, u, "string"), o.init = l.value, r.stringMembers.push(this.finishNode(o, "EnumStringMember"));
              break;
            }
            case "invalid":
              throw this.flowEnumErrorInvalidMemberInitializer(l.loc, u);
            case "none":
              switch (s) {
                case "boolean":
                  this.flowEnumErrorBooleanMemberNotInitialized(l.loc, u);
                  break;
                case "number":
                  this.flowEnumErrorNumberMemberNotInitialized(l.loc, u);
                  break;
                default:
                  r.defaultedMembers.push(this.finishNode(o, "EnumDefaultedMember"));
              }
          }
          this.match(8) || this.expect(12);
        }
        return { members: r, hasUnknownMembers: n };
      }
      flowEnumStringMembers(e, s, { enumName: i }) {
        if (e.length === 0)
          return s;
        if (s.length === 0)
          return e;
        if (s.length > e.length) {
          for (let r of e)
            this.flowEnumErrorStringMemberInconsistentlyInitailized(r, { enumName: i });
          return s;
        } else {
          for (let r of s)
            this.flowEnumErrorStringMemberInconsistentlyInitailized(r, { enumName: i });
          return e;
        }
      }
      flowEnumParseExplicitType({ enumName: e }) {
        if (!this.eatContextual(101))
          return null;
        if (!S(this.state.type))
          throw this.raise(g.EnumInvalidExplicitTypeUnknownSupplied, { at: this.state.startLoc, enumName: e });
        let { value: s } = this.state;
        return this.next(), s !== "boolean" && s !== "number" && s !== "string" && s !== "symbol" && this.raise(g.EnumInvalidExplicitType, { at: this.state.startLoc, enumName: e, invalidEnumType: s }), s;
      }
      flowEnumBody(e, s) {
        let i = s.name, r = s.loc.start, n = this.flowEnumParseExplicitType({ enumName: i });
        this.expect(5);
        let { members: o, hasUnknownMembers: h } = this.flowEnumMembers({ enumName: i, explicitType: n });
        switch (e.hasUnknownMembers = h, n) {
          case "boolean":
            return e.explicitType = true, e.members = o.booleanMembers, this.expect(8), this.finishNode(e, "EnumBooleanBody");
          case "number":
            return e.explicitType = true, e.members = o.numberMembers, this.expect(8), this.finishNode(e, "EnumNumberBody");
          case "string":
            return e.explicitType = true, e.members = this.flowEnumStringMembers(o.stringMembers, o.defaultedMembers, { enumName: i }), this.expect(8), this.finishNode(e, "EnumStringBody");
          case "symbol":
            return e.members = o.defaultedMembers, this.expect(8), this.finishNode(e, "EnumSymbolBody");
          default: {
            let l = () => (e.members = [], this.expect(8), this.finishNode(e, "EnumStringBody"));
            e.explicitType = false;
            let c = o.booleanMembers.length, u = o.numberMembers.length, f = o.stringMembers.length, d = o.defaultedMembers.length;
            if (!c && !u && !f && !d)
              return l();
            if (!c && !u)
              return e.members = this.flowEnumStringMembers(o.stringMembers, o.defaultedMembers, { enumName: i }), this.expect(8), this.finishNode(e, "EnumStringBody");
            if (!u && !f && c >= d) {
              for (let x of o.defaultedMembers)
                this.flowEnumErrorBooleanMemberNotInitialized(x.loc.start, { enumName: i, memberName: x.id.name });
              return e.members = o.booleanMembers, this.expect(8), this.finishNode(e, "EnumBooleanBody");
            } else if (!c && !f && u >= d) {
              for (let x of o.defaultedMembers)
                this.flowEnumErrorNumberMemberNotInitialized(x.loc.start, { enumName: i, memberName: x.id.name });
              return e.members = o.numberMembers, this.expect(8), this.finishNode(e, "EnumNumberBody");
            } else
              return this.raise(g.EnumInconsistentMemberValues, { at: r, enumName: i }), l();
          }
        }
      }
      flowParseEnumDeclaration(e) {
        let s = this.parseIdentifier();
        return e.id = s, e.body = this.flowEnumBody(this.startNode(), s), this.finishNode(e, "EnumDeclaration");
      }
      isLookaheadToken_lt() {
        let e = this.nextTokenStart();
        if (this.input.charCodeAt(e) === 60) {
          let s = this.input.charCodeAt(e + 1);
          return s !== 60 && s !== 61;
        }
        return false;
      }
      maybeUnwrapTypeCastExpression(e) {
        return e.type === "TypeCastExpression" ? e.expression : e;
      }
    }, W = $`jsx`({ AttributeIsEmpty: "JSX attributes must only be assigned a non-empty expression.", MissingClosingTagElement: ({ openingTagName: a }) => `Expected corresponding JSX closing tag for <${a}>.`, MissingClosingTagFragment: "Expected corresponding JSX closing tag for <>.", UnexpectedSequenceExpression: "Sequence expressions cannot be directly nested inside JSX. Did you mean to wrap it in parentheses (...)?", UnexpectedToken: ({ unexpected: a, HTMLEntity: t }) => `Unexpected token \`${a}\`. Did you mean \`${t}\` or \`{'${a}'}\`?`, UnsupportedJsxValue: "JSX value should be either an expression or a quoted JSX text.", UnterminatedJsxContent: "Unterminated JSX contents.", UnwrappedAdjacentJSXElements: "Adjacent JSX elements must be wrapped in an enclosing tag. Did you want a JSX fragment <>...</>?" });
    function K(a) {
      return a ? a.type === "JSXOpeningFragment" || a.type === "JSXClosingFragment" : false;
    }
    function Z(a) {
      if (a.type === "JSXIdentifier")
        return a.name;
      if (a.type === "JSXNamespacedName")
        return a.namespace.name + ":" + a.name.name;
      if (a.type === "JSXMemberExpression")
        return Z(a.object) + "." + Z(a.property);
      throw new Error("Node had unexpected type: " + a.type);
    }
    var ir = (a) => class extends a {
      jsxReadToken() {
        let e = "", s = this.state.pos;
        for (; ; ) {
          if (this.state.pos >= this.length)
            throw this.raise(W.UnterminatedJsxContent, { at: this.state.startLoc });
          let i = this.input.charCodeAt(this.state.pos);
          switch (i) {
            case 60:
            case 123:
              if (this.state.pos === this.state.start) {
                i === 60 && this.state.canStartJSXElement ? (++this.state.pos, this.finishToken(140)) : super.getTokenFromCode(i);
                return;
              }
              e += this.input.slice(s, this.state.pos), this.finishToken(139, e);
              return;
            case 38:
              e += this.input.slice(s, this.state.pos), e += this.jsxReadEntity(), s = this.state.pos;
              break;
            case 62:
            case 125:
            default:
              xe(i) ? (e += this.input.slice(s, this.state.pos), e += this.jsxReadNewLine(true), s = this.state.pos) : ++this.state.pos;
          }
        }
      }
      jsxReadNewLine(e) {
        let s = this.input.charCodeAt(this.state.pos), i;
        return ++this.state.pos, s === 13 && this.input.charCodeAt(this.state.pos) === 10 ? (++this.state.pos, i = e ? `
` : `\r
`) : i = String.fromCharCode(s), ++this.state.curLine, this.state.lineStart = this.state.pos, i;
      }
      jsxReadString(e) {
        let s = "", i = ++this.state.pos;
        for (; ; ) {
          if (this.state.pos >= this.length)
            throw this.raise(p.UnterminatedString, { at: this.state.startLoc });
          let r = this.input.charCodeAt(this.state.pos);
          if (r === e)
            break;
          r === 38 ? (s += this.input.slice(i, this.state.pos), s += this.jsxReadEntity(), i = this.state.pos) : xe(r) ? (s += this.input.slice(i, this.state.pos), s += this.jsxReadNewLine(false), i = this.state.pos) : ++this.state.pos;
        }
        s += this.input.slice(i, this.state.pos++), this.finishToken(131, s);
      }
      jsxReadEntity() {
        let e = ++this.state.pos;
        if (this.codePointAtPos(this.state.pos) === 35) {
          ++this.state.pos;
          let s = 10;
          this.codePointAtPos(this.state.pos) === 120 && (s = 16, ++this.state.pos);
          let i = this.readInt(s, void 0, false, "bail");
          if (i !== null && this.codePointAtPos(this.state.pos) === 59)
            return ++this.state.pos, String.fromCodePoint(i);
        } else {
          let s = 0, i = false;
          for (; s++ < 10 && this.state.pos < this.length && !(i = this.codePointAtPos(this.state.pos) == 59); )
            ++this.state.pos;
          if (i) {
            this.input.slice(e, this.state.pos);
            let n = void 0;
            if (++this.state.pos, n)
              ;
          }
        }
        return this.state.pos = e, "&";
      }
      jsxReadWord() {
        let e, s = this.state.pos;
        do
          e = this.input.charCodeAt(++this.state.pos);
        while (ee(e) || e === 45);
        this.finishToken(138, this.input.slice(s, this.state.pos));
      }
      jsxParseIdentifier() {
        let e = this.startNode();
        return this.match(138) ? e.name = this.state.value : Ct(this.state.type) ? e.name = q(this.state.type) : this.unexpected(), this.next(), this.finishNode(e, "JSXIdentifier");
      }
      jsxParseNamespacedName() {
        let e = this.state.startLoc, s = this.jsxParseIdentifier();
        if (!this.eat(14))
          return s;
        let i = this.startNodeAt(e);
        return i.namespace = s, i.name = this.jsxParseIdentifier(), this.finishNode(i, "JSXNamespacedName");
      }
      jsxParseElementName() {
        let e = this.state.startLoc, s = this.jsxParseNamespacedName();
        if (s.type === "JSXNamespacedName")
          return s;
        for (; this.eat(16); ) {
          let i = this.startNodeAt(e);
          i.object = s, i.property = this.jsxParseIdentifier(), s = this.finishNode(i, "JSXMemberExpression");
        }
        return s;
      }
      jsxParseAttributeValue() {
        let e;
        switch (this.state.type) {
          case 5:
            return e = this.startNode(), this.setContext(w.brace), this.next(), e = this.jsxParseExpressionContainer(e, w.j_oTag), e.expression.type === "JSXEmptyExpression" && this.raise(W.AttributeIsEmpty, { at: e }), e;
          case 140:
          case 131:
            return this.parseExprAtom();
          default:
            throw this.raise(W.UnsupportedJsxValue, { at: this.state.startLoc });
        }
      }
      jsxParseEmptyExpression() {
        let e = this.startNodeAt(this.state.lastTokEndLoc);
        return this.finishNodeAt(e, "JSXEmptyExpression", this.state.startLoc);
      }
      jsxParseSpreadChild(e) {
        return this.next(), e.expression = this.parseExpression(), this.setContext(w.j_expr), this.state.canStartJSXElement = true, this.expect(8), this.finishNode(e, "JSXSpreadChild");
      }
      jsxParseExpressionContainer(e, s) {
        if (this.match(8))
          e.expression = this.jsxParseEmptyExpression();
        else {
          let i = this.parseExpression();
          e.expression = i;
        }
        return this.setContext(s), this.state.canStartJSXElement = true, this.expect(8), this.finishNode(e, "JSXExpressionContainer");
      }
      jsxParseAttribute() {
        let e = this.startNode();
        return this.match(5) ? (this.setContext(w.brace), this.next(), this.expect(21), e.argument = this.parseMaybeAssignAllowIn(), this.setContext(w.j_oTag), this.state.canStartJSXElement = true, this.expect(8), this.finishNode(e, "JSXSpreadAttribute")) : (e.name = this.jsxParseNamespacedName(), e.value = this.eat(29) ? this.jsxParseAttributeValue() : null, this.finishNode(e, "JSXAttribute"));
      }
      jsxParseOpeningElementAt(e) {
        let s = this.startNodeAt(e);
        return this.eat(141) ? this.finishNode(s, "JSXOpeningFragment") : (s.name = this.jsxParseElementName(), this.jsxParseOpeningElementAfterName(s));
      }
      jsxParseOpeningElementAfterName(e) {
        let s = [];
        for (; !this.match(56) && !this.match(141); )
          s.push(this.jsxParseAttribute());
        return e.attributes = s, e.selfClosing = this.eat(56), this.expect(141), this.finishNode(e, "JSXOpeningElement");
      }
      jsxParseClosingElementAt(e) {
        let s = this.startNodeAt(e);
        return this.eat(141) ? this.finishNode(s, "JSXClosingFragment") : (s.name = this.jsxParseElementName(), this.expect(141), this.finishNode(s, "JSXClosingElement"));
      }
      jsxParseElementAt(e) {
        let s = this.startNodeAt(e), i = [], r = this.jsxParseOpeningElementAt(e), n = null;
        if (!r.selfClosing) {
          e:
            for (; ; )
              switch (this.state.type) {
                case 140:
                  if (e = this.state.startLoc, this.next(), this.eat(56)) {
                    n = this.jsxParseClosingElementAt(e);
                    break e;
                  }
                  i.push(this.jsxParseElementAt(e));
                  break;
                case 139:
                  i.push(this.parseExprAtom());
                  break;
                case 5: {
                  let o = this.startNode();
                  this.setContext(w.brace), this.next(), this.match(21) ? i.push(this.jsxParseSpreadChild(o)) : i.push(this.jsxParseExpressionContainer(o, w.j_expr));
                  break;
                }
                default:
                  this.unexpected();
              }
          K(r) && !K(n) && n !== null ? this.raise(W.MissingClosingTagFragment, { at: n }) : !K(r) && K(n) ? this.raise(W.MissingClosingTagElement, { at: n, openingTagName: Z(r.name) }) : !K(r) && !K(n) && Z(n.name) !== Z(r.name) && this.raise(W.MissingClosingTagElement, { at: n, openingTagName: Z(r.name) });
        }
        if (K(r) ? (s.openingFragment = r, s.closingFragment = n) : (s.openingElement = r, s.closingElement = n), s.children = i, this.match(47))
          throw this.raise(W.UnwrappedAdjacentJSXElements, { at: this.state.startLoc });
        return K(r) ? this.finishNode(s, "JSXFragment") : this.finishNode(s, "JSXElement");
      }
      jsxParseElement() {
        let e = this.state.startLoc;
        return this.next(), this.jsxParseElementAt(e);
      }
      setContext(e) {
        let { context: s } = this.state;
        s[s.length - 1] = e;
      }
      parseExprAtom(e) {
        return this.match(139) ? this.parseLiteral(this.state.value, "JSXText") : this.match(140) ? this.jsxParseElement() : this.match(47) && this.input.charCodeAt(this.state.pos) !== 33 ? (this.replaceToken(140), this.jsxParseElement()) : super.parseExprAtom(e);
      }
      skipSpace() {
        this.curContext().preserveSpace || super.skipSpace();
      }
      getTokenFromCode(e) {
        let s = this.curContext();
        if (s === w.j_expr) {
          this.jsxReadToken();
          return;
        }
        if (s === w.j_oTag || s === w.j_cTag) {
          if (j(e)) {
            this.jsxReadWord();
            return;
          }
          if (e === 62) {
            ++this.state.pos, this.finishToken(141);
            return;
          }
          if ((e === 34 || e === 39) && s === w.j_oTag) {
            this.jsxReadString(e);
            return;
          }
        }
        if (e === 60 && this.state.canStartJSXElement && this.input.charCodeAt(this.state.pos + 1) !== 33) {
          ++this.state.pos, this.finishToken(140);
          return;
        }
        super.getTokenFromCode(e);
      }
      updateContext(e) {
        let { context: s, type: i } = this.state;
        if (i === 56 && e === 140)
          s.splice(-2, 2, w.j_cTag), this.state.canStartJSXElement = false;
        else if (i === 140)
          s.push(w.j_oTag);
        else if (i === 141) {
          let r = s[s.length - 1];
          r === w.j_oTag && e === 56 || r === w.j_cTag ? (s.pop(), this.state.canStartJSXElement = s[s.length - 1] === w.j_expr) : (this.setContext(w.j_expr), this.state.canStartJSXElement = true);
        } else
          this.state.canStartJSXElement = gi(i);
      }
    }, ft = class extends Pe {
      constructor(...t) {
        super(...t), this.types = /* @__PURE__ */ new Set(), this.enums = /* @__PURE__ */ new Set(), this.constEnums = /* @__PURE__ */ new Set(), this.classes = /* @__PURE__ */ new Set(), this.exportOnlyBindings = /* @__PURE__ */ new Set();
      }
    }, mt = class extends ge {
      constructor(...t) {
        super(...t), this.importsStack = [];
      }
      createScope(t) {
        return this.importsStack.push(/* @__PURE__ */ new Set()), new ft(t);
      }
      enter(t) {
        t == 256 && this.importsStack.push(/* @__PURE__ */ new Set()), super.enter(t);
      }
      exit() {
        let t = super.exit();
        return t == 256 && this.importsStack.pop(), t;
      }
      hasImport(t, e) {
        let s = this.importsStack.length;
        if (this.importsStack[s - 1].has(t))
          return true;
        if (!e && s > 1) {
          for (let i = 0; i < s - 1; i++)
            if (this.importsStack[i].has(t))
              return true;
        }
        return false;
      }
      declareName(t, e, s) {
        if (e & 4096) {
          this.hasImport(t, true) && this.parser.raise(p.VarRedeclaration, { at: s, identifierName: t }), this.importsStack[this.importsStack.length - 1].add(t);
          return;
        }
        let i = this.currentScope();
        if (e & 1024) {
          this.maybeExportDefined(i, t), i.exportOnlyBindings.add(t);
          return;
        }
        super.declareName(t, e, s), e & 2 && (e & 1 || (this.checkRedeclarationInScope(i, t, e, s), this.maybeExportDefined(i, t)), i.types.add(t)), e & 256 && i.enums.add(t), e & 512 && i.constEnums.add(t), e & 128 && i.classes.add(t);
      }
      isRedeclaredInScope(t, e, s) {
        if (t.enums.has(e)) {
          if (s & 256) {
            let i = !!(s & 512), r = t.constEnums.has(e);
            return i !== r;
          }
          return true;
        }
        return s & 128 && t.classes.has(e) ? t.lexical.has(e) ? !!(s & 1) : false : s & 2 && t.types.has(e) ? true : super.isRedeclaredInScope(t, e, s);
      }
      checkLocalExport(t) {
        let { name: e } = t;
        if (this.hasImport(e))
          return;
        let s = this.scopeStack.length;
        for (let i = s - 1; i >= 0; i--) {
          let r = this.scopeStack[i];
          if (r.types.has(e) || r.exportOnlyBindings.has(e))
            return;
        }
        super.checkLocalExport(t);
      }
    }, rr = (a, t) => Object.hasOwnProperty.call(a, t) && a[t], ps = (a) => a.type === "ParenthesizedExpression" ? ps(a.expression) : a, yt = class extends dt {
      toAssignable(t, e = false) {
        var s, i;
        let r;
        switch ((t.type === "ParenthesizedExpression" || (s = t.extra) != null && s.parenthesized) && (r = ps(t), e ? r.type === "Identifier" ? this.expressionScope.recordArrowParameterBindingError(p.InvalidParenthesizedAssignment, { at: t }) : r.type !== "MemberExpression" && this.raise(p.InvalidParenthesizedAssignment, { at: t }) : this.raise(p.InvalidParenthesizedAssignment, { at: t })), t.type) {
          case "Identifier":
          case "ObjectPattern":
          case "ArrayPattern":
          case "AssignmentPattern":
          case "RestElement":
            break;
          case "ObjectExpression":
            t.type = "ObjectPattern";
            for (let o = 0, h = t.properties.length, l = h - 1; o < h; o++) {
              var n;
              let c = t.properties[o], u = o === l;
              this.toAssignableObjectExpressionProp(c, u, e), u && c.type === "RestElement" && (n = t.extra) != null && n.trailingCommaLoc && this.raise(p.RestTrailingComma, { at: t.extra.trailingCommaLoc });
            }
            break;
          case "ObjectProperty": {
            let { key: o, value: h } = t;
            this.isPrivateName(o) && this.classScope.usePrivateName(this.getPrivateNameSV(o), o.loc.start), this.toAssignable(h, e);
            break;
          }
          case "SpreadElement":
            throw new Error("Internal @babel/parser error (this is a bug, please report it). SpreadElement should be converted by .toAssignable's caller.");
          case "ArrayExpression":
            t.type = "ArrayPattern", this.toAssignableList(t.elements, (i = t.extra) == null ? void 0 : i.trailingCommaLoc, e);
            break;
          case "AssignmentExpression":
            t.operator !== "=" && this.raise(p.MissingEqInAssignment, { at: t.left.loc.end }), t.type = "AssignmentPattern", delete t.operator, this.toAssignable(t.left, e);
            break;
          case "ParenthesizedExpression":
            this.toAssignable(r, e);
            break;
        }
      }
      toAssignableObjectExpressionProp(t, e, s) {
        if (t.type === "ObjectMethod")
          this.raise(t.kind === "get" || t.kind === "set" ? p.PatternHasAccessor : p.PatternHasMethod, { at: t.key });
        else if (t.type === "SpreadElement") {
          t.type = "RestElement";
          let i = t.argument;
          this.checkToRestConversion(i, false), this.toAssignable(i, s), e || this.raise(p.RestTrailingComma, { at: t });
        } else
          this.toAssignable(t, s);
      }
      toAssignableList(t, e, s) {
        let i = t.length - 1;
        for (let r = 0; r <= i; r++) {
          let n = t[r];
          if (n) {
            if (n.type === "SpreadElement") {
              n.type = "RestElement";
              let o = n.argument;
              this.checkToRestConversion(o, true), this.toAssignable(o, s);
            } else
              this.toAssignable(n, s);
            n.type === "RestElement" && (r < i ? this.raise(p.RestTrailingComma, { at: n }) : e && this.raise(p.RestTrailingComma, { at: e }));
          }
        }
      }
      isAssignable(t, e) {
        switch (t.type) {
          case "Identifier":
          case "ObjectPattern":
          case "ArrayPattern":
          case "AssignmentPattern":
          case "RestElement":
            return true;
          case "ObjectExpression": {
            let s = t.properties.length - 1;
            return t.properties.every((i, r) => i.type !== "ObjectMethod" && (r === s || i.type !== "SpreadElement") && this.isAssignable(i));
          }
          case "ObjectProperty":
            return this.isAssignable(t.value);
          case "SpreadElement":
            return this.isAssignable(t.argument);
          case "ArrayExpression":
            return t.elements.every((s) => s === null || this.isAssignable(s));
          case "AssignmentExpression":
            return t.operator === "=";
          case "ParenthesizedExpression":
            return this.isAssignable(t.expression);
          case "MemberExpression":
          case "OptionalMemberExpression":
            return !e;
          default:
            return false;
        }
      }
      toReferencedList(t, e) {
        return t;
      }
      toReferencedListDeep(t, e) {
        this.toReferencedList(t, e);
        for (let s of t)
          (s == null ? void 0 : s.type) === "ArrayExpression" && this.toReferencedListDeep(s.elements);
      }
      parseSpread(t) {
        let e = this.startNode();
        return this.next(), e.argument = this.parseMaybeAssignAllowIn(t, void 0), this.finishNode(e, "SpreadElement");
      }
      parseRestBinding() {
        let t = this.startNode();
        return this.next(), t.argument = this.parseBindingAtom(), this.finishNode(t, "RestElement");
      }
      parseBindingAtom() {
        switch (this.state.type) {
          case 0: {
            let t = this.startNode();
            return this.next(), t.elements = this.parseBindingList(3, 93, 1), this.finishNode(t, "ArrayPattern");
          }
          case 5:
            return this.parseObjectLike(8, true);
        }
        return this.parseIdentifier();
      }
      parseBindingList(t, e, s) {
        let i = s & 1, r = [], n = true;
        for (; !this.eat(t); )
          if (n ? n = false : this.expect(12), i && this.match(12))
            r.push(null);
          else {
            if (this.eat(t))
              break;
            if (this.match(21)) {
              if (r.push(this.parseAssignableListItemTypes(this.parseRestBinding(), s)), !this.checkCommaAfterRest(e)) {
                this.expect(t);
                break;
              }
            } else {
              let o = [];
              for (this.match(26) && this.hasPlugin("decorators") && this.raise(p.UnsupportedParameterDecorator, { at: this.state.startLoc }); this.match(26); )
                o.push(this.parseDecorator());
              r.push(this.parseAssignableListItem(s, o));
            }
          }
        return r;
      }
      parseBindingRestProperty(t) {
        return this.next(), t.argument = this.parseIdentifier(), this.checkCommaAfterRest(125), this.finishNode(t, "RestElement");
      }
      parseBindingProperty() {
        let t = this.startNode(), { type: e, startLoc: s } = this.state;
        return e === 21 ? this.parseBindingRestProperty(t) : (e === 136 ? (this.expectPlugin("destructuringPrivate", s), this.classScope.usePrivateName(this.state.value, s), t.key = this.parsePrivateName()) : this.parsePropertyName(t), t.method = false, this.parseObjPropValue(t, s, false, false, true, false));
      }
      parseAssignableListItem(t, e) {
        let s = this.parseMaybeDefault();
        this.parseAssignableListItemTypes(s, t);
        let i = this.parseMaybeDefault(s.loc.start, s);
        return e.length && (s.decorators = e), i;
      }
      parseAssignableListItemTypes(t, e) {
        return t;
      }
      parseMaybeDefault(t, e) {
        var i;
        if (t != null || (t = this.state.startLoc), e = (i = e) != null ? i : this.parseBindingAtom(), !this.eat(29))
          return e;
        let r = this.startNodeAt(t);
        return r.left = e, r.right = this.parseMaybeAssignAllowIn(), this.finishNode(r, "AssignmentPattern");
      }
      isValidLVal(t, e, s) {
        return rr({ AssignmentPattern: "left", RestElement: "argument", ObjectProperty: "value", ParenthesizedExpression: "expression", ArrayPattern: "elements", ObjectPattern: "properties" }, t);
      }
      checkLVal(t, { in: e, binding: s = 64, checkClashes: i = false, strictModeChanged: r = false, hasParenthesizedAncestor: n = false }) {
        var o;
        let h = t.type;
        if (this.isObjectMethod(t))
          return;
        if (h === "MemberExpression") {
          s !== 64 && this.raise(p.InvalidPropertyBindingPattern, { at: t });
          return;
        }
        if (h === "Identifier") {
          this.checkIdentifier(t, s, r);
          let { name: d } = t;
          i && (i.has(d) ? this.raise(p.ParamDupe, { at: t }) : i.add(d));
          return;
        }
        let l = this.isValidLVal(h, !(n || (o = t.extra) != null && o.parenthesized) && e.type === "AssignmentExpression", s);
        if (l === true)
          return;
        if (l === false) {
          let d = s === 64 ? p.InvalidLhs : p.InvalidLhsBinding;
          this.raise(d, { at: t, ancestor: e });
          return;
        }
        let [c, u] = Array.isArray(l) ? l : [l, h === "ParenthesizedExpression"], f = h === "ArrayPattern" || h === "ObjectPattern" || h === "ParenthesizedExpression" ? { type: h } : e;
        for (let d of [].concat(t[c]))
          d && this.checkLVal(d, { in: f, binding: s, checkClashes: i, strictModeChanged: r, hasParenthesizedAncestor: u });
      }
      checkIdentifier(t, e, s = false) {
        this.state.strict && (s ? is(t.name, this.inModule) : ss(t.name)) && (e === 64 ? this.raise(p.StrictEvalArguments, { at: t, referenceName: t.name }) : this.raise(p.StrictEvalArgumentsBinding, { at: t, bindingName: t.name })), e & 8192 && t.name === "let" && this.raise(p.LetInLexicalBinding, { at: t }), e & 64 || this.declareNameFromIdentifier(t, e);
      }
      declareNameFromIdentifier(t, e) {
        this.scope.declareName(t.name, e, t.loc.start);
      }
      checkToRestConversion(t, e) {
        switch (t.type) {
          case "ParenthesizedExpression":
            this.checkToRestConversion(t.expression, e);
            break;
          case "Identifier":
          case "MemberExpression":
            break;
          case "ArrayExpression":
          case "ObjectExpression":
            if (e)
              break;
          default:
            this.raise(p.InvalidRestAssignmentPattern, { at: t });
        }
      }
      checkCommaAfterRest(t) {
        return this.match(12) ? (this.raise(this.lookaheadCharCode() === t ? p.RestTrailingComma : p.ElementAfterRest, { at: this.state.startLoc }), true) : false;
      }
    }, ar = (a, t) => Object.hasOwnProperty.call(a, t) && a[t];
    function nr(a) {
      if (a == null)
        throw new Error(`Unexpected ${a} value.`);
      return a;
    }
    function Kt(a) {
      if (!a)
        throw new Error("Assert fail");
    }
    var y = $`typescript`({ AbstractMethodHasImplementation: ({ methodName: a }) => `Method '${a}' cannot have an implementation because it is marked abstract.`, AbstractPropertyHasInitializer: ({ propertyName: a }) => `Property '${a}' cannot have an initializer because it is marked abstract.`, AccesorCannotDeclareThisParameter: "'get' and 'set' accessors cannot declare 'this' parameters.", AccesorCannotHaveTypeParameters: "An accessor cannot have type parameters.", AccessorCannotBeOptional: "An 'accessor' property cannot be declared optional.", ClassMethodHasDeclare: "Class methods cannot have the 'declare' modifier.", ClassMethodHasReadonly: "Class methods cannot have the 'readonly' modifier.", ConstInitiailizerMustBeStringOrNumericLiteralOrLiteralEnumReference: "A 'const' initializer in an ambient context must be a string or numeric literal or literal enum reference.", ConstructorHasTypeParameters: "Type parameters cannot appear on a constructor declaration.", DeclareAccessor: ({ kind: a }) => `'declare' is not allowed in ${a}ters.`, DeclareClassFieldHasInitializer: "Initializers are not allowed in ambient contexts.", DeclareFunctionHasImplementation: "An implementation cannot be declared in ambient contexts.", DuplicateAccessibilityModifier: ({ modifier: a }) => "Accessibility modifier already seen.", DuplicateModifier: ({ modifier: a }) => `Duplicate modifier: '${a}'.`, EmptyHeritageClauseType: ({ token: a }) => `'${a}' list cannot be empty.`, EmptyTypeArguments: "Type argument list cannot be empty.", EmptyTypeParameters: "Type parameter list cannot be empty.", ExpectedAmbientAfterExportDeclare: "'export declare' must be followed by an ambient declaration.", ImportAliasHasImportType: "An import alias can not use 'import type'.", ImportReflectionHasImportType: "An `import module` declaration can not use `type` modifier", IncompatibleModifiers: ({ modifiers: a }) => `'${a[0]}' modifier cannot be used with '${a[1]}' modifier.`, IndexSignatureHasAbstract: "Index signatures cannot have the 'abstract' modifier.", IndexSignatureHasAccessibility: ({ modifier: a }) => `Index signatures cannot have an accessibility modifier ('${a}').`, IndexSignatureHasDeclare: "Index signatures cannot have the 'declare' modifier.", IndexSignatureHasOverride: "'override' modifier cannot appear on an index signature.", IndexSignatureHasStatic: "Index signatures cannot have the 'static' modifier.", InitializerNotAllowedInAmbientContext: "Initializers are not allowed in ambient contexts.", InvalidModifierOnTypeMember: ({ modifier: a }) => `'${a}' modifier cannot appear on a type member.`, InvalidModifierOnTypeParameter: ({ modifier: a }) => `'${a}' modifier cannot appear on a type parameter.`, InvalidModifierOnTypeParameterPositions: ({ modifier: a }) => `'${a}' modifier can only appear on a type parameter of a class, interface or type alias.`, InvalidModifiersOrder: ({ orderedModifiers: a }) => `'${a[0]}' modifier must precede '${a[1]}' modifier.`, InvalidPropertyAccessAfterInstantiationExpression: "Invalid property access after an instantiation expression. You can either wrap the instantiation expression in parentheses, or delete the type arguments.", InvalidTupleMemberLabel: "Tuple members must be labeled with a simple identifier.", MissingInterfaceName: "'interface' declarations must be followed by an identifier.", MixedLabeledAndUnlabeledElements: "Tuple members must all have names or all not have names.", NonAbstractClassHasAbstractMethod: "Abstract methods can only appear within an abstract class.", NonClassMethodPropertyHasAbstractModifer: "'abstract' modifier can only appear on a class, method, or property declaration.", OptionalTypeBeforeRequired: "A required element cannot follow an optional element.", OverrideNotInSubClass: "This member cannot have an 'override' modifier because its containing class does not extend another class.", PatternIsOptional: "A binding pattern parameter cannot be optional in an implementation signature.", PrivateElementHasAbstract: "Private elements cannot have the 'abstract' modifier.", PrivateElementHasAccessibility: ({ modifier: a }) => `Private elements cannot have an accessibility modifier ('${a}').`, ReadonlyForMethodSignature: "'readonly' modifier can only appear on a property declaration or index signature.", ReservedArrowTypeParam: "This syntax is reserved in files with the .mts or .cts extension. Add a trailing comma, as in `<T,>() => ...`.", ReservedTypeAssertion: "This syntax is reserved in files with the .mts or .cts extension. Use an `as` expression instead.", SetAccesorCannotHaveOptionalParameter: "A 'set' accessor cannot have an optional parameter.", SetAccesorCannotHaveRestParameter: "A 'set' accessor cannot have rest parameter.", SetAccesorCannotHaveReturnType: "A 'set' accessor cannot have a return type annotation.", SingleTypeParameterWithoutTrailingComma: ({ typeParameterName: a }) => `Single type parameter ${a} should have a trailing comma. Example usage: <${a},>.`, StaticBlockCannotHaveModifier: "Static class blocks cannot have any modifier.", TupleOptionalAfterType: "A labeled tuple optional element must be declared using a question mark after the name and before the colon (`name?: type`), rather than after the type (`name: type?`).", TypeAnnotationAfterAssign: "Type annotations must come before default assignments, e.g. instead of `age = 25: number` use `age: number = 25`.", TypeImportCannotSpecifyDefaultAndNamed: "A type-only import can specify a default import or named bindings, but not both.", TypeModifierIsUsedInTypeExports: "The 'type' modifier cannot be used on a named export when 'export type' is used on its export statement.", TypeModifierIsUsedInTypeImports: "The 'type' modifier cannot be used on a named import when 'import type' is used on its import statement.", UnexpectedParameterModifier: "A parameter property is only allowed in a constructor implementation.", UnexpectedReadonly: "'readonly' type modifier is only permitted on array and tuple literal types.", UnexpectedTypeAnnotation: "Did not expect a type annotation here.", UnexpectedTypeCastInParameter: "Unexpected type cast in parameter position.", UnsupportedImportTypeArgument: "Argument in a type import must be a string literal.", UnsupportedParameterPropertyKind: "A parameter property may not be declared using a binding pattern.", UnsupportedSignatureParameterKind: ({ type: a }) => `Name in a signature must be an Identifier, ObjectPattern or ArrayPattern, instead got ${a}.` });
    function or(a) {
      switch (a) {
        case "any":
          return "TSAnyKeyword";
        case "boolean":
          return "TSBooleanKeyword";
        case "bigint":
          return "TSBigIntKeyword";
        case "never":
          return "TSNeverKeyword";
        case "number":
          return "TSNumberKeyword";
        case "object":
          return "TSObjectKeyword";
        case "string":
          return "TSStringKeyword";
        case "symbol":
          return "TSSymbolKeyword";
        case "undefined":
          return "TSUndefinedKeyword";
        case "unknown":
          return "TSUnknownKeyword";
        default:
          return;
      }
    }
    function qt(a) {
      return a === "private" || a === "public" || a === "protected";
    }
    function hr(a) {
      return a === "in" || a === "out";
    }
    var lr = (a) => class extends a {
      constructor(...e) {
        super(...e), this.tsParseInOutModifiers = this.tsParseModifiers.bind(this, { allowedModifiers: ["in", "out"], disallowedModifiers: ["const", "public", "private", "protected", "readonly", "declare", "abstract", "override"], errorTemplate: y.InvalidModifierOnTypeParameter }), this.tsParseConstModifier = this.tsParseModifiers.bind(this, { allowedModifiers: ["const"], disallowedModifiers: ["in", "out"], errorTemplate: y.InvalidModifierOnTypeParameterPositions }), this.tsParseInOutConstModifiers = this.tsParseModifiers.bind(this, { allowedModifiers: ["in", "out", "const"], disallowedModifiers: ["public", "private", "protected", "readonly", "declare", "abstract", "override"], errorTemplate: y.InvalidModifierOnTypeParameter });
      }
      getScopeHandler() {
        return mt;
      }
      tsIsIdentifier() {
        return S(this.state.type);
      }
      tsTokenCanFollowModifier() {
        return (this.match(0) || this.match(5) || this.match(55) || this.match(21) || this.match(136) || this.isLiteralPropertyName()) && !this.hasPrecedingLineBreak();
      }
      tsNextTokenCanFollowModifier() {
        return this.next(), this.tsTokenCanFollowModifier();
      }
      tsParseModifier(e, s) {
        if (!S(this.state.type) && this.state.type !== 58 && this.state.type !== 75)
          return;
        let i = this.state.value;
        if (e.indexOf(i) !== -1) {
          if (s && this.tsIsStartOfStaticBlocks())
            return;
          if (this.tsTryParse(this.tsNextTokenCanFollowModifier.bind(this)))
            return i;
        }
      }
      tsParseModifiers({ allowedModifiers: e, disallowedModifiers: s, stopOnStartOfClassStaticBlock: i, errorTemplate: r = y.InvalidModifierOnTypeMember }, n) {
        let o = (l, c, u, f) => {
          c === u && n[f] && this.raise(y.InvalidModifiersOrder, { at: l, orderedModifiers: [u, f] });
        }, h = (l, c, u, f) => {
          (n[u] && c === f || n[f] && c === u) && this.raise(y.IncompatibleModifiers, { at: l, modifiers: [u, f] });
        };
        for (; ; ) {
          let { startLoc: l } = this.state, c = this.tsParseModifier(e.concat(s ?? []), i);
          if (!c)
            break;
          qt(c) ? n.accessibility ? this.raise(y.DuplicateAccessibilityModifier, { at: l, modifier: c }) : (o(l, c, c, "override"), o(l, c, c, "static"), o(l, c, c, "readonly"), n.accessibility = c) : hr(c) ? (n[c] && this.raise(y.DuplicateModifier, { at: l, modifier: c }), n[c] = true, o(l, c, "in", "out")) : (Object.hasOwnProperty.call(n, c) ? this.raise(y.DuplicateModifier, { at: l, modifier: c }) : (o(l, c, "static", "readonly"), o(l, c, "static", "override"), o(l, c, "override", "readonly"), o(l, c, "abstract", "override"), h(l, c, "declare", "override"), h(l, c, "static", "abstract")), n[c] = true), s != null && s.includes(c) && this.raise(r, { at: l, modifier: c });
        }
      }
      tsIsListTerminator(e) {
        switch (e) {
          case "EnumMembers":
          case "TypeMembers":
            return this.match(8);
          case "HeritageClauseElement":
            return this.match(5);
          case "TupleElementTypes":
            return this.match(3);
          case "TypeParametersOrArguments":
            return this.match(48);
        }
      }
      tsParseList(e, s) {
        let i = [];
        for (; !this.tsIsListTerminator(e); )
          i.push(s());
        return i;
      }
      tsParseDelimitedList(e, s, i) {
        return nr(this.tsParseDelimitedListWorker(e, s, true, i));
      }
      tsParseDelimitedListWorker(e, s, i, r) {
        let n = [], o = -1;
        for (; !this.tsIsListTerminator(e); ) {
          o = -1;
          let h = s();
          if (h == null)
            return;
          if (n.push(h), this.eat(12)) {
            o = this.state.lastTokStart;
            continue;
          }
          if (this.tsIsListTerminator(e))
            break;
          i && this.expect(12);
          return;
        }
        return r && (r.value = o), n;
      }
      tsParseBracketedList(e, s, i, r, n) {
        r || (i ? this.expect(0) : this.expect(47));
        let o = this.tsParseDelimitedList(e, s, n);
        return i ? this.expect(3) : this.expect(48), o;
      }
      tsParseImportType() {
        let e = this.startNode();
        return this.expect(83), this.expect(10), this.match(131) || this.raise(y.UnsupportedImportTypeArgument, { at: this.state.startLoc }), e.argument = super.parseExprAtom(), this.expect(11), this.eat(16) && (e.qualifier = this.tsParseEntityName()), this.match(47) && (e.typeParameters = this.tsParseTypeArguments()), this.finishNode(e, "TSImportType");
      }
      tsParseEntityName(e = true) {
        let s = this.parseIdentifier(e);
        for (; this.eat(16); ) {
          let i = this.startNodeAtNode(s);
          i.left = s, i.right = this.parseIdentifier(e), s = this.finishNode(i, "TSQualifiedName");
        }
        return s;
      }
      tsParseTypeReference() {
        let e = this.startNode();
        return e.typeName = this.tsParseEntityName(), !this.hasPrecedingLineBreak() && this.match(47) && (e.typeParameters = this.tsParseTypeArguments()), this.finishNode(e, "TSTypeReference");
      }
      tsParseThisTypePredicate(e) {
        this.next();
        let s = this.startNodeAtNode(e);
        return s.parameterName = e, s.typeAnnotation = this.tsParseTypeAnnotation(false), s.asserts = false, this.finishNode(s, "TSTypePredicate");
      }
      tsParseThisTypeNode() {
        let e = this.startNode();
        return this.next(), this.finishNode(e, "TSThisType");
      }
      tsParseTypeQuery() {
        let e = this.startNode();
        return this.expect(87), this.match(83) ? e.exprName = this.tsParseImportType() : e.exprName = this.tsParseEntityName(), !this.hasPrecedingLineBreak() && this.match(47) && (e.typeParameters = this.tsParseTypeArguments()), this.finishNode(e, "TSTypeQuery");
      }
      tsParseTypeParameter(e) {
        let s = this.startNode();
        return e(s), s.name = this.tsParseTypeParameterName(), s.constraint = this.tsEatThenParseType(81), s.default = this.tsEatThenParseType(29), this.finishNode(s, "TSTypeParameter");
      }
      tsTryParseTypeParameters(e) {
        if (this.match(47))
          return this.tsParseTypeParameters(e);
      }
      tsParseTypeParameters(e) {
        let s = this.startNode();
        this.match(47) || this.match(140) ? this.next() : this.unexpected();
        let i = { value: -1 };
        return s.params = this.tsParseBracketedList("TypeParametersOrArguments", this.tsParseTypeParameter.bind(this, e), false, true, i), s.params.length === 0 && this.raise(y.EmptyTypeParameters, { at: s }), i.value !== -1 && this.addExtra(s, "trailingComma", i.value), this.finishNode(s, "TSTypeParameterDeclaration");
      }
      tsFillSignature(e, s) {
        let i = e === 19, r = "parameters", n = "typeAnnotation";
        s.typeParameters = this.tsTryParseTypeParameters(this.tsParseConstModifier), this.expect(10), s[r] = this.tsParseBindingListForSignature(), i ? s[n] = this.tsParseTypeOrTypePredicateAnnotation(e) : this.match(e) && (s[n] = this.tsParseTypeOrTypePredicateAnnotation(e));
      }
      tsParseBindingListForSignature() {
        let e = super.parseBindingList(11, 41, 2);
        for (let s of e) {
          let { type: i } = s;
          (i === "AssignmentPattern" || i === "TSParameterProperty") && this.raise(y.UnsupportedSignatureParameterKind, { at: s, type: i });
        }
        return e;
      }
      tsParseTypeMemberSemicolon() {
        !this.eat(12) && !this.isLineTerminator() && this.expect(13);
      }
      tsParseSignatureMember(e, s) {
        return this.tsFillSignature(14, s), this.tsParseTypeMemberSemicolon(), this.finishNode(s, e);
      }
      tsIsUnambiguouslyIndexSignature() {
        return this.next(), S(this.state.type) ? (this.next(), this.match(14)) : false;
      }
      tsTryParseIndexSignature(e) {
        if (!(this.match(0) && this.tsLookAhead(this.tsIsUnambiguouslyIndexSignature.bind(this))))
          return;
        this.expect(0);
        let s = this.parseIdentifier();
        s.typeAnnotation = this.tsParseTypeAnnotation(), this.resetEndLocation(s), this.expect(3), e.parameters = [s];
        let i = this.tsTryParseTypeAnnotation();
        return i && (e.typeAnnotation = i), this.tsParseTypeMemberSemicolon(), this.finishNode(e, "TSIndexSignature");
      }
      tsParsePropertyOrMethodSignature(e, s) {
        this.eat(17) && (e.optional = true);
        let i = e;
        if (this.match(10) || this.match(47)) {
          s && this.raise(y.ReadonlyForMethodSignature, { at: e });
          let r = i;
          r.kind && this.match(47) && this.raise(y.AccesorCannotHaveTypeParameters, { at: this.state.curPosition() }), this.tsFillSignature(14, r), this.tsParseTypeMemberSemicolon();
          let n = "parameters", o = "typeAnnotation";
          if (r.kind === "get")
            r[n].length > 0 && (this.raise(p.BadGetterArity, { at: this.state.curPosition() }), this.isThisParam(r[n][0]) && this.raise(y.AccesorCannotDeclareThisParameter, { at: this.state.curPosition() }));
          else if (r.kind === "set") {
            if (r[n].length !== 1)
              this.raise(p.BadSetterArity, { at: this.state.curPosition() });
            else {
              let h = r[n][0];
              this.isThisParam(h) && this.raise(y.AccesorCannotDeclareThisParameter, { at: this.state.curPosition() }), h.type === "Identifier" && h.optional && this.raise(y.SetAccesorCannotHaveOptionalParameter, { at: this.state.curPosition() }), h.type === "RestElement" && this.raise(y.SetAccesorCannotHaveRestParameter, { at: this.state.curPosition() });
            }
            r[o] && this.raise(y.SetAccesorCannotHaveReturnType, { at: r[o] });
          } else
            r.kind = "method";
          return this.finishNode(r, "TSMethodSignature");
        } else {
          let r = i;
          s && (r.readonly = true);
          let n = this.tsTryParseTypeAnnotation();
          return n && (r.typeAnnotation = n), this.tsParseTypeMemberSemicolon(), this.finishNode(r, "TSPropertySignature");
        }
      }
      tsParseTypeMember() {
        let e = this.startNode();
        if (this.match(10) || this.match(47))
          return this.tsParseSignatureMember("TSCallSignatureDeclaration", e);
        if (this.match(77)) {
          let i = this.startNode();
          return this.next(), this.match(10) || this.match(47) ? this.tsParseSignatureMember("TSConstructSignatureDeclaration", e) : (e.key = this.createIdentifier(i, "new"), this.tsParsePropertyOrMethodSignature(e, false));
        }
        this.tsParseModifiers({ allowedModifiers: ["readonly"], disallowedModifiers: ["declare", "abstract", "private", "protected", "public", "static", "override"] }, e);
        let s = this.tsTryParseIndexSignature(e);
        return s || (super.parsePropertyName(e), !e.computed && e.key.type === "Identifier" && (e.key.name === "get" || e.key.name === "set") && this.tsTokenCanFollowModifier() && (e.kind = e.key.name, super.parsePropertyName(e)), this.tsParsePropertyOrMethodSignature(e, !!e.readonly));
      }
      tsParseTypeLiteral() {
        let e = this.startNode();
        return e.members = this.tsParseObjectTypeMembers(), this.finishNode(e, "TSTypeLiteral");
      }
      tsParseObjectTypeMembers() {
        this.expect(5);
        let e = this.tsParseList("TypeMembers", this.tsParseTypeMember.bind(this));
        return this.expect(8), e;
      }
      tsIsStartOfMappedType() {
        return this.next(), this.eat(53) ? this.isContextual(120) : (this.isContextual(120) && this.next(), !this.match(0) || (this.next(), !this.tsIsIdentifier()) ? false : (this.next(), this.match(58)));
      }
      tsParseMappedTypeParameter() {
        let e = this.startNode();
        return e.name = this.tsParseTypeParameterName(), e.constraint = this.tsExpectThenParseType(58), this.finishNode(e, "TSTypeParameter");
      }
      tsParseMappedType() {
        let e = this.startNode();
        return this.expect(5), this.match(53) ? (e.readonly = this.state.value, this.next(), this.expectContextual(120)) : this.eatContextual(120) && (e.readonly = true), this.expect(0), e.typeParameter = this.tsParseMappedTypeParameter(), e.nameType = this.eatContextual(93) ? this.tsParseType() : null, this.expect(3), this.match(53) ? (e.optional = this.state.value, this.next(), this.expect(17)) : this.eat(17) && (e.optional = true), e.typeAnnotation = this.tsTryParseType(), this.semicolon(), this.expect(8), this.finishNode(e, "TSMappedType");
      }
      tsParseTupleType() {
        let e = this.startNode();
        e.elementTypes = this.tsParseBracketedList("TupleElementTypes", this.tsParseTupleElementType.bind(this), true, false);
        let s = false, i = null;
        return e.elementTypes.forEach((r) => {
          let { type: o } = r;
          s && o !== "TSRestType" && o !== "TSOptionalType" && !(o === "TSNamedTupleMember" && r.optional) && this.raise(y.OptionalTypeBeforeRequired, { at: r }), s || (s = o === "TSNamedTupleMember" && r.optional || o === "TSOptionalType");
          let h = o;
          o === "TSRestType" && (r = r.typeAnnotation, h = r.type);
          let l = h === "TSNamedTupleMember";
          i != null || (i = l), i !== l && this.raise(y.MixedLabeledAndUnlabeledElements, { at: r });
        }), this.finishNode(e, "TSTupleType");
      }
      tsParseTupleElementType() {
        let { startLoc: e } = this.state, s = this.eat(21), i, r, n, o, l = M(this.state.type) ? this.lookaheadCharCode() : null;
        if (l === 58)
          i = true, n = false, r = this.parseIdentifier(true), this.expect(14), o = this.tsParseType();
        else if (l === 63) {
          n = true;
          let c = this.state.startLoc, u = this.state.value, f = this.tsParseNonArrayType();
          this.lookaheadCharCode() === 58 ? (i = true, r = this.createIdentifier(this.startNodeAt(c), u), this.expect(17), this.expect(14), o = this.tsParseType()) : (i = false, o = f, this.expect(17));
        } else
          o = this.tsParseType(), n = this.eat(17), i = this.eat(14);
        if (i) {
          let c;
          r ? (c = this.startNodeAtNode(r), c.optional = n, c.label = r, c.elementType = o, this.eat(17) && (c.optional = true, this.raise(y.TupleOptionalAfterType, { at: this.state.lastTokStartLoc }))) : (c = this.startNodeAtNode(o), c.optional = n, this.raise(y.InvalidTupleMemberLabel, { at: o }), c.label = o, c.elementType = this.tsParseType()), o = this.finishNode(c, "TSNamedTupleMember");
        } else if (n) {
          let c = this.startNodeAtNode(o);
          c.typeAnnotation = o, o = this.finishNode(c, "TSOptionalType");
        }
        if (s) {
          let c = this.startNodeAt(e);
          c.typeAnnotation = o, o = this.finishNode(c, "TSRestType");
        }
        return o;
      }
      tsParseParenthesizedType() {
        let e = this.startNode();
        return this.expect(10), e.typeAnnotation = this.tsParseType(), this.expect(11), this.finishNode(e, "TSParenthesizedType");
      }
      tsParseFunctionOrConstructorType(e, s) {
        let i = this.startNode();
        return e === "TSConstructorType" && (i.abstract = !!s, s && this.next(), this.next()), this.tsInAllowConditionalTypesContext(() => this.tsFillSignature(19, i)), this.finishNode(i, e);
      }
      tsParseLiteralTypeNode() {
        let e = this.startNode();
        switch (this.state.type) {
          case 132:
          case 133:
          case 131:
          case 85:
          case 86:
            e.literal = super.parseExprAtom();
            break;
          default:
            this.unexpected();
        }
        return this.finishNode(e, "TSLiteralType");
      }
      tsParseTemplateLiteralType() {
        let e = this.startNode();
        return e.literal = super.parseTemplate(false), this.finishNode(e, "TSLiteralType");
      }
      parseTemplateSubstitution() {
        return this.state.inType ? this.tsParseType() : super.parseTemplateSubstitution();
      }
      tsParseThisTypeOrThisTypePredicate() {
        let e = this.tsParseThisTypeNode();
        return this.isContextual(114) && !this.hasPrecedingLineBreak() ? this.tsParseThisTypePredicate(e) : e;
      }
      tsParseNonArrayType() {
        switch (this.state.type) {
          case 131:
          case 132:
          case 133:
          case 85:
          case 86:
            return this.tsParseLiteralTypeNode();
          case 53:
            if (this.state.value === "-") {
              let e = this.startNode(), s = this.lookahead();
              return s.type !== 132 && s.type !== 133 && this.unexpected(), e.literal = this.parseMaybeUnary(), this.finishNode(e, "TSLiteralType");
            }
            break;
          case 78:
            return this.tsParseThisTypeOrThisTypePredicate();
          case 87:
            return this.tsParseTypeQuery();
          case 83:
            return this.tsParseImportType();
          case 5:
            return this.tsLookAhead(this.tsIsStartOfMappedType.bind(this)) ? this.tsParseMappedType() : this.tsParseTypeLiteral();
          case 0:
            return this.tsParseTupleType();
          case 10:
            return this.tsParseParenthesizedType();
          case 25:
          case 24:
            return this.tsParseTemplateLiteralType();
          default: {
            let { type: e } = this.state;
            if (S(e) || e === 88 || e === 84) {
              let s = e === 88 ? "TSVoidKeyword" : e === 84 ? "TSNullKeyword" : or(this.state.value);
              if (s !== void 0 && this.lookaheadCharCode() !== 46) {
                let i = this.startNode();
                return this.next(), this.finishNode(i, s);
              }
              return this.tsParseTypeReference();
            }
          }
        }
        this.unexpected();
      }
      tsParseArrayTypeOrHigher() {
        let e = this.tsParseNonArrayType();
        for (; !this.hasPrecedingLineBreak() && this.eat(0); )
          if (this.match(3)) {
            let s = this.startNodeAtNode(e);
            s.elementType = e, this.expect(3), e = this.finishNode(s, "TSArrayType");
          } else {
            let s = this.startNodeAtNode(e);
            s.objectType = e, s.indexType = this.tsParseType(), this.expect(3), e = this.finishNode(s, "TSIndexedAccessType");
          }
        return e;
      }
      tsParseTypeOperator() {
        let e = this.startNode(), s = this.state.value;
        return this.next(), e.operator = s, e.typeAnnotation = this.tsParseTypeOperatorOrHigher(), s === "readonly" && this.tsCheckTypeAnnotationForReadOnly(e), this.finishNode(e, "TSTypeOperator");
      }
      tsCheckTypeAnnotationForReadOnly(e) {
        switch (e.typeAnnotation.type) {
          case "TSTupleType":
          case "TSArrayType":
            return;
          default:
            this.raise(y.UnexpectedReadonly, { at: e });
        }
      }
      tsParseInferType() {
        let e = this.startNode();
        this.expectContextual(113);
        let s = this.startNode();
        return s.name = this.tsParseTypeParameterName(), s.constraint = this.tsTryParse(() => this.tsParseConstraintForInferType()), e.typeParameter = this.finishNode(s, "TSTypeParameter"), this.finishNode(e, "TSInferType");
      }
      tsParseConstraintForInferType() {
        if (this.eat(81)) {
          let e = this.tsInDisallowConditionalTypesContext(() => this.tsParseType());
          if (this.state.inDisallowConditionalTypesContext || !this.match(17))
            return e;
        }
      }
      tsParseTypeOperatorOrHigher() {
        return Ci(this.state.type) && !this.state.containsEsc ? this.tsParseTypeOperator() : this.isContextual(113) ? this.tsParseInferType() : this.tsInAllowConditionalTypesContext(() => this.tsParseArrayTypeOrHigher());
      }
      tsParseUnionOrIntersectionType(e, s, i) {
        let r = this.startNode(), n = this.eat(i), o = [];
        do
          o.push(s());
        while (this.eat(i));
        return o.length === 1 && !n ? o[0] : (r.types = o, this.finishNode(r, e));
      }
      tsParseIntersectionTypeOrHigher() {
        return this.tsParseUnionOrIntersectionType("TSIntersectionType", this.tsParseTypeOperatorOrHigher.bind(this), 45);
      }
      tsParseUnionTypeOrHigher() {
        return this.tsParseUnionOrIntersectionType("TSUnionType", this.tsParseIntersectionTypeOrHigher.bind(this), 43);
      }
      tsIsStartOfFunctionType() {
        return this.match(47) ? true : this.match(10) && this.tsLookAhead(this.tsIsUnambiguouslyStartOfFunctionType.bind(this));
      }
      tsSkipParameterStart() {
        if (S(this.state.type) || this.match(78))
          return this.next(), true;
        if (this.match(5)) {
          let { errors: e } = this.state, s = e.length;
          try {
            return this.parseObjectLike(8, true), e.length === s;
          } catch {
            return false;
          }
        }
        if (this.match(0)) {
          this.next();
          let { errors: e } = this.state, s = e.length;
          try {
            return super.parseBindingList(3, 93, 1), e.length === s;
          } catch {
            return false;
          }
        }
        return false;
      }
      tsIsUnambiguouslyStartOfFunctionType() {
        return this.next(), !!(this.match(11) || this.match(21) || this.tsSkipParameterStart() && (this.match(14) || this.match(12) || this.match(17) || this.match(29) || this.match(11) && (this.next(), this.match(19))));
      }
      tsParseTypeOrTypePredicateAnnotation(e) {
        return this.tsInType(() => {
          let s = this.startNode();
          this.expect(e);
          let i = this.startNode(), r = !!this.tsTryParse(this.tsParseTypePredicateAsserts.bind(this));
          if (r && this.match(78)) {
            let h = this.tsParseThisTypeOrThisTypePredicate();
            return h.type === "TSThisType" ? (i.parameterName = h, i.asserts = true, i.typeAnnotation = null, h = this.finishNode(i, "TSTypePredicate")) : (this.resetStartLocationFromNode(h, i), h.asserts = true), s.typeAnnotation = h, this.finishNode(s, "TSTypeAnnotation");
          }
          let n = this.tsIsIdentifier() && this.tsTryParse(this.tsParseTypePredicatePrefix.bind(this));
          if (!n)
            return r ? (i.parameterName = this.parseIdentifier(), i.asserts = r, i.typeAnnotation = null, s.typeAnnotation = this.finishNode(i, "TSTypePredicate"), this.finishNode(s, "TSTypeAnnotation")) : this.tsParseTypeAnnotation(false, s);
          let o = this.tsParseTypeAnnotation(false);
          return i.parameterName = n, i.typeAnnotation = o, i.asserts = r, s.typeAnnotation = this.finishNode(i, "TSTypePredicate"), this.finishNode(s, "TSTypeAnnotation");
        });
      }
      tsTryParseTypeOrTypePredicateAnnotation() {
        if (this.match(14))
          return this.tsParseTypeOrTypePredicateAnnotation(14);
      }
      tsTryParseTypeAnnotation() {
        if (this.match(14))
          return this.tsParseTypeAnnotation();
      }
      tsTryParseType() {
        return this.tsEatThenParseType(14);
      }
      tsParseTypePredicatePrefix() {
        let e = this.parseIdentifier();
        if (this.isContextual(114) && !this.hasPrecedingLineBreak())
          return this.next(), e;
      }
      tsParseTypePredicateAsserts() {
        if (this.state.type !== 107)
          return false;
        let e = this.state.containsEsc;
        return this.next(), !S(this.state.type) && !this.match(78) ? false : (e && this.raise(p.InvalidEscapedReservedWord, { at: this.state.lastTokStartLoc, reservedWord: "asserts" }), true);
      }
      tsParseTypeAnnotation(e = true, s = this.startNode()) {
        return this.tsInType(() => {
          e && this.expect(14), s.typeAnnotation = this.tsParseType();
        }), this.finishNode(s, "TSTypeAnnotation");
      }
      tsParseType() {
        Kt(this.state.inType);
        let e = this.tsParseNonConditionalType();
        if (this.state.inDisallowConditionalTypesContext || this.hasPrecedingLineBreak() || !this.eat(81))
          return e;
        let s = this.startNodeAtNode(e);
        return s.checkType = e, s.extendsType = this.tsInDisallowConditionalTypesContext(() => this.tsParseNonConditionalType()), this.expect(17), s.trueType = this.tsInAllowConditionalTypesContext(() => this.tsParseType()), this.expect(14), s.falseType = this.tsInAllowConditionalTypesContext(() => this.tsParseType()), this.finishNode(s, "TSConditionalType");
      }
      isAbstractConstructorSignature() {
        return this.isContextual(122) && this.lookahead().type === 77;
      }
      tsParseNonConditionalType() {
        return this.tsIsStartOfFunctionType() ? this.tsParseFunctionOrConstructorType("TSFunctionType") : this.match(77) ? this.tsParseFunctionOrConstructorType("TSConstructorType") : this.isAbstractConstructorSignature() ? this.tsParseFunctionOrConstructorType("TSConstructorType", true) : this.tsParseUnionTypeOrHigher();
      }
      tsParseTypeAssertion() {
        this.getPluginOption("typescript", "disallowAmbiguousJSXLike") && this.raise(y.ReservedTypeAssertion, { at: this.state.startLoc });
        let e = this.startNode();
        return e.typeAnnotation = this.tsInType(() => (this.next(), this.match(75) ? this.tsParseTypeReference() : this.tsParseType())), this.expect(48), e.expression = this.parseMaybeUnary(), this.finishNode(e, "TSTypeAssertion");
      }
      tsParseHeritageClause(e) {
        let s = this.state.startLoc, i = this.tsParseDelimitedList("HeritageClauseElement", () => {
          let r = this.startNode();
          return r.expression = this.tsParseEntityName(), this.match(47) && (r.typeParameters = this.tsParseTypeArguments()), this.finishNode(r, "TSExpressionWithTypeArguments");
        });
        return i.length || this.raise(y.EmptyHeritageClauseType, { at: s, token: e }), i;
      }
      tsParseInterfaceDeclaration(e, s = {}) {
        if (this.hasFollowingLineBreak())
          return null;
        this.expectContextual(127), s.declare && (e.declare = true), S(this.state.type) ? (e.id = this.parseIdentifier(), this.checkIdentifier(e.id, 130)) : (e.id = null, this.raise(y.MissingInterfaceName, { at: this.state.startLoc })), e.typeParameters = this.tsTryParseTypeParameters(this.tsParseInOutConstModifiers), this.eat(81) && (e.extends = this.tsParseHeritageClause("extends"));
        let i = this.startNode();
        return i.body = this.tsInType(this.tsParseObjectTypeMembers.bind(this)), e.body = this.finishNode(i, "TSInterfaceBody"), this.finishNode(e, "TSInterfaceDeclaration");
      }
      tsParseTypeAliasDeclaration(e) {
        return e.id = this.parseIdentifier(), this.checkIdentifier(e.id, 2), e.typeAnnotation = this.tsInType(() => {
          if (e.typeParameters = this.tsTryParseTypeParameters(this.tsParseInOutModifiers), this.expect(29), this.isContextual(112) && this.lookahead().type !== 16) {
            let s = this.startNode();
            return this.next(), this.finishNode(s, "TSIntrinsicKeyword");
          }
          return this.tsParseType();
        }), this.semicolon(), this.finishNode(e, "TSTypeAliasDeclaration");
      }
      tsInNoContext(e) {
        let s = this.state.context;
        this.state.context = [s[0]];
        try {
          return e();
        } finally {
          this.state.context = s;
        }
      }
      tsInType(e) {
        let s = this.state.inType;
        this.state.inType = true;
        try {
          return e();
        } finally {
          this.state.inType = s;
        }
      }
      tsInDisallowConditionalTypesContext(e) {
        let s = this.state.inDisallowConditionalTypesContext;
        this.state.inDisallowConditionalTypesContext = true;
        try {
          return e();
        } finally {
          this.state.inDisallowConditionalTypesContext = s;
        }
      }
      tsInAllowConditionalTypesContext(e) {
        let s = this.state.inDisallowConditionalTypesContext;
        this.state.inDisallowConditionalTypesContext = false;
        try {
          return e();
        } finally {
          this.state.inDisallowConditionalTypesContext = s;
        }
      }
      tsEatThenParseType(e) {
        if (this.match(e))
          return this.tsNextThenParseType();
      }
      tsExpectThenParseType(e) {
        return this.tsInType(() => (this.expect(e), this.tsParseType()));
      }
      tsNextThenParseType() {
        return this.tsInType(() => (this.next(), this.tsParseType()));
      }
      tsParseEnumMember() {
        let e = this.startNode();
        return e.id = this.match(131) ? super.parseStringLiteral(this.state.value) : this.parseIdentifier(true), this.eat(29) && (e.initializer = super.parseMaybeAssignAllowIn()), this.finishNode(e, "TSEnumMember");
      }
      tsParseEnumDeclaration(e, s = {}) {
        return s.const && (e.const = true), s.declare && (e.declare = true), this.expectContextual(124), e.id = this.parseIdentifier(), this.checkIdentifier(e.id, e.const ? 8971 : 8459), this.expect(5), e.members = this.tsParseDelimitedList("EnumMembers", this.tsParseEnumMember.bind(this)), this.expect(8), this.finishNode(e, "TSEnumDeclaration");
      }
      tsParseModuleBlock() {
        let e = this.startNode();
        return this.scope.enter(0), this.expect(5), super.parseBlockOrModuleBlockBody(e.body = [], void 0, true, 8), this.scope.exit(), this.finishNode(e, "TSModuleBlock");
      }
      tsParseModuleOrNamespaceDeclaration(e, s = false) {
        if (e.id = this.parseIdentifier(), s || this.checkIdentifier(e.id, 1024), this.eat(16)) {
          let i = this.startNode();
          this.tsParseModuleOrNamespaceDeclaration(i, true), e.body = i;
        } else
          this.scope.enter(256), this.prodParam.enter(te), e.body = this.tsParseModuleBlock(), this.prodParam.exit(), this.scope.exit();
        return this.finishNode(e, "TSModuleDeclaration");
      }
      tsParseAmbientExternalModuleDeclaration(e) {
        return this.isContextual(110) ? (e.global = true, e.id = this.parseIdentifier()) : this.match(131) ? e.id = super.parseStringLiteral(this.state.value) : this.unexpected(), this.match(5) ? (this.scope.enter(256), this.prodParam.enter(te), e.body = this.tsParseModuleBlock(), this.prodParam.exit(), this.scope.exit()) : this.semicolon(), this.finishNode(e, "TSModuleDeclaration");
      }
      tsParseImportEqualsDeclaration(e, s, i) {
        e.isExport = i || false, e.id = s || this.parseIdentifier(), this.checkIdentifier(e.id, 4096), this.expect(29);
        let r = this.tsParseModuleReference();
        return e.importKind === "type" && r.type !== "TSExternalModuleReference" && this.raise(y.ImportAliasHasImportType, { at: r }), e.moduleReference = r, this.semicolon(), this.finishNode(e, "TSImportEqualsDeclaration");
      }
      tsIsExternalModuleReference() {
        return this.isContextual(117) && this.lookaheadCharCode() === 40;
      }
      tsParseModuleReference() {
        return this.tsIsExternalModuleReference() ? this.tsParseExternalModuleReference() : this.tsParseEntityName(false);
      }
      tsParseExternalModuleReference() {
        let e = this.startNode();
        return this.expectContextual(117), this.expect(10), this.match(131) || this.unexpected(), e.expression = super.parseExprAtom(), this.expect(11), this.sawUnambiguousESM = true, this.finishNode(e, "TSExternalModuleReference");
      }
      tsLookAhead(e) {
        let s = this.state.clone(), i = e();
        return this.state = s, i;
      }
      tsTryParseAndCatch(e) {
        let s = this.tryParse((i) => e() || i());
        if (!(s.aborted || !s.node))
          return s.error && (this.state = s.failState), s.node;
      }
      tsTryParse(e) {
        let s = this.state.clone(), i = e();
        if (i !== void 0 && i !== false)
          return i;
        this.state = s;
      }
      tsTryParseDeclare(e) {
        if (this.isLineTerminator())
          return;
        let s = this.state.type, i;
        return this.isContextual(99) && (s = 74, i = "let"), this.tsInAmbientContext(() => {
          switch (s) {
            case 68:
              return e.declare = true, super.parseFunctionStatement(e, false, false);
            case 80:
              return e.declare = true, this.parseClass(e, true, false);
            case 124:
              return this.tsParseEnumDeclaration(e, { declare: true });
            case 110:
              return this.tsParseAmbientExternalModuleDeclaration(e);
            case 75:
            case 74:
              return !this.match(75) || !this.isLookaheadContextual("enum") ? (e.declare = true, this.parseVarStatement(e, i || this.state.value, true)) : (this.expect(75), this.tsParseEnumDeclaration(e, { const: true, declare: true }));
            case 127: {
              let r = this.tsParseInterfaceDeclaration(e, { declare: true });
              if (r)
                return r;
            }
            default:
              if (S(s))
                return this.tsParseDeclaration(e, this.state.value, true, null);
          }
        });
      }
      tsTryParseExportDeclaration() {
        return this.tsParseDeclaration(this.startNode(), this.state.value, true, null);
      }
      tsParseExpressionStatement(e, s, i) {
        switch (s.name) {
          case "declare": {
            let r = this.tsTryParseDeclare(e);
            return r && (r.declare = true), r;
          }
          case "global":
            if (this.match(5)) {
              this.scope.enter(256), this.prodParam.enter(te);
              let r = e;
              return r.global = true, r.id = s, r.body = this.tsParseModuleBlock(), this.scope.exit(), this.prodParam.exit(), this.finishNode(r, "TSModuleDeclaration");
            }
            break;
          default:
            return this.tsParseDeclaration(e, s.name, false, i);
        }
      }
      tsParseDeclaration(e, s, i, r) {
        switch (s) {
          case "abstract":
            if (this.tsCheckLineTerminator(i) && (this.match(80) || S(this.state.type)))
              return this.tsParseAbstractDeclaration(e, r);
            break;
          case "module":
            if (this.tsCheckLineTerminator(i)) {
              if (this.match(131))
                return this.tsParseAmbientExternalModuleDeclaration(e);
              if (S(this.state.type))
                return this.tsParseModuleOrNamespaceDeclaration(e);
            }
            break;
          case "namespace":
            if (this.tsCheckLineTerminator(i) && S(this.state.type))
              return this.tsParseModuleOrNamespaceDeclaration(e);
            break;
          case "type":
            if (this.tsCheckLineTerminator(i) && S(this.state.type))
              return this.tsParseTypeAliasDeclaration(e);
            break;
        }
      }
      tsCheckLineTerminator(e) {
        return e ? this.hasFollowingLineBreak() ? false : (this.next(), true) : !this.isLineTerminator();
      }
      tsTryParseGenericAsyncArrowFunction(e) {
        if (!this.match(47))
          return;
        let s = this.state.maybeInArrowParameters;
        this.state.maybeInArrowParameters = true;
        let i = this.tsTryParseAndCatch(() => {
          let r = this.startNodeAt(e);
          return r.typeParameters = this.tsParseTypeParameters(this.tsParseConstModifier), super.parseFunctionParams(r), r.returnType = this.tsTryParseTypeOrTypePredicateAnnotation(), this.expect(19), r;
        });
        if (this.state.maybeInArrowParameters = s, !!i)
          return super.parseArrowExpression(i, null, true);
      }
      tsParseTypeArgumentsInExpression() {
        if (this.reScan_lt() === 47)
          return this.tsParseTypeArguments();
      }
      tsParseTypeArguments() {
        let e = this.startNode();
        return e.params = this.tsInType(() => this.tsInNoContext(() => (this.expect(47), this.tsParseDelimitedList("TypeParametersOrArguments", this.tsParseType.bind(this))))), e.params.length === 0 ? this.raise(y.EmptyTypeArguments, { at: e }) : !this.state.inType && this.curContext() === w.brace && this.reScan_lt_gt(), this.expect(48), this.finishNode(e, "TSTypeParameterInstantiation");
      }
      tsIsDeclarationStart() {
        return Ei(this.state.type);
      }
      isExportDefaultSpecifier() {
        return this.tsIsDeclarationStart() ? false : super.isExportDefaultSpecifier();
      }
      parseAssignableListItem(e, s) {
        let i = this.state.startLoc, r = {};
        this.tsParseModifiers({ allowedModifiers: ["public", "private", "protected", "override", "readonly"] }, r);
        let n = r.accessibility, o = r.override, h = r.readonly;
        !(e & 4) && (n || h || o) && this.raise(y.UnexpectedParameterModifier, { at: i });
        let l = this.parseMaybeDefault();
        this.parseAssignableListItemTypes(l, e);
        let c = this.parseMaybeDefault(l.loc.start, l);
        if (n || h || o) {
          let u = this.startNodeAt(i);
          return s.length && (u.decorators = s), n && (u.accessibility = n), h && (u.readonly = h), o && (u.override = o), c.type !== "Identifier" && c.type !== "AssignmentPattern" && this.raise(y.UnsupportedParameterPropertyKind, { at: u }), u.parameter = c, this.finishNode(u, "TSParameterProperty");
        }
        return s.length && (l.decorators = s), c;
      }
      isSimpleParameter(e) {
        return e.type === "TSParameterProperty" && super.isSimpleParameter(e.parameter) || super.isSimpleParameter(e);
      }
      tsDisallowOptionalPattern(e) {
        for (let s of e.params)
          s.type !== "Identifier" && s.optional && !this.state.isAmbientContext && this.raise(y.PatternIsOptional, { at: s });
      }
      setArrowFunctionParameters(e, s, i) {
        super.setArrowFunctionParameters(e, s, i), this.tsDisallowOptionalPattern(e);
      }
      parseFunctionBodyAndFinish(e, s, i = false) {
        this.match(14) && (e.returnType = this.tsParseTypeOrTypePredicateAnnotation(14));
        let r = s === "FunctionDeclaration" ? "TSDeclareFunction" : s === "ClassMethod" || s === "ClassPrivateMethod" ? "TSDeclareMethod" : void 0;
        return r && !this.match(5) && this.isLineTerminator() ? this.finishNode(e, r) : r === "TSDeclareFunction" && this.state.isAmbientContext && (this.raise(y.DeclareFunctionHasImplementation, { at: e }), e.declare) ? super.parseFunctionBodyAndFinish(e, r, i) : (this.tsDisallowOptionalPattern(e), super.parseFunctionBodyAndFinish(e, s, i));
      }
      registerFunctionStatementId(e) {
        !e.body && e.id ? this.checkIdentifier(e.id, 1024) : super.registerFunctionStatementId(e);
      }
      tsCheckForInvalidTypeCasts(e) {
        e.forEach((s) => {
          (s == null ? void 0 : s.type) === "TSTypeCastExpression" && this.raise(y.UnexpectedTypeAnnotation, { at: s.typeAnnotation });
        });
      }
      toReferencedList(e, s) {
        return this.tsCheckForInvalidTypeCasts(e), e;
      }
      parseArrayLike(e, s, i, r) {
        let n = super.parseArrayLike(e, s, i, r);
        return n.type === "ArrayExpression" && this.tsCheckForInvalidTypeCasts(n.elements), n;
      }
      parseSubscript(e, s, i, r) {
        if (!this.hasPrecedingLineBreak() && this.match(35)) {
          this.state.canStartJSXElement = false, this.next();
          let o = this.startNodeAt(s);
          return o.expression = e, this.finishNode(o, "TSNonNullExpression");
        }
        let n = false;
        if (this.match(18) && this.lookaheadCharCode() === 60) {
          if (i)
            return r.stop = true, e;
          r.optionalChainMember = n = true, this.next();
        }
        if (this.match(47) || this.match(51)) {
          let o, h = this.tsTryParseAndCatch(() => {
            if (!i && this.atPossibleAsyncArrow(e)) {
              let f = this.tsTryParseGenericAsyncArrowFunction(s);
              if (f)
                return f;
            }
            let l = this.tsParseTypeArgumentsInExpression();
            if (!l)
              return;
            if (n && !this.match(10)) {
              o = this.state.curPosition();
              return;
            }
            if (Oe(this.state.type)) {
              let f = super.parseTaggedTemplateExpression(e, s, r);
              return f.typeParameters = l, f;
            }
            if (!i && this.eat(10)) {
              let f = this.startNodeAt(s);
              return f.callee = e, f.arguments = this.parseCallExpressionArguments(11, false), this.tsCheckForInvalidTypeCasts(f.arguments), f.typeParameters = l, r.optionalChainMember && (f.optional = n), this.finishCallExpression(f, r.optionalChainMember);
            }
            let c = this.state.type;
            if (c === 48 || c === 52 || c !== 10 && Ze(c) && !this.hasPrecedingLineBreak())
              return;
            let u = this.startNodeAt(s);
            return u.expression = e, u.typeParameters = l, this.finishNode(u, "TSInstantiationExpression");
          });
          if (o && this.unexpected(o, 10), h)
            return h.type === "TSInstantiationExpression" && (this.match(16) || this.match(18) && this.lookaheadCharCode() !== 40) && this.raise(y.InvalidPropertyAccessAfterInstantiationExpression, { at: this.state.startLoc }), h;
        }
        return super.parseSubscript(e, s, i, r);
      }
      parseNewCallee(e) {
        var s;
        super.parseNewCallee(e);
        let { callee: i } = e;
        i.type === "TSInstantiationExpression" && !((s = i.extra) != null && s.parenthesized) && (e.typeParameters = i.typeParameters, e.callee = i.expression);
      }
      parseExprOp(e, s, i) {
        let r;
        if (ke(58) > i && !this.hasPrecedingLineBreak() && (this.isContextual(93) || (r = this.isContextual(118)))) {
          let n = this.startNodeAt(s);
          return n.expression = e, n.typeAnnotation = this.tsInType(() => (this.next(), this.match(75) ? (r && this.raise(p.UnexpectedKeyword, { at: this.state.startLoc, keyword: "const" }), this.tsParseTypeReference()) : this.tsParseType())), this.finishNode(n, r ? "TSSatisfiesExpression" : "TSAsExpression"), this.reScan_lt_gt(), this.parseExprOp(n, s, i);
        }
        return super.parseExprOp(e, s, i);
      }
      checkReservedWord(e, s, i, r) {
        this.state.isAmbientContext || super.checkReservedWord(e, s, i, r);
      }
      checkImportReflection(e) {
        super.checkImportReflection(e), e.module && e.importKind !== "value" && this.raise(y.ImportReflectionHasImportType, { at: e.specifiers[0].loc.start });
      }
      checkDuplicateExports() {
      }
      isPotentialImportPhase(e) {
        if (super.isPotentialImportPhase(e))
          return true;
        if (this.isContextual(128)) {
          let s = this.lookaheadCharCode();
          return e ? s === 123 || s === 42 : s !== 61;
        }
        return !e && this.isContextual(87);
      }
      applyImportPhase(e, s, i, r) {
        super.applyImportPhase(e, s, i, r), s ? e.exportKind = i === "type" ? "type" : "value" : e.importKind = i === "type" || i === "typeof" ? i : "value";
      }
      parseImport(e) {
        if (this.match(131))
          return e.importKind = "value", super.parseImport(e);
        let s;
        if (S(this.state.type) && this.lookaheadCharCode() === 61)
          return e.importKind = "value", this.tsParseImportEqualsDeclaration(e);
        if (this.isContextual(128)) {
          let i = this.parseMaybeImportPhase(e, false);
          if (this.lookaheadCharCode() === 61)
            return this.tsParseImportEqualsDeclaration(e, i);
          s = super.parseImportSpecifiersAndAfter(e, i);
        } else
          s = super.parseImport(e);
        return s.importKind === "type" && s.specifiers.length > 1 && s.specifiers[0].type === "ImportDefaultSpecifier" && this.raise(y.TypeImportCannotSpecifyDefaultAndNamed, { at: s }), s;
      }
      parseExport(e, s) {
        if (this.match(83)) {
          this.next();
          let i = null;
          return this.isContextual(128) && this.isPotentialImportPhase(false) ? i = this.parseMaybeImportPhase(e, false) : e.importKind = "value", this.tsParseImportEqualsDeclaration(e, i, true);
        } else if (this.eat(29)) {
          let i = e;
          return i.expression = super.parseExpression(), this.semicolon(), this.sawUnambiguousESM = true, this.finishNode(i, "TSExportAssignment");
        } else if (this.eatContextual(93)) {
          let i = e;
          return this.expectContextual(126), i.id = this.parseIdentifier(), this.semicolon(), this.finishNode(i, "TSNamespaceExportDeclaration");
        } else
          return super.parseExport(e, s);
      }
      isAbstractClass() {
        return this.isContextual(122) && this.lookahead().type === 80;
      }
      parseExportDefaultExpression() {
        if (this.isAbstractClass()) {
          let e = this.startNode();
          return this.next(), e.abstract = true, this.parseClass(e, true, true);
        }
        if (this.match(127)) {
          let e = this.tsParseInterfaceDeclaration(this.startNode());
          if (e)
            return e;
        }
        return super.parseExportDefaultExpression();
      }
      parseVarStatement(e, s, i = false) {
        let { isAmbientContext: r } = this.state, n = super.parseVarStatement(e, s, i || r);
        if (!r)
          return n;
        for (let { id: o, init: h } of n.declarations)
          h && (s !== "const" || o.typeAnnotation ? this.raise(y.InitializerNotAllowedInAmbientContext, { at: h }) : pr(h, this.hasPlugin("estree")) || this.raise(y.ConstInitiailizerMustBeStringOrNumericLiteralOrLiteralEnumReference, { at: h }));
        return n;
      }
      parseStatementContent(e, s) {
        if (this.match(75) && this.isLookaheadContextual("enum")) {
          let i = this.startNode();
          return this.expect(75), this.tsParseEnumDeclaration(i, { const: true });
        }
        if (this.isContextual(124))
          return this.tsParseEnumDeclaration(this.startNode());
        if (this.isContextual(127)) {
          let i = this.tsParseInterfaceDeclaration(this.startNode());
          if (i)
            return i;
        }
        return super.parseStatementContent(e, s);
      }
      parseAccessModifier() {
        return this.tsParseModifier(["public", "protected", "private"]);
      }
      tsHasSomeModifiers(e, s) {
        return s.some((i) => qt(i) ? e.accessibility === i : !!e[i]);
      }
      tsIsStartOfStaticBlocks() {
        return this.isContextual(104) && this.lookaheadCharCode() === 123;
      }
      parseClassMember(e, s, i) {
        let r = ["declare", "private", "public", "protected", "override", "abstract", "readonly", "static"];
        this.tsParseModifiers({ allowedModifiers: r, disallowedModifiers: ["in", "out"], stopOnStartOfClassStaticBlock: true, errorTemplate: y.InvalidModifierOnTypeParameterPositions }, s);
        let n = () => {
          this.tsIsStartOfStaticBlocks() ? (this.next(), this.next(), this.tsHasSomeModifiers(s, r) && this.raise(y.StaticBlockCannotHaveModifier, { at: this.state.curPosition() }), super.parseClassStaticBlock(e, s)) : this.parseClassMemberWithIsStatic(e, s, i, !!s.static);
        };
        s.declare ? this.tsInAmbientContext(n) : n();
      }
      parseClassMemberWithIsStatic(e, s, i, r) {
        let n = this.tsTryParseIndexSignature(s);
        if (n) {
          e.body.push(n), s.abstract && this.raise(y.IndexSignatureHasAbstract, { at: s }), s.accessibility && this.raise(y.IndexSignatureHasAccessibility, { at: s, modifier: s.accessibility }), s.declare && this.raise(y.IndexSignatureHasDeclare, { at: s }), s.override && this.raise(y.IndexSignatureHasOverride, { at: s });
          return;
        }
        !this.state.inAbstractClass && s.abstract && this.raise(y.NonAbstractClassHasAbstractMethod, { at: s }), s.override && (i.hadSuperClass || this.raise(y.OverrideNotInSubClass, { at: s })), super.parseClassMemberWithIsStatic(e, s, i, r);
      }
      parsePostMemberNameModifiers(e) {
        this.eat(17) && (e.optional = true), e.readonly && this.match(10) && this.raise(y.ClassMethodHasReadonly, { at: e }), e.declare && this.match(10) && this.raise(y.ClassMethodHasDeclare, { at: e });
      }
      parseExpressionStatement(e, s, i) {
        return (s.type === "Identifier" ? this.tsParseExpressionStatement(e, s, i) : void 0) || super.parseExpressionStatement(e, s, i);
      }
      shouldParseExportDeclaration() {
        return this.tsIsDeclarationStart() ? true : super.shouldParseExportDeclaration();
      }
      parseConditional(e, s, i) {
        if (!this.state.maybeInArrowParameters || !this.match(17))
          return super.parseConditional(e, s, i);
        let r = this.tryParse(() => super.parseConditional(e, s));
        return r.node ? (r.error && (this.state = r.failState), r.node) : (r.error && super.setOptionalParametersError(i, r.error), e);
      }
      parseParenItem(e, s) {
        if (e = super.parseParenItem(e, s), this.eat(17) && (e.optional = true, this.resetEndLocation(e)), this.match(14)) {
          let i = this.startNodeAt(s);
          return i.expression = e, i.typeAnnotation = this.tsParseTypeAnnotation(), this.finishNode(i, "TSTypeCastExpression");
        }
        return e;
      }
      parseExportDeclaration(e) {
        if (!this.state.isAmbientContext && this.isContextual(123))
          return this.tsInAmbientContext(() => this.parseExportDeclaration(e));
        let s = this.state.startLoc, i = this.eatContextual(123);
        if (i && (this.isContextual(123) || !this.shouldParseExportDeclaration()))
          throw this.raise(y.ExpectedAmbientAfterExportDeclare, { at: this.state.startLoc });
        let n = S(this.state.type) && this.tsTryParseExportDeclaration() || super.parseExportDeclaration(e);
        return n ? ((n.type === "TSInterfaceDeclaration" || n.type === "TSTypeAliasDeclaration" || i) && (e.exportKind = "type"), i && (this.resetStartLocation(n, s), n.declare = true), n) : null;
      }
      parseClassId(e, s, i, r) {
        if ((!s || i) && this.isContextual(111))
          return;
        super.parseClassId(e, s, i, e.declare ? 1024 : 8331);
        let n = this.tsTryParseTypeParameters(this.tsParseInOutConstModifiers);
        n && (e.typeParameters = n);
      }
      parseClassPropertyAnnotation(e) {
        e.optional || (this.eat(35) ? e.definite = true : this.eat(17) && (e.optional = true));
        let s = this.tsTryParseTypeAnnotation();
        s && (e.typeAnnotation = s);
      }
      parseClassProperty(e) {
        if (this.parseClassPropertyAnnotation(e), this.state.isAmbientContext && !(e.readonly && !e.typeAnnotation) && this.match(29) && this.raise(y.DeclareClassFieldHasInitializer, { at: this.state.startLoc }), e.abstract && this.match(29)) {
          let { key: s } = e;
          this.raise(y.AbstractPropertyHasInitializer, { at: this.state.startLoc, propertyName: s.type === "Identifier" && !e.computed ? s.name : `[${this.input.slice(s.start, s.end)}]` });
        }
        return super.parseClassProperty(e);
      }
      parseClassPrivateProperty(e) {
        return e.abstract && this.raise(y.PrivateElementHasAbstract, { at: e }), e.accessibility && this.raise(y.PrivateElementHasAccessibility, { at: e, modifier: e.accessibility }), this.parseClassPropertyAnnotation(e), super.parseClassPrivateProperty(e);
      }
      parseClassAccessorProperty(e) {
        return this.parseClassPropertyAnnotation(e), e.optional && this.raise(y.AccessorCannotBeOptional, { at: e }), super.parseClassAccessorProperty(e);
      }
      pushClassMethod(e, s, i, r, n, o) {
        let h = this.tsTryParseTypeParameters(this.tsParseConstModifier);
        h && n && this.raise(y.ConstructorHasTypeParameters, { at: h });
        let { declare: l = false, kind: c } = s;
        l && (c === "get" || c === "set") && this.raise(y.DeclareAccessor, { at: s, kind: c }), h && (s.typeParameters = h), super.pushClassMethod(e, s, i, r, n, o);
      }
      pushClassPrivateMethod(e, s, i, r) {
        let n = this.tsTryParseTypeParameters(this.tsParseConstModifier);
        n && (s.typeParameters = n), super.pushClassPrivateMethod(e, s, i, r);
      }
      declareClassPrivateMethodInScope(e, s) {
        e.type !== "TSDeclareMethod" && (e.type === "MethodDefinition" && !e.value.body || super.declareClassPrivateMethodInScope(e, s));
      }
      parseClassSuper(e) {
        super.parseClassSuper(e), e.superClass && (this.match(47) || this.match(51)) && (e.superTypeParameters = this.tsParseTypeArgumentsInExpression()), this.eatContextual(111) && (e.implements = this.tsParseHeritageClause("implements"));
      }
      parseObjPropValue(e, s, i, r, n, o, h) {
        let l = this.tsTryParseTypeParameters(this.tsParseConstModifier);
        return l && (e.typeParameters = l), super.parseObjPropValue(e, s, i, r, n, o, h);
      }
      parseFunctionParams(e, s) {
        let i = this.tsTryParseTypeParameters(this.tsParseConstModifier);
        i && (e.typeParameters = i), super.parseFunctionParams(e, s);
      }
      parseVarId(e, s) {
        super.parseVarId(e, s), e.id.type === "Identifier" && !this.hasPrecedingLineBreak() && this.eat(35) && (e.definite = true);
        let i = this.tsTryParseTypeAnnotation();
        i && (e.id.typeAnnotation = i, this.resetEndLocation(e.id));
      }
      parseAsyncArrowFromCallExpression(e, s) {
        return this.match(14) && (e.returnType = this.tsParseTypeAnnotation()), super.parseAsyncArrowFromCallExpression(e, s);
      }
      parseMaybeAssign(e, s) {
        var i, r, n, o, h;
        let l, c, u;
        if (this.hasPlugin("jsx") && (this.match(140) || this.match(47))) {
          if (l = this.state.clone(), c = this.tryParse(() => super.parseMaybeAssign(e, s), l), !c.error)
            return c.node;
          let { context: x } = this.state, I = x[x.length - 1];
          (I === w.j_oTag || I === w.j_expr) && x.pop();
        }
        if (!((i = c) != null && i.error) && !this.match(47))
          return super.parseMaybeAssign(e, s);
        (!l || l === this.state) && (l = this.state.clone());
        let f, d = this.tryParse((x) => {
          var I, C;
          f = this.tsParseTypeParameters(this.tsParseConstModifier);
          let E = super.parseMaybeAssign(e, s);
          return (E.type !== "ArrowFunctionExpression" || (I = E.extra) != null && I.parenthesized) && x(), ((C = f) == null ? void 0 : C.params.length) !== 0 && this.resetStartLocationFromNode(E, f), E.typeParameters = f, E;
        }, l);
        if (!d.error && !d.aborted)
          return f && this.reportReservedArrowTypeParam(f), d.node;
        if (!c && (Kt(!this.hasPlugin("jsx")), u = this.tryParse(() => super.parseMaybeAssign(e, s), l), !u.error))
          return u.node;
        if ((r = c) != null && r.node)
          return this.state = c.failState, c.node;
        if (d.node)
          return this.state = d.failState, f && this.reportReservedArrowTypeParam(f), d.node;
        if ((n = u) != null && n.node)
          return this.state = u.failState, u.node;
        throw ((o = c) == null ? void 0 : o.error) || d.error || ((h = u) == null ? void 0 : h.error);
      }
      reportReservedArrowTypeParam(e) {
        var s;
        e.params.length === 1 && !e.params[0].constraint && !((s = e.extra) != null && s.trailingComma) && this.getPluginOption("typescript", "disallowAmbiguousJSXLike") && this.raise(y.ReservedArrowTypeParam, { at: e });
      }
      parseMaybeUnary(e, s) {
        return !this.hasPlugin("jsx") && this.match(47) ? this.tsParseTypeAssertion() : super.parseMaybeUnary(e, s);
      }
      parseArrow(e) {
        if (this.match(14)) {
          let s = this.tryParse((i) => {
            let r = this.tsParseTypeOrTypePredicateAnnotation(14);
            return (this.canInsertSemicolon() || !this.match(19)) && i(), r;
          });
          if (s.aborted)
            return;
          s.thrown || (s.error && (this.state = s.failState), e.returnType = s.node);
        }
        return super.parseArrow(e);
      }
      parseAssignableListItemTypes(e, s) {
        if (!(s & 2))
          return e;
        this.eat(17) && (e.optional = true);
        let i = this.tsTryParseTypeAnnotation();
        return i && (e.typeAnnotation = i), this.resetEndLocation(e), e;
      }
      isAssignable(e, s) {
        switch (e.type) {
          case "TSTypeCastExpression":
            return this.isAssignable(e.expression, s);
          case "TSParameterProperty":
            return true;
          default:
            return super.isAssignable(e, s);
        }
      }
      toAssignable(e, s = false) {
        switch (e.type) {
          case "ParenthesizedExpression":
            this.toAssignableParenthesizedExpression(e, s);
            break;
          case "TSAsExpression":
          case "TSSatisfiesExpression":
          case "TSNonNullExpression":
          case "TSTypeAssertion":
            s ? this.expressionScope.recordArrowParameterBindingError(y.UnexpectedTypeCastInParameter, { at: e }) : this.raise(y.UnexpectedTypeCastInParameter, { at: e }), this.toAssignable(e.expression, s);
            break;
          case "AssignmentExpression":
            !s && e.left.type === "TSTypeCastExpression" && (e.left = this.typeCastToParameter(e.left));
          default:
            super.toAssignable(e, s);
        }
      }
      toAssignableParenthesizedExpression(e, s) {
        switch (e.expression.type) {
          case "TSAsExpression":
          case "TSSatisfiesExpression":
          case "TSNonNullExpression":
          case "TSTypeAssertion":
          case "ParenthesizedExpression":
            this.toAssignable(e.expression, s);
            break;
          default:
            super.toAssignable(e, s);
        }
      }
      checkToRestConversion(e, s) {
        switch (e.type) {
          case "TSAsExpression":
          case "TSSatisfiesExpression":
          case "TSTypeAssertion":
          case "TSNonNullExpression":
            this.checkToRestConversion(e.expression, false);
            break;
          default:
            super.checkToRestConversion(e, s);
        }
      }
      isValidLVal(e, s, i) {
        return ar({ TSTypeCastExpression: true, TSParameterProperty: "parameter", TSNonNullExpression: "expression", TSAsExpression: (i !== 64 || !s) && ["expression", true], TSSatisfiesExpression: (i !== 64 || !s) && ["expression", true], TSTypeAssertion: (i !== 64 || !s) && ["expression", true] }, e) || super.isValidLVal(e, s, i);
      }
      parseBindingAtom() {
        return this.state.type === 78 ? this.parseIdentifier(true) : super.parseBindingAtom();
      }
      parseMaybeDecoratorArguments(e) {
        if (this.match(47) || this.match(51)) {
          let s = this.tsParseTypeArgumentsInExpression();
          if (this.match(10)) {
            let i = super.parseMaybeDecoratorArguments(e);
            return i.typeParameters = s, i;
          }
          this.unexpected(null, 10);
        }
        return super.parseMaybeDecoratorArguments(e);
      }
      checkCommaAfterRest(e) {
        return this.state.isAmbientContext && this.match(12) && this.lookaheadCharCode() === e ? (this.next(), false) : super.checkCommaAfterRest(e);
      }
      isClassMethod() {
        return this.match(47) || super.isClassMethod();
      }
      isClassProperty() {
        return this.match(35) || this.match(14) || super.isClassProperty();
      }
      parseMaybeDefault(e, s) {
        let i = super.parseMaybeDefault(e, s);
        return i.type === "AssignmentPattern" && i.typeAnnotation && i.right.start < i.typeAnnotation.start && this.raise(y.TypeAnnotationAfterAssign, { at: i.typeAnnotation }), i;
      }
      getTokenFromCode(e) {
        if (this.state.inType) {
          if (e === 62) {
            this.finishOp(48, 1);
            return;
          }
          if (e === 60) {
            this.finishOp(47, 1);
            return;
          }
        }
        super.getTokenFromCode(e);
      }
      reScan_lt_gt() {
        let { type: e } = this.state;
        e === 47 ? (this.state.pos -= 1, this.readToken_lt()) : e === 48 && (this.state.pos -= 1, this.readToken_gt());
      }
      reScan_lt() {
        let { type: e } = this.state;
        return e === 51 ? (this.state.pos -= 2, this.finishOp(47, 1), 47) : e;
      }
      toAssignableList(e, s, i) {
        for (let r = 0; r < e.length; r++) {
          let n = e[r];
          (n == null ? void 0 : n.type) === "TSTypeCastExpression" && (e[r] = this.typeCastToParameter(n));
        }
        super.toAssignableList(e, s, i);
      }
      typeCastToParameter(e) {
        return e.expression.typeAnnotation = e.typeAnnotation, this.resetEndLocation(e.expression, e.typeAnnotation.loc.end), e.expression;
      }
      shouldParseArrow(e) {
        return this.match(14) ? e.every((s) => this.isAssignable(s, true)) : super.shouldParseArrow(e);
      }
      shouldParseAsyncArrow() {
        return this.match(14) || super.shouldParseAsyncArrow();
      }
      canHaveLeadingDecorator() {
        return super.canHaveLeadingDecorator() || this.isAbstractClass();
      }
      jsxParseOpeningElementAfterName(e) {
        if (this.match(47) || this.match(51)) {
          let s = this.tsTryParseAndCatch(() => this.tsParseTypeArgumentsInExpression());
          s && (e.typeParameters = s);
        }
        return super.jsxParseOpeningElementAfterName(e);
      }
      getGetterSetterExpectedParamCount(e) {
        let s = super.getGetterSetterExpectedParamCount(e), r = this.getObjectOrClassMethodParams(e)[0];
        return r && this.isThisParam(r) ? s + 1 : s;
      }
      parseCatchClauseParam() {
        let e = super.parseCatchClauseParam(), s = this.tsTryParseTypeAnnotation();
        return s && (e.typeAnnotation = s, this.resetEndLocation(e)), e;
      }
      tsInAmbientContext(e) {
        let s = this.state.isAmbientContext;
        this.state.isAmbientContext = true;
        try {
          return e();
        } finally {
          this.state.isAmbientContext = s;
        }
      }
      parseClass(e, s, i) {
        let r = this.state.inAbstractClass;
        this.state.inAbstractClass = !!e.abstract;
        try {
          return super.parseClass(e, s, i);
        } finally {
          this.state.inAbstractClass = r;
        }
      }
      tsParseAbstractDeclaration(e, s) {
        if (this.match(80))
          return e.abstract = true, this.maybeTakeDecorators(s, this.parseClass(e, true, false));
        if (this.isContextual(127)) {
          if (!this.hasFollowingLineBreak())
            return e.abstract = true, this.raise(y.NonClassMethodPropertyHasAbstractModifer, { at: e }), this.tsParseInterfaceDeclaration(e);
        } else
          this.unexpected(null, 80);
      }
      parseMethod(e, s, i, r, n, o, h) {
        let l = super.parseMethod(e, s, i, r, n, o, h);
        if (l.abstract && (this.hasPlugin("estree") ? !!l.value.body : !!l.body)) {
          let { key: u } = l;
          this.raise(y.AbstractMethodHasImplementation, { at: l, methodName: u.type === "Identifier" && !l.computed ? u.name : `[${this.input.slice(u.start, u.end)}]` });
        }
        return l;
      }
      tsParseTypeParameterName() {
        return this.parseIdentifier().name;
      }
      shouldParseAsAmbientContext() {
        return !!this.getPluginOption("typescript", "dts");
      }
      parse() {
        return this.shouldParseAsAmbientContext() && (this.state.isAmbientContext = true), super.parse();
      }
      getExpression() {
        return this.shouldParseAsAmbientContext() && (this.state.isAmbientContext = true), super.getExpression();
      }
      parseExportSpecifier(e, s, i, r) {
        return !s && r ? (this.parseTypeOnlyImportExportSpecifier(e, false, i), this.finishNode(e, "ExportSpecifier")) : (e.exportKind = "value", super.parseExportSpecifier(e, s, i, r));
      }
      parseImportSpecifier(e, s, i, r, n) {
        return !s && r ? (this.parseTypeOnlyImportExportSpecifier(e, true, i), this.finishNode(e, "ImportSpecifier")) : (e.importKind = "value", super.parseImportSpecifier(e, s, i, r, i ? 4098 : 4096));
      }
      parseTypeOnlyImportExportSpecifier(e, s, i) {
        let r = s ? "imported" : "local", n = s ? "local" : "exported", o = e[r], h, l = false, c = true, u = o.loc.start;
        if (this.isContextual(93)) {
          let d = this.parseIdentifier();
          if (this.isContextual(93)) {
            let x = this.parseIdentifier();
            M(this.state.type) ? (l = true, o = d, h = s ? this.parseIdentifier() : this.parseModuleExportName(), c = false) : (h = x, c = false);
          } else
            M(this.state.type) ? (c = false, h = s ? this.parseIdentifier() : this.parseModuleExportName()) : (l = true, o = d);
        } else
          M(this.state.type) && (l = true, s ? (o = this.parseIdentifier(true), this.isContextual(93) || this.checkReservedWord(o.name, o.loc.start, true, true)) : o = this.parseModuleExportName());
        l && i && this.raise(s ? y.TypeModifierIsUsedInTypeImports : y.TypeModifierIsUsedInTypeExports, { at: u }), e[r] = o, e[n] = h;
        let f = s ? "importKind" : "exportKind";
        e[f] = l ? "type" : "value", c && this.eatContextual(93) && (e[n] = s ? this.parseIdentifier() : this.parseModuleExportName()), e[n] || (e[n] = V(e[r])), s && this.checkIdentifier(e[n], l ? 4098 : 4096);
      }
    };
    function cr(a) {
      if (a.type !== "MemberExpression")
        return false;
      let { computed: t, property: e } = a;
      return t && e.type !== "StringLiteral" && (e.type !== "TemplateLiteral" || e.expressions.length > 0) ? false : ds(a.object);
    }
    function pr(a, t) {
      var e;
      let { type: s } = a;
      if ((e = a.extra) != null && e.parenthesized)
        return false;
      if (t) {
        if (s === "Literal") {
          let { value: i } = a;
          if (typeof i == "string" || typeof i == "boolean")
            return true;
        }
      } else if (s === "StringLiteral" || s === "BooleanLiteral")
        return true;
      return !!(us(a, t) || ur(a, t) || s === "TemplateLiteral" && a.expressions.length === 0 || cr(a));
    }
    function us(a, t) {
      return t ? a.type === "Literal" && (typeof a.value == "number" || "bigint" in a) : a.type === "NumericLiteral" || a.type === "BigIntLiteral";
    }
    function ur(a, t) {
      if (a.type === "UnaryExpression") {
        let { operator: e, argument: s } = a;
        if (e === "-" && us(s, t))
          return true;
      }
      return false;
    }
    function ds(a) {
      return a.type === "Identifier" ? true : a.type !== "MemberExpression" || a.computed ? false : ds(a.object);
    }
    var Ht = $`placeholders`({ ClassNameIsRequired: "A class name is required.", UnexpectedSpace: "Unexpected space in placeholder." }), dr = (a) => class extends a {
      parsePlaceholder(e) {
        if (this.match(142)) {
          let s = this.startNode();
          return this.next(), this.assertNoSpace(), s.name = super.parseIdentifier(true), this.assertNoSpace(), this.expect(142), this.finishPlaceholder(s, e);
        }
      }
      finishPlaceholder(e, s) {
        let i = !!(e.expectedNode && e.type === "Placeholder");
        return e.expectedNode = s, i ? e : this.finishNode(e, "Placeholder");
      }
      getTokenFromCode(e) {
        e === 37 && this.input.charCodeAt(this.state.pos + 1) === 37 ? this.finishOp(142, 2) : super.getTokenFromCode(e);
      }
      parseExprAtom(e) {
        return this.parsePlaceholder("Expression") || super.parseExprAtom(e);
      }
      parseIdentifier(e) {
        return this.parsePlaceholder("Identifier") || super.parseIdentifier(e);
      }
      checkReservedWord(e, s, i, r) {
        e !== void 0 && super.checkReservedWord(e, s, i, r);
      }
      parseBindingAtom() {
        return this.parsePlaceholder("Pattern") || super.parseBindingAtom();
      }
      isValidLVal(e, s, i) {
        return e === "Placeholder" || super.isValidLVal(e, s, i);
      }
      toAssignable(e, s) {
        e && e.type === "Placeholder" && e.expectedNode === "Expression" ? e.expectedNode = "Pattern" : super.toAssignable(e, s);
      }
      chStartsBindingIdentifier(e, s) {
        return !!(super.chStartsBindingIdentifier(e, s) || this.lookahead().type === 142);
      }
      verifyBreakContinue(e, s) {
        e.label && e.label.type === "Placeholder" || super.verifyBreakContinue(e, s);
      }
      parseExpressionStatement(e, s) {
        var i;
        if (s.type !== "Placeholder" || (i = s.extra) != null && i.parenthesized)
          return super.parseExpressionStatement(e, s);
        if (this.match(14)) {
          let r = e;
          return r.label = this.finishPlaceholder(s, "Identifier"), this.next(), r.body = super.parseStatementOrSloppyAnnexBFunctionDeclaration(), this.finishNode(r, "LabeledStatement");
        }
        return this.semicolon(), e.name = s.name, this.finishPlaceholder(e, "Statement");
      }
      parseBlock(e, s, i) {
        return this.parsePlaceholder("BlockStatement") || super.parseBlock(e, s, i);
      }
      parseFunctionId(e) {
        return this.parsePlaceholder("Identifier") || super.parseFunctionId(e);
      }
      parseClass(e, s, i) {
        let r = s ? "ClassDeclaration" : "ClassExpression";
        this.next();
        let n = this.state.strict, o = this.parsePlaceholder("Identifier");
        if (o)
          if (this.match(81) || this.match(142) || this.match(5))
            e.id = o;
          else {
            if (i || !s)
              return e.id = null, e.body = this.finishPlaceholder(o, "ClassBody"), this.finishNode(e, r);
            throw this.raise(Ht.ClassNameIsRequired, { at: this.state.startLoc });
          }
        else
          this.parseClassId(e, s, i);
        return super.parseClassSuper(e), e.body = this.parsePlaceholder("ClassBody") || super.parseClassBody(!!e.superClass, n), this.finishNode(e, r);
      }
      parseExport(e, s) {
        let i = this.parsePlaceholder("Identifier");
        if (!i)
          return super.parseExport(e, s);
        if (!this.isContextual(97) && !this.match(12))
          return e.specifiers = [], e.source = null, e.declaration = this.finishPlaceholder(i, "Declaration"), this.finishNode(e, "ExportNamedDeclaration");
        this.expectPlugin("exportDefaultFrom");
        let r = this.startNode();
        return r.exported = i, e.specifiers = [this.finishNode(r, "ExportDefaultSpecifier")], super.parseExport(e, s);
      }
      isExportDefaultSpecifier() {
        if (this.match(65)) {
          let e = this.nextTokenStart();
          if (this.isUnparsedContextual(e, "from") && this.input.startsWith(q(142), this.nextTokenStartSince(e + 4)))
            return true;
        }
        return super.isExportDefaultSpecifier();
      }
      maybeParseExportDefaultSpecifier(e, s) {
        var i;
        return (i = e.specifiers) != null && i.length ? true : super.maybeParseExportDefaultSpecifier(e, s);
      }
      checkExport(e) {
        let { specifiers: s } = e;
        s != null && s.length && (e.specifiers = s.filter((i) => i.exported.type === "Placeholder")), super.checkExport(e), e.specifiers = s;
      }
      parseImport(e) {
        let s = this.parsePlaceholder("Identifier");
        if (!s)
          return super.parseImport(e);
        if (e.specifiers = [], !this.isContextual(97) && !this.match(12))
          return e.source = this.finishPlaceholder(s, "StringLiteral"), this.semicolon(), this.finishNode(e, "ImportDeclaration");
        let i = this.startNodeAtNode(s);
        return i.local = s, e.specifiers.push(this.finishNode(i, "ImportDefaultSpecifier")), this.eat(12) && (this.maybeParseStarImportSpecifier(e) || this.parseNamedImportSpecifiers(e)), this.expectContextual(97), e.source = this.parseImportSource(), this.semicolon(), this.finishNode(e, "ImportDeclaration");
      }
      parseImportSource() {
        return this.parsePlaceholder("StringLiteral") || super.parseImportSource();
      }
      assertNoSpace() {
        this.state.start > this.state.lastTokEndLoc.index && this.raise(Ht.UnexpectedSpace, { at: this.state.lastTokEndLoc });
      }
    }, fr = (a) => class extends a {
      parseV8Intrinsic() {
        if (this.match(54)) {
          let e = this.state.startLoc, s = this.startNode();
          if (this.next(), S(this.state.type)) {
            let i = this.parseIdentifierName(), r = this.createIdentifier(s, i);
            if (r.type = "V8IntrinsicIdentifier", this.match(10))
              return r;
          }
          this.unexpected(e);
        }
      }
      parseExprAtom(e) {
        return this.parseV8Intrinsic() || super.parseExprAtom(e);
      }
    };
    function k(a, t) {
      let [e, s] = typeof t == "string" ? [t, {}] : t, i = Object.keys(s), r = i.length === 0;
      return a.some((n) => {
        if (typeof n == "string")
          return r && n === e;
        {
          let [o, h] = n;
          if (o !== e)
            return false;
          for (let l of i)
            if (h[l] !== s[l])
              return false;
          return true;
        }
      });
    }
    function J(a, t, e) {
      let s = a.find((i) => Array.isArray(i) ? i[0] === t : i === t);
      return s && Array.isArray(s) && s.length > 1 ? s[1][e] : null;
    }
    var Wt = ["minimal", "fsharp", "hack", "smart"], Jt = ["^^", "@@", "^", "%", "#"], Xt = ["hash", "bar"];
    function mr(a) {
      if (k(a, "decorators")) {
        if (k(a, "decorators-legacy"))
          throw new Error("Cannot use the decorators and decorators-legacy plugin together");
        let t = J(a, "decorators", "decoratorsBeforeExport");
        if (t != null && typeof t != "boolean")
          throw new Error("'decoratorsBeforeExport' must be a boolean, if specified.");
        let e = J(a, "decorators", "allowCallParenthesized");
        if (e != null && typeof e != "boolean")
          throw new Error("'allowCallParenthesized' must be a boolean.");
      }
      if (k(a, "flow") && k(a, "typescript"))
        throw new Error("Cannot combine flow and typescript plugins.");
      if (k(a, "placeholders") && k(a, "v8intrinsic"))
        throw new Error("Cannot combine placeholders and v8intrinsic plugins.");
      if (k(a, "pipelineOperator")) {
        let t = J(a, "pipelineOperator", "proposal");
        if (!Wt.includes(t)) {
          let s = Wt.map((i) => `"${i}"`).join(", ");
          throw new Error(`"pipelineOperator" requires "proposal" option whose value must be one of: ${s}.`);
        }
        let e = k(a, ["recordAndTuple", { syntaxType: "hash" }]);
        if (t === "hack") {
          if (k(a, "placeholders"))
            throw new Error("Cannot combine placeholders plugin and Hack-style pipes.");
          if (k(a, "v8intrinsic"))
            throw new Error("Cannot combine v8intrinsic plugin and Hack-style pipes.");
          let s = J(a, "pipelineOperator", "topicToken");
          if (!Jt.includes(s)) {
            let i = Jt.map((r) => `"${r}"`).join(", ");
            throw new Error(`"pipelineOperator" in "proposal": "hack" mode also requires a "topicToken" option whose value must be one of: ${i}.`);
          }
          if (s === "#" && e)
            throw new Error('Plugin conflict between `["pipelineOperator", { proposal: "hack", topicToken: "#" }]` and `["recordAndtuple", { syntaxType: "hash"}]`.');
        } else if (t === "smart" && e)
          throw new Error('Plugin conflict between `["pipelineOperator", { proposal: "smart" }]` and `["recordAndtuple", { syntaxType: "hash"}]`.');
      }
      if (k(a, "moduleAttributes")) {
        if (k(a, "importAssertions") || k(a, "importAttributes"))
          throw new Error("Cannot combine importAssertions, importAttributes and moduleAttributes plugins.");
        if (J(a, "moduleAttributes", "version") !== "may-2020")
          throw new Error("The 'moduleAttributes' plugin requires a 'version' option, representing the last proposal update. Currently, the only supported value is 'may-2020'.");
      }
      if (k(a, "importAssertions") && k(a, "importAttributes"))
        throw new Error("Cannot combine importAssertions and importAttributes plugins.");
      if (k(a, "recordAndTuple") && J(a, "recordAndTuple", "syntaxType") != null && !Xt.includes(J(a, "recordAndTuple", "syntaxType")))
        throw new Error("The 'syntaxType' option of the 'recordAndTuple' plugin must be one of: " + Xt.map((t) => `'${t}'`).join(", "));
      if (k(a, "asyncDoExpressions") && !k(a, "doExpressions")) {
        let t = new Error("'asyncDoExpressions' requires 'doExpressions', please add 'doExpressions' to parser plugins.");
        throw t.missingPlugins = "doExpressions", t;
      }
    }
    var fs = { estree: mi, jsx: ir, flow: sr, typescript: lr, v8intrinsic: fr, placeholders: dr }, yr = Object.keys(fs), Je = { sourceType: "script", sourceFilename: void 0, startColumn: 0, startLine: 1, allowAwaitOutsideFunction: false, allowReturnOutsideFunction: false, allowNewTargetOutsideFunction: false, allowImportExportEverywhere: false, allowSuperOutsideMethod: false, allowUndeclaredExports: false, plugins: [], strictMode: null, ranges: false, tokens: false, createParenthesizedExpressions: false, errorRecovery: false, attachComment: true, annexB: true };
    function xr(a) {
      if (a == null)
        return Object.assign({}, Je);
      if (a.annexB != null && a.annexB !== false)
        throw new Error("The `annexB` option can only be set to `false`.");
      let t = {};
      for (let s of Object.keys(Je)) {
        var e;
        t[s] = (e = a[s]) != null ? e : Je[s];
      }
      return t;
    }
    var xt = class extends yt {
      checkProto(t, e, s, i) {
        if (t.type === "SpreadElement" || this.isObjectMethod(t) || t.computed || t.shorthand)
          return;
        let r = t.key;
        if ((r.type === "Identifier" ? r.name : r.value) === "__proto__") {
          if (e) {
            this.raise(p.RecordNoProto, { at: r });
            return;
          }
          s.used && (i ? i.doubleProtoLoc === null && (i.doubleProtoLoc = r.loc.start) : this.raise(p.DuplicateProto, { at: r })), s.used = true;
        }
      }
      shouldExitDescending(t, e) {
        return t.type === "ArrowFunctionExpression" && t.start === e;
      }
      getExpression() {
        this.enterInitialScopes(), this.nextToken();
        let t = this.parseExpression();
        return this.match(137) || this.unexpected(), this.finalizeRemainingComments(), t.comments = this.state.comments, t.errors = this.state.errors, this.options.tokens && (t.tokens = this.tokens), t;
      }
      parseExpression(t, e) {
        return t ? this.disallowInAnd(() => this.parseExpressionBase(e)) : this.allowInAnd(() => this.parseExpressionBase(e));
      }
      parseExpressionBase(t) {
        let e = this.state.startLoc, s = this.parseMaybeAssign(t);
        if (this.match(12)) {
          let i = this.startNodeAt(e);
          for (i.expressions = [s]; this.eat(12); )
            i.expressions.push(this.parseMaybeAssign(t));
          return this.toReferencedList(i.expressions), this.finishNode(i, "SequenceExpression");
        }
        return s;
      }
      parseMaybeAssignDisallowIn(t, e) {
        return this.disallowInAnd(() => this.parseMaybeAssign(t, e));
      }
      parseMaybeAssignAllowIn(t, e) {
        return this.allowInAnd(() => this.parseMaybeAssign(t, e));
      }
      setOptionalParametersError(t, e) {
        var s;
        t.optionalParametersLoc = (s = e == null ? void 0 : e.loc) != null ? s : this.state.startLoc;
      }
      parseMaybeAssign(t, e) {
        let s = this.state.startLoc;
        if (this.isContextual(106) && this.prodParam.hasYield) {
          let o = this.parseYield();
          return e && (o = e.call(this, o, s)), o;
        }
        let i;
        t ? i = false : (t = new se(), i = true);
        let { type: r } = this.state;
        (r === 10 || S(r)) && (this.state.potentialArrowAt = this.state.start);
        let n = this.parseMaybeConditional(t);
        if (e && (n = e.call(this, n, s)), Ti(this.state.type)) {
          let o = this.startNodeAt(s), h = this.state.value;
          if (o.operator = h, this.match(29)) {
            this.toAssignable(n, true), o.left = n;
            let l = s.index;
            t.doubleProtoLoc != null && t.doubleProtoLoc.index >= l && (t.doubleProtoLoc = null), t.shorthandAssignLoc != null && t.shorthandAssignLoc.index >= l && (t.shorthandAssignLoc = null), t.privateKeyLoc != null && t.privateKeyLoc.index >= l && (this.checkDestructuringPrivate(t), t.privateKeyLoc = null);
          } else
            o.left = n;
          return this.next(), o.right = this.parseMaybeAssign(), this.checkLVal(n, { in: this.finishNode(o, "AssignmentExpression") }), o;
        } else
          i && this.checkExpressionErrors(t, true);
        return n;
      }
      parseMaybeConditional(t) {
        let e = this.state.startLoc, s = this.state.potentialArrowAt, i = this.parseExprOps(t);
        return this.shouldExitDescending(i, s) ? i : this.parseConditional(i, e, t);
      }
      parseConditional(t, e, s) {
        if (this.eat(17)) {
          let i = this.startNodeAt(e);
          return i.test = t, i.consequent = this.parseMaybeAssignAllowIn(), this.expect(14), i.alternate = this.parseMaybeAssign(), this.finishNode(i, "ConditionalExpression");
        }
        return t;
      }
      parseMaybeUnaryOrPrivate(t) {
        return this.match(136) ? this.parsePrivateName() : this.parseMaybeUnary(t);
      }
      parseExprOps(t) {
        let e = this.state.startLoc, s = this.state.potentialArrowAt, i = this.parseMaybeUnaryOrPrivate(t);
        return this.shouldExitDescending(i, s) ? i : this.parseExprOp(i, e, -1);
      }
      parseExprOp(t, e, s) {
        if (this.isPrivateName(t)) {
          let r = this.getPrivateNameSV(t);
          (s >= ke(58) || !this.prodParam.hasIn || !this.match(58)) && this.raise(p.PrivateInExpectedIn, { at: t, identifierName: r }), this.classScope.usePrivateName(r, t.loc.start);
        }
        let i = this.state.type;
        if (Ai(i) && (this.prodParam.hasIn || !this.match(58))) {
          let r = ke(i);
          if (r > s) {
            if (i === 39) {
              if (this.expectPlugin("pipelineOperator"), this.state.inFSharpPipelineDirectBody)
                return t;
              this.checkPipelineAtInfixOperator(t, e);
            }
            let n = this.startNodeAt(e);
            n.left = t, n.operator = this.state.value;
            let o = i === 41 || i === 42, h = i === 40;
            if (h && (r = ke(42)), this.next(), i === 39 && this.hasPlugin(["pipelineOperator", { proposal: "minimal" }]) && this.state.type === 96 && this.prodParam.hasAwait)
              throw this.raise(p.UnexpectedAwaitAfterPipelineBody, { at: this.state.startLoc });
            n.right = this.parseExprOpRightExpr(i, r);
            let l = this.finishNode(n, o || h ? "LogicalExpression" : "BinaryExpression"), c = this.state.type;
            if (h && (c === 41 || c === 42) || o && c === 40)
              throw this.raise(p.MixingCoalesceWithLogical, { at: this.state.startLoc });
            return this.parseExprOp(l, e, s);
          }
        }
        return t;
      }
      parseExprOpRightExpr(t, e) {
        let s = this.state.startLoc;
        switch (t) {
          case 39:
            switch (this.getPluginOption("pipelineOperator", "proposal")) {
              case "hack":
                return this.withTopicBindingContext(() => this.parseHackPipeBody());
              case "smart":
                return this.withTopicBindingContext(() => {
                  if (this.prodParam.hasYield && this.isContextual(106))
                    throw this.raise(p.PipeBodyIsTighter, { at: this.state.startLoc });
                  return this.parseSmartPipelineBodyInStyle(this.parseExprOpBaseRightExpr(t, e), s);
                });
              case "fsharp":
                return this.withSoloAwaitPermittingContext(() => this.parseFSharpPipelineBody(e));
            }
          default:
            return this.parseExprOpBaseRightExpr(t, e);
        }
      }
      parseExprOpBaseRightExpr(t, e) {
        let s = this.state.startLoc;
        return this.parseExprOp(this.parseMaybeUnaryOrPrivate(), s, Ii(t) ? e - 1 : e);
      }
      parseHackPipeBody() {
        var t;
        let { startLoc: e } = this.state, s = this.parseMaybeAssign();
        return li.has(s.type) && !((t = s.extra) != null && t.parenthesized) && this.raise(p.PipeUnparenthesizedBody, { at: e, type: s.type }), this.topicReferenceWasUsedInCurrentContext() || this.raise(p.PipeTopicUnused, { at: e }), s;
      }
      checkExponentialAfterUnary(t) {
        this.match(57) && this.raise(p.UnexpectedTokenUnaryExponentiation, { at: t.argument });
      }
      parseMaybeUnary(t, e) {
        let s = this.state.startLoc, i = this.isContextual(96);
        if (i && this.isAwaitAllowed()) {
          this.next();
          let h = this.parseAwait(s);
          return e || this.checkExponentialAfterUnary(h), h;
        }
        let r = this.match(34), n = this.startNode();
        if (wi(this.state.type)) {
          n.operator = this.state.value, n.prefix = true, this.match(72) && this.expectPlugin("throwExpressions");
          let h = this.match(89);
          if (this.next(), n.argument = this.parseMaybeUnary(null, true), this.checkExpressionErrors(t, true), this.state.strict && h) {
            let l = n.argument;
            l.type === "Identifier" ? this.raise(p.StrictDelete, { at: n }) : this.hasPropertyAsPrivateName(l) && this.raise(p.DeletePrivateField, { at: n });
          }
          if (!r)
            return e || this.checkExponentialAfterUnary(n), this.finishNode(n, "UnaryExpression");
        }
        let o = this.parseUpdate(n, r, t);
        if (i) {
          let { type: h } = this.state;
          if ((this.hasPlugin("v8intrinsic") ? Ze(h) : Ze(h) && !this.match(54)) && !this.isAmbiguousAwait())
            return this.raiseOverwrite(p.AwaitNotInAsyncContext, { at: s }), this.parseAwait(s);
        }
        return o;
      }
      parseUpdate(t, e, s) {
        if (e) {
          let n = t;
          return this.checkLVal(n.argument, { in: this.finishNode(n, "UpdateExpression") }), t;
        }
        let i = this.state.startLoc, r = this.parseExprSubscripts(s);
        if (this.checkExpressionErrors(s, false))
          return r;
        for (; Si(this.state.type) && !this.canInsertSemicolon(); ) {
          let n = this.startNodeAt(i);
          n.operator = this.state.value, n.prefix = false, n.argument = r, this.next(), this.checkLVal(r, { in: r = this.finishNode(n, "UpdateExpression") });
        }
        return r;
      }
      parseExprSubscripts(t) {
        let e = this.state.startLoc, s = this.state.potentialArrowAt, i = this.parseExprAtom(t);
        return this.shouldExitDescending(i, s) ? i : this.parseSubscripts(i, e);
      }
      parseSubscripts(t, e, s) {
        let i = { optionalChainMember: false, maybeAsyncArrow: this.atPossibleAsyncArrow(t), stop: false };
        do
          t = this.parseSubscript(t, e, s, i), i.maybeAsyncArrow = false;
        while (!i.stop);
        return t;
      }
      parseSubscript(t, e, s, i) {
        let { type: r } = this.state;
        if (!s && r === 15)
          return this.parseBind(t, e, s, i);
        if (Oe(r))
          return this.parseTaggedTemplateExpression(t, e, i);
        let n = false;
        if (r === 18) {
          if (s && (this.raise(p.OptionalChainingNoNew, { at: this.state.startLoc }), this.lookaheadCharCode() === 40))
            return i.stop = true, t;
          i.optionalChainMember = n = true, this.next();
        }
        if (!s && this.match(10))
          return this.parseCoverCallAndAsyncArrowHead(t, e, i, n);
        {
          let o = this.eat(0);
          return o || n || this.eat(16) ? this.parseMember(t, e, i, o, n) : (i.stop = true, t);
        }
      }
      parseMember(t, e, s, i, r) {
        let n = this.startNodeAt(e);
        return n.object = t, n.computed = i, i ? (n.property = this.parseExpression(), this.expect(3)) : this.match(136) ? (t.type === "Super" && this.raise(p.SuperPrivateField, { at: e }), this.classScope.usePrivateName(this.state.value, this.state.startLoc), n.property = this.parsePrivateName()) : n.property = this.parseIdentifier(true), s.optionalChainMember ? (n.optional = r, this.finishNode(n, "OptionalMemberExpression")) : this.finishNode(n, "MemberExpression");
      }
      parseBind(t, e, s, i) {
        let r = this.startNodeAt(e);
        return r.object = t, this.next(), r.callee = this.parseNoCallExpr(), i.stop = true, this.parseSubscripts(this.finishNode(r, "BindExpression"), e, s);
      }
      parseCoverCallAndAsyncArrowHead(t, e, s, i) {
        let r = this.state.maybeInArrowParameters, n = null;
        this.state.maybeInArrowParameters = true, this.next();
        let o = this.startNodeAt(e);
        o.callee = t;
        let { maybeAsyncArrow: h, optionalChainMember: l } = s;
        h && (this.expressionScope.enter(Ji()), n = new se()), l && (o.optional = i), i ? o.arguments = this.parseCallExpressionArguments(11) : o.arguments = this.parseCallExpressionArguments(11, t.type === "Import", t.type !== "Super", o, n);
        let c = this.finishCallExpression(o, l);
        return h && this.shouldParseAsyncArrow() && !i ? (s.stop = true, this.checkDestructuringPrivate(n), this.expressionScope.validateAsPattern(), this.expressionScope.exit(), c = this.parseAsyncArrowFromCallExpression(this.startNodeAt(e), c)) : (h && (this.checkExpressionErrors(n, true), this.expressionScope.exit()), this.toReferencedArguments(c)), this.state.maybeInArrowParameters = r, c;
      }
      toReferencedArguments(t, e) {
        this.toReferencedListDeep(t.arguments, e);
      }
      parseTaggedTemplateExpression(t, e, s) {
        let i = this.startNodeAt(e);
        return i.tag = t, i.quasi = this.parseTemplate(true), s.optionalChainMember && this.raise(p.OptionalChainingNoTemplate, { at: e }), this.finishNode(i, "TaggedTemplateExpression");
      }
      atPossibleAsyncArrow(t) {
        return t.type === "Identifier" && t.name === "async" && this.state.lastTokEndLoc.index === t.end && !this.canInsertSemicolon() && t.end - t.start === 5 && t.start === this.state.potentialArrowAt;
      }
      expectImportAttributesPlugin() {
        this.hasPlugin("importAssertions") || this.expectPlugin("importAttributes");
      }
      finishCallExpression(t, e) {
        if (t.callee.type === "Import")
          if (t.arguments.length === 2 && (this.hasPlugin("moduleAttributes") || this.expectImportAttributesPlugin()), t.arguments.length === 0 || t.arguments.length > 2)
            this.raise(p.ImportCallArity, { at: t, maxArgumentCount: this.hasPlugin("importAttributes") || this.hasPlugin("importAssertions") || this.hasPlugin("moduleAttributes") ? 2 : 1 });
          else
            for (let s of t.arguments)
              s.type === "SpreadElement" && this.raise(p.ImportCallSpreadArgument, { at: s });
        return this.finishNode(t, e ? "OptionalCallExpression" : "CallExpression");
      }
      parseCallExpressionArguments(t, e, s, i, r) {
        let n = [], o = true, h = this.state.inFSharpPipelineDirectBody;
        for (this.state.inFSharpPipelineDirectBody = false; !this.eat(t); ) {
          if (o)
            o = false;
          else if (this.expect(12), this.match(t)) {
            e && !this.hasPlugin("importAttributes") && !this.hasPlugin("importAssertions") && !this.hasPlugin("moduleAttributes") && this.raise(p.ImportCallArgumentTrailingComma, { at: this.state.lastTokStartLoc }), i && this.addTrailingCommaExtraToNode(i), this.next();
            break;
          }
          n.push(this.parseExprListItem(false, r, s));
        }
        return this.state.inFSharpPipelineDirectBody = h, n;
      }
      shouldParseAsyncArrow() {
        return this.match(19) && !this.canInsertSemicolon();
      }
      parseAsyncArrowFromCallExpression(t, e) {
        var s;
        return this.resetPreviousNodeTrailingComments(e), this.expect(19), this.parseArrowExpression(t, e.arguments, true, (s = e.extra) == null ? void 0 : s.trailingCommaLoc), e.innerComments && Te(t, e.innerComments), e.callee.trailingComments && Te(t, e.callee.trailingComments), t;
      }
      parseNoCallExpr() {
        let t = this.state.startLoc;
        return this.parseSubscripts(this.parseExprAtom(), t, true);
      }
      parseExprAtom(t) {
        let e, s = null, { type: i } = this.state;
        switch (i) {
          case 79:
            return this.parseSuper();
          case 83:
            return e = this.startNode(), this.next(), this.match(16) ? this.parseImportMetaProperty(e) : (this.match(10) || this.raise(p.UnsupportedImport, { at: this.state.lastTokStartLoc }), this.finishNode(e, "Import"));
          case 78:
            return e = this.startNode(), this.next(), this.finishNode(e, "ThisExpression");
          case 90:
            return this.parseDo(this.startNode(), false);
          case 56:
          case 31:
            return this.readRegexp(), this.parseRegExpLiteral(this.state.value);
          case 132:
            return this.parseNumericLiteral(this.state.value);
          case 133:
            return this.parseBigIntLiteral(this.state.value);
          case 134:
            return this.parseDecimalLiteral(this.state.value);
          case 131:
            return this.parseStringLiteral(this.state.value);
          case 84:
            return this.parseNullLiteral();
          case 85:
            return this.parseBooleanLiteral(true);
          case 86:
            return this.parseBooleanLiteral(false);
          case 10: {
            let r = this.state.potentialArrowAt === this.state.start;
            return this.parseParenAndDistinguishExpression(r);
          }
          case 2:
          case 1:
            return this.parseArrayLike(this.state.type === 2 ? 4 : 3, false, true);
          case 0:
            return this.parseArrayLike(3, true, false, t);
          case 6:
          case 7:
            return this.parseObjectLike(this.state.type === 6 ? 9 : 8, false, true);
          case 5:
            return this.parseObjectLike(8, false, false, t);
          case 68:
            return this.parseFunctionOrFunctionSent();
          case 26:
            s = this.parseDecorators();
          case 80:
            return this.parseClass(this.maybeTakeDecorators(s, this.startNode()), false);
          case 77:
            return this.parseNewOrNewTarget();
          case 25:
          case 24:
            return this.parseTemplate(false);
          case 15: {
            e = this.startNode(), this.next(), e.object = null;
            let r = e.callee = this.parseNoCallExpr();
            if (r.type === "MemberExpression")
              return this.finishNode(e, "BindExpression");
            throw this.raise(p.UnsupportedBind, { at: r });
          }
          case 136:
            return this.raise(p.PrivateInExpectedIn, { at: this.state.startLoc, identifierName: this.state.value }), this.parsePrivateName();
          case 33:
            return this.parseTopicReferenceThenEqualsSign(54, "%");
          case 32:
            return this.parseTopicReferenceThenEqualsSign(44, "^");
          case 37:
          case 38:
            return this.parseTopicReference("hack");
          case 44:
          case 54:
          case 27: {
            let r = this.getPluginOption("pipelineOperator", "proposal");
            if (r)
              return this.parseTopicReference(r);
            this.unexpected();
            break;
          }
          case 47: {
            let r = this.input.codePointAt(this.nextTokenStart());
            j(r) || r === 62 ? this.expectOnePlugin(["jsx", "flow", "typescript"]) : this.unexpected();
            break;
          }
          default:
            if (S(i)) {
              if (this.isContextual(125) && this.lookaheadInLineCharCode() === 123)
                return this.parseModuleExpression();
              let r = this.state.potentialArrowAt === this.state.start, n = this.state.containsEsc, o = this.parseIdentifier();
              if (!n && o.name === "async" && !this.canInsertSemicolon()) {
                let { type: h } = this.state;
                if (h === 68)
                  return this.resetPreviousNodeTrailingComments(o), this.next(), this.parseAsyncFunctionExpression(this.startNodeAtNode(o));
                if (S(h))
                  return this.lookaheadCharCode() === 61 ? this.parseAsyncArrowUnaryFunction(this.startNodeAtNode(o)) : o;
                if (h === 90)
                  return this.resetPreviousNodeTrailingComments(o), this.parseDo(this.startNodeAtNode(o), true);
              }
              return r && this.match(19) && !this.canInsertSemicolon() ? (this.next(), this.parseArrowExpression(this.startNodeAtNode(o), [o], false)) : o;
            } else
              this.unexpected();
        }
      }
      parseTopicReferenceThenEqualsSign(t, e) {
        let s = this.getPluginOption("pipelineOperator", "proposal");
        if (s)
          return this.state.type = t, this.state.value = e, this.state.pos--, this.state.end--, this.state.endLoc = L(this.state.endLoc, -1), this.parseTopicReference(s);
        this.unexpected();
      }
      parseTopicReference(t) {
        let e = this.startNode(), s = this.state.startLoc, i = this.state.type;
        return this.next(), this.finishTopicReference(e, s, t, i);
      }
      finishTopicReference(t, e, s, i) {
        if (this.testTopicReferenceConfiguration(s, e, i)) {
          let r = s === "smart" ? "PipelinePrimaryTopicReference" : "TopicReference";
          return this.topicReferenceIsAllowedInCurrentContext() || this.raise(s === "smart" ? p.PrimaryTopicNotAllowed : p.PipeTopicUnbound, { at: e }), this.registerTopicReference(), this.finishNode(t, r);
        } else
          throw this.raise(p.PipeTopicUnconfiguredToken, { at: e, token: q(i) });
      }
      testTopicReferenceConfiguration(t, e, s) {
        switch (t) {
          case "hack":
            return this.hasPlugin(["pipelineOperator", { topicToken: q(s) }]);
          case "smart":
            return s === 27;
          default:
            throw this.raise(p.PipeTopicRequiresHackPipes, { at: e });
        }
      }
      parseAsyncArrowUnaryFunction(t) {
        this.prodParam.enter(Le(true, this.prodParam.hasYield));
        let e = [this.parseIdentifier()];
        return this.prodParam.exit(), this.hasPrecedingLineBreak() && this.raise(p.LineTerminatorBeforeArrow, { at: this.state.curPosition() }), this.expect(19), this.parseArrowExpression(t, e, true);
      }
      parseDo(t, e) {
        this.expectPlugin("doExpressions"), e && this.expectPlugin("asyncDoExpressions"), t.async = e, this.next();
        let s = this.state.labels;
        return this.state.labels = [], e ? (this.prodParam.enter(Re), t.body = this.parseBlock(), this.prodParam.exit()) : t.body = this.parseBlock(), this.state.labels = s, this.finishNode(t, "DoExpression");
      }
      parseSuper() {
        let t = this.startNode();
        return this.next(), this.match(10) && !this.scope.allowDirectSuper && !this.options.allowSuperOutsideMethod ? this.raise(p.SuperNotAllowed, { at: t }) : !this.scope.allowSuper && !this.options.allowSuperOutsideMethod && this.raise(p.UnexpectedSuper, { at: t }), !this.match(10) && !this.match(0) && !this.match(16) && this.raise(p.UnsupportedSuper, { at: t }), this.finishNode(t, "Super");
      }
      parsePrivateName() {
        let t = this.startNode(), e = this.startNodeAt(L(this.state.startLoc, 1)), s = this.state.value;
        return this.next(), t.id = this.createIdentifier(e, s), this.finishNode(t, "PrivateName");
      }
      parseFunctionOrFunctionSent() {
        let t = this.startNode();
        if (this.next(), this.prodParam.hasYield && this.match(16)) {
          let e = this.createIdentifier(this.startNodeAtNode(t), "function");
          return this.next(), this.match(102) ? this.expectPlugin("functionSent") : this.hasPlugin("functionSent") || this.unexpected(), this.parseMetaProperty(t, e, "sent");
        }
        return this.parseFunction(t);
      }
      parseMetaProperty(t, e, s) {
        t.meta = e;
        let i = this.state.containsEsc;
        return t.property = this.parseIdentifier(true), (t.property.name !== s || i) && this.raise(p.UnsupportedMetaProperty, { at: t.property, target: e.name, onlyValidPropertyName: s }), this.finishNode(t, "MetaProperty");
      }
      parseImportMetaProperty(t) {
        let e = this.createIdentifier(this.startNodeAtNode(t), "import");
        return this.next(), this.isContextual(100) && (this.inModule || this.raise(p.ImportMetaOutsideModule, { at: e }), this.sawUnambiguousESM = true), this.parseMetaProperty(t, e, "meta");
      }
      parseLiteralAtNode(t, e, s) {
        return this.addExtra(s, "rawValue", t), this.addExtra(s, "raw", this.input.slice(s.start, this.state.end)), s.value = t, this.next(), this.finishNode(s, e);
      }
      parseLiteral(t, e) {
        let s = this.startNode();
        return this.parseLiteralAtNode(t, e, s);
      }
      parseStringLiteral(t) {
        return this.parseLiteral(t, "StringLiteral");
      }
      parseNumericLiteral(t) {
        return this.parseLiteral(t, "NumericLiteral");
      }
      parseBigIntLiteral(t) {
        return this.parseLiteral(t, "BigIntLiteral");
      }
      parseDecimalLiteral(t) {
        return this.parseLiteral(t, "DecimalLiteral");
      }
      parseRegExpLiteral(t) {
        let e = this.parseLiteral(t.value, "RegExpLiteral");
        return e.pattern = t.pattern, e.flags = t.flags, e;
      }
      parseBooleanLiteral(t) {
        let e = this.startNode();
        return e.value = t, this.next(), this.finishNode(e, "BooleanLiteral");
      }
      parseNullLiteral() {
        let t = this.startNode();
        return this.next(), this.finishNode(t, "NullLiteral");
      }
      parseParenAndDistinguishExpression(t) {
        let e = this.state.startLoc, s;
        this.next(), this.expressionScope.enter(Wi());
        let i = this.state.maybeInArrowParameters, r = this.state.inFSharpPipelineDirectBody;
        this.state.maybeInArrowParameters = true, this.state.inFSharpPipelineDirectBody = false;
        let n = this.state.startLoc, o = [], h = new se(), l = true, c, u;
        for (; !this.match(11); ) {
          if (l)
            l = false;
          else if (this.expect(12, h.optionalParametersLoc === null ? null : h.optionalParametersLoc), this.match(11)) {
            u = this.state.startLoc;
            break;
          }
          if (this.match(21)) {
            let x = this.state.startLoc;
            if (c = this.state.startLoc, o.push(this.parseParenItem(this.parseRestBinding(), x)), !this.checkCommaAfterRest(41))
              break;
          } else
            o.push(this.parseMaybeAssignAllowIn(h, this.parseParenItem));
        }
        let f = this.state.lastTokEndLoc;
        this.expect(11), this.state.maybeInArrowParameters = i, this.state.inFSharpPipelineDirectBody = r;
        let d = this.startNodeAt(e);
        return t && this.shouldParseArrow(o) && (d = this.parseArrow(d)) ? (this.checkDestructuringPrivate(h), this.expressionScope.validateAsPattern(), this.expressionScope.exit(), this.parseArrowExpression(d, o, false), d) : (this.expressionScope.exit(), o.length || this.unexpected(this.state.lastTokStartLoc), u && this.unexpected(u), c && this.unexpected(c), this.checkExpressionErrors(h, true), this.toReferencedListDeep(o, true), o.length > 1 ? (s = this.startNodeAt(n), s.expressions = o, this.finishNode(s, "SequenceExpression"), this.resetEndLocation(s, f)) : s = o[0], this.wrapParenthesis(e, s));
      }
      wrapParenthesis(t, e) {
        if (!this.options.createParenthesizedExpressions)
          return this.addExtra(e, "parenthesized", true), this.addExtra(e, "parenStart", t.index), this.takeSurroundingComments(e, t.index, this.state.lastTokEndLoc.index), e;
        let s = this.startNodeAt(t);
        return s.expression = e, this.finishNode(s, "ParenthesizedExpression");
      }
      shouldParseArrow(t) {
        return !this.canInsertSemicolon();
      }
      parseArrow(t) {
        if (this.eat(19))
          return t;
      }
      parseParenItem(t, e) {
        return t;
      }
      parseNewOrNewTarget() {
        let t = this.startNode();
        if (this.next(), this.match(16)) {
          let e = this.createIdentifier(this.startNodeAtNode(t), "new");
          this.next();
          let s = this.parseMetaProperty(t, e, "target");
          return !this.scope.inNonArrowFunction && !this.scope.inClass && !this.options.allowNewTargetOutsideFunction && this.raise(p.UnexpectedNewTarget, { at: s }), s;
        }
        return this.parseNew(t);
      }
      parseNew(t) {
        if (this.parseNewCallee(t), this.eat(10)) {
          let e = this.parseExprList(11);
          this.toReferencedList(e), t.arguments = e;
        } else
          t.arguments = [];
        return this.finishNode(t, "NewExpression");
      }
      parseNewCallee(t) {
        t.callee = this.parseNoCallExpr(), t.callee.type === "Import" && this.raise(p.ImportCallNotNewExpression, { at: t.callee });
      }
      parseTemplateElement(t) {
        let { start: e, startLoc: s, end: i, value: r } = this.state, n = e + 1, o = this.startNodeAt(L(s, 1));
        r === null && (t || this.raise(p.InvalidEscapeSequenceTemplate, { at: L(this.state.firstInvalidTemplateEscapePos, 1) }));
        let h = this.match(24), l = h ? -1 : -2, c = i + l;
        o.value = { raw: this.input.slice(n, c).replace(/\r\n?/g, `
`), cooked: r === null ? null : r.slice(1, l) }, o.tail = h, this.next();
        let u = this.finishNode(o, "TemplateElement");
        return this.resetEndLocation(u, L(this.state.lastTokEndLoc, l)), u;
      }
      parseTemplate(t) {
        let e = this.startNode();
        e.expressions = [];
        let s = this.parseTemplateElement(t);
        for (e.quasis = [s]; !s.tail; )
          e.expressions.push(this.parseTemplateSubstitution()), this.readTemplateContinuation(), e.quasis.push(s = this.parseTemplateElement(t));
        return this.finishNode(e, "TemplateLiteral");
      }
      parseTemplateSubstitution() {
        return this.parseExpression();
      }
      parseObjectLike(t, e, s, i) {
        s && this.expectPlugin("recordAndTuple");
        let r = this.state.inFSharpPipelineDirectBody;
        this.state.inFSharpPipelineDirectBody = false;
        let n = /* @__PURE__ */ Object.create(null), o = true, h = this.startNode();
        for (h.properties = [], this.next(); !this.match(t); ) {
          if (o)
            o = false;
          else if (this.expect(12), this.match(t)) {
            this.addTrailingCommaExtraToNode(h);
            break;
          }
          let c;
          e ? c = this.parseBindingProperty() : (c = this.parsePropertyDefinition(i), this.checkProto(c, s, n, i)), s && !this.isObjectProperty(c) && c.type !== "SpreadElement" && this.raise(p.InvalidRecordProperty, { at: c }), c.shorthand && this.addExtra(c, "shorthand", true), h.properties.push(c);
        }
        this.next(), this.state.inFSharpPipelineDirectBody = r;
        let l = "ObjectExpression";
        return e ? l = "ObjectPattern" : s && (l = "RecordExpression"), this.finishNode(h, l);
      }
      addTrailingCommaExtraToNode(t) {
        this.addExtra(t, "trailingComma", this.state.lastTokStart), this.addExtra(t, "trailingCommaLoc", this.state.lastTokStartLoc, false);
      }
      maybeAsyncOrAccessorProp(t) {
        return !t.computed && t.key.type === "Identifier" && (this.isLiteralPropertyName() || this.match(0) || this.match(55));
      }
      parsePropertyDefinition(t) {
        let e = [];
        if (this.match(26))
          for (this.hasPlugin("decorators") && this.raise(p.UnsupportedPropertyDecorator, { at: this.state.startLoc }); this.match(26); )
            e.push(this.parseDecorator());
        let s = this.startNode(), i = false, r = false, n;
        if (this.match(21))
          return e.length && this.unexpected(), this.parseSpread();
        e.length && (s.decorators = e, e = []), s.method = false, t && (n = this.state.startLoc);
        let o = this.eat(55);
        this.parsePropertyNamePrefixOperator(s);
        let h = this.state.containsEsc, l = this.parsePropertyName(s, t);
        if (!o && !h && this.maybeAsyncOrAccessorProp(s)) {
          let c = l.name;
          c === "async" && !this.hasPrecedingLineBreak() && (i = true, this.resetPreviousNodeTrailingComments(l), o = this.eat(55), this.parsePropertyName(s)), (c === "get" || c === "set") && (r = true, this.resetPreviousNodeTrailingComments(l), s.kind = c, this.match(55) && (o = true, this.raise(p.AccessorIsGenerator, { at: this.state.curPosition(), kind: c }), this.next()), this.parsePropertyName(s));
        }
        return this.parseObjPropValue(s, n, o, i, false, r, t);
      }
      getGetterSetterExpectedParamCount(t) {
        return t.kind === "get" ? 0 : 1;
      }
      getObjectOrClassMethodParams(t) {
        return t.params;
      }
      checkGetterSetterParams(t) {
        var e;
        let s = this.getGetterSetterExpectedParamCount(t), i = this.getObjectOrClassMethodParams(t);
        i.length !== s && this.raise(t.kind === "get" ? p.BadGetterArity : p.BadSetterArity, { at: t }), t.kind === "set" && ((e = i[i.length - 1]) == null ? void 0 : e.type) === "RestElement" && this.raise(p.BadSetterRestParameter, { at: t });
      }
      parseObjectMethod(t, e, s, i, r) {
        if (r) {
          let n = this.parseMethod(t, e, false, false, false, "ObjectMethod");
          return this.checkGetterSetterParams(n), n;
        }
        if (s || e || this.match(10))
          return i && this.unexpected(), t.kind = "method", t.method = true, this.parseMethod(t, e, s, false, false, "ObjectMethod");
      }
      parseObjectProperty(t, e, s, i) {
        if (t.shorthand = false, this.eat(14))
          return t.value = s ? this.parseMaybeDefault(this.state.startLoc) : this.parseMaybeAssignAllowIn(i), this.finishNode(t, "ObjectProperty");
        if (!t.computed && t.key.type === "Identifier") {
          if (this.checkReservedWord(t.key.name, t.key.loc.start, true, false), s)
            t.value = this.parseMaybeDefault(e, V(t.key));
          else if (this.match(29)) {
            let r = this.state.startLoc;
            i != null ? i.shorthandAssignLoc === null && (i.shorthandAssignLoc = r) : this.raise(p.InvalidCoverInitializedName, { at: r }), t.value = this.parseMaybeDefault(e, V(t.key));
          } else
            t.value = V(t.key);
          return t.shorthand = true, this.finishNode(t, "ObjectProperty");
        }
      }
      parseObjPropValue(t, e, s, i, r, n, o) {
        let h = this.parseObjectMethod(t, s, i, r, n) || this.parseObjectProperty(t, e, r, o);
        return h || this.unexpected(), h;
      }
      parsePropertyName(t, e) {
        if (this.eat(0))
          t.computed = true, t.key = this.parseMaybeAssignAllowIn(), this.expect(3);
        else {
          let { type: s, value: i } = this.state, r;
          if (M(s))
            r = this.parseIdentifier(true);
          else
            switch (s) {
              case 132:
                r = this.parseNumericLiteral(i);
                break;
              case 131:
                r = this.parseStringLiteral(i);
                break;
              case 133:
                r = this.parseBigIntLiteral(i);
                break;
              case 134:
                r = this.parseDecimalLiteral(i);
                break;
              case 136: {
                let n = this.state.startLoc;
                e != null ? e.privateKeyLoc === null && (e.privateKeyLoc = n) : this.raise(p.UnexpectedPrivateField, { at: n }), r = this.parsePrivateName();
                break;
              }
              default:
                this.unexpected();
            }
          t.key = r, s !== 136 && (t.computed = false);
        }
        return t.key;
      }
      initFunction(t, e) {
        t.id = null, t.generator = false, t.async = e;
      }
      parseMethod(t, e, s, i, r, n, o = false) {
        this.initFunction(t, s), t.generator = e, this.scope.enter(18 | (o ? 64 : 0) | (r ? 32 : 0)), this.prodParam.enter(Le(s, t.generator)), this.parseFunctionParams(t, i);
        let h = this.parseFunctionBodyAndFinish(t, n, true);
        return this.prodParam.exit(), this.scope.exit(), h;
      }
      parseArrayLike(t, e, s, i) {
        s && this.expectPlugin("recordAndTuple");
        let r = this.state.inFSharpPipelineDirectBody;
        this.state.inFSharpPipelineDirectBody = false;
        let n = this.startNode();
        return this.next(), n.elements = this.parseExprList(t, !s, i, n), this.state.inFSharpPipelineDirectBody = r, this.finishNode(n, s ? "TupleExpression" : "ArrayExpression");
      }
      parseArrowExpression(t, e, s, i) {
        this.scope.enter(6);
        let r = Le(s, false);
        !this.match(5) && this.prodParam.hasIn && (r |= Q), this.prodParam.enter(r), this.initFunction(t, s);
        let n = this.state.maybeInArrowParameters;
        return e && (this.state.maybeInArrowParameters = true, this.setArrowFunctionParameters(t, e, i)), this.state.maybeInArrowParameters = false, this.parseFunctionBody(t, true), this.prodParam.exit(), this.scope.exit(), this.state.maybeInArrowParameters = n, this.finishNode(t, "ArrowFunctionExpression");
      }
      setArrowFunctionParameters(t, e, s) {
        this.toAssignableList(e, s, false), t.params = e;
      }
      parseFunctionBodyAndFinish(t, e, s = false) {
        return this.parseFunctionBody(t, false, s), this.finishNode(t, e);
      }
      parseFunctionBody(t, e, s = false) {
        let i = e && !this.match(5);
        if (this.expressionScope.enter(hs()), i)
          t.body = this.parseMaybeAssign(), this.checkParams(t, false, e, false);
        else {
          let r = this.state.strict, n = this.state.labels;
          this.state.labels = [], this.prodParam.enter(this.prodParam.currentFlags() | cs), t.body = this.parseBlock(true, false, (o) => {
            let h = !this.isSimpleParamList(t.params);
            o && h && this.raise(p.IllegalLanguageModeDirective, { at: (t.kind === "method" || t.kind === "constructor") && t.key ? t.key.loc.end : t });
            let l = !r && this.state.strict;
            this.checkParams(t, !this.state.strict && !e && !s && !h, e, l), this.state.strict && t.id && this.checkIdentifier(t.id, 65, l);
          }), this.prodParam.exit(), this.state.labels = n;
        }
        this.expressionScope.exit();
      }
      isSimpleParameter(t) {
        return t.type === "Identifier";
      }
      isSimpleParamList(t) {
        for (let e = 0, s = t.length; e < s; e++)
          if (!this.isSimpleParameter(t[e]))
            return false;
        return true;
      }
      checkParams(t, e, s, i = true) {
        let r = !e && /* @__PURE__ */ new Set(), n = { type: "FormalParameters" };
        for (let o of t.params)
          this.checkLVal(o, { in: n, binding: 5, checkClashes: r, strictModeChanged: i });
      }
      parseExprList(t, e, s, i) {
        let r = [], n = true;
        for (; !this.eat(t); ) {
          if (n)
            n = false;
          else if (this.expect(12), this.match(t)) {
            i && this.addTrailingCommaExtraToNode(i), this.next();
            break;
          }
          r.push(this.parseExprListItem(e, s));
        }
        return r;
      }
      parseExprListItem(t, e, s) {
        let i;
        if (this.match(12))
          t || this.raise(p.UnexpectedToken, { at: this.state.curPosition(), unexpected: "," }), i = null;
        else if (this.match(21)) {
          let r = this.state.startLoc;
          i = this.parseParenItem(this.parseSpread(e), r);
        } else if (this.match(17)) {
          this.expectPlugin("partialApplication"), s || this.raise(p.UnexpectedArgumentPlaceholder, { at: this.state.startLoc });
          let r = this.startNode();
          this.next(), i = this.finishNode(r, "ArgumentPlaceholder");
        } else
          i = this.parseMaybeAssignAllowIn(e, this.parseParenItem);
        return i;
      }
      parseIdentifier(t) {
        let e = this.startNode(), s = this.parseIdentifierName(t);
        return this.createIdentifier(e, s);
      }
      createIdentifier(t, e) {
        return t.name = e, t.loc.identifierName = e, this.finishNode(t, "Identifier");
      }
      parseIdentifierName(t) {
        let e, { startLoc: s, type: i } = this.state;
        M(i) ? e = this.state.value : this.unexpected();
        let r = Pi(i);
        return t ? r && this.replaceToken(130) : this.checkReservedWord(e, s, r, false), this.next(), e;
      }
      checkReservedWord(t, e, s, i) {
        if (t.length > 10 || !Ri(t))
          return;
        if (s && Oi(t)) {
          this.raise(p.UnexpectedKeyword, { at: e, keyword: t });
          return;
        }
        if ((this.state.strict ? i ? is : ts : es)(t, this.inModule)) {
          this.raise(p.UnexpectedReservedWord, { at: e, reservedWord: t });
          return;
        } else if (t === "yield") {
          if (this.prodParam.hasYield) {
            this.raise(p.YieldBindingIdentifier, { at: e });
            return;
          }
        } else if (t === "await") {
          if (this.prodParam.hasAwait) {
            this.raise(p.AwaitBindingIdentifier, { at: e });
            return;
          }
          if (this.scope.inStaticBlock) {
            this.raise(p.AwaitBindingIdentifierInStaticBlock, { at: e });
            return;
          }
          this.expressionScope.recordAsyncArrowParametersError({ at: e });
        } else if (t === "arguments" && this.scope.inClassAndNotInNonArrowFunction) {
          this.raise(p.ArgumentsInClass, { at: e });
          return;
        }
      }
      isAwaitAllowed() {
        return !!(this.prodParam.hasAwait || this.options.allowAwaitOutsideFunction && !this.scope.inFunction);
      }
      parseAwait(t) {
        let e = this.startNodeAt(t);
        return this.expressionScope.recordParameterInitializerError(p.AwaitExpressionFormalParameter, { at: e }), this.eat(55) && this.raise(p.ObsoleteAwaitStar, { at: e }), !this.scope.inFunction && !this.options.allowAwaitOutsideFunction && (this.isAmbiguousAwait() ? this.ambiguousScriptDifferentAst = true : this.sawUnambiguousESM = true), this.state.soloAwait || (e.argument = this.parseMaybeUnary(null, true)), this.finishNode(e, "AwaitExpression");
      }
      isAmbiguousAwait() {
        if (this.hasPrecedingLineBreak())
          return true;
        let { type: t } = this.state;
        return t === 53 || t === 10 || t === 0 || Oe(t) || t === 101 && !this.state.containsEsc || t === 135 || t === 56 || this.hasPlugin("v8intrinsic") && t === 54;
      }
      parseYield() {
        let t = this.startNode();
        this.expressionScope.recordParameterInitializerError(p.YieldInParameter, { at: t }), this.next();
        let e = false, s = null;
        if (!this.hasPrecedingLineBreak())
          switch (e = this.eat(55), this.state.type) {
            case 13:
            case 137:
            case 8:
            case 11:
            case 3:
            case 9:
            case 14:
            case 12:
              if (!e)
                break;
            default:
              s = this.parseMaybeAssign();
          }
        return t.delegate = e, t.argument = s, this.finishNode(t, "YieldExpression");
      }
      checkPipelineAtInfixOperator(t, e) {
        this.hasPlugin(["pipelineOperator", { proposal: "smart" }]) && t.type === "SequenceExpression" && this.raise(p.PipelineHeadSequenceExpression, { at: e });
      }
      parseSmartPipelineBodyInStyle(t, e) {
        if (this.isSimpleReference(t)) {
          let s = this.startNodeAt(e);
          return s.callee = t, this.finishNode(s, "PipelineBareFunction");
        } else {
          let s = this.startNodeAt(e);
          return this.checkSmartPipeTopicBodyEarlyErrors(e), s.expression = t, this.finishNode(s, "PipelineTopicExpression");
        }
      }
      isSimpleReference(t) {
        switch (t.type) {
          case "MemberExpression":
            return !t.computed && this.isSimpleReference(t.object);
          case "Identifier":
            return true;
          default:
            return false;
        }
      }
      checkSmartPipeTopicBodyEarlyErrors(t) {
        if (this.match(19))
          throw this.raise(p.PipelineBodyNoArrow, { at: this.state.startLoc });
        this.topicReferenceWasUsedInCurrentContext() || this.raise(p.PipelineTopicUnused, { at: t });
      }
      withTopicBindingContext(t) {
        let e = this.state.topicContext;
        this.state.topicContext = { maxNumOfResolvableTopics: 1, maxTopicIndex: null };
        try {
          return t();
        } finally {
          this.state.topicContext = e;
        }
      }
      withSmartMixTopicForbiddingContext(t) {
        if (this.hasPlugin(["pipelineOperator", { proposal: "smart" }])) {
          let e = this.state.topicContext;
          this.state.topicContext = { maxNumOfResolvableTopics: 0, maxTopicIndex: null };
          try {
            return t();
          } finally {
            this.state.topicContext = e;
          }
        } else
          return t();
      }
      withSoloAwaitPermittingContext(t) {
        let e = this.state.soloAwait;
        this.state.soloAwait = true;
        try {
          return t();
        } finally {
          this.state.soloAwait = e;
        }
      }
      allowInAnd(t) {
        let e = this.prodParam.currentFlags();
        if (Q & ~e) {
          this.prodParam.enter(e | Q);
          try {
            return t();
          } finally {
            this.prodParam.exit();
          }
        }
        return t();
      }
      disallowInAnd(t) {
        let e = this.prodParam.currentFlags();
        if (Q & e) {
          this.prodParam.enter(e & ~Q);
          try {
            return t();
          } finally {
            this.prodParam.exit();
          }
        }
        return t();
      }
      registerTopicReference() {
        this.state.topicContext.maxTopicIndex = 0;
      }
      topicReferenceIsAllowedInCurrentContext() {
        return this.state.topicContext.maxNumOfResolvableTopics >= 1;
      }
      topicReferenceWasUsedInCurrentContext() {
        return this.state.topicContext.maxTopicIndex != null && this.state.topicContext.maxTopicIndex >= 0;
      }
      parseFSharpPipelineBody(t) {
        let e = this.state.startLoc;
        this.state.potentialArrowAt = this.state.start;
        let s = this.state.inFSharpPipelineDirectBody;
        this.state.inFSharpPipelineDirectBody = true;
        let i = this.parseExprOp(this.parseMaybeUnaryOrPrivate(), e, t);
        return this.state.inFSharpPipelineDirectBody = s, i;
      }
      parseModuleExpression() {
        this.expectPlugin("moduleBlocks");
        let t = this.startNode();
        this.next(), this.match(5) || this.unexpected(null, 5);
        let e = this.startNodeAt(this.state.endLoc);
        this.next();
        let s = this.initializeScopes(true);
        this.enterInitialScopes();
        try {
          t.body = this.parseProgram(e, 8, "module");
        } finally {
          s();
        }
        return this.finishNode(t, "ModuleExpression");
      }
      parsePropertyNamePrefixOperator(t) {
      }
    }, Xe = { kind: "loop" }, Pr = { kind: "switch" }, gr = /[\uD800-\uDFFF]/u, Ge = /in(?:stanceof)?/y;
    function Tr(a, t) {
      for (let e = 0; e < a.length; e++) {
        let s = a[e], { type: i } = s;
        if (typeof i == "number") {
          {
            if (i === 136) {
              let { loc: r, start: n, value: o, end: h } = s, l = n + 1, c = L(r.start, 1);
              a.splice(e, 1, new O({ type: _(27), value: "#", start: n, end: l, startLoc: r.start, endLoc: c }), new O({ type: _(130), value: o, start: l, end: h, startLoc: c, endLoc: r.end })), e++;
              continue;
            }
            if (Oe(i)) {
              let { loc: r, start: n, value: o, end: h } = s, l = n + 1, c = L(r.start, 1), u;
              t.charCodeAt(n) === 96 ? u = new O({ type: _(22), value: "`", start: n, end: l, startLoc: r.start, endLoc: c }) : u = new O({ type: _(8), value: "}", start: n, end: l, startLoc: r.start, endLoc: c });
              let f, d, x, I;
              i === 24 ? (d = h - 1, x = L(r.end, -1), f = o === null ? null : o.slice(1, -1), I = new O({ type: _(22), value: "`", start: d, end: h, startLoc: x, endLoc: r.end })) : (d = h - 2, x = L(r.end, -2), f = o === null ? null : o.slice(1, -2), I = new O({ type: _(23), value: "${", start: d, end: h, startLoc: x, endLoc: r.end })), a.splice(e, 1, u, new O({ type: _(20), value: f, start: l, end: d, startLoc: c, endLoc: x }), I), e += 2;
              continue;
            }
          }
          s.type = _(i);
        }
      }
      return a;
    }
    var Pt = class extends xt {
      parseTopLevel(t, e) {
        return t.program = this.parseProgram(e), t.comments = this.state.comments, this.options.tokens && (t.tokens = Tr(this.tokens, this.input)), this.finishNode(t, "File");
      }
      parseProgram(t, e = 137, s = this.options.sourceType) {
        if (t.sourceType = s, t.interpreter = this.parseInterpreterDirective(), this.parseBlockBody(t, true, true, e), this.inModule && !this.options.allowUndeclaredExports && this.scope.undefinedExports.size > 0)
          for (let [r, n] of Array.from(this.scope.undefinedExports))
            this.raise(p.ModuleExportUndefined, { at: n, localName: r });
        let i;
        return e === 137 ? i = this.finishNode(t, "Program") : i = this.finishNodeAt(t, "Program", L(this.state.startLoc, -1)), i;
      }
      stmtToDirective(t) {
        let e = t;
        e.type = "Directive", e.value = e.expression, delete e.expression;
        let s = e.value, i = s.value, r = this.input.slice(s.start, s.end), n = s.value = r.slice(1, -1);
        return this.addExtra(s, "raw", r), this.addExtra(s, "rawValue", n), this.addExtra(s, "expressionValue", i), s.type = "DirectiveLiteral", e;
      }
      parseInterpreterDirective() {
        if (!this.match(28))
          return null;
        let t = this.startNode();
        return t.value = this.state.value, this.next(), this.finishNode(t, "InterpreterDirective");
      }
      isLet() {
        return this.isContextual(99) ? this.hasFollowingBindingAtom() : false;
      }
      chStartsBindingIdentifier(t, e) {
        if (j(t)) {
          if (Ge.lastIndex = e, Ge.test(this.input)) {
            let s = this.codePointAtPos(Ge.lastIndex);
            if (!ee(s) && s !== 92)
              return false;
          }
          return true;
        } else
          return t === 92;
      }
      chStartsBindingPattern(t) {
        return t === 91 || t === 123;
      }
      hasFollowingBindingAtom() {
        let t = this.nextTokenStart(), e = this.codePointAtPos(t);
        return this.chStartsBindingPattern(e) || this.chStartsBindingIdentifier(e, t);
      }
      hasInLineFollowingBindingIdentifier() {
        let t = this.nextTokenInLineStart(), e = this.codePointAtPos(t);
        return this.chStartsBindingIdentifier(e, t);
      }
      startsUsingForOf() {
        let { type: t, containsEsc: e } = this.lookahead();
        if (t === 101 && !e)
          return false;
        if (S(t) && !this.hasFollowingLineBreak())
          return this.expectPlugin("explicitResourceManagement"), true;
      }
      startsAwaitUsing() {
        let t = this.nextTokenInLineStart();
        if (this.isUnparsedContextual(t, "using")) {
          t = this.nextTokenInLineStartSince(t + 5);
          let e = this.codePointAtPos(t);
          if (this.chStartsBindingIdentifier(e, t))
            return this.expectPlugin("explicitResourceManagement"), true;
        }
        return false;
      }
      parseModuleItem() {
        return this.parseStatementLike(15);
      }
      parseStatementListItem() {
        return this.parseStatementLike(6 | (!this.options.annexB || this.state.strict ? 0 : 8));
      }
      parseStatementOrSloppyAnnexBFunctionDeclaration(t = false) {
        let e = 0;
        return this.options.annexB && !this.state.strict && (e |= 4, t && (e |= 8)), this.parseStatementLike(e);
      }
      parseStatement() {
        return this.parseStatementLike(0);
      }
      parseStatementLike(t) {
        let e = null;
        return this.match(26) && (e = this.parseDecorators(true)), this.parseStatementContent(t, e);
      }
      parseStatementContent(t, e) {
        let s = this.state.type, i = this.startNode(), r = !!(t & 2), n = !!(t & 4), o = t & 1;
        switch (s) {
          case 60:
            return this.parseBreakContinueStatement(i, true);
          case 63:
            return this.parseBreakContinueStatement(i, false);
          case 64:
            return this.parseDebuggerStatement(i);
          case 90:
            return this.parseDoWhileStatement(i);
          case 91:
            return this.parseForStatement(i);
          case 68:
            if (this.lookaheadCharCode() === 46)
              break;
            return n || this.raise(this.state.strict ? p.StrictFunction : this.options.annexB ? p.SloppyFunctionAnnexB : p.SloppyFunction, { at: this.state.startLoc }), this.parseFunctionStatement(i, false, !r && n);
          case 80:
            return r || this.unexpected(), this.parseClass(this.maybeTakeDecorators(e, i), true);
          case 69:
            return this.parseIfStatement(i);
          case 70:
            return this.parseReturnStatement(i);
          case 71:
            return this.parseSwitchStatement(i);
          case 72:
            return this.parseThrowStatement(i);
          case 73:
            return this.parseTryStatement(i);
          case 96:
            if (!this.state.containsEsc && this.startsAwaitUsing())
              return this.isAwaitAllowed() ? r || this.raise(p.UnexpectedLexicalDeclaration, { at: i }) : this.raise(p.AwaitUsingNotInAsyncContext, { at: i }), this.next(), this.parseVarStatement(i, "await using");
            break;
          case 105:
            if (this.state.containsEsc || !this.hasInLineFollowingBindingIdentifier())
              break;
            return this.expectPlugin("explicitResourceManagement"), !this.scope.inModule && this.scope.inTopLevel ? this.raise(p.UnexpectedUsingDeclaration, { at: this.state.startLoc }) : r || this.raise(p.UnexpectedLexicalDeclaration, { at: this.state.startLoc }), this.parseVarStatement(i, "using");
          case 99: {
            if (this.state.containsEsc)
              break;
            let c = this.nextTokenStart(), u = this.codePointAtPos(c);
            if (u !== 91 && (!r && this.hasFollowingLineBreak() || !this.chStartsBindingIdentifier(u, c) && u !== 123))
              break;
          }
          case 75:
            r || this.raise(p.UnexpectedLexicalDeclaration, { at: this.state.startLoc });
          case 74: {
            let c = this.state.value;
            return this.parseVarStatement(i, c);
          }
          case 92:
            return this.parseWhileStatement(i);
          case 76:
            return this.parseWithStatement(i);
          case 5:
            return this.parseBlock();
          case 13:
            return this.parseEmptyStatement(i);
          case 83: {
            let c = this.lookaheadCharCode();
            if (c === 40 || c === 46)
              break;
          }
          case 82: {
            !this.options.allowImportExportEverywhere && !o && this.raise(p.UnexpectedImportExport, { at: this.state.startLoc }), this.next();
            let c;
            return s === 83 ? (c = this.parseImport(i), c.type === "ImportDeclaration" && (!c.importKind || c.importKind === "value") && (this.sawUnambiguousESM = true)) : (c = this.parseExport(i, e), (c.type === "ExportNamedDeclaration" && (!c.exportKind || c.exportKind === "value") || c.type === "ExportAllDeclaration" && (!c.exportKind || c.exportKind === "value") || c.type === "ExportDefaultDeclaration") && (this.sawUnambiguousESM = true)), this.assertModuleNodeAllowed(c), c;
          }
          default:
            if (this.isAsyncFunction())
              return r || this.raise(p.AsyncFunctionInSingleStatementContext, { at: this.state.startLoc }), this.next(), this.parseFunctionStatement(i, true, !r && n);
        }
        let h = this.state.value, l = this.parseExpression();
        return S(s) && l.type === "Identifier" && this.eat(14) ? this.parseLabeledStatement(i, h, l, t) : this.parseExpressionStatement(i, l, e);
      }
      assertModuleNodeAllowed(t) {
        !this.options.allowImportExportEverywhere && !this.inModule && this.raise(p.ImportOutsideModule, { at: t });
      }
      decoratorsEnabledBeforeExport() {
        return this.hasPlugin("decorators-legacy") ? true : this.hasPlugin("decorators") && this.getPluginOption("decorators", "decoratorsBeforeExport") !== false;
      }
      maybeTakeDecorators(t, e, s) {
        return t && (e.decorators && e.decorators.length > 0 ? (typeof this.getPluginOption("decorators", "decoratorsBeforeExport") != "boolean" && this.raise(p.DecoratorsBeforeAfterExport, { at: e.decorators[0] }), e.decorators.unshift(...t)) : e.decorators = t, this.resetStartLocationFromNode(e, t[0]), s && this.resetStartLocationFromNode(s, e)), e;
      }
      canHaveLeadingDecorator() {
        return this.match(80);
      }
      parseDecorators(t) {
        let e = [];
        do
          e.push(this.parseDecorator());
        while (this.match(26));
        if (this.match(82))
          t || this.unexpected(), this.decoratorsEnabledBeforeExport() || this.raise(p.DecoratorExportClass, { at: this.state.startLoc });
        else if (!this.canHaveLeadingDecorator())
          throw this.raise(p.UnexpectedLeadingDecorator, { at: this.state.startLoc });
        return e;
      }
      parseDecorator() {
        this.expectOnePlugin(["decorators", "decorators-legacy"]);
        let t = this.startNode();
        if (this.next(), this.hasPlugin("decorators")) {
          let e = this.state.startLoc, s;
          if (this.match(10)) {
            let i = this.state.startLoc;
            this.next(), s = this.parseExpression(), this.expect(11), s = this.wrapParenthesis(i, s);
            let r = this.state.startLoc;
            t.expression = this.parseMaybeDecoratorArguments(s), this.getPluginOption("decorators", "allowCallParenthesized") === false && t.expression !== s && this.raise(p.DecoratorArgumentsOutsideParentheses, { at: r });
          } else {
            for (s = this.parseIdentifier(false); this.eat(16); ) {
              let i = this.startNodeAt(e);
              i.object = s, this.match(136) ? (this.classScope.usePrivateName(this.state.value, this.state.startLoc), i.property = this.parsePrivateName()) : i.property = this.parseIdentifier(true), i.computed = false, s = this.finishNode(i, "MemberExpression");
            }
            t.expression = this.parseMaybeDecoratorArguments(s);
          }
        } else
          t.expression = this.parseExprSubscripts();
        return this.finishNode(t, "Decorator");
      }
      parseMaybeDecoratorArguments(t) {
        if (this.eat(10)) {
          let e = this.startNodeAtNode(t);
          return e.callee = t, e.arguments = this.parseCallExpressionArguments(11, false), this.toReferencedList(e.arguments), this.finishNode(e, "CallExpression");
        }
        return t;
      }
      parseBreakContinueStatement(t, e) {
        return this.next(), this.isLineTerminator() ? t.label = null : (t.label = this.parseIdentifier(), this.semicolon()), this.verifyBreakContinue(t, e), this.finishNode(t, e ? "BreakStatement" : "ContinueStatement");
      }
      verifyBreakContinue(t, e) {
        let s;
        for (s = 0; s < this.state.labels.length; ++s) {
          let i = this.state.labels[s];
          if ((t.label == null || i.name === t.label.name) && (i.kind != null && (e || i.kind === "loop") || t.label && e))
            break;
        }
        if (s === this.state.labels.length) {
          let i = e ? "BreakStatement" : "ContinueStatement";
          this.raise(p.IllegalBreakContinue, { at: t, type: i });
        }
      }
      parseDebuggerStatement(t) {
        return this.next(), this.semicolon(), this.finishNode(t, "DebuggerStatement");
      }
      parseHeaderExpression() {
        this.expect(10);
        let t = this.parseExpression();
        return this.expect(11), t;
      }
      parseDoWhileStatement(t) {
        return this.next(), this.state.labels.push(Xe), t.body = this.withSmartMixTopicForbiddingContext(() => this.parseStatement()), this.state.labels.pop(), this.expect(92), t.test = this.parseHeaderExpression(), this.eat(13), this.finishNode(t, "DoWhileStatement");
      }
      parseForStatement(t) {
        this.next(), this.state.labels.push(Xe);
        let e = null;
        if (this.isAwaitAllowed() && this.eatContextual(96) && (e = this.state.lastTokStartLoc), this.scope.enter(0), this.expect(10), this.match(13))
          return e !== null && this.unexpected(e), this.parseFor(t, null);
        let s = this.isContextual(99);
        {
          let h = this.isContextual(96) && this.startsAwaitUsing(), l = h || this.isContextual(105) && this.startsUsingForOf(), c = s && this.hasFollowingBindingAtom() || l;
          if (this.match(74) || this.match(75) || c) {
            let u = this.startNode(), f;
            h ? (f = "await using", this.isAwaitAllowed() || this.raise(p.AwaitUsingNotInAsyncContext, { at: this.state.startLoc }), this.next()) : f = this.state.value, this.next(), this.parseVar(u, true, f);
            let d = this.finishNode(u, "VariableDeclaration"), x = this.match(58);
            return x && l && this.raise(p.ForInUsing, { at: d }), (x || this.isContextual(101)) && d.declarations.length === 1 ? this.parseForIn(t, d, e) : (e !== null && this.unexpected(e), this.parseFor(t, d));
          }
        }
        let i = this.isContextual(95), r = new se(), n = this.parseExpression(true, r), o = this.isContextual(101);
        if (o && (s && this.raise(p.ForOfLet, { at: n }), e === null && i && n.type === "Identifier" && this.raise(p.ForOfAsync, { at: n })), o || this.match(58)) {
          this.checkDestructuringPrivate(r), this.toAssignable(n, true);
          let h = o ? "ForOfStatement" : "ForInStatement";
          return this.checkLVal(n, { in: { type: h } }), this.parseForIn(t, n, e);
        } else
          this.checkExpressionErrors(r, true);
        return e !== null && this.unexpected(e), this.parseFor(t, n);
      }
      parseFunctionStatement(t, e, s) {
        return this.next(), this.parseFunction(t, 1 | (s ? 2 : 0) | (e ? 8 : 0));
      }
      parseIfStatement(t) {
        return this.next(), t.test = this.parseHeaderExpression(), t.consequent = this.parseStatementOrSloppyAnnexBFunctionDeclaration(), t.alternate = this.eat(66) ? this.parseStatementOrSloppyAnnexBFunctionDeclaration() : null, this.finishNode(t, "IfStatement");
      }
      parseReturnStatement(t) {
        return !this.prodParam.hasReturn && !this.options.allowReturnOutsideFunction && this.raise(p.IllegalReturn, { at: this.state.startLoc }), this.next(), this.isLineTerminator() ? t.argument = null : (t.argument = this.parseExpression(), this.semicolon()), this.finishNode(t, "ReturnStatement");
      }
      parseSwitchStatement(t) {
        this.next(), t.discriminant = this.parseHeaderExpression();
        let e = t.cases = [];
        this.expect(5), this.state.labels.push(Pr), this.scope.enter(0);
        let s;
        for (let i; !this.match(8); )
          if (this.match(61) || this.match(65)) {
            let r = this.match(61);
            s && this.finishNode(s, "SwitchCase"), e.push(s = this.startNode()), s.consequent = [], this.next(), r ? s.test = this.parseExpression() : (i && this.raise(p.MultipleDefaultsInSwitch, { at: this.state.lastTokStartLoc }), i = true, s.test = null), this.expect(14);
          } else
            s ? s.consequent.push(this.parseStatementListItem()) : this.unexpected();
        return this.scope.exit(), s && this.finishNode(s, "SwitchCase"), this.next(), this.state.labels.pop(), this.finishNode(t, "SwitchStatement");
      }
      parseThrowStatement(t) {
        return this.next(), this.hasPrecedingLineBreak() && this.raise(p.NewlineAfterThrow, { at: this.state.lastTokEndLoc }), t.argument = this.parseExpression(), this.semicolon(), this.finishNode(t, "ThrowStatement");
      }
      parseCatchClauseParam() {
        let t = this.parseBindingAtom();
        return this.scope.enter(this.options.annexB && t.type === "Identifier" ? 8 : 0), this.checkLVal(t, { in: { type: "CatchClause" }, binding: 9 }), t;
      }
      parseTryStatement(t) {
        if (this.next(), t.block = this.parseBlock(), t.handler = null, this.match(62)) {
          let e = this.startNode();
          this.next(), this.match(10) ? (this.expect(10), e.param = this.parseCatchClauseParam(), this.expect(11)) : (e.param = null, this.scope.enter(0)), e.body = this.withSmartMixTopicForbiddingContext(() => this.parseBlock(false, false)), this.scope.exit(), t.handler = this.finishNode(e, "CatchClause");
        }
        return t.finalizer = this.eat(67) ? this.parseBlock() : null, !t.handler && !t.finalizer && this.raise(p.NoCatchOrFinally, { at: t }), this.finishNode(t, "TryStatement");
      }
      parseVarStatement(t, e, s = false) {
        return this.next(), this.parseVar(t, false, e, s), this.semicolon(), this.finishNode(t, "VariableDeclaration");
      }
      parseWhileStatement(t) {
        return this.next(), t.test = this.parseHeaderExpression(), this.state.labels.push(Xe), t.body = this.withSmartMixTopicForbiddingContext(() => this.parseStatement()), this.state.labels.pop(), this.finishNode(t, "WhileStatement");
      }
      parseWithStatement(t) {
        return this.state.strict && this.raise(p.StrictWith, { at: this.state.startLoc }), this.next(), t.object = this.parseHeaderExpression(), t.body = this.withSmartMixTopicForbiddingContext(() => this.parseStatement()), this.finishNode(t, "WithStatement");
      }
      parseEmptyStatement(t) {
        return this.next(), this.finishNode(t, "EmptyStatement");
      }
      parseLabeledStatement(t, e, s, i) {
        for (let n of this.state.labels)
          n.name === e && this.raise(p.LabelRedeclaration, { at: s, labelName: e });
        let r = bi(this.state.type) ? "loop" : this.match(71) ? "switch" : null;
        for (let n = this.state.labels.length - 1; n >= 0; n--) {
          let o = this.state.labels[n];
          if (o.statementStart === t.start)
            o.statementStart = this.state.start, o.kind = r;
          else
            break;
        }
        return this.state.labels.push({ name: e, kind: r, statementStart: this.state.start }), t.body = i & 8 ? this.parseStatementOrSloppyAnnexBFunctionDeclaration(true) : this.parseStatement(), this.state.labels.pop(), t.label = s, this.finishNode(t, "LabeledStatement");
      }
      parseExpressionStatement(t, e, s) {
        return t.expression = e, this.semicolon(), this.finishNode(t, "ExpressionStatement");
      }
      parseBlock(t = false, e = true, s) {
        let i = this.startNode();
        return t && this.state.strictErrors.clear(), this.expect(5), e && this.scope.enter(0), this.parseBlockBody(i, t, false, 8, s), e && this.scope.exit(), this.finishNode(i, "BlockStatement");
      }
      isValidDirective(t) {
        return t.type === "ExpressionStatement" && t.expression.type === "StringLiteral" && !t.expression.extra.parenthesized;
      }
      parseBlockBody(t, e, s, i, r) {
        let n = t.body = [], o = t.directives = [];
        this.parseBlockOrModuleBlockBody(n, e ? o : void 0, s, i, r);
      }
      parseBlockOrModuleBlockBody(t, e, s, i, r) {
        let n = this.state.strict, o = false, h = false;
        for (; !this.match(i); ) {
          let l = s ? this.parseModuleItem() : this.parseStatementListItem();
          if (e && !h) {
            if (this.isValidDirective(l)) {
              let c = this.stmtToDirective(l);
              e.push(c), !o && c.value.value === "use strict" && (o = true, this.setStrict(true));
              continue;
            }
            h = true, this.state.strictErrors.clear();
          }
          t.push(l);
        }
        r == null || r.call(this, o), n || this.setStrict(false), this.next();
      }
      parseFor(t, e) {
        return t.init = e, this.semicolon(false), t.test = this.match(13) ? null : this.parseExpression(), this.semicolon(false), t.update = this.match(11) ? null : this.parseExpression(), this.expect(11), t.body = this.withSmartMixTopicForbiddingContext(() => this.parseStatement()), this.scope.exit(), this.state.labels.pop(), this.finishNode(t, "ForStatement");
      }
      parseForIn(t, e, s) {
        let i = this.match(58);
        return this.next(), i ? s !== null && this.unexpected(s) : t.await = s !== null, e.type === "VariableDeclaration" && e.declarations[0].init != null && (!i || !this.options.annexB || this.state.strict || e.kind !== "var" || e.declarations[0].id.type !== "Identifier") && this.raise(p.ForInOfLoopInitializer, { at: e, type: i ? "ForInStatement" : "ForOfStatement" }), e.type === "AssignmentPattern" && this.raise(p.InvalidLhs, { at: e, ancestor: { type: "ForStatement" } }), t.left = e, t.right = i ? this.parseExpression() : this.parseMaybeAssignAllowIn(), this.expect(11), t.body = this.withSmartMixTopicForbiddingContext(() => this.parseStatement()), this.scope.exit(), this.state.labels.pop(), this.finishNode(t, i ? "ForInStatement" : "ForOfStatement");
      }
      parseVar(t, e, s, i = false) {
        let r = t.declarations = [];
        for (t.kind = s; ; ) {
          let n = this.startNode();
          if (this.parseVarId(n, s), n.init = this.eat(29) ? e ? this.parseMaybeAssignDisallowIn() : this.parseMaybeAssignAllowIn() : null, n.init === null && !i && (n.id.type !== "Identifier" && !(e && (this.match(58) || this.isContextual(101))) ? this.raise(p.DeclarationMissingInitializer, { at: this.state.lastTokEndLoc, kind: "destructuring" }) : s === "const" && !(this.match(58) || this.isContextual(101)) && this.raise(p.DeclarationMissingInitializer, { at: this.state.lastTokEndLoc, kind: "const" })), r.push(this.finishNode(n, "VariableDeclarator")), !this.eat(12))
            break;
        }
        return t;
      }
      parseVarId(t, e) {
        let s = this.parseBindingAtom();
        this.checkLVal(s, { in: { type: "VariableDeclarator" }, binding: e === "var" ? 5 : 8201 }), t.id = s;
      }
      parseAsyncFunctionExpression(t) {
        return this.parseFunction(t, 8);
      }
      parseFunction(t, e = 0) {
        let s = e & 2, i = !!(e & 1), r = i && !(e & 4), n = !!(e & 8);
        this.initFunction(t, n), this.match(55) && (s && this.raise(p.GeneratorInSingleStatementContext, { at: this.state.startLoc }), this.next(), t.generator = true), i && (t.id = this.parseFunctionId(r));
        let o = this.state.maybeInArrowParameters;
        return this.state.maybeInArrowParameters = false, this.scope.enter(2), this.prodParam.enter(Le(n, t.generator)), i || (t.id = this.parseFunctionId()), this.parseFunctionParams(t, false), this.withSmartMixTopicForbiddingContext(() => {
          this.parseFunctionBodyAndFinish(t, i ? "FunctionDeclaration" : "FunctionExpression");
        }), this.prodParam.exit(), this.scope.exit(), i && !s && this.registerFunctionStatementId(t), this.state.maybeInArrowParameters = o, t;
      }
      parseFunctionId(t) {
        return t || S(this.state.type) ? this.parseIdentifier() : null;
      }
      parseFunctionParams(t, e) {
        this.expect(10), this.expressionScope.enter(Hi()), t.params = this.parseBindingList(11, 41, 2 | (e ? 4 : 0)), this.expressionScope.exit();
      }
      registerFunctionStatementId(t) {
        t.id && this.scope.declareName(t.id.name, !this.options.annexB || this.state.strict || t.generator || t.async ? this.scope.treatFunctionsAsVar ? 5 : 8201 : 17, t.id.loc.start);
      }
      parseClass(t, e, s) {
        this.next();
        let i = this.state.strict;
        return this.state.strict = true, this.parseClassId(t, e, s), this.parseClassSuper(t), t.body = this.parseClassBody(!!t.superClass, i), this.finishNode(t, e ? "ClassDeclaration" : "ClassExpression");
      }
      isClassProperty() {
        return this.match(29) || this.match(13) || this.match(8);
      }
      isClassMethod() {
        return this.match(10);
      }
      isNonstaticConstructor(t) {
        return !t.computed && !t.static && (t.key.name === "constructor" || t.key.value === "constructor");
      }
      parseClassBody(t, e) {
        this.classScope.enter();
        let s = { hadConstructor: false, hadSuperClass: t }, i = [], r = this.startNode();
        if (r.body = [], this.expect(5), this.withSmartMixTopicForbiddingContext(() => {
          for (; !this.match(8); ) {
            if (this.eat(13)) {
              if (i.length > 0)
                throw this.raise(p.DecoratorSemicolon, { at: this.state.lastTokEndLoc });
              continue;
            }
            if (this.match(26)) {
              i.push(this.parseDecorator());
              continue;
            }
            let n = this.startNode();
            i.length && (n.decorators = i, this.resetStartLocationFromNode(n, i[0]), i = []), this.parseClassMember(r, n, s), n.kind === "constructor" && n.decorators && n.decorators.length > 0 && this.raise(p.DecoratorConstructor, { at: n });
          }
        }), this.state.strict = e, this.next(), i.length)
          throw this.raise(p.TrailingDecorator, { at: this.state.startLoc });
        return this.classScope.exit(), this.finishNode(r, "ClassBody");
      }
      parseClassMemberFromModifier(t, e) {
        let s = this.parseIdentifier(true);
        if (this.isClassMethod()) {
          let i = e;
          return i.kind = "method", i.computed = false, i.key = s, i.static = false, this.pushClassMethod(t, i, false, false, false, false), true;
        } else if (this.isClassProperty()) {
          let i = e;
          return i.computed = false, i.key = s, i.static = false, t.body.push(this.parseClassProperty(i)), true;
        }
        return this.resetPreviousNodeTrailingComments(s), false;
      }
      parseClassMember(t, e, s) {
        let i = this.isContextual(104);
        if (i) {
          if (this.parseClassMemberFromModifier(t, e))
            return;
          if (this.eat(5)) {
            this.parseClassStaticBlock(t, e);
            return;
          }
        }
        this.parseClassMemberWithIsStatic(t, e, s, i);
      }
      parseClassMemberWithIsStatic(t, e, s, i) {
        let r = e, n = e, o = e, h = e, l = e, c = r, u = r;
        if (e.static = i, this.parsePropertyNamePrefixOperator(e), this.eat(55)) {
          c.kind = "method";
          let C = this.match(136);
          if (this.parseClassElementName(c), C) {
            this.pushClassPrivateMethod(t, n, true, false);
            return;
          }
          this.isNonstaticConstructor(r) && this.raise(p.ConstructorIsGenerator, { at: r.key }), this.pushClassMethod(t, r, true, false, false, false);
          return;
        }
        let f = S(this.state.type) && !this.state.containsEsc, d = this.match(136), x = this.parseClassElementName(e), I = this.state.startLoc;
        if (this.parsePostMemberNameModifiers(u), this.isClassMethod()) {
          if (c.kind = "method", d) {
            this.pushClassPrivateMethod(t, n, false, false);
            return;
          }
          let C = this.isNonstaticConstructor(r), E = false;
          C && (r.kind = "constructor", s.hadConstructor && !this.hasPlugin("typescript") && this.raise(p.DuplicateConstructor, { at: x }), C && this.hasPlugin("typescript") && e.override && this.raise(p.OverrideOnConstructor, { at: x }), s.hadConstructor = true, E = s.hadSuperClass), this.pushClassMethod(t, r, false, false, C, E);
        } else if (this.isClassProperty())
          d ? this.pushClassPrivateProperty(t, h) : this.pushClassProperty(t, o);
        else if (f && x.name === "async" && !this.isLineTerminator()) {
          this.resetPreviousNodeTrailingComments(x);
          let C = this.eat(55);
          u.optional && this.unexpected(I), c.kind = "method";
          let E = this.match(136);
          this.parseClassElementName(c), this.parsePostMemberNameModifiers(u), E ? this.pushClassPrivateMethod(t, n, C, true) : (this.isNonstaticConstructor(r) && this.raise(p.ConstructorIsAsync, { at: r.key }), this.pushClassMethod(t, r, C, true, false, false));
        } else if (f && (x.name === "get" || x.name === "set") && !(this.match(55) && this.isLineTerminator())) {
          this.resetPreviousNodeTrailingComments(x), c.kind = x.name;
          let C = this.match(136);
          this.parseClassElementName(r), C ? this.pushClassPrivateMethod(t, n, false, false) : (this.isNonstaticConstructor(r) && this.raise(p.ConstructorIsAccessor, { at: r.key }), this.pushClassMethod(t, r, false, false, false, false)), this.checkGetterSetterParams(r);
        } else if (f && x.name === "accessor" && !this.isLineTerminator()) {
          this.expectPlugin("decoratorAutoAccessors"), this.resetPreviousNodeTrailingComments(x);
          let C = this.match(136);
          this.parseClassElementName(o), this.pushClassAccessorProperty(t, l, C);
        } else
          this.isLineTerminator() ? d ? this.pushClassPrivateProperty(t, h) : this.pushClassProperty(t, o) : this.unexpected();
      }
      parseClassElementName(t) {
        let { type: e, value: s } = this.state;
        if ((e === 130 || e === 131) && t.static && s === "prototype" && this.raise(p.StaticPrototype, { at: this.state.startLoc }), e === 136) {
          s === "constructor" && this.raise(p.ConstructorClassPrivateField, { at: this.state.startLoc });
          let i = this.parsePrivateName();
          return t.key = i, i;
        }
        return this.parsePropertyName(t);
      }
      parseClassStaticBlock(t, e) {
        var s;
        this.scope.enter(208);
        let i = this.state.labels;
        this.state.labels = [], this.prodParam.enter(te);
        let r = e.body = [];
        this.parseBlockOrModuleBlockBody(r, void 0, false, 8), this.prodParam.exit(), this.scope.exit(), this.state.labels = i, t.body.push(this.finishNode(e, "StaticBlock")), (s = e.decorators) != null && s.length && this.raise(p.DecoratorStaticBlock, { at: e });
      }
      pushClassProperty(t, e) {
        !e.computed && (e.key.name === "constructor" || e.key.value === "constructor") && this.raise(p.ConstructorClassField, { at: e.key }), t.body.push(this.parseClassProperty(e));
      }
      pushClassPrivateProperty(t, e) {
        let s = this.parseClassPrivateProperty(e);
        t.body.push(s), this.classScope.declarePrivateName(this.getPrivateNameSV(s.key), 0, s.key.loc.start);
      }
      pushClassAccessorProperty(t, e, s) {
        if (!s && !e.computed) {
          let r = e.key;
          (r.name === "constructor" || r.value === "constructor") && this.raise(p.ConstructorClassField, { at: r });
        }
        let i = this.parseClassAccessorProperty(e);
        t.body.push(i), s && this.classScope.declarePrivateName(this.getPrivateNameSV(i.key), 0, i.key.loc.start);
      }
      pushClassMethod(t, e, s, i, r, n) {
        t.body.push(this.parseMethod(e, s, i, r, n, "ClassMethod", true));
      }
      pushClassPrivateMethod(t, e, s, i) {
        let r = this.parseMethod(e, s, i, false, false, "ClassPrivateMethod", true);
        t.body.push(r);
        let n = r.kind === "get" ? r.static ? 6 : 2 : r.kind === "set" ? r.static ? 5 : 1 : 0;
        this.declareClassPrivateMethodInScope(r, n);
      }
      declareClassPrivateMethodInScope(t, e) {
        this.classScope.declarePrivateName(this.getPrivateNameSV(t.key), e, t.key.loc.start);
      }
      parsePostMemberNameModifiers(t) {
      }
      parseClassPrivateProperty(t) {
        return this.parseInitializer(t), this.semicolon(), this.finishNode(t, "ClassPrivateProperty");
      }
      parseClassProperty(t) {
        return this.parseInitializer(t), this.semicolon(), this.finishNode(t, "ClassProperty");
      }
      parseClassAccessorProperty(t) {
        return this.parseInitializer(t), this.semicolon(), this.finishNode(t, "ClassAccessorProperty");
      }
      parseInitializer(t) {
        this.scope.enter(80), this.expressionScope.enter(hs()), this.prodParam.enter(te), t.value = this.eat(29) ? this.parseMaybeAssignAllowIn() : null, this.expressionScope.exit(), this.prodParam.exit(), this.scope.exit();
      }
      parseClassId(t, e, s, i = 8331) {
        if (S(this.state.type))
          t.id = this.parseIdentifier(), e && this.declareNameFromIdentifier(t.id, i);
        else if (s || !e)
          t.id = null;
        else
          throw this.raise(p.MissingClassName, { at: this.state.startLoc });
      }
      parseClassSuper(t) {
        t.superClass = this.eat(81) ? this.parseExprSubscripts() : null;
      }
      parseExport(t, e) {
        let s = this.parseMaybeImportPhase(t, true), i = this.maybeParseExportDefaultSpecifier(t, s), r = !i || this.eat(12), n = r && this.eatExportStar(t), o = n && this.maybeParseExportNamespaceSpecifier(t), h = r && (!o || this.eat(12)), l = i || n;
        if (n && !o) {
          if (i && this.unexpected(), e)
            throw this.raise(p.UnsupportedDecoratorExport, { at: t });
          return this.parseExportFrom(t, true), this.finishNode(t, "ExportAllDeclaration");
        }
        let c = this.maybeParseExportNamedSpecifiers(t);
        i && r && !n && !c && this.unexpected(null, 5), o && h && this.unexpected(null, 97);
        let u;
        if (l || c) {
          if (u = false, e)
            throw this.raise(p.UnsupportedDecoratorExport, { at: t });
          this.parseExportFrom(t, l);
        } else
          u = this.maybeParseExportDeclaration(t);
        if (l || c || u) {
          var f;
          let d = t;
          if (this.checkExport(d, true, false, !!d.source), ((f = d.declaration) == null ? void 0 : f.type) === "ClassDeclaration")
            this.maybeTakeDecorators(e, d.declaration, d);
          else if (e)
            throw this.raise(p.UnsupportedDecoratorExport, { at: t });
          return this.finishNode(d, "ExportNamedDeclaration");
        }
        if (this.eat(65)) {
          let d = t, x = this.parseExportDefaultExpression();
          if (d.declaration = x, x.type === "ClassDeclaration")
            this.maybeTakeDecorators(e, x, d);
          else if (e)
            throw this.raise(p.UnsupportedDecoratorExport, { at: t });
          return this.checkExport(d, true, true), this.finishNode(d, "ExportDefaultDeclaration");
        }
        this.unexpected(null, 5);
      }
      eatExportStar(t) {
        return this.eat(55);
      }
      maybeParseExportDefaultSpecifier(t, e) {
        if (e || this.isExportDefaultSpecifier()) {
          this.expectPlugin("exportDefaultFrom", e == null ? void 0 : e.loc.start);
          let s = e || this.parseIdentifier(true), i = this.startNodeAtNode(s);
          return i.exported = s, t.specifiers = [this.finishNode(i, "ExportDefaultSpecifier")], true;
        }
        return false;
      }
      maybeParseExportNamespaceSpecifier(t) {
        if (this.isContextual(93)) {
          t.specifiers || (t.specifiers = []);
          let e = this.startNodeAt(this.state.lastTokStartLoc);
          return this.next(), e.exported = this.parseModuleExportName(), t.specifiers.push(this.finishNode(e, "ExportNamespaceSpecifier")), true;
        }
        return false;
      }
      maybeParseExportNamedSpecifiers(t) {
        if (this.match(5)) {
          t.specifiers || (t.specifiers = []);
          let e = t.exportKind === "type";
          return t.specifiers.push(...this.parseExportSpecifiers(e)), t.source = null, t.declaration = null, this.hasPlugin("importAssertions") && (t.assertions = []), true;
        }
        return false;
      }
      maybeParseExportDeclaration(t) {
        return this.shouldParseExportDeclaration() ? (t.specifiers = [], t.source = null, this.hasPlugin("importAssertions") && (t.assertions = []), t.declaration = this.parseExportDeclaration(t), true) : false;
      }
      isAsyncFunction() {
        if (!this.isContextual(95))
          return false;
        let t = this.nextTokenInLineStart();
        return this.isUnparsedContextual(t, "function");
      }
      parseExportDefaultExpression() {
        let t = this.startNode();
        if (this.match(68))
          return this.next(), this.parseFunction(t, 5);
        if (this.isAsyncFunction())
          return this.next(), this.next(), this.parseFunction(t, 13);
        if (this.match(80))
          return this.parseClass(t, true, true);
        if (this.match(26))
          return this.hasPlugin("decorators") && this.getPluginOption("decorators", "decoratorsBeforeExport") === true && this.raise(p.DecoratorBeforeExport, { at: this.state.startLoc }), this.parseClass(this.maybeTakeDecorators(this.parseDecorators(false), this.startNode()), true, true);
        if (this.match(75) || this.match(74) || this.isLet())
          throw this.raise(p.UnsupportedDefaultExport, { at: this.state.startLoc });
        let e = this.parseMaybeAssignAllowIn();
        return this.semicolon(), e;
      }
      parseExportDeclaration(t) {
        return this.match(80) ? this.parseClass(this.startNode(), true, false) : this.parseStatementListItem();
      }
      isExportDefaultSpecifier() {
        let { type: t } = this.state;
        if (S(t)) {
          if (t === 95 && !this.state.containsEsc || t === 99)
            return false;
          if ((t === 128 || t === 127) && !this.state.containsEsc) {
            let { type: i } = this.lookahead();
            if (S(i) && i !== 97 || i === 5)
              return this.expectOnePlugin(["flow", "typescript"]), false;
          }
        } else if (!this.match(65))
          return false;
        let e = this.nextTokenStart(), s = this.isUnparsedContextual(e, "from");
        if (this.input.charCodeAt(e) === 44 || S(this.state.type) && s)
          return true;
        if (this.match(65) && s) {
          let i = this.input.charCodeAt(this.nextTokenStartSince(e + 4));
          return i === 34 || i === 39;
        }
        return false;
      }
      parseExportFrom(t, e) {
        this.eatContextual(97) ? (t.source = this.parseImportSource(), this.checkExport(t), this.maybeParseImportAttributes(t), this.checkJSONModuleImport(t)) : e && this.unexpected(), this.semicolon();
      }
      shouldParseExportDeclaration() {
        let { type: t } = this.state;
        return t === 26 && (this.expectOnePlugin(["decorators", "decorators-legacy"]), this.hasPlugin("decorators")) ? (this.getPluginOption("decorators", "decoratorsBeforeExport") === true && this.raise(p.DecoratorBeforeExport, { at: this.state.startLoc }), true) : t === 74 || t === 75 || t === 68 || t === 80 || this.isLet() || this.isAsyncFunction();
      }
      checkExport(t, e, s, i) {
        if (e) {
          var r;
          if (s) {
            if (this.checkDuplicateExports(t, "default"), this.hasPlugin("exportDefaultFrom")) {
              var n;
              let o = t.declaration;
              o.type === "Identifier" && o.name === "from" && o.end - o.start === 4 && !((n = o.extra) != null && n.parenthesized) && this.raise(p.ExportDefaultFromAsIdentifier, { at: o });
            }
          } else if ((r = t.specifiers) != null && r.length)
            for (let o of t.specifiers) {
              let { exported: h } = o, l = h.type === "Identifier" ? h.name : h.value;
              if (this.checkDuplicateExports(o, l), !i && o.local) {
                let { local: c } = o;
                c.type !== "Identifier" ? this.raise(p.ExportBindingIsString, { at: o, localName: c.value, exportName: l }) : (this.checkReservedWord(c.name, c.loc.start, true, false), this.scope.checkLocalExport(c));
              }
            }
          else if (t.declaration) {
            if (t.declaration.type === "FunctionDeclaration" || t.declaration.type === "ClassDeclaration") {
              let o = t.declaration.id;
              if (!o)
                throw new Error("Assertion failure");
              this.checkDuplicateExports(t, o.name);
            } else if (t.declaration.type === "VariableDeclaration")
              for (let o of t.declaration.declarations)
                this.checkDeclaration(o.id);
          }
        }
      }
      checkDeclaration(t) {
        if (t.type === "Identifier")
          this.checkDuplicateExports(t, t.name);
        else if (t.type === "ObjectPattern")
          for (let e of t.properties)
            this.checkDeclaration(e);
        else if (t.type === "ArrayPattern")
          for (let e of t.elements)
            e && this.checkDeclaration(e);
        else
          t.type === "ObjectProperty" ? this.checkDeclaration(t.value) : t.type === "RestElement" ? this.checkDeclaration(t.argument) : t.type === "AssignmentPattern" && this.checkDeclaration(t.left);
      }
      checkDuplicateExports(t, e) {
        this.exportedIdentifiers.has(e) && (e === "default" ? this.raise(p.DuplicateDefaultExport, { at: t }) : this.raise(p.DuplicateExport, { at: t, exportName: e })), this.exportedIdentifiers.add(e);
      }
      parseExportSpecifiers(t) {
        let e = [], s = true;
        for (this.expect(5); !this.eat(8); ) {
          if (s)
            s = false;
          else if (this.expect(12), this.eat(8))
            break;
          let i = this.isContextual(128), r = this.match(131), n = this.startNode();
          n.local = this.parseModuleExportName(), e.push(this.parseExportSpecifier(n, r, t, i));
        }
        return e;
      }
      parseExportSpecifier(t, e, s, i) {
        return this.eatContextual(93) ? t.exported = this.parseModuleExportName() : e ? t.exported = Gi(t.local) : t.exported || (t.exported = V(t.local)), this.finishNode(t, "ExportSpecifier");
      }
      parseModuleExportName() {
        if (this.match(131)) {
          let t = this.parseStringLiteral(this.state.value), e = t.value.match(gr);
          return e && this.raise(p.ModuleExportNameHasLoneSurrogate, { at: t, surrogateCharCode: e[0].charCodeAt(0) }), t;
        }
        return this.parseIdentifier(true);
      }
      isJSONModuleImport(t) {
        return t.assertions != null ? t.assertions.some(({ key: e, value: s }) => s.value === "json" && (e.type === "Identifier" ? e.name === "type" : e.value === "type")) : false;
      }
      checkImportReflection(t) {
        if (t.module) {
          var e;
          (t.specifiers.length !== 1 || t.specifiers[0].type !== "ImportDefaultSpecifier") && this.raise(p.ImportReflectionNotBinding, { at: t.specifiers[0].loc.start }), ((e = t.assertions) == null ? void 0 : e.length) > 0 && this.raise(p.ImportReflectionHasAssertion, { at: t.specifiers[0].loc.start });
        }
      }
      checkJSONModuleImport(t) {
        if (this.isJSONModuleImport(t) && t.type !== "ExportAllDeclaration") {
          let { specifiers: e } = t;
          if (e != null) {
            let s = e.find((i) => {
              let r;
              if (i.type === "ExportSpecifier" ? r = i.local : i.type === "ImportSpecifier" && (r = i.imported), r !== void 0)
                return r.type === "Identifier" ? r.name !== "default" : r.value !== "default";
            });
            s !== void 0 && this.raise(p.ImportJSONBindingNotDefault, { at: s.loc.start });
          }
        }
      }
      isPotentialImportPhase(t) {
        return !t && this.isContextual(125);
      }
      applyImportPhase(t, e, s, i) {
        e || (s === "module" ? (this.expectPlugin("importReflection", i), t.module = true) : this.hasPlugin("importReflection") && (t.module = false));
      }
      parseMaybeImportPhase(t, e) {
        if (!this.isPotentialImportPhase(e))
          return this.applyImportPhase(t, e, null), null;
        let s = this.parseIdentifier(true), { type: i } = this.state;
        return (M(i) ? i !== 97 || this.lookaheadCharCode() === 102 : i !== 12) ? (this.resetPreviousIdentifierLeadingComments(s), this.applyImportPhase(t, e, s.name, s.loc.start), null) : (this.applyImportPhase(t, e, null), s);
      }
      isPrecedingIdImportPhase(t) {
        let { type: e } = this.state;
        return S(e) ? e !== 97 || this.lookaheadCharCode() === 102 : e !== 12;
      }
      parseImport(t) {
        return this.match(131) ? this.parseImportSourceAndAttributes(t) : this.parseImportSpecifiersAndAfter(t, this.parseMaybeImportPhase(t, false));
      }
      parseImportSpecifiersAndAfter(t, e) {
        t.specifiers = [];
        let i = !this.maybeParseDefaultImportSpecifier(t, e) || this.eat(12), r = i && this.maybeParseStarImportSpecifier(t);
        return i && !r && this.parseNamedImportSpecifiers(t), this.expectContextual(97), this.parseImportSourceAndAttributes(t);
      }
      parseImportSourceAndAttributes(t) {
        return t.specifiers != null || (t.specifiers = []), t.source = this.parseImportSource(), this.maybeParseImportAttributes(t), this.checkImportReflection(t), this.checkJSONModuleImport(t), this.semicolon(), this.finishNode(t, "ImportDeclaration");
      }
      parseImportSource() {
        return this.match(131) || this.unexpected(), this.parseExprAtom();
      }
      parseImportSpecifierLocal(t, e, s) {
        e.local = this.parseIdentifier(), t.specifiers.push(this.finishImportSpecifier(e, s));
      }
      finishImportSpecifier(t, e, s = 8201) {
        return this.checkLVal(t.local, { in: { type: e }, binding: s }), this.finishNode(t, e);
      }
      parseImportAttributes() {
        this.expect(5);
        let t = [], e = /* @__PURE__ */ new Set();
        do {
          if (this.match(8))
            break;
          let s = this.startNode(), i = this.state.value;
          if (e.has(i) && this.raise(p.ModuleAttributesWithDuplicateKeys, { at: this.state.startLoc, key: i }), e.add(i), this.match(131) ? s.key = this.parseStringLiteral(i) : s.key = this.parseIdentifier(true), this.expect(14), !this.match(131))
            throw this.raise(p.ModuleAttributeInvalidValue, { at: this.state.startLoc });
          s.value = this.parseStringLiteral(this.state.value), t.push(this.finishNode(s, "ImportAttribute"));
        } while (this.eat(12));
        return this.expect(8), t;
      }
      parseModuleAttributes() {
        let t = [], e = /* @__PURE__ */ new Set();
        do {
          let s = this.startNode();
          if (s.key = this.parseIdentifier(true), s.key.name !== "type" && this.raise(p.ModuleAttributeDifferentFromType, { at: s.key }), e.has(s.key.name) && this.raise(p.ModuleAttributesWithDuplicateKeys, { at: s.key, key: s.key.name }), e.add(s.key.name), this.expect(14), !this.match(131))
            throw this.raise(p.ModuleAttributeInvalidValue, { at: this.state.startLoc });
          s.value = this.parseStringLiteral(this.state.value), t.push(this.finishNode(s, "ImportAttribute"));
        } while (this.eat(12));
        return t;
      }
      maybeParseImportAttributes(t) {
        let e, s = false;
        if (this.match(76)) {
          if (this.hasPrecedingLineBreak() && this.lookaheadCharCode() === 40)
            return;
          this.next(), this.hasPlugin("moduleAttributes") ? e = this.parseModuleAttributes() : (this.expectImportAttributesPlugin(), e = this.parseImportAttributes()), s = true;
        } else if (this.isContextual(94) && !this.hasPrecedingLineBreak())
          this.hasPlugin("importAttributes") ? (this.getPluginOption("importAttributes", "deprecatedAssertSyntax") !== true && this.raise(p.ImportAttributesUseAssert, { at: this.state.startLoc }), this.addExtra(t, "deprecatedAssertSyntax", true)) : this.expectOnePlugin(["importAttributes", "importAssertions"]), this.next(), e = this.parseImportAttributes();
        else if (this.hasPlugin("importAttributes") || this.hasPlugin("importAssertions"))
          e = [];
        else if (this.hasPlugin("moduleAttributes"))
          e = [];
        else
          return;
        !s && this.hasPlugin("importAssertions") ? t.assertions = e : t.attributes = e;
      }
      maybeParseDefaultImportSpecifier(t, e) {
        if (e) {
          let s = this.startNodeAtNode(e);
          return s.local = e, t.specifiers.push(this.finishImportSpecifier(s, "ImportDefaultSpecifier")), true;
        } else if (M(this.state.type))
          return this.parseImportSpecifierLocal(t, this.startNode(), "ImportDefaultSpecifier"), true;
        return false;
      }
      maybeParseStarImportSpecifier(t) {
        if (this.match(55)) {
          let e = this.startNode();
          return this.next(), this.expectContextual(93), this.parseImportSpecifierLocal(t, e, "ImportNamespaceSpecifier"), true;
        }
        return false;
      }
      parseNamedImportSpecifiers(t) {
        let e = true;
        for (this.expect(5); !this.eat(8); ) {
          if (e)
            e = false;
          else {
            if (this.eat(14))
              throw this.raise(p.DestructureNamedImport, { at: this.state.startLoc });
            if (this.expect(12), this.eat(8))
              break;
          }
          let s = this.startNode(), i = this.match(131), r = this.isContextual(128);
          s.imported = this.parseModuleExportName();
          let n = this.parseImportSpecifier(s, i, t.importKind === "type" || t.importKind === "typeof", r, void 0);
          t.specifiers.push(n);
        }
      }
      parseImportSpecifier(t, e, s, i, r) {
        if (this.eatContextual(93))
          t.local = this.parseIdentifier();
        else {
          let { imported: n } = t;
          if (e)
            throw this.raise(p.ImportBindingIsString, { at: t, importName: n.value });
          this.checkReservedWord(n.name, t.loc.start, true, true), t.local || (t.local = V(n));
        }
        return this.finishImportSpecifier(t, "ImportSpecifier", r);
      }
      isThisParam(t) {
        return t.type === "Identifier" && t.name === "this";
      }
    }, Be = class extends Pt {
      constructor(t, e) {
        t = xr(t), super(t, e), this.options = t, this.initializeScopes(), this.plugins = br(this.options.plugins), this.filename = t.sourceFilename;
      }
      getScopeHandler() {
        return ge;
      }
      parse() {
        this.enterInitialScopes();
        let t = this.startNode(), e = this.startNode();
        return this.nextToken(), t.errors = null, this.parseTopLevel(t, e), t.errors = this.state.errors, t;
      }
    };
    function br(a) {
      let t = /* @__PURE__ */ new Map();
      for (let e of a) {
        let [s, i] = Array.isArray(e) ? e : [e, {}];
        t.has(s) || t.set(s, i || {});
      }
      return t;
    }
    function Ar(a, t) {
      var e;
      if (((e = t) == null ? void 0 : e.sourceType) === "unambiguous") {
        t = Object.assign({}, t);
        try {
          t.sourceType = "module";
          let s = me(t, a), i = s.parse();
          if (s.sawUnambiguousESM)
            return i;
          if (s.ambiguousScriptDifferentAst)
            try {
              return t.sourceType = "script", me(t, a).parse();
            } catch {
            }
          else
            i.program.sourceType = "script";
          return i;
        } catch (s) {
          try {
            return t.sourceType = "script", me(t, a).parse();
          } catch {
          }
          throw s;
        }
      } else
        return me(t, a).parse();
    }
    function Sr(a, t) {
      let e = me(t, a);
      return e.options.strictMode && (e.state.strict = true), e.getExpression();
    }
    function wr(a) {
      let t = {};
      for (let e of Object.keys(a))
        t[e] = _(a[e]);
      return t;
    }
    var Cr = wr(xi);
    function me(a, t) {
      let e = Be;
      return a != null && a.plugins && (mr(a.plugins), e = Er(a.plugins)), new e(a, t);
    }
    var Gt = {};
    function Er(a) {
      let t = yr.filter((i) => k(a, i)), e = t.join("/"), s = Gt[e];
      if (!s) {
        s = Be;
        for (let i of t)
          s = fs[i](s);
        Gt[e] = s;
      }
      return s;
    }
    be.parse = Ar;
    be.parseExpression = Sr;
    be.tokTypes = Cr;
  });
  var Ns = Bt((G) => {
    Object.defineProperty(G, "__esModule", { value: true });
    G.extract = _r;
    G.parse = jr;
    G.parseWithComments = Is;
    G.print = $r;
    G.strip = Ur;
    var Mr = /\*\/$/, Or = /^\/\*\*?/, Cs = /^\s*(\/\*\*?(.|\r?\n)*?\*\/)/, Fr = /(^|\s+)\/\/([^\r\n]*)/g, As = /^(\r?\n)+/, Br = /(?:^|\r?\n) *(@[^\r\n]*?) *\r?\n *(?![^@\r\n]*\/\/[^]*)([^@\r\n\s][^@\r\n]+?) *\r?\n/g, Ss = /(?:^|\r?\n) *@(\S+) *([^\r\n]*)/g, Rr = /(\r?\n|^) *\* ?/g, Es = [];
    function _r(a) {
      let t = a.match(Cs);
      return t ? t[0].trimLeft() : "";
    }
    function Ur(a) {
      let t = a.match(Cs);
      return t && t[0] ? a.substring(t[0].length) : a;
    }
    function jr(a) {
      return Is(a).pragmas;
    }
    function Is(a) {
      let t = `
`;
      a = a.replace(Or, "").replace(Mr, "").replace(Rr, "$1");
      let e = "";
      for (; e !== a; )
        e = a, a = a.replace(Br, `${t}$1 $2${t}`);
      a = a.replace(As, "").trimRight();
      let s = /* @__PURE__ */ Object.create(null), i = a.replace(Ss, "").replace(As, "").trimRight(), r;
      for (; r = Ss.exec(a); ) {
        let n = r[2].replace(Fr, "");
        typeof s[r[1]] == "string" || Array.isArray(s[r[1]]) ? s[r[1]] = Es.concat(s[r[1]], n) : s[r[1]] = n;
      }
      return { comments: i, pragmas: s };
    }
    function $r({ comments: a = "", pragmas: t = {} }) {
      let e = `
`, s = "/**", i = " *", r = " */", n = Object.keys(t), o = n.map((l) => ws(l, t[l])).reduce((l, c) => l.concat(c), []).map((l) => `${i} ${l}${e}`).join("");
      if (!a) {
        if (n.length === 0)
          return "";
        if (n.length === 1 && !Array.isArray(t[n[0]])) {
          let l = t[n[0]];
          return `${s} ${ws(n[0], l)[0]}${r}`;
        }
      }
      let h = a.split(e).map((l) => `${i} ${l}`).join(e) + e;
      return s + e + (a ? h : "") + (a && n.length ? i + e : "") + o + r;
    }
    function ws(a, t) {
      return Es.concat(t).map((e) => `@${a} ${e}`.trim());
    }
  });
  var Ft = {};
  si(Ft, { parsers: () => da });
  var ze = qe(kt(), 1);
  function Ir(a) {
    let t = [];
    for (let e of a)
      try {
        return e();
      } catch (s) {
        t.push(s);
      }
    throw Object.assign(new Error("All combinations failed"), { errors: t });
  }
  var ms = Ir;
  function Nr(a) {
    if (!a.startsWith("#!"))
      return "";
    let t = a.indexOf(`
`);
    return t === -1 ? a : a.slice(0, t);
  }
  var _e = Nr;
  function kr(a, t) {
    if (t === false)
      return false;
    if (a.charAt(t) === "/" && a.charAt(t + 1) === "*") {
      for (let e = t + 2; e < a.length; ++e)
        if (a.charAt(e) === "*" && a.charAt(e + 1) === "/")
          return e + 2;
    }
    return t;
  }
  var ys = kr;
  function vr(a, t, e) {
    let s = !!(e != null && e.backwards);
    if (t === false)
      return false;
    let i = a.charAt(t);
    if (s) {
      if (a.charAt(t - 1) === "\r" && i === `
`)
        return t - 2;
      if (i === `
` || i === "\r" || i === "\u2028" || i === "\u2029")
        return t - 1;
    } else {
      if (i === "\r" && a.charAt(t + 1) === `
`)
        return t + 2;
      if (i === `
` || i === "\r" || i === "\u2028" || i === "\u2029")
        return t + 1;
    }
    return t;
  }
  var xs = vr;
  function Ue(a) {
    return (t, e, s) => {
      let i = !!(s != null && s.backwards);
      if (e === false)
        return false;
      let { length: r } = t, n = e;
      for (; n >= 0 && n < r; ) {
        let o = t.charAt(n);
        if (a instanceof RegExp) {
          if (!a.test(o))
            return n;
        } else if (!a.includes(o))
          return n;
        i ? n-- : n++;
      }
      return n === -1 || n === r ? n : false;
    };
  }
  var Ps = Ue(" 	"), gs = Ue(/[^\n\r]/);
  function Lr(a, t) {
    return t === false ? false : a.charAt(t) === "/" && a.charAt(t + 1) === "/" ? gs(a, t) : t;
  }
  var Ts = Lr;
  function Dr(a, t) {
    let e = null, s = t;
    for (; s !== e; )
      e = s, s = Ps(a, s), s = ys(a, s), s = Ts(a, s), s = xs(a, s);
    return s;
  }
  var bs = Dr;
  var ne = qe(Ns(), 1);
  function Vr(a) {
    let t = _e(a);
    t && (a = a.slice(t.length + 1));
    let e = (0, ne.extract)(a), { pragmas: s, comments: i } = (0, ne.parseWithComments)(e);
    return { shebang: t, text: a, pragmas: s, comments: i };
  }
  function ks(a) {
    let { pragmas: t } = Vr(a);
    return Object.prototype.hasOwnProperty.call(t, "prettier") || Object.prototype.hasOwnProperty.call(t, "format");
  }
  function zr(a) {
    return Array.isArray(a) && a.length > 0;
  }
  var Y = zr;
  function D(a) {
    var s;
    let t = a.range ? a.range[0] : a.start, e = ((s = a.declaration) == null ? void 0 : s.decorators) ?? a.decorators;
    return Y(e) ? Math.min(D(e[0]), t) : t;
  }
  function B(a) {
    return a.range ? a.range[1] : a.end;
  }
  function Kr(a) {
    return a = typeof a == "function" ? { parse: a } : a, { astFormat: "estree", hasPragma: ks, locStart: D, locEnd: B, ...a };
  }
  var oe = Kr;
  function qr(a, t) {
    let e = new SyntaxError(a + " (" + t.loc.start.line + ":" + t.loc.start.column + ")");
    return Object.assign(e, t);
  }
  var je = qr;
  function Hr(a) {
    let { message: t, loc: e } = a;
    return je(t.replace(/ \(.*\)$/, ""), { loc: { start: { line: e ? e.line : 0, column: e ? e.column + 1 : 0 } }, cause: a });
  }
  var Ae = Hr;
  var Wr = (a, t, e) => {
    if (!(a && t == null))
      return Array.isArray(t) || typeof t == "string" ? t[e < 0 ? t.length + e : e] : t.at(e);
  }, vt = Wr;
  function Jr(a) {
    return a = new Set(a), (t) => a.has(t == null ? void 0 : t.type);
  }
  var vs = Jr;
  var Xr = vs(["Block", "CommentBlock", "MultiLine"]), Se = Xr;
  function Gr(a) {
    return Se(a) && a.value[0] === "*" && /@(?:type|satisfies)\b/.test(a.value);
  }
  var Ls = Gr;
  function Yr(a) {
    let t = `*${a.value}*`.split(`
`);
    return t.length > 1 && t.every((e) => e.trimStart()[0] === "*");
  }
  var Lt = Yr;
  var we = null;
  function Ce(a) {
    if (we !== null && typeof we.property) {
      let t = we;
      return we = Ce.prototype = null, t;
    }
    return we = Ce.prototype = a ?? /* @__PURE__ */ Object.create(null), new Ce();
  }
  var Qr = 10;
  for (let a = 0; a <= Qr; a++)
    Ce();
  function Dt(a) {
    return Ce(a);
  }
  function Zr(a, t = "type") {
    Dt(a);
    function e(s) {
      let i = s[t], r = a[i];
      if (!Array.isArray(r))
        throw Object.assign(new Error(`Missing visitor keys for '${i}'.`), { node: s });
      return r;
    }
    return e;
  }
  var Ds = Zr;
  var Ms = { ArrayExpression: ["elements"], AssignmentExpression: ["left", "right"], BinaryExpression: ["left", "right"], InterpreterDirective: [], Directive: ["value"], DirectiveLiteral: [], BlockStatement: ["directives", "body"], BreakStatement: ["label"], CallExpression: ["callee", "arguments", "typeParameters", "typeArguments"], CatchClause: ["param", "body"], ConditionalExpression: ["test", "consequent", "alternate"], ContinueStatement: ["label"], DebuggerStatement: [], DoWhileStatement: ["test", "body"], EmptyStatement: [], ExpressionStatement: ["expression"], File: ["program"], ForInStatement: ["left", "right", "body"], ForStatement: ["init", "test", "update", "body"], FunctionDeclaration: ["id", "params", "body", "returnType", "typeParameters", "predicate"], FunctionExpression: ["id", "params", "body", "returnType", "typeParameters"], Identifier: ["typeAnnotation", "decorators"], IfStatement: ["test", "consequent", "alternate"], LabeledStatement: ["label", "body"], StringLiteral: [], NumericLiteral: [], NullLiteral: [], BooleanLiteral: [], RegExpLiteral: [], LogicalExpression: ["left", "right"], MemberExpression: ["object", "property"], NewExpression: ["callee", "arguments", "typeParameters", "typeArguments"], Program: ["directives", "body"], ObjectExpression: ["properties"], ObjectMethod: ["key", "params", "body", "decorators", "returnType", "typeParameters"], ObjectProperty: ["key", "value", "decorators"], RestElement: ["argument", "typeAnnotation", "decorators"], ReturnStatement: ["argument"], SequenceExpression: ["expressions"], ParenthesizedExpression: ["expression"], SwitchCase: ["test", "consequent"], SwitchStatement: ["discriminant", "cases"], ThisExpression: [], ThrowStatement: ["argument"], TryStatement: ["block", "handler", "finalizer"], UnaryExpression: ["argument"], UpdateExpression: ["argument"], VariableDeclaration: ["declarations"], VariableDeclarator: ["id", "init"], WhileStatement: ["test", "body"], WithStatement: ["object", "body"], AssignmentPattern: ["left", "right", "decorators", "typeAnnotation"], ArrayPattern: ["elements", "typeAnnotation", "decorators"], ArrowFunctionExpression: ["params", "body", "returnType", "typeParameters", "predicate"], ClassBody: ["body"], ClassExpression: ["id", "body", "superClass", "mixins", "typeParameters", "superTypeParameters", "implements", "decorators", "superTypeArguments"], ClassDeclaration: ["id", "body", "superClass", "mixins", "typeParameters", "superTypeParameters", "implements", "decorators", "superTypeArguments"], ExportAllDeclaration: ["source", "attributes", "assertions", "exported"], ExportDefaultDeclaration: ["declaration"], ExportNamedDeclaration: ["declaration", "specifiers", "source", "attributes", "assertions"], ExportSpecifier: ["local", "exported"], ForOfStatement: ["left", "right", "body"], ImportDeclaration: ["specifiers", "source", "attributes", "assertions"], ImportDefaultSpecifier: ["local"], ImportNamespaceSpecifier: ["local"], ImportSpecifier: ["local", "imported"], MetaProperty: ["meta", "property"], ClassMethod: ["key", "params", "body", "decorators", "returnType", "typeParameters"], ObjectPattern: ["properties", "typeAnnotation", "decorators"], SpreadElement: ["argument"], Super: [], TaggedTemplateExpression: ["tag", "quasi", "typeParameters", "typeArguments"], TemplateElement: [], TemplateLiteral: ["quasis", "expressions"], YieldExpression: ["argument"], AwaitExpression: ["argument"], Import: [], BigIntLiteral: [], ExportNamespaceSpecifier: ["exported"], OptionalMemberExpression: ["object", "property"], OptionalCallExpression: ["callee", "arguments", "typeParameters", "typeArguments"], ClassProperty: ["key", "value", "typeAnnotation", "decorators", "variance"], ClassAccessorProperty: ["key", "value", "typeAnnotation", "decorators"], ClassPrivateProperty: ["key", "value", "decorators", "typeAnnotation", "variance"], ClassPrivateMethod: ["key", "params", "body", "decorators", "returnType", "typeParameters"], PrivateName: ["id"], StaticBlock: ["body"], AnyTypeAnnotation: [], ArrayTypeAnnotation: ["elementType"], BooleanTypeAnnotation: [], BooleanLiteralTypeAnnotation: [], NullLiteralTypeAnnotation: [], ClassImplements: ["id", "typeParameters"], DeclareClass: ["id", "typeParameters", "extends", "mixins", "implements", "body"], DeclareFunction: ["id", "predicate"], DeclareInterface: ["id", "typeParameters", "extends", "body"], DeclareModule: ["id", "body"], DeclareModuleExports: ["typeAnnotation"], DeclareTypeAlias: ["id", "typeParameters", "right"], DeclareOpaqueType: ["id", "typeParameters", "supertype"], DeclareVariable: ["id"], DeclareExportDeclaration: ["declaration", "specifiers", "source"], DeclareExportAllDeclaration: ["source"], DeclaredPredicate: ["value"], ExistsTypeAnnotation: [], FunctionTypeAnnotation: ["typeParameters", "params", "rest", "returnType", "this"], FunctionTypeParam: ["name", "typeAnnotation"], GenericTypeAnnotation: ["id", "typeParameters"], InferredPredicate: [], InterfaceExtends: ["id", "typeParameters"], InterfaceDeclaration: ["id", "typeParameters", "extends", "body"], InterfaceTypeAnnotation: ["extends", "body"], IntersectionTypeAnnotation: ["types"], MixedTypeAnnotation: [], EmptyTypeAnnotation: [], NullableTypeAnnotation: ["typeAnnotation"], NumberLiteralTypeAnnotation: [], NumberTypeAnnotation: [], ObjectTypeAnnotation: ["properties", "indexers", "callProperties", "internalSlots"], ObjectTypeInternalSlot: ["id", "value", "optional", "static", "method"], ObjectTypeCallProperty: ["value"], ObjectTypeIndexer: ["id", "key", "value", "variance"], ObjectTypeProperty: ["key", "value", "variance"], ObjectTypeSpreadProperty: ["argument"], OpaqueType: ["id", "typeParameters", "supertype", "impltype"], QualifiedTypeIdentifier: ["id", "qualification"], StringLiteralTypeAnnotation: [], StringTypeAnnotation: [], SymbolTypeAnnotation: [], ThisTypeAnnotation: [], TupleTypeAnnotation: ["types", "elementTypes"], TypeofTypeAnnotation: ["argument"], TypeAlias: ["id", "typeParameters", "right"], TypeAnnotation: ["typeAnnotation"], TypeCastExpression: ["expression", "typeAnnotation"], TypeParameter: ["bound", "default", "variance"], TypeParameterDeclaration: ["params"], TypeParameterInstantiation: ["params"], UnionTypeAnnotation: ["types"], Variance: [], VoidTypeAnnotation: [], EnumDeclaration: ["id", "body"], EnumBooleanBody: ["members"], EnumNumberBody: ["members"], EnumStringBody: ["members"], EnumSymbolBody: ["members"], EnumBooleanMember: ["id", "init"], EnumNumberMember: ["id", "init"], EnumStringMember: ["id", "init"], EnumDefaultedMember: ["id"], IndexedAccessType: ["objectType", "indexType"], OptionalIndexedAccessType: ["objectType", "indexType"], JSXAttribute: ["name", "value"], JSXClosingElement: ["name"], JSXElement: ["openingElement", "children", "closingElement"], JSXEmptyExpression: [], JSXExpressionContainer: ["expression"], JSXSpreadChild: ["expression"], JSXIdentifier: [], JSXMemberExpression: ["object", "property"], JSXNamespacedName: ["namespace", "name"], JSXOpeningElement: ["name", "attributes", "typeArguments", "typeParameters"], JSXSpreadAttribute: ["argument"], JSXText: [], JSXFragment: ["openingFragment", "children", "closingFragment"], JSXOpeningFragment: [], JSXClosingFragment: [], Noop: [], Placeholder: [], V8IntrinsicIdentifier: [], ArgumentPlaceholder: [], BindExpression: ["object", "callee"], ImportAttribute: ["key", "value"], Decorator: ["expression"], DoExpression: ["body"], ExportDefaultSpecifier: ["exported"], RecordExpression: ["properties"], TupleExpression: ["elements"], DecimalLiteral: [], ModuleExpression: ["body"], TopicReference: [], PipelineTopicExpression: ["expression"], PipelineBareFunction: ["callee"], PipelinePrimaryTopicReference: [], TSParameterProperty: ["parameter", "decorators"], TSDeclareFunction: ["id", "typeParameters", "params", "returnType", "body"], TSDeclareMethod: ["decorators", "key", "typeParameters", "params", "returnType"], TSQualifiedName: ["left", "right"], TSCallSignatureDeclaration: ["typeParameters", "parameters", "typeAnnotation", "params", "returnType"], TSConstructSignatureDeclaration: ["typeParameters", "parameters", "typeAnnotation", "params", "returnType"], TSPropertySignature: ["key", "typeAnnotation"], TSMethodSignature: ["key", "typeParameters", "parameters", "typeAnnotation", "params", "returnType"], TSIndexSignature: ["parameters", "typeAnnotation"], TSAnyKeyword: [], TSBooleanKeyword: [], TSBigIntKeyword: [], TSIntrinsicKeyword: [], TSNeverKeyword: [], TSNullKeyword: [], TSNumberKeyword: [], TSObjectKeyword: [], TSStringKeyword: [], TSSymbolKeyword: [], TSUndefinedKeyword: [], TSUnknownKeyword: [], TSVoidKeyword: [], TSThisType: [], TSFunctionType: ["typeParameters", "parameters", "typeAnnotation", "params", "returnType"], TSConstructorType: ["typeParameters", "parameters", "typeAnnotation", "params", "returnType"], TSTypeReference: ["typeName", "typeParameters", "typeArguments"], TSTypePredicate: ["parameterName", "typeAnnotation"], TSTypeQuery: ["exprName", "typeParameters", "typeArguments"], TSTypeLiteral: ["members"], TSArrayType: ["elementType"], TSTupleType: ["elementTypes"], TSOptionalType: ["typeAnnotation"], TSRestType: ["typeAnnotation"], TSNamedTupleMember: ["label", "elementType"], TSUnionType: ["types"], TSIntersectionType: ["types"], TSConditionalType: ["checkType", "extendsType", "trueType", "falseType"], TSInferType: ["typeParameter"], TSParenthesizedType: ["typeAnnotation"], TSTypeOperator: ["typeAnnotation"], TSIndexedAccessType: ["objectType", "indexType"], TSMappedType: ["typeParameter", "typeAnnotation", "nameType"], TSLiteralType: ["literal"], TSExpressionWithTypeArguments: ["expression", "typeParameters"], TSInterfaceDeclaration: ["id", "typeParameters", "extends", "body"], TSInterfaceBody: ["body"], TSTypeAliasDeclaration: ["id", "typeParameters", "typeAnnotation"], TSInstantiationExpression: ["expression", "typeParameters", "typeArguments"], TSAsExpression: ["expression", "typeAnnotation"], TSSatisfiesExpression: ["expression", "typeAnnotation"], TSTypeAssertion: ["typeAnnotation", "expression"], TSEnumDeclaration: ["id", "members"], TSEnumMember: ["id", "initializer"], TSModuleDeclaration: ["id", "body"], TSModuleBlock: ["body"], TSImportType: ["argument", "qualifier", "typeParameters", "typeArguments"], TSImportEqualsDeclaration: ["id", "moduleReference"], TSExternalModuleReference: ["expression"], TSNonNullExpression: ["expression"], TSExportAssignment: ["expression"], TSNamespaceExportDeclaration: ["id"], TSTypeAnnotation: ["typeAnnotation"], TSTypeParameterInstantiation: ["params"], TSTypeParameterDeclaration: ["params"], TSTypeParameter: ["constraint", "default", "name"], ChainExpression: ["expression"], ExperimentalRestProperty: ["argument"], ExperimentalSpreadProperty: ["argument"], ImportExpression: ["source", "attributes"], Literal: [], MethodDefinition: ["decorators", "key", "value"], PrivateIdentifier: [], Property: ["key", "value"], PropertyDefinition: ["decorators", "key", "typeAnnotation", "value", "variance"], AccessorProperty: ["decorators", "key", "typeAnnotation", "value"], TSAbstractAccessorProperty: ["decorators", "key", "typeAnnotation"], TSAbstractKeyword: [], TSAbstractMethodDefinition: ["key", "value"], TSAbstractPropertyDefinition: ["decorators", "key", "typeAnnotation"], TSAsyncKeyword: [], TSClassImplements: ["expression", "typeArguments", "typeParameters"], TSDeclareKeyword: [], TSEmptyBodyFunctionExpression: ["id", "typeParameters", "params", "returnType"], TSExportKeyword: [], TSInterfaceHeritage: ["expression", "typeArguments", "typeParameters"], TSPrivateKeyword: [], TSProtectedKeyword: [], TSPublicKeyword: [], TSReadonlyKeyword: [], TSStaticKeyword: [], TSTemplateLiteralType: ["quasis", "types"], BigIntLiteralTypeAnnotation: [], BigIntTypeAnnotation: [], ConditionalTypeAnnotation: ["checkType", "extendsType", "trueType", "falseType"], DeclareEnum: ["id", "body"], InferTypeAnnotation: ["typeParameter"], KeyofTypeAnnotation: ["argument"], ObjectTypeMappedTypeProperty: ["keyTparam", "propType", "sourceType", "variance"], QualifiedTypeofIdentifier: ["qualification", "id"], TupleTypeLabeledElement: ["label", "elementType", "variance"], TupleTypeSpreadElement: ["label", "typeAnnotation"], TypePredicate: ["parameterName", "typeAnnotation", "asserts"], NGRoot: ["node"], NGPipeExpression: ["left", "right", "arguments"], NGChainedExpression: ["expressions"], NGEmptyExpression: [], NGMicrosyntax: ["body"], NGMicrosyntaxKey: [], NGMicrosyntaxExpression: ["expression", "alias"], NGMicrosyntaxKeyedExpression: ["key", "expression"], NGMicrosyntaxLet: ["key", "value"], NGMicrosyntaxAs: ["key", "alias"], JsExpressionRoot: ["node"], JsonRoot: ["node"], TSJSDocAllType: [], TSJSDocUnknownType: [], TSJSDocNullableType: ["typeAnnotation"], TSJSDocNonNullableType: ["typeAnnotation"], NeverTypeAnnotation: [], UndefinedTypeAnnotation: [], UnknownTypeAnnotation: [] };
  var ea = Ds(Ms), Os = ea;
  function Mt(a, t) {
    if (!(a !== null && typeof a == "object"))
      return a;
    if (Array.isArray(a)) {
      for (let s = 0; s < a.length; s++)
        a[s] = Mt(a[s], t);
      return a;
    }
    let e = Os(a);
    for (let s = 0; s < e.length; s++)
      a[e[s]] = Mt(a[e[s]], t);
    return t(a) || a;
  }
  var $e = Mt;
  function ta(a, t) {
    let { parser: e, text: s } = t;
    if (a.type === "File" && a.program.interpreter) {
      let { program: { interpreter: r }, comments: n } = a;
      delete a.program.interpreter, n.unshift(r);
    }
    if (e === "babel") {
      let r = /* @__PURE__ */ new Set();
      a = $e(a, (n) => {
        var o;
        (o = n.leadingComments) != null && o.some(Ls) && r.add(D(n));
      }), a = $e(a, (n) => {
        if (n.type === "ParenthesizedExpression") {
          let { expression: o } = n;
          if (o.type === "TypeCastExpression")
            return o.range = n.range, o;
          let h = D(n);
          if (!r.has(h))
            return o.extra = { ...o.extra, parenthesized: true }, o;
        }
      });
    }
    if (a = $e(a, (r) => {
      switch (r.type) {
        case "LogicalExpression":
          if (Fs(r))
            return Ot(r);
          break;
        case "VariableDeclaration": {
          let n = vt(false, r.declarations, -1);
          n != null && n.init && i(r, n);
          break;
        }
        case "TSParenthesizedType":
          return r.typeAnnotation;
        case "TSTypeParameter":
          if (typeof r.name == "string") {
            let n = D(r);
            r.name = { type: "Identifier", name: r.name, range: [n, n + r.name.length] };
          }
          break;
        case "TopicReference":
          a.extra = { ...a.extra, __isUsingHackPipeline: true };
          break;
        case "ExportAllDeclaration": {
          let { exported: n } = r;
          if (e === "meriyah" && (n == null ? void 0 : n.type) === "Identifier") {
            let o = s.slice(D(n), B(n));
            (o.startsWith('"') || o.startsWith("'")) && (r.exported = { ...r.exported, type: "Literal", value: r.exported.name, raw: o });
          }
          break;
        }
        case "TSUnionType":
        case "TSIntersectionType":
          if (r.types.length === 1)
            return r.types[0];
          break;
      }
    }), Y(a.comments)) {
      let r = vt(false, a.comments, -1);
      for (let n = a.comments.length - 2; n >= 0; n--) {
        let o = a.comments[n];
        B(o) === D(r) && Se(o) && Se(r) && Lt(o) && Lt(r) && (a.comments.splice(n + 1, 1), o.value += "*//*" + r.value, o.range = [D(o), B(r)]), r = o;
      }
    }
    return a.type === "Program" && (a.range = [0, s.length]), a;
    function i(r, n) {
      s[B(n)] !== ";" && (r.range = [D(r), B(n)]);
    }
  }
  function Fs(a) {
    return a.type === "LogicalExpression" && a.right.type === "LogicalExpression" && a.operator === a.right.operator;
  }
  function Ot(a) {
    return Fs(a) ? Ot({ type: "LogicalExpression", operator: a.operator, left: Ot({ type: "LogicalExpression", operator: a.operator, left: a.left, right: a.right.left, range: [D(a.left), B(a.right.left)] }), right: a.right.right, range: [D(a), B(a)] }) : a;
  }
  var Bs = ta;
  function sa(a) {
    let { filepath: t } = a;
    if (t) {
      if (t = t.toLowerCase(), t.endsWith(".cjs"))
        return "script";
      if (t.endsWith(".mjs"))
        return "module";
    }
  }
  var Rs = sa;
  function ia(a, t) {
    let { type: e = "JsExpressionRoot", rootMarker: s, text: i } = t, { tokens: r, comments: n } = a;
    return delete a.tokens, delete a.comments, { tokens: r, comments: n, type: e, node: a, range: [0, i.length], rootMarker: s };
  }
  var Ve = ia;
  var he = (a) => oe(la(a)), ra = { sourceType: "module", allowImportExportEverywhere: true, allowReturnOutsideFunction: true, allowNewTargetOutsideFunction: true, allowSuperOutsideMethod: true, allowUndeclaredExports: true, errorRecovery: true, createParenthesizedExpressions: true, plugins: ["doExpressions", "exportDefaultFrom", "functionBind", "functionSent", "throwExpressions", "partialApplication", "decorators", "decimal", "moduleBlocks", "asyncDoExpressions", "regexpUnicodeSets", "destructuringPrivate", "decoratorAutoAccessors", "importReflection", "explicitResourceManagement", ["importAttributes", { deprecatedAssertSyntax: true }]], tokens: true, ranges: true }, aa = ["recordAndTuple", { syntaxType: "hash" }], _s = "v8intrinsic", Us = [["pipelineOperator", { proposal: "hack", topicToken: "%" }], ["pipelineOperator", { proposal: "minimal" }], ["pipelineOperator", { proposal: "fsharp" }]], R = (a, t = ra) => ({ ...t, plugins: [...t.plugins, ...a] }), na = /@(?:no)?flow\b/;
  function oa(a, t) {
    var i;
    if ((i = t.filepath) != null && i.endsWith(".js.flow"))
      return true;
    let e = _e(a);
    e && (a = a.slice(e.length));
    let s = bs(a, 0);
    return s !== false && (a = a.slice(0, s)), na.test(a);
  }
  function ha(a, t, e) {
    let s = a(t, e), i = s.errors.find((r) => !ca.has(r.reasonCode));
    if (i)
      throw i;
    return s;
  }
  function la({ isExpression: a = false, optionsCombinations: t }) {
    return (e, s = {}) => {
      if ((s.parser === "babel" || s.parser === "__babel_estree") && oa(e, s))
        return s.parser = "babel-flow", qs.parse(e, s);
      let i = t;
      (s.__babelSourceType ?? Rs(s)) === "script" && (i = i.map((l) => ({ ...l, sourceType: "script" }))), /#[[{]/.test(e) && (i = i.map((l) => R([aa], l)));
      let n = /%[A-Z]/.test(e);
      e.includes("|>") ? i = (n ? [...Us, _s] : Us).flatMap((c) => i.map((u) => R([c], u))) : n && (i = i.map((l) => R([_s], l)));
      let o = a ? ze.parseExpression : ze.parse, h;
      try {
        h = ms(i.map((l) => () => ha(o, e, l)));
      } catch ({ errors: [l] }) {
        throw Ae(l);
      }
      return a && (h = Ve(h, { text: e, rootMarker: s.rootMarker })), Bs(h, { parser: "babel", text: e });
    };
  }
  var ca = /* @__PURE__ */ new Set(["StrictNumericEscape", "StrictWith", "StrictOctalLiteral", "StrictDelete", "StrictEvalArguments", "StrictEvalArgumentsBinding", "StrictFunction", "EmptyTypeArguments", "EmptyTypeParameters", "ConstructorHasTypeParameters", "UnsupportedParameterPropertyKind", "MixedLabeledAndUnlabeledElements", "DuplicateAccessibilityModifier", "DecoratorExportClass", "ParamDupe", "InvalidDecimal", "RestTrailingComma", "UnsupportedParameterDecorator", "UnterminatedJsxContent", "UnexpectedReservedWord", "ModuleAttributesWithDuplicateKeys", "LineTerminatorBeforeArrow", "InvalidEscapeSequenceTemplate", "NonAbstractClassHasAbstractMethod", "OptionalTypeBeforeRequired", "PatternIsOptional", "OptionalBindingPattern", "DeclareClassFieldHasInitializer", "TypeImportCannotSpecifyDefaultAndNamed", "DeclareFunctionHasImplementation", "ConstructorClassField", "VarRedeclaration", "InvalidPrivateFieldResolution", "DuplicateExport"]), Ks = [R(["jsx"])], js = he({ optionsCombinations: Ks }), $s = he({ optionsCombinations: [R(["jsx", "typescript"]), R(["typescript"])] }), Vs = he({ isExpression: true, optionsCombinations: [R(["jsx"])] }), zs = he({ isExpression: true, optionsCombinations: [R(["typescript"])] }), qs = he({ optionsCombinations: [R(["jsx", ["flow", { all: true, enums: true }], "flowComments"])] }), pa = he({ optionsCombinations: Ks.map((a) => R(["estree"], a)) }), Hs = { babel: js, "babel-flow": qs, "babel-ts": $s, __js_expression: Vs, __ts_expression: zs, __vue_expression: Vs, __vue_ts_expression: zs, __vue_event_binding: js, __vue_ts_event_binding: $s, __babel_estree: pa };
  var Js = qe(kt(), 1);
  function Xs(a = {}) {
    let { allowComments: t = true } = a;
    return function(s) {
      let i;
      try {
        i = (0, Js.parseExpression)(s, { tokens: true, ranges: true });
      } catch (r) {
        throw (r == null ? void 0 : r.reasonCode) === "MissingPlugin" || (r == null ? void 0 : r.reasonCode) === "MissingOneOfPlugins" ? Ae({ message: "Unexpected token", loc: r.loc }) : Ae(r);
      }
      if (!t && Y(i.comments))
        throw H(i.comments[0], "Comment");
      return le(i), Ve(i, { type: "JsonRoot", text: s });
    };
  }
  function H(a, t) {
    let [e, s] = [a.loc.start, a.loc.end].map(({ line: i, column: r }) => ({ line: i, column: r + 1 }));
    return je(`${t} is not allowed in JSON.`, { loc: { start: e, end: s } });
  }
  function le(a) {
    switch (a.type) {
      case "ArrayExpression":
        for (let t of a.elements)
          t !== null && le(t);
        return;
      case "ObjectExpression":
        for (let t of a.properties)
          le(t);
        return;
      case "ObjectProperty":
        if (a.computed)
          throw H(a.key, "Computed key");
        if (a.shorthand)
          throw H(a.key, "Shorthand property");
        a.key.type !== "Identifier" && le(a.key), le(a.value);
        return;
      case "UnaryExpression": {
        let { operator: t, argument: e } = a;
        if (t !== "+" && t !== "-")
          throw H(a, `Operator '${a.operator}'`);
        if (e.type === "NumericLiteral" || e.type === "Identifier" && (e.name === "Infinity" || e.name === "NaN"))
          return;
        throw H(e, `Operator '${t}' before '${e.type}'`);
      }
      case "Identifier":
        if (a.name !== "Infinity" && a.name !== "NaN" && a.name !== "undefined")
          throw H(a, `Identifier '${a.name}'`);
        return;
      case "TemplateLiteral":
        if (Y(a.expressions))
          throw H(a.expressions[0], "'TemplateLiteral' with expression");
        for (let t of a.quasis)
          le(t);
        return;
      case "NullLiteral":
      case "BooleanLiteral":
      case "NumericLiteral":
      case "StringLiteral":
      case "TemplateElement":
        return;
      default:
        throw H(a, `'${a.type}'`);
    }
  }
  var Ws = Xs(), ua = { json: oe({ parse: Ws, hasPragma() {
    return true;
  } }), json5: oe(Ws), "json-stringify": oe({ parse: Xs({ allowComments: false }), astFormat: "estree-json" }) }, Gs = ua;
  var da = { ...Hs, ...Gs };
  var Kn = Ft;
  const plugins = [Kn];
  const lang2parser = {
    js: "babel",
    jsx: "babel",
    ts: "babel-ts",
    tsx: "babel-ts",
    json: "json",
    json5: "json5"
  };
  Object.assign(lang2parser, {
    java: "java"
  });
  const formatCode = async (code, lang) => {
    if (lang2parser[lang]) {
      try {
        return prettier.format(code, {
          parser: lang2parser[lang],
          plugins
        });
      } catch {
      }
    }
    return code;
  };
  console.log(`md5('114514')=${md5("114514")}`);
  console.log("document.readyState", document.readyState);
  console.log(_monkeyWindow);
  _GM_addElement && _GM_addElement("div", { innerHTML: "hello" });
  if (_unsafeWindow == window) {
    console.log("scope->host");
  } else {
    console.log("scope->monkey");
  }
  _GM_cookie == null ? void 0 : _GM_cookie.list({}, (cookies, error) => {
    if (error) {
      console.log(error);
    } else {
      const [cookie] = cookies;
      if (cookie) {
        console.log(cookie);
      }
    }
  });
  console.log("format tsx code");
  const tsxCode = `const App=()=>{return(<div class={styles.App}>
<header class={styles.header}>
<img src={logo} class={styles.logo} alt="logo" />
<p>
Edit <code>src/App.tsx</code> and save to reload.
</p>
<a
class={styles.link}
href="https://github.com/solidjs/solid"
target="_blank"
rel="noopener noreferrer"
>
Learn Solid
</a>
</header>
</div>
);
};`;
  console.log(await( formatCode(tsxCode, "tsx")));

})(md5, prettier);
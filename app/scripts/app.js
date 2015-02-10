//GUI Elements
var app;
var grammarMirror;
var codeGeneratorMirror;
var abstractSyntaxTreeMirror;
var testCodeMirror;
var outputMirror;
var fab;

var parse = function(grammar, text){
  var parser = PEG.buildParser(grammar);

  abstractSyntaxTree = parser.parse(text);
};

var generateCode = function(code){
  eval(to5.transform(code).code);
};

var compile = function(grammar, code, text){
  parse(grammar, text);
  generateCode(code);
};




var run = function(){
  console.log("I GOT CALLED!");

  // Get the grammar
  var grammar = grammarMirror.value;

  // Get the code for codegen
  var code = codeGeneratorMirror.value;

  // Get the test code
  var testCode = testCodeMirror.value;

  // Compile the code and the grammar
  compile(grammar, code, testCode);

  // Output the AST
  abstractSyntaxTreeMirror.value = abstractSyntaxTree;

  // Output the compiler output
  outputMirror.value = generatedOutput;
};

window.addEventListener('polymer-ready', function() {
  
});

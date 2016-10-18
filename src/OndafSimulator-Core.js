define("amber-ondafsimulator/OndafSimulator-Core", ["amber/boot", "amber_core/Kernel-Objects", "amber_core/SUnit"], function($boot){"use strict";
var $core=$boot.api,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;
$core.addPackage('OndafSimulator-Core');
$core.packages["OndafSimulator-Core"].innerEval = function (expr) { return eval(expr); };
$core.packages["OndafSimulator-Core"].transport = {"type":"amd","amdNamespace":"amber-ondafsimulator"};

$core.addClass('CTestInterpreter', $globals.Object, [], 'OndafSimulator-Core');
$core.addMethod(
$core.method({
selector: "interpretText:",
protocol: 'operations',
fn: function (aString){
var self=this;
var theTitle,titleParser,textStream,contentParser,theContent;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3,$4;
textStream=$recv($recv(aString)._trimBoth())._readStream();
$1=$recv(textStream)._isEmpty();
if($core.assert($1)){
return $recv($globals.CTestText)._empty();
};
titleParser=$recv($globals.CTestParser)._forTitle();
$2=titleParser;
$recv($2)._consumeAllIn_(textStream);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["consumeAllIn:"]=1;
//>>excludeEnd("ctx");
$3=$recv($2)._contents();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["contents"]=1;
//>>excludeEnd("ctx");
theTitle=$3;
contentParser=$recv($globals.CTestParser)._forContent();
$4=contentParser;
$recv($4)._consumeAllIn_(textStream);
theContent=$recv($4)._contents();
return $recv($globals.CTestText)._withTitle_content_(theTitle,theContent);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"interpretText:",{aString:aString,theTitle:theTitle,titleParser:titleParser,textStream:textStream,contentParser:contentParser,theContent:theContent},$globals.CTestInterpreter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "interpretText: aString\x0a\x09| theTitle titleParser textStream contentParser theContent |\x0a\x09textStream := aString trimBoth readStream.\x0a\x09textStream isEmpty\x0a\x09\x09ifTrue: [ ^ CTestText empty ].\x0a\x09\x0a\x09titleParser := CTestParser forTitle.\x0a\x09theTitle := titleParser consumeAllIn: textStream; contents.\x0a\x09\x0a\x09contentParser := CTestParser forContent.\x0a\x09theContent := contentParser consumeAllIn: textStream; contents.\x0a\x09\x0a\x09^ CTestText withTitle: theTitle content: theContent",
referencedClasses: ["CTestText", "CTestParser"],
//>>excludeEnd("ide");
messageSends: ["readStream", "trimBoth", "ifTrue:", "isEmpty", "empty", "forTitle", "consumeAllIn:", "contents", "forContent", "withTitle:content:"]
}),
$globals.CTestInterpreter);



$core.addClass('CTestParser', $globals.Object, ['state', 'content', 'endState'], 'OndafSimulator-Core');
$core.addMethod(
$core.method({
selector: "addToContents:",
protocol: 'operations',
fn: function (anObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"addToContents:",{anObject:anObject},$globals.CTestParser)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "addToContents: anObject\x0a\x09self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.CTestParser);

$core.addMethod(
$core.method({
selector: "consume:",
protocol: 'operations',
fn: function (aCharacter){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self["@state"])._consume_(aCharacter);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"consume:",{aCharacter:aCharacter},$globals.CTestParser)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCharacter"],
source: "consume: aCharacter\x0a\x09\x22self halt: 'consuming ', aCharacter.\x22\x0a\x09state consume: aCharacter",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["consume:"]
}),
$globals.CTestParser);

$core.addMethod(
$core.method({
selector: "consumeAllIn:",
protocol: 'operations',
fn: function (aReadStream){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv(self["@state"]).__eq(self._endState()))._or_($recv(aReadStream)._atEnd());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}))._whileFalse_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._consume_($recv($recv(aReadStream)._next())._asString());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
$recv(self["@state"])._finish();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"consumeAllIn:",{aReadStream:aReadStream},$globals.CTestParser)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aReadStream"],
source: "consumeAllIn: aReadStream \x0a\x09[state = self endState or: aReadStream atEnd] whileFalse: [ self consume: aReadStream next asString ].\x0a\x09state finish",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["whileFalse:", "or:", "=", "endState", "atEnd", "consume:", "asString", "next", "finish"]
}),
$globals.CTestParser);

$core.addMethod(
$core.method({
selector: "contents",
protocol: 'accessing',
fn: function (){
var self=this;
return self["@content"];

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "contents\x0a\x09^ content",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CTestParser);

$core.addMethod(
$core.method({
selector: "endState",
protocol: 'accessing',
fn: function (){
var self=this;
return self["@endState"];

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "endState\x0a\x09^ endState",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CTestParser);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true,
//>>excludeEnd("ctx");
($globals.CTestParser.superclass||$boot.nilAsClass).fn.prototype._initialize.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
self["@endState"]=$recv($globals.CTestParserState)._newFor_named_(self,"End");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.CTestParser)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09endState := CTestParserState newFor: self named: 'End'.",
referencedClasses: ["CTestParserState"],
//>>excludeEnd("ide");
messageSends: ["initialize", "newFor:named:"]
}),
$globals.CTestParser);

$core.addMethod(
$core.method({
selector: "state",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv(self["@state"])._name();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"state",{},$globals.CTestParser)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "state\x0a\x09^ state name",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["name"]
}),
$globals.CTestParser);

$core.addMethod(
$core.method({
selector: "state:",
protocol: 'accessing',
fn: function (aState){
var self=this;
self["@state"]=aState;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aState"],
source: "state: aState\x0a\x09state := aState",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CTestParser);


$core.addMethod(
$core.method({
selector: "forContent",
protocol: 'instance creation',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($globals.CTestContentParser)._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"forContent",{},$globals.CTestParser.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "forContent\x0a\x09^ CTestContentParser new",
referencedClasses: ["CTestContentParser"],
//>>excludeEnd("ide");
messageSends: ["new"]
}),
$globals.CTestParser.klass);

$core.addMethod(
$core.method({
selector: "forTitle",
protocol: 'instance creation',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($globals.CTestTitleParser)._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"forTitle",{},$globals.CTestParser.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "forTitle\x0a\x09^ CTestTitleParser new.",
referencedClasses: ["CTestTitleParser"],
//>>excludeEnd("ide");
messageSends: ["new"]
}),
$globals.CTestParser.klass);


$core.addClass('CTestContentParser', $globals.CTestParser, ['currentWord', 'currentSuffix', 'waiting', 'readingWord', 'waitingForWord', 'readingSuffixes', 'words', 'suffixes'], 'OndafSimulator-Core');
$core.addMethod(
$core.method({
selector: "addRemainingWords",
protocol: 'private-actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return (function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv(self._addWord())._value();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["value"]=1;
//>>excludeEnd("ctx");
return $recv(self._addWordsToContent())._value();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
});
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"addRemainingWords",{},$globals.CTestContentParser)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "addRemainingWords\x0a\x09^ [\x0a\x09\x09self addWord value.\x0a\x09\x09self addWordsToContent value.\x0a\x09]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["value", "addWord", "addWordsToContent"]
}),
$globals.CTestContentParser);

$core.addMethod(
$core.method({
selector: "addSuffix",
protocol: 'private-popping',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return (function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(self["@suffixes"])._add_(self._popCurrentSuffix());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
});
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"addSuffix",{},$globals.CTestContentParser)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "addSuffix\x0a\x09^ [ suffixes add: self popCurrentSuffix ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["add:", "popCurrentSuffix"]
}),
$globals.CTestContentParser);

$core.addMethod(
$core.method({
selector: "addToContents:",
protocol: 'operations',
fn: function (anObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self["@content"])._add_(anObject);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"addToContents:",{anObject:anObject},$globals.CTestContentParser)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "addToContents: anObject\x0a\x09content add: anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["add:"]
}),
$globals.CTestContentParser);

$core.addMethod(
$core.method({
selector: "addWord",
protocol: 'private-actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
return (function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=$recv(self["@currentWord"])._isEmpty();
if(!$core.assert($1)){
return $recv(self["@words"])._add_(self._popCurrentWord());
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
});
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"addWord",{},$globals.CTestContentParser)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "addWord\x0a\x09^ [ currentWord isEmpty ifFalse: [\x0a\x09\x09\x09words add: self popCurrentWord\x0a\x09\x09]\x0a\x09]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifFalse:", "isEmpty", "add:", "popCurrentWord"]
}),
$globals.CTestContentParser);

$core.addMethod(
$core.method({
selector: "addWordToComplete",
protocol: 'private-actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return (function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._addToContents_(self._popWordToComplete());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
});
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"addWordToComplete",{},$globals.CTestContentParser)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "addWordToComplete\x0a\x09^ [ self addToContents: self popWordToComplete ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["addToContents:", "popWordToComplete"]
}),
$globals.CTestContentParser);

$core.addMethod(
$core.method({
selector: "addWordsToContent",
protocol: 'private-actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return (function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv(self["@words"])._ifNotEmpty_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return self._addToContents_($recv($globals.CompletedText)._with_(" "._join_(self["@words"])));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}));
self["@words"]=$recv($globals.OrderedCollection)._new();
return self["@words"];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
});
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"addWordsToContent",{},$globals.CTestContentParser)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "addWordsToContent\x0a\x09^ [\x0a\x09\x09words ifNotEmpty: [ self addToContents: (CompletedText with: (' ' join: words)) ].\x0a\x09\x09words := OrderedCollection new\x0a\x09]",
referencedClasses: ["CompletedText", "OrderedCollection"],
//>>excludeEnd("ide");
messageSends: ["ifNotEmpty:", "addToContents:", "with:", "join:", "new"]
}),
$globals.CTestContentParser);

$core.addMethod(
$core.method({
selector: "appendToCurrentSuffix",
protocol: 'private-actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return (function(aCharacter){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
self["@currentSuffix"]=$recv(self["@currentSuffix"]).__comma(aCharacter);
return self["@currentSuffix"];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({aCharacter:aCharacter},$ctx1,1)});
//>>excludeEnd("ctx");
});
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"appendToCurrentSuffix",{},$globals.CTestContentParser)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "appendToCurrentSuffix\x0a\x09^ [ :aCharacter | currentSuffix := currentSuffix , aCharacter ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: [","]
}),
$globals.CTestContentParser);

$core.addMethod(
$core.method({
selector: "appendToCurrentWord",
protocol: 'private-actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return (function(aCharacter){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
self["@currentWord"]=$recv(self["@currentWord"]).__comma(aCharacter);
return self["@currentWord"];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({aCharacter:aCharacter},$ctx1,1)});
//>>excludeEnd("ctx");
});
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"appendToCurrentWord",{},$globals.CTestContentParser)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "appendToCurrentWord\x0a\x09^ [ :aCharacter | currentWord := currentWord , aCharacter ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: [","]
}),
$globals.CTestContentParser);

$core.addMethod(
$core.method({
selector: "bindStates",
protocol: 'private-initialization',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3,$4,$5,$6;
$recv(self["@waiting"])._whenLetterState_(self["@readingWord"]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["whenLetterState:"]=1;
//>>excludeEnd("ctx");
$1=self["@waiting"];
$2=self._appendToCurrentWord();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["appendToCurrentWord"]=1;
//>>excludeEnd("ctx");
$recv($1)._whenLetterAction_($2);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["whenLetterAction:"]=1;
//>>excludeEnd("ctx");
$recv(self["@readingWord"])._whenSpaceState_(self["@waitingForWord"]);
$recv(self["@readingWord"])._whenSpaceAction_(self._addWord());
$3=self["@readingWord"];
$4=self._appendToCurrentWord();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["appendToCurrentWord"]=2;
//>>excludeEnd("ctx");
$recv($3)._whenLetterAction_($4);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["whenLetterAction:"]=2;
//>>excludeEnd("ctx");
$5=self["@readingWord"];
$6=self._addRemainingWords();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["addRemainingWords"]=1;
//>>excludeEnd("ctx");
$recv($5)._whenFinishAction_($6);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["whenFinishAction:"]=1;
//>>excludeEnd("ctx");
$recv(self["@readingWord"])._when_thenState_action_("{",self["@readingSuffixes"],self._addWordsToContent());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["when:thenState:action:"]=1;
//>>excludeEnd("ctx");
$recv(self["@waitingForWord"])._whenLetterState_(self["@readingWord"]);
$recv(self["@waitingForWord"])._whenLetterAction_(self._appendToCurrentWord());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["whenLetterAction:"]=3;
//>>excludeEnd("ctx");
$recv(self["@waitingForWord"])._whenFinishAction_(self._addRemainingWords());
$recv(self["@readingSuffixes"])._whenLetterAction_(self._appendToCurrentSuffix());
$recv(self["@readingSuffixes"])._when_thenState_action_("}",self["@readingWord"],self._addWordToComplete());
$recv(self["@readingSuffixes"])._when_thenAction_(",",self._addSuffix());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"bindStates",{},$globals.CTestContentParser)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "bindStates\x0a\x09waiting whenLetterState: readingWord.\x0a\x09waiting whenLetterAction: self appendToCurrentWord.\x0a\x09\x0a\x09readingWord whenSpaceState: waitingForWord.\x0a\x09readingWord whenSpaceAction: self addWord.\x0a\x09readingWord whenLetterAction: self appendToCurrentWord.\x0a\x09readingWord whenFinishAction: self addRemainingWords.\x0a\x09readingWord when: '{' thenState: readingSuffixes action: self addWordsToContent.\x0a\x09\x0a\x09waitingForWord whenLetterState: readingWord.\x0a\x09waitingForWord whenLetterAction: self appendToCurrentWord.\x0a\x09waitingForWord whenFinishAction: self addRemainingWords.\x0a\x09\x0a\x09readingSuffixes whenLetterAction: self appendToCurrentSuffix.\x0a\x09readingSuffixes when: '}' thenState: readingWord action: self addWordToComplete.\x0a\x09readingSuffixes when: ',' thenAction: self addSuffix.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["whenLetterState:", "whenLetterAction:", "appendToCurrentWord", "whenSpaceState:", "whenSpaceAction:", "addWord", "whenFinishAction:", "addRemainingWords", "when:thenState:action:", "addWordsToContent", "appendToCurrentSuffix", "addWordToComplete", "when:thenAction:", "addSuffix"]
}),
$globals.CTestContentParser);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true,
//>>excludeEnd("ctx");
($globals.CTestContentParser.superclass||$boot.nilAsClass).fn.prototype._initialize.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
self["@currentWord"]="";
self["@currentSuffix"]="";
self["@words"]=$recv($globals.OrderedCollection)._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=1;
//>>excludeEnd("ctx");
self["@suffixes"]=$recv($globals.OrderedCollection)._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=2;
//>>excludeEnd("ctx");
self["@content"]=$recv($globals.OrderedCollection)._new();
self._initializeStates();
self._bindStates();
self["@state"]=self["@waiting"];
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.CTestContentParser)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09\x0a\x09currentWord := ''.\x0a\x09currentSuffix := ''.\x0a\x09words := OrderedCollection new.\x0a\x09suffixes := OrderedCollection new.\x0a\x09content := OrderedCollection new.\x0a\x09\x0a\x09self initializeStates.\x0a\x09self bindStates.\x0a\x09\x0a\x09state := waiting",
referencedClasses: ["OrderedCollection"],
//>>excludeEnd("ide");
messageSends: ["initialize", "new", "initializeStates", "bindStates"]
}),
$globals.CTestContentParser);

$core.addMethod(
$core.method({
selector: "initializeStates",
protocol: 'private-initialization',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self["@waiting"]=$recv($globals.CTestParserState)._newFor_named_(self,"Waiting");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["newFor:named:"]=1;
//>>excludeEnd("ctx");
self["@readingWord"]=$recv($globals.CTestParserState)._newFor_named_(self,"ReadingWord");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["newFor:named:"]=2;
//>>excludeEnd("ctx");
self["@waitingForWord"]=$recv($globals.CTestParserState)._newFor_named_(self,"WaitingForWord");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["newFor:named:"]=3;
//>>excludeEnd("ctx");
self["@readingSuffixes"]=$recv($globals.CTestParserState)._newFor_named_(self,"ReadingSuffixes");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initializeStates",{},$globals.CTestContentParser)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initializeStates\x0a\x09waiting := CTestParserState newFor: self named: 'Waiting'.\x0a\x09readingWord := CTestParserState newFor: self named: 'ReadingWord'.\x0a\x09waitingForWord := CTestParserState\x0a\x09\x09newFor: self\x0a\x09\x09named: 'WaitingForWord'.\x0a\x09readingSuffixes := CTestParserState\x0a\x09\x09newFor: self\x0a\x09\x09named: 'ReadingSuffixes'",
referencedClasses: ["CTestParserState"],
//>>excludeEnd("ide");
messageSends: ["newFor:named:"]
}),
$globals.CTestContentParser);

$core.addMethod(
$core.method({
selector: "popCurrentSuffix",
protocol: 'private-popping',
fn: function (){
var self=this;
var suffix;
suffix=self["@currentSuffix"];
self["@currentSuffix"]="";
return suffix;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "popCurrentSuffix\x0a\x09| suffix |\x0a\x09suffix := currentSuffix.\x0a\x09currentSuffix := ''.\x0a\x09^ suffix",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CTestContentParser);

$core.addMethod(
$core.method({
selector: "popCurrentWord",
protocol: 'private-popping',
fn: function (){
var self=this;
var word;
word=self["@currentWord"];
self["@currentWord"]="";
return word;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "popCurrentWord\x0a\x09| word |\x0a\x09word := currentWord.\x0a\x09currentWord := ''.\x0a\x09^ word",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CTestContentParser);

$core.addMethod(
$core.method({
selector: "popWordToComplete",
protocol: 'private-popping',
fn: function (){
var self=this;
var wordToComplete;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._addSuffix())._value();
wordToComplete=$recv($globals.WordToComplete)._withPrefix_options_(self._popCurrentWord(),$recv($globals.Array)._newFrom_(self["@suffixes"]));
self["@suffixes"]=$recv($globals.OrderedCollection)._new();
return wordToComplete;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"popWordToComplete",{wordToComplete:wordToComplete},$globals.CTestContentParser)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "popWordToComplete\x0a\x09| wordToComplete |\x0a\x09self addSuffix value.\x0a\x09wordToComplete := WordToComplete\x0a\x09\x09withPrefix: self popCurrentWord\x0a\x09\x09options: (Array newFrom: suffixes).\x0a\x09suffixes := OrderedCollection new.\x0a\x09^ wordToComplete",
referencedClasses: ["WordToComplete", "Array", "OrderedCollection"],
//>>excludeEnd("ide");
messageSends: ["value", "addSuffix", "withPrefix:options:", "popCurrentWord", "newFrom:", "new"]
}),
$globals.CTestContentParser);



$core.addClass('CTestTitleParser', $globals.CTestParser, [], 'OndafSimulator-Core');
$core.addMethod(
$core.method({
selector: "addToContents:",
protocol: 'operations',
fn: function (aCharacter){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self["@content"]=$recv(self["@content"]).__comma(aCharacter);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"addToContents:",{aCharacter:aCharacter},$globals.CTestTitleParser)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCharacter"],
source: "addToContents: aCharacter\x0a\x09content := content, aCharacter",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: [","]
}),
$globals.CTestTitleParser);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
var waiting,readingWord,waitingForWord;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true,
//>>excludeEnd("ctx");
($globals.CTestTitleParser.superclass||$boot.nilAsClass).fn.prototype._initialize.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
self["@content"]="";
waiting=$recv($globals.CTestParserState)._newFor_named_(self,"Waiting");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["newFor:named:"]=1;
//>>excludeEnd("ctx");
readingWord=$recv($globals.CTestParserState)._newFor_named_(self,"ReadingWord");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["newFor:named:"]=2;
//>>excludeEnd("ctx");
waitingForWord=$recv($globals.CTestParserState)._newFor_named_(self,"WaitingForWord");
$recv(waiting)._whenLetterState_(readingWord);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["whenLetterState:"]=1;
//>>excludeEnd("ctx");
$recv(waiting)._whenLetterAction_((function(aCharacter){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._addToContents_(aCharacter);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["addToContents:"]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({aCharacter:aCharacter},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["whenLetterAction:"]=1;
//>>excludeEnd("ctx");
$recv(readingWord)._whenSpaceState_(waitingForWord);
$recv(readingWord)._whenEnterState_(self["@endState"]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["whenEnterState:"]=1;
//>>excludeEnd("ctx");
$recv(readingWord)._whenLetterAction_((function(aCharacter){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._addToContents_(aCharacter);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["addToContents:"]=2;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({aCharacter:aCharacter},$ctx1,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["whenLetterAction:"]=2;
//>>excludeEnd("ctx");
$recv(waitingForWord)._whenEnterState_(self["@endState"]);
$recv(waitingForWord)._whenLetterState_(readingWord);
$recv(waitingForWord)._whenLetterAction_((function(aCharacter){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._addToContents_(" ".__comma(aCharacter));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({aCharacter:aCharacter},$ctx1,3)});
//>>excludeEnd("ctx");
}));
self["@state"]=waiting;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{waiting:waiting,readingWord:readingWord,waitingForWord:waitingForWord},$globals.CTestTitleParser)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09| waiting readingWord waitingForWord |\x0a\x09super initialize.\x0a\x09content := ''.\x0a\x09\x0a\x09waiting := CTestParserState newFor: self named: 'Waiting'.\x0a\x09readingWord := CTestParserState newFor: self named: 'ReadingWord'.\x0a\x09waitingForWord := CTestParserState newFor: self named: 'WaitingForWord'.\x0a\x09\x0a\x09waiting whenLetterState: readingWord.\x0a\x09waiting whenLetterAction: [ :aCharacter | self addToContents: aCharacter ].\x0a\x09\x0a\x09readingWord whenSpaceState: waitingForWord.\x0a\x09readingWord whenEnterState: endState.\x0a\x09readingWord whenLetterAction: [ :aCharacter | self addToContents: aCharacter ].\x0a\x0a\x09waitingForWord whenEnterState: endState.\x0a\x09waitingForWord whenLetterState: readingWord.\x0a\x09waitingForWord whenLetterAction: [ :aCharacter | self addToContents: ' ' , aCharacter ].\x0a\x09\x0a\x09state := waiting",
referencedClasses: ["CTestParserState"],
//>>excludeEnd("ide");
messageSends: ["initialize", "newFor:named:", "whenLetterState:", "whenLetterAction:", "addToContents:", "whenSpaceState:", "whenEnterState:", ","]
}),
$globals.CTestTitleParser);



$core.addClass('CTestParserState', $globals.Object, ['parser', 'whenSpaceState', 'whenEnterState', 'whenLetterState', 'letterBlock', 'spaceBlock', 'name', 'finishBlock', 'specialChars'], 'OndafSimulator-Core');
$core.addMethod(
$core.method({
selector: "consume:",
protocol: 'operations',
fn: function (aCharacter){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
var $early={};
try {
$recv(self["@specialChars"])._at_ifPresent_(aCharacter,(function(p){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv($recv(p)._second())._value();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["value"]=1;
//>>excludeEnd("ctx");
$recv(self["@parser"])._state_($recv(p)._first());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["state:"]=1;
//>>excludeEnd("ctx");
throw $early=[nil];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({p:p},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$1=self._isWhiteSpace_(aCharacter);
if(!$core.assert($1)){
$recv(self["@letterBlock"])._value_(aCharacter);
$recv(self["@parser"])._state_(self["@whenLetterState"]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["state:"]=2;
//>>excludeEnd("ctx");
return nil;
};
$recv(self["@spaceBlock"])._value();
$recv(self["@parser"])._state_(self["@whenSpaceState"]);
return nil;
}
catch(e) {if(e===$early)return e[0]; throw e}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"consume:",{aCharacter:aCharacter},$globals.CTestParserState)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCharacter"],
source: "consume: aCharacter\x0a\x09specialChars at: aCharacter ifPresent: [ :p |\x0a\x09\x09p second value.\x0a\x09\x09parser state: p first.\x0a\x09\x09^ nil ].\x0a\x09(self isWhiteSpace: aCharacter)\x0a\x09\x09ifFalse: [ letterBlock value: aCharacter.\x0a\x09\x09\x09parser state: whenLetterState.\x0a\x09\x09\x09^ nil ].\x0a\x09spaceBlock value.\x0a\x09parser state: whenSpaceState.\x0a\x09^ nil",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:ifPresent:", "value", "second", "state:", "first", "ifFalse:", "isWhiteSpace:", "value:"]
}),
$globals.CTestParserState);

$core.addMethod(
$core.method({
selector: "finish",
protocol: 'operations',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv(self["@finishBlock"])._value();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"finish",{},$globals.CTestParserState)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "finish\x0a\x09^ finishBlock value",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["value"]
}),
$globals.CTestParserState);

$core.addMethod(
$core.method({
selector: "initializeWith:name:",
protocol: 'initialization',
fn: function (aParser,aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self["@parser"]=aParser;
self["@name"]=aString;
self["@specialChars"]=$recv($globals.Dictionary)._new();
self["@letterBlock"]=(function(aCharacter){

});
self["@spaceBlock"]=(function(){

});
self["@whenLetterState"]=self;
self["@whenEnterState"]=self;
self["@whenSpaceState"]=self;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initializeWith:name:",{aParser:aParser,aString:aString},$globals.CTestParserState)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aParser", "aString"],
source: "initializeWith: aParser name: aString \x0a\x09parser := aParser.\x0a\x09name := aString.\x0a\x09specialChars := Dictionary new.\x0a\x09\x0a\x09letterBlock := [ :aCharacter | ].\x0a\x09spaceBlock := [ ].\x0a\x09\x0a\x09whenLetterState := self.\x0a\x09whenEnterState := self.\x0a\x09whenSpaceState := self.",
referencedClasses: ["Dictionary"],
//>>excludeEnd("ide");
messageSends: ["new"]
}),
$globals.CTestParserState);

$core.addMethod(
$core.method({
selector: "isEnter:",
protocol: 'private-testing',
fn: function (aCharacter){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv(aCharacter).__eq($recv($globals.String)._cr());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isEnter:",{aCharacter:aCharacter},$globals.CTestParserState)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCharacter"],
source: "isEnter: aCharacter\x0a\x09^ aCharacter = String cr",
referencedClasses: ["String"],
//>>excludeEnd("ide");
messageSends: ["=", "cr"]
}),
$globals.CTestParserState);

$core.addMethod(
$core.method({
selector: "isWhiteSpace:",
protocol: 'private-testing',
fn: function (aCharacter){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($recv($globals.Array)._with_with_with_($recv($globals.String)._cr(),$recv($globals.String)._tab(),$recv($globals.String)._space()))._includes_(aCharacter);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isWhiteSpace:",{aCharacter:aCharacter},$globals.CTestParserState)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCharacter"],
source: "isWhiteSpace: aCharacter\x0a\x09^ (Array with: String cr with: String tab with: String space) includes: aCharacter",
referencedClasses: ["Array", "String"],
//>>excludeEnd("ide");
messageSends: ["includes:", "with:with:with:", "cr", "tab", "space"]
}),
$globals.CTestParserState);

$core.addMethod(
$core.method({
selector: "name",
protocol: 'accessing',
fn: function (){
var self=this;
return self["@name"];

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "name\x0a\x09^ name",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CTestParserState);

$core.addMethod(
$core.method({
selector: "printOn:",
protocol: 'printing',
fn: function (aStream){
var self=this;
var title;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1;
title=$recv(self._name()).__comma(" State");
$2=$recv($recv(title)._first())._isVowel();
if($core.assert($2)){
$1="an ";
} else {
$1="a ";
};
$recv(aStream)._nextPutAll_($1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=1;
//>>excludeEnd("ctx");
$recv(aStream)._nextPutAll_(title);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"printOn:",{aStream:aStream,title:title},$globals.CTestParserState)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aStream"],
source: "printOn: aStream\x0a\x09| title |\x0a\x09title := self name, ' State'.\x0a\x09aStream\x0a\x09\x09nextPutAll: (title first isVowel ifTrue: ['an '] ifFalse: ['a ']);\x0a\x09\x09nextPutAll: title",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: [",", "name", "nextPutAll:", "ifTrue:ifFalse:", "isVowel", "first"]
}),
$globals.CTestParserState);

$core.addMethod(
$core.method({
selector: "when:thenAction:",
protocol: 'as yet unclassified',
fn: function (aCharacter,aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return self._when_thenState_action_(aCharacter,self,aBlock);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"when:thenAction:",{aCharacter:aCharacter,aBlock:aBlock},$globals.CTestParserState)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCharacter", "aBlock"],
source: "when: aCharacter thenAction: aBlock\x0a\x09^ self when: aCharacter thenState: self action: aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["when:thenState:action:"]
}),
$globals.CTestParserState);

$core.addMethod(
$core.method({
selector: "when:thenState:",
protocol: 'configuration',
fn: function (aCharacter,aState){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self["@specialChars"])._add_($recv(aCharacter).__minus_gt($recv($globals.Array)._with_with_(aState,(function(){

}))));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"when:thenState:",{aCharacter:aCharacter,aState:aState},$globals.CTestParserState)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCharacter", "aState"],
source: "when: aCharacter thenState: aState\x0a\x09specialChars add: aCharacter -> (Array with: aState with: [  ])",
referencedClasses: ["Array"],
//>>excludeEnd("ide");
messageSends: ["add:", "->", "with:with:"]
}),
$globals.CTestParserState);

$core.addMethod(
$core.method({
selector: "when:thenState:action:",
protocol: 'configuration',
fn: function (aCharacter,aState,aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self["@specialChars"])._add_($recv(aCharacter).__minus_gt($recv($globals.Array)._with_with_(aState,aBlock)));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"when:thenState:action:",{aCharacter:aCharacter,aState:aState,aBlock:aBlock},$globals.CTestParserState)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCharacter", "aState", "aBlock"],
source: "when: aCharacter thenState: aState action: aBlock\x0a\x09specialChars add: aCharacter -> (Array with: aState with: aBlock)",
referencedClasses: ["Array"],
//>>excludeEnd("ide");
messageSends: ["add:", "->", "with:with:"]
}),
$globals.CTestParserState);

$core.addMethod(
$core.method({
selector: "whenEnterState:",
protocol: 'configuration',
fn: function (aState){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._when_thenState_($recv($globals.String)._cr(),aState);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"whenEnterState:",{aState:aState},$globals.CTestParserState)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aState"],
source: "whenEnterState: aState \x0a\x09self when: String cr thenState: aState.",
referencedClasses: ["String"],
//>>excludeEnd("ide");
messageSends: ["when:thenState:", "cr"]
}),
$globals.CTestParserState);

$core.addMethod(
$core.method({
selector: "whenFinishAction:",
protocol: 'configuration',
fn: function (aBlock){
var self=this;
self["@finishBlock"]=aBlock;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "whenFinishAction: aBlock\x0a\x09finishBlock := aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CTestParserState);

$core.addMethod(
$core.method({
selector: "whenLetterAction:",
protocol: 'configuration',
fn: function (aBlock){
var self=this;
self["@letterBlock"]=aBlock;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "whenLetterAction: aBlock\x0a\x09letterBlock := aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CTestParserState);

$core.addMethod(
$core.method({
selector: "whenLetterState:",
protocol: 'configuration',
fn: function (aState){
var self=this;
self["@whenLetterState"]=aState;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aState"],
source: "whenLetterState: aState \x0a\x09whenLetterState := aState",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CTestParserState);

$core.addMethod(
$core.method({
selector: "whenSpaceAction:",
protocol: 'configuration',
fn: function (aBlock){
var self=this;
self["@spaceBlock"]=aBlock;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "whenSpaceAction: aBlock\x0a\x09spaceBlock := aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CTestParserState);

$core.addMethod(
$core.method({
selector: "whenSpaceState:",
protocol: 'configuration',
fn: function (aState){
var self=this;
self["@whenSpaceState"]=aState;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aState"],
source: "whenSpaceState: aState \x0a\x09whenSpaceState := aState",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CTestParserState);


$core.addMethod(
$core.method({
selector: "newFor:named:",
protocol: 'instance creation',
fn: function (aParser,aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._new();
$recv($1)._initializeWith_name_(aParser,aString);
return $recv($1)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"newFor:named:",{aParser:aParser,aString:aString},$globals.CTestParserState.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aParser", "aString"],
source: "newFor: aParser named: aString\x0a\x09^ self new\x0a\x09\x09initializeWith: aParser name: aString;\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["initializeWith:name:", "new", "yourself"]
}),
$globals.CTestParserState.klass);


$core.addClass('CTestText', $globals.Object, ['title', 'content'], 'OndafSimulator-Core');
$core.addMethod(
$core.method({
selector: "contentAsString",
protocol: 'conversion',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return ""._join_($recv(self["@content"])._collect_((function(c){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(c)._asString();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({c:c},$ctx1,1)});
//>>excludeEnd("ctx");
})));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"contentAsString",{},$globals.CTestText)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "contentAsString\x0a\x09^ '' join: (content collect: [ :c |\x0a\x09\x09c asString\x0a\x09])",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["join:", "collect:", "asString"]
}),
$globals.CTestText);

$core.addMethod(
$core.method({
selector: "initializeTitle:content:",
protocol: 'initialization',
fn: function (aTitle,anObject){
var self=this;
self["@title"]=aTitle;
self["@content"]=anObject;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aTitle", "anObject"],
source: "initializeTitle: aTitle content: anObject\x0a\x09title := aTitle.\x0a\x09content := anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CTestText);

$core.addMethod(
$core.method({
selector: "title",
protocol: 'accessing',
fn: function (){
var self=this;
return self["@title"];

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "title\x0a\x09^ title",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CTestText);


$core.addMethod(
$core.method({
selector: "empty",
protocol: 'instance creation',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return self._withTitle_content_("",nil);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"empty",{},$globals.CTestText.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "empty\x0a\x09^ self withTitle: '' content: nil",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["withTitle:content:"]
}),
$globals.CTestText.klass);

$core.addMethod(
$core.method({
selector: "withTitle:content:",
protocol: 'instance creation',
fn: function (aString,theContent){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._new();
$recv($1)._initializeTitle_content_(aString,theContent);
return $recv($1)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"withTitle:content:",{aString:aString,theContent:theContent},$globals.CTestText.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "theContent"],
source: "withTitle: aString content: theContent\x0a\x09^ self new\x0a\x09\x09initializeTitle: aString content: theContent;\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["initializeTitle:content:", "new", "yourself"]
}),
$globals.CTestText.klass);


$core.addClass('CompletedText', $globals.Object, ['text'], 'OndafSimulator-Core');
$core.addMethod(
$core.method({
selector: "=",
protocol: 'as yet unclassified',
fn: function (anotherObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($recv(anotherObject)._text()).__eq(self["@text"]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"=",{anotherObject:anotherObject},$globals.CompletedText)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anotherObject"],
source: "= anotherObject\x0a\x09^ anotherObject text = text.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["=", "text"]
}),
$globals.CompletedText);

$core.addMethod(
$core.method({
selector: "asString",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return self._text();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asString",{},$globals.CompletedText)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asString\x0a\x09^ self text",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["text"]
}),
$globals.CompletedText);

$core.addMethod(
$core.method({
selector: "initializeWithText:",
protocol: 'initialization',
fn: function (aString){
var self=this;
self["@text"]=aString;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "initializeWithText: aString\x0a\x09text := aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CompletedText);

$core.addMethod(
$core.method({
selector: "printOn:",
protocol: 'printing',
fn: function (aStream){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true,
//>>excludeEnd("ctx");
($globals.CompletedText.superclass||$boot.nilAsClass).fn.prototype._printOn_.apply($recv(self), [aStream]));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$1=$recv("(".__comma(self["@text"])).__comma(")");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
$recv(aStream)._nextPutAll_($1);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"printOn:",{aStream:aStream},$globals.CompletedText)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aStream"],
source: "printOn: aStream\x0a\x09super printOn: aStream.\x0a\x09aStream nextPutAll: '(', text, ')'.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["printOn:", "nextPutAll:", ","]
}),
$globals.CompletedText);

$core.addMethod(
$core.method({
selector: "text",
protocol: 'accessing',
fn: function (){
var self=this;
return self["@text"];

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "text\x0a\x09^ text",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CompletedText);


$core.addMethod(
$core.method({
selector: "with:",
protocol: 'as yet unclassified',
fn: function (aText){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv(self._new())._initializeWithText_(aText);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"with:",{aText:aText},$globals.CompletedText.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aText"],
source: "with: aText\x0a\x09^ self new initializeWithText: aText",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["initializeWithText:", "new"]
}),
$globals.CompletedText.klass);


$core.addClass('TestInterpreter', $globals.TestCase, [], 'OndafSimulator-Core');
$core.addMethod(
$core.method({
selector: "test1",
protocol: 'tests',
fn: function (){
var self=this;
var anInterpreter,aText;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
anInterpreter=$recv($globals.CTestInterpreter)._new();
aText=$recv(anInterpreter)._interpretText_("");
self._assert_equals_($recv(aText)._title(),"");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"test1",{anInterpreter:anInterpreter,aText:aText},$globals.TestInterpreter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "test1\x0a\x09| anInterpreter aText |\x0a\x09anInterpreter := CTestInterpreter new.\x0a\x09aText := anInterpreter interpretText: ''.\x0a\x09self assert: aText title equals: ''.",
referencedClasses: ["CTestInterpreter"],
//>>excludeEnd("ide");
messageSends: ["new", "interpretText:", "assert:equals:", "title"]
}),
$globals.TestInterpreter);

$core.addMethod(
$core.method({
selector: "test2",
protocol: 'tests',
fn: function (){
var self=this;
var anInterpreter,aText;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
anInterpreter=$recv($globals.CTestInterpreter)._new();
aText=$recv(anInterpreter)._interpretText_("The Title");
self._assert_equals_($recv(aText)._title(),"The Title");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"test2",{anInterpreter:anInterpreter,aText:aText},$globals.TestInterpreter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "test2\x0a\x09| anInterpreter aText |\x0a\x09anInterpreter := CTestInterpreter new.\x0a\x09aText := anInterpreter interpretText: 'The Title'.\x0a\x09self assert: aText title equals: 'The Title'.",
referencedClasses: ["CTestInterpreter"],
//>>excludeEnd("ide");
messageSends: ["new", "interpretText:", "assert:equals:", "title"]
}),
$globals.TestInterpreter);

$core.addMethod(
$core.method({
selector: "test3",
protocol: 'tests',
fn: function (){
var self=this;
var anInterpreter,aText;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
anInterpreter=$recv($globals.CTestInterpreter)._new();
aText=$recv(anInterpreter)._interpretText_("    The Title   ");
self._assert_equals_($recv(aText)._title(),"The Title");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"test3",{anInterpreter:anInterpreter,aText:aText},$globals.TestInterpreter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "test3\x0a\x09| anInterpreter aText |\x0a\x09anInterpreter := CTestInterpreter new.\x0a\x09aText := anInterpreter interpretText: '    The Title   '.\x0a\x09self assert: aText title equals: 'The Title'.",
referencedClasses: ["CTestInterpreter"],
//>>excludeEnd("ide");
messageSends: ["new", "interpretText:", "assert:equals:", "title"]
}),
$globals.TestInterpreter);

$core.addMethod(
$core.method({
selector: "test4",
protocol: 'tests',
fn: function (){
var self=this;
var anInterpreter,aText;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$4,$3,$2;
anInterpreter=$recv($globals.CTestInterpreter)._new();
$1=anInterpreter;
$4=$recv($globals.String)._cr();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["cr"]=1;
//>>excludeEnd("ctx");
$3=$recv($4).__comma(" The Title ");
$2=$recv($3).__comma($recv($globals.String)._cr());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
aText=$recv($1)._interpretText_($2);
self._assert_equals_($recv(aText)._title(),"The Title");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"test4",{anInterpreter:anInterpreter,aText:aText},$globals.TestInterpreter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "test4\x0a\x09| anInterpreter aText |\x0a\x09anInterpreter := CTestInterpreter new.\x0a\x09aText := anInterpreter interpretText: String cr, ' The Title ', String cr.\x0a\x09self assert: aText title equals: 'The Title'.",
referencedClasses: ["CTestInterpreter", "String"],
//>>excludeEnd("ide");
messageSends: ["new", "interpretText:", ",", "cr", "assert:equals:", "title"]
}),
$globals.TestInterpreter);

$core.addMethod(
$core.method({
selector: "test5",
protocol: 'tests',
fn: function (){
var self=this;
var anInterpreter,aText;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
anInterpreter=$recv($globals.CTestInterpreter)._new();
$1=anInterpreter;
$2=$recv("The Title".__comma($recv($globals.String)._cr())).__comma("The content");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
aText=$recv($1)._interpretText_($2);
self._assert_equals_($recv(aText)._title(),"The Title");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
self._assert_equals_($recv(aText)._contentAsString(),"The content");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"test5",{anInterpreter:anInterpreter,aText:aText},$globals.TestInterpreter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "test5\x0a\x09| anInterpreter aText |\x0a\x09anInterpreter := CTestInterpreter new.\x0a\x09aText := anInterpreter interpretText: 'The Title', String cr, 'The content'.\x0a\x09self assert: aText title equals: 'The Title'.\x0a\x09self assert: aText contentAsString equals: 'The content'",
referencedClasses: ["CTestInterpreter", "String"],
//>>excludeEnd("ide");
messageSends: ["new", "interpretText:", ",", "cr", "assert:equals:", "title", "contentAsString"]
}),
$globals.TestInterpreter);

$core.addMethod(
$core.method({
selector: "test6",
protocol: 'tests',
fn: function (){
var self=this;
var anInterpreter,aText;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
anInterpreter=$recv($globals.CTestInterpreter)._new();
$1=anInterpreter;
$2=$recv("The Title".__comma($recv($globals.String)._cr())).__comma("   The content  ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
aText=$recv($1)._interpretText_($2);
self._assert_equals_($recv(aText)._title(),"The Title");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
self._assert_equals_($recv(aText)._contentAsString(),"The content");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"test6",{anInterpreter:anInterpreter,aText:aText},$globals.TestInterpreter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "test6\x0a\x09| anInterpreter aText |\x0a\x09anInterpreter := CTestInterpreter new.\x0a\x09aText := anInterpreter interpretText: 'The Title', String cr, '   The content  '.\x0a\x09self assert: aText title equals: 'The Title'.\x0a\x09self assert: aText contentAsString equals: 'The content'",
referencedClasses: ["CTestInterpreter", "String"],
//>>excludeEnd("ide");
messageSends: ["new", "interpretText:", ",", "cr", "assert:equals:", "title", "contentAsString"]
}),
$globals.TestInterpreter);

$core.addMethod(
$core.method({
selector: "test7",
protocol: 'tests',
fn: function (){
var self=this;
var anInterpreter,aText,stringText;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $4,$3,$2,$1;
anInterpreter=$recv($globals.CTestInterpreter)._new();
$4=$recv($globals.String)._cr();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["cr"]=1;
//>>excludeEnd("ctx");
$3="The Title".__comma($4);
$2=$recv($3).__comma("The content");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=3;
//>>excludeEnd("ctx");
$1=$recv($2).__comma($recv($globals.String)._cr());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=2;
//>>excludeEnd("ctx");
stringText=$recv($1).__comma("More content");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
aText=$recv(anInterpreter)._interpretText_(stringText);
self._assert_equals_($recv(aText)._title(),"The Title");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
self._assert_equals_($recv(aText)._contentAsString(),"The content More content");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"test7",{anInterpreter:anInterpreter,aText:aText,stringText:stringText},$globals.TestInterpreter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "test7\x0a\x09| anInterpreter aText stringText |\x0a\x09anInterpreter := CTestInterpreter new.\x0a\x09stringText := 'The Title' , String cr , 'The content' , String cr, 'More content'.\x0a\x09aText := anInterpreter interpretText: stringText.\x0a\x09self assert: aText title equals: 'The Title'.\x0a\x09self assert: aText contentAsString equals: \x09'The content More content'",
referencedClasses: ["CTestInterpreter", "String"],
//>>excludeEnd("ide");
messageSends: ["new", ",", "cr", "interpretText:", "assert:equals:", "title", "contentAsString"]
}),
$globals.TestInterpreter);

$core.addMethod(
$core.method({
selector: "test8",
protocol: 'tests',
fn: function (){
var self=this;
var anInterpreter,aText,stringText;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $4,$3,$2,$1;
anInterpreter=$recv($globals.CTestInterpreter)._new();
$4=$recv($globals.String)._cr();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["cr"]=1;
//>>excludeEnd("ctx");
$3="The Title".__comma($4);
$2=$recv($3).__comma("The cont{ent}");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=3;
//>>excludeEnd("ctx");
$1=$recv($2).__comma($recv($globals.String)._cr());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=2;
//>>excludeEnd("ctx");
stringText=$recv($1).__comma("More content");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
aText=$recv(anInterpreter)._interpretText_(stringText);
self._assert_equals_($recv(aText)._title(),"The Title");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
self._assert_equals_($recv(aText)._contentAsString(),"The cont{ent} More content");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"test8",{anInterpreter:anInterpreter,aText:aText,stringText:stringText},$globals.TestInterpreter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "test8\x0a\x09| anInterpreter aText stringText |\x0a\x09anInterpreter := CTestInterpreter new.\x0a\x09stringText := 'The Title' , String cr , 'The cont{ent}' , String cr, 'More content'.\x0a\x09aText := anInterpreter interpretText: stringText.\x0a\x09self assert: aText title equals: 'The Title'.\x0a\x09self assert: aText contentAsString equals: 'The cont{ent} More content'",
referencedClasses: ["CTestInterpreter", "String"],
//>>excludeEnd("ide");
messageSends: ["new", ",", "cr", "interpretText:", "assert:equals:", "title", "contentAsString"]
}),
$globals.TestInterpreter);



$core.addClass('TestParserForContent', $globals.TestCase, ['aParser'], 'OndafSimulator-Core');
$core.addMethod(
$core.method({
selector: "assertState:",
protocol: 'assertions',
fn: function (stateName){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._assert_equals_($recv(self["@aParser"])._state(),stateName);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"assertState:",{stateName:stateName},$globals.TestParserForContent)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["stateName"],
source: "assertState: stateName\x0a\x09self assert: aParser state equals: stateName",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["assert:equals:", "state"]
}),
$globals.TestParserForContent);

$core.addMethod(
$core.method({
selector: "setUp",
protocol: 'running',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
self["@aParser"]=$recv($globals.CTestParser)._forContent();
$1=self["@aParser"];
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"setUp",{},$globals.TestParserForContent)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "setUp\x0a\x09^ aParser := CTestParser forContent",
referencedClasses: ["CTestParser"],
//>>excludeEnd("ide");
messageSends: ["forContent"]
}),
$globals.TestParserForContent);

$core.addMethod(
$core.method({
selector: "test01AParserStartsEmtpyAndWaiting",
protocol: 'tests',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._assert_equals_($recv(self["@aParser"])._contents(),$recv($globals.OrderedCollection)._new());
self._assertState_("Waiting");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"test01AParserStartsEmtpyAndWaiting",{},$globals.TestParserForContent)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "test01AParserStartsEmtpyAndWaiting\x0a\x09self assert: aParser contents equals: OrderedCollection new.\x0a\x09self assertState: 'Waiting'",
referencedClasses: ["OrderedCollection"],
//>>excludeEnd("ide");
messageSends: ["assert:equals:", "contents", "new", "assertState:"]
}),
$globals.TestParserForContent);

$core.addMethod(
$core.method({
selector: "test02ReadLetterWhenWaiting",
protocol: 'tests',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
$recv(self["@aParser"])._consumeAllIn_("a"._readStream());
$1=$recv(self["@aParser"])._contents();
$2=$recv($globals.OrderedCollection)._with_($recv($globals.CompletedText)._with_("a"));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
self._assert_equals_($1,$2);
self._assertState_("ReadingWord");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"test02ReadLetterWhenWaiting",{},$globals.TestParserForContent)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "test02ReadLetterWhenWaiting\x0a\x09aParser consumeAllIn: 'a' readStream.\x0a\x09self assert: aParser contents equals: (OrderedCollection\x0a\x09\x09with: (CompletedText with: 'a')\x0a\x09).\x0a\x09self assertState: 'ReadingWord'",
referencedClasses: ["OrderedCollection", "CompletedText"],
//>>excludeEnd("ide");
messageSends: ["consumeAllIn:", "readStream", "assert:equals:", "contents", "with:", "assertState:"]
}),
$globals.TestParserForContent);

$core.addMethod(
$core.method({
selector: "test03ReadBlankWhenWaiting",
protocol: 'tests',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self["@aParser"])._consumeAllIn_($recv(" ".__comma($recv($globals.String)._cr()))._readStream());
self._assert_equals_($recv(self["@aParser"])._contents(),$recv($globals.OrderedCollection)._new());
self._assertState_("Waiting");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"test03ReadBlankWhenWaiting",{},$globals.TestParserForContent)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "test03ReadBlankWhenWaiting\x0a\x09aParser consumeAllIn: (' ', String cr) readStream.\x0a\x09self assert: aParser contents equals: OrderedCollection new.\x0a\x09self assertState: 'Waiting'",
referencedClasses: ["String", "OrderedCollection"],
//>>excludeEnd("ide");
messageSends: ["consumeAllIn:", "readStream", ",", "cr", "assert:equals:", "contents", "new", "assertState:"]
}),
$globals.TestParserForContent);

$core.addMethod(
$core.method({
selector: "test04ReadBlankWhenReading",
protocol: 'tests',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
$recv(self["@aParser"])._consumeAllIn_("a "._readStream());
$1=$recv(self["@aParser"])._contents();
$2=$recv($globals.OrderedCollection)._with_($recv($globals.CompletedText)._with_("a"));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
self._assert_equals_($1,$2);
self._assertState_("WaitingForWord");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"test04ReadBlankWhenReading",{},$globals.TestParserForContent)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "test04ReadBlankWhenReading\x0a\x09aParser consumeAllIn: 'a ' readStream.\x0a\x09self assert: aParser contents equals: (OrderedCollection\x0a\x09\x09with: (CompletedText with: 'a')\x0a\x09).\x0a\x09self assertState: 'WaitingForWord'",
referencedClasses: ["OrderedCollection", "CompletedText"],
//>>excludeEnd("ide");
messageSends: ["consumeAllIn:", "readStream", "assert:equals:", "contents", "with:", "assertState:"]
}),
$globals.TestParserForContent);

$core.addMethod(
$core.method({
selector: "test05ReadBlankWhenWaitingForWord",
protocol: 'tests',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
$recv(self["@aParser"])._consumeAllIn_("a b"._readStream());
$1=$recv(self["@aParser"])._contents();
$2=$recv($globals.OrderedCollection)._with_($recv($globals.CompletedText)._with_("a b"));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
self._assert_equals_($1,$2);
self._assertState_("ReadingWord");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"test05ReadBlankWhenWaitingForWord",{},$globals.TestParserForContent)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "test05ReadBlankWhenWaitingForWord\x0a\x09aParser consumeAllIn: 'a b' readStream.\x0a\x09self assert: aParser contents equals: (OrderedCollection\x0a\x09\x09with: (CompletedText with: 'a b')\x0a\x09).\x0a\x09self assertState: 'ReadingWord'",
referencedClasses: ["OrderedCollection", "CompletedText"],
//>>excludeEnd("ide");
messageSends: ["consumeAllIn:", "readStream", "assert:equals:", "contents", "with:", "assertState:"]
}),
$globals.TestParserForContent);

$core.addMethod(
$core.method({
selector: "test06ParseTextWithSpaces",
protocol: 'tests',
fn: function (){
var self=this;
var text;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
text=$recv($recv($recv($globals.String)._cr()).__comma("   asd   qwerty  ")).__comma($recv($globals.String)._tab());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
$recv(self["@aParser"])._consumeAllIn_($recv(text)._readStream());
$1=$recv(self["@aParser"])._contents();
$2=$recv($globals.OrderedCollection)._with_($recv($globals.CompletedText)._with_("asd qwerty"));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
self._assert_equals_($1,$2);
self._assertState_("WaitingForWord");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"test06ParseTextWithSpaces",{text:text},$globals.TestParserForContent)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "test06ParseTextWithSpaces\x0a\x09| text |\x0a\x09text := String cr, '   asd   qwerty  ', String tab.\x0a\x09aParser consumeAllIn: text readStream.\x0a\x09self assert: aParser contents equals: (OrderedCollection\x0a\x09\x09with: (CompletedText with: 'asd qwerty')\x0a\x09).\x0a\x09self assertState: 'WaitingForWord'",
referencedClasses: ["String", "OrderedCollection", "CompletedText"],
//>>excludeEnd("ide");
messageSends: [",", "cr", "tab", "consumeAllIn:", "readStream", "assert:equals:", "contents", "with:", "assertState:"]
}),
$globals.TestParserForContent);

$core.addMethod(
$core.method({
selector: "test07InitWordToComplete",
protocol: 'tests',
fn: function (){
var self=this;
var text;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
text="he{";
$recv(text)._do_((function(c){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(self["@aParser"])._consume_($recv(c)._asString());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({c:c},$ctx1,1)});
//>>excludeEnd("ctx");
}));
self._assertState_("ReadingSuffixes");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"test07InitWordToComplete",{text:text},$globals.TestParserForContent)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "test07InitWordToComplete\x0a\x09| text |\x0a\x09text := 'he{'.\x0a\x09text do: [ :c | aParser consume: c asString ].\x0a\x09self assertState: 'ReadingSuffixes'.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["do:", "consume:", "asString", "assertState:"]
}),
$globals.TestParserForContent);

$core.addMethod(
$core.method({
selector: "test08ParseTextWithWordsToComplete",
protocol: 'tests',
fn: function (){
var self=this;
var text;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
text="he{llo}";
$recv(self["@aParser"])._consumeAllIn_($recv(text)._readStream());
self._assert_equals_($recv(self["@aParser"])._contents(),$recv($globals.OrderedCollection)._with_($recv($globals.WordToComplete)._withPrefix_options_("he",["llo"])));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"test08ParseTextWithWordsToComplete",{text:text},$globals.TestParserForContent)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "test08ParseTextWithWordsToComplete\x0a\x09| text |\x0a\x09text := 'he{llo}'.\x0a\x09aParser consumeAllIn: text readStream.\x0a\x09self assert: aParser contents equals: (OrderedCollection\x0a\x09\x09with: (WordToComplete withPrefix: 'he' options: #('llo'))\x0a\x09).",
referencedClasses: ["OrderedCollection", "WordToComplete"],
//>>excludeEnd("ide");
messageSends: ["consumeAllIn:", "readStream", "assert:equals:", "contents", "with:", "withPrefix:options:"]
}),
$globals.TestParserForContent);

$core.addMethod(
$core.method({
selector: "test09ParseTextWithWordsToCompleteBetweenText",
protocol: 'tests',
fn: function (){
var self=this;
var text;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$3,$2;
text="pre text he{llo} post text";
$recv(self["@aParser"])._consumeAllIn_($recv(text)._readStream());
$1=$recv(self["@aParser"])._contents();
$3=$recv($globals.CompletedText)._with_("pre text");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
$2=$recv($globals.OrderedCollection)._with_with_with_($3,$recv($globals.WordToComplete)._withPrefix_options_("he",["llo"]),$recv($globals.CompletedText)._with_("post text"));
self._assert_equals_($1,$2);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"test09ParseTextWithWordsToCompleteBetweenText",{text:text},$globals.TestParserForContent)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "test09ParseTextWithWordsToCompleteBetweenText\x0a\x09| text |\x0a\x09text := 'pre text he{llo} post text'.\x0a\x09aParser consumeAllIn: text readStream.\x0a\x09self assert: aParser contents equals: (OrderedCollection\x0a\x09\x09with: (CompletedText with: 'pre text')\x0a\x09\x09with: (WordToComplete withPrefix: 'he' options: #('llo'))\x0a\x09\x09with: (CompletedText with: 'post text')).",
referencedClasses: ["OrderedCollection", "CompletedText", "WordToComplete"],
//>>excludeEnd("ide");
messageSends: ["consumeAllIn:", "readStream", "assert:equals:", "contents", "with:with:with:", "with:", "withPrefix:options:"]
}),
$globals.TestParserForContent);

$core.addMethod(
$core.method({
selector: "test10ParseTextWithOneOptionWordsToComplete",
protocol: 'tests',
fn: function (){
var self=this;
var text;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $5,$4,$3,$2,$1,$6,$8,$9,$7;
$5=$recv($globals.String)._cr();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["cr"]=1;
//>>excludeEnd("ctx");
$4=$recv($5).__comma("   pre  text  1 ");
$3=$recv($4).__comma($recv($globals.String)._tab());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=4;
//>>excludeEnd("ctx");
$2=$recv($3).__comma(" and   he{llo} post.  ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=3;
//>>excludeEnd("ctx");
$1=$recv($2).__comma($recv($globals.String)._cr());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=2;
//>>excludeEnd("ctx");
text=$recv($1).__comma(" text  anot{her}    ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
$recv(self["@aParser"])._consumeAllIn_($recv(text)._readStream());
$6=$recv(self["@aParser"])._contents();
$8=$recv($globals.CompletedText)._with_("pre text 1 and");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
$9=$recv($globals.WordToComplete)._withPrefix_options_("he",["llo"]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["withPrefix:options:"]=1;
//>>excludeEnd("ctx");
$7=$recv($globals.OrderedCollection)._with_with_with_with_($8,$9,$recv($globals.CompletedText)._with_("post. text"),$recv($globals.WordToComplete)._withPrefix_options_("anot",["her"]));
self._assert_equals_($6,$7);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"test10ParseTextWithOneOptionWordsToComplete",{text:text},$globals.TestParserForContent)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "test10ParseTextWithOneOptionWordsToComplete\x0a\x09| text |\x0a\x09text := String cr, '   pre  text  1 ', String tab, ' and   he{llo} post.  ', String cr, ' text  anot{her}    '.\x0a\x09aParser consumeAllIn: text readStream.\x0a\x09self assert: aParser contents equals: (OrderedCollection\x0a\x09\x09with: (CompletedText with: 'pre text 1 and')\x0a\x09\x09with: (WordToComplete withPrefix: 'he' options: #('llo'))\x0a\x09\x09with: (CompletedText with: 'post. text')\x0a\x09\x09with: (WordToComplete withPrefix: 'anot' options: #('her'))\x0a\x09).",
referencedClasses: ["String", "OrderedCollection", "CompletedText", "WordToComplete"],
//>>excludeEnd("ide");
messageSends: [",", "cr", "tab", "consumeAllIn:", "readStream", "assert:equals:", "contents", "with:with:with:with:", "with:", "withPrefix:options:"]
}),
$globals.TestParserForContent);

$core.addMethod(
$core.method({
selector: "test11ParseTextWithMoreThenOneOptionWordToComplete",
protocol: 'tests',
fn: function (){
var self=this;
var text;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$3,$2;
text="pre text he{llo,art} post.";
$recv(self["@aParser"])._consumeAllIn_($recv(text)._readStream());
$1=$recv(self["@aParser"])._contents();
$3=$recv($globals.CompletedText)._with_("pre text");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
$2=$recv($globals.OrderedCollection)._with_with_with_($3,$recv($globals.WordToComplete)._withPrefix_options_("he",["llo", "art"]),$recv($globals.CompletedText)._with_("post."));
self._assert_equals_($1,$2);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"test11ParseTextWithMoreThenOneOptionWordToComplete",{text:text},$globals.TestParserForContent)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "test11ParseTextWithMoreThenOneOptionWordToComplete\x0a\x09| text |\x0a\x09text := 'pre text he{llo,art} post.'.\x0a\x09aParser consumeAllIn: text readStream.\x0a\x09self assert: aParser contents equals: (OrderedCollection\x0a\x09\x09with: (CompletedText with: 'pre text')\x0a\x09\x09with: (WordToComplete withPrefix: 'he' options: #('llo' 'art'))\x0a\x09\x09with: (CompletedText with: 'post.')\x0a\x09).",
referencedClasses: ["OrderedCollection", "CompletedText", "WordToComplete"],
//>>excludeEnd("ide");
messageSends: ["consumeAllIn:", "readStream", "assert:equals:", "contents", "with:with:with:", "with:", "withPrefix:options:"]
}),
$globals.TestParserForContent);

$core.addMethod(
$core.method({
selector: "test12ParseTextWithSpaceInOptions",
protocol: 'tests',
fn: function (){
var self=this;
var text;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$3,$2;
text="pre text he{  llo  ,  art  } post.";
$recv(self["@aParser"])._consumeAllIn_($recv(text)._readStream());
$1=$recv(self["@aParser"])._contents();
$3=$recv($globals.CompletedText)._with_("pre text");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
$2=$recv($globals.OrderedCollection)._with_with_with_($3,$recv($globals.WordToComplete)._withPrefix_options_("he",["llo", "art"]),$recv($globals.CompletedText)._with_("post."));
self._assert_equals_($1,$2);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"test12ParseTextWithSpaceInOptions",{text:text},$globals.TestParserForContent)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "test12ParseTextWithSpaceInOptions\x0a\x09| text |\x0a\x09text := 'pre text he{  llo  ,  art  } post.'.\x0a\x09aParser consumeAllIn: text readStream.\x0a\x09self assert: aParser contents equals: (OrderedCollection\x0a\x09\x09with: (CompletedText with: 'pre text')\x0a\x09\x09with: (WordToComplete withPrefix: 'he' options: #('llo' 'art'))\x0a\x09\x09with: (CompletedText with: 'post.')\x0a\x09).",
referencedClasses: ["OrderedCollection", "CompletedText", "WordToComplete"],
//>>excludeEnd("ide");
messageSends: ["consumeAllIn:", "readStream", "assert:equals:", "contents", "with:with:with:", "with:", "withPrefix:options:"]
}),
$globals.TestParserForContent);

$core.addMethod(
$core.method({
selector: "test13ParseTextWithManyOptions",
protocol: 'tests',
fn: function (){
var self=this;
var text;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$3,$2;
text="pre text he{llo, art, r} post.";
$recv(self["@aParser"])._consumeAllIn_($recv(text)._readStream());
$1=$recv(self["@aParser"])._contents();
$3=$recv($globals.CompletedText)._with_("pre text");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
$2=$recv($globals.OrderedCollection)._with_with_with_($3,$recv($globals.WordToComplete)._withPrefix_options_("he",["llo", "art", "r"]),$recv($globals.CompletedText)._with_("post."));
self._assert_equals_($1,$2);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"test13ParseTextWithManyOptions",{text:text},$globals.TestParserForContent)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "test13ParseTextWithManyOptions\x0a\x09| text |\x0a\x09text := 'pre text he{llo, art, r} post.'.\x0a\x09aParser consumeAllIn: text readStream.\x0a\x09self assert: aParser contents equals: (OrderedCollection\x0a\x09\x09with: (CompletedText with: 'pre text')\x0a\x09\x09with: (WordToComplete withPrefix: 'he' options: #('llo' 'art' 'r'))\x0a\x09\x09with: (CompletedText with: 'post.')\x0a\x09).",
referencedClasses: ["OrderedCollection", "CompletedText", "WordToComplete"],
//>>excludeEnd("ide");
messageSends: ["consumeAllIn:", "readStream", "assert:equals:", "contents", "with:with:with:", "with:", "withPrefix:options:"]
}),
$globals.TestParserForContent);

$core.addMethod(
$core.method({
selector: "test14ParseTextWithLineBreaks",
protocol: 'tests',
fn: function (){
var self=this;
var text;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
text=$recv("some text.".__comma($recv($globals.String)._cr())).__comma("more text");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
$recv(self["@aParser"])._consumeAllIn_($recv(text)._readStream());
$1=$recv(self["@aParser"])._contents();
$2=$recv($globals.OrderedCollection)._with_($recv($globals.CompletedText)._with_("some text. more text"));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
self._assert_equals_($1,$2);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"test14ParseTextWithLineBreaks",{text:text},$globals.TestParserForContent)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "test14ParseTextWithLineBreaks\x0a\x09| text |\x0a\x09text := 'some text.', String cr, 'more text'.\x0a\x09aParser consumeAllIn: text readStream.\x0a\x09self assert: aParser contents equals: (OrderedCollection\x0a\x09\x09with: (CompletedText with: 'some text. more text')\x0a\x09).",
referencedClasses: ["String", "OrderedCollection", "CompletedText"],
//>>excludeEnd("ide");
messageSends: [",", "cr", "consumeAllIn:", "readStream", "assert:equals:", "contents", "with:"]
}),
$globals.TestParserForContent);



$core.addClass('TestParserForTitle', $globals.TestCase, ['aParser'], 'OndafSimulator-Core');
$core.addMethod(
$core.method({
selector: "setUp",
protocol: 'running',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
self["@aParser"]=$recv($globals.CTestParser)._forTitle();
$1=self["@aParser"];
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"setUp",{},$globals.TestParserForTitle)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "setUp\x0a\x09^ aParser := CTestParser forTitle",
referencedClasses: ["CTestParser"],
//>>excludeEnd("ide");
messageSends: ["forTitle"]
}),
$globals.TestParserForTitle);

$core.addMethod(
$core.method({
selector: "test01AParserStartsEmtpyAndWaiting",
protocol: 'tests',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._assert_equals_($recv(self["@aParser"])._contents(),"");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
self._assert_equals_($recv(self["@aParser"])._state(),"Waiting");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"test01AParserStartsEmtpyAndWaiting",{},$globals.TestParserForTitle)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "test01AParserStartsEmtpyAndWaiting\x0a\x09self assert: aParser contents equals: ''.\x0a\x09self assert: aParser state equals: 'Waiting'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["assert:equals:", "contents", "state"]
}),
$globals.TestParserForTitle);

$core.addMethod(
$core.method({
selector: "test02ReadLetterWhenWaiting",
protocol: 'tests',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self["@aParser"])._consume_("a");
self._assert_equals_($recv(self["@aParser"])._contents(),"a");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
self._assert_equals_($recv(self["@aParser"])._state(),"ReadingWord");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"test02ReadLetterWhenWaiting",{},$globals.TestParserForTitle)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "test02ReadLetterWhenWaiting\x0a\x09aParser consume: 'a'.\x0a\x09self assert: aParser contents equals: 'a'.\x0a\x09self assert: aParser state equals: 'ReadingWord'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["consume:", "assert:equals:", "contents", "state"]
}),
$globals.TestParserForTitle);

$core.addMethod(
$core.method({
selector: "test03ReadBlankWhenWaiting",
protocol: 'tests',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self["@aParser"])._consume_(" ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["consume:"]=1;
//>>excludeEnd("ctx");
$recv(self["@aParser"])._consume_($recv($globals.String)._cr());
self._assert_equals_($recv(self["@aParser"])._contents(),"");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
self._assert_equals_($recv(self["@aParser"])._state(),"Waiting");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"test03ReadBlankWhenWaiting",{},$globals.TestParserForTitle)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "test03ReadBlankWhenWaiting\x0a\x09aParser consume: ' '.\x0a\x09aParser consume: String cr.\x0a\x09self assert: aParser contents equals: ''.\x0a\x09self assert: aParser state equals: 'Waiting'",
referencedClasses: ["String"],
//>>excludeEnd("ide");
messageSends: ["consume:", "cr", "assert:equals:", "contents", "state"]
}),
$globals.TestParserForTitle);

$core.addMethod(
$core.method({
selector: "test04ReadBlankWhenReading",
protocol: 'tests',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self["@aParser"];
$recv($1)._consume_("a");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["consume:"]=1;
//>>excludeEnd("ctx");
$recv($1)._consume_(" ");
self._assert_equals_($recv(self["@aParser"])._contents(),"a");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
self._assert_equals_($recv(self["@aParser"])._state(),"WaitingForWord");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"test04ReadBlankWhenReading",{},$globals.TestParserForTitle)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "test04ReadBlankWhenReading\x0a\x09aParser\x0a\x09\x09consume: 'a';\x0a\x09\x09consume: ' '.\x0a\x09self assert: aParser contents equals: 'a'.\x0a\x09self assert: aParser state equals: 'WaitingForWord'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["consume:", "assert:equals:", "contents", "state"]
}),
$globals.TestParserForTitle);

$core.addMethod(
$core.method({
selector: "test05ReadBlankWhenWaitingForWord",
protocol: 'tests',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self["@aParser"];
$recv($1)._consume_("a");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["consume:"]=1;
//>>excludeEnd("ctx");
$recv($1)._consume_(" ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["consume:"]=2;
//>>excludeEnd("ctx");
$recv($1)._consume_("b");
self._assert_equals_($recv(self["@aParser"])._contents(),"a b");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
self._assert_equals_($recv(self["@aParser"])._state(),"ReadingWord");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"test05ReadBlankWhenWaitingForWord",{},$globals.TestParserForTitle)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "test05ReadBlankWhenWaitingForWord\x0a\x09aParser consume: 'a';\x0a\x09        consume: ' ';\x0a\x09        consume: 'b'.\x0a\x09self assert: aParser contents equals: 'a b'.\x0a\x09self assert: aParser state equals: 'ReadingWord'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["consume:", "assert:equals:", "contents", "state"]
}),
$globals.TestParserForTitle);

$core.addMethod(
$core.method({
selector: "test06ParseTextWithSpaces",
protocol: 'tests',
fn: function (){
var self=this;
var text;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
text=$recv($recv($recv($globals.String)._cr()).__comma("   asd   qwerty  ")).__comma($recv($globals.String)._tab());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
$recv(text)._do_((function(c){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(self["@aParser"])._consume_($recv(c)._asString());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({c:c},$ctx1,1)});
//>>excludeEnd("ctx");
}));
self._assert_equals_($recv(self["@aParser"])._contents(),"asd qwerty");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
self._assert_equals_($recv(self["@aParser"])._state(),"WaitingForWord");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"test06ParseTextWithSpaces",{text:text},$globals.TestParserForTitle)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "test06ParseTextWithSpaces\x0a\x09| text |\x0a\x09text := String cr, '   asd   qwerty  ', String tab.\x0a\x09text do: [ :c | aParser consume: c asString ].\x0a\x09self assert: aParser contents equals: 'asd qwerty'.\x0a\x09self assert: aParser state equals: 'WaitingForWord'",
referencedClasses: ["String"],
//>>excludeEnd("ide");
messageSends: [",", "cr", "tab", "do:", "consume:", "asString", "assert:equals:", "contents", "state"]
}),
$globals.TestParserForTitle);

$core.addMethod(
$core.method({
selector: "test07EndInNewLineWhenWaitingForWord",
protocol: 'tests',
fn: function (){
var self=this;
var text;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $4,$3,$2,$1;
$4=$recv($globals.String)._cr();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["cr"]=1;
//>>excludeEnd("ctx");
$3=$recv($4).__comma("   asd   qwerty  ");
$2=$recv($3).__comma($recv($globals.String)._tab());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=3;
//>>excludeEnd("ctx");
$1=$recv($2).__comma($recv($globals.String)._cr());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=2;
//>>excludeEnd("ctx");
text=$recv($1).__comma("more content");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
$recv(text)._do_((function(c){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(self["@aParser"])._consume_($recv(c)._asString());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({c:c},$ctx1,1)});
//>>excludeEnd("ctx");
}));
self._assert_equals_($recv(self["@aParser"])._contents(),"asd qwerty");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
self._assert_equals_($recv(self["@aParser"])._state(),"End");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"test07EndInNewLineWhenWaitingForWord",{text:text},$globals.TestParserForTitle)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "test07EndInNewLineWhenWaitingForWord\x0a\x09| text |\x0a\x09text := String cr, '   asd   qwerty  ', String tab, String cr, 'more content'.\x0a\x09text do: [ :c | aParser consume: c asString ].\x0a\x09self assert: aParser contents equals: 'asd qwerty'.\x0a\x09self assert: aParser state equals: 'End'",
referencedClasses: ["String"],
//>>excludeEnd("ide");
messageSends: [",", "cr", "tab", "do:", "consume:", "asString", "assert:equals:", "contents", "state"]
}),
$globals.TestParserForTitle);

$core.addMethod(
$core.method({
selector: "test08EndInNewLineWhenReading",
protocol: 'tests',
fn: function (){
var self=this;
var text;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $3,$2,$1;
$3=$recv($globals.String)._cr();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["cr"]=1;
//>>excludeEnd("ctx");
$2=$recv($3).__comma("   asd   qwerty");
$1=$recv($2).__comma($recv($globals.String)._cr());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=2;
//>>excludeEnd("ctx");
text=$recv($1).__comma("more content");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
$recv(text)._do_((function(c){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(self["@aParser"])._consume_($recv(c)._asString());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({c:c},$ctx1,1)});
//>>excludeEnd("ctx");
}));
self._assert_equals_($recv(self["@aParser"])._contents(),"asd qwerty");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
self._assert_equals_($recv(self["@aParser"])._state(),"End");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"test08EndInNewLineWhenReading",{text:text},$globals.TestParserForTitle)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "test08EndInNewLineWhenReading\x0a\x09| text |\x0a\x09text := String cr, '   asd   qwerty', String cr, 'more content'.\x0a\x09text do: [ :c | aParser consume: c asString ].\x0a\x09self assert: aParser contents equals: 'asd qwerty'.\x0a\x09self assert: aParser state equals: 'End'",
referencedClasses: ["String"],
//>>excludeEnd("ide");
messageSends: [",", "cr", "do:", "consume:", "asString", "assert:equals:", "contents", "state"]
}),
$globals.TestParserForTitle);

$core.addMethod(
$core.method({
selector: "test09DontKeepReadingIfAtEnd",
protocol: 'tests',
fn: function (){
var self=this;
var text,textStream;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
text=$recv("123".__comma($recv($globals.String)._cr())).__comma("more content");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
textStream=$recv(text)._readStream();
$recv(self["@aParser"])._consumeAllIn_(textStream);
self._assert_equals_($recv(self["@aParser"])._contents(),"123");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
self._assert_equals_($recv(self["@aParser"])._state(),"End");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=2;
//>>excludeEnd("ctx");
self._assert_equals_($recv(textStream)._position(),(4));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"test09DontKeepReadingIfAtEnd",{text:text,textStream:textStream},$globals.TestParserForTitle)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "test09DontKeepReadingIfAtEnd\x0a\x09| text textStream |\x0a\x09text := '123', String cr, 'more content'.\x0a\x09textStream := text readStream.\x0a\x09aParser consumeAllIn: textStream.\x0a\x09self assert: aParser contents equals: '123'.\x0a\x09self assert: aParser state equals: 'End'.\x0a\x09self assert: textStream position equals: 4",
referencedClasses: ["String"],
//>>excludeEnd("ide");
messageSends: [",", "cr", "readStream", "consumeAllIn:", "assert:equals:", "contents", "state", "position"]
}),
$globals.TestParserForTitle);

$core.addMethod(
$core.method({
selector: "test10ReturnWhenStreamEnds",
protocol: 'tests',
fn: function (){
var self=this;
var text,textStream;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
text="123";
textStream=$recv(text)._readStream();
$recv(self["@aParser"])._consumeAllIn_(textStream);
self._assert_equals_($recv(self["@aParser"])._contents(),"123");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"test10ReturnWhenStreamEnds",{text:text,textStream:textStream},$globals.TestParserForTitle)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "test10ReturnWhenStreamEnds\x0a\x09| text textStream |\x0a\x09text := '123'.\x0a\x09textStream := text readStream.\x0a\x09aParser consumeAllIn: textStream.\x0a\x09self assert: aParser contents equals: '123'.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["readStream", "consumeAllIn:", "assert:equals:", "contents"]
}),
$globals.TestParserForTitle);

$core.addMethod(
$core.method({
selector: "test11ParseTitle",
protocol: 'tests',
fn: function (){
var self=this;
var text,textStream;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
text=$recv("   This    is  a 3 ".__comma($recv($globals.String)._cr())).__comma(" more content");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
textStream=$recv(text)._readStream();
$recv(self["@aParser"])._consumeAllIn_(textStream);
self._assert_equals_($recv(self["@aParser"])._contents(),"This is a 3");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"test11ParseTitle",{text:text,textStream:textStream},$globals.TestParserForTitle)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "test11ParseTitle\x0a\x09| text textStream |\x0a\x09text := '   This    is  a 3 ', String cr, ' more content'.\x0a\x09textStream := text readStream.\x0a\x09aParser consumeAllIn: textStream.\x0a\x09self assert: aParser contents equals: 'This is a 3'.",
referencedClasses: ["String"],
//>>excludeEnd("ide");
messageSends: [",", "cr", "readStream", "consumeAllIn:", "assert:equals:", "contents"]
}),
$globals.TestParserForTitle);



$core.addClass('WordToComplete', $globals.Object, ['prefix', 'suffixOptions'], 'OndafSimulator-Core');
$core.addMethod(
$core.method({
selector: "=",
protocol: 'comparing',
fn: function (anotherObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($recv(anotherObject)._prefix()).__eq(self["@prefix"]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=1;
//>>excludeEnd("ctx");
return $recv($1)._and_($recv($recv(anotherObject)._suffixOptions()).__eq(self["@suffixOptions"]));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"=",{anotherObject:anotherObject},$globals.WordToComplete)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anotherObject"],
source: "= anotherObject\x0a\x09^ anotherObject prefix = prefix and: anotherObject suffixOptions = suffixOptions.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["and:", "=", "prefix", "suffixOptions"]
}),
$globals.WordToComplete);

$core.addMethod(
$core.method({
selector: "asString",
protocol: 'printing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $3,$2,$1;
$3=$recv(" ".__comma(self["@prefix"])).__comma("{");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=3;
//>>excludeEnd("ctx");
$2=$recv($3).__comma(","._join_(self["@suffixOptions"]));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=2;
//>>excludeEnd("ctx");
$1=$recv($2).__comma("} ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asString",{},$globals.WordToComplete)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asString\x0a\x09^ ' ', prefix, '{', (',' join: suffixOptions), '} '",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: [",", "join:"]
}),
$globals.WordToComplete);

$core.addMethod(
$core.method({
selector: "initializeWithPrefix:options:",
protocol: 'initialization',
fn: function (aString,aCollection){
var self=this;
self["@prefix"]=aString;
self["@suffixOptions"]=aCollection;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "aCollection"],
source: "initializeWithPrefix: aString options: aCollection \x0a\x09prefix := aString.\x0a\x09suffixOptions := aCollection",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.WordToComplete);

$core.addMethod(
$core.method({
selector: "prefix",
protocol: 'accessing',
fn: function (){
var self=this;
return self["@prefix"];

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "prefix\x0a\x09^ prefix",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.WordToComplete);

$core.addMethod(
$core.method({
selector: "printOn:",
protocol: 'printing',
fn: function (aStream){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true,
//>>excludeEnd("ctx");
($globals.WordToComplete.superclass||$boot.nilAsClass).fn.prototype._printOn_.apply($recv(self), [aStream]));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$1=$recv("(".__comma(self._asString())).__comma(")");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
$recv(aStream)._nextPutAll_($1);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"printOn:",{aStream:aStream},$globals.WordToComplete)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aStream"],
source: "printOn: aStream\x0a\x09super printOn: aStream.\x0a\x09aStream nextPutAll: '(', self asString, ')'.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["printOn:", "nextPutAll:", ",", "asString"]
}),
$globals.WordToComplete);

$core.addMethod(
$core.method({
selector: "suffixOptions",
protocol: 'accessing',
fn: function (){
var self=this;
return self["@suffixOptions"];

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "suffixOptions\x0a\x09^ suffixOptions",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.WordToComplete);


$core.addMethod(
$core.method({
selector: "withPrefix:options:",
protocol: 'instance creation',
fn: function (aString,aCollection){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._new();
$recv($1)._initializeWithPrefix_options_(aString,aCollection);
return $recv($1)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"withPrefix:options:",{aString:aString,aCollection:aCollection},$globals.WordToComplete.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "aCollection"],
source: "withPrefix: aString options: aCollection \x0a\x09^ self new initializeWithPrefix: aString options: aCollection; yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["initializeWithPrefix:options:", "new", "yourself"]
}),
$globals.WordToComplete.klass);

});

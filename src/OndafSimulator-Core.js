define(["amber/boot", "amber_core/Kernel-Objects"], function($boot){"use strict";
if(!$boot.nilAsReceiver)$boot.nilAsReceiver=$boot.nil;
if(!("nilAsValue" in $boot))$boot.nilAsValue=$boot.nilAsReceiver;
var $core=$boot.api,nil=$boot.nilAsValue,$nil=$boot.nilAsReceiver,$recv=$boot.asReceiver,$globals=$boot.globals;
if(!$boot.nilAsClass)$boot.nilAsClass=$boot.dnu;
$core.addPackage("OndafSimulator-Core");
$core.packages["OndafSimulator-Core"].innerEval = function (expr) { return eval(expr); };
$core.packages["OndafSimulator-Core"].transport = {"type":"amd","amdNamespace":"amber-ondafsimulator"};

$core.addClass("CTestExam", $globals.Object, ["texts"], "OndafSimulator-Core");
$core.addMethod(
$core.method({
selector: "copyOn:",
protocol: "as yet unclassified",
fn: function (aPrinter){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(aPrinter)._printNumberOfTexts_($recv($self["@texts"])._size());
$recv($self["@texts"])._do_((function(text){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(text)._copyOn_(aPrinter);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({text:text},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"copyOn:",{aPrinter:aPrinter},$globals.CTestExam)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPrinter"],
source: "copyOn: aPrinter\x0a\x09aPrinter printNumberOfTexts: texts size.\x0a\x09texts do: [ :text |\x0a\x09\x09text copyOn: aPrinter\x0a\x09]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["printNumberOfTexts:", "size", "do:", "copyOn:"]
}),
$globals.CTestExam);

$core.addMethod(
$core.method({
selector: "evaluate:",
protocol: "as yet unclassified",
fn: function (aSubmission){
var self=this,$self=this;
var responseStream,results;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
responseStream=$recv(aSubmission)._readStream();
results=$recv($self["@texts"])._flatCollect_((function(aText){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(aText)._evaluate_(responseStream);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({aText:aText},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $recv($globals.CTestResult)._with_($recv(results)._asArray());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"evaluate:",{aSubmission:aSubmission,responseStream:responseStream,results:results},$globals.CTestExam)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aSubmission"],
source: "evaluate: aSubmission\x0a\x09| responseStream results |\x0a\x09responseStream := aSubmission readStream.\x0a\x09results := texts flatCollect: [ :aText | aText evaluate: responseStream ].\x0a\x09^ CTestResult with: results asArray",
referencedClasses: ["CTestResult"],
//>>excludeEnd("ide");
messageSends: ["readStream", "flatCollect:", "evaluate:", "with:", "asArray"]
}),
$globals.CTestExam);

$core.addMethod(
$core.method({
selector: "evaluate:on:",
protocol: "as yet unclassified",
fn: function (examCopies,aResultView){
var self=this,$self=this;
var answers,result;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
answers=$recv(examCopies)._flatCollect_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(each)._answers();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
result=$self._evaluate_(answers);
$recv(result)._for_toShowIn_(examCopies,aResultView);
return result;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"evaluate:on:",{examCopies:examCopies,aResultView:aResultView,answers:answers,result:result},$globals.CTestExam)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["examCopies", "aResultView"],
source: "evaluate: examCopies on: aResultView \x0a\x09| answers result |\x0a\x09answers := examCopies flatCollect: [ :each | each answers ].\x0a\x09result := self evaluate: answers.\x0a\x09result for: examCopies toShowIn: aResultView.\x0a\x09^ result",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["flatCollect:", "answers", "evaluate:", "for:toShowIn:"]
}),
$globals.CTestExam);

$core.addMethod(
$core.method({
selector: "initializeWithTexts:",
protocol: "initialization",
fn: function (aCollectionOfTexts){
var self=this,$self=this;
$self["@texts"]=aCollectionOfTexts;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCollectionOfTexts"],
source: "initializeWithTexts: aCollectionOfTexts\x0a\x09texts := aCollectionOfTexts",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CTestExam);

$core.addMethod(
$core.method({
selector: "numberOfTexts",
protocol: "as yet unclassified",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self["@texts"])._size();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"numberOfTexts",{},$globals.CTestExam)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "numberOfTexts\x0a\x09^ texts size",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["size"]
}),
$globals.CTestExam);


$core.addMethod(
$core.method({
selector: "withTexts:",
protocol: "instance creation",
fn: function (aCollectionOfTexts){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$self._new();
$recv($1)._initializeWithTexts_(aCollectionOfTexts);
return $recv($1)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"withTexts:",{aCollectionOfTexts:aCollectionOfTexts},$globals.CTestExam.a$cls)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCollectionOfTexts"],
source: "withTexts: aCollectionOfTexts\x0a\x09^ self new initializeWithTexts: aCollectionOfTexts; yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["initializeWithTexts:", "new", "yourself"]
}),
$globals.CTestExam.a$cls);


$core.addClass("CTestInterpreter", $globals.Object, [], "OndafSimulator-Core");
$core.addMethod(
$core.method({
selector: "interpretContentFrom:",
protocol: "operations",
fn: function (textStream){
var self=this,$self=this;
var theContent,contentParser;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
contentParser=$recv($globals.CTestParser)._forContent();
$1=contentParser;
$recv($1)._consumeAllIn_(textStream);
theContent=$recv($1)._contents();
return theContent;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"interpretContentFrom:",{textStream:textStream,theContent:theContent,contentParser:contentParser},$globals.CTestInterpreter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["textStream"],
source: "interpretContentFrom: textStream\x0a\x09| theContent contentParser |\x0a\x09contentParser := CTestParser forContent.\x0a\x09theContent := contentParser\x0a\x09\x09consumeAllIn: textStream;\x0a\x09\x09contents.\x0a\x09^ theContent",
referencedClasses: ["CTestParser"],
//>>excludeEnd("ide");
messageSends: ["forContent", "consumeAllIn:", "contents"]
}),
$globals.CTestInterpreter);

$core.addMethod(
$core.method({
selector: "interpretText:",
protocol: "operations",
fn: function (aString){
var self=this,$self=this;
var theTitle,textStream,theContent;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
textStream=$recv($recv(aString)._trimBoth())._readStream();
$1=$recv(textStream)._isEmpty();
if($core.assert($1)){
return $recv($globals.CTestText)._empty();
}
theTitle=$self._interpretTitleFrom_(textStream);
theContent=$self._interpretContentFrom_(textStream);
return $recv($globals.CTestText)._withTitle_content_(theTitle,theContent);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"interpretText:",{aString:aString,theTitle:theTitle,textStream:textStream,theContent:theContent},$globals.CTestInterpreter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "interpretText: aString\x0a\x09| theTitle textStream theContent |\x0a\x09textStream := aString trimBoth readStream.\x0a\x09textStream isEmpty\x0a\x09\x09ifTrue: [ ^ CTestText empty ].\x0a\x09theTitle := self interpretTitleFrom: textStream.\x0a\x09theContent := self interpretContentFrom: textStream.\x0a\x09^ CTestText withTitle: theTitle content: theContent",
referencedClasses: ["CTestText"],
//>>excludeEnd("ide");
messageSends: ["readStream", "trimBoth", "ifTrue:", "isEmpty", "empty", "interpretTitleFrom:", "interpretContentFrom:", "withTitle:content:"]
}),
$globals.CTestInterpreter);

$core.addMethod(
$core.method({
selector: "interpretTitleFrom:",
protocol: "operations",
fn: function (textStream){
var self=this,$self=this;
var titleParser;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
titleParser=$recv($globals.CTestParser)._forTitle();
$1=titleParser;
$recv($1)._consumeAllIn_(textStream);
return $recv($1)._contents();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"interpretTitleFrom:",{textStream:textStream,titleParser:titleParser},$globals.CTestInterpreter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["textStream"],
source: "interpretTitleFrom: textStream\x0a\x09| titleParser |\x0a\x09titleParser := CTestParser forTitle.\x0a\x09^ titleParser\x0a\x09\x09consumeAllIn: textStream;\x0a\x09\x09contents",
referencedClasses: ["CTestParser"],
//>>excludeEnd("ide");
messageSends: ["forTitle", "consumeAllIn:", "contents"]
}),
$globals.CTestInterpreter);



$core.addClass("CTestParser", $globals.Object, ["state", "content", "endState"], "OndafSimulator-Core");
$core.addMethod(
$core.method({
selector: "addToContents:",
protocol: "operations",
fn: function (anObject){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._subclassResponsibility();
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
protocol: "operations",
fn: function (aCharacter){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self["@state"])._consume_(aCharacter);
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
protocol: "operations",
fn: function (aReadStream){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv($self["@state"]).__eq($self._endState()))._or_($recv(aReadStream)._atEnd());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}))._whileFalse_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $self._consume_($recv($recv(aReadStream)._next())._asString());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
$recv($self["@state"])._finish();
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
protocol: "accessing",
fn: function (){
var self=this,$self=this;
return $self["@content"];

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
protocol: "accessing",
fn: function (){
var self=this,$self=this;
return $self["@endState"];

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
protocol: "initialization",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true,
//>>excludeEnd("ctx");
($globals.CTestParser.superclass||$boot.nilAsClass).fn.prototype._initialize.apply($self, []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$self["@endState"]=$recv($globals.CTestParserState)._newFor_named_(self,"End");
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
protocol: "accessing",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self["@state"])._name();
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
protocol: "accessing",
fn: function (aState){
var self=this,$self=this;
$self["@state"]=aState;
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
protocol: "instance creation",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($globals.CTestContentParser)._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"forContent",{},$globals.CTestParser.a$cls)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "forContent\x0a\x09^ CTestContentParser new",
referencedClasses: ["CTestContentParser"],
//>>excludeEnd("ide");
messageSends: ["new"]
}),
$globals.CTestParser.a$cls);

$core.addMethod(
$core.method({
selector: "forTitle",
protocol: "instance creation",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($globals.CTestTitleParser)._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"forTitle",{},$globals.CTestParser.a$cls)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "forTitle\x0a\x09^ CTestTitleParser new.",
referencedClasses: ["CTestTitleParser"],
//>>excludeEnd("ide");
messageSends: ["new"]
}),
$globals.CTestParser.a$cls);


$core.addClass("CTestContentParser", $globals.CTestParser, ["currentWord", "currentSuffix", "waiting", "readingWord", "waitingForWord", "readingSuffixes", "words", "suffixes"], "OndafSimulator-Core");
$core.addMethod(
$core.method({
selector: "addRemainingWords",
protocol: "private-actions",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return (function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv($self._addWord())._value();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["value"]=1;
//>>excludeEnd("ctx");
return $recv($self._addWordsToContent())._value();
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
protocol: "private-popping",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return (function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($self["@suffixes"])._add_($self._popCurrentSuffix());
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
protocol: "operations",
fn: function (anObject){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self["@content"])._add_(anObject);
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
protocol: "private-actions",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
return (function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=$recv($self["@currentWord"])._isEmpty();
if(!$core.assert($1)){
return $recv($self["@words"])._add_($self._popCurrentWord());
}
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
protocol: "private-actions",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return (function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $self._addToContents_($self._popWordToComplete());
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
protocol: "private-actions",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return (function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv($self["@words"])._ifNotEmpty_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $self._addToContents_($recv($globals.CompletedText)._with_(" "._join_($self["@words"])));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}));
$self["@words"]=$recv($globals.OrderedCollection)._new();
return $self["@words"];
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
protocol: "private-actions",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return (function(aCharacter){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$self["@currentSuffix"]=$recv($self["@currentSuffix"]).__comma(aCharacter);
return $self["@currentSuffix"];
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
protocol: "private-actions",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return (function(aCharacter){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$self["@currentWord"]=$recv($self["@currentWord"]).__comma(aCharacter);
return $self["@currentWord"];
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
protocol: "private-initialization",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3,$4,$5,$6;
$recv($self["@waiting"])._whenLetterState_($self["@readingWord"]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["whenLetterState:"]=1;
//>>excludeEnd("ctx");
$1=$self["@waiting"];
$2=$self._appendToCurrentWord();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["appendToCurrentWord"]=1;
//>>excludeEnd("ctx");
$recv($1)._whenLetterAction_($2);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["whenLetterAction:"]=1;
//>>excludeEnd("ctx");
$recv($self["@readingWord"])._whenSpaceState_($self["@waitingForWord"]);
$recv($self["@readingWord"])._whenSpaceAction_($self._addWord());
$3=$self["@readingWord"];
$4=$self._appendToCurrentWord();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["appendToCurrentWord"]=2;
//>>excludeEnd("ctx");
$recv($3)._whenLetterAction_($4);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["whenLetterAction:"]=2;
//>>excludeEnd("ctx");
$5=$self["@readingWord"];
$6=$self._addRemainingWords();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["addRemainingWords"]=1;
//>>excludeEnd("ctx");
$recv($5)._whenFinishAction_($6);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["whenFinishAction:"]=1;
//>>excludeEnd("ctx");
$recv($self["@readingWord"])._when_thenState_action_("{",$self["@readingSuffixes"],$self._addWordsToContent());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["when:thenState:action:"]=1;
//>>excludeEnd("ctx");
$recv($self["@waitingForWord"])._whenLetterState_($self["@readingWord"]);
$recv($self["@waitingForWord"])._whenLetterAction_($self._appendToCurrentWord());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["whenLetterAction:"]=3;
//>>excludeEnd("ctx");
$recv($self["@waitingForWord"])._whenFinishAction_($self._addRemainingWords());
$recv($self["@readingSuffixes"])._whenLetterAction_($self._appendToCurrentSuffix());
$recv($self["@readingSuffixes"])._when_thenState_action_("}",$self["@readingWord"],$self._addWordToComplete());
$recv($self["@readingSuffixes"])._when_thenAction_(",",$self._addSuffix());
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
protocol: "initialization",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true,
//>>excludeEnd("ctx");
($globals.CTestContentParser.superclass||$boot.nilAsClass).fn.prototype._initialize.apply($self, []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$self["@currentWord"]="";
$self["@currentSuffix"]="";
$self["@words"]=$recv($globals.OrderedCollection)._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=1;
//>>excludeEnd("ctx");
$self["@suffixes"]=$recv($globals.OrderedCollection)._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=2;
//>>excludeEnd("ctx");
$self["@content"]=$recv($globals.OrderedCollection)._new();
$self._initializeStates();
$self._bindStates();
$self["@state"]=$self["@waiting"];
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
protocol: "private-initialization",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self["@waiting"]=$recv($globals.CTestParserState)._newFor_named_(self,"Waiting");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["newFor:named:"]=1;
//>>excludeEnd("ctx");
$self["@readingWord"]=$recv($globals.CTestParserState)._newFor_named_(self,"ReadingWord");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["newFor:named:"]=2;
//>>excludeEnd("ctx");
$self["@waitingForWord"]=$recv($globals.CTestParserState)._newFor_named_(self,"WaitingForWord");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["newFor:named:"]=3;
//>>excludeEnd("ctx");
$self["@readingSuffixes"]=$recv($globals.CTestParserState)._newFor_named_(self,"ReadingSuffixes");
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
protocol: "private-popping",
fn: function (){
var self=this,$self=this;
var suffix;
suffix=$self["@currentSuffix"];
$self["@currentSuffix"]="";
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
protocol: "private-popping",
fn: function (){
var self=this,$self=this;
var word;
word=$self["@currentWord"];
$self["@currentWord"]="";
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
protocol: "private-popping",
fn: function (){
var self=this,$self=this;
var wordToComplete;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self._addSuffix())._value();
wordToComplete=$recv($globals.WordToComplete)._withPrefix_options_($self._popCurrentWord(),$recv($globals.Array)._newFrom_($self["@suffixes"]));
$self["@suffixes"]=$recv($globals.OrderedCollection)._new();
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



$core.addClass("CTestTitleParser", $globals.CTestParser, [], "OndafSimulator-Core");
$core.addMethod(
$core.method({
selector: "addToContents:",
protocol: "operations",
fn: function (aCharacter){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self["@content"]=$recv($self["@content"]).__comma(aCharacter);
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
protocol: "initialization",
fn: function (){
var self=this,$self=this;
var waiting,readingWord,waitingForWord;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true,
//>>excludeEnd("ctx");
($globals.CTestTitleParser.superclass||$boot.nilAsClass).fn.prototype._initialize.apply($self, []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$self["@content"]="";
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
return $self._addToContents_(aCharacter);
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
$recv(readingWord)._whenEnterState_($self["@endState"]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["whenEnterState:"]=1;
//>>excludeEnd("ctx");
$recv(readingWord)._whenLetterAction_((function(aCharacter){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $self._addToContents_(aCharacter);
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
$recv(waitingForWord)._whenEnterState_($self["@endState"]);
$recv(waitingForWord)._whenLetterState_(readingWord);
$recv(waitingForWord)._whenLetterAction_((function(aCharacter){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $self._addToContents_(" ".__comma(aCharacter));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({aCharacter:aCharacter},$ctx1,3)});
//>>excludeEnd("ctx");
}));
$self["@state"]=waiting;
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



$core.addClass("CTestParserState", $globals.Object, ["parser", "whenSpaceState", "whenEnterState", "whenLetterState", "letterBlock", "spaceBlock", "name", "finishBlock", "specialChars"], "OndafSimulator-Core");
$core.addMethod(
$core.method({
selector: "consume:",
protocol: "operations",
fn: function (aCharacter){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
var $early={};
try {
$recv($self["@specialChars"])._at_ifPresent_(aCharacter,(function(p){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv($recv(p)._second())._value();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["value"]=1;
//>>excludeEnd("ctx");
$recv($self["@parser"])._state_($recv(p)._first());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["state:"]=1;
//>>excludeEnd("ctx");
throw $early=[nil];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({p:p},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$1=$self._isWhiteSpace_(aCharacter);
if(!$core.assert($1)){
$recv($self["@letterBlock"])._value_(aCharacter);
$recv($self["@parser"])._state_($self["@whenLetterState"]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["state:"]=2;
//>>excludeEnd("ctx");
return nil;
}
$recv($self["@spaceBlock"])._value();
$recv($self["@parser"])._state_($self["@whenSpaceState"]);
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
protocol: "operations",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self["@finishBlock"])._value();
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
protocol: "initialization",
fn: function (aParser,aString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self["@parser"]=aParser;
$self["@name"]=aString;
$self["@specialChars"]=$recv($globals.Dictionary)._new();
$self["@letterBlock"]=(function(aCharacter){

});
$self["@spaceBlock"]=(function(){

});
$self["@whenLetterState"]=self;
$self["@whenEnterState"]=self;
$self["@whenSpaceState"]=self;
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
protocol: "private-testing",
fn: function (aCharacter){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv(aCharacter).__eq($recv($globals.String)._lf());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isEnter:",{aCharacter:aCharacter},$globals.CTestParserState)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCharacter"],
source: "isEnter: aCharacter\x0a\x09^ aCharacter = String lf",
referencedClasses: ["String"],
//>>excludeEnd("ide");
messageSends: ["=", "lf"]
}),
$globals.CTestParserState);

$core.addMethod(
$core.method({
selector: "isWhiteSpace:",
protocol: "private-testing",
fn: function (aCharacter){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($recv($globals.Array)._with_with_with_with_($recv($globals.String)._cr(),$recv($globals.String)._lf(),$recv($globals.String)._tab(),$recv($globals.String)._space()))._includes_(aCharacter);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isWhiteSpace:",{aCharacter:aCharacter},$globals.CTestParserState)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCharacter"],
source: "isWhiteSpace: aCharacter\x0a\x09^ (Array with: String cr with: String lf with: String tab with: String space) includes: aCharacter",
referencedClasses: ["Array", "String"],
//>>excludeEnd("ide");
messageSends: ["includes:", "with:with:with:with:", "cr", "lf", "tab", "space"]
}),
$globals.CTestParserState);

$core.addMethod(
$core.method({
selector: "name",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
return $self["@name"];

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
protocol: "printing",
fn: function (aStream){
var self=this,$self=this;
var title;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1;
title=$recv($self._name()).__comma(" State");
$2=$recv($recv(title)._first())._isVowel();
if($core.assert($2)){
$1="an ";
} else {
$1="a ";
}
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
protocol: "as yet unclassified",
fn: function (aCharacter,aBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._when_thenState_action_(aCharacter,self,aBlock);
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
protocol: "configuration",
fn: function (aCharacter,aState){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._when_thenState_action_(aCharacter,aState,(function(){

}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"when:thenState:",{aCharacter:aCharacter,aState:aState},$globals.CTestParserState)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCharacter", "aState"],
source: "when: aCharacter thenState: aState\x0a\x09self when: aCharacter thenState: aState action: []",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["when:thenState:action:"]
}),
$globals.CTestParserState);

$core.addMethod(
$core.method({
selector: "when:thenState:action:",
protocol: "configuration",
fn: function (aCharacter,aState,aBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self["@specialChars"])._add_($recv(aCharacter).__minus_gt($recv($globals.Array)._with_with_(aState,aBlock)));
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
protocol: "configuration",
fn: function (aState){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._when_thenState_($recv($globals.String)._lf(),aState);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"whenEnterState:",{aState:aState},$globals.CTestParserState)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aState"],
source: "whenEnterState: aState \x0a\x09self when: String lf thenState: aState.",
referencedClasses: ["String"],
//>>excludeEnd("ide");
messageSends: ["when:thenState:", "lf"]
}),
$globals.CTestParserState);

$core.addMethod(
$core.method({
selector: "whenFinishAction:",
protocol: "configuration",
fn: function (aBlock){
var self=this,$self=this;
$self["@finishBlock"]=aBlock;
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
protocol: "configuration",
fn: function (aBlock){
var self=this,$self=this;
$self["@letterBlock"]=aBlock;
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
protocol: "configuration",
fn: function (aState){
var self=this,$self=this;
$self["@whenLetterState"]=aState;
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
protocol: "configuration",
fn: function (aBlock){
var self=this,$self=this;
$self["@spaceBlock"]=aBlock;
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
protocol: "configuration",
fn: function (aState){
var self=this,$self=this;
$self["@whenSpaceState"]=aState;
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
protocol: "instance creation",
fn: function (aParser,aString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$self._new();
$recv($1)._initializeWith_name_(aParser,aString);
return $recv($1)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"newFor:named:",{aParser:aParser,aString:aString},$globals.CTestParserState.a$cls)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aParser", "aString"],
source: "newFor: aParser named: aString\x0a\x09^ self new\x0a\x09\x09initializeWith: aParser name: aString;\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["initializeWith:name:", "new", "yourself"]
}),
$globals.CTestParserState.a$cls);


$core.addClass("CTestPrinter", $globals.Object, ["copies", "numberOfTexts", "tray"], "OndafSimulator-Core");
$core.addMethod(
$core.method({
selector: "currentCopy",
protocol: "as yet unclassified",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self["@copies"])._last();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"currentCopy",{},$globals.CTestPrinter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "currentCopy\x0a\x09^ copies last",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["last"]
}),
$globals.CTestPrinter);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: "as yet unclassified",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true,
//>>excludeEnd("ctx");
($globals.CTestPrinter.superclass||$boot.nilAsClass).fn.prototype._initialize.apply($self, []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$self["@copies"]=$recv($globals.OrderedCollection)._new();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.CTestPrinter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09copies := OrderedCollection new",
referencedClasses: ["OrderedCollection"],
//>>excludeEnd("ide");
messageSends: ["initialize", "new"]
}),
$globals.CTestPrinter);

$core.addMethod(
$core.method({
selector: "print:",
protocol: "as yet unclassified",
fn: function (anExam){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(anExam)._copyOn_(self);
return $self["@copies"];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"print:",{anExam:anExam},$globals.CTestPrinter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anExam"],
source: "print: anExam\x0a\x09anExam copyOn: self.\x0a\x09^ copies",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["copyOn:"]
}),
$globals.CTestPrinter);

$core.addMethod(
$core.method({
selector: "printNumberOfTexts:",
protocol: "as yet unclassified",
fn: function (aNumber){
var self=this,$self=this;
$self["@numberOfTexts"]=aNumber;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNumber"],
source: "printNumberOfTexts: aNumber\x0a\x09numberOfTexts := aNumber.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CTestPrinter);

$core.addMethod(
$core.method({
selector: "printText:",
protocol: "as yet unclassified",
fn: function (aString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self._currentCopy())._addText_(aString);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"printText:",{aString:aString},$globals.CTestPrinter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "printText: aString\x0a\x09self currentCopy addText: aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["addText:", "currentCopy"]
}),
$globals.CTestPrinter);

$core.addMethod(
$core.method({
selector: "printTitle:time:",
protocol: "as yet unclassified",
fn: function (aString,aTimeInSeconds){
var self=this,$self=this;
var newCopy;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
newCopy=$recv($self["@tray"])._newCopy_of_titled_withTime_($recv($recv($self["@copies"])._size()).__plus((1)),$self["@numberOfTexts"],aString,aTimeInSeconds);
$recv($self["@copies"])._add_(newCopy);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"printTitle:time:",{aString:aString,aTimeInSeconds:aTimeInSeconds,newCopy:newCopy},$globals.CTestPrinter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "aTimeInSeconds"],
source: "printTitle: aString time: aTimeInSeconds\x0a\x09| newCopy |\x0a\x09newCopy := tray newCopy: copies size + 1 of: numberOfTexts titled: aString withTime: aTimeInSeconds.\x0a\x09copies add: newCopy",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["newCopy:of:titled:withTime:", "+", "size", "add:"]
}),
$globals.CTestPrinter);

$core.addMethod(
$core.method({
selector: "printWordToComplete:",
protocol: "as yet unclassified",
fn: function (aString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self._currentCopy())._addWordToComplete_(aString);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"printWordToComplete:",{aString:aString},$globals.CTestPrinter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "printWordToComplete: aString\x0a\x09self currentCopy addWordToComplete: aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["addWordToComplete:", "currentCopy"]
}),
$globals.CTestPrinter);

$core.addMethod(
$core.method({
selector: "tray:",
protocol: "as yet unclassified",
fn: function (aTray){
var self=this,$self=this;
$self["@tray"]=aTray;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aTray"],
source: "tray: aTray \x0a\x09tray := aTray",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CTestPrinter);


$core.addMethod(
$core.method({
selector: "newWithTray:",
protocol: "as yet unclassified",
fn: function (aPaperTray){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$self._new();
$recv($1)._tray_(aPaperTray);
return $recv($1)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"newWithTray:",{aPaperTray:aPaperTray},$globals.CTestPrinter.a$cls)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPaperTray"],
source: "newWithTray: aPaperTray \x0a\x09^ self new\x0a\x09\x09tray: aPaperTray;\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["tray:", "new", "yourself"]
}),
$globals.CTestPrinter.a$cls);


$core.addClass("CTestResult", $globals.Object, ["results", "sourceSubmission", "view"], "OndafSimulator-Core");
$core.addMethod(
$core.method({
selector: "for:toShowIn:",
protocol: "as yet unclassified",
fn: function (sumission,aResultView){
var self=this,$self=this;
$self["@sourceSubmission"]=sumission;
$self["@view"]=aResultView;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["sumission", "aResultView"],
source: "for: sumission toShowIn: aResultView\x0a\x09sourceSubmission := sumission.\x0a\x09view := aResultView.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CTestResult);

$core.addMethod(
$core.method({
selector: "giveToStudent",
protocol: "as yet unclassified",
fn: function (){
var self=this,$self=this;
var resultStream;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self["@view"])._renderScore_of_percentage_level_($self._score(),$self._maxScore(),$self._percentage(),$self._level());
resultStream=$recv($self["@results"])._readStream();
$recv($self["@sourceSubmission"])._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(each)._consumeResults_(resultStream);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["do:"]=1;
//>>excludeEnd("ctx");
$recv($self["@sourceSubmission"])._do_("giveBackToStudent");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"giveToStudent",{resultStream:resultStream},$globals.CTestResult)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "giveToStudent\x0a\x09| resultStream |\x0a\x09view renderScore: self score of: self maxScore percentage: self percentage level: self level.\x0a\x09\x09\x0a\x09resultStream := results readStream.\x0a\x09sourceSubmission do: [ :each | each consumeResults: resultStream ].\x0a\x09sourceSubmission do: #giveBackToStudent",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["renderScore:of:percentage:level:", "score", "maxScore", "percentage", "level", "readStream", "do:", "consumeResults:"]
}),
$globals.CTestResult);

$core.addMethod(
$core.method({
selector: "individualResults",
protocol: "as yet unclassified",
fn: function (){
var self=this,$self=this;
return $self["@results"];

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "individualResults\x0a\x09^ results",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CTestResult);

$core.addMethod(
$core.method({
selector: "initializeWith:",
protocol: "initialization",
fn: function (aCollectionOfResults){
var self=this,$self=this;
$self["@results"]=aCollectionOfResults;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCollectionOfResults"],
source: "initializeWith: aCollectionOfResults \x0a\x09results := aCollectionOfResults",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CTestResult);

$core.addMethod(
$core.method({
selector: "level",
protocol: "as yet unclassified",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($globals.CTestResultTable)._levelForPercentage_($self._percentage());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"level",{},$globals.CTestResult)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "level\x0a\x09^ CTestResultTable levelForPercentage: self percentage",
referencedClasses: ["CTestResultTable"],
//>>excludeEnd("ide");
messageSends: ["levelForPercentage:", "percentage"]
}),
$globals.CTestResult);

$core.addMethod(
$core.method({
selector: "maxScore",
protocol: "as yet unclassified",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self["@results"])._size();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"maxScore",{},$globals.CTestResult)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "maxScore\x0a\x09 ^ results size",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["size"]
}),
$globals.CTestResult);

$core.addMethod(
$core.method({
selector: "percentage",
protocol: "as yet unclassified",
fn: function (){
var self=this,$self=this;
var realPercentage,roundedPercentage;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($self._score()).__star((100));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["*"]=1;
//>>excludeEnd("ctx");
realPercentage=$recv($1).__slash($self._maxScore());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["/"]=1;
//>>excludeEnd("ctx");
roundedPercentage=$recv($recv($recv(realPercentage).__star((100)))._rounded()).__slash((100));
return $recv(roundedPercentage)._asFloat();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"percentage",{realPercentage:realPercentage,roundedPercentage:roundedPercentage},$globals.CTestResult)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "percentage\x0a\x09| realPercentage roundedPercentage |\x0a\x09realPercentage := self score * 100 / self maxScore.\x0a\x09roundedPercentage := (realPercentage * 100) rounded / 100.\x0a\x09^ roundedPercentage asFloat",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["/", "*", "score", "maxScore", "rounded", "asFloat"]
}),
$globals.CTestResult);

$core.addMethod(
$core.method({
selector: "score",
protocol: "as yet unclassified",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($recv($self["@results"])._select_("value"))._size();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"score",{},$globals.CTestResult)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "score\x0a\x09^ (results select: #value) size",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["size", "select:"]
}),
$globals.CTestResult);


$core.addMethod(
$core.method({
selector: "with:",
protocol: "instance creation",
fn: function (aCollectionOfResults){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$self._new();
$recv($1)._initializeWith_(aCollectionOfResults);
return $recv($1)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"with:",{aCollectionOfResults:aCollectionOfResults},$globals.CTestResult.a$cls)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCollectionOfResults"],
source: "with: aCollectionOfResults\x0a\x09^ self new initializeWith: aCollectionOfResults; yourself.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["initializeWith:", "new", "yourself"]
}),
$globals.CTestResult.a$cls);


$core.addClass("CTestResultTable", $globals.Object, [], "OndafSimulator-Core");

$core.addMethod(
$core.method({
selector: "levelForPercentage:",
protocol: "as yet unclassified",
fn: function (percentage){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
$1=$recv(percentage).__lt_eq((60));
if($core.assert($1)){
return "A2 (oder unter)";
}
$2=$recv(percentage).__gt_eq((88));
if($core.assert($2)){
return "B2 (oder höher)";
}
return "B1";
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"levelForPercentage:",{percentage:percentage},$globals.CTestResultTable.a$cls)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["percentage"],
source: "levelForPercentage: percentage\x0a\x09percentage <= 60 ifTrue: [ ^ 'A2 (oder unter)' ].\x0a\x09percentage >= 88 ifTrue: [ ^ 'B2 (oder höher)' ].\x0a\x09^ 'B1'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:", "<=", ">="]
}),
$globals.CTestResultTable.a$cls);


$core.addClass("CTestText", $globals.Object, ["title", "content"], "OndafSimulator-Core");
$core.addMethod(
$core.method({
selector: "contentAsString",
protocol: "conversion",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return ""._join_($recv($self["@content"])._collect_((function(c){
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
selector: "copyOn:",
protocol: "as yet unclassified",
fn: function (aPrinter){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(aPrinter)._printTitle_time_($self["@title"],$self._timeInSeconds());
$recv($self["@content"])._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(each)._copyOn_(aPrinter);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"copyOn:",{aPrinter:aPrinter},$globals.CTestText)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPrinter"],
source: "copyOn: aPrinter\x0a\x09aPrinter printTitle: title time: self timeInSeconds.\x0a\x09content do: [ :each | each copyOn: aPrinter ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["printTitle:time:", "timeInSeconds", "do:", "copyOn:"]
}),
$globals.CTestText);

$core.addMethod(
$core.method({
selector: "evaluate:",
protocol: "as yet unclassified",
fn: function (anAnswerStream){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self["@content"])._select_thenCollect_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(each)._requiresAnAnswer();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}),(function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(each)._evaluate_($recv(anAnswerStream)._next());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"evaluate:",{anAnswerStream:anAnswerStream},$globals.CTestText)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anAnswerStream"],
source: "evaluate: anAnswerStream \x0a\x09^ content select: [ :each | each requiresAnAnswer ]\x0a\x09     thenCollect: [ :each | each evaluate: anAnswerStream next ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["select:thenCollect:", "requiresAnAnswer", "evaluate:", "next"]
}),
$globals.CTestText);

$core.addMethod(
$core.method({
selector: "initializeTitle:content:",
protocol: "initialization",
fn: function (aTitle,anObject){
var self=this,$self=this;
$self["@title"]=aTitle;
$self["@content"]=anObject;
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
selector: "numberOfWordsToComplete",
protocol: "as yet unclassified",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($recv($self["@content"])._select_("requiresAnAnswer"))._size();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"numberOfWordsToComplete",{},$globals.CTestText)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "numberOfWordsToComplete\x0a\x09^ (content select: #requiresAnAnswer) size",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["size", "select:"]
}),
$globals.CTestText);

$core.addMethod(
$core.method({
selector: "timeInSeconds",
protocol: "as yet unclassified",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._numberOfWordsToComplete()).__star((15));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"timeInSeconds",{},$globals.CTestText)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "timeInSeconds\x0a\x09^ self numberOfWordsToComplete * 15",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["*", "numberOfWordsToComplete"]
}),
$globals.CTestText);

$core.addMethod(
$core.method({
selector: "title",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
return $self["@title"];

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
protocol: "instance creation",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._withTitle_content_("",nil);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"empty",{},$globals.CTestText.a$cls)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "empty\x0a\x09^ self withTitle: '' content: nil",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["withTitle:content:"]
}),
$globals.CTestText.a$cls);

$core.addMethod(
$core.method({
selector: "withTitle:content:",
protocol: "instance creation",
fn: function (aString,theContent){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$self._new();
$recv($1)._initializeTitle_content_(aString,theContent);
return $recv($1)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"withTitle:content:",{aString:aString,theContent:theContent},$globals.CTestText.a$cls)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "theContent"],
source: "withTitle: aString content: theContent\x0a\x09^ self new\x0a\x09\x09initializeTitle: aString content: theContent;\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["initializeTitle:content:", "new", "yourself"]
}),
$globals.CTestText.a$cls);


$core.addClass("CTestTextCopy", $globals.Object, ["time", "title", "view", "onFinish", "wordsToComplete"], "OndafSimulator-Core");
$core.addMethod(
$core.method({
selector: "addText:",
protocol: "as yet unclassified",
fn: function (aString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self["@view"])._addText_(aString);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"addText:",{aString:aString},$globals.CTestTextCopy)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "addText: aString\x0a\x09view addText: aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["addText:"]
}),
$globals.CTestTextCopy);

$core.addMethod(
$core.method({
selector: "addWordToComplete:",
protocol: "as yet unclassified",
fn: function (aString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self["@wordsToComplete"]=$recv($self["@wordsToComplete"]).__plus((1));
$recv($self["@view"])._addWordToComplete_(aString);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"addWordToComplete:",{aString:aString},$globals.CTestTextCopy)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "addWordToComplete: aString\x0a\x09wordsToComplete := wordsToComplete + 1.\x0a\x09view addWordToComplete: aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["+", "addWordToComplete:"]
}),
$globals.CTestTextCopy);

$core.addMethod(
$core.method({
selector: "answers",
protocol: "as yet unclassified",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self["@view"])._answers();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"answers",{},$globals.CTestTextCopy)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "answers\x0a\x09^ view answers",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["answers"]
}),
$globals.CTestTextCopy);

$core.addMethod(
$core.method({
selector: "consumeResults:",
protocol: "as yet unclassified",
fn: function (aStreamOfResults){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self["@view"])._showResults_($recv(aStreamOfResults)._next_($self["@wordsToComplete"]));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"consumeResults:",{aStreamOfResults:aStreamOfResults},$globals.CTestTextCopy)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aStreamOfResults"],
source: "consumeResults: aStreamOfResults \x0a\x09view showResults: (aStreamOfResults next: wordsToComplete)",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["showResults:", "next:"]
}),
$globals.CTestTextCopy);

$core.addMethod(
$core.method({
selector: "finish",
protocol: "as yet unclassified",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self["@view"])._hide();
$recv($self["@onFinish"])._value();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"finish",{},$globals.CTestTextCopy)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "finish\x0a\x09view hide.\x0a\x09onFinish value",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["hide", "value"]
}),
$globals.CTestTextCopy);

$core.addMethod(
$core.method({
selector: "giveBackToStudent",
protocol: "as yet unclassified",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self["@view"])._show();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"giveBackToStudent",{},$globals.CTestTextCopy)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "giveBackToStudent\x0a\x09view show",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["show"]
}),
$globals.CTestTextCopy);

$core.addMethod(
$core.method({
selector: "giveToStudent",
protocol: "as yet unclassified",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self["@view"])._whenContinueDo_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $self._finish();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$recv($self["@view"])._render();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"giveToStudent",{},$globals.CTestTextCopy)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "giveToStudent\x0a\x09view whenContinueDo: [ self finish ].\x0a\x09view render",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["whenContinueDo:", "finish", "render"]
}),
$globals.CTestTextCopy);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: "as yet unclassified",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true,
//>>excludeEnd("ctx");
($globals.CTestTextCopy.superclass||$boot.nilAsClass).fn.prototype._initialize.apply($self, []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$self["@wordsToComplete"]=(0);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.CTestTextCopy)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09wordsToComplete := 0",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["initialize"]
}),
$globals.CTestTextCopy);

$core.addMethod(
$core.method({
selector: "initializeWithView:",
protocol: "as yet unclassified",
fn: function (aView){
var self=this,$self=this;
$self["@view"]=aView;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aView"],
source: "initializeWithView: aView\x0a\x09view := aView",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CTestTextCopy);

$core.addMethod(
$core.method({
selector: "time:",
protocol: "as yet unclassified",
fn: function (aTimeInSeconds){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self["@time"]=aTimeInSeconds;
$recv($self["@view"])._time_($self["@time"]);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"time:",{aTimeInSeconds:aTimeInSeconds},$globals.CTestTextCopy)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aTimeInSeconds"],
source: "time: aTimeInSeconds \x0a\x09time := aTimeInSeconds.\x0a\x09view time: time",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["time:"]
}),
$globals.CTestTextCopy);

$core.addMethod(
$core.method({
selector: "timeInSeconds",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
return $self["@time"];

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "timeInSeconds\x0a\x09^ time",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CTestTextCopy);

$core.addMethod(
$core.method({
selector: "title:",
protocol: "as yet unclassified",
fn: function (aString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self["@title"]=aString;
$recv($self["@view"])._title_($self["@title"]);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"title:",{aString:aString},$globals.CTestTextCopy)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "title: aString \x0a\x09title := aString.\x0a\x09view title: title",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["title:"]
}),
$globals.CTestTextCopy);

$core.addMethod(
$core.method({
selector: "whenFinishDo:",
protocol: "as yet unclassified",
fn: function (aBlock){
var self=this,$self=this;
$self["@onFinish"]=aBlock;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "whenFinishDo: aBlock\x0a\x09onFinish := aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CTestTextCopy);


$core.addMethod(
$core.method({
selector: "newWithView:",
protocol: "as yet unclassified",
fn: function (aView){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$self._new();
$recv($1)._initializeWithView_(aView);
return $recv($1)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"newWithView:",{aView:aView},$globals.CTestTextCopy.a$cls)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aView"],
source: "newWithView: aView\x0a\x09^ self new\x0a\x09\x09initializeWithView: aView;\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["initializeWithView:", "new", "yourself"]
}),
$globals.CTestTextCopy.a$cls);


$core.addClass("CompletedText", $globals.Object, ["text"], "OndafSimulator-Core");
$core.addMethod(
$core.method({
selector: "=",
protocol: "as yet unclassified",
fn: function (anotherObject){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($recv(anotherObject)._text()).__eq($self["@text"]);
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
protocol: "accessing",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._text();
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
selector: "copyOn:",
protocol: "as yet unclassified",
fn: function (aPrinter){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(aPrinter)._printText_($self["@text"]);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"copyOn:",{aPrinter:aPrinter},$globals.CompletedText)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPrinter"],
source: "copyOn: aPrinter \x0a\x09aPrinter printText: text",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["printText:"]
}),
$globals.CompletedText);

$core.addMethod(
$core.method({
selector: "initializeWithText:",
protocol: "initialization",
fn: function (aString){
var self=this,$self=this;
$self["@text"]=aString;
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
protocol: "printing",
fn: function (aStream){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true,
//>>excludeEnd("ctx");
($globals.CompletedText.superclass||$boot.nilAsClass).fn.prototype._printOn_.apply($self, [aStream]));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$1=$recv("(".__comma($self["@text"])).__comma(")");
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
selector: "requiresAnAnswer",
protocol: "as yet unclassified",
fn: function (){
var self=this,$self=this;
return false;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "requiresAnAnswer\x0a\x09^ false",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CompletedText);

$core.addMethod(
$core.method({
selector: "text",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
return $self["@text"];

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
protocol: "as yet unclassified",
fn: function (aText){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._new())._initializeWithText_(aText);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"with:",{aText:aText},$globals.CompletedText.a$cls)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aText"],
source: "with: aText\x0a\x09^ self new initializeWithText: aText",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["initializeWithText:", "new"]
}),
$globals.CompletedText.a$cls);


$core.addClass("ExamDesigner", $globals.Object, ["texts", "interpreter", "supervisor"], "OndafSimulator-Core");
$core.addMethod(
$core.method({
selector: "considerText:",
protocol: "as yet unclassified",
fn: function (aString){
var self=this,$self=this;
var text;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
text=$recv($self["@interpreter"])._interpretText_(aString);
$recv($self["@supervisor"])._value_($recv(text)._title());
$recv($self["@texts"])._add_(text);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"considerText:",{aString:aString,text:text},$globals.ExamDesigner)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "considerText: aString\x0a\x09| text |\x0a\x09text := interpreter interpretText: aString.\x0a\x09supervisor value: text title.\x0a\x09texts add: text",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["interpretText:", "value:", "title", "add:"]
}),
$globals.ExamDesigner);

$core.addMethod(
$core.method({
selector: "designExam",
protocol: "as yet unclassified",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($globals.CTestExam)._withTexts_($self["@texts"]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"designExam",{},$globals.ExamDesigner)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "designExam\x0a\x09^ CTestExam withTexts: texts",
referencedClasses: ["CTestExam"],
//>>excludeEnd("ide");
messageSends: ["withTexts:"]
}),
$globals.ExamDesigner);

$core.addMethod(
$core.method({
selector: "informProgressTo:",
protocol: "as yet unclassified",
fn: function (aSupervisor){
var self=this,$self=this;
$self["@supervisor"]=aSupervisor;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aSupervisor"],
source: "informProgressTo: aSupervisor\x0a\x09supervisor := aSupervisor",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ExamDesigner);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: "as yet unclassified",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self["@texts"]=$recv($globals.OrderedCollection)._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=1;
//>>excludeEnd("ctx");
$self["@interpreter"]=$recv($globals.CTestInterpreter)._new();
$self["@supervisor"]=(function(ignored){

});
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.ExamDesigner)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09texts := OrderedCollection new.\x0a\x09interpreter := CTestInterpreter new.\x0a\x09supervisor := [ :ignored | ]",
referencedClasses: ["OrderedCollection", "CTestInterpreter"],
//>>excludeEnd("ide");
messageSends: ["new"]
}),
$globals.ExamDesigner);



$core.addClass("WordToComplete", $globals.Object, ["prefix", "suffixOptions"], "OndafSimulator-Core");
$core.addMethod(
$core.method({
selector: "=",
protocol: "comparing",
fn: function (anotherObject){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($recv(anotherObject)._prefix()).__eq($self["@prefix"]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=1;
//>>excludeEnd("ctx");
return $recv($1)._and_($recv($recv(anotherObject)._suffixOptions()).__eq($self["@suffixOptions"]));
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
protocol: "printing",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $3,$2,$1;
$3=$recv(" ".__comma($self["@prefix"])).__comma("{");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=3;
//>>excludeEnd("ctx");
$2=$recv($3).__comma(","._join_($self["@suffixOptions"]));
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
selector: "copyOn:",
protocol: "as yet unclassified",
fn: function (aPrinter){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(aPrinter)._printWordToComplete_($self["@prefix"]);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"copyOn:",{aPrinter:aPrinter},$globals.WordToComplete)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPrinter"],
source: "copyOn: aPrinter \x0a\x09aPrinter printWordToComplete: prefix",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["printWordToComplete:"]
}),
$globals.WordToComplete);

$core.addMethod(
$core.method({
selector: "evaluate:",
protocol: "as yet unclassified",
fn: function (aString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self["@suffixOptions"])._includes_(aString);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"evaluate:",{aString:aString},$globals.WordToComplete)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "evaluate: aString \x0a\x09^ suffixOptions includes: aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["includes:"]
}),
$globals.WordToComplete);

$core.addMethod(
$core.method({
selector: "initializeWithPrefix:options:",
protocol: "initialization",
fn: function (aString,aCollection){
var self=this,$self=this;
$self["@prefix"]=aString;
$self["@suffixOptions"]=aCollection;
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
protocol: "accessing",
fn: function (){
var self=this,$self=this;
return $self["@prefix"];

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
protocol: "printing",
fn: function (aStream){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true,
//>>excludeEnd("ctx");
($globals.WordToComplete.superclass||$boot.nilAsClass).fn.prototype._printOn_.apply($self, [aStream]));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$1=$recv("(".__comma($self._asString())).__comma(")");
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
selector: "requiresAnAnswer",
protocol: "as yet unclassified",
fn: function (){
var self=this,$self=this;
return true;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "requiresAnAnswer\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.WordToComplete);

$core.addMethod(
$core.method({
selector: "suffixOptions",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
return $self["@suffixOptions"];

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
protocol: "instance creation",
fn: function (aString,aCollection){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$self._new();
$recv($1)._initializeWithPrefix_options_(aString,aCollection);
return $recv($1)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"withPrefix:options:",{aString:aString,aCollection:aCollection},$globals.WordToComplete.a$cls)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "aCollection"],
source: "withPrefix: aString options: aCollection \x0a\x09^ self new initializeWithPrefix: aString options: aCollection; yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["initializeWithPrefix:options:", "new", "yourself"]
}),
$globals.WordToComplete.a$cls);

});

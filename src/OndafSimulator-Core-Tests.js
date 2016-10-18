define("amber-ondafsimulator/OndafSimulator-Core-Tests", ["amber/boot", "amber_core/SUnit", "amber_core/Kernel-Objects"], function($boot){"use strict";
var $core=$boot.api,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;
$core.addPackage('OndafSimulator-Core-Tests');
$core.packages["OndafSimulator-Core-Tests"].innerEval = function (expr) { return eval(expr); };
$core.packages["OndafSimulator-Core-Tests"].transport = {"type":"amd","amdNamespace":"amber-ondafsimulator"};

$core.addClass('ExamDesignerTest', $globals.TestCase, ['theExamDesigner'], 'OndafSimulator-Core-Tests');
$core.addMethod(
$core.method({
selector: "setUp",
protocol: 'tests',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self["@theExamDesigner"]=$recv($globals.ExamDesigner)._new();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"setUp",{},$globals.ExamDesignerTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "setUp\x0a\x09theExamDesigner := ExamDesigner new.",
referencedClasses: ["ExamDesigner"],
//>>excludeEnd("ide");
messageSends: ["new"]
}),
$globals.ExamDesignerTest);

$core.addMethod(
$core.method({
selector: "test01",
protocol: 'tests',
fn: function (){
var self=this;
var anExam;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
$1=self["@theExamDesigner"];
$2=$recv("Title".__comma($recv($globals.String)._cr())).__comma("Content");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
$recv($1)._considerText_($2);
anExam=$recv(self["@theExamDesigner"])._designExam();
self._assert_equals_($recv(anExam)._numberOfTexts(),(1));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"test01",{anExam:anExam},$globals.ExamDesignerTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "test01\x0a\x09| anExam |\x0a\x09theExamDesigner considerText: 'Title', String cr, 'Content'.\x0a\x09anExam := theExamDesigner designExam.\x0a\x09self assert: anExam numberOfTexts equals: 1.",
referencedClasses: ["String"],
//>>excludeEnd("ide");
messageSends: ["considerText:", ",", "cr", "designExam", "assert:equals:", "numberOfTexts"]
}),
$globals.ExamDesignerTest);

$core.addMethod(
$core.method({
selector: "test02",
protocol: 'tests',
fn: function (){
var self=this;
var anExam;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$4,$3,$2,$5,$6;
$1=self["@theExamDesigner"];
$4=$recv($globals.String)._cr();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["cr"]=1;
//>>excludeEnd("ctx");
$3="Title A".__comma($4);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=2;
//>>excludeEnd("ctx");
$2=$recv($3).__comma("Content 1");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
$recv($1)._considerText_($2);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["considerText:"]=1;
//>>excludeEnd("ctx");
$5=self["@theExamDesigner"];
$6=$recv("Title B".__comma($recv($globals.String)._cr())).__comma("Content 2");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=3;
//>>excludeEnd("ctx");
$recv($5)._considerText_($6);
anExam=$recv(self["@theExamDesigner"])._designExam();
self._assert_equals_($recv(anExam)._numberOfTexts(),(2));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"test02",{anExam:anExam},$globals.ExamDesignerTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "test02\x0a\x09| anExam |\x0a\x09theExamDesigner considerText: 'Title A', String cr, 'Content 1'.\x0a\x09theExamDesigner considerText: 'Title B', String cr, 'Content 2'.\x0a\x09anExam := theExamDesigner designExam.\x0a\x09self assert: anExam numberOfTexts equals: 2.",
referencedClasses: ["String"],
//>>excludeEnd("ide");
messageSends: ["considerText:", ",", "cr", "designExam", "assert:equals:", "numberOfTexts"]
}),
$globals.ExamDesignerTest);

$core.addMethod(
$core.method({
selector: "test03",
protocol: 'tests',
fn: function (){
var self=this;
var titles;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$4,$3,$2,$5,$6;
titles=$recv($globals.OrderedCollection)._new();
$recv(self["@theExamDesigner"])._informProgressTo_((function(title){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(titles)._add_(title);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({title:title},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$1=self["@theExamDesigner"];
$4=$recv($globals.String)._cr();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["cr"]=1;
//>>excludeEnd("ctx");
$3="Title A".__comma($4);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=2;
//>>excludeEnd("ctx");
$2=$recv($3).__comma("Content 1");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
$recv($1)._considerText_($2);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["considerText:"]=1;
//>>excludeEnd("ctx");
$5=self["@theExamDesigner"];
$6=$recv("Title B".__comma($recv($globals.String)._cr())).__comma("Content 2");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=3;
//>>excludeEnd("ctx");
$recv($5)._considerText_($6);
self._assert_equals_($recv(titles)._asArray(),["Title A", "Title B"]);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"test03",{titles:titles},$globals.ExamDesignerTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "test03\x0a\x09| titles |\x0a\x09titles := OrderedCollection new.\x0a\x09\x0a\x09theExamDesigner informProgressTo: [ :title | titles add: title ].\x0a\x09theExamDesigner considerText: 'Title A', String cr, 'Content 1'.\x0a\x09theExamDesigner considerText: 'Title B', String cr, 'Content 2'.\x0a\x09\x0a\x09self assert: titles asArray equals: #('Title A' 'Title B').",
referencedClasses: ["OrderedCollection", "String"],
//>>excludeEnd("ide");
messageSends: ["new", "informProgressTo:", "add:", "considerText:", ",", "cr", "assert:equals:", "asArray"]
}),
$globals.ExamDesignerTest);



$core.addClass('ExamTest', $globals.TestCase, ['theExamDesigner', 'theExam'], 'OndafSimulator-Core-Tests');
$core.addMethod(
$core.method({
selector: "givenExamWithText:",
protocol: 'given',
fn: function (text1){
var self=this;
var examDesigner;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
examDesigner=$recv($globals.ExamDesigner)._new();
$recv(examDesigner)._considerText_(text1);
self["@theExam"]=$recv(examDesigner)._designExam();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"givenExamWithText:",{text1:text1,examDesigner:examDesigner},$globals.ExamTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["text1"],
source: "givenExamWithText: text1\x0a\x09| examDesigner |\x0a\x09examDesigner := ExamDesigner new.\x0a\x09examDesigner considerText: text1.\x0a\x09theExam := examDesigner designExam.",
referencedClasses: ["ExamDesigner"],
//>>excludeEnd("ide");
messageSends: ["new", "considerText:", "designExam"]
}),
$globals.ExamTest);

$core.addMethod(
$core.method({
selector: "givenExamWithText:and:",
protocol: 'given',
fn: function (text1,text2){
var self=this;
var examDesigner;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
examDesigner=$recv($globals.ExamDesigner)._new();
$recv(examDesigner)._considerText_(text1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["considerText:"]=1;
//>>excludeEnd("ctx");
$recv(examDesigner)._considerText_(text2);
self["@theExam"]=$recv(examDesigner)._designExam();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"givenExamWithText:and:",{text1:text1,text2:text2,examDesigner:examDesigner},$globals.ExamTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["text1", "text2"],
source: "givenExamWithText: text1 and: text2 \x0a\x09| examDesigner |\x0a\x09examDesigner := ExamDesigner new.\x0a\x09examDesigner considerText: text1.\x0a\x09examDesigner considerText: text2.\x0a\x09theExam := examDesigner designExam.",
referencedClasses: ["ExamDesigner"],
//>>excludeEnd("ide");
messageSends: ["new", "considerText:", "designExam"]
}),
$globals.ExamTest);

$core.addMethod(
$core.method({
selector: "setUp",
protocol: 'running',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self["@theExamDesigner"]=$recv($globals.ExamDesigner)._new();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"setUp",{},$globals.ExamTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "setUp\x0a\x09theExamDesigner := ExamDesigner new.",
referencedClasses: ["ExamDesigner"],
//>>excludeEnd("ide");
messageSends: ["new"]
}),
$globals.ExamTest);

$core.addMethod(
$core.method({
selector: "test03",
protocol: 'tests',
fn: function (){
var self=this;
var aSubmission,aResult;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $3,$2,$1,$4;
$3=$recv($globals.String)._cr();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["cr"]=1;
//>>excludeEnd("ctx");
$2="Title A".__comma($3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=2;
//>>excludeEnd("ctx");
$1=$recv($2).__comma("he{llo} wor{ld}");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
$4=$recv("Title B".__comma($recv($globals.String)._cr())).__comma("loca{tion}");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=3;
//>>excludeEnd("ctx");
self._givenExamWithText_and_($1,$4);
aSubmission=["llo", "ld", "tion"];
aResult=$recv(self["@theExam"])._evaluate_(aSubmission);
self._assert_equals_($recv(aResult)._individualResults(),[true, true, true]);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"test03",{aSubmission:aSubmission,aResult:aResult},$globals.ExamTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "test03\x0a\x09| aSubmission aResult |\x0a\x09self givenExamWithText: 'Title A', String cr, 'he{llo} wor{ld}'\x0a\x09                   and: 'Title B', String cr, 'loca{tion}'.\x0a\x09\x0a\x09aSubmission := #('llo' 'ld' 'tion').\x0a\x09aResult := theExam evaluate: aSubmission.\x0a\x09\x0a\x09self assert: aResult individualResults equals: #(true true true).",
referencedClasses: ["String"],
//>>excludeEnd("ide");
messageSends: ["givenExamWithText:and:", ",", "cr", "evaluate:", "assert:equals:", "individualResults"]
}),
$globals.ExamTest);

$core.addMethod(
$core.method({
selector: "test04",
protocol: 'tests',
fn: function (){
var self=this;
var aSubmission,aResult;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv("Title A".__comma($recv($globals.String)._cr())).__comma("And the text said: he{llo} wor{ld}.");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
self._givenExamWithText_($1);
aSubmission=["llo", "ld"];
aResult=$recv(self["@theExam"])._evaluate_(aSubmission);
self._assert_equals_($recv(aResult)._individualResults(),[true, true]);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"test04",{aSubmission:aSubmission,aResult:aResult},$globals.ExamTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "test04\x0a\x09| aSubmission aResult |\x0a\x09self givenExamWithText: 'Title A', String cr, 'And the text said: he{llo} wor{ld}.'.\x0a\x09\x0a\x09aSubmission := #('llo' 'ld').\x0a\x09aResult := theExam evaluate: aSubmission.\x0a\x09\x0a\x09self assert: aResult individualResults equals: #(true true).",
referencedClasses: ["String"],
//>>excludeEnd("ide");
messageSends: ["givenExamWithText:", ",", "cr", "evaluate:", "assert:equals:", "individualResults"]
}),
$globals.ExamTest);

$core.addMethod(
$core.method({
selector: "test05",
protocol: 'tests',
fn: function (){
var self=this;
var aSubmission,aResult;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv("Title A".__comma($recv($globals.String)._cr())).__comma("And the text said: he{llo} wor{ld}.");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
self._givenExamWithText_($1);
aSubmission=["wrong", "answer"];
aResult=$recv(self["@theExam"])._evaluate_(aSubmission);
self._assert_equals_($recv(aResult)._individualResults(),[false, false]);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"test05",{aSubmission:aSubmission,aResult:aResult},$globals.ExamTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "test05\x0a\x09| aSubmission aResult |\x0a\x09self givenExamWithText: 'Title A', String cr, 'And the text said: he{llo} wor{ld}.'.\x0a\x09\x0a\x09aSubmission := #('wrong' 'answer').\x0a\x09aResult := theExam evaluate: aSubmission.\x0a\x09\x0a\x09self assert: aResult individualResults equals: #(false false).",
referencedClasses: ["String"],
//>>excludeEnd("ide");
messageSends: ["givenExamWithText:", ",", "cr", "evaluate:", "assert:equals:", "individualResults"]
}),
$globals.ExamTest);

$core.addMethod(
$core.method({
selector: "test06",
protocol: 'tests',
fn: function (){
var self=this;
var aSubmission,aResult;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv("Title A".__comma($recv($globals.String)._cr())).__comma("And the text said: he{llo} wor{ld}.");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
self._givenExamWithText_($1);
aSubmission=["llo"];
aResult=$recv(self["@theExam"])._evaluate_(aSubmission);
self._assert_equals_($recv(aResult)._individualResults(),[true, false]);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"test06",{aSubmission:aSubmission,aResult:aResult},$globals.ExamTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "test06\x0a\x09| aSubmission aResult |\x0a\x09self givenExamWithText: 'Title A', String cr, 'And the text said: he{llo} wor{ld}.'.\x0a\x09\x0a\x09aSubmission := #('llo').\x0a\x09aResult := theExam evaluate: aSubmission.\x0a\x09\x0a\x09self assert: aResult individualResults equals: #(true false).",
referencedClasses: ["String"],
//>>excludeEnd("ide");
messageSends: ["givenExamWithText:", ",", "cr", "evaluate:", "assert:equals:", "individualResults"]
}),
$globals.ExamTest);

$core.addMethod(
$core.method({
selector: "test07",
protocol: 'tests',
fn: function (){
var self=this;
var aSubmission,aResult;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv("Title A".__comma($recv($globals.String)._cr())).__comma("And the text said: he{llo} wor{ld}.");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
self._givenExamWithText_($1);
aSubmission=["wrong", "ld"];
aResult=$recv(self["@theExam"])._evaluate_(aSubmission);
self._assert_equals_($recv(aResult)._individualResults(),[false, true]);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"test07",{aSubmission:aSubmission,aResult:aResult},$globals.ExamTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "test07\x0a\x09| aSubmission aResult |\x0a\x09self givenExamWithText: 'Title A', String cr, 'And the text said: he{llo} wor{ld}.'.\x0a\x09\x0a\x09aSubmission := #('wrong' 'ld').\x0a\x09aResult := theExam evaluate: aSubmission.\x0a\x09\x0a\x09self assert: aResult individualResults equals: #(false true).",
referencedClasses: ["String"],
//>>excludeEnd("ide");
messageSends: ["givenExamWithText:", ",", "cr", "evaluate:", "assert:equals:", "individualResults"]
}),
$globals.ExamTest);

$core.addMethod(
$core.method({
selector: "test08",
protocol: 'tests',
fn: function (){
var self=this;
var aSubmission,aResult;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv("Title A".__comma($recv($globals.String)._cr())).__comma("And the text said: he{llo} wor{ld}.");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
self._givenExamWithText_($1);
aSubmission=["wrong", "ld"];
aResult=$recv(self["@theExam"])._evaluate_(aSubmission);
self._assert_equals_($recv(aResult)._percentage(),(50));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"test08",{aSubmission:aSubmission,aResult:aResult},$globals.ExamTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "test08\x0a\x09| aSubmission aResult |\x0a\x09self givenExamWithText: 'Title A', String cr, 'And the text said: he{llo} wor{ld}.'.\x0a\x09\x0a\x09aSubmission := #('wrong' 'ld').\x0a\x09aResult := theExam evaluate: aSubmission.\x0a\x09\x0a\x09self assert: aResult percentage equals: 50.",
referencedClasses: ["String"],
//>>excludeEnd("ide");
messageSends: ["givenExamWithText:", ",", "cr", "evaluate:", "assert:equals:", "percentage"]
}),
$globals.ExamTest);

$core.addMethod(
$core.method({
selector: "test09",
protocol: 'tests',
fn: function (){
var self=this;
var aPrinter;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv("Title A".__comma($recv($globals.String)._cr())).__comma("And the text said: he{llo} wor{ld}.");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
self._givenExamWithText_($1);
aPrinter=$recv($globals.TestPrinter)._new();
$recv(self["@theExam"])._copyOn_(aPrinter);
self._assert_equals_($recv(aPrinter)._printedText(),"|Title A| And the text said: he_ wor_ . ");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"test09",{aPrinter:aPrinter},$globals.ExamTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "test09\x0a\x09| aPrinter |\x0a\x09self givenExamWithText: 'Title A', String cr, 'And the text said: he{llo} wor{ld}.'.\x0a\x09aPrinter := TestPrinter new.\x0a\x09\x0a\x09theExam copyOn: aPrinter.\x0a\x09\x0a\x09self assert: aPrinter printedText equals: '|Title A| And the text said: he_ wor_ . '.",
referencedClasses: ["String", "TestPrinter"],
//>>excludeEnd("ide");
messageSends: ["givenExamWithText:", ",", "cr", "new", "copyOn:", "assert:equals:", "printedText"]
}),
$globals.ExamTest);



$core.addClass('InterpreterText', $globals.TestCase, [], 'OndafSimulator-Core-Tests');
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
}, function($ctx1) {$ctx1.fill(self,"test1",{anInterpreter:anInterpreter,aText:aText},$globals.InterpreterText)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "test1\x0a\x09| anInterpreter aText |\x0a\x09anInterpreter := CTestInterpreter new.\x0a\x09aText := anInterpreter interpretText: ''.\x0a\x09self assert: aText title equals: ''.",
referencedClasses: ["CTestInterpreter"],
//>>excludeEnd("ide");
messageSends: ["new", "interpretText:", "assert:equals:", "title"]
}),
$globals.InterpreterText);

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
}, function($ctx1) {$ctx1.fill(self,"test2",{anInterpreter:anInterpreter,aText:aText},$globals.InterpreterText)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "test2\x0a\x09| anInterpreter aText |\x0a\x09anInterpreter := CTestInterpreter new.\x0a\x09aText := anInterpreter interpretText: 'The Title'.\x0a\x09self assert: aText title equals: 'The Title'.",
referencedClasses: ["CTestInterpreter"],
//>>excludeEnd("ide");
messageSends: ["new", "interpretText:", "assert:equals:", "title"]
}),
$globals.InterpreterText);

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
}, function($ctx1) {$ctx1.fill(self,"test3",{anInterpreter:anInterpreter,aText:aText},$globals.InterpreterText)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "test3\x0a\x09| anInterpreter aText |\x0a\x09anInterpreter := CTestInterpreter new.\x0a\x09aText := anInterpreter interpretText: '    The Title   '.\x0a\x09self assert: aText title equals: 'The Title'.",
referencedClasses: ["CTestInterpreter"],
//>>excludeEnd("ide");
messageSends: ["new", "interpretText:", "assert:equals:", "title"]
}),
$globals.InterpreterText);

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
}, function($ctx1) {$ctx1.fill(self,"test4",{anInterpreter:anInterpreter,aText:aText},$globals.InterpreterText)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "test4\x0a\x09| anInterpreter aText |\x0a\x09anInterpreter := CTestInterpreter new.\x0a\x09aText := anInterpreter interpretText: String cr, ' The Title ', String cr.\x0a\x09self assert: aText title equals: 'The Title'.",
referencedClasses: ["CTestInterpreter", "String"],
//>>excludeEnd("ide");
messageSends: ["new", "interpretText:", ",", "cr", "assert:equals:", "title"]
}),
$globals.InterpreterText);

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
}, function($ctx1) {$ctx1.fill(self,"test5",{anInterpreter:anInterpreter,aText:aText},$globals.InterpreterText)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "test5\x0a\x09| anInterpreter aText |\x0a\x09anInterpreter := CTestInterpreter new.\x0a\x09aText := anInterpreter interpretText: 'The Title', String cr, 'The content'.\x0a\x09self assert: aText title equals: 'The Title'.\x0a\x09self assert: aText contentAsString equals: 'The content'",
referencedClasses: ["CTestInterpreter", "String"],
//>>excludeEnd("ide");
messageSends: ["new", "interpretText:", ",", "cr", "assert:equals:", "title", "contentAsString"]
}),
$globals.InterpreterText);

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
}, function($ctx1) {$ctx1.fill(self,"test6",{anInterpreter:anInterpreter,aText:aText},$globals.InterpreterText)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "test6\x0a\x09| anInterpreter aText |\x0a\x09anInterpreter := CTestInterpreter new.\x0a\x09aText := anInterpreter interpretText: 'The Title', String cr, '   The content  '.\x0a\x09self assert: aText title equals: 'The Title'.\x0a\x09self assert: aText contentAsString equals: 'The content'",
referencedClasses: ["CTestInterpreter", "String"],
//>>excludeEnd("ide");
messageSends: ["new", "interpretText:", ",", "cr", "assert:equals:", "title", "contentAsString"]
}),
$globals.InterpreterText);

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
}, function($ctx1) {$ctx1.fill(self,"test7",{anInterpreter:anInterpreter,aText:aText,stringText:stringText},$globals.InterpreterText)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "test7\x0a\x09| anInterpreter aText stringText |\x0a\x09anInterpreter := CTestInterpreter new.\x0a\x09stringText := 'The Title' , String cr , 'The content' , String cr, 'More content'.\x0a\x09aText := anInterpreter interpretText: stringText.\x0a\x09self assert: aText title equals: 'The Title'.\x0a\x09self assert: aText contentAsString equals: \x09'The content More content'",
referencedClasses: ["CTestInterpreter", "String"],
//>>excludeEnd("ide");
messageSends: ["new", ",", "cr", "interpretText:", "assert:equals:", "title", "contentAsString"]
}),
$globals.InterpreterText);

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
}, function($ctx1) {$ctx1.fill(self,"test8",{anInterpreter:anInterpreter,aText:aText,stringText:stringText},$globals.InterpreterText)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "test8\x0a\x09| anInterpreter aText stringText |\x0a\x09anInterpreter := CTestInterpreter new.\x0a\x09stringText := 'The Title' , String cr , 'The cont{ent}' , String cr, 'More content'.\x0a\x09aText := anInterpreter interpretText: stringText.\x0a\x09self assert: aText title equals: 'The Title'.\x0a\x09self assert: aText contentAsString equals: 'The cont{ent} More content'",
referencedClasses: ["CTestInterpreter", "String"],
//>>excludeEnd("ide");
messageSends: ["new", ",", "cr", "interpretText:", "assert:equals:", "title", "contentAsString"]
}),
$globals.InterpreterText);



$core.addClass('ParserForContentTest', $globals.TestCase, ['aParser'], 'OndafSimulator-Core-Tests');
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
}, function($ctx1) {$ctx1.fill(self,"assertState:",{stateName:stateName},$globals.ParserForContentTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["stateName"],
source: "assertState: stateName\x0a\x09self assert: aParser state equals: stateName",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["assert:equals:", "state"]
}),
$globals.ParserForContentTest);

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
}, function($ctx1) {$ctx1.fill(self,"setUp",{},$globals.ParserForContentTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "setUp\x0a\x09^ aParser := CTestParser forContent",
referencedClasses: ["CTestParser"],
//>>excludeEnd("ide");
messageSends: ["forContent"]
}),
$globals.ParserForContentTest);

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
}, function($ctx1) {$ctx1.fill(self,"test01AParserStartsEmtpyAndWaiting",{},$globals.ParserForContentTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "test01AParserStartsEmtpyAndWaiting\x0a\x09self assert: aParser contents equals: OrderedCollection new.\x0a\x09self assertState: 'Waiting'",
referencedClasses: ["OrderedCollection"],
//>>excludeEnd("ide");
messageSends: ["assert:equals:", "contents", "new", "assertState:"]
}),
$globals.ParserForContentTest);

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
}, function($ctx1) {$ctx1.fill(self,"test02ReadLetterWhenWaiting",{},$globals.ParserForContentTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "test02ReadLetterWhenWaiting\x0a\x09aParser consumeAllIn: 'a' readStream.\x0a\x09self assert: aParser contents equals: (OrderedCollection\x0a\x09\x09with: (CompletedText with: 'a')\x0a\x09).\x0a\x09self assertState: 'ReadingWord'",
referencedClasses: ["OrderedCollection", "CompletedText"],
//>>excludeEnd("ide");
messageSends: ["consumeAllIn:", "readStream", "assert:equals:", "contents", "with:", "assertState:"]
}),
$globals.ParserForContentTest);

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
}, function($ctx1) {$ctx1.fill(self,"test03ReadBlankWhenWaiting",{},$globals.ParserForContentTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "test03ReadBlankWhenWaiting\x0a\x09aParser consumeAllIn: (' ', String cr) readStream.\x0a\x09self assert: aParser contents equals: OrderedCollection new.\x0a\x09self assertState: 'Waiting'",
referencedClasses: ["String", "OrderedCollection"],
//>>excludeEnd("ide");
messageSends: ["consumeAllIn:", "readStream", ",", "cr", "assert:equals:", "contents", "new", "assertState:"]
}),
$globals.ParserForContentTest);

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
}, function($ctx1) {$ctx1.fill(self,"test04ReadBlankWhenReading",{},$globals.ParserForContentTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "test04ReadBlankWhenReading\x0a\x09aParser consumeAllIn: 'a ' readStream.\x0a\x09self assert: aParser contents equals: (OrderedCollection\x0a\x09\x09with: (CompletedText with: 'a')\x0a\x09).\x0a\x09self assertState: 'WaitingForWord'",
referencedClasses: ["OrderedCollection", "CompletedText"],
//>>excludeEnd("ide");
messageSends: ["consumeAllIn:", "readStream", "assert:equals:", "contents", "with:", "assertState:"]
}),
$globals.ParserForContentTest);

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
}, function($ctx1) {$ctx1.fill(self,"test05ReadBlankWhenWaitingForWord",{},$globals.ParserForContentTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "test05ReadBlankWhenWaitingForWord\x0a\x09aParser consumeAllIn: 'a b' readStream.\x0a\x09self assert: aParser contents equals: (OrderedCollection\x0a\x09\x09with: (CompletedText with: 'a b')\x0a\x09).\x0a\x09self assertState: 'ReadingWord'",
referencedClasses: ["OrderedCollection", "CompletedText"],
//>>excludeEnd("ide");
messageSends: ["consumeAllIn:", "readStream", "assert:equals:", "contents", "with:", "assertState:"]
}),
$globals.ParserForContentTest);

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
}, function($ctx1) {$ctx1.fill(self,"test06ParseTextWithSpaces",{text:text},$globals.ParserForContentTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "test06ParseTextWithSpaces\x0a\x09| text |\x0a\x09text := String cr, '   asd   qwerty  ', String tab.\x0a\x09aParser consumeAllIn: text readStream.\x0a\x09self assert: aParser contents equals: (OrderedCollection\x0a\x09\x09with: (CompletedText with: 'asd qwerty')\x0a\x09).\x0a\x09self assertState: 'WaitingForWord'",
referencedClasses: ["String", "OrderedCollection", "CompletedText"],
//>>excludeEnd("ide");
messageSends: [",", "cr", "tab", "consumeAllIn:", "readStream", "assert:equals:", "contents", "with:", "assertState:"]
}),
$globals.ParserForContentTest);

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
}, function($ctx1) {$ctx1.fill(self,"test07InitWordToComplete",{text:text},$globals.ParserForContentTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "test07InitWordToComplete\x0a\x09| text |\x0a\x09text := 'he{'.\x0a\x09text do: [ :c | aParser consume: c asString ].\x0a\x09self assertState: 'ReadingSuffixes'.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["do:", "consume:", "asString", "assertState:"]
}),
$globals.ParserForContentTest);

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
}, function($ctx1) {$ctx1.fill(self,"test08ParseTextWithWordsToComplete",{text:text},$globals.ParserForContentTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "test08ParseTextWithWordsToComplete\x0a\x09| text |\x0a\x09text := 'he{llo}'.\x0a\x09aParser consumeAllIn: text readStream.\x0a\x09self assert: aParser contents equals: (OrderedCollection\x0a\x09\x09with: (WordToComplete withPrefix: 'he' options: #('llo'))\x0a\x09).",
referencedClasses: ["OrderedCollection", "WordToComplete"],
//>>excludeEnd("ide");
messageSends: ["consumeAllIn:", "readStream", "assert:equals:", "contents", "with:", "withPrefix:options:"]
}),
$globals.ParserForContentTest);

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
}, function($ctx1) {$ctx1.fill(self,"test09ParseTextWithWordsToCompleteBetweenText",{text:text},$globals.ParserForContentTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "test09ParseTextWithWordsToCompleteBetweenText\x0a\x09| text |\x0a\x09text := 'pre text he{llo} post text'.\x0a\x09aParser consumeAllIn: text readStream.\x0a\x09self assert: aParser contents equals: (OrderedCollection\x0a\x09\x09with: (CompletedText with: 'pre text')\x0a\x09\x09with: (WordToComplete withPrefix: 'he' options: #('llo'))\x0a\x09\x09with: (CompletedText with: 'post text')).",
referencedClasses: ["OrderedCollection", "CompletedText", "WordToComplete"],
//>>excludeEnd("ide");
messageSends: ["consumeAllIn:", "readStream", "assert:equals:", "contents", "with:with:with:", "with:", "withPrefix:options:"]
}),
$globals.ParserForContentTest);

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
}, function($ctx1) {$ctx1.fill(self,"test10ParseTextWithOneOptionWordsToComplete",{text:text},$globals.ParserForContentTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "test10ParseTextWithOneOptionWordsToComplete\x0a\x09| text |\x0a\x09text := String cr, '   pre  text  1 ', String tab, ' and   he{llo} post.  ', String cr, ' text  anot{her}    '.\x0a\x09aParser consumeAllIn: text readStream.\x0a\x09self assert: aParser contents equals: (OrderedCollection\x0a\x09\x09with: (CompletedText with: 'pre text 1 and')\x0a\x09\x09with: (WordToComplete withPrefix: 'he' options: #('llo'))\x0a\x09\x09with: (CompletedText with: 'post. text')\x0a\x09\x09with: (WordToComplete withPrefix: 'anot' options: #('her'))\x0a\x09).",
referencedClasses: ["String", "OrderedCollection", "CompletedText", "WordToComplete"],
//>>excludeEnd("ide");
messageSends: [",", "cr", "tab", "consumeAllIn:", "readStream", "assert:equals:", "contents", "with:with:with:with:", "with:", "withPrefix:options:"]
}),
$globals.ParserForContentTest);

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
}, function($ctx1) {$ctx1.fill(self,"test11ParseTextWithMoreThenOneOptionWordToComplete",{text:text},$globals.ParserForContentTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "test11ParseTextWithMoreThenOneOptionWordToComplete\x0a\x09| text |\x0a\x09text := 'pre text he{llo,art} post.'.\x0a\x09aParser consumeAllIn: text readStream.\x0a\x09self assert: aParser contents equals: (OrderedCollection\x0a\x09\x09with: (CompletedText with: 'pre text')\x0a\x09\x09with: (WordToComplete withPrefix: 'he' options: #('llo' 'art'))\x0a\x09\x09with: (CompletedText with: 'post.')\x0a\x09).",
referencedClasses: ["OrderedCollection", "CompletedText", "WordToComplete"],
//>>excludeEnd("ide");
messageSends: ["consumeAllIn:", "readStream", "assert:equals:", "contents", "with:with:with:", "with:", "withPrefix:options:"]
}),
$globals.ParserForContentTest);

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
}, function($ctx1) {$ctx1.fill(self,"test12ParseTextWithSpaceInOptions",{text:text},$globals.ParserForContentTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "test12ParseTextWithSpaceInOptions\x0a\x09| text |\x0a\x09text := 'pre text he{  llo  ,  art  } post.'.\x0a\x09aParser consumeAllIn: text readStream.\x0a\x09self assert: aParser contents equals: (OrderedCollection\x0a\x09\x09with: (CompletedText with: 'pre text')\x0a\x09\x09with: (WordToComplete withPrefix: 'he' options: #('llo' 'art'))\x0a\x09\x09with: (CompletedText with: 'post.')\x0a\x09).",
referencedClasses: ["OrderedCollection", "CompletedText", "WordToComplete"],
//>>excludeEnd("ide");
messageSends: ["consumeAllIn:", "readStream", "assert:equals:", "contents", "with:with:with:", "with:", "withPrefix:options:"]
}),
$globals.ParserForContentTest);

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
}, function($ctx1) {$ctx1.fill(self,"test13ParseTextWithManyOptions",{text:text},$globals.ParserForContentTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "test13ParseTextWithManyOptions\x0a\x09| text |\x0a\x09text := 'pre text he{llo, art, r} post.'.\x0a\x09aParser consumeAllIn: text readStream.\x0a\x09self assert: aParser contents equals: (OrderedCollection\x0a\x09\x09with: (CompletedText with: 'pre text')\x0a\x09\x09with: (WordToComplete withPrefix: 'he' options: #('llo' 'art' 'r'))\x0a\x09\x09with: (CompletedText with: 'post.')\x0a\x09).",
referencedClasses: ["OrderedCollection", "CompletedText", "WordToComplete"],
//>>excludeEnd("ide");
messageSends: ["consumeAllIn:", "readStream", "assert:equals:", "contents", "with:with:with:", "with:", "withPrefix:options:"]
}),
$globals.ParserForContentTest);

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
}, function($ctx1) {$ctx1.fill(self,"test14ParseTextWithLineBreaks",{text:text},$globals.ParserForContentTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "test14ParseTextWithLineBreaks\x0a\x09| text |\x0a\x09text := 'some text.', String cr, 'more text'.\x0a\x09aParser consumeAllIn: text readStream.\x0a\x09self assert: aParser contents equals: (OrderedCollection\x0a\x09\x09with: (CompletedText with: 'some text. more text')\x0a\x09).",
referencedClasses: ["String", "OrderedCollection", "CompletedText"],
//>>excludeEnd("ide");
messageSends: [",", "cr", "consumeAllIn:", "readStream", "assert:equals:", "contents", "with:"]
}),
$globals.ParserForContentTest);



$core.addClass('ParserForTitleTest', $globals.TestCase, ['aParser'], 'OndafSimulator-Core-Tests');
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
}, function($ctx1) {$ctx1.fill(self,"setUp",{},$globals.ParserForTitleTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "setUp\x0a\x09^ aParser := CTestParser forTitle",
referencedClasses: ["CTestParser"],
//>>excludeEnd("ide");
messageSends: ["forTitle"]
}),
$globals.ParserForTitleTest);

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
}, function($ctx1) {$ctx1.fill(self,"test01AParserStartsEmtpyAndWaiting",{},$globals.ParserForTitleTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "test01AParserStartsEmtpyAndWaiting\x0a\x09self assert: aParser contents equals: ''.\x0a\x09self assert: aParser state equals: 'Waiting'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["assert:equals:", "contents", "state"]
}),
$globals.ParserForTitleTest);

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
}, function($ctx1) {$ctx1.fill(self,"test02ReadLetterWhenWaiting",{},$globals.ParserForTitleTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "test02ReadLetterWhenWaiting\x0a\x09aParser consume: 'a'.\x0a\x09self assert: aParser contents equals: 'a'.\x0a\x09self assert: aParser state equals: 'ReadingWord'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["consume:", "assert:equals:", "contents", "state"]
}),
$globals.ParserForTitleTest);

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
}, function($ctx1) {$ctx1.fill(self,"test03ReadBlankWhenWaiting",{},$globals.ParserForTitleTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "test03ReadBlankWhenWaiting\x0a\x09aParser consume: ' '.\x0a\x09aParser consume: String cr.\x0a\x09self assert: aParser contents equals: ''.\x0a\x09self assert: aParser state equals: 'Waiting'",
referencedClasses: ["String"],
//>>excludeEnd("ide");
messageSends: ["consume:", "cr", "assert:equals:", "contents", "state"]
}),
$globals.ParserForTitleTest);

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
}, function($ctx1) {$ctx1.fill(self,"test04ReadBlankWhenReading",{},$globals.ParserForTitleTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "test04ReadBlankWhenReading\x0a\x09aParser\x0a\x09\x09consume: 'a';\x0a\x09\x09consume: ' '.\x0a\x09self assert: aParser contents equals: 'a'.\x0a\x09self assert: aParser state equals: 'WaitingForWord'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["consume:", "assert:equals:", "contents", "state"]
}),
$globals.ParserForTitleTest);

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
}, function($ctx1) {$ctx1.fill(self,"test05ReadBlankWhenWaitingForWord",{},$globals.ParserForTitleTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "test05ReadBlankWhenWaitingForWord\x0a\x09aParser consume: 'a';\x0a\x09        consume: ' ';\x0a\x09        consume: 'b'.\x0a\x09self assert: aParser contents equals: 'a b'.\x0a\x09self assert: aParser state equals: 'ReadingWord'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["consume:", "assert:equals:", "contents", "state"]
}),
$globals.ParserForTitleTest);

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
}, function($ctx1) {$ctx1.fill(self,"test06ParseTextWithSpaces",{text:text},$globals.ParserForTitleTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "test06ParseTextWithSpaces\x0a\x09| text |\x0a\x09text := String cr, '   asd   qwerty  ', String tab.\x0a\x09text do: [ :c | aParser consume: c asString ].\x0a\x09self assert: aParser contents equals: 'asd qwerty'.\x0a\x09self assert: aParser state equals: 'WaitingForWord'",
referencedClasses: ["String"],
//>>excludeEnd("ide");
messageSends: [",", "cr", "tab", "do:", "consume:", "asString", "assert:equals:", "contents", "state"]
}),
$globals.ParserForTitleTest);

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
}, function($ctx1) {$ctx1.fill(self,"test07EndInNewLineWhenWaitingForWord",{text:text},$globals.ParserForTitleTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "test07EndInNewLineWhenWaitingForWord\x0a\x09| text |\x0a\x09text := String cr, '   asd   qwerty  ', String tab, String cr, 'more content'.\x0a\x09text do: [ :c | aParser consume: c asString ].\x0a\x09self assert: aParser contents equals: 'asd qwerty'.\x0a\x09self assert: aParser state equals: 'End'",
referencedClasses: ["String"],
//>>excludeEnd("ide");
messageSends: [",", "cr", "tab", "do:", "consume:", "asString", "assert:equals:", "contents", "state"]
}),
$globals.ParserForTitleTest);

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
}, function($ctx1) {$ctx1.fill(self,"test08EndInNewLineWhenReading",{text:text},$globals.ParserForTitleTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "test08EndInNewLineWhenReading\x0a\x09| text |\x0a\x09text := String cr, '   asd   qwerty', String cr, 'more content'.\x0a\x09text do: [ :c | aParser consume: c asString ].\x0a\x09self assert: aParser contents equals: 'asd qwerty'.\x0a\x09self assert: aParser state equals: 'End'",
referencedClasses: ["String"],
//>>excludeEnd("ide");
messageSends: [",", "cr", "do:", "consume:", "asString", "assert:equals:", "contents", "state"]
}),
$globals.ParserForTitleTest);

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
}, function($ctx1) {$ctx1.fill(self,"test09DontKeepReadingIfAtEnd",{text:text,textStream:textStream},$globals.ParserForTitleTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "test09DontKeepReadingIfAtEnd\x0a\x09| text textStream |\x0a\x09text := '123', String cr, 'more content'.\x0a\x09textStream := text readStream.\x0a\x09aParser consumeAllIn: textStream.\x0a\x09self assert: aParser contents equals: '123'.\x0a\x09self assert: aParser state equals: 'End'.\x0a\x09self assert: textStream position equals: 4",
referencedClasses: ["String"],
//>>excludeEnd("ide");
messageSends: [",", "cr", "readStream", "consumeAllIn:", "assert:equals:", "contents", "state", "position"]
}),
$globals.ParserForTitleTest);

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
}, function($ctx1) {$ctx1.fill(self,"test10ReturnWhenStreamEnds",{text:text,textStream:textStream},$globals.ParserForTitleTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "test10ReturnWhenStreamEnds\x0a\x09| text textStream |\x0a\x09text := '123'.\x0a\x09textStream := text readStream.\x0a\x09aParser consumeAllIn: textStream.\x0a\x09self assert: aParser contents equals: '123'.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["readStream", "consumeAllIn:", "assert:equals:", "contents"]
}),
$globals.ParserForTitleTest);

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
}, function($ctx1) {$ctx1.fill(self,"test11ParseTitle",{text:text,textStream:textStream},$globals.ParserForTitleTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "test11ParseTitle\x0a\x09| text textStream |\x0a\x09text := '   This    is  a 3 ', String cr, ' more content'.\x0a\x09textStream := text readStream.\x0a\x09aParser consumeAllIn: textStream.\x0a\x09self assert: aParser contents equals: 'This is a 3'.",
referencedClasses: ["String"],
//>>excludeEnd("ide");
messageSends: [",", "cr", "readStream", "consumeAllIn:", "assert:equals:", "contents"]
}),
$globals.ParserForTitleTest);



$core.addClass('TestPrinter', $globals.Object, ['printedText'], 'OndafSimulator-Core-Tests');
$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'as yet unclassified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true,
//>>excludeEnd("ctx");
($globals.TestPrinter.superclass||$boot.nilAsClass).fn.prototype._initialize.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
self["@printedText"]="";
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.TestPrinter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09printedText := ''",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["initialize"]
}),
$globals.TestPrinter);

$core.addMethod(
$core.method({
selector: "printText:",
protocol: 'as yet unclassified',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self["@printedText"]=$recv($recv(self["@printedText"]).__comma(aString)).__comma(" ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"printText:",{aString:aString},$globals.TestPrinter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "printText: aString \x0a\x09printedText := printedText, aString, ' '",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: [","]
}),
$globals.TestPrinter);

$core.addMethod(
$core.method({
selector: "printTitle:",
protocol: 'as yet unclassified',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv("|".__comma(aString)).__comma("|");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
self._printText_($1);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"printTitle:",{aString:aString},$globals.TestPrinter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "printTitle: aString \x0a\x09self printText: '|', aString, '|'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["printText:", ","]
}),
$globals.TestPrinter);

$core.addMethod(
$core.method({
selector: "printWordToComplete:",
protocol: 'as yet unclassified',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._printText_($recv(aString).__comma("_"));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"printWordToComplete:",{aString:aString},$globals.TestPrinter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "printWordToComplete: aString \x0a\x09self printText: aString, '_'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["printText:", ","]
}),
$globals.TestPrinter);

$core.addMethod(
$core.method({
selector: "printedText",
protocol: 'as yet unclassified',
fn: function (){
var self=this;
return self["@printedText"];

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "printedText\x0a\x09^ printedText",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.TestPrinter);


});

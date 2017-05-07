define(["amber/boot", "amber_core/Kernel-Objects", "amber_core/SUnit"], function($boot){"use strict";
if(!$boot.nilAsReceiver)$boot.nilAsReceiver=$boot.nil;
if(!("nilAsValue" in $boot))$boot.nilAsValue=$boot.nilAsReceiver;
var $core=$boot.api,nil=$boot.nilAsValue,$nil=$boot.nilAsReceiver,$recv=$boot.asReceiver,$globals=$boot.globals;
if(!$boot.nilAsClass)$boot.nilAsClass=$boot.dnu;
$core.addPackage("OndafSimulator-Core-Tests");
$core.packages["OndafSimulator-Core-Tests"].innerEval = function (expr) { return eval(expr); };
$core.packages["OndafSimulator-Core-Tests"].transport = {"type":"amd","amdNamespace":"amber-ondafsimulator"};

$core.addClass("ExamCreator", $globals.Object, [], "OndafSimulator-Core-Tests");
$core.addMethod(
$core.method({
selector: "examWithText:",
protocol: "as yet unclassified",
fn: function (text1){
var self=this,$self=this;
var examDesigner;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
examDesigner=$recv($globals.ExamDesigner)._new();
$recv(examDesigner)._considerText_(text1);
return $recv(examDesigner)._designExam();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"examWithText:",{text1:text1,examDesigner:examDesigner},$globals.ExamCreator)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["text1"],
source: "examWithText: text1\x0a\x09| examDesigner |\x0a\x09examDesigner := ExamDesigner new.\x0a\x09examDesigner considerText: text1.\x0a\x09^ examDesigner designExam.",
referencedClasses: ["ExamDesigner"],
//>>excludeEnd("ide");
messageSends: ["new", "considerText:", "designExam"]
}),
$globals.ExamCreator);

$core.addMethod(
$core.method({
selector: "examWithText:and:",
protocol: "as yet unclassified",
fn: function (text1,text2){
var self=this,$self=this;
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
return $recv(examDesigner)._designExam();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"examWithText:and:",{text1:text1,text2:text2,examDesigner:examDesigner},$globals.ExamCreator)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["text1", "text2"],
source: "examWithText: text1 and: text2 \x0a\x09| examDesigner |\x0a\x09examDesigner := ExamDesigner new.\x0a\x09examDesigner considerText: text1.\x0a\x09examDesigner considerText: text2.\x0a\x09^ examDesigner designExam.",
referencedClasses: ["ExamDesigner"],
//>>excludeEnd("ide");
messageSends: ["new", "considerText:", "designExam"]
}),
$globals.ExamCreator);



$core.addClass("ExamDesignerTest", $globals.TestCase, ["theExamDesigner"], "OndafSimulator-Core-Tests");
$core.addMethod(
$core.method({
selector: "setUp",
protocol: "tests",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self["@theExamDesigner"]=$recv($globals.ExamDesigner)._new();
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
selector: "test01DesignExamWithOneText",
protocol: "tests",
fn: function (){
var self=this,$self=this;
var anExam;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
$1=$self["@theExamDesigner"];
$2=$recv("Title".__comma($recv($globals.String)._lf())).__comma("Content");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
$recv($1)._considerText_($2);
anExam=$recv($self["@theExamDesigner"])._designExam();
$self._assert_equals_($recv(anExam)._numberOfTexts(),(1));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"test01DesignExamWithOneText",{anExam:anExam},$globals.ExamDesignerTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "test01DesignExamWithOneText\x0a\x09| anExam |\x0a\x09theExamDesigner considerText: 'Title', String lf, 'Content'.\x0a\x09anExam := theExamDesigner designExam.\x0a\x09self assert: anExam numberOfTexts equals: 1.",
referencedClasses: ["String"],
//>>excludeEnd("ide");
messageSends: ["considerText:", ",", "lf", "designExam", "assert:equals:", "numberOfTexts"]
}),
$globals.ExamDesignerTest);

$core.addMethod(
$core.method({
selector: "test02DesignExamWithMultipleTexts",
protocol: "tests",
fn: function (){
var self=this,$self=this;
var anExam;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$4,$3,$2,$5,$6;
$1=$self["@theExamDesigner"];
$4=$recv($globals.String)._lf();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["lf"]=1;
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
$5=$self["@theExamDesigner"];
$6=$recv("Title B".__comma($recv($globals.String)._lf())).__comma("Content 2");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=3;
//>>excludeEnd("ctx");
$recv($5)._considerText_($6);
anExam=$recv($self["@theExamDesigner"])._designExam();
$self._assert_equals_($recv(anExam)._numberOfTexts(),(2));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"test02DesignExamWithMultipleTexts",{anExam:anExam},$globals.ExamDesignerTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "test02DesignExamWithMultipleTexts\x0a\x09| anExam |\x0a\x09theExamDesigner considerText: 'Title A', String lf, 'Content 1'.\x0a\x09theExamDesigner considerText: 'Title B', String lf, 'Content 2'.\x0a\x09anExam := theExamDesigner designExam.\x0a\x09self assert: anExam numberOfTexts equals: 2.",
referencedClasses: ["String"],
//>>excludeEnd("ide");
messageSends: ["considerText:", ",", "lf", "designExam", "assert:equals:", "numberOfTexts"]
}),
$globals.ExamDesignerTest);

$core.addMethod(
$core.method({
selector: "test03InformTheTextTitlesAsTheyAreConsidered",
protocol: "tests",
fn: function (){
var self=this,$self=this;
var titles;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$4,$3,$2,$5,$6;
titles=$recv($globals.OrderedCollection)._new();
$recv($self["@theExamDesigner"])._informProgressTo_((function(title){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(titles)._add_(title);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({title:title},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$1=$self["@theExamDesigner"];
$4=$recv($globals.String)._lf();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["lf"]=1;
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
$5=$self["@theExamDesigner"];
$6=$recv("Title B".__comma($recv($globals.String)._lf())).__comma("Content 2");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=3;
//>>excludeEnd("ctx");
$recv($5)._considerText_($6);
$self._assert_equals_($recv(titles)._asArray(),["Title A", "Title B"]);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"test03InformTheTextTitlesAsTheyAreConsidered",{titles:titles},$globals.ExamDesignerTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "test03InformTheTextTitlesAsTheyAreConsidered\x0a\x09| titles |\x0a\x09titles := OrderedCollection new.\x0a\x09\x0a\x09theExamDesigner informProgressTo: [ :title | titles add: title ].\x0a\x09theExamDesigner considerText: 'Title A', String lf, 'Content 1'.\x0a\x09theExamDesigner considerText: 'Title B', String lf, 'Content 2'.\x0a\x09\x0a\x09self assert: titles asArray equals: #('Title A' 'Title B').",
referencedClasses: ["OrderedCollection", "String"],
//>>excludeEnd("ide");
messageSends: ["new", "informProgressTo:", "add:", "considerText:", ",", "lf", "assert:equals:", "asArray"]
}),
$globals.ExamDesignerTest);



$core.addClass("ExamPrinterTest", $globals.TestCase, ["examCreator", "theExam", "printer", "copies"], "OndafSimulator-Core-Tests");
$core.addMethod(
$core.method({
selector: "givenExamWithText:",
protocol: "given",
fn: function (text1){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self["@theExam"]=$recv($self["@examCreator"])._examWithText_(text1);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"givenExamWithText:",{text1:text1},$globals.ExamPrinterTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["text1"],
source: "givenExamWithText: text1\x0a\x09theExam := examCreator examWithText: text1",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["examWithText:"]
}),
$globals.ExamPrinterTest);

$core.addMethod(
$core.method({
selector: "givenExamWithText:and:",
protocol: "given",
fn: function (text1,text2){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self["@theExam"]=$recv($self["@examCreator"])._examWithText_and_(text1,text2);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"givenExamWithText:and:",{text1:text1,text2:text2},$globals.ExamPrinterTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["text1", "text2"],
source: "givenExamWithText: text1 and: text2 \x0a\x09theExam := examCreator examWithText: text1 and: text2",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["examWithText:and:"]
}),
$globals.ExamPrinterTest);

$core.addMethod(
$core.method({
selector: "printedText",
protocol: "private",
fn: function (){
var self=this,$self=this;
var allText;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1;
allText=$recv($recv($self["@copies"])._collect_("printedText"))._reduce_((function(a,b){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(a).__comma(b);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx[","]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({a:a,b:b},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$2=$recv("Texts: ".__comma($recv($recv($self["@copies"])._size())._asString())).__comma(" ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=3;
//>>excludeEnd("ctx");
$1=$recv($2).__comma(allText);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=2;
//>>excludeEnd("ctx");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"printedText",{allText:allText},$globals.ExamPrinterTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "printedText\x0a\x09| allText |\x0a\x09allText := (copies collect: #printedText) reduce: [ :a :b | a, b ].\x0a\x09^ 'Texts: ', copies size asString, ' ', allText.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["reduce:", "collect:", ",", "asString", "size"]
}),
$globals.ExamPrinterTest);

$core.addMethod(
$core.method({
selector: "setUp",
protocol: "running",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self["@examCreator"]=$recv($globals.ExamCreator)._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=1;
//>>excludeEnd("ctx");
$self["@printer"]=$recv($globals.CTestPrinter)._newWithTray_($recv($globals.TestTray)._new());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"setUp",{},$globals.ExamPrinterTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "setUp\x0a\x09examCreator := ExamCreator new.\x0a\x09printer := CTestPrinter newWithTray: TestTray new",
referencedClasses: ["ExamCreator", "CTestPrinter", "TestTray"],
//>>excludeEnd("ide");
messageSends: ["new", "newWithTray:"]
}),
$globals.ExamPrinterTest);

$core.addMethod(
$core.method({
selector: "test01CopyExamOnPrinter",
protocol: "tests",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv("Title A".__comma($recv($globals.String)._lf())).__comma("And the text said: he{llo} wor{ld}.");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
$self._givenExamWithText_($1);
$self["@copies"]=$recv($self["@printer"])._print_($self["@theExam"]);
$self._assert_equals_($recv($self["@copies"])._size(),(1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$self._assert_equals_($self._printedText(),"Texts: 1 |Title A (30s)| And the text said: he_ wor_ . ");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"test01CopyExamOnPrinter",{},$globals.ExamPrinterTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "test01CopyExamOnPrinter\x0a\x09self givenExamWithText: 'Title A', String lf, 'And the text said: he{llo} wor{ld}.'.\x0a\x09\x0a\x09copies := printer print: theExam.\x0a\x09\x0a\x09self assert: copies size equals: 1.\x0a\x09self assert: self printedText equals: 'Texts: 1 |Title A (30s)| And the text said: he_ wor_ . '.",
referencedClasses: ["String"],
//>>excludeEnd("ide");
messageSends: ["givenExamWithText:", ",", "lf", "print:", "assert:equals:", "size", "printedText"]
}),
$globals.ExamPrinterTest);

$core.addMethod(
$core.method({
selector: "test02CopyExamWithMultipleTexts",
protocol: "tests",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $3,$2,$1,$4;
$3=$recv($globals.String)._lf();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["lf"]=1;
//>>excludeEnd("ctx");
$2="Title A".__comma($3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=2;
//>>excludeEnd("ctx");
$1=$recv($2).__comma("he{llo} wor{ld}");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
$4=$recv("Title B".__comma($recv($globals.String)._lf())).__comma("loca{tion}");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=3;
//>>excludeEnd("ctx");
$self._givenExamWithText_and_($1,$4);
$self["@copies"]=$recv($self["@printer"])._print_($self["@theExam"]);
$self._assert_equals_($self._printedText(),"Texts: 2 |Title A (30s)| he_ wor_ |Title B (15s)| loca_ ");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"test02CopyExamWithMultipleTexts",{},$globals.ExamPrinterTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "test02CopyExamWithMultipleTexts\x0a\x09self givenExamWithText: 'Title A', String lf, 'he{llo} wor{ld}'\x0a\x09                   and: 'Title B', String lf, 'loca{tion}'.\x0a\x09\x0a\x09copies := printer print: theExam.\x0a\x09\x0a\x09self assert: self printedText equals: 'Texts: 2 |Title A (30s)| he_ wor_ |Title B (15s)| loca_ '.",
referencedClasses: ["String"],
//>>excludeEnd("ide");
messageSends: ["givenExamWithText:and:", ",", "lf", "print:", "assert:equals:", "printedText"]
}),
$globals.ExamPrinterTest);



$core.addClass("ExamTest", $globals.TestCase, ["theExam", "examCreator"], "OndafSimulator-Core-Tests");
$core.addMethod(
$core.method({
selector: "givenExamWithText:",
protocol: "given",
fn: function (text1){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self["@theExam"]=$recv($self["@examCreator"])._examWithText_(text1);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"givenExamWithText:",{text1:text1},$globals.ExamTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["text1"],
source: "givenExamWithText: text1\x0a\x09theExam := examCreator examWithText: text1",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["examWithText:"]
}),
$globals.ExamTest);

$core.addMethod(
$core.method({
selector: "givenExamWithText:and:",
protocol: "given",
fn: function (text1,text2){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self["@theExam"]=$recv($self["@examCreator"])._examWithText_and_(text1,text2);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"givenExamWithText:and:",{text1:text1,text2:text2},$globals.ExamTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["text1", "text2"],
source: "givenExamWithText: text1 and: text2 \x0a\x09theExam := examCreator examWithText: text1 and: text2",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["examWithText:and:"]
}),
$globals.ExamTest);

$core.addMethod(
$core.method({
selector: "setUp",
protocol: "running",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self["@examCreator"]=$recv($globals.ExamCreator)._new();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"setUp",{},$globals.ExamTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "setUp\x0a\x09examCreator := ExamCreator new.",
referencedClasses: ["ExamCreator"],
//>>excludeEnd("ide");
messageSends: ["new"]
}),
$globals.ExamTest);

$core.addMethod(
$core.method({
selector: "test01EvaluateACorrectSubmission",
protocol: "tests",
fn: function (){
var self=this,$self=this;
var aSubmission,aResult;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv("Title A".__comma($recv($globals.String)._lf())).__comma("And the text said: he{llo} wor{ld}.");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
$self._givenExamWithText_($1);
aSubmission=["llo", "ld"];
aResult=$recv($self["@theExam"])._evaluate_(aSubmission);
$self._assert_equals_($recv(aResult)._individualResults(),[true, true]);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"test01EvaluateACorrectSubmission",{aSubmission:aSubmission,aResult:aResult},$globals.ExamTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "test01EvaluateACorrectSubmission\x0a\x09| aSubmission aResult |\x0a\x09self givenExamWithText: 'Title A', String lf, 'And the text said: he{llo} wor{ld}.'.\x0a\x09\x0a\x09aSubmission := #('llo' 'ld').\x0a\x09aResult := theExam evaluate: aSubmission.\x0a\x09\x0a\x09self assert: aResult individualResults equals: #(true true).",
referencedClasses: ["String"],
//>>excludeEnd("ide");
messageSends: ["givenExamWithText:", ",", "lf", "evaluate:", "assert:equals:", "individualResults"]
}),
$globals.ExamTest);

$core.addMethod(
$core.method({
selector: "test02EvaluateAnIncorrectSubmission",
protocol: "tests",
fn: function (){
var self=this,$self=this;
var aSubmission,aResult;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv("Title A".__comma($recv($globals.String)._lf())).__comma("And the text said: he{llo} wor{ld}.");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
$self._givenExamWithText_($1);
aSubmission=["wrong", "answer"];
aResult=$recv($self["@theExam"])._evaluate_(aSubmission);
$self._assert_equals_($recv(aResult)._individualResults(),[false, false]);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"test02EvaluateAnIncorrectSubmission",{aSubmission:aSubmission,aResult:aResult},$globals.ExamTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "test02EvaluateAnIncorrectSubmission\x0a\x09| aSubmission aResult |\x0a\x09self givenExamWithText: 'Title A', String lf, 'And the text said: he{llo} wor{ld}.'.\x0a\x09\x0a\x09aSubmission := #('wrong' 'answer').\x0a\x09aResult := theExam evaluate: aSubmission.\x0a\x09\x0a\x09self assert: aResult individualResults equals: #(false false).",
referencedClasses: ["String"],
//>>excludeEnd("ide");
messageSends: ["givenExamWithText:", ",", "lf", "evaluate:", "assert:equals:", "individualResults"]
}),
$globals.ExamTest);

$core.addMethod(
$core.method({
selector: "test03EvaluateAMixedSubmission1",
protocol: "tests",
fn: function (){
var self=this,$self=this;
var aSubmission,aResult;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv("Title A".__comma($recv($globals.String)._lf())).__comma("And the text said: he{llo} wor{ld}.");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
$self._givenExamWithText_($1);
aSubmission=["llo"];
aResult=$recv($self["@theExam"])._evaluate_(aSubmission);
$self._assert_equals_($recv(aResult)._individualResults(),[true, false]);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"test03EvaluateAMixedSubmission1",{aSubmission:aSubmission,aResult:aResult},$globals.ExamTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "test03EvaluateAMixedSubmission1\x0a\x09| aSubmission aResult |\x0a\x09self givenExamWithText: 'Title A', String lf, 'And the text said: he{llo} wor{ld}.'.\x0a\x09\x0a\x09aSubmission := #('llo').\x0a\x09aResult := theExam evaluate: aSubmission.\x0a\x09\x0a\x09self assert: aResult individualResults equals: #(true false).",
referencedClasses: ["String"],
//>>excludeEnd("ide");
messageSends: ["givenExamWithText:", ",", "lf", "evaluate:", "assert:equals:", "individualResults"]
}),
$globals.ExamTest);

$core.addMethod(
$core.method({
selector: "test04EvaluateAMixedSubmission2",
protocol: "tests",
fn: function (){
var self=this,$self=this;
var aSubmission,aResult;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv("Title A".__comma($recv($globals.String)._lf())).__comma("And the text said: he{llo} wor{ld}.");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
$self._givenExamWithText_($1);
aSubmission=["wrong", "ld"];
aResult=$recv($self["@theExam"])._evaluate_(aSubmission);
$self._assert_equals_($recv(aResult)._individualResults(),[false, true]);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"test04EvaluateAMixedSubmission2",{aSubmission:aSubmission,aResult:aResult},$globals.ExamTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "test04EvaluateAMixedSubmission2\x0a\x09| aSubmission aResult |\x0a\x09self givenExamWithText: 'Title A', String lf, 'And the text said: he{llo} wor{ld}.'.\x0a\x09\x0a\x09aSubmission := #('wrong' 'ld').\x0a\x09aResult := theExam evaluate: aSubmission.\x0a\x09\x0a\x09self assert: aResult individualResults equals: #(false true).",
referencedClasses: ["String"],
//>>excludeEnd("ide");
messageSends: ["givenExamWithText:", ",", "lf", "evaluate:", "assert:equals:", "individualResults"]
}),
$globals.ExamTest);

$core.addMethod(
$core.method({
selector: "test05EvaluateTheSubmissionOfMultipleTexts",
protocol: "tests",
fn: function (){
var self=this,$self=this;
var aSubmission,aResult;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $3,$2,$1,$4;
$3=$recv($globals.String)._lf();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["lf"]=1;
//>>excludeEnd("ctx");
$2="Title A".__comma($3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=2;
//>>excludeEnd("ctx");
$1=$recv($2).__comma("he{llo} wor{ld}");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
$4=$recv("Title B".__comma($recv($globals.String)._lf())).__comma("loca{tion}");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=3;
//>>excludeEnd("ctx");
$self._givenExamWithText_and_($1,$4);
aSubmission=["llo", "ld", "tion"];
aResult=$recv($self["@theExam"])._evaluate_(aSubmission);
$self._assert_equals_($recv(aResult)._individualResults(),[true, true, true]);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"test05EvaluateTheSubmissionOfMultipleTexts",{aSubmission:aSubmission,aResult:aResult},$globals.ExamTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "test05EvaluateTheSubmissionOfMultipleTexts\x0a\x09| aSubmission aResult |\x0a\x09self givenExamWithText: 'Title A', String lf, 'he{llo} wor{ld}'\x0a\x09                   and: 'Title B', String lf, 'loca{tion}'.\x0a\x09\x0a\x09aSubmission := #('llo' 'ld' 'tion').\x0a\x09aResult := theExam evaluate: aSubmission.\x0a\x09\x0a\x09self assert: aResult individualResults equals: #(true true true).",
referencedClasses: ["String"],
//>>excludeEnd("ide");
messageSends: ["givenExamWithText:and:", ",", "lf", "evaluate:", "assert:equals:", "individualResults"]
}),
$globals.ExamTest);

$core.addMethod(
$core.method({
selector: "test06CalculatePercentage",
protocol: "tests",
fn: function (){
var self=this,$self=this;
var aSubmission,aResult;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv("Title A".__comma($recv($globals.String)._lf())).__comma("And the text said: he{llo} wor{ld}.");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
$self._givenExamWithText_($1);
aSubmission=["wrong", "ld"];
aResult=$recv($self["@theExam"])._evaluate_(aSubmission);
$self._assert_equals_($recv(aResult)._percentage(),(50));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"test06CalculatePercentage",{aSubmission:aSubmission,aResult:aResult},$globals.ExamTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "test06CalculatePercentage\x0a\x09| aSubmission aResult |\x0a\x09self givenExamWithText: 'Title A', String lf, 'And the text said: he{llo} wor{ld}.'.\x0a\x09\x0a\x09aSubmission := #('wrong' 'ld').\x0a\x09aResult := theExam evaluate: aSubmission.\x0a\x09\x0a\x09self assert: aResult percentage equals: 50.",
referencedClasses: ["String"],
//>>excludeEnd("ide");
messageSends: ["givenExamWithText:", ",", "lf", "evaluate:", "assert:equals:", "percentage"]
}),
$globals.ExamTest);

$core.addMethod(
$core.method({
selector: "test07RoundPercentageToTwoDecimals",
protocol: "tests",
fn: function (){
var self=this,$self=this;
var aSubmission,aResult;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv("Title A".__comma($recv($globals.String)._lf())).__comma("And the text said: he{llo} wor{ld}. Cor{rect}");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
$self._givenExamWithText_($1);
aSubmission=["wrong", "ld", "rect"];
aResult=$recv($self["@theExam"])._evaluate_(aSubmission);
$self._assert_equals_($recv(aResult)._percentage(),(66.67));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"test07RoundPercentageToTwoDecimals",{aSubmission:aSubmission,aResult:aResult},$globals.ExamTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "test07RoundPercentageToTwoDecimals\x0a\x09| aSubmission aResult |\x0a\x09self givenExamWithText: 'Title A', String lf, 'And the text said: he{llo} wor{ld}. Cor{rect}'.\x0a\x09\x0a\x09aSubmission := #('wrong' 'ld' 'rect').\x0a\x09aResult := theExam evaluate: aSubmission.\x0a\x09\x0a\x09self assert: aResult percentage equals: 66.67.",
referencedClasses: ["String"],
//>>excludeEnd("ide");
messageSends: ["givenExamWithText:", ",", "lf", "evaluate:", "assert:equals:", "percentage"]
}),
$globals.ExamTest);

$core.addMethod(
$core.method({
selector: "test08DetermineLevelForSubmission",
protocol: "tests",
fn: function (){
var self=this,$self=this;
var aSubmission,aResult;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv("Title A".__comma($recv($globals.String)._lf())).__comma("And the text said: he{llo} wor{ld}. Cor{rect}");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
$self._givenExamWithText_($1);
aSubmission=["wrong", "ld", "rect"];
aResult=$recv($self["@theExam"])._evaluate_(aSubmission);
$self._assert_equals_($recv(aResult)._level(),"B1");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"test08DetermineLevelForSubmission",{aSubmission:aSubmission,aResult:aResult},$globals.ExamTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "test08DetermineLevelForSubmission\x0a\x09| aSubmission aResult |\x0a\x09self givenExamWithText: 'Title A', String lf, 'And the text said: he{llo} wor{ld}. Cor{rect}'.\x0a\x09\x0a\x09aSubmission := #('wrong' 'ld' 'rect').\x0a\x09aResult := theExam evaluate: aSubmission.\x0a\x09\x0a\x09self assert: aResult level equals: 'B1'.",
referencedClasses: ["String"],
//>>excludeEnd("ide");
messageSends: ["givenExamWithText:", ",", "lf", "evaluate:", "assert:equals:", "level"]
}),
$globals.ExamTest);

$core.addMethod(
$core.method({
selector: "test09DetermineScore",
protocol: "tests",
fn: function (){
var self=this,$self=this;
var aSubmission,aResult;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv("Title A".__comma($recv($globals.String)._lf())).__comma("And the text said: he{llo} wor{ld}. Cor{rect}");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
$self._givenExamWithText_($1);
aSubmission=["wrong", "ld", "rect"];
aResult=$recv($self["@theExam"])._evaluate_(aSubmission);
$self._assert_equals_($recv(aResult)._score(),(2));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"test09DetermineScore",{aSubmission:aSubmission,aResult:aResult},$globals.ExamTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "test09DetermineScore\x0a\x09| aSubmission aResult |\x0a\x09self givenExamWithText: 'Title A', String lf, 'And the text said: he{llo} wor{ld}. Cor{rect}'.\x0a\x09\x0a\x09aSubmission := #('wrong' 'ld' 'rect').\x0a\x09aResult := theExam evaluate: aSubmission.\x0a\x09\x0a\x09self assert: aResult score equals: 2.",
referencedClasses: ["String"],
//>>excludeEnd("ide");
messageSends: ["givenExamWithText:", ",", "lf", "evaluate:", "assert:equals:", "score"]
}),
$globals.ExamTest);

$core.addMethod(
$core.method({
selector: "test10DetermineMaximumScore",
protocol: "tests",
fn: function (){
var self=this,$self=this;
var aSubmission,aResult;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv("Title A".__comma($recv($globals.String)._lf())).__comma("And the text said: he{llo} wor{ld}. Cor{rect}");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
$self._givenExamWithText_($1);
aSubmission=["wrong", "ld", "rect"];
aResult=$recv($self["@theExam"])._evaluate_(aSubmission);
$self._assert_equals_($recv(aResult)._maxScore(),(3));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"test10DetermineMaximumScore",{aSubmission:aSubmission,aResult:aResult},$globals.ExamTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "test10DetermineMaximumScore\x0a\x09| aSubmission aResult |\x0a\x09self givenExamWithText: 'Title A', String lf, 'And the text said: he{llo} wor{ld}. Cor{rect}'.\x0a\x09\x0a\x09aSubmission := #('wrong' 'ld' 'rect').\x0a\x09aResult := theExam evaluate: aSubmission.\x0a\x09\x0a\x09self assert: aResult maxScore equals: 3.",
referencedClasses: ["String"],
//>>excludeEnd("ide");
messageSends: ["givenExamWithText:", ",", "lf", "evaluate:", "assert:equals:", "maxScore"]
}),
$globals.ExamTest);

$core.addMethod(
$core.method({
selector: "test11",
protocol: "tests",
fn: function (){
var self=this,$self=this;
var spySubmissions,spyView,aResult;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv("Title A".__comma($recv($globals.String)._lf())).__comma("And the text said: he{llo} wor{ld}. Cor{rect}");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
$self._givenExamWithText_($1);
spySubmissions=$recv($globals.Array)._with_($recv($globals.SpySubmission)._newWith_(["wrong", "ld", "rect"]));
spyView=$recv($globals.SpyResultsView)._new();
aResult=$recv($self["@theExam"])._evaluate_on_(spySubmissions,spyView);
$recv(aResult)._giveToStudent();
$self._assert_equals_($recv(spyView)._score(),(2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$self._assert_equals_($recv(spyView)._totalScore(),(3));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=2;
//>>excludeEnd("ctx");
$self._assert_equals_($recv(spyView)._percentage(),(66.67));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=3;
//>>excludeEnd("ctx");
$self._assert_equals_($recv(spyView)._level(),"B1");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=4;
//>>excludeEnd("ctx");
$self._assert_equals_($recv($recv(spySubmissions)._first())._results(),[false, true, true]);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"test11",{spySubmissions:spySubmissions,spyView:spyView,aResult:aResult},$globals.ExamTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "test11\x0a\x09| spySubmissions spyView aResult |\x0a\x09self givenExamWithText: 'Title A', String lf, 'And the text said: he{llo} wor{ld}. Cor{rect}'.\x0a\x09\x0a\x09spySubmissions := Array with: (SpySubmission newWith: #('wrong' 'ld' 'rect')).\x0a\x09spyView := SpyResultsView new.\x0a\x09\x0a\x09aResult := theExam evaluate: spySubmissions on: spyView.\x0a\x09aResult giveToStudent.\x0a\x09\x0a\x09self assert: spyView score equals: 2.\x0a\x09self assert: spyView totalScore equals: 3.\x0a\x09self assert: spyView percentage equals: 66.67.\x0a\x09self assert: spyView level equals: 'B1'.\x0a\x09self assert: (spySubmissions first) results equals: #(false true true).",
referencedClasses: ["String", "Array", "SpySubmission", "SpyResultsView"],
//>>excludeEnd("ide");
messageSends: ["givenExamWithText:", ",", "lf", "with:", "newWith:", "new", "evaluate:on:", "giveToStudent", "assert:equals:", "score", "totalScore", "percentage", "level", "results", "first"]
}),
$globals.ExamTest);



$core.addClass("InterpreterText", $globals.TestCase, [], "OndafSimulator-Core-Tests");
$core.addMethod(
$core.method({
selector: "test01InterpretEmptyText",
protocol: "tests",
fn: function (){
var self=this,$self=this;
var anInterpreter,aText;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
anInterpreter=$recv($globals.CTestInterpreter)._new();
aText=$recv(anInterpreter)._interpretText_("");
$self._assert_equals_($recv(aText)._title(),"");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"test01InterpretEmptyText",{anInterpreter:anInterpreter,aText:aText},$globals.InterpreterText)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "test01InterpretEmptyText\x0a\x09| anInterpreter aText |\x0a\x09anInterpreter := CTestInterpreter new.\x0a\x09aText := anInterpreter interpretText: ''.\x0a\x09self assert: aText title equals: ''.",
referencedClasses: ["CTestInterpreter"],
//>>excludeEnd("ide");
messageSends: ["new", "interpretText:", "assert:equals:", "title"]
}),
$globals.InterpreterText);

$core.addMethod(
$core.method({
selector: "test02InterpretTextTitle",
protocol: "tests",
fn: function (){
var self=this,$self=this;
var anInterpreter,aText;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
anInterpreter=$recv($globals.CTestInterpreter)._new();
aText=$recv(anInterpreter)._interpretText_("The Title");
$self._assert_equals_($recv(aText)._title(),"The Title");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"test02InterpretTextTitle",{anInterpreter:anInterpreter,aText:aText},$globals.InterpreterText)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "test02InterpretTextTitle\x0a\x09| anInterpreter aText |\x0a\x09anInterpreter := CTestInterpreter new.\x0a\x09aText := anInterpreter interpretText: 'The Title'.\x0a\x09self assert: aText title equals: 'The Title'.",
referencedClasses: ["CTestInterpreter"],
//>>excludeEnd("ide");
messageSends: ["new", "interpretText:", "assert:equals:", "title"]
}),
$globals.InterpreterText);

$core.addMethod(
$core.method({
selector: "test03TrimSpacesOfTextTitle",
protocol: "tests",
fn: function (){
var self=this,$self=this;
var anInterpreter,aText;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
anInterpreter=$recv($globals.CTestInterpreter)._new();
aText=$recv(anInterpreter)._interpretText_("    The Title   ");
$self._assert_equals_($recv(aText)._title(),"The Title");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"test03TrimSpacesOfTextTitle",{anInterpreter:anInterpreter,aText:aText},$globals.InterpreterText)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "test03TrimSpacesOfTextTitle\x0a\x09| anInterpreter aText |\x0a\x09anInterpreter := CTestInterpreter new.\x0a\x09aText := anInterpreter interpretText: '    The Title   '.\x0a\x09self assert: aText title equals: 'The Title'.",
referencedClasses: ["CTestInterpreter"],
//>>excludeEnd("ide");
messageSends: ["new", "interpretText:", "assert:equals:", "title"]
}),
$globals.InterpreterText);

$core.addMethod(
$core.method({
selector: "test04IgnoreLineBreaksBeforeAndAfterTitle",
protocol: "tests",
fn: function (){
var self=this,$self=this;
var anInterpreter,aText;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$4,$3,$2;
anInterpreter=$recv($globals.CTestInterpreter)._new();
$1=anInterpreter;
$4=$recv($globals.String)._lf();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["lf"]=1;
//>>excludeEnd("ctx");
$3=$recv($4).__comma(" The Title ");
$2=$recv($3).__comma($recv($globals.String)._lf());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
aText=$recv($1)._interpretText_($2);
$self._assert_equals_($recv(aText)._title(),"The Title");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"test04IgnoreLineBreaksBeforeAndAfterTitle",{anInterpreter:anInterpreter,aText:aText},$globals.InterpreterText)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "test04IgnoreLineBreaksBeforeAndAfterTitle\x0a\x09| anInterpreter aText |\x0a\x09anInterpreter := CTestInterpreter new.\x0a\x09aText := anInterpreter interpretText: String lf, ' The Title ', String lf.\x0a\x09self assert: aText title equals: 'The Title'.",
referencedClasses: ["CTestInterpreter", "String"],
//>>excludeEnd("ide");
messageSends: ["new", "interpretText:", ",", "lf", "assert:equals:", "title"]
}),
$globals.InterpreterText);

$core.addMethod(
$core.method({
selector: "test05InterpretTextContentWithOneLine",
protocol: "tests",
fn: function (){
var self=this,$self=this;
var anInterpreter,aText;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
anInterpreter=$recv($globals.CTestInterpreter)._new();
$1=anInterpreter;
$2=$recv("The Title".__comma($recv($globals.String)._lf())).__comma("The content");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
aText=$recv($1)._interpretText_($2);
$self._assert_equals_($recv(aText)._title(),"The Title");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$self._assert_equals_($recv(aText)._contentAsString(),"The content");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"test05InterpretTextContentWithOneLine",{anInterpreter:anInterpreter,aText:aText},$globals.InterpreterText)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "test05InterpretTextContentWithOneLine\x0a\x09| anInterpreter aText |\x0a\x09anInterpreter := CTestInterpreter new.\x0a\x09aText := anInterpreter interpretText: 'The Title', String lf, 'The content'.\x0a\x09self assert: aText title equals: 'The Title'.\x0a\x09self assert: aText contentAsString equals: 'The content'",
referencedClasses: ["CTestInterpreter", "String"],
//>>excludeEnd("ide");
messageSends: ["new", "interpretText:", ",", "lf", "assert:equals:", "title", "contentAsString"]
}),
$globals.InterpreterText);

$core.addMethod(
$core.method({
selector: "test06TrimTextContent",
protocol: "tests",
fn: function (){
var self=this,$self=this;
var anInterpreter,aText;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
anInterpreter=$recv($globals.CTestInterpreter)._new();
$1=anInterpreter;
$2=$recv("The Title".__comma($recv($globals.String)._lf())).__comma("   The content  ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
aText=$recv($1)._interpretText_($2);
$self._assert_equals_($recv(aText)._title(),"The Title");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$self._assert_equals_($recv(aText)._contentAsString(),"The content");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"test06TrimTextContent",{anInterpreter:anInterpreter,aText:aText},$globals.InterpreterText)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "test06TrimTextContent\x0a\x09| anInterpreter aText |\x0a\x09anInterpreter := CTestInterpreter new.\x0a\x09aText := anInterpreter interpretText: 'The Title', String lf, '   The content  '.\x0a\x09self assert: aText title equals: 'The Title'.\x0a\x09self assert: aText contentAsString equals: 'The content'",
referencedClasses: ["CTestInterpreter", "String"],
//>>excludeEnd("ide");
messageSends: ["new", "interpretText:", ",", "lf", "assert:equals:", "title", "contentAsString"]
}),
$globals.InterpreterText);

$core.addMethod(
$core.method({
selector: "test07InterpretTextContentWithMultipleLines",
protocol: "tests",
fn: function (){
var self=this,$self=this;
var anInterpreter,aText,stringText;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $4,$3,$2,$1;
anInterpreter=$recv($globals.CTestInterpreter)._new();
$4=$recv($globals.String)._lf();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["lf"]=1;
//>>excludeEnd("ctx");
$3="The Title".__comma($4);
$2=$recv($3).__comma("The content");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=3;
//>>excludeEnd("ctx");
$1=$recv($2).__comma($recv($globals.String)._lf());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=2;
//>>excludeEnd("ctx");
stringText=$recv($1).__comma("More content");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
aText=$recv(anInterpreter)._interpretText_(stringText);
$self._assert_equals_($recv(aText)._title(),"The Title");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$self._assert_equals_($recv(aText)._contentAsString(),"The content More content");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"test07InterpretTextContentWithMultipleLines",{anInterpreter:anInterpreter,aText:aText,stringText:stringText},$globals.InterpreterText)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "test07InterpretTextContentWithMultipleLines\x0a\x09| anInterpreter aText stringText |\x0a\x09anInterpreter := CTestInterpreter new.\x0a\x09stringText := 'The Title' , String lf , 'The content' , String lf, 'More content'.\x0a\x09aText := anInterpreter interpretText: stringText.\x0a\x09self assert: aText title equals: 'The Title'.\x0a\x09self assert: aText contentAsString equals: \x09'The content More content'",
referencedClasses: ["CTestInterpreter", "String"],
//>>excludeEnd("ide");
messageSends: ["new", ",", "lf", "interpretText:", "assert:equals:", "title", "contentAsString"]
}),
$globals.InterpreterText);

$core.addMethod(
$core.method({
selector: "test08InterpretTextContentWithWordsToComplete",
protocol: "tests",
fn: function (){
var self=this,$self=this;
var anInterpreter,aText,stringText;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $4,$3,$2,$1;
anInterpreter=$recv($globals.CTestInterpreter)._new();
$4=$recv($globals.String)._lf();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["lf"]=1;
//>>excludeEnd("ctx");
$3="The Title".__comma($4);
$2=$recv($3).__comma("The cont{ent}");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=3;
//>>excludeEnd("ctx");
$1=$recv($2).__comma($recv($globals.String)._lf());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=2;
//>>excludeEnd("ctx");
stringText=$recv($1).__comma("More content");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
aText=$recv(anInterpreter)._interpretText_(stringText);
$self._assert_equals_($recv(aText)._title(),"The Title");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$self._assert_equals_($recv(aText)._contentAsString(),"The cont{ent} More content");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"test08InterpretTextContentWithWordsToComplete",{anInterpreter:anInterpreter,aText:aText,stringText:stringText},$globals.InterpreterText)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "test08InterpretTextContentWithWordsToComplete\x0a\x09| anInterpreter aText stringText |\x0a\x09anInterpreter := CTestInterpreter new.\x0a\x09stringText := 'The Title' , String lf , 'The cont{ent}' , String lf, 'More content'.\x0a\x09aText := anInterpreter interpretText: stringText.\x0a\x09self assert: aText title equals: 'The Title'.\x0a\x09self assert: aText contentAsString equals: 'The cont{ent} More content'",
referencedClasses: ["CTestInterpreter", "String"],
//>>excludeEnd("ide");
messageSends: ["new", ",", "lf", "interpretText:", "assert:equals:", "title", "contentAsString"]
}),
$globals.InterpreterText);

$core.addMethod(
$core.method({
selector: "test09TitleCanBeSeparatedWithMultipleReturns",
protocol: "tests",
fn: function (){
var self=this,$self=this;
var anInterpreter,aText,stringText;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $5,$4,$6,$3,$2,$1;
anInterpreter=$recv($globals.CTestInterpreter)._new();
$5=$recv($globals.String)._lf();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["lf"]=1;
//>>excludeEnd("ctx");
$4="The Title".__comma($5);
$6=$recv($globals.String)._lf();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["lf"]=2;
//>>excludeEnd("ctx");
$3=$recv($4).__comma($6);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=4;
//>>excludeEnd("ctx");
$2=$recv($3).__comma("The cont{ent}");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=3;
//>>excludeEnd("ctx");
$1=$recv($2).__comma($recv($globals.String)._lf());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=2;
//>>excludeEnd("ctx");
stringText=$recv($1).__comma("More content");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
aText=$recv(anInterpreter)._interpretText_(stringText);
$self._assert_equals_($recv(aText)._title(),"The Title");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$self._assert_equals_($recv(aText)._contentAsString(),"The cont{ent} More content");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"test09TitleCanBeSeparatedWithMultipleReturns",{anInterpreter:anInterpreter,aText:aText,stringText:stringText},$globals.InterpreterText)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "test09TitleCanBeSeparatedWithMultipleReturns\x0a\x09| anInterpreter aText stringText |\x0a\x09anInterpreter := CTestInterpreter new.\x0a\x09stringText := 'The Title' , String lf, String lf , 'The cont{ent}' , String lf, 'More content'.\x0a\x09aText := anInterpreter interpretText: stringText.\x0a\x09self assert: aText title equals: 'The Title'.\x0a\x09self assert: aText contentAsString equals: 'The cont{ent} More content'",
referencedClasses: ["CTestInterpreter", "String"],
//>>excludeEnd("ide");
messageSends: ["new", ",", "lf", "interpretText:", "assert:equals:", "title", "contentAsString"]
}),
$globals.InterpreterText);



$core.addClass("ParserForContentTest", $globals.TestCase, ["aParser"], "OndafSimulator-Core-Tests");
$core.addMethod(
$core.method({
selector: "assertState:",
protocol: "assertions",
fn: function (stateName){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._assert_equals_($recv($self["@aParser"])._state(),stateName);
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
protocol: "running",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$self["@aParser"]=$recv($globals.CTestParser)._forContent();
$1=$self["@aParser"];
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
protocol: "tests",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._assert_equals_($recv($self["@aParser"])._contents(),$recv($globals.OrderedCollection)._new());
$self._assertState_("Waiting");
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
protocol: "tests",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
$recv($self["@aParser"])._consumeAllIn_("a"._readStream());
$1=$recv($self["@aParser"])._contents();
$2=$recv($globals.OrderedCollection)._with_($recv($globals.CompletedText)._with_("a"));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
$self._assert_equals_($1,$2);
$self._assertState_("ReadingWord");
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
protocol: "tests",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self["@aParser"])._consumeAllIn_($recv(" ".__comma($recv($globals.String)._lf()))._readStream());
$self._assert_equals_($recv($self["@aParser"])._contents(),$recv($globals.OrderedCollection)._new());
$self._assertState_("Waiting");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"test03ReadBlankWhenWaiting",{},$globals.ParserForContentTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "test03ReadBlankWhenWaiting\x0a\x09aParser consumeAllIn: (' ', String lf) readStream.\x0a\x09self assert: aParser contents equals: OrderedCollection new.\x0a\x09self assertState: 'Waiting'",
referencedClasses: ["String", "OrderedCollection"],
//>>excludeEnd("ide");
messageSends: ["consumeAllIn:", "readStream", ",", "lf", "assert:equals:", "contents", "new", "assertState:"]
}),
$globals.ParserForContentTest);

$core.addMethod(
$core.method({
selector: "test04ReadBlankWhenReading",
protocol: "tests",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
$recv($self["@aParser"])._consumeAllIn_("a "._readStream());
$1=$recv($self["@aParser"])._contents();
$2=$recv($globals.OrderedCollection)._with_($recv($globals.CompletedText)._with_("a"));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
$self._assert_equals_($1,$2);
$self._assertState_("WaitingForWord");
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
protocol: "tests",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
$recv($self["@aParser"])._consumeAllIn_("a b"._readStream());
$1=$recv($self["@aParser"])._contents();
$2=$recv($globals.OrderedCollection)._with_($recv($globals.CompletedText)._with_("a b"));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
$self._assert_equals_($1,$2);
$self._assertState_("ReadingWord");
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
protocol: "tests",
fn: function (){
var self=this,$self=this;
var text;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
text=$recv($recv($recv($globals.String)._lf()).__comma("   asd   qwerty  ")).__comma($recv($globals.String)._tab());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
$recv($self["@aParser"])._consumeAllIn_($recv(text)._readStream());
$1=$recv($self["@aParser"])._contents();
$2=$recv($globals.OrderedCollection)._with_($recv($globals.CompletedText)._with_("asd qwerty"));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
$self._assert_equals_($1,$2);
$self._assertState_("WaitingForWord");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"test06ParseTextWithSpaces",{text:text},$globals.ParserForContentTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "test06ParseTextWithSpaces\x0a\x09| text |\x0a\x09text := String lf, '   asd   qwerty  ', String tab.\x0a\x09aParser consumeAllIn: text readStream.\x0a\x09self assert: aParser contents equals: (OrderedCollection\x0a\x09\x09with: (CompletedText with: 'asd qwerty')\x0a\x09).\x0a\x09self assertState: 'WaitingForWord'",
referencedClasses: ["String", "OrderedCollection", "CompletedText"],
//>>excludeEnd("ide");
messageSends: [",", "lf", "tab", "consumeAllIn:", "readStream", "assert:equals:", "contents", "with:", "assertState:"]
}),
$globals.ParserForContentTest);

$core.addMethod(
$core.method({
selector: "test07InitWordToComplete",
protocol: "tests",
fn: function (){
var self=this,$self=this;
var text;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
text="he{";
$recv(text)._do_((function(c){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($self["@aParser"])._consume_($recv(c)._asString());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({c:c},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$self._assertState_("ReadingSuffixes");
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
protocol: "tests",
fn: function (){
var self=this,$self=this;
var text;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
text="he{llo}";
$recv($self["@aParser"])._consumeAllIn_($recv(text)._readStream());
$self._assert_equals_($recv($self["@aParser"])._contents(),$recv($globals.OrderedCollection)._with_($recv($globals.WordToComplete)._withPrefix_options_("he",["llo"])));
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
protocol: "tests",
fn: function (){
var self=this,$self=this;
var text;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$3,$2;
text="pre text he{llo} post text";
$recv($self["@aParser"])._consumeAllIn_($recv(text)._readStream());
$1=$recv($self["@aParser"])._contents();
$3=$recv($globals.CompletedText)._with_("pre text");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
$2=$recv($globals.OrderedCollection)._with_with_with_($3,$recv($globals.WordToComplete)._withPrefix_options_("he",["llo"]),$recv($globals.CompletedText)._with_("post text"));
$self._assert_equals_($1,$2);
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
protocol: "tests",
fn: function (){
var self=this,$self=this;
var text;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $5,$4,$3,$2,$1,$6,$8,$9,$7;
$5=$recv($globals.String)._lf();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["lf"]=1;
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
$1=$recv($2).__comma($recv($globals.String)._lf());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=2;
//>>excludeEnd("ctx");
text=$recv($1).__comma(" text  anot{her}    ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
$recv($self["@aParser"])._consumeAllIn_($recv(text)._readStream());
$6=$recv($self["@aParser"])._contents();
$8=$recv($globals.CompletedText)._with_("pre text 1 and");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
$9=$recv($globals.WordToComplete)._withPrefix_options_("he",["llo"]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["withPrefix:options:"]=1;
//>>excludeEnd("ctx");
$7=$recv($globals.OrderedCollection)._with_with_with_with_($8,$9,$recv($globals.CompletedText)._with_("post. text"),$recv($globals.WordToComplete)._withPrefix_options_("anot",["her"]));
$self._assert_equals_($6,$7);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"test10ParseTextWithOneOptionWordsToComplete",{text:text},$globals.ParserForContentTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "test10ParseTextWithOneOptionWordsToComplete\x0a\x09| text |\x0a\x09text := String lf, '   pre  text  1 ', String tab, ' and   he{llo} post.  ', String lf, ' text  anot{her}    '.\x0a\x09aParser consumeAllIn: text readStream.\x0a\x09self assert: aParser contents equals: (OrderedCollection\x0a\x09\x09with: (CompletedText with: 'pre text 1 and')\x0a\x09\x09with: (WordToComplete withPrefix: 'he' options: #('llo'))\x0a\x09\x09with: (CompletedText with: 'post. text')\x0a\x09\x09with: (WordToComplete withPrefix: 'anot' options: #('her'))\x0a\x09).",
referencedClasses: ["String", "OrderedCollection", "CompletedText", "WordToComplete"],
//>>excludeEnd("ide");
messageSends: [",", "lf", "tab", "consumeAllIn:", "readStream", "assert:equals:", "contents", "with:with:with:with:", "with:", "withPrefix:options:"]
}),
$globals.ParserForContentTest);

$core.addMethod(
$core.method({
selector: "test11ParseTextWithMoreThenOneOptionWordToComplete",
protocol: "tests",
fn: function (){
var self=this,$self=this;
var text;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$3,$2;
text="pre text he{llo,art} post.";
$recv($self["@aParser"])._consumeAllIn_($recv(text)._readStream());
$1=$recv($self["@aParser"])._contents();
$3=$recv($globals.CompletedText)._with_("pre text");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
$2=$recv($globals.OrderedCollection)._with_with_with_($3,$recv($globals.WordToComplete)._withPrefix_options_("he",["llo", "art"]),$recv($globals.CompletedText)._with_("post."));
$self._assert_equals_($1,$2);
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
protocol: "tests",
fn: function (){
var self=this,$self=this;
var text;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$3,$2;
text="pre text he{  llo  ,  art  } post.";
$recv($self["@aParser"])._consumeAllIn_($recv(text)._readStream());
$1=$recv($self["@aParser"])._contents();
$3=$recv($globals.CompletedText)._with_("pre text");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
$2=$recv($globals.OrderedCollection)._with_with_with_($3,$recv($globals.WordToComplete)._withPrefix_options_("he",["llo", "art"]),$recv($globals.CompletedText)._with_("post."));
$self._assert_equals_($1,$2);
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
protocol: "tests",
fn: function (){
var self=this,$self=this;
var text;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$3,$2;
text="pre text he{llo, art, r} post.";
$recv($self["@aParser"])._consumeAllIn_($recv(text)._readStream());
$1=$recv($self["@aParser"])._contents();
$3=$recv($globals.CompletedText)._with_("pre text");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
$2=$recv($globals.OrderedCollection)._with_with_with_($3,$recv($globals.WordToComplete)._withPrefix_options_("he",["llo", "art", "r"]),$recv($globals.CompletedText)._with_("post."));
$self._assert_equals_($1,$2);
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
protocol: "tests",
fn: function (){
var self=this,$self=this;
var text;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
text=$recv("some text.".__comma($recv($globals.String)._lf())).__comma("more text");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
$recv($self["@aParser"])._consumeAllIn_($recv(text)._readStream());
$1=$recv($self["@aParser"])._contents();
$2=$recv($globals.OrderedCollection)._with_($recv($globals.CompletedText)._with_("some text. more text"));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
$self._assert_equals_($1,$2);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"test14ParseTextWithLineBreaks",{text:text},$globals.ParserForContentTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "test14ParseTextWithLineBreaks\x0a\x09| text |\x0a\x09text := 'some text.', String lf, 'more text'.\x0a\x09aParser consumeAllIn: text readStream.\x0a\x09self assert: aParser contents equals: (OrderedCollection\x0a\x09\x09with: (CompletedText with: 'some text. more text')\x0a\x09).",
referencedClasses: ["String", "OrderedCollection", "CompletedText"],
//>>excludeEnd("ide");
messageSends: [",", "lf", "consumeAllIn:", "readStream", "assert:equals:", "contents", "with:"]
}),
$globals.ParserForContentTest);



$core.addClass("ParserForTitleTest", $globals.TestCase, ["aParser"], "OndafSimulator-Core-Tests");
$core.addMethod(
$core.method({
selector: "setUp",
protocol: "running",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$self["@aParser"]=$recv($globals.CTestParser)._forTitle();
$1=$self["@aParser"];
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
protocol: "tests",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._assert_equals_($recv($self["@aParser"])._contents(),"");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$self._assert_equals_($recv($self["@aParser"])._state(),"Waiting");
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
protocol: "tests",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self["@aParser"])._consume_("a");
$self._assert_equals_($recv($self["@aParser"])._contents(),"a");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$self._assert_equals_($recv($self["@aParser"])._state(),"ReadingWord");
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
protocol: "tests",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self["@aParser"])._consume_(" ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["consume:"]=1;
//>>excludeEnd("ctx");
$recv($self["@aParser"])._consume_($recv($globals.String)._lf());
$self._assert_equals_($recv($self["@aParser"])._contents(),"");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$self._assert_equals_($recv($self["@aParser"])._state(),"Waiting");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"test03ReadBlankWhenWaiting",{},$globals.ParserForTitleTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "test03ReadBlankWhenWaiting\x0a\x09aParser consume: ' '.\x0a\x09aParser consume: String lf.\x0a\x09self assert: aParser contents equals: ''.\x0a\x09self assert: aParser state equals: 'Waiting'",
referencedClasses: ["String"],
//>>excludeEnd("ide");
messageSends: ["consume:", "lf", "assert:equals:", "contents", "state"]
}),
$globals.ParserForTitleTest);

$core.addMethod(
$core.method({
selector: "test04ReadBlankWhenReading",
protocol: "tests",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$self["@aParser"];
$recv($1)._consume_("a");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["consume:"]=1;
//>>excludeEnd("ctx");
$recv($1)._consume_(" ");
$self._assert_equals_($recv($self["@aParser"])._contents(),"a");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$self._assert_equals_($recv($self["@aParser"])._state(),"WaitingForWord");
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
protocol: "tests",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$self["@aParser"];
$recv($1)._consume_("a");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["consume:"]=1;
//>>excludeEnd("ctx");
$recv($1)._consume_(" ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["consume:"]=2;
//>>excludeEnd("ctx");
$recv($1)._consume_("b");
$self._assert_equals_($recv($self["@aParser"])._contents(),"a b");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$self._assert_equals_($recv($self["@aParser"])._state(),"ReadingWord");
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
protocol: "tests",
fn: function (){
var self=this,$self=this;
var text;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
text=$recv($recv($recv($globals.String)._lf()).__comma("   asd   qwerty  ")).__comma($recv($globals.String)._tab());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
$recv(text)._do_((function(c){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($self["@aParser"])._consume_($recv(c)._asString());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({c:c},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$self._assert_equals_($recv($self["@aParser"])._contents(),"asd qwerty");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$self._assert_equals_($recv($self["@aParser"])._state(),"WaitingForWord");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"test06ParseTextWithSpaces",{text:text},$globals.ParserForTitleTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "test06ParseTextWithSpaces\x0a\x09| text |\x0a\x09text := String lf, '   asd   qwerty  ', String tab.\x0a\x09text do: [ :c | aParser consume: c asString ].\x0a\x09self assert: aParser contents equals: 'asd qwerty'.\x0a\x09self assert: aParser state equals: 'WaitingForWord'",
referencedClasses: ["String"],
//>>excludeEnd("ide");
messageSends: [",", "lf", "tab", "do:", "consume:", "asString", "assert:equals:", "contents", "state"]
}),
$globals.ParserForTitleTest);

$core.addMethod(
$core.method({
selector: "test07EndInNewLineWhenWaitingForWord",
protocol: "tests",
fn: function (){
var self=this,$self=this;
var text;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $4,$3,$2,$1;
$4=$recv($globals.String)._lf();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["lf"]=1;
//>>excludeEnd("ctx");
$3=$recv($4).__comma("   asd   qwerty  ");
$2=$recv($3).__comma($recv($globals.String)._tab());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=3;
//>>excludeEnd("ctx");
$1=$recv($2).__comma($recv($globals.String)._lf());
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
return $recv($self["@aParser"])._consume_($recv(c)._asString());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({c:c},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$self._assert_equals_($recv($self["@aParser"])._contents(),"asd qwerty");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$self._assert_equals_($recv($self["@aParser"])._state(),"End");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"test07EndInNewLineWhenWaitingForWord",{text:text},$globals.ParserForTitleTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "test07EndInNewLineWhenWaitingForWord\x0a\x09| text |\x0a\x09text := String lf, '   asd   qwerty  ', String tab, String lf, 'more content'.\x0a\x09text do: [ :c | aParser consume: c asString ].\x0a\x09self assert: aParser contents equals: 'asd qwerty'.\x0a\x09self assert: aParser state equals: 'End'",
referencedClasses: ["String"],
//>>excludeEnd("ide");
messageSends: [",", "lf", "tab", "do:", "consume:", "asString", "assert:equals:", "contents", "state"]
}),
$globals.ParserForTitleTest);

$core.addMethod(
$core.method({
selector: "test08EndInNewLineWhenReading",
protocol: "tests",
fn: function (){
var self=this,$self=this;
var text;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $3,$2,$1;
$3=$recv($globals.String)._lf();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["lf"]=1;
//>>excludeEnd("ctx");
$2=$recv($3).__comma("   asd   qwerty");
$1=$recv($2).__comma($recv($globals.String)._lf());
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
return $recv($self["@aParser"])._consume_($recv(c)._asString());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({c:c},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$self._assert_equals_($recv($self["@aParser"])._contents(),"asd qwerty");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$self._assert_equals_($recv($self["@aParser"])._state(),"End");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"test08EndInNewLineWhenReading",{text:text},$globals.ParserForTitleTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "test08EndInNewLineWhenReading\x0a\x09| text |\x0a\x09text := String lf, '   asd   qwerty', String lf, 'more content'.\x0a\x09text do: [ :c | aParser consume: c asString ].\x0a\x09self assert: aParser contents equals: 'asd qwerty'.\x0a\x09self assert: aParser state equals: 'End'",
referencedClasses: ["String"],
//>>excludeEnd("ide");
messageSends: [",", "lf", "do:", "consume:", "asString", "assert:equals:", "contents", "state"]
}),
$globals.ParserForTitleTest);

$core.addMethod(
$core.method({
selector: "test09DontKeepReadingIfAtEnd",
protocol: "tests",
fn: function (){
var self=this,$self=this;
var text,textStream;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
text=$recv("123".__comma($recv($globals.String)._lf())).__comma("more content");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
textStream=$recv(text)._readStream();
$recv($self["@aParser"])._consumeAllIn_(textStream);
$self._assert_equals_($recv($self["@aParser"])._contents(),"123");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$self._assert_equals_($recv($self["@aParser"])._state(),"End");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=2;
//>>excludeEnd("ctx");
$self._assert_equals_($recv(textStream)._position(),(4));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"test09DontKeepReadingIfAtEnd",{text:text,textStream:textStream},$globals.ParserForTitleTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "test09DontKeepReadingIfAtEnd\x0a\x09| text textStream |\x0a\x09text := '123', String lf, 'more content'.\x0a\x09textStream := text readStream.\x0a\x09aParser consumeAllIn: textStream.\x0a\x09self assert: aParser contents equals: '123'.\x0a\x09self assert: aParser state equals: 'End'.\x0a\x09self assert: textStream position equals: 4",
referencedClasses: ["String"],
//>>excludeEnd("ide");
messageSends: [",", "lf", "readStream", "consumeAllIn:", "assert:equals:", "contents", "state", "position"]
}),
$globals.ParserForTitleTest);

$core.addMethod(
$core.method({
selector: "test10ReturnWhenStreamEnds",
protocol: "tests",
fn: function (){
var self=this,$self=this;
var text,textStream;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
text="123";
textStream=$recv(text)._readStream();
$recv($self["@aParser"])._consumeAllIn_(textStream);
$self._assert_equals_($recv($self["@aParser"])._contents(),"123");
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
protocol: "tests",
fn: function (){
var self=this,$self=this;
var text,textStream;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
text=$recv("   This    is  a 3 ".__comma($recv($globals.String)._lf())).__comma(" more content");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
textStream=$recv(text)._readStream();
$recv($self["@aParser"])._consumeAllIn_(textStream);
$self._assert_equals_($recv($self["@aParser"])._contents(),"This is a 3");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"test11ParseTitle",{text:text,textStream:textStream},$globals.ParserForTitleTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "test11ParseTitle\x0a\x09| text textStream |\x0a\x09text := '   This    is  a 3 ', String lf, ' more content'.\x0a\x09textStream := text readStream.\x0a\x09aParser consumeAllIn: textStream.\x0a\x09self assert: aParser contents equals: 'This is a 3'.",
referencedClasses: ["String"],
//>>excludeEnd("ide");
messageSends: [",", "lf", "readStream", "consumeAllIn:", "assert:equals:", "contents"]
}),
$globals.ParserForTitleTest);



$core.addClass("ResultTableTest", $globals.TestCase, [], "OndafSimulator-Core-Tests");
$core.addMethod(
$core.method({
selector: "assertPercentage:isLevel:",
protocol: "assertions",
fn: function (percentage,expectedLevel){
var self=this,$self=this;
var aLevel;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
aLevel=$recv($globals.CTestResultTable)._levelForPercentage_(percentage);
$self._assert_equals_(aLevel,expectedLevel);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"assertPercentage:isLevel:",{percentage:percentage,expectedLevel:expectedLevel,aLevel:aLevel},$globals.ResultTableTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["percentage", "expectedLevel"],
source: "assertPercentage: percentage isLevel: expectedLevel\x0a\x09| aLevel |\x0a\x09aLevel := CTestResultTable levelForPercentage: percentage.\x0a\x09self assert: aLevel equals: expectedLevel",
referencedClasses: ["CTestResultTable"],
//>>excludeEnd("ide");
messageSends: ["levelForPercentage:", "assert:equals:"]
}),
$globals.ResultTableTest);

$core.addMethod(
$core.method({
selector: "test01DetermineLevelFromPercentage",
protocol: "tests",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._assertPercentage_isLevel_((60),"A2 (oder unter)");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assertPercentage:isLevel:"]=1;
//>>excludeEnd("ctx");
$self._assertPercentage_isLevel_((61),"B1");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assertPercentage:isLevel:"]=2;
//>>excludeEnd("ctx");
$self._assertPercentage_isLevel_((87),"B1");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assertPercentage:isLevel:"]=3;
//>>excludeEnd("ctx");
$self._assertPercentage_isLevel_((88),"B2 (oder höher)");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"test01DetermineLevelFromPercentage",{},$globals.ResultTableTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "test01DetermineLevelFromPercentage\x0a\x09self assertPercentage: 60 isLevel: 'A2 (oder unter)'.\x0a\x09self assertPercentage: 61 isLevel: 'B1'.\x0a\x09self assertPercentage: 87 isLevel: 'B1'.\x0a\x09self assertPercentage: 88 isLevel: 'B2 (oder höher)'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["assertPercentage:isLevel:"]
}),
$globals.ResultTableTest);



$core.addClass("SpyResultsView", $globals.Object, ["score", "totalScore", "percentage", "level"], "OndafSimulator-Core-Tests");
$core.addMethod(
$core.method({
selector: "level",
protocol: "as yet unclassified",
fn: function (){
var self=this,$self=this;
return $self["@level"];

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "level\x0a\x09^ level",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SpyResultsView);

$core.addMethod(
$core.method({
selector: "percentage",
protocol: "as yet unclassified",
fn: function (){
var self=this,$self=this;
return $self["@percentage"];

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "percentage\x0a\x09^ percentage",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SpyResultsView);

$core.addMethod(
$core.method({
selector: "renderScore:of:percentage:level:",
protocol: "as yet unclassified",
fn: function (aScore,aTotalScore,aPercentage,aLevel){
var self=this,$self=this;
$self["@score"]=aScore;
$self["@totalScore"]=aTotalScore;
$self["@percentage"]=aPercentage;
$self["@level"]=aLevel;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aScore", "aTotalScore", "aPercentage", "aLevel"],
source: "renderScore: aScore of: aTotalScore percentage: aPercentage level: aLevel \x0a\x09score := aScore.\x0a\x09totalScore := aTotalScore.\x0a\x09percentage := aPercentage.\x0a\x09level := aLevel",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SpyResultsView);

$core.addMethod(
$core.method({
selector: "score",
protocol: "as yet unclassified",
fn: function (){
var self=this,$self=this;
return $self["@score"];

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "score\x0a\x09^ score",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SpyResultsView);

$core.addMethod(
$core.method({
selector: "totalScore",
protocol: "as yet unclassified",
fn: function (){
var self=this,$self=this;
return $self["@totalScore"];

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "totalScore\x0a\x09^ totalScore",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SpyResultsView);



$core.addClass("SpySubmission", $globals.Object, ["answers", "results", "shown"], "OndafSimulator-Core-Tests");
$core.addMethod(
$core.method({
selector: "answers",
protocol: "as yet unclassified",
fn: function (){
var self=this,$self=this;
return $self["@answers"];

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "answers\x0a\x09^ answers",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SpySubmission);

$core.addMethod(
$core.method({
selector: "answers:",
protocol: "as yet unclassified",
fn: function (aCollection){
var self=this,$self=this;
$self["@answers"]=aCollection;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCollection"],
source: "answers: aCollection \x0a\x09answers := aCollection",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SpySubmission);

$core.addMethod(
$core.method({
selector: "consumeResults:",
protocol: "as yet unclassified",
fn: function (aReadStream){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self["@results"]=$recv(aReadStream)._next_($recv($self["@answers"])._size());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"consumeResults:",{aReadStream:aReadStream},$globals.SpySubmission)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aReadStream"],
source: "consumeResults: aReadStream \x0a\x09results := aReadStream next: answers size.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["next:", "size"]
}),
$globals.SpySubmission);

$core.addMethod(
$core.method({
selector: "giveBackToStudent",
protocol: "as yet unclassified",
fn: function (){
var self=this,$self=this;
$self["@shown"]=true;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "giveBackToStudent\x0a\x09shown := true",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SpySubmission);

$core.addMethod(
$core.method({
selector: "results",
protocol: "as yet unclassified",
fn: function (){
var self=this,$self=this;
return $self["@results"];

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "results\x0a\x09^ results",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SpySubmission);


$core.addMethod(
$core.method({
selector: "newWith:",
protocol: "as yet unclassified",
fn: function (aCollection){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$self._new();
$recv($1)._answers_(aCollection);
return $recv($1)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"newWith:",{aCollection:aCollection},$globals.SpySubmission.a$cls)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCollection"],
source: "newWith: aCollection \x0a\x09^ self new\x0a\x09\x09answers: aCollection;\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["answers:", "new", "yourself"]
}),
$globals.SpySubmission.a$cls);


$core.addClass("TestTray", $globals.Object, [], "OndafSimulator-Core-Tests");
$core.addMethod(
$core.method({
selector: "newCopy:of:titled:withTime:",
protocol: "as yet unclassified",
fn: function (textNumber,totalTexts,aString,aTimeInSeconds){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($globals.TextCopySpy)._new();
$recv($1)._time_(aTimeInSeconds);
$recv($1)._title_(aString);
return $recv($1)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"newCopy:of:titled:withTime:",{textNumber:textNumber,totalTexts:totalTexts,aString:aString,aTimeInSeconds:aTimeInSeconds},$globals.TestTray)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["textNumber", "totalTexts", "aString", "aTimeInSeconds"],
source: "newCopy: textNumber of: totalTexts titled: aString withTime: aTimeInSeconds \x0a\x09^ TextCopySpy new\x0a\x09\x09time: aTimeInSeconds;\x0a\x09\x09title: aString;\x0a\x09\x09yourself",
referencedClasses: ["TextCopySpy"],
//>>excludeEnd("ide");
messageSends: ["time:", "new", "title:", "yourself"]
}),
$globals.TestTray);



$core.addClass("TextCopySpy", $globals.Object, ["printedText", "time"], "OndafSimulator-Core-Tests");
$core.addMethod(
$core.method({
selector: "addText:",
protocol: "as yet unclassified",
fn: function (aString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self["@printedText"]=$recv($recv($self["@printedText"]).__comma(aString)).__comma(" ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"addText:",{aString:aString},$globals.TextCopySpy)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "addText: aString \x0a\x09printedText := printedText, aString, ' '",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: [","]
}),
$globals.TextCopySpy);

$core.addMethod(
$core.method({
selector: "addWordToComplete:",
protocol: "as yet unclassified",
fn: function (aString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._addText_($recv(aString).__comma("_"));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"addWordToComplete:",{aString:aString},$globals.TextCopySpy)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "addWordToComplete: aString \x0a\x09self addText: aString, '_'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["addText:", ","]
}),
$globals.TextCopySpy);

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
($globals.TextCopySpy.superclass||$boot.nilAsClass).fn.prototype._initialize.apply($self, []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$self["@printedText"]="";
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.TextCopySpy)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09printedText := ''",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["initialize"]
}),
$globals.TextCopySpy);

$core.addMethod(
$core.method({
selector: "printedText",
protocol: "as yet unclassified",
fn: function (){
var self=this,$self=this;
return $self["@printedText"];

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "printedText\x0a\x09^ printedText",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.TextCopySpy);

$core.addMethod(
$core.method({
selector: "time:",
protocol: "as yet unclassified",
fn: function (anInteger){
var self=this,$self=this;
$self["@time"]=anInteger;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anInteger"],
source: "time: anInteger \x0a\x09time := anInteger",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.TextCopySpy);

$core.addMethod(
$core.method({
selector: "title:",
protocol: "as yet unclassified",
fn: function (aString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $3,$2,$1;
$3=$recv("|".__comma(aString)).__comma(" (");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=3;
//>>excludeEnd("ctx");
$2=$recv($3).__comma($recv($self["@time"])._asString());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=2;
//>>excludeEnd("ctx");
$1=$recv($2).__comma("s)|");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
$self._addText_($1);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"title:",{aString:aString},$globals.TextCopySpy)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "title: aString \x0a\x09self addText: '|', aString, ' (', time asString, 's)|'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["addText:", ",", "asString"]
}),
$globals.TextCopySpy);



$core.addClass("TextViewSpy", $globals.TextCopySpy, ["rendered", "answers", "results", "onContinue", "wasShown"], "OndafSimulator-Core-Tests");
$core.addMethod(
$core.method({
selector: "answers",
protocol: "as yet unclassified",
fn: function (){
var self=this,$self=this;
return $self["@answers"];

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "answers\x0a\x09^ answers",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.TextViewSpy);

$core.addMethod(
$core.method({
selector: "answers:",
protocol: "as yet unclassified",
fn: function (anObject){
var self=this,$self=this;
$self["@answers"]=anObject;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "answers: anObject \x0a\x09answers := anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.TextViewSpy);

$core.addMethod(
$core.method({
selector: "continue",
protocol: "as yet unclassified",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self["@onContinue"])._value();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"continue",{},$globals.TextViewSpy)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "continue\x0a\x09onContinue value",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["value"]
}),
$globals.TextViewSpy);

$core.addMethod(
$core.method({
selector: "hide",
protocol: "as yet unclassified",
fn: function (){
var self=this,$self=this;
$self["@rendered"]=false;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "hide\x0a\x09rendered := false",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.TextViewSpy);

$core.addMethod(
$core.method({
selector: "isRendered",
protocol: "as yet unclassified",
fn: function (){
var self=this,$self=this;
return $self["@rendered"];

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isRendered\x0a\x09^ rendered",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.TextViewSpy);

$core.addMethod(
$core.method({
selector: "render",
protocol: "as yet unclassified",
fn: function (){
var self=this,$self=this;
$self["@rendered"]=true;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "render\x0a\x09rendered := true",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.TextViewSpy);

$core.addMethod(
$core.method({
selector: "results",
protocol: "as yet unclassified",
fn: function (){
var self=this,$self=this;
return $self["@results"];

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "results\x0a\x09^ results",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.TextViewSpy);

$core.addMethod(
$core.method({
selector: "show",
protocol: "as yet unclassified",
fn: function (){
var self=this,$self=this;
$self["@wasShown"]=true;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "show\x0a\x09wasShown := true",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.TextViewSpy);

$core.addMethod(
$core.method({
selector: "showResults:",
protocol: "as yet unclassified",
fn: function (aCollection){
var self=this,$self=this;
$self["@results"]=aCollection;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCollection"],
source: "showResults: aCollection \x0a\x09results := aCollection",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.TextViewSpy);

$core.addMethod(
$core.method({
selector: "wasShown",
protocol: "as yet unclassified",
fn: function (){
var self=this,$self=this;
return $self["@wasShown"];

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "wasShown\x0a\x09^ wasShown",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.TextViewSpy);

$core.addMethod(
$core.method({
selector: "whenContinueDo:",
protocol: "as yet unclassified",
fn: function (aBlock){
var self=this,$self=this;
$self["@onContinue"]=aBlock;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "whenContinueDo: aBlock\x0a\x09onContinue := aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.TextViewSpy);



$core.addClass("TextCopyTest", $globals.TestCase, ["spyView", "copy"], "OndafSimulator-Core-Tests");
$core.addMethod(
$core.method({
selector: "setUp",
protocol: "running",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true,
//>>excludeEnd("ctx");
($globals.TextCopyTest.superclass||$boot.nilAsClass).fn.prototype._setUp.apply($self, []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$self["@spyView"]=$recv($globals.TextViewSpy)._new();
$self["@copy"]=$recv($globals.CTestTextCopy)._newWithView_($self["@spyView"]);
$1=$self["@copy"];
$recv($1)._time_((59));
$recv($1)._title_("The title");
$recv($1)._addText_("Some Text.");
$recv($1)._addWordToComplete_("Plan ahea");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"setUp",{},$globals.TextCopyTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "setUp\x0a\x09super setUp.\x0a\x09spyView := TextViewSpy new.\x0a\x09copy := CTestTextCopy newWithView: spyView.\x0a\x09copy\x0a\x09\x09time: 59;\x0a\x09\x09title: 'The title';\x0a\x09\x09addText: 'Some Text.';\x0a\x09\x09addWordToComplete: 'Plan ahea'.",
referencedClasses: ["TextViewSpy", "CTestTextCopy"],
//>>excludeEnd("ide");
messageSends: ["setUp", "new", "newWithView:", "time:", "title:", "addText:", "addWordToComplete:"]
}),
$globals.TextCopyTest);

$core.addMethod(
$core.method({
selector: "test01",
protocol: "tests",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._assert_equals_($recv($self["@spyView"])._printedText(),"|The title (59s)| Some Text. Plan ahea_ ");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"test01",{},$globals.TextCopyTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "test01\x09\x0a\x09self assert: spyView printedText equals: '|The title (59s)| Some Text. Plan ahea_ '",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["assert:equals:", "printedText"]
}),
$globals.TextCopyTest);

$core.addMethod(
$core.method({
selector: "test02",
protocol: "tests",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self["@copy"])._giveToStudent();
$self._assert_($recv($self["@spyView"])._isRendered());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"test02",{},$globals.TextCopyTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "test02\x0a\x09copy giveToStudent.\x0a\x09\x09\x0a\x09self assert: spyView isRendered",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["giveToStudent", "assert:", "isRendered"]
}),
$globals.TextCopyTest);

$core.addMethod(
$core.method({
selector: "test03",
protocol: "tests",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self["@copy"])._giveToStudent();
$recv($self["@copy"])._finish();
$self._assert_($recv($recv($self["@spyView"])._isRendered())._not());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"test03",{},$globals.TextCopyTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "test03\x09\x09\x0a\x09copy giveToStudent.\x0a\x09\x0a\x09copy finish.\x0a\x09\x09\x0a\x09self assert: spyView isRendered not",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["giveToStudent", "finish", "assert:", "not", "isRendered"]
}),
$globals.TextCopyTest);

$core.addMethod(
$core.method({
selector: "test04",
protocol: "tests",
fn: function (){
var self=this,$self=this;
var executed;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
executed=false;
$recv($self["@copy"])._whenFinishDo_((function(){
executed=true;
return executed;

}));
$recv($self["@copy"])._giveToStudent();
$recv($self["@copy"])._finish();
$self._assert_(executed);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"test04",{executed:executed},$globals.TextCopyTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "test04\x0a\x09| executed |\x0a\x09executed := false.\x0a\x09\x0a\x09copy whenFinishDo: [ executed := true ].\x0a\x09copy giveToStudent.\x0a\x09copy finish.\x0a\x09\x09\x0a\x09self assert: executed",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["whenFinishDo:", "giveToStudent", "finish", "assert:"]
}),
$globals.TextCopyTest);

$core.addMethod(
$core.method({
selector: "test05",
protocol: "tests",
fn: function (){
var self=this,$self=this;
var expectedAnswers;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
expectedAnswers=$recv($globals.Object)._new();
$recv($self["@spyView"])._answers_(expectedAnswers);
$recv($self["@copy"])._giveToStudent();
$recv($self["@copy"])._finish();
$self._assert_equals_($recv($self["@copy"])._answers(),expectedAnswers);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"test05",{expectedAnswers:expectedAnswers},$globals.TextCopyTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "test05\x0a\x09| expectedAnswers |\x0a\x09expectedAnswers := Object new.\x0a\x09spyView answers: expectedAnswers.\x0a\x09\x0a\x09copy giveToStudent.\x0a\x09copy finish.\x0a\x09\x09\x0a\x09self assert: copy answers equals: expectedAnswers.",
referencedClasses: ["Object"],
//>>excludeEnd("ide");
messageSends: ["new", "answers:", "giveToStudent", "finish", "assert:equals:", "answers"]
}),
$globals.TextCopyTest);

$core.addMethod(
$core.method({
selector: "test06",
protocol: "tests",
fn: function (){
var self=this,$self=this;
var resultStream;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
resultStream=[(1), (2), (3), (4)]._readStream();
$recv($self["@copy"])._addWordToComplete_("A second word to complete");
$recv($self["@copy"])._giveToStudent();
$recv($self["@copy"])._finish();
$recv($self["@copy"])._consumeResults_(resultStream);
$self._assert_equals_($recv($self["@spyView"])._results(),[(1), (2)]);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"test06",{resultStream:resultStream},$globals.TextCopyTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "test06\x0a\x09| resultStream |\x0a\x09resultStream := #(1 2 3 4) readStream.\x0a\x09copy addWordToComplete: 'A second word to complete'.\x0a\x09copy giveToStudent.\x0a\x09copy finish.\x0a\x09copy consumeResults: resultStream.\x0a\x09\x09\x0a\x09self assert: spyView results equals: #(1 2).",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["readStream", "addWordToComplete:", "giveToStudent", "finish", "consumeResults:", "assert:equals:", "results"]
}),
$globals.TextCopyTest);

$core.addMethod(
$core.method({
selector: "test07",
protocol: "tests",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self["@copy"])._giveToStudent();
$recv($self["@spyView"])._continue();
$self._assert_($recv($recv($self["@spyView"])._isRendered())._not());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"test07",{},$globals.TextCopyTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "test07\x0a\x09copy giveToStudent.\x0a\x09spyView continue.\x0a\x09\x09\x0a\x09self assert: spyView isRendered not",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["giveToStudent", "continue", "assert:", "not", "isRendered"]
}),
$globals.TextCopyTest);

$core.addMethod(
$core.method({
selector: "test08",
protocol: "tests",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self["@copy"])._giveToStudent();
$recv($self["@copy"])._finish();
$recv($self["@copy"])._giveBackToStudent();
$self._assert_($recv($self["@spyView"])._wasShown());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"test08",{},$globals.TextCopyTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "test08\x09\x0a\x09copy giveToStudent.\x0a\x09copy finish.\x0a\x09\x0a\x09copy giveBackToStudent.\x0a\x09\x09\x0a\x09self assert: spyView wasShown",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["giveToStudent", "finish", "giveBackToStudent", "assert:", "wasShown"]
}),
$globals.TextCopyTest);

$core.addMethod(
$core.method({
selector: "test09",
protocol: "tests",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._assert_equals_($recv($self["@copy"])._timeInSeconds(),(59));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"test09",{},$globals.TextCopyTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "test09\x0a\x09self assert: copy timeInSeconds equals: 59",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["assert:equals:", "timeInSeconds"]
}),
$globals.TextCopyTest);


});

define("amber-ondafsimulator/OndafSimulator-Tests", ["amber/boot", "amber_core/SUnit", "amber_core/Kernel-Objects"], function($boot){"use strict";
var $core=$boot.api,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;
$core.addPackage('OndafSimulator-Tests');
$core.packages["OndafSimulator-Tests"].innerEval = function (expr) { return eval(expr); };
$core.packages["OndafSimulator-Tests"].transport = {"type":"amd","amdNamespace":"amber-ondafsimulator"};

$core.addClass('OndafSimulatorTest', $globals.TestCase, [], 'OndafSimulator-Tests');


$core.addClass('WidgetPreviews', $globals.Object, [], 'OndafSimulator-Tests');
$core.addMethod(
$core.method({
selector: "examTextView",
protocol: 'widgets',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$recv("body"._asJQuery())._empty();
$1=$recv($globals.ExamTextView)._newIn_title_text_of_("body","a Title",(2),(3));
$recv($1)._addText_("Hello ");
$recv($1)._addWordToComplete_("Wor");
$recv($1)._showSeconds_((99));
$recv($1)._render();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"examTextView",{},$globals.WidgetPreviews)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "examTextView\x0a\x09'body' asJQuery empty.\x0a\x09\x0a\x09(ExamTextView newIn: 'body' title: 'a Title' text: 2 of: 3)\x0a\x09\x09addText: 'Hello ';\x0a\x09\x09addWordToComplete: 'Wor';\x0a\x09\x09showSeconds: 99;\x0a\x09\x09render.",
referencedClasses: ["ExamTextView"],
//>>excludeEnd("ide");
messageSends: ["empty", "asJQuery", "addText:", "newIn:title:text:of:", "addWordToComplete:", "showSeconds:", "render"]
}),
$globals.WidgetPreviews);

$core.addMethod(
$core.method({
selector: "header",
protocol: 'widgets',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
$1="body"._asJQuery();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asJQuery"]=1;
//>>excludeEnd("ctx");
$recv($1)._empty();
$2=$recv($globals.Header)._new();
$recv($2)._whenStartExam_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(window)._alert_("start exam");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$recv($2)._appendToJQuery_("body"._asJQuery());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"header",{},$globals.WidgetPreviews)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "header\x0a\x09'body' asJQuery empty.\x0a\x09\x0a\x09Header new\x0a\x09\x09whenStartExam: [ window alert: 'start exam' ];\x0a\x09\x09appendToJQuery: 'body' asJQuery.",
referencedClasses: ["Header"],
//>>excludeEnd("ide");
messageSends: ["empty", "asJQuery", "whenStartExam:", "new", "alert:", "appendToJQuery:"]
}),
$globals.WidgetPreviews);

$core.addMethod(
$core.method({
selector: "textCard",
protocol: 'widgets',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv("body"._asJQuery())._empty();
$recv($globals.TextCard)._newIn_title_("body","a Title");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"textCard",{},$globals.WidgetPreviews)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "textCard\x0a\x09'body' asJQuery empty.\x0a\x09\x09\x0a\x09TextCard newIn: 'body' title: 'a Title'",
referencedClasses: ["TextCard"],
//>>excludeEnd("ide");
messageSends: ["empty", "asJQuery", "newIn:title:"]
}),
$globals.WidgetPreviews);

$core.addMethod(
$core.method({
selector: "textFileDropTarget",
protocol: 'widgets',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
$1="body"._asJQuery();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asJQuery"]=1;
//>>excludeEnd("ctx");
$recv($1)._empty();
$recv($globals.TextFileDropTarget)._newIn_handler_("body",(function(txt){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(window)._alert_(txt);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({txt:txt},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$2=".text-file-target"._asJQuery();
$recv($2)._css_put_("height","100px");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["css:put:"]=1;
//>>excludeEnd("ctx");
$recv($2)._css_put_("border","3px dashed gray");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["css:put:"]=2;
//>>excludeEnd("ctx");
$recv($2)._css_put_("background","white");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"textFileDropTarget",{},$globals.WidgetPreviews)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "textFileDropTarget\x0a\x09'body' asJQuery empty.\x0a\x09\x09\x0a\x09TextFileDropTarget\x0a\x09\x09newIn: 'body'\x0a\x09\x09handler: [ :txt | window alert: txt ].\x0a\x09'.text-file-target' asJQuery\x0a\x09\x09css: 'height' put: '100px';\x0a\x09\x09css: 'border' put: '3px dashed gray';\x0a\x09\x09css: 'background' put: 'white'.",
referencedClasses: ["TextFileDropTarget"],
//>>excludeEnd("ide");
messageSends: ["empty", "asJQuery", "newIn:handler:", "alert:", "css:put:"]
}),
$globals.WidgetPreviews);



$core.addClass('WidgetTest', $globals.TestCase, [], 'OndafSimulator-Tests');
$core.addMethod(
$core.method({
selector: "assertPageContains:",
protocol: 'gui testing',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $4,$3,$2,$1;
$4=$recv(":contains(".__comma(aString)).__comma(")");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
$3=$recv($4)._asJQuery();
$2=$recv($3)._length();
$1=$recv($2).__gt((0));
self._assert_($1);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"assertPageContains:",{aString:aString},$globals.WidgetTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "assertPageContains: aString\x0a\x09self assert: ((':contains(', aString, ')') asJQuery length) > 0",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["assert:", ">", "length", "asJQuery", ","]
}),
$globals.WidgetTest);

$core.addMethod(
$core.method({
selector: "assertPageDoesNotContain:",
protocol: 'gui testing',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $4,$3,$2,$1;
$4=$recv(":contains(".__comma(aString)).__comma(")");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
$3=$recv($4)._asJQuery();
$2=$recv($3)._length();
$1=$recv($2).__eq_eq((0));
self._assert_($1);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"assertPageDoesNotContain:",{aString:aString},$globals.WidgetTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "assertPageDoesNotContain: aString\x0a\x09self assert: ((':contains(', aString, ')') asJQuery length) == 0",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["assert:", "==", "length", "asJQuery", ","]
}),
$globals.WidgetTest);

$core.addMethod(
$core.method({
selector: "clickOn:",
protocol: 'gui testing',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._elementWithText_("Start exam"))._click();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"clickOn:",{aString:aString},$globals.WidgetTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "clickOn: aString\x0a\x09(self elementWithText: 'Start exam') click.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["click", "elementWithText:"]
}),
$globals.WidgetTest);

$core.addMethod(
$core.method({
selector: "elementWithText:",
protocol: 'gui testing',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1;
$2=$recv(":contains(".__comma(aString)).__comma(")");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._asJQuery();
return $recv($1)._filter_((function(i,elem){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv($recv(elem)._children())._length()).__eq_eq((0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({i:i,elem:elem},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"elementWithText:",{aString:aString},$globals.WidgetTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "elementWithText: aString\x0a\x09^ (':contains(', aString, ')') asJQuery\x0a\x09\x09filter: [ :i :elem | elem children length == 0 ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["filter:", "asJQuery", ",", "==", "length", "children"]
}),
$globals.WidgetTest);

$core.addMethod(
$core.method({
selector: "setUp",
protocol: 'running',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv("body"._asJQuery())._empty();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"setUp",{},$globals.WidgetTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "setUp\x0a\x09'body' asJQuery empty",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["empty", "asJQuery"]
}),
$globals.WidgetTest);



$core.addClass('ExamTestViewTest', $globals.WidgetTest, [], 'OndafSimulator-Tests');
$core.addMethod(
$core.method({
selector: "test01ShowsTheTextTitle",
protocol: 'tests',
fn: function (){
var self=this;
var examTextView;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
examTextView=$recv($globals.ExamTextView)._newIn_title_text_of_("body","Text Title",(1),(2));
$recv(examTextView)._render();
self._assertPageContains_("Text Title");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"test01ShowsTheTextTitle",{examTextView:examTextView},$globals.ExamTestViewTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "test01ShowsTheTextTitle\x0a\x09| examTextView |\x0a\x09examTextView := ExamTextView newIn: 'body' title: 'Text Title' text: 1 of: 2.\x0a\x09\x0a\x09examTextView render.\x0a\x09\x0a\x09self assertPageContains: 'Text Title'",
referencedClasses: ["ExamTextView"],
//>>excludeEnd("ide");
messageSends: ["newIn:title:text:of:", "render", "assertPageContains:"]
}),
$globals.ExamTestViewTest);

$core.addMethod(
$core.method({
selector: "test02ShowsTheTextNumberAndTotalNumber",
protocol: 'tests',
fn: function (){
var self=this;
var examTextView;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
examTextView=$recv($globals.ExamTextView)._newIn_title_text_of_("body","Text Title",(1),(2));
$recv(examTextView)._render();
self._assertPageContains_("Text 1 von 2");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"test02ShowsTheTextNumberAndTotalNumber",{examTextView:examTextView},$globals.ExamTestViewTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "test02ShowsTheTextNumberAndTotalNumber\x0a\x09| examTextView |\x0a\x09examTextView := ExamTextView newIn: 'body' title: 'Text Title' text: 1 of: 2.\x0a\x09\x0a\x09examTextView render.\x0a\x09\x0a\x09self assertPageContains: 'Text 1 von 2'",
referencedClasses: ["ExamTextView"],
//>>excludeEnd("ide");
messageSends: ["newIn:title:text:of:", "render", "assertPageContains:"]
}),
$globals.ExamTestViewTest);

$core.addMethod(
$core.method({
selector: "test03TheContinueButtonIsHiddenByDefault",
protocol: 'tests',
fn: function (){
var self=this;
var examTextView,continueVisible;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
examTextView=$recv($globals.ExamTextView)._newIn_title_text_of_("body","Text Title",(1),(2));
$recv(examTextView)._render();
continueVisible=$recv($recv(".continue"._asJQuery())._css_("visibility")).__eq_eq("visible");
self._assert_($recv(continueVisible)._not());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"test03TheContinueButtonIsHiddenByDefault",{examTextView:examTextView,continueVisible:continueVisible},$globals.ExamTestViewTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "test03TheContinueButtonIsHiddenByDefault\x0a\x09| examTextView continueVisible |\x0a\x09examTextView := ExamTextView newIn: 'body' title: 'Text Title' text: 1 of: 2.\x0a\x09\x0a\x09examTextView render.\x0a\x09\x0a\x09continueVisible := ('.continue' asJQuery css: 'visibility') == 'visible'.\x0a\x09\x0a\x09self assert: continueVisible not",
referencedClasses: ["ExamTextView"],
//>>excludeEnd("ide");
messageSends: ["newIn:title:text:of:", "render", "==", "css:", "asJQuery", "assert:", "not"]
}),
$globals.ExamTestViewTest);

$core.addMethod(
$core.method({
selector: "test04TheContinueButtonIsShownWhenCheckingTheCheckbox",
protocol: 'tests',
fn: function (){
var self=this;
var examTextView,continueVisible;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
examTextView=$recv($globals.ExamTextView)._newIn_title_text_of_("body","Text Title",(1),(2));
$recv(examTextView)._render();
$1="input[type=\x22checkbox\x22]"._asJQuery();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asJQuery"]=1;
//>>excludeEnd("ctx");
$recv($1)._click();
continueVisible=$recv($recv(".continue"._asJQuery())._css_("visibility")).__eq_eq("visible");
self._assert_(continueVisible);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"test04TheContinueButtonIsShownWhenCheckingTheCheckbox",{examTextView:examTextView,continueVisible:continueVisible},$globals.ExamTestViewTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "test04TheContinueButtonIsShownWhenCheckingTheCheckbox\x0a\x09| examTextView continueVisible |\x0a\x09examTextView := ExamTextView newIn: 'body' title: 'Text Title' text: 1 of: 2.\x0a\x09\x0a\x09examTextView render.\x0a\x09'input[type=\x22checkbox\x22]' asJQuery click.\x0a\x09\x0a\x09continueVisible := ('.continue' asJQuery css: 'visibility') == 'visible'.\x0a\x09\x0a\x09self assert: continueVisible",
referencedClasses: ["ExamTextView"],
//>>excludeEnd("ide");
messageSends: ["newIn:title:text:of:", "render", "click", "asJQuery", "==", "css:", "assert:"]
}),
$globals.ExamTestViewTest);

$core.addMethod(
$core.method({
selector: "test05ShowsTheCompletedText",
protocol: 'tests',
fn: function (){
var self=this;
var examTextView;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
examTextView=$recv($globals.ExamTextView)._newIn_title_text_of_("body","Text Title",(1),(2));
$recv(examTextView)._addText_("Hello.");
$recv(examTextView)._render();
self._assertPageContains_("Hello.");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"test05ShowsTheCompletedText",{examTextView:examTextView},$globals.ExamTestViewTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "test05ShowsTheCompletedText\x0a\x09| examTextView |\x0a\x09examTextView := ExamTextView newIn: 'body' title: 'Text Title' text: 1 of: 2.\x0a\x09\x0a\x09examTextView addText: 'Hello.'.\x0a\x09examTextView render.\x0a\x09\x0a\x09self assertPageContains: 'Hello.'",
referencedClasses: ["ExamTextView"],
//>>excludeEnd("ide");
messageSends: ["newIn:title:text:of:", "addText:", "render", "assertPageContains:"]
}),
$globals.ExamTestViewTest);

$core.addMethod(
$core.method({
selector: "test06ShowsTheWordsToComplete",
protocol: 'tests',
fn: function (){
var self=this;
var examTextView;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
examTextView=$recv($globals.ExamTextView)._newIn_title_text_of_("body","Text Title",(1),(2));
$recv(examTextView)._addWordToComplete_("Hel");
$recv(examTextView)._render();
self._assertPageContains_("Hel");
self._assert_equals_($recv("input[type=\x22text\x22]"._asJQuery())._length(),(1));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"test06ShowsTheWordsToComplete",{examTextView:examTextView},$globals.ExamTestViewTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "test06ShowsTheWordsToComplete\x0a\x09| examTextView |\x0a\x09examTextView := ExamTextView newIn: 'body' title: 'Text Title' text: 1 of: 2.\x0a\x09\x0a\x09examTextView addWordToComplete: 'Hel'.\x0a\x09examTextView render.\x0a\x09\x0a\x09self assertPageContains: 'Hel'.\x0a\x09self assert: 'input[type=\x22text\x22]' asJQuery length equals: 1",
referencedClasses: ["ExamTextView"],
//>>excludeEnd("ide");
messageSends: ["newIn:title:text:of:", "addWordToComplete:", "render", "assertPageContains:", "assert:equals:", "length", "asJQuery"]
}),
$globals.ExamTestViewTest);

$core.addMethod(
$core.method({
selector: "test07CanProvideTheAnswers",
protocol: 'tests',
fn: function (){
var self=this;
var examTextView,inputs;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
examTextView=$recv($globals.ExamTextView)._newIn_title_text_of_("body","Text Title",(1),(2));
$recv(examTextView)._addWordToComplete_("Hel");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["addWordToComplete:"]=1;
//>>excludeEnd("ctx");
$recv(examTextView)._addWordToComplete_(" Wo");
$recv(examTextView)._render();
inputs="input[type=\x22text\x22]"._asJQuery();
$1=$recv(inputs)._at_((0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:"]=1;
//>>excludeEnd("ctx");
$recv($1)._value_("lo");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["value:"]=1;
//>>excludeEnd("ctx");
$recv($recv(inputs)._at_((1)))._value_("rld");
self._assert_equals_($recv(examTextView)._answers(),["lo", "rld"]);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"test07CanProvideTheAnswers",{examTextView:examTextView,inputs:inputs},$globals.ExamTestViewTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "test07CanProvideTheAnswers\x0a\x09| examTextView inputs |\x0a\x09examTextView := ExamTextView newIn: 'body' title: 'Text Title' text: 1 of: 2.\x0a\x09\x0a\x09examTextView addWordToComplete: 'Hel'.\x0a\x09examTextView addWordToComplete: ' Wo'.\x0a\x09examTextView render.\x0a\x09inputs := 'input[type=\x22text\x22]' asJQuery.\x0a\x09(inputs at: 0) value: 'lo'.\x0a\x09(inputs at: 1) value: 'rld'.\x0a\x09\x0a\x09self assert: examTextView answers equals: #('lo' 'rld')",
referencedClasses: ["ExamTextView"],
//>>excludeEnd("ide");
messageSends: ["newIn:title:text:of:", "addWordToComplete:", "render", "asJQuery", "value:", "at:", "assert:equals:", "answers"]
}),
$globals.ExamTestViewTest);

$core.addMethod(
$core.method({
selector: "test08CanDisplaySeconds",
protocol: 'tests',
fn: function (){
var self=this;
var examTextView;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
examTextView=$recv($globals.ExamTextView)._newIn_title_text_of_("body","Text Title",(1),(2));
$recv(examTextView)._render();
$recv(examTextView)._showSeconds_((59));
self._assertPageContains_("Verbleibende Sekunden: 59");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"test08CanDisplaySeconds",{examTextView:examTextView},$globals.ExamTestViewTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "test08CanDisplaySeconds\x0a\x09| examTextView |\x0a\x09examTextView := ExamTextView newIn: 'body' title: 'Text Title' text: 1 of: 2.\x0a\x09\x0a\x09examTextView render.\x0a\x09\x0a\x09examTextView showSeconds: 59.\x0a\x09\x0a\x09self assertPageContains: 'Verbleibende Sekunden: 59'",
referencedClasses: ["ExamTextView"],
//>>excludeEnd("ide");
messageSends: ["newIn:title:text:of:", "render", "showSeconds:", "assertPageContains:"]
}),
$globals.ExamTestViewTest);

$core.addMethod(
$core.method({
selector: "test09ByDefaultSecondsAreNotDisplayed",
protocol: 'tests',
fn: function (){
var self=this;
var examTextView;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
examTextView=$recv($globals.ExamTextView)._newIn_title_text_of_("body","Text Title",(1),(2));
$recv(examTextView)._render();
self._assertPageDoesNotContain_("Verbleibende Sekunden");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"test09ByDefaultSecondsAreNotDisplayed",{examTextView:examTextView},$globals.ExamTestViewTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "test09ByDefaultSecondsAreNotDisplayed\x0a\x09| examTextView |\x0a\x09examTextView := ExamTextView newIn: 'body' title: 'Text Title' text: 1 of: 2.\x0a\x09\x0a\x09examTextView render.\x0a\x09\x0a\x09self assertPageDoesNotContain: 'Verbleibende Sekunden'",
referencedClasses: ["ExamTextView"],
//>>excludeEnd("ide");
messageSends: ["newIn:title:text:of:", "render", "assertPageDoesNotContain:"]
}),
$globals.ExamTestViewTest);



$core.addClass('HeaderTest', $globals.WidgetTest, [], 'OndafSimulator-Tests');
$core.addMethod(
$core.method({
selector: "test01ByDefaultItDoesNotStartTheExam",
protocol: 'tests',
fn: function (){
var self=this;
var examStarted;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
examStarted=false;
$1=$recv($globals.Header)._new();
$recv($1)._whenStartExam_((function(){
examStarted=true;
return examStarted;

}));
$recv($1)._appendToJQuery_("body"._asJQuery());
self._assert_($recv(examStarted)._not());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"test01ByDefaultItDoesNotStartTheExam",{examStarted:examStarted},$globals.HeaderTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "test01ByDefaultItDoesNotStartTheExam\x0a\x09| examStarted |\x0a\x09examStarted := false.\x0a\x09\x0a\x09Header new\x0a\x09\x09whenStartExam: [ examStarted := true ];\x0a\x09\x09appendToJQuery: 'body' asJQuery.\x0a\x09\x0a\x09self assert: examStarted not",
referencedClasses: ["Header"],
//>>excludeEnd("ide");
messageSends: ["whenStartExam:", "new", "appendToJQuery:", "asJQuery", "assert:", "not"]
}),
$globals.HeaderTest);

$core.addMethod(
$core.method({
selector: "test02WhenStartExamIsClickedItStartsTheExam",
protocol: 'tests',
fn: function (){
var self=this;
var examStarted;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
examStarted=false;
$1=$recv($globals.Header)._new();
$recv($1)._whenStartExam_((function(){
examStarted=true;
return examStarted;

}));
$recv($1)._appendToJQuery_("body"._asJQuery());
self._clickOn_("Start exam");
self._assert_(examStarted);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"test02WhenStartExamIsClickedItStartsTheExam",{examStarted:examStarted},$globals.HeaderTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "test02WhenStartExamIsClickedItStartsTheExam\x0a\x09| examStarted |\x0a\x09examStarted := false.\x0a\x09\x0a\x09Header new\x0a\x09\x09whenStartExam: [ examStarted := true ];\x0a\x09\x09appendToJQuery: 'body' asJQuery.\x0a\x09\x0a\x09self clickOn: 'Start exam'.\x0a\x09\x0a\x09self assert: examStarted",
referencedClasses: ["Header"],
//>>excludeEnd("ide");
messageSends: ["whenStartExam:", "new", "appendToJQuery:", "asJQuery", "clickOn:", "assert:"]
}),
$globals.HeaderTest);



$core.addClass('TextCardTest', $globals.WidgetTest, [], 'OndafSimulator-Tests');
$core.addMethod(
$core.method({
selector: "test01TheTitleIsShown",
protocol: 'tests',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($globals.TextCard)._newIn_title_("body","a Title");
self._assertPageContains_("a Title");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"test01TheTitleIsShown",{},$globals.TextCardTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "test01TheTitleIsShown\x0a\x09TextCard newIn: 'body' title: 'a Title'.\x0a\x09self assertPageContains: 'a Title'",
referencedClasses: ["TextCard"],
//>>excludeEnd("ide");
messageSends: ["newIn:title:", "assertPageContains:"]
}),
$globals.TextCardTest);



$core.addClass('TextFileDropTargetTest', $globals.WidgetTest, ['droppedText', 'ctx'], 'OndafSimulator-Tests');
$core.addMethod(
$core.method({
selector: "dropFileEventWith:",
protocol: 'actions',
fn: function (aFile){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$3,$5,$7,$8,$6,$9,$4,$2;
$1=self._newObject();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["newObject"]=1;
//>>excludeEnd("ctx");
$recv($1)._at_put_("type","drop");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=1;
//>>excludeEnd("ctx");
$recv($1)._at_put_("preventDefault",(function(){

}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=2;
//>>excludeEnd("ctx");
$recv($1)._at_put_("stopPropagation",(function(){

}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=3;
//>>excludeEnd("ctx");
$3=self._newObject();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["newObject"]=2;
//>>excludeEnd("ctx");
$5=self._newObject();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["newObject"]=3;
//>>excludeEnd("ctx");
$7=self._newObject();
$recv($7)._at_put_((0),aFile);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=7;
//>>excludeEnd("ctx");
$recv($7)._at_put_("length",(1));
$8=$recv($7)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["yourself"]=1;
//>>excludeEnd("ctx");
$6=$8;
$recv($5)._at_put_("files",$6);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=6;
//>>excludeEnd("ctx");
$9=$recv($5)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["yourself"]=2;
//>>excludeEnd("ctx");
$4=$9;
$recv($3)._at_put_("dataTransfer",$4);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=5;
//>>excludeEnd("ctx");
$2=$recv($3)._yourself();
$recv($1)._at_put_("originalEvent",$2);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=4;
//>>excludeEnd("ctx");
return $recv($1)._jsObject();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"dropFileEventWith:",{aFile:aFile},$globals.TextFileDropTargetTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aFile"],
source: "dropFileEventWith: aFile\x0a\x09^ self newObject\x0a\x09\x09at: 'type' put: 'drop';\x0a\x09\x09at: 'preventDefault' put: [];\x0a\x09\x09at: 'stopPropagation' put: [];\x0a\x09\x09at: 'originalEvent' put: (\x0a\x09\x09\x09self newObject at: 'dataTransfer' put: (\x0a\x09\x09\x09\x09self newObject\x0a\x09\x09\x09\x09\x09at: 'files' put: (\x0a\x09\x09\x09\x09\x09\x09self newObject\x0a\x09\x09\x09\x09\x09\x09\x09at: 0 put: aFile;\x0a\x09\x09\x09\x09\x09\x09\x09at: 'length' put: 1;\x0a\x09\x09\x09\x09\x09\x09\x09yourself\x0a\x09\x09\x09\x09\x09); yourself\x0a\x09\x09\x09); yourself\x0a\x09\x09);\x0a\x09\x09jsObject.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:put:", "newObject", "yourself", "jsObject"]
}),
$globals.TextFileDropTargetTest);

$core.addMethod(
$core.method({
selector: "dropFileEventWith:and:",
protocol: 'actions',
fn: function (aFile,anotherFile){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$3,$5,$7,$8,$6,$9,$4,$2;
$1=self._newObject();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["newObject"]=1;
//>>excludeEnd("ctx");
$recv($1)._at_put_("type","drop");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=1;
//>>excludeEnd("ctx");
$recv($1)._at_put_("preventDefault",(function(){

}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=2;
//>>excludeEnd("ctx");
$recv($1)._at_put_("stopPropagation",(function(){

}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=3;
//>>excludeEnd("ctx");
$3=self._newObject();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["newObject"]=2;
//>>excludeEnd("ctx");
$5=self._newObject();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["newObject"]=3;
//>>excludeEnd("ctx");
$7=self._newObject();
$recv($7)._at_put_((0),aFile);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=7;
//>>excludeEnd("ctx");
$recv($7)._at_put_((1),anotherFile);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=8;
//>>excludeEnd("ctx");
$recv($7)._at_put_("length",(2));
$8=$recv($7)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["yourself"]=1;
//>>excludeEnd("ctx");
$6=$8;
$recv($5)._at_put_("files",$6);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=6;
//>>excludeEnd("ctx");
$9=$recv($5)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["yourself"]=2;
//>>excludeEnd("ctx");
$4=$9;
$recv($3)._at_put_("dataTransfer",$4);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=5;
//>>excludeEnd("ctx");
$2=$recv($3)._yourself();
$recv($1)._at_put_("originalEvent",$2);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=4;
//>>excludeEnd("ctx");
return $recv($1)._jsObject();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"dropFileEventWith:and:",{aFile:aFile,anotherFile:anotherFile},$globals.TextFileDropTargetTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aFile", "anotherFile"],
source: "dropFileEventWith: aFile and: anotherFile\x0a\x09^ self newObject\x0a\x09\x09at: 'type' put: 'drop';\x0a\x09\x09at: 'preventDefault' put: [];\x0a\x09\x09at: 'stopPropagation' put: [];\x0a\x09\x09at: 'originalEvent' put: (\x0a\x09\x09\x09self newObject at: 'dataTransfer' put: (\x0a\x09\x09\x09\x09self newObject\x0a\x09\x09\x09\x09\x09at: 'files' put: (\x0a\x09\x09\x09\x09\x09\x09self newObject\x0a\x09\x09\x09\x09\x09\x09\x09at: 0 put: aFile;\x0a\x09\x09\x09\x09\x09\x09\x09at: 1 put: anotherFile;\x0a\x09\x09\x09\x09\x09\x09\x09at: 'length' put: 2;\x0a\x09\x09\x09\x09\x09\x09\x09yourself\x0a\x09\x09\x09\x09\x09); yourself\x0a\x09\x09\x09); yourself\x0a\x09\x09);\x0a\x09\x09jsObject.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:put:", "newObject", "yourself", "jsObject"]
}),
$globals.TextFileDropTargetTest);

$core.addMethod(
$core.method({
selector: "newObject",
protocol: 'util',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($globals.JSON)._parse_("{}");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"newObject",{},$globals.TextFileDropTargetTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "newObject\x0a\x09^ JSON parse: '{}'",
referencedClasses: ["JSON"],
//>>excludeEnd("ide");
messageSends: ["parse:"]
}),
$globals.TextFileDropTargetTest);

$core.addMethod(
$core.method({
selector: "setUp",
protocol: 'running',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true,
//>>excludeEnd("ctx");
($globals.TextFileDropTargetTest.superclass||$boot.nilAsClass).fn.prototype._setUp.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
self["@ctx"]=self["@context"];
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"setUp",{},$globals.TextFileDropTargetTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "setUp\x0a\x09super setUp.\x0a\x09ctx := context",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["setUp"]
}),
$globals.TextFileDropTargetTest);

$core.addMethod(
$core.method({
selector: "test01ReadsDroppedFile",
protocol: 'tests',
fn: function (){
var self=this;
var file,event;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
file=$recv($globals.Blob)._newValue_value_(["texto archivo"],$globals.HashedCollection._newFromPairs_(["type","text/plain"]));
event=self._dropFileEventWith_(file);
self._timeout_((100));
$recv($globals.TextFileDropTarget)._newIn_handler_("body",(function(txt){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(self["@ctx"])._execute_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
self._assert_equals_(txt,"texto archivo");
return self._finished();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({txt:txt},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$recv(".text-file-target"._asJQuery())._trigger_(event);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"test01ReadsDroppedFile",{file:file,event:event},$globals.TextFileDropTargetTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "test01ReadsDroppedFile\x0a\x09| file event |\x0a\x09file := Blob newValue: #('texto archivo') value: #{'type' -> 'text/plain'}.\x0a\x09event := self dropFileEventWith: file.\x0a\x09self timeout: 100.\x0a\x09\x0a\x09TextFileDropTarget\x0a\x09\x09newIn: 'body'\x0a\x09\x09handler: [ :txt | ctx execute: [ self assert: txt equals: 'texto archivo'. self finished ] ].\x0a\x09\x0a\x09'.text-file-target' asJQuery trigger: event",
referencedClasses: ["Blob", "TextFileDropTarget"],
//>>excludeEnd("ide");
messageSends: ["newValue:value:", "dropFileEventWith:", "timeout:", "newIn:handler:", "execute:", "assert:equals:", "finished", "trigger:", "asJQuery"]
}),
$globals.TextFileDropTargetTest);

$core.addMethod(
$core.method({
selector: "test02CanDropMoreThanOneFile",
protocol: 'tests',
fn: function (){
var self=this;
var file1,file2,event,expected;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
file1=$recv($globals.Blob)._newValue_value_(["texto archivo 1"],$globals.HashedCollection._newFromPairs_(["type","text/plain"]));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["newValue:value:"]=1;
//>>excludeEnd("ctx");
file2=$recv($globals.Blob)._newValue_value_(["texto archivo 2"],$globals.HashedCollection._newFromPairs_(["type","text/plain"]));
expected=["texto archivo 1", "texto archivo 2"];
event=self._dropFileEventWith_and_(file1,file2);
self._timeout_((100));
$recv($globals.TextFileDropTarget)._newIn_handler_("body",(function(txt){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(self["@ctx"])._execute_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$recv(expected)._remove_ifAbsent_(txt,(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx4) {
//>>excludeEnd("ctx");
return self._fail();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,3)});
//>>excludeEnd("ctx");
}));
return $recv(expected)._ifEmpty_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx4) {
//>>excludeEnd("ctx");
return self._finished();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,4)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({txt:txt},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$recv(".text-file-target"._asJQuery())._trigger_(event);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"test02CanDropMoreThanOneFile",{file1:file1,file2:file2,event:event,expected:expected},$globals.TextFileDropTargetTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "test02CanDropMoreThanOneFile\x0a\x09| file1 file2 event expected |\x0a\x09file1 := Blob newValue: #('texto archivo 1') value: #{'type' -> 'text/plain'}.\x0a\x09file2 := Blob newValue: #('texto archivo 2') value: #{'type' -> 'text/plain'}.\x0a\x09expected := #('texto archivo 1' 'texto archivo 2').\x0a\x09event := self dropFileEventWith: file1 and: file2.\x0a\x09self timeout: 100.\x0a\x09\x0a\x09TextFileDropTarget\x0a\x09\x09newIn: 'body'\x0a\x09\x09handler: [ :txt | ctx execute: [ expected remove: txt ifAbsent: [ self fail ]. expected ifEmpty: [ self finished ] ] ].\x0a\x09\x0a\x09'.text-file-target' asJQuery trigger: event",
referencedClasses: ["Blob", "TextFileDropTarget"],
//>>excludeEnd("ide");
messageSends: ["newValue:value:", "dropFileEventWith:and:", "timeout:", "newIn:handler:", "execute:", "remove:ifAbsent:", "fail", "ifEmpty:", "finished", "trigger:", "asJQuery"]
}),
$globals.TextFileDropTargetTest);


});

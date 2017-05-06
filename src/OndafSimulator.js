define(["amber/boot"
//>>excludeStart("imports", pragmas.excludeImports);
, "amber/jquery/Wrappers-JQuery", "amber/web/Web", "silk/Silk"
//>>excludeEnd("imports");
, "amber/web/Web", "amber_core/Kernel-Collections", "amber_core/Kernel-Methods", "amber_core/Kernel-Objects"], function($boot
//>>excludeStart("imports", pragmas.excludeImports);

//>>excludeEnd("imports");
){"use strict";
if(!$boot.nilAsReceiver)$boot.nilAsReceiver=$boot.nil;
if(!("nilAsValue" in $boot))$boot.nilAsValue=$boot.nilAsReceiver;
var $core=$boot.api,nil=$boot.nilAsValue,$nil=$boot.nilAsReceiver,$recv=$boot.asReceiver,$globals=$boot.globals;
if(!$boot.nilAsClass)$boot.nilAsClass=$boot.dnu;
$core.addPackage("OndafSimulator");
$core.packages["OndafSimulator"].innerEval = function (expr) { return eval(expr); };
$core.packages["OndafSimulator"].imports = ["amber/jquery/Wrappers-JQuery", "amber/web/Web", "silk/Silk"];
$core.packages["OndafSimulator"].transport = {"type":"amd","amdNamespace":"amber-ondafsimulator"};

$core.addClass("ExamPrinterTray", $globals.Object, ["selector"], "OndafSimulator");
$core.addMethod(
$core.method({
selector: "newCopy:of:titled:withTime:",
protocol: "as yet unclassified",
fn: function (textNumber,totalTexts,aString,aTimeInSeconds){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($globals.CTestTextCopy)._newWithView_($recv($globals.ExamTextView)._newIn_title_text_of_(self["@selector"],aString,textNumber,totalTexts));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"newCopy:of:titled:withTime:",{textNumber:textNumber,totalTexts:totalTexts,aString:aString,aTimeInSeconds:aTimeInSeconds},$globals.ExamPrinterTray)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["textNumber", "totalTexts", "aString", "aTimeInSeconds"],
source: "newCopy: textNumber of: totalTexts titled: aString withTime: aTimeInSeconds \x0a\x09^ CTestTextCopy newWithView: (ExamTextView newIn: selector title: aString text: textNumber of: totalTexts)",
referencedClasses: ["CTestTextCopy", "ExamTextView"],
//>>excludeEnd("ide");
messageSends: ["newWithView:", "newIn:title:text:of:"]
}),
$globals.ExamPrinterTray);

$core.addMethod(
$core.method({
selector: "selector:",
protocol: "as yet unclassified",
fn: function (aSelector){
var self=this;
self["@selector"]=aSelector;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aSelector"],
source: "selector: aSelector\x0a\x09selector := aSelector",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ExamPrinterTray);


$core.addMethod(
$core.method({
selector: "newOn:",
protocol: "as yet unclassified",
fn: function (aSelector){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._new();
$recv($1)._selector_(aSelector);
return $recv($1)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"newOn:",{aSelector:aSelector},$globals.ExamPrinterTray.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aSelector"],
source: "newOn: aSelector\x0a\x09^ self new\x0a\x09\x09selector: aSelector;\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["selector:", "new", "yourself"]
}),
$globals.ExamPrinterTray.a$cls);


$core.addClass("ExamTextView", $globals.Widget, ["title", "content", "continueCheckbox", "continueButton", "inputs", "container", "textNumber", "numberOfTexts", "infoSeconds", "continueAction", "renderArea", "actions"], "OndafSimulator");
$core.addMethod(
$core.method({
selector: "addText:",
protocol: "building",
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self["@content"])._add_((function(html){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv(html)._span())._with_($recv(aString).__comma(" "));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"addText:",{aString:aString},$globals.ExamTextView)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "addText: aString\x0a\x09content add: [ :html | html span with: aString, ' ' ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["add:", "with:", "span", ","]
}),
$globals.ExamTextView);

$core.addMethod(
$core.method({
selector: "addWordToComplete:",
protocol: "building",
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$4,$3;
$recv(self["@content"])._add_((function(html){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=$recv(html)._tag_("nobr");
$recv($1)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$recv($recv(html)._span())._with_(aString);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["with:"]=2;
//>>excludeEnd("ctx");
$2=self["@inputs"];
$4=$recv(html)._input();
$recv($4)._type_("text");
$recv($4)._at_put_("size",(10));
$3=$recv($4)._asJQuery();
return $recv($2)._add_($3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
return $recv($1)._with_(" ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["add:"]=1;
//>>excludeEnd("ctx");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"addWordToComplete:",{aString:aString},$globals.ExamTextView)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "addWordToComplete: aString\x0a\x09content add: [ :html |\x0a\x09\x09(html tag: 'nobr')\x0a\x09\x09\x09with: [\x0a\x09\x09\x09\x09html span with: aString.\x0a\x09\x09\x09\x09inputs add: (html input\x0a\x09\x09\x09\x09\x09type: 'text';\x0a\x09\x09\x09\x09\x09at: 'size' put: 10;\x0a\x09\x09\x09\x09\x09asJQuery)\x0a\x09\x09\x09];\x0a\x09\x09\x09with: ' '\x0a\x09]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["add:", "with:", "tag:", "span", "type:", "input", "at:put:", "asJQuery"]
}),
$globals.ExamTextView);

$core.addMethod(
$core.method({
selector: "answers",
protocol: "actions",
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv(self["@inputs"])._collect_((function(input){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(input)._val();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({input:input},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"answers",{},$globals.ExamTextView)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "answers\x0a\x09^ inputs collect: [ :input | input val ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["collect:", "val"]
}),
$globals.ExamTextView);

$core.addMethod(
$core.method({
selector: "consumeResults:",
protocol: "actions",
fn: function (resultStream){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._showResults_($recv(resultStream)._next_($recv(self["@inputs"])._size()));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"consumeResults:",{resultStream:resultStream},$globals.ExamTextView)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["resultStream"],
source: "consumeResults: resultStream\x0a\x09self showResults: (resultStream next: inputs size)",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["showResults:", "next:", "size"]
}),
$globals.ExamTextView);

$core.addMethod(
$core.method({
selector: "continue",
protocol: "rendering",
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self["@actions"])._remove();
$recv(self["@continueAction"])._value();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"continue",{},$globals.ExamTextView)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "continue\x0a\x09actions remove.\x0a\x09continueAction value",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["remove", "value"]
}),
$globals.ExamTextView);

$core.addMethod(
$core.method({
selector: "hide",
protocol: "rendering",
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self["@renderArea"])._hide();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"hide",{},$globals.ExamTextView)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "hide\x0a\x09renderArea hide",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["hide"]
}),
$globals.ExamTextView);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: "initialization",
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true,
//>>excludeEnd("ctx");
($globals.ExamTextView.superclass||$boot.nilAsClass).fn.prototype._initialize.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
self["@content"]=$recv($globals.OrderedCollection)._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=1;
//>>excludeEnd("ctx");
self["@inputs"]=$recv($globals.OrderedCollection)._new();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.ExamTextView)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09content := OrderedCollection new.\x0a\x09inputs := OrderedCollection new",
referencedClasses: ["OrderedCollection"],
//>>excludeEnd("ide");
messageSends: ["initialize", "new"]
}),
$globals.ExamTextView);

$core.addMethod(
$core.method({
selector: "initializeWithTitle:selector:number:of:",
protocol: "initialization",
fn: function (aString,aSelector,aNumber,totalNumber){
var self=this;
self["@title"]=aString;
self["@container"]=aSelector;
self["@textNumber"]=aNumber;
self["@numberOfTexts"]=totalNumber;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "aSelector", "aNumber", "totalNumber"],
source: "initializeWithTitle: aString selector: aSelector number: aNumber of: totalNumber\x0a\x09title := aString.\x0a\x09container := aSelector.\x0a\x09textNumber := aNumber.\x0a\x09numberOfTexts := totalNumber",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ExamTextView);

$core.addMethod(
$core.method({
selector: "onContinueCheckboxChanged",
protocol: "private",
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self["@continueCheckbox"])._is_(":checked");
if($core.assert($1)){
$recv(self["@continueButton"])._css_value_("visibility","visible");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["css:value:"]=1;
//>>excludeEnd("ctx");
} else {
$recv(self["@continueButton"])._css_value_("visibility","hidden");
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onContinueCheckboxChanged",{},$globals.ExamTextView)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "onContinueCheckboxChanged\x0a\x09(continueCheckbox is: ':checked')\x0a\x09\x09ifTrue: [ continueButton css: 'visibility' value: 'visible' ]\x0a\x09\x09ifFalse: [ continueButton css: 'visibility' value: 'hidden' ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:ifFalse:", "is:", "css:value:"]
}),
$globals.ExamTextView);

$core.addMethod(
$core.method({
selector: "render",
protocol: "rendering",
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._appendToJQuery_($recv(self["@container"])._asJQuery());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"render",{},$globals.ExamTextView)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "render\x0a\x09self appendToJQuery: container asJQuery",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["appendToJQuery:", "asJQuery"]
}),
$globals.ExamTextView);

$core.addMethod(
$core.method({
selector: "renderActionsOn:",
protocol: "rendering",
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3,$4,$5,$6,$7,$8;
$1=$recv(html)._div();
$recv($1)._class_("actions");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["class:"]=1;
//>>excludeEnd("ctx");
$recv($1)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv($recv(html)._label())._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$2=$recv(html)._input();
$recv($2)._type_("checkbox");
$recv($2)._onChange_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx4) {
//>>excludeEnd("ctx");
return self._onContinueCheckboxChanged();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,3)});
//>>excludeEnd("ctx");
}));
$3=$recv($2)._asJQuery();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["asJQuery"]=1;
//>>excludeEnd("ctx");
self["@continueCheckbox"]=$3;
self["@continueCheckbox"];
$4=$recv(html)._img();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["img"]=1;
//>>excludeEnd("ctx");
$recv($4)._src_("https://www.ondaf.de/ondaf/durchfuehrung/bilder/text.gif");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["src:"]=1;
//>>excludeEnd("ctx");
$5=$recv($4)._width_((190));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["width:"]=1;
//>>excludeEnd("ctx");
return $5;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=2;
//>>excludeEnd("ctx");
$6=$recv(html)._a();
$recv($6)._href_("#");
$recv($6)._class_("continue");
$recv($6)._onClick_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return self._continue();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,4)});
//>>excludeEnd("ctx");
}));
$recv($6)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$7=$recv(html)._img();
$recv($7)._src_("https://www.ondaf.de/ondaf/durchfuehrung/bilder/weiter.gif");
return $recv($7)._width_((256));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,5)});
//>>excludeEnd("ctx");
}));
$8=$recv($6)._asJQuery();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["asJQuery"]=2;
//>>excludeEnd("ctx");
self["@continueButton"]=$8;
return self["@continueButton"];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
self["@actions"]=$recv($1)._asJQuery();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderActionsOn:",{html:html},$globals.ExamTextView)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderActionsOn: html\x0a\x09actions := html div\x0a\x09\x09class: 'actions';\x0a\x09\x09with: [\x0a\x09\x09\x09html label with: [\x0a\x09\x09\x09\x09continueCheckbox := html input\x0a\x09\x09\x09\x09\x09type: 'checkbox';\x0a\x09\x09\x09\x09\x09onChange: [ self onContinueCheckboxChanged ];\x0a\x09\x09\x09\x09\x09asJQuery.\x0a\x09\x09\x09\x09html img\x0a\x09\x09\x09\x09\x09src: 'https://www.ondaf.de/ondaf/durchfuehrung/bilder/text.gif';\x0a\x09\x09\x09\x09\x09width: 190\x0a\x09\x09\x09].\x0a\x09\x09\x09continueButton := html a\x0a\x09\x09\x09\x09href: '#';\x0a\x09\x09\x09\x09class: 'continue';\x0a\x09\x09\x09\x09onClick: [ self continue ];\x0a\x09\x09\x09\x09with: [\x0a\x09\x09\x09\x09\x09html img\x0a\x09\x09\x09\x09\x09src: 'https://www.ondaf.de/ondaf/durchfuehrung/bilder/weiter.gif';\x0a\x09\x09\x09\x09\x09width: 256\x0a\x09\x09\x09\x09];\x0a\x09\x09\x09\x09asJQuery\x0a\x09\x09];\x0a\x09\x09asJQuery",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["class:", "div", "with:", "label", "type:", "input", "onChange:", "onContinueCheckboxChanged", "asJQuery", "src:", "img", "width:", "href:", "a", "onClick:", "continue"]
}),
$globals.ExamTextView);

$core.addMethod(
$core.method({
selector: "renderContentOn:",
protocol: "rendering",
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(html)._p();
$recv($1)._class_("content");
$recv($1)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(self["@content"])._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv(each)._value_(html);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({each:each},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderContentOn:",{html:html},$globals.ExamTextView)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderContentOn: html\x0a\x09html p\x0a\x09\x09class: 'content';\x0a\x09\x09with: [\x09content do: [ :each | each value: html ] ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["class:", "p", "with:", "do:", "value:"]
}),
$globals.ExamTextView);

$core.addMethod(
$core.method({
selector: "renderInfoOn:",
protocol: "rendering",
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$3,$4,$2;
$1=$recv(html)._div();
$recv($1)._class_("info");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["class:"]=1;
//>>excludeEnd("ctx");
$2=$recv($1)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$3=$recv(html)._span();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["span"]=1;
//>>excludeEnd("ctx");
$recv($3)._class_("text-number");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["class:"]=2;
//>>excludeEnd("ctx");
$recv($3)._with_("Text ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=2;
//>>excludeEnd("ctx");
$recv($3)._with_(self["@textNumber"]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=3;
//>>excludeEnd("ctx");
$recv($3)._with_(" von ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=4;
//>>excludeEnd("ctx");
$recv($3)._with_(self["@numberOfTexts"]);
$4=$recv(html)._span();
$recv($4)._class_("time");
self["@infoSeconds"]=$recv($4)._asJQuery();
return self["@infoSeconds"];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderInfoOn:",{html:html},$globals.ExamTextView)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderInfoOn: html\x0a\x09html div\x0a\x09\x09class: 'info';\x0a\x09\x09with: [\x0a\x09\x09\x09html span class: 'text-number';\x0a\x09\x09\x09\x09with: 'Text ';\x0a\x09\x09\x09\x09with: textNumber;\x0a\x09\x09\x09\x09with: ' von ';\x0a\x09\x09\x09\x09with: numberOfTexts.\x0a\x09\x09\x09infoSeconds := html span class: 'time';\x0a\x09\x09\x09\x09asJQuery.\x0a\x09\x09]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["class:", "div", "with:", "span", "asJQuery"]
}),
$globals.ExamTextView);

$core.addMethod(
$core.method({
selector: "renderOn:",
protocol: "rendering",
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(html)._div();
$recv($1)._class_("text");
$recv($1)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._renderTitleOn_(html);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
$recv($1)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._renderContentOn_(html);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=2;
//>>excludeEnd("ctx");
$recv($1)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._renderActionsOn_(html);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=3;
//>>excludeEnd("ctx");
$recv($1)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._renderInfoOn_(html);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,4)});
//>>excludeEnd("ctx");
}));
self["@renderArea"]=$recv($1)._asJQuery();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},$globals.ExamTextView)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderOn: html\x0a\x09renderArea := html div\x0a\x09\x09class: 'text';\x0a\x09\x09with: [ self renderTitleOn: html ];\x0a\x09\x09with: [ self renderContentOn: html ];\x0a\x09\x09with: [ self renderActionsOn: html ];\x0a\x09\x09with: [ self renderInfoOn: html ];\x0a\x09\x09asJQuery",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["class:", "div", "with:", "renderTitleOn:", "renderContentOn:", "renderActionsOn:", "renderInfoOn:", "asJQuery"]
}),
$globals.ExamTextView);

$core.addMethod(
$core.method({
selector: "renderTitleOn:",
protocol: "rendering",
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(html)._p();
$recv($1)._class_("title");
$recv($1)._with_(self["@title"]);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderTitleOn:",{html:html},$globals.ExamTextView)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderTitleOn: html\x0a\x09html p\x0a\x09\x09class: 'title';\x0a\x09\x09with: title",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["class:", "p", "with:"]
}),
$globals.ExamTextView);

$core.addMethod(
$core.method({
selector: "show",
protocol: "rendering",
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self["@renderArea"])._show();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"show",{},$globals.ExamTextView)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "show\x0a\x09renderArea show",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["show"]
}),
$globals.ExamTextView);

$core.addMethod(
$core.method({
selector: "showResults:",
protocol: "actions",
fn: function (results){
var self=this;
var classes;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
classes=$recv(results)._collect_((function(result){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
if($core.assert(result)){
return "correct";
} else {
return "incorrect";
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({result:result},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$recv(self["@inputs"])._with_do_(classes,(function(input,class_){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(input)._addClass_(class_);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({input:input,class_:class_},$ctx1,4)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"showResults:",{results:results,classes:classes},$globals.ExamTextView)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["results"],
source: "showResults: results\x0a\x09| classes |\x0a\x09classes := results collect: [ :result |\x0a\x09\x09result ifTrue: [ 'correct' ] ifFalse: [ 'incorrect' ]\x0a\x09].\x0a\x09inputs with: classes do: [ :input :class |\x0a\x09\x09input addClass: class\x0a\x09]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["collect:", "ifTrue:ifFalse:", "with:do:", "addClass:"]
}),
$globals.ExamTextView);

$core.addMethod(
$core.method({
selector: "showSeconds:",
protocol: "actions",
fn: function (seconds){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self["@infoSeconds"])._text_("Verbleibende Sekunden: ".__comma(seconds));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"showSeconds:",{seconds:seconds},$globals.ExamTextView)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["seconds"],
source: "showSeconds: seconds\x0a\x09infoSeconds text: 'Verbleibende Sekunden: ', seconds",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["text:", ","]
}),
$globals.ExamTextView);

$core.addMethod(
$core.method({
selector: "whenContinueDo:",
protocol: "rendering",
fn: function (aBlock){
var self=this;
self["@continueAction"]=aBlock;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "whenContinueDo: aBlock\x0a\x09continueAction := aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ExamTextView);


$core.addMethod(
$core.method({
selector: "newIn:title:text:of:",
protocol: "as yet unclassified",
fn: function (aSelector,aString,number,totalNumber){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._new();
$recv($1)._initializeWithTitle_selector_number_of_(aString,aSelector,number,totalNumber);
return $recv($1)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"newIn:title:text:of:",{aSelector:aSelector,aString:aString,number:number,totalNumber:totalNumber},$globals.ExamTextView.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aSelector", "aString", "number", "totalNumber"],
source: "newIn: aSelector title: aString text: number of: totalNumber\x0a\x09^ self new\x0a\x09\x09initializeWithTitle: aString selector: aSelector number: number of: totalNumber;\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["initializeWithTitle:selector:number:of:", "new", "yourself"]
}),
$globals.ExamTextView.a$cls);


$core.addClass("Header", $globals.Widget, ["startExamHandler", "headerElement", "newExamHandler"], "OndafSimulator");
$core.addMethod(
$core.method({
selector: "initialize",
protocol: "initialization",
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true,
//>>excludeEnd("ctx");
($globals.Header.superclass||$boot.nilAsClass).fn.prototype._initialize.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
self["@startExamHandler"]=(function(){

});
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.Header)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09startExamHandler := []",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["initialize"]
}),
$globals.Header);

$core.addMethod(
$core.method({
selector: "remove",
protocol: "rendering",
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self["@headerElement"])._remove();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"remove",{},$globals.Header)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "remove\x0a\x09headerElement remove",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["remove"]
}),
$globals.Header);

$core.addMethod(
$core.method({
selector: "renderOn:",
protocol: "rendering",
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3,$4;
$1=$recv(html)._header();
$recv($1)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$2=$recv(html)._a();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["a"]=1;
//>>excludeEnd("ctx");
$recv($2)._with_("New exam");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=2;
//>>excludeEnd("ctx");
$recv($2)._tabindex_((0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["tabindex:"]=1;
//>>excludeEnd("ctx");
$3=$recv($2)._onClick_(self["@newExamHandler"]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["onClick:"]=1;
//>>excludeEnd("ctx");
$3;
$4=$recv(html)._a();
$recv($4)._with_("Start exam");
$recv($4)._tabindex_((0));
return $recv($4)._onClick_(self["@startExamHandler"]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
self["@headerElement"]=$recv($1)._asJQuery();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},$globals.Header)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderOn: html\x0a\x09headerElement := html header\x0a\x09\x09with: [\x0a\x09\x09\x09html a\x0a\x09\x09\x09\x09with: 'New exam';\x0a\x09\x09\x09\x09tabindex: 0;\x0a\x09\x09\x09\x09onClick: newExamHandler.\x0a\x09\x09\x09html a\x0a\x09\x09\x09\x09with: 'Start exam';\x0a\x09\x09\x09\x09tabindex: 0;\x0a\x09\x09\x09\x09onClick: startExamHandler\x0a\x09\x09];\x0a\x09\x09asJQuery",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["with:", "header", "a", "tabindex:", "onClick:", "asJQuery"]
}),
$globals.Header);

$core.addMethod(
$core.method({
selector: "whenNewExam:",
protocol: "events",
fn: function (aBlock){
var self=this;
self["@newExamHandler"]=aBlock;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "whenNewExam: aBlock\x0a\x09newExamHandler := aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Header);

$core.addMethod(
$core.method({
selector: "whenStartExam:",
protocol: "events",
fn: function (aBlock){
var self=this;
self["@startExamHandler"]=aBlock;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "whenStartExam: aBlock\x0a\x09startExamHandler := aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Header);



$core.addClass("OndafSimulator", $globals.Object, ["fileDropTarget", "examDesigner", "theExam", "header", "printer", "currentExam", "copies"], "OndafSimulator");
$core.addMethod(
$core.method({
selector: "addText:",
protocol: "action",
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self["@examDesigner"])._considerText_(aString);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"addText:",{aString:aString},$globals.OndafSimulator)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "addText: aString\x0a\x09examDesigner considerText: aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["considerText:"]
}),
$globals.OndafSimulator);

$core.addMethod(
$core.method({
selector: "addToList:",
protocol: "action",
fn: function (aTitle){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($globals.TextCard)._newIn_title_("#content > .text-file-target",aTitle);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"addToList:",{aTitle:aTitle},$globals.OndafSimulator)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aTitle"],
source: "addToList: aTitle\x0a\x09TextCard newIn: '#content > .text-file-target' title: aTitle",
referencedClasses: ["TextCard"],
//>>excludeEnd("ide");
messageSends: ["newIn:title:"]
}),
$globals.OndafSimulator);

$core.addMethod(
$core.method({
selector: "augmentPage",
protocol: "starting",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3;
$1=$recv($globals.Header)._new();
$recv($1)._whenStartExam_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $self._startExam();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$recv($1)._whenNewExam_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$2="body"._asJQuery();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["asJQuery"]=1;
//>>excludeEnd("ctx");
$recv($2)._empty();
return $recv($globals.OndafSimulator)._start();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
$3="body"._asJQuery();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asJQuery"]=2;
//>>excludeEnd("ctx");
$recv($1)._appendToJQuery_($3);
$self["@header"]=$recv($1)._yourself();
$recv($recv($recv($globals.HTMLCanvas)._onJQuery_("body"._asJQuery()))._section())._id_("content");
$self["@fileDropTarget"]=$recv($globals.TextFileDropTarget)._newIn_handler_("#content",(function(txt){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $self._addText_(txt);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({txt:txt},$ctx1,3)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"augmentPage",{},$globals.OndafSimulator)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "augmentPage\x0a\x09header := Header new\x0a\x09\x09whenStartExam: [ self startExam ];\x0a\x09\x09whenNewExam: [ 'body' asJQuery empty. OndafSimulator start ];\x0a\x09\x09appendToJQuery: 'body' asJQuery;\x0a\x09\x09yourself.\x0a\x09\x0a\x09(HTMLCanvas onJQuery: 'body' asJQuery) section id: 'content'.\x0a\x09\x09\x0a\x09fileDropTarget := TextFileDropTarget\x0a\x09\x09newIn: '#content'\x0a\x09\x09handler: [ :txt | self addText: txt ]",
referencedClasses: ["Header", "OndafSimulator", "HTMLCanvas", "TextFileDropTarget"],
//>>excludeEnd("ide");
messageSends: ["whenStartExam:", "new", "startExam", "whenNewExam:", "empty", "asJQuery", "start", "appendToJQuery:", "yourself", "id:", "section", "onJQuery:", "newIn:handler:", "addText:"]
}),
$globals.OndafSimulator);

$core.addMethod(
$core.method({
selector: "beginNextText",
protocol: "action",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($self["@currentExam"])._atEnd();
if($core.assert($1)){
var result;
result=$recv($self["@theExam"])._evaluate_on_($self["@copies"],$recv($globals.ResultView)._newIn_("#content"));
result;
$recv(result)._giveToStudent();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["giveToStudent"]=1;
//>>excludeEnd("ctx");
} else {
$recv($recv($self["@currentExam"])._next())._giveToStudent();
}
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"beginNextText",{},$globals.OndafSimulator)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "beginNextText\x0a\x09currentExam atEnd ifTrue: [\x0a\x09\x09| result |\x0a\x09\x09result := theExam evaluate: copies on: (ResultView newIn: '#content').\x0a\x09\x09result giveToStudent.\x0a\x09] ifFalse: [\x0a\x09\x09currentExam next giveToStudent.\x0a\x09]",
referencedClasses: ["ResultView"],
//>>excludeEnd("ide");
messageSends: ["ifTrue:ifFalse:", "atEnd", "evaluate:on:", "newIn:", "giveToStudent", "next"]
}),
$globals.OndafSimulator);

$core.addMethod(
$core.method({
selector: "hideDropArea",
protocol: "action",
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self["@header"])._remove();
$recv(self["@fileDropTarget"])._hide();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"hideDropArea",{},$globals.OndafSimulator)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "hideDropArea\x0a\x09header remove.\x0a\x09fileDropTarget hide.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["remove", "hide"]
}),
$globals.OndafSimulator);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: "starting",
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true,
//>>excludeEnd("ctx");
($globals.OndafSimulator.superclass||$boot.nilAsClass).fn.prototype._initialize.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
self["@examDesigner"]=$recv($globals.ExamDesigner)._new();
self["@printer"]=$recv($globals.CTestPrinter)._newWithTray_($recv($globals.ExamPrinterTray)._newOn_("#content"));
$recv(self["@examDesigner"])._informProgressTo_((function(title){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._addToList_(title);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({title:title},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.OndafSimulator)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09examDesigner := ExamDesigner new.\x0a\x09printer := CTestPrinter newWithTray: (ExamPrinterTray newOn: '#content').\x0a\x09examDesigner\x0a\x09\x09informProgressTo: [ :title | self addToList: title ]\x0a\x09",
referencedClasses: ["ExamDesigner", "CTestPrinter", "ExamPrinterTray"],
//>>excludeEnd("ide");
messageSends: ["initialize", "new", "newWithTray:", "newOn:", "informProgressTo:", "addToList:"]
}),
$globals.OndafSimulator);

$core.addMethod(
$core.method({
selector: "startExam",
protocol: "action",
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._hideDropArea();
self["@theExam"]=$recv(self["@examDesigner"])._designExam();
self["@copies"]=$recv(self["@printer"])._print_(self["@theExam"]);
$recv(self["@copies"])._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(each)._whenFinishDo_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return self._beginNextText();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["beginNextText"]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
self["@currentExam"]=$recv(self["@copies"])._readStream();
self._beginNextText();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"startExam",{},$globals.OndafSimulator)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "startExam\x0a\x09self hideDropArea.\x0a\x09\x0a\x09theExam := examDesigner designExam.\x0a\x09copies := printer print: theExam.\x0a\x09\x0a\x09copies do: [ :each | each whenFinishDo: [ self beginNextText ] ].\x0a\x09currentExam := copies readStream.\x0a\x09\x0a\x09self beginNextText",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["hideDropArea", "designExam", "print:", "do:", "whenFinishDo:", "beginNextText", "readStream"]
}),
$globals.OndafSimulator);


$globals.OndafSimulator.a$cls.iVarNames = ["currentInstance"];
$core.addMethod(
$core.method({
selector: "current",
protocol: "starting",
fn: function (){
var self=this;
return self["@currentInstance"];

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "current\x0a\x09^ currentInstance",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.OndafSimulator.a$cls);

$core.addMethod(
$core.method({
selector: "start",
protocol: "starting",
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self["@currentInstance"]=self._new();
$recv("body"._asJQuery())._empty();
$recv(self._current())._augmentPage();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"start",{},$globals.OndafSimulator.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "start\x0a\x09currentInstance := self new.\x0a\x09'body' asJQuery empty.\x0a\x09self current augmentPage",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["new", "empty", "asJQuery", "augmentPage", "current"]
}),
$globals.OndafSimulator.a$cls);


$core.addClass("ResultView", $globals.Widget, ["score", "totalScore", "percentage", "level", "container"], "OndafSimulator");
$core.addMethod(
$core.method({
selector: "container:",
protocol: "as yet unclassified",
fn: function (aContainer){
var self=this;
self["@container"]=aContainer;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aContainer"],
source: "container: aContainer\x0a\x09container := aContainer",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ResultView);

$core.addMethod(
$core.method({
selector: "level:",
protocol: "as yet unclassified",
fn: function (aLevel){
var self=this;
self["@level"]=aLevel;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aLevel"],
source: "level: aLevel\x0a\x09level := aLevel",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ResultView);

$core.addMethod(
$core.method({
selector: "percentage:",
protocol: "as yet unclassified",
fn: function (aPercentage){
var self=this;
self["@percentage"]=aPercentage;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPercentage"],
source: "percentage: aPercentage\x0a\x09percentage := aPercentage",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ResultView);

$core.addMethod(
$core.method({
selector: "renderOn:",
protocol: "as yet unclassified",
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$3,$5,$6,$7,$8,$9,$10,$13,$12,$11,$4,$2;
$1=$recv(html)._div();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["div"]=1;
//>>excludeEnd("ctx");
$recv($1)._class_("text result");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["class:"]=1;
//>>excludeEnd("ctx");
$2=$recv($1)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$3=$recv(html)._div();
$recv($3)._class_("info");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["class:"]=2;
//>>excludeEnd("ctx");
$4=$recv($3)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$5=$recv(html)._span();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["span"]=1;
//>>excludeEnd("ctx");
$recv($5)._with_("Der Test ist beendet. Sie haben folgendes Ergebnis erzielt:");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["with:"]=3;
//>>excludeEnd("ctx");
$6=$recv(html)._span();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["span"]=2;
//>>excludeEnd("ctx");
$recv($6)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx4) {
//>>excludeEnd("ctx");
$7=$recv(html)._span();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx4.sendIdx["span"]=3;
//>>excludeEnd("ctx");
$recv($7)._with_(self["@score"]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx4.sendIdx["with:"]=5;
//>>excludeEnd("ctx");
$8=$recv(html)._span();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx4.sendIdx["span"]=4;
//>>excludeEnd("ctx");
$recv($8)._with_("Punkte.");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx4.sendIdx["with:"]=6;
//>>excludeEnd("ctx");
$9=$recv(html)._span();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx4.sendIdx["span"]=5;
//>>excludeEnd("ctx");
return $recv($9)._with_(self["@level"]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx4.sendIdx["with:"]=7;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,3)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["with:"]=4;
//>>excludeEnd("ctx");
$recv($6)._class_("score");
$10=$recv(html)._span();
$13=$recv("Dies sind ".__comma(self["@percentage"])).__comma(" % der maximal möglichen ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx[","]=3;
//>>excludeEnd("ctx");
$12=$recv($13).__comma(self["@totalScore"]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx[","]=2;
//>>excludeEnd("ctx");
$11=$recv($12).__comma(" Punkte.");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx[","]=1;
//>>excludeEnd("ctx");
return $recv($10)._with_($11);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=2;
//>>excludeEnd("ctx");
return $4;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},$globals.ResultView)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderOn: html\x0a\x09html div\x0a\x09\x09class: 'text result';\x0a\x09\x09with: [\x0a\x09\x09\x09html div\x0a\x09\x09\x09\x09class: 'info';\x0a\x09\x09\x09\x09with: [\x0a\x09\x09\x09\x09\x09html span with: 'Der Test ist beendet. Sie haben folgendes Ergebnis erzielt:'.\x0a\x09\x09\x09\x09\x09html span with: [ html span with: score. html span with: 'Punkte.'. html span with: level ]; class: 'score'.\x0a\x09\x09\x09\x09\x09html span with: 'Dies sind ', percentage, ' % der maximal möglichen ', totalScore, ' Punkte.'\x0a\x09\x09\x09\x09]\x0a\x09\x09]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["class:", "div", "with:", "span", ","]
}),
$globals.ResultView);

$core.addMethod(
$core.method({
selector: "renderScore:of:percentage:level:",
protocol: "as yet unclassified",
fn: function (aScore,aTotalScore,aPercentage,aLevel){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._score_(aScore);
self._totalScore_(aTotalScore);
self._percentage_(aPercentage);
self._level_(aLevel);
self._appendToJQuery_(self["@container"]);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderScore:of:percentage:level:",{aScore:aScore,aTotalScore:aTotalScore,aPercentage:aPercentage,aLevel:aLevel},$globals.ResultView)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aScore", "aTotalScore", "aPercentage", "aLevel"],
source: "renderScore: aScore of: aTotalScore percentage: aPercentage level: aLevel\x0a\x09self\x0a\x09\x09score: aScore;\x0a\x09\x09totalScore: aTotalScore;\x0a\x09\x09percentage: aPercentage;\x0a\x09\x09level: aLevel;\x0a\x09\x09appendToJQuery: container",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["score:", "totalScore:", "percentage:", "level:", "appendToJQuery:"]
}),
$globals.ResultView);

$core.addMethod(
$core.method({
selector: "score:",
protocol: "as yet unclassified",
fn: function (aScore){
var self=this;
self["@score"]=aScore;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aScore"],
source: "score: aScore\x0a\x09score := aScore",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ResultView);

$core.addMethod(
$core.method({
selector: "totalScore:",
protocol: "as yet unclassified",
fn: function (aScore){
var self=this;
self["@totalScore"]=aScore;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aScore"],
source: "totalScore: aScore\x0a\x09totalScore := aScore",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ResultView);


$core.addMethod(
$core.method({
selector: "newIn:",
protocol: "as yet unclassified",
fn: function (aSelector){
var self=this;
var container;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
container="<div>"._asJQuery();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asJQuery"]=1;
//>>excludeEnd("ctx");
$recv($recv(aSelector)._asJQuery())._prepend_(container);
$1=self._new();
$recv($1)._container_(container);
return $recv($1)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"newIn:",{aSelector:aSelector,container:container},$globals.ResultView.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aSelector"],
source: "newIn: aSelector\x0a\x09| container |\x0a\x09container := '<div>' asJQuery.\x0a\x09aSelector asJQuery prepend: container.\x0a\x09\x0a\x09^ self new\x0a\x09\x09container: container;\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["asJQuery", "prepend:", "container:", "new", "yourself"]
}),
$globals.ResultView.a$cls);


$core.addClass("TextCard", $globals.Widget, ["card", "title"], "OndafSimulator");
$core.addMethod(
$core.method({
selector: "initializeWith:",
protocol: "initialization",
fn: function (aTitle){
var self=this;
self["@title"]=aTitle;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aTitle"],
source: "initializeWith: aTitle\x0a\x09title := aTitle",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.TextCard);

$core.addMethod(
$core.method({
selector: "renderOn:",
protocol: "rendering",
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(html)._div();
$recv($1)._with_(self["@title"]);
self["@card"]=$recv($1)._class_("text-card");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},$globals.TextCard)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderOn: html\x0a\x09card := html div\x0a\x09\x09with: title;\x0a\x09\x09class: 'text-card'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["with:", "div", "class:"]
}),
$globals.TextCard);


$core.addMethod(
$core.method({
selector: "newIn:title:",
protocol: "as yet unclassified",
fn: function (aSelector,aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._new();
$recv($1)._initializeWith_(aString);
$recv($1)._appendToJQuery_($recv(aSelector)._asJQuery());
return $recv($1)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"newIn:title:",{aSelector:aSelector,aString:aString},$globals.TextCard.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aSelector", "aString"],
source: "newIn: aSelector title: aString\x0a\x09^ self new\x0a\x09\x09initializeWith: aString;\x0a\x09\x09appendToJQuery: aSelector asJQuery;\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["initializeWith:", "new", "appendToJQuery:", "asJQuery", "yourself"]
}),
$globals.TextCard.a$cls);


$core.addClass("TextFileDropTarget", $globals.Widget, ["dropArea", "handler"], "OndafSimulator");
$core.addMethod(
$core.method({
selector: "handleDrop:",
protocol: "private",
fn: function (files){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(files)._select_thenDo_((function(file){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv(file)._type()).__eq("text/plain");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({file:file},$ctx1,1)});
//>>excludeEnd("ctx");
}),(function(file){
var reader;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
reader=$recv($globals.FileReader)._new();
reader;
$recv(reader)._addEventListener_do_("loadend",(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv(self["@handler"])._value_($recv(reader)._result());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,3)});
//>>excludeEnd("ctx");
}));
return $recv(reader)._readAsText_(file);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({file:file,reader:reader},$ctx1,2)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"handleDrop:",{files:files},$globals.TextFileDropTarget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["files"],
source: "handleDrop: files\x0a\x09files select: [ :file | file type = 'text/plain' ]\x0a\x09\x09thenDo: [ :file | | reader |\x0a\x09\x09\x09reader := FileReader new.\x0a\x09\x09\x09reader addEventListener: 'loadend' do: [\x0a\x09\x09\x09\x09handler value: reader result\x0a\x09\x09\x09].\x0a\x09\x09\x09reader readAsText: file\x0a\x09\x09]",
referencedClasses: ["FileReader"],
//>>excludeEnd("ide");
messageSends: ["select:thenDo:", "=", "type", "new", "addEventListener:do:", "value:", "result", "readAsText:"]
}),
$globals.TextFileDropTarget);

$core.addMethod(
$core.method({
selector: "handler:",
protocol: "events",
fn: function (aBlock){
var self=this;
self["@handler"]=aBlock;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "handler: aBlock\x0a\x09handler := aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.TextFileDropTarget);

$core.addMethod(
$core.method({
selector: "hide",
protocol: "actions",
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self["@dropArea"])._hide();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"hide",{},$globals.TextFileDropTarget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "hide\x0a\x09dropArea hide",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["hide"]
}),
$globals.TextFileDropTarget);

$core.addMethod(
$core.method({
selector: "renderOn:",
protocol: "rendering",
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$3,$2;
$1=$recv(html)._div();
$recv($1)._class_("text-file-target");
self["@dropArea"]=$recv($1)._asJQuery();
$recv(self["@dropArea"])._on_do_("dragenter",(function(event){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv(event)._preventDefault();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["preventDefault"]=1;
//>>excludeEnd("ctx");
return $recv(self["@dropArea"])._addClass_("dragover");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({event:event},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["on:do:"]=1;
//>>excludeEnd("ctx");
$recv(self["@dropArea"])._on_do_("dragleave",(function(event){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(self["@dropArea"])._removeClass_("dragover");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["removeClass:"]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({event:event},$ctx1,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["on:do:"]=2;
//>>excludeEnd("ctx");
$recv(self["@dropArea"])._on_do_("dragover",(function(event){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv(event)._preventDefault();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["preventDefault"]=2;
//>>excludeEnd("ctx");
$3=$recv(event)._originalEvent();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["originalEvent"]=1;
//>>excludeEnd("ctx");
$2=$recv($3)._dataTransfer();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["dataTransfer"]=1;
//>>excludeEnd("ctx");
return $recv($2)._dropEffect_("copy");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({event:event},$ctx1,3)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["on:do:"]=3;
//>>excludeEnd("ctx");
$recv(self["@dropArea"])._on_do_("drop",(function(event){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv(event)._preventDefault();
$recv(event)._stopPropagation();
$recv(self["@dropArea"])._removeClass_("dragover");
return self._handleDrop_($recv($globals.Array)._ofNative_($recv($recv($recv(event)._originalEvent())._dataTransfer())._files()));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({event:event},$ctx1,4)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},$globals.TextFileDropTarget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderOn: html\x0a\x09dropArea := html div\x0a\x09\x09class: 'text-file-target';\x0a\x09\x09asJQuery.\x0a\x09\x0a\x09dropArea on: 'dragenter' do: [ :event |\x0a\x09\x09event preventDefault.\x0a\x09\x09dropArea addClass: 'dragover'.\x0a\x09].\x0a\x09dropArea on: 'dragleave' do: [ :event |\x0a\x09\x09dropArea removeClass: 'dragover'.\x0a\x09].\x0a\x09dropArea on: 'dragover' do: [ :event |\x0a\x09\x09event preventDefault.\x0a\x09\x09event originalEvent dataTransfer dropEffect: 'copy'.\x0a\x09].\x0a\x09\x0a\x09dropArea on: 'drop' do: [ :event |\x0a\x09\x09event preventDefault.\x0a\x09\x09event stopPropagation.\x0a\x09\x09dropArea removeClass: 'dragover'.\x0a\x09\x09self handleDrop: (Array ofNative: event originalEvent dataTransfer files).\x0a\x09]",
referencedClasses: ["Array"],
//>>excludeEnd("ide");
messageSends: ["class:", "div", "asJQuery", "on:do:", "preventDefault", "addClass:", "removeClass:", "dropEffect:", "dataTransfer", "originalEvent", "stopPropagation", "handleDrop:", "ofNative:", "files"]
}),
$globals.TextFileDropTarget);


$core.addMethod(
$core.method({
selector: "newIn:",
protocol: "as yet unclassified",
fn: function (aSelector){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return self._newIn_handler_(aSelector,(function(){

}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"newIn:",{aSelector:aSelector},$globals.TextFileDropTarget.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aSelector"],
source: "newIn: aSelector\x0a\x09^ self newIn: aSelector handler: []",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["newIn:handler:"]
}),
$globals.TextFileDropTarget.a$cls);

$core.addMethod(
$core.method({
selector: "newIn:handler:",
protocol: "as yet unclassified",
fn: function (aSelector,aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._new();
$recv($1)._handler_(aBlock);
$recv($1)._appendToJQuery_($recv(aSelector)._asJQuery());
return $recv($1)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"newIn:handler:",{aSelector:aSelector,aBlock:aBlock},$globals.TextFileDropTarget.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aSelector", "aBlock"],
source: "newIn: aSelector handler: aBlock\x0a\x09^ self new handler: aBlock;\x0a\x09\x09appendToJQuery: aSelector asJQuery;\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["handler:", "new", "appendToJQuery:", "asJQuery", "yourself"]
}),
$globals.TextFileDropTarget.a$cls);


$core.addClass("Timer", $globals.Object, ["action", "delay", "intervalId"], "OndafSimulator");
$core.addMethod(
$core.method({
selector: "action:",
protocol: "as yet unclassified",
fn: function (aBlock){
var self=this;
self["@action"]=aBlock;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "action: aBlock\x0a\x09action := aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Timer);

$core.addMethod(
$core.method({
selector: "milliseconds:",
protocol: "as yet unclassified",
fn: function (someMillis){
var self=this;
self["@delay"]=someMillis;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["someMillis"],
source: "milliseconds: someMillis\x0a\x09delay := someMillis",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Timer);

$core.addMethod(
$core.method({
selector: "start",
protocol: "as yet unclassified",
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self["@intervalId"]=$recv(window)._setInterval_withDelay_(self["@action"],self["@delay"]);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"start",{},$globals.Timer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "start\x0a\x09intervalId := window setInterval: action withDelay: delay",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["setInterval:withDelay:"]
}),
$globals.Timer);

$core.addMethod(
$core.method({
selector: "stop",
protocol: "as yet unclassified",
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(window)._clearInterval_(self["@intervalId"]);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"stop",{},$globals.Timer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "stop\x0a\x09window clearInterval: intervalId",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["clearInterval:"]
}),
$globals.Timer);


$core.addMethod(
$core.method({
selector: "each:do:",
protocol: "instance creation",
fn: function (milliseconds,aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._new();
$recv($1)._milliseconds_(milliseconds);
$recv($1)._action_(aBlock);
return $recv($1)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"each:do:",{milliseconds:milliseconds,aBlock:aBlock},$globals.Timer.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["milliseconds", "aBlock"],
source: "each: milliseconds do: aBlock\x0a\x09^ self new\x0a\x09\x09milliseconds: milliseconds;\x0a\x09\x09action: aBlock;\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["milliseconds:", "new", "action:", "yourself"]
}),
$globals.Timer.a$cls);

$core.addMethod(
$core.method({
selector: "on:do:",
protocol: "instance creation",
fn: function (milliseconds,aBlock){
var self=this;
var newTimer;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._new();
$recv($1)._milliseconds_(milliseconds);
newTimer=$recv($1)._yourself();
$recv(newTimer)._action_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv(aBlock)._value();
return $recv(newTimer)._stop();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return newTimer;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"on:do:",{milliseconds:milliseconds,aBlock:aBlock,newTimer:newTimer},$globals.Timer.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["milliseconds", "aBlock"],
source: "on: milliseconds do: aBlock\x0a\x09| newTimer |\x0a\x09newTimer := self new\x0a\x09\x09milliseconds: milliseconds;\x0a\x09\x09yourself.\x0a\x09\x09\x0a\x09newTimer action: [\x0a\x09\x09aBlock value.\x0a\x09\x09newTimer stop\x0a\x09].\x0a\x09\x0a\x09^ newTimer",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["milliseconds:", "new", "yourself", "action:", "value", "stop"]
}),
$globals.Timer.a$cls);

$core.addMethod(
$core.method({
selector: "ofNative:",
protocol: "*OndafSimulator",
fn: function (aCollection){
var self=this;
var newArray;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(aCollection)._length();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["length"]=1;
//>>excludeEnd("ctx");
newArray=self._new_($1);
(1)._to_do_($recv(aCollection)._length(),(function(i){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(newArray)._at_put_(i,$recv(aCollection)._at_($recv(i).__minus((1))));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({i:i},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return newArray;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"ofNative:",{aCollection:aCollection,newArray:newArray},$globals.Array.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCollection"],
source: "ofNative: aCollection \x0a\x09\x22Answer an instance of me containing the same elements as aCollection.\x0a\x09 aCollection must be a native collection, with .length and [] operator\x22\x0a\x09| newArray |\x0a\x09newArray := self new: aCollection length.\x0a\x091 to: aCollection length do: [:i | newArray at: i put: (aCollection at: i - 1)].\x0a\x09^ newArray",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["new:", "length", "to:do:", "at:put:", "at:", "-"]
}),
$globals.Array.a$cls);

$core.addMethod(
$core.method({
selector: "newWithValues:",
protocol: "*OndafSimulator",
fn: function (aCollection){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");

		aCollection.unshift(self);
		return new (Function.prototype.bind.apply(self, aCollection));
	;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"newWithValues:",{aCollection:aCollection},$globals.BlockClosure)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCollection"],
source: "newWithValues: aCollection\x0a\x09\x22Alternative implementation that works with Blob\x22\x0a\x09<\x0a\x09\x09aCollection.unshift(self);\x0a\x09\x09return new (Function.prototype.bind.apply(self, aCollection));\x0a\x09>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.BlockClosure);

});

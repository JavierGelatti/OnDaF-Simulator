define("amber-ondafsimulator/OndafSimulator", ["amber/boot"
//>>excludeStart("imports", pragmas.excludeImports);
, "amber/jquery/Wrappers-JQuery", "amber/web/Web", "silk/Silk"
//>>excludeEnd("imports");
, "amber_core/Kernel-Objects", "amber/web/Web", "amber_core/Kernel-Collections"], function($boot
//>>excludeStart("imports", pragmas.excludeImports);

//>>excludeEnd("imports");
){"use strict";
var $core=$boot.api,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;
$core.addPackage('OndafSimulator');
$core.packages["OndafSimulator"].innerEval = function (expr) { return eval(expr); };
$core.packages["OndafSimulator"].imports = ["amber/jquery/Wrappers-JQuery", "amber/web/Web", "silk/Silk"];
$core.packages["OndafSimulator"].transport = {"type":"amd","amdNamespace":"amber-ondafsimulator"};

$core.addClass('ExamPrinter', $globals.Object, ['textViews'], 'OndafSimulator');
$core.addMethod(
$core.method({
selector: "copies",
protocol: 'as yet unclassified',
fn: function (){
var self=this;
return self["@textViews"];

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "copies\x0a\x09^ textViews",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ExamPrinter);

$core.addMethod(
$core.method({
selector: "currentTextView",
protocol: 'as yet unclassified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv(self["@textViews"])._last();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"currentTextView",{},$globals.ExamPrinter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "currentTextView\x0a\x09^ textViews last",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["last"]
}),
$globals.ExamPrinter);

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
($globals.ExamPrinter.superclass||$boot.nilAsClass).fn.prototype._initialize.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
self["@textViews"]=$recv($globals.OrderedCollection)._new();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.ExamPrinter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09textViews := OrderedCollection new.",
referencedClasses: ["OrderedCollection"],
//>>excludeEnd("ide");
messageSends: ["initialize", "new"]
}),
$globals.ExamPrinter);

$core.addMethod(
$core.method({
selector: "printText:",
protocol: 'as yet unclassified',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._currentTextView())._addText_(aString);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"printText:",{aString:aString},$globals.ExamPrinter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "printText: aString\x0a\x09self currentTextView addText: aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["addText:", "currentTextView"]
}),
$globals.ExamPrinter);

$core.addMethod(
$core.method({
selector: "printTitle:",
protocol: 'as yet unclassified',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self["@textViews"])._add_($recv($globals.ExamTextView)._new());
$recv(self._currentTextView())._title_(aString);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"printTitle:",{aString:aString},$globals.ExamPrinter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "printTitle: aString\x0a\x09textViews add: ExamTextView new.\x0a\x09self currentTextView title: aString.",
referencedClasses: ["ExamTextView"],
//>>excludeEnd("ide");
messageSends: ["add:", "new", "title:", "currentTextView"]
}),
$globals.ExamPrinter);

$core.addMethod(
$core.method({
selector: "printWordToComplete:",
protocol: 'as yet unclassified',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._currentTextView())._addWordToComplete_(aString);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"printWordToComplete:",{aString:aString},$globals.ExamPrinter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "printWordToComplete: aString\x0a\x09self currentTextView addWordToComplete: aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["addWordToComplete:", "currentTextView"]
}),
$globals.ExamPrinter);



$core.addClass('ExamTextView', $globals.Widget, ['title', 'content', 'continueCheckbox', 'continueButton', 'inputs'], 'OndafSimulator');
$core.addMethod(
$core.method({
selector: "addText:",
protocol: 'as yet unclassified',
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
protocol: 'as yet unclassified',
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
selector: "continue",
protocol: 'as yet unclassified',
fn: function (){
var self=this;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "continue\x0a\x09\x22?\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ExamTextView);

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
source: "initialize\x0a\x09super initialize.\x0a\x09content := OrderedCollection new.\x0a\x09inputs := OrderedCollection new.",
referencedClasses: ["OrderedCollection"],
//>>excludeEnd("ide");
messageSends: ["initialize", "new"]
}),
$globals.ExamTextView);

$core.addMethod(
$core.method({
selector: "onContinueCheckboxChanged",
protocol: 'as yet unclassified',
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
selector: "renderOn:",
protocol: 'as yet unclassified',
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3,$4,$5,$6,$8,$9,$10,$11,$12,$13,$7,$15,$17,$18,$19,$16,$14;
$1=$recv(html)._div();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["div"]=1;
//>>excludeEnd("ctx");
$recv($1)._class_("text");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["class:"]=1;
//>>excludeEnd("ctx");
$recv($1)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$2=$recv(html)._p();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["p"]=1;
//>>excludeEnd("ctx");
$recv($2)._class_("title");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["class:"]=2;
//>>excludeEnd("ctx");
$3=$recv($2)._with_(self["@title"]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=2;
//>>excludeEnd("ctx");
return $3;
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
$4=$recv(html)._p();
$recv($4)._class_("content");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["class:"]=3;
//>>excludeEnd("ctx");
$5=$recv($4)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv(self["@content"])._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx4) {
//>>excludeEnd("ctx");
return $recv(each)._value_(html);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx4) {$ctx4.fillBlock({each:each},$ctx3,4)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,3)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=4;
//>>excludeEnd("ctx");
return $5;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=3;
//>>excludeEnd("ctx");
$recv($1)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$6=$recv(html)._div();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["div"]=2;
//>>excludeEnd("ctx");
$recv($6)._class_("actions");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["class:"]=4;
//>>excludeEnd("ctx");
$7=$recv($6)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$recv($recv(html)._label())._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx4) {
//>>excludeEnd("ctx");
$8=$recv(html)._input();
$recv($8)._type_("checkbox");
$recv($8)._onChange_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx5) {
//>>excludeEnd("ctx");
return self._onContinueCheckboxChanged();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx5) {$ctx5.fillBlock({},$ctx4,8)});
//>>excludeEnd("ctx");
}));
$9=$recv($8)._asJQuery();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx4.sendIdx["asJQuery"]=1;
//>>excludeEnd("ctx");
self["@continueCheckbox"]=$9;
self["@continueCheckbox"];
$10=$recv(html)._img();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx4.sendIdx["img"]=1;
//>>excludeEnd("ctx");
$recv($10)._src_("https://www.ondaf.de/ondaf/durchfuehrung/bilder/text.gif");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx4.sendIdx["src:"]=1;
//>>excludeEnd("ctx");
$11=$recv($10)._width_((190));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx4.sendIdx["width:"]=1;
//>>excludeEnd("ctx");
return $11;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,7)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["with:"]=7;
//>>excludeEnd("ctx");
$12=$recv(html)._a();
$recv($12)._href_("#");
$recv($12)._class_("continue");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["class:"]=5;
//>>excludeEnd("ctx");
$recv($12)._onClick_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx4) {
//>>excludeEnd("ctx");
return self._continue();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,9)});
//>>excludeEnd("ctx");
}));
$recv($12)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx4) {
//>>excludeEnd("ctx");
$13=$recv(html)._img();
$recv($13)._src_("https://www.ondaf.de/ondaf/durchfuehrung/bilder/weiter.gif");
return $recv($13)._width_((256));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,10)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["with:"]=8;
//>>excludeEnd("ctx");
self["@continueButton"]=$recv($12)._asJQuery();
return self["@continueButton"];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,6)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=6;
//>>excludeEnd("ctx");
return $7;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,5)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=5;
//>>excludeEnd("ctx");
$14=$recv($1)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$15=$recv(html)._div();
$recv($15)._class_("info");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["class:"]=6;
//>>excludeEnd("ctx");
$16=$recv($15)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$17=$recv(html)._span();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["span"]=1;
//>>excludeEnd("ctx");
$recv($17)._class_("text-number");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["class:"]=7;
//>>excludeEnd("ctx");
$18=$recv($17)._with_("Text 1 von 4");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["with:"]=11;
//>>excludeEnd("ctx");
$18;
$19=$recv(html)._span();
$recv($19)._class_("time");
return $recv($19)._with_("Verbleibende Sekunden: 0");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,12)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=10;
//>>excludeEnd("ctx");
return $16;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,11)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=9;
//>>excludeEnd("ctx");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},$globals.ExamTextView)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderOn: html\x0a\x09html div\x0a\x09\x09class: 'text';\x0a\x09\x09with: [\x0a\x09\x09\x09html p\x0a\x09\x09\x09\x09class: 'title';\x0a\x09\x09\x09\x09with: title\x0a\x09\x09];\x0a\x09\x09with: [\x0a\x09\x09\x09html p\x0a\x09\x09\x09\x09class: 'content';\x0a\x09\x09\x09\x09with: [\x09content do: [ :each | each value: html ] ]\x0a\x09\x09];\x0a\x09\x09with: [\x0a\x09\x09\x09html div\x0a\x09\x09\x09\x09class: 'actions';\x0a\x09\x09\x09\x09with: [\x0a\x09\x09\x09\x09\x09html label with: [\x0a\x09\x09\x09\x09\x09\x09continueCheckbox := html input\x0a\x09\x09\x09\x09\x09\x09\x09type: 'checkbox';\x0a\x09\x09\x09\x09\x09\x09\x09onChange: [ self onContinueCheckboxChanged ];\x0a\x09\x09\x09\x09\x09\x09\x09asJQuery.\x0a\x09\x09\x09\x09\x09\x09html img\x0a\x09\x09\x09\x09\x09\x09\x09src: 'https://www.ondaf.de/ondaf/durchfuehrung/bilder/text.gif';\x0a\x09\x09\x09\x09\x09\x09\x09width: 190\x0a\x09\x09\x09\x09\x09].\x0a\x09\x09\x09\x09\x09continueButton := html a\x0a\x09\x09\x09\x09\x09\x09href: '#';\x0a\x09\x09\x09\x09\x09\x09class: 'continue';\x0a\x09\x09\x09\x09\x09\x09onClick: [ self continue ];\x0a\x09\x09\x09\x09\x09\x09with: [\x0a\x09\x09\x09\x09\x09\x09\x09html img\x0a\x09\x09\x09\x09\x09\x09\x09\x09src: 'https://www.ondaf.de/ondaf/durchfuehrung/bilder/weiter.gif';\x0a\x09\x09\x09\x09\x09\x09\x09\x09width: 256\x0a\x09\x09\x09\x09\x09\x09];\x0a\x09\x09\x09\x09\x09\x09asJQuery\x0a\x09\x09\x09\x09]\x0a\x09\x09];\x0a\x09\x09with: [\x0a\x09\x09\x09html div\x0a\x09\x09\x09\x09class: 'info';\x0a\x09\x09\x09\x09with: [\x0a\x09\x09\x09\x09\x09html span class: 'text-number'; with: 'Text 1 von 4'.\x0a\x09\x09\x09\x09\x09html span class: 'time'; with: 'Verbleibende Sekunden: 0'.\x0a\x09\x09\x09\x09]\x0a\x09\x09]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["class:", "div", "with:", "p", "do:", "value:", "label", "type:", "input", "onChange:", "onContinueCheckboxChanged", "asJQuery", "src:", "img", "width:", "href:", "a", "onClick:", "continue", "span"]
}),
$globals.ExamTextView);

$core.addMethod(
$core.method({
selector: "title:",
protocol: 'as yet unclassified',
fn: function (aString){
var self=this;
self["@title"]=aString;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "title: aString\x0a\x09title := aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ExamTextView);



$core.addClass('Header', $globals.Widget, ['startExamHandler'], 'OndafSimulator');
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
source: "initialize\x0a\x09super initialize.\x0a\x09startExamHandler := [].",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["initialize"]
}),
$globals.Header);

$core.addMethod(
$core.method({
selector: "renderOn:",
protocol: 'as yet unclassified',
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$recv($recv(html)._header())._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=$recv(html)._a();
$recv($1)._with_("Start exam");
$recv($1)._tabindex_((0));
return $recv($1)._onClick_(self["@startExamHandler"]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},$globals.Header)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderOn: html\x0a\x09html header\x0a\x09\x09with: [\x0a\x09\x09\x09html a\x0a\x09\x09\x09\x09with: 'Start exam';\x0a\x09\x09\x09\x09tabindex: 0;\x0a\x09\x09\x09\x09onClick: startExamHandler\x0a\x09\x09]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["with:", "header", "a", "tabindex:", "onClick:"]
}),
$globals.Header);

$core.addMethod(
$core.method({
selector: "whenStartExam:",
protocol: 'as yet unclassified',
fn: function (aBlock){
var self=this;
self["@startExamHandler"]=aBlock;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "whenStartExam: aBlock\x0a\x09startExamHandler := aBlock.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Header);



$core.addClass('MainScreen', $globals.Widget, [], 'OndafSimulator');


$core.addClass('OndafSimulator', $globals.Object, ['fileDropTarget', 'examDesigner', 'theExam'], 'OndafSimulator');
$core.addMethod(
$core.method({
selector: "addText:",
protocol: 'starting',
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
source: "addText: aString\x0a\x09examDesigner considerText: aString.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["considerText:"]
}),
$globals.OndafSimulator);

$core.addMethod(
$core.method({
selector: "addToList:",
protocol: 'starting',
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
protocol: 'starting',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
$1=$recv($globals.Header)._new();
$recv($1)._whenStartExam_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._startExam();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$2="body"._asJQuery();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asJQuery"]=1;
//>>excludeEnd("ctx");
$recv($1)._appendToJQuery_($2);
$recv($recv($recv($globals.HTMLCanvas)._onJQuery_("body"._asJQuery()))._section())._id_("content");
self["@fileDropTarget"]=$recv($globals.TextFileDropTarget)._newIn_handler_("#content",(function(txt){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._addText_(txt);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({txt:txt},$ctx1,2)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"augmentPage",{},$globals.OndafSimulator)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "augmentPage\x0a\x09\x22'#amber-with' asJQuery click: [ self doAmberWith ].\x0a\x09'#silk-tag' asSilk on: #click bind: [ self doSilkTAG ].\x0a\x09'#jquery-append' asJQuery click: [ self doJQueryAppend ].\x22\x0a\x09\x0a\x09Header new\x0a\x09\x09whenStartExam: [ self startExam ];\x0a\x09\x09appendToJQuery: 'body' asJQuery.\x0a\x09\x0a\x09(HTMLCanvas onJQuery: 'body' asJQuery) section id: 'content'.\x0a\x09\x09\x0a\x09fileDropTarget := TextFileDropTarget\x0a\x09\x09newIn: '#content'\x0a\x09\x09handler: [ :txt | self addText: txt ]",
referencedClasses: ["Header", "HTMLCanvas", "TextFileDropTarget"],
//>>excludeEnd("ide");
messageSends: ["whenStartExam:", "new", "startExam", "appendToJQuery:", "asJQuery", "id:", "section", "onJQuery:", "newIn:handler:", "addText:"]
}),
$globals.OndafSimulator);

$core.addMethod(
$core.method({
selector: "doAmberWith",
protocol: 'action',
fn: function (){
var self=this;
var tag;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
tag=$recv($recv($globals.HTMLCanvas)._onJQuery_("#output-list"._asJQuery()))._root();
$recv(tag)._with_((function(html){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv(html)._li())._with_("Amber Web #with: added me!");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"doAmberWith",{tag:tag},$globals.OndafSimulator)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "doAmberWith\x0a\x09| tag |\x0a\x09tag := (HTMLCanvas onJQuery: '#output-list' asJQuery) root.\x0a\x09tag with: [ :html | html li with: 'Amber Web #with: added me!' ]",
referencedClasses: ["HTMLCanvas"],
//>>excludeEnd("ide");
messageSends: ["root", "onJQuery:", "asJQuery", "with:", "li"]
}),
$globals.OndafSimulator);

$core.addMethod(
$core.method({
selector: "doJQueryAppend",
protocol: 'action',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv("#output-list"._asJQuery())._append_("<li>jQuery append added me!</li>");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"doJQueryAppend",{},$globals.OndafSimulator)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "doJQueryAppend\x0a\x09'#output-list' asJQuery append: '<li>jQuery append added me!</li>'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["append:", "asJQuery"]
}),
$globals.OndafSimulator);

$core.addMethod(
$core.method({
selector: "doSilkTAG",
protocol: 'action',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv("#output-list"._asSilk())._LI_("Silk TAG: added me!");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"doSilkTAG",{},$globals.OndafSimulator)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "doSilkTAG\x0a\x09'#output-list' asSilk LI: 'Silk TAG: added me!'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["LI:", "asSilk"]
}),
$globals.OndafSimulator);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'starting',
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
source: "initialize\x0a\x09super initialize.\x0a\x09examDesigner := ExamDesigner new.\x0a\x09examDesigner\x0a\x09\x09informProgressTo: [ :title | self addToList: title ].\x0a\x09",
referencedClasses: ["ExamDesigner"],
//>>excludeEnd("ide");
messageSends: ["initialize", "new", "informProgressTo:", "addToList:"]
}),
$globals.OndafSimulator);

$core.addMethod(
$core.method({
selector: "startExam",
protocol: 'starting',
fn: function (){
var self=this;
var aPrinter;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$recv(self["@fileDropTarget"])._hide();
self["@theExam"]=$recv(self["@examDesigner"])._designExam();
aPrinter=$recv($globals.ExamPrinter)._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=1;
//>>excludeEnd("ctx");
$recv(self["@theExam"])._copyOn_(aPrinter);
$1=$recv(aPrinter)._copies();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["copies"]=1;
//>>excludeEnd("ctx");
$recv($1)._do_((function(tv){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(tv)._appendToJQuery_("#content"._asJQuery());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({tv:tv},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$recv($recv($globals.Teacher)._new())._startExam_withCopy_(self["@theExam"],$recv(aPrinter)._copies());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"startExam",{aPrinter:aPrinter},$globals.OndafSimulator)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "startExam\x0a\x09| aPrinter |\x0a\x09fileDropTarget hide.\x0a\x09theExam := examDesigner designExam.\x0a\x09aPrinter := ExamPrinter new.\x0a\x09theExam copyOn: aPrinter.\x0a\x09aPrinter copies do: [ :tv | tv appendToJQuery: '#content' asJQuery ].\x0a\x09Teacher new startExam: theExam withCopy: aPrinter copies.",
referencedClasses: ["ExamPrinter", "Teacher"],
//>>excludeEnd("ide");
messageSends: ["hide", "designExam", "new", "copyOn:", "do:", "copies", "appendToJQuery:", "asJQuery", "startExam:withCopy:"]
}),
$globals.OndafSimulator);

$core.addMethod(
$core.method({
selector: "test",
protocol: 'starting',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3;
$1=$recv($globals.Header)._new();
$recv($1)._whenStartExam_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(window)._alert_("start exam");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["alert:"]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$2="body"._asJQuery();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asJQuery"]=1;
//>>excludeEnd("ctx");
$recv($1)._appendToJQuery_($2);
$recv($globals.TextFileDropTarget)._newIn_handler_("body",(function(txt){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(window)._alert_(txt);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({txt:txt},$ctx1,2)});
//>>excludeEnd("ctx");
}));
$3=".text-file-target"._asJQuery();
$recv($3)._css_put_("height","100px");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["css:put:"]=1;
//>>excludeEnd("ctx");
$recv($3)._css_put_("border","3px dashed gray");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["css:put:"]=2;
//>>excludeEnd("ctx");
$recv($3)._css_put_("background","white");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"test",{},$globals.OndafSimulator)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "test\x09\x0a\x09Header new\x0a\x09\x09whenStartExam: [ window alert: 'start exam' ];\x0a\x09\x09appendToJQuery: 'body' asJQuery.\x0a\x09\x09\x0a\x09TextFileDropTarget\x0a\x09\x09newIn: 'body'\x0a\x09\x09handler: [ :txt | window alert: txt ].\x0a\x09'.text-file-target' asJQuery\x0a\x09\x09css: 'height' put: '100px';\x0a\x09\x09css: 'border' put: '3px dashed gray';\x0a\x09\x09css: 'background' put: 'white'",
referencedClasses: ["Header", "TextFileDropTarget"],
//>>excludeEnd("ide");
messageSends: ["whenStartExam:", "new", "alert:", "appendToJQuery:", "asJQuery", "newIn:handler:", "css:put:"]
}),
$globals.OndafSimulator);


$globals.OndafSimulator.klass.iVarNames = ['currentInstance'];
$core.addMethod(
$core.method({
selector: "current",
protocol: 'starting',
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
$globals.OndafSimulator.klass);

$core.addMethod(
$core.method({
selector: "start",
protocol: 'starting',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self["@currentInstance"]=self._new();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"start",{},$globals.OndafSimulator.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "start\x0a\x09currentInstance := self new.\x0a\x09\x22self current augmentPage\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["new"]
}),
$globals.OndafSimulator.klass);


$core.addClass('TextCard', $globals.Widget, ['card', 'title'], 'OndafSimulator');
$core.addMethod(
$core.method({
selector: "initializeWith:",
protocol: 'as yet unclassified',
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
protocol: 'as yet unclassified',
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(html)._div();
$recv($1)._with_(self._title());
self["@card"]=$recv($1)._class_("text-card");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},$globals.TextCard)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderOn: html\x0a\x09card := html div\x0a\x09\x09with: self title;\x0a\x09\x09class: 'text-card'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["with:", "div", "title", "class:"]
}),
$globals.TextCard);

$core.addMethod(
$core.method({
selector: "title",
protocol: 'as yet unclassified',
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
$globals.TextCard);


$core.addMethod(
$core.method({
selector: "newIn:title:",
protocol: 'as yet unclassified',
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
$globals.TextCard.klass);


$core.addClass('TextFileDropTarget', $globals.Widget, ['dropArea', 'handler'], 'OndafSimulator');
$core.addMethod(
$core.method({
selector: "handleDrop:",
protocol: 'as yet unclassified',
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
source: "handleDrop: files\x0a\x09files select: [ :file | file type = 'text/plain' ]\x0a\x09\x09thenDo: [ :file | | reader |\x0a\x09\x09\x09reader := FileReader new.\x0a\x09\x09\x09reader addEventListener: 'loadend' do: [\x0a\x09\x09\x09\x09handler value: reader result\x0a\x09\x09\x09].\x0a\x09\x09\x09reader readAsText: file\x0a\x09\x09].",
referencedClasses: ["FileReader"],
//>>excludeEnd("ide");
messageSends: ["select:thenDo:", "=", "type", "new", "addEventListener:do:", "value:", "result", "readAsText:"]
}),
$globals.TextFileDropTarget);

$core.addMethod(
$core.method({
selector: "handler:",
protocol: 'as yet unclassified',
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
protocol: 'as yet unclassified',
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
protocol: 'as yet unclassified',
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
source: "renderOn: html\x0a\x09dropArea := html div\x0a\x09\x09class: 'text-file-target';\x0a\x09\x09asJQuery.\x0a\x09\x0a\x09dropArea on: 'dragenter' do: [ :event |\x0a\x09\x09event preventDefault.\x0a\x09\x09dropArea addClass: 'dragover'.\x0a\x09].\x0a\x09dropArea on: 'dragleave' do: [ :event |\x0a\x09\x09dropArea removeClass: 'dragover'.\x0a\x09].\x0a\x09dropArea on: 'dragover' do: [ :event |\x0a\x09\x09event preventDefault.\x0a\x09\x09event originalEvent dataTransfer dropEffect: 'copy'.\x0a\x09].\x0a\x09\x0a\x09dropArea on: 'drop' do: [ :event |\x0a\x09\x09event preventDefault.\x0a\x09\x09event stopPropagation.\x0a\x09\x09dropArea removeClass: 'dragover'.\x0a\x09\x09self handleDrop: (Array ofNative: event originalEvent dataTransfer files).\x0a\x09].",
referencedClasses: ["Array"],
//>>excludeEnd("ide");
messageSends: ["class:", "div", "asJQuery", "on:do:", "preventDefault", "addClass:", "removeClass:", "dropEffect:", "dataTransfer", "originalEvent", "stopPropagation", "handleDrop:", "ofNative:", "files"]
}),
$globals.TextFileDropTarget);


$core.addMethod(
$core.method({
selector: "newIn:",
protocol: 'as yet unclassified',
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
$globals.TextFileDropTarget.klass);

$core.addMethod(
$core.method({
selector: "newIn:handler:",
protocol: 'as yet unclassified',
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
$globals.TextFileDropTarget.klass);

$core.addMethod(
$core.method({
selector: "ofNative:",
protocol: '*OndafSimulator',
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
$globals.Array.klass);

});

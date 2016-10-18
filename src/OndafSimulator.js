define("amber-ondafsimulator/OndafSimulator", ["amber/boot"
//>>excludeStart("imports", pragmas.excludeImports);
, "amber/jquery/Wrappers-JQuery", "amber/web/Web", "silk/Silk"
//>>excludeEnd("imports");
, "amber/web/Web", "amber_core/Kernel-Objects", "amber_core/Kernel-Collections"], function($boot
//>>excludeStart("imports", pragmas.excludeImports);

//>>excludeEnd("imports");
){"use strict";
var $core=$boot.api,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;
$core.addPackage('OndafSimulator');
$core.packages["OndafSimulator"].innerEval = function (expr) { return eval(expr); };
$core.packages["OndafSimulator"].imports = ["amber/jquery/Wrappers-JQuery", "amber/web/Web", "silk/Silk"];
$core.packages["OndafSimulator"].transport = {"type":"amd","amdNamespace":"amber-ondafsimulator"};

$core.addClass('Header', $globals.Widget, [], 'OndafSimulator');
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
return $recv($1)._tabindex_((0));
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
source: "renderOn: html\x0a\x09html header\x0a\x09\x09with: [\x0a\x09\x09\x09html a\x0a\x09\x09\x09\x09with: 'Start exam';\x0a\x09\x09\x09\x09tabindex: 0\x0a\x09\x09]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["with:", "header", "a", "tabindex:"]
}),
$globals.Header);



$core.addClass('MainScreen', $globals.Widget, [], 'OndafSimulator');


$core.addClass('OndafSimulator', $globals.Object, [], 'OndafSimulator');
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
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=1;
//>>excludeEnd("ctx");
$2="body"._asJQuery();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asJQuery"]=1;
//>>excludeEnd("ctx");
$recv($1)._appendToJQuery_($2);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["appendToJQuery:"]=1;
//>>excludeEnd("ctx");
$recv($recv($globals.TextFileDropTarget)._new())._appendToJQuery_("body"._asJQuery());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"augmentPage",{},$globals.OndafSimulator)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "augmentPage\x0a\x09\x22'#amber-with' asJQuery click: [ self doAmberWith ].\x0a\x09'#silk-tag' asSilk on: #click bind: [ self doSilkTAG ].\x0a\x09'#jquery-append' asJQuery click: [ self doJQueryAppend ].\x22\x0a\x09\x0a\x09Header new appendToJQuery: 'body' asJQuery.\x0a\x09TextFileDropTarget new appendToJQuery: 'body' asJQuery.",
referencedClasses: ["Header", "TextFileDropTarget"],
//>>excludeEnd("ide");
messageSends: ["appendToJQuery:", "new", "asJQuery"]
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
selector: "start",
protocol: 'starting',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._new())._augmentPage();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"start",{},$globals.OndafSimulator.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "start\x0a\x09self new augmentPage",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["augmentPage", "new"]
}),
$globals.OndafSimulator.klass);


$core.addClass('ReadableCollection', $globals.Collection, ['source'], 'OndafSimulator');
$core.addMethod(
$core.method({
selector: "add:",
protocol: 'as yet unclassified',
fn: function (anObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._onlyReadError();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"add:",{anObject:anObject},$globals.ReadableCollection)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "add: anObject\x0a\x09self onlyReadError",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["onlyReadError"]
}),
$globals.ReadableCollection);

$core.addMethod(
$core.method({
selector: "detect:ifNone:",
protocol: 'as yet unclassified',
fn: function (aBlock,anotherBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
var $early={};
try {
self._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=$recv(aBlock)._value_(each);
if($core.assert($1)){
throw $early=[each];
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $recv(anotherBlock)._value();
}
catch(e) {if(e===$early)return e[0]; throw e}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"detect:ifNone:",{aBlock:aBlock,anotherBlock:anotherBlock},$globals.ReadableCollection)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock", "anotherBlock"],
source: "detect: aBlock ifNone: anotherBlock\x0a\x09self do: [ :each | (aBlock value: each) ifTrue: [ ^each ] ].\x0a\x09\x09^ anotherBlock value",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["do:", "ifTrue:", "value:", "value"]
}),
$globals.ReadableCollection);

$core.addMethod(
$core.method({
selector: "do:",
protocol: 'as yet unclassified',
fn: function (aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
(0)._to_do_($recv(self._size()).__minus((1)),(function(i){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(aBlock)._value_($recv(self["@source"])._at_(i));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({i:i},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"do:",{aBlock:aBlock},$globals.ReadableCollection)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "do: aBlock\x0a\x090 to: (self size - 1) do: [ :i |\x0a\x09\x09aBlock value: (source at: i)\x0a\x09].",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["to:do:", "-", "size", "value:", "at:"]
}),
$globals.ReadableCollection);

$core.addMethod(
$core.method({
selector: "onlyReadError",
protocol: 'as yet unclassified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._error_("This is a readable collection (you can only read)");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onlyReadError",{},$globals.ReadableCollection)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "onlyReadError\x0a\x09self error: 'This is a readable collection (you can only read)'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["error:"]
}),
$globals.ReadableCollection);

$core.addMethod(
$core.method({
selector: "remove:ifAbsent:",
protocol: 'as yet unclassified',
fn: function (anObject,aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._onlyReadError();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"remove:ifAbsent:",{anObject:anObject,aBlock:aBlock},$globals.ReadableCollection)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject", "aBlock"],
source: "remove: anObject ifAbsent: aBlock\x0a\x09self onlyReadError",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["onlyReadError"]
}),
$globals.ReadableCollection);

$core.addMethod(
$core.method({
selector: "removeAll",
protocol: 'as yet unclassified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._onlyReadError();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"removeAll",{},$globals.ReadableCollection)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "removeAll\x0a\x09self onlyReadError",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["onlyReadError"]
}),
$globals.ReadableCollection);

$core.addMethod(
$core.method({
selector: "select:thenDo:",
protocol: 'as yet unclassified',
fn: function (selectBlock,doBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._select_(selectBlock))._do_(doBlock);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"select:thenDo:",{selectBlock:selectBlock,doBlock:doBlock},$globals.ReadableCollection)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["selectBlock", "doBlock"],
source: "select: selectBlock thenDo: doBlock\x0a\x09(self select: selectBlock) do: doBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["do:", "select:"]
}),
$globals.ReadableCollection);

$core.addMethod(
$core.method({
selector: "size",
protocol: 'as yet unclassified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv(self["@source"])._length();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"size",{},$globals.ReadableCollection)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "size\x0a\x09^ source length",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["length"]
}),
$globals.ReadableCollection);

$core.addMethod(
$core.method({
selector: "source",
protocol: 'as yet unclassified',
fn: function (){
var self=this;
return self["@source"];

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "source\x0a\x09^ source",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ReadableCollection);

$core.addMethod(
$core.method({
selector: "source:",
protocol: 'as yet unclassified',
fn: function (anObject){
var self=this;
self["@source"]=anObject;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "source: anObject\x0a\x09source := anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ReadableCollection);

$core.addMethod(
$core.method({
selector: "writeStream",
protocol: 'as yet unclassified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($recv($globals.Array)._new())._writeStream();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"writeStream",{},$globals.ReadableCollection)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "writeStream\x0a\x09^ Array new writeStream",
referencedClasses: ["Array"],
//>>excludeEnd("ide");
messageSends: ["writeStream", "new"]
}),
$globals.ReadableCollection);


$core.addMethod(
$core.method({
selector: "of:",
protocol: 'as yet unclassified',
fn: function (aSource){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._new();
$recv($1)._source_(aSource);
return $recv($1)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"of:",{aSource:aSource},$globals.ReadableCollection.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aSource"],
source: "of: aSource\x0a\x09^ self new source: aSource; yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["source:", "new", "yourself"]
}),
$globals.ReadableCollection.klass);


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



$core.addClass('TextFileDropTarget', $globals.Widget, ['dropArea'], 'OndafSimulator');
$core.addMethod(
$core.method({
selector: "handleDrop:",
protocol: 'as yet unclassified',
fn: function (files){
var self=this;
var reader;
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
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
reader=$recv($globals.FileReader)._new();
reader;
$recv(reader)._addEventListener_do_("loadend",(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv(console)._log_($recv(reader)._result());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,3)});
//>>excludeEnd("ctx");
}));
return $recv(reader)._readAsText_(file);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({file:file},$ctx1,2)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"handleDrop:",{files:files,reader:reader},$globals.TextFileDropTarget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["files"],
source: "handleDrop: files\x0a\x09| reader |\x0a\x09files select: [ :file | file type = 'text/plain' ]\x0a\x09\x09thenDo: [ :file |\x0a\x09\x09\x09reader := FileReader new.\x0a\x09\x09\x09reader addEventListener: 'loadend' do: [\x0a\x09\x09\x09\x09console log: reader result\x0a\x09\x09\x09].\x0a\x09\x09\x09reader readAsText: file\x0a\x09\x09].",
referencedClasses: ["FileReader"],
//>>excludeEnd("ide");
messageSends: ["select:thenDo:", "=", "type", "new", "addEventListener:do:", "log:", "result", "readAsText:"]
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
$recv($1)._with_("drop files here");
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
source: "renderOn: html\x0a\x09dropArea := html div\x0a\x09\x09with: 'drop files here';\x0a\x09\x09class: 'text-file-target';\x0a\x09\x09asJQuery.\x0a\x09\x0a\x09dropArea on: 'dragenter' do: [ :event |\x0a\x09\x09event preventDefault.\x0a\x09\x09dropArea addClass: 'dragover'.\x0a\x09].\x0a\x09dropArea on: 'dragleave' do: [ :event |\x0a\x09\x09dropArea removeClass: 'dragover'.\x0a\x09].\x0a\x09dropArea on: 'dragover' do: [ :event |\x0a\x09\x09event preventDefault.\x0a\x09\x09event originalEvent dataTransfer dropEffect: 'copy'.\x0a\x09].\x0a\x09\x0a\x09dropArea on: 'drop' do: [ :event |\x0a\x09\x09event preventDefault.\x0a\x09\x09event stopPropagation.\x0a\x09\x09dropArea removeClass: 'dragover'.\x0a\x09\x09self handleDrop: (Array ofNative: event originalEvent dataTransfer files).\x0a\x09].",
referencedClasses: ["Array"],
//>>excludeEnd("ide");
messageSends: ["with:", "div", "class:", "asJQuery", "on:do:", "preventDefault", "addClass:", "removeClass:", "dropEffect:", "dataTransfer", "originalEvent", "stopPropagation", "handleDrop:", "ofNative:", "files"]
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
var $1;
$1=self._new();
$recv($1)._appendToJQuery_($recv(aSelector)._asJQuery());
return $recv($1)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"newIn:",{aSelector:aSelector},$globals.TextFileDropTarget.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aSelector"],
source: "newIn: aSelector\x0a\x09^ self new appendToJQuery: aSelector asJQuery; yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["appendToJQuery:", "new", "asJQuery", "yourself"]
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

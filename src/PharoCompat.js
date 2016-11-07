define("amber-ondafsimulator/PharoCompat", ["amber/boot", "amber_core/Kernel-Objects", "amber_core/Kernel-Collections"], function($boot){"use strict";
var $core=$boot.api,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;
$core.addPackage('PharoCompat');
$core.packages["PharoCompat"].innerEval = function (expr) { return eval(expr); };
$core.packages["PharoCompat"].transport = {"type":"amd","amdNamespace":"amber-ondafsimulator"};
$core.addMethod(
$core.method({
selector: "flatCollect:",
protocol: '*PharoCompat',
fn: function (aBlock){
var self=this;
var stream;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._isEmpty();
if($core.assert($1)){
return self._copy();
};
stream=$recv($recv($globals.Array)._new_((0)))._writeStream();
self._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(stream)._nextPutAll_($recv(aBlock)._value_(each));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,2)});
//>>excludeEnd("ctx");
}));
return $recv(stream)._contents();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"flatCollect:",{aBlock:aBlock,stream:stream},$globals.Array)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "flatCollect: aBlock \x0a\x09\x22Evaluate aBlock for each of the receiver's elements and answer the\x0a\x09list of all resulting values flatten one level. Assumes that aBlock returns some kind\x0a\x09of collection for each element. Equivalent to the lisp's mapcan\x22\x0a\x09\x0a\x09| stream |\x0a\x09self isEmpty ifTrue: [ ^ self copy ].\x0a\x09stream := (Array new: 0) writeStream.\x0a\x09self do: [ :each | stream nextPutAll: (aBlock value: each) ].\x0a\x09^ stream contents",
referencedClasses: ["Array"],
//>>excludeEnd("ide");
messageSends: ["ifTrue:", "isEmpty", "copy", "writeStream", "new:", "do:", "nextPutAll:", "value:", "contents"]
}),
$globals.Array);

$core.addMethod(
$core.method({
selector: "select:thenDo:",
protocol: '*PharoCompat',
fn: function (selectBlock,doBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
self._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=$recv(selectBlock)._value_(each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["value:"]=1;
//>>excludeEnd("ctx");
if($core.assert($1)){
return $recv(doBlock)._value_(each);
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"select:thenDo:",{selectBlock:selectBlock,doBlock:doBlock},$globals.Array)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["selectBlock", "doBlock"],
source: "select: selectBlock thenDo: doBlock\x0a    \x22Utility method to improve readability.\x0a\x09Do not create the intermediate collection.\x22\x0a\x0a    self do: [: each |\x0a        ( selectBlock value: each ) \x0a\x09\x09\x09ifTrue: [ doBlock value: each ]\x0a    ].",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["do:", "ifTrue:", "value:"]
}),
$globals.Array);

$core.addMethod(
$core.method({
selector: "newFrom:",
protocol: '*PharoCompat',
fn: function (aCollection){
var self=this;
var newArray;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(aCollection)._size();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["size"]=1;
//>>excludeEnd("ctx");
newArray=self._new_($1);
(1)._to_do_($recv(aCollection)._size(),(function(i){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(newArray)._at_put_(i,$recv(aCollection)._at_(i));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({i:i},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return newArray;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"newFrom:",{aCollection:aCollection,newArray:newArray},$globals.Array.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCollection"],
source: "newFrom: aCollection \x0a\x09\x22Answer an instance of me containing the same elements as aCollection.\x22\x0a\x09| newArray |\x0a\x09newArray := self new: aCollection size.\x0a\x091 to: aCollection size do: [:i | newArray at: i put: (aCollection at: i)].\x0a\x09^ newArray\x0a\x0a\x22\x09Array newFrom: {1. 2. 3}\x0a\x09{1. 2. 3} as: Array\x0a\x09{1. 2. 3} as: ByteArray\x0a\x09{$c. $h. $r} as: String\x0a\x09{$c. $h. $r} as: Text\x0a\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["new:", "size", "to:do:", "at:put:", "at:"]
}),
$globals.Array.klass);

$core.addMethod(
$core.method({
selector: "with:with:with:with:",
protocol: '*PharoCompat',
fn: function (anObject,anObject2,anObject3,anObject4){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._new_((3));
$recv($1)._at_put_((1),anObject);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=1;
//>>excludeEnd("ctx");
$recv($1)._at_put_((2),anObject2);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=2;
//>>excludeEnd("ctx");
$recv($1)._at_put_((3),anObject3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=3;
//>>excludeEnd("ctx");
$recv($1)._at_put_((4),anObject4);
return $recv($1)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"with:with:with:with:",{anObject:anObject,anObject2:anObject2,anObject3:anObject3,anObject4:anObject4},$globals.Array.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject", "anObject2", "anObject3", "anObject4"],
source: "with: anObject with: anObject2 with: anObject3 with: anObject4\x0a\x09\x09^ (self new: 3)\x0a\x09\x09at: 1 put: anObject;\x0a\x09\x09at: 2 put: anObject2;\x0a\x09\x09at: 3 put: anObject3;\x0a\x09\x09at: 4 put: anObject4;\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:put:", "new:", "yourself"]
}),
$globals.Array.klass);

$core.addMethod(
$core.method({
selector: "asFloat",
protocol: '*PharoCompat',
fn: function (){
var self=this;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asFloat\x0a\x09^ self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Number);

});

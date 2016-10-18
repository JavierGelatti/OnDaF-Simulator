define("amber-ondafsimulator/PharoCompat", ["amber/boot", "amber_core/Kernel-Collections"], function($boot){"use strict";
var $core=$boot.api,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;
$core.addPackage('PharoCompat');
$core.packages["PharoCompat"].innerEval = function (expr) { return eval(expr); };
$core.packages["PharoCompat"].transport = {"type":"amd","amdNamespace":"amber-ondafsimulator"};
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

});

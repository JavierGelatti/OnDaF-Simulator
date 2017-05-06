/* DO NOT EDIT! This file is generated. */

var require;
if (!require) require = {config: function (x) {require = x;}};
require.config({
  "paths": {
    "jquery": "bower_components/jquery/dist/jquery",
    "require-css": "bower_components/require-css",
    "jquery-ui": "bower_components/jquery-ui/jquery-ui",
    "codemirror": "bower_components/codemirror",
    "mousetrap": "bower_components/mousetrap/mousetrap",
    "jquery.blockUI": "bower_components/blockui/jquery.blockUI",
    "typeahead": "bower_components/typeahead.js/dist/typeahead.jquery",
    "helios/showdown": "bower_components/showdown/src/showdown",
    "requireJS": "node_modules/requirejs/require",
    "bootstrap": "bower_components/bootstrap/dist",
    "amber/es6-promise": "node_modules/es6-promise/dist/es6-promise",
    "amber/jquery": "bower_components/amber-contrib-jquery/src",
    "amber/legacy": "bower_components/amber-contrib-legacy/src",
    "amber/legacy/resources": "bower_components/amber-contrib-legacy/resources",
    "silk": "bower_components/silk/src",
    "amber-ide-starter-dialog": "bower_components/amber-ide-starter-dialog/lib/idestarter",
    "helios": "bower_components/helios/src",
    "helios/resources": "bower_components/helios/resources",
    "helios/index": "bower_components/helios/index",
    "domite": "bower_components/domite/src",
    "amber/web": "bower_components/amber-contrib-web/src",
    "amber": "bower_components/amber/support",
    "amber_core": "bower_components/amber/src",
    "amber/es2015-polyfills": "bower_components/amber-compat-es2015/index",
    "amber-ondafsimulator": "src"
  },
  "map": {
    "*": {
      "css": "require-css/css",
      "00comment": "These are backward compatibility pointers.",
      "amber-contrib-jquery/Wrappers-JQuery": "amber/jquery/Wrappers-JQuery",
      "amber-attic/Benchfib": "amber/legacy/Benchfib",
      "amber-attic/Examples": "amber/legacy/Examples",
      "amber-attic/IDE": "amber/legacy/IDE",
      "amber/domite/DOMite": "domite/DOMite",
      "amber/domite/DOMite-Tests": "domite/DOMite-Tests",
      "amber-contrib-web/Web": "amber/web/Web",
      "amber_core/Web": "amber/web/Web",
      "amber_core/Canvas": "amber/web/Web",
      "amber_core/Compiler-Exceptions": "amber_core/Compiler-Core",
      "amber_core/Kernel-ImportExport": "amber_core/Platform-ImportExport"
    }
  },
  "shim": {
    "jquery-ui": {
      "deps": [
        "jquery",
        "jquery"
      ]
    },
    "codemirror/lib/codemirror": {
      "deps": [
        "css!codemirror/lib/codemirror",
        "css!codemirror/lib/codemirror"
      ]
    },
    "typeahead": {
      "deps": [
        "jquery"
      ],
      "exports": "jQuery.fn.typeahead"
    },
    "bootstrap/js/bootstrap": {
      "deps": [
        "jquery",
        "css!bootstrap/css/bootstrap"
      ]
    },
    "ensure-console": {
      "exports": "console"
    },
    "amber/browser-compatibility": {
      "deps": [
        "./es2015-polyfills"
      ]
    },
    "amber/node-compatibility": {
      "deps": [
        "./es2015-polyfills"
      ]
    }
  }
});
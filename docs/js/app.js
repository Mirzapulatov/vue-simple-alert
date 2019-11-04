(function(t){function e(e){for(var o,l,i=e[0],s=e[1],c=e[2],u=0,m=[];u<i.length;u++)l=i[u],Object.prototype.hasOwnProperty.call(r,l)&&r[l]&&m.push(r[l][0]),r[l]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(t[o]=s[o]);p&&p(e);while(m.length)m.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],o=!0,i=1;i<n.length;i++){var s=n[i];0!==r[s]&&(o=!1)}o&&(a.splice(e--,1),t=l(l.s=n[0]))}return t}var o={},r={app:0},a=[];function l(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=t,l.c=o,l.d=function(t,e,n){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)l.d(n,o,function(e){return t[e]}.bind(null,o));return n},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/vue-simple-alert/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var p=s;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"034f":function(t,e,n){"use strict";var o=n("64a9"),r=n.n(o);r.a},"64a9":function(t,e,n){},cd49:function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var o=n("2b0e"),r=n("683f"),a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("header",{attrs:{id:"header"}},[o("img",{attrs:{id:"logo",alt:"Vue logo",src:n("cf05")}}),o("h1",[t._v("\n      vue-simple-alert examples\n      "),o("small",[t._v("("+t._s(t.v)+")")])])]),o("h2",[t._v("Alert examples")]),o("div",{attrs:{id:"examples"}},[o("div",{attrs:{id:"alert-example"}},[o("button",{attrs:{type:"button"},on:{click:t.alertExample0}},[t._v("Normal Alert")]),o("button",{staticClass:"swal2-confirm swal2-styled",attrs:{type:"button"},on:{click:t.alertExample1}},[t._v("\n        Simple\n      ")]),o("button",{staticClass:"swal2-confirm swal2-styled",attrs:{type:"button"},on:{click:t.alertExample2}},[t._v("\n        With title\n      ")]),o("button",{staticClass:"swal2-confirm swal2-styled",attrs:{type:"button"},on:{click:t.alertExample3}},[t._v("\n        Success icon\n      ")]),o("button",{staticClass:"swal2-confirm swal2-styled",attrs:{type:"button"},on:{click:t.alertExample4}},[t._v("\n        Warning icon\n      ")])]),o("br"),o("h2",[t._v("Confirm examples")]),o("div",{attrs:{id:"confirm-example"}},[o("button",{attrs:{type:"button"},on:{click:t.confirmExample0}},[t._v("Normal Confirm")]),o("button",{staticClass:"swal2-confirm swal2-styled",attrs:{type:"button"},on:{click:t.confirmExample1}},[t._v("\n        Simple\n      ")]),o("button",{staticClass:"swal2-confirm swal2-styled",attrs:{type:"button"},on:{click:t.confirmExample2}},[t._v("\n        Question icon\n      ")]),o("button",{staticClass:"swal2-confirm swal2-styled",attrs:{type:"button"},on:{click:t.confirmExample3}},[t._v("\n        Error icon\n      ")])]),o("br"),o("h2",[t._v("Prompt examples")]),o("div",{attrs:{id:"prompt-example"}},[o("button",{attrs:{type:"button"},on:{click:t.promptExample0}},[t._v("Normal Prompt")]),o("button",{staticClass:"swal2-confirm swal2-styled",attrs:{type:"button"},on:{click:t.promptExample1}},[t._v("\n        Simple Prompt\n      ")]),o("button",{staticClass:"swal2-confirm swal2-styled",attrs:{type:"button"},on:{click:t.promptExample2}},[t._v("\n        Question icon\n      ")]),o("button",{staticClass:"swal2-confirm swal2-styled",attrs:{type:"button"},on:{click:t.promptExample3}},[t._v("\n        Prompt email\n      ")])]),o("br"),o("h2",[t._v("Advanced examples")]),o("div",{attrs:{id:"advanced-example"}},[o("button",{staticClass:"swal2-confirm swal2-styled",attrs:{type:"button"},on:{click:t.advancedExample1}},[t._v("\n        Animation\n      ")]),o("button",{staticClass:"swal2-confirm swal2-styled",attrs:{type:"button"},on:{click:t.advancedExample2}},[t._v("\n        Custom button text\n      ")]),o("button",{staticClass:"swal2-confirm swal2-styled",attrs:{type:"button"},on:{click:t.advancedExample3}},[t._v("\n        Reverse buttons\n      ")])])])])},l=[],i=n("9ab4"),s=n("60a3"),c=n("0cab"),p=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.v=c["a"],e}return i["b"](e,t),e.prototype.alertExample0=function(){window.alert("This is normal alert.")},e.prototype.alertExample1=function(){this.$alert("This is simple but cool alert.").then((function(){return console.log("Closed")}))},e.prototype.alertExample2=function(){this.$alert("This is simple but cool alert with title.","Example").then((function(){return console.log("Closed")}))},e.prototype.alertExample3=function(){this.$alert("This is simple but cool alert with icon.","Success","success").then((function(){return console.log("Closed")}))},e.prototype.alertExample4=function(){this.$alert("This is simple but cool alert with icon.","Warning","warning").then((function(){return console.log("Closed")}))},e.prototype.confirmExample0=function(){window.confirm("This is normal confirm.")},e.prototype.confirmExample1=function(){this.$confirm("This is cool confirm.","Confirm")},e.prototype.confirmExample2=function(){this.$confirm("This is cool confirm with question icon.","Question","question").then((function(t){console.log(t)})).catch((function(){console.log("OK not selected.")}))},e.prototype.confirmExample3=function(){var t=this;this.$confirm("This is cool confirm with error icon.","Error","error").then((function(e){console.log(e),t.$alert("OK selected.")})).catch((function(){console.log("OK not selected.")}))},e.prototype.promptExample0=function(){window.alert(window.prompt("Input your name","John Doe"))},e.prototype.promptExample1=function(){var t=this;this.$prompt("Input your name","John Doe").then((function(e){e&&t.$alert(e,"Your name is:","success")}))},e.prototype.promptExample2=function(){var t=this;this.$prompt("Input your name","John Doe","Example","question").then((function(e){t.$alert(e,"Your name is:","success")})).catch((function(){return console.log("canceled")}))},e.prototype.promptExample3=function(){var t=this;this.$prompt("Input your email","someone@example.com","Example","question",{input:"email"}).then((function(e){t.$alert(e,"Your email is:","success")})).catch((function(){return console.log("canceled")}))},e.prototype.advancedExample1=function(){var t=this,e={title:"<strong>Advanced</strong> &nbsp; example",text:"This dialog will be closed after 3 seconds.",footer:"<a href=''>Check out sweetalert2 documentation.</a>",type:"success",showCancelButton:!0,confirmButtonText:"<i class='fa fa-thumbs-up'></i> Great!",cancelButtonText:"No, cancel!",reverseButtons:!0,timer:3e3,width:500,animation:!1,customClass:{popup:"animated tada"},padding:"3em",background:"#fff",backdrop:"\n        rgba(0,0,123,0.4)\n        center left\n        no-repeat\n      "};this.$fire(e).then((function(e){e.value&&t.$alert(e.value,"Result")}))},e.prototype.advancedExample2=function(){this.$alert("This is advanced alert with custom button text","Example","success",{confirmButtonText:"Got it!"})},e.prototype.advancedExample3=function(){this.$confirm("This is dialog has reversed buttons.","Error","error",{reverseButtons:!0}).then((function(t){console.log(t)})).catch((function(){console.log("OK not selected.")}))},e=i["a"]([s["a"]],e),e}(s["b"]),u=p,m=u,f=(n("034f"),n("2877")),d=Object(f["a"])(m,a,l,!1,null,null,null),h=d.exports;o["a"].config.productionTip=!1,o["a"].use(r["a"],{title:"Vue Simple Alert",width:"420px"}),new o["a"]({render:function(t){return t(h)}}).$mount("#app")},cf05:function(t,e,n){t.exports=n.p+"img/logo.png"}});
//# sourceMappingURL=app.js.map
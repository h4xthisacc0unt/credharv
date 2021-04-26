if (self.CavalryLogger) { CavalryLogger.start_js(["Y0xxZ1w"]); }

__d("getReferrerURI",["ErrorUtils","URI","isFacebookURI"],(function(a,b,c,d,e,f){"use strict";e.exports=c;var g,h;function c(){if(a.PageTransitions&&a.PageTransitions.isInitialized())return a.PageTransitions.getReferrerURI();else{var c=(g||(g=b("ErrorUtils"))).applyWithGuard(function(a){return new(h||(h=b("URI")))(a)},null,[document.referrer]);return c&&b("isFacebookURI")(c)?c:null}}}),null);
__d("Rect",["invariant","$","Vector","react"],(function(a,b,c,d,e,f,g){var h;h||b("react");a=function(){function a(c,d,e,f,h){if(arguments.length===1){if(c instanceof a)return c;if(c instanceof b("Vector"))return new a(c.y,c.x,c.y,c.x,c.domain);typeof c==="string"&&(c=b("$")(c));return a.getElementBounds(c)}typeof c==="number"&&typeof d==="number"&&typeof e==="number"&&typeof f==="number"&&(!h||typeof h==="string")||g(0,1087);Object.assign(this,{t:c,r:d,b:e,l:f,domain:h||"pure"});return this}var c=a.prototype;c.w=function(){return this.r-this.l};c.h=function(){return this.b-this.t};c.getWidth=function(){return this.w()};c.getHeight=function(){return this.h()};c.toString=function(){return"(("+this.l+", "+this.t+"), ("+this.r+", "+this.b+"))"};c.contains=function(b){b=new a(b).convertTo(this.domain);var c=this;return c.l<=b.l&&c.r>=b.r&&c.t<=b.t&&c.b>=b.b};c.intersection=function(b){b=b.convertTo(this.domain);var c=Math.min(this.b,b.getBottom()),d=Math.max(this.l,b.getLeft()),e=Math.min(this.r,b.getRight());b=Math.max(this.t,b.getTop());return c>b&&e>d?new a(b,e,c,d):null};c.isEqualTo=function(a){return this.t===a.t&&this.r===a.r&&this.b===a.b&&this.l===a.l&&this.domain===a.domain};c.add=function(c,d){if(arguments.length==1){c instanceof a&&c.domain!="pure"&&(c=c.convertTo(this.domain));return c instanceof b("Vector")?this.add(c.x,c.y):this}var e=parseFloat(c),f=parseFloat(d);return new a(this.t+f,this.r+e,this.b+f,this.l+e,this.domain)};c.sub=function(a,c){if(arguments.length==1&&a instanceof b("Vector"))return this.add(a.mul(-1));else if(typeof a==="number"&&typeof c==="number")return this.add(-a,-c);return this};c.rotateAroundOrigin=function(b){var c=this.getCenter().rotate(b*Math.PI/2),d=0;b%2?(d=this.h(),b=this.w()):(d=this.w(),b=this.h());var e=c.y-b/2;c=c.x-d/2;b=e+b;d=c+d;return new a(e,d,b,c,this.domain)};c.boundWithin=function(a){var b=0,c=0;this.l<a.l?b=a.l-this.l:this.r>a.r&&(b=a.r-this.r);this.t<a.t?c=a.t-this.t:this.b>a.b&&(c=a.b-this.b);return this.add(b,c)};c.getCenter=function(){return new(b("Vector"))(this.l+this.w()/2,this.t+this.h()/2,this.domain)};c.getTop=function(){return this.t};c.getRight=function(){return this.r};c.getBottom=function(){return this.b};c.getLeft=function(){return this.l};c.getArea=function(){return(this.b-this.t)*(this.r-this.l)};c.getPositionVector=function(){return new(b("Vector"))(this.l,this.t,this.domain)};c.getDimensionVector=function(){return new(b("Vector"))(this.w(),this.h(),"pure")};c.convertTo=function(c){if(this.domain==c)return this;if(c=="pure")return new a(this.t,this.r,this.b,this.l,"pure");if(this.domain=="pure")return new a(0,0,0,0);var d=new(b("Vector"))(this.l,this.t,this.domain).convertTo(c);return new a(d.y,d.x+this.w(),d.y+this.h(),d.x,c)};a.deserialize=function(b){b=b.split(":");return new a(parseFloat(b[1]),parseFloat(b[2]),parseFloat(b[3]),parseFloat(b[0]))};a.newFromVectors=function(b,c){return new a(b.y,b.x+c.x,b.y+c.y,b.x,b.domain)};a.getElementBounds=function(c){return a.newFromVectors(b("Vector").getElementPosition(c),b("Vector").getElementDimensions(c))};a.getViewportBounds=function(){return a.newFromVectors(b("Vector").getScrollPosition(),b("Vector").getViewportDimensions())};a.getViewportWithoutScrollbarsBounds=function(){return a.newFromVectors(b("Vector").getScrollPosition(),b("Vector").getViewportWithoutScrollbarDimensions())};a.minimumBoundingBox=function(b){var c=new a(Infinity,-Infinity,-Infinity,Infinity),d;for(var e=0;e<b.length;e++)d=b[e],c.t=Math.min(c.t,d.t),c.r=Math.max(c.r,d.r),c.b=Math.max(c.b,d.b),c.l=Math.min(c.l,d.l);return c};return a}();e.exports=a}),null);
__d("getOwnObjectValues",[],(function(a,b,c,d,e,f){e.exports=a;function a(a){return Object.keys(a).map(function(b){return a[b]})}}),null);
import{a as F,g as E}from"./charenc-CKB3dhLb.js";import{c as S}from"./crypt-cVg_o3mt.js";import{i as w}from"./is-buffer-DoLxFxiE.js";var h={exports:{}};(function(){var _=S,p=F.utf8,B=w,x=F.bin,d=function(u,c){u.constructor==String?c&&c.encoding==="binary"?u=x.stringToBytes(u):u=p.stringToBytes(u):B(u)?u=Array.prototype.slice.call(u,0):!Array.isArray(u)&&u.constructor!==Uint8Array&&(u=u.toString());for(var i=_.bytesToWords(u),v=u.length*8,n=1732584193,r=-271733879,o=-1732584194,t=271733878,f=0;f<i.length;f++)i[f]=(i[f]<<8|i[f]>>>24)&16711935|(i[f]<<24|i[f]>>>8)&4278255360;i[v>>>5]|=128<<v%32,i[(v+64>>>9<<4)+14]=v;for(var a=d._ff,l=d._gg,y=d._hh,e=d._ii,f=0;f<i.length;f+=16){var T=n,b=r,g=o,A=t;n=a(n,r,o,t,i[f+0],7,-680876936),t=a(t,n,r,o,i[f+1],12,-389564586),o=a(o,t,n,r,i[f+2],17,606105819),r=a(r,o,t,n,i[f+3],22,-1044525330),n=a(n,r,o,t,i[f+4],7,-176418897),t=a(t,n,r,o,i[f+5],12,1200080426),o=a(o,t,n,r,i[f+6],17,-1473231341),r=a(r,o,t,n,i[f+7],22,-45705983),n=a(n,r,o,t,i[f+8],7,1770035416),t=a(t,n,r,o,i[f+9],12,-1958414417),o=a(o,t,n,r,i[f+10],17,-42063),r=a(r,o,t,n,i[f+11],22,-1990404162),n=a(n,r,o,t,i[f+12],7,1804603682),t=a(t,n,r,o,i[f+13],12,-40341101),o=a(o,t,n,r,i[f+14],17,-1502002290),r=a(r,o,t,n,i[f+15],22,1236535329),n=l(n,r,o,t,i[f+1],5,-165796510),t=l(t,n,r,o,i[f+6],9,-1069501632),o=l(o,t,n,r,i[f+11],14,643717713),r=l(r,o,t,n,i[f+0],20,-373897302),n=l(n,r,o,t,i[f+5],5,-701558691),t=l(t,n,r,o,i[f+10],9,38016083),o=l(o,t,n,r,i[f+15],14,-660478335),r=l(r,o,t,n,i[f+4],20,-405537848),n=l(n,r,o,t,i[f+9],5,568446438),t=l(t,n,r,o,i[f+14],9,-1019803690),o=l(o,t,n,r,i[f+3],14,-187363961),r=l(r,o,t,n,i[f+8],20,1163531501),n=l(n,r,o,t,i[f+13],5,-1444681467),t=l(t,n,r,o,i[f+2],9,-51403784),o=l(o,t,n,r,i[f+7],14,1735328473),r=l(r,o,t,n,i[f+12],20,-1926607734),n=y(n,r,o,t,i[f+5],4,-378558),t=y(t,n,r,o,i[f+8],11,-2022574463),o=y(o,t,n,r,i[f+11],16,1839030562),r=y(r,o,t,n,i[f+14],23,-35309556),n=y(n,r,o,t,i[f+1],4,-1530992060),t=y(t,n,r,o,i[f+4],11,1272893353),o=y(o,t,n,r,i[f+7],16,-155497632),r=y(r,o,t,n,i[f+10],23,-1094730640),n=y(n,r,o,t,i[f+13],4,681279174),t=y(t,n,r,o,i[f+0],11,-358537222),o=y(o,t,n,r,i[f+3],16,-722521979),r=y(r,o,t,n,i[f+6],23,76029189),n=y(n,r,o,t,i[f+9],4,-640364487),t=y(t,n,r,o,i[f+12],11,-421815835),o=y(o,t,n,r,i[f+15],16,530742520),r=y(r,o,t,n,i[f+2],23,-995338651),n=e(n,r,o,t,i[f+0],6,-198630844),t=e(t,n,r,o,i[f+7],10,1126891415),o=e(o,t,n,r,i[f+14],15,-1416354905),r=e(r,o,t,n,i[f+5],21,-57434055),n=e(n,r,o,t,i[f+12],6,1700485571),t=e(t,n,r,o,i[f+3],10,-1894986606),o=e(o,t,n,r,i[f+10],15,-1051523),r=e(r,o,t,n,i[f+1],21,-2054922799),n=e(n,r,o,t,i[f+8],6,1873313359),t=e(t,n,r,o,i[f+15],10,-30611744),o=e(o,t,n,r,i[f+6],15,-1560198380),r=e(r,o,t,n,i[f+13],21,1309151649),n=e(n,r,o,t,i[f+4],6,-145523070),t=e(t,n,r,o,i[f+11],10,-1120210379),o=e(o,t,n,r,i[f+2],15,718787259),r=e(r,o,t,n,i[f+9],21,-343485551),n=n+T>>>0,r=r+b>>>0,o=o+g>>>0,t=t+A>>>0}return _.endian([n,r,o,t])};d._ff=function(u,c,i,v,n,r,o){var t=u+(c&i|~c&v)+(n>>>0)+o;return(t<<r|t>>>32-r)+c},d._gg=function(u,c,i,v,n,r,o){var t=u+(c&v|i&~v)+(n>>>0)+o;return(t<<r|t>>>32-r)+c},d._hh=function(u,c,i,v,n,r,o){var t=u+(c^i^v)+(n>>>0)+o;return(t<<r|t>>>32-r)+c},d._ii=function(u,c,i,v,n,r,o){var t=u+(i^(c|~v))+(n>>>0)+o;return(t<<r|t>>>32-r)+c},d._blocksize=16,d._digestsize=16,h.exports=function(u,c){if(u==null)throw new Error("Illegal argument "+u);var i=_.wordsToBytes(d(u,c));return c&&c.asBytes?i:c&&c.asString?x.bytesToString(i):_.bytesToHex(i)}})();var H=h.exports;const j=E(H);export{j as m};

"use strict";var d=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(a){throw (r=0, a)}};};var j=d(function(ar,T){
var K=require('@stdlib/ndarray-base-assert-is-row-major/dist');function P(e,r,a,m,g,u,l,n,s,o,v,t,w){var i,q,f,h,x,z,F,b,R,c,p,y;for(K([v,t])?(h=r,x=e,q=t,f=v-h*t,i=m,m=l,l=i,i=g,g=n,n=i,i=u,u=s,s=i):(h=e,x=r,q=v,f=t-h*v),z=g,F=n,R=u,c=s,b=w,y=0;y<x;y++){if(l[c]===0)b+=q*h;else for(i=a*l[c],R=u,p=0;p<h;p++)o[b]+=m[R]*i,R+=z,b+=q;c+=F,b+=f}return o}T.exports=P
});var O=d(function(nr,C){
var Q=require('@stdlib/ndarray-base-assert-is-column-major-string/dist'),U=require('@stdlib/blas-base-assert-is-layout/dist'),_=require('@stdlib/strided-base-stride2offset/dist'),W=require('@stdlib/math-base-special-fast-max/dist'),E=require('@stdlib/error-tools-fmtprodmsg/dist'),Z=j();function $(e,r,a,m,g,u,l,n,s,o){var v,t,w,i,q,f;if(!U(e))throw new TypeError(E('2NdFx',e));if(r<0)throw new RangeError(E('2NdGE',r));if(a<0)throw new RangeError(E('2NdFz',a));if(u===0)throw new RangeError(E('2NdGB',u));if(n===0)throw new RangeError(E('2NdG0',n));if(v=Q(e),v?t=r:t=a,o<W(1,t))throw new RangeError(E('2NdGC',t,o));return r===0||a===0||m===0?s:(q=_(r,u),f=_(a,n),v?(w=1,i=o):(w=o,i=1),Z(r,a,m,g,u,q,l,n,f,s,w,i,0))}C.exports=$
});var B=d(function(ir,k){
var V=require('@stdlib/error-tools-fmtprodmsg/dist'),L=j();function D(e,r,a,m,g,u,l,n,s,o,v,t,w){if(e<0)throw new RangeError(V('2NdG7',e));if(r<0)throw new RangeError(V('2NdGE',r));if(g===0)throw new RangeError(V('2NdGF',g));if(n===0)throw new RangeError(V('2NdG0',n));return e===0||r===0||a===0?o:L(e,r,a,m,g,u,l,n,s,o,v,t,w)}k.exports=D
});var I=d(function(ur,H){
var M=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),G=O(),N=B();M(G,"ndarray",N);H.exports=G
});var Y=require("path").join,X=require('@stdlib/utils-try-require/dist'),A=require('@stdlib/assert-is-error/dist'),rr=I(),S,J=X(Y(__dirname,"./native.js"));A(J)?S=rr:S=J;module.exports=S;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map

var wu=Object.defineProperty;var Cu=(s,e,t)=>e in s?wu(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var yn=(s,e,t)=>(Cu(s,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(n){if(n.ep)return;n.ep=!0;const r=t(n);fetch(n.href,r)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const $a="158",Si={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},yi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Ru=0,To=1,Lu=2,wc=1,Pu=2,wn=3,Sn=0,wt=1,cn=2,Xn=0,Gi=1,Ao=2,wo=3,Co=4,Uu=5,si=100,Du=101,Iu=102,Ro=103,Lo=104,Fu=200,Ou=201,Nu=202,Bu=203,Pa=204,Ua=205,ku=206,zu=207,Gu=208,Hu=209,Vu=210,Wu=211,Xu=212,Yu=213,ju=214,qu=0,Ku=1,Zu=2,gs=3,$u=4,Ju=5,Qu=6,eh=7,Ja=0,th=1,nh=2,Yn=0,ih=1,rh=2,sh=3,ah=4,oh=5,Cc=300,Xi=301,Yi=302,Da=303,Ia=304,As=306,Fa=1e3,un=1001,Oa=1002,Lt=1003,Po=1004,Ws=1005,Ot=1006,lh=1007,Sr=1008,jn=1009,ch=1010,uh=1011,Qa=1012,Rc=1013,Hn=1014,Vn=1015,yr=1016,Lc=1017,Pc=1018,oi=1020,hh=1021,hn=1023,dh=1024,fh=1025,li=1026,ji=1027,ph=1028,Uc=1029,mh=1030,Dc=1031,Ic=1033,Xs=33776,Ys=33777,js=33778,qs=33779,Uo=35840,Do=35841,Io=35842,Fo=35843,gh=36196,Oo=37492,No=37496,Bo=37808,ko=37809,zo=37810,Go=37811,Ho=37812,Vo=37813,Wo=37814,Xo=37815,Yo=37816,jo=37817,qo=37818,Ko=37819,Zo=37820,$o=37821,Ks=36492,Jo=36494,Qo=36495,_h=36283,el=36284,tl=36285,nl=36286,Fc=3e3,ci=3001,vh=3200,Oc=3201,Nc=0,xh=1,qt="",yt="srgb",Pn="srgb-linear",eo="display-p3",ws="display-p3-linear",_s="linear",it="srgb",vs="rec709",xs="p3",Mi=7680,il=519,Sh=512,yh=513,Mh=514,Eh=515,bh=516,Th=517,Ah=518,wh=519,Na=35044,rl="300 es",Ba=1035,Cn=2e3,Ss=2001;class mi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const n=this._listeners[e];if(n!==void 0){const r=n.indexOf(t);r!==-1&&n.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const n=i.slice(0);for(let r=0,o=n.length;r<o;r++)n[r].call(this,e);e.target=null}}}const Tt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let sl=1234567;const Hi=Math.PI/180,Mr=180/Math.PI;function Rn(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Tt[s&255]+Tt[s>>8&255]+Tt[s>>16&255]+Tt[s>>24&255]+"-"+Tt[e&255]+Tt[e>>8&255]+"-"+Tt[e>>16&15|64]+Tt[e>>24&255]+"-"+Tt[t&63|128]+Tt[t>>8&255]+"-"+Tt[t>>16&255]+Tt[t>>24&255]+Tt[i&255]+Tt[i>>8&255]+Tt[i>>16&255]+Tt[i>>24&255]).toLowerCase()}function Mt(s,e,t){return Math.max(e,Math.min(t,s))}function to(s,e){return(s%e+e)%e}function Ch(s,e,t,i,n){return i+(s-e)*(n-i)/(t-e)}function Rh(s,e,t){return s!==e?(t-s)/(e-s):0}function mr(s,e,t){return(1-t)*s+t*e}function Lh(s,e,t,i){return mr(s,e,1-Math.exp(-t*i))}function Ph(s,e=1){return e-Math.abs(to(s,e*2)-e)}function Uh(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function Dh(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Ih(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Fh(s,e){return s+Math.random()*(e-s)}function Oh(s){return s*(.5-Math.random())}function Nh(s){s!==void 0&&(sl=s);let e=sl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Bh(s){return s*Hi}function kh(s){return s*Mr}function ka(s){return(s&s-1)===0&&s!==0}function zh(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function ys(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Gh(s,e,t,i,n){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+i)/2),u=o((e+i)/2),h=r((e-i)/2),d=o((e-i)/2),p=r((i-e)/2),g=o((i-e)/2);switch(n){case"XYX":s.set(a*u,l*h,l*d,a*c);break;case"YZY":s.set(l*d,a*u,l*h,a*c);break;case"ZXZ":s.set(l*h,l*d,a*u,a*c);break;case"XZX":s.set(a*u,l*g,l*p,a*c);break;case"YXY":s.set(l*p,a*u,l*g,a*c);break;case"ZYZ":s.set(l*g,l*p,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}}function gn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Qe(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Bc={DEG2RAD:Hi,RAD2DEG:Mr,generateUUID:Rn,clamp:Mt,euclideanModulo:to,mapLinear:Ch,inverseLerp:Rh,lerp:mr,damp:Lh,pingpong:Ph,smoothstep:Uh,smootherstep:Dh,randInt:Ih,randFloat:Fh,randFloatSpread:Oh,seededRandom:Nh,degToRad:Bh,radToDeg:kh,isPowerOfTwo:ka,ceilPowerOfTwo:zh,floorPowerOfTwo:ys,setQuaternionFromProperEuler:Gh,normalize:Qe,denormalize:gn};class He{constructor(e=0,t=0){He.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6],this.y=n[1]*t+n[4]*i+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Mt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),n=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*n+e.x,this.y=r*n+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ze{constructor(e,t,i,n,r,o,a,l,c){Ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,n,r,o,a,l,c)}set(e,t,i,n,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=n,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,n=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],d=i[2],p=i[5],g=i[8],_=n[0],m=n[3],f=n[6],x=n[1],v=n[4],S=n[7],T=n[2],L=n[5],E=n[8];return r[0]=o*_+a*x+l*T,r[3]=o*m+a*v+l*L,r[6]=o*f+a*S+l*E,r[1]=c*_+u*x+h*T,r[4]=c*m+u*v+h*L,r[7]=c*f+u*S+h*E,r[2]=d*_+p*x+g*T,r[5]=d*m+p*v+g*L,r[8]=d*f+p*S+g*E,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*r*u+i*a*l+n*r*c-n*o*l}invert(){const e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,d=a*l-u*r,p=c*r-o*l,g=t*h+i*d+n*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=h*_,e[1]=(n*c-u*i)*_,e[2]=(a*i-n*o)*_,e[3]=d*_,e[4]=(u*t-n*l)*_,e[5]=(n*r-a*t)*_,e[6]=p*_,e[7]=(i*l-c*t)*_,e[8]=(o*t-i*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,n,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-n*c,n*l,-n*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Zs.makeScale(e,t)),this}rotate(e){return this.premultiply(Zs.makeRotation(-e)),this}translate(e,t){return this.premultiply(Zs.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let n=0;n<9;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Zs=new Ze;function kc(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Ms(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Hh(){const s=Ms("canvas");return s.style.display="block",s}const al={};function gr(s){s in al||(al[s]=!0,console.warn(s))}const ol=new Ze().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),ll=new Ze().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Dr={[Pn]:{transfer:_s,primaries:vs,toReference:s=>s,fromReference:s=>s},[yt]:{transfer:it,primaries:vs,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[ws]:{transfer:_s,primaries:xs,toReference:s=>s.applyMatrix3(ll),fromReference:s=>s.applyMatrix3(ol)},[eo]:{transfer:it,primaries:xs,toReference:s=>s.convertSRGBToLinear().applyMatrix3(ll),fromReference:s=>s.applyMatrix3(ol).convertLinearToSRGB()}},Vh=new Set([Pn,ws]),et={enabled:!0,_workingColorSpace:Pn,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(s){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!s},get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!Vh.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;const i=Dr[e].toReference,n=Dr[t].fromReference;return n(i(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return Dr[s].primaries},getTransfer:function(s){return s===qt?_s:Dr[s].transfer}};function Vi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function $s(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Ei;class zc{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ei===void 0&&(Ei=Ms("canvas")),Ei.width=e.width,Ei.height=e.height;const i=Ei.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Ei}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ms("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const n=i.getImageData(0,0,e.width,e.height),r=n.data;for(let o=0;o<r.length;o++)r[o]=Vi(r[o]/255)*255;return i.putImageData(n,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Vi(t[i]/255)*255):t[i]=Vi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Wh=0;class Gc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Wh++}),this.uuid=Rn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let r;if(Array.isArray(n)){r=[];for(let o=0,a=n.length;o<a;o++)n[o].isDataTexture?r.push(Js(n[o].image)):r.push(Js(n[o]))}else r=Js(n);i.url=r}return t||(e.images[this.uuid]=i),i}}function Js(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?zc.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Xh=0;class Bt extends mi{constructor(e=Bt.DEFAULT_IMAGE,t=Bt.DEFAULT_MAPPING,i=un,n=un,r=Ot,o=Sr,a=hn,l=jn,c=Bt.DEFAULT_ANISOTROPY,u=qt){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Xh++}),this.uuid=Rn(),this.name="",this.source=new Gc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new He(0,0),this.repeat=new He(1,1),this.center=new He(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(gr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===ci?yt:qt),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Cc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Fa:e.x=e.x-Math.floor(e.x);break;case un:e.x=e.x<0?0:1;break;case Oa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Fa:e.y=e.y-Math.floor(e.y);break;case un:e.y=e.y<0?0:1;break;case Oa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return gr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===yt?ci:Fc}set encoding(e){gr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===ci?yt:qt}}Bt.DEFAULT_IMAGE=null;Bt.DEFAULT_MAPPING=Cc;Bt.DEFAULT_ANISOTROPY=1;class rt{constructor(e=0,t=0,i=0,n=1){rt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,n){return this.x=e,this.y=t,this.z=i,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,n=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*n+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*n+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*n+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*n+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,n,r;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],p=l[5],g=l[9],_=l[2],m=l[6],f=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(c+1)/2,S=(p+1)/2,T=(f+1)/2,L=(u+d)/4,E=(h+_)/4,D=(g+m)/4;return v>S&&v>T?v<.01?(i=0,n=.707106781,r=.707106781):(i=Math.sqrt(v),n=L/i,r=E/i):S>T?S<.01?(i=.707106781,n=0,r=.707106781):(n=Math.sqrt(S),i=L/n,r=D/n):T<.01?(i=.707106781,n=.707106781,r=0):(r=Math.sqrt(T),i=E/r,n=D/r),this.set(i,n,r,t),this}let x=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(d-u)*(d-u));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(h-_)/x,this.z=(d-u)/x,this.w=Math.acos((c+p+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Yh extends mi{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new rt(0,0,e,t),this.scissorTest=!1,this.viewport=new rt(0,0,e,t);const n={width:e,height:t,depth:1};i.encoding!==void 0&&(gr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===ci?yt:qt),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ot,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new Bt(n,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Gc(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class di extends Yh{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Hc extends Bt{constructor(e=null,t=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=Lt,this.minFilter=Lt,this.wrapR=un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class jh extends Bt{constructor(e=null,t=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=Lt,this.minFilter=Lt,this.wrapR=un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class fi{constructor(e=0,t=0,i=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=n}static slerpFlat(e,t,i,n,r,o,a){let l=i[n+0],c=i[n+1],u=i[n+2],h=i[n+3];const d=r[o+0],p=r[o+1],g=r[o+2],_=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=p,e[t+2]=g,e[t+3]=_;return}if(h!==_||l!==d||c!==p||u!==g){let m=1-a;const f=l*d+c*p+u*g+h*_,x=f>=0?1:-1,v=1-f*f;if(v>Number.EPSILON){const T=Math.sqrt(v),L=Math.atan2(T,f*x);m=Math.sin(m*L)/T,a=Math.sin(a*L)/T}const S=a*x;if(l=l*m+d*S,c=c*m+p*S,u=u*m+g*S,h=h*m+_*S,m===1-a){const T=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=T,c*=T,u*=T,h*=T}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,n,r,o){const a=i[n],l=i[n+1],c=i[n+2],u=i[n+3],h=r[o],d=r[o+1],p=r[o+2],g=r[o+3];return e[t]=a*g+u*h+l*p-c*d,e[t+1]=l*g+u*d+c*h-a*p,e[t+2]=c*g+u*p+a*d-l*h,e[t+3]=u*g-a*h-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,n){return this._x=e,this._y=t,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const i=e._x,n=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(n/2),h=a(r/2),d=l(i/2),p=l(n/2),g=l(r/2);switch(o){case"XYZ":this._x=d*u*h+c*p*g,this._y=c*p*h-d*u*g,this._z=c*u*g+d*p*h,this._w=c*u*h-d*p*g;break;case"YXZ":this._x=d*u*h+c*p*g,this._y=c*p*h-d*u*g,this._z=c*u*g-d*p*h,this._w=c*u*h+d*p*g;break;case"ZXY":this._x=d*u*h-c*p*g,this._y=c*p*h+d*u*g,this._z=c*u*g+d*p*h,this._w=c*u*h-d*p*g;break;case"ZYX":this._x=d*u*h-c*p*g,this._y=c*p*h+d*u*g,this._z=c*u*g-d*p*h,this._w=c*u*h+d*p*g;break;case"YZX":this._x=d*u*h+c*p*g,this._y=c*p*h+d*u*g,this._z=c*u*g-d*p*h,this._w=c*u*h-d*p*g;break;case"XZY":this._x=d*u*h-c*p*g,this._y=c*p*h-d*u*g,this._z=c*u*g+d*p*h,this._w=c*u*h+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,n=Math.sin(i);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],n=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=i+a+h;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(o-n)*p}else if(i>a&&i>h){const p=2*Math.sqrt(1+i-a-h);this._w=(u-l)/p,this._x=.25*p,this._y=(n+o)/p,this._z=(r+c)/p}else if(a>h){const p=2*Math.sqrt(1+a-i-h);this._w=(r-c)/p,this._x=(n+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-i-a);this._w=(o-n)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Mt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const n=Math.min(1,t/i);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,n=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+n*c-r*l,this._y=n*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-n*a,this._w=o*u-i*a-n*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,n=this._y,r=this._z,o=this._w;let a=o*e._w+i*e._x+n*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=n,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*n+t*this._y,this._z=p*r+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=o*h+this._w*d,this._x=i*h+this._x*d,this._y=n*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),n=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(n),i*Math.sin(r),i*Math.cos(r),t*Math.sin(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Y{constructor(e=0,t=0,i=0){Y.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(cl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(cl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,n=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*n,this.y=r[1]*t+r[4]*i+r[7]*n,this.z=r[2]*t+r[5]*i+r[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,n=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*n+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*n+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*n+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*n+r[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,n=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*n-a*i),u=2*(a*t-r*n),h=2*(r*i-o*t);return this.x=t+l*c+o*h-a*u,this.y=i+l*u+a*c-r*h,this.z=n+l*h+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,n=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*n,this.y=r[1]*t+r[5]*i+r[9]*n,this.z=r[2]*t+r[6]*i+r[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,n=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=n*l-r*a,this.y=r*o-i*l,this.z=i*a-n*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Qs.copy(this).projectOnVector(e),this.sub(Qs)}reflect(e){return this.sub(Qs.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Mt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,n=this.z-e.z;return t*t+i*i+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const n=Math.sin(t)*e;return this.x=n*Math.sin(i),this.y=Math.cos(t)*e,this.z=n*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Qs=new Y,cl=new fi;class Un{constructor(e=new Y(1/0,1/0,1/0),t=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(sn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(sn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=sn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,sn):sn.fromBufferAttribute(r,o),sn.applyMatrix4(e.matrixWorld),this.expandByPoint(sn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ir.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ir.copy(i.boundingBox)),Ir.applyMatrix4(e.matrixWorld),this.union(Ir)}const n=e.children;for(let r=0,o=n.length;r<o;r++)this.expandByObject(n[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,sn),sn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(cr),Fr.subVectors(this.max,cr),bi.subVectors(e.a,cr),Ti.subVectors(e.b,cr),Ai.subVectors(e.c,cr),On.subVectors(Ti,bi),Nn.subVectors(Ai,Ti),Qn.subVectors(bi,Ai);let t=[0,-On.z,On.y,0,-Nn.z,Nn.y,0,-Qn.z,Qn.y,On.z,0,-On.x,Nn.z,0,-Nn.x,Qn.z,0,-Qn.x,-On.y,On.x,0,-Nn.y,Nn.x,0,-Qn.y,Qn.x,0];return!ea(t,bi,Ti,Ai,Fr)||(t=[1,0,0,0,1,0,0,0,1],!ea(t,bi,Ti,Ai,Fr))?!1:(Or.crossVectors(On,Nn),t=[Or.x,Or.y,Or.z],ea(t,bi,Ti,Ai,Fr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,sn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(sn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Mn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Mn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Mn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Mn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Mn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Mn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Mn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Mn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Mn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Mn=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],sn=new Y,Ir=new Un,bi=new Y,Ti=new Y,Ai=new Y,On=new Y,Nn=new Y,Qn=new Y,cr=new Y,Fr=new Y,Or=new Y,ei=new Y;function ea(s,e,t,i,n){for(let r=0,o=s.length-3;r<=o;r+=3){ei.fromArray(s,r);const a=n.x*Math.abs(ei.x)+n.y*Math.abs(ei.y)+n.z*Math.abs(ei.z),l=e.dot(ei),c=t.dot(ei),u=i.dot(ei);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const qh=new Un,ur=new Y,ta=new Y;class gi{constructor(e=new Y,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):qh.setFromPoints(e).getCenter(i);let n=0;for(let r=0,o=e.length;r<o;r++)n=Math.max(n,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ur.subVectors(e,this.center);const t=ur.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),n=(i-this.radius)*.5;this.center.addScaledVector(ur,n/i),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ta.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ur.copy(e.center).add(ta)),this.expandByPoint(ur.copy(e.center).sub(ta))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const En=new Y,na=new Y,Nr=new Y,Bn=new Y,ia=new Y,Br=new Y,ra=new Y;class no{constructor(e=new Y,t=new Y(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,En)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=En.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(En.copy(this.origin).addScaledVector(this.direction,t),En.distanceToSquared(e))}distanceSqToSegment(e,t,i,n){na.copy(e).add(t).multiplyScalar(.5),Nr.copy(t).sub(e).normalize(),Bn.copy(this.origin).sub(na);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Nr),a=Bn.dot(this.direction),l=-Bn.dot(Nr),c=Bn.lengthSq(),u=Math.abs(1-o*o);let h,d,p,g;if(u>0)if(h=o*l-a,d=o*a-l,g=r*u,h>=0)if(d>=-g)if(d<=g){const _=1/u;h*=_,d*=_,p=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=r,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+c;else d<=-g?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-l),r),p=-h*h+d*(d+2*l)+c):d<=g?(h=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-l),r),p=-h*h+d*(d+2*l)+c);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),n&&n.copy(na).addScaledVector(Nr,d),p}intersectSphere(e,t){En.subVectors(e.center,this.origin);const i=En.dot(this.direction),n=En.dot(En)-i*i,r=e.radius*e.radius;if(n>r)return null;const o=Math.sqrt(r-n),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,n,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,n=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,n=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||r>n||((r>i||isNaN(i))&&(i=r),(o<n||isNaN(n))&&(n=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),i>l||a>n)||((a>i||i!==i)&&(i=a),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,t)}intersectsBox(e){return this.intersectBox(e,En)!==null}intersectTriangle(e,t,i,n,r){ia.subVectors(t,e),Br.subVectors(i,e),ra.crossVectors(ia,Br);let o=this.direction.dot(ra),a;if(o>0){if(n)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Bn.subVectors(this.origin,e);const l=a*this.direction.dot(Br.crossVectors(Bn,Br));if(l<0)return null;const c=a*this.direction.dot(ia.cross(Bn));if(c<0||l+c>o)return null;const u=-a*Bn.dot(ra);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ct{constructor(e,t,i,n,r,o,a,l,c,u,h,d,p,g,_,m){ct.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,n,r,o,a,l,c,u,h,d,p,g,_,m)}set(e,t,i,n,r,o,a,l,c,u,h,d,p,g,_,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=n,f[1]=r,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=u,f[10]=h,f[14]=d,f[3]=p,f[7]=g,f[11]=_,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ct().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,n=1/wi.setFromMatrixColumn(e,0).length(),r=1/wi.setFromMatrixColumn(e,1).length(),o=1/wi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*n,t[1]=i[1]*n,t[2]=i[2]*n,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,n=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(n),c=Math.sin(n),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const d=o*u,p=o*h,g=a*u,_=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=p+g*c,t[5]=d-_*c,t[9]=-a*l,t[2]=_-d*c,t[6]=g+p*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*u,p=l*h,g=c*u,_=c*h;t[0]=d+_*a,t[4]=g*a-p,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=p*a-g,t[6]=_+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*u,p=l*h,g=c*u,_=c*h;t[0]=d-_*a,t[4]=-o*h,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*u,t[9]=_-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*u,p=o*h,g=a*u,_=a*h;t[0]=l*u,t[4]=g*c-p,t[8]=d*c+_,t[1]=l*h,t[5]=_*c+d,t[9]=p*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,p=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=_-d*h,t[8]=g*h+p,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=p*h+g,t[10]=d-_*h}else if(e.order==="XZY"){const d=o*l,p=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+_,t[5]=o*u,t[9]=p*h-g,t[2]=g*h-p,t[6]=a*u,t[10]=_*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Kh,e,Zh)}lookAt(e,t,i){const n=this.elements;return Ht.subVectors(e,t),Ht.lengthSq()===0&&(Ht.z=1),Ht.normalize(),kn.crossVectors(i,Ht),kn.lengthSq()===0&&(Math.abs(i.z)===1?Ht.x+=1e-4:Ht.z+=1e-4,Ht.normalize(),kn.crossVectors(i,Ht)),kn.normalize(),kr.crossVectors(Ht,kn),n[0]=kn.x,n[4]=kr.x,n[8]=Ht.x,n[1]=kn.y,n[5]=kr.y,n[9]=Ht.y,n[2]=kn.z,n[6]=kr.z,n[10]=Ht.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,n=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],d=i[9],p=i[13],g=i[2],_=i[6],m=i[10],f=i[14],x=i[3],v=i[7],S=i[11],T=i[15],L=n[0],E=n[4],D=n[8],M=n[12],A=n[1],q=n[5],U=n[9],z=n[13],C=n[2],B=n[6],G=n[10],j=n[14],te=n[3],V=n[7],N=n[11],b=n[15];return r[0]=o*L+a*A+l*C+c*te,r[4]=o*E+a*q+l*B+c*V,r[8]=o*D+a*U+l*G+c*N,r[12]=o*M+a*z+l*j+c*b,r[1]=u*L+h*A+d*C+p*te,r[5]=u*E+h*q+d*B+p*V,r[9]=u*D+h*U+d*G+p*N,r[13]=u*M+h*z+d*j+p*b,r[2]=g*L+_*A+m*C+f*te,r[6]=g*E+_*q+m*B+f*V,r[10]=g*D+_*U+m*G+f*N,r[14]=g*M+_*z+m*j+f*b,r[3]=x*L+v*A+S*C+T*te,r[7]=x*E+v*q+S*B+T*V,r[11]=x*D+v*U+S*G+T*N,r[15]=x*M+v*z+S*j+T*b,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],n=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],p=e[14],g=e[3],_=e[7],m=e[11],f=e[15];return g*(+r*l*h-n*c*h-r*a*d+i*c*d+n*a*p-i*l*p)+_*(+t*l*p-t*c*d+r*o*d-n*o*p+n*c*u-r*l*u)+m*(+t*c*h-t*a*p-r*o*h+i*o*p+r*a*u-i*c*u)+f*(-n*a*u-t*l*h+t*a*d+n*o*h-i*o*d+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=t,n[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],p=e[11],g=e[12],_=e[13],m=e[14],f=e[15],x=h*m*c-_*d*c+_*l*p-a*m*p-h*l*f+a*d*f,v=g*d*c-u*m*c-g*l*p+o*m*p+u*l*f-o*d*f,S=u*_*c-g*h*c+g*a*p-o*_*p-u*a*f+o*h*f,T=g*h*l-u*_*l-g*a*d+o*_*d+u*a*m-o*h*m,L=t*x+i*v+n*S+r*T;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/L;return e[0]=x*E,e[1]=(_*d*r-h*m*r-_*n*p+i*m*p+h*n*f-i*d*f)*E,e[2]=(a*m*r-_*l*r+_*n*c-i*m*c-a*n*f+i*l*f)*E,e[3]=(h*l*r-a*d*r-h*n*c+i*d*c+a*n*p-i*l*p)*E,e[4]=v*E,e[5]=(u*m*r-g*d*r+g*n*p-t*m*p-u*n*f+t*d*f)*E,e[6]=(g*l*r-o*m*r-g*n*c+t*m*c+o*n*f-t*l*f)*E,e[7]=(o*d*r-u*l*r+u*n*c-t*d*c-o*n*p+t*l*p)*E,e[8]=S*E,e[9]=(g*h*r-u*_*r-g*i*p+t*_*p+u*i*f-t*h*f)*E,e[10]=(o*_*r-g*a*r+g*i*c-t*_*c-o*i*f+t*a*f)*E,e[11]=(u*a*r-o*h*r-u*i*c+t*h*c+o*i*p-t*a*p)*E,e[12]=T*E,e[13]=(u*_*n-g*h*n+g*i*d-t*_*d-u*i*m+t*h*m)*E,e[14]=(g*a*n-o*_*n-g*i*l+t*_*l+o*i*m-t*a*m)*E,e[15]=(o*h*n-u*a*n+u*i*l-t*h*l-o*i*d+t*a*d)*E,this}scale(e){const t=this.elements,i=e.x,n=e.y,r=e.z;return t[0]*=i,t[4]*=n,t[8]*=r,t[1]*=i,t[5]*=n,t[9]*=r,t[2]*=i,t[6]*=n,t[10]*=r,t[3]*=i,t[7]*=n,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,n))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),n=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-n*l,c*l+n*a,0,c*a+n*l,u*a+i,u*l-n*o,0,c*l-n*a,u*l+n*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,n,r,o){return this.set(1,i,r,0,e,1,o,0,t,n,1,0,0,0,0,1),this}compose(e,t,i){const n=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,h=a+a,d=r*c,p=r*u,g=r*h,_=o*u,m=o*h,f=a*h,x=l*c,v=l*u,S=l*h,T=i.x,L=i.y,E=i.z;return n[0]=(1-(_+f))*T,n[1]=(p+S)*T,n[2]=(g-v)*T,n[3]=0,n[4]=(p-S)*L,n[5]=(1-(d+f))*L,n[6]=(m+x)*L,n[7]=0,n[8]=(g+v)*E,n[9]=(m-x)*E,n[10]=(1-(d+_))*E,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,i){const n=this.elements;let r=wi.set(n[0],n[1],n[2]).length();const o=wi.set(n[4],n[5],n[6]).length(),a=wi.set(n[8],n[9],n[10]).length();this.determinant()<0&&(r=-r),e.x=n[12],e.y=n[13],e.z=n[14],an.copy(this);const c=1/r,u=1/o,h=1/a;return an.elements[0]*=c,an.elements[1]*=c,an.elements[2]*=c,an.elements[4]*=u,an.elements[5]*=u,an.elements[6]*=u,an.elements[8]*=h,an.elements[9]*=h,an.elements[10]*=h,t.setFromRotationMatrix(an),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,n,r,o,a=Cn){const l=this.elements,c=2*r/(t-e),u=2*r/(i-n),h=(t+e)/(t-e),d=(i+n)/(i-n);let p,g;if(a===Cn)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Ss)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,n,r,o,a=Cn){const l=this.elements,c=1/(t-e),u=1/(i-n),h=1/(o-r),d=(t+e)*c,p=(i+n)*u;let g,_;if(a===Cn)g=(o+r)*h,_=-2*h;else if(a===Ss)g=r*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let n=0;n<16;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const wi=new Y,an=new ct,Kh=new Y(0,0,0),Zh=new Y(1,1,1),kn=new Y,kr=new Y,Ht=new Y,ul=new ct,hl=new fi;class Cs{constructor(e=0,t=0,i=0,n=Cs.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,n=this._order){return this._x=e,this._y=t,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const n=e.elements,r=n[0],o=n[4],a=n[8],l=n[1],c=n[5],u=n[9],h=n[2],d=n[6],p=n[10];switch(t){case"XYZ":this._y=Math.asin(Mt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Mt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Mt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Mt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Mt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Mt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return ul.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ul,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return hl.setFromEuler(this),this.setFromQuaternion(hl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Cs.DEFAULT_ORDER="XYZ";class Vc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let $h=0;const dl=new Y,Ci=new fi,bn=new ct,zr=new Y,hr=new Y,Jh=new Y,Qh=new fi,fl=new Y(1,0,0),pl=new Y(0,1,0),ml=new Y(0,0,1),ed={type:"added"},td={type:"removed"};class Et extends mi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:$h++}),this.uuid=Rn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Et.DEFAULT_UP.clone();const e=new Y,t=new Cs,i=new fi,n=new Y(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new ct},normalMatrix:{value:new Ze}}),this.matrix=new ct,this.matrixWorld=new ct,this.matrixAutoUpdate=Et.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Et.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Vc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ci.setFromAxisAngle(e,t),this.quaternion.multiply(Ci),this}rotateOnWorldAxis(e,t){return Ci.setFromAxisAngle(e,t),this.quaternion.premultiply(Ci),this}rotateX(e){return this.rotateOnAxis(fl,e)}rotateY(e){return this.rotateOnAxis(pl,e)}rotateZ(e){return this.rotateOnAxis(ml,e)}translateOnAxis(e,t){return dl.copy(e).applyQuaternion(this.quaternion),this.position.add(dl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(fl,e)}translateY(e){return this.translateOnAxis(pl,e)}translateZ(e){return this.translateOnAxis(ml,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(bn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?zr.copy(e):zr.set(e,t,i);const n=this.parent;this.updateWorldMatrix(!0,!1),hr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?bn.lookAt(hr,zr,this.up):bn.lookAt(zr,hr,this.up),this.quaternion.setFromRotationMatrix(bn),n&&(bn.extractRotation(n.matrixWorld),Ci.setFromRotationMatrix(bn),this.quaternion.premultiply(Ci.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(ed)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(td)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),bn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),bn.multiply(e.parent.matrixWorld)),e.applyMatrix4(bn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,n=this.children.length;i<n;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let i=[];this[e]===t&&i.push(this);for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectsByProperty(e,t);o.length>0&&(i=i.concat(o))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hr,e,Jh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hr,Qh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,n=t.length;i<n;i++){const r=t[i];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const n=this.children;for(let r=0,o=n.length;r<o;r++){const a=n[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));n.material=a}else n.material=r(e.materials,this.material);if(this.children.length>0){n.children=[];for(let a=0;a<this.children.length;a++)n.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];n.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=n,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const n=e.children[i];this.add(n.clone())}return this}}Et.DEFAULT_UP=new Y(0,1,0);Et.DEFAULT_MATRIX_AUTO_UPDATE=!0;Et.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const on=new Y,Tn=new Y,sa=new Y,An=new Y,Ri=new Y,Li=new Y,gl=new Y,aa=new Y,oa=new Y,la=new Y;let Gr=!1;class Yt{constructor(e=new Y,t=new Y,i=new Y){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,n){n.subVectors(i,t),on.subVectors(e,t),n.cross(on);const r=n.lengthSq();return r>0?n.multiplyScalar(1/Math.sqrt(r)):n.set(0,0,0)}static getBarycoord(e,t,i,n,r){on.subVectors(n,t),Tn.subVectors(i,t),sa.subVectors(e,t);const o=on.dot(on),a=on.dot(Tn),l=on.dot(sa),c=Tn.dot(Tn),u=Tn.dot(sa),h=o*c-a*a;if(h===0)return r.set(-2,-1,-1);const d=1/h,p=(c*l-a*u)*d,g=(o*u-a*l)*d;return r.set(1-p-g,g,p)}static containsPoint(e,t,i,n){return this.getBarycoord(e,t,i,n,An),An.x>=0&&An.y>=0&&An.x+An.y<=1}static getUV(e,t,i,n,r,o,a,l){return Gr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Gr=!0),this.getInterpolation(e,t,i,n,r,o,a,l)}static getInterpolation(e,t,i,n,r,o,a,l){return this.getBarycoord(e,t,i,n,An),l.setScalar(0),l.addScaledVector(r,An.x),l.addScaledVector(o,An.y),l.addScaledVector(a,An.z),l}static isFrontFacing(e,t,i,n){return on.subVectors(i,t),Tn.subVectors(e,t),on.cross(Tn).dot(n)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,n){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,i,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return on.subVectors(this.c,this.b),Tn.subVectors(this.a,this.b),on.cross(Tn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Yt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Yt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,n,r){return Gr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Gr=!0),Yt.getInterpolation(e,this.a,this.b,this.c,t,i,n,r)}getInterpolation(e,t,i,n,r){return Yt.getInterpolation(e,this.a,this.b,this.c,t,i,n,r)}containsPoint(e){return Yt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Yt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,n=this.b,r=this.c;let o,a;Ri.subVectors(n,i),Li.subVectors(r,i),aa.subVectors(e,i);const l=Ri.dot(aa),c=Li.dot(aa);if(l<=0&&c<=0)return t.copy(i);oa.subVectors(e,n);const u=Ri.dot(oa),h=Li.dot(oa);if(u>=0&&h<=u)return t.copy(n);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(Ri,o);la.subVectors(e,r);const p=Ri.dot(la),g=Li.dot(la);if(g>=0&&p<=g)return t.copy(r);const _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(Li,a);const m=u*g-p*h;if(m<=0&&h-u>=0&&p-g>=0)return gl.subVectors(r,n),a=(h-u)/(h-u+(p-g)),t.copy(n).addScaledVector(gl,a);const f=1/(m+_+d);return o=_*f,a=d*f,t.copy(i).addScaledVector(Ri,o).addScaledVector(Li,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Wc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zn={h:0,s:0,l:0},Hr={h:0,s:0,l:0};function ca(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class qe{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const n=e;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=yt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.toWorkingColorSpace(this,t),this}setRGB(e,t,i,n=et.workingColorSpace){return this.r=e,this.g=t,this.b=i,et.toWorkingColorSpace(this,n),this}setHSL(e,t,i,n=et.workingColorSpace){if(e=to(e,1),t=Mt(t,0,1),i=Mt(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=ca(o,r,e+1/3),this.g=ca(o,r,e),this.b=ca(o,r,e-1/3)}return et.toWorkingColorSpace(this,n),this}setStyle(e,t=yt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=n[1],a=n[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=n[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=yt){const i=Wc[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Vi(e.r),this.g=Vi(e.g),this.b=Vi(e.b),this}copyLinearToSRGB(e){return this.r=$s(e.r),this.g=$s(e.g),this.b=$s(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=yt){return et.fromWorkingColorSpace(At.copy(this),e),Math.round(Mt(At.r*255,0,255))*65536+Math.round(Mt(At.g*255,0,255))*256+Math.round(Mt(At.b*255,0,255))}getHexString(e=yt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=et.workingColorSpace){et.fromWorkingColorSpace(At.copy(this),t);const i=At.r,n=At.g,r=At.b,o=Math.max(i,n,r),a=Math.min(i,n,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case i:l=(n-r)/h+(n<r?6:0);break;case n:l=(r-i)/h+2;break;case r:l=(i-n)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=et.workingColorSpace){return et.fromWorkingColorSpace(At.copy(this),t),e.r=At.r,e.g=At.g,e.b=At.b,e}getStyle(e=yt){et.fromWorkingColorSpace(At.copy(this),e);const t=At.r,i=At.g,n=At.b;return e!==yt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(e,t,i){return this.getHSL(zn),this.setHSL(zn.h+e,zn.s+t,zn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(zn),e.getHSL(Hr);const i=mr(zn.h,Hr.h,t),n=mr(zn.s,Hr.s,t),r=mr(zn.l,Hr.l,t);return this.setHSL(i,n,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,n=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*n,this.g=r[1]*t+r[4]*i+r[7]*n,this.b=r[2]*t+r[5]*i+r[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const At=new qe;qe.NAMES=Wc;let nd=0;class Ki extends mi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:nd++}),this.uuid=Rn(),this.name="",this.type="Material",this.blending=Gi,this.side=Sn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Pa,this.blendDst=Ua,this.blendEquation=si,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qe(0,0,0),this.blendAlpha=0,this.depthFunc=gs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=il,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Mi,this.stencilZFail=Mi,this.stencilZPass=Mi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const n=this[t];if(n===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Gi&&(i.blending=this.blending),this.side!==Sn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Pa&&(i.blendSrc=this.blendSrc),this.blendDst!==Ua&&(i.blendDst=this.blendDst),this.blendEquation!==si&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==gs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==il&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Mi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Mi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Mi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=n(e.textures),o=n(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const n=t.length;i=new Array(n);for(let r=0;r!==n;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class io extends Ki{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ja,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ut=new Y,Vr=new He;class Kt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Na,this.updateRange={offset:0,count:-1},this.gpuType=Vn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let n=0,r=this.itemSize;n<r;n++)this.array[e+n]=t.array[i+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Vr.fromBufferAttribute(this,t),Vr.applyMatrix3(e),this.setXY(t,Vr.x,Vr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)ut.fromBufferAttribute(this,t),ut.applyMatrix3(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)ut.fromBufferAttribute(this,t),ut.applyMatrix4(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)ut.fromBufferAttribute(this,t),ut.applyNormalMatrix(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)ut.fromBufferAttribute(this,t),ut.transformDirection(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=gn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Qe(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=gn(t,this.array)),t}setX(e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=gn(t,this.array)),t}setY(e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=gn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=gn(t,this.array)),t}setW(e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Qe(t,this.array),i=Qe(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,n){return e*=this.itemSize,this.normalized&&(t=Qe(t,this.array),i=Qe(i,this.array),n=Qe(n,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this}setXYZW(e,t,i,n,r){return e*=this.itemSize,this.normalized&&(t=Qe(t,this.array),i=Qe(i,this.array),n=Qe(n,this.array),r=Qe(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Na&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class Xc extends Kt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Yc extends Kt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class kt extends Kt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let id=0;const Xt=new ct,ua=new Et,Pi=new Y,Vt=new Un,dr=new Un,pt=new Y;class Zt extends mi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:id++}),this.uuid=Rn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(kc(e)?Yc:Xc)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Ze().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Xt.makeRotationFromQuaternion(e),this.applyMatrix4(Xt),this}rotateX(e){return Xt.makeRotationX(e),this.applyMatrix4(Xt),this}rotateY(e){return Xt.makeRotationY(e),this.applyMatrix4(Xt),this}rotateZ(e){return Xt.makeRotationZ(e),this.applyMatrix4(Xt),this}translate(e,t,i){return Xt.makeTranslation(e,t,i),this.applyMatrix4(Xt),this}scale(e,t,i){return Xt.makeScale(e,t,i),this.applyMatrix4(Xt),this}lookAt(e){return ua.lookAt(e),ua.updateMatrix(),this.applyMatrix4(ua.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Pi).negate(),this.translate(Pi.x,Pi.y,Pi.z),this}setFromPoints(e){const t=[];for(let i=0,n=e.length;i<n;i++){const r=e[i];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new kt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Un);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,n=t.length;i<n;i++){const r=t[i];Vt.setFromBufferAttribute(r),this.morphTargetsRelative?(pt.addVectors(this.boundingBox.min,Vt.min),this.boundingBox.expandByPoint(pt),pt.addVectors(this.boundingBox.max,Vt.max),this.boundingBox.expandByPoint(pt)):(this.boundingBox.expandByPoint(Vt.min),this.boundingBox.expandByPoint(Vt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new gi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new Y,1/0);return}if(e){const i=this.boundingSphere.center;if(Vt.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];dr.setFromBufferAttribute(a),this.morphTargetsRelative?(pt.addVectors(Vt.min,dr.min),Vt.expandByPoint(pt),pt.addVectors(Vt.max,dr.max),Vt.expandByPoint(pt)):(Vt.expandByPoint(dr.min),Vt.expandByPoint(dr.max))}Vt.getCenter(i);let n=0;for(let r=0,o=e.count;r<o;r++)pt.fromBufferAttribute(e,r),n=Math.max(n,i.distanceToSquared(pt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)pt.fromBufferAttribute(a,c),l&&(Pi.fromBufferAttribute(e,c),pt.add(Pi)),n=Math.max(n,i.distanceToSquared(pt))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,n=t.position.array,r=t.normal.array,o=t.uv.array,a=n.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Kt(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let A=0;A<a;A++)c[A]=new Y,u[A]=new Y;const h=new Y,d=new Y,p=new Y,g=new He,_=new He,m=new He,f=new Y,x=new Y;function v(A,q,U){h.fromArray(n,A*3),d.fromArray(n,q*3),p.fromArray(n,U*3),g.fromArray(o,A*2),_.fromArray(o,q*2),m.fromArray(o,U*2),d.sub(h),p.sub(h),_.sub(g),m.sub(g);const z=1/(_.x*m.y-m.x*_.y);isFinite(z)&&(f.copy(d).multiplyScalar(m.y).addScaledVector(p,-_.y).multiplyScalar(z),x.copy(p).multiplyScalar(_.x).addScaledVector(d,-m.x).multiplyScalar(z),c[A].add(f),c[q].add(f),c[U].add(f),u[A].add(x),u[q].add(x),u[U].add(x))}let S=this.groups;S.length===0&&(S=[{start:0,count:i.length}]);for(let A=0,q=S.length;A<q;++A){const U=S[A],z=U.start,C=U.count;for(let B=z,G=z+C;B<G;B+=3)v(i[B+0],i[B+1],i[B+2])}const T=new Y,L=new Y,E=new Y,D=new Y;function M(A){E.fromArray(r,A*3),D.copy(E);const q=c[A];T.copy(q),T.sub(E.multiplyScalar(E.dot(q))).normalize(),L.crossVectors(D,q);const z=L.dot(u[A])<0?-1:1;l[A*4]=T.x,l[A*4+1]=T.y,l[A*4+2]=T.z,l[A*4+3]=z}for(let A=0,q=S.length;A<q;++A){const U=S[A],z=U.start,C=U.count;for(let B=z,G=z+C;B<G;B+=3)M(i[B+0]),M(i[B+1]),M(i[B+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Kt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const n=new Y,r=new Y,o=new Y,a=new Y,l=new Y,c=new Y,u=new Y,h=new Y;if(e)for(let d=0,p=e.count;d<p;d+=3){const g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);n.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),u.subVectors(o,r),h.subVectors(n,r),u.cross(h),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)n.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,r),h.subVectors(n,r),u.cross(h),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)pt.fromBufferAttribute(e,t),pt.normalize(),e.setXYZ(t,pt.x,pt.y,pt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u);let p=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?p=l[_]*a.data.stride+a.offset:p=l[_]*u;for(let f=0;f<u;f++)d[g++]=c[p++]}return new Kt(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Zt,i=this.index.array,n=this.attributes;for(const a in n){const l=n[a],c=e(l,i);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){const d=c[u],p=e(d,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const n={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const p=c[h];u.push(p.toJSON(e.data))}u.length>0&&(n[l]=u,r=!0)}r&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const n=e.attributes;for(const c in n){const u=n[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let d=0,p=h.length;d<p;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const _l=new ct,ti=new no,Wr=new gi,vl=new Y,Ui=new Y,Di=new Y,Ii=new Y,ha=new Y,Xr=new Y,Yr=new He,jr=new He,qr=new He,xl=new Y,Sl=new Y,yl=new Y,Kr=new Y,Zr=new Y;class Wt extends Et{constructor(e=new Zt,t=new io){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=n.length;r<o;r++){const a=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const i=this.geometry,n=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(n,e);const a=this.morphTargetInfluences;if(r&&a){Xr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],h=r[l];u!==0&&(ha.fromBufferAttribute(h,e),o?Xr.addScaledVector(ha,u):Xr.addScaledVector(ha.sub(t),u))}t.add(Xr)}return t}raycast(e,t){const i=this.geometry,n=this.material,r=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Wr.copy(i.boundingSphere),Wr.applyMatrix4(r),ti.copy(e.ray).recast(e.near),!(Wr.containsPoint(ti.origin)===!1&&(ti.intersectSphere(Wr,vl)===null||ti.origin.distanceToSquared(vl)>(e.far-e.near)**2))&&(_l.copy(r).invert(),ti.copy(e.ray).applyMatrix4(_l),!(i.boundingBox!==null&&ti.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ti)))}_computeIntersections(e,t,i){let n;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],f=o[m.materialIndex],x=Math.max(m.start,p.start),v=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let S=x,T=v;S<T;S+=3){const L=a.getX(S),E=a.getX(S+1),D=a.getX(S+2);n=$r(this,f,e,i,c,u,h,L,E,D),n&&(n.faceIndex=Math.floor(S/3),n.face.materialIndex=m.materialIndex,t.push(n))}}else{const g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const x=a.getX(m),v=a.getX(m+1),S=a.getX(m+2);n=$r(this,o,e,i,c,u,h,x,v,S),n&&(n.faceIndex=Math.floor(m/3),t.push(n))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],f=o[m.materialIndex],x=Math.max(m.start,p.start),v=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let S=x,T=v;S<T;S+=3){const L=S,E=S+1,D=S+2;n=$r(this,f,e,i,c,u,h,L,E,D),n&&(n.faceIndex=Math.floor(S/3),n.face.materialIndex=m.materialIndex,t.push(n))}}else{const g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const x=m,v=m+1,S=m+2;n=$r(this,o,e,i,c,u,h,x,v,S),n&&(n.faceIndex=Math.floor(m/3),t.push(n))}}}}function rd(s,e,t,i,n,r,o,a){let l;if(e.side===wt?l=i.intersectTriangle(o,r,n,!0,a):l=i.intersectTriangle(n,r,o,e.side===Sn,a),l===null)return null;Zr.copy(a),Zr.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(Zr);return c<t.near||c>t.far?null:{distance:c,point:Zr.clone(),object:s}}function $r(s,e,t,i,n,r,o,a,l,c){s.getVertexPosition(a,Ui),s.getVertexPosition(l,Di),s.getVertexPosition(c,Ii);const u=rd(s,e,t,i,Ui,Di,Ii,Kr);if(u){n&&(Yr.fromBufferAttribute(n,a),jr.fromBufferAttribute(n,l),qr.fromBufferAttribute(n,c),u.uv=Yt.getInterpolation(Kr,Ui,Di,Ii,Yr,jr,qr,new He)),r&&(Yr.fromBufferAttribute(r,a),jr.fromBufferAttribute(r,l),qr.fromBufferAttribute(r,c),u.uv1=Yt.getInterpolation(Kr,Ui,Di,Ii,Yr,jr,qr,new He),u.uv2=u.uv1),o&&(xl.fromBufferAttribute(o,a),Sl.fromBufferAttribute(o,l),yl.fromBufferAttribute(o,c),u.normal=Yt.getInterpolation(Kr,Ui,Di,Ii,xl,Sl,yl,new Y),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new Y,materialIndex:0};Yt.getNormal(Ui,Di,Ii,h.normal),u.face=h}return u}class _i extends Zt{constructor(e=1,t=1,i=1,n=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:n,heightSegments:r,depthSegments:o};const a=this;n=Math.floor(n),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],h=[];let d=0,p=0;g("z","y","x",-1,-1,i,t,e,o,r,0),g("z","y","x",1,-1,i,t,-e,o,r,1),g("x","z","y",1,1,e,i,t,n,o,2),g("x","z","y",1,-1,e,i,-t,n,o,3),g("x","y","z",1,-1,e,t,i,n,r,4),g("x","y","z",-1,-1,e,t,-i,n,r,5),this.setIndex(l),this.setAttribute("position",new kt(c,3)),this.setAttribute("normal",new kt(u,3)),this.setAttribute("uv",new kt(h,2));function g(_,m,f,x,v,S,T,L,E,D,M){const A=S/E,q=T/D,U=S/2,z=T/2,C=L/2,B=E+1,G=D+1;let j=0,te=0;const V=new Y;for(let N=0;N<G;N++){const b=N*q-z;for(let P=0;P<B;P++){const H=P*A-U;V[_]=H*x,V[m]=b*v,V[f]=C,c.push(V.x,V.y,V.z),V[_]=0,V[m]=0,V[f]=L>0?1:-1,u.push(V.x,V.y,V.z),h.push(P/E),h.push(1-N/D),j+=1}}for(let N=0;N<D;N++)for(let b=0;b<E;b++){const P=d+b+B*N,H=d+b+B*(N+1),X=d+(b+1)+B*(N+1),W=d+(b+1)+B*N;l.push(P,H,W),l.push(H,X,W),te+=6}a.addGroup(p,te,M),p+=te,d+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function qi(s){const e={};for(const t in s){e[t]={};for(const i in s[t]){const n=s[t][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=n.clone():Array.isArray(n)?e[t][i]=n.slice():e[t][i]=n}}return e}function Rt(s){const e={};for(let t=0;t<s.length;t++){const i=qi(s[t]);for(const n in i)e[n]=i[n]}return e}function sd(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function jc(s){return s.getRenderTarget()===null?s.outputColorSpace:et.workingColorSpace}const Rs={clone:qi,merge:Rt};var ad=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,od=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class qn extends Ki{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ad,this.fragmentShader=od,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=qi(e.uniforms),this.uniformsGroups=sd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const n in this.uniforms){const o=this.uniforms[n].value;o&&o.isTexture?t.uniforms[n]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[n]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[n]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[n]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[n]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[n]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[n]={type:"m4",value:o.toArray()}:t.uniforms[n]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class qc extends Et{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ct,this.projectionMatrix=new ct,this.projectionMatrixInverse=new ct,this.coordinateSystem=Cn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class jt extends qc{constructor(e=50,t=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Mr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Hi*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Mr*2*Math.atan(Math.tan(Hi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,n,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Hi*.5*this.fov)/this.zoom,i=2*t,n=this.aspect*i,r=-.5*n;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*n/l,t-=o.offsetY*i/c,n*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+n,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Fi=-90,Oi=1;class ld extends Et{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const n=new jt(Fi,Oi,e,t);n.layers=this.layers,this.add(n);const r=new jt(Fi,Oi,e,t);r.layers=this.layers,this.add(r);const o=new jt(Fi,Oi,e,t);o.layers=this.layers,this.add(o);const a=new jt(Fi,Oi,e,t);a.layers=this.layers,this.add(a);const l=new jt(Fi,Oi,e,t);l.layers=this.layers,this.add(l);const c=new jt(Fi,Oi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,n,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===Cn)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ss)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,n),e.render(t,r),e.setRenderTarget(i,1,n),e.render(t,o),e.setRenderTarget(i,2,n),e.render(t,a),e.setRenderTarget(i,3,n),e.render(t,l),e.setRenderTarget(i,4,n),e.render(t,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,n),e.render(t,u),e.setRenderTarget(h,d,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Kc extends Bt{constructor(e,t,i,n,r,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Xi,super(e,t,i,n,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class cd extends di{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},n=[i,i,i,i,i,i];t.encoding!==void 0&&(gr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===ci?yt:qt),this.texture=new Kc(n,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ot}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},n=new _i(5,5,5),r=new qn({name:"CubemapFromEquirect",uniforms:qi(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:wt,blending:Xn});r.uniforms.tEquirect.value=t;const o=new Wt(n,r),a=t.minFilter;return t.minFilter===Sr&&(t.minFilter=Ot),new ld(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,n){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,n);e.setRenderTarget(r)}}const da=new Y,ud=new Y,hd=new Ze;class Gn{constructor(e=new Y(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,n){return this.normal.set(e,t,i),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const n=da.subVectors(i,t).cross(ud.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(da),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/n;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||hd.getNormalMatrix(e),n=this.coplanarPoint(da).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ni=new gi,Jr=new Y;class ro{constructor(e=new Gn,t=new Gn,i=new Gn,n=new Gn,r=new Gn,o=new Gn){this.planes=[e,t,i,n,r,o]}set(e,t,i,n,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(n),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Cn){const i=this.planes,n=e.elements,r=n[0],o=n[1],a=n[2],l=n[3],c=n[4],u=n[5],h=n[6],d=n[7],p=n[8],g=n[9],_=n[10],m=n[11],f=n[12],x=n[13],v=n[14],S=n[15];if(i[0].setComponents(l-r,d-c,m-p,S-f).normalize(),i[1].setComponents(l+r,d+c,m+p,S+f).normalize(),i[2].setComponents(l+o,d+u,m+g,S+x).normalize(),i[3].setComponents(l-o,d-u,m-g,S-x).normalize(),i[4].setComponents(l-a,d-h,m-_,S-v).normalize(),t===Cn)i[5].setComponents(l+a,d+h,m+_,S+v).normalize();else if(t===Ss)i[5].setComponents(a,h,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ni.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ni.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ni)}intersectsSprite(e){return ni.center.set(0,0,0),ni.radius=.7071067811865476,ni.applyMatrix4(e.matrixWorld),this.intersectsSphere(ni)}intersectsSphere(e){const t=this.planes,i=e.center,n=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<n)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const n=t[i];if(Jr.x=n.normal.x>0?e.max.x:e.min.x,Jr.y=n.normal.y>0?e.max.y:e.min.y,Jr.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(Jr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Zc(){let s=null,e=!1,t=null,i=null;function n(r,o){t(r,o),i=s.requestAnimationFrame(n)}return{start:function(){e!==!0&&t!==null&&(i=s.requestAnimationFrame(n),e=!0)},stop:function(){s.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function dd(s,e){const t=e.isWebGL2,i=new WeakMap;function n(c,u){const h=c.array,d=c.usage,p=s.createBuffer();s.bindBuffer(u,p),s.bufferData(u,h,d),c.onUploadCallback();let g;if(h instanceof Float32Array)g=s.FLOAT;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=s.UNSIGNED_SHORT;else if(h instanceof Int16Array)g=s.SHORT;else if(h instanceof Uint32Array)g=s.UNSIGNED_INT;else if(h instanceof Int32Array)g=s.INT;else if(h instanceof Int8Array)g=s.BYTE;else if(h instanceof Uint8Array)g=s.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)g=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:p,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version}}function r(c,u,h){const d=u.array,p=u.updateRange;s.bindBuffer(h,c),p.count===-1?s.bufferSubData(h,0,d):(t?s.bufferSubData(h,p.offset*d.BYTES_PER_ELEMENT,d,p.offset,p.count):s.bufferSubData(h,p.offset*d.BYTES_PER_ELEMENT,d.subarray(p.offset,p.offset+p.count)),p.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(s.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const d=i.get(c);(!d||d.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=i.get(c);h===void 0?i.set(c,n(c,u)):h.version<c.version&&(r(h.buffer,c,u),h.version=c.version)}return{get:o,remove:a,update:l}}class Zi extends Zt{constructor(e=1,t=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:n};const r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(n),c=a+1,u=l+1,h=e/a,d=t/l,p=[],g=[],_=[],m=[];for(let f=0;f<u;f++){const x=f*d-o;for(let v=0;v<c;v++){const S=v*h-r;g.push(S,-x,0),_.push(0,0,1),m.push(v/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let x=0;x<a;x++){const v=x+c*f,S=x+c*(f+1),T=x+1+c*(f+1),L=x+1+c*f;p.push(v,S,L),p.push(S,T,L)}this.setIndex(p),this.setAttribute("position",new kt(g,3)),this.setAttribute("normal",new kt(_,3)),this.setAttribute("uv",new kt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zi(e.width,e.height,e.widthSegments,e.heightSegments)}}var fd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,pd=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,md=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,gd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_d=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,vd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,xd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Sd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,yd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Md=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ed=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,bd=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Td=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Ad=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,wd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Cd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Rd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ld=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Pd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ud=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Dd=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Id=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Fd=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Od=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Nd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Bd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,kd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,zd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Gd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Hd=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Vd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Wd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Xd=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Yd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,jd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,qd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Kd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Zd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$d=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Jd=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Qd=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,ef=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,tf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,nf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,rf=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,sf=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,af=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,of=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,cf=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,uf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,hf=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,df=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ff=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,pf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,mf=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,gf=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_f=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,vf=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,xf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Sf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,yf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Mf=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ef=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,bf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Tf=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Af=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,wf=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Cf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Rf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Lf=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Pf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Uf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Df=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,If=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Ff=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Of=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Nf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Bf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,kf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,zf=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Gf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Hf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Vf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Wf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Xf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Yf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,jf=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,qf=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Kf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Zf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,$f=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Jf=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Qf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ep=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,tp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,np=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ip=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,rp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,sp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ap=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,op=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,lp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,cp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,up=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const hp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,dp=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pp=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_p=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,vp=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,xp=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Sp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,yp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Mp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ep=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,bp=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Tp=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Ap=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wp=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Cp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Lp=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Pp=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Up=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Dp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ip=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fp=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Op=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Np=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Bp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kp=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,zp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Gp=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Hp=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Vp=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Wp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,je={alphahash_fragment:fd,alphahash_pars_fragment:pd,alphamap_fragment:md,alphamap_pars_fragment:gd,alphatest_fragment:_d,alphatest_pars_fragment:vd,aomap_fragment:xd,aomap_pars_fragment:Sd,begin_vertex:yd,beginnormal_vertex:Md,bsdfs:Ed,iridescence_fragment:bd,bumpmap_pars_fragment:Td,clipping_planes_fragment:Ad,clipping_planes_pars_fragment:wd,clipping_planes_pars_vertex:Cd,clipping_planes_vertex:Rd,color_fragment:Ld,color_pars_fragment:Pd,color_pars_vertex:Ud,color_vertex:Dd,common:Id,cube_uv_reflection_fragment:Fd,defaultnormal_vertex:Od,displacementmap_pars_vertex:Nd,displacementmap_vertex:Bd,emissivemap_fragment:kd,emissivemap_pars_fragment:zd,colorspace_fragment:Gd,colorspace_pars_fragment:Hd,envmap_fragment:Vd,envmap_common_pars_fragment:Wd,envmap_pars_fragment:Xd,envmap_pars_vertex:Yd,envmap_physical_pars_fragment:sf,envmap_vertex:jd,fog_vertex:qd,fog_pars_vertex:Kd,fog_fragment:Zd,fog_pars_fragment:$d,gradientmap_pars_fragment:Jd,lightmap_fragment:Qd,lightmap_pars_fragment:ef,lights_lambert_fragment:tf,lights_lambert_pars_fragment:nf,lights_pars_begin:rf,lights_toon_fragment:af,lights_toon_pars_fragment:of,lights_phong_fragment:lf,lights_phong_pars_fragment:cf,lights_physical_fragment:uf,lights_physical_pars_fragment:hf,lights_fragment_begin:df,lights_fragment_maps:ff,lights_fragment_end:pf,logdepthbuf_fragment:mf,logdepthbuf_pars_fragment:gf,logdepthbuf_pars_vertex:_f,logdepthbuf_vertex:vf,map_fragment:xf,map_pars_fragment:Sf,map_particle_fragment:yf,map_particle_pars_fragment:Mf,metalnessmap_fragment:Ef,metalnessmap_pars_fragment:bf,morphcolor_vertex:Tf,morphnormal_vertex:Af,morphtarget_pars_vertex:wf,morphtarget_vertex:Cf,normal_fragment_begin:Rf,normal_fragment_maps:Lf,normal_pars_fragment:Pf,normal_pars_vertex:Uf,normal_vertex:Df,normalmap_pars_fragment:If,clearcoat_normal_fragment_begin:Ff,clearcoat_normal_fragment_maps:Of,clearcoat_pars_fragment:Nf,iridescence_pars_fragment:Bf,opaque_fragment:kf,packing:zf,premultiplied_alpha_fragment:Gf,project_vertex:Hf,dithering_fragment:Vf,dithering_pars_fragment:Wf,roughnessmap_fragment:Xf,roughnessmap_pars_fragment:Yf,shadowmap_pars_fragment:jf,shadowmap_pars_vertex:qf,shadowmap_vertex:Kf,shadowmask_pars_fragment:Zf,skinbase_vertex:$f,skinning_pars_vertex:Jf,skinning_vertex:Qf,skinnormal_vertex:ep,specularmap_fragment:tp,specularmap_pars_fragment:np,tonemapping_fragment:ip,tonemapping_pars_fragment:rp,transmission_fragment:sp,transmission_pars_fragment:ap,uv_pars_fragment:op,uv_pars_vertex:lp,uv_vertex:cp,worldpos_vertex:up,background_vert:hp,background_frag:dp,backgroundCube_vert:fp,backgroundCube_frag:pp,cube_vert:mp,cube_frag:gp,depth_vert:_p,depth_frag:vp,distanceRGBA_vert:xp,distanceRGBA_frag:Sp,equirect_vert:yp,equirect_frag:Mp,linedashed_vert:Ep,linedashed_frag:bp,meshbasic_vert:Tp,meshbasic_frag:Ap,meshlambert_vert:wp,meshlambert_frag:Cp,meshmatcap_vert:Rp,meshmatcap_frag:Lp,meshnormal_vert:Pp,meshnormal_frag:Up,meshphong_vert:Dp,meshphong_frag:Ip,meshphysical_vert:Fp,meshphysical_frag:Op,meshtoon_vert:Np,meshtoon_frag:Bp,points_vert:kp,points_frag:zp,shadow_vert:Gp,shadow_frag:Hp,sprite_vert:Vp,sprite_frag:Wp},Le={common:{diffuse:{value:new qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ze}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ze},normalScale:{value:new He(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0},uvTransform:{value:new Ze}},sprite:{diffuse:{value:new qe(16777215)},opacity:{value:1},center:{value:new He(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}}},Nt={basic:{uniforms:Rt([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.fog]),vertexShader:je.meshbasic_vert,fragmentShader:je.meshbasic_frag},lambert:{uniforms:Rt([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new qe(0)}}]),vertexShader:je.meshlambert_vert,fragmentShader:je.meshlambert_frag},phong:{uniforms:Rt([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new qe(0)},specular:{value:new qe(1118481)},shininess:{value:30}}]),vertexShader:je.meshphong_vert,fragmentShader:je.meshphong_frag},standard:{uniforms:Rt([Le.common,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.roughnessmap,Le.metalnessmap,Le.fog,Le.lights,{emissive:{value:new qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag},toon:{uniforms:Rt([Le.common,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.gradientmap,Le.fog,Le.lights,{emissive:{value:new qe(0)}}]),vertexShader:je.meshtoon_vert,fragmentShader:je.meshtoon_frag},matcap:{uniforms:Rt([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,{matcap:{value:null}}]),vertexShader:je.meshmatcap_vert,fragmentShader:je.meshmatcap_frag},points:{uniforms:Rt([Le.points,Le.fog]),vertexShader:je.points_vert,fragmentShader:je.points_frag},dashed:{uniforms:Rt([Le.common,Le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:je.linedashed_vert,fragmentShader:je.linedashed_frag},depth:{uniforms:Rt([Le.common,Le.displacementmap]),vertexShader:je.depth_vert,fragmentShader:je.depth_frag},normal:{uniforms:Rt([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,{opacity:{value:1}}]),vertexShader:je.meshnormal_vert,fragmentShader:je.meshnormal_frag},sprite:{uniforms:Rt([Le.sprite,Le.fog]),vertexShader:je.sprite_vert,fragmentShader:je.sprite_frag},background:{uniforms:{uvTransform:{value:new Ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:je.background_vert,fragmentShader:je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:je.backgroundCube_vert,fragmentShader:je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:je.cube_vert,fragmentShader:je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:je.equirect_vert,fragmentShader:je.equirect_frag},distanceRGBA:{uniforms:Rt([Le.common,Le.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:je.distanceRGBA_vert,fragmentShader:je.distanceRGBA_frag},shadow:{uniforms:Rt([Le.lights,Le.fog,{color:{value:new qe(0)},opacity:{value:1}}]),vertexShader:je.shadow_vert,fragmentShader:je.shadow_frag}};Nt.physical={uniforms:Rt([Nt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ze},clearcoatNormalScale:{value:new He(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ze},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ze},sheen:{value:0},sheenColor:{value:new qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ze},transmissionSamplerSize:{value:new He},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ze},attenuationDistance:{value:0},attenuationColor:{value:new qe(0)},specularColor:{value:new qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ze},anisotropyVector:{value:new He},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ze}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag};const Qr={r:0,b:0,g:0};function Xp(s,e,t,i,n,r,o){const a=new qe(0);let l=r===!0?0:1,c,u,h=null,d=0,p=null;function g(m,f){let x=!1,v=f.isScene===!0?f.background:null;v&&v.isTexture&&(v=(f.backgroundBlurriness>0?t:e).get(v)),v===null?_(a,l):v&&v.isColor&&(_(v,1),x=!0);const S=s.xr.getEnvironmentBlendMode();S==="additive"?i.buffers.color.setClear(0,0,0,1,o):S==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(s.autoClear||x)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),v&&(v.isCubeTexture||v.mapping===As)?(u===void 0&&(u=new Wt(new _i(1,1,1),new qn({name:"BackgroundCubeMaterial",uniforms:qi(Nt.backgroundCube.uniforms),vertexShader:Nt.backgroundCube.vertexShader,fragmentShader:Nt.backgroundCube.fragmentShader,side:wt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(T,L,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(u)),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,u.material.toneMapped=et.getTransfer(v.colorSpace)!==it,(h!==v||d!==v.version||p!==s.toneMapping)&&(u.material.needsUpdate=!0,h=v,d=v.version,p=s.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Wt(new Zi(2,2),new qn({name:"BackgroundMaterial",uniforms:qi(Nt.background.uniforms),vertexShader:Nt.background.vertexShader,fragmentShader:Nt.background.fragmentShader,side:Sn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=et.getTransfer(v.colorSpace)!==it,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||d!==v.version||p!==s.toneMapping)&&(c.material.needsUpdate=!0,h=v,d=v.version,p=s.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function _(m,f){m.getRGB(Qr,jc(s)),i.buffers.color.setClear(Qr.r,Qr.g,Qr.b,f,o)}return{getClearColor:function(){return a},setClearColor:function(m,f=1){a.set(m),l=f,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,_(a,l)},render:g}}function Yp(s,e,t,i){const n=s.getParameter(s.MAX_VERTEX_ATTRIBS),r=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||r!==null,a={},l=m(null);let c=l,u=!1;function h(C,B,G,j,te){let V=!1;if(o){const N=_(j,G,B);c!==N&&(c=N,p(c.object)),V=f(C,j,G,te),V&&x(C,j,G,te)}else{const N=B.wireframe===!0;(c.geometry!==j.id||c.program!==G.id||c.wireframe!==N)&&(c.geometry=j.id,c.program=G.id,c.wireframe=N,V=!0)}te!==null&&t.update(te,s.ELEMENT_ARRAY_BUFFER),(V||u)&&(u=!1,D(C,B,G,j),te!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(te).buffer))}function d(){return i.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function p(C){return i.isWebGL2?s.bindVertexArray(C):r.bindVertexArrayOES(C)}function g(C){return i.isWebGL2?s.deleteVertexArray(C):r.deleteVertexArrayOES(C)}function _(C,B,G){const j=G.wireframe===!0;let te=a[C.id];te===void 0&&(te={},a[C.id]=te);let V=te[B.id];V===void 0&&(V={},te[B.id]=V);let N=V[j];return N===void 0&&(N=m(d()),V[j]=N),N}function m(C){const B=[],G=[],j=[];for(let te=0;te<n;te++)B[te]=0,G[te]=0,j[te]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:G,attributeDivisors:j,object:C,attributes:{},index:null}}function f(C,B,G,j){const te=c.attributes,V=B.attributes;let N=0;const b=G.getAttributes();for(const P in b)if(b[P].location>=0){const X=te[P];let W=V[P];if(W===void 0&&(P==="instanceMatrix"&&C.instanceMatrix&&(W=C.instanceMatrix),P==="instanceColor"&&C.instanceColor&&(W=C.instanceColor)),X===void 0||X.attribute!==W||W&&X.data!==W.data)return!0;N++}return c.attributesNum!==N||c.index!==j}function x(C,B,G,j){const te={},V=B.attributes;let N=0;const b=G.getAttributes();for(const P in b)if(b[P].location>=0){let X=V[P];X===void 0&&(P==="instanceMatrix"&&C.instanceMatrix&&(X=C.instanceMatrix),P==="instanceColor"&&C.instanceColor&&(X=C.instanceColor));const W={};W.attribute=X,X&&X.data&&(W.data=X.data),te[P]=W,N++}c.attributes=te,c.attributesNum=N,c.index=j}function v(){const C=c.newAttributes;for(let B=0,G=C.length;B<G;B++)C[B]=0}function S(C){T(C,0)}function T(C,B){const G=c.newAttributes,j=c.enabledAttributes,te=c.attributeDivisors;G[C]=1,j[C]===0&&(s.enableVertexAttribArray(C),j[C]=1),te[C]!==B&&((i.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](C,B),te[C]=B)}function L(){const C=c.newAttributes,B=c.enabledAttributes;for(let G=0,j=B.length;G<j;G++)B[G]!==C[G]&&(s.disableVertexAttribArray(G),B[G]=0)}function E(C,B,G,j,te,V,N){N===!0?s.vertexAttribIPointer(C,B,G,te,V):s.vertexAttribPointer(C,B,G,j,te,V)}function D(C,B,G,j){if(i.isWebGL2===!1&&(C.isInstancedMesh||j.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const te=j.attributes,V=G.getAttributes(),N=B.defaultAttributeValues;for(const b in V){const P=V[b];if(P.location>=0){let H=te[b];if(H===void 0&&(b==="instanceMatrix"&&C.instanceMatrix&&(H=C.instanceMatrix),b==="instanceColor"&&C.instanceColor&&(H=C.instanceColor)),H!==void 0){const X=H.normalized,W=H.itemSize,ne=t.get(H);if(ne===void 0)continue;const Q=ne.buffer,ee=ne.type,pe=ne.bytesPerElement,Re=i.isWebGL2===!0&&(ee===s.INT||ee===s.UNSIGNED_INT||H.gpuType===Rc);if(H.isInterleavedBufferAttribute){const he=H.data,F=he.stride,ke=H.offset;if(he.isInstancedInterleavedBuffer){for(let Se=0;Se<P.locationSize;Se++)T(P.location+Se,he.meshPerAttribute);C.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let Se=0;Se<P.locationSize;Se++)S(P.location+Se);s.bindBuffer(s.ARRAY_BUFFER,Q);for(let Se=0;Se<P.locationSize;Se++)E(P.location+Se,W/P.locationSize,ee,X,F*pe,(ke+W/P.locationSize*Se)*pe,Re)}else{if(H.isInstancedBufferAttribute){for(let he=0;he<P.locationSize;he++)T(P.location+he,H.meshPerAttribute);C.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let he=0;he<P.locationSize;he++)S(P.location+he);s.bindBuffer(s.ARRAY_BUFFER,Q);for(let he=0;he<P.locationSize;he++)E(P.location+he,W/P.locationSize,ee,X,W*pe,W/P.locationSize*he*pe,Re)}}else if(N!==void 0){const X=N[b];if(X!==void 0)switch(X.length){case 2:s.vertexAttrib2fv(P.location,X);break;case 3:s.vertexAttrib3fv(P.location,X);break;case 4:s.vertexAttrib4fv(P.location,X);break;default:s.vertexAttrib1fv(P.location,X)}}}}L()}function M(){U();for(const C in a){const B=a[C];for(const G in B){const j=B[G];for(const te in j)g(j[te].object),delete j[te];delete B[G]}delete a[C]}}function A(C){if(a[C.id]===void 0)return;const B=a[C.id];for(const G in B){const j=B[G];for(const te in j)g(j[te].object),delete j[te];delete B[G]}delete a[C.id]}function q(C){for(const B in a){const G=a[B];if(G[C.id]===void 0)continue;const j=G[C.id];for(const te in j)g(j[te].object),delete j[te];delete G[C.id]}}function U(){z(),u=!0,c!==l&&(c=l,p(c.object))}function z(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:U,resetDefaultState:z,dispose:M,releaseStatesOfGeometry:A,releaseStatesOfProgram:q,initAttributes:v,enableAttribute:S,disableUnusedAttributes:L}}function jp(s,e,t,i){const n=i.isWebGL2;let r;function o(c){r=c}function a(c,u){s.drawArrays(r,c,u),t.update(u,r,1)}function l(c,u,h){if(h===0)return;let d,p;if(n)d=s,p="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[p](r,c,u,h),t.update(u,r,h)}this.setMode=o,this.render=a,this.renderInstances=l}function qp(s,e,t){let i;function n(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(E){if(E==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),d=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),m=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),f=s.getParameter(s.MAX_VARYING_VECTORS),x=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),v=d>0,S=o||e.has("OES_texture_float"),T=v&&S,L=o?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:n,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:d,maxTextureSize:p,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:m,maxVaryings:f,maxFragmentUniforms:x,vertexTextures:v,floatFragmentTextures:S,floatVertexTextures:T,maxSamples:L}}function Kp(s){const e=this;let t=null,i=0,n=!1,r=!1;const o=new Gn,a=new Ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const p=h.length!==0||d||i!==0||n;return n=d,i=h.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,p){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,f=s.get(h);if(!n||g===null||g.length===0||r&&!m)r?u(null):c();else{const x=r?0:i,v=x*4;let S=f.clippingState||null;l.value=S,S=u(g,d,v,p);for(let T=0;T!==v;++T)S[T]=t[T];f.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,d,p,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const f=p+_*4,x=d.matrixWorldInverse;a.getNormalMatrix(x),(m===null||m.length<f)&&(m=new Float32Array(f));for(let v=0,S=p;v!==_;++v,S+=4)o.copy(h[v]).applyMatrix4(x,a),o.normal.toArray(m,S),m[S+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function Zp(s){let e=new WeakMap;function t(o,a){return a===Da?o.mapping=Xi:a===Ia&&(o.mapping=Yi),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===Da||a===Ia)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new cd(l.height/2);return c.fromEquirectangularTexture(s,o),e.set(o,c),o.addEventListener("dispose",n),t(c.texture,o.mapping)}else return null}}return o}function n(o){const a=o.target;a.removeEventListener("dispose",n);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}class $c extends qc{constructor(e=-1,t=1,i=1,n=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=n,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,n,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=n+t,l=n-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const zi=4,Ml=[.125,.215,.35,.446,.526,.582],ai=20,fa=new $c,El=new qe;let pa=null,ma=0,ga=0;const ri=(1+Math.sqrt(5))/2,Ni=1/ri,bl=[new Y(1,1,1),new Y(-1,1,1),new Y(1,1,-1),new Y(-1,1,-1),new Y(0,ri,Ni),new Y(0,ri,-Ni),new Y(Ni,0,ri),new Y(-Ni,0,ri),new Y(ri,Ni,0),new Y(-ri,Ni,0)];class Tl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,n=100){pa=this._renderer.getRenderTarget(),ma=this._renderer.getActiveCubeFace(),ga=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,n,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Cl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=wl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(pa,ma,ga),e.scissorTest=!1,es(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Xi||e.mapping===Yi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),pa=this._renderer.getRenderTarget(),ma=this._renderer.getActiveCubeFace(),ga=this._renderer.getActiveMipmapLevel();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Ot,minFilter:Ot,generateMipmaps:!1,type:yr,format:hn,colorSpace:Pn,depthBuffer:!1},n=Al(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Al(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=$p(r)),this._blurMaterial=Jp(r,e,t)}return n}_compileMaterial(e){const t=new Wt(this._lodPlanes[0],e);this._renderer.compile(t,fa)}_sceneToCubeUV(e,t,i,n){const a=new jt(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(El),u.toneMapping=Yn,u.autoClear=!1;const p=new io({name:"PMREM.Background",side:wt,depthWrite:!1,depthTest:!1}),g=new Wt(new _i,p);let _=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,_=!0):(p.color.copy(El),_=!0);for(let f=0;f<6;f++){const x=f%3;x===0?(a.up.set(0,l[f],0),a.lookAt(c[f],0,0)):x===1?(a.up.set(0,0,l[f]),a.lookAt(0,c[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,c[f]));const v=this._cubeSize;es(n,x*v,f>2?v:0,v,v),u.setRenderTarget(n),_&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,n=e.mapping===Xi||e.mapping===Yi;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=Cl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=wl());const r=n?this._cubemapMaterial:this._equirectMaterial,o=new Wt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;es(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,fa)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let n=1;n<this._lodPlanes.length;n++){const r=Math.sqrt(this._sigmas[n]*this._sigmas[n]-this._sigmas[n-1]*this._sigmas[n-1]),o=bl[(n-1)%bl.length];this._blur(e,n-1,n,r,o)}t.autoClear=i}_blur(e,t,i,n,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,n,"latitudinal",r),this._halfBlur(o,e,i,i,n,"longitudinal",r)}_halfBlur(e,t,i,n,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Wt(this._lodPlanes[n],c),d=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*ai-1),_=r/g,m=isFinite(r)?1+Math.floor(u*_):ai;m>ai&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ai}`);const f=[];let x=0;for(let E=0;E<ai;++E){const D=E/_,M=Math.exp(-D*D/2);f.push(M),E===0?x+=M:E<m&&(x+=2*M)}for(let E=0;E<f.length;E++)f[E]=f[E]/x;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:v}=this;d.dTheta.value=g,d.mipInt.value=v-i;const S=this._sizeLods[n],T=3*S*(n>v-zi?n-v+zi:0),L=4*(this._cubeSize-S);es(t,T,L,3*S,2*S),l.setRenderTarget(t),l.render(h,fa)}}function $p(s){const e=[],t=[],i=[];let n=s;const r=s-zi+1+Ml.length;for(let o=0;o<r;o++){const a=Math.pow(2,n);t.push(a);let l=1/a;o>s-zi?l=Ml[o-s+zi-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,g=6,_=3,m=2,f=1,x=new Float32Array(_*g*p),v=new Float32Array(m*g*p),S=new Float32Array(f*g*p);for(let L=0;L<p;L++){const E=L%3*2/3-1,D=L>2?0:-1,M=[E,D,0,E+2/3,D,0,E+2/3,D+1,0,E,D,0,E+2/3,D+1,0,E,D+1,0];x.set(M,_*g*L),v.set(d,m*g*L);const A=[L,L,L,L,L,L];S.set(A,f*g*L)}const T=new Zt;T.setAttribute("position",new Kt(x,_)),T.setAttribute("uv",new Kt(v,m)),T.setAttribute("faceIndex",new Kt(S,f)),e.push(T),n>zi&&n--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Al(s,e,t){const i=new di(s,e,t);return i.texture.mapping=As,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function es(s,e,t,i,n){s.viewport.set(e,t,i,n),s.scissor.set(e,t,i,n)}function Jp(s,e,t){const i=new Float32Array(ai),n=new Y(0,1,0);return new qn({name:"SphericalGaussianBlur",defines:{n:ai,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:so(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function wl(){return new qn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:so(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function Cl(){return new qn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:so(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function so(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Qp(s){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Da||l===Ia,u=l===Xi||l===Yi;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return t===null&&(t=new Tl(s)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if(c&&h&&h.height>0||u&&h&&n(h)){t===null&&(t=new Tl(s));const d=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",r),d.texture}else return null}}}return a}function n(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function em(s){const e={};function t(i){if(e[i]!==void 0)return e[i];let n;switch(i){case"WEBGL_depth_texture":n=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=s.getExtension(i)}return e[i]=n,n}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const n=t(i);return n===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function tm(s,e,t,i){const n={},r=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let m=0,f=_.length;m<f;m++)e.remove(_[m])}d.removeEventListener("dispose",o),delete n[d.id];const p=r.get(d);p&&(e.remove(p),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return n[d.id]===!0||(d.addEventListener("dispose",o),n[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const g in d)e.update(d[g],s.ARRAY_BUFFER);const p=h.morphAttributes;for(const g in p){const _=p[g];for(let m=0,f=_.length;m<f;m++)e.update(_[m],s.ARRAY_BUFFER)}}function c(h){const d=[],p=h.index,g=h.attributes.position;let _=0;if(p!==null){const x=p.array;_=p.version;for(let v=0,S=x.length;v<S;v+=3){const T=x[v+0],L=x[v+1],E=x[v+2];d.push(T,L,L,E,E,T)}}else if(g!==void 0){const x=g.array;_=g.version;for(let v=0,S=x.length/3-1;v<S;v+=3){const T=v+0,L=v+1,E=v+2;d.push(T,L,L,E,E,T)}}else return;const m=new(kc(d)?Yc:Xc)(d,1);m.version=_;const f=r.get(h);f&&e.remove(f),r.set(h,m)}function u(h){const d=r.get(h);if(d){const p=h.index;p!==null&&d.version<p.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function nm(s,e,t,i){const n=i.isWebGL2;let r;function o(d){r=d}let a,l;function c(d){a=d.type,l=d.bytesPerElement}function u(d,p){s.drawElements(r,p,a,d*l),t.update(p,r,1)}function h(d,p,g){if(g===0)return;let _,m;if(n)_=s,m="drawElementsInstanced";else if(_=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",_===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[m](r,p,a,d*l,g),t.update(p,r,g)}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=h}function im(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function n(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:n,update:i}}function rm(s,e){return s[0]-e[0]}function sm(s,e){return Math.abs(e[1])-Math.abs(s[1])}function am(s,e,t){const i={},n=new Float32Array(8),r=new WeakMap,o=new rt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,h){const d=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,_=g!==void 0?g.length:0;let m=r.get(u);if(m===void 0||m.count!==_){let B=function(){z.dispose(),r.delete(u),u.removeEventListener("dispose",B)};var p=B;m!==void 0&&m.texture.dispose();const v=u.morphAttributes.position!==void 0,S=u.morphAttributes.normal!==void 0,T=u.morphAttributes.color!==void 0,L=u.morphAttributes.position||[],E=u.morphAttributes.normal||[],D=u.morphAttributes.color||[];let M=0;v===!0&&(M=1),S===!0&&(M=2),T===!0&&(M=3);let A=u.attributes.position.count*M,q=1;A>e.maxTextureSize&&(q=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const U=new Float32Array(A*q*4*_),z=new Hc(U,A,q,_);z.type=Vn,z.needsUpdate=!0;const C=M*4;for(let G=0;G<_;G++){const j=L[G],te=E[G],V=D[G],N=A*q*4*G;for(let b=0;b<j.count;b++){const P=b*C;v===!0&&(o.fromBufferAttribute(j,b),U[N+P+0]=o.x,U[N+P+1]=o.y,U[N+P+2]=o.z,U[N+P+3]=0),S===!0&&(o.fromBufferAttribute(te,b),U[N+P+4]=o.x,U[N+P+5]=o.y,U[N+P+6]=o.z,U[N+P+7]=0),T===!0&&(o.fromBufferAttribute(V,b),U[N+P+8]=o.x,U[N+P+9]=o.y,U[N+P+10]=o.z,U[N+P+11]=V.itemSize===4?o.w:1)}}m={count:_,texture:z,size:new He(A,q)},r.set(u,m),u.addEventListener("dispose",B)}let f=0;for(let v=0;v<d.length;v++)f+=d[v];const x=u.morphTargetsRelative?1:1-f;h.getUniforms().setValue(s,"morphTargetBaseInfluence",x),h.getUniforms().setValue(s,"morphTargetInfluences",d),h.getUniforms().setValue(s,"morphTargetsTexture",m.texture,t),h.getUniforms().setValue(s,"morphTargetsTextureSize",m.size)}else{const g=d===void 0?0:d.length;let _=i[u.id];if(_===void 0||_.length!==g){_=[];for(let S=0;S<g;S++)_[S]=[S,0];i[u.id]=_}for(let S=0;S<g;S++){const T=_[S];T[0]=S,T[1]=d[S]}_.sort(sm);for(let S=0;S<8;S++)S<g&&_[S][1]?(a[S][0]=_[S][0],a[S][1]=_[S][1]):(a[S][0]=Number.MAX_SAFE_INTEGER,a[S][1]=0);a.sort(rm);const m=u.morphAttributes.position,f=u.morphAttributes.normal;let x=0;for(let S=0;S<8;S++){const T=a[S],L=T[0],E=T[1];L!==Number.MAX_SAFE_INTEGER&&E?(m&&u.getAttribute("morphTarget"+S)!==m[L]&&u.setAttribute("morphTarget"+S,m[L]),f&&u.getAttribute("morphNormal"+S)!==f[L]&&u.setAttribute("morphNormal"+S,f[L]),n[S]=E,x+=E):(m&&u.hasAttribute("morphTarget"+S)===!0&&u.deleteAttribute("morphTarget"+S),f&&u.hasAttribute("morphNormal"+S)===!0&&u.deleteAttribute("morphNormal"+S),n[S]=0)}const v=u.morphTargetsRelative?1:1-x;h.getUniforms().setValue(s,"morphTargetBaseInfluence",v),h.getUniforms().setValue(s,"morphTargetInfluences",n)}}return{update:l}}function om(s,e,t,i){let n=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,h=e.get(l,u);if(n.get(h)!==c&&(e.update(h),n.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),n.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),n.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;n.get(d)!==c&&(d.update(),n.set(d,c))}return h}function o(){n=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}const Jc=new Bt,Qc=new Hc,eu=new jh,tu=new Kc,Rl=[],Ll=[],Pl=new Float32Array(16),Ul=new Float32Array(9),Dl=new Float32Array(4);function $i(s,e,t){const i=s[0];if(i<=0||i>0)return s;const n=e*t;let r=Rl[n];if(r===void 0&&(r=new Float32Array(n),Rl[n]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function ht(s,e){if(s.length!==e.length)return!1;for(let t=0,i=s.length;t<i;t++)if(s[t]!==e[t])return!1;return!0}function dt(s,e){for(let t=0,i=e.length;t<i;t++)s[t]=e[t]}function Ls(s,e){let t=Ll[e];t===void 0&&(t=new Int32Array(e),Ll[e]=t);for(let i=0;i!==e;++i)t[i]=s.allocateTextureUnit();return t}function lm(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function cm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ht(t,e))return;s.uniform2fv(this.addr,e),dt(t,e)}}function um(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ht(t,e))return;s.uniform3fv(this.addr,e),dt(t,e)}}function hm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ht(t,e))return;s.uniform4fv(this.addr,e),dt(t,e)}}function dm(s,e){const t=this.cache,i=e.elements;if(i===void 0){if(ht(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),dt(t,e)}else{if(ht(t,i))return;Dl.set(i),s.uniformMatrix2fv(this.addr,!1,Dl),dt(t,i)}}function fm(s,e){const t=this.cache,i=e.elements;if(i===void 0){if(ht(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),dt(t,e)}else{if(ht(t,i))return;Ul.set(i),s.uniformMatrix3fv(this.addr,!1,Ul),dt(t,i)}}function pm(s,e){const t=this.cache,i=e.elements;if(i===void 0){if(ht(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),dt(t,e)}else{if(ht(t,i))return;Pl.set(i),s.uniformMatrix4fv(this.addr,!1,Pl),dt(t,i)}}function mm(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function gm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ht(t,e))return;s.uniform2iv(this.addr,e),dt(t,e)}}function _m(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ht(t,e))return;s.uniform3iv(this.addr,e),dt(t,e)}}function vm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ht(t,e))return;s.uniform4iv(this.addr,e),dt(t,e)}}function xm(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Sm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ht(t,e))return;s.uniform2uiv(this.addr,e),dt(t,e)}}function ym(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ht(t,e))return;s.uniform3uiv(this.addr,e),dt(t,e)}}function Mm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ht(t,e))return;s.uniform4uiv(this.addr,e),dt(t,e)}}function Em(s,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),t.setTexture2D(e||Jc,n)}function bm(s,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),t.setTexture3D(e||eu,n)}function Tm(s,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),t.setTextureCube(e||tu,n)}function Am(s,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),t.setTexture2DArray(e||Qc,n)}function wm(s){switch(s){case 5126:return lm;case 35664:return cm;case 35665:return um;case 35666:return hm;case 35674:return dm;case 35675:return fm;case 35676:return pm;case 5124:case 35670:return mm;case 35667:case 35671:return gm;case 35668:case 35672:return _m;case 35669:case 35673:return vm;case 5125:return xm;case 36294:return Sm;case 36295:return ym;case 36296:return Mm;case 35678:case 36198:case 36298:case 36306:case 35682:return Em;case 35679:case 36299:case 36307:return bm;case 35680:case 36300:case 36308:case 36293:return Tm;case 36289:case 36303:case 36311:case 36292:return Am}}function Cm(s,e){s.uniform1fv(this.addr,e)}function Rm(s,e){const t=$i(e,this.size,2);s.uniform2fv(this.addr,t)}function Lm(s,e){const t=$i(e,this.size,3);s.uniform3fv(this.addr,t)}function Pm(s,e){const t=$i(e,this.size,4);s.uniform4fv(this.addr,t)}function Um(s,e){const t=$i(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function Dm(s,e){const t=$i(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Im(s,e){const t=$i(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function Fm(s,e){s.uniform1iv(this.addr,e)}function Om(s,e){s.uniform2iv(this.addr,e)}function Nm(s,e){s.uniform3iv(this.addr,e)}function Bm(s,e){s.uniform4iv(this.addr,e)}function km(s,e){s.uniform1uiv(this.addr,e)}function zm(s,e){s.uniform2uiv(this.addr,e)}function Gm(s,e){s.uniform3uiv(this.addr,e)}function Hm(s,e){s.uniform4uiv(this.addr,e)}function Vm(s,e,t){const i=this.cache,n=e.length,r=Ls(t,n);ht(i,r)||(s.uniform1iv(this.addr,r),dt(i,r));for(let o=0;o!==n;++o)t.setTexture2D(e[o]||Jc,r[o])}function Wm(s,e,t){const i=this.cache,n=e.length,r=Ls(t,n);ht(i,r)||(s.uniform1iv(this.addr,r),dt(i,r));for(let o=0;o!==n;++o)t.setTexture3D(e[o]||eu,r[o])}function Xm(s,e,t){const i=this.cache,n=e.length,r=Ls(t,n);ht(i,r)||(s.uniform1iv(this.addr,r),dt(i,r));for(let o=0;o!==n;++o)t.setTextureCube(e[o]||tu,r[o])}function Ym(s,e,t){const i=this.cache,n=e.length,r=Ls(t,n);ht(i,r)||(s.uniform1iv(this.addr,r),dt(i,r));for(let o=0;o!==n;++o)t.setTexture2DArray(e[o]||Qc,r[o])}function jm(s){switch(s){case 5126:return Cm;case 35664:return Rm;case 35665:return Lm;case 35666:return Pm;case 35674:return Um;case 35675:return Dm;case 35676:return Im;case 5124:case 35670:return Fm;case 35667:case 35671:return Om;case 35668:case 35672:return Nm;case 35669:case 35673:return Bm;case 5125:return km;case 36294:return zm;case 36295:return Gm;case 36296:return Hm;case 35678:case 36198:case 36298:case 36306:case 35682:return Vm;case 35679:case 36299:case 36307:return Wm;case 35680:case 36300:case 36308:case 36293:return Xm;case 36289:case 36303:case 36311:case 36292:return Ym}}class qm{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=wm(t.type)}}class Km{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=jm(t.type)}}class Zm{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const n=this.seq;for(let r=0,o=n.length;r!==o;++r){const a=n[r];a.setValue(e,t[a.id],i)}}}const _a=/(\w+)(\])?(\[|\.)?/g;function Il(s,e){s.seq.push(e),s.map[e.id]=e}function $m(s,e,t){const i=s.name,n=i.length;for(_a.lastIndex=0;;){const r=_a.exec(i),o=_a.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===n){Il(t,c===void 0?new qm(a,s,e):new Km(a,s,e));break}else{let h=t.map[a];h===void 0&&(h=new Zm(a),Il(t,h)),t=h}}}class fs{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){const r=e.getActiveUniform(t,n),o=e.getUniformLocation(t,r.name);$m(r,o,this)}}setValue(e,t,i,n){const r=this.map[t];r!==void 0&&r.setValue(e,i,n)}setOptional(e,t,i){const n=t[i];n!==void 0&&this.setValue(e,i,n)}static upload(e,t,i,n){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,n)}}static seqWithValue(e,t){const i=[];for(let n=0,r=e.length;n!==r;++n){const o=e[n];o.id in t&&i.push(o)}return i}}function Fl(s,e,t){const i=s.createShader(e);return s.shaderSource(i,t),s.compileShader(i),i}const Jm=37297;let Qm=0;function eg(s,e){const t=s.split(`
`),i=[],n=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=n;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function tg(s){const e=et.getPrimaries(et.workingColorSpace),t=et.getPrimaries(s);let i;switch(e===t?i="":e===xs&&t===vs?i="LinearDisplayP3ToLinearSRGB":e===vs&&t===xs&&(i="LinearSRGBToLinearDisplayP3"),s){case Pn:case ws:return[i,"LinearTransferOETF"];case yt:case eo:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[i,"LinearTransferOETF"]}}function Ol(s,e,t){const i=s.getShaderParameter(e,s.COMPILE_STATUS),n=s.getShaderInfoLog(e).trim();if(i&&n==="")return"";const r=/ERROR: 0:(\d+)/.exec(n);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+n+`

`+eg(s.getShaderSource(e),o)}else return n}function ng(s,e){const t=tg(e);return`vec4 ${s}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function ig(s,e){let t;switch(e){case ih:t="Linear";break;case rh:t="Reinhard";break;case sh:t="OptimizedCineon";break;case ah:t="ACESFilmic";break;case oh:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function rg(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(pr).join(`
`)}function sg(s){const e=[];for(const t in s){const i=s[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function ag(s,e){const t={},i=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){const r=s.getActiveAttrib(e,n),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function pr(s){return s!==""}function Nl(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Bl(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const og=/^[ \t]*#include +<([\w\d./]+)>/gm;function za(s){return s.replace(og,cg)}const lg=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function cg(s,e){let t=je[e];if(t===void 0){const i=lg.get(e);if(i!==void 0)t=je[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return za(t)}const ug=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function kl(s){return s.replace(ug,hg)}function hg(s,e,t,i){let n="";for(let r=parseInt(e);r<parseInt(t);r++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return n}function zl(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function dg(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===wc?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Pu?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===wn&&(e="SHADOWMAP_TYPE_VSM"),e}function fg(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Xi:case Yi:e="ENVMAP_TYPE_CUBE";break;case As:e="ENVMAP_TYPE_CUBE_UV";break}return e}function pg(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Yi:e="ENVMAP_MODE_REFRACTION";break}return e}function mg(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Ja:e="ENVMAP_BLENDING_MULTIPLY";break;case th:e="ENVMAP_BLENDING_MIX";break;case nh:e="ENVMAP_BLENDING_ADD";break}return e}function gg(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function _g(s,e,t,i){const n=s.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=dg(t),c=fg(t),u=pg(t),h=mg(t),d=gg(t),p=t.isWebGL2?"":rg(t),g=sg(r),_=n.createProgram();let m,f,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(pr).join(`
`),m.length>0&&(m+=`
`),f=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(pr).join(`
`),f.length>0&&(f+=`
`)):(m=[zl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(pr).join(`
`),f=[p,zl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Yn?"#define TONE_MAPPING":"",t.toneMapping!==Yn?je.tonemapping_pars_fragment:"",t.toneMapping!==Yn?ig("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",je.colorspace_pars_fragment,ng("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(pr).join(`
`)),o=za(o),o=Nl(o,t),o=Bl(o,t),a=za(a),a=Nl(a,t),a=Bl(a,t),o=kl(o),a=kl(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===rl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===rl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const v=x+m+o,S=x+f+a,T=Fl(n,n.VERTEX_SHADER,v),L=Fl(n,n.FRAGMENT_SHADER,S);n.attachShader(_,T),n.attachShader(_,L),t.index0AttributeName!==void 0?n.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&n.bindAttribLocation(_,0,"position"),n.linkProgram(_);function E(q){if(s.debug.checkShaderErrors){const U=n.getProgramInfoLog(_).trim(),z=n.getShaderInfoLog(T).trim(),C=n.getShaderInfoLog(L).trim();let B=!0,G=!0;if(n.getProgramParameter(_,n.LINK_STATUS)===!1)if(B=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(n,_,T,L);else{const j=Ol(n,T,"vertex"),te=Ol(n,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(_,n.VALIDATE_STATUS)+`

Program Info Log: `+U+`
`+j+`
`+te)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(z===""||C==="")&&(G=!1);G&&(q.diagnostics={runnable:B,programLog:U,vertexShader:{log:z,prefix:m},fragmentShader:{log:C,prefix:f}})}n.deleteShader(T),n.deleteShader(L),D=new fs(n,_),M=ag(n,_)}let D;this.getUniforms=function(){return D===void 0&&E(this),D};let M;this.getAttributes=function(){return M===void 0&&E(this),M};let A=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=n.getProgramParameter(_,Jm)),A},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Qm++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=T,this.fragmentShader=L,this}let vg=0;class xg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,n=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(n)===!1&&(o.add(n),n.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Sg(e),t.set(e,i)),i}}class Sg{constructor(e){this.id=vg++,this.code=e,this.usedTimes=0}}function yg(s,e,t,i,n,r,o){const a=new Vc,l=new xg,c=[],u=n.isWebGL2,h=n.logarithmicDepthBuffer,d=n.vertexTextures;let p=n.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return M===0?"uv":`uv${M}`}function m(M,A,q,U,z){const C=U.fog,B=z.geometry,G=M.isMeshStandardMaterial?U.environment:null,j=(M.isMeshStandardMaterial?t:e).get(M.envMap||G),te=j&&j.mapping===As?j.image.height:null,V=g[M.type];M.precision!==null&&(p=n.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));const N=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,b=N!==void 0?N.length:0;let P=0;B.morphAttributes.position!==void 0&&(P=1),B.morphAttributes.normal!==void 0&&(P=2),B.morphAttributes.color!==void 0&&(P=3);let H,X,W,ne;if(V){const Ve=Nt[V];H=Ve.vertexShader,X=Ve.fragmentShader}else H=M.vertexShader,X=M.fragmentShader,l.update(M),W=l.getVertexShaderID(M),ne=l.getFragmentShaderID(M);const Q=s.getRenderTarget(),ee=z.isInstancedMesh===!0,pe=!!M.map,Re=!!M.matcap,he=!!j,F=!!M.aoMap,ke=!!M.lightMap,Se=!!M.bumpMap,Me=!!M.normalMap,Ee=!!M.displacementMap,Ne=!!M.emissiveMap,ue=!!M.metalnessMap,ye=!!M.roughnessMap,be=M.anisotropy>0,ae=M.clearcoat>0,Ie=M.iridescence>0,w=M.sheen>0,y=M.transmission>0,k=be&&!!M.anisotropyMap,fe=ae&&!!M.clearcoatMap,$=ae&&!!M.clearcoatNormalMap,re=ae&&!!M.clearcoatRoughnessMap,_e=Ie&&!!M.iridescenceMap,de=Ie&&!!M.iridescenceThicknessMap,ve=w&&!!M.sheenColorMap,I=w&&!!M.sheenRoughnessMap,le=!!M.specularMap,J=!!M.specularColorMap,me=!!M.specularIntensityMap,Ae=y&&!!M.transmissionMap,De=y&&!!M.thicknessMap,Fe=!!M.gradientMap,Te=!!M.alphaMap,Ce=M.alphaTest>0,O=!!M.alphaHash,we=!!M.extensions,ce=!!B.attributes.uv1,Z=!!B.attributes.uv2,ge=!!B.attributes.uv3;let Pe=Yn;return M.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(Pe=s.toneMapping),{isWebGL2:u,shaderID:V,shaderType:M.type,shaderName:M.name,vertexShader:H,fragmentShader:X,defines:M.defines,customVertexShaderID:W,customFragmentShaderID:ne,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,instancing:ee,instancingColor:ee&&z.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:Q===null?s.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:Pn,map:pe,matcap:Re,envMap:he,envMapMode:he&&j.mapping,envMapCubeUVHeight:te,aoMap:F,lightMap:ke,bumpMap:Se,normalMap:Me,displacementMap:d&&Ee,emissiveMap:Ne,normalMapObjectSpace:Me&&M.normalMapType===xh,normalMapTangentSpace:Me&&M.normalMapType===Nc,metalnessMap:ue,roughnessMap:ye,anisotropy:be,anisotropyMap:k,clearcoat:ae,clearcoatMap:fe,clearcoatNormalMap:$,clearcoatRoughnessMap:re,iridescence:Ie,iridescenceMap:_e,iridescenceThicknessMap:de,sheen:w,sheenColorMap:ve,sheenRoughnessMap:I,specularMap:le,specularColorMap:J,specularIntensityMap:me,transmission:y,transmissionMap:Ae,thicknessMap:De,gradientMap:Fe,opaque:M.transparent===!1&&M.blending===Gi,alphaMap:Te,alphaTest:Ce,alphaHash:O,combine:M.combine,mapUv:pe&&_(M.map.channel),aoMapUv:F&&_(M.aoMap.channel),lightMapUv:ke&&_(M.lightMap.channel),bumpMapUv:Se&&_(M.bumpMap.channel),normalMapUv:Me&&_(M.normalMap.channel),displacementMapUv:Ee&&_(M.displacementMap.channel),emissiveMapUv:Ne&&_(M.emissiveMap.channel),metalnessMapUv:ue&&_(M.metalnessMap.channel),roughnessMapUv:ye&&_(M.roughnessMap.channel),anisotropyMapUv:k&&_(M.anisotropyMap.channel),clearcoatMapUv:fe&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:$&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:re&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:_e&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:de&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:ve&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:I&&_(M.sheenRoughnessMap.channel),specularMapUv:le&&_(M.specularMap.channel),specularColorMapUv:J&&_(M.specularColorMap.channel),specularIntensityMapUv:me&&_(M.specularIntensityMap.channel),transmissionMapUv:Ae&&_(M.transmissionMap.channel),thicknessMapUv:De&&_(M.thicknessMap.channel),alphaMapUv:Te&&_(M.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(Me||be),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,vertexUv1s:ce,vertexUv2s:Z,vertexUv3s:ge,pointsUvs:z.isPoints===!0&&!!B.attributes.uv&&(pe||Te),fog:!!C,useFog:M.fog===!0,fogExp2:C&&C.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:z.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:b,morphTextureStride:P,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:s.shadowMap.enabled&&q.length>0,shadowMapType:s.shadowMap.type,toneMapping:Pe,useLegacyLights:s._useLegacyLights,decodeVideoTexture:pe&&M.map.isVideoTexture===!0&&et.getTransfer(M.map.colorSpace)===it,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===cn,flipSided:M.side===wt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:we&&M.extensions.derivatives===!0,extensionFragDepth:we&&M.extensions.fragDepth===!0,extensionDrawBuffers:we&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:we&&M.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function f(M){const A=[];if(M.shaderID?A.push(M.shaderID):(A.push(M.customVertexShaderID),A.push(M.customFragmentShaderID)),M.defines!==void 0)for(const q in M.defines)A.push(q),A.push(M.defines[q]);return M.isRawShaderMaterial===!1&&(x(A,M),v(A,M),A.push(s.outputColorSpace)),A.push(M.customProgramCacheKey),A.join()}function x(M,A){M.push(A.precision),M.push(A.outputColorSpace),M.push(A.envMapMode),M.push(A.envMapCubeUVHeight),M.push(A.mapUv),M.push(A.alphaMapUv),M.push(A.lightMapUv),M.push(A.aoMapUv),M.push(A.bumpMapUv),M.push(A.normalMapUv),M.push(A.displacementMapUv),M.push(A.emissiveMapUv),M.push(A.metalnessMapUv),M.push(A.roughnessMapUv),M.push(A.anisotropyMapUv),M.push(A.clearcoatMapUv),M.push(A.clearcoatNormalMapUv),M.push(A.clearcoatRoughnessMapUv),M.push(A.iridescenceMapUv),M.push(A.iridescenceThicknessMapUv),M.push(A.sheenColorMapUv),M.push(A.sheenRoughnessMapUv),M.push(A.specularMapUv),M.push(A.specularColorMapUv),M.push(A.specularIntensityMapUv),M.push(A.transmissionMapUv),M.push(A.thicknessMapUv),M.push(A.combine),M.push(A.fogExp2),M.push(A.sizeAttenuation),M.push(A.morphTargetsCount),M.push(A.morphAttributeCount),M.push(A.numDirLights),M.push(A.numPointLights),M.push(A.numSpotLights),M.push(A.numSpotLightMaps),M.push(A.numHemiLights),M.push(A.numRectAreaLights),M.push(A.numDirLightShadows),M.push(A.numPointLightShadows),M.push(A.numSpotLightShadows),M.push(A.numSpotLightShadowsWithMaps),M.push(A.numLightProbes),M.push(A.shadowMapType),M.push(A.toneMapping),M.push(A.numClippingPlanes),M.push(A.numClipIntersection),M.push(A.depthPacking)}function v(M,A){a.disableAll(),A.isWebGL2&&a.enable(0),A.supportsVertexTextures&&a.enable(1),A.instancing&&a.enable(2),A.instancingColor&&a.enable(3),A.matcap&&a.enable(4),A.envMap&&a.enable(5),A.normalMapObjectSpace&&a.enable(6),A.normalMapTangentSpace&&a.enable(7),A.clearcoat&&a.enable(8),A.iridescence&&a.enable(9),A.alphaTest&&a.enable(10),A.vertexColors&&a.enable(11),A.vertexAlphas&&a.enable(12),A.vertexUv1s&&a.enable(13),A.vertexUv2s&&a.enable(14),A.vertexUv3s&&a.enable(15),A.vertexTangents&&a.enable(16),A.anisotropy&&a.enable(17),A.alphaHash&&a.enable(18),M.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.skinning&&a.enable(4),A.morphTargets&&a.enable(5),A.morphNormals&&a.enable(6),A.morphColors&&a.enable(7),A.premultipliedAlpha&&a.enable(8),A.shadowMapEnabled&&a.enable(9),A.useLegacyLights&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),M.push(a.mask)}function S(M){const A=g[M.type];let q;if(A){const U=Nt[A];q=Rs.clone(U.uniforms)}else q=M.uniforms;return q}function T(M,A){let q;for(let U=0,z=c.length;U<z;U++){const C=c[U];if(C.cacheKey===A){q=C,++q.usedTimes;break}}return q===void 0&&(q=new _g(s,A,M,r),c.push(q)),q}function L(M){if(--M.usedTimes===0){const A=c.indexOf(M);c[A]=c[c.length-1],c.pop(),M.destroy()}}function E(M){l.remove(M)}function D(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:S,acquireProgram:T,releaseProgram:L,releaseShaderCache:E,programs:c,dispose:D}}function Mg(){let s=new WeakMap;function e(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function t(r){s.delete(r)}function i(r,o,a){s.get(r)[o]=a}function n(){s=new WeakMap}return{get:e,remove:t,update:i,dispose:n}}function Eg(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Gl(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Hl(){const s=[];let e=0;const t=[],i=[],n=[];function r(){e=0,t.length=0,i.length=0,n.length=0}function o(h,d,p,g,_,m){let f=s[e];return f===void 0?(f={id:h.id,object:h,geometry:d,material:p,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},s[e]=f):(f.id=h.id,f.object=h,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=h.renderOrder,f.z=_,f.group=m),e++,f}function a(h,d,p,g,_,m){const f=o(h,d,p,g,_,m);p.transmission>0?i.push(f):p.transparent===!0?n.push(f):t.push(f)}function l(h,d,p,g,_,m){const f=o(h,d,p,g,_,m);p.transmission>0?i.unshift(f):p.transparent===!0?n.unshift(f):t.unshift(f)}function c(h,d){t.length>1&&t.sort(h||Eg),i.length>1&&i.sort(d||Gl),n.length>1&&n.sort(d||Gl)}function u(){for(let h=e,d=s.length;h<d;h++){const p=s[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:n,init:r,push:a,unshift:l,finish:u,sort:c}}function bg(){let s=new WeakMap;function e(i,n){const r=s.get(i);let o;return r===void 0?(o=new Hl,s.set(i,[o])):n>=r.length?(o=new Hl,r.push(o)):o=r[n],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function Tg(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new Y,color:new qe};break;case"SpotLight":t={position:new Y,direction:new Y,color:new qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Y,color:new qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Y,skyColor:new qe,groundColor:new qe};break;case"RectAreaLight":t={color:new qe,position:new Y,halfWidth:new Y,halfHeight:new Y};break}return s[e.id]=t,t}}}function Ag(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let wg=0;function Cg(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function Rg(s,e){const t=new Tg,i=Ag(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)n.probe.push(new Y);const r=new Y,o=new ct,a=new ct;function l(u,h){let d=0,p=0,g=0;for(let U=0;U<9;U++)n.probe[U].set(0,0,0);let _=0,m=0,f=0,x=0,v=0,S=0,T=0,L=0,E=0,D=0,M=0;u.sort(Cg);const A=h===!0?Math.PI:1;for(let U=0,z=u.length;U<z;U++){const C=u[U],B=C.color,G=C.intensity,j=C.distance,te=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)d+=B.r*G*A,p+=B.g*G*A,g+=B.b*G*A;else if(C.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(C.sh.coefficients[V],G);M++}else if(C.isDirectionalLight){const V=t.get(C);if(V.color.copy(C.color).multiplyScalar(C.intensity*A),C.castShadow){const N=C.shadow,b=i.get(C);b.shadowBias=N.bias,b.shadowNormalBias=N.normalBias,b.shadowRadius=N.radius,b.shadowMapSize=N.mapSize,n.directionalShadow[_]=b,n.directionalShadowMap[_]=te,n.directionalShadowMatrix[_]=C.shadow.matrix,S++}n.directional[_]=V,_++}else if(C.isSpotLight){const V=t.get(C);V.position.setFromMatrixPosition(C.matrixWorld),V.color.copy(B).multiplyScalar(G*A),V.distance=j,V.coneCos=Math.cos(C.angle),V.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),V.decay=C.decay,n.spot[f]=V;const N=C.shadow;if(C.map&&(n.spotLightMap[E]=C.map,E++,N.updateMatrices(C),C.castShadow&&D++),n.spotLightMatrix[f]=N.matrix,C.castShadow){const b=i.get(C);b.shadowBias=N.bias,b.shadowNormalBias=N.normalBias,b.shadowRadius=N.radius,b.shadowMapSize=N.mapSize,n.spotShadow[f]=b,n.spotShadowMap[f]=te,L++}f++}else if(C.isRectAreaLight){const V=t.get(C);V.color.copy(B).multiplyScalar(G),V.halfWidth.set(C.width*.5,0,0),V.halfHeight.set(0,C.height*.5,0),n.rectArea[x]=V,x++}else if(C.isPointLight){const V=t.get(C);if(V.color.copy(C.color).multiplyScalar(C.intensity*A),V.distance=C.distance,V.decay=C.decay,C.castShadow){const N=C.shadow,b=i.get(C);b.shadowBias=N.bias,b.shadowNormalBias=N.normalBias,b.shadowRadius=N.radius,b.shadowMapSize=N.mapSize,b.shadowCameraNear=N.camera.near,b.shadowCameraFar=N.camera.far,n.pointShadow[m]=b,n.pointShadowMap[m]=te,n.pointShadowMatrix[m]=C.shadow.matrix,T++}n.point[m]=V,m++}else if(C.isHemisphereLight){const V=t.get(C);V.skyColor.copy(C.color).multiplyScalar(G*A),V.groundColor.copy(C.groundColor).multiplyScalar(G*A),n.hemi[v]=V,v++}}x>0&&(e.isWebGL2||s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Le.LTC_FLOAT_1,n.rectAreaLTC2=Le.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(n.rectAreaLTC1=Le.LTC_HALF_1,n.rectAreaLTC2=Le.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),n.ambient[0]=d,n.ambient[1]=p,n.ambient[2]=g;const q=n.hash;(q.directionalLength!==_||q.pointLength!==m||q.spotLength!==f||q.rectAreaLength!==x||q.hemiLength!==v||q.numDirectionalShadows!==S||q.numPointShadows!==T||q.numSpotShadows!==L||q.numSpotMaps!==E||q.numLightProbes!==M)&&(n.directional.length=_,n.spot.length=f,n.rectArea.length=x,n.point.length=m,n.hemi.length=v,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=T,n.pointShadowMap.length=T,n.spotShadow.length=L,n.spotShadowMap.length=L,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=T,n.spotLightMatrix.length=L+E-D,n.spotLightMap.length=E,n.numSpotLightShadowsWithMaps=D,n.numLightProbes=M,q.directionalLength=_,q.pointLength=m,q.spotLength=f,q.rectAreaLength=x,q.hemiLength=v,q.numDirectionalShadows=S,q.numPointShadows=T,q.numSpotShadows=L,q.numSpotMaps=E,q.numLightProbes=M,n.version=wg++)}function c(u,h){let d=0,p=0,g=0,_=0,m=0;const f=h.matrixWorldInverse;for(let x=0,v=u.length;x<v;x++){const S=u[x];if(S.isDirectionalLight){const T=n.directional[d];T.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(f),d++}else if(S.isSpotLight){const T=n.spot[g];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(f),T.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(f),g++}else if(S.isRectAreaLight){const T=n.rectArea[_];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(f),a.identity(),o.copy(S.matrixWorld),o.premultiply(f),a.extractRotation(o),T.halfWidth.set(S.width*.5,0,0),T.halfHeight.set(0,S.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),_++}else if(S.isPointLight){const T=n.point[p];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(f),p++}else if(S.isHemisphereLight){const T=n.hemi[m];T.direction.setFromMatrixPosition(S.matrixWorld),T.direction.transformDirection(f),m++}}}return{setup:l,setupView:c,state:n}}function Vl(s,e){const t=new Rg(s,e),i=[],n=[];function r(){i.length=0,n.length=0}function o(h){i.push(h)}function a(h){n.push(h)}function l(h){t.setup(i,h)}function c(h){t.setupView(i,h)}return{init:r,state:{lightsArray:i,shadowsArray:n,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function Lg(s,e){let t=new WeakMap;function i(r,o=0){const a=t.get(r);let l;return a===void 0?(l=new Vl(s,e),t.set(r,[l])):o>=a.length?(l=new Vl(s,e),a.push(l)):l=a[o],l}function n(){t=new WeakMap}return{get:i,dispose:n}}class nu extends Ki{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=vh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class iu extends Ki{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Pg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ug=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Dg(s,e,t){let i=new ro;const n=new He,r=new He,o=new rt,a=new nu({depthPacking:Oc}),l=new iu,c={},u=t.maxTextureSize,h={[Sn]:wt,[wt]:Sn,[cn]:cn},d=new qn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new He},radius:{value:4}},vertexShader:Pg,fragmentShader:Ug}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new Zt;g.setAttribute("position",new Kt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Wt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=wc;let f=this.type;this.render=function(T,L,E){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const D=s.getRenderTarget(),M=s.getActiveCubeFace(),A=s.getActiveMipmapLevel(),q=s.state;q.setBlending(Xn),q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);const U=f!==wn&&this.type===wn,z=f===wn&&this.type!==wn;for(let C=0,B=T.length;C<B;C++){const G=T[C],j=G.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",G,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;n.copy(j.mapSize);const te=j.getFrameExtents();if(n.multiply(te),r.copy(j.mapSize),(n.x>u||n.y>u)&&(n.x>u&&(r.x=Math.floor(u/te.x),n.x=r.x*te.x,j.mapSize.x=r.x),n.y>u&&(r.y=Math.floor(u/te.y),n.y=r.y*te.y,j.mapSize.y=r.y)),j.map===null||U===!0||z===!0){const N=this.type!==wn?{minFilter:Lt,magFilter:Lt}:{};j.map!==null&&j.map.dispose(),j.map=new di(n.x,n.y,N),j.map.texture.name=G.name+".shadowMap",j.camera.updateProjectionMatrix()}s.setRenderTarget(j.map),s.clear();const V=j.getViewportCount();for(let N=0;N<V;N++){const b=j.getViewport(N);o.set(r.x*b.x,r.y*b.y,r.x*b.z,r.y*b.w),q.viewport(o),j.updateMatrices(G,N),i=j.getFrustum(),S(L,E,j.camera,G,this.type)}j.isPointLightShadow!==!0&&this.type===wn&&x(j,E),j.needsUpdate=!1}f=this.type,m.needsUpdate=!1,s.setRenderTarget(D,M,A)};function x(T,L){const E=e.update(_);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new di(n.x,n.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,s.setRenderTarget(T.mapPass),s.clear(),s.renderBufferDirect(L,null,E,d,_,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,s.setRenderTarget(T.map),s.clear(),s.renderBufferDirect(L,null,E,p,_,null)}function v(T,L,E,D){let M=null;const A=E.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(A!==void 0)M=A;else if(M=E.isPointLight===!0?l:a,s.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0){const q=M.uuid,U=L.uuid;let z=c[q];z===void 0&&(z={},c[q]=z);let C=z[U];C===void 0&&(C=M.clone(),z[U]=C),M=C}if(M.visible=L.visible,M.wireframe=L.wireframe,D===wn?M.side=L.shadowSide!==null?L.shadowSide:L.side:M.side=L.shadowSide!==null?L.shadowSide:h[L.side],M.alphaMap=L.alphaMap,M.alphaTest=L.alphaTest,M.map=L.map,M.clipShadows=L.clipShadows,M.clippingPlanes=L.clippingPlanes,M.clipIntersection=L.clipIntersection,M.displacementMap=L.displacementMap,M.displacementScale=L.displacementScale,M.displacementBias=L.displacementBias,M.wireframeLinewidth=L.wireframeLinewidth,M.linewidth=L.linewidth,E.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const q=s.properties.get(M);q.light=E}return M}function S(T,L,E,D,M){if(T.visible===!1)return;if(T.layers.test(L.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&M===wn)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,T.matrixWorld);const U=e.update(T),z=T.material;if(Array.isArray(z)){const C=U.groups;for(let B=0,G=C.length;B<G;B++){const j=C[B],te=z[j.materialIndex];if(te&&te.visible){const V=v(T,te,D,M);s.renderBufferDirect(E,null,U,V,T,j)}}}else if(z.visible){const C=v(T,z,D,M);s.renderBufferDirect(E,null,U,C,T,null)}}const q=T.children;for(let U=0,z=q.length;U<z;U++)S(q[U],L,E,D,M)}}function Ig(s,e,t){const i=t.isWebGL2;function n(){let O=!1;const we=new rt;let ce=null;const Z=new rt(0,0,0,0);return{setMask:function(ge){ce!==ge&&!O&&(s.colorMask(ge,ge,ge,ge),ce=ge)},setLocked:function(ge){O=ge},setClear:function(ge,Pe,Ue,Ve,Je){Je===!0&&(ge*=Ve,Pe*=Ve,Ue*=Ve),we.set(ge,Pe,Ue,Ve),Z.equals(we)===!1&&(s.clearColor(ge,Pe,Ue,Ve),Z.copy(we))},reset:function(){O=!1,ce=null,Z.set(-1,0,0,0)}}}function r(){let O=!1,we=null,ce=null,Z=null;return{setTest:function(ge){ge?pe(s.DEPTH_TEST):Re(s.DEPTH_TEST)},setMask:function(ge){we!==ge&&!O&&(s.depthMask(ge),we=ge)},setFunc:function(ge){if(ce!==ge){switch(ge){case qu:s.depthFunc(s.NEVER);break;case Ku:s.depthFunc(s.ALWAYS);break;case Zu:s.depthFunc(s.LESS);break;case gs:s.depthFunc(s.LEQUAL);break;case $u:s.depthFunc(s.EQUAL);break;case Ju:s.depthFunc(s.GEQUAL);break;case Qu:s.depthFunc(s.GREATER);break;case eh:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ce=ge}},setLocked:function(ge){O=ge},setClear:function(ge){Z!==ge&&(s.clearDepth(ge),Z=ge)},reset:function(){O=!1,we=null,ce=null,Z=null}}}function o(){let O=!1,we=null,ce=null,Z=null,ge=null,Pe=null,Ue=null,Ve=null,Je=null;return{setTest:function(Ye){O||(Ye?pe(s.STENCIL_TEST):Re(s.STENCIL_TEST))},setMask:function(Ye){we!==Ye&&!O&&(s.stencilMask(Ye),we=Ye)},setFunc:function(Ye,$e,at){(ce!==Ye||Z!==$e||ge!==at)&&(s.stencilFunc(Ye,$e,at),ce=Ye,Z=$e,ge=at)},setOp:function(Ye,$e,at){(Pe!==Ye||Ue!==$e||Ve!==at)&&(s.stencilOp(Ye,$e,at),Pe=Ye,Ue=$e,Ve=at)},setLocked:function(Ye){O=Ye},setClear:function(Ye){Je!==Ye&&(s.clearStencil(Ye),Je=Ye)},reset:function(){O=!1,we=null,ce=null,Z=null,ge=null,Pe=null,Ue=null,Ve=null,Je=null}}}const a=new n,l=new r,c=new o,u=new WeakMap,h=new WeakMap;let d={},p={},g=new WeakMap,_=[],m=null,f=!1,x=null,v=null,S=null,T=null,L=null,E=null,D=null,M=new qe(0,0,0),A=0,q=!1,U=null,z=null,C=null,B=null,G=null;const j=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let te=!1,V=0;const N=s.getParameter(s.VERSION);N.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(N)[1]),te=V>=1):N.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(N)[1]),te=V>=2);let b=null,P={};const H=s.getParameter(s.SCISSOR_BOX),X=s.getParameter(s.VIEWPORT),W=new rt().fromArray(H),ne=new rt().fromArray(X);function Q(O,we,ce,Z){const ge=new Uint8Array(4),Pe=s.createTexture();s.bindTexture(O,Pe),s.texParameteri(O,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(O,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ue=0;Ue<ce;Ue++)i&&(O===s.TEXTURE_3D||O===s.TEXTURE_2D_ARRAY)?s.texImage3D(we,0,s.RGBA,1,1,Z,0,s.RGBA,s.UNSIGNED_BYTE,ge):s.texImage2D(we+Ue,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ge);return Pe}const ee={};ee[s.TEXTURE_2D]=Q(s.TEXTURE_2D,s.TEXTURE_2D,1),ee[s.TEXTURE_CUBE_MAP]=Q(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(ee[s.TEXTURE_2D_ARRAY]=Q(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ee[s.TEXTURE_3D]=Q(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),pe(s.DEPTH_TEST),l.setFunc(gs),ue(!1),ye(To),pe(s.CULL_FACE),Ee(Xn);function pe(O){d[O]!==!0&&(s.enable(O),d[O]=!0)}function Re(O){d[O]!==!1&&(s.disable(O),d[O]=!1)}function he(O,we){return p[O]!==we?(s.bindFramebuffer(O,we),p[O]=we,i&&(O===s.DRAW_FRAMEBUFFER&&(p[s.FRAMEBUFFER]=we),O===s.FRAMEBUFFER&&(p[s.DRAW_FRAMEBUFFER]=we)),!0):!1}function F(O,we){let ce=_,Z=!1;if(O)if(ce=g.get(we),ce===void 0&&(ce=[],g.set(we,ce)),O.isWebGLMultipleRenderTargets){const ge=O.texture;if(ce.length!==ge.length||ce[0]!==s.COLOR_ATTACHMENT0){for(let Pe=0,Ue=ge.length;Pe<Ue;Pe++)ce[Pe]=s.COLOR_ATTACHMENT0+Pe;ce.length=ge.length,Z=!0}}else ce[0]!==s.COLOR_ATTACHMENT0&&(ce[0]=s.COLOR_ATTACHMENT0,Z=!0);else ce[0]!==s.BACK&&(ce[0]=s.BACK,Z=!0);Z&&(t.isWebGL2?s.drawBuffers(ce):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ce))}function ke(O){return m!==O?(s.useProgram(O),m=O,!0):!1}const Se={[si]:s.FUNC_ADD,[Du]:s.FUNC_SUBTRACT,[Iu]:s.FUNC_REVERSE_SUBTRACT};if(i)Se[Ro]=s.MIN,Se[Lo]=s.MAX;else{const O=e.get("EXT_blend_minmax");O!==null&&(Se[Ro]=O.MIN_EXT,Se[Lo]=O.MAX_EXT)}const Me={[Fu]:s.ZERO,[Ou]:s.ONE,[Nu]:s.SRC_COLOR,[Pa]:s.SRC_ALPHA,[Vu]:s.SRC_ALPHA_SATURATE,[Gu]:s.DST_COLOR,[ku]:s.DST_ALPHA,[Bu]:s.ONE_MINUS_SRC_COLOR,[Ua]:s.ONE_MINUS_SRC_ALPHA,[Hu]:s.ONE_MINUS_DST_COLOR,[zu]:s.ONE_MINUS_DST_ALPHA,[Wu]:s.CONSTANT_COLOR,[Xu]:s.ONE_MINUS_CONSTANT_COLOR,[Yu]:s.CONSTANT_ALPHA,[ju]:s.ONE_MINUS_CONSTANT_ALPHA};function Ee(O,we,ce,Z,ge,Pe,Ue,Ve,Je,Ye){if(O===Xn){f===!0&&(Re(s.BLEND),f=!1);return}if(f===!1&&(pe(s.BLEND),f=!0),O!==Uu){if(O!==x||Ye!==q){if((v!==si||L!==si)&&(s.blendEquation(s.FUNC_ADD),v=si,L=si),Ye)switch(O){case Gi:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ao:s.blendFunc(s.ONE,s.ONE);break;case wo:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Co:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case Gi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ao:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case wo:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Co:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}S=null,T=null,E=null,D=null,M.set(0,0,0),A=0,x=O,q=Ye}return}ge=ge||we,Pe=Pe||ce,Ue=Ue||Z,(we!==v||ge!==L)&&(s.blendEquationSeparate(Se[we],Se[ge]),v=we,L=ge),(ce!==S||Z!==T||Pe!==E||Ue!==D)&&(s.blendFuncSeparate(Me[ce],Me[Z],Me[Pe],Me[Ue]),S=ce,T=Z,E=Pe,D=Ue),(Ve.equals(M)===!1||Je!==A)&&(s.blendColor(Ve.r,Ve.g,Ve.b,Je),M.copy(Ve),A=Je),x=O,q=!1}function Ne(O,we){O.side===cn?Re(s.CULL_FACE):pe(s.CULL_FACE);let ce=O.side===wt;we&&(ce=!ce),ue(ce),O.blending===Gi&&O.transparent===!1?Ee(Xn):Ee(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),l.setFunc(O.depthFunc),l.setTest(O.depthTest),l.setMask(O.depthWrite),a.setMask(O.colorWrite);const Z=O.stencilWrite;c.setTest(Z),Z&&(c.setMask(O.stencilWriteMask),c.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),c.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),ae(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?pe(s.SAMPLE_ALPHA_TO_COVERAGE):Re(s.SAMPLE_ALPHA_TO_COVERAGE)}function ue(O){U!==O&&(O?s.frontFace(s.CW):s.frontFace(s.CCW),U=O)}function ye(O){O!==Ru?(pe(s.CULL_FACE),O!==z&&(O===To?s.cullFace(s.BACK):O===Lu?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Re(s.CULL_FACE),z=O}function be(O){O!==C&&(te&&s.lineWidth(O),C=O)}function ae(O,we,ce){O?(pe(s.POLYGON_OFFSET_FILL),(B!==we||G!==ce)&&(s.polygonOffset(we,ce),B=we,G=ce)):Re(s.POLYGON_OFFSET_FILL)}function Ie(O){O?pe(s.SCISSOR_TEST):Re(s.SCISSOR_TEST)}function w(O){O===void 0&&(O=s.TEXTURE0+j-1),b!==O&&(s.activeTexture(O),b=O)}function y(O,we,ce){ce===void 0&&(b===null?ce=s.TEXTURE0+j-1:ce=b);let Z=P[ce];Z===void 0&&(Z={type:void 0,texture:void 0},P[ce]=Z),(Z.type!==O||Z.texture!==we)&&(b!==ce&&(s.activeTexture(ce),b=ce),s.bindTexture(O,we||ee[O]),Z.type=O,Z.texture=we)}function k(){const O=P[b];O!==void 0&&O.type!==void 0&&(s.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function fe(){try{s.compressedTexImage2D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function $(){try{s.compressedTexImage3D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function re(){try{s.texSubImage2D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function _e(){try{s.texSubImage3D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function de(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ve(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function I(){try{s.texStorage2D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function le(){try{s.texStorage3D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function J(){try{s.texImage2D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function me(){try{s.texImage3D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ae(O){W.equals(O)===!1&&(s.scissor(O.x,O.y,O.z,O.w),W.copy(O))}function De(O){ne.equals(O)===!1&&(s.viewport(O.x,O.y,O.z,O.w),ne.copy(O))}function Fe(O,we){let ce=h.get(we);ce===void 0&&(ce=new WeakMap,h.set(we,ce));let Z=ce.get(O);Z===void 0&&(Z=s.getUniformBlockIndex(we,O.name),ce.set(O,Z))}function Te(O,we){const Z=h.get(we).get(O);u.get(we)!==Z&&(s.uniformBlockBinding(we,Z,O.__bindingPointIndex),u.set(we,Z))}function Ce(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),i===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),d={},b=null,P={},p={},g=new WeakMap,_=[],m=null,f=!1,x=null,v=null,S=null,T=null,L=null,E=null,D=null,M=new qe(0,0,0),A=0,q=!1,U=null,z=null,C=null,B=null,G=null,W.set(0,0,s.canvas.width,s.canvas.height),ne.set(0,0,s.canvas.width,s.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:pe,disable:Re,bindFramebuffer:he,drawBuffers:F,useProgram:ke,setBlending:Ee,setMaterial:Ne,setFlipSided:ue,setCullFace:ye,setLineWidth:be,setPolygonOffset:ae,setScissorTest:Ie,activeTexture:w,bindTexture:y,unbindTexture:k,compressedTexImage2D:fe,compressedTexImage3D:$,texImage2D:J,texImage3D:me,updateUBOMapping:Fe,uniformBlockBinding:Te,texStorage2D:I,texStorage3D:le,texSubImage2D:re,texSubImage3D:_e,compressedTexSubImage2D:de,compressedTexSubImage3D:ve,scissor:Ae,viewport:De,reset:Ce}}function Fg(s,e,t,i,n,r,o){const a=n.isWebGL2,l=n.maxTextures,c=n.maxCubemapSize,u=n.maxTextureSize,h=n.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let _;const m=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(w,y){return f?new OffscreenCanvas(w,y):Ms("canvas")}function v(w,y,k,fe){let $=1;if((w.width>fe||w.height>fe)&&($=fe/Math.max(w.width,w.height)),$<1||y===!0)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap){const re=y?ys:Math.floor,_e=re($*w.width),de=re($*w.height);_===void 0&&(_=x(_e,de));const ve=k?x(_e,de):_;return ve.width=_e,ve.height=de,ve.getContext("2d").drawImage(w,0,0,_e,de),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+w.width+"x"+w.height+") to ("+_e+"x"+de+")."),ve}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+w.width+"x"+w.height+")."),w;return w}function S(w){return ka(w.width)&&ka(w.height)}function T(w){return a?!1:w.wrapS!==un||w.wrapT!==un||w.minFilter!==Lt&&w.minFilter!==Ot}function L(w,y){return w.generateMipmaps&&y&&w.minFilter!==Lt&&w.minFilter!==Ot}function E(w){s.generateMipmap(w)}function D(w,y,k,fe,$=!1){if(a===!1)return y;if(w!==null){if(s[w]!==void 0)return s[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let re=y;if(y===s.RED&&(k===s.FLOAT&&(re=s.R32F),k===s.HALF_FLOAT&&(re=s.R16F),k===s.UNSIGNED_BYTE&&(re=s.R8)),y===s.RED_INTEGER&&(k===s.UNSIGNED_BYTE&&(re=s.R8UI),k===s.UNSIGNED_SHORT&&(re=s.R16UI),k===s.UNSIGNED_INT&&(re=s.R32UI),k===s.BYTE&&(re=s.R8I),k===s.SHORT&&(re=s.R16I),k===s.INT&&(re=s.R32I)),y===s.RG&&(k===s.FLOAT&&(re=s.RG32F),k===s.HALF_FLOAT&&(re=s.RG16F),k===s.UNSIGNED_BYTE&&(re=s.RG8)),y===s.RGBA){const _e=$?_s:et.getTransfer(fe);k===s.FLOAT&&(re=s.RGBA32F),k===s.HALF_FLOAT&&(re=s.RGBA16F),k===s.UNSIGNED_BYTE&&(re=_e===it?s.SRGB8_ALPHA8:s.RGBA8),k===s.UNSIGNED_SHORT_4_4_4_4&&(re=s.RGBA4),k===s.UNSIGNED_SHORT_5_5_5_1&&(re=s.RGB5_A1)}return(re===s.R16F||re===s.R32F||re===s.RG16F||re===s.RG32F||re===s.RGBA16F||re===s.RGBA32F)&&e.get("EXT_color_buffer_float"),re}function M(w,y,k){return L(w,k)===!0||w.isFramebufferTexture&&w.minFilter!==Lt&&w.minFilter!==Ot?Math.log2(Math.max(y.width,y.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?y.mipmaps.length:1}function A(w){return w===Lt||w===Po||w===Ws?s.NEAREST:s.LINEAR}function q(w){const y=w.target;y.removeEventListener("dispose",q),z(y),y.isVideoTexture&&g.delete(y)}function U(w){const y=w.target;y.removeEventListener("dispose",U),B(y)}function z(w){const y=i.get(w);if(y.__webglInit===void 0)return;const k=w.source,fe=m.get(k);if(fe){const $=fe[y.__cacheKey];$.usedTimes--,$.usedTimes===0&&C(w),Object.keys(fe).length===0&&m.delete(k)}i.remove(w)}function C(w){const y=i.get(w);s.deleteTexture(y.__webglTexture);const k=w.source,fe=m.get(k);delete fe[y.__cacheKey],o.memory.textures--}function B(w){const y=w.texture,k=i.get(w),fe=i.get(y);if(fe.__webglTexture!==void 0&&(s.deleteTexture(fe.__webglTexture),o.memory.textures--),w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(k.__webglFramebuffer[$]))for(let re=0;re<k.__webglFramebuffer[$].length;re++)s.deleteFramebuffer(k.__webglFramebuffer[$][re]);else s.deleteFramebuffer(k.__webglFramebuffer[$]);k.__webglDepthbuffer&&s.deleteRenderbuffer(k.__webglDepthbuffer[$])}else{if(Array.isArray(k.__webglFramebuffer))for(let $=0;$<k.__webglFramebuffer.length;$++)s.deleteFramebuffer(k.__webglFramebuffer[$]);else s.deleteFramebuffer(k.__webglFramebuffer);if(k.__webglDepthbuffer&&s.deleteRenderbuffer(k.__webglDepthbuffer),k.__webglMultisampledFramebuffer&&s.deleteFramebuffer(k.__webglMultisampledFramebuffer),k.__webglColorRenderbuffer)for(let $=0;$<k.__webglColorRenderbuffer.length;$++)k.__webglColorRenderbuffer[$]&&s.deleteRenderbuffer(k.__webglColorRenderbuffer[$]);k.__webglDepthRenderbuffer&&s.deleteRenderbuffer(k.__webglDepthRenderbuffer)}if(w.isWebGLMultipleRenderTargets)for(let $=0,re=y.length;$<re;$++){const _e=i.get(y[$]);_e.__webglTexture&&(s.deleteTexture(_e.__webglTexture),o.memory.textures--),i.remove(y[$])}i.remove(y),i.remove(w)}let G=0;function j(){G=0}function te(){const w=G;return w>=l&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+l),G+=1,w}function V(w){const y=[];return y.push(w.wrapS),y.push(w.wrapT),y.push(w.wrapR||0),y.push(w.magFilter),y.push(w.minFilter),y.push(w.anisotropy),y.push(w.internalFormat),y.push(w.format),y.push(w.type),y.push(w.generateMipmaps),y.push(w.premultiplyAlpha),y.push(w.flipY),y.push(w.unpackAlignment),y.push(w.colorSpace),y.join()}function N(w,y){const k=i.get(w);if(w.isVideoTexture&&ae(w),w.isRenderTargetTexture===!1&&w.version>0&&k.__version!==w.version){const fe=w.image;if(fe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(fe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{pe(k,w,y);return}}t.bindTexture(s.TEXTURE_2D,k.__webglTexture,s.TEXTURE0+y)}function b(w,y){const k=i.get(w);if(w.version>0&&k.__version!==w.version){pe(k,w,y);return}t.bindTexture(s.TEXTURE_2D_ARRAY,k.__webglTexture,s.TEXTURE0+y)}function P(w,y){const k=i.get(w);if(w.version>0&&k.__version!==w.version){pe(k,w,y);return}t.bindTexture(s.TEXTURE_3D,k.__webglTexture,s.TEXTURE0+y)}function H(w,y){const k=i.get(w);if(w.version>0&&k.__version!==w.version){Re(k,w,y);return}t.bindTexture(s.TEXTURE_CUBE_MAP,k.__webglTexture,s.TEXTURE0+y)}const X={[Fa]:s.REPEAT,[un]:s.CLAMP_TO_EDGE,[Oa]:s.MIRRORED_REPEAT},W={[Lt]:s.NEAREST,[Po]:s.NEAREST_MIPMAP_NEAREST,[Ws]:s.NEAREST_MIPMAP_LINEAR,[Ot]:s.LINEAR,[lh]:s.LINEAR_MIPMAP_NEAREST,[Sr]:s.LINEAR_MIPMAP_LINEAR},ne={[Sh]:s.NEVER,[wh]:s.ALWAYS,[yh]:s.LESS,[Eh]:s.LEQUAL,[Mh]:s.EQUAL,[Ah]:s.GEQUAL,[bh]:s.GREATER,[Th]:s.NOTEQUAL};function Q(w,y,k){if(k?(s.texParameteri(w,s.TEXTURE_WRAP_S,X[y.wrapS]),s.texParameteri(w,s.TEXTURE_WRAP_T,X[y.wrapT]),(w===s.TEXTURE_3D||w===s.TEXTURE_2D_ARRAY)&&s.texParameteri(w,s.TEXTURE_WRAP_R,X[y.wrapR]),s.texParameteri(w,s.TEXTURE_MAG_FILTER,W[y.magFilter]),s.texParameteri(w,s.TEXTURE_MIN_FILTER,W[y.minFilter])):(s.texParameteri(w,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(w,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(w===s.TEXTURE_3D||w===s.TEXTURE_2D_ARRAY)&&s.texParameteri(w,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(y.wrapS!==un||y.wrapT!==un)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(w,s.TEXTURE_MAG_FILTER,A(y.magFilter)),s.texParameteri(w,s.TEXTURE_MIN_FILTER,A(y.minFilter)),y.minFilter!==Lt&&y.minFilter!==Ot&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),y.compareFunction&&(s.texParameteri(w,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(w,s.TEXTURE_COMPARE_FUNC,ne[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const fe=e.get("EXT_texture_filter_anisotropic");if(y.magFilter===Lt||y.minFilter!==Ws&&y.minFilter!==Sr||y.type===Vn&&e.has("OES_texture_float_linear")===!1||a===!1&&y.type===yr&&e.has("OES_texture_half_float_linear")===!1)return;(y.anisotropy>1||i.get(y).__currentAnisotropy)&&(s.texParameterf(w,fe.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,n.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy)}}function ee(w,y){let k=!1;w.__webglInit===void 0&&(w.__webglInit=!0,y.addEventListener("dispose",q));const fe=y.source;let $=m.get(fe);$===void 0&&($={},m.set(fe,$));const re=V(y);if(re!==w.__cacheKey){$[re]===void 0&&($[re]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,k=!0),$[re].usedTimes++;const _e=$[w.__cacheKey];_e!==void 0&&($[w.__cacheKey].usedTimes--,_e.usedTimes===0&&C(y)),w.__cacheKey=re,w.__webglTexture=$[re].texture}return k}function pe(w,y,k){let fe=s.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(fe=s.TEXTURE_2D_ARRAY),y.isData3DTexture&&(fe=s.TEXTURE_3D);const $=ee(w,y),re=y.source;t.bindTexture(fe,w.__webglTexture,s.TEXTURE0+k);const _e=i.get(re);if(re.version!==_e.__version||$===!0){t.activeTexture(s.TEXTURE0+k);const de=et.getPrimaries(et.workingColorSpace),ve=y.colorSpace===qt?null:et.getPrimaries(y.colorSpace),I=y.colorSpace===qt||de===ve?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,I);const le=T(y)&&S(y.image)===!1;let J=v(y.image,le,!1,u);J=Ie(y,J);const me=S(J)||a,Ae=r.convert(y.format,y.colorSpace);let De=r.convert(y.type),Fe=D(y.internalFormat,Ae,De,y.colorSpace,y.isVideoTexture);Q(fe,y,me);let Te;const Ce=y.mipmaps,O=a&&y.isVideoTexture!==!0,we=_e.__version===void 0||$===!0,ce=M(y,J,me);if(y.isDepthTexture)Fe=s.DEPTH_COMPONENT,a?y.type===Vn?Fe=s.DEPTH_COMPONENT32F:y.type===Hn?Fe=s.DEPTH_COMPONENT24:y.type===oi?Fe=s.DEPTH24_STENCIL8:Fe=s.DEPTH_COMPONENT16:y.type===Vn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),y.format===li&&Fe===s.DEPTH_COMPONENT&&y.type!==Qa&&y.type!==Hn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),y.type=Hn,De=r.convert(y.type)),y.format===ji&&Fe===s.DEPTH_COMPONENT&&(Fe=s.DEPTH_STENCIL,y.type!==oi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),y.type=oi,De=r.convert(y.type))),we&&(O?t.texStorage2D(s.TEXTURE_2D,1,Fe,J.width,J.height):t.texImage2D(s.TEXTURE_2D,0,Fe,J.width,J.height,0,Ae,De,null));else if(y.isDataTexture)if(Ce.length>0&&me){O&&we&&t.texStorage2D(s.TEXTURE_2D,ce,Fe,Ce[0].width,Ce[0].height);for(let Z=0,ge=Ce.length;Z<ge;Z++)Te=Ce[Z],O?t.texSubImage2D(s.TEXTURE_2D,Z,0,0,Te.width,Te.height,Ae,De,Te.data):t.texImage2D(s.TEXTURE_2D,Z,Fe,Te.width,Te.height,0,Ae,De,Te.data);y.generateMipmaps=!1}else O?(we&&t.texStorage2D(s.TEXTURE_2D,ce,Fe,J.width,J.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,J.width,J.height,Ae,De,J.data)):t.texImage2D(s.TEXTURE_2D,0,Fe,J.width,J.height,0,Ae,De,J.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){O&&we&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ce,Fe,Ce[0].width,Ce[0].height,J.depth);for(let Z=0,ge=Ce.length;Z<ge;Z++)Te=Ce[Z],y.format!==hn?Ae!==null?O?t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Z,0,0,0,Te.width,Te.height,J.depth,Ae,Te.data,0,0):t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Z,Fe,Te.width,Te.height,J.depth,0,Te.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):O?t.texSubImage3D(s.TEXTURE_2D_ARRAY,Z,0,0,0,Te.width,Te.height,J.depth,Ae,De,Te.data):t.texImage3D(s.TEXTURE_2D_ARRAY,Z,Fe,Te.width,Te.height,J.depth,0,Ae,De,Te.data)}else{O&&we&&t.texStorage2D(s.TEXTURE_2D,ce,Fe,Ce[0].width,Ce[0].height);for(let Z=0,ge=Ce.length;Z<ge;Z++)Te=Ce[Z],y.format!==hn?Ae!==null?O?t.compressedTexSubImage2D(s.TEXTURE_2D,Z,0,0,Te.width,Te.height,Ae,Te.data):t.compressedTexImage2D(s.TEXTURE_2D,Z,Fe,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):O?t.texSubImage2D(s.TEXTURE_2D,Z,0,0,Te.width,Te.height,Ae,De,Te.data):t.texImage2D(s.TEXTURE_2D,Z,Fe,Te.width,Te.height,0,Ae,De,Te.data)}else if(y.isDataArrayTexture)O?(we&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ce,Fe,J.width,J.height,J.depth),t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,Ae,De,J.data)):t.texImage3D(s.TEXTURE_2D_ARRAY,0,Fe,J.width,J.height,J.depth,0,Ae,De,J.data);else if(y.isData3DTexture)O?(we&&t.texStorage3D(s.TEXTURE_3D,ce,Fe,J.width,J.height,J.depth),t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,Ae,De,J.data)):t.texImage3D(s.TEXTURE_3D,0,Fe,J.width,J.height,J.depth,0,Ae,De,J.data);else if(y.isFramebufferTexture){if(we)if(O)t.texStorage2D(s.TEXTURE_2D,ce,Fe,J.width,J.height);else{let Z=J.width,ge=J.height;for(let Pe=0;Pe<ce;Pe++)t.texImage2D(s.TEXTURE_2D,Pe,Fe,Z,ge,0,Ae,De,null),Z>>=1,ge>>=1}}else if(Ce.length>0&&me){O&&we&&t.texStorage2D(s.TEXTURE_2D,ce,Fe,Ce[0].width,Ce[0].height);for(let Z=0,ge=Ce.length;Z<ge;Z++)Te=Ce[Z],O?t.texSubImage2D(s.TEXTURE_2D,Z,0,0,Ae,De,Te):t.texImage2D(s.TEXTURE_2D,Z,Fe,Ae,De,Te);y.generateMipmaps=!1}else O?(we&&t.texStorage2D(s.TEXTURE_2D,ce,Fe,J.width,J.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,Ae,De,J)):t.texImage2D(s.TEXTURE_2D,0,Fe,Ae,De,J);L(y,me)&&E(fe),_e.__version=re.version,y.onUpdate&&y.onUpdate(y)}w.__version=y.version}function Re(w,y,k){if(y.image.length!==6)return;const fe=ee(w,y),$=y.source;t.bindTexture(s.TEXTURE_CUBE_MAP,w.__webglTexture,s.TEXTURE0+k);const re=i.get($);if($.version!==re.__version||fe===!0){t.activeTexture(s.TEXTURE0+k);const _e=et.getPrimaries(et.workingColorSpace),de=y.colorSpace===qt?null:et.getPrimaries(y.colorSpace),ve=y.colorSpace===qt||_e===de?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);const I=y.isCompressedTexture||y.image[0].isCompressedTexture,le=y.image[0]&&y.image[0].isDataTexture,J=[];for(let Z=0;Z<6;Z++)!I&&!le?J[Z]=v(y.image[Z],!1,!0,c):J[Z]=le?y.image[Z].image:y.image[Z],J[Z]=Ie(y,J[Z]);const me=J[0],Ae=S(me)||a,De=r.convert(y.format,y.colorSpace),Fe=r.convert(y.type),Te=D(y.internalFormat,De,Fe,y.colorSpace),Ce=a&&y.isVideoTexture!==!0,O=re.__version===void 0||fe===!0;let we=M(y,me,Ae);Q(s.TEXTURE_CUBE_MAP,y,Ae);let ce;if(I){Ce&&O&&t.texStorage2D(s.TEXTURE_CUBE_MAP,we,Te,me.width,me.height);for(let Z=0;Z<6;Z++){ce=J[Z].mipmaps;for(let ge=0;ge<ce.length;ge++){const Pe=ce[ge];y.format!==hn?De!==null?Ce?t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ge,0,0,Pe.width,Pe.height,De,Pe.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ge,Te,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ce?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ge,0,0,Pe.width,Pe.height,De,Fe,Pe.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ge,Te,Pe.width,Pe.height,0,De,Fe,Pe.data)}}}else{ce=y.mipmaps,Ce&&O&&(ce.length>0&&we++,t.texStorage2D(s.TEXTURE_CUBE_MAP,we,Te,J[0].width,J[0].height));for(let Z=0;Z<6;Z++)if(le){Ce?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,J[Z].width,J[Z].height,De,Fe,J[Z].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Te,J[Z].width,J[Z].height,0,De,Fe,J[Z].data);for(let ge=0;ge<ce.length;ge++){const Ue=ce[ge].image[Z].image;Ce?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ge+1,0,0,Ue.width,Ue.height,De,Fe,Ue.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ge+1,Te,Ue.width,Ue.height,0,De,Fe,Ue.data)}}else{Ce?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,De,Fe,J[Z]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Te,De,Fe,J[Z]);for(let ge=0;ge<ce.length;ge++){const Pe=ce[ge];Ce?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ge+1,0,0,De,Fe,Pe.image[Z]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ge+1,Te,De,Fe,Pe.image[Z])}}}L(y,Ae)&&E(s.TEXTURE_CUBE_MAP),re.__version=$.version,y.onUpdate&&y.onUpdate(y)}w.__version=y.version}function he(w,y,k,fe,$,re){const _e=r.convert(k.format,k.colorSpace),de=r.convert(k.type),ve=D(k.internalFormat,_e,de,k.colorSpace);if(!i.get(y).__hasExternalTextures){const le=Math.max(1,y.width>>re),J=Math.max(1,y.height>>re);$===s.TEXTURE_3D||$===s.TEXTURE_2D_ARRAY?t.texImage3D($,re,ve,le,J,y.depth,0,_e,de,null):t.texImage2D($,re,ve,le,J,0,_e,de,null)}t.bindFramebuffer(s.FRAMEBUFFER,w),be(y)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,fe,$,i.get(k).__webglTexture,0,ye(y)):($===s.TEXTURE_2D||$>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,fe,$,i.get(k).__webglTexture,re),t.bindFramebuffer(s.FRAMEBUFFER,null)}function F(w,y,k){if(s.bindRenderbuffer(s.RENDERBUFFER,w),y.depthBuffer&&!y.stencilBuffer){let fe=a===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(k||be(y)){const $=y.depthTexture;$&&$.isDepthTexture&&($.type===Vn?fe=s.DEPTH_COMPONENT32F:$.type===Hn&&(fe=s.DEPTH_COMPONENT24));const re=ye(y);be(y)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,re,fe,y.width,y.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,re,fe,y.width,y.height)}else s.renderbufferStorage(s.RENDERBUFFER,fe,y.width,y.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,w)}else if(y.depthBuffer&&y.stencilBuffer){const fe=ye(y);k&&be(y)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,fe,s.DEPTH24_STENCIL8,y.width,y.height):be(y)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,fe,s.DEPTH24_STENCIL8,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,y.width,y.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,w)}else{const fe=y.isWebGLMultipleRenderTargets===!0?y.texture:[y.texture];for(let $=0;$<fe.length;$++){const re=fe[$],_e=r.convert(re.format,re.colorSpace),de=r.convert(re.type),ve=D(re.internalFormat,_e,de,re.colorSpace),I=ye(y);k&&be(y)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,I,ve,y.width,y.height):be(y)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,I,ve,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,ve,y.width,y.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ke(w,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,w),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),N(y.depthTexture,0);const fe=i.get(y.depthTexture).__webglTexture,$=ye(y);if(y.depthTexture.format===li)be(y)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,fe,0,$):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,fe,0);else if(y.depthTexture.format===ji)be(y)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,fe,0,$):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,fe,0);else throw new Error("Unknown depthTexture format")}function Se(w){const y=i.get(w),k=w.isWebGLCubeRenderTarget===!0;if(w.depthTexture&&!y.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");ke(y.__webglFramebuffer,w)}else if(k){y.__webglDepthbuffer=[];for(let fe=0;fe<6;fe++)t.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer[fe]),y.__webglDepthbuffer[fe]=s.createRenderbuffer(),F(y.__webglDepthbuffer[fe],w,!1)}else t.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer=s.createRenderbuffer(),F(y.__webglDepthbuffer,w,!1);t.bindFramebuffer(s.FRAMEBUFFER,null)}function Me(w,y,k){const fe=i.get(w);y!==void 0&&he(fe.__webglFramebuffer,w,w.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),k!==void 0&&Se(w)}function Ee(w){const y=w.texture,k=i.get(w),fe=i.get(y);w.addEventListener("dispose",U),w.isWebGLMultipleRenderTargets!==!0&&(fe.__webglTexture===void 0&&(fe.__webglTexture=s.createTexture()),fe.__version=y.version,o.memory.textures++);const $=w.isWebGLCubeRenderTarget===!0,re=w.isWebGLMultipleRenderTargets===!0,_e=S(w)||a;if($){k.__webglFramebuffer=[];for(let de=0;de<6;de++)if(a&&y.mipmaps&&y.mipmaps.length>0){k.__webglFramebuffer[de]=[];for(let ve=0;ve<y.mipmaps.length;ve++)k.__webglFramebuffer[de][ve]=s.createFramebuffer()}else k.__webglFramebuffer[de]=s.createFramebuffer()}else{if(a&&y.mipmaps&&y.mipmaps.length>0){k.__webglFramebuffer=[];for(let de=0;de<y.mipmaps.length;de++)k.__webglFramebuffer[de]=s.createFramebuffer()}else k.__webglFramebuffer=s.createFramebuffer();if(re)if(n.drawBuffers){const de=w.texture;for(let ve=0,I=de.length;ve<I;ve++){const le=i.get(de[ve]);le.__webglTexture===void 0&&(le.__webglTexture=s.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&w.samples>0&&be(w)===!1){const de=re?y:[y];k.__webglMultisampledFramebuffer=s.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let ve=0;ve<de.length;ve++){const I=de[ve];k.__webglColorRenderbuffer[ve]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,k.__webglColorRenderbuffer[ve]);const le=r.convert(I.format,I.colorSpace),J=r.convert(I.type),me=D(I.internalFormat,le,J,I.colorSpace,w.isXRRenderTarget===!0),Ae=ye(w);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ae,me,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ve,s.RENDERBUFFER,k.__webglColorRenderbuffer[ve])}s.bindRenderbuffer(s.RENDERBUFFER,null),w.depthBuffer&&(k.__webglDepthRenderbuffer=s.createRenderbuffer(),F(k.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if($){t.bindTexture(s.TEXTURE_CUBE_MAP,fe.__webglTexture),Q(s.TEXTURE_CUBE_MAP,y,_e);for(let de=0;de<6;de++)if(a&&y.mipmaps&&y.mipmaps.length>0)for(let ve=0;ve<y.mipmaps.length;ve++)he(k.__webglFramebuffer[de][ve],w,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+de,ve);else he(k.__webglFramebuffer[de],w,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);L(y,_e)&&E(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(re){const de=w.texture;for(let ve=0,I=de.length;ve<I;ve++){const le=de[ve],J=i.get(le);t.bindTexture(s.TEXTURE_2D,J.__webglTexture),Q(s.TEXTURE_2D,le,_e),he(k.__webglFramebuffer,w,le,s.COLOR_ATTACHMENT0+ve,s.TEXTURE_2D,0),L(le,_e)&&E(s.TEXTURE_2D)}t.unbindTexture()}else{let de=s.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(a?de=w.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(de,fe.__webglTexture),Q(de,y,_e),a&&y.mipmaps&&y.mipmaps.length>0)for(let ve=0;ve<y.mipmaps.length;ve++)he(k.__webglFramebuffer[ve],w,y,s.COLOR_ATTACHMENT0,de,ve);else he(k.__webglFramebuffer,w,y,s.COLOR_ATTACHMENT0,de,0);L(y,_e)&&E(de),t.unbindTexture()}w.depthBuffer&&Se(w)}function Ne(w){const y=S(w)||a,k=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let fe=0,$=k.length;fe<$;fe++){const re=k[fe];if(L(re,y)){const _e=w.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,de=i.get(re).__webglTexture;t.bindTexture(_e,de),E(_e),t.unbindTexture()}}}function ue(w){if(a&&w.samples>0&&be(w)===!1){const y=w.isWebGLMultipleRenderTargets?w.texture:[w.texture],k=w.width,fe=w.height;let $=s.COLOR_BUFFER_BIT;const re=[],_e=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,de=i.get(w),ve=w.isWebGLMultipleRenderTargets===!0;if(ve)for(let I=0;I<y.length;I++)t.bindFramebuffer(s.FRAMEBUFFER,de.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+I,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,de.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+I,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,de.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,de.__webglFramebuffer);for(let I=0;I<y.length;I++){re.push(s.COLOR_ATTACHMENT0+I),w.depthBuffer&&re.push(_e);const le=de.__ignoreDepthValues!==void 0?de.__ignoreDepthValues:!1;if(le===!1&&(w.depthBuffer&&($|=s.DEPTH_BUFFER_BIT),w.stencilBuffer&&($|=s.STENCIL_BUFFER_BIT)),ve&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,de.__webglColorRenderbuffer[I]),le===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[_e]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[_e])),ve){const J=i.get(y[I]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,J,0)}s.blitFramebuffer(0,0,k,fe,0,0,k,fe,$,s.NEAREST),p&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,re)}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ve)for(let I=0;I<y.length;I++){t.bindFramebuffer(s.FRAMEBUFFER,de.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+I,s.RENDERBUFFER,de.__webglColorRenderbuffer[I]);const le=i.get(y[I]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,de.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+I,s.TEXTURE_2D,le,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,de.__webglMultisampledFramebuffer)}}function ye(w){return Math.min(h,w.samples)}function be(w){const y=i.get(w);return a&&w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function ae(w){const y=o.render.frame;g.get(w)!==y&&(g.set(w,y),w.update())}function Ie(w,y){const k=w.colorSpace,fe=w.format,$=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||w.format===Ba||k!==Pn&&k!==qt&&(et.getTransfer(k)===it?a===!1?e.has("EXT_sRGB")===!0&&fe===hn?(w.format=Ba,w.minFilter=Ot,w.generateMipmaps=!1):y=zc.sRGBToLinear(y):(fe!==hn||$!==jn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),y}this.allocateTextureUnit=te,this.resetTextureUnits=j,this.setTexture2D=N,this.setTexture2DArray=b,this.setTexture3D=P,this.setTextureCube=H,this.rebindTextures=Me,this.setupRenderTarget=Ee,this.updateRenderTargetMipmap=Ne,this.updateMultisampleRenderTarget=ue,this.setupDepthRenderbuffer=Se,this.setupFrameBufferTexture=he,this.useMultisampledRTT=be}function Og(s,e,t){const i=t.isWebGL2;function n(r,o=qt){let a;const l=et.getTransfer(o);if(r===jn)return s.UNSIGNED_BYTE;if(r===Lc)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Pc)return s.UNSIGNED_SHORT_5_5_5_1;if(r===ch)return s.BYTE;if(r===uh)return s.SHORT;if(r===Qa)return s.UNSIGNED_SHORT;if(r===Rc)return s.INT;if(r===Hn)return s.UNSIGNED_INT;if(r===Vn)return s.FLOAT;if(r===yr)return i?s.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===hh)return s.ALPHA;if(r===hn)return s.RGBA;if(r===dh)return s.LUMINANCE;if(r===fh)return s.LUMINANCE_ALPHA;if(r===li)return s.DEPTH_COMPONENT;if(r===ji)return s.DEPTH_STENCIL;if(r===Ba)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===ph)return s.RED;if(r===Uc)return s.RED_INTEGER;if(r===mh)return s.RG;if(r===Dc)return s.RG_INTEGER;if(r===Ic)return s.RGBA_INTEGER;if(r===Xs||r===Ys||r===js||r===qs)if(l===it)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Xs)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Ys)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===js)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===qs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Xs)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Ys)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===js)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===qs)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Uo||r===Do||r===Io||r===Fo)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Uo)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Do)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Io)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Fo)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===gh)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Oo||r===No)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Oo)return l===it?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===No)return l===it?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Bo||r===ko||r===zo||r===Go||r===Ho||r===Vo||r===Wo||r===Xo||r===Yo||r===jo||r===qo||r===Ko||r===Zo||r===$o)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===Bo)return l===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===ko)return l===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===zo)return l===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Go)return l===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Ho)return l===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Vo)return l===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Wo)return l===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Xo)return l===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Yo)return l===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===jo)return l===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===qo)return l===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Ko)return l===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Zo)return l===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===$o)return l===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Ks||r===Jo||r===Qo)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===Ks)return l===it?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Jo)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Qo)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===_h||r===el||r===tl||r===nl)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===Ks)return a.COMPRESSED_RED_RGTC1_EXT;if(r===el)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===tl)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===nl)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===oi?i?s.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:n}}class Ng extends jt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ts extends Et{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Bg={type:"move"};class va{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ts,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ts,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ts,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let n=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,i),f=this._getHandJoint(c,_);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(n=t.getPose(e.targetRaySpace,i),n===null&&r!==null&&(n=r),n!==null&&(a.matrix.fromArray(n.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,n.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(n.linearVelocity)):a.hasLinearVelocity=!1,n.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(n.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Bg)))}return a!==null&&(a.visible=n!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new ts;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class kg extends Bt{constructor(e,t,i,n,r,o,a,l,c,u){if(u=u!==void 0?u:li,u!==li&&u!==ji)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===li&&(i=Hn),i===void 0&&u===ji&&(i=oi),super(null,n,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Lt,this.minFilter=l!==void 0?l:Lt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class zg extends mi{constructor(e,t){super();const i=this;let n=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,d=null,p=null,g=null;const _=t.getContextAttributes();let m=null,f=null;const x=[],v=[],S=new jt;S.layers.enable(1),S.viewport=new rt;const T=new jt;T.layers.enable(2),T.viewport=new rt;const L=[S,T],E=new Ng;E.layers.enable(1),E.layers.enable(2);let D=null,M=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(b){let P=x[b];return P===void 0&&(P=new va,x[b]=P),P.getTargetRaySpace()},this.getControllerGrip=function(b){let P=x[b];return P===void 0&&(P=new va,x[b]=P),P.getGripSpace()},this.getHand=function(b){let P=x[b];return P===void 0&&(P=new va,x[b]=P),P.getHandSpace()};function A(b){const P=v.indexOf(b.inputSource);if(P===-1)return;const H=x[P];H!==void 0&&(H.update(b.inputSource,b.frame,c||o),H.dispatchEvent({type:b.type,data:b.inputSource}))}function q(){n.removeEventListener("select",A),n.removeEventListener("selectstart",A),n.removeEventListener("selectend",A),n.removeEventListener("squeeze",A),n.removeEventListener("squeezestart",A),n.removeEventListener("squeezeend",A),n.removeEventListener("end",q),n.removeEventListener("inputsourceschange",U);for(let b=0;b<x.length;b++){const P=v[b];P!==null&&(v[b]=null,x[b].disconnect(P))}D=null,M=null,e.setRenderTarget(m),p=null,d=null,h=null,n=null,f=null,N.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(b){r=b,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(b){a=b,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(b){c=b},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return n},this.setSession=async function(b){if(n=b,n!==null){if(m=e.getRenderTarget(),n.addEventListener("select",A),n.addEventListener("selectstart",A),n.addEventListener("selectend",A),n.addEventListener("squeeze",A),n.addEventListener("squeezestart",A),n.addEventListener("squeezeend",A),n.addEventListener("end",q),n.addEventListener("inputsourceschange",U),_.xrCompatible!==!0&&await t.makeXRCompatible(),n.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const P={antialias:n.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(n,t,P),n.updateRenderState({baseLayer:p}),f=new di(p.framebufferWidth,p.framebufferHeight,{format:hn,type:jn,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let P=null,H=null,X=null;_.depth&&(X=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,P=_.stencil?ji:li,H=_.stencil?oi:Hn);const W={colorFormat:t.RGBA8,depthFormat:X,scaleFactor:r};h=new XRWebGLBinding(n,t),d=h.createProjectionLayer(W),n.updateRenderState({layers:[d]}),f=new di(d.textureWidth,d.textureHeight,{format:hn,type:jn,depthTexture:new kg(d.textureWidth,d.textureHeight,H,void 0,void 0,void 0,void 0,void 0,void 0,P),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const ne=e.properties.get(f);ne.__ignoreDepthValues=d.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await n.requestReferenceSpace(a),N.setContext(n),N.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode};function U(b){for(let P=0;P<b.removed.length;P++){const H=b.removed[P],X=v.indexOf(H);X>=0&&(v[X]=null,x[X].disconnect(H))}for(let P=0;P<b.added.length;P++){const H=b.added[P];let X=v.indexOf(H);if(X===-1){for(let ne=0;ne<x.length;ne++)if(ne>=v.length){v.push(H),X=ne;break}else if(v[ne]===null){v[ne]=H,X=ne;break}if(X===-1)break}const W=x[X];W&&W.connect(H)}}const z=new Y,C=new Y;function B(b,P,H){z.setFromMatrixPosition(P.matrixWorld),C.setFromMatrixPosition(H.matrixWorld);const X=z.distanceTo(C),W=P.projectionMatrix.elements,ne=H.projectionMatrix.elements,Q=W[14]/(W[10]-1),ee=W[14]/(W[10]+1),pe=(W[9]+1)/W[5],Re=(W[9]-1)/W[5],he=(W[8]-1)/W[0],F=(ne[8]+1)/ne[0],ke=Q*he,Se=Q*F,Me=X/(-he+F),Ee=Me*-he;P.matrixWorld.decompose(b.position,b.quaternion,b.scale),b.translateX(Ee),b.translateZ(Me),b.matrixWorld.compose(b.position,b.quaternion,b.scale),b.matrixWorldInverse.copy(b.matrixWorld).invert();const Ne=Q+Me,ue=ee+Me,ye=ke-Ee,be=Se+(X-Ee),ae=pe*ee/ue*Ne,Ie=Re*ee/ue*Ne;b.projectionMatrix.makePerspective(ye,be,ae,Ie,Ne,ue),b.projectionMatrixInverse.copy(b.projectionMatrix).invert()}function G(b,P){P===null?b.matrixWorld.copy(b.matrix):b.matrixWorld.multiplyMatrices(P.matrixWorld,b.matrix),b.matrixWorldInverse.copy(b.matrixWorld).invert()}this.updateCamera=function(b){if(n===null)return;E.near=T.near=S.near=b.near,E.far=T.far=S.far=b.far,(D!==E.near||M!==E.far)&&(n.updateRenderState({depthNear:E.near,depthFar:E.far}),D=E.near,M=E.far);const P=b.parent,H=E.cameras;G(E,P);for(let X=0;X<H.length;X++)G(H[X],P);H.length===2?B(E,S,T):E.projectionMatrix.copy(S.projectionMatrix),j(b,E,P)};function j(b,P,H){H===null?b.matrix.copy(P.matrixWorld):(b.matrix.copy(H.matrixWorld),b.matrix.invert(),b.matrix.multiply(P.matrixWorld)),b.matrix.decompose(b.position,b.quaternion,b.scale),b.updateMatrixWorld(!0),b.projectionMatrix.copy(P.projectionMatrix),b.projectionMatrixInverse.copy(P.projectionMatrixInverse),b.isPerspectiveCamera&&(b.fov=Mr*2*Math.atan(1/b.projectionMatrix.elements[5]),b.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(b){l=b,d!==null&&(d.fixedFoveation=b),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=b)};let te=null;function V(b,P){if(u=P.getViewerPose(c||o),g=P,u!==null){const H=u.views;p!==null&&(e.setRenderTargetFramebuffer(f,p.framebuffer),e.setRenderTarget(f));let X=!1;H.length!==E.cameras.length&&(E.cameras.length=0,X=!0);for(let W=0;W<H.length;W++){const ne=H[W];let Q=null;if(p!==null)Q=p.getViewport(ne);else{const pe=h.getViewSubImage(d,ne);Q=pe.viewport,W===0&&(e.setRenderTargetTextures(f,pe.colorTexture,d.ignoreDepthValues?void 0:pe.depthStencilTexture),e.setRenderTarget(f))}let ee=L[W];ee===void 0&&(ee=new jt,ee.layers.enable(W),ee.viewport=new rt,L[W]=ee),ee.matrix.fromArray(ne.transform.matrix),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.projectionMatrix.fromArray(ne.projectionMatrix),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert(),ee.viewport.set(Q.x,Q.y,Q.width,Q.height),W===0&&(E.matrix.copy(ee.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),X===!0&&E.cameras.push(ee)}}for(let H=0;H<x.length;H++){const X=v[H],W=x[H];X!==null&&W!==void 0&&W.update(X,P,c||o)}te&&te(b,P),P.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:P}),g=null}const N=new Zc;N.setAnimationLoop(V),this.setAnimationLoop=function(b){te=b},this.dispose=function(){}}}function Gg(s,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,jc(s)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function n(m,f,x,v,S){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),h(m,f)):f.isMeshPhongMaterial?(r(m,f),u(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,S)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),_(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,x,v):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===wt&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===wt&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const x=e.get(f).envMap;if(x&&(m.envMap.value=x,m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap){m.lightMap.value=f.lightMap;const v=s._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=f.lightMapIntensity*v,t(f.lightMap,m.lightMapTransform)}f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,x,v){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*x,m.scale.value=v*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function h(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),e.get(f).envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,x){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===wt&&m.clearcoatNormalScale.value.negate())),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function _(m,f){const x=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function Hg(s,e,t,i){let n={},r={},o=[];const a=t.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(x,v){const S=v.program;i.uniformBlockBinding(x,S)}function c(x,v){let S=n[x.id];S===void 0&&(g(x),S=u(x),n[x.id]=S,x.addEventListener("dispose",m));const T=v.program;i.updateUBOMapping(x,T);const L=e.render.frame;r[x.id]!==L&&(d(x),r[x.id]=L)}function u(x){const v=h();x.__bindingPointIndex=v;const S=s.createBuffer(),T=x.__size,L=x.usage;return s.bindBuffer(s.UNIFORM_BUFFER,S),s.bufferData(s.UNIFORM_BUFFER,T,L),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,v,S),S}function h(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){const v=n[x.id],S=x.uniforms,T=x.__cache;s.bindBuffer(s.UNIFORM_BUFFER,v);for(let L=0,E=S.length;L<E;L++){const D=S[L];if(p(D,L,T)===!0){const M=D.__offset,A=Array.isArray(D.value)?D.value:[D.value];let q=0;for(let U=0;U<A.length;U++){const z=A[U],C=_(z);typeof z=="number"?(D.__data[0]=z,s.bufferSubData(s.UNIFORM_BUFFER,M+q,D.__data)):z.isMatrix3?(D.__data[0]=z.elements[0],D.__data[1]=z.elements[1],D.__data[2]=z.elements[2],D.__data[3]=z.elements[0],D.__data[4]=z.elements[3],D.__data[5]=z.elements[4],D.__data[6]=z.elements[5],D.__data[7]=z.elements[0],D.__data[8]=z.elements[6],D.__data[9]=z.elements[7],D.__data[10]=z.elements[8],D.__data[11]=z.elements[0]):(z.toArray(D.__data,q),q+=C.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,M,D.__data)}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function p(x,v,S){const T=x.value;if(S[v]===void 0){if(typeof T=="number")S[v]=T;else{const L=Array.isArray(T)?T:[T],E=[];for(let D=0;D<L.length;D++)E.push(L[D].clone());S[v]=E}return!0}else if(typeof T=="number"){if(S[v]!==T)return S[v]=T,!0}else{const L=Array.isArray(S[v])?S[v]:[S[v]],E=Array.isArray(T)?T:[T];for(let D=0;D<L.length;D++){const M=L[D];if(M.equals(E[D])===!1)return M.copy(E[D]),!0}}return!1}function g(x){const v=x.uniforms;let S=0;const T=16;let L=0;for(let E=0,D=v.length;E<D;E++){const M=v[E],A={boundary:0,storage:0},q=Array.isArray(M.value)?M.value:[M.value];for(let U=0,z=q.length;U<z;U++){const C=q[U],B=_(C);A.boundary+=B.boundary,A.storage+=B.storage}if(M.__data=new Float32Array(A.storage/Float32Array.BYTES_PER_ELEMENT),M.__offset=S,E>0){L=S%T;const U=T-L;L!==0&&U-A.boundary<0&&(S+=T-L,M.__offset=S)}S+=A.storage}return L=S%T,L>0&&(S+=T-L),x.__size=S,x.__cache={},this}function _(x){const v={boundary:0,storage:0};return typeof x=="number"?(v.boundary=4,v.storage=4):x.isVector2?(v.boundary=8,v.storage=8):x.isVector3||x.isColor?(v.boundary=16,v.storage=12):x.isVector4?(v.boundary=16,v.storage=16):x.isMatrix3?(v.boundary=48,v.storage=48):x.isMatrix4?(v.boundary=64,v.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),v}function m(x){const v=x.target;v.removeEventListener("dispose",m);const S=o.indexOf(v.__bindingPointIndex);o.splice(S,1),s.deleteBuffer(n[v.id]),delete n[v.id],delete r[v.id]}function f(){for(const x in n)s.deleteBuffer(n[x]);o=[],n={},r={}}return{bind:l,update:c,dispose:f}}class ru{constructor(e={}){const{canvas:t=Hh(),context:i=null,depth:n=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=o;const p=new Uint32Array(4),g=new Int32Array(4);let _=null,m=null;const f=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=yt,this._useLegacyLights=!1,this.toneMapping=Yn,this.toneMappingExposure=1;const v=this;let S=!1,T=0,L=0,E=null,D=-1,M=null;const A=new rt,q=new rt;let U=null;const z=new qe(0);let C=0,B=t.width,G=t.height,j=1,te=null,V=null;const N=new rt(0,0,B,G),b=new rt(0,0,B,G);let P=!1;const H=new ro;let X=!1,W=!1,ne=null;const Q=new ct,ee=new He,pe=new Y,Re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function he(){return E===null?j:1}let F=i;function ke(R,K){for(let ie=0;ie<R.length;ie++){const se=R[ie],oe=t.getContext(se,K);if(oe!==null)return oe}return null}try{const R={alpha:!0,depth:n,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${$a}`),t.addEventListener("webglcontextlost",Ce,!1),t.addEventListener("webglcontextrestored",O,!1),t.addEventListener("webglcontextcreationerror",we,!1),F===null){const K=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&K.shift(),F=ke(K,R),F===null)throw ke(K)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&F instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),F.getShaderPrecisionFormat===void 0&&(F.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let Se,Me,Ee,Ne,ue,ye,be,ae,Ie,w,y,k,fe,$,re,_e,de,ve,I,le,J,me,Ae,De;function Fe(){Se=new em(F),Me=new qp(F,Se,e),Se.init(Me),me=new Og(F,Se,Me),Ee=new Ig(F,Se,Me),Ne=new im(F),ue=new Mg,ye=new Fg(F,Se,Ee,ue,Me,me,Ne),be=new Zp(v),ae=new Qp(v),Ie=new dd(F,Me),Ae=new Yp(F,Se,Ie,Me),w=new tm(F,Ie,Ne,Ae),y=new om(F,w,Ie,Ne),I=new am(F,Me,ye),_e=new Kp(ue),k=new yg(v,be,ae,Se,Me,Ae,_e),fe=new Gg(v,ue),$=new bg,re=new Lg(Se,Me),ve=new Xp(v,be,ae,Ee,y,d,l),de=new Dg(v,y,Me),De=new Hg(F,Ne,Me,Ee),le=new jp(F,Se,Ne,Me),J=new nm(F,Se,Ne,Me),Ne.programs=k.programs,v.capabilities=Me,v.extensions=Se,v.properties=ue,v.renderLists=$,v.shadowMap=de,v.state=Ee,v.info=Ne}Fe();const Te=new zg(v,F);this.xr=Te,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const R=Se.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Se.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(R){R!==void 0&&(j=R,this.setSize(B,G,!1))},this.getSize=function(R){return R.set(B,G)},this.setSize=function(R,K,ie=!0){if(Te.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=R,G=K,t.width=Math.floor(R*j),t.height=Math.floor(K*j),ie===!0&&(t.style.width=R+"px",t.style.height=K+"px"),this.setViewport(0,0,R,K)},this.getDrawingBufferSize=function(R){return R.set(B*j,G*j).floor()},this.setDrawingBufferSize=function(R,K,ie){B=R,G=K,j=ie,t.width=Math.floor(R*ie),t.height=Math.floor(K*ie),this.setViewport(0,0,R,K)},this.getCurrentViewport=function(R){return R.copy(A)},this.getViewport=function(R){return R.copy(N)},this.setViewport=function(R,K,ie,se){R.isVector4?N.set(R.x,R.y,R.z,R.w):N.set(R,K,ie,se),Ee.viewport(A.copy(N).multiplyScalar(j).floor())},this.getScissor=function(R){return R.copy(b)},this.setScissor=function(R,K,ie,se){R.isVector4?b.set(R.x,R.y,R.z,R.w):b.set(R,K,ie,se),Ee.scissor(q.copy(b).multiplyScalar(j).floor())},this.getScissorTest=function(){return P},this.setScissorTest=function(R){Ee.setScissorTest(P=R)},this.setOpaqueSort=function(R){te=R},this.setTransparentSort=function(R){V=R},this.getClearColor=function(R){return R.copy(ve.getClearColor())},this.setClearColor=function(){ve.setClearColor.apply(ve,arguments)},this.getClearAlpha=function(){return ve.getClearAlpha()},this.setClearAlpha=function(){ve.setClearAlpha.apply(ve,arguments)},this.clear=function(R=!0,K=!0,ie=!0){let se=0;if(R){let oe=!1;if(E!==null){const Oe=E.texture.format;oe=Oe===Ic||Oe===Dc||Oe===Uc}if(oe){const Oe=E.texture.type,Be=Oe===jn||Oe===Hn||Oe===Qa||Oe===oi||Oe===Lc||Oe===Pc,ze=ve.getClearColor(),xe=ve.getClearAlpha(),We=ze.r,Xe=ze.g,Ge=ze.b;Be?(p[0]=We,p[1]=Xe,p[2]=Ge,p[3]=xe,F.clearBufferuiv(F.COLOR,0,p)):(g[0]=We,g[1]=Xe,g[2]=Ge,g[3]=xe,F.clearBufferiv(F.COLOR,0,g))}else se|=F.COLOR_BUFFER_BIT}K&&(se|=F.DEPTH_BUFFER_BIT),ie&&(se|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(se)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ce,!1),t.removeEventListener("webglcontextrestored",O,!1),t.removeEventListener("webglcontextcreationerror",we,!1),$.dispose(),re.dispose(),ue.dispose(),be.dispose(),ae.dispose(),y.dispose(),Ae.dispose(),De.dispose(),k.dispose(),Te.dispose(),Te.removeEventListener("sessionstart",Je),Te.removeEventListener("sessionend",Ye),ne&&(ne.dispose(),ne=null),$e.stop()};function Ce(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function O(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const R=Ne.autoReset,K=de.enabled,ie=de.autoUpdate,se=de.needsUpdate,oe=de.type;Fe(),Ne.autoReset=R,de.enabled=K,de.autoUpdate=ie,de.needsUpdate=se,de.type=oe}function we(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function ce(R){const K=R.target;K.removeEventListener("dispose",ce),Z(K)}function Z(R){ge(R),ue.remove(R)}function ge(R){const K=ue.get(R).programs;K!==void 0&&(K.forEach(function(ie){k.releaseProgram(ie)}),R.isShaderMaterial&&k.releaseShaderCache(R))}this.renderBufferDirect=function(R,K,ie,se,oe,Oe){K===null&&(K=Re);const Be=oe.isMesh&&oe.matrixWorld.determinant()<0,ze=Ar(R,K,ie,se,oe);Ee.setMaterial(se,Be);let xe=ie.index,We=1;if(se.wireframe===!0){if(xe=w.getWireframeAttribute(ie),xe===void 0)return;We=2}const Xe=ie.drawRange,Ge=ie.attributes.position;let nt=Xe.start*We,bt=(Xe.start+Xe.count)*We;Oe!==null&&(nt=Math.max(nt,Oe.start*We),bt=Math.min(bt,(Oe.start+Oe.count)*We)),xe!==null?(nt=Math.max(nt,0),bt=Math.min(bt,xe.count)):Ge!=null&&(nt=Math.max(nt,0),bt=Math.min(bt,Ge.count));const ot=bt-nt;if(ot<0||ot===1/0)return;Ae.setup(oe,se,ze,ie,xe);let Ut,tt=le;if(xe!==null&&(Ut=Ie.get(xe),tt=J,tt.setIndex(Ut)),oe.isMesh)se.wireframe===!0?(Ee.setLineWidth(se.wireframeLinewidth*he()),tt.setMode(F.LINES)):tt.setMode(F.TRIANGLES);else if(oe.isLine){let Ke=se.linewidth;Ke===void 0&&(Ke=1),Ee.setLineWidth(Ke*he()),oe.isLineSegments?tt.setMode(F.LINES):oe.isLineLoop?tt.setMode(F.LINE_LOOP):tt.setMode(F.LINE_STRIP)}else oe.isPoints?tt.setMode(F.POINTS):oe.isSprite&&tt.setMode(F.TRIANGLES);if(oe.isInstancedMesh)tt.renderInstances(nt,ot,oe.count);else if(ie.isInstancedBufferGeometry){const Ke=ie._maxInstanceCount!==void 0?ie._maxInstanceCount:1/0,Dn=Math.min(ie.instanceCount,Ke);tt.renderInstances(nt,ot,Dn)}else tt.render(nt,ot)};function Pe(R,K,ie){R.transparent===!0&&R.side===cn&&R.forceSinglePass===!1?(R.side=wt,R.needsUpdate=!0,Pt(R,K,ie),R.side=Sn,R.needsUpdate=!0,Pt(R,K,ie),R.side=cn):Pt(R,K,ie)}this.compile=function(R,K,ie=null){ie===null&&(ie=R),m=re.get(ie),m.init(),x.push(m),ie.traverseVisible(function(oe){oe.isLight&&oe.layers.test(K.layers)&&(m.pushLight(oe),oe.castShadow&&m.pushShadow(oe))}),R!==ie&&R.traverseVisible(function(oe){oe.isLight&&oe.layers.test(K.layers)&&(m.pushLight(oe),oe.castShadow&&m.pushShadow(oe))}),m.setupLights(v._useLegacyLights);const se=new Set;return R.traverse(function(oe){const Oe=oe.material;if(Oe)if(Array.isArray(Oe))for(let Be=0;Be<Oe.length;Be++){const ze=Oe[Be];Pe(ze,ie,oe),se.add(ze)}else Pe(Oe,ie,oe),se.add(Oe)}),x.pop(),m=null,se},this.compileAsync=function(R,K,ie=null){const se=this.compile(R,K,ie);return new Promise(oe=>{function Oe(){if(se.forEach(function(Be){ue.get(Be).currentProgram.isReady()&&se.delete(Be)}),se.size===0){oe(R);return}setTimeout(Oe,10)}Se.get("KHR_parallel_shader_compile")!==null?Oe():setTimeout(Oe,10)})};let Ue=null;function Ve(R){Ue&&Ue(R)}function Je(){$e.stop()}function Ye(){$e.start()}const $e=new Zc;$e.setAnimationLoop(Ve),typeof self<"u"&&$e.setContext(self),this.setAnimationLoop=function(R){Ue=R,Te.setAnimationLoop(R),R===null?$e.stop():$e.start()},Te.addEventListener("sessionstart",Je),Te.addEventListener("sessionend",Ye),this.render=function(R,K){if(K!==void 0&&K.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),Te.enabled===!0&&Te.isPresenting===!0&&(Te.cameraAutoUpdate===!0&&Te.updateCamera(K),K=Te.getCamera()),R.isScene===!0&&R.onBeforeRender(v,R,K,E),m=re.get(R,x.length),m.init(),x.push(m),Q.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),H.setFromProjectionMatrix(Q),W=this.localClippingEnabled,X=_e.init(this.clippingPlanes,W),_=$.get(R,f.length),_.init(),f.push(_),at(R,K,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(te,V),this.info.render.frame++,X===!0&&_e.beginShadows();const ie=m.state.shadowsArray;if(de.render(ie,R,K),X===!0&&_e.endShadows(),this.info.autoReset===!0&&this.info.reset(),ve.render(_,R),m.setupLights(v._useLegacyLights),K.isArrayCamera){const se=K.cameras;for(let oe=0,Oe=se.length;oe<Oe;oe++){const Be=se[oe];$t(_,R,Be,Be.viewport)}}else $t(_,R,K);E!==null&&(ye.updateMultisampleRenderTarget(E),ye.updateRenderTargetMipmap(E)),R.isScene===!0&&R.onAfterRender(v,R,K),Ae.resetDefaultState(),D=-1,M=null,x.pop(),x.length>0?m=x[x.length-1]:m=null,f.pop(),f.length>0?_=f[f.length-1]:_=null};function at(R,K,ie,se){if(R.visible===!1)return;if(R.layers.test(K.layers)){if(R.isGroup)ie=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(K);else if(R.isLight)m.pushLight(R),R.castShadow&&m.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||H.intersectsSprite(R)){se&&pe.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Q);const Be=y.update(R),ze=R.material;ze.visible&&_.push(R,Be,ze,ie,pe.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||H.intersectsObject(R))){const Be=y.update(R),ze=R.material;if(se&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),pe.copy(R.boundingSphere.center)):(Be.boundingSphere===null&&Be.computeBoundingSphere(),pe.copy(Be.boundingSphere.center)),pe.applyMatrix4(R.matrixWorld).applyMatrix4(Q)),Array.isArray(ze)){const xe=Be.groups;for(let We=0,Xe=xe.length;We<Xe;We++){const Ge=xe[We],nt=ze[Ge.materialIndex];nt&&nt.visible&&_.push(R,Be,nt,ie,pe.z,Ge)}}else ze.visible&&_.push(R,Be,ze,ie,pe.z,null)}}const Oe=R.children;for(let Be=0,ze=Oe.length;Be<ze;Be++)at(Oe[Be],K,ie,se)}function $t(R,K,ie,se){const oe=R.opaque,Oe=R.transmissive,Be=R.transparent;m.setupLightsView(ie),X===!0&&_e.setGlobalState(v.clippingPlanes,ie),Oe.length>0&&Jt(oe,Oe,K,ie),se&&Ee.viewport(A.copy(se)),oe.length>0&&zt(oe,K,ie),Oe.length>0&&zt(Oe,K,ie),Be.length>0&&zt(Be,K,ie),Ee.buffers.depth.setTest(!0),Ee.buffers.depth.setMask(!0),Ee.buffers.color.setMask(!0),Ee.setPolygonOffset(!1)}function Jt(R,K,ie,se){if((ie.isScene===!0?ie.overrideMaterial:null)!==null)return;const Oe=Me.isWebGL2;ne===null&&(ne=new di(1,1,{generateMipmaps:!0,type:Se.has("EXT_color_buffer_half_float")?yr:jn,minFilter:Sr,samples:Oe?4:0})),v.getDrawingBufferSize(ee),Oe?ne.setSize(ee.x,ee.y):ne.setSize(ys(ee.x),ys(ee.y));const Be=v.getRenderTarget();v.setRenderTarget(ne),v.getClearColor(z),C=v.getClearAlpha(),C<1&&v.setClearColor(16777215,.5),v.clear();const ze=v.toneMapping;v.toneMapping=Yn,zt(R,ie,se),ye.updateMultisampleRenderTarget(ne),ye.updateRenderTargetMipmap(ne);let xe=!1;for(let We=0,Xe=K.length;We<Xe;We++){const Ge=K[We],nt=Ge.object,bt=Ge.geometry,ot=Ge.material,Ut=Ge.group;if(ot.side===cn&&nt.layers.test(se.layers)){const tt=ot.side;ot.side=wt,ot.needsUpdate=!0,dn(nt,ie,se,bt,ot,Ut),ot.side=tt,ot.needsUpdate=!0,xe=!0}}xe===!0&&(ye.updateMultisampleRenderTarget(ne),ye.updateRenderTargetMipmap(ne)),v.setRenderTarget(Be),v.setClearColor(z,C),v.toneMapping=ze}function zt(R,K,ie){const se=K.isScene===!0?K.overrideMaterial:null;for(let oe=0,Oe=R.length;oe<Oe;oe++){const Be=R[oe],ze=Be.object,xe=Be.geometry,We=se===null?Be.material:se,Xe=Be.group;ze.layers.test(ie.layers)&&dn(ze,K,ie,xe,We,Xe)}}function dn(R,K,ie,se,oe,Oe){R.onBeforeRender(v,K,ie,se,oe,Oe),R.modelViewMatrix.multiplyMatrices(ie.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),oe.onBeforeRender(v,K,ie,se,R,Oe),oe.transparent===!0&&oe.side===cn&&oe.forceSinglePass===!1?(oe.side=wt,oe.needsUpdate=!0,v.renderBufferDirect(ie,K,se,oe,R,Oe),oe.side=Sn,oe.needsUpdate=!0,v.renderBufferDirect(ie,K,se,oe,R,Oe),oe.side=cn):v.renderBufferDirect(ie,K,se,oe,R,Oe),R.onAfterRender(v,K,ie,se,oe,Oe)}function Pt(R,K,ie){K.isScene!==!0&&(K=Re);const se=ue.get(R),oe=m.state.lights,Oe=m.state.shadowsArray,Be=oe.state.version,ze=k.getParameters(R,oe.state,Oe,K,ie),xe=k.getProgramCacheKey(ze);let We=se.programs;se.environment=R.isMeshStandardMaterial?K.environment:null,se.fog=K.fog,se.envMap=(R.isMeshStandardMaterial?ae:be).get(R.envMap||se.environment),We===void 0&&(R.addEventListener("dispose",ce),We=new Map,se.programs=We);let Xe=We.get(xe);if(Xe!==void 0){if(se.currentProgram===Xe&&se.lightsStateVersion===Be)return fn(R,ze),Xe}else ze.uniforms=k.getUniforms(R),R.onBuild(ie,ze,v),R.onBeforeCompile(ze,v),Xe=k.acquireProgram(ze,xe),We.set(xe,Xe),se.uniforms=ze.uniforms;const Ge=se.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Ge.clippingPlanes=_e.uniform),fn(R,ze),se.needsLights=Us(R),se.lightsStateVersion=Be,se.needsLights&&(Ge.ambientLightColor.value=oe.state.ambient,Ge.lightProbe.value=oe.state.probe,Ge.directionalLights.value=oe.state.directional,Ge.directionalLightShadows.value=oe.state.directionalShadow,Ge.spotLights.value=oe.state.spot,Ge.spotLightShadows.value=oe.state.spotShadow,Ge.rectAreaLights.value=oe.state.rectArea,Ge.ltc_1.value=oe.state.rectAreaLTC1,Ge.ltc_2.value=oe.state.rectAreaLTC2,Ge.pointLights.value=oe.state.point,Ge.pointLightShadows.value=oe.state.pointShadow,Ge.hemisphereLights.value=oe.state.hemi,Ge.directionalShadowMap.value=oe.state.directionalShadowMap,Ge.directionalShadowMatrix.value=oe.state.directionalShadowMatrix,Ge.spotShadowMap.value=oe.state.spotShadowMap,Ge.spotLightMatrix.value=oe.state.spotLightMatrix,Ge.spotLightMap.value=oe.state.spotLightMap,Ge.pointShadowMap.value=oe.state.pointShadowMap,Ge.pointShadowMatrix.value=oe.state.pointShadowMatrix),se.currentProgram=Xe,se.uniformsList=null,Xe}function ft(R){if(R.uniformsList===null){const K=R.currentProgram.getUniforms();R.uniformsList=fs.seqWithValue(K.seq,R.uniforms)}return R.uniformsList}function fn(R,K){const ie=ue.get(R);ie.outputColorSpace=K.outputColorSpace,ie.instancing=K.instancing,ie.instancingColor=K.instancingColor,ie.skinning=K.skinning,ie.morphTargets=K.morphTargets,ie.morphNormals=K.morphNormals,ie.morphColors=K.morphColors,ie.morphTargetsCount=K.morphTargetsCount,ie.numClippingPlanes=K.numClippingPlanes,ie.numIntersection=K.numClipIntersection,ie.vertexAlphas=K.vertexAlphas,ie.vertexTangents=K.vertexTangents,ie.toneMapping=K.toneMapping}function Ar(R,K,ie,se,oe){K.isScene!==!0&&(K=Re),ye.resetTextureUnits();const Oe=K.fog,Be=se.isMeshStandardMaterial?K.environment:null,ze=E===null?v.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:Pn,xe=(se.isMeshStandardMaterial?ae:be).get(se.envMap||Be),We=se.vertexColors===!0&&!!ie.attributes.color&&ie.attributes.color.itemSize===4,Xe=!!ie.attributes.tangent&&(!!se.normalMap||se.anisotropy>0),Ge=!!ie.morphAttributes.position,nt=!!ie.morphAttributes.normal,bt=!!ie.morphAttributes.color;let ot=Yn;se.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(ot=v.toneMapping);const Ut=ie.morphAttributes.position||ie.morphAttributes.normal||ie.morphAttributes.color,tt=Ut!==void 0?Ut.length:0,Ke=ue.get(se),Dn=m.state.lights;if(X===!0&&(W===!0||R!==M)){const mt=R===M&&se.id===D;_e.setState(se,R,mt)}let st=!1;se.version===Ke.__version?(Ke.needsLights&&Ke.lightsStateVersion!==Dn.state.version||Ke.outputColorSpace!==ze||oe.isInstancedMesh&&Ke.instancing===!1||!oe.isInstancedMesh&&Ke.instancing===!0||oe.isSkinnedMesh&&Ke.skinning===!1||!oe.isSkinnedMesh&&Ke.skinning===!0||oe.isInstancedMesh&&Ke.instancingColor===!0&&oe.instanceColor===null||oe.isInstancedMesh&&Ke.instancingColor===!1&&oe.instanceColor!==null||Ke.envMap!==xe||se.fog===!0&&Ke.fog!==Oe||Ke.numClippingPlanes!==void 0&&(Ke.numClippingPlanes!==_e.numPlanes||Ke.numIntersection!==_e.numIntersection)||Ke.vertexAlphas!==We||Ke.vertexTangents!==Xe||Ke.morphTargets!==Ge||Ke.morphNormals!==nt||Ke.morphColors!==bt||Ke.toneMapping!==ot||Me.isWebGL2===!0&&Ke.morphTargetsCount!==tt)&&(st=!0):(st=!0,Ke.__version=se.version);let Qt=Ke.currentProgram;st===!0&&(Qt=Pt(se,K,oe));let er=!1,en=!1,Zn=!1;const lt=Qt.getUniforms(),tn=Ke.uniforms;if(Ee.useProgram(Qt.program)&&(er=!0,en=!0,Zn=!0),se.id!==D&&(D=se.id,en=!0),er||M!==R){lt.setValue(F,"projectionMatrix",R.projectionMatrix),lt.setValue(F,"viewMatrix",R.matrixWorldInverse);const mt=lt.map.cameraPosition;mt!==void 0&&mt.setValue(F,pe.setFromMatrixPosition(R.matrixWorld)),Me.logarithmicDepthBuffer&&lt.setValue(F,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(se.isMeshPhongMaterial||se.isMeshToonMaterial||se.isMeshLambertMaterial||se.isMeshBasicMaterial||se.isMeshStandardMaterial||se.isShaderMaterial)&&lt.setValue(F,"isOrthographic",R.isOrthographicCamera===!0),M!==R&&(M=R,en=!0,Zn=!0)}if(oe.isSkinnedMesh){lt.setOptional(F,oe,"bindMatrix"),lt.setOptional(F,oe,"bindMatrixInverse");const mt=oe.skeleton;mt&&(Me.floatVertexTextures?(mt.boneTexture===null&&mt.computeBoneTexture(),lt.setValue(F,"boneTexture",mt.boneTexture,ye),lt.setValue(F,"boneTextureSize",mt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const $n=ie.morphAttributes;if(($n.position!==void 0||$n.normal!==void 0||$n.color!==void 0&&Me.isWebGL2===!0)&&I.update(oe,ie,Qt),(en||Ke.receiveShadow!==oe.receiveShadow)&&(Ke.receiveShadow=oe.receiveShadow,lt.setValue(F,"receiveShadow",oe.receiveShadow)),se.isMeshGouraudMaterial&&se.envMap!==null&&(tn.envMap.value=xe,tn.flipEnvMap.value=xe.isCubeTexture&&xe.isRenderTargetTexture===!1?-1:1),en&&(lt.setValue(F,"toneMappingExposure",v.toneMappingExposure),Ke.needsLights&&Qi(tn,Zn),Oe&&se.fog===!0&&fe.refreshFogUniforms(tn,Oe),fe.refreshMaterialUniforms(tn,se,j,G,ne),fs.upload(F,ft(Ke),tn,ye)),se.isShaderMaterial&&se.uniformsNeedUpdate===!0&&(fs.upload(F,ft(Ke),tn,ye),se.uniformsNeedUpdate=!1),se.isSpriteMaterial&&lt.setValue(F,"center",oe.center),lt.setValue(F,"modelViewMatrix",oe.modelViewMatrix),lt.setValue(F,"normalMatrix",oe.normalMatrix),lt.setValue(F,"modelMatrix",oe.matrixWorld),se.isShaderMaterial||se.isRawShaderMaterial){const mt=se.uniformsGroups;for(let Dt=0,Ds=mt.length;Dt<Ds;Dt++)if(Me.isWebGL2){const Jn=mt[Dt];De.update(Jn,Qt),De.bind(Jn,Qt)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Qt}function Qi(R,K){R.ambientLightColor.needsUpdate=K,R.lightProbe.needsUpdate=K,R.directionalLights.needsUpdate=K,R.directionalLightShadows.needsUpdate=K,R.pointLights.needsUpdate=K,R.pointLightShadows.needsUpdate=K,R.spotLights.needsUpdate=K,R.spotLightShadows.needsUpdate=K,R.rectAreaLights.needsUpdate=K,R.hemisphereLights.needsUpdate=K}function Us(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(R,K,ie){ue.get(R.texture).__webglTexture=K,ue.get(R.depthTexture).__webglTexture=ie;const se=ue.get(R);se.__hasExternalTextures=!0,se.__hasExternalTextures&&(se.__autoAllocateDepthBuffer=ie===void 0,se.__autoAllocateDepthBuffer||Se.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),se.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(R,K){const ie=ue.get(R);ie.__webglFramebuffer=K,ie.__useDefaultFramebuffer=K===void 0},this.setRenderTarget=function(R,K=0,ie=0){E=R,T=K,L=ie;let se=!0,oe=null,Oe=!1,Be=!1;if(R){const xe=ue.get(R);xe.__useDefaultFramebuffer!==void 0?(Ee.bindFramebuffer(F.FRAMEBUFFER,null),se=!1):xe.__webglFramebuffer===void 0?ye.setupRenderTarget(R):xe.__hasExternalTextures&&ye.rebindTextures(R,ue.get(R.texture).__webglTexture,ue.get(R.depthTexture).__webglTexture);const We=R.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(Be=!0);const Xe=ue.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Xe[K])?oe=Xe[K][ie]:oe=Xe[K],Oe=!0):Me.isWebGL2&&R.samples>0&&ye.useMultisampledRTT(R)===!1?oe=ue.get(R).__webglMultisampledFramebuffer:Array.isArray(Xe)?oe=Xe[ie]:oe=Xe,A.copy(R.viewport),q.copy(R.scissor),U=R.scissorTest}else A.copy(N).multiplyScalar(j).floor(),q.copy(b).multiplyScalar(j).floor(),U=P;if(Ee.bindFramebuffer(F.FRAMEBUFFER,oe)&&Me.drawBuffers&&se&&Ee.drawBuffers(R,oe),Ee.viewport(A),Ee.scissor(q),Ee.setScissorTest(U),Oe){const xe=ue.get(R.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+K,xe.__webglTexture,ie)}else if(Be){const xe=ue.get(R.texture),We=K||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,xe.__webglTexture,ie||0,We)}D=-1},this.readRenderTargetPixels=function(R,K,ie,se,oe,Oe,Be){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ze=ue.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Be!==void 0&&(ze=ze[Be]),ze){Ee.bindFramebuffer(F.FRAMEBUFFER,ze);try{const xe=R.texture,We=xe.format,Xe=xe.type;if(We!==hn&&me.convert(We)!==F.getParameter(F.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ge=Xe===yr&&(Se.has("EXT_color_buffer_half_float")||Me.isWebGL2&&Se.has("EXT_color_buffer_float"));if(Xe!==jn&&me.convert(Xe)!==F.getParameter(F.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Xe===Vn&&(Me.isWebGL2||Se.has("OES_texture_float")||Se.has("WEBGL_color_buffer_float")))&&!Ge){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=R.width-se&&ie>=0&&ie<=R.height-oe&&F.readPixels(K,ie,se,oe,me.convert(We),me.convert(Xe),Oe)}finally{const xe=E!==null?ue.get(E).__webglFramebuffer:null;Ee.bindFramebuffer(F.FRAMEBUFFER,xe)}}},this.copyFramebufferToTexture=function(R,K,ie=0){const se=Math.pow(2,-ie),oe=Math.floor(K.image.width*se),Oe=Math.floor(K.image.height*se);ye.setTexture2D(K,0),F.copyTexSubImage2D(F.TEXTURE_2D,ie,0,0,R.x,R.y,oe,Oe),Ee.unbindTexture()},this.copyTextureToTexture=function(R,K,ie,se=0){const oe=K.image.width,Oe=K.image.height,Be=me.convert(ie.format),ze=me.convert(ie.type);ye.setTexture2D(ie,0),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,ie.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ie.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,ie.unpackAlignment),K.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,se,R.x,R.y,oe,Oe,Be,ze,K.image.data):K.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,se,R.x,R.y,K.mipmaps[0].width,K.mipmaps[0].height,Be,K.mipmaps[0].data):F.texSubImage2D(F.TEXTURE_2D,se,R.x,R.y,Be,ze,K.image),se===0&&ie.generateMipmaps&&F.generateMipmap(F.TEXTURE_2D),Ee.unbindTexture()},this.copyTextureToTexture3D=function(R,K,ie,se,oe=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Oe=R.max.x-R.min.x+1,Be=R.max.y-R.min.y+1,ze=R.max.z-R.min.z+1,xe=me.convert(se.format),We=me.convert(se.type);let Xe;if(se.isData3DTexture)ye.setTexture3D(se,0),Xe=F.TEXTURE_3D;else if(se.isDataArrayTexture)ye.setTexture2DArray(se,0),Xe=F.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,se.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,se.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,se.unpackAlignment);const Ge=F.getParameter(F.UNPACK_ROW_LENGTH),nt=F.getParameter(F.UNPACK_IMAGE_HEIGHT),bt=F.getParameter(F.UNPACK_SKIP_PIXELS),ot=F.getParameter(F.UNPACK_SKIP_ROWS),Ut=F.getParameter(F.UNPACK_SKIP_IMAGES),tt=ie.isCompressedTexture?ie.mipmaps[0]:ie.image;F.pixelStorei(F.UNPACK_ROW_LENGTH,tt.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,tt.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,R.min.x),F.pixelStorei(F.UNPACK_SKIP_ROWS,R.min.y),F.pixelStorei(F.UNPACK_SKIP_IMAGES,R.min.z),ie.isDataTexture||ie.isData3DTexture?F.texSubImage3D(Xe,oe,K.x,K.y,K.z,Oe,Be,ze,xe,We,tt.data):ie.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),F.compressedTexSubImage3D(Xe,oe,K.x,K.y,K.z,Oe,Be,ze,xe,tt.data)):F.texSubImage3D(Xe,oe,K.x,K.y,K.z,Oe,Be,ze,xe,We,tt),F.pixelStorei(F.UNPACK_ROW_LENGTH,Ge),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,nt),F.pixelStorei(F.UNPACK_SKIP_PIXELS,bt),F.pixelStorei(F.UNPACK_SKIP_ROWS,ot),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Ut),oe===0&&se.generateMipmaps&&F.generateMipmap(Xe),Ee.unbindTexture()},this.initTexture=function(R){R.isCubeTexture?ye.setTextureCube(R,0):R.isData3DTexture?ye.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?ye.setTexture2DArray(R,0):ye.setTexture2D(R,0),Ee.unbindTexture()},this.resetState=function(){T=0,L=0,E=null,Ee.reset(),Ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Cn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===eo?"display-p3":"srgb",t.unpackColorSpace=et.workingColorSpace===ws?"display-p3":"srgb"}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===yt?ci:Fc}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===ci?yt:Pn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Vg extends ru{}Vg.prototype.isWebGL1Renderer=!0;class Wg extends Et{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class Xg{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Na,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=Rn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let n=0,r=this.stride;n<r;n++)this.array[e+n]=t.array[i+n];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Rn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Rn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ct=new Y;class Wn{constructor(e,t,i,n=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=n}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix4(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.applyNormalMatrix(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.transformDirection(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}setX(e,t){return this.normalized&&(t=Qe(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Qe(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Qe(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Qe(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=gn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=gn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=gn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=gn(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Qe(t,this.array),i=Qe(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Qe(t,this.array),i=Qe(i,this.array),n=Qe(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=n,this}setXYZW(e,t,i,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Qe(t,this.array),i=Qe(i,this.array),n=Qe(n,this.array),r=Qe(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=n,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const n=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[n+r])}return new Kt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Wn(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const n=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[n+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Yg extends Kt{constructor(e,t,i,n=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}class su extends Ki{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new qe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Wl=new Y,Xl=new Y,Yl=new ct,xa=new no,ns=new gi;class jg extends Et{constructor(e=new Zt,t=new su){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let n=1,r=t.count;n<r;n++)Wl.fromBufferAttribute(t,n-1),Xl.fromBufferAttribute(t,n),i[n]=i[n-1],i[n]+=Wl.distanceTo(Xl);e.setAttribute("lineDistance",new kt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,n=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ns.copy(i.boundingSphere),ns.applyMatrix4(n),ns.radius+=r,e.ray.intersectsSphere(ns)===!1)return;Yl.copy(n).invert(),xa.copy(e.ray).applyMatrix4(Yl);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new Y,u=new Y,h=new Y,d=new Y,p=this.isLineSegments?2:1,g=i.index,m=i.attributes.position;if(g!==null){const f=Math.max(0,o.start),x=Math.min(g.count,o.start+o.count);for(let v=f,S=x-1;v<S;v+=p){const T=g.getX(v),L=g.getX(v+1);if(c.fromBufferAttribute(m,T),u.fromBufferAttribute(m,L),xa.distanceSqToSegment(c,u,d,h)>l)continue;d.applyMatrix4(this.matrixWorld);const D=e.ray.origin.distanceTo(d);D<e.near||D>e.far||t.push({distance:D,point:h.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{const f=Math.max(0,o.start),x=Math.min(m.count,o.start+o.count);for(let v=f,S=x-1;v<S;v+=p){if(c.fromBufferAttribute(m,v),u.fromBufferAttribute(m,v+1),xa.distanceSqToSegment(c,u,d,h)>l)continue;d.applyMatrix4(this.matrixWorld);const L=e.ray.origin.distanceTo(d);L<e.near||L>e.far||t.push({distance:L,point:h.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=n.length;r<o;r++){const a=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}const jl=new Y,ql=new Y;class qg extends jg{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let n=0,r=t.count;n<r;n+=2)jl.fromBufferAttribute(t,n),ql.fromBufferAttribute(t,n+1),i[n]=n===0?0:i[n-1],i[n+1]=i[n]+jl.distanceTo(ql);e.setAttribute("lineDistance",new kt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}const is=new Y,rs=new Y,Sa=new Y,ss=new Yt;class Kg extends Zt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const n=Math.pow(10,4),r=Math.cos(Hi*t),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],u=["a","b","c"],h=new Array(3),d={},p=[];for(let g=0;g<l;g+=3){o?(c[0]=o.getX(g),c[1]=o.getX(g+1),c[2]=o.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);const{a:_,b:m,c:f}=ss;if(_.fromBufferAttribute(a,c[0]),m.fromBufferAttribute(a,c[1]),f.fromBufferAttribute(a,c[2]),ss.getNormal(Sa),h[0]=`${Math.round(_.x*n)},${Math.round(_.y*n)},${Math.round(_.z*n)}`,h[1]=`${Math.round(m.x*n)},${Math.round(m.y*n)},${Math.round(m.z*n)}`,h[2]=`${Math.round(f.x*n)},${Math.round(f.y*n)},${Math.round(f.z*n)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let x=0;x<3;x++){const v=(x+1)%3,S=h[x],T=h[v],L=ss[u[x]],E=ss[u[v]],D=`${S}_${T}`,M=`${T}_${S}`;M in d&&d[M]?(Sa.dot(d[M].normal)<=r&&(p.push(L.x,L.y,L.z),p.push(E.x,E.y,E.z)),d[M]=null):D in d||(d[D]={index0:c[x],index1:c[v],normal:Sa.clone()})}}for(const g in d)if(d[g]){const{index0:_,index1:m}=d[g];is.fromBufferAttribute(a,_),rs.fromBufferAttribute(a,m),p.push(is.x,is.y,is.z),p.push(rs.x,rs.y,rs.z)}this.setAttribute("position",new kt(p,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Zg extends Zt{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],i=new Set,n=new Y,r=new Y;if(e.index!==null){const o=e.attributes.position,a=e.index;let l=e.groups;l.length===0&&(l=[{start:0,count:a.count,materialIndex:0}]);for(let c=0,u=l.length;c<u;++c){const h=l[c],d=h.start,p=h.count;for(let g=d,_=d+p;g<_;g+=3)for(let m=0;m<3;m++){const f=a.getX(g+m),x=a.getX(g+(m+1)%3);n.fromBufferAttribute(o,f),r.fromBufferAttribute(o,x),Kl(n,r,i)===!0&&(t.push(n.x,n.y,n.z),t.push(r.x,r.y,r.z))}}}else{const o=e.attributes.position;for(let a=0,l=o.count/3;a<l;a++)for(let c=0;c<3;c++){const u=3*a+c,h=3*a+(c+1)%3;n.fromBufferAttribute(o,u),r.fromBufferAttribute(o,h),Kl(n,r,i)===!0&&(t.push(n.x,n.y,n.z),t.push(r.x,r.y,r.z))}}this.setAttribute("position",new kt(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function Kl(s,e,t){const i=`${s.x},${s.y},${s.z}-${e.x},${e.y},${e.z}`,n=`${e.x},${e.y},${e.z}-${s.x},${s.y},${s.z}`;return t.has(i)===!0||t.has(n)===!0?!1:(t.add(i),t.add(n),!0)}class $g extends Ki{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new qe(16777215),this.specular=new qe(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Nc,this.normalScale=new He(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ja,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Jg extends Et{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new qe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const ya=new ct,Zl=new Y,$l=new Y;class Qg{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new He(512,512),this.map=null,this.mapPass=null,this.matrix=new ct,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ro,this._frameExtents=new He(1,1),this._viewportCount=1,this._viewports=[new rt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Zl.setFromMatrixPosition(e.matrixWorld),t.position.copy(Zl),$l.setFromMatrixPosition(e.target.matrixWorld),t.lookAt($l),t.updateMatrixWorld(),ya.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ya),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ya)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class e_ extends Qg{constructor(){super(new $c(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class t_ extends Jg{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Et.DEFAULT_UP),this.updateMatrix(),this.target=new Et,this.shadow=new e_}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class au extends Zt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class Ga extends Xg{constructor(e,t,i=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}class Jl{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Mt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Ql=new Y,as=new Y;class n_{constructor(e=new Y,t=new Y){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){Ql.subVectors(e,this.start),as.subVectors(this.end,this.start);const i=as.dot(as);let r=as.dot(Ql)/i;return t&&(r=Mt(r,0,1)),r}closestPointToPoint(e,t,i){const n=this.closestPointToPointParameter(e,t);return this.delta(i).multiplyScalar(n).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:$a}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=$a);const ec={type:"change"},Ma={type:"start"},tc={type:"end"},os=new no,nc=new Gn,i_=Math.cos(70*Bc.DEG2RAD);class r_ extends mi{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new Y,this.cursor=new Y,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Si.ROTATE,MIDDLE:Si.DOLLY,RIGHT:Si.PAN},this.touches={ONE:yi.ROTATE,TWO:yi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(I){I.addEventListener("keydown",y),this._domElementKeyEvents=I},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",y),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(ec),i.update(),r=n.NONE},this.update=function(){const I=new Y,le=new fi().setFromUnitVectors(e.up,new Y(0,1,0)),J=le.clone().invert(),me=new Y,Ae=new fi,De=new Y,Fe=2*Math.PI;return function(Ce=null){const O=i.object.position;I.copy(O).sub(i.target),I.applyQuaternion(le),a.setFromVector3(I),i.autoRotate&&r===n.NONE&&q(M(Ce)),i.enableDamping?(a.theta+=l.theta*i.dampingFactor,a.phi+=l.phi*i.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let we=i.minAzimuthAngle,ce=i.maxAzimuthAngle;isFinite(we)&&isFinite(ce)&&(we<-Math.PI?we+=Fe:we>Math.PI&&(we-=Fe),ce<-Math.PI?ce+=Fe:ce>Math.PI&&(ce-=Fe),we<=ce?a.theta=Math.max(we,Math.min(ce,a.theta)):a.theta=a.theta>(we+ce)/2?Math.max(we,a.theta):Math.min(ce,a.theta)),a.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,a.phi)),a.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(u,i.dampingFactor):i.target.add(u),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor),i.zoomToCursor&&L||i.object.isOrthographicCamera?a.radius=V(a.radius):a.radius=V(a.radius*c),I.setFromSpherical(a),I.applyQuaternion(J),O.copy(i.target).add(I),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,u.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),u.set(0,0,0));let Z=!1;if(i.zoomToCursor&&L){let ge=null;if(i.object.isPerspectiveCamera){const Pe=I.length();ge=V(Pe*c);const Ue=Pe-ge;i.object.position.addScaledVector(S,Ue),i.object.updateMatrixWorld()}else if(i.object.isOrthographicCamera){const Pe=new Y(T.x,T.y,0);Pe.unproject(i.object),i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),Z=!0;const Ue=new Y(T.x,T.y,0);Ue.unproject(i.object),i.object.position.sub(Ue).add(Pe),i.object.updateMatrixWorld(),ge=I.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;ge!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(ge).add(i.object.position):(os.origin.copy(i.object.position),os.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(os.direction))<i_?e.lookAt(i.target):(nc.setFromNormalAndCoplanarPoint(i.object.up,i.target),os.intersectPlane(nc,i.target))))}else i.object.isOrthographicCamera&&(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),Z=!0);return c=1,L=!1,Z||me.distanceToSquared(i.object.position)>o||8*(1-Ae.dot(i.object.quaternion))>o||De.distanceToSquared(i.target)>0?(i.dispatchEvent(ec),me.copy(i.object.position),Ae.copy(i.object.quaternion),De.copy(i.target),Z=!1,!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",$),i.domElement.removeEventListener("pointerdown",ue),i.domElement.removeEventListener("pointercancel",be),i.domElement.removeEventListener("wheel",w),i.domElement.removeEventListener("pointermove",ye),i.domElement.removeEventListener("pointerup",be),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",y),i._domElementKeyEvents=null)};const i=this,n={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=n.NONE;const o=1e-6,a=new Jl,l=new Jl;let c=1;const u=new Y,h=new He,d=new He,p=new He,g=new He,_=new He,m=new He,f=new He,x=new He,v=new He,S=new Y,T=new He;let L=!1;const E=[],D={};function M(I){return I!==null?2*Math.PI/60*i.autoRotateSpeed*I:2*Math.PI/60/60*i.autoRotateSpeed}function A(){return Math.pow(.95,i.zoomSpeed)}function q(I){l.theta-=I}function U(I){l.phi-=I}const z=function(){const I=new Y;return function(J,me){I.setFromMatrixColumn(me,0),I.multiplyScalar(-J),u.add(I)}}(),C=function(){const I=new Y;return function(J,me){i.screenSpacePanning===!0?I.setFromMatrixColumn(me,1):(I.setFromMatrixColumn(me,0),I.crossVectors(i.object.up,I)),I.multiplyScalar(J),u.add(I)}}(),B=function(){const I=new Y;return function(J,me){const Ae=i.domElement;if(i.object.isPerspectiveCamera){const De=i.object.position;I.copy(De).sub(i.target);let Fe=I.length();Fe*=Math.tan(i.object.fov/2*Math.PI/180),z(2*J*Fe/Ae.clientHeight,i.object.matrix),C(2*me*Fe/Ae.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(z(J*(i.object.right-i.object.left)/i.object.zoom/Ae.clientWidth,i.object.matrix),C(me*(i.object.top-i.object.bottom)/i.object.zoom/Ae.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function G(I){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c/=I:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function j(I){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c*=I:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function te(I){if(!i.zoomToCursor)return;L=!0;const le=i.domElement.getBoundingClientRect(),J=I.clientX-le.left,me=I.clientY-le.top,Ae=le.width,De=le.height;T.x=J/Ae*2-1,T.y=-(me/De)*2+1,S.set(T.x,T.y,1).unproject(i.object).sub(i.object.position).normalize()}function V(I){return Math.max(i.minDistance,Math.min(i.maxDistance,I))}function N(I){h.set(I.clientX,I.clientY)}function b(I){te(I),f.set(I.clientX,I.clientY)}function P(I){g.set(I.clientX,I.clientY)}function H(I){d.set(I.clientX,I.clientY),p.subVectors(d,h).multiplyScalar(i.rotateSpeed);const le=i.domElement;q(2*Math.PI*p.x/le.clientHeight),U(2*Math.PI*p.y/le.clientHeight),h.copy(d),i.update()}function X(I){x.set(I.clientX,I.clientY),v.subVectors(x,f),v.y>0?G(A()):v.y<0&&j(A()),f.copy(x),i.update()}function W(I){_.set(I.clientX,I.clientY),m.subVectors(_,g).multiplyScalar(i.panSpeed),B(m.x,m.y),g.copy(_),i.update()}function ne(I){te(I),I.deltaY<0?j(A()):I.deltaY>0&&G(A()),i.update()}function Q(I){let le=!1;switch(I.code){case i.keys.UP:I.ctrlKey||I.metaKey||I.shiftKey?U(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):B(0,i.keyPanSpeed),le=!0;break;case i.keys.BOTTOM:I.ctrlKey||I.metaKey||I.shiftKey?U(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):B(0,-i.keyPanSpeed),le=!0;break;case i.keys.LEFT:I.ctrlKey||I.metaKey||I.shiftKey?q(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):B(i.keyPanSpeed,0),le=!0;break;case i.keys.RIGHT:I.ctrlKey||I.metaKey||I.shiftKey?q(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):B(-i.keyPanSpeed,0),le=!0;break}le&&(I.preventDefault(),i.update())}function ee(){if(E.length===1)h.set(E[0].pageX,E[0].pageY);else{const I=.5*(E[0].pageX+E[1].pageX),le=.5*(E[0].pageY+E[1].pageY);h.set(I,le)}}function pe(){if(E.length===1)g.set(E[0].pageX,E[0].pageY);else{const I=.5*(E[0].pageX+E[1].pageX),le=.5*(E[0].pageY+E[1].pageY);g.set(I,le)}}function Re(){const I=E[0].pageX-E[1].pageX,le=E[0].pageY-E[1].pageY,J=Math.sqrt(I*I+le*le);f.set(0,J)}function he(){i.enableZoom&&Re(),i.enablePan&&pe()}function F(){i.enableZoom&&Re(),i.enableRotate&&ee()}function ke(I){if(E.length==1)d.set(I.pageX,I.pageY);else{const J=ve(I),me=.5*(I.pageX+J.x),Ae=.5*(I.pageY+J.y);d.set(me,Ae)}p.subVectors(d,h).multiplyScalar(i.rotateSpeed);const le=i.domElement;q(2*Math.PI*p.x/le.clientHeight),U(2*Math.PI*p.y/le.clientHeight),h.copy(d)}function Se(I){if(E.length===1)_.set(I.pageX,I.pageY);else{const le=ve(I),J=.5*(I.pageX+le.x),me=.5*(I.pageY+le.y);_.set(J,me)}m.subVectors(_,g).multiplyScalar(i.panSpeed),B(m.x,m.y),g.copy(_)}function Me(I){const le=ve(I),J=I.pageX-le.x,me=I.pageY-le.y,Ae=Math.sqrt(J*J+me*me);x.set(0,Ae),v.set(0,Math.pow(x.y/f.y,i.zoomSpeed)),G(v.y),f.copy(x)}function Ee(I){i.enableZoom&&Me(I),i.enablePan&&Se(I)}function Ne(I){i.enableZoom&&Me(I),i.enableRotate&&ke(I)}function ue(I){i.enabled!==!1&&(E.length===0&&(i.domElement.setPointerCapture(I.pointerId),i.domElement.addEventListener("pointermove",ye),i.domElement.addEventListener("pointerup",be)),re(I),I.pointerType==="touch"?k(I):ae(I))}function ye(I){i.enabled!==!1&&(I.pointerType==="touch"?fe(I):Ie(I))}function be(I){_e(I),E.length===0&&(i.domElement.releasePointerCapture(I.pointerId),i.domElement.removeEventListener("pointermove",ye),i.domElement.removeEventListener("pointerup",be)),i.dispatchEvent(tc),r=n.NONE}function ae(I){let le;switch(I.button){case 0:le=i.mouseButtons.LEFT;break;case 1:le=i.mouseButtons.MIDDLE;break;case 2:le=i.mouseButtons.RIGHT;break;default:le=-1}switch(le){case Si.DOLLY:if(i.enableZoom===!1)return;b(I),r=n.DOLLY;break;case Si.ROTATE:if(I.ctrlKey||I.metaKey||I.shiftKey){if(i.enablePan===!1)return;P(I),r=n.PAN}else{if(i.enableRotate===!1)return;N(I),r=n.ROTATE}break;case Si.PAN:if(I.ctrlKey||I.metaKey||I.shiftKey){if(i.enableRotate===!1)return;N(I),r=n.ROTATE}else{if(i.enablePan===!1)return;P(I),r=n.PAN}break;default:r=n.NONE}r!==n.NONE&&i.dispatchEvent(Ma)}function Ie(I){switch(r){case n.ROTATE:if(i.enableRotate===!1)return;H(I);break;case n.DOLLY:if(i.enableZoom===!1)return;X(I);break;case n.PAN:if(i.enablePan===!1)return;W(I);break}}function w(I){i.enabled===!1||i.enableZoom===!1||r!==n.NONE||(I.preventDefault(),i.dispatchEvent(Ma),ne(I),i.dispatchEvent(tc))}function y(I){i.enabled===!1||i.enablePan===!1||Q(I)}function k(I){switch(de(I),E.length){case 1:switch(i.touches.ONE){case yi.ROTATE:if(i.enableRotate===!1)return;ee(),r=n.TOUCH_ROTATE;break;case yi.PAN:if(i.enablePan===!1)return;pe(),r=n.TOUCH_PAN;break;default:r=n.NONE}break;case 2:switch(i.touches.TWO){case yi.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;he(),r=n.TOUCH_DOLLY_PAN;break;case yi.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;F(),r=n.TOUCH_DOLLY_ROTATE;break;default:r=n.NONE}break;default:r=n.NONE}r!==n.NONE&&i.dispatchEvent(Ma)}function fe(I){switch(de(I),r){case n.TOUCH_ROTATE:if(i.enableRotate===!1)return;ke(I),i.update();break;case n.TOUCH_PAN:if(i.enablePan===!1)return;Se(I),i.update();break;case n.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Ee(I),i.update();break;case n.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Ne(I),i.update();break;default:r=n.NONE}}function $(I){i.enabled!==!1&&I.preventDefault()}function re(I){E.push(I)}function _e(I){delete D[I.pointerId];for(let le=0;le<E.length;le++)if(E[le].pointerId==I.pointerId){E.splice(le,1);return}}function de(I){let le=D[I.pointerId];le===void 0&&(le=new He,D[I.pointerId]=le),le.set(I.pageX,I.pageY)}function ve(I){const le=I.pointerId===E[0].pointerId?E[1]:E[0];return D[le.pointerId]}i.domElement.addEventListener("contextmenu",$),i.domElement.addEventListener("pointerdown",ue),i.domElement.addEventListener("pointercancel",be),i.domElement.addEventListener("wheel",w,{passive:!1}),this.update()}}/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.19.1
 * @author George Michael Brower
 * @license MIT
 */class xn{constructor(e,t,i,n,r="div"){this.parent=e,this.object=t,this.property=i,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(r),this.domElement.classList.add("controller"),this.domElement.classList.add(n),this.$name=document.createElement("div"),this.$name.classList.add("name"),xn.nextNameID=xn.nextNameID||0,this.$name.id=`lil-gui-name-${++xn.nextNameID}`,this.$widget=document.createElement("div"),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",o=>o.stopPropagation()),this.domElement.addEventListener("keyup",o=>o.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(i)}name(e){return this._name=e,this.$name.innerHTML=e,this}onChange(e){return this._onChange=e,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(e=!0){return this.disable(!e)}disable(e=!0){return e===this._disabled?this:(this._disabled=e,this.domElement.classList.toggle("disabled",e),this.$disable.toggleAttribute("disabled",e),this)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(e){const t=this.parent.add(this.object,this.property,e);return t.name(this._name),this.destroy(),t}min(e){return this}max(e){return this}step(e){return this}decimals(e){return this}listen(e=!0){return this._listening=e,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const e=this.save();e!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=e}getValue(){return this.object[this.property]}setValue(e){return this.object[this.property]=e,this._callOnChange(),this.updateDisplay(),this}updateDisplay(){return this}load(e){return this.setValue(e),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class s_ extends xn{constructor(e,t,i){super(e,t,i,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function Ha(s){let e,t;return(e=s.match(/(#|0x)?([a-f0-9]{6})/i))?t=e[2]:(e=s.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?t=parseInt(e[1]).toString(16).padStart(2,0)+parseInt(e[2]).toString(16).padStart(2,0)+parseInt(e[3]).toString(16).padStart(2,0):(e=s.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(t=e[1]+e[1]+e[2]+e[2]+e[3]+e[3]),t?"#"+t:!1}const a_={isPrimitive:!0,match:s=>typeof s=="string",fromHexString:Ha,toHexString:Ha},Er={isPrimitive:!0,match:s=>typeof s=="number",fromHexString:s=>parseInt(s.substring(1),16),toHexString:s=>"#"+s.toString(16).padStart(6,0)},o_={isPrimitive:!1,match:s=>Array.isArray(s),fromHexString(s,e,t=1){const i=Er.fromHexString(s);e[0]=(i>>16&255)/255*t,e[1]=(i>>8&255)/255*t,e[2]=(i&255)/255*t},toHexString([s,e,t],i=1){i=255/i;const n=s*i<<16^e*i<<8^t*i<<0;return Er.toHexString(n)}},l_={isPrimitive:!1,match:s=>Object(s)===s,fromHexString(s,e,t=1){const i=Er.fromHexString(s);e.r=(i>>16&255)/255*t,e.g=(i>>8&255)/255*t,e.b=(i&255)/255*t},toHexString({r:s,g:e,b:t},i=1){i=255/i;const n=s*i<<16^e*i<<8^t*i<<0;return Er.toHexString(n)}},c_=[a_,Er,o_,l_];function u_(s){return c_.find(e=>e.match(s))}class h_ extends xn{constructor(e,t,i,n){super(e,t,i,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=u_(this.initialValue),this._rgbScale=n,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const r=Ha(this.$text.value);r&&this._setValueFromHexString(r)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(e){if(this._format.isPrimitive){const t=this._format.fromHexString(e);this.setValue(t)}else this._format.fromHexString(e,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(e){return this._setValueFromHexString(e),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class Ea extends xn{constructor(e,t,i){super(e,t,i,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",n=>{n.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class d_ extends xn{constructor(e,t,i,n,r,o){super(e,t,i,"number"),this._initInput(),this.min(n),this.max(r);const a=o!==void 0;this.step(a?o:this._getImplicitStep(),a),this.updateDisplay()}decimals(e){return this._decimals=e,this.updateDisplay(),this}min(e){return this._min=e,this._onUpdateMinMax(),this}max(e){return this._max=e,this._onUpdateMinMax(),this}step(e,t=!0){return this._step=e,this._stepExplicit=t,this}updateDisplay(){const e=this.getValue();if(this._hasSlider){let t=(e-this._min)/(this._max-this._min);t=Math.max(0,Math.min(t,1)),this.$fill.style.width=t*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?e:e.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;const t=()=>{let x=parseFloat(this.$input.value);isNaN(x)||(this._stepExplicit&&(x=this._snap(x)),this.setValue(this._clamp(x)))},i=x=>{const v=parseFloat(this.$input.value);isNaN(v)||(this._snapClampSetValue(v+x),this.$input.value=this.getValue())},n=x=>{x.key==="Enter"&&this.$input.blur(),x.code==="ArrowUp"&&(x.preventDefault(),i(this._step*this._arrowKeyMultiplier(x))),x.code==="ArrowDown"&&(x.preventDefault(),i(this._step*this._arrowKeyMultiplier(x)*-1))},r=x=>{this._inputFocused&&(x.preventDefault(),i(this._step*this._normalizeMouseWheel(x)))};let o=!1,a,l,c,u,h;const d=5,p=x=>{a=x.clientX,l=c=x.clientY,o=!0,u=this.getValue(),h=0,window.addEventListener("mousemove",g),window.addEventListener("mouseup",_)},g=x=>{if(o){const v=x.clientX-a,S=x.clientY-l;Math.abs(S)>d?(x.preventDefault(),this.$input.blur(),o=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(v)>d&&_()}if(!o){const v=x.clientY-c;h-=v*this._step*this._arrowKeyMultiplier(x),u+h>this._max?h=this._max-u:u+h<this._min&&(h=this._min-u),this._snapClampSetValue(u+h)}c=x.clientY},_=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",g),window.removeEventListener("mouseup",_)},m=()=>{this._inputFocused=!0},f=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",t),this.$input.addEventListener("keydown",n),this.$input.addEventListener("wheel",r,{passive:!1}),this.$input.addEventListener("mousedown",p),this.$input.addEventListener("focus",m),this.$input.addEventListener("blur",f)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const e=(f,x,v,S,T)=>(f-x)/(v-x)*(T-S)+S,t=f=>{const x=this.$slider.getBoundingClientRect();let v=e(f,x.left,x.right,this._min,this._max);this._snapClampSetValue(v)},i=f=>{this._setDraggingStyle(!0),t(f.clientX),window.addEventListener("mousemove",n),window.addEventListener("mouseup",r)},n=f=>{t(f.clientX)},r=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",n),window.removeEventListener("mouseup",r)};let o=!1,a,l;const c=f=>{f.preventDefault(),this._setDraggingStyle(!0),t(f.touches[0].clientX),o=!1},u=f=>{f.touches.length>1||(this._hasScrollBar?(a=f.touches[0].clientX,l=f.touches[0].clientY,o=!0):c(f),window.addEventListener("touchmove",h,{passive:!1}),window.addEventListener("touchend",d))},h=f=>{if(o){const x=f.touches[0].clientX-a,v=f.touches[0].clientY-l;Math.abs(x)>Math.abs(v)?c(f):(window.removeEventListener("touchmove",h),window.removeEventListener("touchend",d))}else f.preventDefault(),t(f.touches[0].clientX)},d=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",h),window.removeEventListener("touchend",d)},p=this._callOnFinishChange.bind(this),g=400;let _;const m=f=>{if(Math.abs(f.deltaX)<Math.abs(f.deltaY)&&this._hasScrollBar)return;f.preventDefault();const v=this._normalizeMouseWheel(f)*this._step;this._snapClampSetValue(this.getValue()+v),this.$input.value=this.getValue(),clearTimeout(_),_=setTimeout(p,g)};this.$slider.addEventListener("mousedown",i),this.$slider.addEventListener("touchstart",u,{passive:!1}),this.$slider.addEventListener("wheel",m,{passive:!1})}_setDraggingStyle(e,t="horizontal"){this.$slider&&this.$slider.classList.toggle("active",e),document.body.classList.toggle("lil-gui-dragging",e),document.body.classList.toggle(`lil-gui-${t}`,e)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(e){let{deltaX:t,deltaY:i}=e;return Math.floor(e.deltaY)!==e.deltaY&&e.wheelDelta&&(t=0,i=-e.wheelDelta/120,i*=this._stepExplicit?1:10),t+-i}_arrowKeyMultiplier(e){let t=this._stepExplicit?1:10;return e.shiftKey?t*=10:e.altKey&&(t/=10),t}_snap(e){const t=Math.round(e/this._step)*this._step;return parseFloat(t.toPrecision(15))}_clamp(e){return e<this._min&&(e=this._min),e>this._max&&(e=this._max),e}_snapClampSetValue(e){this.setValue(this._clamp(this._snap(e)))}get _hasScrollBar(){const e=this.parent.root.$children;return e.scrollHeight>e.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class f_ extends xn{constructor(e,t,i,n){super(e,t,i,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(n)}options(e){return this._values=Array.isArray(e)?e:Object.values(e),this._names=Array.isArray(e)?e:Object.keys(e),this.$select.replaceChildren(),this._names.forEach(t=>{const i=document.createElement("option");i.innerHTML=t,this.$select.appendChild(i)}),this.updateDisplay(),this}updateDisplay(){const e=this.getValue(),t=this._values.indexOf(e);return this.$select.selectedIndex=t,this.$display.innerHTML=t===-1?e:this._names[t],this}}class p_ extends xn{constructor(e,t,i){super(e,t,i,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",n=>{n.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}const m_=`.lil-gui {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  color: var(--text-color);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  --background-color: #1f1f1f;
  --text-color: #ebebeb;
  --title-background-color: #111111;
  --title-text-color: #ebebeb;
  --widget-color: #424242;
  --hover-color: #4f4f4f;
  --focus-color: #595959;
  --number-color: #2cc9ff;
  --string-color: #a2db3c;
  --font-size: 11px;
  --input-font-size: 11px;
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --font-family-mono: Menlo, Monaco, Consolas, "Droid Sans Mono", monospace;
  --padding: 4px;
  --spacing: 4px;
  --widget-height: 20px;
  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);
  --name-width: 45%;
  --slider-knob-width: 2px;
  --slider-input-width: 27%;
  --color-input-width: 27%;
  --slider-input-min-width: 45px;
  --color-input-min-width: 45px;
  --folder-indent: 7px;
  --widget-padding: 0 0 0 3px;
  --widget-border-radius: 2px;
  --checkbox-size: calc(0.75 * var(--widget-height));
  --scrollbar-width: 5px;
}
.lil-gui, .lil-gui * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.lil-gui.root {
  width: var(--width, 245px);
  display: flex;
  flex-direction: column;
  background: var(--background-color);
}
.lil-gui.root > .title {
  background: var(--title-background-color);
  color: var(--title-text-color);
}
.lil-gui.root > .children {
  overflow-x: hidden;
  overflow-y: auto;
}
.lil-gui.root > .children::-webkit-scrollbar {
  width: var(--scrollbar-width);
  height: var(--scrollbar-width);
  background: var(--background-color);
}
.lil-gui.root > .children::-webkit-scrollbar-thumb {
  border-radius: var(--scrollbar-width);
  background: var(--focus-color);
}
@media (pointer: coarse) {
  .lil-gui.allow-touch-styles, .lil-gui.allow-touch-styles .lil-gui {
    --widget-height: 28px;
    --padding: 6px;
    --spacing: 6px;
    --font-size: 13px;
    --input-font-size: 16px;
    --folder-indent: 10px;
    --scrollbar-width: 7px;
    --slider-input-min-width: 50px;
    --color-input-min-width: 65px;
  }
}
.lil-gui.force-touch-styles, .lil-gui.force-touch-styles .lil-gui {
  --widget-height: 28px;
  --padding: 6px;
  --spacing: 6px;
  --font-size: 13px;
  --input-font-size: 16px;
  --folder-indent: 10px;
  --scrollbar-width: 7px;
  --slider-input-min-width: 50px;
  --color-input-min-width: 65px;
}
.lil-gui.autoPlace {
  max-height: 100%;
  position: fixed;
  top: 0;
  right: 15px;
  z-index: 1001;
}

.lil-gui .controller {
  display: flex;
  align-items: center;
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
}
.lil-gui .controller.disabled {
  opacity: 0.5;
}
.lil-gui .controller.disabled, .lil-gui .controller.disabled * {
  pointer-events: none !important;
}
.lil-gui .controller > .name {
  min-width: var(--name-width);
  flex-shrink: 0;
  white-space: pre;
  padding-right: var(--spacing);
  line-height: var(--widget-height);
}
.lil-gui .controller .widget {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: var(--widget-height);
}
.lil-gui .controller.string input {
  color: var(--string-color);
}
.lil-gui .controller.boolean {
  cursor: pointer;
}
.lil-gui .controller.color .display {
  width: 100%;
  height: var(--widget-height);
  border-radius: var(--widget-border-radius);
  position: relative;
}
@media (hover: hover) {
  .lil-gui .controller.color .display:hover:before {
    content: " ";
    display: block;
    position: absolute;
    border-radius: var(--widget-border-radius);
    border: 1px solid #fff9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
.lil-gui .controller.color input[type=color] {
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.lil-gui .controller.color input[type=text] {
  margin-left: var(--spacing);
  font-family: var(--font-family-mono);
  min-width: var(--color-input-min-width);
  width: var(--color-input-width);
  flex-shrink: 0;
}
.lil-gui .controller.option select {
  opacity: 0;
  position: absolute;
  width: 100%;
  max-width: 100%;
}
.lil-gui .controller.option .display {
  position: relative;
  pointer-events: none;
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  line-height: var(--widget-height);
  max-width: 100%;
  overflow: hidden;
  word-break: break-all;
  padding-left: 0.55em;
  padding-right: 1.75em;
  background: var(--widget-color);
}
@media (hover: hover) {
  .lil-gui .controller.option .display.focus {
    background: var(--focus-color);
  }
}
.lil-gui .controller.option .display.active {
  background: var(--focus-color);
}
.lil-gui .controller.option .display:after {
  font-family: "lil-gui";
  content: "↕";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding-right: 0.375em;
}
.lil-gui .controller.option .widget,
.lil-gui .controller.option select {
  cursor: pointer;
}
@media (hover: hover) {
  .lil-gui .controller.option .widget:hover .display {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number input {
  color: var(--number-color);
}
.lil-gui .controller.number.hasSlider input {
  margin-left: var(--spacing);
  width: var(--slider-input-width);
  min-width: var(--slider-input-min-width);
  flex-shrink: 0;
}
.lil-gui .controller.number .slider {
  width: 100%;
  height: var(--widget-height);
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  padding-right: var(--slider-knob-width);
  overflow: hidden;
  cursor: ew-resize;
  touch-action: pan-y;
}
@media (hover: hover) {
  .lil-gui .controller.number .slider:hover {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number .slider.active {
  background: var(--focus-color);
}
.lil-gui .controller.number .slider.active .fill {
  opacity: 0.95;
}
.lil-gui .controller.number .fill {
  height: 100%;
  border-right: var(--slider-knob-width) solid var(--number-color);
  box-sizing: content-box;
}

.lil-gui-dragging .lil-gui {
  --hover-color: var(--widget-color);
}
.lil-gui-dragging * {
  cursor: ew-resize !important;
}

.lil-gui-dragging.lil-gui-vertical * {
  cursor: ns-resize !important;
}

.lil-gui .title {
  height: var(--title-height);
  line-height: calc(var(--title-height) - 4px);
  font-weight: 600;
  padding: 0 var(--padding);
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  outline: none;
  text-decoration-skip: objects;
}
.lil-gui .title:before {
  font-family: "lil-gui";
  content: "▾";
  padding-right: 2px;
  display: inline-block;
}
.lil-gui .title:active {
  background: var(--title-background-color);
  opacity: 0.75;
}
@media (hover: hover) {
  body:not(.lil-gui-dragging) .lil-gui .title:hover {
    background: var(--title-background-color);
    opacity: 0.85;
  }
  .lil-gui .title:focus {
    text-decoration: underline var(--focus-color);
  }
}
.lil-gui.root > .title:focus {
  text-decoration: none !important;
}
.lil-gui.closed > .title:before {
  content: "▸";
}
.lil-gui.closed > .children {
  transform: translateY(-7px);
  opacity: 0;
}
.lil-gui.closed:not(.transition) > .children {
  display: none;
}
.lil-gui.transition > .children {
  transition-duration: 300ms;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);
  overflow: hidden;
  pointer-events: none;
}
.lil-gui .children:empty:before {
  content: "Empty";
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
  display: block;
  height: var(--widget-height);
  font-style: italic;
  line-height: var(--widget-height);
  opacity: 0.5;
}
.lil-gui.root > .children > .lil-gui > .title {
  border: 0 solid var(--widget-color);
  border-width: 1px 0;
  transition: border-color 300ms;
}
.lil-gui.root > .children > .lil-gui.closed > .title {
  border-bottom-color: transparent;
}
.lil-gui + .controller {
  border-top: 1px solid var(--widget-color);
  margin-top: 0;
  padding-top: var(--spacing);
}
.lil-gui .lil-gui .lil-gui > .title {
  border: none;
}
.lil-gui .lil-gui .lil-gui > .children {
  border: none;
  margin-left: var(--folder-indent);
  border-left: 2px solid var(--widget-color);
}
.lil-gui .lil-gui .controller {
  border: none;
}

.lil-gui label, .lil-gui input, .lil-gui button {
  -webkit-tap-highlight-color: transparent;
}
.lil-gui input {
  border: 0;
  outline: none;
  font-family: var(--font-family);
  font-size: var(--input-font-size);
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  background: var(--widget-color);
  color: var(--text-color);
  width: 100%;
}
@media (hover: hover) {
  .lil-gui input:hover {
    background: var(--hover-color);
  }
  .lil-gui input:active {
    background: var(--focus-color);
  }
}
.lil-gui input:disabled {
  opacity: 1;
}
.lil-gui input[type=text],
.lil-gui input[type=number] {
  padding: var(--widget-padding);
  -moz-appearance: textfield;
}
.lil-gui input[type=text]:focus,
.lil-gui input[type=number]:focus {
  background: var(--focus-color);
}
.lil-gui input[type=checkbox] {
  appearance: none;
  width: var(--checkbox-size);
  height: var(--checkbox-size);
  border-radius: var(--widget-border-radius);
  text-align: center;
  cursor: pointer;
}
.lil-gui input[type=checkbox]:checked:before {
  font-family: "lil-gui";
  content: "✓";
  font-size: var(--checkbox-size);
  line-height: var(--checkbox-size);
}
@media (hover: hover) {
  .lil-gui input[type=checkbox]:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button {
  outline: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  color: var(--text-color);
  width: 100%;
  height: var(--widget-height);
  text-transform: none;
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  border: none;
}
@media (hover: hover) {
  .lil-gui button:hover {
    background: var(--hover-color);
  }
  .lil-gui button:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button:active {
  background: var(--focus-color);
}

@font-face {
  font-family: "lil-gui";
  src: url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff");
}`;function g_(s){const e=document.createElement("style");e.innerHTML=s;const t=document.querySelector("head link[rel=stylesheet], head style");t?document.head.insertBefore(e,t):document.head.appendChild(e)}let ic=!1;class ao{constructor({parent:e,autoPlace:t=e===void 0,container:i,width:n,title:r="Controls",closeFolders:o=!1,injectStyles:a=!0,touchStyles:l=!0}={}){if(this.parent=e,this.root=e?e.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",c=>{(c.code==="Enter"||c.code==="Space")&&(c.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(r),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("root"),l&&this.domElement.classList.add("allow-touch-styles"),!ic&&a&&(g_(m_),ic=!0),i?i.appendChild(this.domElement):t&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),n&&this.domElement.style.setProperty("--width",n+"px"),this._closeFolders=o}add(e,t,i,n,r){if(Object(i)===i)return new f_(this,e,t,i);const o=e[t];switch(typeof o){case"number":return new d_(this,e,t,i,n,r);case"boolean":return new s_(this,e,t);case"string":return new p_(this,e,t);case"function":return new Ea(this,e,t)}console.error(`gui.add failed
	property:`,t,`
	object:`,e,`
	value:`,o)}addColor(e,t,i=1){return new h_(this,e,t,i)}addFolder(e){const t=new ao({parent:this,title:e});return this.root._closeFolders&&t.close(),t}load(e,t=!0){return e.controllers&&this.controllers.forEach(i=>{i instanceof Ea||i._name in e.controllers&&i.load(e.controllers[i._name])}),t&&e.folders&&this.folders.forEach(i=>{i._title in e.folders&&i.load(e.folders[i._title])}),this}save(e=!0){const t={controllers:{},folders:{}};return this.controllers.forEach(i=>{if(!(i instanceof Ea)){if(i._name in t.controllers)throw new Error(`Cannot save GUI with duplicate property "${i._name}"`);t.controllers[i._name]=i.save()}}),e&&this.folders.forEach(i=>{if(i._title in t.folders)throw new Error(`Cannot save GUI with duplicate folder "${i._title}"`);t.folders[i._title]=i.save()}),t}open(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}_setClosed(e){this._closed!==e&&(this._closed=e,this._callOnOpenClose(this))}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const t=this.$children.clientHeight;this.$children.style.height=t+"px",this.domElement.classList.add("transition");const i=r=>{r.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",i))};this.$children.addEventListener("transitionend",i);const n=e?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!e),requestAnimationFrame(()=>{this.$children.style.height=n+"px"})}),this}title(e){return this._title=e,this.$title.innerHTML=e,this}reset(e=!0){return(e?this.controllersRecursive():this.controllers).forEach(i=>i.reset()),this}onChange(e){return this._onChange=e,this}_callOnChange(e){this.parent&&this.parent._callOnChange(e),this._onChange!==void 0&&this._onChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(e){this.parent&&this.parent._callOnFinishChange(e),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onOpenClose(e){return this._onOpenClose=e,this}_callOnOpenClose(e){this.parent&&this.parent._callOnOpenClose(e),this._onOpenClose!==void 0&&this._onOpenClose.call(this,e)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(e=>e.destroy())}controllersRecursive(){let e=Array.from(this.controllers);return this.folders.forEach(t=>{e=e.concat(t.controllersRecursive())}),e}foldersRecursive(){let e=Array.from(this.folders);return this.folders.forEach(t=>{e=e.concat(t.foldersRecursive())}),e}}const __=ao,Es=9684299,Va=16737792,rc=10481111,ou=16777215,v_=13622,sc=new Un,ls=new Y;class lu extends au{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const e=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],t=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],i=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(i),this.setAttribute("position",new kt(e,3)),this.setAttribute("uv",new kt(t,2))}applyMatrix4(e){const t=this.attributes.instanceStart,i=this.attributes.instanceEnd;return t!==void 0&&(t.applyMatrix4(e),i.applyMatrix4(e),t.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const i=new Ga(t,6,1);return this.setAttribute("instanceStart",new Wn(i,3,0)),this.setAttribute("instanceEnd",new Wn(i,3,3)),this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const i=new Ga(t,6,1);return this.setAttribute("instanceColorStart",new Wn(i,3,0)),this.setAttribute("instanceColorEnd",new Wn(i,3,3)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new Zg(e.geometry)),this}fromLineSegments(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Un);const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;e!==void 0&&t!==void 0&&(this.boundingBox.setFromBufferAttribute(e),sc.setFromBufferAttribute(t),this.boundingBox.union(sc))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new gi),this.boundingBox===null&&this.computeBoundingBox();const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(e!==void 0&&t!==void 0){const i=this.boundingSphere.center;this.boundingBox.getCenter(i);let n=0;for(let r=0,o=e.count;r<o;r++)ls.fromBufferAttribute(e,r),n=Math.max(n,i.distanceToSquared(ls)),ls.fromBufferAttribute(t,r),n=Math.max(n,i.distanceToSquared(ls));this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(e){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(e)}}Le.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new He(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};Nt.line={uniforms:Rs.merge([Le.common,Le.fog,Le.line]),vertexShader:`
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#ifdef USE_DASH

			uniform float dashScale;
			attribute float instanceDistanceStart;
			attribute float instanceDistanceEnd;
			varying float vLineDistance;

		#endif

		void trimSegment( const in vec4 start, inout vec4 end ) {

			// trim end segment so it terminates between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
			float nearEstimate = - 0.5 * b / a;

			float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

			end.xyz = mix( start.xyz, end.xyz, alpha );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
				vUv = uv;

			#endif

			float aspect = resolution.x / resolution.y;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			#ifdef WORLD_UNITS

				worldStart = start.xyz;
				worldEnd = end.xyz;

			#else

				vUv = uv;

			#endif

			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
			// perhaps there is a more elegant solution -- WestLangley

			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

			if ( perspective ) {

				if ( start.z < 0.0 && end.z >= 0.0 ) {

					trimSegment( start, end );

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					trimSegment( end, start );

				}

			}

			// clip space
			vec4 clipStart = projectionMatrix * start;
			vec4 clipEnd = projectionMatrix * end;

			// ndc space
			vec3 ndcStart = clipStart.xyz / clipStart.w;
			vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

			// direction
			vec2 dir = ndcEnd.xy - ndcStart.xy;

			// account for clip-space aspect ratio
			dir.x *= aspect;
			dir = normalize( dir );

			#ifdef WORLD_UNITS

				// get the offset direction as perpendicular to the view vector
				vec3 worldDir = normalize( end.xyz - start.xyz );
				vec3 offset;
				if ( position.y < 0.5 ) {

					offset = normalize( cross( start.xyz, worldDir ) );

				} else {

					offset = normalize( cross( end.xyz, worldDir ) );

				}

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				float forwardOffset = dot( worldDir, vec3( 0.0, 0.0, 1.0 ) );

				// don't extend the line if we're rendering dashes because we
				// won't be rendering the endcaps
				#ifndef USE_DASH

					// extend the line bounds to encompass  endcaps
					start.xyz += - worldDir * linewidth * 0.5;
					end.xyz += worldDir * linewidth * 0.5;

					// shift the position of the quad so it hugs the forward edge of the line
					offset.xy -= dir * forwardOffset;
					offset.z += 0.5;

				#endif

				// endcaps
				if ( position.y > 1.0 || position.y < 0.0 ) {

					offset.xy += dir * 2.0 * forwardOffset;

				}

				// adjust for linewidth
				offset *= linewidth * 0.5;

				// set the world position
				worldPos = ( position.y < 0.5 ) ? start : end;
				worldPos.xyz += offset;

				// project the worldpos
				vec4 clip = projectionMatrix * worldPos;

				// shift the depth of the projected points so the line
				// segments overlap neatly
				vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
				clip.z = clipPose.z * clip.w;

			#else

				vec2 offset = vec2( dir.y, - dir.x );
				// undo aspect ratio adjustment
				dir.x /= aspect;
				offset.x /= aspect;

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				// endcaps
				if ( position.y < 0.0 ) {

					offset += - dir;

				} else if ( position.y > 1.0 ) {

					offset += dir;

				}

				// adjust for linewidth
				offset *= linewidth;

				// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
				offset /= resolution.y;

				// select end
				vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

				// back to clip space
				offset *= clip.w;

				clip.xy += offset;

			#endif

			gl_Position = clip;

			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

			#include <logdepthbuf_vertex>
			#include <clipping_planes_vertex>
			#include <fog_vertex>

		}
		`,fragmentShader:`
		uniform vec3 diffuse;
		uniform float opacity;
		uniform float linewidth;

		#ifdef USE_DASH

			uniform float dashOffset;
			uniform float dashSize;
			uniform float gapSize;

		#endif

		varying float vLineDistance;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#include <common>
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

		vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

			float mua;
			float mub;

			vec3 p13 = p1 - p3;
			vec3 p43 = p4 - p3;

			vec3 p21 = p2 - p1;

			float d1343 = dot( p13, p43 );
			float d4321 = dot( p43, p21 );
			float d1321 = dot( p13, p21 );
			float d4343 = dot( p43, p43 );
			float d2121 = dot( p21, p21 );

			float denom = d2121 * d4343 - d4321 * d4321;

			float numer = d1343 * d4321 - d1321 * d4343;

			mua = numer / denom;
			mua = clamp( mua, 0.0, 1.0 );
			mub = ( d1343 + d4321 * ( mua ) ) / d4343;
			mub = clamp( mub, 0.0, 1.0 );

			return vec2( mua, mub );

		}

		void main() {

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			float alpha = opacity;

			#ifdef WORLD_UNITS

				// Find the closest points on the view ray and the line segment
				vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
				vec3 lineDir = worldEnd - worldStart;
				vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

				vec3 p1 = worldStart + lineDir * params.x;
				vec3 p2 = rayEnd * params.y;
				vec3 delta = p1 - p2;
				float len = length( delta );
				float norm = len / linewidth;

				#ifndef USE_DASH

					#ifdef USE_ALPHA_TO_COVERAGE

						float dnorm = fwidth( norm );
						alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

					#else

						if ( norm > 0.5 ) {

							discard;

						}

					#endif

				#endif

			#else

				#ifdef USE_ALPHA_TO_COVERAGE

					// artifacts appear on some hardware if a derivative is taken within a conditional
					float a = vUv.x;
					float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
					float len2 = a * a + b * b;
					float dlen = fwidth( len2 );

					if ( abs( vUv.y ) > 1.0 ) {

						alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

					}

				#else

					if ( abs( vUv.y ) > 1.0 ) {

						float a = vUv.x;
						float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
						float len2 = a * a + b * b;

						if ( len2 > 1.0 ) discard;

					}

				#endif

			#endif

			vec4 diffuseColor = vec4( diffuse, alpha );

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, alpha );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}
		`};class oo extends qn{constructor(e){super({type:"LineMaterial",uniforms:Rs.clone(Nt.line.uniforms),vertexShader:Nt.line.vertexShader,fragmentShader:Nt.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(e)}get color(){return this.uniforms.diffuse.value}set color(e){this.uniforms.diffuse.value=e}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(e){e===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(e){this.uniforms.linewidth&&(this.uniforms.linewidth.value=e)}get dashed(){return"USE_DASH"in this.defines}set dashed(e){e===!0!==this.dashed&&(this.needsUpdate=!0),e===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(e){this.uniforms.dashScale.value=e}get dashSize(){return this.uniforms.dashSize.value}set dashSize(e){this.uniforms.dashSize.value=e}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(e){this.uniforms.dashOffset.value=e}get gapSize(){return this.uniforms.gapSize.value}set gapSize(e){this.uniforms.gapSize.value=e}get opacity(){return this.uniforms.opacity.value}set opacity(e){this.uniforms&&(this.uniforms.opacity.value=e)}get resolution(){return this.uniforms.resolution.value}set resolution(e){this.uniforms.resolution.value.copy(e)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(e){this.defines&&(e===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),e===!0?(this.defines.USE_ALPHA_TO_COVERAGE="",this.extensions.derivatives=!0):(delete this.defines.USE_ALPHA_TO_COVERAGE,this.extensions.derivatives=!1))}}const ac=new Y,oc=new Y,gt=new rt,_t=new rt,pn=new rt,ba=new Y,Ta=new ct,xt=new n_,lc=new Y,cs=new Un,us=new gi,mn=new rt;let _n,ui;function cc(s,e,t){return mn.set(0,0,-e,1).applyMatrix4(s.projectionMatrix),mn.multiplyScalar(1/mn.w),mn.x=ui/t.width,mn.y=ui/t.height,mn.applyMatrix4(s.projectionMatrixInverse),mn.multiplyScalar(1/mn.w),Math.abs(Math.max(mn.x,mn.y))}function x_(s,e){const t=s.matrixWorld,i=s.geometry,n=i.attributes.instanceStart,r=i.attributes.instanceEnd,o=Math.min(i.instanceCount,n.count);for(let a=0,l=o;a<l;a++){xt.start.fromBufferAttribute(n,a),xt.end.fromBufferAttribute(r,a),xt.applyMatrix4(t);const c=new Y,u=new Y;_n.distanceSqToSegment(xt.start,xt.end,u,c),u.distanceTo(c)<ui*.5&&e.push({point:u,pointOnLine:c,distance:_n.origin.distanceTo(u),object:s,face:null,faceIndex:a,uv:null,uv1:null})}}function S_(s,e,t){const i=e.projectionMatrix,r=s.material.resolution,o=s.matrixWorld,a=s.geometry,l=a.attributes.instanceStart,c=a.attributes.instanceEnd,u=Math.min(a.instanceCount,l.count),h=-e.near;_n.at(1,pn),pn.w=1,pn.applyMatrix4(e.matrixWorldInverse),pn.applyMatrix4(i),pn.multiplyScalar(1/pn.w),pn.x*=r.x/2,pn.y*=r.y/2,pn.z=0,ba.copy(pn),Ta.multiplyMatrices(e.matrixWorldInverse,o);for(let d=0,p=u;d<p;d++){if(gt.fromBufferAttribute(l,d),_t.fromBufferAttribute(c,d),gt.w=1,_t.w=1,gt.applyMatrix4(Ta),_t.applyMatrix4(Ta),gt.z>h&&_t.z>h)continue;if(gt.z>h){const v=gt.z-_t.z,S=(gt.z-h)/v;gt.lerp(_t,S)}else if(_t.z>h){const v=_t.z-gt.z,S=(_t.z-h)/v;_t.lerp(gt,S)}gt.applyMatrix4(i),_t.applyMatrix4(i),gt.multiplyScalar(1/gt.w),_t.multiplyScalar(1/_t.w),gt.x*=r.x/2,gt.y*=r.y/2,_t.x*=r.x/2,_t.y*=r.y/2,xt.start.copy(gt),xt.start.z=0,xt.end.copy(_t),xt.end.z=0;const _=xt.closestPointToPointParameter(ba,!0);xt.at(_,lc);const m=Bc.lerp(gt.z,_t.z,_),f=m>=-1&&m<=1,x=ba.distanceTo(lc)<ui*.5;if(f&&x){xt.start.fromBufferAttribute(l,d),xt.end.fromBufferAttribute(c,d),xt.start.applyMatrix4(o),xt.end.applyMatrix4(o);const v=new Y,S=new Y;_n.distanceSqToSegment(xt.start,xt.end,S,v),t.push({point:S,pointOnLine:v,distance:_n.origin.distanceTo(S),object:s,face:null,faceIndex:d,uv:null,uv1:null})}}}class y_ extends Wt{constructor(e=new lu,t=new oo({color:Math.random()*16777215})){super(e,t),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const e=this.geometry,t=e.attributes.instanceStart,i=e.attributes.instanceEnd,n=new Float32Array(2*t.count);for(let o=0,a=0,l=t.count;o<l;o++,a+=2)ac.fromBufferAttribute(t,o),oc.fromBufferAttribute(i,o),n[a]=a===0?0:n[a-1],n[a+1]=n[a]+ac.distanceTo(oc);const r=new Ga(n,2,1);return e.setAttribute("instanceDistanceStart",new Wn(r,1,0)),e.setAttribute("instanceDistanceEnd",new Wn(r,1,1)),this}raycast(e,t){const i=this.material.worldUnits,n=e.camera;n===null&&!i&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');const r=e.params.Line2!==void 0&&e.params.Line2.threshold||0;_n=e.ray;const o=this.matrixWorld,a=this.geometry,l=this.material;ui=l.linewidth+r,a.boundingSphere===null&&a.computeBoundingSphere(),us.copy(a.boundingSphere).applyMatrix4(o);let c;if(i)c=ui*.5;else{const h=Math.max(n.near,us.distanceToPoint(_n.origin));c=cc(n,h,l.resolution)}if(us.radius+=c,_n.intersectsSphere(us)===!1)return;a.boundingBox===null&&a.computeBoundingBox(),cs.copy(a.boundingBox).applyMatrix4(o);let u;if(i)u=ui*.5;else{const h=Math.max(n.near,cs.distanceToPoint(_n.origin));u=cc(n,h,l.resolution)}cs.expandByScalar(u),_n.intersectsBox(cs)!==!1&&(i?x_(this,t):S_(this,n,t))}}class cu extends lu{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(e){const t=e.length-3,i=new Float32Array(2*t);for(let n=0;n<t;n+=3)i[2*n]=e[n],i[2*n+1]=e[n+1],i[2*n+2]=e[n+2],i[2*n+3]=e[n+3],i[2*n+4]=e[n+4],i[2*n+5]=e[n+5];return super.setPositions(i),this}setColors(e){const t=e.length-3,i=new Float32Array(2*t);for(let n=0;n<t;n+=3)i[2*n]=e[n],i[2*n+1]=e[n+1],i[2*n+2]=e[n+2],i[2*n+3]=e[n+3],i[2*n+4]=e[n+4],i[2*n+5]=e[n+5];return super.setColors(i),this}fromLine(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}}class M_ extends y_{constructor(e=new cu,t=new oo({color:Math.random()*16777215})){super(e,t),this.isLine2=!0,this.type="Line2"}}function E_(){var s=Object.create(null);function e(n,r){var o=n.id,a=n.name,l=n.dependencies;l===void 0&&(l=[]);var c=n.init;c===void 0&&(c=function(){});var u=n.getTransferables;if(u===void 0&&(u=null),!s[o])try{l=l.map(function(d){return d&&d.isWorkerModule&&(e(d,function(p){if(p instanceof Error)throw p}),d=s[d.id].value),d}),c=i("<"+a+">.init",c),u&&(u=i("<"+a+">.getTransferables",u));var h=null;typeof c=="function"?h=c.apply(void 0,l):console.error("worker module init function failed to rehydrate"),s[o]={id:o,value:h,getTransferables:u},r(h)}catch(d){d&&d.noLog||console.error(d),r(d)}}function t(n,r){var o,a=n.id,l=n.args;(!s[a]||typeof s[a].value!="function")&&r(new Error("Worker module "+a+": not found or its 'init' did not return a function"));try{var c=(o=s[a]).value.apply(o,l);c&&typeof c.then=="function"?c.then(u,function(h){return r(h instanceof Error?h:new Error(""+h))}):u(c)}catch(h){r(h)}function u(h){try{var d=s[a].getTransferables&&s[a].getTransferables(h);(!d||!Array.isArray(d)||!d.length)&&(d=void 0),r(h,d)}catch(p){console.error(p),r(p)}}}function i(n,r){var o=void 0;self.troikaDefine=function(l){return o=l};var a=URL.createObjectURL(new Blob(["/** "+n.replace(/\*/g,"")+` **/

troikaDefine(
`+r+`
)`],{type:"application/javascript"}));try{importScripts(a)}catch(l){console.error(l)}return URL.revokeObjectURL(a),delete self.troikaDefine,o}self.addEventListener("message",function(n){var r=n.data,o=r.messageId,a=r.action,l=r.data;try{a==="registerModule"&&e(l,function(c){c instanceof Error?postMessage({messageId:o,success:!1,error:c.message}):postMessage({messageId:o,success:!0,result:{isCallable:typeof c=="function"}})}),a==="callModule"&&t(l,function(c,u){c instanceof Error?postMessage({messageId:o,success:!1,error:c.message}):postMessage({messageId:o,success:!0,result:c},u||void 0)})}catch(c){postMessage({messageId:o,success:!1,error:c.stack})}})}function b_(s){var e=function(){for(var t=[],i=arguments.length;i--;)t[i]=arguments[i];return e._getInitResult().then(function(n){if(typeof n=="function")return n.apply(void 0,t);throw new Error("Worker module function was called but `init` did not return a callable function")})};return e._getInitResult=function(){var t=s.dependencies,i=s.init;t=Array.isArray(t)?t.map(function(r){return r&&r._getInitResult?r._getInitResult():r}):[];var n=Promise.all(t).then(function(r){return i.apply(null,r)});return e._getInitResult=function(){return n},n},e}var uu=function(){var s=!1;if(typeof window<"u"&&typeof window.document<"u")try{var e=new Worker(URL.createObjectURL(new Blob([""],{type:"application/javascript"})));e.terminate(),s=!0}catch(t){typeof process<"u",console.log("Troika createWorkerModule: web workers not allowed; falling back to main thread execution. Cause: ["+t.message+"]")}return uu=function(){return s},s},T_=0,A_=0,Aa=!1,_r=Object.create(null),vr=Object.create(null),Wa=Object.create(null);function Ji(s){if((!s||typeof s.init!="function")&&!Aa)throw new Error("requires `options.init` function");var e=s.dependencies,t=s.init,i=s.getTransferables,n=s.workerId;if(!uu())return b_(s);n==null&&(n="#default");var r="workerModule"+ ++T_,o=s.name||r,a=null;e=e&&e.map(function(c){return typeof c=="function"&&!c.workerModuleData&&(Aa=!0,c=Ji({workerId:n,name:"<"+o+"> function dependency: "+c.name,init:`function(){return (
`+ps(c)+`
)}`}),Aa=!1),c&&c.workerModuleData&&(c=c.workerModuleData),c});function l(){for(var c=[],u=arguments.length;u--;)c[u]=arguments[u];if(!a){a=uc(n,"registerModule",l.workerModuleData);var h=function(){a=null,vr[n].delete(h)};(vr[n]||(vr[n]=new Set)).add(h)}return a.then(function(d){var p=d.isCallable;if(p)return uc(n,"callModule",{id:r,args:c});throw new Error("Worker module function was called but `init` did not return a callable function")})}return l.workerModuleData={isWorkerModule:!0,id:r,name:o,dependencies:e,init:ps(t),getTransferables:i&&ps(i)},l}function w_(s){vr[s]&&vr[s].forEach(function(e){e()}),_r[s]&&(_r[s].terminate(),delete _r[s])}function ps(s){var e=s.toString();return!/^function/.test(e)&&/^\w+\s*\(/.test(e)&&(e="function "+e),e}function C_(s){var e=_r[s];if(!e){var t=ps(E_);e=_r[s]=new Worker(URL.createObjectURL(new Blob(["/** Worker Module Bootstrap: "+s.replace(/\*/g,"")+` **/

;(`+t+")()"],{type:"application/javascript"}))),e.onmessage=function(i){var n=i.data,r=n.messageId,o=Wa[r];if(!o)throw new Error("WorkerModule response with empty or unknown messageId");delete Wa[r],o(n)}}return e}function uc(s,e,t){return new Promise(function(i,n){var r=++A_;Wa[r]=function(o){o.success?i(o.result):n(new Error("Error in worker "+e+" call: "+o.error))},C_(s).postMessage({messageId:r,action:e,data:t})})}function hu(){var s=function(e){function t(V,N,b,P,H,X,W,ne){var Q=1-W;ne.x=Q*Q*V+2*Q*W*b+W*W*H,ne.y=Q*Q*N+2*Q*W*P+W*W*X}function i(V,N,b,P,H,X,W,ne,Q,ee){var pe=1-Q;ee.x=pe*pe*pe*V+3*pe*pe*Q*b+3*pe*Q*Q*H+Q*Q*Q*W,ee.y=pe*pe*pe*N+3*pe*pe*Q*P+3*pe*Q*Q*X+Q*Q*Q*ne}function n(V,N){for(var b=/([MLQCZ])([^MLQCZ]*)/g,P,H,X,W,ne;P=b.exec(V);){var Q=P[2].replace(/^\s*|\s*$/g,"").split(/[,\s]+/).map(function(ee){return parseFloat(ee)});switch(P[1]){case"M":W=H=Q[0],ne=X=Q[1];break;case"L":(Q[0]!==W||Q[1]!==ne)&&N("L",W,ne,W=Q[0],ne=Q[1]);break;case"Q":{N("Q",W,ne,W=Q[2],ne=Q[3],Q[0],Q[1]);break}case"C":{N("C",W,ne,W=Q[4],ne=Q[5],Q[0],Q[1],Q[2],Q[3]);break}case"Z":(W!==H||ne!==X)&&N("L",W,ne,H,X);break}}}function r(V,N,b){b===void 0&&(b=16);var P={x:0,y:0};n(V,function(H,X,W,ne,Q,ee,pe,Re,he){switch(H){case"L":N(X,W,ne,Q);break;case"Q":{for(var F=X,ke=W,Se=1;Se<b;Se++)t(X,W,ee,pe,ne,Q,Se/(b-1),P),N(F,ke,P.x,P.y),F=P.x,ke=P.y;break}case"C":{for(var Me=X,Ee=W,Ne=1;Ne<b;Ne++)i(X,W,ee,pe,Re,he,ne,Q,Ne/(b-1),P),N(Me,Ee,P.x,P.y),Me=P.x,Ee=P.y;break}}})}var o="precision highp float;attribute vec2 aUV;varying vec2 vUV;void main(){vUV=aUV;gl_Position=vec4(mix(vec2(-1.0),vec2(1.0),aUV),0.0,1.0);}",a="precision highp float;uniform sampler2D tex;varying vec2 vUV;void main(){gl_FragColor=texture2D(tex,vUV);}",l=new WeakMap,c={premultipliedAlpha:!1,preserveDrawingBuffer:!0,antialias:!1,depth:!1};function u(V,N){var b=V.getContext?V.getContext("webgl",c):V,P=l.get(b);if(!P){let Me=function(ae){var Ie=X[ae];if(!Ie&&(Ie=X[ae]=b.getExtension(ae),!Ie))throw new Error(ae+" not supported");return Ie},Ee=function(ae,Ie){var w=b.createShader(Ie);return b.shaderSource(w,ae),b.compileShader(w),w},Ne=function(ae,Ie,w,y){if(!W[ae]){var k={},fe={},$=b.createProgram();b.attachShader($,Ee(Ie,b.VERTEX_SHADER)),b.attachShader($,Ee(w,b.FRAGMENT_SHADER)),b.linkProgram($),W[ae]={program:$,transaction:function(_e){b.useProgram($),_e({setUniform:function(ve,I){for(var le=[],J=arguments.length-2;J-- >0;)le[J]=arguments[J+2];var me=fe[I]||(fe[I]=b.getUniformLocation($,I));b["uniform"+ve].apply(b,[me].concat(le))},setAttribute:function(ve,I,le,J,me){var Ae=k[ve];Ae||(Ae=k[ve]={buf:b.createBuffer(),loc:b.getAttribLocation($,ve),data:null}),b.bindBuffer(b.ARRAY_BUFFER,Ae.buf),b.vertexAttribPointer(Ae.loc,I,b.FLOAT,!1,0,0),b.enableVertexAttribArray(Ae.loc),H?b.vertexAttribDivisor(Ae.loc,J):Me("ANGLE_instanced_arrays").vertexAttribDivisorANGLE(Ae.loc,J),me!==Ae.data&&(b.bufferData(b.ARRAY_BUFFER,me,le),Ae.data=me)}})}}}W[ae].transaction(y)},ue=function(ae,Ie){Q++;try{b.activeTexture(b.TEXTURE0+Q);var w=ne[ae];w||(w=ne[ae]=b.createTexture(),b.bindTexture(b.TEXTURE_2D,w),b.texParameteri(b.TEXTURE_2D,b.TEXTURE_MIN_FILTER,b.NEAREST),b.texParameteri(b.TEXTURE_2D,b.TEXTURE_MAG_FILTER,b.NEAREST)),b.bindTexture(b.TEXTURE_2D,w),Ie(w,Q)}finally{Q--}},ye=function(ae,Ie,w){var y=b.createFramebuffer();ee.push(y),b.bindFramebuffer(b.FRAMEBUFFER,y),b.activeTexture(b.TEXTURE0+Ie),b.bindTexture(b.TEXTURE_2D,ae),b.framebufferTexture2D(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_2D,ae,0);try{w(y)}finally{b.deleteFramebuffer(y),b.bindFramebuffer(b.FRAMEBUFFER,ee[--ee.length-1]||null)}},be=function(){X={},W={},ne={},Q=-1,ee.length=0};var pe=Me,Re=Ee,he=Ne,F=ue,ke=ye,Se=be,H=typeof WebGL2RenderingContext<"u"&&b instanceof WebGL2RenderingContext,X={},W={},ne={},Q=-1,ee=[];b.canvas.addEventListener("webglcontextlost",function(ae){be(),ae.preventDefault()},!1),l.set(b,P={gl:b,isWebGL2:H,getExtension:Me,withProgram:Ne,withTexture:ue,withTextureFramebuffer:ye,handleContextLoss:be})}N(P)}function h(V,N,b,P,H,X,W,ne){W===void 0&&(W=15),ne===void 0&&(ne=null),u(V,function(Q){var ee=Q.gl,pe=Q.withProgram,Re=Q.withTexture;Re("copy",function(he,F){ee.texImage2D(ee.TEXTURE_2D,0,ee.RGBA,H,X,0,ee.RGBA,ee.UNSIGNED_BYTE,N),pe("copy",o,a,function(ke){var Se=ke.setUniform,Me=ke.setAttribute;Me("aUV",2,ee.STATIC_DRAW,0,new Float32Array([0,0,2,0,0,2])),Se("1i","image",F),ee.bindFramebuffer(ee.FRAMEBUFFER,ne||null),ee.disable(ee.BLEND),ee.colorMask(W&8,W&4,W&2,W&1),ee.viewport(b,P,H,X),ee.scissor(b,P,H,X),ee.drawArrays(ee.TRIANGLES,0,3)})})})}function d(V,N,b){var P=V.width,H=V.height;u(V,function(X){var W=X.gl,ne=new Uint8Array(P*H*4);W.readPixels(0,0,P,H,W.RGBA,W.UNSIGNED_BYTE,ne),V.width=N,V.height=b,h(W,ne,0,0,P,H)})}var p=Object.freeze({__proto__:null,withWebGLContext:u,renderImageData:h,resizeWebGLCanvasWithoutClearing:d});function g(V,N,b,P,H,X){X===void 0&&(X=1);var W=new Uint8Array(V*N),ne=P[2]-P[0],Q=P[3]-P[1],ee=[];r(b,function(Me,Ee,Ne,ue){ee.push({x1:Me,y1:Ee,x2:Ne,y2:ue,minX:Math.min(Me,Ne),minY:Math.min(Ee,ue),maxX:Math.max(Me,Ne),maxY:Math.max(Ee,ue)})}),ee.sort(function(Me,Ee){return Me.maxX-Ee.maxX});for(var pe=0;pe<V;pe++)for(var Re=0;Re<N;Re++){var he=ke(P[0]+ne*(pe+.5)/V,P[1]+Q*(Re+.5)/N),F=Math.pow(1-Math.abs(he)/H,X)/2;he<0&&(F=1-F),F=Math.max(0,Math.min(255,Math.round(F*255))),W[Re*V+pe]=F}return W;function ke(Me,Ee){for(var Ne=1/0,ue=1/0,ye=ee.length;ye--;){var be=ee[ye];if(be.maxX+ue<=Me)break;if(Me+ue>be.minX&&Ee-ue<be.maxY&&Ee+ue>be.minY){var ae=f(Me,Ee,be.x1,be.y1,be.x2,be.y2);ae<Ne&&(Ne=ae,ue=Math.sqrt(Ne))}}return Se(Me,Ee)&&(ue=-ue),ue}function Se(Me,Ee){for(var Ne=0,ue=ee.length;ue--;){var ye=ee[ue];if(ye.maxX<=Me)break;var be=ye.y1>Ee!=ye.y2>Ee&&Me<(ye.x2-ye.x1)*(Ee-ye.y1)/(ye.y2-ye.y1)+ye.x1;be&&(Ne+=ye.y1<ye.y2?1:-1)}return Ne!==0}}function _(V,N,b,P,H,X,W,ne,Q,ee){X===void 0&&(X=1),ne===void 0&&(ne=0),Q===void 0&&(Q=0),ee===void 0&&(ee=0),m(V,N,b,P,H,X,W,null,ne,Q,ee)}function m(V,N,b,P,H,X,W,ne,Q,ee,pe){X===void 0&&(X=1),Q===void 0&&(Q=0),ee===void 0&&(ee=0),pe===void 0&&(pe=0);for(var Re=g(V,N,b,P,H,X),he=new Uint8Array(Re.length*4),F=0;F<Re.length;F++)he[F*4+pe]=Re[F];h(W,he,Q,ee,V,N,1<<3-pe,ne)}function f(V,N,b,P,H,X){var W=H-b,ne=X-P,Q=W*W+ne*ne,ee=Q?Math.max(0,Math.min(1,((V-b)*W+(N-P)*ne)/Q)):0,pe=V-(b+ee*W),Re=N-(P+ee*ne);return pe*pe+Re*Re}var x=Object.freeze({__proto__:null,generate:g,generateIntoCanvas:_,generateIntoFramebuffer:m}),v="precision highp float;uniform vec4 uGlyphBounds;attribute vec2 aUV;attribute vec4 aLineSegment;varying vec4 vLineSegment;varying vec2 vGlyphXY;void main(){vLineSegment=aLineSegment;vGlyphXY=mix(uGlyphBounds.xy,uGlyphBounds.zw,aUV);gl_Position=vec4(mix(vec2(-1.0),vec2(1.0),aUV),0.0,1.0);}",S="precision highp float;uniform vec4 uGlyphBounds;uniform float uMaxDistance;uniform float uExponent;varying vec4 vLineSegment;varying vec2 vGlyphXY;float absDistToSegment(vec2 point,vec2 lineA,vec2 lineB){vec2 lineDir=lineB-lineA;float lenSq=dot(lineDir,lineDir);float t=lenSq==0.0 ? 0.0 : clamp(dot(point-lineA,lineDir)/lenSq,0.0,1.0);vec2 linePt=lineA+t*lineDir;return distance(point,linePt);}void main(){vec4 seg=vLineSegment;vec2 p=vGlyphXY;float dist=absDistToSegment(p,seg.xy,seg.zw);float val=pow(1.0-clamp(dist/uMaxDistance,0.0,1.0),uExponent)*0.5;bool crossing=(seg.y>p.y!=seg.w>p.y)&&(p.x<(seg.z-seg.x)*(p.y-seg.y)/(seg.w-seg.y)+seg.x);bool crossingUp=crossing&&vLineSegment.y<vLineSegment.w;gl_FragColor=vec4(crossingUp ? 1.0/255.0 : 0.0,crossing&&!crossingUp ? 1.0/255.0 : 0.0,0.0,val);}",T="precision highp float;uniform sampler2D tex;varying vec2 vUV;void main(){vec4 color=texture2D(tex,vUV);bool inside=color.r!=color.g;float val=inside ? 1.0-color.a : color.a;gl_FragColor=vec4(val);}",L=new Float32Array([0,0,2,0,0,2]),E=null,D=!1,M={},A=new WeakMap;function q(V){if(!D&&!B(V))throw new Error("WebGL generation not supported")}function U(V,N,b,P,H,X,W){if(X===void 0&&(X=1),W===void 0&&(W=null),!W&&(W=E,!W)){var ne=typeof OffscreenCanvas=="function"?new OffscreenCanvas(1,1):typeof document<"u"?document.createElement("canvas"):null;if(!ne)throw new Error("OffscreenCanvas or DOM canvas not supported");W=E=ne.getContext("webgl",{depth:!1})}q(W);var Q=new Uint8Array(V*N*4);u(W,function(he){var F=he.gl,ke=he.withTexture,Se=he.withTextureFramebuffer;ke("readable",function(Me,Ee){F.texImage2D(F.TEXTURE_2D,0,F.RGBA,V,N,0,F.RGBA,F.UNSIGNED_BYTE,null),Se(Me,Ee,function(Ne){C(V,N,b,P,H,X,F,Ne,0,0,0),F.readPixels(0,0,V,N,F.RGBA,F.UNSIGNED_BYTE,Q)})})});for(var ee=new Uint8Array(V*N),pe=0,Re=0;pe<Q.length;pe+=4)ee[Re++]=Q[pe];return ee}function z(V,N,b,P,H,X,W,ne,Q,ee){X===void 0&&(X=1),ne===void 0&&(ne=0),Q===void 0&&(Q=0),ee===void 0&&(ee=0),C(V,N,b,P,H,X,W,null,ne,Q,ee)}function C(V,N,b,P,H,X,W,ne,Q,ee,pe){X===void 0&&(X=1),Q===void 0&&(Q=0),ee===void 0&&(ee=0),pe===void 0&&(pe=0),q(W);var Re=[];r(b,function(he,F,ke,Se){Re.push(he,F,ke,Se)}),Re=new Float32Array(Re),u(W,function(he){var F=he.gl,ke=he.isWebGL2,Se=he.getExtension,Me=he.withProgram,Ee=he.withTexture,Ne=he.withTextureFramebuffer,ue=he.handleContextLoss;if(Ee("rawDistances",function(ye,be){(V!==ye._lastWidth||N!==ye._lastHeight)&&F.texImage2D(F.TEXTURE_2D,0,F.RGBA,ye._lastWidth=V,ye._lastHeight=N,0,F.RGBA,F.UNSIGNED_BYTE,null),Me("main",v,S,function(ae){var Ie=ae.setAttribute,w=ae.setUniform,y=!ke&&Se("ANGLE_instanced_arrays"),k=!ke&&Se("EXT_blend_minmax");Ie("aUV",2,F.STATIC_DRAW,0,L),Ie("aLineSegment",4,F.DYNAMIC_DRAW,1,Re),w.apply(void 0,["4f","uGlyphBounds"].concat(P)),w("1f","uMaxDistance",H),w("1f","uExponent",X),Ne(ye,be,function(fe){F.enable(F.BLEND),F.colorMask(!0,!0,!0,!0),F.viewport(0,0,V,N),F.scissor(0,0,V,N),F.blendFunc(F.ONE,F.ONE),F.blendEquationSeparate(F.FUNC_ADD,ke?F.MAX:k.MAX_EXT),F.clear(F.COLOR_BUFFER_BIT),ke?F.drawArraysInstanced(F.TRIANGLES,0,3,Re.length/4):y.drawArraysInstancedANGLE(F.TRIANGLES,0,3,Re.length/4)})}),Me("post",o,T,function(ae){ae.setAttribute("aUV",2,F.STATIC_DRAW,0,L),ae.setUniform("1i","tex",be),F.bindFramebuffer(F.FRAMEBUFFER,ne),F.disable(F.BLEND),F.colorMask(pe===0,pe===1,pe===2,pe===3),F.viewport(Q,ee,V,N),F.scissor(Q,ee,V,N),F.drawArrays(F.TRIANGLES,0,3)})}),F.isContextLost())throw ue(),new Error("webgl context lost")})}function B(V){var N=!V||V===E?M:V.canvas||V,b=A.get(N);if(b===void 0){D=!0;var P=null;try{var H=[97,106,97,61,99,137,118,80,80,118,137,99,61,97,106,97],X=U(4,4,"M8,8L16,8L24,24L16,24Z",[0,0,32,32],24,1,V);b=X&&H.length===X.length&&X.every(function(W,ne){return W===H[ne]}),b||(P="bad trial run results",console.info(H,X))}catch(W){b=!1,P=W.message}P&&console.warn("WebGL SDF generation not supported:",P),D=!1,A.set(N,b)}return b}var G=Object.freeze({__proto__:null,generate:U,generateIntoCanvas:z,generateIntoFramebuffer:C,isSupported:B});function j(V,N,b,P,H,X){H===void 0&&(H=Math.max(P[2]-P[0],P[3]-P[1])/2),X===void 0&&(X=1);try{return U.apply(G,arguments)}catch(W){return console.info("WebGL SDF generation failed, falling back to JS",W),g.apply(x,arguments)}}function te(V,N,b,P,H,X,W,ne,Q,ee){H===void 0&&(H=Math.max(P[2]-P[0],P[3]-P[1])/2),X===void 0&&(X=1),ne===void 0&&(ne=0),Q===void 0&&(Q=0),ee===void 0&&(ee=0);try{return z.apply(G,arguments)}catch(pe){return console.info("WebGL SDF generation failed, falling back to JS",pe),_.apply(x,arguments)}}return e.forEachPathCommand=n,e.generate=j,e.generateIntoCanvas=te,e.javascript=x,e.pathToLineSegments=r,e.webgl=G,e.webglUtils=p,Object.defineProperty(e,"__esModule",{value:!0}),e}({});return s}function R_(){var s=function(e){var t={R:"13k,1a,2,3,3,2+1j,ch+16,a+1,5+2,2+n,5,a,4,6+16,4+3,h+1b,4mo,179q,2+9,2+11,2i9+7y,2+68,4,3+4,5+13,4+3,2+4k,3+29,8+cf,1t+7z,w+17,3+3m,1t+3z,16o1+5r,8+30,8+mc,29+1r,29+4v,75+73",EN:"1c+9,3d+1,6,187+9,513,4+5,7+9,sf+j,175h+9,qw+q,161f+1d,4xt+a,25i+9",ES:"17,2,6dp+1,f+1,av,16vr,mx+1,4o,2",ET:"z+2,3h+3,b+1,ym,3e+1,2o,p4+1,8,6u,7c,g6,1wc,1n9+4,30+1b,2n,6d,qhx+1,h0m,a+1,49+2,63+1,4+1,6bb+3,12jj",AN:"16o+5,2j+9,2+1,35,ed,1ff2+9,87+u",CS:"18,2+1,b,2u,12k,55v,l,17v0,2,3,53,2+1,b",B:"a,3,f+2,2v,690",S:"9,2,k",WS:"c,k,4f4,1vk+a,u,1j,335",ON:"x+1,4+4,h+5,r+5,r+3,z,5+3,2+1,2+1,5,2+2,3+4,o,w,ci+1,8+d,3+d,6+8,2+g,39+1,9,6+1,2,33,b8,3+1,3c+1,7+1,5r,b,7h+3,sa+5,2,3i+6,jg+3,ur+9,2v,ij+1,9g+9,7+a,8m,4+1,49+x,14u,2+2,c+2,e+2,e+2,e+1,i+n,e+e,2+p,u+2,e+2,36+1,2+3,2+1,b,2+2,6+5,2,2,2,h+1,5+4,6+3,3+f,16+2,5+3l,3+81,1y+p,2+40,q+a,m+13,2r+ch,2+9e,75+hf,3+v,2+2w,6e+5,f+6,75+2a,1a+p,2+2g,d+5x,r+b,6+3,4+o,g,6+1,6+2,2k+1,4,2j,5h+z,1m+1,1e+f,t+2,1f+e,d+3,4o+3,2s+1,w,535+1r,h3l+1i,93+2,2s,b+1,3l+x,2v,4g+3,21+3,kz+1,g5v+1,5a,j+9,n+v,2,3,2+8,2+1,3+2,2,3,46+1,4+4,h+5,r+5,r+a,3h+2,4+6,b+4,78,1r+24,4+c,4,1hb,ey+6,103+j,16j+c,1ux+7,5+g,fsh,jdq+1t,4,57+2e,p1,1m,1m,1m,1m,4kt+1,7j+17,5+2r,d+e,3+e,2+e,2+10,m+4,w,1n+5,1q,4z+5,4b+rb,9+c,4+c,4+37,d+2g,8+b,l+b,5+1j,9+9,7+13,9+t,3+1,27+3c,2+29,2+3q,d+d,3+4,4+2,6+6,a+o,8+6,a+2,e+6,16+42,2+1i",BN:"0+8,6+d,2s+5,2+p,e,4m9,1kt+2,2b+5,5+5,17q9+v,7k,6p+8,6+1,119d+3,440+7,96s+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+75,6p+2rz,1ben+1,1ekf+1,1ekf+1",NSM:"lc+33,7o+6,7c+18,2,2+1,2+1,2,21+a,1d+k,h,2u+6,3+5,3+1,2+3,10,v+q,2k+a,1n+8,a,p+3,2+8,2+2,2+4,18+2,3c+e,2+v,1k,2,5+7,5,4+6,b+1,u,1n,5+3,9,l+1,r,3+1,1m,5+1,5+1,3+2,4,v+1,4,c+1,1m,5+4,2+1,5,l+1,n+5,2,1n,3,2+3,9,8+1,c+1,v,1q,d,1f,4,1m+2,6+2,2+3,8+1,c+1,u,1n,g+1,l+1,t+1,1m+1,5+3,9,l+1,u,21,8+2,2,2j,3+6,d+7,2r,3+8,c+5,23+1,s,2,2,1k+d,2+4,2+1,6+a,2+z,a,2v+3,2+5,2+1,3+1,q+1,5+2,h+3,e,3+1,7,g,jk+2,qb+2,u+2,u+1,v+1,1t+1,2+6,9,3+a,a,1a+2,3c+1,z,3b+2,5+1,a,7+2,64+1,3,1n,2+6,2,2,3+7,7+9,3,1d+g,1s+3,1d,2+4,2,6,15+8,d+1,x+3,3+1,2+2,1l,2+1,4,2+2,1n+7,3+1,49+2,2+c,2+6,5,7,4+1,5j+1l,2+4,k1+w,2db+2,3y,2p+v,ff+3,30+1,n9x+3,2+9,x+1,29+1,7l,4,5,q+1,6,48+1,r+h,e,13+7,q+a,1b+2,1d,3+3,3+1,14,1w+5,3+1,3+1,d,9,1c,1g,2+2,3+1,6+1,2,17+1,9,6n,3,5,fn5,ki+f,h+f,r2,6b,46+4,1af+2,2+1,6+3,15+2,5,4m+1,fy+3,as+1,4a+a,4x,1j+e,1l+2,1e+3,3+1,1y+2,11+4,2+7,1r,d+1,1h+8,b+3,3,2o+2,3,2+1,7,4h,4+7,m+1,1m+1,4,12+6,4+4,5g+7,3+2,2,o,2d+5,2,5+1,2+1,6n+3,7+1,2+1,s+1,2e+7,3,2+1,2z,2,3+5,2,2u+2,3+3,2+4,78+8,2+1,75+1,2,5,41+3,3+1,5,x+5,3+1,15+5,3+3,9,a+5,3+2,1b+c,2+1,bb+6,2+5,2d+l,3+6,2+1,2+1,3f+5,4,2+1,2+6,2,21+1,4,2,9o+1,f0c+4,1o+6,t5,1s+3,2a,f5l+1,43t+2,i+7,3+6,v+3,45+2,1j0+1i,5+1d,9,f,n+4,2+e,11t+6,2+g,3+6,2+1,2+4,7a+6,c6+3,15t+6,32+6,gzhy+6n",AL:"16w,3,2,e+1b,z+2,2+2s,g+1,8+1,b+m,2+t,s+2i,c+e,4h+f,1d+1e,1bwe+dp,3+3z,x+c,2+1,35+3y,2rm+z,5+7,b+5,dt+l,c+u,17nl+27,1t+27,4x+6n,3+d",LRO:"6ct",RLO:"6cu",LRE:"6cq",RLE:"6cr",PDF:"6cs",LRI:"6ee",RLI:"6ef",FSI:"6eg",PDI:"6eh"},i={},n={};i.L=1,n[1]="L",Object.keys(t).forEach(function(ue,ye){i[ue]=1<<ye+1,n[i[ue]]=ue}),Object.freeze(i);var r=i.LRI|i.RLI|i.FSI,o=i.L|i.R|i.AL,a=i.B|i.S|i.WS|i.ON|i.FSI|i.LRI|i.RLI|i.PDI,l=i.BN|i.RLE|i.LRE|i.RLO|i.LRO|i.PDF,c=i.S|i.WS|i.B|r|i.PDI|l,u=null;function h(){if(!u){u=new Map;var ue=function(be){if(t.hasOwnProperty(be)){var ae=0;t[be].split(",").forEach(function(Ie){var w=Ie.split("+"),y=w[0],k=w[1];y=parseInt(y,36),k=k?parseInt(k,36):0,u.set(ae+=y,i[be]);for(var fe=0;fe<k;fe++)u.set(++ae,i[be])})}};for(var ye in t)ue(ye)}}function d(ue){return h(),u.get(ue.codePointAt(0))||i.L}function p(ue){return n[d(ue)]}var g={pairs:"14>1,1e>2,u>2,2wt>1,1>1,1ge>1,1wp>1,1j>1,f>1,hm>1,1>1,u>1,u6>1,1>1,+5,28>1,w>1,1>1,+3,b8>1,1>1,+3,1>3,-1>-1,3>1,1>1,+2,1s>1,1>1,x>1,th>1,1>1,+2,db>1,1>1,+3,3>1,1>1,+2,14qm>1,1>1,+1,4q>1,1e>2,u>2,2>1,+1",canonical:"6f1>-6dx,6dy>-6dx,6ec>-6ed,6ee>-6ed,6ww>2jj,-2ji>2jj,14r4>-1e7l,1e7m>-1e7l,1e7m>-1e5c,1e5d>-1e5b,1e5c>-14qx,14qy>-14qx,14vn>-1ecg,1ech>-1ecg,1edu>-1ecg,1eci>-1ecg,1eda>-1ecg,1eci>-1ecg,1eci>-168q,168r>-168q,168s>-14ye,14yf>-14ye"};function _(ue,ye){var be=36,ae=0,Ie=new Map,w=ye&&new Map,y;return ue.split(",").forEach(function k(fe){if(fe.indexOf("+")!==-1)for(var $=+fe;$--;)k(y);else{y=fe;var re=fe.split(">"),_e=re[0],de=re[1];_e=String.fromCodePoint(ae+=parseInt(_e,be)),de=String.fromCodePoint(ae+=parseInt(de,be)),Ie.set(_e,de),ye&&w.set(de,_e)}}),{map:Ie,reverseMap:w}}var m,f,x;function v(){if(!m){var ue=_(g.pairs,!0),ye=ue.map,be=ue.reverseMap;m=ye,f=be,x=_(g.canonical,!1).map}}function S(ue){return v(),m.get(ue)||null}function T(ue){return v(),f.get(ue)||null}function L(ue){return v(),x.get(ue)||null}var E=i.L,D=i.R,M=i.EN,A=i.ES,q=i.ET,U=i.AN,z=i.CS,C=i.B,B=i.S,G=i.ON,j=i.BN,te=i.NSM,V=i.AL,N=i.LRO,b=i.RLO,P=i.LRE,H=i.RLE,X=i.PDF,W=i.LRI,ne=i.RLI,Q=i.FSI,ee=i.PDI;function pe(ue,ye){for(var be=125,ae=new Uint32Array(ue.length),Ie=0;Ie<ue.length;Ie++)ae[Ie]=d(ue[Ie]);var w=new Map;function y(It,rn){var Ft=ae[It];ae[It]=rn,w.set(Ft,w.get(Ft)-1),Ft&a&&w.set(a,w.get(a)-1),w.set(rn,(w.get(rn)||0)+1),rn&a&&w.set(a,(w.get(a)||0)+1)}for(var k=new Uint8Array(ue.length),fe=new Map,$=[],re=null,_e=0;_e<ue.length;_e++)re||$.push(re={start:_e,end:ue.length-1,level:ye==="rtl"?1:ye==="ltr"?0:Eo(_e,!1)}),ae[_e]&C&&(re.end=_e,re=null);for(var de=H|P|b|N|r|ee|X|C,ve=function(It){return It+(It&1?1:2)},I=function(It){return It+(It&1?2:1)},le=0;le<$.length;le++){re=$[le];var J=[{_level:re.level,_override:0,_isolate:0}],me=void 0,Ae=0,De=0,Fe=0;w.clear();for(var Te=re.start;Te<=re.end;Te++){var Ce=ae[Te];if(me=J[J.length-1],w.set(Ce,(w.get(Ce)||0)+1),Ce&a&&w.set(a,(w.get(a)||0)+1),Ce&de)if(Ce&(H|P)){k[Te]=me._level;var O=(Ce===H?I:ve)(me._level);O<=be&&!Ae&&!De?J.push({_level:O,_override:0,_isolate:0}):Ae||De++}else if(Ce&(b|N)){k[Te]=me._level;var we=(Ce===b?I:ve)(me._level);we<=be&&!Ae&&!De?J.push({_level:we,_override:Ce&b?D:E,_isolate:0}):Ae||De++}else if(Ce&r){Ce&Q&&(Ce=Eo(Te+1,!0)===1?ne:W),k[Te]=me._level,me._override&&y(Te,me._override);var ce=(Ce===ne?I:ve)(me._level);ce<=be&&Ae===0&&De===0?(Fe++,J.push({_level:ce,_override:0,_isolate:1,_isolInitIndex:Te})):Ae++}else if(Ce&ee){if(Ae>0)Ae--;else if(Fe>0){for(De=0;!J[J.length-1]._isolate;)J.pop();var Z=J[J.length-1]._isolInitIndex;Z!=null&&(fe.set(Z,Te),fe.set(Te,Z)),J.pop(),Fe--}me=J[J.length-1],k[Te]=me._level,me._override&&y(Te,me._override)}else Ce&X?(Ae===0&&(De>0?De--:!me._isolate&&J.length>1&&(J.pop(),me=J[J.length-1])),k[Te]=me._level):Ce&C&&(k[Te]=re.level);else k[Te]=me._level,me._override&&Ce!==j&&y(Te,me._override)}for(var ge=[],Pe=null,Ue=re.start;Ue<=re.end;Ue++){var Ve=ae[Ue];if(!(Ve&l)){var Je=k[Ue],Ye=Ve&r,$e=Ve===ee;Pe&&Je===Pe._level?(Pe._end=Ue,Pe._endsWithIsolInit=Ye):ge.push(Pe={_start:Ue,_end:Ue,_level:Je,_startsWithPDI:$e,_endsWithIsolInit:Ye})}}for(var at=[],$t=0;$t<ge.length;$t++){var Jt=ge[$t];if(!Jt._startsWithPDI||Jt._startsWithPDI&&!fe.has(Jt._start)){for(var zt=[Pe=Jt],dn=void 0;Pe&&Pe._endsWithIsolInit&&(dn=fe.get(Pe._end))!=null;)for(var Pt=$t+1;Pt<ge.length;Pt++)if(ge[Pt]._start===dn){zt.push(Pe=ge[Pt]);break}for(var ft=[],fn=0;fn<zt.length;fn++)for(var Ar=zt[fn],Qi=Ar._start;Qi<=Ar._end;Qi++)ft.push(Qi);for(var Us=k[ft[0]],R=re.level,K=ft[0]-1;K>=0;K--)if(!(ae[K]&l)){R=k[K];break}var ie=ft[ft.length-1],se=k[ie],oe=re.level;if(!(ae[ie]&r)){for(var Oe=ie+1;Oe<=re.end;Oe++)if(!(ae[Oe]&l)){oe=k[Oe];break}}at.push({_seqIndices:ft,_sosType:Math.max(R,Us)%2?D:E,_eosType:Math.max(oe,se)%2?D:E})}}for(var Be=0;Be<at.length;Be++){var ze=at[Be],xe=ze._seqIndices,We=ze._sosType,Xe=ze._eosType,Ge=k[xe[0]]&1?D:E;if(w.get(te))for(var nt=0;nt<xe.length;nt++){var bt=xe[nt];if(ae[bt]&te){for(var ot=We,Ut=nt-1;Ut>=0;Ut--)if(!(ae[xe[Ut]]&l)){ot=ae[xe[Ut]];break}y(bt,ot&(r|ee)?G:ot)}}if(w.get(M))for(var tt=0;tt<xe.length;tt++){var Ke=xe[tt];if(ae[Ke]&M)for(var Dn=tt-1;Dn>=-1;Dn--){var st=Dn===-1?We:ae[xe[Dn]];if(st&o){st===V&&y(Ke,U);break}}}if(w.get(V))for(var Qt=0;Qt<xe.length;Qt++){var er=xe[Qt];ae[er]&V&&y(er,D)}if(w.get(A)||w.get(z))for(var en=1;en<xe.length-1;en++){var Zn=xe[en];if(ae[Zn]&(A|z)){for(var lt=0,tn=0,$n=en-1;$n>=0&&(lt=ae[xe[$n]],!!(lt&l));$n--);for(var mt=en+1;mt<xe.length&&(tn=ae[xe[mt]],!!(tn&l));mt++);lt===tn&&(ae[Zn]===A?lt===M:lt&(M|U))&&y(Zn,lt)}}if(w.get(M))for(var Dt=0;Dt<xe.length;Dt++){var Ds=xe[Dt];if(ae[Ds]&M){for(var Jn=Dt-1;Jn>=0&&ae[xe[Jn]]&(q|l);Jn--)y(xe[Jn],M);for(Dt++;Dt<xe.length&&ae[xe[Dt]]&(q|l|M);Dt++)ae[xe[Dt]]!==M&&y(xe[Dt],M)}}if(w.get(q)||w.get(A)||w.get(z))for(var tr=0;tr<xe.length;tr++){var co=xe[tr];if(ae[co]&(q|A|z)){y(co,G);for(var wr=tr-1;wr>=0&&ae[xe[wr]]&l;wr--)y(xe[wr],G);for(var Cr=tr+1;Cr<xe.length&&ae[xe[Cr]]&l;Cr++)y(xe[Cr],G)}}if(w.get(M))for(var Is=0,uo=We;Is<xe.length;Is++){var ho=xe[Is],Fs=ae[ho];Fs&M?uo===E&&y(ho,E):Fs&o&&(uo=Fs)}if(w.get(a)){var nr=D|M|U,fo=nr|E,Rr=[];{for(var vi=[],xi=0;xi<xe.length;xi++)if(ae[xe[xi]]&a){var ir=ue[xe[xi]],po=void 0;if(S(ir)!==null)if(vi.length<63)vi.push({char:ir,seqIndex:xi});else break;else if((po=T(ir))!==null)for(var rr=vi.length-1;rr>=0;rr--){var Os=vi[rr].char;if(Os===po||Os===T(L(ir))||S(L(Os))===ir){Rr.push([vi[rr].seqIndex,xi]),vi.length=rr;break}}}Rr.sort(function(It,rn){return It[0]-rn[0]})}for(var Ns=0;Ns<Rr.length;Ns++){for(var mo=Rr[Ns],Lr=mo[0],Bs=mo[1],go=!1,nn=0,ks=Lr+1;ks<Bs;ks++){var _o=xe[ks];if(ae[_o]&fo){go=!0;var vo=ae[_o]&nr?D:E;if(vo===Ge){nn=vo;break}}}if(go&&!nn){nn=We;for(var zs=Lr-1;zs>=0;zs--){var xo=xe[zs];if(ae[xo]&fo){var So=ae[xo]&nr?D:E;So!==Ge?nn=So:nn=Ge;break}}}if(nn){if(ae[xe[Lr]]=ae[xe[Bs]]=nn,nn!==Ge){for(var sr=Lr+1;sr<xe.length;sr++)if(!(ae[xe[sr]]&l)){d(ue[xe[sr]])&te&&(ae[xe[sr]]=nn);break}}if(nn!==Ge){for(var ar=Bs+1;ar<xe.length;ar++)if(!(ae[xe[ar]]&l)){d(ue[xe[ar]])&te&&(ae[xe[ar]]=nn);break}}}}for(var In=0;In<xe.length;In++)if(ae[xe[In]]&a){for(var yo=In,Gs=In,Hs=We,or=In-1;or>=0;or--)if(ae[xe[or]]&l)yo=or;else{Hs=ae[xe[or]]&nr?D:E;break}for(var Mo=Xe,lr=In+1;lr<xe.length;lr++)if(ae[xe[lr]]&(a|l))Gs=lr;else{Mo=ae[xe[lr]]&nr?D:E;break}for(var Vs=yo;Vs<=Gs;Vs++)ae[xe[Vs]]=Hs===Mo?Hs:Ge;In=Gs}}}for(var Gt=re.start;Gt<=re.end;Gt++){var Tu=k[Gt],Pr=ae[Gt];if(Tu&1?Pr&(E|M|U)&&k[Gt]++:Pr&D?k[Gt]++:Pr&(U|M)&&(k[Gt]+=2),Pr&l&&(k[Gt]=Gt===0?re.level:k[Gt-1]),Gt===re.end||d(ue[Gt])&(B|C))for(var Ur=Gt;Ur>=0&&d(ue[Ur])&c;Ur--)k[Ur]=re.level}}return{levels:k,paragraphs:$};function Eo(It,rn){for(var Ft=It;Ft<ue.length;Ft++){var Fn=ae[Ft];if(Fn&(D|V))return 1;if(Fn&(C|E)||rn&&Fn===ee)return 0;if(Fn&r){var bo=Au(Ft);Ft=bo===-1?ue.length:bo}}return 0}function Au(It){for(var rn=1,Ft=It+1;Ft<ue.length;Ft++){var Fn=ae[Ft];if(Fn&C)break;if(Fn&ee){if(--rn===0)return Ft}else Fn&r&&rn++}return-1}}var Re="14>1,j>2,t>2,u>2,1a>g,2v3>1,1>1,1ge>1,1wd>1,b>1,1j>1,f>1,ai>3,-2>3,+1,8>1k0,-1jq>1y7,-1y6>1hf,-1he>1h6,-1h5>1ha,-1h8>1qi,-1pu>1,6>3u,-3s>7,6>1,1>1,f>1,1>1,+2,3>1,1>1,+13,4>1,1>1,6>1eo,-1ee>1,3>1mg,-1me>1mk,-1mj>1mi,-1mg>1mi,-1md>1,1>1,+2,1>10k,-103>1,1>1,4>1,5>1,1>1,+10,3>1,1>8,-7>8,+1,-6>7,+1,a>1,1>1,u>1,u6>1,1>1,+5,26>1,1>1,2>1,2>2,8>1,7>1,4>1,1>1,+5,b8>1,1>1,+3,1>3,-2>1,2>1,1>1,+2,c>1,3>1,1>1,+2,h>1,3>1,a>1,1>1,2>1,3>1,1>1,d>1,f>1,3>1,1a>1,1>1,6>1,7>1,13>1,k>1,1>1,+19,4>1,1>1,+2,2>1,1>1,+18,m>1,a>1,1>1,lk>1,1>1,4>1,2>1,f>1,3>1,1>1,+3,db>1,1>1,+3,3>1,1>1,+2,14qm>1,1>1,+1,6>1,4j>1,j>2,t>2,u>2,2>1,+1",he;function F(){if(!he){var ue=_(Re,!0),ye=ue.map,be=ue.reverseMap;be.forEach(function(ae,Ie){ye.set(Ie,ae)}),he=ye}}function ke(ue){return F(),he.get(ue)||null}function Se(ue,ye,be,ae){var Ie=ue.length;be=Math.max(0,be==null?0:+be),ae=Math.min(Ie-1,ae==null?Ie-1:+ae);for(var w=new Map,y=be;y<=ae;y++)if(ye[y]&1){var k=ke(ue[y]);k!==null&&w.set(y,k)}return w}function Me(ue,ye,be,ae){var Ie=ue.length;be=Math.max(0,be==null?0:+be),ae=Math.min(Ie-1,ae==null?Ie-1:+ae);var w=[];return ye.paragraphs.forEach(function(y){var k=Math.max(be,y.start),fe=Math.min(ae,y.end);if(k<fe){for(var $=ye.levels.slice(k,fe+1),re=fe;re>=k&&d(ue[re])&c;re--)$[re]=y.level;for(var _e=y.level,de=1/0,ve=0;ve<$.length;ve++){var I=$[ve];I>_e&&(_e=I),I<de&&(de=I|1)}for(var le=_e;le>=de;le--)for(var J=0;J<$.length;J++)if($[J]>=le){for(var me=J;J+1<$.length&&$[J+1]>=le;)J++;J>me&&w.push([me+k,J+k])}}}),w}function Ee(ue,ye,be,ae){var Ie=Ne(ue,ye,be,ae),w=[].concat(ue);return Ie.forEach(function(y,k){w[k]=(ye.levels[y]&1?ke(ue[y]):null)||ue[y]}),w.join("")}function Ne(ue,ye,be,ae){for(var Ie=Me(ue,ye,be,ae),w=[],y=0;y<ue.length;y++)w[y]=y;return Ie.forEach(function(k){for(var fe=k[0],$=k[1],re=w.slice(fe,$+1),_e=re.length;_e--;)w[$-_e]=re[_e]}),w}return e.closingToOpeningBracket=T,e.getBidiCharType=d,e.getBidiCharTypeName=p,e.getCanonicalBracket=L,e.getEmbeddingLevels=pe,e.getMirroredCharacter=ke,e.getMirroredCharactersMap=Se,e.getReorderSegments=Me,e.getReorderedIndices=Ne,e.getReorderedString=Ee,e.openingToClosingBracket=S,Object.defineProperty(e,"__esModule",{value:!0}),e}({});return s}const du=/\bvoid\s+main\s*\(\s*\)\s*{/g;function Xa(s){const e=/^[ \t]*#include +<([\w\d./]+)>/gm;function t(i,n){let r=je[n];return r?Xa(r):i}return s.replace(e,t)}const vt=[];for(let s=0;s<256;s++)vt[s]=(s<16?"0":"")+s.toString(16);function L_(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(vt[s&255]+vt[s>>8&255]+vt[s>>16&255]+vt[s>>24&255]+"-"+vt[e&255]+vt[e>>8&255]+"-"+vt[e>>16&15|64]+vt[e>>24&255]+"-"+vt[t&63|128]+vt[t>>8&255]+"-"+vt[t>>16&255]+vt[t>>24&255]+vt[i&255]+vt[i>>8&255]+vt[i>>16&255]+vt[i>>24&255]).toUpperCase()}const ii=Object.assign||function(){let s=arguments[0];for(let e=1,t=arguments.length;e<t;e++){let i=arguments[e];if(i)for(let n in i)Object.prototype.hasOwnProperty.call(i,n)&&(s[n]=i[n])}return s},P_=Date.now(),hc=new WeakMap,dc=new Map;let U_=1e10;function Ya(s,e){const t=O_(e);let i=hc.get(s);if(i||hc.set(s,i=Object.create(null)),i[t])return new i[t];const n=`_onBeforeCompile${t}`,r=function(c,u){s.onBeforeCompile.call(this,c,u);const h=this.customProgramCacheKey()+"|"+c.vertexShader+"|"+c.fragmentShader;let d=dc[h];if(!d){const p=D_(this,c,e,t);d=dc[h]=p}c.vertexShader=d.vertexShader,c.fragmentShader=d.fragmentShader,ii(c.uniforms,this.uniforms),e.timeUniform&&(c.uniforms[e.timeUniform]={get value(){return Date.now()-P_}}),this[n]&&this[n](c)},o=function(){return a(e.chained?s:s.clone())},a=function(c){const u=Object.create(c,l);return Object.defineProperty(u,"baseMaterial",{value:s}),Object.defineProperty(u,"id",{value:U_++}),u.uuid=L_(),u.uniforms=ii({},c.uniforms,e.uniforms),u.defines=ii({},c.defines,e.defines),u.defines[`TROIKA_DERIVED_MATERIAL_${t}`]="",u.extensions=ii({},c.extensions,e.extensions),u._listeners=void 0,u},l={constructor:{value:o},isDerivedMaterial:{value:!0},customProgramCacheKey:{writable:!0,configurable:!0,value:function(){return s.customProgramCacheKey()+"|"+t}},onBeforeCompile:{get(){return r},set(c){this[n]=c}},copy:{writable:!0,configurable:!0,value:function(c){return s.copy.call(this,c),!s.isShaderMaterial&&!s.isDerivedMaterial&&(ii(this.extensions,c.extensions),ii(this.defines,c.defines),ii(this.uniforms,Rs.clone(c.uniforms))),this}},clone:{writable:!0,configurable:!0,value:function(){const c=new s.constructor;return a(c).copy(this)}},getDepthMaterial:{writable:!0,configurable:!0,value:function(){let c=this._depthMaterial;return c||(c=this._depthMaterial=Ya(s.isDerivedMaterial?s.getDepthMaterial():new nu({depthPacking:Oc}),e),c.defines.IS_DEPTH_MATERIAL="",c.uniforms=this.uniforms),c}},getDistanceMaterial:{writable:!0,configurable:!0,value:function(){let c=this._distanceMaterial;return c||(c=this._distanceMaterial=Ya(s.isDerivedMaterial?s.getDistanceMaterial():new iu,e),c.defines.IS_DISTANCE_MATERIAL="",c.uniforms=this.uniforms),c}},dispose:{writable:!0,configurable:!0,value(){const{_depthMaterial:c,_distanceMaterial:u}=this;c&&c.dispose(),u&&u.dispose(),s.dispose.call(this)}}};return i[t]=o,new o}function D_(s,{vertexShader:e,fragmentShader:t},i,n){let{vertexDefs:r,vertexMainIntro:o,vertexMainOutro:a,vertexTransform:l,fragmentDefs:c,fragmentMainIntro:u,fragmentMainOutro:h,fragmentColorTransform:d,customRewriter:p,timeUniform:g}=i;if(r=r||"",o=o||"",a=a||"",c=c||"",u=u||"",h=h||"",(l||p)&&(e=Xa(e)),(d||p)&&(t=t.replace(/^[ \t]*#include <((?:tonemapping|encodings|fog|premultiplied_alpha|dithering)_fragment)>/gm,`
//!BEGIN_POST_CHUNK $1
$&
//!END_POST_CHUNK
`),t=Xa(t)),p){let _=p({vertexShader:e,fragmentShader:t});e=_.vertexShader,t=_.fragmentShader}if(d){let _=[];t=t.replace(/^\/\/!BEGIN_POST_CHUNK[^]+?^\/\/!END_POST_CHUNK/gm,m=>(_.push(m),"")),h=`${d}
${_.join(`
`)}
${h}`}if(g){const _=`
uniform float ${g};
`;r=_+r,c=_+c}return l&&(e=`vec3 troika_position_${n};
vec3 troika_normal_${n};
vec2 troika_uv_${n};
${e}
`,r=`${r}
void troikaVertexTransform${n}(inout vec3 position, inout vec3 normal, inout vec2 uv) {
  ${l}
}
`,o=`
troika_position_${n} = vec3(position);
troika_normal_${n} = vec3(normal);
troika_uv_${n} = vec2(uv);
troikaVertexTransform${n}(troika_position_${n}, troika_normal_${n}, troika_uv_${n});
${o}
`,e=e.replace(/\b(position|normal|uv)\b/g,(_,m,f,x)=>/\battribute\s+vec[23]\s+$/.test(x.substr(0,f))?m:`troika_${m}_${n}`),s.map&&s.map.channel>0||(e=e.replace(/\bMAP_UV\b/g,`troika_uv_${n}`))),e=fc(e,n,r,o,a),t=fc(t,n,c,u,h),{vertexShader:e,fragmentShader:t}}function fc(s,e,t,i,n){return(i||n||t)&&(s=s.replace(du,`
${t}
void troikaOrigMain${e}() {`),s+=`
void main() {
  ${i}
  troikaOrigMain${e}();
  ${n}
}`),s}function I_(s,e){return s==="uniforms"?void 0:typeof e=="function"?e.toString():e}let F_=0;const pc=new Map;function O_(s){const e=JSON.stringify(s,I_);let t=pc.get(e);return t==null&&pc.set(e,t=++F_),t}/*!
Custom build of Typr.ts (https://github.com/fredli74/Typr.ts) for use in Troika text rendering.
Original MIT license applies: https://github.com/fredli74/Typr.ts/blob/master/LICENSE
*/function N_(){return typeof window>"u"&&(self.window=self),function(s){var e={parse:function(n){var r=e._bin,o=new Uint8Array(n);if(r.readASCII(o,0,4)=="ttcf"){var a=4;r.readUshort(o,a),a+=2,r.readUshort(o,a),a+=2;var l=r.readUint(o,a);a+=4;for(var c=[],u=0;u<l;u++){var h=r.readUint(o,a);a+=4,c.push(e._readFont(o,h))}return c}return[e._readFont(o,0)]},_readFont:function(n,r){var o=e._bin,a=r;o.readFixed(n,r),r+=4;var l=o.readUshort(n,r);r+=2,o.readUshort(n,r),r+=2,o.readUshort(n,r),r+=2,o.readUshort(n,r),r+=2;for(var c=["cmap","head","hhea","maxp","hmtx","name","OS/2","post","loca","glyf","kern","CFF ","GDEF","GPOS","GSUB","SVG "],u={_data:n,_offset:a},h={},d=0;d<l;d++){var p=o.readASCII(n,r,4);r+=4,o.readUint(n,r),r+=4;var g=o.readUint(n,r);r+=4;var _=o.readUint(n,r);r+=4,h[p]={offset:g,length:_}}for(d=0;d<c.length;d++){var m=c[d];h[m]&&(u[m.trim()]=e[m.trim()].parse(n,h[m].offset,h[m].length,u))}return u},_tabOffset:function(n,r,o){for(var a=e._bin,l=a.readUshort(n,o+4),c=o+12,u=0;u<l;u++){var h=a.readASCII(n,c,4);c+=4,a.readUint(n,c),c+=4;var d=a.readUint(n,c);if(c+=4,a.readUint(n,c),c+=4,h==r)return d}return 0}};e._bin={readFixed:function(n,r){return(n[r]<<8|n[r+1])+(n[r+2]<<8|n[r+3])/65540},readF2dot14:function(n,r){return e._bin.readShort(n,r)/16384},readInt:function(n,r){return e._bin._view(n).getInt32(r)},readInt8:function(n,r){return e._bin._view(n).getInt8(r)},readShort:function(n,r){return e._bin._view(n).getInt16(r)},readUshort:function(n,r){return e._bin._view(n).getUint16(r)},readUshorts:function(n,r,o){for(var a=[],l=0;l<o;l++)a.push(e._bin.readUshort(n,r+2*l));return a},readUint:function(n,r){return e._bin._view(n).getUint32(r)},readUint64:function(n,r){return 4294967296*e._bin.readUint(n,r)+e._bin.readUint(n,r+4)},readASCII:function(n,r,o){for(var a="",l=0;l<o;l++)a+=String.fromCharCode(n[r+l]);return a},readUnicode:function(n,r,o){for(var a="",l=0;l<o;l++){var c=n[r++]<<8|n[r++];a+=String.fromCharCode(c)}return a},_tdec:typeof window<"u"&&window.TextDecoder?new window.TextDecoder:null,readUTF8:function(n,r,o){var a=e._bin._tdec;return a&&r==0&&o==n.length?a.decode(n):e._bin.readASCII(n,r,o)},readBytes:function(n,r,o){for(var a=[],l=0;l<o;l++)a.push(n[r+l]);return a},readASCIIArray:function(n,r,o){for(var a=[],l=0;l<o;l++)a.push(String.fromCharCode(n[r+l]));return a},_view:function(n){return n._dataView||(n._dataView=n.buffer?new DataView(n.buffer,n.byteOffset,n.byteLength):new DataView(new Uint8Array(n).buffer))}},e._lctf={},e._lctf.parse=function(n,r,o,a,l){var c=e._bin,u={},h=r;c.readFixed(n,r),r+=4;var d=c.readUshort(n,r);r+=2;var p=c.readUshort(n,r);r+=2;var g=c.readUshort(n,r);return r+=2,u.scriptList=e._lctf.readScriptList(n,h+d),u.featureList=e._lctf.readFeatureList(n,h+p),u.lookupList=e._lctf.readLookupList(n,h+g,l),u},e._lctf.readLookupList=function(n,r,o){var a=e._bin,l=r,c=[],u=a.readUshort(n,r);r+=2;for(var h=0;h<u;h++){var d=a.readUshort(n,r);r+=2;var p=e._lctf.readLookupTable(n,l+d,o);c.push(p)}return c},e._lctf.readLookupTable=function(n,r,o){var a=e._bin,l=r,c={tabs:[]};c.ltype=a.readUshort(n,r),r+=2,c.flag=a.readUshort(n,r),r+=2;var u=a.readUshort(n,r);r+=2;for(var h=c.ltype,d=0;d<u;d++){var p=a.readUshort(n,r);r+=2;var g=o(n,h,l+p,c);c.tabs.push(g)}return c},e._lctf.numOfOnes=function(n){for(var r=0,o=0;o<32;o++)n>>>o&1&&r++;return r},e._lctf.readClassDef=function(n,r){var o=e._bin,a=[],l=o.readUshort(n,r);if(r+=2,l==1){var c=o.readUshort(n,r);r+=2;var u=o.readUshort(n,r);r+=2;for(var h=0;h<u;h++)a.push(c+h),a.push(c+h),a.push(o.readUshort(n,r)),r+=2}if(l==2){var d=o.readUshort(n,r);for(r+=2,h=0;h<d;h++)a.push(o.readUshort(n,r)),r+=2,a.push(o.readUshort(n,r)),r+=2,a.push(o.readUshort(n,r)),r+=2}return a},e._lctf.getInterval=function(n,r){for(var o=0;o<n.length;o+=3){var a=n[o],l=n[o+1];if(n[o+2],a<=r&&r<=l)return o}return-1},e._lctf.readCoverage=function(n,r){var o=e._bin,a={};a.fmt=o.readUshort(n,r),r+=2;var l=o.readUshort(n,r);return r+=2,a.fmt==1&&(a.tab=o.readUshorts(n,r,l)),a.fmt==2&&(a.tab=o.readUshorts(n,r,3*l)),a},e._lctf.coverageIndex=function(n,r){var o=n.tab;if(n.fmt==1)return o.indexOf(r);if(n.fmt==2){var a=e._lctf.getInterval(o,r);if(a!=-1)return o[a+2]+(r-o[a])}return-1},e._lctf.readFeatureList=function(n,r){var o=e._bin,a=r,l=[],c=o.readUshort(n,r);r+=2;for(var u=0;u<c;u++){var h=o.readASCII(n,r,4);r+=4;var d=o.readUshort(n,r);r+=2;var p=e._lctf.readFeatureTable(n,a+d);p.tag=h.trim(),l.push(p)}return l},e._lctf.readFeatureTable=function(n,r){var o=e._bin,a=r,l={},c=o.readUshort(n,r);r+=2,c>0&&(l.featureParams=a+c);var u=o.readUshort(n,r);r+=2,l.tab=[];for(var h=0;h<u;h++)l.tab.push(o.readUshort(n,r+2*h));return l},e._lctf.readScriptList=function(n,r){var o=e._bin,a=r,l={},c=o.readUshort(n,r);r+=2;for(var u=0;u<c;u++){var h=o.readASCII(n,r,4);r+=4;var d=o.readUshort(n,r);r+=2,l[h.trim()]=e._lctf.readScriptTable(n,a+d)}return l},e._lctf.readScriptTable=function(n,r){var o=e._bin,a=r,l={},c=o.readUshort(n,r);r+=2,c>0&&(l.default=e._lctf.readLangSysTable(n,a+c));var u=o.readUshort(n,r);r+=2;for(var h=0;h<u;h++){var d=o.readASCII(n,r,4);r+=4;var p=o.readUshort(n,r);r+=2,l[d.trim()]=e._lctf.readLangSysTable(n,a+p)}return l},e._lctf.readLangSysTable=function(n,r){var o=e._bin,a={};o.readUshort(n,r),r+=2,a.reqFeature=o.readUshort(n,r),r+=2;var l=o.readUshort(n,r);return r+=2,a.features=o.readUshorts(n,r,l),a},e.CFF={},e.CFF.parse=function(n,r,o){var a=e._bin;(n=new Uint8Array(n.buffer,r,o))[r=0],n[++r],n[++r],n[++r],r++;var l=[];r=e.CFF.readIndex(n,r,l);for(var c=[],u=0;u<l.length-1;u++)c.push(a.readASCII(n,r+l[u],l[u+1]-l[u]));r+=l[l.length-1];var h=[];r=e.CFF.readIndex(n,r,h);var d=[];for(u=0;u<h.length-1;u++)d.push(e.CFF.readDict(n,r+h[u],r+h[u+1]));r+=h[h.length-1];var p=d[0],g=[];r=e.CFF.readIndex(n,r,g);var _=[];for(u=0;u<g.length-1;u++)_.push(a.readASCII(n,r+g[u],g[u+1]-g[u]));if(r+=g[g.length-1],e.CFF.readSubrs(n,r,p),p.CharStrings){r=p.CharStrings,g=[],r=e.CFF.readIndex(n,r,g);var m=[];for(u=0;u<g.length-1;u++)m.push(a.readBytes(n,r+g[u],g[u+1]-g[u]));p.CharStrings=m}if(p.ROS){r=p.FDArray;var f=[];for(r=e.CFF.readIndex(n,r,f),p.FDArray=[],u=0;u<f.length-1;u++){var x=e.CFF.readDict(n,r+f[u],r+f[u+1]);e.CFF._readFDict(n,x,_),p.FDArray.push(x)}r+=f[f.length-1],r=p.FDSelect,p.FDSelect=[];var v=n[r];if(r++,v!=3)throw v;var S=a.readUshort(n,r);for(r+=2,u=0;u<S+1;u++)p.FDSelect.push(a.readUshort(n,r),n[r+2]),r+=3}return p.Encoding&&(p.Encoding=e.CFF.readEncoding(n,p.Encoding,p.CharStrings.length)),p.charset&&(p.charset=e.CFF.readCharset(n,p.charset,p.CharStrings.length)),e.CFF._readFDict(n,p,_),p},e.CFF._readFDict=function(n,r,o){var a;for(var l in r.Private&&(a=r.Private[1],r.Private=e.CFF.readDict(n,a,a+r.Private[0]),r.Private.Subrs&&e.CFF.readSubrs(n,a+r.Private.Subrs,r.Private)),r)["FamilyName","FontName","FullName","Notice","version","Copyright"].indexOf(l)!=-1&&(r[l]=o[r[l]-426+35])},e.CFF.readSubrs=function(n,r,o){var a=e._bin,l=[];r=e.CFF.readIndex(n,r,l);var c,u=l.length;c=u<1240?107:u<33900?1131:32768,o.Bias=c,o.Subrs=[];for(var h=0;h<l.length-1;h++)o.Subrs.push(a.readBytes(n,r+l[h],l[h+1]-l[h]))},e.CFF.tableSE=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,0,111,112,113,114,0,115,116,117,118,119,120,121,122,0,123,0,124,125,126,127,128,129,130,131,0,132,133,0,134,135,136,137,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,138,0,139,0,0,0,0,140,141,142,143,0,0,0,0,0,144,0,0,0,145,0,0,146,147,148,149,0,0,0,0],e.CFF.glyphByUnicode=function(n,r){for(var o=0;o<n.charset.length;o++)if(n.charset[o]==r)return o;return-1},e.CFF.glyphBySE=function(n,r){return r<0||r>255?-1:e.CFF.glyphByUnicode(n,e.CFF.tableSE[r])},e.CFF.readEncoding=function(n,r,o){e._bin;var a=[".notdef"],l=n[r];if(r++,l!=0)throw"error: unknown encoding format: "+l;var c=n[r];r++;for(var u=0;u<c;u++)a.push(n[r+u]);return a},e.CFF.readCharset=function(n,r,o){var a=e._bin,l=[".notdef"],c=n[r];if(r++,c==0)for(var u=0;u<o;u++){var h=a.readUshort(n,r);r+=2,l.push(h)}else{if(c!=1&&c!=2)throw"error: format: "+c;for(;l.length<o;){h=a.readUshort(n,r),r+=2;var d=0;for(c==1?(d=n[r],r++):(d=a.readUshort(n,r),r+=2),u=0;u<=d;u++)l.push(h),h++}}return l},e.CFF.readIndex=function(n,r,o){var a=e._bin,l=a.readUshort(n,r)+1,c=n[r+=2];if(r++,c==1)for(var u=0;u<l;u++)o.push(n[r+u]);else if(c==2)for(u=0;u<l;u++)o.push(a.readUshort(n,r+2*u));else if(c==3)for(u=0;u<l;u++)o.push(16777215&a.readUint(n,r+3*u-1));else if(l!=1)throw"unsupported offset size: "+c+", count: "+l;return(r+=l*c)-1},e.CFF.getCharString=function(n,r,o){var a=e._bin,l=n[r],c=n[r+1];n[r+2],n[r+3],n[r+4];var u=1,h=null,d=null;l<=20&&(h=l,u=1),l==12&&(h=100*l+c,u=2),21<=l&&l<=27&&(h=l,u=1),l==28&&(d=a.readShort(n,r+1),u=3),29<=l&&l<=31&&(h=l,u=1),32<=l&&l<=246&&(d=l-139,u=1),247<=l&&l<=250&&(d=256*(l-247)+c+108,u=2),251<=l&&l<=254&&(d=256*-(l-251)-c-108,u=2),l==255&&(d=a.readInt(n,r+1)/65535,u=5),o.val=d??"o"+h,o.size=u},e.CFF.readCharString=function(n,r,o){for(var a=r+o,l=e._bin,c=[];r<a;){var u=n[r],h=n[r+1];n[r+2],n[r+3],n[r+4];var d=1,p=null,g=null;u<=20&&(p=u,d=1),u==12&&(p=100*u+h,d=2),u!=19&&u!=20||(p=u,d=2),21<=u&&u<=27&&(p=u,d=1),u==28&&(g=l.readShort(n,r+1),d=3),29<=u&&u<=31&&(p=u,d=1),32<=u&&u<=246&&(g=u-139,d=1),247<=u&&u<=250&&(g=256*(u-247)+h+108,d=2),251<=u&&u<=254&&(g=256*-(u-251)-h-108,d=2),u==255&&(g=l.readInt(n,r+1)/65535,d=5),c.push(g??"o"+p),r+=d}return c},e.CFF.readDict=function(n,r,o){for(var a=e._bin,l={},c=[];r<o;){var u=n[r],h=n[r+1];n[r+2],n[r+3],n[r+4];var d=1,p=null,g=null;if(u==28&&(g=a.readShort(n,r+1),d=3),u==29&&(g=a.readInt(n,r+1),d=5),32<=u&&u<=246&&(g=u-139,d=1),247<=u&&u<=250&&(g=256*(u-247)+h+108,d=2),251<=u&&u<=254&&(g=256*-(u-251)-h-108,d=2),u==255)throw g=a.readInt(n,r+1)/65535,d=5,"unknown number";if(u==30){var _=[];for(d=1;;){var m=n[r+d];d++;var f=m>>4,x=15&m;if(f!=15&&_.push(f),x!=15&&_.push(x),x==15)break}for(var v="",S=[0,1,2,3,4,5,6,7,8,9,".","e","e-","reserved","-","endOfNumber"],T=0;T<_.length;T++)v+=S[_[T]];g=parseFloat(v)}u<=21&&(p=["version","Notice","FullName","FamilyName","Weight","FontBBox","BlueValues","OtherBlues","FamilyBlues","FamilyOtherBlues","StdHW","StdVW","escape","UniqueID","XUID","charset","Encoding","CharStrings","Private","Subrs","defaultWidthX","nominalWidthX"][u],d=1,u==12&&(p=["Copyright","isFixedPitch","ItalicAngle","UnderlinePosition","UnderlineThickness","PaintType","CharstringType","FontMatrix","StrokeWidth","BlueScale","BlueShift","BlueFuzz","StemSnapH","StemSnapV","ForceBold",0,0,"LanguageGroup","ExpansionFactor","initialRandomSeed","SyntheticBase","PostScript","BaseFontName","BaseFontBlend",0,0,0,0,0,0,"ROS","CIDFontVersion","CIDFontRevision","CIDFontType","CIDCount","UIDBase","FDArray","FDSelect","FontName"][h],d=2)),p!=null?(l[p]=c.length==1?c[0]:c,c=[]):c.push(g),r+=d}return l},e.cmap={},e.cmap.parse=function(n,r,o){n=new Uint8Array(n.buffer,r,o),r=0;var a=e._bin,l={};a.readUshort(n,r),r+=2;var c=a.readUshort(n,r);r+=2;var u=[];l.tables=[];for(var h=0;h<c;h++){var d=a.readUshort(n,r);r+=2;var p=a.readUshort(n,r);r+=2;var g=a.readUint(n,r);r+=4;var _="p"+d+"e"+p,m=u.indexOf(g);if(m==-1){var f;m=l.tables.length,u.push(g);var x=a.readUshort(n,g);x==0?f=e.cmap.parse0(n,g):x==4?f=e.cmap.parse4(n,g):x==6?f=e.cmap.parse6(n,g):x==12?f=e.cmap.parse12(n,g):console.debug("unknown format: "+x,d,p,g),l.tables.push(f)}if(l[_]!=null)throw"multiple tables for one platform+encoding";l[_]=m}return l},e.cmap.parse0=function(n,r){var o=e._bin,a={};a.format=o.readUshort(n,r),r+=2;var l=o.readUshort(n,r);r+=2,o.readUshort(n,r),r+=2,a.map=[];for(var c=0;c<l-6;c++)a.map.push(n[r+c]);return a},e.cmap.parse4=function(n,r){var o=e._bin,a=r,l={};l.format=o.readUshort(n,r),r+=2;var c=o.readUshort(n,r);r+=2,o.readUshort(n,r),r+=2;var u=o.readUshort(n,r);r+=2;var h=u/2;l.searchRange=o.readUshort(n,r),r+=2,l.entrySelector=o.readUshort(n,r),r+=2,l.rangeShift=o.readUshort(n,r),r+=2,l.endCount=o.readUshorts(n,r,h),r+=2*h,r+=2,l.startCount=o.readUshorts(n,r,h),r+=2*h,l.idDelta=[];for(var d=0;d<h;d++)l.idDelta.push(o.readShort(n,r)),r+=2;for(l.idRangeOffset=o.readUshorts(n,r,h),r+=2*h,l.glyphIdArray=[];r<a+c;)l.glyphIdArray.push(o.readUshort(n,r)),r+=2;return l},e.cmap.parse6=function(n,r){var o=e._bin,a={};a.format=o.readUshort(n,r),r+=2,o.readUshort(n,r),r+=2,o.readUshort(n,r),r+=2,a.firstCode=o.readUshort(n,r),r+=2;var l=o.readUshort(n,r);r+=2,a.glyphIdArray=[];for(var c=0;c<l;c++)a.glyphIdArray.push(o.readUshort(n,r)),r+=2;return a},e.cmap.parse12=function(n,r){var o=e._bin,a={};a.format=o.readUshort(n,r),r+=2,r+=2,o.readUint(n,r),r+=4,o.readUint(n,r),r+=4;var l=o.readUint(n,r);r+=4,a.groups=[];for(var c=0;c<l;c++){var u=r+12*c,h=o.readUint(n,u+0),d=o.readUint(n,u+4),p=o.readUint(n,u+8);a.groups.push([h,d,p])}return a},e.glyf={},e.glyf.parse=function(n,r,o,a){for(var l=[],c=0;c<a.maxp.numGlyphs;c++)l.push(null);return l},e.glyf._parseGlyf=function(n,r){var o=e._bin,a=n._data,l=e._tabOffset(a,"glyf",n._offset)+n.loca[r];if(n.loca[r]==n.loca[r+1])return null;var c={};if(c.noc=o.readShort(a,l),l+=2,c.xMin=o.readShort(a,l),l+=2,c.yMin=o.readShort(a,l),l+=2,c.xMax=o.readShort(a,l),l+=2,c.yMax=o.readShort(a,l),l+=2,c.xMin>=c.xMax||c.yMin>=c.yMax)return null;if(c.noc>0){c.endPts=[];for(var u=0;u<c.noc;u++)c.endPts.push(o.readUshort(a,l)),l+=2;var h=o.readUshort(a,l);if(l+=2,a.length-l<h)return null;c.instructions=o.readBytes(a,l,h),l+=h;var d=c.endPts[c.noc-1]+1;for(c.flags=[],u=0;u<d;u++){var p=a[l];if(l++,c.flags.push(p),(8&p)!=0){var g=a[l];l++;for(var _=0;_<g;_++)c.flags.push(p),u++}}for(c.xs=[],u=0;u<d;u++){var m=(2&c.flags[u])!=0,f=(16&c.flags[u])!=0;m?(c.xs.push(f?a[l]:-a[l]),l++):f?c.xs.push(0):(c.xs.push(o.readShort(a,l)),l+=2)}for(c.ys=[],u=0;u<d;u++)m=(4&c.flags[u])!=0,f=(32&c.flags[u])!=0,m?(c.ys.push(f?a[l]:-a[l]),l++):f?c.ys.push(0):(c.ys.push(o.readShort(a,l)),l+=2);var x=0,v=0;for(u=0;u<d;u++)x+=c.xs[u],v+=c.ys[u],c.xs[u]=x,c.ys[u]=v}else{var S;c.parts=[];do{S=o.readUshort(a,l),l+=2;var T={m:{a:1,b:0,c:0,d:1,tx:0,ty:0},p1:-1,p2:-1};if(c.parts.push(T),T.glyphIndex=o.readUshort(a,l),l+=2,1&S){var L=o.readShort(a,l);l+=2;var E=o.readShort(a,l);l+=2}else L=o.readInt8(a,l),l++,E=o.readInt8(a,l),l++;2&S?(T.m.tx=L,T.m.ty=E):(T.p1=L,T.p2=E),8&S?(T.m.a=T.m.d=o.readF2dot14(a,l),l+=2):64&S?(T.m.a=o.readF2dot14(a,l),l+=2,T.m.d=o.readF2dot14(a,l),l+=2):128&S&&(T.m.a=o.readF2dot14(a,l),l+=2,T.m.b=o.readF2dot14(a,l),l+=2,T.m.c=o.readF2dot14(a,l),l+=2,T.m.d=o.readF2dot14(a,l),l+=2)}while(32&S);if(256&S){var D=o.readUshort(a,l);for(l+=2,c.instr=[],u=0;u<D;u++)c.instr.push(a[l]),l++}}return c},e.GDEF={},e.GDEF.parse=function(n,r,o,a){var l=r;r+=4;var c=e._bin.readUshort(n,r);return{glyphClassDef:c===0?null:e._lctf.readClassDef(n,l+c)}},e.GPOS={},e.GPOS.parse=function(n,r,o,a){return e._lctf.parse(n,r,o,a,e.GPOS.subt)},e.GPOS.subt=function(n,r,o,a){var l=e._bin,c=o,u={};if(u.fmt=l.readUshort(n,o),o+=2,r==1||r==2||r==3||r==7||r==8&&u.fmt<=2){var h=l.readUshort(n,o);o+=2,u.coverage=e._lctf.readCoverage(n,h+c)}if(r==1&&u.fmt==1){var d=l.readUshort(n,o);o+=2,d!=0&&(u.pos=e.GPOS.readValueRecord(n,o,d))}else if(r==2&&u.fmt>=1&&u.fmt<=2){d=l.readUshort(n,o),o+=2;var p=l.readUshort(n,o);o+=2;var g=e._lctf.numOfOnes(d),_=e._lctf.numOfOnes(p);if(u.fmt==1){u.pairsets=[];var m=l.readUshort(n,o);o+=2;for(var f=0;f<m;f++){var x=c+l.readUshort(n,o);o+=2;var v=l.readUshort(n,x);x+=2;for(var S=[],T=0;T<v;T++){var L=l.readUshort(n,x);x+=2,d!=0&&(U=e.GPOS.readValueRecord(n,x,d),x+=2*g),p!=0&&(z=e.GPOS.readValueRecord(n,x,p),x+=2*_),S.push({gid2:L,val1:U,val2:z})}u.pairsets.push(S)}}if(u.fmt==2){var E=l.readUshort(n,o);o+=2;var D=l.readUshort(n,o);o+=2;var M=l.readUshort(n,o);o+=2;var A=l.readUshort(n,o);for(o+=2,u.classDef1=e._lctf.readClassDef(n,c+E),u.classDef2=e._lctf.readClassDef(n,c+D),u.matrix=[],f=0;f<M;f++){var q=[];for(T=0;T<A;T++){var U=null,z=null;d!=0&&(U=e.GPOS.readValueRecord(n,o,d),o+=2*g),p!=0&&(z=e.GPOS.readValueRecord(n,o,p),o+=2*_),q.push({val1:U,val2:z})}u.matrix.push(q)}}}else if(r==4&&u.fmt==1)u.markCoverage=e._lctf.readCoverage(n,l.readUshort(n,o)+c),u.baseCoverage=e._lctf.readCoverage(n,l.readUshort(n,o+2)+c),u.markClassCount=l.readUshort(n,o+4),u.markArray=e.GPOS.readMarkArray(n,l.readUshort(n,o+6)+c),u.baseArray=e.GPOS.readBaseArray(n,l.readUshort(n,o+8)+c,u.markClassCount);else if(r==6&&u.fmt==1)u.mark1Coverage=e._lctf.readCoverage(n,l.readUshort(n,o)+c),u.mark2Coverage=e._lctf.readCoverage(n,l.readUshort(n,o+2)+c),u.markClassCount=l.readUshort(n,o+4),u.mark1Array=e.GPOS.readMarkArray(n,l.readUshort(n,o+6)+c),u.mark2Array=e.GPOS.readBaseArray(n,l.readUshort(n,o+8)+c,u.markClassCount);else{if(r==9&&u.fmt==1){var C=l.readUshort(n,o);o+=2;var B=l.readUint(n,o);if(o+=4,a.ltype==9)a.ltype=C;else if(a.ltype!=C)throw"invalid extension substitution";return e.GPOS.subt(n,a.ltype,c+B)}console.debug("unsupported GPOS table LookupType",r,"format",u.fmt)}return u},e.GPOS.readValueRecord=function(n,r,o){var a=e._bin,l=[];return l.push(1&o?a.readShort(n,r):0),r+=1&o?2:0,l.push(2&o?a.readShort(n,r):0),r+=2&o?2:0,l.push(4&o?a.readShort(n,r):0),r+=4&o?2:0,l.push(8&o?a.readShort(n,r):0),r+=8&o?2:0,l},e.GPOS.readBaseArray=function(n,r,o){var a=e._bin,l=[],c=r,u=a.readUshort(n,r);r+=2;for(var h=0;h<u;h++){for(var d=[],p=0;p<o;p++)d.push(e.GPOS.readAnchorRecord(n,c+a.readUshort(n,r))),r+=2;l.push(d)}return l},e.GPOS.readMarkArray=function(n,r){var o=e._bin,a=[],l=r,c=o.readUshort(n,r);r+=2;for(var u=0;u<c;u++){var h=e.GPOS.readAnchorRecord(n,o.readUshort(n,r+2)+l);h.markClass=o.readUshort(n,r),a.push(h),r+=4}return a},e.GPOS.readAnchorRecord=function(n,r){var o=e._bin,a={};return a.fmt=o.readUshort(n,r),a.x=o.readShort(n,r+2),a.y=o.readShort(n,r+4),a},e.GSUB={},e.GSUB.parse=function(n,r,o,a){return e._lctf.parse(n,r,o,a,e.GSUB.subt)},e.GSUB.subt=function(n,r,o,a){var l=e._bin,c=o,u={};if(u.fmt=l.readUshort(n,o),o+=2,r!=1&&r!=2&&r!=4&&r!=5&&r!=6)return null;if(r==1||r==2||r==4||r==5&&u.fmt<=2||r==6&&u.fmt<=2){var h=l.readUshort(n,o);o+=2,u.coverage=e._lctf.readCoverage(n,c+h)}if(r==1&&u.fmt>=1&&u.fmt<=2){if(u.fmt==1)u.delta=l.readShort(n,o),o+=2;else if(u.fmt==2){var d=l.readUshort(n,o);o+=2,u.newg=l.readUshorts(n,o,d),o+=2*u.newg.length}}else if(r==2&&u.fmt==1){d=l.readUshort(n,o),o+=2,u.seqs=[];for(var p=0;p<d;p++){var g=l.readUshort(n,o)+c;o+=2;var _=l.readUshort(n,g);u.seqs.push(l.readUshorts(n,g+2,_))}}else if(r==4)for(u.vals=[],d=l.readUshort(n,o),o+=2,p=0;p<d;p++){var m=l.readUshort(n,o);o+=2,u.vals.push(e.GSUB.readLigatureSet(n,c+m))}else if(r==5&&u.fmt==2){if(u.fmt==2){var f=l.readUshort(n,o);o+=2,u.cDef=e._lctf.readClassDef(n,c+f),u.scset=[];var x=l.readUshort(n,o);for(o+=2,p=0;p<x;p++){var v=l.readUshort(n,o);o+=2,u.scset.push(v==0?null:e.GSUB.readSubClassSet(n,c+v))}}}else if(r==6&&u.fmt==3){if(u.fmt==3){for(p=0;p<3;p++){d=l.readUshort(n,o),o+=2;for(var S=[],T=0;T<d;T++)S.push(e._lctf.readCoverage(n,c+l.readUshort(n,o+2*T)));o+=2*d,p==0&&(u.backCvg=S),p==1&&(u.inptCvg=S),p==2&&(u.ahedCvg=S)}d=l.readUshort(n,o),o+=2,u.lookupRec=e.GSUB.readSubstLookupRecords(n,o,d)}}else{if(r==7&&u.fmt==1){var L=l.readUshort(n,o);o+=2;var E=l.readUint(n,o);if(o+=4,a.ltype==9)a.ltype=L;else if(a.ltype!=L)throw"invalid extension substitution";return e.GSUB.subt(n,a.ltype,c+E)}console.debug("unsupported GSUB table LookupType",r,"format",u.fmt)}return u},e.GSUB.readSubClassSet=function(n,r){var o=e._bin.readUshort,a=r,l=[],c=o(n,r);r+=2;for(var u=0;u<c;u++){var h=o(n,r);r+=2,l.push(e.GSUB.readSubClassRule(n,a+h))}return l},e.GSUB.readSubClassRule=function(n,r){var o=e._bin.readUshort,a={},l=o(n,r),c=o(n,r+=2);r+=2,a.input=[];for(var u=0;u<l-1;u++)a.input.push(o(n,r)),r+=2;return a.substLookupRecords=e.GSUB.readSubstLookupRecords(n,r,c),a},e.GSUB.readSubstLookupRecords=function(n,r,o){for(var a=e._bin.readUshort,l=[],c=0;c<o;c++)l.push(a(n,r),a(n,r+2)),r+=4;return l},e.GSUB.readChainSubClassSet=function(n,r){var o=e._bin,a=r,l=[],c=o.readUshort(n,r);r+=2;for(var u=0;u<c;u++){var h=o.readUshort(n,r);r+=2,l.push(e.GSUB.readChainSubClassRule(n,a+h))}return l},e.GSUB.readChainSubClassRule=function(n,r){for(var o=e._bin,a={},l=["backtrack","input","lookahead"],c=0;c<l.length;c++){var u=o.readUshort(n,r);r+=2,c==1&&u--,a[l[c]]=o.readUshorts(n,r,u),r+=2*a[l[c]].length}return u=o.readUshort(n,r),r+=2,a.subst=o.readUshorts(n,r,2*u),r+=2*a.subst.length,a},e.GSUB.readLigatureSet=function(n,r){var o=e._bin,a=r,l=[],c=o.readUshort(n,r);r+=2;for(var u=0;u<c;u++){var h=o.readUshort(n,r);r+=2,l.push(e.GSUB.readLigature(n,a+h))}return l},e.GSUB.readLigature=function(n,r){var o=e._bin,a={chain:[]};a.nglyph=o.readUshort(n,r),r+=2;var l=o.readUshort(n,r);r+=2;for(var c=0;c<l-1;c++)a.chain.push(o.readUshort(n,r)),r+=2;return a},e.head={},e.head.parse=function(n,r,o){var a=e._bin,l={};return a.readFixed(n,r),r+=4,l.fontRevision=a.readFixed(n,r),r+=4,a.readUint(n,r),r+=4,a.readUint(n,r),r+=4,l.flags=a.readUshort(n,r),r+=2,l.unitsPerEm=a.readUshort(n,r),r+=2,l.created=a.readUint64(n,r),r+=8,l.modified=a.readUint64(n,r),r+=8,l.xMin=a.readShort(n,r),r+=2,l.yMin=a.readShort(n,r),r+=2,l.xMax=a.readShort(n,r),r+=2,l.yMax=a.readShort(n,r),r+=2,l.macStyle=a.readUshort(n,r),r+=2,l.lowestRecPPEM=a.readUshort(n,r),r+=2,l.fontDirectionHint=a.readShort(n,r),r+=2,l.indexToLocFormat=a.readShort(n,r),r+=2,l.glyphDataFormat=a.readShort(n,r),r+=2,l},e.hhea={},e.hhea.parse=function(n,r,o){var a=e._bin,l={};return a.readFixed(n,r),r+=4,l.ascender=a.readShort(n,r),r+=2,l.descender=a.readShort(n,r),r+=2,l.lineGap=a.readShort(n,r),r+=2,l.advanceWidthMax=a.readUshort(n,r),r+=2,l.minLeftSideBearing=a.readShort(n,r),r+=2,l.minRightSideBearing=a.readShort(n,r),r+=2,l.xMaxExtent=a.readShort(n,r),r+=2,l.caretSlopeRise=a.readShort(n,r),r+=2,l.caretSlopeRun=a.readShort(n,r),r+=2,l.caretOffset=a.readShort(n,r),r+=2,r+=8,l.metricDataFormat=a.readShort(n,r),r+=2,l.numberOfHMetrics=a.readUshort(n,r),r+=2,l},e.hmtx={},e.hmtx.parse=function(n,r,o,a){for(var l=e._bin,c={aWidth:[],lsBearing:[]},u=0,h=0,d=0;d<a.maxp.numGlyphs;d++)d<a.hhea.numberOfHMetrics&&(u=l.readUshort(n,r),r+=2,h=l.readShort(n,r),r+=2),c.aWidth.push(u),c.lsBearing.push(h);return c},e.kern={},e.kern.parse=function(n,r,o,a){var l=e._bin,c=l.readUshort(n,r);if(r+=2,c==1)return e.kern.parseV1(n,r-2,o,a);var u=l.readUshort(n,r);r+=2;for(var h={glyph1:[],rval:[]},d=0;d<u;d++){r+=2,o=l.readUshort(n,r),r+=2;var p=l.readUshort(n,r);r+=2;var g=p>>>8;if((g&=15)!=0)throw"unknown kern table format: "+g;r=e.kern.readFormat0(n,r,h)}return h},e.kern.parseV1=function(n,r,o,a){var l=e._bin;l.readFixed(n,r),r+=4;var c=l.readUint(n,r);r+=4;for(var u={glyph1:[],rval:[]},h=0;h<c;h++){l.readUint(n,r),r+=4;var d=l.readUshort(n,r);r+=2,l.readUshort(n,r),r+=2;var p=d>>>8;if((p&=15)!=0)throw"unknown kern table format: "+p;r=e.kern.readFormat0(n,r,u)}return u},e.kern.readFormat0=function(n,r,o){var a=e._bin,l=-1,c=a.readUshort(n,r);r+=2,a.readUshort(n,r),r+=2,a.readUshort(n,r),r+=2,a.readUshort(n,r),r+=2;for(var u=0;u<c;u++){var h=a.readUshort(n,r);r+=2;var d=a.readUshort(n,r);r+=2;var p=a.readShort(n,r);r+=2,h!=l&&(o.glyph1.push(h),o.rval.push({glyph2:[],vals:[]}));var g=o.rval[o.rval.length-1];g.glyph2.push(d),g.vals.push(p),l=h}return r},e.loca={},e.loca.parse=function(n,r,o,a){var l=e._bin,c=[],u=a.head.indexToLocFormat,h=a.maxp.numGlyphs+1;if(u==0)for(var d=0;d<h;d++)c.push(l.readUshort(n,r+(d<<1))<<1);if(u==1)for(d=0;d<h;d++)c.push(l.readUint(n,r+(d<<2)));return c},e.maxp={},e.maxp.parse=function(n,r,o){var a=e._bin,l={},c=a.readUint(n,r);return r+=4,l.numGlyphs=a.readUshort(n,r),r+=2,c==65536&&(l.maxPoints=a.readUshort(n,r),r+=2,l.maxContours=a.readUshort(n,r),r+=2,l.maxCompositePoints=a.readUshort(n,r),r+=2,l.maxCompositeContours=a.readUshort(n,r),r+=2,l.maxZones=a.readUshort(n,r),r+=2,l.maxTwilightPoints=a.readUshort(n,r),r+=2,l.maxStorage=a.readUshort(n,r),r+=2,l.maxFunctionDefs=a.readUshort(n,r),r+=2,l.maxInstructionDefs=a.readUshort(n,r),r+=2,l.maxStackElements=a.readUshort(n,r),r+=2,l.maxSizeOfInstructions=a.readUshort(n,r),r+=2,l.maxComponentElements=a.readUshort(n,r),r+=2,l.maxComponentDepth=a.readUshort(n,r),r+=2),l},e.name={},e.name.parse=function(n,r,o){var a=e._bin,l={};a.readUshort(n,r),r+=2;var c=a.readUshort(n,r);r+=2,a.readUshort(n,r);for(var u,h=["copyright","fontFamily","fontSubfamily","ID","fullName","version","postScriptName","trademark","manufacturer","designer","description","urlVendor","urlDesigner","licence","licenceURL","---","typoFamilyName","typoSubfamilyName","compatibleFull","sampleText","postScriptCID","wwsFamilyName","wwsSubfamilyName","lightPalette","darkPalette"],d=r+=2,p=0;p<c;p++){var g=a.readUshort(n,r);r+=2;var _=a.readUshort(n,r);r+=2;var m=a.readUshort(n,r);r+=2;var f=a.readUshort(n,r);r+=2;var x=a.readUshort(n,r);r+=2;var v=a.readUshort(n,r);r+=2;var S,T=h[f],L=d+12*c+v;if(g==0)S=a.readUnicode(n,L,x/2);else if(g==3&&_==0)S=a.readUnicode(n,L,x/2);else if(_==0)S=a.readASCII(n,L,x);else if(_==1)S=a.readUnicode(n,L,x/2);else if(_==3)S=a.readUnicode(n,L,x/2);else{if(g!=1)throw"unknown encoding "+_+", platformID: "+g;S=a.readASCII(n,L,x),console.debug("reading unknown MAC encoding "+_+" as ASCII")}var E="p"+g+","+m.toString(16);l[E]==null&&(l[E]={}),l[E][T!==void 0?T:f]=S,l[E]._lang=m}for(var D in l)if(l[D].postScriptName!=null&&l[D]._lang==1033)return l[D];for(var D in l)if(l[D].postScriptName!=null&&l[D]._lang==0)return l[D];for(var D in l)if(l[D].postScriptName!=null&&l[D]._lang==3084)return l[D];for(var D in l)if(l[D].postScriptName!=null)return l[D];for(var D in l){u=D;break}return console.debug("returning name table with languageID "+l[u]._lang),l[u]},e["OS/2"]={},e["OS/2"].parse=function(n,r,o){var a=e._bin.readUshort(n,r);r+=2;var l={};if(a==0)e["OS/2"].version0(n,r,l);else if(a==1)e["OS/2"].version1(n,r,l);else if(a==2||a==3||a==4)e["OS/2"].version2(n,r,l);else{if(a!=5)throw"unknown OS/2 table version: "+a;e["OS/2"].version5(n,r,l)}return l},e["OS/2"].version0=function(n,r,o){var a=e._bin;return o.xAvgCharWidth=a.readShort(n,r),r+=2,o.usWeightClass=a.readUshort(n,r),r+=2,o.usWidthClass=a.readUshort(n,r),r+=2,o.fsType=a.readUshort(n,r),r+=2,o.ySubscriptXSize=a.readShort(n,r),r+=2,o.ySubscriptYSize=a.readShort(n,r),r+=2,o.ySubscriptXOffset=a.readShort(n,r),r+=2,o.ySubscriptYOffset=a.readShort(n,r),r+=2,o.ySuperscriptXSize=a.readShort(n,r),r+=2,o.ySuperscriptYSize=a.readShort(n,r),r+=2,o.ySuperscriptXOffset=a.readShort(n,r),r+=2,o.ySuperscriptYOffset=a.readShort(n,r),r+=2,o.yStrikeoutSize=a.readShort(n,r),r+=2,o.yStrikeoutPosition=a.readShort(n,r),r+=2,o.sFamilyClass=a.readShort(n,r),r+=2,o.panose=a.readBytes(n,r,10),r+=10,o.ulUnicodeRange1=a.readUint(n,r),r+=4,o.ulUnicodeRange2=a.readUint(n,r),r+=4,o.ulUnicodeRange3=a.readUint(n,r),r+=4,o.ulUnicodeRange4=a.readUint(n,r),r+=4,o.achVendID=[a.readInt8(n,r),a.readInt8(n,r+1),a.readInt8(n,r+2),a.readInt8(n,r+3)],r+=4,o.fsSelection=a.readUshort(n,r),r+=2,o.usFirstCharIndex=a.readUshort(n,r),r+=2,o.usLastCharIndex=a.readUshort(n,r),r+=2,o.sTypoAscender=a.readShort(n,r),r+=2,o.sTypoDescender=a.readShort(n,r),r+=2,o.sTypoLineGap=a.readShort(n,r),r+=2,o.usWinAscent=a.readUshort(n,r),r+=2,o.usWinDescent=a.readUshort(n,r),r+=2},e["OS/2"].version1=function(n,r,o){var a=e._bin;return r=e["OS/2"].version0(n,r,o),o.ulCodePageRange1=a.readUint(n,r),r+=4,o.ulCodePageRange2=a.readUint(n,r),r+=4},e["OS/2"].version2=function(n,r,o){var a=e._bin;return r=e["OS/2"].version1(n,r,o),o.sxHeight=a.readShort(n,r),r+=2,o.sCapHeight=a.readShort(n,r),r+=2,o.usDefault=a.readUshort(n,r),r+=2,o.usBreak=a.readUshort(n,r),r+=2,o.usMaxContext=a.readUshort(n,r),r+=2},e["OS/2"].version5=function(n,r,o){var a=e._bin;return r=e["OS/2"].version2(n,r,o),o.usLowerOpticalPointSize=a.readUshort(n,r),r+=2,o.usUpperOpticalPointSize=a.readUshort(n,r),r+=2},e.post={},e.post.parse=function(n,r,o){var a=e._bin,l={};return l.version=a.readFixed(n,r),r+=4,l.italicAngle=a.readFixed(n,r),r+=4,l.underlinePosition=a.readShort(n,r),r+=2,l.underlineThickness=a.readShort(n,r),r+=2,l},e==null&&(e={}),e.U==null&&(e.U={}),e.U.codeToGlyph=function(n,r){var o=n.cmap,a=-1;if(o.p0e4!=null?a=o.p0e4:o.p3e1!=null?a=o.p3e1:o.p1e0!=null?a=o.p1e0:o.p0e3!=null&&(a=o.p0e3),a==-1)throw"no familiar platform and encoding!";var l=o.tables[a];if(l.format==0)return r>=l.map.length?0:l.map[r];if(l.format==4){for(var c=-1,u=0;u<l.endCount.length;u++)if(r<=l.endCount[u]){c=u;break}return c==-1||l.startCount[c]>r?0:65535&(l.idRangeOffset[c]!=0?l.glyphIdArray[r-l.startCount[c]+(l.idRangeOffset[c]>>1)-(l.idRangeOffset.length-c)]:r+l.idDelta[c])}if(l.format==12){if(r>l.groups[l.groups.length-1][1])return 0;for(u=0;u<l.groups.length;u++){var h=l.groups[u];if(h[0]<=r&&r<=h[1])return h[2]+(r-h[0])}return 0}throw"unknown cmap table format "+l.format},e.U.glyphToPath=function(n,r){var o={cmds:[],crds:[]};if(n.SVG&&n.SVG.entries[r]){var a=n.SVG.entries[r];return a==null?o:(typeof a=="string"&&(a=e.SVG.toPath(a),n.SVG.entries[r]=a),a)}if(n.CFF){var l={x:0,y:0,stack:[],nStems:0,haveWidth:!1,width:n.CFF.Private?n.CFF.Private.defaultWidthX:0,open:!1},c=n.CFF,u=n.CFF.Private;if(c.ROS){for(var h=0;c.FDSelect[h+2]<=r;)h+=2;u=c.FDArray[c.FDSelect[h+1]].Private}e.U._drawCFF(n.CFF.CharStrings[r],l,c,u,o)}else n.glyf&&e.U._drawGlyf(r,n,o);return o},e.U._drawGlyf=function(n,r,o){var a=r.glyf[n];a==null&&(a=r.glyf[n]=e.glyf._parseGlyf(r,n)),a!=null&&(a.noc>-1?e.U._simpleGlyph(a,o):e.U._compoGlyph(a,r,o))},e.U._simpleGlyph=function(n,r){for(var o=0;o<n.noc;o++){for(var a=o==0?0:n.endPts[o-1]+1,l=n.endPts[o],c=a;c<=l;c++){var u=c==a?l:c-1,h=c==l?a:c+1,d=1&n.flags[c],p=1&n.flags[u],g=1&n.flags[h],_=n.xs[c],m=n.ys[c];if(c==a)if(d){if(!p){e.U.P.moveTo(r,_,m);continue}e.U.P.moveTo(r,n.xs[u],n.ys[u])}else p?e.U.P.moveTo(r,n.xs[u],n.ys[u]):e.U.P.moveTo(r,(n.xs[u]+_)/2,(n.ys[u]+m)/2);d?p&&e.U.P.lineTo(r,_,m):g?e.U.P.qcurveTo(r,_,m,n.xs[h],n.ys[h]):e.U.P.qcurveTo(r,_,m,(_+n.xs[h])/2,(m+n.ys[h])/2)}e.U.P.closePath(r)}},e.U._compoGlyph=function(n,r,o){for(var a=0;a<n.parts.length;a++){var l={cmds:[],crds:[]},c=n.parts[a];e.U._drawGlyf(c.glyphIndex,r,l);for(var u=c.m,h=0;h<l.crds.length;h+=2){var d=l.crds[h],p=l.crds[h+1];o.crds.push(d*u.a+p*u.b+u.tx),o.crds.push(d*u.c+p*u.d+u.ty)}for(h=0;h<l.cmds.length;h++)o.cmds.push(l.cmds[h])}},e.U._getGlyphClass=function(n,r){var o=e._lctf.getInterval(r,n);return o==-1?0:r[o+2]},e.U._applySubs=function(n,r,o,a){for(var l=n.length-r-1,c=0;c<o.tabs.length;c++)if(o.tabs[c]!=null){var u,h=o.tabs[c];if(!h.coverage||(u=e._lctf.coverageIndex(h.coverage,n[r]))!=-1){if(o.ltype==1)n[r],h.fmt==1?n[r]=n[r]+h.delta:n[r]=h.newg[u];else if(o.ltype==4)for(var d=h.vals[u],p=0;p<d.length;p++){var g=d[p],_=g.chain.length;if(!(_>l)){for(var m=!0,f=0,x=0;x<_;x++){for(;n[r+f+(1+x)]==-1;)f++;g.chain[x]!=n[r+f+(1+x)]&&(m=!1)}if(m){for(n[r]=g.nglyph,x=0;x<_+f;x++)n[r+x+1]=-1;break}}}else if(o.ltype==5&&h.fmt==2)for(var v=e._lctf.getInterval(h.cDef,n[r]),S=h.cDef[v+2],T=h.scset[S],L=0;L<T.length;L++){var E=T[L],D=E.input;if(!(D.length>l)){for(m=!0,x=0;x<D.length;x++){var M=e._lctf.getInterval(h.cDef,n[r+1+x]);if(v==-1&&h.cDef[M+2]!=D[x]){m=!1;break}}if(m){var A=E.substLookupRecords;for(p=0;p<A.length;p+=2)A[p],A[p+1]}}}else if(o.ltype==6&&h.fmt==3){if(!e.U._glsCovered(n,h.backCvg,r-h.backCvg.length)||!e.U._glsCovered(n,h.inptCvg,r)||!e.U._glsCovered(n,h.ahedCvg,r+h.inptCvg.length))continue;var q=h.lookupRec;for(L=0;L<q.length;L+=2){v=q[L];var U=a[q[L+1]];e.U._applySubs(n,r+v,U,a)}}}}},e.U._glsCovered=function(n,r,o){for(var a=0;a<r.length;a++)if(e._lctf.coverageIndex(r[a],n[o+a])==-1)return!1;return!0},e.U.glyphsToPath=function(n,r,o){for(var a={cmds:[],crds:[]},l=0,c=0;c<r.length;c++){var u=r[c];if(u!=-1){for(var h=c<r.length-1&&r[c+1]!=-1?r[c+1]:0,d=e.U.glyphToPath(n,u),p=0;p<d.crds.length;p+=2)a.crds.push(d.crds[p]+l),a.crds.push(d.crds[p+1]);for(o&&a.cmds.push(o),p=0;p<d.cmds.length;p++)a.cmds.push(d.cmds[p]);o&&a.cmds.push("X"),l+=n.hmtx.aWidth[u],c<r.length-1&&(l+=e.U.getPairAdjustment(n,u,h))}}return a},e.U.P={},e.U.P.moveTo=function(n,r,o){n.cmds.push("M"),n.crds.push(r,o)},e.U.P.lineTo=function(n,r,o){n.cmds.push("L"),n.crds.push(r,o)},e.U.P.curveTo=function(n,r,o,a,l,c,u){n.cmds.push("C"),n.crds.push(r,o,a,l,c,u)},e.U.P.qcurveTo=function(n,r,o,a,l){n.cmds.push("Q"),n.crds.push(r,o,a,l)},e.U.P.closePath=function(n){n.cmds.push("Z")},e.U._drawCFF=function(n,r,o,a,l){for(var c=r.stack,u=r.nStems,h=r.haveWidth,d=r.width,p=r.open,g=0,_=r.x,m=r.y,f=0,x=0,v=0,S=0,T=0,L=0,E=0,D=0,M=0,A=0,q={val:0,size:0};g<n.length;){e.CFF.getCharString(n,g,q);var U=q.val;if(g+=q.size,U=="o1"||U=="o18")c.length%2!=0&&!h&&(d=c.shift()+a.nominalWidthX),u+=c.length>>1,c.length=0,h=!0;else if(U=="o3"||U=="o23")c.length%2!=0&&!h&&(d=c.shift()+a.nominalWidthX),u+=c.length>>1,c.length=0,h=!0;else if(U=="o4")c.length>1&&!h&&(d=c.shift()+a.nominalWidthX,h=!0),p&&e.U.P.closePath(l),m+=c.pop(),e.U.P.moveTo(l,_,m),p=!0;else if(U=="o5")for(;c.length>0;)_+=c.shift(),m+=c.shift(),e.U.P.lineTo(l,_,m);else if(U=="o6"||U=="o7")for(var z=c.length,C=U=="o6",B=0;B<z;B++){var G=c.shift();C?_+=G:m+=G,C=!C,e.U.P.lineTo(l,_,m)}else if(U=="o8"||U=="o24"){z=c.length;for(var j=0;j+6<=z;)f=_+c.shift(),x=m+c.shift(),v=f+c.shift(),S=x+c.shift(),_=v+c.shift(),m=S+c.shift(),e.U.P.curveTo(l,f,x,v,S,_,m),j+=6;U=="o24"&&(_+=c.shift(),m+=c.shift(),e.U.P.lineTo(l,_,m))}else{if(U=="o11")break;if(U=="o1234"||U=="o1235"||U=="o1236"||U=="o1237")U=="o1234"&&(x=m,v=(f=_+c.shift())+c.shift(),A=S=x+c.shift(),L=S,D=m,_=(E=(T=(M=v+c.shift())+c.shift())+c.shift())+c.shift(),e.U.P.curveTo(l,f,x,v,S,M,A),e.U.P.curveTo(l,T,L,E,D,_,m)),U=="o1235"&&(f=_+c.shift(),x=m+c.shift(),v=f+c.shift(),S=x+c.shift(),M=v+c.shift(),A=S+c.shift(),T=M+c.shift(),L=A+c.shift(),E=T+c.shift(),D=L+c.shift(),_=E+c.shift(),m=D+c.shift(),c.shift(),e.U.P.curveTo(l,f,x,v,S,M,A),e.U.P.curveTo(l,T,L,E,D,_,m)),U=="o1236"&&(f=_+c.shift(),x=m+c.shift(),v=f+c.shift(),A=S=x+c.shift(),L=S,E=(T=(M=v+c.shift())+c.shift())+c.shift(),D=L+c.shift(),_=E+c.shift(),e.U.P.curveTo(l,f,x,v,S,M,A),e.U.P.curveTo(l,T,L,E,D,_,m)),U=="o1237"&&(f=_+c.shift(),x=m+c.shift(),v=f+c.shift(),S=x+c.shift(),M=v+c.shift(),A=S+c.shift(),T=M+c.shift(),L=A+c.shift(),E=T+c.shift(),D=L+c.shift(),Math.abs(E-_)>Math.abs(D-m)?_=E+c.shift():m=D+c.shift(),e.U.P.curveTo(l,f,x,v,S,M,A),e.U.P.curveTo(l,T,L,E,D,_,m));else if(U=="o14"){if(c.length>0&&!h&&(d=c.shift()+o.nominalWidthX,h=!0),c.length==4){var te=c.shift(),V=c.shift(),N=c.shift(),b=c.shift(),P=e.CFF.glyphBySE(o,N),H=e.CFF.glyphBySE(o,b);e.U._drawCFF(o.CharStrings[P],r,o,a,l),r.x=te,r.y=V,e.U._drawCFF(o.CharStrings[H],r,o,a,l)}p&&(e.U.P.closePath(l),p=!1)}else if(U=="o19"||U=="o20")c.length%2!=0&&!h&&(d=c.shift()+a.nominalWidthX),u+=c.length>>1,c.length=0,h=!0,g+=u+7>>3;else if(U=="o21")c.length>2&&!h&&(d=c.shift()+a.nominalWidthX,h=!0),m+=c.pop(),_+=c.pop(),p&&e.U.P.closePath(l),e.U.P.moveTo(l,_,m),p=!0;else if(U=="o22")c.length>1&&!h&&(d=c.shift()+a.nominalWidthX,h=!0),_+=c.pop(),p&&e.U.P.closePath(l),e.U.P.moveTo(l,_,m),p=!0;else if(U=="o25"){for(;c.length>6;)_+=c.shift(),m+=c.shift(),e.U.P.lineTo(l,_,m);f=_+c.shift(),x=m+c.shift(),v=f+c.shift(),S=x+c.shift(),_=v+c.shift(),m=S+c.shift(),e.U.P.curveTo(l,f,x,v,S,_,m)}else if(U=="o26")for(c.length%2&&(_+=c.shift());c.length>0;)f=_,x=m+c.shift(),_=v=f+c.shift(),m=(S=x+c.shift())+c.shift(),e.U.P.curveTo(l,f,x,v,S,_,m);else if(U=="o27")for(c.length%2&&(m+=c.shift());c.length>0;)x=m,v=(f=_+c.shift())+c.shift(),S=x+c.shift(),_=v+c.shift(),m=S,e.U.P.curveTo(l,f,x,v,S,_,m);else if(U=="o10"||U=="o29"){var X=U=="o10"?a:o;if(c.length==0)console.debug("error: empty stack");else{var W=c.pop(),ne=X.Subrs[W+X.Bias];r.x=_,r.y=m,r.nStems=u,r.haveWidth=h,r.width=d,r.open=p,e.U._drawCFF(ne,r,o,a,l),_=r.x,m=r.y,u=r.nStems,h=r.haveWidth,d=r.width,p=r.open}}else if(U=="o30"||U=="o31"){var Q=c.length,ee=(j=0,U=="o31");for(j+=Q-(z=-3&Q);j<z;)ee?(x=m,v=(f=_+c.shift())+c.shift(),m=(S=x+c.shift())+c.shift(),z-j==5?(_=v+c.shift(),j++):_=v,ee=!1):(f=_,x=m+c.shift(),v=f+c.shift(),S=x+c.shift(),_=v+c.shift(),z-j==5?(m=S+c.shift(),j++):m=S,ee=!0),e.U.P.curveTo(l,f,x,v,S,_,m),j+=4}else{if((U+"").charAt(0)=="o")throw console.debug("Unknown operation: "+U,n),U;c.push(U)}}}r.x=_,r.y=m,r.nStems=u,r.haveWidth=h,r.width=d,r.open=p};var t=e,i={Typr:t};return s.Typr=t,s.default=i,Object.defineProperty(s,"__esModule",{value:!0}),s}({}).Typr}/*!
Custom bundle of woff2otf (https://github.com/arty-name/woff2otf) with fflate
(https://github.com/101arrowz/fflate) for use in Troika text rendering. 
Original licenses apply: 
- fflate: https://github.com/101arrowz/fflate/blob/master/LICENSE (MIT)
- woff2otf.js: https://github.com/arty-name/woff2otf/blob/master/woff2otf.js (Apache2)
*/function B_(){return function(s){var e=Uint8Array,t=Uint16Array,i=Uint32Array,n=new e([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),r=new e([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),o=new e([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),a=function(U,z){for(var C=new t(31),B=0;B<31;++B)C[B]=z+=1<<U[B-1];var G=new i(C[30]);for(B=1;B<30;++B)for(var j=C[B];j<C[B+1];++j)G[j]=j-C[B]<<5|B;return[C,G]},l=a(n,2),c=l[0],u=l[1];c[28]=258,u[258]=28;for(var h=a(r,0)[0],d=new t(32768),p=0;p<32768;++p){var g=(43690&p)>>>1|(21845&p)<<1;g=(61680&(g=(52428&g)>>>2|(13107&g)<<2))>>>4|(3855&g)<<4,d[p]=((65280&g)>>>8|(255&g)<<8)>>>1}var _=function(U,z,C){for(var B=U.length,G=0,j=new t(z);G<B;++G)++j[U[G]-1];var te,V=new t(z);for(G=0;G<z;++G)V[G]=V[G-1]+j[G-1]<<1;if(C){te=new t(1<<z);var N=15-z;for(G=0;G<B;++G)if(U[G])for(var b=G<<4|U[G],P=z-U[G],H=V[U[G]-1]++<<P,X=H|(1<<P)-1;H<=X;++H)te[d[H]>>>N]=b}else for(te=new t(B),G=0;G<B;++G)U[G]&&(te[G]=d[V[U[G]-1]++]>>>15-U[G]);return te},m=new e(288);for(p=0;p<144;++p)m[p]=8;for(p=144;p<256;++p)m[p]=9;for(p=256;p<280;++p)m[p]=7;for(p=280;p<288;++p)m[p]=8;var f=new e(32);for(p=0;p<32;++p)f[p]=5;var x=_(m,9,1),v=_(f,5,1),S=function(U){for(var z=U[0],C=1;C<U.length;++C)U[C]>z&&(z=U[C]);return z},T=function(U,z,C){var B=z/8|0;return(U[B]|U[B+1]<<8)>>(7&z)&C},L=function(U,z){var C=z/8|0;return(U[C]|U[C+1]<<8|U[C+2]<<16)>>(7&z)},E=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],D=function(U,z,C){var B=new Error(z||E[U]);if(B.code=U,Error.captureStackTrace&&Error.captureStackTrace(B,D),!C)throw B;return B},M=function(U,z,C){var B=U.length;if(!B||C&&!C.l&&B<5)return z||new e(0);var G=!z||C,j=!C||C.i;C||(C={}),z||(z=new e(3*B));var te,V=function(me){var Ae=z.length;if(me>Ae){var De=new e(Math.max(2*Ae,me));De.set(z),z=De}},N=C.f||0,b=C.p||0,P=C.b||0,H=C.l,X=C.d,W=C.m,ne=C.n,Q=8*B;do{if(!H){C.f=N=T(U,b,1);var ee=T(U,b+1,3);if(b+=3,!ee){var pe=U[(be=((te=b)/8|0)+(7&te&&1)+4)-4]|U[be-3]<<8,Re=be+pe;if(Re>B){j&&D(0);break}G&&V(P+pe),z.set(U.subarray(be,Re),P),C.b=P+=pe,C.p=b=8*Re;continue}if(ee==1)H=x,X=v,W=9,ne=5;else if(ee==2){var he=T(U,b,31)+257,F=T(U,b+10,15)+4,ke=he+T(U,b+5,31)+1;b+=14;for(var Se=new e(ke),Me=new e(19),Ee=0;Ee<F;++Ee)Me[o[Ee]]=T(U,b+3*Ee,7);b+=3*F;var Ne=S(Me),ue=(1<<Ne)-1,ye=_(Me,Ne,1);for(Ee=0;Ee<ke;){var be,ae=ye[T(U,b,ue)];if(b+=15&ae,(be=ae>>>4)<16)Se[Ee++]=be;else{var Ie=0,w=0;for(be==16?(w=3+T(U,b,3),b+=2,Ie=Se[Ee-1]):be==17?(w=3+T(U,b,7),b+=3):be==18&&(w=11+T(U,b,127),b+=7);w--;)Se[Ee++]=Ie}}var y=Se.subarray(0,he),k=Se.subarray(he);W=S(y),ne=S(k),H=_(y,W,1),X=_(k,ne,1)}else D(1);if(b>Q){j&&D(0);break}}G&&V(P+131072);for(var fe=(1<<W)-1,$=(1<<ne)-1,re=b;;re=b){var _e=(Ie=H[L(U,b)&fe])>>>4;if((b+=15&Ie)>Q){j&&D(0);break}if(Ie||D(2),_e<256)z[P++]=_e;else{if(_e==256){re=b,H=null;break}var de=_e-254;if(_e>264){var ve=n[Ee=_e-257];de=T(U,b,(1<<ve)-1)+c[Ee],b+=ve}var I=X[L(U,b)&$],le=I>>>4;if(I||D(3),b+=15&I,k=h[le],le>3&&(ve=r[le],k+=L(U,b)&(1<<ve)-1,b+=ve),b>Q){j&&D(0);break}G&&V(P+131072);for(var J=P+de;P<J;P+=4)z[P]=z[P-k],z[P+1]=z[P+1-k],z[P+2]=z[P+2-k],z[P+3]=z[P+3-k];P=J}}C.l=H,C.p=re,C.b=P,H&&(N=1,C.m=W,C.d=X,C.n=ne)}while(!N);return P==z.length?z:function(me,Ae,De){(Ae==null||Ae<0)&&(Ae=0),(De==null||De>me.length)&&(De=me.length);var Fe=new(me instanceof t?t:me instanceof i?i:e)(De-Ae);return Fe.set(me.subarray(Ae,De)),Fe}(z,0,P)},A=new e(0),q=typeof TextDecoder<"u"&&new TextDecoder;try{q.decode(A,{stream:!0})}catch{}return s.convert_streams=function(U){var z=new DataView(U),C=0;function B(){var he=z.getUint16(C);return C+=2,he}function G(){var he=z.getUint32(C);return C+=4,he}function j(he){pe.setUint16(Re,he),Re+=2}function te(he){pe.setUint32(Re,he),Re+=4}for(var V={signature:G(),flavor:G(),length:G(),numTables:B(),reserved:B(),totalSfntSize:G(),majorVersion:B(),minorVersion:B(),metaOffset:G(),metaLength:G(),metaOrigLength:G(),privOffset:G(),privLength:G()},N=0;Math.pow(2,N)<=V.numTables;)N++;N--;for(var b=16*Math.pow(2,N),P=16*V.numTables-b,H=12,X=[],W=0;W<V.numTables;W++)X.push({tag:G(),offset:G(),compLength:G(),origLength:G(),origChecksum:G()}),H+=16;var ne,Q=new Uint8Array(12+16*X.length+X.reduce(function(he,F){return he+F.origLength+4},0)),ee=Q.buffer,pe=new DataView(ee),Re=0;return te(V.flavor),j(V.numTables),j(b),j(N),j(P),X.forEach(function(he){te(he.tag),te(he.origChecksum),te(H),te(he.origLength),he.outOffset=H,(H+=he.origLength)%4!=0&&(H+=4-H%4)}),X.forEach(function(he){var F,ke=U.slice(he.offset,he.offset+he.compLength);if(he.compLength!=he.origLength){var Se=new Uint8Array(he.origLength);F=new Uint8Array(ke,2),M(F,Se)}else Se=new Uint8Array(ke);Q.set(Se,he.outOffset);var Me=0;(H=he.outOffset+he.origLength)%4!=0&&(Me=4-H%4),Q.set(new Uint8Array(Me).buffer,he.outOffset+he.origLength),ne=H+Me}),ee.slice(0,ne)},Object.defineProperty(s,"__esModule",{value:!0}),s}({}).convert_streams}function k_(s,e){const t={M:2,L:2,Q:4,C:6,Z:0},i={C:"18g,ca,368,1kz",D:"17k,6,2,2+4,5+c,2+6,2+1,10+1,9+f,j+11,2+1,a,2,2+1,15+2,3,j+2,6+3,2+8,2,2,2+1,w+a,4+e,3+3,2,3+2,3+5,23+w,2f+4,3,2+9,2,b,2+3,3,1k+9,6+1,3+1,2+2,2+d,30g,p+y,1,1+1g,f+x,2,sd2+1d,jf3+4,f+3,2+4,2+2,b+3,42,2,4+2,2+1,2,3,t+1,9f+w,2,el+2,2+g,d+2,2l,2+1,5,3+1,2+1,2,3,6,16wm+1v",R:"17m+3,2,2,6+3,m,15+2,2+2,h+h,13,3+8,2,2,3+1,2,p+1,x,5+4,5,a,2,2,3,u,c+2,g+1,5,2+1,4+1,5j,6+1,2,b,2+2,f,2+1,1s+2,2,3+1,7,1ez0,2,2+1,4+4,b,4,3,b,42,2+2,4,3,2+1,2,o+3,ae,ep,x,2o+2,3+1,3,5+1,6",L:"x9u,jff,a,fd,jv",T:"4t,gj+33,7o+4,1+1,7c+18,2,2+1,2+1,2,21+a,2,1b+k,h,2u+6,3+5,3+1,2+3,y,2,v+q,2k+a,1n+8,a,p+3,2+8,2+2,2+4,18+2,3c+e,2+v,1k,2,5+7,5,4+6,b+1,u,1n,5+3,9,l+1,r,3+1,1m,5+1,5+1,3+2,4,v+1,4,c+1,1m,5+4,2+1,5,l+1,n+5,2,1n,3,2+3,9,8+1,c+1,v,1q,d,1f,4,1m+2,6+2,2+3,8+1,c+1,u,1n,3,7,6+1,l+1,t+1,1m+1,5+3,9,l+1,u,21,8+2,2,2j,3+6,d+7,2r,3+8,c+5,23+1,s,2,2,1k+d,2+4,2+1,6+a,2+z,a,2v+3,2+5,2+1,3+1,q+1,5+2,h+3,e,3+1,7,g,jk+2,qb+2,u+2,u+1,v+1,1t+1,2+6,9,3+a,a,1a+2,3c+1,z,3b+2,5+1,a,7+2,64+1,3,1n,2+6,2,2,3+7,7+9,3,1d+d,1,1+1,1s+3,1d,2+4,2,6,15+8,d+1,x+3,3+1,2+2,1l,2+1,4,2+2,1n+7,3+1,49+2,2+c,2+6,5,7,4+1,5j+1l,2+4,ek,3+1,r+4,1e+4,6+5,2p+c,1+3,1,1+2,1+b,2db+2,3y,2p+v,ff+3,30+1,n9x,1+2,2+9,x+1,29+1,7l,4,5,q+1,6,48+1,r+h,e,13+7,q+a,1b+2,1d,3+3,3+1,14,1w+5,3+1,3+1,d,9,1c,1g,2+2,3+1,6+1,2,17+1,9,6n,3,5,fn5,ki+f,h+f,5s,6y+2,ea,6b,46+4,1af+2,2+1,6+3,15+2,5,4m+1,fy+3,as+1,4a+a,4x,1j+e,1l+2,1e+3,3+1,1y+2,11+4,2+7,1r,d+1,1h+8,b+3,3,2o+2,3,2+1,7,4h,4+7,m+1,1m+1,4,12+6,4+4,5g+7,3+2,2,o,2d+5,2,5+1,2+1,6n+3,7+1,2+1,s+1,2e+7,3,2+1,2z,2,3+5,2,2u+2,3+3,2+4,78+8,2+1,75+1,2,5,41+3,3+1,5,x+9,15+5,3+3,9,a+5,3+2,1b+c,2+1,bb+6,2+5,2,2b+l,3+6,2+1,2+1,3f+5,4,2+1,2+6,2,21+1,4,2,9o+1,470+8,at4+4,1o+6,t5,1s+3,2a,f5l+1,2+3,43o+2,a+7,1+7,3+6,v+3,45+2,1j0+1i,5+1d,9,f,n+4,2+e,11t+6,2+g,3+6,2+1,2+4,7a+6,c6+3,15t+6,32+6,1,gzau,v+2n,3l+6n"},n=1,r=2,o=4,a=8,l=16,c=32;let u;function h(E){if(!u){const D={R:r,L:n,D:o,C:l,U:c,T:a};u=new Map;for(let M in i){let A=0;i[M].split(",").forEach(q=>{let[U,z]=q.split("+");U=parseInt(U,36),z=z?parseInt(z,36):0,u.set(A+=U,D[M]);for(let C=z;C--;)u.set(++A,D[M])})}}return u.get(E)||c}const d=1,p=2,g=3,_=4,m=[null,"isol","init","fina","medi"];function f(E){const D=new Uint8Array(E.length);let M=c,A=d,q=-1;for(let U=0;U<E.length;U++){const z=E.codePointAt(U);let C=h(z)|0,B=d;C&a||(M&(n|o|l)?C&(r|o|l)?(B=g,(A===d||A===g)&&D[q]++):C&(n|c)&&(A===p||A===_)&&D[q]--:M&(r|c)&&(A===p||A===_)&&D[q]--,A=D[U]=B,M=C,q=U,z>65535&&U++)}return D}function x(E,D){const M=[];for(let q=0;q<D.length;q++){const U=D.codePointAt(q);U>65535&&q++,M.push(s.U.codeToGlyph(E,U))}const A=E.GSUB;if(A){const{lookupList:q,featureList:U}=A;let z;const C=/^(rlig|liga|mset|isol|init|fina|medi|half|pres|blws|ccmp)$/,B=[];U.forEach(G=>{if(C.test(G.tag))for(let j=0;j<G.tab.length;j++){if(B[G.tab[j]])continue;B[G.tab[j]]=!0;const te=q[G.tab[j]],V=/^(isol|init|fina|medi)$/.test(G.tag);V&&!z&&(z=f(D));for(let N=0;N<M.length;N++)(!z||!V||m[z[N]]===G.tag)&&s.U._applySubs(M,N,te,q)}})}return M}function v(E,D){const M=new Int16Array(D.length*3);let A=0;for(;A<D.length;A++){const C=D[A];if(C===-1)continue;M[A*3+2]=E.hmtx.aWidth[C];const B=E.GPOS;if(B){const G=B.lookupList;for(let j=0;j<G.length;j++){const te=G[j];for(let V=0;V<te.tabs.length;V++){const N=te.tabs[V];if(te.ltype===1){if(s._lctf.coverageIndex(N.coverage,C)!==-1&&N.pos){z(N.pos,A);break}}else if(te.ltype===2){let b=null,P=q();if(P!==-1){const H=s._lctf.coverageIndex(N.coverage,D[P]);if(H!==-1){if(N.fmt===1){const X=N.pairsets[H];for(let W=0;W<X.length;W++)X[W].gid2===C&&(b=X[W])}else if(N.fmt===2){const X=s.U._getGlyphClass(D[P],N.classDef1),W=s.U._getGlyphClass(C,N.classDef2);b=N.matrix[X][W]}if(b){b.val1&&z(b.val1,P),b.val2&&z(b.val2,A);break}}}}else if(te.ltype===4){const b=s._lctf.coverageIndex(N.markCoverage,C);if(b!==-1){const P=q(U),H=P===-1?-1:s._lctf.coverageIndex(N.baseCoverage,D[P]);if(H!==-1){const X=N.markArray[b],W=N.baseArray[H][X.markClass];M[A*3]=W.x-X.x+M[P*3]-M[P*3+2],M[A*3+1]=W.y-X.y+M[P*3+1];break}}}else if(te.ltype===6){const b=s._lctf.coverageIndex(N.mark1Coverage,C);if(b!==-1){const P=q();if(P!==-1){const H=D[P];if(S(E,H)===3){const X=s._lctf.coverageIndex(N.mark2Coverage,H);if(X!==-1){const W=N.mark1Array[b],ne=N.mark2Array[X][W.markClass];M[A*3]=ne.x-W.x+M[P*3]-M[P*3+2],M[A*3+1]=ne.y-W.y+M[P*3+1];break}}}}}}}}else if(E.kern&&!E.cff){const G=q();if(G!==-1){const j=E.kern.glyph1.indexOf(D[G]);if(j!==-1){const te=E.kern.rval[j].glyph2.indexOf(C);te!==-1&&(M[G*3+2]+=E.kern.rval[j].vals[te])}}}}return M;function q(C){for(let B=A-1;B>=0;B--)if(D[B]!==-1&&(!C||C(D[B])))return B;return-1}function U(C){return S(E,C)===1}function z(C,B){for(let G=0;G<3;G++)M[B*3+G]+=C[G]||0}}function S(E,D){const M=E.GDEF&&E.GDEF.glyphClassDef;return M?s.U._getGlyphClass(D,M):0}function T(...E){for(let D=0;D<E.length;D++)if(typeof E[D]=="number")return E[D]}function L(E){const D=Object.create(null),M=E["OS/2"],A=E.hhea,q=E.head.unitsPerEm,U=T(M&&M.sTypoAscender,A&&A.ascender,q),z={unitsPerEm:q,ascender:U,descender:T(M&&M.sTypoDescender,A&&A.descender,0),capHeight:T(M&&M.sCapHeight,U),xHeight:T(M&&M.sxHeight,U),lineGap:T(M&&M.sTypoLineGap,A&&A.lineGap),supportsCodePoint(C){return s.U.codeToGlyph(E,C)>0},forEachGlyph(C,B,G,j){let te=0;const V=1/z.unitsPerEm*B,N=x(E,C);let b=0;const P=v(E,N);return N.forEach((H,X)=>{if(H!==-1){let W=D[H];if(!W){const{cmds:ne,crds:Q}=s.U.glyphToPath(E,H);let ee="",pe=0;for(let Se=0,Me=ne.length;Se<Me;Se++){const Ee=t[ne[Se]];ee+=ne[Se];for(let Ne=1;Ne<=Ee;Ne++)ee+=(Ne>1?",":"")+Q[pe++]}let Re,he,F,ke;if(Q.length){Re=he=1/0,F=ke=-1/0;for(let Se=0,Me=Q.length;Se<Me;Se+=2){let Ee=Q[Se],Ne=Q[Se+1];Ee<Re&&(Re=Ee),Ne<he&&(he=Ne),Ee>F&&(F=Ee),Ne>ke&&(ke=Ne)}}else Re=F=he=ke=0;W=D[H]={index:H,advanceWidth:E.hmtx.aWidth[H],xMin:Re,yMin:he,xMax:F,yMax:ke,path:ee}}j.call(null,W,te+P[X*3]*V,P[X*3+1]*V,b),te+=P[X*3+2]*V,G&&(te+=G*B)}b+=C.codePointAt(b)>65535?2:1}),te}};return z}return function(D){const M=new Uint8Array(D,0,4),A=s._bin.readASCII(M,0,4);if(A==="wOFF")D=e(D);else if(A==="wOF2")throw new Error("woff2 fonts not supported");return L(s.parse(D)[0])}}const z_=Ji({name:"Typr Font Parser",dependencies:[N_,B_,k_],init(s,e,t){const i=s(),n=e();return t(i,n)}});/*!
Custom bundle of @unicode-font-resolver/client v1.0.2 (https://github.com/lojjic/unicode-font-resolver)
for use in Troika text rendering. 
Original MIT license applies
*/function G_(){return function(s){var e=function(){this.buckets=new Map};e.prototype.add=function(v){var S=v>>5;this.buckets.set(S,(this.buckets.get(S)||0)|1<<(31&v))},e.prototype.has=function(v){var S=this.buckets.get(v>>5);return S!==void 0&&(S&1<<(31&v))!=0},e.prototype.serialize=function(){var v=[];return this.buckets.forEach(function(S,T){v.push((+T).toString(36)+":"+S.toString(36))}),v.join(",")},e.prototype.deserialize=function(v){var S=this;this.buckets.clear(),v.split(",").forEach(function(T){var L=T.split(":");S.buckets.set(parseInt(L[0],36),parseInt(L[1],36))})};var t=Math.pow(2,8),i=t-1,n=~i;function r(v){var S=function(L){return L&n}(v).toString(16),T=function(L){return(L&n)+t-1}(v).toString(16);return"codepoint-index/plane"+(v>>16)+"/"+S+"-"+T+".json"}function o(v,S){var T=v&i,L=S.codePointAt(T/6|0);return((L=(L||48)-48)&1<<T%6)!=0}function a(v,S){var T;(T=v,T.replace(/U\+/gi,"").replace(/^,+|,+$/g,"").split(/,+/).map(function(L){return L.split("-").map(function(E){return parseInt(E.trim(),16)})})).forEach(function(L){var E=L[0],D=L[1];D===void 0&&(D=E),S(E,D)})}function l(v,S){a(v,function(T,L){for(var E=T;E<=L;E++)S(E)})}var c={},u={},h=new WeakMap,d="https://cdn.jsdelivr.net/gh/lojjic/unicode-font-resolver@v1.0.1/packages/data";function p(v){var S=h.get(v);return S||(S=new e,l(v.ranges,function(T){return S.add(T)}),h.set(v,S)),S}var g,_=new Map;function m(v,S,T){return v[S]?S:v[T]?T:function(L){for(var E in L)return E}(v)}function f(v,S){var T=S;if(!v.includes(T)){T=1/0;for(var L=0;L<v.length;L++)Math.abs(v[L]-S)<Math.abs(T-S)&&(T=v[L])}return T}function x(v){return g||(g=new Set,l("9-D,20,85,A0,1680,2000-200A,2028-202F,205F,3000",function(S){g.add(S)})),g.has(v)}return s.CodePointSet=e,s.clearCache=function(){c={},u={}},s.getFontsForString=function(v,S){S===void 0&&(S={});var T,L=S.lang;L===void 0&&(L=new RegExp("\\p{Script=Hangul}","u").test(T=v)?"ko":new RegExp("\\p{Script=Hiragana}|\\p{Script=Katakana}","u").test(T)?"ja":"en");var E=S.category;E===void 0&&(E="sans-serif");var D=S.style;D===void 0&&(D="normal");var M=S.weight;M===void 0&&(M=400);var A=(S.dataUrl||d).replace(/\/$/g,""),q=new Map,U=new Uint8Array(v.length),z={},C={},B=new Array(v.length),G=new Map,j=!1;function te(b){var P=_.get(b);return P||(P=fetch(A+"/"+b).then(function(H){if(!H.ok)throw new Error(H.statusText);return H.json().then(function(X){if(!Array.isArray(X)||X[0]!==1)throw new Error("Incorrect schema version; need 1, got "+X[0]);return X[1]})}).catch(function(H){if(A!==d)return j||(console.error('unicode-font-resolver: Failed loading from dataUrl "'+A+'", trying default CDN. '+H.message),j=!0),A=d,_.delete(b),te(b);throw H}),_.set(b,P)),P}for(var V=function(b){var P=v.codePointAt(b),H=r(P);B[b]=H,c[H]||G.has(H)||G.set(H,te(H).then(function(X){c[H]=X})),P>65535&&(b++,N=b)},N=0;N<v.length;N++)V(N);return Promise.all(G.values()).then(function(){G.clear();for(var b=function(H){var X=v.codePointAt(H),W=null,ne=c[B[H]],Q=void 0;for(var ee in ne){var pe=C[ee];if(pe===void 0&&(pe=C[ee]=new RegExp(ee).test(L||"en")),pe){for(var Re in Q=ee,ne[ee])if(o(X,ne[ee][Re])){W=Re;break}break}}if(!W){e:for(var he in ne)if(he!==Q){for(var F in ne[he])if(o(X,ne[he][F])){W=F;break e}}}W||(console.debug("No font coverage for U+"+X.toString(16)),W="latin"),B[H]=W,u[W]||G.has(W)||G.set(W,te("font-meta/"+W+".json").then(function(ke){u[W]=ke})),X>65535&&(H++,P=H)},P=0;P<v.length;P++)b(P);return Promise.all(G.values())}).then(function(){for(var b,P=null,H=0;H<v.length;H++){var X=v.codePointAt(H);if(P&&(x(X)||p(P).has(X)))U[H]=U[H-1];else{P=u[B[H]];var W=z[P.id];if(!W){var ne=P.typeforms,Q=m(ne,E,"sans-serif"),ee=m(ne[Q],D,"normal"),pe=f((b=ne[Q])===null||b===void 0?void 0:b[ee],M);W=z[P.id]=A+"/font-files/"+P.id+"/"+Q+"."+ee+"."+pe+".woff"}var Re=q.get(W);Re==null&&(Re=q.size,q.set(W,Re)),U[H]=Re}X>65535&&(H++,U[H]=U[H-1])}return{fontUrls:Array.from(q.keys()),chars:U}})},Object.defineProperty(s,"__esModule",{value:!0}),s}({})}function H_(s,e){const t=Object.create(null),i=Object.create(null);function n(o,a){const l=c=>{console.error(`Failure loading font ${o}`,c)};try{const c=new XMLHttpRequest;c.open("get",o,!0),c.responseType="arraybuffer",c.onload=function(){if(c.status>=400)l(new Error(c.statusText));else if(c.status>0)try{const u=s(c.response);u.src=o,a(u)}catch(u){l(u)}},c.onerror=l,c.send()}catch(c){l(c)}}function r(o,a){let l=t[o];l?a(l):i[o]?i[o].push(a):(i[o]=[a],n(o,c=>{c.src=o,t[o]=c,i[o].forEach(u=>u(c)),delete i[o]}))}return function(o,a,{lang:l,fonts:c=[],style:u="normal",weight:h="normal",unicodeFontsURL:d}={}){const p=new Uint8Array(o.length),g=[];o.length||x();const _=new Map,m=[];if(u!=="italic"&&(u="normal"),typeof h!="number"&&(h=h==="bold"?700:400),c&&!Array.isArray(c)&&(c=[c]),c=c.slice().filter(S=>!S.lang||S.lang.test(l)).reverse(),c.length){let E=0;(function D(M=0){for(let A=M,q=o.length;A<q;A++){const U=o.codePointAt(A);if(E===1&&g[p[A-1]].supportsCodePoint(U)||/\s/.test(o[A]))p[A]=p[A-1],E===2&&(m[m.length-1][1]=A);else for(let z=p[A],C=c.length;z<=C;z++)if(z===C){const B=E===2?m[m.length-1]:m[m.length]=[A,A];B[1]=A,E=2}else{p[A]=z;const{src:B,unicodeRange:G}=c[z];if(!G||v(U,G)){const j=t[B];if(!j){r(B,()=>{D(A)});return}if(j.supportsCodePoint(U)){let te=_.get(j);typeof te!="number"&&(te=g.length,g.push(j),_.set(j,te)),p[A]=te,E=1;break}}}U>65535&&A+1<q&&(p[A+1]=p[A],A++,E===2&&(m[m.length-1][1]=A))}f()})()}else m.push([0,o.length-1]),f();function f(){if(m.length){const S=m.map(T=>o.substring(T[0],T[1]+1)).join(`
`);e.getFontsForString(S,{lang:l||void 0,style:u,weight:h,dataUrl:d}).then(({fontUrls:T,chars:L})=>{const E=g.length;let D=0;m.forEach(A=>{for(let q=0,U=A[1]-A[0];q<=U;q++)p[A[0]+q]=L[D++]+E;D++});let M=0;T.forEach((A,q)=>{r(A,U=>{g[q+E]=U,++M===T.length&&x()})})})}else x()}function x(){a({chars:p,fonts:g})}function v(S,T){for(let L=0;L<T.length;L++){const[E,D=E]=T[L];if(E<=S&&S<=D)return!0}return!1}}}const V_=Ji({name:"FontResolver",dependencies:[H_,z_,G_],init(s,e,t){return s(e,t())}});function W_(s,e){const i=/[\u00AD\u034F\u061C\u115F-\u1160\u17B4-\u17B5\u180B-\u180E\u200B-\u200F\u202A-\u202E\u2060-\u206F\u3164\uFE00-\uFE0F\uFEFF\uFFA0\uFFF0-\uFFF8]/,n="[^\\S\\u00A0]",r=new RegExp(`${n}|[\\-\\u007C\\u00AD\\u2010\\u2012-\\u2014\\u2027\\u2056\\u2E17\\u2E40]`);function o({text:g,lang:_,fonts:m,style:f,weight:x,preResolvedFonts:v,unicodeFontsURL:S},T){const L=({chars:E,fonts:D})=>{let M,A;const q=[];for(let U=0;U<E.length;U++)E[U]!==A?(A=E[U],q.push(M={start:U,end:U,fontObj:D[E[U]]})):M.end=U;T(q)};v?L(v):s(g,L,{lang:_,fonts:m,style:f,weight:x,unicodeFontsURL:S})}function a({text:g="",font:_,lang:m,sdfGlyphSize:f=64,fontSize:x=400,fontWeight:v=1,fontStyle:S="normal",letterSpacing:T=0,lineHeight:L="normal",maxWidth:E=1/0,direction:D,textAlign:M="left",textIndent:A=0,whiteSpace:q="normal",overflowWrap:U="normal",anchorX:z=0,anchorY:C=0,metricsOnly:B=!1,unicodeFontsURL:G,preResolvedFonts:j=null,includeCaretPositions:te=!1,chunkedBoundsSize:V=8192,colorRanges:N=null},b){const P=h(),H={fontLoad:0,typesetting:0};g.indexOf("\r")>-1&&(console.info("Typesetter: got text with \\r chars; normalizing to \\n"),g=g.replace(/\r\n/g,`
`).replace(/\r/g,`
`)),x=+x,T=+T,E=+E,L=L||"normal",A=+A,o({text:g,lang:m,style:S,weight:v,fonts:typeof _=="string"?[{src:_}]:_,unicodeFontsURL:G,preResolvedFonts:j},X=>{H.fontLoad=h()-P;const W=isFinite(E);let ne=null,Q=null,ee=null,pe=null,Re=null,he=null,F=null,ke=null,Se=0,Me=0,Ee=q!=="nowrap";const Ne=new Map,ue=h();let ye=A,be=0,ae=new d;const Ie=[ae];X.forEach($=>{const{fontObj:re}=$,{ascender:_e,descender:de,unitsPerEm:ve,lineGap:I,capHeight:le,xHeight:J}=re;let me=Ne.get(re);if(!me){const Ce=x/ve,O=L==="normal"?(_e-de+I)*Ce:L*x,we=(O-(_e-de)*Ce)/2,ce=Math.min(O,(_e-de)*Ce),Z=(_e+de)/2*Ce+ce/2;me={index:Ne.size,src:re.src,fontObj:re,fontSizeMult:Ce,unitsPerEm:ve,ascender:_e*Ce,descender:de*Ce,capHeight:le*Ce,xHeight:J*Ce,lineHeight:O,baseline:-we-_e*Ce,caretTop:(_e+de)/2*Ce+ce/2,caretBottom:Z-ce},Ne.set(re,me)}const{fontSizeMult:Ae}=me,De=g.slice($.start,$.end+1);let Fe,Te;re.forEachGlyph(De,x,T,(Ce,O,we,ce)=>{O+=be,ce+=$.start,Fe=O,Te=Ce;const Z=g.charAt(ce),ge=Ce.advanceWidth*Ae,Pe=ae.count;let Ue;if("isEmpty"in Ce||(Ce.isWhitespace=!!Z&&new RegExp(n).test(Z),Ce.canBreakAfter=!!Z&&r.test(Z),Ce.isEmpty=Ce.xMin===Ce.xMax||Ce.yMin===Ce.yMax||i.test(Z)),!Ce.isWhitespace&&!Ce.isEmpty&&Me++,Ee&&W&&!Ce.isWhitespace&&O+ge+ye>E&&Pe){if(ae.glyphAt(Pe-1).glyphObj.canBreakAfter)Ue=new d,ye=-O;else for(let Je=Pe;Je--;)if(Je===0&&U==="break-word"){Ue=new d,ye=-O;break}else if(ae.glyphAt(Je).glyphObj.canBreakAfter){Ue=ae.splitAt(Je+1);const Ye=Ue.glyphAt(0).x;ye-=Ye;for(let $e=Ue.count;$e--;)Ue.glyphAt($e).x-=Ye;break}Ue&&(ae.isSoftWrapped=!0,ae=Ue,Ie.push(ae),Se=E)}let Ve=ae.glyphAt(ae.count);Ve.glyphObj=Ce,Ve.x=O+ye,Ve.y=we,Ve.width=ge,Ve.charIndex=ce,Ve.fontData=me,Z===`
`&&(ae=new d,Ie.push(ae),ye=-(O+ge+T*x)+A)}),be=Fe+Te.advanceWidth*Ae+T*x});let w=0;Ie.forEach($=>{let re=!0;for(let _e=$.count;_e--;){const de=$.glyphAt(_e);re&&!de.glyphObj.isWhitespace&&($.width=de.x+de.width,$.width>Se&&(Se=$.width),re=!1);let{lineHeight:ve,capHeight:I,xHeight:le,baseline:J}=de.fontData;ve>$.lineHeight&&($.lineHeight=ve);const me=J-$.baseline;me<0&&($.baseline+=me,$.cap+=me,$.ex+=me),$.cap=Math.max($.cap,$.baseline+I),$.ex=Math.max($.ex,$.baseline+le)}$.baseline-=w,$.cap-=w,$.ex-=w,w+=$.lineHeight});let y=0,k=0;if(z&&(typeof z=="number"?y=-z:typeof z=="string"&&(y=-Se*(z==="left"?0:z==="center"?.5:z==="right"?1:c(z)))),C&&(typeof C=="number"?k=-C:typeof C=="string"&&(k=C==="top"?0:C==="top-baseline"?-Ie[0].baseline:C==="top-cap"?-Ie[0].cap:C==="top-ex"?-Ie[0].ex:C==="middle"?w/2:C==="bottom"?w:C==="bottom-baseline"?Ie[Ie.length-1].baseline:c(C)*w)),!B){const $=e.getEmbeddingLevels(g,D);ne=new Uint16Array(Me),Q=new Uint8Array(Me),ee=new Float32Array(Me*2),pe={},F=[1/0,1/0,-1/0,-1/0],ke=[],te&&(he=new Float32Array(g.length*4)),N&&(Re=new Uint8Array(Me*3));let re=0,_e=-1,de=-1,ve,I;if(Ie.forEach((le,J)=>{let{count:me,width:Ae}=le;if(me>0){let De=0;for(let ce=me;ce--&&le.glyphAt(ce).glyphObj.isWhitespace;)De++;let Fe=0,Te=0;if(M==="center")Fe=(Se-Ae)/2;else if(M==="right")Fe=Se-Ae;else if(M==="justify"&&le.isSoftWrapped){let ce=0;for(let Z=me-De;Z--;)le.glyphAt(Z).glyphObj.isWhitespace&&ce++;Te=(Se-Ae)/ce}if(Te||Fe){let ce=0;for(let Z=0;Z<me;Z++){let ge=le.glyphAt(Z);const Pe=ge.glyphObj;ge.x+=Fe+ce,Te!==0&&Pe.isWhitespace&&Z<me-De&&(ce+=Te,ge.width+=Te)}}const Ce=e.getReorderSegments(g,$,le.glyphAt(0).charIndex,le.glyphAt(le.count-1).charIndex);for(let ce=0;ce<Ce.length;ce++){const[Z,ge]=Ce[ce];let Pe=1/0,Ue=-1/0;for(let Ve=0;Ve<me;Ve++)if(le.glyphAt(Ve).charIndex>=Z){let Je=Ve,Ye=Ve;for(;Ye<me;Ye++){let $e=le.glyphAt(Ye);if($e.charIndex>ge)break;Ye<me-De&&(Pe=Math.min(Pe,$e.x),Ue=Math.max(Ue,$e.x+$e.width))}for(let $e=Je;$e<Ye;$e++){const at=le.glyphAt($e);at.x=Ue-(at.x+at.width-Pe)}break}}let O;const we=ce=>O=ce;for(let ce=0;ce<me;ce++){const Z=le.glyphAt(ce);O=Z.glyphObj;const ge=O.index,Pe=$.levels[Z.charIndex]&1;if(Pe){const Ue=e.getMirroredCharacter(g[Z.charIndex]);Ue&&Z.fontData.fontObj.forEachGlyph(Ue,0,0,we)}if(te){const{charIndex:Ue,fontData:Ve}=Z,Je=Z.x+y,Ye=Z.x+Z.width+y;he[Ue*4]=Pe?Ye:Je,he[Ue*4+1]=Pe?Je:Ye,he[Ue*4+2]=le.baseline+Ve.caretBottom+k,he[Ue*4+3]=le.baseline+Ve.caretTop+k;const $e=Ue-_e;$e>1&&u(he,_e,$e),_e=Ue}if(N){const{charIndex:Ue}=Z;for(;Ue>de;)de++,N.hasOwnProperty(de)&&(I=N[de])}if(!O.isWhitespace&&!O.isEmpty){const Ue=re++,{fontSizeMult:Ve,src:Je,index:Ye}=Z.fontData,$e=pe[Je]||(pe[Je]={});$e[ge]||($e[ge]={path:O.path,pathBounds:[O.xMin,O.yMin,O.xMax,O.yMax]});const at=Z.x+y,$t=Z.y+le.baseline+k;ee[Ue*2]=at,ee[Ue*2+1]=$t;const Jt=at+O.xMin*Ve,zt=$t+O.yMin*Ve,dn=at+O.xMax*Ve,Pt=$t+O.yMax*Ve;Jt<F[0]&&(F[0]=Jt),zt<F[1]&&(F[1]=zt),dn>F[2]&&(F[2]=dn),Pt>F[3]&&(F[3]=Pt),Ue%V===0&&(ve={start:Ue,end:Ue,rect:[1/0,1/0,-1/0,-1/0]},ke.push(ve)),ve.end++;const ft=ve.rect;if(Jt<ft[0]&&(ft[0]=Jt),zt<ft[1]&&(ft[1]=zt),dn>ft[2]&&(ft[2]=dn),Pt>ft[3]&&(ft[3]=Pt),ne[Ue]=ge,Q[Ue]=Ye,N){const fn=Ue*3;Re[fn]=I>>16&255,Re[fn+1]=I>>8&255,Re[fn+2]=I&255}}}}}),he){const le=g.length-_e;le>1&&u(he,_e,le)}}const fe=[];Ne.forEach(({index:$,src:re,unitsPerEm:_e,ascender:de,descender:ve,lineHeight:I,capHeight:le,xHeight:J})=>{fe[$]={src:re,unitsPerEm:_e,ascender:de,descender:ve,lineHeight:I,capHeight:le,xHeight:J}}),H.typesetting=h()-ue,b({glyphIds:ne,glyphFontIndices:Q,glyphPositions:ee,glyphData:pe,fontData:fe,caretPositions:he,glyphColors:Re,chunkedBounds:ke,fontSize:x,topBaseline:k+Ie[0].baseline,blockBounds:[y,k-w,y+Se,k],visibleBounds:F,timings:H})})}function l(g,_){a({...g,metricsOnly:!0},m=>{const[f,x,v,S]=m.blockBounds;_({width:v-f,height:S-x})})}function c(g){let _=g.match(/^([\d.]+)%$/),m=_?parseFloat(_[1]):NaN;return isNaN(m)?0:m/100}function u(g,_,m){const f=g[_*4],x=g[_*4+1],v=g[_*4+2],S=g[_*4+3],T=(x-f)/m;for(let L=0;L<m;L++){const E=(_+L)*4;g[E]=f+T*L,g[E+1]=f+T*(L+1),g[E+2]=v,g[E+3]=S}}function h(){return(self.performance||Date).now()}function d(){this.data=[]}const p=["glyphObj","x","y","width","charIndex","fontData"];return d.prototype={width:0,lineHeight:0,baseline:0,cap:0,ex:0,isSoftWrapped:!1,get count(){return Math.ceil(this.data.length/p.length)},glyphAt(g){let _=d.flyweight;return _.data=this.data,_.index=g,_},splitAt(g){let _=new d;return _.data=this.data.splice(g*p.length),_}},d.flyweight=p.reduce((g,_,m,f)=>(Object.defineProperty(g,_,{get(){return this.data[this.index*p.length+m]},set(x){this.data[this.index*p.length+m]=x}}),g),{data:null,index:0}),{typeset:a,measure:l}}const hi=()=>(self.performance||Date).now(),Ps=hu();let mc;function X_(s,e,t,i,n,r,o,a,l,c,u=!0){return u?j_(s,e,t,i,n,r,o,a,l,c).then(null,h=>(mc||(console.warn("WebGL SDF generation failed, falling back to JS",h),mc=!0),_c(s,e,t,i,n,r,o,a,l,c))):_c(s,e,t,i,n,r,o,a,l,c)}const ms=[],Y_=5;let ja=0;function fu(){const s=hi();for(;ms.length&&hi()-s<Y_;)ms.shift()();ja=ms.length?setTimeout(fu,0):0}const j_=(...s)=>new Promise((e,t)=>{ms.push(()=>{const i=hi();try{Ps.webgl.generateIntoCanvas(...s),e({timing:hi()-i})}catch(n){t(n)}}),ja||(ja=setTimeout(fu,0))}),q_=4,K_=2e3,gc={};let Z_=0;function _c(s,e,t,i,n,r,o,a,l,c){const u="TroikaTextSDFGenerator_JS_"+Z_++%q_;let h=gc[u];return h||(h=gc[u]={workerModule:Ji({name:u,workerId:u,dependencies:[hu,hi],init(d,p){const g=d().javascript.generate;return function(..._){const m=p();return{textureData:g(..._),timing:p()-m}}},getTransferables(d){return[d.textureData.buffer]}}),requests:0,idleTimer:null}),h.requests++,clearTimeout(h.idleTimer),h.workerModule(s,e,t,i,n,r).then(({textureData:d,timing:p})=>{const g=hi(),_=new Uint8Array(d.length*4);for(let m=0;m<d.length;m++)_[m*4+c]=d[m];return Ps.webglUtils.renderImageData(o,_,a,l,s,e,1<<3-c),p+=hi()-g,--h.requests===0&&(h.idleTimer=setTimeout(()=>{w_(u)},K_)),{timing:p}})}function $_(s){s._warm||(Ps.webgl.isSupported(s),s._warm=!0)}const J_=Ps.webglUtils.resizeWebGLCanvasWithoutClearing,ki={defaultFontURL:null,unicodeFontsURL:null,sdfGlyphSize:64,sdfMargin:1/16,sdfExponent:9,textureWidth:2048},Q_=new qe;function Bi(){return(self.performance||Date).now()}const vc=Object.create(null);function ev(s,e){s=nv({},s);const t=Bi(),{defaultFontURL:i}=ki,n=[];if(i&&n.push({label:"default",src:xc(i)}),s.font&&n.push({label:"user",src:xc(s.font)}),s.font=n,s.text=""+s.text,s.sdfGlyphSize=s.sdfGlyphSize||ki.sdfGlyphSize,s.unicodeFontsURL=s.unicodeFontsURL||ki.unicodeFontsURL,s.colorRanges!=null){let d={};for(let p in s.colorRanges)if(s.colorRanges.hasOwnProperty(p)){let g=s.colorRanges[p];typeof g!="number"&&(g=Q_.set(g).getHex()),d[p]=g}s.colorRanges=d}Object.freeze(s);const{textureWidth:r,sdfExponent:o}=ki,{sdfGlyphSize:a}=s,l=r/a*4;let c=vc[a];if(!c){const d=document.createElement("canvas");d.width=r,d.height=a*256/l,c=vc[a]={glyphCount:0,sdfGlyphSize:a,sdfCanvas:d,sdfTexture:new Bt(d,void 0,void 0,void 0,Ot,Ot),contextLost:!1,glyphsByFont:new Map},c.sdfTexture.generateMipmaps=!1,tv(c)}const{sdfTexture:u,sdfCanvas:h}=c;rv(s).then(d=>{const{glyphIds:p,glyphFontIndices:g,fontData:_,glyphPositions:m,fontSize:f,timings:x}=d,v=[],S=new Float32Array(p.length*4);let T=0,L=0;const E=Bi(),D=_.map(z=>{let C=c.glyphsByFont.get(z.src);return C||c.glyphsByFont.set(z.src,C=new Map),C});p.forEach((z,C)=>{const B=g[C],{src:G,unitsPerEm:j}=_[B];let te=D[B].get(z);if(!te){const{path:H,pathBounds:X}=d.glyphData[G][z],W=Math.max(X[2]-X[0],X[3]-X[1])/a*(ki.sdfMargin*a+.5),ne=c.glyphCount++,Q=[X[0]-W,X[1]-W,X[2]+W,X[3]+W];D[B].set(z,te={path:H,atlasIndex:ne,sdfViewBox:Q}),v.push(te)}const{sdfViewBox:V}=te,N=m[L++],b=m[L++],P=f/j;S[T++]=N+V[0]*P,S[T++]=b+V[1]*P,S[T++]=N+V[2]*P,S[T++]=b+V[3]*P,p[C]=te.atlasIndex}),x.quads=(x.quads||0)+(Bi()-E);const M=Bi();x.sdf={};const A=h.height,q=Math.ceil(c.glyphCount/l),U=Math.pow(2,Math.ceil(Math.log2(q*a)));U>A&&(console.info(`Increasing SDF texture size ${A}->${U}`),J_(h,r,U),u.dispose()),Promise.all(v.map(z=>pu(z,c,s.gpuAccelerateSDF).then(({timing:C})=>{x.sdf[z.atlasIndex]=C}))).then(()=>{v.length&&!c.contextLost&&(mu(c),u.needsUpdate=!0),x.sdfTotal=Bi()-M,x.total=Bi()-t,e(Object.freeze({parameters:s,sdfTexture:u,sdfGlyphSize:a,sdfExponent:o,glyphBounds:S,glyphAtlasIndices:p,glyphColors:d.glyphColors,caretPositions:d.caretPositions,chunkedBounds:d.chunkedBounds,ascender:d.ascender,descender:d.descender,lineHeight:d.lineHeight,capHeight:d.capHeight,xHeight:d.xHeight,topBaseline:d.topBaseline,blockBounds:d.blockBounds,visibleBounds:d.visibleBounds,timings:d.timings}))})}),Promise.resolve().then(()=>{c.contextLost||$_(h)})}function pu({path:s,atlasIndex:e,sdfViewBox:t},{sdfGlyphSize:i,sdfCanvas:n,contextLost:r},o){if(r)return Promise.resolve({timing:-1});const{textureWidth:a,sdfExponent:l}=ki,c=Math.max(t[2]-t[0],t[3]-t[1]),u=Math.floor(e/4),h=u%(a/i)*i,d=Math.floor(u/(a/i))*i,p=e%4;return X_(i,i,s,t,c,l,n,h,d,p,o)}function tv(s){const e=s.sdfCanvas;e.addEventListener("webglcontextlost",t=>{console.log("Context Lost",t),t.preventDefault(),s.contextLost=!0}),e.addEventListener("webglcontextrestored",t=>{console.log("Context Restored",t),s.contextLost=!1;const i=[];s.glyphsByFont.forEach(n=>{n.forEach(r=>{i.push(pu(r,s,!0))})}),Promise.all(i).then(()=>{mu(s),s.sdfTexture.needsUpdate=!0})})}function nv(s,e){for(let t in e)e.hasOwnProperty(t)&&(s[t]=e[t]);return s}let hs;function xc(s){return hs||(hs=typeof document>"u"?{}:document.createElement("a")),hs.href=s,hs.href}function mu(s){if(typeof createImageBitmap!="function"){console.info("Safari<15: applying SDF canvas workaround");const{sdfCanvas:e,sdfTexture:t}=s,{width:i,height:n}=e,r=s.sdfCanvas.getContext("webgl");let o=t.image.data;(!o||o.length!==i*n*4)&&(o=new Uint8Array(i*n*4),t.image={width:i,height:n,data:o},t.flipY=!1,t.isDataTexture=!0),r.readPixels(0,0,i,n,r.RGBA,r.UNSIGNED_BYTE,o)}}const iv=Ji({name:"Typesetter",dependencies:[W_,V_,R_],init(s,e,t){return s(e,t())}}),rv=Ji({name:"Typesetter",dependencies:[iv],init(s){return function(e){return new Promise(t=>{s.typeset(e,t)})}},getTransferables(s){const e=[];for(let t in s)s[t]&&s[t].buffer&&e.push(s[t].buffer);return e}}),Sc={};function sv(s){let e=Sc[s];if(!e){const t=new Zi(1,1,s,s),i=t.clone(),n=t.attributes,r=i.attributes,o=new Zt,a=n.uv.count;for(let l=0;l<a;l++)r.position.array[l*3]*=-1,r.normal.array[l*3+2]*=-1;["position","normal","uv"].forEach(l=>{o.setAttribute(l,new kt([...n[l].array,...r[l].array],n[l].itemSize))}),o.setIndex([...t.index.array,...i.index.array.map(l=>l+a)]),o.translate(.5,.5,0),e=Sc[s]=o}return e}const av="aTroikaGlyphBounds",yc="aTroikaGlyphIndex",ov="aTroikaGlyphColor";class lv extends au{constructor(){super(),this.detail=1,this.curveRadius=0,this.groups=[{start:0,count:1/0,materialIndex:0},{start:0,count:1/0,materialIndex:1}],this.boundingSphere=new gi,this.boundingBox=new Un}computeBoundingSphere(){}computeBoundingBox(){}setSide(e){const t=this.getIndex().count;this.setDrawRange(e===wt?t/2:0,e===cn?t:t/2)}set detail(e){if(e!==this._detail){this._detail=e,(typeof e!="number"||e<1)&&(e=1);let t=sv(e);["position","normal","uv"].forEach(i=>{this.attributes[i]=t.attributes[i].clone()}),this.setIndex(t.getIndex().clone())}}get detail(){return this._detail}set curveRadius(e){e!==this._curveRadius&&(this._curveRadius=e,this._updateBounds())}get curveRadius(){return this._curveRadius}updateGlyphs(e,t,i,n,r){wa(this,av,e,4),wa(this,yc,t,1),wa(this,ov,r,3),this._blockBounds=i,this._chunkedBounds=n,this.instanceCount=t.length,this._updateBounds()}_updateBounds(){const e=this._blockBounds;if(e){const{curveRadius:t,boundingBox:i}=this;if(t){const{PI:n,floor:r,min:o,max:a,sin:l,cos:c}=Math,u=n/2,h=n*2,d=Math.abs(t),p=e[0]/d,g=e[2]/d,_=r((p+u)/h)!==r((g+u)/h)?-d:o(l(p)*d,l(g)*d),m=r((p-u)/h)!==r((g-u)/h)?d:a(l(p)*d,l(g)*d),f=r((p+n)/h)!==r((g+n)/h)?d*2:a(d-c(p)*d,d-c(g)*d);i.min.set(_,e[1],t<0?-f:0),i.max.set(m,e[3],t<0?0:f)}else i.min.set(e[0],e[1],0),i.max.set(e[2],e[3],0);i.getBoundingSphere(this.boundingSphere)}}applyClipRect(e){let t=this.getAttribute(yc).count,i=this._chunkedBounds;if(i)for(let n=i.length;n--;){t=i[n].end;let r=i[n].rect;if(r[1]<e.w&&r[3]>e.y&&r[0]<e.z&&r[2]>e.x)break}this.instanceCount=t}}function wa(s,e,t,i){const n=s.getAttribute(e);t?n&&n.array.length===t.length?(n.array.set(t),n.needsUpdate=!0):(s.setAttribute(e,new Yg(t,i)),delete s._maxInstanceCount,s.dispose()):n&&s.deleteAttribute(e)}const cv=`
uniform vec2 uTroikaSDFTextureSize;
uniform float uTroikaSDFGlyphSize;
uniform vec4 uTroikaTotalBounds;
uniform vec4 uTroikaClipRect;
uniform mat3 uTroikaOrient;
uniform bool uTroikaUseGlyphColors;
uniform float uTroikaDistanceOffset;
uniform float uTroikaBlurRadius;
uniform vec2 uTroikaPositionOffset;
uniform float uTroikaCurveRadius;
attribute vec4 aTroikaGlyphBounds;
attribute float aTroikaGlyphIndex;
attribute vec3 aTroikaGlyphColor;
varying vec2 vTroikaGlyphUV;
varying vec4 vTroikaTextureUVBounds;
varying float vTroikaTextureChannel;
varying vec3 vTroikaGlyphColor;
varying vec2 vTroikaGlyphDimensions;
`,uv=`
vec4 bounds = aTroikaGlyphBounds;
bounds.xz += uTroikaPositionOffset.x;
bounds.yw -= uTroikaPositionOffset.y;

vec4 outlineBounds = vec4(
  bounds.xy - uTroikaDistanceOffset - uTroikaBlurRadius,
  bounds.zw + uTroikaDistanceOffset + uTroikaBlurRadius
);
vec4 clippedBounds = vec4(
  clamp(outlineBounds.xy, uTroikaClipRect.xy, uTroikaClipRect.zw),
  clamp(outlineBounds.zw, uTroikaClipRect.xy, uTroikaClipRect.zw)
);

vec2 clippedXY = (mix(clippedBounds.xy, clippedBounds.zw, position.xy) - bounds.xy) / (bounds.zw - bounds.xy);

position.xy = mix(bounds.xy, bounds.zw, clippedXY);

uv = (position.xy - uTroikaTotalBounds.xy) / (uTroikaTotalBounds.zw - uTroikaTotalBounds.xy);

float rad = uTroikaCurveRadius;
if (rad != 0.0) {
  float angle = position.x / rad;
  position.xz = vec2(sin(angle) * rad, rad - cos(angle) * rad);
  normal.xz = vec2(sin(angle), cos(angle));
}
  
position = uTroikaOrient * position;
normal = uTroikaOrient * normal;

vTroikaGlyphUV = clippedXY.xy;
vTroikaGlyphDimensions = vec2(bounds[2] - bounds[0], bounds[3] - bounds[1]);


float txCols = uTroikaSDFTextureSize.x / uTroikaSDFGlyphSize;
vec2 txUvPerSquare = uTroikaSDFGlyphSize / uTroikaSDFTextureSize;
vec2 txStartUV = txUvPerSquare * vec2(
  mod(floor(aTroikaGlyphIndex / 4.0), txCols),
  floor(floor(aTroikaGlyphIndex / 4.0) / txCols)
);
vTroikaTextureUVBounds = vec4(txStartUV, vec2(txStartUV) + txUvPerSquare);
vTroikaTextureChannel = mod(aTroikaGlyphIndex, 4.0);
`,hv=`
uniform sampler2D uTroikaSDFTexture;
uniform vec2 uTroikaSDFTextureSize;
uniform float uTroikaSDFGlyphSize;
uniform float uTroikaSDFExponent;
uniform float uTroikaDistanceOffset;
uniform float uTroikaFillOpacity;
uniform float uTroikaOutlineOpacity;
uniform float uTroikaBlurRadius;
uniform vec3 uTroikaStrokeColor;
uniform float uTroikaStrokeWidth;
uniform float uTroikaStrokeOpacity;
uniform bool uTroikaSDFDebug;
varying vec2 vTroikaGlyphUV;
varying vec4 vTroikaTextureUVBounds;
varying float vTroikaTextureChannel;
varying vec2 vTroikaGlyphDimensions;

float troikaSdfValueToSignedDistance(float alpha) {
  // Inverse of exponential encoding in webgl-sdf-generator
  
  float maxDimension = max(vTroikaGlyphDimensions.x, vTroikaGlyphDimensions.y);
  float absDist = (1.0 - pow(2.0 * (alpha > 0.5 ? 1.0 - alpha : alpha), 1.0 / uTroikaSDFExponent)) * maxDimension;
  float signedDist = absDist * (alpha > 0.5 ? -1.0 : 1.0);
  return signedDist;
}

float troikaGlyphUvToSdfValue(vec2 glyphUV) {
  vec2 textureUV = mix(vTroikaTextureUVBounds.xy, vTroikaTextureUVBounds.zw, glyphUV);
  vec4 rgba = texture2D(uTroikaSDFTexture, textureUV);
  float ch = floor(vTroikaTextureChannel + 0.5); //NOTE: can't use round() in WebGL1
  return ch == 0.0 ? rgba.r : ch == 1.0 ? rgba.g : ch == 2.0 ? rgba.b : rgba.a;
}

float troikaGlyphUvToDistance(vec2 uv) {
  return troikaSdfValueToSignedDistance(troikaGlyphUvToSdfValue(uv));
}

float troikaGetAADist() {
  
  #if defined(GL_OES_standard_derivatives) || __VERSION__ >= 300
  return length(fwidth(vTroikaGlyphUV * vTroikaGlyphDimensions)) * 0.5;
  #else
  return vTroikaGlyphDimensions.x / 64.0;
  #endif
}

float troikaGetFragDistValue() {
  vec2 clampedGlyphUV = clamp(vTroikaGlyphUV, 0.5 / uTroikaSDFGlyphSize, 1.0 - 0.5 / uTroikaSDFGlyphSize);
  float distance = troikaGlyphUvToDistance(clampedGlyphUV);
 
  // Extrapolate distance when outside bounds:
  distance += clampedGlyphUV == vTroikaGlyphUV ? 0.0 : 
    length((vTroikaGlyphUV - clampedGlyphUV) * vTroikaGlyphDimensions);

  

  return distance;
}

float troikaGetEdgeAlpha(float distance, float distanceOffset, float aaDist) {
  #if defined(IS_DEPTH_MATERIAL) || defined(IS_DISTANCE_MATERIAL)
  float alpha = step(-distanceOffset, -distance);
  #else

  float alpha = smoothstep(
    distanceOffset + aaDist,
    distanceOffset - aaDist,
    distance
  );
  #endif

  return alpha;
}
`,dv=`
float aaDist = troikaGetAADist();
float fragDistance = troikaGetFragDistValue();
float edgeAlpha = uTroikaSDFDebug ?
  troikaGlyphUvToSdfValue(vTroikaGlyphUV) :
  troikaGetEdgeAlpha(fragDistance, uTroikaDistanceOffset, max(aaDist, uTroikaBlurRadius));

#if !defined(IS_DEPTH_MATERIAL) && !defined(IS_DISTANCE_MATERIAL)
vec4 fillRGBA = gl_FragColor;
fillRGBA.a *= uTroikaFillOpacity;
vec4 strokeRGBA = uTroikaStrokeWidth == 0.0 ? fillRGBA : vec4(uTroikaStrokeColor, uTroikaStrokeOpacity);
if (fillRGBA.a == 0.0) fillRGBA.rgb = strokeRGBA.rgb;
gl_FragColor = mix(fillRGBA, strokeRGBA, smoothstep(
  -uTroikaStrokeWidth - aaDist,
  -uTroikaStrokeWidth + aaDist,
  fragDistance
));
gl_FragColor.a *= edgeAlpha;
#endif

if (edgeAlpha == 0.0) {
  discard;
}
`;function fv(s){const e=Ya(s,{chained:!0,extensions:{derivatives:!0},uniforms:{uTroikaSDFTexture:{value:null},uTroikaSDFTextureSize:{value:new He},uTroikaSDFGlyphSize:{value:0},uTroikaSDFExponent:{value:0},uTroikaTotalBounds:{value:new rt(0,0,0,0)},uTroikaClipRect:{value:new rt(0,0,0,0)},uTroikaDistanceOffset:{value:0},uTroikaOutlineOpacity:{value:0},uTroikaFillOpacity:{value:1},uTroikaPositionOffset:{value:new He},uTroikaCurveRadius:{value:0},uTroikaBlurRadius:{value:0},uTroikaStrokeWidth:{value:0},uTroikaStrokeColor:{value:new qe},uTroikaStrokeOpacity:{value:1},uTroikaOrient:{value:new Ze},uTroikaUseGlyphColors:{value:!0},uTroikaSDFDebug:{value:!1}},vertexDefs:cv,vertexTransform:uv,fragmentDefs:hv,fragmentColorTransform:dv,customRewriter({vertexShader:t,fragmentShader:i}){let n=/\buniform\s+vec3\s+diffuse\b/;return n.test(i)&&(i=i.replace(n,"varying vec3 vTroikaGlyphColor").replace(/\bdiffuse\b/g,"vTroikaGlyphColor"),n.test(t)||(t=t.replace(du,`uniform vec3 diffuse;
$&
vTroikaGlyphColor = uTroikaUseGlyphColors ? aTroikaGlyphColor / 255.0 : diffuse;
`))),{vertexShader:t,fragmentShader:i}}});return e.transparent=!0,Object.defineProperties(e,{isTroikaTextMaterial:{value:!0},shadowSide:{get(){return this.side},set(){}}}),e}const lo=new io({color:16777215,side:cn,transparent:!0}),Mc=8421504,Ec=new ct,ds=new Y,Ca=new Y,fr=[],pv=new Y,Ra="+x+y";function bc(s){return Array.isArray(s)?s[0]:s}let gu=()=>{const s=new Wt(new Zi(1,1),lo);return gu=()=>s,s},_u=()=>{const s=new Wt(new Zi(1,1,32,1),lo);return _u=()=>s,s};const mv={type:"syncstart"},gv={type:"synccomplete"},vu=["font","fontSize","fontStyle","fontWeight","lang","letterSpacing","lineHeight","maxWidth","overflowWrap","text","direction","textAlign","textIndent","whiteSpace","anchorX","anchorY","colorRanges","sdfGlyphSize"],_v=vu.concat("material","color","depthOffset","clipRect","curveRadius","orientation","glyphGeometryDetail");class xu extends Wt{constructor(){const e=new lv;super(e,null),this.text="",this.anchorX=0,this.anchorY=0,this.curveRadius=0,this.direction="auto",this.font=null,this.unicodeFontsURL=null,this.fontSize=.1,this.fontWeight="normal",this.fontStyle="normal",this.lang=null,this.letterSpacing=0,this.lineHeight="normal",this.maxWidth=1/0,this.overflowWrap="normal",this.textAlign="left",this.textIndent=0,this.whiteSpace="normal",this.material=null,this.color=null,this.colorRanges=null,this.outlineWidth=0,this.outlineColor=0,this.outlineOpacity=1,this.outlineBlur=0,this.outlineOffsetX=0,this.outlineOffsetY=0,this.strokeWidth=0,this.strokeColor=Mc,this.strokeOpacity=1,this.fillOpacity=1,this.depthOffset=0,this.clipRect=null,this.orientation=Ra,this.glyphGeometryDetail=1,this.sdfGlyphSize=null,this.gpuAccelerateSDF=!0,this.debugSDF=!1}sync(e){this._needsSync&&(this._needsSync=!1,this._isSyncing?(this._queuedSyncs||(this._queuedSyncs=[])).push(e):(this._isSyncing=!0,this.dispatchEvent(mv),ev({text:this.text,font:this.font,lang:this.lang,fontSize:this.fontSize||.1,fontWeight:this.fontWeight||"normal",fontStyle:this.fontStyle||"normal",letterSpacing:this.letterSpacing||0,lineHeight:this.lineHeight||"normal",maxWidth:this.maxWidth,direction:this.direction||"auto",textAlign:this.textAlign,textIndent:this.textIndent,whiteSpace:this.whiteSpace,overflowWrap:this.overflowWrap,anchorX:this.anchorX,anchorY:this.anchorY,colorRanges:this.colorRanges,includeCaretPositions:!0,sdfGlyphSize:this.sdfGlyphSize,gpuAccelerateSDF:this.gpuAccelerateSDF,unicodeFontsURL:this.unicodeFontsURL},t=>{this._isSyncing=!1,this._textRenderInfo=t,this.geometry.updateGlyphs(t.glyphBounds,t.glyphAtlasIndices,t.blockBounds,t.chunkedBounds,t.glyphColors);const i=this._queuedSyncs;i&&(this._queuedSyncs=null,this._needsSync=!0,this.sync(()=>{i.forEach(n=>n&&n())})),this.dispatchEvent(gv),e&&e()})))}onBeforeRender(e,t,i,n,r,o){this.sync(),r.isTroikaTextMaterial&&this._prepareForRender(r),r._hadOwnSide=r.hasOwnProperty("side"),this.geometry.setSide(r._actualSide=r.side),r.side=Sn}onAfterRender(e,t,i,n,r,o){r._hadOwnSide?r.side=r._actualSide:delete r.side}dispose(){this.geometry.dispose()}get textRenderInfo(){return this._textRenderInfo||null}get material(){let e=this._derivedMaterial;const t=this._baseMaterial||this._defaultMaterial||(this._defaultMaterial=lo.clone());if((!e||e.baseMaterial!==t)&&(e=this._derivedMaterial=fv(t),t.addEventListener("dispose",function i(){t.removeEventListener("dispose",i),e.dispose()})),this.outlineWidth||this.outlineBlur||this.outlineOffsetX||this.outlineOffsetY){let i=e._outlineMtl;return i||(i=e._outlineMtl=Object.create(e,{id:{value:e.id+.1}}),i.isTextOutlineMaterial=!0,i.depthWrite=!1,i.map=null,e.addEventListener("dispose",function n(){e.removeEventListener("dispose",n),i.dispose()})),[i,e]}else return e}set material(e){e&&e.isTroikaTextMaterial?(this._derivedMaterial=e,this._baseMaterial=e.baseMaterial):this._baseMaterial=e}get glyphGeometryDetail(){return this.geometry.detail}set glyphGeometryDetail(e){this.geometry.detail=e}get curveRadius(){return this.geometry.curveRadius}set curveRadius(e){this.geometry.curveRadius=e}get customDepthMaterial(){return bc(this.material).getDepthMaterial()}get customDistanceMaterial(){return bc(this.material).getDistanceMaterial()}_prepareForRender(e){const t=e.isTextOutlineMaterial,i=e.uniforms,n=this.textRenderInfo;if(n){const{sdfTexture:a,blockBounds:l}=n;i.uTroikaSDFTexture.value=a,i.uTroikaSDFTextureSize.value.set(a.image.width,a.image.height),i.uTroikaSDFGlyphSize.value=n.sdfGlyphSize,i.uTroikaSDFExponent.value=n.sdfExponent,i.uTroikaTotalBounds.value.fromArray(l),i.uTroikaUseGlyphColors.value=!t&&!!n.glyphColors;let c=0,u=0,h=0,d,p,g,_=0,m=0;if(t){let{outlineWidth:x,outlineOffsetX:v,outlineOffsetY:S,outlineBlur:T,outlineOpacity:L}=this;c=this._parsePercent(x)||0,u=Math.max(0,this._parsePercent(T)||0),d=L,_=this._parsePercent(v)||0,m=this._parsePercent(S)||0}else h=Math.max(0,this._parsePercent(this.strokeWidth)||0),h&&(g=this.strokeColor,i.uTroikaStrokeColor.value.set(g??Mc),p=this.strokeOpacity,p==null&&(p=1)),d=this.fillOpacity;i.uTroikaDistanceOffset.value=c,i.uTroikaPositionOffset.value.set(_,m),i.uTroikaBlurRadius.value=u,i.uTroikaStrokeWidth.value=h,i.uTroikaStrokeOpacity.value=p,i.uTroikaFillOpacity.value=d??1,i.uTroikaCurveRadius.value=this.curveRadius||0;let f=this.clipRect;if(f&&Array.isArray(f)&&f.length===4)i.uTroikaClipRect.value.fromArray(f);else{const x=(this.fontSize||.1)*100;i.uTroikaClipRect.value.set(l[0]-x,l[1]-x,l[2]+x,l[3]+x)}this.geometry.applyClipRect(i.uTroikaClipRect.value)}i.uTroikaSDFDebug.value=!!this.debugSDF,e.polygonOffset=!!this.depthOffset,e.polygonOffsetFactor=e.polygonOffsetUnits=this.depthOffset||0;const r=t?this.outlineColor||0:this.color;if(r==null)delete e.color;else{const a=e.hasOwnProperty("color")?e.color:e.color=new qe;(r!==a._input||typeof r=="object")&&a.set(a._input=r)}let o=this.orientation||Ra;if(o!==e._orientation){let a=i.uTroikaOrient.value;o=o.replace(/[^-+xyz]/g,"");let l=o!==Ra&&o.match(/^([-+])([xyz])([-+])([xyz])$/);if(l){let[,c,u,h,d]=l;ds.set(0,0,0)[u]=c==="-"?1:-1,Ca.set(0,0,0)[d]=h==="-"?-1:1,Ec.lookAt(pv,ds.cross(Ca),Ca),a.setFromMatrix4(Ec)}else a.identity();e._orientation=o}}_parsePercent(e){if(typeof e=="string"){let t=e.match(/^(-?[\d.]+)%$/),i=t?parseFloat(t[1]):NaN;e=(isNaN(i)?0:i/100)*this.fontSize}return e}localPositionToTextCoords(e,t=new He){t.copy(e);const i=this.curveRadius;return i&&(t.x=Math.atan2(e.x,Math.abs(i)-Math.abs(e.z))*Math.abs(i)),t}worldPositionToTextCoords(e,t=new He){return ds.copy(e),this.localPositionToTextCoords(this.worldToLocal(ds),t)}raycast(e,t){const{textRenderInfo:i,curveRadius:n}=this;if(i){const r=i.blockBounds,o=n?_u():gu(),a=o.geometry,{position:l,uv:c}=a.attributes;for(let u=0;u<c.count;u++){let h=r[0]+c.getX(u)*(r[2]-r[0]);const d=r[1]+c.getY(u)*(r[3]-r[1]);let p=0;n&&(p=n-Math.cos(h/n)*n,h=Math.sin(h/n)*n),l.setXYZ(u,h,d,p)}a.boundingSphere=this.geometry.boundingSphere,a.boundingBox=this.geometry.boundingBox,o.matrixWorld=this.matrixWorld,o.material.side=this.material.side,fr.length=0,o.raycast(e,fr);for(let u=0;u<fr.length;u++)fr[u].object=this,t.push(fr[u])}}copy(e){const t=this.geometry;return super.copy(e),this.geometry=t,_v.forEach(i=>{this[i]=e[i]}),this}clone(){return new this.constructor().copy(this)}}vu.forEach(s=>{const e="_private_"+s;Object.defineProperty(xu.prototype,s,{get(){return this[e]},set(t){t!==this[e]&&(this[e]=t,this._needsSync=!0)}})});class vv{constructor(e,t){yn(this,"axisLineWidth",.005);yn(this,"gridLineColor",13684944);yn(this,"standardFontSize",.1);yn(this,"boldFontSize",.11);yn(this,"markerLength",.03);yn(this,"gridLineWidth");yn(this,"axisSettings");yn(this,"scene");this.scene=e,this.axisSettings=t,this.gridLineWidth=this.axisLineWidth/10}draw(){this.drawZAxisMainLine(),this.drawYAxisMainLine(),this.drawXAxisMainLine(),this.drawXAxisLabelText(),this.drawZAxisLabelText(),this.drawYAxisLabelText(),this.drawAxisMarkers(),this.drawGridLines()}drawXAxisMainLine(){const{xAxisLength:e}=this.axisSettings;this.drawLine({fromVector3:[0,0,0],toVector3:[e,0,0],hexColor:rc,lineWidth:this.axisLineWidth,renderOrder:0})}drawYAxisMainLine(){const{zAxisLength:e}=this.axisSettings;this.drawLine({fromVector3:[0,0,0],toVector3:[0,0,-e],hexColor:Va,lineWidth:this.axisLineWidth,renderOrder:0})}drawZAxisMainLine(){const{yAxisLength:e}=this.axisSettings;this.drawLine({fromVector3:[0,0,0],toVector3:[0,e,0],hexColor:Es,lineWidth:this.axisLineWidth,renderOrder:0})}drawYAxisLabelText(){const{yAxisLength:e}=this.axisSettings;this.drawText({location:[.21,e/2,0],text:"Features",anchor:"center",fontSize:this.boldFontSize,fontWeight:"bold",rotationVector:[0,Math.PI,Math.PI/2]})}drawZAxisLabelText(){const{zAxisLength:e}=this.axisSettings;this.drawText({location:[0,.21,-e/2],text:"Unexplored Territory",anchor:"center",fontSize:this.boldFontSize,fontWeight:"bold",rotationVector:[0,Math.PI/2,0]})}drawXAxisLabelText(){const{xAxisLength:e}=this.axisSettings;this.drawText({location:[e/2,.21,0],text:"Content",anchor:"center",fontSize:this.boldFontSize,fontWeight:"bold",rotationVector:[0,Math.PI,0]})}drawAxisMarkers(){this.drawZAxisTextNMarker(),this.drawYAxisTextNMarker(),this.drawXAxisTextNMarker()}drawGridLines(){const{xAxisLength:e,yAxisLength:t,zAxisLength:i}=this.axisSettings;this.drawXAxisGridLines(e/10),this.drawYAxisGridLines(t/10),this.drawZAxisGridLines(i/10)}drawXAxisGridLines(e){const{xAxisLength:t,yAxisLength:i,zAxisLength:n}=this.axisSettings;for(let r=e;r<=t;r+=e)this.drawXtoYGridLine(r,i),this.drawXToZGridline(r,n)}drawXToZGridline(e,t){this.drawLine({fromVector3:[e,0,0],toVector3:[e,0,-t],hexColor:this.gridLineColor,lineWidth:this.gridLineWidth,renderOrder:-1})}drawXtoYGridLine(e,t){this.drawLine({fromVector3:[e,0,0],toVector3:[e,t,0],hexColor:this.gridLineColor,lineWidth:this.gridLineWidth,renderOrder:-1})}drawYAxisGridLines(e){const{xAxisLength:t,zAxisLength:i}=this.axisSettings;for(let n=e;n<=i;n+=e)this.drawYtoXGridLine(n,t),this.drawYToZGridLine(n,i)}drawYtoXGridLine(e,t){this.drawLine({fromVector3:[0,e,0],toVector3:[t,e,0],hexColor:this.gridLineColor,lineWidth:this.gridLineWidth,renderOrder:-1})}drawYToZGridLine(e,t){this.drawLine({fromVector3:[0,e,0],toVector3:[0,e,-t],hexColor:this.gridLineColor,lineWidth:this.gridLineWidth,renderOrder:-1})}drawZAxisGridLines(e){const{xAxisLength:t,yAxisLength:i,zAxisLength:n}=this.axisSettings;for(let r=e;r<=n;r+=e)this.drawZtoXGridLine(r,t),this.drawZtoYGridline(r,i)}drawZtoXGridLine(e,t){this.drawLine({fromVector3:[0,0,-e],toVector3:[t,0,-e],hexColor:this.gridLineColor,lineWidth:this.gridLineWidth,renderOrder:-1})}drawZtoYGridline(e,t){this.drawLine({fromVector3:[0,0,-e],toVector3:[0,t,-e],hexColor:this.gridLineColor,lineWidth:this.gridLineWidth,renderOrder:-1})}drawXAxisTextNMarker(){const{xAxisLength:e,desiredXAxis:t}=this.axisSettings,i=e/10,n=t/10;let r=0;for(let o=0;o<=e;o+=i)this.drawXAxisMarker(o),this.drawXAxisIncrementText(o,r),r+=n}drawXAxisMarker(e){this.drawLine({fromVector3:[e,-this.markerLength,0],toVector3:[e,0,0],hexColor:rc,lineWidth:this.axisLineWidth,renderOrder:0})}drawXAxisIncrementText(e,t){this.drawText({location:[e,-this.markerLength,0],text:t.toString(),anchor:"center",fontSize:this.standardFontSize,fontWeight:"normal",rotationVector:[0,Math.PI,0]})}drawYAxisTextNMarker(){const{yAxisLength:e,desiredYAxis:t}=this.axisSettings,i=e/10,n=t/10;let r=0;for(let o=0;o<=e;o+=i)this.drawYAxisMarker(o),this.drawYAxisIncrementText(o,r),r+=n}drawYAxisMarker(e){this.drawLine({fromVector3:[-this.markerLength,e,0],toVector3:[0,e,0],hexColor:Es,lineWidth:this.axisLineWidth,renderOrder:0})}drawYAxisIncrementText(e,t){this.drawText({location:[-this.markerLength-.12,e+.05,0],text:t.toString(),anchor:"center",fontSize:this.standardFontSize,fontWeight:"normal",rotationVector:[0,Math.PI-Math.PI/4,0]})}drawZAxisTextNMarker(){const{zAxisLength:e,desiredZAxis:t}=this.axisSettings,i=e/10,n=t/10;let r=n;for(let o=i;o<=e;o+=i)this.drawZAxisMarker(o),this.drawZAxisIncrementText(o,r),r+=n}drawZAxisMarker(e){this.drawLine({fromVector3:[0,-this.markerLength,-e],toVector3:[0,0,-e],hexColor:Va,lineWidth:this.axisLineWidth,renderOrder:0})}drawZAxisIncrementText(e,t){this.drawText({location:[0,-this.markerLength,-e],text:t.toString(),anchor:"center",fontSize:this.standardFontSize,fontWeight:"normal",rotationVector:[0,Math.PI/2,0]})}drawText(e){const{location:t,text:i,anchor:n,fontSize:r,fontWeight:o,rotationVector:a}=e,l=new xu(i);l.text=i,l.fontSize=r,l.position.set(t[0],t[1],t[2]),l.color=v_,l.anchorX=n,l.anchorY="center",l.renderOrder=1,l.material.depthTest=!1,l.fontWeight=o,l.rotation.set(a[0],a[1],a[2]),this.scene.add(l),l.sync()}drawLine(e){const{fromVector3:t,toVector3:i,hexColor:n,lineWidth:r,renderOrder:o}=e,a=new cu;a.setPositions([...t,...i]);const l=new oo({linewidth:r,color:n,depthTest:!1}),c=new M_(a,l);c.renderOrder=o,this.scene.add(c)}}const Tc=.01,ln={xAxisLength:2.5,yAxisLength:2.1,zAxisLength:2.1,desiredXAxis:100,desiredYAxis:20,desiredZAxis:20},St={boxInputWidth:Math.round(ln.desiredXAxis/ln.xAxisLength),boxInputHeight:Math.round(ln.desiredYAxis/ln.yAxisLength),boxInputDepth:Math.round(ln.desiredZAxis/ln.zAxisLength),members:1,formula:"",months:"",boxOpacity:.7,debug:Dv,formulaDisplay:()=>{},monthsDisplay:()=>{},toggleOrbitButton:Ev},br=Lv(),pi=Pv();let bs=null,xr=null;Tr();const Wi=new Wg;Wi.background=new qe(ou);const vn=document.querySelector("#visualizerCanvas"),Su=new ru({antialias:!0,canvas:vn}),xv=20,Sv=vn.clientWidth/vn.clientHeight,yv=.1,Mv=1e3,Ln=new jt(xv,Sv,yv,Mv);Ln.position.set(8.401016624276645,5.048890255251792,-6.828977259134645);Ln.quaternion.set(-.08978106831528793,.8832999764834034,.18904120482201572,.4195043911522562);const Ts=new r_(Ln,vn);Ts.update();Ts.enabled=!1;Av();bv();Tv();bu();function Ev(){Ts.enabled=!Ts.enabled}function bv(){yu(),Mu(),Eu()}function Tv(){Wi.add(pi),br.forEach(e=>{Wi.add(e)}),Ac([-1,2,4]),Ac([1,-1,-2]),new vv(Wi,ln).draw()}function Tr(){const{boxInputWidth:s,boxInputHeight:e,boxInputDepth:t,members:i}=St,n=s*e*(t+1)/i/100;St.formula=`${s} x ${e} x (${t} + 1) % ${i} % 100 =`,Cv(n);const r=n*12,o=r>1,a=`<b>${n.toFixed(2)} Year${n>1?"s":""}</b> or `,l=`<b>${o?r.toFixed(0):r.toFixed(2)} Month${o?"s":""}</b>`;St.months=a+l,bs&&(bs.name(St.formula),xr==null||xr.name(St.months))}function yu(){pi.scale.x=qa(),Kn(pi),Tr(),br.forEach(s=>{s.scale.x=qa(),Kn(s)})}function Mu(){pi.scale.y=Ka(),Kn(pi),Tr(),br.forEach(s=>{s.scale.y=Ka(),Kn(s)})}function Eu(){pi.scale.z=Za(),Kn(pi),Tr(),br.forEach(s=>{s.scale.z=Za(),Kn(s)})}function Av(){const s=new __({container:document.getElementById("forms"),title:"Product Scope"});wv(s)}function wv(s){const{desiredXAxis:e,desiredYAxis:t,desiredZAxis:i}=ln;s.add(St,"boxInputHeight",1,t,1).name("Features").onChange(Mu),s.add(St,"boxInputWidth",1,e,1).name("Content").onChange(yu),s.add(St,"boxInputDepth",0,i,1).name("Unexplored Territory").onChange(Eu);const n=s.addFolder("Project Scope");n.add(St,"members").min(1).step(1).name("Team Size").onChange(Tr),bs=n.add(St,"formulaDisplay"),bs.name(St.formula).listen().disable(),xr=n.add(St,"monthsDisplay"),xr.name(St.months).listen().disable()}function Cv(s){const i=Math.min(Math.max(s,.8),5)/5,n=Rv(Es,Va,i);br.forEach(r=>{r.material.color=new qe(n)})}function Rv(s,e,t){const i=s>>16,n=s>>8&255,r=s&255,o=e>>16,a=e>>8&255,l=e&255,c=i+t*(o-i),u=n+t*(a-n),h=r+t*(l-r);return(c<<16)+(u<<8)+(h|0)}function Lv(){let s=[];const e=new _i(1,1,1);return console.log(e),[wt,Sn].forEach((t,i)=>{const n=new $g({color:new qe(Es),opacity:St.boxOpacity,transparent:!0,side:t,depthTest:!1}),r=new Wt(e,n);r.renderOrder=2+i,Kn(r),s.push(r)}),s}function Kn(s){const{w:e,h:t,d:i}={w:qa()/2+Tc,h:Ka()/2,d:Za()/2-Tc};s.position.set(e,t,i)}function Pv(){var s=new _i(1,1,1),e=new Kg(s);const t=new qg(e,new su({color:new qe("black"),depthTest:!1}));return Kn(t),t.renderOrder=4,t}function Ac(s){const e=new t_(ou,6);e.position.set(s[0],s[1],s[2]),Wi.add(e)}function qa(){const{xAxisLength:s,desiredXAxis:e}=ln;return s/e*St.boxInputWidth}function Ka(){const{yAxisLength:s,desiredYAxis:e}=ln;return s/e*St.boxInputHeight}function Za(){const{zAxisLength:s,desiredZAxis:e}=ln;return-1*(s/e)*(St.boxInputDepth+1)}function Uv(){const s=window.devicePixelRatio,e=vn.clientWidth*s|0,t=vn.clientWidth*s|0,i=vn.width!==e||vn.height!==t;return i&&Su.setSize(e,t,!1),i}function bu(){requestAnimationFrame(bu),Uv()&&(Ln.aspect=vn.width/vn.height,Ln.updateProjectionMatrix()),Su.render(Wi,Ln)}function Dv(){console.log("===================================");let s=new Y(0,0,-1);s.applyQuaternion(Ln.quaternion);let e="";e+=La("Camera Position",Ln.position),e+=La("Lookat",s),e+=La("Cam Rotation",Ln.rotation),console.log(e)}function La(s,e){let{x:t,y:i,z:n}=e;return s+`: ${t.toFixed(2)}, ${i.toFixed(2)}, ${n.toFixed(2)}
`}

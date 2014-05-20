// SmoothScroll for websites v1.2.1
// Licensed under the terms of the MIT license.
// People involved
//  - Balazs Galambosi (maintainer)  
//  - Michael Herf     (Pulse Algorithm)
(function(){function c(){var e=!1;e&&N("keydown",y);t.keyboardSupport&&!e&&T("keydown",y)}function h(){if(!document.body)return;if(is_touch_device())return;var e=document.body,i=document.documentElement,a=window.innerHeight,f=e.scrollHeight;o=document.compatMode.indexOf("CSS")>=0?i:e;u=e;c();s=!0;if(top!=self)r=!0;else if(f>a&&(e.offsetHeight<=a||i.offsetHeight<=a)){i.style.height="auto";setTimeout(refresh,10);if(o.offsetHeight<=a){var l=document.createElement("div");l.style.clear="both";e.appendChild(l)}}if(!t.fixedBackground&&!n){e.style.backgroundAttachment="scroll";i.style.backgroundAttachment="scroll"}}function m(e,n,r,i){i||(i=1e3);k(n,r);if(t.accelerationMax!=1){var s=+(new Date),o=s-v;if(o<t.accelerationDelta){var u=(1+30/o)/2;if(u>1){u=Math.min(u,t.accelerationMax);n*=u;r*=u}}v=+(new Date)}p.push({x:n,y:r,lastX:n<0?.99:-0.99,lastY:r<0?.99:-0.99,start:+(new Date)});if(d)return;var a=e===document.body,f=function(s){var o=+(new Date),u=0,l=0;for(var c=0;c<p.length;c++){var h=p[c],v=o-h.start,m=v>=t.animationTime,g=m?1:v/t.animationTime;t.pulseAlgorithm&&(g=D(g));var y=h.x*g-h.lastX>>0,b=h.y*g-h.lastY>>0;u+=y;l+=b;h.lastX+=y;h.lastY+=b;if(m){p.splice(c,1);c--}}if(a)window.scrollBy(u,l);else{u&&(e.scrollLeft+=u);l&&(e.scrollTop+=l)}!n&&!r&&(p=[]);p.length?M(f,e,i/t.frameRate+1):d=!1};M(f,e,0);d=!0}function g(e){s||h();var n=e.target,r=x(n);if(!r||e.defaultPrevented||C(u,"embed")||C(n,"embed")&&/\.pdf/i.test(n.src))return!0;var i=e.wheelDeltaX||0,o=e.wheelDeltaY||0;!i&&!o&&(o=e.wheelDelta||0);if(!t.touchpadSupport&&A(o))return!0;Math.abs(i)>1.2&&(i*=t.stepSize/120);Math.abs(o)>1.2&&(o*=t.stepSize/120);m(r,-i,-o);e.preventDefault()}function y(e){var n=e.target,r=e.ctrlKey||e.altKey||e.metaKey||e.shiftKey&&e.keyCode!==l.spacebar;if(/input|textarea|select|embed/i.test(n.nodeName)||n.isContentEditable||e.defaultPrevented||r)return!0;if(C(n,"button")&&e.keyCode===l.spacebar)return!0;var i,s=0,o=0,a=x(u),f=a.clientHeight;a==document.body&&(f=window.innerHeight);switch(e.keyCode){case l.up:o=-t.arrowScroll;break;case l.down:o=t.arrowScroll;break;case l.spacebar:i=e.shiftKey?1:-1;o=-i*f*.9;break;case l.pageup:o=-f*.9;break;case l.pagedown:o=f*.9;break;case l.home:o=-a.scrollTop;break;case l.end:var c=a.scrollHeight-a.scrollTop-f;o=c>0?c+10:0;break;case l.left:s=-t.arrowScroll;break;case l.right:s=t.arrowScroll;break;default:return!0}m(a,s,o);e.preventDefault()}function b(e){u=e.target}function S(e,t){for(var n=e.length;n--;)w[E(e[n])]=t;return t}function x(e){var t=[],n=o.scrollHeight;do{var i=w[E(e)];if(i)return S(t,i);t.push(e);if(n===e.scrollHeight){if(!r||o.clientHeight+10<n)return S(t,document.body)}else if(e.clientHeight+10<e.scrollHeight){overflow=getComputedStyle(e,"").getPropertyValue("overflow-y");if(overflow==="scroll"||overflow==="auto")return S(t,e)}}while(e=e.parentNode)}function T(e,t,n){window.addEventListener(e,t,n||!1)}function N(e,t,n){window.removeEventListener(e,t,n||!1)}function C(e,t){return(e.nodeName||"").toLowerCase()===t.toLowerCase()}function k(e,t){e=e>0?1:-1;t=t>0?1:-1;if(i.x!==e||i.y!==t){i.x=e;i.y=t;p=[];v=0}}function A(e){if(!e)return;e=Math.abs(e);f.push(e);f.shift();clearTimeout(L);var t=f[0]==f[1]&&f[1]==f[2],n=O(f[0],120)&&O(f[1],120)&&O(f[2],120);return!t&&!n}function O(e,t){return Math.floor(e/t)==e/t}function _(e){var n,r,i;e*=t.pulseScale;if(e<1)n=e-(1-Math.exp(-e));else{r=Math.exp(-1);e-=1;i=1-Math.exp(-e);n=r+i*(1-r)}return n*t.pulseNormalize}function D(e){if(e>=1)return 1;if(e<=0)return 0;t.pulseNormalize==1&&(t.pulseNormalize/=_(1));return _(e)}var e={frameRate:150,animationTime:400,stepSize:120,pulseAlgorithm:!0,pulseScale:8,pulseNormalize:1,accelerationDelta:20,accelerationMax:1,keyboardSupport:!0,arrowScroll:50,touchpadSupport:!0,fixedBackground:!0,excluded:""},t=e,n=!1,r=!1,i={x:0,y:0},s=!1,o=document.documentElement,u,a,f=[120,120,120],l={left:37,up:38,right:39,down:40,spacebar:32,pageup:33,pagedown:34,end:35,home:36},t=e,p=[],d=!1,v=+(new Date),w={};setInterval(function(){w={}},1e4);var E=function(){var e=0;return function(t){return t.uniqueID||(t.uniqueID=e++)}}(),L,M=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||function(e,t,n){window.setTimeout(e,n||1e3/60)}}(),P=/chrome/i.test(window.navigator.userAgent),H="onmousewheel"in document;if(H&&P){T("mousedown",b);T("mousewheel",g);T("load",h)}})();
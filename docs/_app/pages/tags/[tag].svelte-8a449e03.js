import{_ as t}from"../../chunks/goodbye-550c1fec.js";import{_ as s}from"../../chunks/hello-a54b36af.js";import{_ as e}from"../../chunks/second-post-86f894d9.js";import{S as a,i as o,s as r,e as n,t as l,c,a as h,g as f,d as i,b as p,f as m,E as g,h as d,k as u,n as b,I as j,J as k}from"../../chunks/vendor-1fda6636.js";import{b as v}from"../../chunks/paths-45dac81d.js";function E(t,s,e){const a=t.slice();return a[2]=s[e],a}function M(t){let s,e,a,o,r=t[2].title+"";return{c(){s=n("li"),e=n("a"),a=l(r),this.h()},l(t){s=c(t,"LI",{});var o=h(s);e=c(o,"A",{"sveltekit:prefetch":!0,href:!0});var n=h(e);a=f(n,r),n.forEach(i),o.forEach(i),this.h()},h(){p(e,"sveltekit:prefetch",""),p(e,"href",o=v+"/posts/"+t[2].filename)},m(t,o){m(t,s,o),g(s,e),g(e,a)},p(t,s){2&s&&r!==(r=t[2].title+"")&&d(a,r),2&s&&o!==(o=v+"/posts/"+t[2].filename)&&p(e,"href",o)},d(t){t&&i(s)}}}function O(t){let s,e,a,o,r,p=t[1],v=[];for(let n=0;n<p.length;n+=1)v[n]=M(E(t,p,n));return{c(){s=n("h1"),e=l("Posts with tag "),a=l(t[0]),o=u(),r=n("ul");for(let t=0;t<v.length;t+=1)v[t].c()},l(n){s=c(n,"H1",{});var l=h(s);e=f(l,"Posts with tag "),a=f(l,t[0]),l.forEach(i),o=b(n),r=c(n,"UL",{});var p=h(r);for(let t=0;t<v.length;t+=1)v[t].l(p);p.forEach(i)},m(t,n){m(t,s,n),g(s,e),g(s,a),m(t,o,n),m(t,r,n);for(let s=0;s<v.length;s+=1)v[s].m(r,null)},p(t,[s]){if(1&s&&d(a,t[0]),2&s){let e;for(p=t[1],e=0;e<p.length;e+=1){const a=E(t,p,e);v[e]?v[e].p(a,s):(v[e]=M(a),v[e].c(),v[e].m(r,null))}for(;e<v.length;e+=1)v[e].d(1);v.length=p.length}},i:j,o:j,d(t){t&&i(s),t&&i(o),t&&i(r),k(v,t)}}}const _=({page:a})=>{const o={"../posts/goodbye.md":t,"../posts/hello.md":s,"../posts/second-post.md":e},r=a.params.tag,n=Object.entries(o).filter((([t,s])=>s.metadata.tags.includes(r))).map((([t,s])=>{const e=t.split("/"),a=e[e.length-1].replace(".md","");return Object.assign(Object.assign({},s.metadata),{filename:a})}));return{props:{tag:r,postsMeta:n}}};function w(t,s,e){let{tag:a}=s,{postsMeta:o}=s;return t.$$set=t=>{"tag"in t&&e(0,a=t.tag),"postsMeta"in t&&e(1,o=t.postsMeta)},[a,o]}class x extends a{constructor(t){super(),o(this,t,w,O,r,{tag:0,postsMeta:1})}}export{x as default,_ as load};

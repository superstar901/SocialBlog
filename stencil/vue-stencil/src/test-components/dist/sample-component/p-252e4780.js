import{a as e}from"./p-7be683ab.js";const r=new RegExp(["(\\\\.)","(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"),"g"),t=e=>e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1"),n=e=>e.replace(/([=!:$\/()])/g,"\\$1"),a=e=>e&&e.sensitive?"":"i",i=(e,r,n)=>{for(var i=(n=n||{}).strict,l=!1!==n.end,s=t(n.delimiter||"/"),p=n.delimiters||"./",u=[].concat(n.endsWith||[]).map(t).concat("$").join("|"),o="",c=!1,h=0;h<e.length;h++){var f=e[h];if("string"==typeof f)o+=t(f),c=h===e.length-1&&p.indexOf(f[f.length-1])>-1;else{var g=t(f.prefix||""),m=f.repeat?"(?:"+f.pattern+")(?:"+g+"(?:"+f.pattern+"))*":f.pattern;r&&r.push(f),o+=f.optional?f.partial?g+"("+m+")?":"(?:"+g+"("+m+"))?":g+"("+m+")"}}return l?(i||(o+="(?:"+s+")?"),o+="$"===u?"$":"(?="+u+")"):(i||(o+="(?:"+s+"(?="+u+"))?"),c||(o+="(?="+s+"|"+u+")")),new RegExp("^"+o,a(n))},l=(e,s,p)=>e instanceof RegExp?((e,r)=>{if(!r)return e;var t=e.source.match(/\((?!\?)/g);if(t)for(var n=0;n<t.length;n++)r.push({name:n,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,pattern:null});return e})(e,s):Array.isArray(e)?((e,r,t)=>{for(var n=[],i=0;i<e.length;i++)n.push(l(e[i],r,t).source);return new RegExp("(?:"+n.join("|")+")",a(t))})(e,s,p):((e,a,l)=>i(((e,a)=>{for(var i,l=[],s=0,p=0,u="",o=a&&a.delimiter||"/",c=a&&a.delimiters||"./",h=!1;null!==(i=r.exec(e));){var f=i[0],g=i[1],m=i.index;if(u+=e.slice(p,m),p=m+f.length,g)u+=g[1],h=!0;else{var d="",x=e[p],v=i[2],$=i[3],y=i[4],E=i[5];if(!h&&u.length){var b=u.length-1;c.indexOf(u[b])>-1&&(d=u[b],u=u.slice(0,b))}u&&(l.push(u),u="",h=!1);var j=d||o,w=$||y;l.push({name:v||s++,prefix:d,delimiter:j,optional:"?"===E||"*"===E,repeat:"+"===E||"*"===E,partial:""!==d&&void 0!==x&&x!==d,pattern:w?n(w):"[^"+t(j)+"]+?"})}}return(u||p<e.length)&&l.push(u+e.substr(p)),l})(e,l),a,l))(e,s,p);let s=0;const p={},u=(e,r={})=>{"string"==typeof r&&(r={path:r});const{path:t="/",exact:n=!1,strict:a=!1}=r,{re:i,keys:u}=((e,r)=>{const t=`${r.end}${r.strict}`,n=p[t]||(p[t]={}),a=JSON.stringify(e);if(n[a])return n[a];const i=[],u={re:l(e,i,r),keys:i};return s<1e4&&(n[a]=u,s+=1),u})(t,{end:n,strict:a}),o=i.exec(e);if(!o)return null;const[c,...h]=o,f=e===c;return n&&!f?null:{path:t,url:"/"===t&&""===c?"/":c,isExact:f,params:u.reduce((e,r,t)=>(e[r.name]=h[t],e),{})}},o=(r,t)=>null==r&&null==t||null!=t&&r&&t&&r.path===t.path&&r.url===t.url&&e(r.params,t.params);export{u as a,o as b};
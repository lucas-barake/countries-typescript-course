(()=>{"use strict";const t=[];function n(t){const n=document.querySelector(t);if(!n)throw new Error(`Element ${t} not found`);return n}const e=n("form"),s=n("input"),a=n("#state"),o=n("#loading-spinner"),c=n("#country-list"),i=n("button[type=submit]");function l(t){c.innerHTML="",t.forEach((t=>{const n=document.createElement("div");n.className="flex flex-col bg-neutral-900 w-72 shadow-lg rounded-lg",n.insertAdjacentHTML("beforeend",`<img\n            class="rounded-t-lg"\n            src="${t.flags.svg}"\n      />\n      <div class="flex flex-col pl-6 py-4 gap-1">\n        <h1 class="text-sm font-medium">${t.name.common}</h1>\n        <p class="font-light text-xs">\n          <span class="font-medium">Population:</span> ${t.population}\n        </p>\n        <p class="font-light text-xs"><span class="font-medium">Region:</span> ${t.region}</p>\n        <p class="font-light text-xs"><span class="font-medium">Capital:</span> ${t.capital}</p>\n      </div>`);const e=document.createElement("button");e.onclick=()=>r(t),e.className="text-xs font-medium self-end px-6 py-4 hover:animate-pulse",e.textContent="Learn more →",e.type="button",n.appendChild(e),c.appendChild(n)}))}function r(n){const{capital:s,flags:{svg:a},region:o,population:i,name:{common:l},subregion:d,currencies:p,tld:m,languages:u,borders:f}=n;c.innerHTML="",e.innerHTML="";const g=document.createElement("button");g.textContent="← Back",g.className="px-2 py-1 bg-[#2b3743] font-medium text-xs shadow-md rounded-md",g.onclick=()=>location.reload(),c.appendChild(g);const h=document.createElement("img");h.src=a,c.appendChild(h),c.insertAdjacentHTML("beforeend",`<h1>${l}</h1>\n    <p class="text-sm font-light"><span class="font-medium">Native Name:</span> ${l}</p>\n    <p class="text-sm font-light"><span class="font-medium">Population:</span> ${i.toLocaleString()}</p>\n    <p class="text-sm font-light"><span class="font-medium">Region:</span> ${o}</p>\n    <p class="text-sm font-light"><span class="font-medium">Sub Region:</span> ${d}</p>\n    <p class="text-sm font-light"><span class="font-medium">Capital:</span> ${s}</p>\n    <p class="text-sm font-light"><span class="font-medium">Top Level Domain:</span> ${m}</p>\n    <p class="text-sm font-light"><span class="font-medium">Currencies:</span> ${Object.keys(p)[0]}</p>\n    <p class="text-sm font-light">\n      <span class="font-medium">Languages:</span> ${Object.keys(u).join(", ").toUpperCase()}\n    </p>`);const x=document.createElement("div");x.className="grid items-center grid-cols-4 gap-2",f.forEach((n=>{const e=document.createElement("button");e.type="button",e.className="px-2 py-1 bg-[#2b3743] font-medium text-xs shadow-md rounded-md",e.textContent=n,e.onclick=async function(){r(function(n){if(!isNaN(+n))return t.filter((t=>t.ccn3===n));if(2===n.length)return t.filter((t=>t.cca2===n));const e=t.filter((t=>t.cca3===n));return 1===e.length?e:t.filter((t=>t.cioc===n))}(n)[0])},x.appendChild(e)})),c.appendChild(x)}function d(t,n){switch(t){case"Pending":return o.classList.remove("hidden"),void(i.disabled=!0);case"Success":return o.classList.add("hidden"),a.innerHTML="",void(i.disabled=!1);case"Failed":if(o.classList.add("hidden"),i.disabled=!1,!n)return;return a.innerHTML=`<p class="text-red-500 font-medium p-4">ERROR: ${n.message} - Status Code: ${n.status}</p>`,void(c.innerHTML="");default:return}}!async function(){const n=window.localStorage.getItem("countries");if(n)t.push(...JSON.parse(n));else{const t=await async function(){const t=await fetch("https://restcountries.com/v3.1/all");return await t.json()}();window.localStorage.setItem("countries",JSON.stringify(t))}}(),e.onsubmit=async function(t){t.preventDefault(),d("Pending");try{l(await async function(t){const n=await fetch(`https://restcountries.com/v3.1/name/${t}`);if(200===n.status){const t=await n.json();return console.log(t),Promise.resolve(t)}return Promise.reject({message:"No countries match the specified query",status:n.status})}(s.value)),d("Success")}catch(t){d("Failed",t)}}})();
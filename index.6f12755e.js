const e=document.getElementById("newPair"),n=document.querySelector(".list"),t=document.getElementById("addPair"),o=document.getElementById("delete"),l=document.getElementById("value"),c=document.getElementById("name"),i=document.getElementById("show");t.addEventListener("click",(function(t){t.preventDefault();const o=e.value;if(/^([a-zA-Z0-9]+=[a-zA-Z0-9]+)$/.test(o)){d.push(o);const t=d.map((e=>`<li>${e}</li>`)).join("");n.innerHTML=t,console.log(d),e.value=""}else window.alert("Bad value")})),c.addEventListener("click",(function(){n.innerHTML="";const e=d.sort().map((e=>`<li>${e}</li>`)).join("");n.innerHTML=e,console.log("Sort by Name")})),l.addEventListener("click",(function(){const e=d.sort((function(e,n){const t=e.split("=")[1],o=n.split("=")[1];return t.localeCompare(o)}));n.innerHTML="";const t=e.map((e=>`<li>${e}</li>`)).join("");n.innerHTML=t,console.log("Sort by Value")})),o.addEventListener("click",(function(){d.length=0,n.innerHTML="",console.log(d)})),i.addEventListener("click",(function(){const e=document.implementation.createDocument("","",null),n=e.createElement("root");e.appendChild(n);for(let t=0;t<d.length;t++){const o=e.createElement("list");o.setAttribute("value",d[t]),n.appendChild(o)}const t=e.documentElement.outerHTML;console.log(t);window.open().document.write('<textarea rows="20" cols="40" style="border:none;"><?xml version="1.0" encoding="ISO-8859-1"?>'+t+"</textarea>")}));const d=[];
//# sourceMappingURL=index.6f12755e.js.map

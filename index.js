import{a as d,S as f,i as m}from"./assets/vendor-D1AWmRWP.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();function p(i){return d.get("https://pixabay.com/api/",{params:{key:"55624991-a2117d86ae461cd98d0381121",q:i,image_type:"photo",orientation:"horizontal",safesearch:!0}})}const a=document.querySelector(".gallery"),c=document.querySelector(".loader"),y=new f(".gallery a");function h(i){const t=i.map(({webformatURL:o,largeImageURL:n,tags:e,likes:r,views:s,comments:l,downloads:u})=>`<li>
          <a href="${n}">
            <img src="${o}" alt="${e}">
          </a>
          <div class="description-div">
            <p class="likes">${r}</p>
            <p class="views">${s}</p>
            <p class="comments">${l}</p>
            <p class="downloads">${u}</p>
          </div>
        </li>`).join("");a.innerHTML=t,y.refresh()}function g(){a.innerHTML=""}function L(){c.classList.remove("hidden")}function v(){c.classList.add("hidden")}const b={form:document.querySelector(".form")};b.form.addEventListener("submit",S);function S(i){i.preventDefault();const t=i.target.elements["search-text"].value.trim();t&&(g(),L(),p(t).then(({data:{hits:o}})=>{o.length===0&&m.error("Sorry, there are no images matching your search query. Please try again!"),h(o)}).catch(o=>{console.log(o)}).finally(()=>{v()}))}
//# sourceMappingURL=index.js.map

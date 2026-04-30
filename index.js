import{a as f,S as m,i as a}from"./assets/vendor-D1AWmRWP.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();function p(o){return f.get("https://pixabay.com/api/",{params:{key:"55624991-a2117d86ae461cd98d0381121",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:21}}).then(t=>t.data)}const c=document.querySelector(".gallery"),l=document.querySelector(".loader"),g=new m(".gallery a");function y(o){const t=o.map(({webformatURL:n,largeImageURL:i,tags:e,likes:r,views:s,comments:u,downloads:d})=>`<li>
          <a href="${i}">
            <img src="${n}" alt="${e}">
          </a>
          <div class="description-div">
            <p class="likes">${r}</p>
            <p class="views">${s}</p>
            <p class="comments">${u}</p>
            <p class="downloads">${d}</p>
          </div>
        </li>`).join("");c.innerHTML=t,g.refresh()}function h(){c.innerHTML=""}function L(){l.classList.remove("hidden")}function v(){l.classList.add("hidden")}const S={form:document.querySelector(".form")};S.form.addEventListener("submit",b);function b(o){o.preventDefault();const t=o.target.elements["search-text"].value.trim();t&&(h(),L(),p(t).then(({hits:n})=>{if(n.length===0){a.error({message:"Sorry, there are no images matching your search query. Please try again!"});return}y(n)}).catch(n=>{a.error({message:"Something went wrong. Please try again"})}).finally(()=>{v()}))}
//# sourceMappingURL=index.js.map

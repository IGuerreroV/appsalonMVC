let paso=1;function iniciarApp(){tabs()}function mostrarSeccion(){const t=document.querySelector(".mostrar");t&&t.classList.remove("mostrar");const o=`#paso-${paso}`;document.querySelector(o).classList.add("mostrar")}function tabs(){document.querySelectorAll(".tabs button").forEach((t=>{t.addEventListener("click",(t=>{paso=parseInt(t.target.dataset.paso),mostrarSeccion()}))}))}document.addEventListener("DOMContentLoaded",(function(){iniciarApp()}));
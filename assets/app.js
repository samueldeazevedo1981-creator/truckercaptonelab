const catalog={
 'HOTONE / AMPERO':['Ampero Mini MP-50','Ampero One MP-80','Ampero One MP-100','Ampero Stage II','Ampero Stomp II'],
 'BOSS':['GT-1','GT-6','GT-8','GT-10','GT-100','GT-1000','GT-1000 Core','GX-10','GX-100','ME-25','ME-70','ME-80','ME-90'],
 'FRACTAL':['AX8'],
 'HEADRUSH':['Gigboard','Pedalboard','Prime','Core'],
 'LINE 6':['HX Stomp','HX Stomp XL','Helix LT','POD Go','POD HD500','POD HD500X','POD X3 Live','POD XT Live'],
 'KEMPER':['Kemper Profiler'],
 'M-VAVE':['Tank-G','BlackBox','Cub Baby','MK-300','Tank Mini'],
 'MOOER':['GE-100','GE-150','GE-200','GE-250','GE-300','GE-1000','GS-1000','GS-1000 Li'],
 'NEURAL DSP':['Quad Cortex'],
 'NUX':['MG-30','MG-300','MG-400'],
 'SONICAKE':['Matribox 2','Matribox 2 Pro','Pocket Master'],
 'VALETON':['GP-100','GP-200','GP-200 LT','GP-5','GP-50'],
 'ZIRON':['Station-G'],
 'ZOOM':['G1 Four','G1X Four','G1ON','G2','G2.1u','G3','G3Xn','G5','G5n','G6','G11']
};
const slugify=s=>s==='HOTONE / AMPERO'?'hotone':s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z0-9]+/g,'-').replace(/(^-|-$)/g,'');
let nextId=1;
const products=Object.entries(catalog).flatMap(([brand,models])=>models.map(model=>{
 const featured=model==='Tank-G';
 return {id:nextId++,brand,slug:slugify(brand),model:model.toUpperCase(),name:`${model} Tone Pack`,meta:featured?'Presets + Capturas + IRs':'Presets profissionais + bônus',price:67,badge:featured?'MAIS VENDIDO':(model==='Matribox 2 Pro'?'TONE LAB':undefined)};
}));
let activeFilter='all';let cart=[];
const grid=document.querySelector('#productGrid'),search=document.querySelector('#searchInput'),empty=document.querySelector('#emptyState');
const money=v=>v.toLocaleString('pt-BR',{style:'currency',currency:'BRL'});
function render(){const q=search.value.toLowerCase().trim();const list=products.filter(p=>(activeFilter==='all'||p.slug===activeFilter)&&(`${p.brand} ${p.model} ${p.name} ${p.meta}`.toLowerCase().includes(q)));grid.innerHTML=list.map(p=>`<article class="product" data-brand="${p.slug}">${p.badge?`<span class="badge">${p.badge}</span>`:''}<div class="product-art"><b>${p.model.replace('\n','<br>')}<small>${p.brand}</small></b></div><div class="product-info"><span class="product-brand">${p.brand} // TONE PACK</span><h3>${p.name}</h3><span class="product-meta">${p.meta}</span><div class="product-buy"><div class="price"><small>POR APENAS</small><strong>${money(p.price)}</strong></div><button class="add" data-id="${p.id}" aria-label="Adicionar ${p.name} ao carrinho">+</button></div></div></article>`).join('');empty.hidden=list.length>0;document.querySelectorAll('.add').forEach(b=>b.onclick=()=>addCart(+b.dataset.id));}
document.querySelectorAll('.filters button').forEach(btn=>btn.onclick=()=>{document.querySelector('.filters .active').classList.remove('active');btn.classList.add('active');activeFilter=btn.dataset.filter;render()});search.addEventListener('input',render);
function addCart(id){cart.push(products.find(p=>p.id===id));updateCart();openCart()}
function removeCart(i){cart.splice(i,1);updateCart()}
function updateCart(){document.querySelector('#cartCount').textContent=cart.length;document.querySelector('#cartItems').innerHTML=cart.length?cart.map((p,i)=>`<div class="cart-line"><span>${p.name}<br><b>${money(p.price)}</b></span><button onclick="removeCart(${i})">REMOVER</button></div>`).join(''):'<p style="color:#888">Seu carrinho está vazio.</p>';document.querySelector('#cartTotal').textContent=money(cart.reduce((s,p)=>s+p.price,0))}
const panel=document.querySelector('.cart-panel'),overlay=document.querySelector('.overlay');function openCart(){panel.classList.add('open');panel.setAttribute('aria-hidden','false');overlay.classList.add('show')}function closeCart(){panel.classList.remove('open');panel.setAttribute('aria-hidden','true');overlay.classList.remove('show')}
document.querySelector('.cart').onclick=openCart;document.querySelector('.cart-close').onclick=closeCart;overlay.onclick=closeCart;document.querySelector('.menu-toggle').onclick=e=>{const nav=document.querySelector('.nav');nav.classList.toggle('open');e.currentTarget.setAttribute('aria-expanded',nav.classList.contains('open'))};document.querySelector('.checkout').onclick=()=>alert('Conecte aqui o seu checkout da Eduzz para receber os pedidos.');render();updateCart();

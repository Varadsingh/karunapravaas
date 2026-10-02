
document.addEventListener('DOMContentLoaded',()=>{
  const lb=document.querySelector('.lightbox');
  if(!lb) return;
  const lbImg=lb.querySelector('img');
  document.querySelectorAll('.article figure img').forEach(img=>img.addEventListener('click',()=>{lbImg.src=img.src;lbImg.alt=img.alt;lb.classList.add('open');document.body.style.overflow='hidden';}));
  const close=()=>{lb.classList.remove('open');document.body.style.overflow='';lbImg.src='';};
  lb.querySelector('button').addEventListener('click',close); lb.addEventListener('click',e=>{if(e.target===lb)close()});
  document.addEventListener('keydown',e=>{if(e.key==='Escape')close()});
});

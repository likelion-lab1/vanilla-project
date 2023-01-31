let button = document.querySelector('.AdClose');
function handler(){
  let AD = document.querySelector('.TopAd');
  AD.style.display = 'none';
}
button.addEventListener('click',handler);
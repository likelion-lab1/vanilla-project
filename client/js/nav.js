
let categoryBtn = document.querySelector('.category');
let categoryList = document.querySelector('.category-list');

categoryBtn.addEventListener('mouseover', function() {
  categoryList.style.display = 'block';
});

categoryBtn.addEventListener('mouseout', function() {
  categoryList.style.display = 'none';
});

categoryList.addEventListener('mouseover', function() {
  categoryList.style.display = 'block';
});

categoryList.addEventListener('mouseout', function() {
  categoryList.style.display = 'none';
});

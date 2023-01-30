
let categoryBtn = document.querySelectorAll('.category');
let categoryList = document.querySelectorAll('.categoryList');

categoryBtn.addEventListener('mouseon', function() {
  categoryList.style.display = 'block';
});

categoryBtn.addEventListener('mouseout', function() {
  categoryList.style.display = 'none';
});



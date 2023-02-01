let categoryBtn = document.querySelector('.category');
let categoryList = document.querySelector('.category-list');

function hoverCategoryList(e) {
  categoryList.style.display = (categoryList.style.display === 'block') ? 'none' : 'block';
}

categoryBtn.addEventListener('mouseover', hoverCategoryList);
categoryBtn.addEventListener('mouseout', hoverCategoryList);
categoryList.addEventListener('mouseover', hoverCategoryList);
categoryList.addEventListener('mouseout', hoverCategoryList);


let smallCategoryBtn = document.querySelector('.small-category');
let smallCategoryList = document.querySelector('.small-category-list');

function smallHoverCategoryList(e) {
  smallCategoryList.style.display = (smallCategoryList.style.display === 'block') ? 'none' : 'block';
}

smallCategoryBtn.addEventListener('mouseover', smallHoverCategoryList);
smallCategoryBtn.addEventListener('mouseout', smallHoverCategoryList);
smallCategoryList.addEventListener('mouseover', smallHoverCategoryList);
smallCategoryList.addEventListener('mouseout', smallHoverCategoryList);


// 스크롤
const navigation = document.querySelector('.nav-center');
const mini = document.querySelector('.nav-small');



function scrollHandeler(e){
  if(window.scrollY >= 175){
    
    mini.style.display = 'flex';
    navigation.style.display = 'none';
  }else{
    mini.style.display = 'none';
    navigation.style.display = 'flex'
  }
}

window.addEventListener('scroll',scrollHandeler)



// hover effect
// let categoryBtn = document.querySelector('.category');
// let categoryList = document.querySelector('.category-list');


// categoryBtn.addEventListener('mouseover', function() {
  //   categoryList.style.display = 'block';
  // })
  
  // categoryBtn.addEventListener('mouseout', function() {
    //   categoryList.style.display = 'none';
    // })
    
    // categoryList.addEventListener('mouseover', function() {
      //   categoryList.style.display = 'block';
      // })
      
      // categoryList.addEventListener('mouseout', function() {
        //   categoryList.style.display = 'none';
        // })


        // let mainNav = document.querySelectorAll('.nav-center');
        // let smallNav = document.querySelectorAll('.nav-small');
        
        
        // document.scrollingElement.scrollTop; >= 0 ? smallNav.style.display = "flex" : mainNav.style.display = "flex";
$(document).ready(function() {
    const pages = $('.video-page');
    let currentPage = 0;

    pages.hide();
    pages.eq(currentPage).show();

    $('.page-number').eq(currentPage).addClass('active');

    $('.page-number').on('click', function() {
        const pageNum = $(this).text();
        showPage(parseInt(pageNum));
    });
  });


$(document).ready(function() {
  const pages = $('.video-page-static');
  let currentPage = 0;

  pages.hide();
  pages.eq(currentPage).show();

  $('.page-static-number').eq(currentPage).addClass('active');

  $('.page-static-number').on('click', function() {
      const pageNum = $(this).text();
      showPage_static(parseInt(pageNum));
  });
});

  
$(document).ready(function() {
  const pages = $('.video-page-consistent4d');
  let currentPage = 0;

  pages.hide();
  pages.eq(currentPage).show();

  $('.page-consistent4d-number').eq(currentPage).addClass('active');

  $('.page-consistent4d-number').on('click', function() {
      const pageNum = $(this).text();
      showPage_consistent4d(parseInt(pageNum));
  });
});
    
function showPage(pageNum) {

  const pages = document.querySelectorAll('.video-page');
  for (let page of pages) {
      page.style.display = 'none';
  }
  

  document.getElementById('page' + pageNum).style.display = 'block';


  const pageNumbers = document.querySelectorAll('.page-number');
  for (let pageNumber of pageNumbers) {
    pageNumber.classList.remove('active');
  }
  pageNumbers[pageNum - 1].classList.add('active');
}

function showPage_static(pageNum) {

  const pages = document.querySelectorAll('.video-page-static');
  for (let page of pages) {
      page.style.display = 'none';
  }
  

  document.getElementById('page-static' + pageNum).style.display = 'block';


  const pageNumbers = document.querySelectorAll('.page-static-number');
  for (let pageNumber of pageNumbers) {
    pageNumber.classList.remove('active');
  }
  pageNumbers[pageNum - 1].classList.add('active');
}

function showPage_consistent4d(pageNum) {

  const pages = document.querySelectorAll('.video-page-consistent4d');
  for (let page of pages) {
      page.style.display = 'none';
  }
  

  document.getElementById('page-consistent4d' + pageNum).style.display = 'block';


  const pageNumbers = document.querySelectorAll('.page-consistent4d-number');
  for (let pageNumber of pageNumbers) {
    pageNumber.classList.remove('active');
  }
  pageNumbers[pageNum - 1].classList.add('active');
}

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
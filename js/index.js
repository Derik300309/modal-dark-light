$( document ).ready(function() {
  $('.js-click-modal').click(function(){
    $('.page-wrapper').addClass('modal-open');
  });
  
  $('.js-close-modal').click(function(){
    $('.page-wrapper').removeClass('modal-open');
  });
  $('.trigger2').on('click', function() {
    if($('html').hasClass('light-theme')) {
      $('html').removeClass('light-theme')
      $('html').addClass('dark-theme');
    } else {
      $('html').removeClass('dark-theme')
      $('html').addClass('light-theme');
    }
    if($('.btn-theme i').hasClass('fa fa-moon-o')) {
      $('.btn-theme i').removeClass('fa fa-moon-o')
      $('.btn-theme i').addClass('fa fa-sun-o');
    } else {
      $('.btn-theme i').removeClass('fa fa-sun-o')
      $('.btn-theme i').addClass('fa fa-moon-o');
    }
 });
});
// setInterval(function () {  
//   date = new Date(),  
//   h = date.getHours(),  
//   m = date.getMinutes(),  
//   s = date.getSeconds(),  
//   h = (h < 10) ? '0' + h : h,  
//   m = (m < 10) ? '0' + m : m,  
//   s = (s < 10) ? '0' + s : s,  
//   document.getElementById('time').innerHTML = h + ':' + m + ':' + s;  
//   }, 1000);  
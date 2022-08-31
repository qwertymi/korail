$(document).ready(function(){

  // 뉴스 선택항목 보기
  let allBt = $('.all_bt')
  let noticeBt = $('.notice_bt');
  let broadBt = $('.broad_bt');
  let noticeBox = $('.news_notice_box');
  let broadBox = $('.news_broad_box');
  let newsMore = $('.news_more');
  
  allBt.click(function(){
    noticeBox.show();
    broadBox.show();
    removeActive();
    allBt.addClass('all_bt');
    newsMore.hide();
  })

  noticeBt.click(function(){
    noticeBox.show();
    broadBox.hide();
    removeActive();
    noticeBt.addClass('notice_bt_active');
    newsMore.show();
  });

  broadBt.click(function(){
    broadBox.show();
    noticeBox.hide();
    removeActive();
    broadBt.addClass('broad_bt_active');
    newsMore.show();
  });

  let removeActive = () => {
    allBt.removeClass('all_bt');
    allBt.addClass('all_bt_unact');
    noticeBt.removeClass('notice_bt_active');
    broadBt.removeClass('broad_bt_active');
  }

  

  let careerSwiper = new Swiper(".sw-career",{
    touchRatio: 0,
    pagination: {
      el: ".swiper-pagination",
      type : 'fraction'
    },
    navigation: {
      nextEl: ".sw-career-next",
      prevEl: ".sw-career-prev",
    },
  })
});





window.onload = function(){
  AOS.init();
}


$(document).ready(function () {

  // visual swiper
  let swiperVisual = new Swiper(".sw-visual", {
    loop: true,
    effect: "fade",
    fadeEffect: {
      crossFade: true
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".sw-visual-pg",
      clickable: true,
    },
    allowTouchMove: false
  });
  swiperVisual.on('slideChange', function () {
    swVisualText.text(swVisualTextArr[this.realIndex]);
  });
  let slide_now = 'ing';
  let swVisualBt = $('.sw-visual-bt img');
  let swVisualText = $('.sw-visual-text span');
  let swVisualTextArr = ['KTX 이음', '폭염대비 살수작업', 'KTX승무원 고객응대', '서해금빛열차'];
  swVisualText.text(swVisualTextArr[0]);
  $('.sw-visual-bt').click(function () {
    if (slide_now == 'ing') {
      slide_now = 'stop';
      swiperVisual.autoplay.stop();
      swVisualBt.attr('src', 'images/visual_play.svg');
    } else {
      slide_now = 'ing';
      swiperVisual.autoplay.start();
      swVisualBt.attr('src', 'images/visual_pause.svg');
    }
  });

  // visual-sub-swiper 
  let swiperSub = new Swiper(".sw-visual-sub", {
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".sw-visual-sub-pg",
      type: "fraction"
    },
    navigation: {
      nextEl: ".sw-visual-sub-next",
      prevEl: ".sw-visual-sub-prev",
    },
  });
  let subBt = $('.sw-visual-sub-bt img');
  $('.sw-visual-sub-bt').click(function () {
    if (slide_now == 'ing') {
      slide_now = 'stop';
      swiperSub.autoplay.stop();
      subBt.attr('src', 'images/popup_play.svg');
    } else {
      slide_now = 'ing';
      swiperSub.autoplay.start();
      subBt.attr('src', 'images/popup_pause.svg');
    }
  });

  // visual-scroll
  let visualScroll = $('.visual-scroll');
  let quickMenu = $('.quick-menu').offset().top;
  visualScroll.click(function () {
    $('html').stop().animate({
      scrollTop: quickMenu
    });
  });

  //footer-site
  let footerSite1 = $('.footer-site1');
  let siteList1 = $('.site-list1');
  footerSite1.click(function () {
    siteList2.stop().slideUp(500);
    footerSite2.removeClass('footer-site-open');
    let temp1 = $(this).hasClass('footer-site-open');
    if (temp1 == true) {
      siteList1.stop().slideUp(500);
      $(this).removeClass('footer-site-open');
    } else {
      siteList1.stop().slideDown(500);
      $(this).addClass('footer-site-open');
    }
  });

  // footer-site2
  let footerSite2 = $('.footer-site2');
  let siteList2 = $('.site-list2');
  footerSite2.click(function () {
    siteList1.stop().slideUp(500);
    footerSite1.removeClass('footer-site-open');
    let temp2 = $(this).hasClass('footer-site-open');
    if (temp2 == true) {
      siteList2.stop().slideUp(500);
      $(this).removeClass('footer-site-open');
    } else {
      siteList2.stop().slideDown(500);
      $(this).addClass('footer-site-open');
    }
  });


});

window.onload = function () {
  AOS.init();


};
$(document).ready(function () {
  // top-link
  // utill
  let utillA = $('.user-utill > li').find('a');
  let utillImg = $(utillA).find('img');
  utillA.click(function (event) {
    event.preventDefault();
    let temp = $(this).find(utillImg);
    let subUtill = $(this).next('.sub-utill');
    if (temp.hasClass('active') == true) {
      temp.removeClass('active');
      subUtill.slideUp();
    } else {
      temp.addClass('active');
      subUtill.slideDown();
    }
  });


  // hyomin

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



  // 김도용 애니메이션
  var scene = document.getElementById('scene');
  var parallaxInstance = new Parallax(scene, {
    relativeInput: true,
    hoverOnly: true
  });
  parallaxInstance.friction(0.05, 0.05);

  $(window).resize(function () {
    var userAgent = window.navigator.userAgent;
    var isMobile = /mobile/i.test(userAgent);

    if (isMobile) {
      parallaxInstance.disable();
    } else {
      parallaxInstance.enable();
    }
  }).resize();


  // menu-area
  let dim = $('.dim');
  let headerNavi = $('.header-navi');
  let naviHeight = 100;
  let logo = $('.logo');
  let headerUtill = $('.header-utill');
  let gnb = $('.gnb');
  let depth1List = $('.depth1-list > li');
  let depth1Item = $('.depth1-list > li > a');
  let depth2 = $('.depth2');

  let naviFullHeight = depth2.outerHeight();
  // console.log(naviFullHeight);

  $.each(depth1List, function (index) {
    $(this).mouseenter(function () {
      let idx = $(depth1List).index(this);
      let depth2Length = $(this).find('.depth2-list > li').length;
      // console.log(depth2Length);
      depth2.removeClass('active');
      $(depth1List).eq(idx).find(depth2).addClass('active');
      if (depth2Length < 6) {
        headerNavi.stop().addClass('active').css('height', 380);
      } else {
        headerNavi.stop().addClass('active').css('height', 530);
      }
      dim.show();
      logo.addClass('active');
      depth1Item.addClass('active');
      headerUtill.addClass('active');
    });

  });
  gnb.mouseleave(function () {
    dim.hide();
    headerNavi.stop().css('height', naviHeight).removeClass('active');
    logo.removeClass('active');
    depth1Item.removeClass('active');
    headerUtill.removeClass('active');
    depth2.removeClass('active');
  });

  let allBt = $('.all_bt')
  let noticeBt = $('.notice_bt');
  let broadBt = $('.broad_bt');
  let noticeBox = $('.news_notice_box');
  let broadBox = $('.news_broad_box');
  let newsMore = $('.news_more');

  allBt.click(function () {
    noticeBox.show();
    broadBox.show();
    removeActive();
    allBt.addClass('all_bt');
    newsMore.hide();
  })

  noticeBt.click(function () {
    noticeBox.show();
    broadBox.hide();
    removeActive();
    noticeBt.addClass('notice_bt_active');
    newsMore.show();
  });

  broadBt.click(function () {
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

  let careerSwiper = new Swiper(".sw-career", {
    touchRatio: 0,
    pagination: {
      el: ".swiper-pagination",
      type: 'fraction'
    },
    navigation: {
      nextEl: ".sw-career-next",
      prevEl: ".sw-career-prev",
    }
  });
  let careerBt = $('.sw-career-play');
  careerBt.click(function () {
    if (slide_now == 'ing') {
      slide_now = 'stop';
      swiperSub.autoplay.stop();
      careerBt.find('.material-icons').text('play_arrow');
    } else {
      slide_now = 'ing';
      swiperSub.autoplay.start();
      careerBt.find('.material-icons').text('pause');
    }
  });
});

window.onload = function () {
  AOS.init();

  // banner slide
  let swBanner = new Swiper('.sw-banner', {
    loop: true,
    slidesPerView: 4,
    speed: 1000,
    allowTouchMove: true,
    observer: true,
    observeParents: true,
    spacebetween: 18,
    navigation: {
      prevEl: '.sw-banner-prev',
      nextEl: '.sw-banner-next'
    },
    autoplay: {
      delay: 1000,
    }
  });
  let swBannerBt = $('.sw-banner-bt');
  swBannerBt.click(function () {
    let temp = swBannerBt.hasClass('play')
    if (temp == true) {
      swBanner.autoplay.start();
      swBannerBt.removeClass('play');
    } else {
      swBannerBt.addClass('play');
      swBanner.autoplay.stop();
    }
  })

  // 김도용 작업
  let swPart = new Swiper('.sw-part', {
    slidesPerView: 8,
    centeredSlides: true,
    spaceBetween: 0,
    loop: true,
    on: {
      slideChange: function () {
        let ddd = this.realIndex;
      },
      slideChangeTransitionEnd: function () {

      }
    },

    navigation: {
      prevEl: '.bt-prev',
      nextEl: '.bt-next'
    },
  });

}
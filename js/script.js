$(document).ready(function(){
  // top-link
  // utill
  let utillA = $('.user-utill > li').find('a');
  let utillImg = $(utillA).find('img');
  utillA.click(function(event){
    event.preventDefault();
    let temp = $(this).find(utillImg);
    let subUtill = $(this).next('.sub-utill');
    if(temp.hasClass('active') == true ){
      temp.removeClass('active');
      subUtill.slideUp();
    } else{
      temp.addClass('active');
      subUtill.slideDown();
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
  let naviHeight = 100 ;
  let logo = $('.logo');
  let headerUtill = $('.header-utill');
  let gnb = $('.gnb');
  let depth1List = $('.depth1-list > li');
  let depth1Item = $('.depth1-list > li > a');
  let depth2 = $('.depth2');

  let naviFullHeight = depth2.outerHeight();
// console.log(naviFullHeight);

  $.each(depth1List,function(index){
  $(this).mouseenter(function(){
    let idx = $(depth1List).index(this);
    let depth2Length = $(this).find('.depth2-list > li').length;
    // console.log(depth2Length);
    depth2.removeClass('active');
    $(depth1List).eq(idx).find(depth2).addClass('active');
    if(depth2Length<6){
      headerNavi.stop().addClass('active').css('height',380);
    }else {
      headerNavi.stop().addClass('active').css('height',530);
    }
    dim.show();
    logo.addClass('active');
    depth1Item.addClass('active');
    headerUtill.addClass('active');
    });

  });
  gnb.mouseleave(function(){
    dim.hide();
    headerNavi.stop().css('height',naviHeight).removeClass('active');
    logo.removeClass('active');
    depth1Item.removeClass('active');
    headerUtill.removeClass('active');
    depth2.removeClass('active');
  });

  // search
  let searchBt = $('.search-bt')
  let searchDim = $('.dim')
  let searchClose = $('.search-close')
  searchBt.click(() => {
    searchDim.stop().slideDown(800)
  })
  searchClose.click(() => {
    searchDim.stop().slideUp(800)
  })
});

window.onload = function(){
  AOS.init();

  // banner slide
  let swBanner = new Swiper('.sw-banner',{
    loop: true,
    slidesPerView:4,
    speed: 1000,
    allowTouchMove: true,
    observer: true,
    observeParents: true,
    spacebetween:18,
    navigation: {
      prevEl: '.sw-banner-prev',
      nextEl: '.sw-banner-next'
    },
    autoplay:{
      delay:1000,
    }
  });
  let swBannerBt = $('.sw-banner-bt');
  swBannerBt.click(function(){
    let temp = swBannerBt.hasClass('play')
    if(temp == true){
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
      prevEl:'.bt-prev',
      nextEl:'.bt-next'
    },
  });
}


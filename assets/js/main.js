



// 버튼 토글
$('.menu-btn').click(function(){
  $(this).find('.toggle span').toggleClass('on');
  $('.dim').toggleClass('on');
  $(this).find('p>.menu').addClass('on');
  $(this).find('p>.close').addClass('on');
    $('.nav').toggleClass('on')
})


const subTitle = new SplitType('[data-text]', { types: 'words, chars', });


/**
 * @텍스트효과 필요할때쓰기
 * 
 * 
 */

$('[data-text]').each(function(i,el){
  child=$(this).find('.char')
  gsap.from(child,{ 
    scrollTrigger:{
      trigger:el,
      start:"0% 90%",
      end:"100% 0%",
      // markers:true,
    },
    yPercent:100, opacity:0, stagger:0.03, 
  })
});


gsap.set('.visual-main .up-trigger',{
  yPercent: 0, stagger:0.1
})

visualCt = gsap.timeline({
  scrollTrigger: {
    trigger: '.visual-main .up-trigger',
    start: "0% 50%",
    end: "100% 100%",
    scrub:1,
    markers:true,
  },
  
})

visualCt.to('.visual-main .up-trigger',{ yPercent:-50 ,stagger:0.1},'a')



gsap.set('.sc-info .img-left',{  yPercent: 0, stagger:0.1})
gsap.set('.sc-info .img-right',{  yPercent: 50, stagger:0.1})

infoCt = gsap.timeline({
  scrollTrigger: {
    trigger: '.sc-info .img-area',
    start: "0% 100%",
    end: "100% 100%",
    scrub:1,
    markers:true,
  },
  
})

infoCt.to('.sc-info .img-left',{ yPercent:-50 ,stagger:0.1},'a')
infoCt.to('.sc-info .img-right',{ yPercent:-150 ,stagger:0.1},'a')



gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.matchMedia({
  '(min-width:1024px)':function(){
    // 가로 스크롤
    let list = gsap.utils.toArray('.sc-category .category-menu .item');
    let scollTween = gsap.to(list,{
      xPercent: -100 * (list.length - 1), //원래 리시트의 갯수보다 1을 빼서 길이를 구한 후 에 가로로 이동
      ease:'none',
      scrollTrigger:{
        trigger:'.sc-category',
        pin:true,
        scrub:1,
        start:'center center',
        end: '300%', //뷰포트 높이으ㅣ 300% -> 숫자가 클수록 느려진다.
      }
    })
  }
})

gsap.to('.sc-category .item .bottom img',{
  scrollTrigger: {
    trigger: '.sc-category',
    start: "0% 100%",
    end: "300%",
    scrub:1,
  },
  xPercent:-100
})


gsap.set('.desc-img>video',{yPercent:-10, stagger:0.1})

descBg = gsap.timeline({
  scrollTrigger: {
    trigger: '.sc-desc',
    start: "0% 100%",
    end: "100% 100%",
    scrub:1,
    markers:true,
  },
  
})
descBg.to('.desc-img>video',{ yPercent:-10 ,stagger:0.1},'a')



brieFi = gsap.timeline({
  scrollTrigger: {
    trigger: '.brif-area',
    start: "0% 100%",
    end: "100% 100%",
    scrub:1,
    markers:true,
  },
  
})
brieFi.to('.brif-area .right>img',{yPercent:5, scale:1.3 ,stagger:0.1},'a')


gsap.set('.sc-contact .box',{yPercent:100, stagger:0.1})

contBx = gsap.timeline({
  scrollTrigger: {
    trigger: '.sc-contact',
    start: "0% 50%",
    end: "100% 100%",
    scrub:1,
    markers:true,
  },
  
})
contBx.to('.sc-contact .box',{yPercent:-100, stagger:0.1},'a')

gsap.set('.footer .bg-area>img',{scale:1.3, stagger:0.1})

footBg = gsap.timeline({
  scrollTrigger: {
    trigger: '.footer',
    start: "0% 100%",
    end: "100% 100%",
    scrub:1,
    markers:true,
  },
  
})
footBg.to('.footer .bg-area>img',{scale:1 ,stagger:0.1},'a')


  var swiper = new Swiper('.arrivals-cont', {
    // touchRatio:0,
    simulateTouch:false,
    grabCursor:false,
    slidesPerView:"auto",
    spaceBetween:30,
    loop:true,
    autoplay : {
      delay:0,
    },
    speed:2000,
  });


  gsap.to('.arrivals-area .swiper',{
    scrollTrigger: {
      trigger: '.arrivals-area',
      start: "0% 100%",
      end: "100% 0%",
      scrub:1,
      markers:true,
    },
    xPercent:-50
  })


  const specialSection = document.querySelector('.sc-arrivals');
  const cursor = document.querySelector('.mqcsr');

  specialSection.addEventListener('mouseenter', function() {
    cursor.style.display = 'block'; // 섹션에 진입하면 커서 표시
  });

  specialSection.addEventListener('mouseleave', function() {
    cursor.style.display = 'none'; // 섹션을 나가면 커서 숨김
  });

  specialSection.addEventListener('mousemove', function(e) {
    xVal = e.clientX;
    yVal = e.clientY;

    gsap.to(cursor, {
      x: xVal,
      y: yVal
    });
  });


  document.querySelectorAll('.footer .menu-list li>a').forEach(button => button.innerHTML = '<div><span>' + button.textContent.trim().split('').join('</span><span>') + '</span></div>');

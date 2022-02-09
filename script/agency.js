//undefined : 정의가 안된 변수
(($, window, document, undefined)=>{

  class Agency {
    init(){
      this.header();
      this.section1();
      this.section2();
      this.section3();
      this.section4();
      this.section5();
      this.section6();
      this.section7();
      this.section8();
      this.section9();
      this.section10();
      this.footer();
    }
    header(){


      //윈도우 스크롤탑 값이 0이면 기본 높이72px - 추가된 클래스 모두 삭제
      //header.removeClass('addH60');
      //윈도우 스크롤탑 값이 0이 아니면 높이60px - 추가 클래스:addH60 넣기
      //header.addClass('addH60');

      let newTop = $(window).scrollTop();
      let oldTop = newTop;
      let x = '';

      //스크롤 이벤트 발생 하면
      $(Window).scroll(function(){
          if( $(Window).scrollTop() == 0 ){
            $('#header').removeClass('addH60');
            $('#header').removeClass('addShow');
            $('#header').removeClass('addHide');
          }
          else{
            $('#header').addClass('addH60');

            //위 아래 방향 결정
            newTop = $(window).scrollTop();

                //result = oldTop-newTop > 0 ? 'UP' : 'DOWN';
                x = oldTop-newTop > 0 ? 'UP' : 'DOWN';

                if(x=='UP'){
                  $('#header').addClass('addShow');
                  $('#header').removeClass('addHide');
                }
                if(x=='DOWN'){
                  $('#header').addClass('addHide');
                  $('#header').removeClass('addShow');
                }

            oldTop = newTop;
          }
      });

      
      //메인버튼 이벤트
      const mainBtn = $('.main-btn');
      const sub = $('.sub');
      const nav = $('#nav');
      const subBtn = $('.sub-btn');
      const subSub = $('.sub-sub');

          //메인메뉴-서브메뉴 1단계 -> 2단계 메뉴로
          mainBtn.on({
            mouseenter(e){
              const $this = $(this);
                    sub.stop().fadeOut(0);
                    $this.next().stop().fadeIn(300);
            },
            //웹디자인기능사 실기 볼 때 꼭 추가하기!!!!!!
            focusin(e){
              const $this = $(this);
                    sub.stop().fadeOut(0);
                    $this.next().stop().fadeIn(300);
            }
          });

          nav.on({
            mouseleave(){
              sub.stop().fadeOut(300);
              subSub.stop().fadeOut(300);
            }
          });

          //서브메뉴-서브서브메뉴 2단계 -> 3단계 메뉴로
          subBtn.on({
            mouseenter(){
              const $this = $(this);
                    subSub.stop().fadeOut(0);
                    $this.next().stop().fadeIn(300);
            },
            focusin(){
              const $this = $(this);
                    subSub.stop().fadeOut(0);
                    $this.next().stop().fadeIn(300);
            }
          });
    }
    section1(){
      //슬라이드 관련된 모든 변수 등록
      const slideWrap = $('.slide-wrap');
      const slideView = $('.slide-view');
      let cnt = 0;

      function mainSlide(){
        slideWrap.stop().animate({ left:-1903*cnt }, 600, 'easeInOutExpo',function(){
          if(cnt>2){cnt=0}
          if(cnt>0){cnt=2}
          slideWrap.stop().animate({ left:-1903*cnt }, 0);
        });
      }
      function nextCount(){
        cnt++;
        mainSlide();
      }
      function prevCount(){
        cnt--;
        mainSlide();
      }
      //setInterval(prevCount, 3000);

      //스와이프(좌우터치이벤트) 
      //오른쪽에서 왼쪽 터치 : 다음슬라이드
      //왼쪽에서 오른쪽 터치 : 이전슬라이드

      let s = null; //터치 시작 좌표값(touchStart)
      let e = null; //터치 종료 좌표값(touchEnd)
      let dE = null; //드래그시작
      let dS = null; //드래그끝
      let mD = null; //마우스다운

      slideView.on({
        mousedown: function(event){
          //console.log( '터치시작', e.clientX );
          s = event.clientX;  //방향
          dS = event.clientX - slideWrap.offset().left-1903; //이동시작거리
          mD = true;
        },
        mouseup: function(event){
          //console.log( '터치종료', e.clientX );
          e = event.clientX;
          mD = false;
          //시작좌표-종료좌표 > 0 보다 크면 다음슬라이드
          if( (s-e) > 0 ){
            nextCount();
          }
          //시작좌표-종료좌표 < 0 보다 작으면 이전슬라이드
          if( (s-e) < 0 ){
            prevCount();
          }
        },
        //드래그 & 드롭 (물체를 잡고 끌고(드래그) 놓는 것(드롭)을 실제로 구현)
        mousemove: function(event){ 
          //slideWrap.css({ left: 드래그끝(dragEnd) - 드래그시작 값(dragStart) })
          //반드시 마우스 다운(mouseDown)이 이루어져야 실행됨
          //안되면 마우스따라 움직임
          if(!mD){return}  //mD가 아니면 리턴 -> mD!==true
          dE = event.clientX; //이동끝거리
          slideWrap.css({ left: dE-dS });
        }
      });
    }
    section2(){

    }
    section3(){

    }
    section4(){

    }
    section5(){

    }
    section6(){

    }
    section7(){

    }
    section8(){

    }
    section9(){

    }
    section10(){

    }    
    footer(){

    }
  }
  const newAgency =  new Agency();
  newAgency.init();

})(jQuery, window, document);
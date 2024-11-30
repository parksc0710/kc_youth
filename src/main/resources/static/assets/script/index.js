$('.photo-box').slick({
    dots: false,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows:true,
    pauseOnHover:true,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
        {
          breakpoint:700,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
    ]
});

$(document).ready(function(){
        $('#discography-albums').bxSlider({
            minSlides:3,
            maxSlides:3,
            moveSlides:1,
            slideMargin:100,
            pager:false,
            controls:false,
            slideWidth:500,
            hideControlOnEnd:true,
            infiniteLoop:false,
    });
  });

const sections = $(".section")
const speed = 850

//스크롤 애니메이션
$(window).on('scroll', function(){
  let scrollTop = $(window).scrollTop()
  sections.each(function(i){
    if(scrollTop >= sections.eq(i).offset().top-speed){
      sections.eq(i).find('.show-up').addClass('active')
    }
  })
})


// 글 등록 시 입력값 검증
const checkResultList = [false, false, false, false, false];

// 입력값 검증 대상 (name, generation, pw, pw2, comment)
const $nameInput = document.getElementById('name');
const $generationInput = document.getElementById('birthYear');
const $pwInput = document.getElementById('password1');
const $reChkPw = document.getElementById('password2');
const $contentInput = document.getElementById('comment');

// 이름 입력값 검증 (영문 대소문자, 한글 2자 이상, 특수문자 불가)
const namePattern = /^[a-zA-Z가-힣]{2,}$/;
$nameInput.addEventListener('input', () => {
    const nameValue = $nameInput.value.trim();
    checkResultList[0] = namePattern.test(nameValue);
});

// 또래 입력값 검증
$generationInput.addEventListener('change', () => {
    checkResultList[1] = $generationInput.value.trim() !== '';
});

// 비밀번호 입력값 검증
const passwordPattern = /^\d{6}$/;
$pwInput.addEventListener('input', () => {
    const pwValue = $pwInput.value.trim();
    checkResultList[2] = passwordPattern.test(pwValue);
});

// 비밀번호 재확인 검증
$reChkPw.addEventListener('input', () => {
    const reChkPwVal = $reChkPw.value.trim();
    checkResultList[3] = reChkPwVal === $pwInput.value.trim();
});

// 등록 버튼 눌렀을 시 처리
document.getElementById('submit-button').onclick = e => {
    if ($contentInput.value.trim().length < 20) {
        checkResultList[4] = false;
        alert('감사 내용을 20자 이상 작성해 주세요.');
        e.preventDefault();
        return;
    } else {
        checkResultList[4] = true;
    }

    let msg = '';

    if (checkResultList.includes(false)) {
        if (!checkResultList[0]) {
            msg += '이름은 영문 대소문자 또는 한글 2자 이상으로 입력해 주세요(특수문자 불가).\n';
        }
        if (!checkResultList[1]) {
            msg += '또래를 선택해 주세요.\n';
        }
        if (!checkResultList[2]) {
            msg += '비밀번호는 6자리 숫자로만 입력해 주세요.\n';
        }
        if (!checkResultList[3]) {
            msg += '입력한 비밀번호를 재확인해 주세요.\n';
        }
        alert(msg.trim()); // 마지막 줄바꿈 제거
        e.preventDefault();
    } else {
        alert('글 등록이 완료되었습니다.');
        document.getElementById('register-form').submit();
    }

};
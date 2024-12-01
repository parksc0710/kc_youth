$(document).ready(function () {
    $(".event-useguide .title").on("click", function(e) {
        $(this).toggleClass("open").siblings().toggleClass("open");
    });

    // 스크롤 이벤트
    const part = $('.qmenu');
    const speed = 160;

    $(window).on('scroll',function(){
        let scrollTop = $(window).scrollTop();
        // nav
        part.each(function (i) {
            if (scrollTop >= part.eq(i).offset().top - speed) {
                $(".quick-menu li").eq(i).addClass("on").siblings().removeClass("on");
            }
        });
    })
    $(".quick-menu a").on("click", function(){
        //e.preventDefault();
        $(".quick-menu li").removeClass("on");
        $(this).parent('.quick-menu li').addClass("active");
        $("html, body").animate({scrollTop: $(this.hash).offset().top + 20}, 300);
    });

    $("#discography-albums").bxSlider({
        minSlides: 3,
        maxSlides: 3,
        moveSlides: 1,
        slideMargin: 80,
        pager: false,
        controls: false,
        slideWidth: 500,
        hideControlOnEnd: true,
        infiniteLoop: false,
    });
    const topSwiper = new Swiper(".top-img", {
        loop: true,
        autoplay: {
            delay: 1600,
            disableOnInteraction: false,
        },
        parallax: true,
        effect: "fade",
        allowTouchMove: false,
    });
    const newsSwiper = new Swiper(".card-swiper", {
        effect: "cards",
        grabCursor: true,
    });

    // 삭제 버튼 클릭 시 팝업 열기
    $("body").on('click', '.delete', function (e) {
        e.preventDefault();

        // 클릭된 .post-item에서 name 정보를 추출
        const postItem = $(this).closest('.post-item'); // 클릭된 버튼의 상위 .post-item
        const name = postItem.find('.writer').text().trim(); // .writer 클래스에서 이름 추출

        // 팝업에 이름 정보를 동적으로 삽입
        $('#deleteName .name-info').text(name);

        // 삭제 팝업을 표시
        $('.layer-popup.delete-wrap').show();

        // 삭제 팝업 표시 시 비밀번호 입력란 초기화
        $('#delPassword').val('');


        // 삭제하기 버튼 클릭 시 AJAX로 삭제 요청 보내기
        $("body").on('click', '.delete-wrap .btn.n1', function (e) {
            e.preventDefault();

            // 삭제할 게시물 ID 등 필요한 정보를 추출
            const postId = postItem.data('id');  // 예: <li class="post-item" data-id="123">
            const password = $('#delPassword').val(); // 사용자가 입력한 비밀번호

            if (!password || password.length !== 6) {
                alert("비밀번호를 6자리로 입력해주세요.");
                return;
            }

            // AJAX 요청을 통해 서버로 삭제 요청 보내기
            $.ajax({
                url: '/delete',  // 서버의 삭제 엔드포인트
                type: 'POST',
                data: {
                    postId: postId,
                    password: password
                },
                success: function (response) {
                    if (response.success) {
                        alert('게시물이 삭제되었습니다.');
                        // 팝업 닫기
                        $('.layer-popup.delete-wrap').hide();
                        // 삭제된 게시물을 화면에서 제거
                        postItem.remove();
                        if (response.replyCount !== undefined) {
                            $('.top-info h5').text(`전체 (${response.replyCount})`);
                        }
                    } else {
                        alert(response.message);
                    }
                },
                error: function () {
                    alert('서버 요청 중 오류가 발생했습니다.');
                    // 팝업 닫기
                    $('.layer-popup.delete-wrap').hide();
                }
            });
        });
    });
});
const sections = $(".section");
const speed = 850;

//스크롤 애니메이션
$(window).on("scroll", function () {
    let scrollTop = $(window).scrollTop();
    sections.each(function (i) {
        if (scrollTop >= sections.eq(i).offset().top - speed) {
            sections.eq(i).find(".show-up").addClass("active");
        }
    });
});

$(window).on("load", function () {
    setFlowBanner1();
    setFlowBanner2();
    setFlowBanner3();
});

function setFlowBanner1() {
    const $wrap = $(".flow-text.n1");
    const $list = $(".flow-text.n1 .list");
    let wrapWidth = $wrap.width();
    let listWidth = $list.width();
    const speed = 92; //1초에 몇픽셀 이동하는지 설정

    //리스트 복제
    let $clone = $list.clone();
    $wrap.append($clone);
    flowBannerAct();

    //배너 실행 함수
    function flowBannerAct() {
        //무한 반복을 위해 리스트를 복제 후 배너에 추가
        if (listWidth < wrapWidth) {
            const listCount = Math.ceil((wrapWidth * 2) / listWidth);
            for (let i = 2; i < listCount; i++) {
                $clone = $clone.clone();
                $wrap.append($clone);
            }
        }
        $wrap.find(".list").css({
            animation: `${listWidth / speed}s linear infinite flowRolling`,
        });
    }
}
function setFlowBanner3() {
    const $wrap = $(".flow-text.n3");
    const $list = $(".flow-text.n3 .list");
    let wrapWidth = $wrap.width();
    let listWidth = $list.width();
    const speed = 92; //1초에 몇픽셀 이동하는지 설정

    //리스트 복제
    let $clone = $list.clone();
    $wrap.append($clone);
    flowBannerAct();

    //배너 실행 함수
    function flowBannerAct() {
        //무한 반복을 위해 리스트를 복제 후 배너에 추가
        if (listWidth < wrapWidth) {
            const listCount = Math.ceil((wrapWidth * 2) / listWidth);
            for (let i = 2; i < listCount; i++) {
                $clone = $clone.clone();
                $wrap.append($clone);
            }
        }
        $wrap.find(".list").css({
            animation: `${listWidth / speed}s linear infinite flowRolling`,
        });
    }
}
function setFlowBanner2() {
    const $wrap = $(".flow-text.n2");
    const $list = $(".flow-text.n2 .list");
    let wrapWidth = $wrap.width();
    let listWidth = $list.width();
    const speed = 92; //1초에 몇픽셀 이동하는지 설정

    //리스트 복제
    let $clone = $list.clone();
    $wrap.append($clone);
    flowBannerAct();

    //배너 실행 함수
    function flowBannerAct() {
        //무한 반복을 위해 리스트를 복제 후 배너에 추가
        if (listWidth < wrapWidth) {
            const listCount = Math.ceil((wrapWidth * 2) / listWidth);
            for (let i = 2; i < listCount; i++) {
                $clone = $clone.clone();
                $wrap.append($clone);
            }
        }
        $wrap.find(".list").css({
            animation: `${listWidth / speed}s linear infinite flowRolling2`,
        });
    }
}
$('#comment').keyup(function (e) {
    let content = $(this).val();

    // 글자수 세기
    if (content.length == 0 || content == '') {
        $('#textcount').text('0');
    } else {
        $('#textcount').text(content.length);
    }

    // 글자수 제한
    if (content.length > 200) {
        // 200자 부터는 타이핑 되지 않도록
        $(this).val($(this).val().substring(0, 200));
        // 200자 넘으면 알림창 뜨도록
        alert('글자수는 200자까지 입력 가능합니다.');
    };
});

// '더보기' 누를 시 모달 창 팝업하는 함수
function calHeight() {
    $('ul .post-item .inner').each(function(){
        var rvTxt = $(this).find('.contain').height();
        if(rvTxt < 144){
            $(this).find('.more').hide();
            $(this).css("pointer-events","none");
        } else {
            $(this).addClass('more-layer')
        }
    })
};

// '더보기' 버튼 클릭 시 모달에 내용 추가 및 모달 표시
$(document).ready(function() {
    calHeight();

    // '더보기' 버튼 클릭 시 모달에 내용 추가 및 모달 표시
    $("body").on('click', '.more-layer', function(e) {
        e.preventDefault();

        const postItem = $(this).closest('.post-item'); // 클릭된 게시물 항목
        const content = postItem.find('.contain').text(); // 게시물 내용
        const writer = postItem.find('.writer').text(); // 작성자
        const time = postItem.find('.time span').text(); // 작성일

        // 모달의 내용 업데이트
        const modal = $('.layer-popup.more-wrap');
        modal.find('.post-item .inner').text(content); // 모달에 내용 추가
        modal.find('.post-item .writer').text(writer); // 작성자
        modal.find('.post-item .time span').text(time); // 작성일

        // 모달 표시
        modal.show();
        $('#resigter, .quick-menu').css('z-index', '0');
    });

    $("body").on('click', '.more-layer', function(e){
        e.preventDefault();
        $('.layer-popup.more-wrap').show();
        $('#resigter, .quick-menu').css('z-index','0');
    });
    $("body").on('click', '.layer-popup', function(e){
        e.preventDefault();
        $('.layer-popup.more-wrap').hide();
        $('#resigter, .quick-menu').css('z-index','50');
    });
    //삭제 버튼
    $("body").on('click', '.delete', function(e){
        e.preventDefault();
        $('.layer-popup.delete-wrap').show();
        $('#resigter, .quick-menu').css('z-index','0');
    });
    $("body").on('click', '.delete-wrap .btn.n2', function(e){
        e.preventDefault();
        $('.layer-popup.delete-wrap').hide();
        $('#resigter, .quick-menu').css('z-index','50');
    });
});


// Adding scroll event listener
document.addEventListener('scroll', horizontalScroll);

//Selecting Elements
let sticky = document.querySelector('.sticky');
let stickyParent = document.querySelector('.sticky-parent');

let scrollWidth = sticky.scrollWidth;
let verticalScrollHeight = stickyParent.getBoundingClientRect().height-sticky.getBoundingClientRect().height;

//Scroll function
function horizontalScroll(){

    //Checking whether the sticky element has entered into view or not
    let stickyPosition = sticky.getBoundingClientRect().top;
    if(stickyPosition > 1){
        return;
    }else{
        let scrolled = stickyParent.getBoundingClientRect().top; //how much is scrolled?
        sticky.scrollLeft =(scrollWidth/verticalScrollHeight)*(-scrolled)*0.85;

    }
}


// 이름으로 작성 글 찾을 시 발생하는 이벤트
// 검색 버튼 클릭 이벤트
$("body").on("click", ".in-btn", function (e) {
    e.preventDefault();
    executeSearch(); // 검색 실행 함수 호출
});

// 검색 입력 필드에서 엔터 키 입력 이벤트
$("body").on("keydown", ".insearch", function (e) {
    if (e.key === "Enter") { // Enter 키 확인
        e.preventDefault(); // 기본 엔터 동작(폼 제출) 방지
        executeSearch(); // 검색 실행 함수 호출
    }
});

// 검색 실행 함수
function executeSearch() {
    const searchName = $(".insearch").val().trim(); // 입력된 검색어 가져오기

    if (!searchName) {
        alert("검색어를 입력해주세요.");
        return;
    }

    $.ajax({
        url: `/reply/${encodeURIComponent(searchName)}`, // 검색어를 URL에 포함
        type: 'GET',
        success: function (response) {
            if (response.success) {
                if (response.replyList.length === 0) {
                    alert("검색 결과가 없습니다.");
                } else {
                    renderSearchResults(response.replyList); // 검색 결과 렌더링
                    if (response.replyCount !== undefined) { // 검색 결과 개수 화면에 렌더링
                        $('.top-info h5').text(`검색 결과 (${response.replyCount})`);
                    }
                }
            } else {
                alert(response.message || "검색 실패");
            }
        },
        error: function () {
            alert("서버 요청 중 오류가 발생했습니다.");
        }
    });
}

// 검색 결과를 렌더링하는 함수
function renderSearchResults(replyList) {
    const postContainer = $(".post"); // 게시물 리스트가 들어가는 컨테이너
    postContainer.empty(); // 기존 게시물 제거

    if (replyList.length === 0) {
        postContainer.append("<li>검색 결과가 없습니다.</li>");
        return;
    }

    replyList.forEach(reply => {
        const postItem = `
            <li class="post-item ${reply.background}" data-id="${reply.id}">
                <p><span class="inner"><span class="contain"><span class="more">더보기</span>${reply.content}</span></span></p>
                <div class="bottom-area">
                    <span class="writer">${reply.name}&nbsp;${reply.generation.substring(2)}</span>
                    <div class="time"><span>${reply.regDate}</span></div>
                </div>
                <a class="delete"><span>삭제</span></a>
            </li>
        `;
        postContainer.append(postItem);
    });
    // 동적으로 추가된 요소에 대해 높이 계산 및 클래스 적용
    calHeight();
}

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
            msg += '-이름은 공백없이 영문 대소문자 또는 한글 2자 이상으로 입력해 주세요(특수문자, 공백 불가).\n';
        }
        if (!checkResultList[1]) {
            msg += '-또래를 선택해 주세요.\n';
        }
        if (!checkResultList[2]) {
            msg += '-비밀번호는 6자리 숫자로만 입력해 주세요.\n';
        }
        if (!checkResultList[3]) {
            msg += '-입력한 비밀번호를 재확인해 주세요.\n';
        }
        alert(msg.trim()); // 마지막 줄바꿈 제거
        e.preventDefault();
    } else {
        alert('글 등록이 완료되었습니다!');
        document.getElementById('register-form').submit();
    }

};
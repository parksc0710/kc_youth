<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>2025 말씀노트 판매</title>
    <link rel="stylesheet" href="/assets/css/resetfornote.css">
    <link rel="stylesheet" href="/assets/css/note.css">
    <script src='https://code.jquery.com/jquery-3.6.0.min.js'></script>
</head>
<header>
    <img src="/assets/images/note_01.jpeg">
</header>
<main id="noteSell">
    <h2><strong>예약정보 입력</strong></h2>
    <div class="note-box">
        <div class="row">
            <span class="s-txt">이름<em>*</em></span>
            <input type="text" class="input-style" placeholder="예) 김교회" maxlength="6">
        </div>
        <div class="row">
            <span class="s-txt">연락처<em>*</em></span>
            <input type="text" class="input-style" placeholder="예) 010-1234-5678">
        </div>
        <div class="row">
            <span class="s-txt">예약 수량<em>*</em></span>
            <div class="radio">
                <label>
                    <input type="radio" onchange="setDisplay()" name="quantity" value="q1" checked />
                    <span>1권</span>
                </label>
                <label>
                    <input type="radio" onchange="setDisplay()" name="quantity" value="q2" />
                    <span>2권</span>
                </label>
                <label>
                    <input type="radio" onchange="setDisplay()" name="quantity" value="q3" />
                    <span>3권</span>
                </label>
                <label>
                    <input type="radio" onchange="setDisplay()" name="quantity" value="q4" />
                    <span>4권</span>
                </label>
                <label>
                    <input type="radio" onchange="setDisplay()" name="quantity" value="q5" />
                    <span>5권</span>
                </label>
                <label>
                    <input onchange="setDisplay()" id="q_etc"  type="radio" name="quantity" value="etc" />
                    <span>기타</span>
                </label>
                <div class="etc n1" style="display:none;">
                    <input class="input-style yet" type="text" placeholder="권 수를 입력하세요">
                </div>
            </div>
        </div>
        <div class="row last">
            <span class="s-txt">수령 방법<em>*</em></span>
            <div class="radio">
                <label class="flex">
                    <input type="radio" onchange="setDisplay2()" name="receive" value="r1" checked />
                    <span class="word"><strong>현장수령</strong><span class="mini">맑은샘광천교회 주일 청년부예배 전후 본당 로비<br>(12/15~12/31)</span></span>
                </label>
                <label class="flex">
                    <input type="radio" onchange="setDisplay2()" id="parcel" name="receive" value="r2" />
                    <span class="word"><strong>택배 발송</strong><span class="mini">택배비 5권당 4,000원</span></span>
                </label>
                <div class="etc n2" style="display:none;">
                    <input class="input-style yet" type="text" name="receive" placeholder="배송받으실 주소를 정확히 입력하세요">
                </div>
            </div>
        </div>
        <a href="" onclick="javascript:submitInfo();" class="pp-btn"><span>사전예약 신청하기</span></a>
        <span class="alert">* 하단 신청하기 버튼 제출 시 개인정보 수집에 동의한 것으로 간주됩니다.</span>
    </div>
    <div class="margin-box"></div>
    <div class="q-box">
        <div class="img"> <img src="/assets/images/note_02.jpg"></div>
        <ul>
            <li><a href="">말씀노트가 궁금하다면?<span class="arrow"></span></a></li>
            <li><a href="">2024 말씀노트 판매수익금 후원 결과 보고<span class="arrow"></span></a></li>
        </ul>
    </div>
    <div class="margin-box"></div>
</main>
<footer class="section">
     <a href="http://pf.kakao.com/_xcBxouM"><img src="/assets/images/note_03.jpg"></a>
</footer>
<script>
    function setDisplay(){
        if($('input:radio[id=q_etc]').is(':checked')){
            $('.etc.n1').show();
        }else{
            $('.etc.n1').hide();
        }
    }
    function setDisplay2(){
        if($('input:radio[id=parcel]').is(':checked')){
            $('.etc.n2').show();
        }else{
            $('.etc.n2').hide();
        }
    }
    function submitInfo(){
        alert('제출합니다~!')
    }
</script>
</body>
</html>
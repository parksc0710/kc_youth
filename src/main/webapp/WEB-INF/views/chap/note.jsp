<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="/assets/script/note.js"></script>
    <script src='https://code.jquery.com/jquery-3.6.0.min.js'></script>
    <title>맑은샘광천교회 청년부 2024</title>

</head>
<body>
<header>
    <h1>노트 판매 페이지입니다.</h1>
</header>
<main>

</main>
<footer class="section">
    <div class="container">
        <div class="footer-box">
            <div class="sns-box show-up">
                <h3>당신 근처의 좋은 교회, 맑은샘광천교회 청년부!</h3>
                <p>예배장소 | 맑은샘광천교회 2층 그레이스홀, 상월곡역 3번 출구<br>주일예배 | 주일 오후 2시<br></p>
            </div>
            <div id="copyright" class="show-up delay">
                <p>해당 페이지는 2025년 1월 31일까지 운영되며 <br />이벤트 참여 시 제공받은 정보들은 페이지 종료와 함께 소멸될 예정입니다.<br><br>© 2024 맑은샘광천교회 청년부 디자인팀</p>
            </div>
        </div>
    </div>

    <div>
        <!-- 이름 -->
        <label for="name">이름:</label>
        <input type="text" id="name" name="name" required>
        <br><br>

        <!-- 연락처 -->
        <label for="contact">연락처:</label>
        <input type="text" id="contact" name="contact" placeholder="010-1234-5678" required>
        <br><br>

        <!-- 구매수량 -->
        <label>구매 수량:</label><br>
        <input type="radio" id="cnt1" name="cnt" value="1">
        <label for="cnt1">1권</label><br>
        <input type="radio" id="cnt2" name="cnt" value="2">
        <label for="cnt2">2권</label><br>
        <input type="radio" id="cnt3" name="cnt" value="3">
        <label for="cnt3">3권</label><br>
        <input type="radio" id="cnt4" name="cnt" value="4">
        <label for="cnt4">4권</label><br>
        <input type="radio" id="cnt5" name="cnt" value="5">
        <label for="cnt5">5권</label><br>
        <input type="radio" id="cnt_other" name="cnt_other" value="other">
        <label for="cnt_other">기타:</label>
        <input type="number" id="cntOtherInput" name="cnt_other_input" min="1" placeholder="직접 입력">
        <br><br>

        <!-- 수령 방법 -->
        <label>수령 방법:</label><br>
        <input type="radio" id="type1" name="delivery_method" value="C" required>
        <label for="type1">현장 수령 (맑은샘광천교회)</label><br>
        <input type="radio" id="type2" name="delivery_method" value="D" required>
        <label for="type2">택배 (3,000원 추가)</label>
        <br><br>

        <!-- 주소 -->
        <label for="addr">주소 (택배 수령 시만 입력):</label>
        <input type="text" id="addr" name="addr" placeholder="택배 수령 주소">
        <br><br>

        <!-- 제출 -->
        <button type="button" id="noteApply">신청하기</button>
    </div>
</footer>
</body>
</html>
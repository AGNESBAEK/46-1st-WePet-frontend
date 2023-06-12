<h1>'WePet' TEAM PROJECT</h1>
<h2> 프로젝트 개요 </h2>
1. 개발 기간 : 2023/5/26 ~ 2023/6/9 </br>
2. 개발 인원 : 프론트엔드 3명, 백엔드 2명 </br>
<h3>Tech Stack -FrontEnd</h3>
<div>
<img src="https://img.shields.io/badge/HTML-239120?style=for-the-badge&logo=html5&logoColor=white" alt="html">
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
<img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React">
<img src="https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white" alt="SASS">
</div>
<h2> 프로젝트 담당 내용 및 기능 구현 </h2>  
<h3> 1. 프로젝트 매니저 </h3>
- TRELLO, 구글 시트, Notion, Slack을 통한 프로젝트 일정 관리
<h3> 2. (필수 기능 구현) 메인 페이지 레이아웃 및 기능 구현 </h3>
- Carousel 기능: useEffect와 setInterval을 이용하여 5초마다 새로운 이미지로 전환되게 설정 </br>
- Slider 기능: 간식/용품 카테고리별 제품을 4개씩 slider로 노출 </br>
- 서버(BE)와의 통신: 쿼리 스트링을 통해 최신순, 인기순 기준의 상품들을 map 메서드로 노출 </br>
<h3> 3. (필수 기능 구현) 장바구니 페이지 레이아웃 및 기능 구현 </h3>
- checkbox로 전체 선택 및 일부 선택 가능, 선택 갯수 노출 </br>
- count 컴포넌트로 실시간 제품별 구매 수량 변경 및 reduce 함수를 통한 실시간 총 구매 금액 산출 </br>
- 구매 유도를 위한 배송비 무료까지 잔여 금액에 대한 알람창 노출 </br>
- 조건부 렌더링으로 장바구니에 담긴 제품이 없을 경우, "앗 장바구니가 텅~" 문구 노출, 구매 버튼 비활성화, 배송비 0원 적용 </br>
- 서버(BE)와의 통신: 유저의 장바구니 데이터를 GET 메서드 통신, 장바구니 상품별 수량 변경 부분은 PATCH 메서드 통신 (수량 추가/감소 endpoint), 선택 삭제 및 전체 삭제 기능은 DELETE 메서드 통신 (개별 삭제 및 전체 선택 endpoint), 최종 장바구니 데이터를 POST 통신으로 전송 </br>
<h3> 3. (추가 기능 구현) 마이 페이지 레이아웃 및 기능 구현 </h3>
- 조건부 렌더링으로 클릭하는 메뉴에 따라 다른 문구 노출 </br>
- 1:1 문의 내역에는 버튼 클릭 시 문의 내용 입력 모달 확인 가능 </br>
- 이메일 문의 클릭 시 바로 메일을 보낼 수 있게 링크가 적용 </br>
- 서버와의 통신: ORDER HISTORY 데이터를 GET 메서드로 받아와 주문/배송조회 섹션에 노출</br>
<h3> 4. (추가 기능 구현) Nav바 일부 기능 구현 </h3>
- 로그인 여부에 따라 버튼 문구 변경 (로그인/로그아웃) </br>
- 로그인 여부에 따라 NAV 모달에 노출 문구 변경 (앗 로그인이 필요합니다, 안녕하세요 ~님) </br>
- 로그인이 된 경우에만 장바구니, 마이페이지로 진입(로그인이 안 된 경우에는 로그인 페이지로 이동) </br>

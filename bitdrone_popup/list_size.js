/* 빛드론(bit-drone.shop) 분류 목록 화면 크기 맞춤 (2026-11-16 사장님 "B안으로 반영")
 * 위 메뉴(15px)에 비해 목록 제목·하위 분류·상품 사진이 너무 커 보이던 것 정리. 디자인 파일 권한이 없어 스크립트로 넣는다.
 * 1) PC(1025px 이상): 분류 제목 32px → 24px, 하위 분류 이름 18px → 15px
 * 2) 넓은 PC(1440px 이상): 분류 목록 상품 한 줄 4개 → 5개 (사진 약 373px → 295px)
 * 휴대폰·태블릿(1024px 이하)과 첫 화면 진열은 그대로. 시안: 08_쇼핑몰/빛드론_목록크기_시안_2026-11-16/
 * 되돌리기: 이 스크립트 태그만 지우면 원래대로.
 */
(function () {
  if (document.getElementById('bd-list-size')) return;
  var css = [
    '@media (min-width:1025px){',
    ' .xans-product-headcategory h1,.xans-product-headcategory h2{font-size:24px!important;letter-spacing:-0.01em}',
    ' .xans-product-menupackage .menuCategory li a{font-size:15px!important}',
    '}',
    '@media (min-width:1440px){',
    ' .xans-product-listnormal .prdList.grid4>li{width:20%!important}',
    '}'
  ].join('\n');
  var st = document.createElement('style');
  st.id = 'bd-list-size';
  st.appendChild(document.createTextNode(css));
  (document.head || document.documentElement).appendChild(st);
})();

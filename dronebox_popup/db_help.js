/* 드론박스 구매 도움 (2026-11-06 사장님 승인, 고객 행동 녹화 점검 후속)
   B: 상세 구매 칸에 "로그인 없이 바로구매·네이버페이" 안내 (쿠폰적용이 회원 전용이라 로그인하러 가는 손님 막기)
   C: 주문하러 온 로그인 화면에서 '비회원 주문하기'를 로그인 단추 바로 밑으로
   D: 휴대폰 상세·장바구니·주문·로그인 화면에서 '상담하기' 단추를 작은 동그라미로, 구매 단추 위쪽으로
   E: 장바구니 5만 원 미만이면 "○원 더 담으면 무료배송" 안내
   X: 비어 있는 '검수상품보기' 링크, 깨진 옛 쿠폰 그림(210831coupon.jpg) 숨김
   Q(11-12): 비회원이 상품문의 쓰기를 누르면 아래에서 올라오는 시트(B안) [카톡][로그인하고 글][전화], 문의 0건 칸은 자주 묻는 질문 3개+카톡(나안)
   K(11-12): 비회원이 쿠폰적용을 누르면 같은 시트로 [로그인하고 쿠폰 쓰기][쿠폰 없이 바로 구매] (상세·장바구니, PC·휴대폰)
   K2(11-13): PC '쿠폰적용' 그림 단추(img alt, 글자 없음)도 시트로 — 11-12 15:10 녹화(1309)에서 여전히 로그인 화면으로 감
   S(11-13): PC 추가상품 목록 맨 위 '상품선택' 안내 줄 숨김(눌러도 반응 없는 줄, 1270·1294 녹화)
   R(11-12): 경로 글자 — 상세 'HOME'(#)과 펼쳐지지 않는 분류 이름을 실제 목록 주소로 (PC·휴대폰)
   C-PC(11-18): PC 로그인 화면이 '바로 구매'로 열렸을 때 '비회원으로 바로 주문하기' 상자를 맨 위로 (11-14·16·17 매빅3E 녹화, 7초 만에 되돌아감)
   R2(11-18): 로그인 화면 경로 줄의 깨진 글자 '/data/coupon_image/login-coupo' → '로그인'
   A(11-18): PC 장바구니에 산업용 상품이 있으면 '이 구성으로 견적서 출력 / 전화 상담' 안내 줄 (M5T·M5TD 장바구니 이탈 3건, 사장님 시안 A 승인)
   A2(11-19): 산업용 상품 화면 — PC 추가상품 칸 바로 아래 '고른 구성으로 견적 받기 [카톡][전화]', 휴대폰은 아래 구매 띠 안내 줄을 견적 안내로 (M5T 1572 추가상품만 고르다 나간 3명)
   N(11-19): 드론박스 전화번호를 0507-1337-7089 하나로 (사장님 "메일 support@bit-drone.com · 전화 0507-1337-7089 이 두 개로")
      화면 글자·tel: 링크의 070-7811-4422 → 0507-1337-7089. 상품 자료·기본정보 속 옛 번호는 그대로라 이 스크립트를 빼면 원래대로
   M(11-19): 휴대폰 메인 큰 배너의 점 띠(넓이 전체·높이 18px)가 '확인하러가기' 글자를 덮어 누르면 반응 없던 것 → 점만 눌리게
   G(11-18): 상세 구성품 이름(에어3S 콤보 'DJI 숄더 백')을 누르면 구성품 사진이 뜨게 (1555 녹화, 6번 연속 클릭)
   V(11-19): '구매시 방문 납품' 줄 — 빛드론과 같게 판매가 700만 원 이상만 보이고, 미만은 숨김(없는 700만↑ 상품엔 넣음)
   S(11-19): 검색 결과 위 '대표 기체' 띠(검색정렬 시안 B안) + 검색 화면 'BEST n' 숨김(C안)
   T(11-19): 상품 화면 아이콘 4칸(빛드론과 같은 모양·규칙, 'DJI 정품') + 모델명·구매혜택·배송비 줄 숨김(휴대폰 배송정보 칸도) — 사장님 시안 OK
   K2(11-19): 휴대폰 상품 화면 구매 창이 열려 있는 동안 상담 동그라미 숨김(가격 줄을 가림)
   I(11-19): PC 상세 정보 줄(제조사~고객상담)을 연회색 카드 2칸으로 + 추가상품 이름 칸 단어 단위 줄바꿈 + 이름·값 줄 세로 쌓임 방지(값 칸 남은 폭)
   P(11-18): 단품 상품(MIC3 송신기 1373)에 '수신기·케이스 없음 + 세트 보기' 줄 (네이버에서 세트로 알고 왔다가 1분 안에 나감)
   W(11-23): 필기 기출문제 화면 위·끝에 '입문 드론 보기 · 자격증·교육 카톡 상담' 줄 (11-22 녹화, 37분 문제만 풀고 나감)
   Y(11-23): 산업용 상품 PC 상세 — 내려가면 화면 아래 띠(가격·카톡 견적 요청·전화·구매하기) (11-22 녹화 1572)
   개인정보·쿠키를 읽거나 밖으로 보내지 않음. 화면 글자·배치만 바꿈. 빼면 원래대로. */
(function () {
  var FREE = 50000;
  var mob = /^m\./.test(location.hostname);
  var path = location.pathname;

  function txt(e) { return ((e && (e.innerText || e.textContent)) || '').replace(/\s+/g, ' ').trim(); }
  function num(s) { var m = String(s).replace(/,/g, '').match(/(\d+)\s*원/); return m ? +m[1] : 0; }

  function css() {
    if (document.getElementById('dbh-css')) return;
    var c = document.createElement('style'); c.id = 'dbh-css';
    c.textContent =
      '.secondhand_goods_mobile{display:none!important}img[src*="210831coupon"]{display:none!important}' +
      // 11-19 M: 슬라이드 점 띠는 점만 눌리고, 나머지 자리는 아래 배너 링크가 받게
      '.slick-dots{pointer-events:none}.slick-dots li{pointer-events:auto}' +
      // 11-13 S: 추가상품 목록 맨 위 '상품선택'(고를 수 없는 안내 줄)을 눌러 반응 없음 → 펼친 목록에서 숨김 (PC chosen)
      'select[name^="addGoodsInput"]+.chosen-container .chosen-results li[data-option-array-index="0"]{display:none}' +
      'a.kakaoChatPc.dbh-d{width:46px!important;height:46px!important;overflow:hidden!important;right:8px!important;bottom:178px!important;border-radius:50%!important}' +
      'a.kakaoChatPc.dbh-d img{width:108px!important;max-width:none!important;margin:0!important}' +
      '.dbh-b{margin:8px 0;padding:8px 12px;font-size:13px;line-height:1.5;color:#333D4B;background:#F2FBF5;border:1px solid #C3E6CB;border-radius:6px;text-align:left}.dbh-b b{color:#03A94D}' +
      '.dbh-c{display:block;margin:10px 0 0;padding:13px 0;border:1.5px solid #1C88CB;color:#1C88CB!important;background:#fff;text-align:center;font-size:16px;font-weight:700;text-decoration:none}' +
      '.dbh-c small{display:block;font-size:12.5px;font-weight:400;color:#6B7684;margin-top:2px}' +
      '.dbh-e{margin:12px 20px 4px;padding:10px 12px;background:#EAF6FC;border-radius:8px;font-size:14px;color:#191F28}.dbh-e b{color:#1C88CB}' +
      '.dbh-e .bar{height:6px;background:#D3E8F5;border-radius:3px;margin-top:7px;overflow:hidden}.dbh-e .bar i{display:block;height:100%;background:#1C88CB;border-radius:3px}';
    (document.head || document.documentElement).appendChild(c);
  }

  // D
  function smallChat() {
    if (!/goods_view|\/order\/|\/member\/login/.test(path)) return;
    var k = document.querySelector('a.kakaoChatPc'); if (k) k.classList.add('dbh-d');
    // 11-19 사장님 "모바일에서 상담 아이콘이 아래쪽에 있으니 거슬린다" → 상품 화면 구매 창(수량·추가상품)이 열려 있는 동안만 숨김
    if (k && path.indexOf('goods_view') >= 0 && !window.__dbhKk) {
      window.__dbhKk = 1;
      setInterval(function () {
        var inf = document.querySelector('.ly_buy_info'), open = !!(inf && inf.offsetHeight > 0);
        k.style.visibility = open ? 'hidden' : ''; k.style.pointerEvents = open ? 'none' : '';
      }, 400);
    }
  }

  // B: 상세 구매 칸(펼침 칸) 단추 위
  function buyNote() {
    if (path.indexOf('goods_view') < 0 || document.querySelector('.dbh-b')) return;
    var pb = document.querySelector('.price_box');                // 견적·가격 문의 상품(가격 칸에 'n원'이 없음)은 안내 안 함
    if (!pb || !/\d\s*원/.test(txt(pb)) || /견적|문의/.test(txt(pb))) return;
    var bar = document.querySelector('.ly_buy_dn .detail_prd_btn, .ly_buy_dn.js_goods_view_buy_btn .detail_prd_btn');
    var outer = [].filter.call(document.querySelectorAll('.detail_prd_btn.st_btn_buy_outer'), function (e) { return !e.closest('.detail_buy_top_btn'); })[0] || bar;
    if (!outer || !outer.parentNode) return;
    var cp = !!document.querySelector('.coupon_apply_btn');
    var n = document.createElement('div'); n.className = 'dbh-b';
    n.innerHTML = '<b>로그인 없이</b> 바로구매·네이버페이로 살 수 있어요.' + (cp ? '<br><span style="color:#6B7684">(쿠폰적용은 회원 전용이에요)</span>' : '');
    outer.parentNode.insertBefore(n, outer);
  }

  // C: 주문하러 온 로그인 화면
  function guestUp() {
    if (path.indexOf('/member/login') < 0 || document.querySelector('.dbh-c')) return;
    var g = [].filter.call(document.querySelectorAll('a,button'), function (b) { return txt(b).replace(/\s/g, '') === '비회원주문하기'; })[0];
    var sub = document.querySelector('.member_login_btn');
    if (!g || !sub) return;
    var a = document.createElement('a'); a.className = 'dbh-c'; a.href = '#';
    a.innerHTML = '비회원으로 바로 주문하기<small>가입·로그인 없이 주문할 수 있어요</small>';
    a.addEventListener('click', function (e) { e.preventDefault(); g.click(); });   // 원래 단추 동작 그대로
    var box = sub.closest('.submit') || sub; box.parentNode.insertBefore(a, box.nextSibling);
    var old = g.closest('div') || g; old.style.display = 'none';
    [].forEach.call(document.querySelectorAll('h3,h4,strong,p'), function (e) { if (txt(e) === '비회원 주문') e.style.display = 'none'; });
  }

  // E: 장바구니 무료배송까지 남은 금액
  function freeShip() {
    if (path.indexOf('/order/cart') < 0 || document.querySelector('.dbh-e')) return;
    var row = null, tot = 0, ship = 0;
    [].forEach.call(document.querySelectorAll('dt,th,span,div,p,strong'), function (e) {
      var t = txt(e);
      if (!row && t === '총 상품금액') { row = e.parentElement; tot = num(txt(row)); }
      if (!ship && t === '배송비') ship = num(txt(e.parentElement));
    });
    if (!row || !tot || tot >= FREE || !ship) return;
    var left = FREE - tot, el = document.createElement('div'); el.className = 'dbh-e';
    el.innerHTML = '<b>' + left.toLocaleString() + '원</b> 더 담으면 <b>무료배송</b>이에요 (5만 원 이상)<div class="bar"><i style="width:' + Math.round(tot * 100 / FREE) + '%"></i></div>';
    var anchor = row; while (anchor.parentElement && txt(anchor.parentElement).indexOf('총 합계금액') < 0) anchor = anchor.parentElement;
    var wrap = anchor.parentElement || row.parentElement; wrap.parentNode.insertBefore(el, wrap);
  }

  // 2026-11-12 Q: 상품문의 — 쓰기는 회원 전용이라 비회원은 '로그인이 필요한 서비스' 경고만 보고 막힘(녹화 27분 손님)
  //   → 비회원이 쓰기·문의하기를 누르면 [카톡으로 바로 문의][로그인하고 쓰기] 작은 창. 문의 0건 칸에도 같은 단추.
  var TEL = '0507-1337-7089';
  function guest() { return !!document.querySelector('a[href*="member/login.php"]') && !document.querySelector('a[href*="logout"]'); }
  function css2() {
    if (document.getElementById('dbh-css2')) return;
    var c = document.createElement('style'); c.id = 'dbh-css2';
    c.textContent =
      /* 나: 문의 0건 칸 — 자주 묻는 질문 3개(누르면 답 펼침) + 카톡 단추 */
      '.dbh-faq{max-width:620px;margin:0 auto;padding:4px 0 6px;text-align:left}.dbh-faq p.h{margin:0 0 8px;text-align:center;color:#4E5968;font-size:14px}' +
      '.dbh-faq details{border:1px solid #E5E8EB;border-radius:8px;margin:6px 0;background:#fff}.dbh-faq summary{list-style:none;cursor:pointer;padding:11px 14px;font-size:14px;color:#333D4B;display:flex;justify-content:space-between;gap:10px}' +
      '.dbh-faq summary::-webkit-details-marker{display:none}.dbh-faq summary:after{content:"+";color:#8B95A1;font-weight:700}.dbh-faq details[open] summary:after{content:"−"}' +
      '.dbh-faq details div{padding:0 14px 12px;font-size:13.5px;line-height:1.6;color:#4E5968}' +
      '.dbh-faq .r{display:flex;gap:8px;justify-content:center;margin-top:10px;flex-wrap:wrap}' +
      '.dbh-qb{display:inline-flex;align-items:center;justify-content:center;gap:6px;padding:10px 16px;border-radius:6px;font-size:14px;font-weight:700;text-decoration:none;cursor:pointer;border:1.5px solid #1C88CB;background:#fff;color:#1C88CB!important}' +
      '.dbh-qb.k{background:#FEE500;border-color:#FEE500;color:#191F28!important}' +
      /* B: 아래에서 올라오는 시트(PC는 가운데 카드) */
      '.dbh-ly{position:fixed;inset:0;background:rgba(0,0,0,.45);z-index:100000;display:flex;align-items:flex-end;justify-content:center}' +
      '.dbh-ly .in{background:#fff;width:100%;max-width:480px;border-radius:16px 16px 0 0;padding:10px 16px 18px;box-sizing:border-box;animation:dbhUp .22s ease-out}' +
      '@keyframes dbhUp{from{transform:translateY(40px);opacity:0}to{transform:none;opacity:1}}' +
      '@media (min-width:768px){.dbh-ly{align-items:center}.dbh-ly .in{border-radius:14px;max-width:400px}.dbh-ly .grab{display:none}}' +
      '.dbh-ly .grab{width:40px;height:4px;border-radius:2px;background:#D1D6DB;margin:0 auto 12px}' +
      '.dbh-ly h4{margin:0 0 2px;font-size:17px;color:#191F28}.dbh-ly .sub{margin:0 0 8px;font-size:13px;color:#6B7684;line-height:1.5}' +
      '.dbh-li{display:flex;align-items:center;gap:12px;padding:13px 4px;border-top:1px solid #F2F4F6;text-decoration:none;color:#191F28!important;cursor:pointer}' +
      '.dbh-li i{flex:0 0 36px;width:36px;height:36px;border-radius:50%;display:inline-flex;align-items:center;justify-content:center;font-style:normal;font-size:13px;font-weight:800;background:#EAF6FC;color:#1C88CB}' +
      '.dbh-li i.k{background:#FEE500;color:#3C1E1E}.dbh-li b{display:block;font-size:15px}.dbh-li small{display:block;font-size:12px;color:#8B95A1;margin-top:1px}.dbh-li .go{margin-left:auto;color:#B0B8C1;font-size:18px}' +
      '.dbh-ly .x{display:block;width:100%;margin-top:6px;padding:10px;font-size:14px;color:#8B95A1;background:none;border:0;cursor:pointer}';
    (document.head || document.documentElement).appendChild(c);
  }
  function kakao() { try { if (typeof kakaoChatStart === 'function') { kakaoChatStart(); return; } } catch (e) {} location.href = 'tel:' + TEL; }
  function qaLayer(goWrite) {                                     // 2026-11-12 사장님 B안: 아래에서 올라오는 시트
    var ly = document.createElement('div'); ly.className = 'dbh-ly';
    ly.innerHTML = '<div class="in" role="dialog" aria-label="상품 문의 방법"><div class="grab"></div><h4>어떻게 물어볼까요?</h4>' +
      '<p class="sub">글로 남기는 상품문의는 회원만 쓸 수 있어요. 카톡·전화는 로그인 없이 바로 돼요.</p>' +
      '<a class="dbh-li" data-a="k"><i class="k">톡</i><span><b>카톡으로 바로 문의</b><small>평일 9~18시 · 로그인 필요 없음</small></span><span class="go">›</span></a>' +
      '<a class="dbh-li" data-a="w"><i>글</i><span><b>로그인하고 글 남기기</b><small>답변이 상품 페이지에 남아요</small></span><span class="go">›</span></a>' +
      '<a class="dbh-li" href="tel:' + TEL + '"><i>전</i><span><b>전화 ' + TEL + '</b><small>평일 09:00~18:00 (점심 12~13시)</small></span><span class="go">›</span></a>' +
      '<button type="button" class="x" data-a="x">닫기</button></div>';
    ly.addEventListener('click', function (e) {
      var a = e.target.closest('[data-a]'); if (!a && e.target !== ly) return;
      var k = a ? a.getAttribute('data-a') : 'x';
      if (k === 'k') { e.preventDefault(); ly.remove(); kakao(); }
      else if (k === 'w') { e.preventDefault(); ly.remove(); goWrite(); }
      else if (k === 'x') { ly.remove(); }
    });
    document.body.appendChild(ly);
  }
  // 2026-11-12 K: 비회원이 '쿠폰적용'을 누르면 로그인 화면으로 바로 넘어가 이탈(11-05·11-09·11-10 녹화 세 번)
  //   → 같은 B안 시트로 [로그인하고 쿠폰 쓰기][쿠폰 없이 바로 구매] 고르게. 회원은 원래대로.
  function couponLayer(onBuy) {
    var nx = encodeURIComponent(location.pathname + location.search);
    var ly = document.createElement('div'); ly.className = 'dbh-ly';
    ly.innerHTML = '<div class="in" role="dialog" aria-label="쿠폰 안내"><div class="grab"></div><h4>쿠폰은 회원 전용이에요</h4>' +
      '<p class="sub">네이버·카카오로 간편하게 가입하면 바로 쓸 수 있어요. 쿠폰 없이 지금 사셔도 됩니다.</p>' +
      '<a class="dbh-li" data-a="l"><i>쿠</i><span><b>로그인하고 쿠폰 쓰기</b><small>네이버·카카오 간편 로그인 · 이 화면으로 돌아와요</small></span><span class="go">›</span></a>' +
      '<a class="dbh-li" data-a="b"><i class="k">구</i><span><b>쿠폰 없이 바로 구매</b><small>로그인 없이 비회원·네이버페이로 주문</small></span><span class="go">›</span></a>' +
      '<button type="button" class="x" data-a="x">닫기</button></div>';
    ly.addEventListener('click', function (e) {
      var a = e.target.closest('[data-a]'); if (!a && e.target !== ly) return;
      var k = a ? a.getAttribute('data-a') : 'x';
      e.preventDefault(); ly.remove();
      if (k === 'l') location.href = '/member/login.php?returnUrl=' + nx;
      else if (k === 'b') onBuy();
    });
    document.body.appendChild(ly);
  }
  function couponHelp() {
    if (!/goods_view|\/order\/cart/.test(path) || window.__dbhCp) return;
    window.__dbhCp = 1; css2();
    document.addEventListener('click', function (e) {
      var b = e.target.closest && e.target.closest('.coupon_apply_btn, .detail_coupon_btn, .btn_alert_login');
      // 11-13: PC '쿠폰적용'은 <button class="btn_alert_login"><img alt="쿠폰적용"></button> (글자 없음) → 그림 alt·주소도 봄
      if (!b) return;
      var im = [].map.call(b.querySelectorAll('img'), function (i) { return (i.alt || '') + ' ' + (i.getAttribute('src') || ''); }).join(' ');
      if (!b || !guest() || !(/쿠폰/.test(txt(b) + ' ' + im) || /coupon/i.test(b.className + ' ' + im))) return;   // PC 쿠폰 받기는 그림 단추(글자 없음)
      e.preventDefault(); e.stopPropagation(); if (e.stopImmediatePropagation) e.stopImmediatePropagation();
      couponLayer(function () {
        var vis = function (sel, re) { return [].filter.call(document.querySelectorAll(sel), function (x) { return x.offsetParent && (!re || re.test(txt(x))); })[0]; };
        var go = path.indexOf('/order/cart') >= 0 ? vis('a,button', /^전체주문$/) : (vis('.js_btn_add_order') || vis('a,button,input', /^바로\s*구매/));
        if (go) go.click();
      });
    }, true);
  }
  var FAQ = [                                                       // 답은 드론박스 상품정보·배송안내 문구 그대로
    ['정품인가요? A/S는 어디서 받나요?', 'DJI 공식 수입 정품만 판매합니다. 고장·수리는 드론박스 A/S센터와 DJI 공식센터에서 받으실 수 있어요.'],
    ['오늘 주문하면 언제 보내 주나요?', '공휴일을 제외하고 오후 3시 이전 주문은 당일 발송합니다. 받으시는 날은 택배사 사정에 따라 하루 이상 더 걸릴 수 있어요.'],
    ['기관·기업 납품 서류도 되나요?', '공공기관·학교·기업체 납품 서류를 발급해 드려요. 필요한 서류는 카톡이나 전화로 말씀해 주세요.']
  ];
  function qaHelp() {
    if (path.indexOf('goods_view') < 0) return;
    css2();
    if (!window.__dbhQa) {
      window.__dbhQa = 1;
      document.addEventListener('click', function (e) {          // 비회원만 가로챔(회원은 원래대로 글쓰기)
        var b = e.target.closest && e.target.closest('a.btn_qna_write, a[href*="bdId=goodsqa"], .dbh-qw');
        if (!b || !guest()) return;
        e.preventDefault(); e.stopPropagation();
        var nx = encodeURIComponent(location.pathname + location.search);
        qaLayer(function () { location.href = (mob ? '/member/login.php?returnUrl=' : '../member/login.php?returnUrl=') + nx; });
      }, true);
    }
    var fill = function () {                                       // 나안: 문의 0건 칸 — 자주 묻는 질문 먼저
      var nd = document.querySelector('#ajax-goods-goodsqa-list .no_data');
      if (!nd || nd.querySelector('.dbh-faq')) return;
      var h = '<div class="dbh-faq"><p class="h">아직 문의가 없어요. 많이 물어보시는 것부터 확인해 보세요.</p>';
      FAQ.forEach(function (q) { h += '<details><summary>' + q[0] + '</summary><div>' + q[1] + '</div></details>'; });
      h += '<div class="r"><a class="dbh-qb k" href="#" data-k="1">카톡으로 바로 문의</a><a class="dbh-qb dbh-qw" href="#">문의 글 남기기</a></div></div>';
      nd.innerHTML = h;
      nd.querySelector('[data-k]').addEventListener('click', function (e) { e.preventDefault(); kakao(); });
      nd.querySelector('.dbh-qw').addEventListener('click', function (e) {
        if (guest()) return;                                        // 비회원은 위 가로채기가 시트를 띄움
        e.preventDefault(); var w = document.querySelector('a.btn_qna_write'); if (w) w.click();
      });
    };
    fill(); setTimeout(fill, 1500); setTimeout(fill, 4000);
  }

  // 2026-11-12 R: 경로 글자 — 상세의 'HOME'(주소 '#')과 펼쳐지지 않는 분류 이름을 실제 주소로
  function crumbFix() {
    [].forEach.call(document.querySelectorAll('a.local_home'), function (a) { if (a.getAttribute('href') === '#') a.setAttribute('href', '/'); });
    [].forEach.call(document.querySelectorAll('.location_select'), function (s) {
      var t = s.querySelector('.location_tit a'), items = s.querySelectorAll('ul a[href]');
      if (!t || items.length !== 1) return;                         // 고를 분류가 하나뿐일 때만(여러 개면 원래 펼침 그대로)
      var m = (items[0].getAttribute('href') || '').match(/(?:cateCd|Cd)=(\w+)/);   // 상세에선 '?Cd=002'가 상세 주소에 붙어 틀림 → 목록 주소로
      var to = m ? '/goods/goods_list.php?cateCd=' + m[1] : items[0].href;
      t.setAttribute('href', to);
      t.addEventListener('click', function (e) { e.preventDefault(); e.stopPropagation(); location.href = to; }, true);
    });
  }

  // 2026-11-18 C-PC: PC 로그인 화면 — 휴대폰 C와 같은 뜻, PC는 로그인 상자 맨 위에 큰 상자로
  function guestUpPc() {
    if (path.indexOf('/member/login') < 0 || document.querySelector('.dbh-gp')) return;
    var g = document.querySelector('.nonmember_join_box button, .nonmember_join_box a');
    var box = document.querySelector('.member_login_box');
    if (!g || !box || txt(g).replace(/\s/g, '') !== '비회원주문하기') return;   // '바로 구매'로 온 화면에만 있음
    var c = document.createElement('div'); c.className = 'dbh-gp';
    c.style.cssText = 'border:2px solid #1C88CB;background:#F2F8FD;padding:18px 22px;margin:0 0 26px;text-align:left';
    c.innerHTML = '<div style="font-size:17px;font-weight:700;color:#191F28;margin-bottom:4px">가입 없이 바로 주문하기</div>' +
      '<div style="font-size:13px;color:#4E5968;margin-bottom:12px;line-height:1.5">회원가입·로그인 없이 주문할 수 있어요. 주문 조회는 주문번호와 비밀번호로 합니다.</div>' +
      '<a href="#" style="display:block;height:52px;line-height:52px;background:#1C88CB;color:#fff!important;font-size:16px;font-weight:700;text-align:center;text-decoration:none">비회원으로 바로 주문하기</a>';
    c.querySelector('a').addEventListener('click', function (e) { e.preventDefault(); g.click(); });   // 원래 단추(비회원 주문 폼 제출) 그대로
    box.insertBefore(c, box.firstChild);
    var old = g.closest('.nonmember_join_box'); if (old) old.style.display = 'none';
  }

  // 2026-11-18 R2: 로그인 화면 경로 줄 '> /data/coupon_image/login-coupo'(스킨 쪽 깨진 이름표) → '> 로그인'
  function crumbLogin() {
    if (path.indexOf('/member/') < 0) return;
    [].forEach.call(document.querySelectorAll('.location_cont em, .location_wrap em'), function (em) {
      [].forEach.call(em.childNodes, function (n) {
        if (n.nodeType === 3 && /\/data\//.test(n.textContent)) n.textContent = ' > ' + (path.indexOf('/member/login') >= 0 ? '로그인' : '회원');
      });
    });
  }

  // 2026-11-18 P: 단품(부품) 상품에 세트 안내 — 상품 번호: [안내 글, [[링크 글, 상품 번호], …]]
  var SETS = {
    '1000001373': ['이 상품은 <b>송신기 1개만</b> 들어 있어요 (수신기·충전 케이스 없음).',
      [['MIC3 세트 (1TX + 1RX)', '1000001374'], ['MIC3 세트 (2TX + 1RX + 충전 케이스)', '1000001375']]]
  };
  function setGuide() {
    if (path.indexOf('goods_view') < 0 || document.querySelector('.dbh-set')) return;
    var m = location.search.match(/goodsNo=(\d+)/), s = m && SETS[m[1]];
    if (!s) return;
    var pc = !mob && document.querySelector('dl.item_price'), mo = mob && document.querySelector('.detail_info_top .price_box');
    if (!pc && !mo) return;
    var el = document.createElement('div'); el.className = 'dbh-set';
    el.style.cssText = 'clear:both;float:left;width:100%;box-sizing:border-box;margin:6px 0 8px;padding:9px 12px;background:#FFF8E6;border:1px solid #F5D48A;font-size:13.5px;line-height:1.6;color:#333D4B;text-align:left';
    var h = s[0] + '<br>처음 사신다면 세트를 보세요: ';
    s[1].forEach(function (x, i) { h += (i ? ' · ' : '') + '<a href="/goods/goods_view.php?goodsNo=' + x[1] + '" style="color:#1C88CB;font-weight:700;text-decoration:underline">' + x[0] + '</a>'; });
    el.innerHTML = h;
    if (pc) { pc.parentNode.insertBefore(el, pc.nextSibling); return; }
    // 휴대폰: 가격(strong.price·span.won·em) 바로 밑, 소개 글 앞 — 첫 화면 안
    var intro = [].filter.call(mo.children, function (x) { return x.tagName === 'DIV' && !/secondhand/.test(x.className) && txt(x); })[0];
    if (intro) mo.insertBefore(el, intro); else mo.appendChild(el);
  }

  // 2026-11-18 A: PC 장바구니 — 산업용 상품이 담겨 있으면 견적·상담 안내 줄 (원래 '견적서 출력' 단추 기능을 그대로 부름)
  var IND = /매트리스|Matrice|독\s?[234]|Dock\s?[234]|엔터프라이즈|Enterprise|젠뮤즈|Zenmuse|D-RTK|플라이카트|FlyCart|플라이트허브|FlightHub|테라|Terra|모디파이|Modify|Pix4D|미카센스|MicaSense|그렘시|Gremsy|산업용/i;
  var IND_TEL = '0507-1337-7089';                                 // 11-19 사장님: 드론박스 번호는 0507-1337-7089 하나로
  function quoteCart() {
    if (mob || path.indexOf('/order/cart') < 0 || document.querySelector('.dbh-qc')) return;
    var names = [].map.call(document.querySelectorAll('#frmCart a[href*="goods_view.php?goodsNo="], form a[href*="goods_view.php?goodsNo="]'), txt).join(' ');
    if (!IND.test(names)) return;
    var est = [].filter.call(document.querySelectorAll('button'), function (b) { return /견적서\s*출력/.test(txt(b)); })[0];
    var all = [].filter.call(document.querySelectorAll('button'), function (b) { return /전체\s*상품\s*주문/.test(txt(b)); })[0];
    if (!est || !all) return;
    var wrap = est.parentElement;                                 // '견적서 출력'과 '전체 상품 주문'을 함께 품은 줄
    while (wrap && !wrap.contains(all)) wrap = wrap.parentElement;
    if (!wrap) return;
    var c = document.createElement('div'); c.className = 'dbh-qc';
    c.style.cssText = 'clear:both;border:2px solid #1C88CB;background:#F2F8FD;padding:14px 18px;margin:16px 0 14px;display:flex;align-items:center;gap:12px;flex-wrap:wrap;text-align:left';
    var bs = 'display:inline-block;padding:10px 16px;font-weight:700;font-size:14px;text-decoration:none;white-space:nowrap;';
    c.innerHTML = '<div style="flex:1;min-width:300px"><div style="font-size:15px;font-weight:700;color:#191F28">산업용 장비는 견적서·상담 후 구매하셔도 됩니다</div>' +
      '<div style="font-size:12.5px;color:#4E5968;margin-top:3px">지금 담은 구성 그대로 견적서를 뽑거나, 전화로 구성·납기·납품서류를 상의하세요. (평일 09:00~18:00)</div></div>' +
      '<a href="#" data-q="e" style="' + bs + 'background:#1C88CB;color:#fff!important">이 구성으로 견적서 출력</a>' +
      '<a href="tel:' + IND_TEL + '" style="' + bs + 'border:1px solid #1C88CB;color:#1C88CB!important;background:#fff">전화 상담 ' + IND_TEL + '</a>';
    c.querySelector('[data-q="e"]').addEventListener('click', function (e) { e.preventDefault(); est.click(); });
    wrap.parentNode.insertBefore(c, wrap);
  }

  // 2026-11-19 A2: 산업용 상품 화면 견적 안내 (상품 이름으로 판정 — IND 정규식은 장바구니 A와 같음)
  function quoteGoods() {
    if (path.indexOf('goods_view') < 0 || document.querySelector('.dbh-qg')) return;
    var nm = document.title + ' ' + txt(document.querySelector('.item_detail_tit, .goods_name, .detail_tit'));
    if (!IND.test(nm)) return;
    var bs = 'display:inline-block;padding:9px 14px;font-weight:700;font-size:14px;text-decoration:none;white-space:nowrap;cursor:pointer;';
    if (!mob) {
      var add = document.querySelector('.item_add_option_box');
      if (!add || !add.offsetParent) return;
      var c = document.createElement('div'); c.className = 'dbh-qg';
      c.style.cssText = 'clear:both;float:left;width:100%;box-sizing:border-box;margin:10px 0 6px;padding:12px 14px;border:2px solid #1C88CB;background:#F2F8FD;text-align:left';
      c.innerHTML = '<div style="font-size:14.5px;font-weight:700;color:#191F28">고른 구성 그대로 견적 받기</div>' +
        '<div style="font-size:12.5px;color:#4E5968;margin:2px 0 10px;line-height:1.5">위에서 고른 배터리·충전 허브·케어 구성으로 견적을 드려요. 장바구니에 담으면 \'견적서 출력\'으로 바로 뽑을 수도 있어요.</div>' +
        '<a data-q="k" style="' + bs + 'background:#1C88CB;color:#fff!important;margin-right:6px">카톡으로 견적 요청</a>' +
        '<a href="tel:' + IND_TEL + '" style="' + bs + 'border:1px solid #1C88CB;color:#1C88CB!important;background:#fff">전화 ' + IND_TEL + '</a>';
      c.querySelector('[data-q="k"]').addEventListener('click', function (e) { e.preventDefault(); kakao(); });
      // 11-20 사장님 "1572 견적 상자 합계 옆으로": 추가상품을 많이 고르면 합계가 아래로 밀려 견적 상자와 멀어짐 → 합계 바로 아래·구매 단추 바로 위에
      var btns = document.querySelector('.item_tit_detail_cont > .btn_choice_box');
      if (btns && btns.offsetParent) btns.parentNode.insertBefore(c, btns);
      else add.parentNode.insertBefore(c, add.nextSibling);
      return;
    }
    var n = document.querySelector('.dbh-b');                       // 휴대폰: 구매 띠의 '로그인 없이' 줄을 견적 안내로
    if (!n) return;
    n.classList.add('dbh-qg');
    n.innerHTML = '<b>견적·상담</b> 후 구매하셔도 돼요 · <a data-q="k" style="color:#1C88CB;font-weight:700;text-decoration:underline">카톡 견적</a> · ' +
      '<a href="tel:' + IND_TEL + '" style="color:#1C88CB;font-weight:700;text-decoration:underline">전화 ' + IND_TEL + '</a><br><span style="color:#6B7684">로그인 없이 바로구매·네이버페이도 돼요</span>';
    n.querySelector('[data-q="k"]').addEventListener('click', function (e) { e.preventDefault(); kakao(); });
  }

  // 2026-11-18 G: 구성품 이름 → 사진 — 상품 번호: [[구성품 글자, 사진 주소(이미 올린 상품 사진), 설명], …]
  var IMG = 'https://godomall.speedycdn.net/2ee3015e331087a0acf29befbeb79f2d/goods/';
  var A3S_RC2 = IMG + '1000001246/image/detail/1000001236_detail_611.jpg', A3S_N3 = IMG + '1000001241/image/detail/1000001241_detail_786.jpg';
  var BAG = '오른쪽 위 회색 가방이 <b>DJI 숄더 백</b>이에요 (세트에 1개 포함).';
  var PART_PICS = {
    '1000001555': [['DJI 숄더 백', A3S_RC2, BAG]], '1000001258': [['DJI 숄더 백', A3S_RC2, BAG]],
    '1000001246': [['DJI 숄더 백', A3S_RC2, BAG]], '1000001241': [['DJI 숄더 백', A3S_N3, BAG]]
  };
  function picLayer(src, cap) {
    css2();
    var ly = document.createElement('div'); ly.className = 'dbh-ly';
    ly.innerHTML = '<div class="in" role="dialog" aria-label="구성품 사진"><div class="grab"></div><h4>구성품 사진</h4>' +
      '<img src="' + src + '" alt="플라이 모어 콤보 구성품" style="display:block;width:100%;height:auto;margin:6px 0 8px;border:1px solid #F2F4F6">' +
      '<p class="sub">' + cap + '</p><button type="button" class="x" data-a="x">닫기</button></div>';
    ly.addEventListener('click', function (e) { if (e.target === ly || e.target.closest('[data-a="x"]')) ly.remove(); });
    document.body.appendChild(ly);
  }
  function partPics() {
    if (path.indexOf('goods_view') < 0) return;
    var m = location.search.match(/goodsNo=(\d+)/), list = m && PART_PICS[m[1]];
    if (!list) return;
    list.forEach(function (it) {
      [].forEach.call(document.querySelectorAll('.item-card, td'), function (el) {
        if (el.getAttribute('data-dbh-pic') || txt(el).indexOf(it[0]) !== 0 || txt(el).length > it[0].length + 12) return;
        el.setAttribute('data-dbh-pic', '1'); el.style.cursor = 'pointer'; el.title = '사진 보기';
        var chip = document.createElement('span');
        chip.textContent = '사진'; chip.style.cssText = 'display:inline-block;margin-left:6px;padding:0 6px;font-size:11px;line-height:18px;border:1px solid #1C88CB;color:#1C88CB;border-radius:9px;vertical-align:1px;font-weight:600';
        var q = el.querySelector('.item-qty'); if (q) el.insertBefore(chip, q); else el.appendChild(chip);
        el.addEventListener('click', function (e) { e.preventDefault(); picLayer(it[1], it[2]); });
      });
    });
  }
  function partPicsLater() { partPics(); setTimeout(partPics, 1500); setTimeout(partPics, 4000); }   // 상세 본문이 늦게 그려질 때

  // 2026-11-19 N: 화면에 보이는 옛 번호(070-7811-4422)를 0507-1337-7089로 — 글자와 tel: 링크만, 몇 번 나눠서(패널·추가항목이 늦게 그려짐)
  var OLD_TEL = /0?70[\s.\-]?7811[\s.\-]?4422/g, NEW_TEL = '0507-1337-7089';
  function telUnify() {
    var b = document.body; if (!b) return;
    var w = document.createTreeWalker(b, NodeFilter.SHOW_TEXT), n, hit = [];
    while ((n = w.nextNode())) {
      if (n.parentElement && /^(SCRIPT|STYLE|TEXTAREA)$/.test(n.parentElement.tagName)) continue;
      OLD_TEL.lastIndex = 0; if (OLD_TEL.test(n.nodeValue)) hit.push(n);
    }
    hit.forEach(function (x) { x.nodeValue = x.nodeValue.replace(OLD_TEL, NEW_TEL); });
    [].forEach.call(document.querySelectorAll('a[href^="tel:"]'), function (a) {
      var h = a.getAttribute('href'); if (/7811[\s.\-]?4422/.test(h)) a.setAttribute('href', 'tel:' + NEW_TEL);
    });
  }
  function telUnifyLater() { telUnify(); [800, 2000, 4500, 9000].forEach(function (t) { setTimeout(telUnify, t); }); }

  // 2026-11-19 V: '구매시 방문 납품' 줄을 빛드론과 같은 기준으로 (사장님 "무료배송과 방문 납품 기준은 드론박스도 동일하게")
  //   판매가 700만 원 이상 = 줄 보임(없으면 기술지원·배송비 줄 아래에 넣음) · 700만 원 미만 = 숨김(무료배송은 배송비 줄에 이미 있음)
  //   가격을 모르는 상품(1,000원 미만)은 그대로. 상품 자료(추가항목)는 그대로라 이 스크립트를 빼면 원래대로.
  var VISIT_MIN = 7000000;
  function visitRule() {
    if (path.indexOf('goods_view') < 0) return;
    var pi = document.querySelector('input[name="set_goods_price"]');
    var p = pi ? +String(pi.value).replace(/[^0-9.]/g, '') : 0;
    if (!p || p < 1000) return;
    var dts = [].filter.call(document.querySelectorAll('dt'), function (t) { return /방문\s*납품/.test(txt(t)); });
    if (p < VISIT_MIN) {
      dts.forEach(function (t) {
        var dl = t.parentElement;
        if (dl && dl.tagName === 'DL' && dl.querySelectorAll('dt').length === 1) { dl.classList.add('dbh-hid'); dl.style.display = 'none'; return; }
        t.style.display = 'none';
        var dd = t.nextElementSibling; if (dd && dd.tagName === 'DD') dd.style.display = 'none';
      });
      return;
    }
    if (dts.length) return;
    var boxes = [];
    [].forEach.call(document.querySelectorAll('.item_detail_list dt, .js_goods_detail_infotext dt'), function (t) {
      if (!/^(기술지원|배송비)$/.test(txt(t))) return;
      var dl = t.parentElement; if (!dl || dl.tagName !== 'DL') return;
      var multi = dl.querySelectorAll('dt').length > 1, box = multi ? dl : dl.parentElement;
      if (boxes.indexOf(box) >= 0) return;
      boxes.push(box);
      var all = multi ? [].slice.call(dl.querySelectorAll('dt')) : [].map.call(box.children, function (x) { return x.querySelector && x.querySelector('dt'); }).filter(Boolean);
      var a = all.filter(function (x) { return txt(x) === '기술지원'; })[0] || all.filter(function (x) { return txt(x) === '배송비'; })[0];
      if (!a) return;
      if (multi) {
        var dd = a.nextElementSibling; while (dd && dd.tagName !== 'DD') dd = dd.nextElementSibling;
        var ref = dd || a, nt = document.createElement('dt'), nd = document.createElement('dd');
        nt.textContent = '구매시 방문 납품'; nd.textContent = '초기세팅 및 사용법 교육'; nt.setAttribute('data-dbv', '1');
        ref.parentNode.insertBefore(nd, ref.nextSibling); ref.parentNode.insertBefore(nt, nd);
      } else {
        var row = a.parentElement, nl = document.createElement('dl');
        nl.setAttribute('data-dbv', '1'); nl.innerHTML = '<dt>구매시 방문 납품</dt><dd>초기세팅 및 사용법 교육</dd>';
        row.parentNode.insertBefore(nl, row.nextSibling);
      }
    });
  }
  // 2026-11-19 T: 아이콘 4칸 — 사장님 "아이콘을 넣자 4개로 빛드론처럼"(빛드론 buy_help.js 4칸과 같은 모양·규칙, 드론박스는 'DJI 정품')
  //   컨슈머 = DJI 정품 / 무료배송(5만 원 이상) 또는 엔지니어 방문납품(판매가 700만 원 이상) / 적립 / 기술서포트
  //   산업용(IND 이름 규칙) = DJI 정품 / 무료배송·방문납품 / 기술서포트 / 유지보수 지원 · 소프트웨어 = 정품 라이선스 / 납품 서류 / 기술 지원
  //   DJI가 아닌 상품(잭커리 등) 첫 칸 = 정품 보증. PC는 정보 카드 위, 휴대폰은 가격 칸 끝. + '모델명' 줄 숨김(빛드론과 같게)
  var SW = /테라|Terra|모디파이|Modify|플라이트허브|FlightHub|Pix4D|픽스포디|라이선스|소프트웨어/i;
  function tiles4() {
    var old = document.querySelector('.dbh-ivc');
    if (path.indexOf('goods_view') < 0 || (old && old.getAttribute('data-done'))) return;
    var pi = document.querySelector('input[name="set_goods_price"]'), price = pi ? +String(pi.value).replace(/[^0-9.]/g, '') : 0;
    var nm = document.title + ' ' + txt(document.querySelector('.item_detail_tit, .goods_name, .detail_tit'));
    var mk = [].filter.call(document.querySelectorAll('.item_detail_list dt, .js_goods_detail_infotext dt'), function (t) { return /^제조(사)?$/.test(txt(t)); })[0];
    var mkv = mk && mk.nextElementSibling ? txt(mk.nextElementSibling) : '';
    var sw = SW.test(nm), ind = !sw && IND.test(nm), dji = mkv ? /DJI/i.test(mkv) && !/Gremsy|PIXY|G-PORT|MicaSense|미카센스|CZI|CubePilot|Here4|Jackery|잭커리/i.test(nm) : /DJI/i.test(nm);   // 제조사 줄이 있으면 그 글자로, 없으면 상품 이름으로
    var mm = (document.body.textContent || '').replace(/\s+/g, ' ').match(/적립 마일리지\s*:?\s*\+?\s*([\d,]+)\s*원/), amt = mm ? (+mm[1].replace(/,/g, '')).toLocaleString('ko-KR') : '', pct = amt && price ? Math.round(+amt.replace(/,/g, '') * 100 / price) : 0;
    function ic(d) { return '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">' + d + '</svg>'; }
    var I = {
      badge: ic('<path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6z"/><path d="M8.5 12l2.5 2.5 4.5-5"/>'),
      truck: ic('<path d="M3 6h11v9H3zM14 9h4l3 3v3h-7"/><circle cx="7" cy="17" r="1.8"/><circle cx="17" cy="17" r="1.8"/>'),
      coin: ic('<circle cx="12" cy="12" r="8"/><path d="M9.5 9.5h4a1.8 1.8 0 0 1 0 3.6h-3a1.8 1.8 0 0 0 0 3.6h4M12 8v1.5M12 16.7v1.3"/>'),
      tool: ic('<path d="M14.5 6.5a4 4 0 0 0-5 5L4 17l3 3 5.5-5.5a4 4 0 0 0 5-5l-2.5 2.5-2.5-.5-.5-2.5z"/>'),
      doc: ic('<path d="M6 3h8l4 4v14H6z"/><path d="M14 3v4h4M9 12h6M9 16h6"/>'),
      van: ic('<path d="M2 7h12v8H2zM14 10h4l3 3v2h-7"/><circle cx="6" cy="17" r="1.8"/><circle cx="17" cy="17" r="1.8"/><path d="M5 10.5h5"/>'),
      phone: ic('<path d="M6 3h3l2 5-2.5 1.5a11 11 0 0 0 6 6L16 13l5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 4 5a2 2 0 0 1 2-2z"/>')
    };
    var T = [];
    if (sw) {
      T.push('<div><i>' + I.badge + '</i><b>정품 라이선스</b><em>정품만 판매합니다</em></div>');
      T.push('<div><i>' + I.doc + '</i><b>납품 서류</b><em>공공기관·학교·기업</em></div>');
      T.push('<div><i>' + I.phone + '</i><b>기술 지원</b><em>드론박스 고객센터 상담</em></div>');
    } else {
      T.push('<div><i>' + I.badge + '</i>' + (dji ? '<b>DJI 정품</b><em>정품만 판매합니다</em>' : '<b>정품 보증</b><em>정품만 판매합니다</em>') + '</div>');
      T.push(price >= 7000000 ? '<div><i>' + I.van + '</i><b>엔지니어 방문납품</b><em>교육·초기 세팅 포함</em></div>' : '<div><i>' + I.truck + '</i><b>무료배송</b><em>5만 원 이상 구매 시</em></div>');
      if (ind) {
        T.push('<div><i>' + I.phone + '</i><b>기술서포트 제공</b><em>영상·유선 지원</em></div>');
        T.push('<div><i>' + I.tool + '</i><b>유지보수 지원</b><em>장치신고·보험</em></div>');
      } else {
        if (amt && pct > 0) T.push('<div class="pt"><i>' + I.coin + '</i><b>' + amt + '원</b><em>회원 적립 ' + pct + '%</em></div>');
        T.push('<div><i>' + I.phone + '</i><b>기술서포트 제공</b><em>영상·유선 지원</em></div>');
      }
    }
    if (!document.getElementById('dbh-ivc-css')) {
      var c = document.createElement('style'); c.id = 'dbh-ivc-css';
      c.textContent = '.dbh-ivc{clear:both;float:left;width:100%;box-sizing:border-box;margin:10px 0 2px}.dbh-ivc .t{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:8px}.dbh-ivc .t.n3{grid-template-columns:repeat(3,minmax(0,1fr))}' +
        '.dbh-ivc .t div{border:1.5px solid #E5E8EB;border-radius:10px;padding:12px 6px 11px;text-align:center;background:#fff}' +
        '.dbh-ivc i{display:inline-flex;align-items:center;justify-content:center;width:40px;height:40px;border-radius:50%;background:#F2F4F6;color:#191F28;margin-bottom:6px}' +
        '.dbh-ivc b{display:block;font-size:14px;color:#191F28;line-height:1.3;word-break:keep-all}.dbh-ivc em{display:block;font-style:normal;font-size:12px;color:#6B7684;margin-top:2px;line-height:1.35;word-break:keep-all}' +
        '.dbh-ivc .pt{border-color:#7BD4A0;background:#F0FBF4}.dbh-ivc .pt i{background:#D3F5DF;color:#0B7A3B}.dbh-ivc .pt b{color:#0B7A3B;font-size:15px}' +
        '.dbh-ivc.mo{float:none;margin:12px 0 4px}.dbh-ivc.mo .t,.dbh-ivc.mo .t.n3{grid-template-columns:repeat(2,minmax(0,1fr))}';
      (document.head || document.documentElement).appendChild(c);
    }
    var box = document.createElement('div'); box.className = 'dbh-ivc' + (mob ? ' mo' : '');
    box.innerHTML = '<div class="t n' + T.length + '">' + T.join('') + '</div>';
    if (sw || ind || amt) box.setAttribute('data-done', '1');   // 컨슈머인데 적립 금액이 아직 안 그려졌으면 다음 시도에서 다시 그림
    if (old) { old.parentNode.replaceChild(box, old); return; }
    if (!mob) {
      var L = document.querySelector('.item_detail_list'); if (!L) return;
      var card = L.querySelector('.dbh-inf');
      if (card) L.insertBefore(box, card); else L.appendChild(box);
    } else {
      var pb = document.querySelector('.detail_info_top .price_box'); if (!pb) return;
      pb.appendChild(box);
      [].forEach.call(document.querySelectorAll('.detail_sub_info dl'), function (dl) { var t = dl.querySelector('dt'); if (t && txt(t) === '배송정보') dl.style.display = 'none'; });   // 휴대폰 배송정보·적립 줄도 아이콘 칸과 겹쳐 숨김
    }
  }

  function visitLater() {   // 단계마다 따로 시도(한 단계가 페이지가 덜 그려져 실패해도 나머지·다시 시도는 그대로) — 11-19 1572 실화면에서 아이콘·숨김이 통째로 빠진 것
    var go = function () { [visitRule, infoCard, tiles4].forEach(function (f) { try { f(); } catch (e) {} }); };
    go(); [800, 1500, 3000, 5000, 8000].forEach(function (t) { setTimeout(go, t); });
  }   // 상세 정보 줄 스크립트(data-bdinfo)가 늦게 그림

  // 2026-11-19 I: PC 상세 정보 줄(제조사·구매서류·기술지원·방문 납품·고객상담)을 연회색 카드 2칸으로 (사장님 "제조사부터 너무 없어 보인다" → 시안 OK)
  //   + 추가상품 이름 칸은 단어 단위 줄바꿈('O4 그라운드 스테/이션'처럼 끊기던 것).
  //   원래 줄은 숨기기만 함(자료 그대로) — 빼면 원래대로.
  var INF_KEYS = { '제조사': '제조사', '제조': '제조사', '구매서류': '구매서류', '기술지원': '기술지원', '구매시 방문 납품': '방문 납품', '고객상담': '고객상담', '고객센터': '고객상담' };
  function infoCard() {
    if (mob || path.indexOf('goods_view') < 0) return;
    var L = document.querySelector('.item_detail_list'); if (!L) return;
    if (!document.getElementById('dbh-inf-css')) {
      var c = document.createElement('style'); c.id = 'dbh-inf-css';
      // 11-19 사장님 "크롬은 왜 옆이 아니라 한 칸씩 내려와 있지?" — 이름 100 + 오른쪽 여백 10 + 값 400 = 510 = 칸 폭(여유 0px)이라 반올림에 따라 값이 아래로 밀림
      //   → 값 칸은 남은 폭을 다 쓰게(flow-root: 추가상품 펼침 목록이 잘리지 않음). 380px까지 줄여도 나란히 확인
      c.textContent = '.item_detail_list > dl > dd,.item_add_option_box dl > dd{float:none!important;width:auto!important;display:flow-root!important}' +
        '.item_detail_list > dl.dbh-hid{display:none!important}' +
        '.item_add_option_box dt,.item_add_option_box th,.item_add_option_box .tit{word-break:keep-all!important;overflow-wrap:normal!important}' +
        '.dbh-inf{clear:both;float:left;width:100%;box-sizing:border-box;margin:10px 0 6px;padding:12px 14px;background:#F7F9FB;border:1px solid #E5E8EB;border-radius:8px;display:grid;grid-template-columns:1fr 1fr;gap:10px 18px;text-align:left}' +
        '.dbh-inf div{min-width:0}.dbh-inf b{display:block;font-size:12px;font-weight:500;color:#8B95A1;margin-bottom:2px;line-height:1.4}' +
        '.dbh-inf span{display:block;font-size:13.5px;font-weight:600;color:#333D4B;line-height:1.45;word-break:keep-all}.dbh-inf span a{color:#1C88CB!important;text-decoration:none}';
      (document.head || document.documentElement).appendChild(c);
    }
    // 11-19 사장님 "구매 혜택이나 배송비는 구성품 보기 박스 아래로" → 구성품 보기 상자를 판매가 줄 바로 아래로
    var fold = L.querySelector('[data-bdc="fold"]');
    var priceRow = [].filter.call(L.children, function (dl) { var t = dl.tagName === 'DL' && dl.querySelector('dt'); return t && txt(t) === '판매가'; })[0];
    if (fold && priceRow && priceRow.nextElementSibling !== fold) L.insertBefore(fold, priceRow.nextSibling);
    [].forEach.call(L.children, function (dl) { var t = dl.tagName === 'DL' && dl.querySelector('dt'); if (t && /^(모델명|구매혜택|배송비|네이버페이)$/.test(txt(t))) dl.classList.add('dbh-hid'); });   // 11-19 '모델명' 줄 숨김(빛드론과 같게) + 구매혜택·배송비는 아이콘 칸(적립·무료배송/방문납품)과 겹쳐 숨김(사장님)
    var rows = [].filter.call(L.children, function (dl) {
      var t = dl.tagName === 'DL' && dl.querySelector('dt');
      return t && INF_KEYS[txt(t)] && !dl.classList.contains('dbh-hid') && (dl.classList.contains('dbh-inr') || getComputedStyle(dl).display !== 'none');
    });
    if (!rows.length) return;
    var seen = {}, h = '';
    rows.forEach(function (dl) {
      var k = INF_KEYS[txt(dl.querySelector('dt'))], v = txt(dl.querySelector('dd'));
      if (seen[k]) return; seen[k] = 1;
      if (k === '제조사' && /DJI/.test(v)) v = 'DJI 정품 (공식 수입상품)';   // DJI가 아닌 상품(잭커리 등)은 원래 글자 그대로
      if (k === '고객상담') v = '<a href="tel:' + TEL + '">' + TEL + '</a>';
      h += '<div><b>' + k + '</b><span>' + v + '</span></div>';
    });
    var box = L.querySelector('.dbh-inf');
    if (!box) { box = document.createElement('div'); box.className = 'dbh-inf'; }
    if (box.innerHTML !== h) box.innerHTML = h;
    if (box.nextSibling !== rows[0]) L.insertBefore(box, rows[0]);
    rows.forEach(function (dl) { dl.classList.add('dbh-inr'); dl.style.display = 'none'; });
  }

  // 2026-11-19 S: 검색 결과 위 '대표 기체' 띠 (사장님 승인 — 검색정렬 시안 B안). 검색이 최신 등록순이라 '매트리스' 첫 화면이 액세서리뿐이던 것
  //   목록·정렬은 그대로, 액세서리 낱말이 같이 있으면 안 띄움, 0건 화면에도 띄움. 자료는 08_쇼핑몰/검색정렬_시안_2026-11-19/build_strip.py 가 아래 표시 사이만 씀.
  //   + C안: 검색 화면의 'BEST 1·2·3' 표시 숨김(판매 순위가 아니라 최신순 자리 번호였음 — 분류·메인 BEST는 그대로)
  /*STRIP-DATA*/
  var SS_RULES = [["매트리스5|m5t|m5td|matrice5",[[1572,"매트리스 5T","열화상·야간 점검","https://ecimg.cafe24img.com/pg724b63244550007/dronebox2/web/upload/NNEditor/20261109/56952ce839b8eb1b7c3ae0cbd06660e1.jpg"],[1566,"매트리스 5TD 콤보","독4용 열화상","https://ecimg.cafe24img.com/pg724b63244550007/dronebox2/web/upload/NNEditor/20261026/996fbec38d665ad24ad63df2fb3c8f71.jpg"],[1567,"5TD 낙하산 콤보","독4용 · AP1 낙하산","https://ecimg.cafe24img.com/pg724b63244550007/dronebox2/web/upload/NNEditor/20261026/ba1fee1e8f88d2db2e22622f90687a8b.jpg"]]],["매트리스400|m400|matrice400",[[1318,"매트리스 400 Plus 콤보","대형 플랫폼 · 59분 비행","https://godomall.speedycdn.net/2ee3015e331087a0acf29befbeb79f2d/goods/1000001318/image/list/1000001318_list_019.jpg"]]],["매트리스4|m4t|m4e|m4td|m4d|matrice4",[[1271,"매트리스 4T","열화상·수색","https://godomall.speedycdn.net/2ee3015e331087a0acf29befbeb79f2d/goods/1000001271/image/list/1000001271_list_011.jpg"],[1270,"매트리스 4E","측량·매핑","https://godomall.speedycdn.net/2ee3015e331087a0acf29befbeb79f2d/goods/1000001270/image/list/1000001270_list_081.jpg"],[1637,"4TD SP Plus+","독3용 열화상 · RC Plus 2","https://ecimg.cafe24img.com/pg724b63244550007/dronebox2/web/upload/NNEditor/20261117/dc96d62ea38a479f13cff828171f692d.jpg"],[1295,"4TD SP PLUS","독3용 열화상","https://godomall.speedycdn.net/2ee3015e331087a0acf29befbeb79f2d/goods/1000001295/image/list/1000001295_list_058.jpg"],[1294,"4D SP PLUS","독3용 측량","https://godomall.speedycdn.net/2ee3015e331087a0acf29befbeb79f2d/goods/1000001294/image/list/1000001294_list_096.jpg"]]],["독|dock|도크|드론스테이션",[[1565,"독4","무인 자동 운용 스테이션","https://ecimg.cafe24img.com/pg724b63244550007/dronebox2/web/upload/NNEditor/20261026/9ccfe5bae67cf01ff4cf03d75620a0f5.jpg"],[1293,"독3","무인 자동 운용 스테이션","https://godomall.speedycdn.net/2ee3015e331087a0acf29befbeb79f2d/goods/1000001293/image/list/1000001293_list_071.jpg"],[1409,"독3 + 4TD","무인 자동 운용 세트","https://godomall.speedycdn.net/2ee3015e331087a0acf29befbeb79f2d/goods/1000001409/image/list/1000001409_list_013.jpg"]]],["매빅3엔터|매빅3e|매빅3t|매빅3멀티|mavic3e|mavic3t|mavic3m|mavic3enterprise|멀티스펙트럴|3ta",[[1588,"매빅3 엔터프라이즈 3E","소형 측량","https://ecimg.cafe24img.com/pg724b63244550007/dronebox2/web/product/big/20240329/85a4c4d12f3a6422321e7c5fc7c298bf.jpg"],[1589,"매빅3 3TA","소형 열화상","https://ecimg.cafe24img.com/pg724b63244550007/dronebox2/web/product/big/20240329/7f4479ffcc6609ea86420236fa421fd8.jpg"],[881,"매빅3 멀티스펙트럴","농업·식생 분석","https://godomall.speedycdn.net/2ee3015e331087a0acf29befbeb79f2d/goods/1000000881/image/list/1000000881_list_032.jpg"]]],["열화상|써멀|thermal",[[1572,"매트리스 5T","열화상·야간 점검","https://ecimg.cafe24img.com/pg724b63244550007/dronebox2/web/upload/NNEditor/20261109/56952ce839b8eb1b7c3ae0cbd06660e1.jpg"],[1271,"매트리스 4T","열화상·수색","https://godomall.speedycdn.net/2ee3015e331087a0acf29befbeb79f2d/goods/1000001271/image/list/1000001271_list_011.jpg"],[1637,"4TD SP Plus+","독3용 열화상 · RC Plus 2","https://ecimg.cafe24img.com/pg724b63244550007/dronebox2/web/upload/NNEditor/20261117/dc96d62ea38a479f13cff828171f692d.jpg"],[1295,"4TD SP PLUS","독3용 열화상","https://godomall.speedycdn.net/2ee3015e331087a0acf29befbeb79f2d/goods/1000001295/image/list/1000001295_list_058.jpg"],[1589,"매빅3 3TA","소형 열화상","https://ecimg.cafe24img.com/pg724b63244550007/dronebox2/web/product/big/20240329/7f4479ffcc6609ea86420236fa421fd8.jpg"]]],["매트리스|matrice|산업용|엔터프라이즈|enterprise",[[1572,"매트리스 5T","열화상·야간 점검","https://ecimg.cafe24img.com/pg724b63244550007/dronebox2/web/upload/NNEditor/20261109/56952ce839b8eb1b7c3ae0cbd06660e1.jpg"],[1566,"매트리스 5TD 콤보","독4용 열화상","https://ecimg.cafe24img.com/pg724b63244550007/dronebox2/web/upload/NNEditor/20261026/996fbec38d665ad24ad63df2fb3c8f71.jpg"],[1271,"매트리스 4T","열화상·수색","https://godomall.speedycdn.net/2ee3015e331087a0acf29befbeb79f2d/goods/1000001271/image/list/1000001271_list_011.jpg"],[1270,"매트리스 4E","측량·매핑","https://godomall.speedycdn.net/2ee3015e331087a0acf29befbeb79f2d/goods/1000001270/image/list/1000001270_list_081.jpg"],[1637,"4TD SP Plus+","독3용 열화상 · RC Plus 2","https://ecimg.cafe24img.com/pg724b63244550007/dronebox2/web/upload/NNEditor/20261117/dc96d62ea38a479f13cff828171f692d.jpg"],[1318,"매트리스 400 Plus 콤보","대형 플랫폼 · 59분 비행","https://godomall.speedycdn.net/2ee3015e331087a0acf29befbeb79f2d/goods/1000001318/image/list/1000001318_list_019.jpg"],[1565,"독4","무인 자동 운용 스테이션","https://ecimg.cafe24img.com/pg724b63244550007/dronebox2/web/upload/NNEditor/20261026/9ccfe5bae67cf01ff4cf03d75620a0f5.jpg"],[1293,"독3","무인 자동 운용 스테이션","https://godomall.speedycdn.net/2ee3015e331087a0acf29befbeb79f2d/goods/1000001293/image/list/1000001293_list_071.jpg"]]]];
  var SS_SKIP = '배터리|프로펠러|케어|care|충전|허브|케이스|스피커|조명|스포트라이트|낙하산|동글|마운트|가드|필터|키트|젠뮤즈|zenmuse|h30|어댑터|스트랩|랜딩|부품|모듈|가방|거치|커버|조종기|rcplus|라이선스|소프트웨어|보험|수리|중고|교육';
  /*/STRIP-DATA*/
  function searchStrip() {
    if (path.indexOf('goods_search') < 0) return;
    if (!document.getElementById('dbh-ss-css')) {
      var c = document.createElement('style'); c.id = 'dbh-ss-css';
      c.textContent = '.pr_best{display:none!important}' +
        '.dbh-ss{clear:both;margin:14px 0 18px;padding:14px 16px 12px;border:1px solid #1C88CB;background:#fff;text-align:left;box-sizing:border-box}' +
        '.dbh-ss h3{margin:0 0 10px;font-size:16px;font-weight:700;color:#156FAB;line-height:1.3}.dbh-ss h3 small{font-size:12.5px;font-weight:400;color:#6B7684;margin-left:8px}' +
        '.dbh-ss .r{display:flex;gap:10px;overflow-x:auto;-webkit-overflow-scrolling:touch;padding-bottom:4px}' +
        '.dbh-ss a{flex:0 0 150px;display:block;border:1px solid #E5E8EB;padding:8px;text-decoration:none;color:#191F28!important;background:#fff;box-sizing:border-box}' +
        '.dbh-ss a:hover{border-color:#1C88CB}.dbh-ss img{display:block;width:100%;height:120px;object-fit:contain;background:#F7F8FA;margin-bottom:6px}' +
        '.dbh-ss b{display:block;font-size:13.5px;line-height:1.35}.dbh-ss span{display:block;font-size:12px;color:#1C88CB;margin-top:2px}' +
        '.dbh-ss.mo{margin:10px 12px 14px;padding:12px 12px 10px}.dbh-ss.mo a{flex-basis:128px}.dbh-ss.mo img{height:96px}';
      (document.head || document.documentElement).appendChild(c);
    }
    if (document.querySelector('.dbh-ss')) return;
    var m = location.search.match(/[?&]keyword=([^&]*)/); if (!m) return;
    var k = ''; try { k = decodeURIComponent(m[1].replace(/\+/g, ' ')); } catch (e) { return; }
    k = k.toLowerCase().replace(/\s+/g, '');
    if (!k || new RegExp(SS_SKIP).test(k)) return;
    var r = SS_RULES.filter(function (x) { return new RegExp(x[0]).test(k); })[0];
    if (!r) return;
    var at = mob ? document.getElementById('goodslist') : ((document.querySelector('.goods_list_cont') || {}).parentNode || (document.querySelector('.goods_no_data') || {}).parentNode);
    if (!at || !at.parentNode) return;
    var box = document.createElement('div'); box.className = 'dbh-ss' + (mob ? ' mo' : '');
    var h = '<h3>대표 기체<small>검색어에 맞는 기체를 먼저 보여 드려요</small></h3><div class="r">';
    r[1].forEach(function (x) {
      h += '<a href="/goods/goods_view.php?goodsNo=' + (1000000000 + x[0]) + '"><img src="' + x[3] + '" alt="' + x[1] + '" loading="lazy"><b>' + x[1] + '</b><span>' + x[2] + '</span></a>';
    });
    box.innerHTML = h + '</div>';
    at.parentNode.insertBefore(box, at);
  }

  // 2026-11-20 P: 추가상품 목록의 금액 '( +1,489,000원 )'이 괄호 뒤에서 끊겨 아랫줄로 넘어감(사장님 캡처, 인스파이어 3) →
  //   금액을 '(+1,489,000원)' 한 덩어리(줄바꿈 안 함)로 묶음. PC 드롭다운(chosen)·휴대폰 구매 창 목록 모두. 목록은 열 때마다 다시 그려져서 지켜보다가 다시 묶음.
  var PRICE_RE = /\(\s*([+\-]?\s*[\d,]+\s*원)\s*\)\s*$/;
  function priceWrap() {
    [].forEach.call(document.querySelectorAll('.chosen-results li, .ly_buy_info li'), function (li) {
      if (li.querySelector('.dbh-pr')) return;
      var nodes = [].filter.call(li.childNodes, function (n) { return n.nodeType === 3 && /원\s*\)\s*$/.test(n.nodeValue); });
      var t = nodes[nodes.length - 1]; if (!t) return;
      var m = t.nodeValue.match(PRICE_RE); if (!m) return;
      var s = document.createElement('span'); s.className = 'dbh-pr'; s.style.whiteSpace = 'nowrap';
      s.textContent = '(' + m[1].replace(/\s+/g, '') + ')';
      t.nodeValue = t.nodeValue.slice(0, m.index).replace(/\s*$/, ' ');
      t.parentNode.insertBefore(s, t.nextSibling);
    });
  }
  function priceWatch() {
    priceWrap();
    if (!window.MutationObserver || path.indexOf('goods_view') < 0) return;
    var busy = 0;
    new MutationObserver(function () { if (busy) return; busy = 1; setTimeout(function () { busy = 0; try { priceWrap(); } catch (e) {} }, 30); })
      .observe(document.body, {childList: true, subtree: true});
  }

  // 2026-11-23 W: 필기 기출문제 화면(event/dronetest) 위 탭 아래·문제 목록 끝에 '입문 드론 보기 · 자격증·교육 상담' 줄
  //   (11-22 녹화: 손님 2명이 37분 동안 문제만 풀고 상품으로는 안 넘어감)
  function testLinks() {
    if (!/htmid=event\/dronetest/.test(location.search)) return;
    if (!document.getElementById('dbh-dtx-css')) {
      var st = document.createElement('style'); st.id = 'dbh-dtx-css';
      st.textContent = '.dbh-dtx{max-width:1100px;margin:18px auto;padding:16px 18px;border:1px solid #D3E3F4;border-radius:12px;background:#EEF4FB;display:flex;align-items:center;gap:10px 14px;flex-wrap:wrap;text-align:left;font-family:inherit;box-sizing:border-box}' +
        '.dbh-dtx .t{flex:1 1 260px;font-size:15px;color:#191F28;line-height:1.5}.dbh-dtx .t b{color:#1F67B1}.dbh-dtx .t em{display:block;font-style:normal;font-size:13px;color:#4E5968}' +
        '.dbh-dtx a{display:inline-block;padding:10px 16px;border-radius:999px;font-size:14px;font-weight:700;text-decoration:none;white-space:nowrap}' +
        '.dbh-dtx a.p{background:#1F67B1;color:#fff}.dbh-dtx a.s{background:#fff;color:#1F67B1;border:1px solid #B9D3EE}' +
        (mob ? '.dbh-dtx{margin:14px 12px}.dbh-dtx .t{font-size:14px}.dbh-dtx a{font-size:13px;padding:9px 14px}' : '');
      document.head.appendChild(st);
    }
    function box(id, title, sub) {
      var d = document.createElement('div'); d.id = id; d.className = 'dbh-dtx';
      d.innerHTML = '<div class="t">' + title + '<em>' + sub + '</em></div><a class="p" href="/goods/goods_main.php?sno=94">입문 드론 보기 ›</a>' +
        '<a class="s" href="#">자격증·교육 카톡 상담 ›</a>';
      d.querySelector('a.s').addEventListener('click', function (e) { e.preventDefault(); kakao(); });   // 11-23 사장님: PC에선 전화 링크가 반응 없음 → 카톡(없으면 전화)
      return d;
    }
    function put() {
      var tab = document.querySelector('.howtouse'); if (!tab) return;
      if (!document.getElementById('dbh-dtx1')) tab.parentNode.insertBefore(box('dbh-dtx1', '<b>필기 공부 중이세요?</b> 실기는 기체로 연습해요', '자격증 준비용 입문 드론과 교육 상담을 한곳에서'), tab.nextSibling);
      if (!document.getElementById('dbh-dtx2')) tab.parentNode.appendChild(box('dbh-dtx2', '<b>문제 다 푸셨나요?</b> 다음은 실기 연습', '입문 드론을 보거나, 자격증·교육 일정을 상담해 보세요'));
    }
    put(); setTimeout(put, 1500); setTimeout(put, 4000);
  }
  // 2026-11-23 Y: 산업용 상품 PC 상세 — 구매 단추 아래로 내려가면 화면 아래에 띠(사진·이름·가격 · 카톡 견적 요청 · 전화 · 구매하기)
  //   (11-22 녹화: 1572 PC 손님이 5분 읽고 나감 — 1,500px만 내려가도 견적·구매 단추가 화면에 하나도 없었음)
  function indBar() {
    if (mob || path.indexOf('goods_view') < 0 || document.getElementById('dbh-ibar')) return;
    var nmEl = document.querySelector('.item_detail_tit h3, .item_detail_tit');
    var nm = (nmEl && (nmEl.innerText || nmEl.textContent) || '').split('\n')[0].trim();
    if (!IND.test(document.title + ' ' + nm)) return;
    var choice = document.querySelector('.btn_choice_box'); if (!choice) return;
    var pr = [].filter.call(document.querySelectorAll('.item_detail_list dd strong, .item_price strong'), function (e) { return /\d/.test(e.textContent); })[0];
    var img = (document.querySelector('.item_photo_big img, #mainImage img, .item_photo_view img') || {}).src || '';
    var st = document.createElement('style');
    st.textContent = '#dbh-ibar{position:fixed;left:0;right:0;bottom:0;z-index:900;background:#fff;border-top:1px solid #E5E8EB;box-shadow:0 -6px 18px rgba(20,30,40,.08);transform:translateY(110%);transition:transform .25s}' +
      '#dbh-ibar.on{transform:none}#dbh-ibar .in{max-width:1100px;margin:0 auto;padding:10px 0;display:flex;align-items:center;gap:14px;font-family:inherit}' +
      '#dbh-ibar img{width:48px;height:48px;object-fit:contain;border-radius:8px;background:#F4F6F8}' +
      '#dbh-ibar .n{flex:1;min-width:0;font-size:14px;color:#191F28;font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}' +
      '#dbh-ibar .n em{display:block;font-style:normal;font-size:16px;font-weight:800;color:#1F67B1}' +
      '#dbh-ibar a{display:inline-block;padding:12px 18px;border-radius:10px;font-size:14px;font-weight:700;text-decoration:none;white-space:nowrap}' +
      '#dbh-ibar a.q{background:#1F67B1;color:#fff}#dbh-ibar a.c{background:#fff;color:#191F28;border:1px solid #D1D6DB}#dbh-ibar a.b{background:#191F28;color:#fff}';
    document.head.appendChild(st);
    var b = document.createElement('div'); b.id = 'dbh-ibar';
    b.innerHTML = '<div class="in"><img alt=""><div class="n"><span></span><em></em></div>' +
      '<a class="q" href="#">카톡 견적 요청</a><a class="c" href="tel:' + IND_TEL + '">전화 ' + IND_TEL + '</a><a class="b" href="#">구매하기</a></div>';
    if (img) b.querySelector('img').src = img; else b.querySelector('img').style.display = 'none';
    b.querySelector('.n span').textContent = nm;
    b.querySelector('.n em').textContent = pr ? txt(pr).replace(/원$/, '') + '원' : '';
    document.body.appendChild(b);
    b.querySelector('a.b').addEventListener('click', function (e) { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); });
    b.querySelector('a.q').addEventListener('click', function (e) { e.preventDefault(); kakao(); });
    function chk() { var lim = choice.getBoundingClientRect().bottom + window.pageYOffset; b.className = window.pageYOffset > lim ? 'on' : ''; }
    window.addEventListener('scroll', chk, { passive: true }); chk();
  }

  function run() {
    css();
    try { testLinks(); } catch (e) {}
    try { priceWatch(); } catch (e) {}
    try { telUnifyLater(); } catch (e) {}
    try { visitLater(); } catch (e) {}
    try { searchStrip(); setTimeout(searchStrip, 1500); } catch (e) {}
    try { quoteCart(); } catch (e) {}
    try { partPicsLater(); } catch (e) {}
    [qaHelp, crumbFix, couponHelp, crumbLogin, setGuide].forEach(function (f) { try { f(); } catch (e) {} });   // PC·휴대폰 모두
    if (!mob) { try { guestUpPc(); } catch (e) {} }
    if (!mob) { try { quoteGoods(); } catch (e) {} }
    if (!mob) { try { indBar(); setTimeout(indBar, 2000); } catch (e) {} }
    if (!mob) return;                         // B·C·D·E는 휴대폰 화면만 (X는 CSS로 PC도)
    [smallChat, buyNote, guestUp, freeShip, quoteGoods].forEach(function (f) { try { f(); } catch (e) {} });   // quoteGoods는 buyNote 뒤(그 줄을 바꿈)
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', run); else run();
})();

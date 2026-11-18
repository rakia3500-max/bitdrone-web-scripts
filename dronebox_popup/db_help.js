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
   P(11-18): 단품 상품(MIC3 송신기 1373)에 '수신기·케이스 없음 + 세트 보기' 줄 (네이버에서 세트로 알고 왔다가 1분 안에 나감)
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

  function run() {
    css();
    [qaHelp, crumbFix, couponHelp, crumbLogin, setGuide].forEach(function (f) { try { f(); } catch (e) {} });   // PC·휴대폰 모두
    if (!mob) { try { guestUpPc(); } catch (e) {} }
    if (!mob) return;                         // B·C·D·E는 휴대폰 화면만 (X는 CSS로 PC도)
    [smallChat, buyNote, guestUp, freeShip].forEach(function (f) { try { f(); } catch (e) {} });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', run); else run();
})();

/* 행사 안내 띠·상세 카드 — 빛드론(카페24)·드론박스(고도몰) 공용. 2026-11-19 Claude · 11-20 사장님 OK(시안 B·QR 둘 다) 반영
   첫 행사: DJI Mini 5 Pro 구매 시 DJI Care Refresh 1년 증정(대원CTS, 11/17~11/30, 콤보 플러스 제외)
   - 상품 상세 원문은 건드리지 않고 화면에서만 끼워 넣음 → 걷어 낼 때 상세 복구 작업 없음
   - END 시각이 지나면 스스로 안 보임(12/1 00:00 한국 시각). 스크립트 태그·외부 스크립트 칸 정리는 그 뒤 아무 때나
   - 드론박스 화면엔 '빛드론'·'공식' 글자를 쓰지 않음(MALL 별 문구로 나눔)
   - 넣었는지 확인 범위 = 넣는 위치(id 하나로 확인), 감시는 20초 동안만 돌고 멈춤(무한 반복 방지) */
(function () {
  'use strict';
  var P = {
    id: 'm5pcare',
    start: Date.parse('2026-11-17T00:00:00+09:00'),
    end: Date.parse('2026-12-01T00:00:00+09:00'),
    form: 'https://m.site.naver.com/2l7dH',            // 대원 그림 속 QR이 가리키는 주소(그림에서 읽음, 새로 만들지 않음)
    qr: window.__BDP_QR || 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPAAAADwAQAAAAAWLtQ/AAACLElEQVR42u2ZUW7bMBBEH7sC8hOAvkGv4AMUoG9W9GarG/giBSjAPwHWmH5QSmo0aG0JcaQ0+pK0ILGj4XKGqyT+dn3hM/yhwmgkvIiwCkVgAYBJKwcmSQ4NQp9EkCXp+sn32yQ0pR30PDztshclgCGlK0eff3vevw+wA3A6AjZndB/knwd6YnMl2EH2/ru62ZPvLxl888xt9ugOQDCAoJLVo+6JrC0wllJKO6A7786H4XvXSiylmyc/HY8XJbdi3N20l9InHmKAnmSm7cnc/mYVjKaC7XKkpoLSVSpoizI/L9FvBZAlpNoQWORKQavX70W+RSap4awTUzX7tYy9Z+YKsuSYaq7FmSyYfWzGwCJXUJgqZfoOWj9jzQ07CpOcIkw1e/HbM99fuqCV41aYavGRKEfWLLetnzELslxBjlJpa6/o9sxPx+PGaqyd3iJLojzX2j9xd3+88XJfYCd4XQ2vwR1keRE2qmBYzV7uslJtEWNFzuM0R3EbHYhdl7nzjdPLN5tuYgt7C+TGWK5lbESUtavBZfiR4xzceSzJSvHJcrMB3zIuzTDJi5BJtYhFKjgvNV80+jCvQ6bIkrxMPmYWY3fNXJJqcSlynZp6tTgf2Wm+dMhIqaPtLef24q3PY4vP38/cJTHsoI+HGL62TeIG/W5qcui1QUKHHeUHKcY+xOozf0X9H2+tUKHINXuRxpPGBhx28yvCVFunj/m74j3DPn90+vw/9l+FfwGDbZMPyJ2adwAAAABJRU5ErkJggg==',   // 대원 그림에서 잘라 낸 원본 QR(새로 만들지 않음) — 11-20 사장님: PC·휴대폰 둘 다 QR 보이기
    img: window.__BDP_IMG || {},                        // 시안 A용 대원 그림 {wide, square}
    variant: window.__BDP_VARIANT || 'B',               // A = 대원 그림 그대로, B = 카드형
    bit: { on: [[612, '단품'], [611, '플라이 모어 콤보(RC-N3)'], [610, '플라이 모어 콤보(DJI RC 2)']], off: [609], care: [613] },
    box: { on: [[1000001385, '단품'], [1000001384, '플라이 모어 콤보(RC-N3)'], [1000001383, '플라이 모어 콤보(DJI RC 2)']], off: [1000001382], care: [] }
  };
  var now = window.__BDP_NOW || Date.now();
  if (now < P.start || now >= P.end) return;

  var isBox = /drone-box/.test(location.hostname);
  var M = isBox ? P.box : P.bit;
  var TEL = isBox ? '0507-1337-7089' : '070-5176-7075';
  var CS = isBox ? '고객센터' : '빛드론 고객센터';
  var no = isBox ? +(location.search.match(/goodsNo=(\d+)/) || [])[1] : +(window.iProductNo || (location.search.match(/product_no=(\d+)/) || [])[1] || 0);
  var onMap = {}; M.on.forEach(function (x) { onMap[x[0]] = x[1]; });
  var kind = onMap[no] ? 'on' : M.off.indexOf(no) >= 0 ? 'off' : M.care.indexOf(no) >= 0 ? 'care' : '';
  if (!kind) return;
  var mob = /m\.drone-box|^m\./.test(location.hostname) || window.matchMedia('(max-width: 768px)').matches;
  var link = function (n) { return isBox ? '/goods/goods_view.php?goodsNo=' + n : '/product/detail.html?product_no=' + n; };
  var onNos = M.on.map(function (x) { return x[0]; });

  var css = document.createElement('style');
  css.textContent =
    '.m5c{font-family:inherit;color:#191F28;box-sizing:border-box;letter-spacing:-0.01em}.m5c *{box-sizing:border-box}' +
    '.m5c-s{width:100%;display:flex;align-items:center;gap:10px;margin:10px 0 12px;padding:11px 14px;border-radius:10px;background:#EEF4FB;border:1px solid #D3E3F4;font-size:13.5px;line-height:1.45}' +
    '.m5c-s svg{flex:none;width:22px;height:22px}.m5c-s b{color:#1F67B1}.m5c-s .t{flex:1;min-width:0}.m5c-s .t em{font-style:normal;color:#4E5968}' +
    '.m5c-s a.go{flex:none;font-size:12.5px;font-weight:700;color:#1F67B1;text-decoration:none;white-space:nowrap}' +
    '.m5c-s.fl{clear:both;float:left}.m5c-s.off{background:#F7F8FA;border-color:#E5E8EB}.m5c-s.off b{color:#191F28}.m5c-s.off a{color:#1F67B1;font-weight:600;text-decoration:none}' +
    '.m5c-c{max-width:860px;margin:0 auto 36px;padding:28px 30px 22px;border-radius:16px;background:linear-gradient(180deg,#F1F5FA,#E7EEF6);text-align:left}' +
    '.m5c-c .k{font-size:13px;font-weight:700;color:#4E5968;margin:0 0 6px}.m5c-c h3{margin:0!important;padding:0!important;font-size:28px;line-height:1.3;font-weight:800;color:#191F28}.m5c-c .k,.m5c-c .d{padding:0!important}' +
    '.m5c-c h3 span{color:#1F67B1}.m5c-c .d{margin:8px 0 0;font-size:14px;color:#4E5968}.m5c-c .d b{color:#191F28}' +
    '.m5c-c .row{display:flex;gap:22px;align-items:flex-start;margin-top:20px}.m5c-c ol{flex:1;list-style:none;margin:0;padding:0;display:grid;gap:10px}' +
    '.m5c-c ol>li{display:flex;gap:12px;background:#fff;border-radius:12px;padding:13px 15px;font-size:14px;line-height:1.5}' +
    '.m5c-c ol>li i{flex:none;width:24px;height:24px;border-radius:50%;background:#1F67B1;color:#fff;font-style:normal;font-weight:700;font-size:13px;display:flex;align-items:center;justify-content:center}' +
    '.m5c-c ol>li b{display:block;font-size:14.5px}.m5c-c ol>li em{font-style:normal;color:#4E5968;font-size:13px}' +
    '.m5c-c .qr{flex:none;width:176px;background:#fff;border-radius:14px;padding:14px;text-align:center;font-size:12.5px;color:#4E5968;line-height:1.45}' +
    '.m5c-c .qr img{display:block;width:148px!important;height:148px!important;max-width:none!important;margin:0 auto 8px;image-rendering:pixelated}' +
    '.m5c-c a.btn{display:block;margin:16px 0 0;padding:15px;border-radius:12px;background:#1F67B1;color:#fff;text-align:center;font-weight:700;font-size:15.5px;text-decoration:none}' +
    '.m5c-c .pc-link{display:inline-block;margin-top:6px;color:#1F67B1;font-weight:700;text-decoration:none}' +
    '.m5c-c .n{margin:16px 0 0;display:block;padding:0;list-style:none;font-size:12.5px;color:#6B7684;line-height:1.7}' +
    '.m5c-a{max-width:860px;margin:0 auto 36px;text-align:center}.m5c-a img{display:block;width:100%;height:auto;border-radius:12px}' +
    '.m5c-a .n{margin:10px 0 0;font-size:12.5px;color:#6B7684;line-height:1.7;text-align:left}' +
    '.m5c-a a.btn{display:block;margin:12px 0 0;padding:15px;border-radius:12px;background:#1F67B1;color:#fff;font-weight:700;font-size:15.5px;text-decoration:none}' +
    '.m5c-note{display:block;margin:6px 0 0;font-size:12px;color:#1F67B1;line-height:1.45}' +
    '@media (max-width:768px){.m5c-c{padding:22px 18px 18px;border-radius:14px;margin-bottom:28px}.m5c-c h3{font-size:22px}.m5c-c .row{display:block}.m5c-c .qr{width:auto;display:flex;align-items:center;gap:14px;margin:12px 0 0;text-align:left;font-size:13px}.m5c-c .qr img{flex:none;width:116px!important;height:116px!important;margin:0}.m5c-c .qr span{flex:1;min-width:0}.m5c-c .qr .pc-link{display:none}' +
    '.m5c-s{font-size:13px;padding:10px 12px;flex-wrap:wrap}.m5c-s a.go{margin-left:32px}}';

  var ICON = '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 2.8l7 2.6v6.1c0 4.3-2.9 8.1-7 9.7-4.1-1.6-7-5.4-7-9.7V5.4l7-2.6z" fill="#fff" stroke="#1F67B1" stroke-width="1.6"/><path d="M15.2 10.4a3.4 3.4 0 0 0-6-1.2M8.8 13.6a3.4 3.4 0 0 0 6 1.2" stroke="#1F67B1" stroke-width="1.6" stroke-linecap="round"/><path d="M9.6 7.8l-.5 1.6 1.6.3M14.4 16.2l.5-1.6-1.6-.3" stroke="#1F67B1" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  var ICON_OFF = ICON.replace(/#1F67B1/g, '#8B95A1');
  var esc = function (s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); };
  var targets = onNos.map(function (n) { return '<a href="' + link(n) + '">' + esc(onMap[n]) + '</a>'; }).join(' · ');

  function strip() {
    var d = document.createElement('div'); d.id = 'm5c-s-' + P.id;
    if (kind === 'on') {
      d.className = 'm5c m5c-s';
      d.innerHTML = ICON + '<span class="t"><b>DJI Care Refresh 1년 무료 증정</b> <em>· 11/30(월)까지 · 구매 후 직접 신청</em></span><a class="go" href="#m5c-c-' + P.id + '">신청 방법 ›</a>';
    } else if (kind === 'off') {
      d.className = 'm5c m5c-s off';
      d.innerHTML = ICON_OFF + '<span class="t"><b>이 상품(플라이 모어 콤보 플러스)은 케어 1년 증정 대상이 아닙니다.</b><br>증정 대상(11/30까지): ' + targets + '</span>';
    } else {
      d.className = 'm5c m5c-s';
      d.innerHTML = ICON + '<span class="t"><b>Mini 5 Pro 본품을 11/30까지 사시면 1년 케어는 무료 신청</b> <em>· 대상: ' + targets + ' (콤보 플러스 제외)</em></span>';
    }
    var go = d.querySelector('a.go');
    if (go) go.addEventListener('click', function (e) {
      var c = document.getElementById('m5c-c-' + P.id); if (!c) return;
      e.preventDefault(); window.scrollTo({ top: c.getBoundingClientRect().top + window.pageYOffset - 80, behavior: 'smooth' });
    });
    return d;
  }

  var NOTES = '<li>※ 플라이 모어 콤보 플러스는 증정 대상이 아닙니다.</li>' +
    '<li>※ 기체 활성화가 <b>11/30(월)까지</b> 끝나야 합니다. 월말에 주문하시면 도착일을 꼭 확인해 주세요.</li>' +
    '<li>※ 신청서에 구매처·구매일·시리얼 번호(S/N, 기체 바코드 아래 글자)를 적습니다. 잘못 적으면 증정이 안 될 수 있습니다.</li>' +
    '<li>※ 신청이 어려우시면 ' + CS + ' <a href="tel:' + TEL + '">' + TEL + '</a> 로 연락 주세요.</li>';

  function card() {
    var d = document.createElement('div'); d.id = 'm5c-c-' + P.id;
    var buy = isBox ? '드론박스' : '빛드론';
    if (P.variant === 'A' && P.img.wide) {
      d.className = 'm5c m5c-a';
      d.innerHTML = '<img src="' + (mob && P.img.square ? P.img.square : P.img.wide) + '" alt="DJI Mini 5 Pro 구매 시 DJI Care Refresh 1년 무료 증정, 행사 기간 11월 17일부터 11월 30일, 플라이 모어 콤보 플러스 제외">' +
        (mob ? '<a class="btn" href="' + P.form + '" target="_blank" rel="noopener">휴대폰에서 바로 케어 1년 신청하기 ›</a>' : '') +
        '<ul class="n" style="list-style:none;padding:0">' + NOTES + '</ul>';
      return d;
    }
    d.className = 'm5c m5c-c';
    d.innerHTML =
      '<p class="k">DJI MINI 5 PRO 구매 혜택 · 행사 기간 11. 17(화) – 11. 30(월)</p>' +
      '<h3><span>DJI Care Refresh 1년</span><br>무료 증정</h3>' +
      '<p class="d">파손·분실 걱정을 덜어 주는 기기 보호 플랜입니다. 대상: <b>' + onNos.map(function (n) { return esc(onMap[n]); }).join(' · ') + '</b></p>' +
      '<div class="row"><ol>' +
      '<li><i>1</i><span><b>' + buy + '에서 구매 · 기체 활성화</b><em>DJI Fly 앱에서 기체 활성화를 11/30(월)까지 마쳐 주세요.</em></span></li>' +
      '<li><i>2</i><span><b>신청서 작성</b><em>' + (mob ? 'QR을 찍거나 아래 단추를 눌러' : '오른쪽 QR을 휴대폰으로 스캔해') + ' 구매처·구매일·시리얼 번호를 적어 주세요.</em></span></li>' +
      '<li><i>3</i><span><b>케어 1년 등록</b><em>활성화 확인 뒤 국내 총판(대원CTS)이 기체에 케어를 연결해 드립니다.</em></span></li>' +
      '</ol>' +
      (P.qr ? '<div class="qr"><img src="' + P.qr + '" alt="케어 1년 신청 QR"><span>' + (mob ? '<b style="color:#191F28">케어 1년 신청 QR</b><br>다른 휴대폰·태블릿 카메라로 찍어도 신청서가 열립니다.' : '휴대폰 카메라로 스캔') + '</span><br><a class="pc-link" href="' + P.form + '" target="_blank" rel="noopener">PC에서 신청 ›</a></div>' : '') +
      '</div>' +
      (mob ? '<a class="btn" href="' + P.form + '" target="_blank" rel="noopener">케어 1년 무료 신청하기 ›</a>' : '') +
      '<ul class="n">' + NOTES + '</ul>';
    return d;
  }

  // 넣는 자리 — 패널 띠
  function stripSpot() {
    if (isBox) {
      var b = document.querySelector('.item_detail_list [data-bdc="badges"], .detail_info_top [data-bdc="badges"]');
      return b ? { el: b, how: 'after' } : null;
    }
    var v = document.querySelector('#infoArea .ivc');           // 아이콘 4칸 상자 안 맨 위(밖에 두면 4칸이 옆으로 밀림)
    return v ? { el: v, how: 'prepend' } : null;
  }
  // 넣는 자리 — 상세 맨 위
  function cardSpot() {
    if (isBox) {
      var s = document.querySelector('script[data-bd="cpanel"]');
      var p = (s && s.parentElement) || document.querySelector('.detail_explain_box .txt-manual, .js_goods_description > div');
      return p ? { el: p, how: 'prepend' } : null;
    }
    var c = document.querySelector('#prdDetail .cont');
    return c ? { el: c, how: 'prepend' } : null;
  }
  function put(spot, node) {
    if (!spot || document.getElementById(node.id)) return !!spot;
    if (spot.how === 'after') spot.el.parentNode.insertBefore(node, spot.el.nextSibling);
    else if (spot.how === 'before') spot.el.parentNode.insertBefore(node, spot.el);
    else spot.el.insertBefore(node, spot.el.firstChild);
    return true;
  }
  // 드론박스: 패널 배지 'Care Refresh 1·2년 가입 가능' → 행사 동안 '1년 무료 증정', 'DJI 케어' 추가상품 고르는 칸 아래 한 줄
  function boxExtras() {
    if (!isBox || kind !== 'on') return;
    [].forEach.call(document.querySelectorAll('[data-bdc="badges"] > *'), function (a) {
      if (a.getAttribute('data-m5c') || !/Care Refresh/.test(a.textContent)) return;
      a.setAttribute('data-m5c', '1'); a.textContent = 'Care Refresh 1년 무료 증정(11/30까지)';
      a.style.background = '#1F67B1'; a.style.color = '#fff'; a.style.borderColor = '#1F67B1';
      a.setAttribute('href', '#m5c-c-' + P.id);
    });
    [].forEach.call(document.querySelectorAll('.item_add_option_box dl'), function (dl) {
      var dt = dl.querySelector('dt'); if (!dt || !/케어/.test(dt.textContent) || dl.querySelector('.m5c-note')) return;
      var n = document.createElement('span'); n.className = 'm5c-note';
      n.textContent = '1년 케어는 행사로 무료 신청할 수 있어 따로 사지 않으셔도 됩니다(11/30까지).';
      (dl.querySelector('dd') || dl).appendChild(n);
    });
  }

  function run() {
    var sNode = strip(); if (isBox) sNode.className += ' fl';
    var ok1 = put(stripSpot(), sNode);
    var ok2 = kind !== 'on' || put(cardSpot(), card());
    boxExtras();
    return ok1 && ok2;
  }
  document.head.appendChild(css);
  var n = 0, t = setInterval(function () { run(); if (++n > 40) clearInterval(t); }, 500);   // 20초 동안 빠졌으면 다시 넣음(아이콘 4칸이 늦게 다시 그려짐)
  run();
})();

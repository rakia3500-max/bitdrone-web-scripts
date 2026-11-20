/* 빛드론 상품 화면 패널 통일 (2026-11-19 사장님 "빛드론도 패널 스타일은 통일" — 시안 OK)
   제목 아래 회색 요약 줄 자리에 '소개 한 줄 + 사양 칩'(드론박스 패널과 같은 자료), 아이콘 4칸 위에 '구성품 보기' 접기, 모든 상품에서 '모델명' 줄 숨김.
   자료는 상품마다 panel/<번호>.json (08_쇼핑몰/빛드론_패널통일_시안_2026-11-19/build_bit_panel.py 가 만듦 — 이 파일을 손으로 고치지 말 것).
   자료가 없는 상품은 지금 모양 그대로(모델명 줄만 숨김). 개인정보·쿠키를 읽거나 보내지 않음. 빼면 원래대로. */
(function () {
  if (window.__bdPanel) return; window.__bdPanel = 1;
  var BASE = 'https://cdn.jsdelivr.net/gh/rakia3500-max/bitdrone-web-scripts@cb6d676419b839bca0eba3a146bd91b00a7ecd91/bitdrone_popup/panel/';
  var HAS = [276,288,293,297,307,309,310,311,312,317,323,324,326,328,334,336,338,341,342,350,352,354,358,364,365,366,367,402,405,406,413,429,434,435,437,446,451,452,453,454,455,456,458,459,461,462,465,474,479,482,483,486,487,491,493,495,496,502,510,511,513,514,515,516,517,518,519,520,521,522,525,527,528,533,535,538,539,540,542,544,545,546,547,552,553,554,555,556,558,559,560,561,562,563,564,565,568,569,570,571,572,575,576,577,578,579,580,581,583,584,604,605,606,607,608,609,610,611,612,613,614,615,616,617,618,620,621,622,629,632,634,635,636,637,638,639,641,642,644,645,646,647,648,649,651,655,656,657,658,660,661,662,663,664,665,667,668,669,670,671,673,674,675,676,677,678,679,680,682,683,684,686,687,688,689,691,692,693,694,695,696,702,703,704,705,706,709,710,711,712,713,714,715,716,717,718,719,720,721,722,723,724,725,726,727,728,729,730,731,732,733,734,735,736,737,738,739,740,741,742,743,744,745,746,747,748,749,750,751,752,753,754,755,756,761,762,763,764,765,766,767,768,780,781,782,783,784,785,788,789,790,791,792,793,794,795,796,797,798,799,800,801,802,804,805,806,807,808,809,810,811,812,813,814,815,816,817,818,819,820,821,822,823,824,825,827,828,829,830,831,832,833,834,835,836,837,838,839,840,841,842,843,844,845,846,847,848,849,850,851,852,853,854,855,856,857,858,859,860,861,862,863,864,865,866,867,868,869,870,871,872,873,874,875,876,877,878,879,880,881,882,883,884,885];
  var c = document.createElement('style');
  c.textContent = '.ivc-m{display:none!important}' +
    '.bdp{margin:8px 0 4px;text-align:left}.bdp p{margin:0 0 10px;font-size:14.5px;line-height:1.65;color:#333D4B;word-break:keep-all}' +
    '.bdp .c{display:flex;flex-wrap:wrap;gap:6px}.bdp .c span{display:inline-block;padding:5px 11px;border-radius:999px;background:#F2F4F6;color:#4E5968;font-size:13px;line-height:1.3}' +
    '.bdp .bdh-more{display:inline-block;margin-top:8px}' +
    '.bdp-f{margin:0 0 10px;border:1px dashed #D1D6DB;border-radius:10px;padding:10px 14px;font-size:13.5px;color:#191F28;cursor:pointer;text-align:left}' +
    '.bdp-f b{font-weight:700}.bdp-f small{color:#8B95A1;margin-left:6px;font-size:12px}' +
    '.bdp-f ul{display:none;margin:8px 0 0;padding:0;list-style:none;columns:2;column-gap:18px}.bdp-f.on ul{display:block}' +
    '.bdp-f li{font-size:13px;color:#4E5968;line-height:1.8;break-inside:avoid}' +
    '@media (max-width:767px){.bdp p{font-size:14px}.bdp-f ul{columns:1}}';
  (document.head || document.documentElement).appendChild(c);
  var m = location.search.match(/product_no=(\d+)/) || location.pathname.match(/\/(\d+)\/category\//) || location.pathname.match(/\/product\/[^\/]*\/(\d+)/);
  if (!m || HAS.indexOf(+m[1]) < 0) return;
  function esc(t) { return String(t).replace(/[&<>"]/g, function (x) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[x]; }); }
  function render(D) {
    var head = document.querySelector('#infoArea .headingArea');
    if (!head) return;
    var had = head.querySelector('.bdp');
    if (had) { var lm = head.querySelector('.summary_desc .bdh-more'); if (lm) had.appendChild(lm); return; }   // 링크가 늦게 붙은 경우
    var sum = head.querySelector('.summary_desc');
    var box = document.createElement('div'); box.className = 'bdp';
    box.innerHTML = '<p>' + esc(D.intro) + '</p>' + (D.chips && D.chips.length ? '<div class="c">' + D.chips.map(function (x) { return '<span>' + esc(x) + '</span>'; }).join('') + '</div>' : '');
    if (sum) {
      var more = sum.querySelector('.bdh-more'); if (more) box.appendChild(more);   // '구성·사양 자세히' 링크는 살림
      sum.parentNode.insertBefore(box, sum); sum.style.display = 'none';
    } else head.appendChild(box);
    var ivc = document.querySelector('#infoArea .ivc');
    if (D.box && D.box.length && ivc && !document.querySelector('.bdp-f')) {
      var f = document.createElement('div'); f.className = 'bdp-f';
      f.innerHTML = '<b>구성품 보기 ▾</b><small>' + D.box.length + '개</small><ul>' + D.box.map(function (x) { return '<li>· ' + esc(x) + '</li>'; }).join('') +
        (D.ship ? '<li style="color:#8B95A1">' + esc(D.ship) + '</li>' : '') + '</ul>';
      f.addEventListener('click', function () { var on = f.classList.toggle('on'); f.querySelector('b').textContent = on ? '구성품 접기 ▴' : '구성품 보기 ▾'; });
      ivc.parentNode.insertBefore(f, ivc);
    }
  }
  fetch(BASE + m[1] + '.json').then(function (r) { return r.ok ? r.json() : null; }).then(function (D) {
    if (!D || !D.intro) return;
    render(D); setTimeout(function () { render(D); }, 1500); setTimeout(function () { render(D); }, 4000);   // 구매 도움 스크립트가 늦게 그림
  }).catch(function () {});
})();

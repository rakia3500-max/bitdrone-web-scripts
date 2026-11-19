/* 빛드론 검색 결과 위 '찾으시는 기체' 띠 (2026-11-19 사장님 승인 — 검색정렬 시안 B안)
   검색 결과가 최신 등록순이라 '매트리스'를 쳐도 첫 화면이 액세서리뿐 → 검색어에 맞는 기체 카드를 결과 위에 한 줄로.
   목록·정렬은 그대로. 액세서리 낱말(배터리·케어 등)이 같이 있으면 띄우지 않음. 결과 0건 화면에도 띄움.
   자료는 08_쇼핑몰/검색정렬_시안_2026-11-19/build_strip.py 가 만듦(이 파일을 손으로 고치지 말 것).
   개인정보·쿠키를 읽거나 밖으로 보내지 않음. 빼면 원래대로. */
(function () {
  if (!/\/product\/search\.html/.test(location.pathname) || window.__bdSS) return;
  window.__bdSS = 1;
  var SS_RULES = [["매트리스5|m5t|m5td|matrice5",[[804,"매트리스 5T","열화상·야간 점검","https://ecimg.cafe24img.com/pg724b63244550007/dronebox2/web/product/medium/20261109/ecf053029d8f911b4f6c05bf2399aa01.jpg"],[797,"매트리스 5TD 콤보","독4용 열화상","https://ecimg.cafe24img.com/pg724b63244550007/dronebox2/web/product/medium/20261026/325fb385510dac8ff8e23a1589a4dfce.jpg"],[798,"5TD 낙하산 콤보","독4용 · AP1 낙하산","https://ecimg.cafe24img.com/pg724b63244550007/dronebox2/web/product/medium/20261026/9f917cdac8096bc216656ab2e11b244a.jpg"]]],["매트리스400|m400|matrice400",[[550,"매트리스 400 RTK","대형 플랫폼 · 59분 비행","https://ecimg.cafe24img.com/pg724b63244550007/dronebox2/web/product/medium/20250617/2fc0477f3c9fd74bb7ea7f662752e104.jpg"]]],["매트리스4|m4t|m4e|m4td|m4d|matrice4",[[514,"매트리스 4T","열화상·수색","https://ecimg.cafe24img.com/pg724b63244550007/dronebox2/web/product/medium/20250109/83750dd73e4c4a85f17c7bfb652fa9be.jpg"],[513,"매트리스 4E","측량·매핑","https://ecimg.cafe24img.com/pg724b63244550007/dronebox2/web/product/medium/20250109/183db01965987b537fc273e8fb6ee5dd.jpg"],[535,"4TD SP Plus+","독3용 열화상 · RC Plus 2","https://ecimg.cafe24img.com/pg724b63244550007/dronebox2/web/product/medium/20250305/96b14ab0fc986ae7b254572fb1786af1.jpg"],[815,"4TD SP PLUS","독3용 열화상","https://ecimg.cafe24img.com/pg724b63244550007/dronebox2/web/product/medium/20261110/a1bdfacc28f44532704020f7f1c4d153.jpg"],[536,"매트리스 4D","독3용 측량 · RC Plus 2","https://ecimg.cafe24img.com/pg724b63244550007/dronebox2/web/product/medium/20250305/b5f38404939698994ffcd6f3872194d6.jpg"],[814,"4D SP PLUS","독3용 측량","https://ecimg.cafe24img.com/pg724b63244550007/dronebox2/web/product/medium/20261110/00a9fc54972333dbfb5eb4bdf59da6fc.jpg"]]],["독|dock|도크|드론스테이션",[[796,"독4","무인 자동 운용 스테이션","https://ecimg.cafe24img.com/pg724b63244550007/dronebox2/web/product/medium/20261026/119c2f08f5c408745883965b18450882.jpg"],[534,"독3 + 4TD 세트","무인 자동 운용","https://ecimg.cafe24img.com/pg724b63244550007/dronebox2/web/product/medium/20250305/f45d025159c1fa41de2f88c589d21c57.jpg"]]],["매빅3엔터|매빅3e|매빅3t|매빅3멀티|mavic3e|mavic3t|mavic3m|mavic3enterprise|멀티스펙트럴|3ta",[[307,"매빅3 엔터프라이즈 3E","소형 측량","https://ecimg.cafe24img.com/pg724b63244550007/dronebox2/web/product/medium/20240329/ec7e053dbd28940123deaac99be95cdc.jpg"],[308,"매빅3 엔터프라이즈 3T","소형 열화상","https://ecimg.cafe24img.com/pg724b63244550007/dronebox2/web/product/medium/20240329/5b44027d735c84aff8b397e554ca1c0b.jpg"],[309,"매빅3 멀티스펙트럴","농업·식생 분석","https://ecimg.cafe24img.com/pg724b63244550007/dronebox2/web/product/medium/20240119/3e04537c9c92d9b9e3a7c321127f61d3.png"]]],["열화상|써멀|thermal",[[804,"매트리스 5T","열화상·야간 점검","https://ecimg.cafe24img.com/pg724b63244550007/dronebox2/web/product/medium/20261109/ecf053029d8f911b4f6c05bf2399aa01.jpg"],[514,"매트리스 4T","열화상·수색","https://ecimg.cafe24img.com/pg724b63244550007/dronebox2/web/product/medium/20250109/83750dd73e4c4a85f17c7bfb652fa9be.jpg"],[535,"4TD SP Plus+","독3용 열화상 · RC Plus 2","https://ecimg.cafe24img.com/pg724b63244550007/dronebox2/web/product/medium/20250305/96b14ab0fc986ae7b254572fb1786af1.jpg"],[815,"4TD SP PLUS","독3용 열화상","https://ecimg.cafe24img.com/pg724b63244550007/dronebox2/web/product/medium/20261110/a1bdfacc28f44532704020f7f1c4d153.jpg"],[308,"매빅3 엔터프라이즈 3T","소형 열화상","https://ecimg.cafe24img.com/pg724b63244550007/dronebox2/web/product/medium/20240329/5b44027d735c84aff8b397e554ca1c0b.jpg"]]],["플라이카트|flycart",[[507,"플라이카트 30","물류 운송 드론","https://ecimg.cafe24img.com/pg724b63244550007/dronebox2/web/product/medium/20241209/e05abd1178a8d5447640c2ccdfbb823b.jpg"]]],["매트리스|matrice|산업용|엔터프라이즈|enterprise",[[804,"매트리스 5T","열화상·야간 점검","https://ecimg.cafe24img.com/pg724b63244550007/dronebox2/web/product/medium/20261109/ecf053029d8f911b4f6c05bf2399aa01.jpg"],[797,"매트리스 5TD 콤보","독4용 열화상","https://ecimg.cafe24img.com/pg724b63244550007/dronebox2/web/product/medium/20261026/325fb385510dac8ff8e23a1589a4dfce.jpg"],[514,"매트리스 4T","열화상·수색","https://ecimg.cafe24img.com/pg724b63244550007/dronebox2/web/product/medium/20250109/83750dd73e4c4a85f17c7bfb652fa9be.jpg"],[513,"매트리스 4E","측량·매핑","https://ecimg.cafe24img.com/pg724b63244550007/dronebox2/web/product/medium/20250109/183db01965987b537fc273e8fb6ee5dd.jpg"],[535,"4TD SP Plus+","독3용 열화상 · RC Plus 2","https://ecimg.cafe24img.com/pg724b63244550007/dronebox2/web/product/medium/20250305/96b14ab0fc986ae7b254572fb1786af1.jpg"],[550,"매트리스 400 RTK","대형 플랫폼 · 59분 비행","https://ecimg.cafe24img.com/pg724b63244550007/dronebox2/web/product/medium/20250617/2fc0477f3c9fd74bb7ea7f662752e104.jpg"],[796,"독4","무인 자동 운용 스테이션","https://ecimg.cafe24img.com/pg724b63244550007/dronebox2/web/product/medium/20261026/119c2f08f5c408745883965b18450882.jpg"],[534,"독3 + 4TD 세트","무인 자동 운용","https://ecimg.cafe24img.com/pg724b63244550007/dronebox2/web/product/medium/20250305/f45d025159c1fa41de2f88c589d21c57.jpg"]]]];
  var SS_SKIP = '배터리|프로펠러|케어|care|충전|허브|케이스|스피커|조명|스포트라이트|낙하산|동글|마운트|가드|필터|키트|젠뮤즈|zenmuse|h30|어댑터|스트랩|랜딩|부품|모듈|가방|거치|커버|조종기|rcplus|라이선스|소프트웨어|보험|수리|중고|교육';
  function kw() {
    var m = location.search.match(/[?&]keyword=([^&]*)/); if (!m) return '';
    try { return decodeURIComponent(m[1].replace(/\+/g, ' ')); } catch (e) { return ''; }
  }
  function run() {
    if (document.querySelector('.bd-ss')) return;
    var k = kw().toLowerCase().replace(/\s+/g, '');
    if (!k || new RegExp(SS_SKIP).test(k)) return;
    var r = SS_RULES.filter(function (x) { return new RegExp(x[0]).test(k); })[0];
    if (!r) return;
    var list = document.querySelector('.xans-search-result ul.prdList, ul.prdList');
    var rec = document.querySelector('p.record');
    var at = list || (rec && (rec.closest('.searchResult') || rec.parentNode));
    if (!at || !at.parentNode) return;
    var mob = /^m\./.test(location.hostname) || window.innerWidth < 768;
    if (!document.getElementById('bd-ss-css')) {
      var c = document.createElement('style'); c.id = 'bd-ss-css';
      c.textContent = '.bd-ss{clear:both;margin:14px 0 18px;padding:14px 16px 12px;border:1px solid #191F28;background:#fff;text-align:left;box-sizing:border-box}' +
        '.bd-ss h3{margin:0 0 10px;font-size:16px;font-weight:700;color:#191F28;line-height:1.3}.bd-ss h3 small{font-size:12.5px;font-weight:400;color:#6B7684;margin-left:8px}' +
        '.bd-ss .r{display:flex;gap:10px;overflow-x:auto;-webkit-overflow-scrolling:touch;padding-bottom:4px}' +
        '.bd-ss a{flex:0 0 150px;display:block;border:1px solid #E5E8EB;padding:8px;text-decoration:none;color:#191F28!important;background:#fff;box-sizing:border-box}' +
        '.bd-ss a:hover{border-color:#191F28}.bd-ss img{display:block;width:100%;height:120px;object-fit:contain;background:#F7F8FA;margin-bottom:6px}' +
        '.bd-ss b{display:block;font-size:13.5px;line-height:1.35}.bd-ss span{display:block;font-size:12px;color:#6B7684;margin-top:2px}' +
        '.bd-ss.mo{margin:10px 12px 14px;padding:12px 12px 10px}.bd-ss.mo a{flex-basis:128px}.bd-ss.mo img{height:96px}';
      (document.head || document.documentElement).appendChild(c);
    }
    var box = document.createElement('div'); box.className = 'bd-ss' + (mob ? ' mo' : '');
    var h = '<h3>찾으시는 기체<small>검색어에 맞는 기체를 먼저 보여 드려요</small></h3><div class="r">';
    r[1].forEach(function (x) {
      h += '<a href="/product/detail.html?product_no=' + x[0] + '"><img src="' + x[3] + '" alt="' + x[1] + '" loading="lazy"><b>' + x[1] + '</b><span>' + x[2] + '</span></a>';
    });
    box.innerHTML = h + '</div>';
    at.parentNode.insertBefore(box, list ? at : at.nextSibling);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', run); else run();
  setTimeout(run, 1500);
})();

setInterval(function () {
  let tg = document.querySelector('.main_slide');
  tg.style.top = '-100%';
  tg.style.transition = '1s';

  setTimeout(function () {
    let first = tg.querySelectorAll('li')[0];
    tg.appendChild(first);
    tg.style.top = '0';
    tg.style.transition = 'none';
  }, 1000);
}, 3000);

function chgTab(i1, i2) {
  let tm = document.querySelectorAll('.tm > li');
  let tc = document.querySelectorAll('.tc > li');

  tm[i1].classList.add('on');
  tc[i1].classList.add('on');

  tc[i2].classList.remove('on');
  tc[i2].classList.remove('on');
}

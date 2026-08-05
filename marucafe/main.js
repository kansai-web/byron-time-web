// 共通スクリプト（ナビの開閉・スクロール影・フェードイン）
const nav = document.getElementById('nav');
if (nav) addEventListener('scroll', () => nav.classList.toggle('scrolled', scrollY > 10));
const tg = document.getElementById('navToggle'), lk = document.getElementById('navLinks');
if (tg && lk) tg.addEventListener('click', () => { tg.classList.toggle('open'); lk.classList.toggle('open'); });
const io = new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
}), { threshold: .12 });
document.querySelectorAll('.fade').forEach(el => io.observe(el));

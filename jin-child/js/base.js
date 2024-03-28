// logo fadein
window.addEventListener("scroll", function () {
  const elm = document.querySelector(".js-logo-hidden");
  const scroll = window.pageYOffset;
  if (scroll > 800) {
    elm.style.opacity = "1";
    elm.style.visibility = "visible";
  } else {
    elm.style.opacity = "0";
    elm.style.visibility = "hidden";
  }
});

// header display
const header_open = document.querySelector('.header__button');
const header_nav = document.querySelector('.header-nav');
header_open.addEventListener('click', function() {
  header_open.classList.toggle('is-open');
  header_nav.classList.toggle('is-show');
});
document.querySelectorAll('.header-nav__item').forEach(header_link => {
  header_link.addEventListener('click', function (e) {
    header_open.classList.remove('is-open');
    header_nav.classList.remove('is-show');
  });
});

// horizontal scroll
const scroll_wrapper = document.querySelector('.message__wrapper');
const scroll_container = document.querySelector('.message');
const sccroll_inner = document.querySelector('.message__inner');

let mm = gsap.matchMedia();

mm.add("(min-width: 1024px)", () => {
  gsap.to(sccroll_inner, {
    x: () => -(sccroll_inner.clientWidth - scroll_container.clientWidth + window.innerWidth - 800),
    ease: 'none',
    scrollTrigger: {
      trigger: '.message', 
      start: 'top top',
      end: () => { return '+=' + (sccroll_inner.clientWidth - scroll_container.clientWidth + 1000)},
      scrub: 1.1, 
      pin: true,  
      invalidateOnRefresh: true, 
      anticipatePin: 1, 
    },
  });

  ScrollTrigger.create({
    trigger: scroll_wrapper,
    start: 'top 35%',
    end: 'bottom 100%',
    toggleClass: {targets: "body, .know-us-heading, .message__image, .our-characteristics__wrapper", className: "is-inverted"},
    //markers: true,
  });
});

// smooth scroll
const anchorMargin = 100;

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    
    e.preventDefault();
    
    const href = anchor.getAttribute('href');
    
    const target = document.getElementById(href.replace('#', ''));
    
    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - anchorMargin;
    
    window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
    });
  });
});

// blog tab
  // tabs
const latest_tab = document.querySelector('input#latest')
const blog_tab = document.querySelector('input#cat-blog')
const firewood_tab = document.querySelector('input#cat-firewood')
const stove_tab = document.querySelector('input#cat-stove')
  // contents
const latest_content = document.querySelector('.blog-latest')
const blog_content = document.querySelector('.blog-blog')
const firewood_content = document.querySelector('.blog-firewood')
const stove_content = document.querySelector('.blog-stove')

latest_tab.addEventListener('click', function() {
  latest_content.classList.add('is-show');
  blog_content.classList.remove('is-show');
  firewood_content.classList.remove('is-show');
  stove_content.classList.remove('is-show');
});
blog_tab.addEventListener('click', function() {
  latest_content.classList.remove('is-show');
  blog_content.classList.add('is-show');
  firewood_content.classList.remove('is-show');
  stove_content.classList.remove('is-show');
});
firewood_tab.addEventListener('click', function() {
  latest_content.classList.remove('is-show');
  blog_content.classList.remove('is-show');
  firewood_content.classList.add('is-show');
  stove_content.classList.remove('is-show');
});
stove_tab.addEventListener('click', function() {
  latest_content.classList.remove('is-show');
  blog_content.classList.remove('is-show');
  firewood_content.classList.remove('is-show');
  stove_content.classList.add('is-show');
});
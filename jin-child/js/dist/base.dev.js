"use strict";

// logo fadein
window.addEventListener("scroll", function () {
  var elm = document.querySelector(".js-logo-hidden");
  var scroll = window.pageYOffset;

  if (scroll > 800) {
    elm.style.opacity = "1";
    elm.style.visibility = "visible";
  } else {
    elm.style.opacity = "0";
    elm.style.visibility = "hidden";
  }
}); // header display

var header_open = document.querySelector('.header__button');
var header_nav = document.querySelector('.header-nav');
header_open.addEventListener('click', function () {
  header_open.classList.toggle('is-open');
  header_nav.classList.toggle('is-show');
});
document.querySelectorAll('.header-nav__item').forEach(function (header_link) {
  header_link.addEventListener('click', function (e) {
    header_open.classList.remove('is-open');
    header_nav.classList.remove('is-show');
  });
}); // horizontal scroll

var scroll_wrapper = document.querySelector('.message__wrapper');
var scroll_container = document.querySelector('.message');
var sccroll_inner = document.querySelector('.message__inner');
var mm = gsap.matchMedia();
mm.add("(min-width: 1024px)", function () {
  gsap.to(sccroll_inner, {
    x: function x() {
      return -(sccroll_inner.clientWidth - scroll_container.clientWidth + window.innerWidth - 800);
    },
    ease: 'none',
    scrollTrigger: {
      trigger: '.message',
      start: 'top top',
      end: function end() {
        return '+=' + (sccroll_inner.clientWidth - scroll_container.clientWidth + 1000);
      },
      scrub: 1.1,
      pin: true,
      invalidateOnRefresh: true,
      anticipatePin: 1
    }
  });
  ScrollTrigger.create({
    trigger: scroll_wrapper,
    start: 'top 35%',
    end: 'bottom 100%',
    toggleClass: {
      targets: "body, .know-us-heading, .message__image, .our-characteristics__wrapper",
      className: "is-inverted"
    } //markers: true,

  });
}); // smooth scroll

var anchorMargin = 160;
document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    var href = anchor.getAttribute('href');
    var target = document.getElementById(href.replace('#', ''));
    var targetPosition = target.getBoundingClientRect().top + window.pageYOffset - anchorMargin;
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  });
}); // blog tab
// tabs

var latest_tab = document.querySelector('input#latest');
var blog_tab = document.querySelector('input#cat-blog');
var firewood_tab = document.querySelector('input#cat-firewood');
var stove_tab = document.querySelector('input#cat-stove'); // contents

var latest_content = document.querySelector('.blog-latest');
var blog_content = document.querySelector('.blog-blog');
var firewood_content = document.querySelector('.blog-firewood');
var stove_content = document.querySelector('.blog-stove');
latest_tab.addEventListener('click', function () {
  latest_content.classList.add('is-show');
  blog_content.classList.remove('is-show');
  firewood_content.classList.remove('is-show');
  stove_content.classList.remove('is-show');
});
blog_tab.addEventListener('click', function () {
  latest_content.classList.remove('is-show');
  blog_content.classList.add('is-show');
  firewood_content.classList.remove('is-show');
  stove_content.classList.remove('is-show');
});
firewood_tab.addEventListener('click', function () {
  latest_content.classList.remove('is-show');
  blog_content.classList.remove('is-show');
  firewood_content.classList.add('is-show');
  stove_content.classList.remove('is-show');
});
stove_tab.addEventListener('click', function () {
  latest_content.classList.remove('is-show');
  blog_content.classList.remove('is-show');
  firewood_content.classList.remove('is-show');
  stove_content.classList.add('is-show');
});
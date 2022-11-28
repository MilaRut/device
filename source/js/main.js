// Slider

const prev = document.getElementById('btn-prev');
const next = document.getElementById('btn-next');
const slides = document.querySelectorAll('.slider__item');
const dots = document.querySelectorAll('.slider__pagination-dot');

let index = 0;

const activeSlide = n => {
  for (slide of slides) {
    slide.classList.remove('is-active');
  }
  slides[n].classList.add('is-active');
};

const activeDot = n => {
  for (dot of dots) {
    dot.classList.remove('is-active');
  }
  dots[n].classList.add('is-active');
};

const prepareCurrentSlide = ind => {
  activeSlide(index);
  activeDot(index);
};

const nextSlide = () => {
  if (index == slides.length - 1) {
    index = 0;
    prepareCurrentSlide(index);
  } else {
    index++;
    prepareCurrentSlide(index);
  }
};

const prevSlide = () => {
  if (index == 0) {
    index = slides.length - 1;
    prepareCurrentSlide(index);
  } else {
    index--;
    prepareCurrentSlide(index);
  }
};

dots.forEach((item, indexDot) => {
  item.addEventListener('click', () => {
    index = indexDot;
    prepareCurrentSlide(index);
  })
});

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);

//Tabs

const tabsBtn = document.querySelectorAll('.tabs__nav-btn');
const tabsItems = document.querySelectorAll('.tabs__item');

tabsBtn.forEach(function (item) {
  item.addEventListener('click', function () {
    let currentBtn = item;
    let tabId = currentBtn.getAttribute('data-tab');
    let currentTab = document.querySelector(tabId);
    if (!currentBtn.classList.contains('active')) {
      tabsBtn.forEach(function (item) {
        item.classList.remove('active');
      });

      tabsItems.forEach(function (item) {
        item.classList.remove('active');
      });

      currentBtn.classList.add('active');
      currentTab.classList.add('active');
    }
  });
});

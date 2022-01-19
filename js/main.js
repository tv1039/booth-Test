// 페이지 오픈


// const openCard = document.querySelector(".opencard");
// setTimeout(() => openCard.style.display = 'none', 1600);



function random(min, max) {

  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

function floatingObject(selector, delay, size) {
  gsap.to(
    selector, // 선택자
    random(1.5, 2.5), // 애니메이션 동작 시간
    {
      delay: random(0, delay), // 얼마나 늦게 애니메이션을 시작할 것인지 지연 시간을 설정.
      y: size, // `transform: translateY(수치);`와 같음. 수직으로 얼마나 움직일지 설정.
      repeat: -1, // 몇 번 반복하는지를 설정, `-1`은 무한 반복.
      yoyo: true, // 한번 재생된 애니메이션을 다시 뒤로 재생.
      ease: Power1.easeInOut // Easing 함수 적용.
    }
  )
}
floatingObject('.floating1', 1, 15)
floatingObject('.floating2', .5, 10)
floatingObject('.floating3', 1.5, 20)

//클릭 function & iframe src
const
  popupClosebtn = document.querySelector('.pop-close-btn'),
  infoButton = document.querySelector('.info-button'),
  detailButton = document.querySelector('.detail-button'),
  onButton = document.querySelector('.on-button'),
  popupBg = document.querySelector('.popupwrap'),
  infoPopup = popupBg.querySelector('.info-popup'),
  detailPopup = popupBg.querySelector('.detail-popup'),
  popupShowwrap = infoPopup.querySelector('.pop-show-wrap'),
  popupShowbutton = popupShowwrap.querySelectorAll('li'),
  iFrame = document.querySelector('.iframe'),
  Detailpopup = popupBg.querySelector('.detail-popup');



for (let i = 0; i < popupShowbutton.length; i++) {
    const iframeURL = ['mp4/Road.mp4', 'mp4/Seoul.mp4'];

  popupShowbutton[i].addEventListener('click', function () {
    iFrame.classList.add('show-iframe');

    if (i == 0) {
      setTimeout(() => iFrame.src = iframeURL[0], 200);
    } else if (i == 1) {
      setTimeout(() => iFrame.src = iframeURL[0], 200);
    } else if (i == 2) {
      setTimeout(() => iFrame.src = iframeURL[1], 200);
    } else if (i == 3) {
      setTimeout(() => iFrame.src = iframeURL[1], 200);
    } else {

    }
  })
}

const goTosite = () => {
  location.href = "https://www.naver.com"
}

const showPopup01 = () => {
  popupBg.style.display = 'block',
  infoPopup.style.display = 'block',
    popupClosebtn.style.display = 'block',
  setTimeout(() => {
    infoPopup.style.opacity = 1;
  }, 100);
}

detailButton.addEventListener('click', function () {
  popupBg.style.display = 'block',
    popupClosebtn.style.display = 'block',
    detailPopup.style.display = 'block';
  setTimeout(() => {
    detailPopup.style.opacity = 1;
  }, 100);
})



infoButton.addEventListener('click', showPopup01);
onButton.addEventListener('click', goTosite);

popupClosebtn.addEventListener('click', function () {
  popupBg.style.display = 'none',
    popupClosebtn.style.display = 'none',
    infoPopup.style.display = 'none',
    detailPopup.style.display = 'none',
    infoPopup.style.opacity = '0',
    detailPopup.style.opacity = '0',
    iFrame.classList.remove('show-iframe');
    iFrame.src = '';
});
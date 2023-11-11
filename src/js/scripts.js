// Отримайте елемент, на якому відбувається анімація "body-animation"
const bodyAnimationElement = document.querySelector('body');

// Додайте слухача події "animationend" до цього елементу
bodyAnimationElement.addEventListener('animationend', () => {
  // Коли анімація "body-animation" закінчилась, викличте анімацію "padding"

  // Отримайте елементи .line-top і .line-bottom
  const lineTopElement = document.querySelector('.line-top');
  const lineBottomElement = document.querySelector('.line-bottom');

  // Змініть стилі для .line-top та .line-bottom, щоб з'явилися
  lineTopElement.style.borderTop = '4rem solid #fff';
  lineBottomElement.style.borderBottom = '4rem solid #fff';

  // Запустіть анімацію "padding"
  lineTopElement.style.animation = 'padding 3s forwards';
  lineBottomElement.style.animation = 'padding 3s forwards';
});

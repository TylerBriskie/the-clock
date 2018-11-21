import '../styles/index.scss';

const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.minute-hand');
const hourHand = document.querySelector('.hour-hand');

function checkFlicker(ele, deg) {
  if (deg === -90){
    ele.style.transition = 'all 0.0s';
    ele.style.transitionTimingProperty = 'cubic-bezier(0.1, 2.7, 0.58, 1)';

  } else {
    ele.style.transition = 'all 0.15s';
    ele.style.transitionTimingProperty = 'cubic-bezier(0.1, 2.7, 0.58, 1)';
  }
}

function setCurrentTime(){
  let date = new Date();
  let seconds = date.getSeconds();
  let minutes = date.getMinutes();
  let hours = date.getHours();

  const secondsDegrees = ((seconds / 60) * 360) - 90;
  const minutesDegrees = ((minutes / 60) * 360) - 90;
  const hoursDegrees = ((hours / 12) * 360) - 90;

  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

  checkFlicker(secondHand, secondsDegrees);
  checkFlicker(minuteHand, minutesDegrees);
  checkFlicker(hourHand, hoursDegrees);

  console.log(secondsDegrees);
}

setInterval(setCurrentTime, 1000);
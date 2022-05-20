var isMorning = true;
var isDayTime = false;
var isEvening = false;

function greetFriend() {
  if (isMorning === true && isDayTime === false && isEvening === false) {
    return `Good morning, friend!`;
  } else if (isMorning === false && isDayTime === true && isEvening === false) {
    return `Good afternoon, friend!`;
  } else if (isMorning === false && isDayTime === false && isEvening === true) {
    return `Good night, friend!`;
  } else {
    return `Hi friend!`;
  }
}

greetFriend();
console.log("hello")
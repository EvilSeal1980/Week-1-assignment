// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats -

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)

function formatTime(time) {
  return time < 10 ? `0${time}` : `${time}`;
}

function getTimeString() {
  const now = new Date();
  const hours = formatTime(now.getHours());
  const minutes = formatTime(now.getMinutes());
  const seconds = formatTime(now.getSeconds());
  return `${hours}:${minutes}:${seconds}`;
}

function getTimeStringAmPm() {
  const now = new Date();
  const hours = formatTime(now.getHours() > 12 ? now.getHours() - 12 : now.getHours() === 0 ? 12 : now.getHours());
  const minutes = formatTime(now.getMinutes());
  const seconds = formatTime(now.getSeconds());
  const amPm = now.getHours() >= 12 ? "PM" : "AM";
  return `${hours}:${minutes}:${seconds} ${amPm}`;
}

function startClock() {
    setInterval(() => {
        console.log(getTimeString());
        console.log(getTimeStringAmPm());
        console.log("");
    }, 1000);
}

startClock();

chrome.alarms.create("pomodoroTimer", {
  periodInMinutes: 1 / 60,
});

chrome.alarms.onAlarm.addEventListener((alarm) => {
  if (alarm.name === "pomodoroTimer") {
  }
});

chrome.storage.local.get(["timer", "isRunning"], (res) => {
  chrome.storage.local.set({
    timer: "timer" in res ? res.timer : 0,
    isRunning: "isRunning" in res ? res.isRunning : false,
  });
});

const notifications = document.querySelectorAll(".notification");
const markRead = document.querySelector("#mark--read");

markRead.addEventListener("click", function () {
  notifications.forEach(function (notification) {
    notification.setAttribute("read", "true");
  });
});

window.onload = () => {
  "use strict";

  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("./sw.js");
  }

  function setUrl() {
    var dateNow = new Date(Date.now());
    var dateStr =
      dateNow.getFullYear().valueOf() +
      "-" +
      (dateNow.getMonth().valueOf() + 1);

    var url = "https://mirror.www.ahgora.com.br/#/dashboard/" + dateStr;

    document.getElementById("iframe").setAttribute("src", url);
  }

  setUrl();
};

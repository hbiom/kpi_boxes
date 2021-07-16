function animateValue(start, duration) {

  let startTimestamp = null;
  var kpiValue = document.querySelectorAll('span.kpi-value');

  kpiValue.forEach(element=> {
    let end = parseInt(element.innerHTML)
    let steps = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;

      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      element.innerHTML = Math.floor(progress * (end - start) + start);
      console.log(progress * (end - start))

      if (progress < 1) {
        window.requestAnimationFrame(steps);
      }
    };
  window.requestAnimationFrame(steps);
  })
};


window.addEventListener("DOMContentLoaded", function () {
  animateValue(0, 2000)
})

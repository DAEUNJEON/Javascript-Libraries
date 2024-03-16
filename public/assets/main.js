function loadAOS() {
  AOS.init();
}

function loadChart() {
  new Chart(document.getElementById("bar-chart"), {
    type: 'bar',
    data: {
      labels: ["Sofas", "Tables", "Chairs", "Beds", "Cabinets"],
      datasets: [
        {
          label: "Number of Sales",
          backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
          data: [550,420,380,300,280]
        }
      ]
    },
    options: {
      legend: { display: false },
      title: {
        display: true,
        text: 'Best Selling Furniture Products'
      }
    }
  });
}

let tween = gsap.to(".animation", {
  duration: 5, 
  ease: "ease",
  // x: () => nav.offsetWidth, // animate by the px width of the nav
  // x: -100, // offset by the width of the box
  rotation: 360, 
  // x: 300,
  paused: true
});

function loadGSAP(control) {
  switch(control) {
    case 'play':
      tween.play();
      break;
    case 'pause':
      tween.pause();
      break;
    case 'resume':
      tween.resume();
      break;
    case 'reverse':
      tween.reverse();
      break;
    case 'restart':
      tween.restart();
      break;
    default:
      break;
  }
}
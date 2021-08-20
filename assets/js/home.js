'use strict';
(function() {
  const playDataContent = document.querySelector('#play-data');
  const playDataBtn = document.querySelector('.nav-item .play-data-tab');
  const graphContent = document.querySelector('#graph-content');
  const graphBtn = document.querySelector('.nav-item .graph-tab');

  playDataBtn.addEventListener('click', () => {
    graphContent.style.display = 'none';
    graphBtn.classList.remove('active');
    playDataContent.style.display = 'block';
    playDataBtn.classList.add('active');
  });

  graphBtn.addEventListener('click', () => {
    playDataContent.style.display = 'none';
    playDataBtn.classList.remove('active');
    graphContent.style.display = 'block';
    graphBtn.classList.add('active');
  });
})();

//Graphs
new Chart(document.getElementById("bar-chart"), {
  type: 'bar',
  data: {
    labels: [" ", " ", " ", " ", " ", " ", " "],
    datasets: [
      {
        label: "%",
        backgroundColor: ["#8bb8ca3d", "#8bb8ca3d","#8bb8ca3d","#8bb8ca3d","#8bb8ca3d","#8bb8ca3d","#8BB8CA"],
        data: [50, 60, 90, 60, 50, 20, 100],
        borderWidth: 1,
        borderRadius: 14,
      }
    ]
  },
  options: {
    plugins: {
      legend: {display:false,
          labels: {display: false}
      },
  },
    scales: {
      y: {display: false},
    }
  }
});
//Donut Chart
const options = {
  series: [83],
  chart: {
  height: 170,
  type: 'radialBar',
  offsetY: -10
},
plotOptions: {
  radialBar: {
    startAngle: -135,
    endAngle: 135,
    hollow: {
      margin: 5,
      size: '74%',
      background: 'transparent',
      image: undefined,
    },
    track: {
      background: '#8bb8ca3d',
      strokeWidth: '20px',
      margin: 5,
    },
    dataLabels: {
      name: {
        fontSize: '0px',
        color: undefined,
        offsetY: 0
      },
      value: {
        offsetY: -16,
        fontSize: '16px',
        color: '#D0D2D6',
        formatter: function (val) {
          return val + "%";
        }
      }
    }
  }
},
colors: ['#F6A704'],
fill: {
  type: 'gradient',
  gradient: {
    shade: 'dark',
    shadeIntensity: 0.15,
    inverseColors: false,
    opacityFrom: 1,
    opacityTo: 1,
    stops: [0, 50, 65, 91]
  },
},
stroke: {
  lineCap: 'round',
  width: 1,
},
};
const chart = new ApexCharts(document.querySelector("#donut-chart"), options);
chart.render();

//Table content
$(document).ready( function () {
  $('#summary-table').DataTable({
    language: {
      paginate: {
        next: '<i class="fas fa-chevron-right"></i>',
        previous: '<i class="fas fa-chevron-left"></i>'  
      }
    }
  });
} );

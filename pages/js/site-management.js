'use strict';

// Dragable elements
GridStack.init({
  resizable: {
    handles: 'none'
  }
});


// Line chart
let lineChart;

$(document).ready(() => {
    let line = $('#line_chart');

    lineChart = new Chart(line, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept'],
            datasets: [{
                label: 'Ferrari',
                data: getArrayWithRandomNumbers(10),
                borderColor: 'rgba(255, 193, 7, 1)',
                backgroundColor: 'rgba(255, 193, 7, 1)',
                tension: 0.2,
                borderWidth: 3
            }, {
                label: 'Louis Vuitton',
                data: getArrayWithRandomNumbers(10),
                borderColor: 'rgba(88, 183, 47, 1)',
                backgroundColor: 'rgba(88, 183, 47, 1)',
                tension: 0.2,
                borderWidth: 3
            }]

        },
        options: {
            elements: {
                point:{
                    radius: 0,
                }
            },
            plugins: {
                legend: {
                    labels: {
                        usePointStyle: true,
                        boxWidth: 10,
                        color: 'white',
                    }
                },
            },

            scales: {
                y: {
                    display: true,

                    grid: {
                      display:false 
                    },
                    title: {

                    },
                    ticks: {
                      fontSize: 16,
                      color: 'white'
                    }
                },
                x: {
                    grid: {
                      display:false
                      
                    },
                    title: {

                    },
                    ticks: {
                      fontSize: 16,
                      color: 'white'
                    }
                },
            },
        },
    });
});

function getArrayWithRandomNumbers(length) {
    for (var a=[], i = 0; i < length; ++i) a[i]=i;

    function shuffle(array) {
        var tmp, current, top = array.length;
        if(top) while(--top) {
            current = Math.floor(Math.random() * (top + 1));
            tmp = array[current];
            array[current] = array[top];
            array[top] = tmp;
        }
        return array;
    }
    return shuffle(a);
};

// Pie Chart
const pieChart = document.querySelector('#pie_chart');
new Chart(pieChart, {
  type: 'pie',
  data: {
    labels: ["Europe","North America"],
    datasets: [{
      label: "Population (millions)",
      backgroundColor: ["#8e5ea2","#3cba9f"],
      data: [2473,1260]
    }]
  },
  options: {
    responsive: false,
    layout: {
      padding: 0
    },
    plugins: {
      legend: {
        labels: {
          usePointStyle: true,
          boxWidth: 10,
          color: 'white'
      },
        position: 'left',
      },
    },
    title: {
      display: false,
    }

  }
});


//Tables
$(document).ready( function () {

  // Table 1
  $('#widget-1-table').DataTable({
    language: {
      paginate: {
        next: '<i class="fas fa-chevron-right"></i>',
        previous: '<i class="fas fa-chevron-left"></i>'  
      }
    }
  });

  // Table 2
  $('#widget-2-table').DataTable({
    language: {
      paginate: {
        next: '<i class="fas fa-chevron-right"></i>',
        previous: '<i class="fas fa-chevron-left"></i>'  
      }
    }
  });

});

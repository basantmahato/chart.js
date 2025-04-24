//// Year ranges


// Get the context of the canvas element
var ctx = document.getElementById('range2008').getContext('2d');


var range2008 = new Chart(ctx, {
  type: 'bar',  
  data: {
    labels: ['2008', '2009', '2010', '2011', '2012'],  // X-axis labels
    datasets: [{
      label: 'Iphone Users Worldwide ',
      data: [10, 25, 60, 115, 206],  // Y-axis data points
      borderColor: 'rgba(75, 192, 192, 100)',
      backgroundColor: ['#8baf91', '#fffff'],
      borderWidth: 1,
      fill: true  
    }]
  },
  options: {
    responsive: false,
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});


// Get the context of the canvas element
var ctx = document.getElementById('range2013').getContext('2d');

var range2013 = new Chart(ctx, {
  type: 'bar',  
  data: {
    labels: ['2013','2014','2015','2016'],  // X-axis labels
    datasets: [{
      label: 'Iphone Users Worldwide ',
      data: [ 329,442,569,710,],  // Y-axis data points
      borderColor: 'rgba(75, 192, 192, 100)',
      backgroundColor: ['#8baf91', '#fffff'],
      borderWidth: 1,
      fill: true  
    }]
  },
  options: {
    responsive: false,
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});



//Get the context of the canvas element
var ctx = document.getElementById('range2017').getContext('2d');


var range2017 = new Chart(ctx, {
  type: 'bar',  
  data: {
    labels: ['2017','2018','2019','2020'],  // X-axis labels
    datasets: [{
      label: 'Iphone Users Worldwide ',
      data: [814,888,948,1042],  // Y-axis data points
      borderColor: 'rgba(75, 192, 192, 100)',
      backgroundColor: ['#8baf91', '#fffff'],
      borderWidth: 1,
      fill: true  
    }]
  },
  options: {
    responsive: false,
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});







// Get the context of the canvas element
var ctx = document.getElementById('range2021').getContext('2d');


var range2021 = new Chart(ctx, {
  type: 'bar',  
  data: {
    labels: ['2021','2022','2023'],  // X-axis labels
    datasets: [{
      label: 'Iphone Users Worldwide ',
      data: [1231,1334,1382],  // Y-axis data points
      borderColor: 'rgba(75, 192, 192, 100)',
      backgroundColor: ['#8baf91', '#fffff'],
      borderWidth: 1,
      fill: true  
    }]
  },
  options: {
    responsive: false,
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});





////



// Get the context of the canvas element
var ctx = document.getElementById('myChart').getContext('2d');


var myChart = new Chart(ctx, {
  type: 'bar',  
  data: {
    labels: ['2008', '2009', '2010', '2011', '2012', '2013','2014','2015','2016','2017','2018','2019','2020','2021','2022','2023'],  // X-axis labels
    datasets: [{
      label: 'Iphone Users Worldwide ',
      data: [10, 25, 60, 115, 206, 329,442,569,710,814,888,948,1042,1231,1334,1382],  // Y-axis data points
      borderColor: 'rgba(75, 192, 192, 100)',
      backgroundColor: ['#8baf91', '#fffff'],
      borderWidth: 1,
      fill: true  
    }]
  },
  options: {
    responsive: false,
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});


var ctx = document.getElementById('myChart2').getContext('2d');
var myChart2 = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ['2008', '2009', '2010', '2011', '2012', '2013','2014','2015','2016','2017','2018','2019','2020','2021','2022','2023'],
    datasets: [{
      label: 'iPhone Users Worldwide',
      data: [10, 25, 60, 115, 206, 329,442,569,710,814,888,948,1042,1231,1334,1382],
      borderColor: 'rgba(75, 192, 192, 1)',
      backgroundColor: [
        '#8baf91', '#a3d2ca', '#5eaaa8', '#056676',
        '#b8b5ff', '#7868e6', '#edeef7', '#f5f5f5',
        '#ffcbcb', '#dab6fc', '#e4bad4', '#ffdac1',
        '#b5ead7', '#c7ceea', '#f3ffe3', '#ffb5a7'
      ],
      borderWidth: 1
    }]
  },
  options: {
    responsive: false
  }
});



var ctx = document.getElementById('myChart3').getContext('2d');
var myChart3 = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['2008', '2009', '2010', '2011', '2012', '2013','2014','2015','2016','2017','2018','2019','2020','2021','2022','2023'],
    datasets: [{
      label: 'iPhone Users Worldwide',
      data: [10, 25, 60, 115, 206, 329,442,569,710,814,888,948,1042,1231,1334,1382],
      borderColor: 'rgba(75, 192, 192, 1)',
      backgroundColor: [
        '#8baf91', '#a3d2ca', '#5eaaa8', '#056676',
        '#b8b5ff', '#7868e6', '#edeef7', '#f5f5f5',
        '#ffcbcb', '#dab6fc', '#e4bad4', '#ffdac1',
        '#b5ead7', '#c7ceea', '#f3ffe3', '#ffb5a7'
      ],
      borderWidth: 1
    }]
  },
  options: {
    responsive: false
  }
});





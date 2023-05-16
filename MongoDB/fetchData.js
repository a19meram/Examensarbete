var myChart, myChart2;
function getData() {
    var county = $("#county").val();
    var iterations = 5000;
    var totalElapsedTime = 0;
  var iterationCount = 0;
  var warmUpIteration = 10; 
    var timeData = '';

    function sendRequest() {
        var start = Date.now();
        $.ajax({
            url: 'Mongo_DB_Connection.php',
            type: 'GET',
            dataType: 'json',
            data: { county: county },
            success: function (data) {
             $("#lan-rubrik").html("Data för: " + county);
                $("#lan-rubrik2").html("Data för: " + county);
                togellfun(data);
                var end = Date.now();
                var elapsedTime = end - start;
                if (iterationCount >= warmUpIteration) { 
                    totalElapsedTime += elapsedTime;
                    timeData += elapsedTime + "\n";
                    console.log("Iteration " + (iterationCount - warmUpIteration + 1) + ": " + elapsedTime + " ms"); 
                }
                iterationCount++; 

                if (iterationCount < iterations + warmUpIteration) { 
                    sendRequest();
                } else {
                    console.log("All Total iterations: " + (iterationCount - warmUpIteration)); 
                    download("timeDataMongoDB.txt", timeData);
                }
            }
        });
    }
    sendRequest();

    function download(filename, text) {
        var element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
        element.setAttribute('download', filename);

        element.style.display = 'none';
        document.body.appendChild(element);

        element.click();

        document.body.removeChild(element);
    }
}

function togellfun(data) {
    var chartType = $('select[name=chartType]').val();
    if (chartType == 'stapel') {
        $('#myDiv2').hide();
        $('#myDiv').show();
        $('#lan-rubrik').show();
    } else if (chartType == 'piechart') {
        $('#myDiv').hide();
        $('#myDiv2').show();
        $('#lan-rubrik2').show();
    }
    generateChart(data);
    generateChart2(data);

}

function generateChart(data) {
    if (myChart) {
        myChart.destroy();
    }
    var years = [];
    var debtTypes = [];
    var debts = [];

    for (var i = 0; i < data.length; i++) {
        if (!years.includes(data[i].Year)) {
            years.push(data[i].Year);
        }
        if (!debtTypes.includes(data[i].debtType)) {
            debtTypes.push(data[i].debtType);
        }
    }

    // Define an array of colors for the debt types
    var colors = ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)'];
    for (var i = 0; i < years.length; i++) {
        var yearData = [];
        for (var j = 0; j < debtTypes.length; j++) {
            var sum = 0;
            for (var k = 0; k < data.length; k++) {
                if (data[k].Year == years[i] && data[k].debtType == debtTypes[j]) {
                    sum += parseInt(data[k].Amount);
                }
            }
            yearData.push(sum);
        }
        debts.push(yearData);
    }

    var ctx = document.getElementById("myChart");
    myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: debtTypes,
            datasets: []
        },
        options: {
            title: {
                display: true,
                text: 'Skulder'
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        color: 'white'
                    }
                }
            },
            legend: {
                display: true
            }
        }
    });
    for (var i = 0; i < years.length; i++) {
        var datasets = {
            label: years[i],
            backgroundColor: [],
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 0.2,
            hoverBackgroundColor: [],
            hoverBorderColor: 'rgba(255, 99, 132, 1)',
            data: debts[i]
        };
        for (var j = 0; j < debtTypes.length; j++) {
            // Use the corresponding color for each debt type
            datasets.backgroundColor.push(colors[j]);
            datasets.hoverBackgroundColor.push(colors[j].replace('0.2', '0.4'));
        }
        myChart.data.datasets.push(datasets);
    }
    myChart.update();
}
function generateChart2(data) {
      if (myChart2) {
    myChart2.destroy(); 
  }

  var years = [];
  var debtTypes = [];
  var debts = [];

  for (var i = 0; i < data.length; i++) {
    if (!years.includes(data[i].Year)) {
      years.push(data[i].Year);
    }
    if (!debtTypes.includes(data[i].debtType)) {
      debtTypes.push(data[i].debtType);
    }
  }

  // Define an array of colors for the debt types
  var colors = ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)'];
  for (var i = 0; i < years.length; i++) {
    var yearData = [];
    for (var j = 0; j < debtTypes.length; j++) {
      var sum = 0;
      for (var k = 0; k < data.length; k++) {
        if (data[k].Year == years[i] && data[k].debtType == debtTypes[j]) {
          sum += parseInt(data[k].Amount);
        }
      }
      yearData.push(sum);
    }
    debts.push(yearData);
  }

  var ctx2 = document.getElementById("myChart2");
  myChart2 = new Chart(ctx2, {
    type: 'doughnut', // change chart type to doughnut
    data: {
      labels: debtTypes,
      datasets: []
    },
    options: {
      title: {
        display: true,
        text: 'Skulder'
      },
      legend: {
        display: true
      }
    }
  });

  for (var i = 0; i < years.length; i++) {
    var datasets = {
      label: years[i],
      backgroundColor: [],
      hoverBackgroundColor: [],
      data: debts[i]
    };
    for (var j = 0; j < debtTypes.length; j++) {
      // Use the corresponding color for each debt type
      datasets.backgroundColor.push(colors[j]);
      datasets.hoverBackgroundColor.push(colors[j].replace('0.2', '0.4'));
    }
    myChart2.data.datasets.push(datasets);
  }



  myChart2.update();
}
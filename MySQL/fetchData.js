function getData() {
    var county = $("#county").val();
    var iterations = 0;
    var totalElapsedTime = 0;
    var iterationCount = 0;
    var timeData = '';

    function sendRequest() {
        var start = Date.now();
        $.ajax({
            url: "Mysql_DB_Connection.php?county=" + county,
            dataType: "json",
            success: function (data) {
                $("#lan-rubrik").html("Data för: " + county);
                $("#myDiv").css("display", "block");

                var end = Date.now();
                var elapsedTime = end - start;
                totalElapsedTime += elapsedTime;
                iterationCount++;
                timeData += elapsedTime + "\n";


                console.log("Iteration " + iterationCount + ": " + elapsedTime + " ms");


                if (iterationCount < iterations) {
                    sendRequest();
                } else {
                    console.log("All Total iterations: " + iterationCount);
                    download("timeDataMySQL.txt", timeData);
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

function generateChart(data) {

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
}